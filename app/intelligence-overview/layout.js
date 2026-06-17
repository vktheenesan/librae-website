// Route-level metadata for /intelligence-overview
// Metadata must live in a Server Component (layout or page without 'use client')
export const metadata = {
  title: 'Intelligence Overview — What Librae AI Labs Builds',
  description:
    'A comprehensive overview of Librae AI Labs Sdn Bhd: a Malaysian sovereign geospatial intelligence company building CAHAYA (edge AI terrain platform), LENUDA (environmental digital twin), and BAYU (autonomous AI agent). The sovereign alternative to Palantir and ESRI for Southeast Asia and critical infrastructure globally.',
  keywords: [
    'Librae AI Labs overview', 'what is Librae AI Labs',
    'Palantir alternative Malaysia', 'ESRI alternative Southeast Asia',
    'geospatial intelligence Malaysia', 'sovereign AI infrastructure',
    'EUDR compliance software', 'carbon credit AI platform',
    'LiDAR terrain AI', 'environmental digital twin',
  ],
};

export default function IntelligenceOverviewLayout({ children }) {
  return children;
}
