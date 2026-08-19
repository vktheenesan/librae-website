'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ProductEcosystem() {
  const [activeProduct, setActiveProduct] = useState('cahaya');

  const products = [
    {
      id: 'lenuda',
      name: 'LENUDA',
      badge: 'CLOUD SAAS ENGINE',
      subtitle: 'Unified Digital Twin & Environmental Intelligence Ledger',
      icon: '🌐',
      color: '#38bdf8',
      description: 'A cloud-native sovereign AI platform connecting multi-spectral satellite constellations with carbon ledgers and agricultural asset registries. Instant browser access with no local hardware requirements.',
      keyFeatures: [
        'Automated Sentinel-1/2 temporal satellite scans & NDVI canopy mapping',
        'Instant EUDR & MSPO compliance report generation in < 3 seconds',
        'Immutable Polygon L2 SHA-256 Merkle root carbon asset attestation',
        'Interactive estate boundary polygon ingestion (GeoJSON / Shapefile / KML)'
      ],
      primaryCTA: { label: 'Launch LENUDA Cloud →', href: 'https://lenuda.librae.work/Login', external: true },
      secondaryCTA: { label: 'Explore Architecture', href: '/lenuda', external: false }
    },
    {
      id: 'cahaya',
      name: 'CAHAYA (MPOB Edition)',
      badge: 'AIR-GAPPED LOCAL SOVEREIGN ENGINE',
      subtitle: 'Enhanced 100% Offline Multi-Modal Spatial Intelligence',
      icon: '🌴',
      color: '#D4AF37',
      description: 'The premier on-premise sovereign engine for plantation conglomerates and government agencies. Executes 100% offline on local silicon with zero cloud egress, certified 9.90e-31 MSE spatial drift, and full MPOB estate optimization.',
      keyFeatures: [
        'Zero-Egress local execution on consumer workstations (< 8GB RAM)',
        'Decoupled SE(3) Lie Group manifold engine with certified zero float drift',
        'Native offline GGUF local LLM reasoning and BNF grammar parser',
        'Complete EUDR, MSPO 2.0, RSPO, and JORC compliance templates'
      ],
      primaryCTA: { label: 'Request CAHAYA Staging →', href: '/cahaya', external: false },
      secondaryCTA: { label: 'Download MPOB White Paper', href: '/whitepapers/LIBRAE_CAHAYA_Executive_Summary.pdf', external: true }
    },
    {
      id: 'lei',
      name: 'LEI (Data Factory Engine)',
      badge: 'DATA FACTORY ENGINE · TERNARY 400MB+ RAM',
      subtitle: '1.58-Bit Ternary Edge AI for Drones, Robotics & Silicon',
      icon: '🛸',
      color: '#10b981',
      description: 'The high-throughput Data Factory Engine for edge devices, drones, and autonomous robotics. Replaces binary float matrix multipliers with 1.58-bit ternary {-1, 0, +1} SIMD operations, running full sovereign AI in only ~400MB+ RAM with 0.0564s multi-sensor fusion (LiDAR, SAR, RGB).',
      keyFeatures: [
        'Only ~400MB+ RAM footprint (Runs full sovereign AI on micro-controllers & edge companion boards)',
        '1.58-bit ternary BitNet {-1, 0, +1} replaces power-hungry binary float matrix multiplication',
        '0.0564s simultaneous LiDAR + SAR + RGB multi-modal fusion with sub-20µs kernel latency',
        'Deterministic SE(3) continuous Lie Group geometry with zero coordinate drift (9.90e-31 MSE)'
      ],
      primaryCTA: { label: 'Explore Data Factory Engine (LEI) →', href: '/lei', external: false },
      secondaryCTA: { label: 'Download LEI Benchmark Report', href: '/whitepapers/LIBRAE_LEI_Empirical_Benchmarks_Report.pdf', external: true }
    },
    {
      id: 'lia',
      name: 'LIA (Cybersecurity Future)',
      badge: 'CYBERSECURITY FUTURE · BNM SANDBOX READY',
      subtitle: 'Deterministic Cyber-Immunity for Banks, Machines & AI Agents',
      icon: '🛡️',
      color: '#a855f7',
      description: 'The future of cybersecurity for the AI agent era. Protects banks, financial institutions, critical infrastructure, and autonomous machines from prompt injections, formula hallucinations, and rogue tool calls with mathematical 100% determinism.',
      keyFeatures: [
        'Purpose-built for banks (BNM Sandbox & RMiT ready) and machines with autonomous execution permissions',
        'Five-Organ biological architecture (Vision, Shield, Reflex, Heal, Immune Memory)',
        'Deterministic BNF grammar firewall guaranteeing 100% output determinism & 0% hallucination',
        'Append-only SHA-256 Merkle DAG state rollback and unassailable statutory audit receipts'
      ],
      primaryCTA: { label: 'Explore Cybersecurity Future (LIA) →', href: '/lia', external: false },
      secondaryCTA: { label: 'Download LIA Blueprint (PDF)', href: '/whitepapers/LIBRAE_LIA_Executive_Master_White_Paper.pdf', external: true }
    }
  ];

  const current = products.find(p => p.id === activeProduct) || products[1];

  return (
    <section id="ecosystem" style={{
      padding: '120px 0',
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
            background: 'rgba(2, 132, 199, 0.08)',
            border: '1px solid rgba(2, 132, 199, 0.25)',
            borderRadius: '100px',
            color: '#38bdf8',
            fontSize: '0.78rem',
            fontFamily: 'Space Mono, monospace',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}>
            ⚡ Sovereign Flagship Product Suite
          </div>

          <h2 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: '1.5rem',
            fontFamily: 'Outfit, sans-serif',
            color: '#F0F4FF',
          }}>
            Four Specialized Platforms.{' '}
            <span style={{
              background: 'linear-gradient(135deg, #38bdf8 0%, #D4AF37 50%, #10b981 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              One Mathematical Core.
            </span>
          </h2>

          <p style={{
            color: '#A0B0CC',
            fontSize: '1.05rem',
            lineHeight: 1.8,
            margin: 0,
          }}>
            From instant cloud web analytics to air-gapped plantation edge servers and airborne drone chips, Librae provides unmatched sovereign computing capability.
          </p>
        </div>

        {/* 4 Product Selector Tabs */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1rem',
          marginBottom: '2.5rem',
        }} className="product-tabs">
          {products.map((p) => {
            const isActive = activeProduct === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActiveProduct(p.id)}
                style={{
                  padding: '1.5rem',
                  borderRadius: '14px',
                  border: isActive ? `1px solid ${p.color}` : '1px solid rgba(255, 255, 255, 0.08)',
                  background: isActive ? 'rgba(0, 25, 60, 0.85)' : 'rgba(0, 15, 35, 0.5)',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: isActive ? `0 0 25px ${p.color}25` : 'none',
                }}
              >
                <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>{p.icon}</div>
                <div style={{ color: p.color, fontFamily: 'Space Mono, monospace', fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>
                  {p.badge}
                </div>
                <div style={{ color: isActive ? '#F0F4FF' : '#A0B0CC', fontWeight: 800, fontSize: '1.1rem', fontFamily: 'Outfit, sans-serif' }}>
                  {p.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Product Detailed View */}
        <div style={{
          background: 'linear-gradient(145deg, rgba(0, 20, 55, 0.85) 0%, rgba(0, 10, 30, 0.95) 100%)',
          border: `1px solid ${current.color}40`,
          borderRadius: '20px',
          padding: '3rem',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: `linear-gradient(90deg, ${current.color}, transparent)`,
          }} />

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '3rem',
            alignItems: 'center',
          }} className="product-content-grid">
            
            {/* Left: Product Info & CTAs */}
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '4px 12px',
                background: `${current.color}15`,
                border: `1px solid ${current.color}35`,
                borderRadius: '100px',
                color: current.color,
                fontSize: '0.72rem',
                fontFamily: 'Space Mono, monospace',
                fontWeight: 700,
                marginBottom: '1rem',
              }}>
                {current.badge}
              </div>

              <h3 style={{
                fontSize: '2rem',
                fontWeight: 800,
                color: '#F0F4FF',
                marginBottom: '0.5rem',
                fontFamily: 'Outfit, sans-serif',
              }}>
                {current.name}
              </h3>

              <p style={{
                color: current.color,
                fontSize: '0.95rem',
                fontWeight: 600,
                marginBottom: '1.5rem',
              }}>
                {current.subtitle}
              </p>

              <p style={{
                color: '#A0B0CC',
                fontSize: '0.98rem',
                lineHeight: 1.8,
                marginBottom: '2rem',
              }}>
                {current.description}
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {current.primaryCTA.external ? (
                  <a
                    href={current.primaryCTA.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{
                      background: `linear-gradient(135deg, ${current.color}, #0284c7)`,
                      borderColor: current.color,
                      padding: '12px 24px',
                      fontSize: '0.9rem',
                    }}
                  >
                    {current.primaryCTA.label}
                  </a>
                ) : (
                  <Link
                    href={current.primaryCTA.href}
                    className="btn-primary"
                    style={{
                      background: `linear-gradient(135deg, ${current.color}, #0284c7)`,
                      borderColor: current.color,
                      padding: '12px 24px',
                      fontSize: '0.9rem',
                    }}
                  >
                    {current.primaryCTA.label}
                  </Link>
                )}

                {current.secondaryCTA.external ? (
                  <a
                    href={current.secondaryCTA.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                      padding: '12px 22px',
                      fontSize: '0.9rem',
                    }}
                  >
                    {current.secondaryCTA.label}
                  </a>
                ) : (
                  <Link
                    href={current.secondaryCTA.href}
                    className="btn-secondary"
                    style={{
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                      padding: '12px 22px',
                      fontSize: '0.9rem',
                    }}
                  >
                    {current.secondaryCTA.label}
                  </Link>
                )}
              </div>
            </div>

            {/* Right: Key Architectural Highlights Card */}
            <div style={{
              background: 'rgba(0, 10, 25, 0.7)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '14px',
              padding: '2rem',
            }}>
              <div style={{
                color: '#D4AF37',
                fontSize: '0.75rem',
                fontFamily: 'Space Mono, monospace',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}>
                <span>⚡</span> Technical Capabilities & Governance
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {current.keyFeatures.map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ color: current.color, fontSize: '0.9rem', lineHeight: 1.5 }}>✓</span>
                    <span style={{ color: '#E0E2E5', fontSize: '#0.88rem', lineHeight: 1.6 }}>
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 1024px) {
          .product-tabs { grid-template-columns: 1fr 1fr !important; }
          .product-content-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
        @media (max-width: 640px) {
          .product-tabs { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
