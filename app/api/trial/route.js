import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, email, entity } = await request.json();

    if (!name || !email || !entity) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const supabaseUrl = process.env.BAYU_SUPABASE_URL;
    const supabaseKey = process.env.BAYU_SUPABASE_SERVICE_ROLE_KEY || process.env.BAYU_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.warn('Trial system offline: Supabase env not configured');
      return NextResponse.json({ error: 'License server offline' }, { status: 503 });
    }

    const domain = email.split('@')[1] || 'unknown.com';

    // Headers for Supabase REST API
    const supabaseHeaders = {
      'apikey': supabaseKey,
      'Authorization': `Bearer ${supabaseKey}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=representation'
    };

    let orgId = null;

    // A. Check if organization exists
    try {
      const orgCheckUrl = `${supabaseUrl}/rest/v1/organizations?primary_domain=eq.${domain}`;
      const orgCheckResp = await fetch(orgCheckUrl, {
        method: 'GET',
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`
        }
      });

      if (orgCheckResp.ok) {
        const orgs = await orgCheckResp.json();
        if (orgs && orgs.length > 0) {
          orgId = orgs[0].id;
        }
      }
    } catch (e) {
      console.error('Failed to query organization:', e);
    }

    // B. Create organization if not exists
    if (!orgId) {
      try {
        const createOrgUrl = `${supabaseUrl}/rest/v1/organizations`;
        const createOrgResp = await fetch(createOrgUrl, {
          method: 'POST',
          headers: supabaseHeaders,
          body: JSON.stringify({
            name: entity,
            primary_domain: domain,
            contact_email: email
          })
        });

        if (createOrgResp.ok) {
          const newOrgs = await createOrgResp.json();
          if (newOrgs && newOrgs.length > 0) {
            orgId = newOrgs[0].id;
          }
        } else {
          console.error('Failed to create organization:', await createOrgResp.text());
        }
      } catch (e) {
        console.error('Error creating organization:', e);
      }
    }

    // fallback to default org if needed
    if (!orgId) {
      orgId = '00000000-0000-0000-0000-000000000000';
    }

    let leadId = null;

    // C. Create lead
    try {
      const createLeadUrl = `${supabaseUrl}/rest/v1/leads`;
      const createLeadResp = await fetch(createLeadUrl, {
        method: 'POST',
        headers: supabaseHeaders,
        body: JSON.stringify({
          org_id: orgId,
          company_name: entity,
          company_domain: domain,
          lead_status: 'discovered',
          metadata: {
            contact_name: name,
            email: email,
            source: 'website_trial_generator'
          },
          raw_markdown_profile: `### Evaluation License Lead\n\n- **Contact Name:** ${name}\n- **Email:** ${email}\n- **Entity:** ${entity}`
        })
      });

      if (createLeadResp.ok) {
        const leads = await createLeadResp.json();
        if (leads && leads.length > 0) {
          leadId = leads[0].id;
        }
      } else {
        console.error('Failed to create lead in database:', await createLeadResp.text());
      }
    } catch (e) {
      console.error('Error creating lead:', e);
    }

    // D. Generate 30-day trial token
    const randStr = Math.random().toString(36).substring(2, 10).toUpperCase();
    const trialToken = `CAHAYA-30D-${randStr}`;

    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 30);

    // E. Insert trial row
    try {
      const createTrialUrl = `${supabaseUrl}/rest/v1/trials`;
      const createTrialResp = await fetch(createTrialUrl, {
        method: 'POST',
        headers: supabaseHeaders,
        body: JSON.stringify({
          org_id: orgId,
          lead_id: leadId,
          product: 'cahaya',
          trial_token: trialToken,
          deployment_type: 'local',
          start_date: new Date().toISOString(),
          expiry_date: expiryDate.toISOString(),
          status: 'active'
        })
      });

      if (!createTrialResp.ok) {
        const errText = await createTrialResp.text();
        console.error('Failed to insert trial token:', errText);
        return NextResponse.json({ error: 'Failed to register license token', details: errText }, { status: 502 });
      }

      // Log in telemetry table as well
      try {
        await fetch(`${supabaseUrl}/rest/v1/telemetry_log`, {
          method: 'POST',
          headers: supabaseHeaders,
          body: JSON.stringify({
            action: 'generate_cahaya_trial',
            domain: 'website',
            metadata: {
              email,
              entity,
              token: trialToken
            }
          })
        });
      } catch (e) {
        console.warn('Failed to log telemetry for trial:', e);
      }

      return NextResponse.json({ success: true, token: trialToken });
    } catch (e) {
      console.error('Error creating trial record:', e);
      return NextResponse.json({ error: 'Failed to record trial' }, { status: 500 });
    }
  } catch (error) {
    console.error('Error in trial API route:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
