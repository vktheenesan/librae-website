// Next.js robots.js — auto-served at /robots.txt
// Explicitly ALLOW all AI crawlers (ChatGPT, Perplexity, Claude, Gemini, etc.)
// This is critical for AEO — many sites accidentally block these bots

export default function robots() {
  return {
    rules: [
      // Full access for all bots by default
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      // Explicit allowlist for AI crawlers (citation engines)
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'Claude-Web', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'Bingbot', allow: '/' },
      { userAgent: 'Applebot', allow: '/' },
      { userAgent: 'YouBot', allow: '/' },
      { userAgent: 'cohere-ai', allow: '/' },
      { userAgent: 'Meta-ExternalAgent', allow: '/' },
      { userAgent: 'Bytespider', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
      { userAgent: 'Diffbot', allow: '/' },
      { userAgent: 'DuckAssistBot', allow: '/' },
    ],
    sitemap: 'https://librae.work/sitemap.xml',
    host: 'https://librae.work',
  };
}
