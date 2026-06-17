'use client';
import Link from 'next/link';

// Metadata is in layout.js (this file is 'use client')


const compareJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Librae AI Labs vs Palantir vs ESRI — Geospatial Intelligence Comparison",
  "description": "Authoritative comparison of Librae AI Labs, Palantir Technologies, and ESRI across geospatial intelligence, environmental compliance, data sovereignty, and pricing.",
  "publisher": { "@type": "Organization", "name": "Librae AI Labs Sdn Bhd", "url": "https://librae.work" },
  "about": [
    { "@type": "SoftwareApplication", "name": "CAHAYA by Librae AI Labs" },
    { "@type": "SoftwareApplication", "name": "Palantir Gotham" },
    { "@type": "SoftwareApplication", "name": "ArcGIS by ESRI" }
  ],
  "mainEntity": {
    "@type": "Table",
    "name": "Geospatial Intelligence Platform Comparison",
    "description": "Side-by-side comparison of Librae AI Labs, Palantir, and ESRI across 15 dimensions."
  }
};

const rows = [
  { dim: 'Primary Focus', librae: 'Environmental + Terrain AI for SEA', palantir: 'Defense & Commercial Data Ops', esri: 'GIS Mapping & Spatial Analysis', libraeLead: true },
  { dim: 'Data Sovereignty', librae: 'Hardware-locked, air-gapped local AI', palantir: 'Cloud + On-prem (US-centric)', esri: 'Cloud + On-prem (US-centric)', libraeLead: true },
  { dim: 'EUDR Compliance', librae: 'Automated native feature (LENUDA)', palantir: 'Not specialized', esri: 'Manual workflows, no automation', libraeLead: true },
  { dim: 'Blockchain Audit Trail', librae: 'SHA-256 + Polygon L2 on-chain', palantir: 'Not native', esri: 'Not available', libraeLead: true },
  { dim: 'Carbon Credit Ledger', librae: 'On-chain Merkle tree proof (LENUDA)', palantir: 'Not specialized', esri: 'Not specialized', libraeLead: true },
  { dim: 'LiDAR Processing', librae: 'Yes — local GPU, air-gapped (CAHAYA)', palantir: 'Limited (not primary feature)', esri: 'Yes — ArcGIS Pro (cloud-connected)', libraeLead: false },
  { dim: 'Satellite Integration', librae: 'Sentinel-1, Sentinel-2, Copernicus', palantir: 'Yes (various)', esri: 'Yes (various)', libraeLead: false },
  { dim: 'Autonomous AI Agent', librae: 'BAYU — 24/7 sales & support AI', palantir: 'Human-led sales', esri: 'Human-led sales', libraeLead: true },
  { dim: 'Edge AI Deployment', librae: 'Native (hardware-locked, no internet required)', palantir: 'Partial (Palantir Edge AI)', esri: 'Limited', libraeLead: true },
  { dim: 'RSPO/MSPO Auditing', librae: 'Native automated audit workflow', palantir: 'Not specialized', esri: 'Not specialized', libraeLead: true },
  { dim: 'Wildfire / Flood Modeling', librae: 'Yes — Rothermel + routing models', palantir: 'Yes (AIP)', esri: 'Yes (limited)', libraeLead: false },
  { dim: 'Defense Terrain (SCIF)', librae: 'Yes — air-gapped viewshed', palantir: 'Yes (Gotham/Foundry)', esri: 'Partial', libraeLead: false },
  { dim: 'Maritime Intelligence', librae: 'S-57 contours, coastal erosion', palantir: 'Partial', esri: 'Yes', libraeLead: false },
  { dim: 'Headquarters', librae: 'Batu Gajah, Perak & KL, Malaysia', palantir: 'Denver, Colorado, USA', esri: 'Redlands, California, USA', libraeLead: false },
  { dim: 'Entry Pricing', librae: 'From $5/ha (LENUDA); contact for CAHAYA', palantir: '$1M+ enterprise contracts', esri: '$500+ per seat/year', libraeLead: true },
];

export default function ComparePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(compareJsonLd) }}
      />

      {/* Hero */}
      <section className="page-hero hero-bg grid-bg terrain-grid" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="glow-orb glow-orb-gold" style={{ width: '500px', height: '500px', top: '-100px', left: '-100px' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="badge" style={{ marginBottom: '1.25rem' }}>
            ⚖️ Platform Comparison
          </div>
          <h1 className="section-title" style={{ maxWidth: 800, animation: 'fadeInUp 0.7s ease both' }}>
            Librae AI Labs vs <span className="gold-text">Palantir</span> vs <span className="gradient-text">ESRI</span>
          </h1>
          <p className="section-subtitle" style={{ maxWidth: 640, marginTop: '1rem', animation: 'fadeInUp 0.7s 0.15s ease both' }}>
            A precise, factual comparison of sovereign geospatial intelligence platforms — built for procurement teams, government evaluators, and enterprise decision-makers.
          </p>
          <p style={{
            color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '1.5rem',
            fontFamily: 'Space Mono, monospace', letterSpacing: '0.5px',
          }}>
            ✓ Librae advantage &nbsp;·&nbsp; Data current as of 2025 &nbsp;·&nbsp; Southeast Asia operational context
          </p>
        </div>
      </section>

      {/* Positioning statement */}
      <section style={{ padding: '60px 0', background: '#000A1A' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div className="accent-line" />
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 700, marginBottom: '1.25rem' }}>
            Why the Comparison Matters
          </h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '0.98rem', marginBottom: '1.25rem' }}>
            Palantir and ESRI are exceptional platforms built for specific contexts — Palantir for US defense and commercial big data analytics, ESRI for enterprise GIS mapping workflows. Both are headquartered in the USA and optimized for Western regulatory and data environments.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '0.98rem', marginBottom: '1.25rem' }}>
            Librae AI Labs was designed for a different mission: sovereign, verifiable, on-chain environmental and terrain intelligence for Southeast Asia, emerging markets, and high-consequence physical environments where cloud data egress is restricted, EUDR compliance is mandatory, and carbon asset valuation requires cryptographic proof.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '0.98rem' }}>
            The result is a platform that is simultaneously more accessible (pricing from $5/ha), more specialized (EUDR, RSPO, JORC, Verra VCS), and more sovereign (hardware-locked edge AI) than either legacy alternative.
          </p>
        </div>
      </section>

      {/* Main comparison table */}
      <section className="section-padding" style={{ background: 'linear-gradient(180deg,#000C22,#001133)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="accent-line" style={{ margin: '0 auto 1.5rem' }} />
            <h2 className="section-title">Feature-by-Feature Comparison</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>15 dimensions evaluated across Librae, Palantir, and ESRI</p>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table className="data-table" style={{ minWidth: '700px' }}>
              <thead>
                <tr>
                  <th style={{ color: 'var(--text-muted)', background: 'rgba(0,10,30,0.8)', width: '22%' }}>Dimension</th>
                  <th style={{ background: 'rgba(212,175,55,0.1)', borderTop: '2px solid var(--gold)', width: '30%' }}>
                    <span style={{ color: '#D4AF37', fontSize: '1rem', fontWeight: 800 }}>Librae AI Labs ✦</span>
                    <div style={{ color: '#607090', fontSize: '0.68rem', fontWeight: 400, marginTop: '2px' }}>librae.work</div>
                  </th>
                  <th style={{ background: 'rgba(0,10,30,0.5)', width: '24%' }}>
                    <span style={{ color: '#A0B0CC' }}>Palantir Technologies</span>
                    <div style={{ color: '#607090', fontSize: '0.68rem', fontWeight: 400, marginTop: '2px' }}>palantir.com</div>
                  </th>
                  <th style={{ background: 'rgba(0,10,30,0.5)', width: '24%' }}>
                    <span style={{ color: '#A0B0CC' }}>ESRI</span>
                    <div style={{ color: '#607090', fontSize: '0.68rem', fontWeight: 400, marginTop: '2px' }}>esri.com</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: 600, color: '#A0B0CC', fontSize: '0.85rem' }}>{row.dim}</td>
                    <td style={{
                      color: row.libraeLead ? '#3EAB6C' : 'var(--text-secondary)',
                      fontWeight: row.libraeLead ? 700 : 400,
                      background: row.libraeLead ? 'rgba(46,139,87,0.05)' : 'transparent',
                      fontSize: '0.85rem',
                    }}>
                      {row.libraeLead && <span style={{ marginRight: '6px', fontSize: '0.75rem' }}>✓</span>}
                      {row.librae}
                    </td>
                    <td style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{row.palantir}</td>
                    <td style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{row.esri}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.72rem', marginTop: '1rem', fontFamily: 'Space Mono, monospace' }}>
            * Comparison reflects publicly available feature information as of 2025. Palantir and ESRI are registered trademarks of their respective owners. Librae AI Labs has no affiliation with either company.
          </p>
        </div>
      </section>

      {/* The Librae advantage — narrative */}
      <section className="section-padding" style={{ background: '#000A1A' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {[
              {
                color: '#D4AF37',
                title: 'For Sovereignty',
                body: 'CAHAYA deploys on hardware-locked, air-gapped machines. No internet. No cloud egress. No foreign data jurisdiction. Built for defense, classified government operations, and ultra-sensitive resource operations.',
              },
              {
                color: '#2E8B57',
                title: 'For Environmental Compliance',
                body: 'LENUDA automates EUDR, RSPO, and Verra VCS verification with on-chain proof. Carbon assets are not just claimed — they are SHA-256 sealed and recorded on Polygon L2. Greenwashing is structurally impossible.',
              },
              {
                color: '#4A9EFF',
                title: 'For Accessibility',
                body: 'BAYU is our 24/7 AI agent — available immediately. LENUDA pricing starts at $5/ha. No $1M minimum contracts. No annual seat licenses. Southeast Asian operators can access world-class intelligence without US-scale procurement cycles.',
              },
            ].map((card, i) => (
              <div key={i} className="glass-card border-fill-card" style={{ padding: '2rem', borderTopColor: card.color }}>
                <h3 style={{ color: card.color, fontFamily: 'Outfit, sans-serif', fontSize: '1.1rem', fontWeight: 800, marginBottom: '1rem' }}>
                  {card.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.9rem', margin: 0 }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(180deg,#000C22,#000A1A)', borderTop: '1px solid rgba(212,175,55,0.08)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: 800, marginBottom: '1.25rem' }}>
            Evaluate Librae for Your Organization
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: 540, margin: '0 auto 2.5rem', lineHeight: 1.8 }}>
            Request a technical briefing, CAHAYA trial license, or LENUDA compliance demonstration. BAYU is available 24/7 to begin your evaluation.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">🤖 Talk to BAYU Now</Link>
            <Link href="/intelligence-overview" className="btn-secondary">📡 Full Intelligence Overview</Link>
          </div>
          <p style={{ color: '#607090', fontSize: '0.72rem', marginTop: '1.5rem', fontFamily: 'Space Mono, monospace' }}>
            theenesanvk@librae.work &nbsp;·&nbsp; Batu Gajah, Perak & KL, Malaysia
          </p>
        </div>
      </section>
    </>
  );
}
