'use client';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

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
  const industries = [
    { icon: '🌾', title: 'Agriculture and ESG', desc: 'RSPO/MSPO boundary auditing and EUDR tracking.' },
    { icon: '⛏️', title: 'Mining and Resource Management', desc: 'JORC 2012 / NI 43-101 volumetric auditing.' },
    { icon: '🏗️', title: 'Infrastructure and Construction', desc: 'Deformation and encroachment telemetry.' },
    { icon: '🏙️', title: 'Urban Planning', desc: 'FAR density mapping and solar shadow paths.' },
    { icon: '🌊', title: 'Environmental Intelligence', desc: 'EIA automation and sediment runoff trackers.' },
    { icon: '🌳', title: 'Forestry and Carbon Projects', desc: 'Verra VCS canopy height and volume metrics.' },
    { icon: '🚢', title: 'Maritime and Coastal Operations', desc: 'S-57 navigational contours and wave erosion.' },
    { icon: '⚡', title: 'Energy and Renewables', desc: 'GHI solar yield and Weibull wind vector maps.' },
    { icon: '🚨', title: 'Emergency Response', desc: 'Rothermel wildfire propagation paths and flood routing.' },
    { icon: '🛡️', title: 'Defense and Security', desc: 'SCIF-ready viewsheds and terrain threat tracking.' }
  ];

  return (
    <>
      {/* ──────── HERO ──────── */}
      <section className="hero-bg" style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        position: 'relative', overflow: 'hidden', paddingTop: '72px',
      }}>
        <div className="grid-bg" style={{ position:'absolute', inset:0, pointerEvents:'none' }} />
        <div className="container" style={{
          display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '3rem',
          alignItems: 'center', position: 'relative', zIndex: 1,
        }}>
          <div>
            <div className="badge" style={{ marginBottom: '1.5rem' }}>
              🛡️ Sovereign Intelligence Infrastructure
            </div>
            <h1 style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.8rem)', lineHeight: 1.08,
              marginBottom: '1.5rem', fontFamily: 'Outfit, sans-serif', fontWeight: 800,
            }}>
              Sovereign Intelligence for the{' '}<span className="gold-text">Physical</span>
              <br />and{' '}<span className="gradient-text">Digital World.</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem', maxWidth: 520 }}>
              Librae AI Labs is an elite technology company that designs and engineers sovereign intelligence infrastructure for organizations operating in high-consequence physical and digital environments.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', flexWrap:'wrap' }}>
              <Link href="/cahaya" className="btn-primary">🛰️ CAHAYA Sovereign</Link>
              <Link href="/lenuda" className="btn-secondary">🌿 LENUDA Platform</Link>
            </div>
            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }}>
              {[
                { value: 3, suffix:'M+', label: 'Hectares Monitored' },
                { value: 0, suffix:' ms', label: 'Local Compute Latency' },
                { value: 0, suffix:'%', label: 'Cloud Leakage Risk' },
              ].map((stat, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div className="stat-number"><AnimatedCounter target={stat.value} suffix={stat.suffix} /></div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Globe */}
          <div style={{ height: '600px', position: 'relative' }}>
            <Globe />
          </div>
        </div>
      </section>

      {/* ──────── CORE CREED ──────── */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(180deg,#000A1A,#001133)', position: 'relative' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
          <div className="accent-line" style={{ margin: '0 auto 2rem' }} />
          <h4 style={{ color: '#D4AF37', fontFamily: 'Space Mono, monospace', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>
            Our Foundational Creed
          </h4>
          <p style={{
            color: 'var(--text-primary)', fontSize: '1.4rem', lineHeight: 1.8, fontFamily: 'Outfit, sans-serif', fontWeight: 600, letterSpacing: '0.3px',
            marginBottom: '2rem'
          }}>
            "Better decisions emerge when information becomes understandable, traceable, and actionable."
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 2, maxWidth: 650, margin: '0 auto' }}>
            We believe technology should augment human judgment, not replace it. Physical systems, environmental conditions, and critical infrastructure involve high-consequence decisions where accuracy, traceability, and security matter deeply.
          </p>
        </div>
      </section>

      {/* ──────── PRODUCT ECOSYSTEM ──────── */}
      <section className="section-padding grid-bg" style={{ background: '#000A1A' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="accent-line" style={{ margin:'0 auto 1.5rem' }} />
            <h2 className="section-title">The Unified Product Ecosystem</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: 600, margin: '0 auto' }}>
              Librae AI Labs engineers three interconnected operational layers that form a complete sovereign intelligence framework.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {/* BAYU */}
            <div className="glass-card" style={{ padding: '2.5rem', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg,#4A9EFF,transparent)' }} />
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🤖</div>
                <h3 style={{ color: '#4A9EFF', fontSize: '1.4rem', marginBottom: '0.5rem', fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}>BAYU</h3>
                <p style={{ color: '#607090', fontSize: '0.75rem', fontStyle: 'italic', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Autonomous Commercial Automation Engine
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  A coordinated orchestration platform designed to handle complex information processing, structural pipeline tracking, high-volume documentation preparation, and operational asset workflows under strict human supervision.
                </p>
              </div>
              <div style={{ marginTop: '2rem' }}>
                <Link href="/contact" className="btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>Inquire Details</Link>
              </div>
            </div>

            {/* LENUDA */}
            <div className="glass-card" style={{ padding: '2.5rem', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg,#2E8B57,transparent)' }} />
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🌿</div>
                <h3 style={{ color: '#2E8B57', fontSize: '1.4rem', marginBottom: '0.5rem', fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}>LENUDA</h3>
                <p style={{ color: '#607090', fontSize: '0.75rem', fontStyle: 'italic', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Cloud-Native Enterprise Environment
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  A unified, highly scalable cloud-native hub for geospatial twin rendering, intensive data ingestion workloads, distributed GPU infrastructure, and certified digital assets. Delivers enterprise-wide intelligence without massive local infrastructure investments.
                </p>
              </div>
              <div style={{ marginTop: '2rem' }}>
                <Link href="/lenuda" className="btn-secondary" style={{ width: '100%', justifyContent: 'center', borderColor: '#2E8B57', color: '#2E8B57' }}>Explore Platform</Link>
              </div>
            </div>

            {/* CAHAYA Sovereign */}
            <div className="glass-card" style={{ padding: '2.5rem', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg,#D4AF37,transparent)' }} />
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🛰️</div>
                <h3 style={{ color: '#D4AF37', fontSize: '1.4rem', marginBottom: '0.5rem', fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}>CAHAYA Sovereign</h3>
                <p style={{ color: '#607090', fontSize: '0.75rem', fontStyle: 'italic', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Local-First, Air-Gapped Simulation Framework
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  A high-performance geospatial intelligence and 3D terrain simulation platform built specifically for secure and disconnected environments. Processes multi-spectral imagery, drone LiDAR, and local vector data locally on client hardware via WebGPU.
                </p>
              </div>
              <div style={{ marginTop: '2rem' }}>
                <Link href="/cahaya" className="btn-secondary" style={{ width: '100%', justifyContent: 'center', borderColor: '#D4AF37', color: '#D4AF37' }}>Review Engine</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────── INDUSTRIES SERVED ──────── */}
      <section className="section-padding" style={{ background: 'linear-gradient(180deg,#000A1A,#001133)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="accent-line" style={{ margin: '0 auto 1.5rem' }} />
            <h2 className="section-title">High-Consequence Verticals We Serve</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: 600, margin: '0 auto' }}>
              Our unified infrastructure platforms natively support organizations operating across ten major sectors.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
            {industries.map((ind, i) => (
              <div key={i} className="glass-card" style={{ padding: '1.75rem', display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                <div style={{ fontSize: '2rem' }}>{ind.icon}</div>
                <div>
                  <h4 style={{ color: '#E0E2E5', fontSize: '1rem', fontWeight: 700, margin: '0 0 4px' }}>{ind.title}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── CORE PRINCIPLES ──────── */}
      <section className="section-padding grid-bg" style={{ background: '#000A1A' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div className="accent-line" />
              <h2 className="section-title">Core Principles of Librae Architecture</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                We engineer systems designed for years of uninterrupted operation and compliance verification. Every design choice is driven by these core pillars:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <strong style={{ color: '#D4AF37', display: 'block', marginBottom: '4px' }}>Sovereignty</strong>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>Organizations must retain absolute, structural control of their data assets and local execution environments.</p>
                </div>
                <div>
                  <strong style={{ color: '#2E8B57', display: 'block', marginBottom: '4px' }}>Determinism</strong>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>Calculations and outputs must be explainable, reproducible, and grounded in established, verifiable scientific methodologies.</p>
                </div>
                <div>
                  <strong style={{ color: '#4A9EFF', display: 'block', marginBottom: '4px' }}>Operational Intelligence</strong>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>Technology should actively simplify complexity and enable swift, confident human decisions at the operational boundary.</p>
                </div>
              </div>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="glass-card gold-glow" style={{ padding: '3rem', border: '1px solid rgba(212,175,55,0.25)', background: 'rgba(212,175,55,0.02)', textAlign: 'center' }}>
                <span style={{ fontSize: '3rem', marginBottom: '1.5rem', display: 'block' }}>🛡️</span>
                <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', marginBottom: '1rem', fontWeight: 800 }}>Librae AI Labs sdn bhd</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                  Registered and based in Batu Gajah, Perak & Kuala Lumpur, Malaysia. Delivering enterprise-grade environmental and geospatial infrastructure globally.
                </p>
                <Link href="/about" className="btn-primary" style={{ width: '100%', justifyContent: 'center', background: '#D4AF37', borderColor: '#D4AF37', color: '#000A1A' }}>
                  Learn Our History
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────── CTA FOOTER ──────── */}
      <section style={{ padding: '100px 0', background: 'linear-gradient(135deg,#001133,#001A00)', position: 'relative', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: 'var(--text-primary)', marginBottom: '1.5rem', fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}>
            Establish Your Environmental Trust Infrastructure
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 2, maxWidth: 600, margin: '0 auto 2.5rem' }}>
            Speak directly with our systems architects to deploy local-first simulation nodes or verify supply chain compliance.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/docs" className="btn-secondary" style={{ padding: '16px 40px' }}>📄 Read System Documentation</Link>
            <Link href="/contact" className="btn-primary" style={{ padding: '16px 40px' }}>🌿 Contact Librae AI Labs</Link>
          </div>
        </div>
      </section>
    </>
  );
}
