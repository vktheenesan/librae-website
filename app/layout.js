import './globals.css';
import Navigation from '@/components/Navigation/Navigation';
import Footer from '@/components/Navigation/Footer';

export const metadata = {
  title: 'Librae | Sovereign Intelligence Infrastructure',
  description: 'Librae AI Labs designs sovereign intelligence infrastructure that helps organizations understand, simulate, and operate complex physical and digital systems. Secure deterministic spatial analysis and cryptographic integrity ledgers.',
  keywords: 'ESG Compliance, EUDR, Digital MRV, Carbon Credits, Environmental Intelligence, Satellite Data, Copernicus Constellation, Merkle Tree, Supply Chain Traceability, Malaysia, Sovereign Assets, CAHAYA, LENUDA, BAYU',
  authors: [{ name: 'Theenesan VK Kunjaayappan' }],
  creator: 'Librae AI Labs',
  openGraph: {
    title: 'Librae | Sovereign Intelligence Infrastructure',
    description: 'We build sovereign intelligence infrastructure—from physical terrain and digital twins to autonomous business execution.',
    url: 'https://lenuda.librae.work',
    siteName: 'Librae Portal',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Librae | Sovereign Intelligence Infrastructure',
    description: 'Sovereign environmental and spatial intelligence systems designed for critical operations.',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://lenuda.librae.work/#organization",
        "name": "Librae Environmental Intelligence",
        "url": "https://lenuda.librae.work",
        "logo": "https://lenuda.librae.work/logo.png",
        "description": "Sovereign environmental intelligence and cryptographic DMRV infrastructure.",
        "sameAs": [
          "https://twitter.com/LibraeAI",
          "https://www.linkedin.com/company/librae-intelligence"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://lenuda.librae.work/#website",
        "url": "https://lenuda.librae.work",
        "name": "Librae",
        "publisher": {
          "@id": "https://lenuda.librae.work/#organization"
        }
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://lenuda.librae.work/#software",
        "name": "LENUDA 2.0 (Librae Environment Nature Unified Digital Asset)",
        "operatingSystem": "All",
        "applicationCategory": "BusinessApplication, EnvironmentalApplication",
        "description": "Advanced digital MRV and EUDR compliance platform. Integrates GEE satellite observations, radar/optical sensor fusion, and local airgapped hardware-locked models.",
        "publisher": {
          "@id": "https://lenuda.librae.work/#organization"
        },
        "offers": {
          "@type": "Offer",
          "price": "500",
          "priceCurrency": "USD"
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

