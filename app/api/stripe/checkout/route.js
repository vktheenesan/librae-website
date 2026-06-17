// /api/stripe/checkout/route.js — Stripe payment for CAHAYA licenses
// Handles checkout session creation for all license tiers

import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { getSupabaseAdmin } from '@/lib/supabase';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-12-18.acacia',
});

// License tier pricing (in cents USD)
const TIER_PRICING = {
  professional: {
    name: 'CAHAYA Professional',
    description: '1-3 domain packs, annual license per seat',
    price: 500000, // $5,000
    mode: 'payment',
  },
  enterprise: {
    name: 'CAHAYA Enterprise',
    description: 'All 10 domains, annual license per seat',
    price: 1800000, // $18,000
    mode: 'payment',
  },
  enterprise_org: {
    name: 'CAHAYA Enterprise Org License',
    description: 'All 10 domains, full organization license (up to 25 seats)',
    price: 7500000, // $75,000
    mode: 'payment',
  },
  // Add-ons
  addon_cross_industry: {
    name: 'Cross-Industry Extension Pack',
    description: 'Unlock all domain packs on a Professional license',
    price: 450000, // $4,500
    mode: 'payment',
  },
  addon_regulatory: {
    name: 'Bespoke Regulatory Pack',
    description: 'Custom regulatory compliance module',
    price: 1000000, // $10,000
    mode: 'payment',
  },
  // Report per-use
  report_standard: {
    name: 'Standard Spatial Report',
    description: 'AI-generated GIS analysis report with data provenance',
    price: 499, // $4.99
    mode: 'payment',
  },
  report_forensic: {
    name: 'Forensic Spatial Report',
    description: 'Enterprise-grade forensic report with blockchain seal',
    price: 2499, // $24.99
    mode: 'payment',
  },
};

export async function POST(request) {
  try {
    const { tier, email, entity, success_url, cancel_url } = await request.json();

    if (!tier || !TIER_PRICING[tier]) {
      return NextResponse.json(
        { error: 'Invalid license tier', available_tiers: Object.keys(TIER_PRICING) },
        { status: 400 }
      );
    }

    if (!process.env.STRIPE_SECRET_KEY) {
      console.warn('Stripe not configured — STRIPE_SECRET_KEY missing');
      return NextResponse.json(
        { error: 'Payment system offline. Contact theenesanvk@librae.work directly.' },
        { status: 503 }
      );
    }

    const tierInfo = TIER_PRICING[tier];
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://librae.work';

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: tierInfo.mode,
      customer_email: email || undefined,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: tierInfo.name,
              description: tierInfo.description,
              metadata: { tier, entity: entity || '' },
            },
            unit_amount: tierInfo.price,
          },
          quantity: 1,
        },
      ],
      metadata: {
        tier,
        entity: entity || '',
        email: email || '',
        product: 'cahaya',
      },
      success_url: success_url || `${baseUrl}/cahaya?payment=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancel_url || `${baseUrl}/cahaya?payment=cancelled`,
    });

    // Log the checkout initiation
    try {
      const supabase = getSupabaseAdmin();
      await supabase.from('telemetry_log').insert({
        action: 'stripe_checkout_initiated',
        domain: 'website',
        metadata: {
          tier,
          email,
          entity,
          amount_cents: tierInfo.price,
          stripe_session_id: session.id,
        },
      });
    } catch (e) {
      console.warn('Failed to log checkout telemetry:', e);
    }

    return NextResponse.json({
      checkout_url: session.url,
      session_id: session.id,
    });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}

// GET endpoint to verify payment status
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('session_id');

    if (!sessionId) {
      return NextResponse.json({ error: 'session_id required' }, { status: 400 });
    }

    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json({ error: 'Payment system offline' }, { status: 503 });
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    return NextResponse.json({
      status: session.payment_status,
      customer_email: session.customer_email,
      tier: session.metadata?.tier,
      amount: session.amount_total,
      currency: session.currency,
    });
  } catch (error) {
    console.error('Payment verification error:', error);
    return NextResponse.json({ error: 'Failed to verify payment' }, { status: 500 });
  }
}
