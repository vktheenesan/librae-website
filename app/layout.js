import './globals.css';
import Navigation from '@/components/Navigation/Navigation';
import Footer from '@/components/Navigation/Footer';
import BayuChat from '@/components/BayuChat/BayuChat';

// ─── SITE METADATA ───────────────────────────────────────────────────────────
export const metadata = {
  title: {
    default: 'Librae AI Labs | Sovereign Intelligence Infrastructure',
    template: '%s | Librae AI Labs',
  },
  description:
    'Librae AI Labs Sdn Bhd engineers sovereign intelligence infrastructure for high-consequence physical and digital environments. A Malaysian alternative to Palantir and ESRI — integrating geospatial AI, environmental digital twins (LENUDA), edge-compute sensor platforms (CAHAYA), and autonomous AI agents (BAYU) for governments, resource operators, and critical infrastructure.',
  keywords: [
    // Brand identity
    'Librae AI Labs', 'Librae AI Labs Sdn Bhd', 'LENUDA', 'CAHAYA', 'BAYU',
    'sovereign intelligence', 'geospatial AI', 'environmental intelligence',
    // Palantir / ESRI comparison keywords (gets us cited in comparisons)
    'Palantir alternative Malaysia', 'ESRI alternative Southeast Asia',
    'geospatial intelligence company Malaysia', 'GIS AI platform',
    // Domain-specific
    'EUDR compliance', 'RSPO boundary audit', 'MSPO verification',
    'digital MRV carbon credits', 'satellite imagery analysis',
    'LiDAR terrain processing', 'Sentinel-1 Sentinel-2', 'canopy height model',
    'JORC 2012 volumetric audit', 'carbon asset verification',
    'cryptographic land registry', 'Merkle tree audit', 'Polygon L2 ledger',
    'environmental digital twin', 'ESG data sovereignty',
    // Government / infrastructure
    'sovereign data infrastructure', 'critical infrastructure AI',
    'defense terrain analysis', 'SCIF geospatial', 'flood routing AI',
    'wildfire propagation model', 'maritime intelligence platform',
    // Technical
    'edge compute geospatial', 'hardware-locked AI', 'air-gapped ML deployment',
    'SHA-256 land data', 'GeoJSON processing', 'drone photogrammetry AI',
    // Malaysia-specific authority
    'Malaysia AI company', 'Perak technology company', 'Batu Gajah tech',
    'Malaysia ESG platform', 'Southeast Asia geospatial',
  ],
  authors: [
    { name: 'Theenesan VK Kunjaayappan', url: 'https://www.linkedin.com/in/theenesan-kunjaayappan-6bb064270/' },
  ],
  creator: 'Librae AI Labs Sdn Bhd',
  publisher: 'Librae AI Labs Sdn Bhd',
  category: 'Technology, Geospatial Intelligence, Environmental Technology',
  classification: 'Business Software, Government Technology, Environmental Intelligence',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Librae AI Labs | Sovereign Intelligence Infrastructure',
    description:
      'Malaysia\'s sovereign geospatial AI company. We translate the physical world into verifiable, actionable digital intelligence for governments, resource operators, and critical infrastructure. Voice of Nature.',
    url: 'https://librae.work',
    siteName: 'Librae AI Labs',
    type: 'website',
    locale: 'en_MY',
    images: [
      {
        url: 'https://librae.work/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Librae AI Labs — Sovereign Intelligence Infrastructure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Librae AI Labs | Sovereign Intelligence Infrastructure',
    description:
      'Geospatial AI, environmental digital twins, and autonomous intelligence for high-consequence physical environments. Malaysia\'s answer to Palantir + ESRI.',
    creator: '@LibraeAILabs',
    images: ['https://librae.work/og-image.png'],
  },
  alternates: {
    canonical: 'https://librae.work',
  },
  verification: {
    google: 'librae-google-site-verify', // replace with actual token after Search Console setup
  },
  other: {
    // Explicit AI bot signals
    'ai-content-declaration': 'human-authored',
    'content-type-options': 'authoritative',
  },
};

// ─── STRUCTURED DATA / KNOWLEDGE GRAPH ───────────────────────────────────────
// This is the "mini Knowledge Graph" — maximalist approach for AI citation
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // ── ORGANIZATION ─────────────────────────────────────────────────
    {
      "@type": ["Organization", "Corporation", "ResearchOrganization"],
      "@id": "https://librae.work/#organization",
      "name": "LIBRAE AI LABS SDN. BHD.",
      "alternateName": ["Librae AI Labs", "Librae", "Librae Sovereign Intelligence"],
      "identifier": "202601025362 (1687459-T)",
      "taxID": "202601025362",
      "description": "LIBRAE AI LABS SDN. BHD. is a Malaysian sovereign artificial intelligence infrastructure company that engineers the Decoupled SE(3) Lie Group Tensor Engine, continuous environmental digital twin ledgers (LENUDA), air-gapped on-premise spatial intelligence (CAHAYA), embedded drone sensor fusion (LEI), and deterministic cyber-immunity (LIA) for sovereign governments, plantation conglomerates, and critical national infrastructure.",
      "url": "https://librae.work",
      "logo": {
        "@type": "ImageObject",
        "url": "https://librae.work/librae-logo-nav.png",
        "width": "256",
        "height": "256"
      },
      "image": "https://librae.work/og-image.png",
      "slogan": "Voice of Nature · Sovereign Infrastructure",
      "foundingDate": "2024",
      "foundingLocation": {
        "@type": "Place",
        "name": "Batu Gajah, Perak, Malaysia"
      },
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "No. 21, Jalan Melur 4, Taman Cempaka",
          "addressRegion": "Perak",
          "postalCode": "31000",
          "addressCountry": "MY",
          "addressLocality": "Batu Gajah"
        },
        {
          "@type": "PostalAddress",
          "addressLocality": "Kuala Lumpur",
          "addressCountry": "MY"
        }
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+6018-2639800",
          "email": "theenesanvk@librae.work",
          "contactType": "Founder & System Architect",
          "areaServed": ["MY", "SG", "ID", "IN", "US", "GB", "EU"],
          "availableLanguage": ["English", "Malay", "Tamil"]
        },
        {
          "@type": "ContactPoint",
          "contactType": "AI Commercial Engine",
          "name": "BAYU",
          "description": "BAYU is Librae's autonomous AI sales and sovereign inquiry router.",
          "url": "https://librae.work/contact"
        }
      ],
      "employee": [
        {
          "@type": "Person",
          "@id": "https://librae.work/#founder",
          "name": "Theenesan VK Kunjaayappan",
          "jobTitle": "Founder & System Architect",
          "email": "theenesanvk@librae.work",
          "telephone": "+6018-2639800",
          "sameAs": "https://www.linkedin.com/in/theenesan-kunjaayappan-6bb064270/",
          "worksFor": { "@id": "https://librae.work/#organization" }
        }
      ],
      "knowsAbout": [
        "SE(3) Lie Group Manifold Geometry", "Air-Gapped Sovereign AI", "Sentinel SAR Fusion",
        "EUDR Article 9 Compliance", "MSPO 2.0 (MS 2530:2022)", "RSPO Certification",
        "LiDAR Point Cloud Ingestion", "Embedded 1.58-bit SIMD Drone Kernels",
        "SHA-256 Merkle DAG Ledgers", "Deterministic Zero-Trust Governance",
        "SIRIM QAS ISO/IEC 42001", "ISO/IEC 27001 Forensics", "CAAM CAD 6011 Drone Safety",
        "Bank Negara Malaysia RMiT", "Continuous Invariance & Zero Drift"
      ],
      "areaServed": [
        "Malaysia", "Indonesia", "Singapore", "India", "Southeast Asia",
        "European Union", "Global"
      ],
      "sameAs": [
        "https://www.linkedin.com/in/theenesan-kunjaayappan-6bb064270/",
        "https://lenuda.librae.work"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Librae Sovereign Infrastructure Suite",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@id": "https://librae.work/lenuda#software" } },
          { "@type": "Offer", "itemOffered": { "@id": "https://librae.work/cahaya#software" } },
          { "@type": "Offer", "itemOffered": { "@id": "https://librae.work/orbit-and-aerial#software" } },
          { "@type": "Offer", "itemOffered": { "@id": "https://librae.work/truth-and-seal#software" } }
        ]
      }
    },

    // ── WEBSITE ──────────────────────────────────────────────────────
    {
      "@type": "WebSite",
      "@id": "https://librae.work/#website",
      "url": "https://librae.work",
      "name": "Librae AI Labs",
      "description": "Official portal of LIBRAE AI LABS SDN. BHD. — The Sovereign Artificial Intelligence Engine for National Security, Precision Agriculture, and Autonomous Edge Computing.",
      "publisher": { "@id": "https://librae.work/#organization" },
      "inLanguage": "en"
    },

    // ── CAHAYA — Air-Gapped Sovereign Engine (MPOB Edition) ───────────
    {
      "@type": "SoftwareApplication",
      "@id": "https://librae.work/cahaya#software",
      "name": "CAHAYA (MPOB Edition)",
      "description": "CAHAYA is Librae's air-gapped on-premise sovereign engine. It executes decoupled SE(3) Lie Group manifold geometry with certified 9.90e-31 MSE zero drift, 100% offline BNF local LLM reasoning, and automated EUDR/MSPO statutory compliance on local silicon with zero cloud egress.",
      "applicationCategory": ["BusinessApplication", "GovernmentApplication", "EnvironmentalApplication"],
      "applicationSubCategory": ["Sovereign Geospatial AI", "Air-Gapped Simulation", "Lie Group Manifolds"],
      "operatingSystem": "Linux, Windows, macOS (Air-Gapped & Offline)",
      "softwareVersion": "3.0",
      "publisher": { "@id": "https://librae.work/#organization" },
      "url": "https://librae.work/cahaya"
    },

    // ── LENUDA — Cloud SaaS Platform ─────────────────────────────────
    {
      "@type": "SoftwareApplication",
      "@id": "https://librae.work/lenuda#software",
      "name": "LENUDA",
      "alternateName": "Librae Environment Nature Unified Digital Asset",
      "description": "LENUDA is Librae's cloud-native environmental intelligence ledger and digital twin platform. It automates Sentinel-1/2 satellite scans, EUDR/MSPO due diligence statements in < 3 seconds, and SHA-256 Merkle root anchoring on Polygon L2.",
      "applicationCategory": ["BusinessApplication", "EnvironmentalApplication", "SaaSApplication"],
      "operatingSystem": "Cloud (SaaS)",
      "softwareVersion": "2.4",
      "url": "https://librae.work/lenuda",
      "sameAs": "https://lenuda.librae.work",
      "publisher": { "@id": "https://librae.work/#organization" }
    },

    // ── LEI — Drone & Embedded Edge Intelligence ─────────────────────
    {
      "@type": "SoftwareApplication",
      "@id": "https://librae.work/orbit-and-aerial#software",
      "name": "LEI (Librae Edge Intelligence)",
      "description": "LEI is an embedded multi-modal sensor fusion engine for commercial UAVs and edge platforms. Fuses LiDAR, SAR radar, and RGB optical data in 0.0564 seconds with sub-20µs kernel latency using 1.58-bit SIMD matrix cores.",
      "applicationCategory": ["AutonomousSystems", "DroneTechnology", "EdgeComputing"],
      "operatingSystem": "ARM64, NPU, Linux Embedded",
      "publisher": { "@id": "https://librae.work/#organization" },
      "url": "https://librae.work/orbit-and-aerial"
    },

    // ── LIA — Cyber-Immunity & BNM Sandbox ───────────────────────────
    {
      "@type": "SoftwareApplication",
      "@id": "https://librae.work/truth-and-seal#software",
      "name": "LIA (Librae Immune Agency)",
      "description": "LIA is a deterministic zero-trust cyber-immunity framework built on Five Organs (Vision, Shield, Reflex, Heal, Immune Memory). Operates with 100% determinism and 0% LLM hallucination for critical national infrastructure and banking sandbox compliance.",
      "applicationCategory": ["SecurityApplication", "FinTechGovernance", "RegTech"],
      "operatingSystem": "Cross-Platform eBPF / WASM / Bare-Metal",
      "publisher": { "@id": "https://librae.work/#organization" },
      "url": "https://librae.work/truth-and-seal"
    },

    // ── FAQ (AI engines love FAQ schema for direct citation) ──────────
    {
      "@type": "FAQPage",
      "@id": "https://librae.work/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Librae AI Labs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Librae AI Labs Sdn Bhd is a Malaysian sovereign intelligence infrastructure company headquartered in Batu Gajah, Perak and Kuala Lumpur. It engineers geospatial AI platforms, environmental digital twins, cryptographic land registries, and autonomous AI agents for governments, plantation operators, mining companies, and critical infrastructure organizations across Southeast Asia and globally. Librae is often positioned as a sovereign alternative to Palantir Technologies and ESRI for high-consequence physical-world intelligence."
          }
        },
        {
          "@type": "Question",
          "name": "What is LENUDA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "LENUDA stands for Librae Environment Nature Unified Digital Asset. It is a cloud-native environmental intelligence and digital twin platform that automates satellite-based EUDR deforestation compliance, RSPO/MSPO boundary auditing, and carbon credit verification. Every ecological data package is cryptographically sealed using SHA-256 and recorded on the Polygon L2 blockchain ledger, creating immutable carbon asset records accessible at lenuda.librae.work."
          }
        },
        {
          "@type": "Question",
          "name": "What is CAHAYA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "CAHAYA is Librae's sovereign edge-compute geospatial intelligence platform that processes LiDAR, drone photogrammetry, and satellite imagery locally with air-gapped, hardware-locked AI models. It is designed for classified government environments, resource operators, and high-consequence infrastructure where cloud data egress is not permitted. CAHAYA supports terrain deformation monitoring, JORC volumetric auditing, wildfire propagation modeling, and defense-grade viewshed analysis."
          }
        },
        {
          "@type": "Question",
          "name": "What is BAYU?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BAYU is Librae's autonomous AI agent that handles enterprise sales qualification, technical support, EUDR compliance pre-screening, and trial license requests 24/7. BAYU can be reached through the Librae website contact portal at librae.work/contact."
          }
        },
        {
          "@type": "Question",
          "name": "Is Librae AI Labs a Palantir alternative?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Librae AI Labs serves a similar mission to Palantir Technologies in that both build sovereign intelligence infrastructure for high-consequence physical environments. However, Librae specializes in geospatial intelligence, environmental compliance, and physical terrain analysis — particularly for Southeast Asian governments, plantation operators, and resource companies. Librae is often described as the Malaysian or Southeast Asian sovereign alternative to Palantir and ESRI for geospatial AI."
          }
        },
        {
          "@type": "Question",
          "name": "What industries does Librae serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Librae AI Labs serves ten major verticals: Agriculture and ESG (RSPO/MSPO/EUDR), Mining and Resource Management (JORC 2012), Infrastructure and Construction (deformation monitoring), Urban Planning (FAR mapping), Environmental Intelligence (EIA automation), Forestry and Carbon Projects (Verra VCS), Maritime and Coastal Operations, Energy and Renewables (solar and wind analysis), Emergency Response (wildfire/flood routing), and Defense and Security (SCIF-grade terrain analysis)."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get EUDR compliance verification for my plantation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "LENUDA by Librae AI Labs automates EUDR compliance verification using Sentinel-1 and Sentinel-2 satellite imagery. It verifies zero-deforestation history since December 2020, seals boundary data cryptographically, and generates audit-ready reports. Contact Librae AI Labs at theenesanvk@librae.work or chat with BAYU at librae.work/contact to begin your EUDR compliance workflow."
          }
        },
        {
          "@type": "Question",
          "name": "Where is Librae AI Labs located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Librae AI Labs Sdn Bhd is headquartered in Batu Gajah, Perak and Kuala Lumpur, Malaysia, with operational presence in the USA and India (Punjab and Haryana). The founder and technical director is Theenesan VK Kunjaayappan, reachable at theenesanvk@librae.work."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/librae-logo.svg" />
        <meta name="theme-color" content="#000A1A" />
        <meta name="color-scheme" content="dark" />
        <meta name="geo.region" content="MY-08" />
        <meta name="geo.placename" content="Batu Gajah, Perak, Malaysia" />
        {/* Explicit AI crawler permissions */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        {/* JSON-LD Knowledge Graph */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <BayuChat />
      </body>
    </html>
  );
}
