import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'LEI — 1.58-Bit Ternary Edge AI, Drone & Robotics Intelligence (400MB+ Footprint) | Librae AI Labs',
  description: 'Librae Edge Intelligence (LEI) uses 1.58-bit ternary SIMD kernels {-1, 0, +1} running full sovereign AI in only ~400MB+ RAM footprint. Fuses LiDAR, SAR radar, and RGB camera sensors in 0.0564 seconds for commercial drones, robotics, and edge hardware with zero cloud egress.',
  keywords: [
    'LEI', 'Librae Edge Intelligence', 'Ternary AI', '1.58-bit BitNet', '400MB Edge AI',
    'Drone AI', 'Robotics Edge AI', 'embedded sensor fusion', 'LiDAR SAR fusion',
    'SIMD edge kernel', 'CAAM CAD 6011', 'autonomous UAV swarm', 'edge computing Malaysia'
  ],
  openGraph: {
    title: 'LEI — 1.58-Bit Ternary Edge AI & Robotics (400MB+ Footprint) | Librae AI Labs',
    description: '0.0564s multi-sensor fusion and 1.58-bit ternary SIMD execution running in just 400MB+ RAM on embedded drones and robotics.',
    url: 'https://librae.work/lei',
    images: [{ url: 'https://librae.work/og-image.png', width: 1200, height: 630, alt: 'LEI Embedded Drone and Edge Robotics Intelligence' }]
  }
};

const sensorMatrix = [
  { name: 'Copernicus Sentinel-1 / Onboard SAR', band: 'C-Band Synthetic Aperture Radar (SAR)', res: 'All-Weather Microwave', desc: 'Active microwave radar imaging that penetrates clouds, monsoon rains, and dense canopy to track surface boundary changes and slope shifts.' },
  { name: 'Copernicus Sentinel-2 / Multispectral', band: 'Multi-Spectral Optical (13 Bands)', res: '10m – 20m Resolution', desc: 'Measures chlorophyll absorption, NDWI moisture indices, and vegetative health cycles across large agricultural concessions.' },
  { name: 'Onboard 3D LiDAR Scanner', band: 'Time-of-Flight Laser Telemetry', res: 'Sub-Centimeter Point Clouds', desc: 'Real-time 3D structural voxelization for immediate obstacle avoidance, canopy height modeling, and terrain profile extraction.' },
  { name: 'Ultra-High Resolution RGB / Thermal', band: 'Panchromatic, 4K Optical & FLIR', res: 'Sub-Millimeter Pixel Detail', desc: 'Direct tasking and high-resolution drone orthomosaics for individual tree crowns, crack detection, and thermal inspection.' }
];

export default function LEIPage() {
  return (
    <>
      {/* ──────── 1. HERO SECTION ──────── */}
      <section className="page-hero hero-bg grid-bg" style={{ paddingTop: '100px', paddingBottom: '70px', position: 'relative' }}>
        <div className="glow-orb glow-orb-emerald" style={{ width: '500px', height: '500px', top: '-100px', left: '-100px', zIndex: 0 }} />
        <div className="glow-orb glow-orb-gold" style={{ width: '400px', height: '400px', bottom: '0', right: '-100px', zIndex: 0 }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '6px 14px', background: 'rgba(16,185,129,0.1)',
              border: '1px solid rgba(16,185,129,0.3)', borderRadius: '100px',
              color: '#34d399', fontSize: '0.74rem', fontFamily: 'Space Mono, monospace', fontWeight: 700,
            }}>
              🛸 LIBRAE EDGE INTELLIGENCE (LEI) · TERNARY EDGE AI & ROBOTICS
            </div>
            <span style={{
              padding: '4px 10px', background: 'rgba(212,175,55,0.1)',
              border: '1px solid rgba(212,175,55,0.3)', borderRadius: '100px',
              color: '#D4AF37', fontSize: '0.7rem', fontFamily: 'Space Mono, monospace', fontWeight: 700
            }}>
              CAAM CAD 6011 · 400MB+ RAM · TERNARY 1.58-BIT
            </span>
          </div>

          <h1 className="section-title" style={{ maxWidth: 880, fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', lineHeight: 1.15, marginBottom: '1.5rem' }}>
            Ternary 1.58-Bit Edge AI for{' '}
            <span style={{
              background: 'linear-gradient(135deg, #10b981 0%, #34d399 50%, #D4AF37 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              Drones, Robotics & Silicon.
            </span>
          </h1>

          <p className="section-subtitle" style={{ maxWidth: 820, fontSize: '1.05rem', lineHeight: 1.85, marginBottom: '2.5rem' }}>
            Standard AI architectures demand power-hungry 16-bit binary floating point GPUs that burn battery and overheat embedded hardware. <strong>LEI (Librae Edge Intelligence)</strong> replaces binary float multiplication with a specialized <strong>1.58-bit ternary SIMD kernel {-1, 0, +1}</strong>. The entire sovereign intelligence engine runs in <strong>only ~400MB+ of RAM</strong>, executing 0.0564s multi-sensor fusion on low-power ARM64 and drone microcontrollers with <strong>100% offline air-gapped autonomy</strong>.
          </p>

          {/* Action CTAs */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
            <a
              href="/whitepapers/LIBRAE_LEI_Executive_Technical_Whitepaper.pdf"
              download="LIBRAE_LEI_Executive_Technical_Whitepaper.pdf"
              className="btn-primary"
              style={{
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color: '#000A1A', fontWeight: 800, padding: '14px 28px', fontSize: '0.92rem'
              }}
            >
              📥 Download LEI Technical White Paper (PDF) →
            </a>

            <a
              href="/whitepapers/LIBRAE_LEI_Empirical_Benchmarks_Report.pdf"
              download="LIBRAE_LEI_Empirical_Benchmarks_Report.pdf"
              className="btn-secondary"
              style={{ borderColor: 'rgba(56,189,248,0.4)', color: '#38bdf8', padding: '14px 24px', fontSize: '0.92rem' }}
            >
              📊 Benchmark Receipts (0.0564s Fusion)
            </a>

            <Link
              href="/contact"
              className="btn-secondary"
              style={{ borderColor: 'rgba(212,175,55,0.4)', color: '#D4AF37', padding: '14px 24px', fontSize: '0.92rem' }}
            >
              ⚡ Request Edge SDK Integration
            </Link>
          </div>

          {/* 4 Hard Edge Metrics */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }} className="edge-stats-grid">
            {[
              { val: '400 MB+', label: 'Total RAM Footprint', color: '#10b981', desc: 'Full sovereign AI model on edge micro-silicon' },
              { val: '1.58-Bit', label: 'Ternary {-1, 0, +1}', color: '#D4AF37', desc: 'Replaces binary float matrix multipliers' },
              { val: '0.0564s', label: '3-Sensor Fusion Latency', color: '#38bdf8', desc: 'LiDAR + SAR + RGB real-time stream' },
              { val: '4.2 W', label: 'Ultra-Low Thermal Envelope', color: '#a855f7', desc: 'Runs cold on ARM64 companion boards' },
            ].map((st, i) => (
              <div key={i} className="glass-card" style={{ padding: '1.5rem', borderTop: `2px solid ${st.color}` }}>
                <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '1.6rem', fontWeight: 800, color: st.color, marginBottom: '4px' }}>
                  {st.val}
                </div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#F0F4FF', marginBottom: '4px' }}>
                  {st.label}
                </div>
                <div style={{ fontSize: '0.72rem', color: '#8090b0' }}>
                  {st.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── 2. TERNARY VS BINARY: THE 400MB+ EDGE REVOLUTION ──────── */}
      <section className="section-padding" style={{ background: '#000A1A', borderTop: '1px solid rgba(212,175,55,0.1)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: '4.5rem', alignItems: 'center' }}>
            <div>
              <div className="accent-line" style={{ background: '#10b981' }} />
              <h2 className="section-title" style={{ fontSize: '2.2rem', marginBottom: '1.25rem' }}>
                Why Ternary {-1, 0, +1} Replaces <span style={{ color: '#10b981' }}>Power-Hungry Binary Float AI</span>
              </h2>
              <p style={{ color: '#A0B0CC', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '0.98rem' }}>
                Conventional deep learning relies on 16-bit or 32-bit floating-point multiplication (FP16/FP32). This forces drones and autonomous robots to carry heavy, hot GPUs requiring 50W–150W of battery power and 8GB–16GB of VRAM.
              </p>
              <p style={{ color: '#A0B0CC', lineHeight: 1.85, marginBottom: '1.5rem', fontSize: '0.98rem' }}>
                <strong>LEI changes the physics of edge computing:</strong> by quantizing model weights to ternary values <strong style={{ color: '#34d399' }}>&#123;-1, 0, +1&#125;</strong>, multiplication is mathematically eliminated from the kernel. Matrix multiplication simplifies into <strong style={{ color: '#D4AF37' }}>pure integer addition and bitwise shift operations</strong>.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ padding: '1.25rem', background: 'rgba(16,185,129,0.06)', borderLeft: '3px solid #10b981', borderRadius: '0 8px 8px 0' }}>
                  <div style={{ color: '#10b981', fontWeight: 800, fontSize: '0.85rem', marginBottom: '6px', fontFamily: 'Space Mono, monospace' }}>
                    ⚡ 400MB+ RAM CONSUMPTION
                  </div>
                  <div style={{ color: '#CBD5E1', fontSize: '0.82rem', lineHeight: 1.6 }}>
                    Entire model weights and working context fit into 400MB+ RAM. Deploys seamlessly on micro-drones, robotic arms, and industrial IoT microcontrollers.
                  </div>
                </div>

                <div style={{ padding: '1.25rem', background: 'rgba(212,175,55,0.06)', borderLeft: '3px solid #D4AF37', borderRadius: '0 8px 8px 0' }}>
                  <div style={{ color: '#D4AF37', fontWeight: 800, fontSize: '0.85rem', marginBottom: '6px', fontFamily: 'Space Mono, monospace' }}>
                    🔋 4.2W ULTRA-LOW POWER
                  </div>
                  <div style={{ color: '#CBD5E1', fontSize: '0.82rem', lineHeight: 1.6 }}>
                    Eliminates thermal throttling. Extends drone flight endurance by up to 38% compared to GPU-based vision modules.
                  </div>
                </div>
              </div>

              <div style={{ padding: '1.25rem 1.5rem', background: 'rgba(56,189,248,0.06)', borderLeft: '3px solid #38bdf8', borderRadius: '0 8px 8px 0' }}>
                <div style={{ color: '#38bdf8', fontWeight: 700, fontSize: '0.88rem', marginBottom: '4px' }}>
                  📐 Zero Inertial Drift via Continuous Lie Group Math
                </div>
                <div style={{ color: '#8090b0', fontSize: '0.84rem', lineHeight: 1.6 }}>
                  Paired with our continuous SE(3) Lie Group manifold geometry, LEI guarantees <strong>zero coordinate drift (9.90e-31 MSE)</strong> during high-speed aerial maneuvers, dynamic payload drops, and complex canopy photogrammetry.
                </div>
              </div>
            </div>

            {/* Architecture Card */}
            <div className="glass-card" style={{ padding: '2.5rem', border: '1px solid rgba(16,185,129,0.25)', position: 'relative' }}>
              <div style={{
                position: 'absolute', top: '-12px', right: '20px',
                padding: '4px 12px', background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                borderRadius: '100px', fontSize: '0.68rem', fontWeight: 800, color: '#000A1A', fontFamily: 'Space Mono, monospace'
              }}>
                1.58-BIT SIMD COMPILED
              </div>

              <h4 style={{ color: '#D4AF37', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '1.25rem', fontFamily: 'Space Mono, monospace' }}>
                Kernel Comparison: Binary FP16 vs. LEI Ternary
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ padding: '1rem', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ color: '#f87171', fontWeight: 700, fontSize: '0.82rem' }}>Traditional Binary FP16/FP32</span>
                    <span style={{ color: '#f87171', fontFamily: 'Space Mono, monospace', fontSize: '0.75rem' }}>8GB–16GB RAM · 65W+</span>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                    Heavy floating-point multipliers, high heat, battery drain, requires external cloud or bulky GPU hardware.
                  </div>
                </div>

                <div style={{ padding: '1rem', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.4)', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ color: '#34d399', fontWeight: 800, fontSize: '0.85rem' }}>LEI 1.58-Bit Ternary BitNet</span>
                    <span style={{ color: '#34d399', fontFamily: 'Space Mono, monospace', fontSize: '0.8rem', fontWeight: 800 }}>400MB+ RAM · 4.2W</span>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#CBD5E1' }}>
                    Bit-shift & addition SIMD kernels, cold thermal profile, sub-20µs latency, 100% offline air-gapped execution.
                  </div>
                </div>
              </div>

              <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.78rem', background: 'rgba(0,0,0,0.6)', padding: '1.25rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ color: '#10b981', marginBottom: '6px' }}>{'//'} LEI C/SIMD Kernel Execution Trace</div>
                <div style={{ color: '#8090b0' }}>Ternary_Weight_Space: [-1, 0, +1]</div>
                <div style={{ color: '#8090b0' }}>Total_Memory_Mapped: <span style={{ color: '#38bdf8' }}>418.4 MB (Active)</span></div>
                <div style={{ color: '#8090b0' }}>Fused_Sensor_Packet: <span style={{ color: '#D4AF37' }}>LiDAR + SAR + RGB</span></div>
                <div style={{ color: '#8090b0' }}>Kernel_Cycle_Time: <span style={{ color: '#34d399' }}>18.4 µs / step</span></div>
                <div style={{ color: '#8090b0' }}>Pose_Drift_MSE: <span style={{ color: '#10b981' }}>9.904e-31 (Rigid Body SE3)</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────── 3. DEPLOYMENT MATRIX: DRONES, ROBOTICS & AUTONOMOUS SYSTEMS ──────── */}
      <section className="section-padding" style={{ background: 'linear-gradient(180deg, #000A1A 0%, #00122e 100%)', borderTop: '1px solid rgba(212,175,55,0.1)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem' }}>
            <div className="accent-line" style={{ margin: '0 auto 1rem', background: '#10b981' }} />
            <h2 className="section-title" style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>
              Where LEI Deploys: <span style={{ color: '#10b981' }}>From Micro-Drones to Autonomous Fleets</span>
            </h2>
            <p style={{ color: '#A0B0CC', fontSize: '0.98rem', lineHeight: 1.8 }}>
              Because LEI requires only ~400MB+ of RAM and ultra-low thermal dissipation, it is engineered for any robotic, aerial, or field machinery requiring deterministic local intelligence.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="deployment-grid">
            {[
              {
                icon: '🛸',
                title: 'Commercial UAVs & Drone Swarms',
                badge: 'CAAM CAD 6011',
                desc: 'Real-time multi-sensor fusion (LiDAR, SAR, RGB) for automated estate canopy surveys, border surveillance, and infrastructure inspection with zero signal latency.'
              },
              {
                icon: '🤖',
                title: 'Autonomous Mobile Robots (AMRs)',
                badge: 'ISO 3691-4',
                desc: 'Sub-millimeter topological SLAM and collision avoidance for factory floors, automated logistics hubs, and hazardous material handling with 0% network dependency.'
              },
              {
                icon: '🚜',
                title: 'Agricultural & Field Robotics',
                badge: 'MPOB & MSPO Aligned',
                desc: 'Onboard tree health classification, precision spraying nozzle guidance, and yield estimation operating in remote plantation zones with zero cellular coverage.'
              },
              {
                icon: '⚓',
                title: 'Maritime USVs & Port Robotics',
                badge: 'IMO SOLAS Aligned',
                desc: 'Synthetic Aperture Radar (SAR) stream processing for autonomous surface vessels, container yard logistics, and berth clearance verification in heavy fog.'
              },
              {
                icon: '🏗️',
                title: 'Heavy Equipment & Excavation Telematics',
                badge: 'ISO 15143 Compliant',
                desc: 'Sub-centimeter RTK and CAN-bus telemetry integration for automated earthwork volume reconciliation and trenching safety envelopes.'
              },
              {
                icon: '📷',
                title: 'Industrial Edge Inspection Cameras',
                badge: 'IP67 Silicon Ready',
                desc: 'Continuous high-speed defect classification and thermal anomaly detection running directly on embedded camera microcontrollers at 120 FPS.'
              }
            ].map((app, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <span style={{ fontSize: '2.2rem' }}>{app.icon}</span>
                  <span style={{
                    padding: '3px 10px', background: 'rgba(16,185,129,0.1)',
                    border: '1px solid rgba(16,185,129,0.3)', borderRadius: '100px',
                    fontSize: '0.68rem', color: '#34d399', fontFamily: 'Space Mono, monospace', fontWeight: 700
                  }}>
                    {app.badge}
                  </span>
                </div>
                <h4 style={{ color: '#F0F4FF', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                  {app.title}
                </h4>
                <p style={{ color: '#8090b0', fontSize: '0.85rem', lineHeight: 1.7, flexGrow: 1 }}>
                  {app.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── 4. 4-SENSOR FUSION TELEMETRY MATRIX ──────── */}
      <section className="section-padding" style={{ background: '#000A1A', borderTop: '1px solid rgba(212,175,55,0.1)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem' }}>
            <div className="accent-line" style={{ margin: '0 auto 1rem', background: '#D4AF37' }} />
            <h2 className="section-title" style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>
              Simultaneous Multi-Sensor Ingestion Matrix
            </h2>
            <p style={{ color: '#A0B0CC', fontSize: '0.98rem', lineHeight: 1.8 }}>
              LEI synchronizes orbital synthetic aperture radar, multi-spectral satellite passes, and high-frequency onboard drone sensors into one coherent spatial state vector in 0.0564s.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
            {sensorMatrix.map((sat, i) => (
              <div key={i} className="glass-card" style={{ padding: '2rem', borderLeft: '3px solid #D4AF37' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <h4 style={{ color: '#F0F4FF', fontSize: '1.15rem', fontWeight: 700 }}>{sat.name}</h4>
                  <span style={{ padding: '3px 9px', background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.3)', borderRadius: '100px', fontSize: '0.68rem', color: '#D4AF37', fontFamily: 'Space Mono, monospace' }}>
                    {sat.res}
                  </span>
                </div>
                <div style={{ color: '#38bdf8', fontSize: '0.82rem', fontFamily: 'Space Mono, monospace', marginBottom: '0.75rem' }}>
                  {sat.band}
                </div>
                <p style={{ color: '#8090b0', fontSize: '0.86rem', lineHeight: 1.7 }}>
                  {sat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── 5. INSTITUTIONAL AUDIT & COMPLIANCE ──────── */}
      <section className="section-padding" style={{ background: '#000814', borderTop: '1px solid rgba(212,175,55,0.1)' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, rgba(16,185,129,0.06) 0%, rgba(0,20,50,0.6) 100%)',
            border: '1px solid rgba(16,185,129,0.3)',
            borderRadius: '16px',
            padding: '3.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '3rem',
            flexWrap: 'wrap'
          }}>
            <div style={{ maxWidth: '650px' }}>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '1rem' }}>
                <span style={{ padding: '3px 10px', background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.4)', borderRadius: '100px', fontSize: '0.7rem', color: '#34d399', fontFamily: 'Space Mono, monospace', fontWeight: 700 }}>
                  CAAM CAD 6011 PART (I) & (II)
                </span>
                <span style={{ padding: '3px 10px', background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.4)', borderRadius: '100px', fontSize: '0.7rem', color: '#D4AF37', fontFamily: 'Space Mono, monospace', fontWeight: 700 }}>
                  ISO 21384-3 UAS STANDARDS
                </span>
              </div>
              <h3 style={{ fontSize: '1.8rem', color: '#F0F4FF', fontWeight: 800, marginBottom: '1rem' }}>
                Deploy Sovereign Edge AI to Your Drone or Robotic Fleet
              </h3>
              <p style={{ color: '#A0B0CC', fontSize: '0.92rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Access the LEI Embedded C/Rust SDK, pre-compiled ARM64 SIMD libraries, and empirical benchmark dossiers for immediate deployment into enterprise UAV operations and robotics sandboxes.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href="/whitepapers/LIBRAE_LEI_Executive_Technical_Whitepaper.pdf"
                  download="LIBRAE_LEI_Executive_Technical_Whitepaper.pdf"
                  className="btn-primary"
                  style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', color: '#000A1A', fontWeight: 800, padding: '12px 24px', fontSize: '0.88rem' }}
                >
                  📥 Download Technical Dossier (PDF)
                </a>
                <Link
                  href="/contact"
                  className="btn-secondary"
                  style={{ borderColor: 'rgba(212,175,55,0.4)', color: '#D4AF37', padding: '12px 24px', fontSize: '0.88rem' }}
                >
                  ⚡ Request Hardware Evaluation Unit
                </Link>
              </div>
            </div>

            <div style={{
              background: 'rgba(0,10,26,0.8)',
              border: '1px solid rgba(212,175,55,0.2)',
              borderRadius: '12px',
              padding: '1.5rem 2rem',
              textAlign: 'center',
              minWidth: '240px'
            }}>
              <div style={{ fontSize: '0.72rem', color: '#8090b0', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', fontFamily: 'Space Mono, monospace' }}>
                OPERATING SPECIFICATION
              </div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#34d399', fontFamily: 'Space Mono, monospace', marginBottom: '4px' }}>
                &lt; 400 MB
              </div>
              <div style={{ fontSize: '0.8rem', color: '#CBD5E1', marginBottom: '12px' }}>
                RAM Footprint (Edge AI)
              </div>
              <div style={{ fontSize: '0.72rem', color: '#D4AF37', fontFamily: 'Space Mono, monospace' }}>
                100% Zero-Egress Offline
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
