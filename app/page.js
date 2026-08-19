'use client';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import ProblemSolver from '@/components/ProblemSolver/ProblemSolver';
import BenchmarkProof from '@/components/BenchmarkProof/BenchmarkProof';
import ProductEcosystem from '@/components/ProductEcosystem/ProductEcosystem';
import RDHorizons from '@/components/RDHorizons/RDHorizons';
import WhitepaperHub from '@/components/WhitepaperHub/WhitepaperHub';

const Globe = dynamic(() => import('@/components/Globe/Globe'), { 
  ssr: false, 
  loading: () => <div style={{ width:'100%', height:'100%', background:'radial-gradient(circle at 60% 40%, #001A33, #000A1A)' }} /> 
});

function AnimatedCounter({ target, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        let start = 0;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { 
            setCount(target); 
            clearInterval(timer); 
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function HomePage() {
  return (
    <>
      {/* ──────── 1. ABOVE THE FOLD: QUIET AUTHORITY HERO ──────── */}
      <section className="hero-bg" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '90px',
        paddingBottom: '60px',
      }}>
        {/* Animated terrain grid background */}
        <div className="grid-bg terrain-grid" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

        {/* Ambient glow orbs */}
        <div className="glow-orb glow-orb-gold" style={{ width: '650px', height: '650px', top: '-120px', left: '-150px', zIndex: 0 }} />
        <div className="glow-orb glow-orb-emerald" style={{ width: '450px', height: '450px', bottom: '50px', right: '-80px', zIndex: 0 }} />
        <div className="glow-orb glow-orb-blue" style={{ width: '350px', height: '350px', top: '25%', right: '25%', zIndex: 0 }} />

        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '3.5rem',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }} id="hero-container">
          
          <div>
            {/* National Sovereign Authority Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '6px 16px',
              background: 'rgba(212, 175, 55, 0.08)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              borderRadius: '100px',
              marginBottom: '1.5rem',
            }}>
              <span style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#10b981',
                boxShadow: '0 0 10px #10b981',
                display: 'inline-block',
              }} />
              <span style={{
                color: '#D4AF37',
                fontSize: '0.74rem',
                fontFamily: 'Space Mono, monospace',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                fontWeight: 700,
              }}>
                Sovereign Artificial Intelligence Infrastructure
              </span>
            </div>

            {/* Sovereign Institutional Headline */}
            <h1 style={{
              fontSize: 'clamp(2.3rem, 4.2vw, 3.8rem)',
              lineHeight: 1.12,
              marginBottom: '1.5rem',
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 800,
              color: '#F0F4FF',
            }}>
              The Sovereign Artificial Intelligence Engine for{' '}
              <span style={{
                background: 'linear-gradient(135deg, #D4AF37 0%, #F0D060 40%, #10b981 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                National Security, Precision Agriculture, & Autonomous Edge Computing.
              </span>
            </h1>

            {/* Subheading / Value Proposition */}
            <p style={{
              color: '#A0B0CC',
              fontSize: '1.08rem',
              lineHeight: 1.85,
              marginBottom: '2.5rem',
              maxWidth: '620px',
            }}>
              Engineered for sovereign governments, plantation conglomerates, defense operators, and critical industries where public cloud AI is a disqualifying liability. <strong>100% offline, air-gapped, and mathematically deterministic.</strong>
            </p>

            {/* Primary Action Buttons */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              marginBottom: '3rem',
              flexWrap: 'wrap',
            }}>
              <a
                href="https://lenuda.librae.work/Login"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  background: 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)',
                  color: '#000A1A',
                  fontWeight: 800,
                  padding: '14px 28px',
                  fontSize: '0.92rem',
                }}
              >
                🚀 Launch LENUDA Cloud →
              </a>

              <Link
                href="/cahaya"
                className="btn-secondary"
                style={{
                  borderColor: 'rgba(212, 175, 55, 0.4)',
                  color: '#F0F4FF',
                  padding: '14px 24px',
                  fontSize: '0.92rem',
                }}
              >
                🌴 Explore CAHAYA (MPOB)
              </Link>

              <a
                href="#whitepapers"
                className="btn-secondary"
                style={{
                  borderColor: 'rgba(56, 189, 248, 0.4)',
                  color: '#38bdf8',
                  padding: '14px 24px',
                  fontSize: '0.92rem',
                }}
              >
                📑 Technical White Papers
              </a>
            </div>

            {/* 4 Hard Receipt Stat Terminals */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '0.75rem',
            }} className="hero-stats-grid">
              {[
                { value: '9.90e-31', suffix: ' MSE', label: 'SE(3) Zero Float Drift', color: '#D4AF37' },
                { value: '0.0564', suffix: 's', label: 'Sensor Fusion Latency', color: '#38bdf8' },
                { value: '100', suffix: '%', label: 'Output Determinism', color: '#10b981' },
                { value: '< 3.0', suffix: 's', label: 'EUDR / MSPO Audit', color: '#a855f7' },
              ].map((stat, i) => (
                <div
                  key={i}
                  style={{
                    background: 'rgba(0, 15, 38, 0.75)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderTop: `2px solid ${stat.color}`,
                    borderRadius: '10px',
                    padding: '1rem 0.75rem',
                    textAlign: 'center',
                  }}
                >
                  <div style={{
                    fontSize: 'clamp(1rem, 1.8vw, 1.3rem)',
                    color: stat.color,
                    fontFamily: 'Space Mono, monospace',
                    fontWeight: 700,
                  }}>
                    {stat.value}{stat.suffix}
                  </div>
                  <div style={{
                    fontSize: '0.66rem',
                    color: '#8090b0',
                    marginTop: '4px',
                    fontFamily: 'Space Mono, monospace',
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Interactive 3D Globe Viewport */}
          <div style={{ height: '580px', position: 'relative' }} className="hero-globe-container">
            <Globe />
          </div>

        </div>
      </section>

      {/* ──────── 2. THE FRICTION-FIRST PROBLEM SOLVER ──────── */}
      <ProblemSolver />

      {/* ──────── 3. EMPIRICAL PROOF AS HERO CONTENT ──────── */}
      <BenchmarkProof />

      {/* ──────── 4. SOVEREIGN FLAGSHIP PRODUCT ECOSYSTEM ──────── */}
      <ProductEcosystem />

      {/* ──────── 5. R&D ROADMAP & 29 TARGET SOVEREIGN DOMAINS ──────── */}
      <RDHorizons />

      {/* ──────── 6. INSTITUTIONAL DUE DILIGENCE WHITE PAPERS ──────── */}
      <WhitepaperHub />

      {/* ──────── 7. FOUNDATIONAL CREED & REGULATORY ALIGNMENT ──────── */}
      <section style={{
        padding: '110px 0',
        background: 'linear-gradient(180deg, #000A1A 0%, #00122e 50%, #000A1A 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '18rem',
          fontFamily: 'Outfit, sans-serif',
          fontWeight: 900,
          color: '#D4AF37',
          opacity: 0.02,
          lineHeight: 1,
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 0,
        }}>"</div>

        <div className="container" style={{ textAlign: 'center', maxWidth: 860, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{
            color: '#D4AF37',
            fontFamily: 'Space Mono, monospace',
            fontSize: '0.74rem',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            marginBottom: '1.5rem',
          }}>
            Institutional Creed · Librae AI Labs Sdn. Bhd.
          </div>

          <p style={{
            color: '#F0F4FF',
            fontSize: 'clamp(1.25rem, 2.8vw, 1.7rem)',
            lineHeight: 1.75,
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 700,
            marginBottom: '2rem',
          }}>
            "Truth exists with or without us. Librae ensures it cannot be ignored."
          </p>

          <p style={{
            color: '#A0B0CC',
            fontSize: '1rem',
            lineHeight: 1.9,
            maxWidth: 680,
            margin: '0 auto 3rem',
          }}>
            Physical systems, national cadastral boundaries, and critical infrastructure involve zero-tolerance decisions. Librae combines double-precision Lie Group geometry, small-core offline BNF parsers, and SHA-256 cryptographic non-repudiation so sovereign entities retain structural control over their physical and digital future.
          </p>

          {/* Institutional Compliance Badges */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
          }}>
            {[
              'SIRIM QAS ISO/IEC 42001 (AI Management)',
              'ISO/IEC 27001 (Information Security)',
              'EUDR (EU 2023/1115) Art. 9 Compliant',
              'MSPO 2.0 (MS 2530:2022) Certified',
              'CAAM CAD 6011 Drone Safety Aligned',
              'Bank Negara Malaysia RMiT Ready',
            ].map((std, idx) => (
              <div
                key={idx}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  background: 'rgba(212, 175, 55, 0.05)',
                  border: '1px solid rgba(212, 175, 55, 0.2)',
                  borderRadius: '100px',
                  color: '#CBD5E1',
                  fontSize: '0.72rem',
                  fontFamily: 'Space Mono, monospace',
                }}
              >
                <span style={{ color: '#D4AF37' }}>✓</span> {std}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── 8. HIGH-CONSEQUENCE DEPLOYMENT GATEWAY CTA ──────── */}
      <section style={{
        padding: '110px 0',
        background: 'linear-gradient(135deg, #00102b 0%, #000A1A 100%)',
        borderTop: '1px solid rgba(212, 175, 55, 0.2)',
        position: 'relative',
        textAlign: 'center',
      }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            borderRadius: '100px',
            color: '#34d399',
            fontSize: '0.74rem',
            fontFamily: 'Space Mono, monospace',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}>
            ⚡ National Deployment & Enterprise Briefings
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 3.8vw, 2.8rem)',
            color: '#F0F4FF',
            marginBottom: '1.5rem',
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 800,
            lineHeight: 1.2,
          }}>
            Establish Your Sovereign Intelligence Infrastructure.
          </h2>

          <p style={{
            color: '#A0B0CC',
            fontSize: '1.05rem',
            lineHeight: 1.85,
            marginBottom: '2.5rem',
          }}>
            Connect directly with our systems architecture team to schedule a technical due diligence briefing, evaluate on-premise air-gapped staging, or inspect live mathematical receipts.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/contact"
              className="btn-primary"
              style={{
                padding: '16px 36px',
                fontSize: '0.95rem',
                background: 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)',
                color: '#000A1A',
                fontWeight: 800,
              }}
            >
              ✉ Schedule Architecture Briefing
            </Link>

            <a
              href="https://lenuda.librae.work/Login"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{
                padding: '16px 32px',
                fontSize: '0.95rem',
                borderColor: 'rgba(255, 255, 255, 0.2)',
              }}
            >
              🚀 Launch LENUDA Cloud Portal ↗
            </a>
          </div>

          <div style={{ marginTop: '2.5rem', color: '#64748B', fontSize: '0.78rem', fontFamily: 'Space Mono, monospace' }}>
            Direct Gateway: <a href="mailto:theenesanvk@librae.work" style={{ color: '#D4AF37', textDecoration: 'none' }}>theenesanvk@librae.work</a> · Tel: <a href="tel:+60182639800" style={{ color: '#38bdf8', textDecoration: 'none' }}>+6018-2639800</a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          #hero-container { grid-template-columns: 1fr !important; }
          .hero-globe-container { height: 420px !important; }
          .hero-stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .hero-stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
