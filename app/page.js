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
  const [activeVertical, setActiveVertical] = useState(null);

  const industries = [
    {
      icon: '🌾',
      title: 'Agriculture and ESG',
      desc: 'RSPO/MSPO boundary auditing and EUDR tracking.',
      about: 'EU Deforestation Regulation (EUDR) boundary auditing, RSPO/MSPO certification mapping, and supply-chain logging verification.',
      benefit: 'Automates zero-deforestation compliance reporting, reducing manual field inspections by 90% while providing audit-ready legal evidence.',
      method: 'Combine daily Sentinel/Landsat satellite observations with local GPS parcel boundaries in the LENUDA ledger, issuing cryptographic compliance certificates.'
    },
    {
      icon: '⛏️',
      title: 'Mining and Resource Management',
      desc: 'JORC 2012 / NI 43-101 volumetric auditing.',
      about: 'JORC Code 2012 and NI 43-101 compliant volumetric stockpile auditing, open-pit quarry progression modeling, and safety buffer encroachment tracing.',
      benefit: 'Eliminates surveyor hazard and increases survey frequency from quarterly to weekly with millimeter-level drone photogrammetry.',
      method: 'Process high-resolution drone-acquired LiDAR point-clouds through the CAHAYA 3D engine to calculate cut-and-fill volume sheets in minutes.'
    },
    {
      icon: '🏗️',
      title: 'Infrastructure and Construction',
      desc: 'Deformation and encroachment telemetry.',
      about: 'Pipeline deformation monitoring, utility easement encroachment telemetry, and structural settling analysis for high-value civil engineering.',
      benefit: 'Detects structural movement or encroachment hazards before failure events occur, protecting critical transport and energy corridors.',
      method: 'Run continuous Synthetic Aperture Radar (SAR) interferometry (InSAR) on orbiting constellation imagery to map sub-centimeter land displacement.'
    },
    {
      icon: '🏙️',
      title: 'Urban Planning',
      desc: 'FAR density mapping and solar shadow paths.',
      about: 'Floor Area Ratio (FAR) density modeling, zoning height compliance, building shadow cast paths, and local solar insolation planning.',
      benefit: 'Accelerates public zoning reviews, optimizes solar capture configurations, and minimizes microclimatic heat islands.',
      method: 'Import municipal GIS shapes into the CAHAYA local simulation sandbox to run real-time solar vector rays and height checks.'
    },
    {
      icon: '🌊',
      title: 'Environmental Intelligence',
      desc: 'EIA automation and sediment runoff trackers.',
      about: 'Environmental Impact Assessments (EIAs), soil erosion modeling, pollutant dispersion analysis, and sediment runoff tracking.',
      benefit: 'Satisfies environmental ministry permitting requirements faster, proving conservation adherence with verifiable scientific models.',
      method: 'Simulate seasonal rainfall and runoff vectors across 3D Digital Elevation Models (DEMs) inside CAHAYA\'s simulation core.'
    },
    {
      icon: '🌳',
      title: 'Forestry and Carbon Projects',
      desc: 'Verra VCS canopy height and volume metrics.',
      about: 'Canopy Height Models (CHM) from LiDAR, biomass volume estimations, and Verra VCS/Gold Standard compliance logs.',
      benefit: 'Locks in carbon credit valuation with transparent, verifiable data, eliminating audit rejection risks from verification bodies.',
      method: 'Extract individual tree metrics and carbon volume curves from airborne LiDAR scans, anchored in the LENUDA ledger.'
    },
    {
      icon: '🚢',
      title: 'Maritime and Coastal Operations',
      desc: 'S-57 navigational contours and wave erosion.',
      about: 'S-57 contour chart verification, bathymetric shoreline drift modeling, and harbor engineering feasibility assessments.',
      benefit: 'Ensures safe vessel draft clearance, maps coastal erosion vectors, and identifies optimal locations for sea walls.',
      method: 'Overlay echo-sounder datasets onto coastal elevation models to simulate wave energy impact paths.'
    },
    {
      icon: '⚡',
      title: 'Energy and Renewables',
      desc: 'GHI solar yield and wind vector maps.',
      about: 'Global Horizontal Irradiance (GHI) mapping for solar fields, wind turbine site optimization, and micro-grid layout modeling.',
      benefit: 'Maximizes energy output per acre while minimizing wind turbine wake losses and solar shadow obstructions.',
      method: 'Run localized Weibull wind distribution and shading simulation sweeps inside CAHAYA across terrain slopes.'
    },
    {
      icon: '🚨',
      title: 'Emergency Response',
      desc: 'Active flood inundation routing and wildfire paths.',
      about: 'Active flood inundation routing, Rothermel wildfire propagation vectors, and optimal evacuation route simulations.',
      benefit: 'Provides incident commanders with precise, life-saving egress coordinates and predictive hazard maps in real time.',
      method: 'Input real-time telemetry (wind speed, soil moisture) into CAHAYA\'s local terrain model to project hazard paths.'
    },
    {
      icon: '🛡️',
      title: 'Defense and Security',
      desc: 'SCIF-ready viewsheds and terrain threat tracking.',
      about: 'SCIF-ready local viewsheds, route line-of-sight hazard checks, and secure tactical terrain analysis.',
      benefit: 'Secures tactical operations with 100% offline, zero-network-leakage spatial intelligence.',
      method: 'Run multi-point visibility sweeps across classified high-resolution elevation maps inside a local secure node.'
    }
  ];

  return (
    <>
      {/* ──────── HERO ──────── */}
      <section className="hero-bg" style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        position: 'relative', overflow: 'hidden', paddingTop: '72px',
      }}>
        {/* Animated terrain grid */}
        <div className="grid-bg terrain-grid" style={{ position:'absolute', inset:0, pointerEvents:'none' }} />

        {/* Ambient glow orbs — 3D world depth layering */}
        <div className="glow-orb glow-orb-gold" style={{ width: '600px', height: '600px', top: '-100px', left: '-150px', zIndex: 0 }} />
        <div className="glow-orb glow-orb-emerald" style={{ width: '400px', height: '400px', bottom: '50px', right: '-80px', zIndex: 0 }} />
        <div className="glow-orb glow-orb-blue" style={{ width: '300px', height: '300px', top: '30%', right: '30%', zIndex: 0 }} />

        <div className="container" style={{
          display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '3rem',
          alignItems: 'center', position: 'relative', zIndex: 1,
        }}>
          <div>
            {/* Slogan + badge row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <div className="badge" style={{ animation: 'fadeInDown 0.6s ease forwards' }}>
                🌍 Voice of Nature
              </div>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.7rem', letterSpacing: '1.5px', textTransform: 'uppercase', fontFamily: 'Space Mono, monospace' }}>
                Sovereign Intelligence Infrastructure
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.8rem)', lineHeight: 1.08,
              marginBottom: '1.5rem', fontFamily: 'Outfit, sans-serif', fontWeight: 800,
              animation: 'fadeInUp 0.7s 0.1s ease both',
            }}>
              Intelligence for the{' '}<span className="shimmer-text">Physical</span>
              <br />and{' '}<span className="gradient-text">Digital World.</span>
            </h1>

            <p style={{
              color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.85,
              marginBottom: '2rem', maxWidth: 520,
              animation: 'fadeInUp 0.7s 0.2s ease both',
            }}>
              Librae AI Labs engineers sovereign intelligence infrastructure — translating the physical world into verifiable, actionable 3D digital reality. Built for governments, resource operators, and high-consequence environments.
            </p>

            <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', flexWrap:'wrap', animation: 'fadeInUp 0.7s 0.3s ease both' }}>
              <Link href="/cahaya" className="btn-primary">🛰️ Explore CAHAYA</Link>
              <Link href="/lenuda" className="btn-secondary">🌿 LENUDA Platform</Link>
            </div>

            {/* Terminal stat boxes */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem', animation: 'fadeInUp 0.7s 0.4s ease both' }}>
              {[
                { value: 3, suffix:'M+', label: 'Hectares Monitored', color: '#D4AF37' },
                { value: 0, suffix:' ms', label: 'Cloud Latency', color: '#2E8B57' },
                { value: 0, suffix:'%', label: 'Egress Risk', color: '#4A9EFF' },
              ].map((stat, i) => (
                <div key={i} className="stat-terminal" style={{ textAlign: 'center', borderTopColor: stat.color }}>
                  <div className="stat-number" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: stat.color }}>
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="stat-label" style={{ fontSize: '0.7rem', marginTop: '0.4rem' }}>{stat.label}</div>
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
      <section style={{ padding: '90px 0', background: 'linear-gradient(180deg,#000A1A,#001133)', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative large quote mark */}
        <div style={{
          position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)',
          fontSize: '18rem', fontFamily: 'Outfit, sans-serif', fontWeight: 900,
          color: '#D4AF37', opacity: 0.025, lineHeight: 1, pointerEvents: 'none',
          userSelect: 'none', zIndex: 0,
        }}>"</div>

        <div className="container" style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="accent-line" style={{ margin: '0 auto 2rem' }} />
          <div style={{ color: 'var(--text-muted)', fontFamily: 'Space Mono, monospace', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '1.5rem' }}>
            Foundational Creed · Librae AI Labs
          </div>
          <p style={{
            color: 'var(--text-primary)', fontSize: 'clamp(1.15rem, 2.5vw, 1.5rem)',
            lineHeight: 1.85, fontFamily: 'Outfit, sans-serif', fontWeight: 600,
            letterSpacing: '0.2px', marginBottom: '2rem',
          }}>
            "Better decisions emerge when information becomes{' '}
            <span className="gold-text">understandable</span>, traceable,
            and{' '}<span style={{ color: '#2E8B57' }}>actionable</span>."
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 2, maxWidth: 620, margin: '0 auto 2rem' }}>
            We believe technology should augment human judgment, not replace it. Physical systems, environmental conditions, and critical infrastructure involve high-consequence decisions where accuracy, traceability, and security matter deeply.
          </p>
          {/* Slogan stamp */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '6px 18px', borderRadius: '100px',
            background: 'rgba(46,139,87,0.08)',
            border: '1px solid rgba(46,139,87,0.2)',
            color: '#3EAB6C', fontSize: '0.75rem',
            fontFamily: 'Space Mono, monospace', letterSpacing: '1px',
          }}>
            🌱 LENUDA · Librae Environment Nature Unified Digital Asset
          </div>
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

            {/* CAHAYA */}
            <div className="glass-card" style={{ padding: '2.5rem', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg,#D4AF37,transparent)' }} />
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🛰️</div>
                <h3 style={{ color: '#D4AF37', fontSize: '1.4rem', marginBottom: '0.5rem', fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}>CAHAYA</h3>
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
              Our unified infrastructure platforms natively support organizations operating across ten major sectors. Click a sector to view operational details and access workflows.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
            {industries.map((ind, i) => {
              const isActive = activeVertical === i;
              return (
                <div 
                  key={i} 
                  className="glass-card" 
                  onClick={() => setActiveVertical(isActive ? null : i)}
                  style={{ 
                    padding: '1.75rem', 
                    display: 'flex', 
                    flexDirection: 'column',
                    gap: '1.25rem', 
                    cursor: 'pointer',
                    borderColor: isActive ? 'var(--gold)' : 'var(--border-subtle)',
                    background: isActive ? 'rgba(0, 35, 90, 0.4)' : 'var(--bg-card)',
                    boxShadow: isActive ? '0 10px 30px rgba(212,175,55,0.15)' : 'none',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                    <div style={{ fontSize: '2.2rem', filter: isActive ? 'drop-shadow(0 0 8px var(--gold))' : 'none' }}>{ind.icon}</div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ color: isActive ? 'var(--gold)' : '#E0E2E5', fontSize: '1.05rem', fontWeight: 700, margin: '0 0 4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span>{ind.title}</span>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{isActive ? '▲' : '▼'}</span>
                      </h4>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>{ind.desc}</p>
                    </div>
                  </div>
                  
                  {isActive && (
                    <div 
                      onClick={(e) => e.stopPropagation()} 
                      style={{ 
                        marginTop: '1rem', 
                        paddingTop: '1.25rem', 
                        borderTop: '1px solid rgba(255,255,255,0.06)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                      }}
                    >
                      <div>
                        <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Operational Scope</strong>
                        <p style={{ color: 'var(--text-primary)', fontSize: '0.85rem', margin: 0, lineHeight: 1.6 }}>{ind.about}</p>
                      </div>
                      <div>
                        <strong style={{ color: '#2E8B57', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>System Benefits</strong>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: 0, lineHeight: 1.6 }}>{ind.benefit}</p>
                      </div>
                      <div>
                        <strong style={{ color: '#4A9EFF', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Typical Methodology</strong>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: 0, lineHeight: 1.6 }}>{ind.method}</p>
                      </div>
                      <div style={{ marginTop: '0.5rem' }}>
                        <a 
                          href="https://lenuda.librae.work/Login" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="btn-primary" 
                          style={{ 
                            fontSize: '0.8rem', 
                            padding: '8px 20px', 
                            display: 'inline-flex', 
                            alignItems: 'center', 
                            gap: '6px',
                            background: 'linear-gradient(135deg, var(--gold), var(--gold-dark))'
                          }}
                        >
                          Access LENUDA Portal <span>↗</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
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
