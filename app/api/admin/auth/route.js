// /api/admin/auth/route.js — Simple email whitelist authentication for admin dashboard
import { NextResponse } from 'next/server';

const ADMIN_WHITELIST = ['theenesanvk@librae.work'];

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const isAuthorized = ADMIN_WHITELIST.includes(email.toLowerCase().trim());

    if (!isAuthorized) {
      return NextResponse.json(
        { authorized: false, error: 'Access denied. This email is not on the admin whitelist.' },
        { status: 403 }
      );
    }

    // Generate a simple session token (in production, use proper JWT)
    const sessionToken = Buffer.from(`${email}:${Date.now()}:${process.env.BAYU_SUPABASE_SERVICE_ROLE_KEY?.slice(-8) || 'admin'}`).toString('base64');

    return NextResponse.json({
      authorized: true,
      email,
      session_token: sessionToken,
    });
  } catch (error) {
    console.error('Admin auth error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
