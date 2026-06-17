import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { action, domain = 'website', computeSeconds = 0, dataVolumeMb = 0, creditsConsumed = 0, metadata = {} } = await request.json();

    if (!action) {
      return NextResponse.json({ error: 'Action is required' }, { status: 400 });
    }

    const supabaseUrl = process.env.BAYU_SUPABASE_URL;
    const supabaseKey = process.env.BAYU_SUPABASE_SERVICE_ROLE_KEY || process.env.BAYU_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.warn('Telemetry bypassed: BAYU Supabase credentials not found in env');
      return NextResponse.json({ success: true, warning: 'Supabase env not configured' });
    }

    // Extract client IP and user agent
    const userAgent = request.headers.get('user-agent') || 'unknown';
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '127.0.0.1';

    const enrichedMetadata = {
      ...metadata,
      userAgent,
      ip: ip.split(',')[0].trim() // Extract primary IP
    };

    const supabaseHeaders = {
      'apikey': supabaseKey,
      'Authorization': `Bearer ${supabaseKey}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=representation'
    };

    const insertUrl = `${supabaseUrl}/rest/v1/telemetry_log`;
    const response = await fetch(insertUrl, {
      method: 'POST',
      headers: supabaseHeaders,
      body: JSON.stringify({
        action,
        domain,
        compute_seconds: computeSeconds,
        data_volume_mb: dataVolumeMb,
        credits_consumed: creditsConsumed,
        metadata: enrichedMetadata
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('Failed to log telemetry event to Supabase:', errText);
      return NextResponse.json({ error: 'Failed to record event', details: errText }, { status: 502 });
    }

    const result = await response.json();
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error('Error in telemetry API route:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
