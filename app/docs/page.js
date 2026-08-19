'use client';
import Link from 'next/link';

export default function DocsPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero hero-bg grid-bg">
        <div className="container" style={{ position:'relative', zIndex:1, paddingTop:'2rem' }}>
          <div className="badge" style={{ marginBottom:'1.5rem', background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.15)', color: '#A0B0CC' }}>
            📄 Technical Specifications & Architecture
          </div>
          <h1 className="section-title" style={{ maxWidth:800 }}>
            Librae System <span className="gold-text">Documentation</span>
          </h1>
          <p className="section-subtitle" style={{ maxWidth:700 }}>
            Geospatial intelligence infrastructure requirements, offline installation sequences, and zero-egress cybersecurity compliance protocols.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding" style={{ background: '#000A1A' }}>
        <div className="container" style={{ maxWidth: '960px', margin: '0 auto' }}>
          
          {/* Section 1: System Requirements */}
          <div style={{ marginBottom: '4rem' }}>
            <div className="accent-line" style={{ width: '40px', height: '3px', background: '#D4AF37', marginBottom: '1.5rem' }} />
            <h2 style={{ fontSize: '1.8rem', color: '#E0E2E5', marginBottom: '1.5rem', fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}>
              1. Hardware Specifications
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              CAHAYA executes high-fidelity point-cloud modeling and local LLM reasoning entirely on client hardware. The host machine must satisfy the following minimum and recommended requirements:
            </p>
            
            <div className="glass-card" style={{ padding: '2rem', background: 'rgba(255,255,255,0.01)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 2fr', gap: '1.5rem' }}>
                <div style={{ borderRight: '1px solid rgba(255,255,255,0.05)', paddingRight: '1.5rem' }}>
                  <strong style={{ color: '#D4AF37', display: 'block', marginBottom: '1rem' }}>Recommended Host Configurations</strong>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.8 }}>
                    <div style={{ marginBottom: '10px' }}>⚡ <strong>CPU:</strong> Intel Xeon / AMD Threadripper (8+ cores) or Apple M-Series Max/Ultra.</div>
                    <div style={{ marginBottom: '10px' }}>⚡ <strong>RAM:</strong> 32 GB Minimum (64 GB or 128 GB recommended for multi-site simulations).</div>
                    <div>⚡ <strong>Storage:</strong> 250 GB NVMe SSD (reserved for point-clouds and local weights).</div>
                  </div>
                </div>
                <div>
                  <strong style={{ color: '#4A9EFF', display: 'block', marginBottom: '1rem' }}>Local GPU Scaling Tiers</strong>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.8 }}>
                    <div style={{ marginBottom: '8px' }}>🚀 <strong>Cahaya Edge (7B model):</strong> 1x NVIDIA RTX 4060 (8GB VRAM) or Apple M-series (16GB Unified).</div>
                    <div style={{ marginBottom: '8px' }}>🚀 <strong>Cahaya Standard (32B model):</strong> 1x NVIDIA RTX 4090 / RTX A6000 (24GB+ VRAM).</div>
                    <div>🚀 <strong>Cahaya Enterprise (72B model):</strong> 2x NVIDIA H100 / A100 (144GB+ total VRAM).</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Installation Workflow */}
          <div style={{ marginBottom: '4rem' }}>
            <div className="accent-line" style={{ width: '40px', height: '3px', background: '#2E8B57', marginBottom: '1.5rem' }} />
            <h2 style={{ fontSize: '1.8rem', color: '#E0E2E5', marginBottom: '1.5rem', fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}>
              2. Step-by-Step Offline Installation
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              For deployment in high-security, air-gapped environments, follow this installation sequence:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { step: '01', title: 'Extract Standalone Archive', body: 'Extract the compiled package to `/opt/lenuda/` on Unix-like operating systems or `C:\\Program Files\\Lenuda\\` on Windows workstations.' },
                { step: '02', title: 'Run Virtual Environment Initialization', body: 'Execute `chmod +x install.sh && ./install.sh` (Unix) or run `install.bat` as Administrator (Windows). This configures local virtual environments and seeds embedded local background API engines.' },,
                { step: '03', title: 'Seed Offline Model Weights', body: 'Download and place the designated model weights directly into the `models/` directory of the application root.' },
                { step: '04', title: 'Execute Hardware Handshake', body: 'Bind the workstation license key by running: `python3 lenuda_cli.py --status`. Record the unique SHA-256 System Hardware Fingerprint and transmit it to Librae AI Labs to receive your annual activation token.' }
              ].map((inst, i) => (
                <div key={i} className="glass-card" style={{ padding: '1.5rem', display: 'flex', gap: '1.5rem', alignItems: 'start' }}>
                  <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '1.1rem', color: '#2E8B57', fontWeight: 'bold' }}>{inst.step}</span>
                  <div>
                    <strong style={{ color: '#E0E2E5', display: 'block', marginBottom: '4px' }}>{inst.title}</strong>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>{inst.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Cybersecurity Audit */}
          <div style={{ marginBottom: '4rem' }}>
            <div className="accent-line" style={{ width: '40px', height: '3px', background: '#7B4AFF', marginBottom: '1.5rem' }} />
            <h2 style={{ fontSize: '1.8rem', color: '#E0E2E5', marginBottom: '1.5rem', fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}>
              3. Cybersecurity & Compliance Enforcement
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              CAHAYA complies with strict government and defense security directives regarding data privacy and zero-trust computing:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div className="glass-card" style={{ padding: '2rem' }}>
                <strong style={{ color: '#7B4AFF', display: 'block', marginBottom: '0.5rem' }}>Zero-Egress Isolation</strong>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>
                  The application binds locally to loopback interface `127.0.0.1`. It programmatically intercepts and blocks all outbound external network calls.
                </p>
              </div>
              <div className="glass-card" style={{ padding: '2rem' }}>
                <strong style={{ color: '#7B4AFF', display: 'block', marginBottom: '0.5rem' }}>Immutable File Ledger</strong>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>
                  Files ingested into the simulation lab (like LiDAR points or raster layers) are validated against local SHA-256 Merkle root receipts. Any file modifications cause instant integrity failures.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: 3D Simulation Rendering */}
          <div>
            <div className="accent-line" style={{ width: '40px', height: '3px', background: '#4A9EFF', marginBottom: '1.5rem' }} />
            <h2 style={{ fontSize: '1.8rem', color: '#E0E2E5', marginBottom: '1.5rem', fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}>
              4. High-Fidelity 3D Simulation Rendering
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Immersive point-cloud and physics simulations are executed on the host&apos;s GPU using the Librae Core 3D Rendering Engine. By running a secure headless rendering system, CAHAYA streams a high-framerate rendering frame (30 FPS) directly to the local rendering container over secure local WebSockets. WGS 84 spatial coordinates are preserved natively via deep spatial mappings.
            </p>
          </div>

          {/* Product Documentation & White Papers Downloads */}
          <div style={{ marginTop: '4rem', paddingTop: '4rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="accent-line" style={{ width: '40px', height: '3px', background: '#D4AF37', marginBottom: '1.5rem' }} />
            <h2 style={{ fontSize: '1.8rem', color: '#E0E2E5', marginBottom: '1.5rem', fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}>
              Technical White Papers & Compliance Dossiers
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Download official publication-grade white papers, 16-test empirical benchmark reports, and SIRIM QAS ISO standards compliance dossiers.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
              <a href="/whitepapers/LIBRAE_CAHAYA_Executive_Summary.pdf" download="LIBRAE_CAHAYA_Executive_Summary.pdf" className="glass-card" style={{ padding: '1.75rem', display: 'flex', gap: '1.25rem', alignItems: 'start', textDecoration: 'none', border: '1px solid rgba(212,175,55,0.3)', transition: 'border-color 0.2s' }}>
                <div style={{ fontSize: '2rem' }}>🌴</div>
                <div>
                  <h4 style={{ color: '#D4AF37', fontSize: '1.05rem', marginBottom: '0.4rem', fontWeight: 700 }}>CAHAYA Executive White Paper (PDF)</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.6, margin: 0 }}>
                    Decoupled SE(3) Lie Group Tensor Engine, continuous manifold geometry, and MPOB estate optimization.
                  </p>
                  <span style={{ color: '#D4AF37', fontSize: '0.75rem', marginTop: '8px', display: 'inline-block', fontWeight: 700 }}>📥 Download Executive White Paper (12 Pages) →</span>
                </div>
              </a>

              <a href="/whitepapers/LIBRAE_CAHAYA_Empirical_Benchmark_Report.pdf" download="LIBRAE_CAHAYA_Empirical_Benchmark_Report.pdf" className="glass-card" style={{ padding: '1.75rem', display: 'flex', gap: '1.25rem', alignItems: 'start', textDecoration: 'none', border: '1px solid rgba(56,189,248,0.3)', transition: 'border-color 0.2s' }}>
                <div style={{ fontSize: '2rem' }}>📊</div>
                <div>
                  <h4 style={{ color: '#38bdf8', fontSize: '1.05rem', marginBottom: '0.4rem', fontWeight: 700 }}>16-Test Empirical Benchmark Report (PDF)</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.6, margin: 0 }}>
                    Certified mathematical proof of 9.90e-31 MSE zero drift under 64-bit continuous SE(3) transformations.
                  </p>
                  <span style={{ color: '#38bdf8', fontSize: '0.75rem', marginTop: '8px', display: 'inline-block', fontWeight: 700 }}>📥 Download Benchmark Receipts (PDF) →</span>
                </div>
              </a>

              <a href="/whitepapers/LIBRAE_LEI_Executive_Technical_Whitepaper.pdf" download="LIBRAE_LEI_Executive_Technical_Whitepaper.pdf" className="glass-card" style={{ padding: '1.75rem', display: 'flex', gap: '1.25rem', alignItems: 'start', textDecoration: 'none', border: '1px solid rgba(16,185,129,0.3)', transition: 'border-color 0.2s' }}>
                <div style={{ fontSize: '2rem' }}>🛸</div>
                <div>
                  <h4 style={{ color: '#10b981', fontSize: '1.05rem', marginBottom: '0.4rem', fontWeight: 700 }}>LEI Embedded Drone Intelligence (PDF)</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.6, margin: 0 }}>
                    1.58-bit BitNet SIMD matrix kernel, 0.0564s multi-sensor fusion, and CAAM CAD 6011 aviation compliance.
                  </p>
                  <span style={{ color: '#10b981', fontSize: '0.75rem', marginTop: '8px', display: 'inline-block', fontWeight: 700 }}>📥 Download Drone White Paper (PDF) →</span>
                </div>
              </a>

              <a href="/whitepapers/LIBRAE_LIA_Executive_Master_White_Paper.pdf" download="LIBRAE_LIA_Executive_Master_White_Paper.pdf" className="glass-card" style={{ padding: '1.75rem', display: 'flex', gap: '1.25rem', alignItems: 'start', textDecoration: 'none', border: '1px solid rgba(168,85,247,0.3)', transition: 'border-color 0.2s' }}>
                <div style={{ fontSize: '2rem' }}>🛡️</div>
                <div>
                  <h4 style={{ color: '#a855f7', fontSize: '1.05rem', marginBottom: '0.4rem', fontWeight: 700 }}>LIA Cyber-Immunity Master Blueprint (PDF)</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.6, margin: 0 }}>
                    Five Organs architecture, zero-trust eBPF telemetry, deterministic BNF firewall, and BNM RMiT readiness.
                  </p>
                  <span style={{ color: '#a855f7', fontSize: '0.75rem', marginTop: '8px', display: 'inline-block', fontWeight: 700 }}>📥 Download Cyber Blueprint (PDF) →</span>
                </div>
              </a>
            </div>

            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link href="/#whitepapers" className="btn-secondary" style={{ display: 'inline-flex', padding: '12px 28px' }}>
                📑 View Complete 11-Paper Institutional Library On Homepage →
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
