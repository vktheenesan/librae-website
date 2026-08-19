import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, email, entity, interest, region, message } = await request.json();

    if (!name || !email || !entity || !interest || !region || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    console.log(`[Librae Inbound Lead] From: ${name} (${email}) | Entity: ${entity} | Interest: ${interest} | Region: ${region}`);

    // Optional email notification if Resend API key is present
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import('resend');
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: 'Librae Portal <onboarding@resend.dev>',
          to: ['theenesanvk@librae.work'],
          subject: `Inbound Transmission: ${entity} - ${interest}`,
          text: `Contact: ${name} (${email})\nEntity: ${entity}\nInterest: ${interest}\nRegion: ${region}\n\nMessage:\n${message}`,
        });
      } catch (e) {
        console.warn('Resend optional notification skipped:', e.message);
      }
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Transmission successfully received and queued for architectural review.'
    });
  } catch (error) {
    console.error('Error in contact API route:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
