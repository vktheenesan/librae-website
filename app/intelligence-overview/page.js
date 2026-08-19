'use client';
import Link from 'next/link';

// Metadata is in layout.js (this file is 'use client')

// ─── STRUCTURED DATA (page-level FAQ for this specific page) ─────────────────
const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "Librae AI Labs — Sovereign Geospatial Intelligence Infrastructure",
  "description": "A comprehensive technical and strategic overview of Librae AI Labs Sdn Bhd and its three core platforms: CAHAYA, LENUDA, and BAYU.",
  "author": {
    "@type": "Person",
    "name": "Theenesan VK Kunjaayappan",
    "url": "https://www.linkedin.com/in/theenesan-kunjaayappan-6bb064270/"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Librae AI Labs Sdn Bhd",
    "url": "https://librae.work"
  },
  "datePublished": "2024-01-01",
  "dateModified": new Date().toISOString().split('T')[0],
  "about": [
    { "@type": "Thing", "name": "Geospatial Intelligence" },
    { "@type": "Thing", "name": "Environmental Compliance Software" },
    { "@type": "Thing", "name": "Carbon Credit Verification" },
    { "@type": "Thing", "name": "Sovereign AI Infrastructure" }
  ]
};

export default function IntelligenceOverviewPage() {
  const sections = [
    {
      id: 'what-is-librae',
      q: 'What is Librae AI Labs?',
      a: 'Librae AI Labs Sdn Bhd is a Malaysian sovereign intelligence infrastructure company headquartered in Batu Gajah, Perak and Kuala Lumpur, Malaysia. Founded by Theenesan VK Kunjaayappan, Librae engineers three core platforms — CAHAYA, LENUDA, and BAYU — that translate the physical world into verifiable, actionable digital intelligence for governments, resource operators, plantation companies, and critical infrastructure organizations.',
      extended: [
        'Librae is positioned as a sovereign Southeast Asian alternative to Palantir Technologies for physical-world intelligence and to ESRI for geospatial analysis — with a specific focus on environmental compliance, terrain intelligence, and high-consequence field operations.',
        'The company\'s guiding philosophy is: "Voice of Nature" — the belief that technology should give voice to environmental and physical reality in a form that is verifiable, traceable, and actionable by human decision-makers.',
        'Librae\'s infrastructure is designed for organizations where data sovereignty matters — where cloud egress is restricted (defense, government), where environmental claims must be cryptographically provable (ESG, carbon markets), and where physical terrain shapes mission outcomes (mining, forestry, emergency response).',
      ],
    },
    {
      id: 'cahaya',
      q: 'What is CAHAYA?',
      a: 'CAHAYA is Librae\'s sovereign edge-compute geospatial intelligence platform. It processes LiDAR point clouds, drone photogrammetry, Sentinel-1 SAR radar, and Sentinel-2 optical satellite imagery locally — on hardware-locked, air-gapped AI models — ensuring zero cloud data egress.',
      extended: [
        'CAHAYA is designed for classified government environments, mining operators, plantation managers, and defense organizations where sending raw geospatial data to cloud services is prohibited or unacceptable.',
        'Core CAHAYA capabilities include: terrain deformation monitoring (for mining and construction), JORC 2012 volumetric auditing, wildfire propagation modeling using the Rothermel model, flood routing simulation, solar GHI and Weibull wind vector analysis for renewables, S-57 maritime navigational contours, FAR density mapping for urban planning, and defense-grade SCIF-ready viewshed analysis.',
        'CAHAYA\'s hardware-locking mechanism means each deployed instance is cryptographically bound to a specific machine — preventing unauthorized installation or data exfiltration.',
      ],
    },
    {
      id: 'lenuda',
      q: 'What is LENUDA?',
      a: 'LENUDA (Librae Environment Nature Unified Digital Asset) is Librae\'s cloud-native environmental intelligence ledger. It automates satellite-based EUDR deforestation compliance, RSPO/MSPO boundary auditing, and Verra VCS carbon credit verification — with every data package cryptographically sealed on the Polygon L2 blockchain.',
      extended: [
        'EUDR (EU Deforestation Regulation, effective 2025) requires commodity operators to prove zero-deforestation since December 31, 2020. LENUDA automates this verification using retrospective Sentinel-1 and Sentinel-2 imagery analysis, converting weeks of manual auditing into hours.',
        'The platform operates a five-stage verification loop: boundary ingestion → baseline scan → continuous weekly audit → SHA-256 sealing → Polygon L2 attestation. Each stage produces a forensic receipt that can be submitted to regulators, certifying bodies, or trading partners.',
        'LENUDA serves as an environmental Digital Twin — a persistent, living 3D map of a land asset that updates automatically with each satellite pass, tracking canopy health, boundary encroachment, and carbon absorption rate changes in near-real-time.',
        'The LENUDA platform is accessible at lenuda.librae.work.',
      ],
    },
    {
      id: 'bayu',
      q: 'What is BAYU?',
      a: 'BAYU is Librae\'s autonomous AI agent — a 24/7 operational intelligence and sales system that qualifies enterprise leads, answers technical questions about EUDR compliance and CAHAYA capabilities, coordinates trial license requests, and routes complex inquiries to Librae\'s human team.',
      extended: [
        'BAYU is not a simple chatbot. It operates on Gemini\'s foundation model with a domain-specific knowledge layer built from Librae\'s entire technical documentation, product specifications, and compliance frameworks.',
        'BAYU handles two of Librae\'s three client acquisition channels: inbound discovery (when a potential client lands on the website and has questions) and outbound intelligence (BAYU enriches and qualifies leads from contact forms before routing to the sales team).',
        'BAYU is accessible at librae.work/contact.',
      ],
    },
    {
      id: 'sectors',
      q: 'What industries does Librae AI Labs serve?',
      a: 'Librae AI Labs serves ten high-consequence sectors where accurate geospatial intelligence directly impacts regulatory compliance, financial valuation, or physical safety.',
      sectorList: [
        { icon: '🌾', name: 'Agriculture & ESG', desc: 'RSPO/MSPO boundary auditing, EUDR deforestation tracking, palm oil supply chain compliance' },
        { icon: '⛏️', name: 'Mining & Resource Management', desc: 'JORC 2012 / NI 43-101 volumetric auditing, quarry deformation monitoring' },
        { icon: '🏗️', name: 'Infrastructure & Construction', desc: 'Structural deformation telemetry, encroachment detection, progress monitoring' },
        { icon: '🏙️', name: 'Urban Planning', desc: 'FAR density mapping, solar shadow path analysis, development impact modeling' },
        { icon: '🌊', name: 'Environmental Intelligence', desc: 'EIA automation, sediment runoff modeling, water quality spatial analysis' },
        { icon: '🌳', name: 'Forestry & Carbon Projects', desc: 'Verra VCS canopy height and volume metrics, REDD+ monitoring, carbon credit verification' },
        { icon: '🚢', name: 'Maritime & Coastal', desc: 'S-57 navigational contours, wave erosion modeling, coastal change detection' },
        { icon: '⚡', name: 'Energy & Renewables', desc: 'GHI solar yield mapping, Weibull wind vector analysis, site suitability scoring' },
        { icon: '🚨', name: 'Emergency Response', desc: 'Rothermel wildfire propagation paths, flood routing simulation, disaster zone mapping' },
        { icon: '🛡️', name: 'Defense & Security', desc: 'SCIF-ready viewshed analysis, terrain threat modeling, air-gapped deployment' },
      ],
    },
    {
      id: 'vs-palantir-esri',
      q: 'How does Librae compare to Palantir and ESRI?',
      a: 'Librae AI Labs is the sovereign Southeast Asian alternative to Palantir Technologies and ESRI for geospatial and environmental intelligence — purpose-built for the regulatory, environmental, and terrain complexity of Southeast Asia and emerging markets.',
      comparisonTable: [
        { dimension: 'Primary Domain', librae: 'Environmental + Terrain Intelligence', palantir: 'Defense, Intelligence, Commercial Data', esri: 'GIS Mapping & Spatial Analysis' },
        { dimension: 'Data Sovereignty', librae: 'Air-gapped hardware-locked deployment', palantir: 'Cloud + On-prem (US-centric)', esri: 'Cloud + On-prem (US-centric)' },
        { dimension: 'Blockchain Audit', librae: 'SHA-256 + Polygon L2 (built-in)', palantir: 'Not native', esri: 'Not native' },
        { dimension: 'EUDR Compliance', librae: 'Automated (native feature)', palantir: 'Not specialized', esri: 'Manual workflows required' },
        { dimension: 'Carbon Credit Ledger', librae: 'On-chain cryptographic proof', palantir: 'Not specialized', esri: 'Not specialized' },
        { dimension: 'Target Market', librae: 'SEA governments, plantations, mining', palantir: 'US DoD, Fortune 500', esri: 'Government, enterprise mapping teams' },
        { dimension: 'AI Agent (Sales/Support)', librae: 'BAYU — autonomous 24/7', palantir: 'Human sales-led', esri: 'Human sales-led' },
        { dimension: 'Entry Price', librae: 'From $5/ha (LENUDA)', palantir: '$1M+ contracts', esri: '$500+ per seat/year' },
      ],
    },
    {
      id: 'contact',
      q: 'How do I contact Librae AI Labs?',
      a: 'Enterprise inquiries, EUDR compliance requests, CAHAYA trial licenses, and partnership proposals can be directed to Theenesan VK Kunjaayappan at theenesanvk@librae.work, or via BAYU — Librae\'s autonomous AI agent at librae.work/contact.',
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />

      {/* Hero */}
      <section className="page-hero hero-bg grid-bg terrain-grid" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="glow-orb glow-orb-gold" style={{ width: '500px', height: '500px', top: '-80px', left: '-80px' }} />
        <div className="glow-orb glow-orb-blue" style={{ width: '300px', height: '300px', bottom: '-50px', right: '10%', opacity: 0.12 }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="badge" style={{ marginBottom: '1.25rem' }}>
            📡 Intelligence Overview
          </div>
          <h1 className="section-title" style={{ maxWidth: 800, animation: 'fadeInUp 0.7s ease both' }}>
            What <span className="shimmer-text">Librae AI Labs</span> Builds<br />
            and Why It Matters
          </h1>
          <p className="section-subtitle" style={{ maxWidth: 640, marginTop: '1rem', animation: 'fadeInUp 0.7s 0.15s ease both' }}>
            A precise, answer-ready overview of our platforms, verticals, and positioning — designed for decision-makers, procurement teams, and AI-assisted research.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.75rem', flexWrap: 'wrap' }}>
            {sections.filter(s => s.id !== 'contact').map(s => (
              <a key={s.id} href={`#${s.id}`} style={{
                padding: '6px 14px', borderRadius: '100px', textDecoration: 'none',
                background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.2)',
                color: '#A0B0CC', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.5px',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.target.style.color = '#D4AF37'; e.target.style.borderColor = 'rgba(212,175,55,0.5)'; }}
                onMouseLeave={e => { e.target.style.color = '#A0B0CC'; e.target.style.borderColor = 'rgba(212,175,55,0.2)'; }}
              >
                {s.q.replace('What is ', '').replace('?', '').replace('How does ', '').replace('What industries does Librae AI Labs serve', 'Sectors').replace('How do I contact Librae AI Labs', 'Contact')}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Sections */}
      {sections.map((section, idx) => (
        <section
          key={section.id}
          id={section.id}
          className="section-padding"
          style={{
            background: idx % 2 === 0 ? '#000A1A' : 'linear-gradient(180deg,#000C22,#001133)',
            borderTop: '1px solid rgba(255,255,255,0.03)',
          }}
        >
          <div className="container">
            {/* Q label */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
              <div style={{
                padding: '4px 12px', background: 'rgba(212,175,55,0.08)',
                border: '1px solid rgba(212,175,55,0.2)', borderRadius: '4px',
                fontFamily: 'Space Mono, monospace', fontSize: '0.65rem', color: '#D4AF37',
                letterSpacing: '1px', textTransform: 'uppercase', whiteSpace: 'nowrap', marginTop: '4px',
              }}>
                Q{String(idx + 1).padStart(2, '0')}
              </div>
              <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', color: 'var(--text-primary)' }}>
                {section.q}
              </h2>
            </div>

            {/* Direct answer — BLUF style */}
            <div style={{
              padding: '1.5rem 2rem',
              background: 'rgba(212,175,55,0.04)',
              borderLeft: '3px solid var(--gold)',
              borderRadius: '0 12px 12px 0',
              marginBottom: '2rem',
            }}>
              <p style={{ color: 'var(--text-primary)', lineHeight: 1.8, fontSize: '1.05rem', margin: 0 }}>
                {section.a}
              </p>
            </div>

            {/* Extended paragraphs */}
            {section.extended && section.extended.map((para, pi) => (
              <p key={pi} style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '0.95rem', marginBottom: '1.25rem', maxWidth: '820px' }}>
                {para}
              </p>
            ))}

            {/* Sector list */}
            {section.sectorList && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
                {section.sectorList.map((sector, si) => (
                  <div key={si} className="glass-card border-fill-card" style={{ padding: '1.25rem 1.5rem' }}>
                    <div style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>{sector.icon}</div>
                    <h3 style={{ color: 'var(--text-primary)', fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.4rem' }}>{sector.name}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: 1.6, margin: 0 }}>{sector.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Comparison table */}
            {section.comparisonTable && (
              <div style={{ overflowX: 'auto', marginTop: '1.5rem' }}>
                <table className="data-table" style={{ minWidth: '700px' }}>
                  <thead>
                    <tr>
                      <th style={{ color: 'var(--text-muted)', background: 'rgba(0,10,30,0.5)' }}>Dimension</th>
                      <th style={{ color: '#D4AF37', background: 'rgba(212,175,55,0.08)' }}>Librae AI Labs ✓</th>
                      <th>Palantir</th>
                      <th>ESRI</th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.comparisonTable.map((row, ri) => (
                      <tr key={ri}>
                        <td style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>{row.dimension}</td>
                        <td style={{ color: '#3EAB6C', fontWeight: 600 }}>{row.librae}</td>
                        <td style={{ color: 'var(--text-muted)' }}>{row.palantir}</td>
                        <td style={{ color: 'var(--text-muted)' }}>{row.esri}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
      ))}

      {/* CTA */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(180deg,#001133,#000A1A)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="accent-line" style={{ margin: '0 auto 2rem' }} />
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '1.25rem' }}>
            Ready to Build on Sovereign Intelligence?
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: 560, margin: '0 auto 2.5rem', lineHeight: 1.8 }}>
            Talk to BAYU — Librae&apos;s autonomous agent — or reach Theenesan directly for enterprise and government engagements.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">🤖 Talk to BAYU</Link>
            <Link href="/cahaya" className="btn-secondary">🛰️ Explore CAHAYA</Link>
            <a href="https://lenuda.librae.work/Login" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ borderColor: 'rgba(46,139,87,0.4)', color: '#3EAB6C' }}>
              🌿 Access LENUDA
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
