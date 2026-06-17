// /api/trial/validate/route.js — Token verification endpoint
// CAHAYA desktop client gateway calls this to verify a trial token on startup

import { NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase';

export async function POST(request) {
  try {
    const { token, hardware_hash } = await request.json();

    if (!token) {
      return NextResponse.json(
        { valid: false, error: 'Token is required' },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();

    // Look up the trial token
    const { data: trials, error } = await supabase
      .from('trials')
      .select('*, organizations(name, primary_domain)')
      .eq('trial_token', token)
      .limit(1);

    if (error) {
      console.error('Trial validation DB error:', error);
      return NextResponse.json(
        { valid: false, error: 'License server error' },
        { status: 500 }
      );
    }

    if (!trials || trials.length === 0) {
      return NextResponse.json({
        valid: false,
        status: 'not_found',
        message: 'Token not recognized. Please request a new trial at librae.work/cahaya',
      });
    }

    const trial = trials[0];
    const now = new Date();
    const expiryDate = new Date(trial.expiry_date);
    const daysRemaining = Math.max(0, Math.ceil((expiryDate - now) / (1000 * 60 * 60 * 24)));

    // Check if expired
    if (trial.status === 'expired' || now > expiryDate) {
      // Update status to expired if not already
      if (trial.status !== 'expired') {
        await supabase
          .from('trials')
          .update({ status: 'expired' })
          .eq('id', trial.id);
      }

      return NextResponse.json({
        valid: false,
        status: 'expired',
        expired_at: trial.expiry_date,
        message: 'Trial expired. Contact theenesanvk@librae.work to upgrade to a full license.',
        upgrade_url: 'https://librae.work/cahaya#pricing',
      });
    }

    // Check if revoked
    if (trial.status === 'revoked') {
      return NextResponse.json({
        valid: false,
        status: 'revoked',
        message: 'This trial token has been revoked. Contact support.',
      });
    }

    // Optionally bind hardware hash on first activation
    if (hardware_hash && !trial.hardware_hash) {
      await supabase
        .from('trials')
        .update({
          hardware_hash,
          metadata: {
            ...trial.metadata,
            first_activation_at: now.toISOString(),
            hardware_hash,
          },
        })
        .eq('id', trial.id);
    }

    // Log activation check in telemetry
    await supabase.from('telemetry_log').insert({
      action: 'trial_validation_check',
      domain: 'desktop_client',
      metadata: {
        token,
        hardware_hash: hardware_hash || null,
        days_remaining: daysRemaining,
        status: trial.status,
      },
    });

    return NextResponse.json({
      valid: true,
      status: trial.status,
      product: trial.product,
      deployment_type: trial.deployment_type,
      start_date: trial.start_date,
      expires_at: trial.expiry_date,
      days_remaining: daysRemaining,
      org_name: trial.organizations?.name || null,
      org_domain: trial.organizations?.primary_domain || null,
    });
  } catch (error) {
    console.error('Trial validation error:', error);
    return NextResponse.json(
      { valid: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
