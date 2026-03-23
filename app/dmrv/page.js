import Link from 'next/link';
import CarbonEstimator from '../../components/Finance/CarbonEstimator';

export const metadata = {
  title: 'Digital MRV & High-Fidelity Assurance | Librae',
  description: 'The end of paper audits. Librae provides 5-day continuous Digital MRV ensuring Additionality and premium $35-$80 Carbon Credits for global institutional investors.',
};

export default function DMRVPage() {
  return (
    <>
      <section className="page-hero hero-bg grid-bg" style={{ minHeight: '60vh' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '4rem' }}>
          <div className="badge emerald-glow" style={{ marginBottom: '1.5rem', borderColor: '#2E8B57', color: '#3EAB6C', background: 'rgba(46,139,87,0.1)' }}>
            🌱 Digital MRV & Integrity
          </div>
          <h1 className="section-title" style={{ maxWidth: 900, fontSize:'clamp(2.5rem, 5vw, 4.5rem)' }}>
            High-Fidelity <span className="gold-text">Carbon Assurance</span>
          </h1>
          <p className="section-subtitle" style={{ fontSize: '1.25rem', color: '#E0E2E5' }}>
            Beyond Estimation. We Provide Digital Certainty. Investors no longer buy "Cheap Scrap" credits. They demand DMRV-backed proof to eliminate reputational risk.
          </p>
        </div>
      </section>

      {/* SECTION 1: The Assurance Gap */}
      <section className="section-padding" style={{ background: 'linear-gradient(180deg, #000A1A, #001133)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div className="accent-line" />
              <h2 className="section-title">The Assurance Gap</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                <strong>The Normal "Premium" Credit:</strong> Based on a consultant visiting a site once a year, taking 10 manual samples, and "estimating" the rest. This leads to Ghost Credits and market distrust.
              </p>
              <p style={{ color: 'var(--text-primary)', lineHeight: 1.8, fontSize: '1.1rem', background: 'rgba(212,175,55,0.05)', padding: '1.5rem', borderLeft: '3px solid #D4AF37', borderRadius: '0 12px 12px 0' }}>
                <strong>The Librae "Assurance" Credit:</strong> Based on daily ground sensors, monthly satellite audits, and on-demand drone swarms. We don't "guess" the biomass; we measure the Solar-Induced Fluorescence (SIF)—the actual metabolic heartbeat of the forest.
              </p>
            </div>
            <div className="glass-card" style={{ padding: '0', overflow: 'hidden' }}>
              <table className="data-table" style={{ fontSize: '1rem' }}>
                <thead>
                  <tr>
                    <th style={{ background: '#000A1A' }}>Metric</th>
                    <th style={{ background: 'rgba(255,107,107,0.1)', color: '#FF6B6B' }}>Traditional MRV</th>
                    <th style={{ background: 'rgba(46,139,87,0.1)', color: '#3EAB6C' }}>Librae DMRV</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Sampling Frequency</td><td>1 - 2 Years</td><td style={{ fontWeight: 700, color: '#D4AF37' }}>Every 5–10 Days</td></tr>
                  <tr><td>Data Source</td><td>Manual Tape Measure</td><td style={{ fontWeight: 700, color: '#D4AF37' }}>Sentinel + IoT + Drone</td></tr>
                  <tr><td>Audit Proof</td><td>PDF Report</td><td style={{ fontWeight: 700, color: '#D4AF37' }}>SHA-256 Merkle Ledger</td></tr>
                  <tr><td>Market Value</td><td>$3 - $5</td><td style={{ fontWeight: 700, color: '#D4AF37' }}>$35 - $80 (Premium)</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Multi-Staged Verification Loop */}
      <section className="section-padding grid-bg" style={{ background: '#001133' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-title">The Multi-Staged Verification Loop</h2>
            <p style={{ color: 'var(--text-secondary)' }}>A continuous circular flow showing data moving from Space to Soil.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
            {[
              { icon: '🛰️', title: 'Space (Continuous)', desc: 'Daily Sentinel/Landsat scans detect land-use changes.' },
              { icon: '🌱', title: 'Soil (Real-time)', desc: '7-in-1 Ground Workers measure moisture and nutrient flux to confirm plant vitality.' },
              { icon: '🛩️', title: 'Air (Strategic)', desc: 'Pentagon Swarm performs Individual Tree Counting and AI Disease Detection.' },
              { icon: '🚶‍♂️', title: 'Human (Directed)', desc: 'Site officers are guided by AI to specific GPS coordinates to verify "Truth Anomalies".' }
            ].map((s, i) => (
              <div key={i} className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{s.icon}</div>
                <h3 style={{ color: '#D4AF37', fontSize: '1.2rem', marginBottom: '0.5rem' }}>{s.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Cryptography Note */}
          <div className="glass-card gold-glow" style={{ marginTop: '3rem', padding: '2rem', textAlign: 'center', background: 'rgba(212,175,55,0.05)' }}>
            <h4 style={{ color: 'var(--text-primary)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>🔐 Cryptography (Finality)</h4>
            <p style={{ color: 'var(--text-secondary)', maxWidth: 800, margin: '0 auto' }}>
              Every step is hashed with SHA-256 and locked in a Merkle Tree. This creates an <strong>"Immutable Ledger of Life."</strong> Buyers can click a link and see the actual satellite health of the specific tree they are saving.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: The Calculator & Premium Credit Advantage */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, #001A00, #000A1A)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(400px, 1fr) 1.2fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div className="accent-line" />
              <h2 className="section-title">Why Librae Credits Sell for <span className="gold-text">$35–$80</span></h2>
              <p style={{ color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '1.05rem' }}>
                In 2026, institutional buyers like Google, Microsoft, and Nestlé no longer buy "Cheap Scrap" credits. Data is the value. You aren't selling a promise; you are selling <strong>Evidence</strong>.
              </p>

              <h4 style={{ color: '#3EAB6C', marginBottom: '0.5rem' }}>Achieving Additionality</h4>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                GaiaAI™ analyzes local land-use economics and simulates a 10-year "Business as Usual" scenario. The difference between that dark future and your green reality proves your Additionality.
              </p>

              <h4 style={{ color: '#D4AF37', marginBottom: '0.5rem' }}>Built for ICVCM & Article 6</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                Aligned with ICVCM Core Carbon Principles (CCPs) and IPCC Tier 3 Reporting. Built for Corresponding Adjustments for sovereign-to-sovereign trading (e.g., Malaysia to Singapore).
              </p>
            </div>
            
            {/* The Interactive Calculator */}
            <div>
              <h3 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', textAlign: 'center' }}>Carbon Value Estimator</h3>
              <CarbonEstimator />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: 10-Gigatonne Mission & Market */}
      <section className="section-padding grid-bg" style={{ background: '#000A1A' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="accent-line" style={{ margin: '0 auto 1.5rem' }} />
          <h2 className="section-title">The 10-Gigatonne Global Mission</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: 800, margin: '0 auto 3rem', fontSize: '1.1rem' }}>
            Global emissions currently sit at 40 Gigatonnes ($CO_2e$). Our infrastructure is designed to manage and verify <strong>10 Gigatonnes</strong> of carbon removal globally—effectively neutralizing 25% of the world's carbon footprint.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {[
              { region: 'Malaysia (MPOB / Estates)', size: '6 Million Hectares', value: 'High-Integrity EUDR-ready Credits' },
              { region: 'Indonesia (Peat / Forest)', size: '90+ Million Hectares', value: 'Massive Blue Carbon & Peat Restoration' },
              { region: 'Thailand (Small-Holders)', size: '20+ Million Rai', value: 'Socially-Driven "Fair-Trade" Carbon' }
            ].map((m, i) => (
              <div key={i} className="glass-card" style={{ padding: '2rem' }}>
                <h4 style={{ color: '#D4AF37', fontSize: '1.1rem', marginBottom: '0.5rem' }}>{m.region}</h4>
                <p style={{ fontFamily: 'Space Mono', color: '#3EAB6C', fontWeight: 700, marginBottom: '1rem', fontSize: '1.2rem' }}>{m.size}</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{m.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #001133, #001A00)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '1rem' }}>
            Unlock Your <span className="gold-text">DMRV Premium</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Integrate with Librae to stop estimating and start proving.</p>
          <Link href="/contact" className="btn-primary" style={{ padding: '16px 40px' }}>🔐 Connect with the Architects</Link>
        </div>
      </section>
    </>
  );
}
