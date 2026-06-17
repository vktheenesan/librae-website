'use client';
import Link from 'next/link';

export default function CahayaPage() {
  const handleDownload = async (platform, filename) => {
    try {
      await fetch('/api/telemetry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: `download_cahaya_${platform.toLowerCase()}`,
          domain: 'website',
          metadata: {
            platform,
            file: filename,
          }
        }),
      });
    } catch (err) {
      console.error('Telemetry handshake failed:', err);
    }

    // Trigger file download
    const link = document.createElement('a');
    link.href = `/downloads/${filename}`;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const domains = [
    { title: 'Agriculture & ESG', desc: 'EU Deforestation Regulation (EUDR) boundary auditing & RSPO compliance verification.' },
    { title: 'Mining & Resources', desc: 'JORC Code 2012 mineral tonnage mapping, stockpile volumetric calculations, and open-pit tracking.' },
    { title: 'Urban Planning', desc: 'Zoning Floor Area Ratio (FAR) compliance, building shadow casting simulations, and local solar gain maps.' },
    { title: 'Defense & Security', desc: 'Zero-egress terrain hazard, route obstruction modeling, and line-of-sight threat intercept mapping.' },
    { title: 'Maritime & Coastal', desc: 'High-fidelity bathymetry processing, shoreline drift modeling, and port engineering suitability checks.' },
    { title: 'Environmental Compliance', desc: 'EPA-compliant Environmental Impact Assessment (EIA) simulations and local pollutant dispersion routes.' },
    { title: 'Energy & Renewables', desc: 'Solar Global Horizontal Irradiance (GHI) and Wind Weibull distribution mapping for asset siting.' },
    { title: 'Infrastructure Engineering', desc: 'Corridor utility pipeline surveys, rail alignment deformation monitoring, and bridge structure vibration sweeps.' },
    { title: 'Forestry & Carbon', desc: 'Canopy Height Models (CHM) from LiDAR point-clouds and Verra VCS carbon credit calculation modules.' },
    { title: 'Emergency Response', desc: 'Active flood inundation routing, wildfire propagation paths, and optimal egress/evacuation simulations.' }
  ];

  const pricing = [
    {
      tier: 'CAHAYA Professional',
      price: '$5,000 – $8,000',
      period: 'per seat / year',
      audience: 'Consultants, ESG firms, and independent engineering teams',
      includes: [
        'Core 3D spatial simulation engine',
        'Choice of 1–3 industry domain packs',
        'Local WebGPU-accelerated compute',
        'Standard regulatory methodology library',
        'Self-service license token activation'
      ],
      color: '#4A9EFF'
    },
    {
      tier: 'CAHAYA Enterprise',
      price: '$18,000 / seat / yr',
      subPrice: 'or $75,000 Organization license',
      period: 'annually recurring',
      audience: 'Plantation groups, mining firms, and national infrastructure operators',
      includes: [
        'All 10 industry domain specializations',
        'Full volumetric & physics simulation suite',
        '100% offline deployment capability',
        'Multi-project team workspaces',
        'Automated compliance document generation'
      ],
      color: '#D4AF37',
      featured: true
    },
    {
      tier: 'CAHAYA Sovereign',
      price: '$250,000 – $2M+',
      period: 'annual custom engagement',
      audience: 'Governments, defense agencies, and critical utility administrators',
      includes: [
        'Strict air-gapped, zero-egress hardware installation',
        'Bespoke national regulatory methodology frameworks',
        'Dedicated, security-cleared deployment engineers',
        'Classified environment configuration',
        'Custom local LLM reasoning alignment'
      ],
      color: '#2E8B57'
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="page-hero hero-bg grid-bg">
        <div className="container" style={{ position:'relative', zIndex:1, paddingTop:'2rem' }}>
          <div className="badge" style={{ marginBottom:'1.5rem' }}>🛰️ Local Spatial Intelligence</div>
          <h1 className="section-title" style={{ maxWidth:800 }}>
            CAHAYA Sovereign: <span className="gold-text">Air-Gapped</span> Spatial Analysis
          </h1>
          <p className="section-subtitle" style={{ maxWidth:700 }}>
            Run professional-grade spatial analysis, volumetric 3D simulations, and regulatory compliance checks locally on your workstation. Zero external dependencies. Zero data egress.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding" style={{ background: '#000A1A' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div className="accent-line" />
              <h2 className="section-title">Zero-Egress Security Architecture</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                High-security operations cannot trust external cloud infrastructures with sensitive geospatial data. CAHAYA runs entirely within an isolated workspace on local hardware.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                By binding the runtime to a local loopback address (`127.0.0.1`) and executing WebGPU shaders locally, CAHAYA guarantees that no point-clouds, satellite bands, or concession boundaries ever leave your workstation.
              </p>
              <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
                <div>
                  <h4 style={{ color: '#D4AF37', fontSize: '1.8rem', margin: '0 0 5px' }}>100%</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>Network Isolation</p>
                </div>
                <div>
                  <h4 style={{ color: '#2E8B57', fontSize: '1.8rem', margin: '0 0 5px' }}>SHA-256</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>Forensic Receipts</p>
                </div>
                <div>
                  <h4 style={{ color: '#4A9EFF', fontSize: '1.8rem', margin: '0 0 5px' }}>WebGPU</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>Local Processing</p>
                </div>
              </div>
            </div>
            
            {/* Tauri block diagram */}
            <div className="glass-card" style={{ padding: '2.5rem', background: 'rgba(0,20,60,0.4)', border: '1px solid rgba(212,175,55,0.15)' }}>
              <h3 style={{ color: '#D4AF37', marginBottom: '1.5rem', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Local Sandboxed Execution</h3>
              <div style={{ fontFamily: 'monospace', fontSize: '0.8rem', color: '#A0B0CC', lineHeight: 1.8 }}>
                <div style={{ border: '1px solid #607090', padding: '15px', borderRadius: '8px', marginBottom: '10px' }}>
                  <div style={{ color: '#4A9EFF', fontWeight: 'bold' }}>Tauri Chromium Desktop Frame (Frontend)</div>
                  <div style={{ color: '#8090A0', fontSize: '0.75rem' }}>Displays local-loopback user interface viewport</div>
                </div>
                <div style={{ textAlign: 'center', margin: '5px 0' }}>⇅ Local IPC Handshake (Secure Pipe)</div>
                <div style={{ border: '1px solid #607090', padding: '15px', borderRadius: '8px', marginBottom: '10px' }}>
                  <div style={{ color: '#2E8B57', fontWeight: 'bold' }}>FastAPI Backend Daemon (Localhost Bound)</div>
                  <div style={{ color: '#8090A0', fontSize: '0.75rem' }}>Binds strictly to 127.0.0.1:8000 — rejects remote traffic</div>
                </div>
                <div style={{ textAlign: 'center', margin: '5px 0' }}>⇅ Hardware Lock Calibration</div>
                <div style={{ border: '1px dashed #D4AF37', padding: '15px', borderRadius: '8px' }}>
                  <div style={{ color: '#D4AF37', fontWeight: 'bold' }}>Local Reasoning & WebGPU Engine</div>
                  <div style={{ color: '#8090A0', fontSize: '0.75rem' }}>Hardware-locked decryption keys in cahaya_secure.json</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10 Domains */}
      <section className="section-padding" style={{ background: 'linear-gradient(180deg,#000A1A,#001133)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="accent-line" style={{ margin: '0 auto 1.5rem' }} />
            <h2 className="section-title">Ten Specialized Industry Domains</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: 600, margin: '0 auto' }}>
              CAHAYA packages deterministic models customized for specific regulatory requirements and technical workflows.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.5rem' }}>
            {domains.map((d, i) => (
              <div key={i} className="glass-card" style={{ padding: '2rem', display: 'flex', gap: '1.25rem', alignItems: 'start' }}>
                <div style={{ color: '#D4AF37', fontFamily: 'Space Mono, monospace', fontSize: '0.9rem', fontWeight: 600, background: 'rgba(212,175,55,0.08)', padding: '4px 10px', borderRadius: 4 }}>
                  {(i + 1).toString().padStart(2, '0')}
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

      {/* Unreal Engine 5 integration */}
      <section className="section-padding grid-bg" style={{ background: '#000A1A' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            {/* Visual simulation block */}
            <div className="glass-card" style={{ padding: '2.5rem', background: 'rgba(0,10,30,0.5)', border: '1px solid rgba(46,139,87,0.2)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#2E8B57' }} />
                  <span style={{ fontSize: '0.8rem', color: '#2E8B57', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>Simulation Link Active</span>
                </div>
                <span style={{ fontSize: '0.8rem', fontFamily: 'Space Mono, monospace', color: '#607090' }}>WGS 84 Mercator</span>
              </div>
              
              <div style={{ height: '220px', borderRadius: '8px', background: 'radial-gradient(circle at 50% 50%, #052a1a, #000B1A)', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', position: 'relative' }}>
                <div style={{ position: 'absolute', inset: 0, opacity: 0.15, background: 'linear-gradient(rgba(18, 140, 70, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(18, 140, 70, 0.1) 1px, transparent 1px)', backgroundSize: '15px 15px' }} />
                <span style={{ fontSize: '2rem', marginBottom: '10px' }}>🎮</span>
                <span style={{ fontSize: '0.9rem', color: '#A0B0CC', fontWeight: 'bold' }}>Unreal Engine 5 Render Engine</span>
                <span style={{ fontSize: '0.75rem', color: '#607090', marginTop: '4px' }}>Pixel Streaming Stream: 30 FPS stable</span>
              </div>
              
              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
                <span style={{ padding: '4px 10px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '4px', fontSize: '0.75rem', color: '#A0B0CC' }}>FBX Terrain mesh export</span>
                <span style={{ padding: '4px 10px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '4px', fontSize: '0.75rem', color: '#A0B0CC' }}>ArcGIS Maps SDK binding</span>
              </div>
            </div>
            
            <div>
              <div className="accent-line" />
              <h2 className="section-title">Immersive 3D Simulation Lab</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                CAHAYA bridges geographic GIS calculations with Unreal Engine 5's cinematic physics. Export terrain geometries and point clouds directly as standardized FBX or GLTF meshes.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                By loading coordinate data via the *ArcGIS Maps SDK for Unreal Engine*, spatial projection alignments remain mathematically exact. High-fidelity rendering is processed via local GPU servers and pixel-streamed back to your browser frame.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="section-padding" style={{ background: '#000A1A' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="accent-line" style={{ margin: '0 auto 1.5rem' }} />
            <h2 className="section-title">Value-Based Licensing Tiers</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: 600, margin: '0 auto' }}>
              Select the license scope appropriate for your organizational footprint and security classification.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2rem', alignItems: 'stretch' }}>
            {pricing.map((p, i) => (
              <div key={i} className={`glass-card ${p.featured ? 'gold-glow' : ''}`} style={{ 
                padding: '2.5rem', 
                position: 'relative', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                border: p.featured ? '1px solid rgba(212,175,55,0.4)' : '1px solid rgba(255,255,255,0.08)'
              }}>
                <div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: p.color, marginBottom: '1rem', fontFamily: 'Outfit, sans-serif' }}>
                    {p.tier}
                  </div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <span style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)' }}>{p.price}</span>
                    {p.subPrice && <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '2px' }}>{p.subPrice}</div>}
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px' }}>{p.period}</div>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                    {p.audience}
                  </p>
                  <hr style={{ border: '0', borderTop: '1px solid rgba(255,255,255,0.05)', marginBottom: '1.5rem' }} />
                  <ul style={{ paddingLeft: '1.2rem', margin: 0, color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.8 }}>
                    {p.includes.map((inc, j) => (
                      <li key={j} style={{ marginBottom: '8px' }}>{inc}</li>
                    ))}
                  </ul>
                </div>
                
                <div style={{ marginTop: '2.5rem' }}>
                  <Link href="/contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center', background: p.featured ? '#D4AF37' : 'transparent', borderColor: p.featured ? '#D4AF37' : 'rgba(255,255,255,0.15)', color: p.featured ? '#000A1A' : 'var(--text-primary)' }}>
                    Request Deployment
                  </Link>
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

      {/* Downloads */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(180deg,#000A1A,#001A33)', borderTop: '1px solid rgba(255,255,255,0.03)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: 'var(--text-primary)', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}>
            Download Standalone Workstation Installers
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: 600, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            Native desktop packages wrapped in a secure Tauri framework with an embedded Python runtime. Requires license key activation upon launch.
          </p>
          
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); handleDownload('macOS', 'cahaya-macos-universal.dmg'); }}
              className="btn-secondary" 
              style={{ padding: '14px 28px', display: 'inline-flex', gap: '8px', alignItems: 'center' }}
            >
              🍏 macOS Universal <span>.dmg</span>
            </a>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); handleDownload('Windows', 'cahaya-windows-setup.exe'); }}
              className="btn-secondary" 
              style={{ padding: '14px 28px', display: 'inline-flex', gap: '8px', alignItems: 'center' }}
            >
              💻 Windows Setup <span>.exe</span>
            </a>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); handleDownload('Linux', 'cahaya-linux.AppImage'); }}
              className="btn-secondary" 
              style={{ padding: '14px 28px', display: 'inline-flex', gap: '8px', alignItems: 'center' }}
            >
              🐧 Linux Standalone <span>.AppImage</span>
            </a>
          </div>
          <p style={{ color: '#607090', fontSize: '0.75rem', marginTop: '1.5rem', fontFamily: 'Space Mono, monospace' }}>
            All packages are Authenticode and Apple Notary signed. Local listening bound strictly to localhost.
          </p>
        </div>
      </section>
    </>
  );
}
