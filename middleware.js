// middleware.js — Next.js middleware for CORS + admin auth
// Allows CAHAYA desktop client (localhost:8000) to reach website API endpoints

import { NextResponse } from 'next/server';

// Origins allowed for CORS (CAHAYA desktop client)
const ALLOWED_ORIGINS = [
  /^http:\/\/localhost(:\d+)?$/,
  /^http:\/\/127\.0\.0\.1(:\d+)?$/,
  /^tauri:\/\/localhost$/,
];

function isAllowedOrigin(origin) {
  if (!origin) return false;
  return ALLOWED_ORIGINS.some((pattern) => pattern.test(origin));
}

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const origin = request.headers.get('origin') || '';

  // ── CORS for /api/* routes ──
  if (pathname.startsWith('/api/')) {
    // Handle preflight OPTIONS
    if (request.method === 'OPTIONS') {
      const res = new NextResponse(null, { status: 204 });
      if (isAllowedOrigin(origin)) {
        res.headers.set('Access-Control-Allow-Origin', origin);
      } else {
        // Allow same-origin and website requests
        res.headers.set('Access-Control-Allow-Origin', '*');
      }
      res.headers.set('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
      res.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Session-Id');
      res.headers.set('Access-Control-Max-Age', '86400');
      return res;
    }

    // Add CORS headers to all API responses
    const res = NextResponse.next();
    if (isAllowedOrigin(origin)) {
      res.headers.set('Access-Control-Allow-Origin', origin);
    } else {
      res.headers.set('Access-Control-Allow-Origin', '*');
    }
    res.headers.set('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    res.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Session-Id');
    return res;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/api/:path*'],
};
