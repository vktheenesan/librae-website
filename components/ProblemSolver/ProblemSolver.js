'use client';

export default function ProblemSolver() {
  const problems = [
    {
      id: '01',
      title: 'The Rural Connectivity Crisis',
      subtitle: 'Cloud AI collapses where the real economy operates',
      icon: '📡',
      publicCloudFailure: 'Public cloud LLMs require continuous high-bandwidth internet. When oil palm estates, dense tropical forests, open oceans, or tactical UAV corridors lose 5G or satellite link, cloud AI completely freezes.',
      libraeSolution: '100% Offline & Air-Gapped. Librae executes entire perception, Lie Group geometry, and domain reasoning locally on consumer and edge hardware (< 8GB RAM). Zero internet required.',
      metric: '0.00ms Network Latency',
      tag: 'AIR-GAPPED SOVEREIGNTY'
    },
    {
      id: '02',
      title: 'The Sovereign Data Leakage Risk',
      subtitle: 'Public clouds compromise national cadastral assets',
      icon: '🛡️',
      publicCloudFailure: 'Sending concession boundary polygons, mineral reserve LiDAR, yield telemetry, and national defense coordinates to foreign cloud servers violates data sovereignty and exposes critical economic intelligence.',
      libraeSolution: 'Cryptographic Zero-Egress. All calculations occur inside the sovereign boundary. Outputs are permanently sealed with SHA-256 Merkle root hashes for tamper-proof statutory audits.',
      metric: 'Zero Outbound Telemetry',
      tag: 'SOVEREIGN COMPLIANCE'
    },
    {
      id: '03',
      title: 'The Discretization & Hallucination Danger',
      subtitle: 'Standard LLMs corrupt physical geometry & audit numbers',
      icon: '📐',
      publicCloudFailure: 'Tokenized transformer models treat physical coordinates as probabilistic text strings. Over continuous 3D rotations, they accumulate severe geometric drift (10^-2 MSE) and invent unverifiable numbers.',
      libraeSolution: 'Decoupled SE(3) Physics Engine. Left-brain handles syntax while the right-brain executes double-precision float64 Lie algebra, achieving certified 9.90 × 10^-31 MSE zero drift and 0% formula hallucination.',
      metric: '9.90e-31 MSE Precision',
      tag: 'MATHEMATICAL CERTAINTY'
    }
  ];

  return (
    <section id="problem-solver" style={{
      padding: '110px 0',
      background: '#000A1A',
      position: 'relative',
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto 4rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            background: 'rgba(239, 68, 68, 0.08)',
            border: '1px solid rgba(239, 68, 68, 0.25)',
            borderRadius: '100px',
            color: '#f87171',
            fontSize: '0.78rem',
            fontFamily: 'Space Mono, monospace',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}>
            ⚠️ Why Public Cloud AI Fails in High-Stakes Deployments
          </div>

          <h2 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: '1.5rem',
            fontFamily: 'Outfit, sans-serif',
            color: '#F0F4FF',
          }}>
            We Solve What Others Struggle With:{' '}
            <span style={{
              background: 'linear-gradient(135deg, #f87171 0%, #D4AF37 50%, #10b981 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Zero Disconnection, Zero Leakage, Zero Drift.
            </span>
          </h2>

          <p style={{
            color: '#A0B0CC',
            fontSize: '1.05rem',
            lineHeight: 1.8,
            margin: 0,
          }}>
            National infrastructure, plantation conglomerates, and autonomous platforms cannot tolerate cloud outages, data sovereignty breaches, or statistical hallucinations.
          </p>
        </div>

        {/* 3 Friction-First Comparative Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
        }} className="problem-grid">
          {problems.map((p) => (
            <div
              key={p.id}
              className="glass-card"
              style={{
                padding: '2.5rem 2rem',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'rgba(0, 15, 38, 0.7)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, #f87171, #D4AF37, #10b981)',
              }} />

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '2rem' }}>{p.icon}</span>
                  <span style={{
                    padding: '4px 10px',
                    background: 'rgba(212, 175, 55, 0.1)',
                    border: '1px solid rgba(212, 175, 55, 0.25)',
                    borderRadius: '100px',
                    color: '#D4AF37',
                    fontSize: '0.68rem',
                    fontFamily: 'Space Mono, monospace',
                    fontWeight: 700,
                  }}>
                    {p.tag}
                  </span>
                </div>

                <h3 style={{
                  fontSize: '1.3rem',
                  color: '#F0F4FF',
                  fontWeight: 800,
                  marginBottom: '0.4rem',
                  fontFamily: 'Outfit, sans-serif',
                }}>
                  {p.title}
                </h3>
                <p style={{
                  color: '#f87171',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  marginBottom: '1.5rem',
                }}>
                  {p.subtitle}
                </p>

                <div style={{
                  background: 'rgba(239, 68, 68, 0.06)',
                  border: '1px solid rgba(239, 68, 68, 0.2)',
                  borderRadius: '10px',
                  padding: '1.25rem',
                  marginBottom: '1.25rem',
                }}>
                  <div style={{ color: '#fca5a5', fontSize: '0.72rem', fontFamily: 'Space Mono, monospace', fontWeight: 700, textTransform: 'uppercase', marginBottom: '6px' }}>
                    ❌ The Public Cloud Failure
                  </div>
                  <p style={{ color: '#d1d5db', fontSize: '0.82rem', lineHeight: 1.6, margin: 0 }}>
                    {p.publicCloudFailure}
                  </p>
                </div>

                <div style={{
                  background: 'rgba(16, 185, 129, 0.08)',
                  border: '1px solid rgba(16, 185, 129, 0.25)',
                  borderRadius: '10px',
                  padding: '1.25rem',
                  marginBottom: '1.5rem',
                }}>
                  <div style={{ color: '#6ee7b7', fontSize: '0.72rem', fontFamily: 'Space Mono, monospace', fontWeight: 700, textTransform: 'uppercase', marginBottom: '6px' }}>
                    ✅ The Librae Sovereign Standard
                  </div>
                  <p style={{ color: '#e5e7eb', fontSize: '0.82rem', lineHeight: 1.6, margin: 0 }}>
                    {p.libraeSolution}
                  </p>
                </div>
              </div>

              <div style={{
                paddingTop: '1.25rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <span style={{ color: '#607090', fontSize: '0.72rem', fontFamily: 'Space Mono, monospace', textTransform: 'uppercase' }}>
                  Empirical Benchmark
                </span>
                <span style={{ color: '#D4AF37', fontSize: '0.88rem', fontFamily: 'Space Mono, monospace', fontWeight: 700 }}>
                  {p.metric}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 1024px) {
          .problem-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
