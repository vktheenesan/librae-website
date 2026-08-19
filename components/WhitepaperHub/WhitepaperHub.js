'use client';

export default function WhitepaperHub() {
  const suites = [
    {
      category: 'CAHAYA Sovereign Engine Track (MPOB Edition)',
      icon: '🌴',
      color: '#D4AF37',
      papers: [
        {
          title: 'CAHAYA Sovereign Engine: Executive Technical White Paper',
          filename: 'LIBRAE_CAHAYA_Executive_Summary.pdf',
          type: 'Master Executive White Paper',
          pages: '12 Pages · MRANTI Dossier',
          desc: 'Complete architectural foundations of the Decoupled SE(3) Tensor Engine, air-gapped on-premise deployment, and MPOB estate optimization.'
        },
        {
          title: '16-Test Empirical Benchmark Proof & Mathematical Invariance',
          filename: 'LIBRAE_CAHAYA_Empirical_Benchmark_Report.pdf',
          type: 'Empirical Benchmark Report',
          pages: '16 Verification Test Receipts',
          desc: 'Certified mathematical proof of 9.90e-31 MSE zero coordinate drift under continuous 64-bit Lie Group SE(3) transformations.'
        },
        {
          title: 'ISO 42001 / ISO 27001 / ISO 14064 Standards Compliance Dossier',
          filename: 'LIBRAE_CAHAYA_ISO_Standards_Compliance.pdf',
          type: 'Statutory Compliance Dossier',
          pages: 'SIRIM Audit Ready',
          desc: 'Full regulatory matrix alignment for EUDR (EU 2023/1115), MSPO 2.0 (MS 2530:2022), and IPCC Tier 2 Carbon Accounting.'
        },
        {
          title: 'The LENUDA Protocol & CAHAYA Engine: Architectural Bible',
          filename: 'THE_LENUDA_PROTOCOL_CAHAYA_ARCHITECTURAL_BIBLE.pdf',
          type: 'Comprehensive Engineering Blueprint',
          pages: 'Full System Architecture',
          desc: 'Deep technical blueprint covering Continuous Manifolds, Left-Brain GGUF BNF parsers, and Polygon L2 Merkle anchoring.'
        }
      ]
    },
    {
      category: 'LEI Embedded Drone Intelligence Track',
      icon: '🛸',
      color: '#38bdf8',
      papers: [
        {
          title: 'LEI (Librae Edge Intelligence): Executive Technical Whitepaper',
          filename: 'LIBRAE_LEI_Executive_Technical_Whitepaper.pdf',
          type: 'Edge System Architecture',
          pages: 'Autonomous Aerial Core',
          desc: 'Design of the 1.58-bit BitNet SIMD matrix kernel and real-time rigid body pose estimation for commercial UAVs.'
        },
        {
          title: 'Multi-Sensor Fusion & Latency Benchmark Report',
          filename: 'LIBRAE_LEI_Empirical_Benchmarks_Report.pdf',
          type: 'Empirical Benchmark',
          pages: '0.0564s Fusion Receipt',
          desc: 'Live hardware receipts for simultaneous LiDAR point clouds, Sentinel-1 SAR radar, and RGB optical telemetry fusion.'
        },
        {
          title: 'UAS Drone Regulatory & Standards Compliance Dossier',
          filename: 'LIBRAE_LEI_Standards_Compliance_Dossier.pdf',
          type: 'Aviation Compliance',
          pages: 'CAAM CAD 6011 & ISO 21384-3',
          desc: 'Civil Aviation Authority of Malaysia UTM compliance and safety envelope specifications for autonomous BVLOS operations.'
        }
      ]
    },
    {
      category: 'LIA Deterministic Cyber-Immune Agency Track',
      icon: '🛡️',
      color: '#a855f7',
      papers: [
        {
          title: 'LIA Master Cybersecurity Engineering Blueprint',
          filename: 'LIBRAE_LIA_Executive_Master_White_Paper.pdf',
          type: 'Master Cybersecurity Paper',
          pages: 'Five Organs Architecture',
          desc: 'Small-core deterministic enforcement, eBPF telemetry, WASM policy isolation, and self-healing zero-trust state recovery.'
        },
        {
          title: 'LIA Zero-Trust Empirical Verification Benchmark Report',
          filename: 'LIBRAE_LIA_Empirical_Benchmarks_Report.pdf',
          type: 'Verification Benchmark',
          pages: '100% Determinism Proof',
          desc: 'Empirical tests verifying zero hallucination on policy enforcement and sub-millisecond reflex response against zero-day exploits.'
        },
        {
          title: 'Bank Negara Malaysia RMiT & ISO 27001 Compliance Dossier',
          filename: 'LIBRAE_LIA_Standards_Compliance_Dossier.pdf',
          type: 'FinTech & Defense Compliance',
          pages: 'BNM Sandbox Ready',
          desc: 'Statutory compliance framework for banking regulatory sandboxes and critical national information infrastructure defense.'
        },
        {
          title: 'LIA Core Zero-Trust Verification Report',
          filename: 'LIBRAE_LIA_Zero_Trust_Verification_Report.pdf',
          type: 'Technical Audit Report',
          pages: 'Forensic State Proof',
          desc: 'Technical verification and state reconciliation audit for deterministic cyber-immune protection.'
        }
      ]
    }
  ];

  return (
    <section id="whitepapers" style={{
      padding: '120px 0',
      background: 'linear-gradient(180deg, #000A1A 0%, #00122e 50%, #000A1A 100%)',
      position: 'relative',
    }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto 4rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            background: 'rgba(212, 175, 55, 0.08)',
            border: '1px solid rgba(212, 175, 55, 0.25)',
            borderRadius: '100px',
            color: '#D4AF37',
            fontSize: '0.78rem',
            fontFamily: 'Space Mono, monospace',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}>
            📑 Institutional Due Diligence Library
          </div>

          <h2 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: '1.5rem',
            fontFamily: 'Outfit, sans-serif',
            color: '#F0F4FF',
          }}>
            Technical White Papers &{' '}
            <span style={{
              background: 'linear-gradient(135deg, #D4AF37 0%, #F0D060 50%, #38bdf8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Standards Compliance Dossiers.
            </span>
          </h2>

          <p style={{
            color: '#A0B0CC',
            fontSize: '1.05rem',
            lineHeight: 1.8,
            margin: 0,
          }}>
            Download complete publication-grade PDF white papers, 16-test empirical benchmark reports, and SIRIM QAS ISO audit dossiers for technical due diligence.
          </p>
        </div>

        {/* 3 Track Suites */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {suites.map((suite, sIdx) => (
            <div key={sIdx}>
              
              {/* Suite Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '1.5rem',
                paddingBottom: '0.75rem',
                borderBottom: `1px solid ${suite.color}30`,
              }}>
                <span style={{ fontSize: '1.8rem' }}>{suite.icon}</span>
                <h3 style={{ fontSize: '1.3rem', color: '#F0F4FF', fontWeight: 800, fontFamily: 'Outfit, sans-serif' }}>
                  {suite.category}
                </h3>
              </div>

              {/* Papers Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
                gap: '1.5rem',
              }}>
                {suite.papers.map((paper, pIdx) => (
                  <div
                    key={pIdx}
                    className="glass-card"
                    style={{
                      padding: '1.75rem',
                      borderRadius: '14px',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      background: 'rgba(0, 15, 38, 0.65)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      transition: 'all 0.25s ease',
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <span style={{
                          color: suite.color,
                          fontFamily: 'Space Mono, monospace',
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                        }}>
                          {paper.type}
                        </span>
                        <span style={{
                          color: '#607090',
                          fontSize: '0.7rem',
                          fontFamily: 'Space Mono, monospace',
                        }}>
                          {paper.pages}
                        </span>
                      </div>

                      <h4 style={{
                        color: '#F0F4FF',
                        fontSize: '1.05rem',
                        fontWeight: 700,
                        lineHeight: 1.4,
                        marginBottom: '0.75rem',
                        fontFamily: 'Outfit, sans-serif',
                      }}>
                        {paper.title}
                      </h4>

                      <p style={{
                        color: '#A0B0CC',
                        fontSize: '0.84rem',
                        lineHeight: 1.6,
                        marginBottom: '1.5rem',
                      }}>
                        {paper.desc}
                      </p>
                    </div>

                    <div style={{
                      paddingTop: '1rem',
                      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                      <span style={{
                        color: '#10b981',
                        fontSize: '0.7rem',
                        fontFamily: 'Space Mono, monospace',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}>
                        <span>🔐</span> SHA-256 Verified
                      </span>

                      <a
                        href={`/whitepapers/${paper.filename}`}
                        download={paper.filename}
                        className="btn-primary"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '8px 16px',
                          fontSize: '0.78rem',
                          background: `linear-gradient(135deg, ${suite.color}, #0284c7)`,
                          borderColor: suite.color,
                        }}
                      >
                        📥 Download PDF
                      </a>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
