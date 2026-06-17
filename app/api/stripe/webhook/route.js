// /api/stripe/webhook/route.js — Stripe webhook handler
// Processes checkout.session.completed events to create full licenses

import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { getSupabaseAdmin } from '@/lib/supabase';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-12-18.acacia',
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(request) {
  try {
    const body = await request.text();
    const sig = request.headers.get('stripe-signature');

    if (!endpointSecret) {
      console.warn('Stripe webhook secret not configured');
      return NextResponse.json({ error: 'Webhook not configured' }, { status: 503 });
    }

    let event;
    try {
      event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
    } catch (err) {
      console.error('Webhook signature verification failed:', err.message);
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      const { tier, entity, email, product } = session.metadata || {};

      // Record the payment
      await supabase.from('payments').insert({
        stripe_session_id: session.id,
        stripe_payment_intent: session.payment_intent,
        stripe_payment_id: session.payment_intent,
        tier: tier || 'unknown',
        product: product || 'cahaya',
        amount_cents: session.amount_total,
        amount_usd: (session.amount_total || 0) / 100,
        currency: session.currency,
        method: 'stripe',
        status: 'confirmed',
        customer_email: session.customer_email || email,
        paid_at: new Date().toISOString(),
        metadata: {
          entity,
          payment_status: session.payment_status,
          confirmed_at: new Date().toISOString(),
        },
      });

      // Generate a full license token (1 year)
      const randStr = Math.random().toString(36).substring(2, 10).toUpperCase();
      const licenseToken = `CAHAYA-${tier?.toUpperCase()?.slice(0, 3) || 'PRO'}-${randStr}`;
      const expiryDate = new Date();
      expiryDate.setFullYear(expiryDate.getFullYear() + 1);

      // Find or create org
      let orgId = null;
      const domain = (email || '').split('@')[1] || 'unknown.com';

      const { data: existingOrgs } = await supabase
        .from('organizations')
        .select('id')
        .eq('primary_domain', domain)
        .limit(1);

      if (existingOrgs && existingOrgs.length > 0) {
        orgId = existingOrgs[0].id;
      } else {
        const { data: newOrg } = await supabase
          .from('organizations')
          .insert({
            name: entity || domain,
            primary_domain: domain,
            contact_email: email,
          })
          .select('id')
          .single();
        orgId = newOrg?.id;
      }

      // Create the license trial record (status: 'licensed')
      await supabase.from('trials').insert({
        org_id: orgId,
        product: product || 'cahaya',
        trial_token: licenseToken,
        deployment_type: 'local',
        start_date: new Date().toISOString(),
        expiry_date: expiryDate.toISOString(),
        status: 'licensed',
        metadata: {
          tier,
          stripe_session_id: session.id,
          amount_cents: session.amount_total,
          purchased_at: new Date().toISOString(),
        },
      });

      // Log telemetry
      await supabase.from('telemetry_log').insert({
        action: 'stripe_payment_completed',
        domain: 'website',
        metadata: {
          tier,
          email,
          amount_cents: session.amount_total,
          license_token: licenseToken,
        },
      });

      console.log(`Payment completed: ${tier} license for ${email} — token: ${licenseToken}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Stripe webhook error:', error);
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 });
  }
}
