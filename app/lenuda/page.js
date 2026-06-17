'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function LenudaPage() {
  const [hectares, setHectares] = useState(5000);
  const [canopy, setCanopy] = useState(85);
  const [valuationRate, setValuationRate] = useState(55); // $35 - $80 range

  // Calculation formula based on real ecological carbon coefficients
  // 1 hectare of tropical forest absorbs ~10 tonnes of CO2 per year depending on canopy density
  const tonnesPerHectare = (canopy / 100) * 11.2;
  const totalTonnes = Math.round(hectares * tonnesPerHectare);
  const estimatedRevenue = Math.round(totalTonnes * valuationRate);
  const feePerHectare = 5.00; // $5 per hectare fee
  const complianceCost = Math.round(hectares * feePerHectare);
  const netValue = estimatedRevenue - complianceCost;

  return (
    <>
      {/* Hero */}
      <section className="page-hero hero-bg grid-bg terrain-grid" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Ambient orbs */}
        <div className="glow-orb glow-orb-emerald" style={{ width: '500px', height: '500px', top: '-80px', left: '-100px' }} />
        <div className="glow-orb glow-orb-gold" style={{ width: '300px', height: '300px', bottom: '-60px', right: '10%', opacity: 0.12 }} />

        <div className="container" style={{ position:'relative', zIndex:1, paddingTop:'2rem' }}>
          <div className="badge" style={{ marginBottom:'1.25rem', background: 'rgba(46,139,87,0.12)', borderColor: 'rgba(46,139,87,0.3)', color: '#3EAB6C' }}>
            🌱 Environmental Intelligence Platform
          </div>
          <h1 className="section-title" style={{ maxWidth: 820, animation: 'fadeInUp 0.7s ease both' }}>
            LENUDA: <span className="gradient-text">Librae Environment Nature</span>
            <br />Unified Digital Asset
          </h1>
          <p className="section-subtitle" style={{ maxWidth: 660, marginTop: '1rem', animation: 'fadeInUp 0.7s 0.15s ease both' }}>
            A cloud-native environmental intelligence ledger. Automate satellite observations, satisfy EUDR and RSPO standards, and lock in premium carbon asset valuation — all cryptographically sealed on-chain.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap', animation: 'fadeInUp 0.7s 0.25s ease both' }}>
            <a href="https://lenuda.librae.work/Login" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ background: 'linear-gradient(135deg,#2E8B57,#1E5C3A)' }}>
              🔗 Login to LENUDA →
            </a>
            <a href="/contact" className="btn-secondary" style={{ borderColor: 'rgba(46,139,87,0.4)', color: '#3EAB6C' }}>
              Request Access
            </a>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="section-padding" style={{ background: '#000A1A' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '4rem', marginBottom: '4rem' }}>
            <div className="glass-card" style={{ padding: '2.5rem', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg,#2E8B57,transparent)' }} />
              <h3 style={{ color: '#2E8B57', fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 800 }}>Persistent Digital Twins</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                LENUDA translates raw multi-spectral satellite imagery and concessions boundaries into a persistent, living 3D digital twin of your land asset. By executing automated temporal scans, LENUDA identifies forest boundaries, canopy health deterioration, and carbon absorption rate changes dynamically.
              </p>
            </div>
            
            <div className="glass-card" style={{ padding: '2.5rem', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg,#7B4AFF,transparent)' }} />
              <h3 style={{ color: '#7B4AFF', fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 800 }}>Cryptographic Proof of Reality</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                Every data package submitted—from GeoJSON concession vectors to LiDAR metrics—is sealed using SHA-256. These hashes are compiled into Merkle trees and recorded on the Polygon L2 ledger, creating an immutable, audit-ready forensic paper trail. Zero greenwashing. Zero data manipulation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Loop */}
      <section className="section-padding" style={{ background: 'linear-gradient(180deg,#000A1A,#001133)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="accent-line" style={{ margin: '0 auto 1.5rem' }} />
            <h2 className="section-title">The Multi-Stage Verification Loop</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: 600, margin: '0 auto' }}>
              Ecological data is systematically ingested, validated, and finalized into certified, transaction-ready carbon assets.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '1.25rem' }}>
            {[
              { num: '01', title: 'Boundary Ingestion', desc: 'Concession vectors (KML, Shapefile) are ingested, cleaned, and projection-aligned.' },
              { num: '02', title: 'Baseline Scans', desc: 'Retrospective satellite imagery scans verify zero deforestation history since Dec 2020.' },
              { num: '03', title: 'Continuous Audit', desc: 'Weekly Sentinel-1 radar and Sentinel-2 optical imagery sweeps check for canopy loss.' },
              { num: '04', title: 'SHA-256 Sealing', desc: 'Ecological metrics and verified bounds are hashed to generate forensic receipts.' },
              { num: '05', title: 'L2 Attestation', desc: 'Merkle root hashes are written to the blockchain ledger, locking in carbon value.' }
            ].map((step, i) => (
              <div key={i} className="glass-card" style={{ padding: '1.75rem', position: 'relative', background: 'rgba(0,16,40,0.5)' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#2E8B57', fontFamily: 'Space Mono, monospace', marginBottom: '1rem' }}>
                  {step.num}
                </div>
                <h4 style={{ color: '#E0E2E5', fontSize: '0.95rem', marginBottom: '0.5rem', fontWeight: 700 }}>{step.title}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carbon Calculator */}
      <section className="section-padding grid-bg" style={{ background: '#000A1A' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div className="accent-line" />
              <h2 className="section-title">Carbon Credit Valuation Engine</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
                Use our interactive valuation calculator to project the carbon capture capacity and estimated annual credit valuation of your land concession.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Hectares Slider */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ color: '#A0B0CC', fontSize: '0.85rem', fontWeight: 600 }}>Concession Size (Hectares)</span>
                    <span style={{ fontFamily: 'Space Mono, monospace', color: '#2E8B57', fontWeight: 'bold' }}>{hectares.toLocaleString()} ha</span>
                  </div>
                  <input type="range" min="100" max="50000" step="100" value={hectares} onChange={e => setHectares(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#2E8B57' }} />
                </div>

                {/* Canopy Slider */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ color: '#A0B0CC', fontSize: '0.85rem', fontWeight: 600 }}>Average Canopy Density (%)</span>
                    <span style={{ fontFamily: 'Space Mono, monospace', color: '#2E8B57', fontWeight: 'bold' }}>{canopy}%</span>
                  </div>
                  <input type="range" min="20" max="100" step="5" value={canopy} onChange={e => setCanopy(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#2E8B57' }} />
                </div>

                {/* Price Slider */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ color: '#A0B0CC', fontSize: '0.85rem', fontWeight: 600 }}>Market Credit Value (USD / Tonne)</span>
                    <span style={{ fontFamily: 'Space Mono, monospace', color: '#2E8B57', fontWeight: 'bold' }}>${valuationRate} / t</span>
                  </div>
                  <input type="range" min="35" max="80" step="1" value={valuationRate} onChange={e => setValuationRate(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#2E8B57' }} />
                </div>
              </div>
            </div>

            {/* Calculations Output */}
            <div className="glass-card gold-glow" style={{ padding: '3rem', border: '1px solid rgba(212,175,55,0.3)', background: 'rgba(212,175,55,0.02)' }}>
              <h3 style={{ color: '#D4AF37', fontSize: '1.2rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 800 }}>
                Valuation Projection
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Annual Carbon Sequestered:</span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 'bold', fontFamily: 'Space Mono, monospace' }}>{totalTonnes.toLocaleString()} tCO₂</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Gross Credit Valuation:</span>
                  <span style={{ color: '#2E8B57', fontWeight: 'bold', fontFamily: 'Space Mono, monospace' }}>${estimatedRevenue.toLocaleString()}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Verification Platform Fee:</span>
                  <span style={{ color: '#FF6B6B', fontWeight: 'bold', fontFamily: 'Space Mono, monospace' }}>-${complianceCost.toLocaleString()}</span>
                </div>
                <hr style={{ border: 0, borderTop: '1px solid rgba(255,255,255,0.08)', margin: '5px 0' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#D4AF37', fontSize: '1rem', fontWeight: 'bold' }}>Net Annual Ecological Value:</span>
                  <span style={{ color: '#D4AF37', fontSize: '1.5rem', fontWeight: 800, fontFamily: 'Space Mono, monospace' }}>${netValue.toLocaleString()}</span>
                </div>
              </div>

              <div style={{ marginTop: '2.5rem' }}>
                <Link href="/contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center', background: '#D4AF37', borderColor: '#D4AF37', color: '#000A1A' }}>
                  Secure Your Land Assets
                </Link>
                <p style={{ color: '#607090', fontSize: '0.7rem', textAlign: 'center', marginTop: '10px', margin: '10px 0 0' }}>
                  Platform fee locked at $5.00/ha. Replaces expensive traditional consultants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform redirect */}
      <section style={{ padding: '90px 0', background: 'linear-gradient(180deg,#000A1A,#001A33)', borderTop: '1px solid rgba(46,139,87,0.1)', position: 'relative', overflow: 'hidden' }}>
        {/* Emerald ambient glow */}
        <div className="glow-orb glow-orb-emerald" style={{ width: '500px', height: '500px', top: '-100px', left: '50%', transform: 'translateX(-50%)', opacity: 0.08 }} />

        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div className="badge" style={{ marginBottom: '1.5rem', background: 'rgba(46,139,87,0.1)', borderColor: 'rgba(46,139,87,0.25)', color: '#3EAB6C', margin: '0 auto 1.5rem' }}>
            🔍 Live Environmental Ledger
          </div>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: 'var(--text-primary)', marginBottom: '1.25rem', fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}>
            Access the LENUDA Platform
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: 580, margin: '0 auto 2.5rem', lineHeight: 1.8 }}>
            Review national ecological asset distributions, check on-chain Merkle audit logs, and coordinate environmental workspaces in real-time.
          </p>

          {/* Dual CTA */}
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <a href="https://lenuda.librae.work/Login" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ background: 'linear-gradient(135deg,#2E8B57,#1E6B42)', fontSize: '1rem', padding: '15px 36px' }}>
              🔗 Login · lenuda.librae.work
            </a>
            <a href="/contact" className="btn-secondary" style={{ borderColor: 'rgba(46,139,87,0.4)', color: '#3EAB6C' }}>
              🧠 Talk to BAYU
            </a>
          </div>

          {/* Social proof row */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap' }}>
            {[
              { value: '12+', label: 'Active Projects' },
              { value: '3M ha', label: 'Monitored Area' },
              { value: 'SHA-256', label: 'Sealed Data' },
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Space Mono, monospace', color: '#2E8B57', fontSize: '1.3rem', fontWeight: 700 }}>{item.value}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '4px' }}>{item.label}</div>
              </div>
            ))}
          </div>

          <p style={{ color: '#607090', fontSize: '0.72rem', marginTop: '2rem', fontFamily: 'Space Mono, monospace' }}>
            lenuda.librae.work · Secured via Polygon L2 cryptographic attestations
          </p>
        </div>
      </section>
    </>
  );
}
