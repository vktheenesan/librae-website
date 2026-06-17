// /api/admin/trials/route.js — Trial management API
import { NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase';

// GET — List all trials with optional filters
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const product = searchParams.get('product');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '50');

    const supabase = getSupabaseAdmin();

    let query = supabase
      .from('trials')
      .select('*, organizations(name, primary_domain), leads(company_name, metadata)')
      .order('start_date', { ascending: false })
      .range((page - 1) * limit, page * limit - 1);

    if (status) query = query.eq('status', status);
    if (product) query = query.eq('product', product);

    const { data, error, count } = await query;

    if (error) {
      console.error('Trial query error:', error);
      return NextResponse.json({ error: 'Failed to fetch trials' }, { status: 500 });
    }

    return NextResponse.json({
      trials: data || [],
      page,
      limit,
      total: count,
    });
  } catch (error) {
    console.error('Admin trials GET error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// PATCH — Extend or revoke a trial
export async function PATCH(request) {
  try {
    const { trial_id, action, days } = await request.json();

    if (!trial_id || !action) {
      return NextResponse.json(
        { error: 'trial_id and action are required' },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();

    // Fetch current trial
    const { data: trial, error: fetchErr } = await supabase
      .from('trials')
      .select('*')
      .eq('id', trial_id)
      .single();

    if (fetchErr || !trial) {
      return NextResponse.json({ error: 'Trial not found' }, { status: 404 });
    }

    let updateData = {};

    if (action === 'extend') {
      const extendDays = days || 30;
      const currentExpiry = new Date(trial.expiry_date);
      const newExpiry = new Date(currentExpiry);
      newExpiry.setDate(newExpiry.getDate() + extendDays);

      updateData = {
        expiry_date: newExpiry.toISOString(),
        status: 'active',
        metadata: {
          ...trial.metadata,
          extended_at: new Date().toISOString(),
          extended_by_days: extendDays,
        },
      };
    } else if (action === 'revoke') {
      updateData = {
        status: 'revoked',
        metadata: {
          ...trial.metadata,
          revoked_at: new Date().toISOString(),
        },
      };
    } else if (action === 'reactivate') {
      const newExpiry = new Date();
      newExpiry.setDate(newExpiry.getDate() + 30);

      updateData = {
        status: 'active',
        expiry_date: newExpiry.toISOString(),
        metadata: {
          ...trial.metadata,
          reactivated_at: new Date().toISOString(),
        },
      };
    } else {
      return NextResponse.json(
        { error: 'Invalid action. Use: extend, revoke, reactivate' },
        { status: 400 }
      );
    }

    const { data: updated, error: updateErr } = await supabase
      .from('trials')
      .update(updateData)
      .eq('id', trial_id)
      .select()
      .single();

    if (updateErr) {
      console.error('Trial update error:', updateErr);
      return NextResponse.json({ error: 'Failed to update trial' }, { status: 500 });
    }

    // Log admin action in telemetry
    await supabase.from('telemetry_log').insert({
      action: `admin_trial_${action}`,
      domain: 'admin',
      metadata: { trial_id, action, days, updated_trial: updated },
    });

    return NextResponse.json({ success: true, trial: updated });
  } catch (error) {
    console.error('Admin trials PATCH error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
