import Link from 'next/link';
import D3Network from '@/components/DataVis/D3Network';

export const metadata = {
  title: 'Ground-Truth Infrastructure | Librae',
  description: 'Edge AI Master Nodes, LoRa mesh sensors, and tropical-hardened hardware providing the granular proof that carbon auditors and governments demand.',
};

const masterNodeSpecs = [
  { label:'Processor', value:'Jetson Nano / Pi 5 + AI Hat', color:'#D4AF37' },
  { label:'Battery', value:'LiFePO4 Solar Array', color:'#2E8B57' },
  { label:'Vision', value:'YOLOv8 Real-time', color:'#4A9EFF' },
  { label:'Security', value:'SHA-256 at Source', color:'#7B4AFF' },
  { label:'Comms', value:'4G / Satellite / LoRa', color:'#D4AF37' },
  { label:'Storage', value:'Encrypted Local NVMe', color:'#2E8B57' },
];

const cvDetections = [
  { title:'Illegal Logging', desc:'Instant identification of chainsaws or heavy machinery in protected zones.', icon:'🪓', color:'#FF6B6B' },
  { title:'Biodiversity Tracking', desc:'Real-time species counting and identification of local fauna.', icon:'🦜', color:'#2E8B57' },
  { title:'Encroachment', desc:'Thermal and optical detection of unauthorized human activity.', icon:'🚷', color:'#D4AF37' },
];

const workerSensors = [
  { type:'Water-Borne Workers', icon:'💧', color:'#4A9EFF',
    metrics:['pH Level','Dissolved Oxygen (DO)','Turbidity','Temperature','Chemical Spike Detection'] },
  { type:'7-in-1 Ground Workers', icon:'🌱', color:'#2E8B57',
    metrics:['Soil Moisture','Temperature','EC (Conductivity)','Nitrogen (N)','Phosphorus (P)','Potassium (K)','Soil pH'] },
];

export default function GroundTruthPage() {
  return (
    <>
      <section className="page-hero hero-bg grid-bg">
        <div className="container" style={{ position:'relative', zIndex:1, paddingTop:'2rem' }}>
          <div className="badge" style={{ marginBottom:'1.5rem' }}>⚡ Edge Intelligence</div>
          <h1 className="section-title" style={{ maxWidth:700 }}>
            Edge Intelligence.{' '}<span className="gold-text">Sovereign Data.</span>
          </h1>
          <p className="section-subtitle">
            Solar-powered Master Nodes running YOLOv8 computer vision, connected through LoRa mesh networks. Born Digital, Born True.
          </p>
        </div>
      </section>

      {/* MASTER NODE */}
      <section className="section-padding" style={{ background:'linear-gradient(180deg,#000A1A,#001133)' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'5rem', alignItems:'center' }}>
            <div>
              <div className="accent-line" />
              <h2 className="section-title">The Sentient Master Node</h2>
              <p style={{ color:'var(--text-muted)', fontSize:'0.8rem', textTransform:'uppercase', letterSpacing:'1.5px', marginBottom:'1.5rem' }}>
                The Edge AI Core · Command Center of the Field
              </p>
              <p style={{ color:'var(--text-secondary)', lineHeight:1.8, marginBottom:'2rem' }}>
                Powered by LiFePO4 batteries and solar arrays, our Master Nodes operate independently of the grid. Every image and inference result is hashed at source via SHA-256 before being synced to the cloud — the data is "Born Digital, Born True."
              </p>
              {/* Spec grid */}
              <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:'0.75rem' }}>
                {masterNodeSpecs.map((s,i) => (
                  <div key={i} style={{ padding:'12px 16px', background:'rgba(0,20,60,0.5)', border:'1px solid rgba(212,175,55,0.1)', borderRadius:10, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                    <span style={{ color:'#607090', fontSize:'0.8rem' }}>{s.label}</span>
                    <span style={{ color:s.color, fontSize:'0.8rem', fontWeight:600, fontFamily:'Space Mono,monospace' }}>{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Schematic visual */}
            <div style={{ display:'flex', alignItems:'center', justifyContent:'center' }}>
              <div style={{
                width:320, height:320, borderRadius:20,
                background:'radial-gradient(circle at 50% 50%, rgba(212,175,55,0.08), rgba(0,10,26,0.95))',
                border:'1px solid rgba(212,175,55,0.2)',
                display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:'1rem',
                position:'relative',
              }}>
                <div style={{ fontSize:'4rem' }}>🖥️</div>
                <span style={{ fontFamily:'Outfit,sans-serif', fontWeight:700, color:'#D4AF37', fontSize:'1.1rem' }}>MASTER NODE</span>
                <span style={{ fontFamily:'Space Mono,monospace', fontSize:'0.7rem', color:'#607090' }}>Jetson Nano · Pi 5 AI Hat</span>
                {['🔋','☀️','📡','🎥'].map((e,i) => (
                  <div key={i} style={{
                    position:'absolute',
                    top: i<2 ? '15%' : '65%',
                    left: i%2===0 ? '-12%' : 'auto',
                    right: i%2===1 ? '-12%' : 'auto',
                    width:48, height:48, borderRadius:'50%',
                    background:'rgba(0,20,60,0.8)', border:'1px solid rgba(212,175,55,0.3)',
                    display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.3rem',
                  }}>{e}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────── D3.js NETWORK GRAPH ──────── */}
      <section className="section-padding" style={{ background: '#001133' }}>
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'3rem' }}>
            <div className="accent-line" style={{ margin:'0 auto 1.5rem' }} />
            <h2 className="section-title">Polygon Ingestion Pipeline</h2>
            <p className="section-subtitle" style={{ margin:'0 auto' }}>
              Real-time visualization of heterogeneous data sources being processed and cryptographically sealed on the Librae L2 network.
            </p>
          </div>
          <div className="glass-card" style={{ padding: '0', overflow: 'hidden' }}>
            <D3Network />
          </div>
        </div>
      </section>

      {/* CV DETECTIONS */}
      <section className="section-padding grid-bg" style={{ background:'#000A1A' }}>
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'3rem' }}>
            <div className="accent-line" style={{ margin:'0 auto 1.5rem' }} />
            <h2 className="section-title">Computer Vision (YOLOv8)</h2>
            <p className="section-subtitle" style={{ margin:'0 auto' }}>Real-time edge detections running locally on every Master Node.</p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'2rem' }}>
            {cvDetections.map((d,i) => (
              <div key={i} className="glass-card" style={{ padding:'2.5rem', textAlign:'center', position:'relative' }}>
                <div style={{ position:'absolute', top:0, left:0, right:0, height:2, background:`linear-gradient(90deg,${d.color},transparent)` }} />
                <div style={{ fontSize:'3rem', marginBottom:'1rem' }}>{d.icon}</div>
                <h3 style={{ color:d.color, marginBottom:'0.5rem', fontSize:'1.1rem' }}>{d.title}</h3>
                <p style={{ color:'var(--text-secondary)', fontSize:'0.9rem', lineHeight:1.6 }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKER NODES */}
      <section className="section-padding" style={{ background:'linear-gradient(180deg,#001133,#000A1A)' }}>
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'3rem' }}>
            <div className="accent-line" style={{ margin:'0 auto 1.5rem' }} />
            <h2 className="section-title">Worker Nodes — LoRa Mesh Network</h2>
            <p className="section-subtitle" style={{ margin:'0 auto' }}>
              Deep Earth & Water Intelligence. LoRa technology communicates over kilometers through dense jungle canopies with ultra-low power.
            </p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:'2rem' }}>
            {workerSensors.map((ws,i) => (
              <div key={i} className="glass-card" style={{ padding:'2.5rem' }}>
                <div style={{ display:'flex', alignItems:'center', gap:'1rem', marginBottom:'1.5rem' }}>
                  <div style={{ fontSize:'2rem', width:56, height:56, borderRadius:14,
                    background:`${ws.color}20`, border:`1px solid ${ws.color}40`,
                    display:'flex', alignItems:'center', justifyContent:'center' }}>{ws.icon}</div>
                  <h3 style={{ color:ws.color, fontSize:'1.1rem' }}>{ws.type}</h3>
                </div>
                <div style={{ display:'flex', flexWrap:'wrap', gap:'0.5rem' }}>
                  {ws.metrics.map((m,mi) => (
                    <span key={mi} style={{ padding:'6px 14px', background:`${ws.color}10`, border:`1px solid ${ws.color}25`,
                      borderRadius:100, fontSize:'0.78rem', color:ws.color, fontWeight:500 }}>
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop:'2rem', padding:'1.5rem 2rem', background:'rgba(212,175,55,0.05)', border:'1px solid rgba(212,175,55,0.15)', borderRadius:12 }}>
            <p style={{ color:'var(--text-secondary)', fontSize:'0.9rem', lineHeight:1.7 }}>
              <strong style={{ color:'#D4AF37' }}>The "Auto-Sleep" Protocol:</strong> Nodes remain in deep sleep, waking only to transmit critical data or when triggered by environmental thresholds — ensuring years of field deployment.
            </p>
          </div>
        </div>
      </section>

      {/* TROPICAL RESILIENCE */}
      <section className="section-padding grid-bg" style={{ background:'#000A1A' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'5rem', alignItems:'center' }}>
            <div>
              <div className="accent-line" />
              <h2 className="section-title">Tropical Resilience</h2>
              <blockquote>
                "Malaysia is a beautiful but harsh environment. Our hardware is engineered to withstand 100% humidity, torrential monsoon rains, and biological threats. From anti-termite coatings to ant-proof sealing, we ensure our sensors don't just work — they survive."
              </blockquote>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:'1rem', marginTop:'2rem' }}>
                {['100% Humidity Rated','Anti-Termite Coating','Monsoon Waterproof','Ant-Proof Sealing','UV Stabilized','Surge Protection'].map((f,i) => (
                  <div key={i} style={{ display:'flex', alignItems:'center', gap:'8px', color:'#3EAB6C', fontSize:'0.85rem' }}>
                    <span style={{ width:6, height:6, borderRadius:3, background:'#2E8B57', flexShrink:0 }} />
                    {f}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="accent-line" />
              <h2 className="section-title" style={{ fontSize:'1.8rem' }}>Path to Gold Standard</h2>
              <p style={{ color:'var(--text-secondary)', lineHeight:1.8, marginBottom:'1.5rem' }}>
                By combining satellite data with ground-truth verification, we meet IPCC Tier 3 reporting requirements. This "Double-Verification" qualifies projects for <strong style={{ color:'#D4AF37' }}>Gold Standard</strong> and <strong style={{ color:'#D4AF37' }}>Verra (VCS)</strong> certification.
              </p>
              <div style={{ display:'flex', gap:'1rem', flexWrap:'wrap' }}>
                {['IPCC Tier 3','Gold Standard','Verra VCS','EUDR Compliant'].map((b,i) => (
                  <span key={i} className="badge">{b}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding:'80px 0', background:'linear-gradient(135deg,#001133,#001A00)' }}>
        <div className="container" style={{ textAlign:'center' }}>
          <h2 style={{ fontSize:'clamp(1.6rem,3vw,2.4rem)', marginBottom:'1rem' }}>
            Deploy Ground-Truth in <span className="gold-text">Your Territory</span>
          </h2>
          <p style={{ color:'var(--text-secondary)', marginBottom:'2rem' }}>Custom Master Node + Worker Mesh installations for governments and large estates.</p>
          <Link href="/contact" className="btn-primary" style={{ padding:'16px 40px' }}>📡 Request Deployment</Link>
        </div>
      </section>
    </>
  );
}
