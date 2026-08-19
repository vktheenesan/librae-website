// Next.js dynamic sitemap — auto-served at /sitemap.xml
// All AI crawlers (Perplexity, GPTBot, ClaudeBot, Geminibot) respect sitemaps

export default function sitemap() {
  const baseUrl = 'https://librae.work';
  const now = new Date().toISOString();

  const staticRoutes = [
    { url: baseUrl, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${baseUrl}/cahaya`, priority: 0.95, changeFrequency: 'monthly' },
    { url: `${baseUrl}/lenuda`, priority: 0.95, changeFrequency: 'monthly' },
    { url: `${baseUrl}/lei`, priority: 0.95, changeFrequency: 'monthly' },
    { url: `${baseUrl}/lia`, priority: 0.95, changeFrequency: 'monthly' },
    { url: `${baseUrl}/compare`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${baseUrl}/docs`, priority: 0.85, changeFrequency: 'weekly' },
    { url: `${baseUrl}/about`, priority: 0.85, changeFrequency: 'monthly' },
    { url: `${baseUrl}/contact`, priority: 0.9, changeFrequency: 'monthly' },
  ];

  return staticRoutes.map((route) => ({
    url: route.url,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
