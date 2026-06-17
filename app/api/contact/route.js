import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, email, entity, interest, region, message } = await request.json();

    if (!name || !email || !entity || !interest || !region || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 1. Send the email notification via Resend
    let emailResult = null;
    let emailError = null;
    try {
      const { data, error } = await resend.emails.send({
        from: 'Librae Portal <onboarding@resend.dev>', // Resend sandbox email
        to: ['theenesanvk@librae.work', 'vktheenesan@librae.work'],
        subject: `New Secure Transmission: ${entity} - ${interest}`,
        html: `
          <div style="font-family: monospace; background-color: #000A1A; color: #E0E2E5; padding: 40px; border: 1px solid #D4AF37;">
            <h2 style="color: #D4AF37; text-transform: uppercase; letter-spacing: 1px;">Librae Secure Transmission</h2>
            <p style="color: #607090; font-size: 11px;">GATEWAY NODE: INBOUND</p>
            <hr style="border: 1px solid rgba(212,175,55,0.2); margin-bottom: 20px;" />
            <p><strong>Contact Name:</strong> ${name}</p>
            <p><strong>Contact Email:</strong> ${email}</p>
            <p><strong>Entity Name:</strong> ${entity}</p>
            <p><strong>Primary Interest:</strong> ${interest}</p>
            <p><strong>Region of Interest:</strong> ${region}</p>
            <p><strong>Message Payload:</strong></p>
            <blockquote style="border-left: 3px solid #D4AF37; padding-left: 15px; color: #A0B0C0; background: rgba(212,175,55,0.02); padding: 15px;">
              ${message.replace(/\n/g, '<br/>')}
            </blockquote>
            <br/>
            <hr style="border: 1px solid rgba(212,175,55,0.1); margin-top: 20px;" />
            <p style="font-size: 10px; color: #607090;">CONFIDENTIALITY NOTICE: This transmission is intended solely for Librae AI Labs. Generated from the secure portal gateway.</p>
          </div>
        `,
      });
      emailResult = data;
      emailError = error;
    } catch (e) {
      console.error('Resend email dispatch failed:', e);
      emailError = e;
    }

    // 2. Sync to BAYU Supabase CRM database if configured
    const supabaseUrl = process.env.BAYU_SUPABASE_URL;
    const supabaseKey = process.env.BAYU_SUPABASE_SERVICE_ROLE_KEY || process.env.BAYU_SUPABASE_ANON_KEY;

    let crmSynced = false;
    let crmError = null;

    if (supabaseUrl && supabaseKey) {
      try {
        const domain = email.split('@')[1] || 'unknown.com';

        // Headers for Supabase REST (Postgrest) API
        const supabaseHeaders = {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        };

        // A. Check if organization exists
        const orgCheckUrl = `${supabaseUrl}/rest/v1/organizations?primary_domain=eq.${domain}`;
        const orgCheckResp = await fetch(orgCheckUrl, {
          method: 'GET',
          headers: {
            'apikey': supabaseKey,
            'Authorization': `Bearer ${supabaseKey}`
          }
        });

        let orgId = null;
        if (orgCheckResp.ok) {
          const orgs = await orgCheckResp.json();
          if (orgs && orgs.length > 0) {
            orgId = orgs[0].id;
          }
        }

        // B. If organization doesn't exist, create it
        if (!orgId) {
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
            console.error('Failed to create organization in CRM:', await createOrgResp.text());
          }
        }

        // C. Insert lead referencing the organization
        if (orgId) {
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
                interest,
                region,
                notes: message,
                source: 'website_inbound_gateway'
              },
              raw_markdown_profile: `### Inbound Website Lead\n\n- **Contact Name:** ${name}\n- **Email:** ${email}\n- **Entity:** ${entity}\n- **Interest:** ${interest}\n- **Region:** ${region}\n- **Message:**\n${message}`
            })
          });

          if (createLeadResp.ok) {
            crmSynced = true;
          } else {
            const errText = await createLeadResp.text();
            console.error('Failed to insert lead into CRM:', errText);
            crmError = `Lead insert error: ${errText}`;
          }
        } else {
          crmError = 'Could not resolve or create organization ID';
        }
      } catch (e) {
        console.error('CRM sync process failed:', e);
        crmError = e.message;
      }
    } else {
      console.warn('CRM Sync bypassed: BAYU Supabase credentials not found in env');
    }

    if (emailError && !crmSynced) {
      return NextResponse.json({ error: 'Failed to process transmission', details: emailError.message || crmError }, { status: 500 });
    }

    return NextResponse.json({ 
      success: true, 
      emailSent: !!emailResult, 
      crmSynced,
      details: crmError ? { crmError } : null
    });
  } catch (error) {
    console.error('Error in contact API route:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
