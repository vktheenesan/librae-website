'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CahayaPage() {
  const [trialForm, setTrialForm] = useState({ name: '', email: '', entity: '' });
  const [trialLoading, setTrialLoading] = useState(false);
  const [trialToken, setTrialToken] = useState(null);
  const [trialError, setTrialError] = useState(null);
  const [detectedOS, setDetectedOS] = useState(null);
  const [activeStep, setActiveStep] = useState(null);
  const [checkoutLoading, setCheckoutLoading] = useState(null);

  // Auto-detect user's OS on mount
  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes('mac')) setDetectedOS('macOS');
    else if (ua.includes('win')) setDetectedOS('Windows');
    else if (ua.includes('linux')) setDetectedOS('Linux');
    else setDetectedOS('Windows');
  }, []);

  const handleRequestTrial = async (e) => {
    e.preventDefault();
    setTrialLoading(true);
    setTrialError(null);
    try {
      const res = await fetch('/api/trial', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(trialForm),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to generate token');
      }
      const data = await res.json();
      setTrialToken(data.token);
    } catch (err) {
      setTrialError(err.message || 'Handshake failed. License server offline.');
    } finally {
      setTrialLoading(false);
    }
  };

  const handleDownload = async (platform, filename) => {
    try {
      await fetch('/api/telemetry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: `download_cahaya_${platform.toLowerCase()}`,
          domain: 'website',
          metadata: { platform, file: filename },
        }),
      });
    } catch (err) {
      console.error('Telemetry handshake failed:', err);
    }
    const link = document.createElement('a');
    link.href = `/downloads/${filename}`;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCheckout = async (tier) => {
    setCheckoutLoading(tier);
    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tier }),
      });
      const data = await res.json();
      if (data.checkout_url) {
        window.location.href = data.checkout_url;
      } else {
        alert(data.error || 'Payment system unavailable. Contact theenesanvk@librae.work');
      }
    } catch {
      alert('Payment system offline. Contact theenesanvk@librae.work directly.');
    } finally {
      setCheckoutLoading(null);
    }
  };

  const domains = [
    { title: 'Agriculture & ESG', icon: '🌾', desc: 'EU Deforestation Regulation (EUDR) boundary auditing & RSPO compliance verification.' },
    { title: 'Mining & Resources', icon: '⛏️', desc: 'JORC Code 2012 mineral tonnage mapping, stockpile volumetric calculations.' },
    { title: 'Urban Planning', icon: '🏙️', desc: 'Zoning Floor Area Ratio (FAR) compliance, building shadow casting simulations.' },
    { title: 'Defense & Security', icon: '🛡️', desc: 'Zero-egress terrain hazard, route obstruction modeling, SCIF-grade viewsheds.' },
    { title: 'Maritime & Coastal', icon: '🚢', desc: 'High-fidelity bathymetry processing, S-57 contours, shoreline drift modeling.' },
    { title: 'Environmental', icon: '🌿', desc: 'EPA-compliant EIA simulations and local pollutant dispersion routes.' },
    { title: 'Energy & Renewables', icon: '⚡', desc: 'Solar GHI and Wind Weibull distribution mapping for asset siting.' },
    { title: 'Infrastructure', icon: '🏗️', desc: 'Corridor utility pipeline surveys, rail alignment deformation monitoring.' },
    { title: 'Forestry & Carbon', icon: '🌲', desc: 'Canopy Height Models (CHM) from LiDAR and Verra VCS carbon credit calculation.' },
    { title: 'Emergency Response', icon: '🚨', desc: 'Active flood inundation routing, wildfire propagation paths, evacuation simulation.' },
  ];

  const downloadFiles = {
    macOS: { file: 'cahaya-macos-universal.zip', label: '🍏 macOS Universal', ext: '.zip', size: '~3.2 MB' },
    Windows: { file: 'cahaya-windows-setup.zip', label: '💻 Windows Setup', ext: '.zip', size: '3.2 MB' },
    Linux: { file: 'cahaya-linux.zip', label: '🐧 Linux Standalone', ext: '.zip', size: '3.2 MB' },
  };

  const gettingStarted = [
    { step: 1, title: 'Download CAHAYA', desc: 'Click the download button for your operating system. The installer includes everything you need.', time: '~30 seconds' },
    { step: 2, title: 'Run the Installer', desc: 'Extract and run the setup script — it creates a Python virtual environment and installs all dependencies automatically.', time: '~2 minutes' },
    { step: 3, title: 'Choose Your Industry Domain', desc: 'On first launch, select from 10 specialized industry domains. Each comes with tailored AI models, compliance templates, and analysis workflows.', time: '~1 minute' },
    { step: 4, title: 'Enter Your Trial Token', desc: 'Request a free 30-day trial token below, or enter your purchased license key. CAHAYA binds to your hardware fingerprint automatically.', time: '~30 seconds' },
    { step: 5, title: 'AI Resources Download', desc: 'CAHAYA downloads domain-specific AI model weights and spatial data packages. Grab a coffee ☕ — this runs automatically in the background.', time: '~10-15 minutes' },
  ];

  const pricing = [
    {
      tier: 'CAHAYA Professional',
      stripeKey: 'professional',
      price: '$5,000 – $8,000',
      period: 'per seat / year',
      audience: 'Consultants, ESG firms, and independent engineering teams',
      includes: ['Core 3D spatial simulation engine', 'Choice of 1–3 industry domain packs', 'Local WebGPU-accelerated compute', 'Standard regulatory methodology library', 'Self-service license token activation'],
      color: '#4A9EFF',
    },
    {
      tier: 'CAHAYA Enterprise',
      stripeKey: 'enterprise',
      price: '$18,000 / seat / yr',
      subPrice: 'or $75,000 Organization license',
      period: 'annually recurring',
      audience: 'Plantation groups, mining firms, and national infrastructure operators',
      includes: ['All 10 industry domain specializations', 'Full volumetric & physics simulation suite', '100% offline deployment capability', 'Multi-project team workspaces', 'Automated compliance document generation'],
      color: '#D4AF37',
      featured: true,
    },
    {
      tier: 'CAHAYA Dedicated',
      stripeKey: 'dedicated',
      price: '$250,000 – $2M+',
      period: 'annual custom engagement',
      audience: 'Governments, defense agencies, and critical utility administrators',
      includes: ['Strict air-gapped, zero-egress hardware installation', 'Bespoke national regulatory methodology frameworks', 'Dedicated, security-cleared deployment engineers', 'Classified environment configuration', 'Custom local reasoning alignment'],
      color: '#2E8B57',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="page-hero hero-bg grid-bg">
        <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '2rem' }}>
          <div className="badge" style={{ marginBottom: '1.5rem' }}>🛰️ Desktop Spatial Intelligence Workspace</div>
          <h1 className="section-title" style={{ maxWidth: 800 }}>
            CAHAYA: <span className="gold-text">Sovereign</span> Spatial Intelligence
          </h1>
          <p className="section-subtitle" style={{ maxWidth: 700 }}>
            An AI-powered desktop workspace for spatial analysis, 3D simulation, and regulatory compliance.
            Describe what you want in natural language — CAHAYA plans, executes, and delivers GIS-standard outputs.
            Zero data egress. Air-gapped capable.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <a href="#download" className="btn-primary" style={{ padding: '14px 28px' }}>
              ⬇ Download for {detectedOS || 'your OS'}
            </a>
            <a href="#trial" className="btn-secondary" style={{ padding: '14px 28px' }}>
              🔑 Get Free Trial Token
            </a>
          </div>
        </div>
      </section>

      {/* How CAHAYA Works — The 3-Panel Layout */}
      <section className="section-padding" style={{ background: '#000A1A' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="accent-line" style={{ margin: '0 auto 1.5rem' }} />
            <h2 className="section-title">How CAHAYA Works</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: 700, margin: '0 auto' }}>
              A 3-panel desktop workspace where AI is your primary controller. Describe your task — the AI plans everything, you review, then execute.
            </p>
          </div>

          {/* 3-Panel Preview */}
          <div className="glass-card" style={{ padding: '2rem', background: 'rgba(0,10,30,0.5)', border: '1px solid rgba(212,175,55,0.15)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr 280px', gap: '1rem', minHeight: '340px' }}>
              {/* Left Sidebar */}
              <div style={{ background: 'rgba(0,0,0,0.4)', borderRadius: '12px', padding: '1.25rem', border: '1px solid rgba(255,255,255,0.06)' }}>
                <h4 style={{ color: '#ffb703', fontSize: '0.7rem', letterSpacing: '2px', marginBottom: '1rem', textTransform: 'uppercase' }}>Admin Panel</h4>
                {['🌾 Agriculture', '⛏️ Mining', '🏙️ Urban', '🛡️ Defense', '🚢 Maritime'].map((d, i) => (
                  <div key={i} style={{ padding: '6px 8px', borderRadius: '6px', marginBottom: '4px', fontSize: '0.75rem', color: i === 0 ? '#ffb703' : '#6b7280', background: i === 0 ? 'rgba(255,183,3,0.1)' : 'transparent', cursor: 'pointer' }}>{d}</div>
                ))}
                <hr style={{ border: '0', borderTop: '1px solid rgba(255,255,255,0.05)', margin: '10px 0' }} />
                <div style={{ fontSize: '0.65rem', color: '#4b5563', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span>🔌 API Connections</span>
                  <span>📁 Document Library</span>
                  <span>⚙️ AI Settings</span>
                  <span>👥 User Management</span>
                  <span>🐛 Report Bug</span>
                </div>
              </div>

              {/* Center — Map/Simulation */}
              <div style={{ background: 'rgba(0,20,40,0.6)', borderRadius: '12px', padding: '1.25rem', border: '1px solid rgba(46,139,87,0.2)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '1rem' }}>
                  {['Earth Intelligence', 'AI Work Engine', 'Simulation Lab'].map((tab, i) => (
                    <span key={i} style={{ padding: '4px 10px', borderRadius: '6px', fontSize: '0.65rem', fontWeight: 600, color: i === 0 ? '#22c55e' : '#4b5563', background: i === 0 ? 'rgba(34,197,94,0.1)' : 'rgba(255,255,255,0.03)', border: `1px solid ${i === 0 ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.05)'}` }}>{tab}</span>
                  ))}
                </div>
                <div style={{ flex: 1, borderRadius: '8px', background: 'radial-gradient(circle at 50% 50%, #052a1a, #000B1A)', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', inset: 0, opacity: 0.15, background: 'linear-gradient(rgba(18, 140, 70, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(18, 140, 70, 0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                  <span style={{ fontSize: '2.5rem', marginBottom: '8px', position: 'relative', zIndex: 1 }}>🗺️</span>
                  <span style={{ fontSize: '0.85rem', color: '#A0B0CC', fontWeight: 'bold', position: 'relative', zIndex: 1 }}>MapLibre GL · Three.js WebGL</span>
                  <span style={{ fontSize: '0.7rem', color: '#4b5563', marginTop: '4px', position: 'relative', zIndex: 1 }}>GEE · 30 Satellites · Real-time Physics</span>
                </div>
              </div>

              {/* Right — AI Agent */}
              <div style={{ background: 'rgba(0,0,0,0.4)', borderRadius: '12px', padding: '1.25rem', border: '1px solid rgba(255,183,3,0.15)', display: 'flex', flexDirection: 'column' }}>
                <h4 style={{ color: '#ffb703', fontSize: '0.7rem', letterSpacing: '2px', marginBottom: '0.75rem', textTransform: 'uppercase' }}>AI Agent</h4>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px', overflowY: 'auto' }}>
                  <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '8px', padding: '8px 10px', fontSize: '0.7rem', color: '#9ca3af', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <span style={{ color: '#6b7280', fontSize: '0.6rem' }}>YOU</span><br />
                    &quot;Flood simulation for Klang Valley, 100-year return period&quot;
                  </div>
                  <div style={{ background: 'rgba(255,183,3,0.05)', borderRadius: '8px', padding: '8px 10px', fontSize: '0.7rem', color: '#d1d5db', border: '1px solid rgba(255,183,3,0.1)' }}>
                    <span style={{ color: '#ffb703', fontSize: '0.6rem' }}>CAHAYA AI</span><br />
                    📋 <strong>Execution Plan:</strong><br />
                    • Location: 3.05°N, 101.45°E (14km²)<br />
                    • Data: Sentinel-1 SAR + SRTM DEM<br />
                    • Model: HEC-RAS 2D + Manning&apos;s n<br />
                    • Output: GeoJSON, PDF Report, Video
                  </div>
                  <div style={{ background: 'rgba(34,197,94,0.05)', borderRadius: '8px', padding: '6px 10px', fontSize: '0.65rem', color: '#22c55e', border: '1px solid rgba(34,197,94,0.15)', textAlign: 'center' }}>
                    ✓ Accept Plan  ✎ Edit  ▶ Execute
                  </div>
                </div>
                <div style={{ marginTop: '8px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', fontSize: '0.65rem', color: '#4b5563', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }} />
                  Web: ON · Librae GeoInt AI 3.7 · Librae Report Engine 3.1
                </div>
              </div>
            </div>
          </div>

          <p style={{ color: '#607090', fontSize: '0.75rem', textAlign: 'center', marginTop: '1rem', fontFamily: 'JetBrains Mono, monospace' }}>
            Interactive preview — actual CAHAYA workspace renders locally on your machine at 30fps via WebGL
          </p>
        </div>
      </section>

      {/* 10 Domains */}
      <section className="section-padding" style={{ background: 'linear-gradient(180deg,#000A1A,#001133)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="accent-line" style={{ margin: '0 auto 1.5rem' }} />
            <h2 className="section-title">Ten Specialized Industry Domains</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: 600, margin: '0 auto' }}>
              Choose your domain on first launch — CAHAYA loads tailored AI models, compliance templates, and analysis workflows.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.5rem' }}>
            {domains.map((d, i) => (
              <div key={i} className="glass-card" style={{ padding: '2rem', display: 'flex', gap: '1.25rem', alignItems: 'start' }}>
                <div style={{ fontSize: '1.5rem', width: '42px', height: '42px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(212,175,55,0.08)', borderRadius: '10px', flexShrink: 0 }}>
                  {d.icon}
                </div>
                <div>
                  <h4 style={{ color: '#E0E2E5', fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 700 }}>{d.title}</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" style={{ padding: '80px 0', background: 'linear-gradient(180deg,#001133,#000A1A)', borderTop: '1px solid rgba(255,255,255,0.03)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: 'var(--text-primary)', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}>
            Download CAHAYA Desktop Workspace
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: 600, margin: '0 auto 1rem', lineHeight: 1.7 }}>
            A self-contained desktop workspace — no external dependencies required. Everything runs locally on your machine.
          </p>

          {/* System Requirements */}
          <div className="glass-card" style={{ padding: '1.5rem 2rem', marginBottom: '2.5rem', display: 'inline-block', textAlign: 'left', background: 'rgba(0,20,60,0.3)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <h4 style={{ color: '#ffb703', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>System Requirements</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.5rem', fontSize: '0.8rem' }}>
              <div><span style={{ color: '#4b5563' }}>CPU</span><br /><span style={{ color: '#d1d5db' }}>8+ cores</span></div>
              <div><span style={{ color: '#4b5563' }}>RAM</span><br /><span style={{ color: '#d1d5db' }}>32 GB+</span></div>
              <div><span style={{ color: '#4b5563' }}>GPU</span><br /><span style={{ color: '#d1d5db' }}>8 GB VRAM+</span></div>
              <div><span style={{ color: '#4b5563' }}>Storage</span><br /><span style={{ color: '#d1d5db' }}>250 GB SSD</span></div>
            </div>
          </div>

          {/* Download Buttons with OS detection */}
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {Object.entries(downloadFiles).map(([os, info]) => (
              <a key={os} href="#" onClick={(e) => { e.preventDefault(); handleDownload(os, info.file); }}
                className={os === detectedOS ? 'btn-primary' : 'btn-secondary'}
                style={{ padding: '14px 28px', display: 'inline-flex', gap: '8px', alignItems: 'center', position: 'relative' }}>
                {info.label} <span>{info.ext}</span>
                {os === detectedOS && <span style={{ position: 'absolute', top: '-8px', right: '-8px', background: '#ffb703', color: '#000', fontSize: '0.6rem', padding: '2px 6px', borderRadius: '10px', fontWeight: 700 }}>RECOMMENDED</span>}
              </a>
            ))}
          </div>
          <p style={{ color: '#607090', fontSize: '0.75rem', marginTop: '1.5rem', fontFamily: 'Space Mono, monospace' }}>
            All packages are signed. Backend binds strictly to localhost. Python 3.10+ required.
          </p>
        </div>
      </section>

      {/* Getting Started Flow */}
      <section className="section-padding" style={{ background: '#000A1A' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="accent-line" style={{ margin: '0 auto 1.5rem' }} />
            <h2 className="section-title">Getting Started in 5 Steps</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>From download to your first analysis in under 20 minutes.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {gettingStarted.map((s) => (
              <div key={s.step} className="glass-card" style={{ padding: '0', overflow: 'hidden', cursor: 'pointer', border: activeStep === s.step ? '1px solid rgba(255,183,3,0.3)' : '1px solid rgba(255,255,255,0.06)' }}
                onClick={() => setActiveStep(activeStep === s.step ? null : s.step)}>
                <div style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,183,3,0.1)', border: '1px solid rgba(255,183,3,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffb703', fontSize: '0.85rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>{s.step}</div>
                    <h4 style={{ color: '#E0E2E5', fontSize: '1rem', margin: 0, fontWeight: 600 }}>{s.title}</h4>
                  </div>
                  <span style={{ color: '#4b5563', fontSize: '0.75rem', fontFamily: 'JetBrains Mono, monospace' }}>{s.time}</span>
                </div>
                {activeStep === s.step && (
                  <div style={{ padding: '0 1.5rem 1.25rem', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, margin: '1rem 0 0' }}>{s.desc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers with Stripe */}
      <section id="pricing" className="section-padding" style={{ background: 'linear-gradient(180deg,#000A1A,#001133)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="accent-line" style={{ margin: '0 auto 1.5rem' }} />
            <h2 className="section-title">Value-Based Licensing Tiers</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: 600, margin: '0 auto' }}>
              Select the license scope appropriate for your organizational footprint. Pay securely via Stripe or request a direct invoice.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2rem', alignItems: 'stretch' }}>
            {pricing.map((p, i) => (
              <div key={i} className={`glass-card ${p.featured ? 'gold-glow' : ''}`} style={{
                padding: '2.5rem', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                border: p.featured ? '1px solid rgba(212,175,55,0.4)' : '1px solid rgba(255,255,255,0.08)',
              }}>
                <div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: p.color, marginBottom: '1rem', fontFamily: 'Outfit, sans-serif' }}>{p.tier}</div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <span style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)' }}>{p.price}</span>
                    {p.subPrice && <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '2px' }}>{p.subPrice}</div>}
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px' }}>{p.period}</div>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '2rem' }}>{p.audience}</p>
                  <hr style={{ border: '0', borderTop: '1px solid rgba(255,255,255,0.05)', marginBottom: '1.5rem' }} />
                  <ul style={{ paddingLeft: '1.2rem', margin: 0, color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.8 }}>
                    {p.includes.map((inc, j) => (<li key={j} style={{ marginBottom: '8px' }}>{inc}</li>))}
                  </ul>
                </div>
                <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {p.stripeKey !== 'dedicated' ? (
                    <button onClick={() => handleCheckout(p.stripeKey)} disabled={checkoutLoading === p.stripeKey}
                      className="btn-primary"
                      style={{ width: '100%', justifyContent: 'center', padding: '12px', background: p.featured ? '#D4AF37' : 'transparent', borderColor: p.featured ? '#D4AF37' : 'rgba(255,255,255,0.15)', color: p.featured ? '#000A1A' : 'var(--text-primary)', opacity: checkoutLoading === p.stripeKey ? 0.6 : 1, cursor: checkoutLoading ? 'wait' : 'pointer' }}>
                      {checkoutLoading === p.stripeKey ? 'Redirecting to Stripe...' : '💳 Purchase License'}
                    </button>
                  ) : (
                    <Link href="/contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center', background: 'transparent', borderColor: 'rgba(255,255,255,0.15)', color: 'var(--text-primary)' }}>
                      Request Custom Deployment
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Upsells */}
          <div style={{ marginTop: '3rem', padding: '2rem 2.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px' }}>
            <h4 style={{ color: '#D4AF37', margin: '0 0 1rem', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Modular Add-On Modifiers</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
              <div>
                <strong style={{ color: '#E0E2E5', fontSize: '0.9rem', display: 'block', marginBottom: '4px' }}>Cross-Industry expansion</strong>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', margin: 0, lineHeight: 1.5 }}>+$4,500 / year per additional specialized industry domain pack.</p>
              </div>
              <div>
                <strong style={{ color: '#E0E2E5', fontSize: '0.9rem', display: 'block', marginBottom: '4px' }}>Multi-Site Deployment</strong>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', margin: 0, lineHeight: 1.5 }}>+30% to base license per additional localized site cluster.</p>
              </div>
              <div>
                <strong style={{ color: '#E0E2E5', fontSize: '0.9rem', display: 'block', marginBottom: '4px' }}>Bespoke Regulatory Packs</strong>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', margin: 0, lineHeight: 1.5 }}>$10,000 – $75,000 one-off per custom regional compliance framework.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 30-Day Evaluation License Generation */}
      <section id="trial" style={{ padding: '80px 0', background: '#000A1A', borderTop: '1px solid rgba(255,255,255,0.03)' }}>
        <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div className="glass-card" style={{ padding: '2.5rem', border: '1px solid rgba(212,175,55,0.25)', background: 'rgba(212,175,55,0.01)' }}>
            <h3 style={{ color: '#D4AF37', fontSize: '1.4rem', marginBottom: '0.5rem', fontFamily: 'Outfit, sans-serif', fontWeight: 800, textAlign: 'center' }}>
              Request 30-Day Free Trial
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '2rem', textAlign: 'center', lineHeight: 1.6 }}>
              Generate a hardware-locked evaluation token. Valid for 30 days with full access to all features.
            </p>

            {trialToken ? (
              <div style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(212,175,55,0.05)', border: '1px dashed #D4AF37', borderRadius: '8px' }}>
                <span style={{ color: '#607090', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '8px' }}>
                  Your Evaluation License Token
                </span>
                <code style={{ fontSize: '1.2rem', color: '#FFF', fontWeight: 'bold', letterSpacing: '2px', display: 'block', margin: '10px 0', fontFamily: 'Space Mono, monospace', background: 'rgba(0,0,0,0.4)', padding: '10px', borderRadius: '4px' }}>
                  {trialToken}
                </code>
                <button onClick={() => { navigator.clipboard.writeText(trialToken); }} className="btn-secondary" style={{ padding: '6px 16px', fontSize: '0.8rem', marginTop: '10px' }}>
                  📋 Copy Token
                </button>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: '1rem', lineHeight: 1.5 }}>
                  Copy this token and paste it into the activation window when launching CAHAYA. Your token is also emailed to your registered address.
                </p>
              </div>
            ) : (
              <form onSubmit={handleRequestTrial}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <label style={{ color: '#607090', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '6px' }}>Full Name</label>
                    <input type="text" required value={trialForm.name} onChange={(e) => setTrialForm((prev) => ({ ...prev, name: e.target.value }))}
                      placeholder="Your Name"
                      style={{ width: '100%', padding: '12px 14px', background: 'rgba(0,20,60,0.6)', border: '1px solid rgba(212,175,55,0.2)', borderRadius: 8, color: 'var(--text-primary)', fontSize: '0.85rem', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ color: '#607090', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '6px' }}>Corporate/Agency Email</label>
                    <input type="email" required value={trialForm.email} onChange={(e) => setTrialForm((prev) => ({ ...prev, email: e.target.value }))}
                      placeholder="name@organization.com"
                      style={{ width: '100%', padding: '12px 14px', background: 'rgba(0,20,60,0.6)', border: '1px solid rgba(212,175,55,0.2)', borderRadius: 8, color: 'var(--text-primary)', fontSize: '0.85rem', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ color: '#607090', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '6px' }}>Entity Name</label>
                    <input type="text" required value={trialForm.entity} onChange={(e) => setTrialForm((prev) => ({ ...prev, entity: e.target.value }))}
                      placeholder="Company or Government Department"
                      style={{ width: '100%', padding: '12px 14px', background: 'rgba(0,20,60,0.6)', border: '1px solid rgba(212,175,55,0.2)', borderRadius: 8, color: 'var(--text-primary)', fontSize: '0.85rem', outline: 'none' }} />
                  </div>
                  {trialError && <p style={{ color: '#FF6B6B', fontSize: '0.8rem', textAlign: 'center' }}>{trialError}</p>}
                  <button type="submit" disabled={trialLoading} className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '12px', fontSize: '0.9rem', opacity: trialLoading ? 0.7 : 1 }}>
                    {trialLoading ? 'Generating Token...' : '⚡ Generate 30-Day Free Trial'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Documentation Link */}
      <section style={{ padding: '40px 0', background: '#000A1A', textAlign: 'center' }}>
        <div className="container">
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            📖 Read the full <Link href="/docs" style={{ color: '#ffb703', textDecoration: 'underline' }}>CAHAYA Documentation</Link> for detailed technical specifications, system architecture, and API reference.
          </p>
        </div>
      </section>
    </>
  );
}
