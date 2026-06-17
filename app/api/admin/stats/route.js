// /api/admin/stats/route.js — Aggregated dashboard statistics
import { NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase';

export async function GET(request) {
  try {
    const supabase = getSupabaseAdmin();

    // Fetch all stats in parallel
    const [
      orgsResult,
      leadsResult,
      trialsResult,
      telemetryResult,
      chatResult,
      paymentsResult,
    ] = await Promise.all([
      supabase.from('organizations').select('id', { count: 'exact', head: true }),
      supabase.from('leads').select('id, lead_status', { count: 'exact' }),
      supabase.from('trials').select('id, status, product, start_date, expiry_date'),
      supabase.from('telemetry_log').select('id, action, domain, created_at').order('created_at', { ascending: false }).limit(100),
      supabase.from('chat_sessions').select('id, source, message_count, first_message_at, last_message_at').order('last_message_at', { ascending: false }).limit(50),
      supabase.from('payments').select('id, tier, amount_cents, amount_usd, status, created_at, method').order('created_at', { ascending: false }).limit(50),
    ]);

    // Trial status breakdown
    const trials = trialsResult.data || [];
    const trialsByStatus = trials.reduce((acc, t) => {
      acc[t.status] = (acc[t.status] || 0) + 1;
      return acc;
    }, {});

    // Lead status breakdown
    const leads = leadsResult.data || [];
    const leadsByStatus = leads.reduce((acc, l) => {
      acc[l.lead_status] = (acc[l.lead_status] || 0) + 1;
      return acc;
    }, {});

    // Telemetry action breakdown
    const telemetry = telemetryResult.data || [];
    const telemetryByAction = telemetry.reduce((acc, t) => {
      acc[t.action] = (acc[t.action] || 0) + 1;
      return acc;
    }, {});

    // Download count (from telemetry)
    const downloadEvents = telemetry.filter((t) =>
      ['download_cahaya', 'download_dmg', 'download_exe', 'download_appimage'].includes(t.action)
    );

    // Payment stats
    const payments = paymentsResult.data || [];
    const completedPayments = payments.filter((p) => p.status === 'confirmed');
    const totalRevenue = completedPayments.reduce((sum, p) => sum + (p.amount_usd || (p.amount_cents || 0) / 100), 0);

    return NextResponse.json({
      overview: {
        total_organizations: orgsResult.count || 0,
        total_leads: leads.length,
        total_trials: trials.length,
        total_chat_sessions: (chatResult.data || []).length,
        total_downloads: downloadEvents.length,
        total_revenue_cents: totalRevenue,
      },
      trials: {
        by_status: trialsByStatus,
        recent: trials.slice(0, 20),
      },
      leads: {
        by_status: leadsByStatus,
      },
      telemetry: {
        by_action: telemetryByAction,
        recent: telemetry.slice(0, 30),
      },
      chat_sessions: {
        recent: (chatResult.data || []).slice(0, 20),
      },
      payments: {
        recent: payments.slice(0, 20),
        completed_count: completedPayments.length,
        total_revenue_usd: totalRevenue.toFixed(2),
      },
    });
  } catch (error) {
    console.error('Admin stats error:', error);
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 });
  }
}
