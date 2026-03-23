import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { entity, interest, region, message } = await request.json();

    if (!entity || !interest || !region || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Librae Portal <onboarding@resend.dev>', // This is the default resend testing email. For production, the user must verify their domain and use something like no-reply@librae.work
      to: ['theenesanvk@librae.work', 'vktheenesan@librae.work'],
      subject: `New Inquiry via Librae Portal: ${entity} - ${interest}`,
      html: `
        <div style="font-family: monospace; background-color: #000A1A; color: #E0E2E5; padding: 40px;">
          <h2 style="color: #D4AF37; text-transform: uppercase;">Librae Secure Transmission</h2>
          <hr style="border: 1px solid #2E8B57; margin-bottom: 20px;" />
          <p><strong>Entity:</strong> ${entity}</p>
          <p><strong>Primary Interest:</strong> ${interest}</p>
          <p><strong>Region:</strong> ${region}</p>
          <p><strong>Message:</strong></p>
          <blockquote style="border-left: 3px solid #4A9EFF; padding-left: 15px; color: #A0B0C0;">
            ${message}
          </blockquote>
          <br/>
          <p style="font-size: 10px; color: #607090;">This message was generated from the Librae Environmental Intelligence contact form.</p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
