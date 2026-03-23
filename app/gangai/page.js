'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const seaDomains = [
  { icon:'🛢️', title:'Oil Spill Detection', desc:'Sentinel-1 (SAR) + Sentinel-3 (Thermal) identify dark vessels and leaks with 30cm precision.' },
  { icon:'♻️', title:'Plastic Flux Mapping', desc:'AI vision identifies large-scale plastic gyres and river-mouth waste discharge for rapid cleanup.' },
  { icon:'🌊', title:'Sea Level & Mangrove', desc:'Monitoring the "First Line of Defense" against climate change using Sentinel-6.' },
  { icon:'🐟', title:'Illegal Fishing (IUU)', desc:'Pentagon Soldier 3 detects unauthorized trawlers in protected marine parks via thermal/night vision.' },
  { icon:'🏭', title:'River Pollution', desc:'Worker Nodes detect chemical spikes from industrial zones before they reach the ocean.' },
];

const airDomains = [
  { icon:'🌫️', title:'Transboundary Haze', desc:'Real-time AOD mapping to identify exact hotspots and wind trajectories.' },
  { icon:'💨', title:'Methane Detection (CH₄)', desc:'Sentinel-5P pinpoints invisible leaks in oil/gas infrastructure and landfills.' },
  { icon:'🌧️', title:'Acid Rain Risk', desc:'Monitoring SO₂ and NO₂ levels near industrial clusters to protect local agriculture.' },
  { icon:'🌍', title:'Carbon Flux', desc:'Calculating actual CO₂ sequestration vs. emission of specific cities or estates.' },
  { icon:'🔥', title:'Illegal Smoke', desc:'YOLOv8 Master Nodes detect factory smoke plumes at night, identifying non-compliant filters.' },
];

const landDomains = [
  { icon:'🪓', title:'Illegal Logging Alerts', desc:'Acoustic and visual Soldier drones detect chainsaws and log movement in No-Go zones.' },
  { icon:'🏔️', title:'Urban Hazard Mapping', desc:'Identifying soil instability and landslide risks using LiDAR and InSAR.' },
  { icon:'🏭', title:'Ghost Factory ID', desc:'Sentinel-2 locates unauthorized factories hidden in palm oil estates or deep jungle.' },
  { icon:'🗑️', title:'Waste Dumping', desc:'Autonomous patrols identify illegal landfills and chemical dumping sites.' },
  { icon:'🛡️', title:'Encroachment', desc:'Real-time alerts when activity enters protected indigenous territories.' },
];

const futureFeatures = [
  { icon:'🎵', title:'Acoustic Fingerprinting', desc:'AI sensors identify 1,000+ species. If the forest goes silent, a Pentagon Swarm auto-dispatches.', color:'#7B4AFF' },
  { icon:'🔮', title:'Prediction Engine (Oracle)', desc:'Physics-based AI predicts where a fire or oil spill will move in the next 12 hours.', color:'#D4AF37' },
  { icon:'📜', title:'The Nature Ledger', desc:'Blockchain-backed record where every incident is etched into Polygon L2 forever. Polluters cannot delete history.', color:'#2E8B57' },
  { icon:'🐘', title:'Human-Wildlife Conflict', desc:'Thermal drones and Master Nodes trigger ultrasonic deterrents to save both animals and crops.', color:'#4A9EFF' },
  { icon:'📡', title:'Sub-Surface Integrity', desc:'GPR (Ground Penetrating Radar) on drones to detect illegal underground mining or buried toxic waste.', color:'#FF9F43' },
];

function AnimatedProgress({ target }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        let v = 0;
        const timer = setInterval(() => { v += 1; if (v >= target) { setVal(target); clearInterval(timer); } else setVal(v); }, 20);
        obs.disconnect();
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return (
    <div ref={ref}>
      <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'6px' }}>
        <span style={{ color:'#D4AF37', fontSize:'0.8rem', fontWeight:700 }}>MALAYSIA-WIDE MESH STATUS</span>
        <span style={{ fontFamily:'Space Mono,monospace', fontSize:'0.85rem', color:'#D4AF37', fontWeight:700 }}>{val}%</span>
      </div>
      <div style={{ height:10, background:'rgba(212,175,55,0.15)', borderRadius:5, overflow:'hidden' }}>
        <div style={{
          width:`${val}%`, height:'100%',
          background:'linear-gradient(90deg,#D4AF37,#2E8B57)',
          borderRadius:5, transition:'width 0.3s',
          boxShadow:'0 0 20px rgba(212,175,55,0.5)',
        }} />
      </div>
    </div>
  );
}

function DomainSection({ title, icon, color, domains, bgColor }) {
  return (
    <div style={{ marginBottom:'1rem' }}>
      <div style={{ display:'flex', alignItems:'center', gap:'1rem', marginBottom:'1.5rem' }}>
        <div style={{
          width:56, height:56, borderRadius:16,
          background:`${color}20`, border:`2px solid ${color}`,
          display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.8rem',
        }}>{icon}</div>
        <div>
          <h3 style={{ color, fontSize:'1.3rem' }}>{title}</h3>
        </div>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap:'1rem' }}>
        {domains.map((d,i) => (
          <div key={i} className="glass-card" style={{ padding:'1.5rem' }}>
            <div style={{ fontSize:'1.5rem', marginBottom:'0.5rem' }}>{d.icon}</div>
            <h4 style={{ color:'var(--text-primary)', fontSize:'0.9rem', marginBottom:'0.3rem' }}>{d.title}</h4>
            <p style={{ color:'var(--text-muted)', fontSize:'0.8rem', lineHeight:1.6 }}>{d.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GangaiPage() {
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);

  return (
    <>
      {/* HERO */}
      <section className="hero-bg grid-bg" style={{
        minHeight:'80vh', display:'flex', alignItems:'center', position:'relative', overflow:'hidden', paddingTop:'72px',
      }}>
        <div style={{
          position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)',
          width:800, height:800, borderRadius:'50%',
          background:'radial-gradient(circle,rgba(212,175,55,0.06),transparent 70%)',
          pointerEvents:'none',
        }} />
        <div className="container" style={{ position:'relative', zIndex:1, textAlign:'center' }}>
          <div style={{
            display:'inline-flex', alignItems:'center', gap:'6px',
            padding:'6px 18px', background:'rgba(255,100,0,0.1)', border:'1px solid rgba(255,100,0,0.4)',
            borderRadius:100, fontSize:'0.75rem', fontWeight:700, color:'#FF6B3A',
            marginBottom:'2rem', letterSpacing:'1px',
          }}>
            ⚠️ UNDER DEVELOPMENT · BETA PHASE 2026
          </div>
          <h1 style={{ fontSize:'clamp(2.5rem,5vw,4.5rem)', lineHeight:1.05, marginBottom:'1.5rem' }}>
            <span style={{ color:'#D4AF37' }}>GANGAI</span>
            <br />
            <span className="gradient-text">The Sovereign Shield</span>
          </h1>
          <p style={{ color:'var(--text-secondary)', fontSize:'1.2rem', maxWidth:700, margin:'0 auto 2rem', lineHeight:1.7 }}>
            Sea Intelligence · Air Intelligence · Land Intelligence — Powered by Pentagon Swarm drones, Sentinel constellation, and SHA-256 cryptographic evidence.
          </p>
          <p style={{ color:'var(--text-muted)', fontSize:'0.9rem', marginBottom:'3rem' }}>
            Intelligence for Peace. The Governing Intelligence that gives nature a voice in the halls of justice.
          </p>
          <div style={{ maxWidth:500, margin:'0 auto' }}>
            <AnimatedProgress target={85} />
          </div>
        </div>
      </section>

      {/* ──── SEA ──── */}
      <section className="section-padding" style={{ background:'linear-gradient(180deg,#000A1A,#001133)' }}>
        <div className="container">
          <div className="accent-line" />
          <DomainSection title="Sea Intelligence — The Hydro-Guardian" icon="🌊" color="#4A9EFF" domains={seaDomains} />
          <p style={{ color:'var(--text-muted)', fontSize:'0.85rem', marginTop:'1rem' }}>
            Objective: Real-time monitoring of Malaysia's 4,675km coastline and the Melaka Straits.
          </p>
        </div>
      </section>

      {/* ──── AIR ──── */}
      <section className="section-padding grid-bg" style={{ background:'#000A1A' }}>
        <div className="container">
          <div className="accent-line" />
          <DomainSection title="Air Intelligence — The Atmospheric Watcher" icon="💨" color="#7B4AFF" domains={airDomains} />
          <p style={{ color:'var(--text-muted)', fontSize:'0.85rem', marginTop:'1rem' }}>
            Objective: Turning the "Invisible" into "Actionable" data across entire nations.
          </p>
        </div>
      </section>

      {/* ──── LAND ──── */}
      <section className="section-padding" style={{ background:'linear-gradient(180deg,#001133,#000A1A)' }}>
        <div className="container">
          <div className="accent-line" />
          <DomainSection title="Land Intelligence — The Terrestrial Enforcer" icon="🌳" color="#2E8B57" domains={landDomains} />
          <p style={{ color:'var(--text-muted)', fontSize:'0.85rem', marginTop:'1rem' }}>
            Objective: Total domain awareness for forestry and urban safety.
          </p>
        </div>
      </section>

      {/* ──── ENFORCEMENT HUBS ──── */}
      <section className="section-padding grid-bg" style={{ background:'#000A1A' }}>
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'3rem' }}>
            <div className="accent-line" style={{ margin:'0 auto 1.5rem' }} />
            <h2 className="section-title">Enforcement Hubs</h2>
            <p className="section-subtitle" style={{ margin:'0 auto' }}>
              PDRM & National Security Integration — Data Sovereignty as National Defense
            </p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'2rem' }}>
            <div className="glass-card" style={{ padding:'2.5rem', position:'relative' }}>
              <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:'linear-gradient(90deg,#D4AF37,transparent)' }} />
              <h3 style={{ color:'#D4AF37', marginBottom:'1rem', fontSize:'1.2rem' }}>🏛️ PDRM Drone Hubs</h3>
              <p style={{ color:'var(--text-secondary)', lineHeight:1.7, marginBottom:'1rem' }}>
                Every PDRM station becomes a "GANGAI Nest." When alerts trigger, Pentagon Swarms auto-deploy. Crime footage is recorded in 4K, SHA-256 hashed, and sent to Cloud — tamper-proof for court proceedings.
              </p>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'0.5rem' }}>
                {['Auto-Deploy','4K Evidence','SHA-256 Chain','Tamper-Proof','Officer Safety'].map(t => (
                  <span key={t} className="badge">{t}</span>
                ))}
              </div>
            </div>
            <div className="glass-card" style={{ padding:'2.5rem', position:'relative' }}>
              <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:'linear-gradient(90deg,#2E8B57,transparent)' }} />
              <h3 style={{ color:'#2E8B57', marginBottom:'1rem', fontSize:'1.2rem' }}>🛡️ Military & National Security</h3>
              <p style={{ color:'var(--text-secondary)', lineHeight:1.7, marginBottom:'1rem' }}>
                Sovereign observation with local-data-storage. Swarm drones patrol Sabah and Sarawak borders in Offline Mode to prevent hacking. Monitoring dams, power plants, and oil rigs via Master-Worker sensor mesh.
              </p>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'0.5rem' }}>
                {['Sovereign Data','Offline Mode','Border Patrol','Infrastructure','Anti-Hack'].map(t => (
                  <span key={t} style={{ padding:'4px 10px', background:'rgba(46,139,87,0.1)',
                    border:'1px solid rgba(46,139,87,0.3)', borderRadius:100, fontSize:'0.72rem', color:'#2E8B57', fontWeight:600 }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──── GLOBAL VALIDATION ──── */}
      <section className="section-padding" style={{ background:'linear-gradient(180deg,#001133,#000A1A)' }}>
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'3rem' }}>
            <div className="accent-line" style={{ margin:'0 auto 1.5rem' }} />
            <h2 className="section-title">Global Institutional Validation</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'2.5rem' }}>
            <div className="glass-card gold-glow" style={{ padding:'2.5rem', position:'relative' }}>
              <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:'linear-gradient(90deg,#4A9EFF,transparent)' }} />
              <div style={{ display:'flex', alignItems:'center', gap:'1rem', marginBottom:'1.5rem' }}>
                <div style={{ fontSize:'2rem' }}>🇺🇳</div>
                <div>
                  <h3 style={{ color:'#4A9EFF', fontSize:'1.1rem' }}>UNEP Alignment</h3>
                  <p style={{ color:'#607090', fontSize:'0.75rem' }}>United Nations Environment Programme</p>
                </div>
              </div>
              <p style={{ color:'var(--text-secondary)', lineHeight:1.7, marginBottom:'1rem' }}>
                The UN is considering GANGAI as a primary infrastructure tool for Digital Environmental Governance. GANGAI's 3-5 minute report generation matches the UN's "Early Warning for All" initiative.
              </p>
              <p style={{ color:'var(--text-muted)', fontSize:'0.85rem', lineHeight:1.7 }}>
                <strong style={{ color:'#4A9EFF' }}>The Goal:</strong> Providing Developing Nations with a "Sovereign Intelligence" package, eliminating reliance on expensive foreign audits.
              </p>
            </div>
            <div className="glass-card" style={{ padding:'2.5rem', position:'relative' }}>
              <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:'linear-gradient(90deg,#D4AF37,transparent)' }} />
              <div style={{ display:'flex', alignItems:'center', gap:'1rem', marginBottom:'1.5rem' }}>
                <div style={{ fontSize:'2rem' }}>🔬</div>
                <div>
                  <h3 style={{ color:'#D4AF37', fontSize:'1.1rem' }}>Google Science Grant</h3>
                  <p style={{ color:'#607090', fontSize:'0.75rem' }}>Applied · Science & Sustainability</p>
                </div>
              </div>
              <p style={{ color:'var(--text-secondary)', lineHeight:1.7, marginBottom:'1rem' }}>
                Applied for the Google Science & Organization Grant to scale processing power. Integrating Google's TPU for hyper-complex spectral analysis across entire continents.
              </p>
              <p style={{ color:'var(--text-muted)', fontSize:'0.85rem', lineHeight:1.7 }}>
                <strong style={{ color:'#D4AF37' }}>Cloud Integrity:</strong> Moving to a high-security Google Cloud instance supporting SHA-256 Merkle Tree architecture for global transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ──── FUTURE FEATURES ──── */}
      <section className="section-padding grid-bg" style={{ background:'#000A1A' }}>
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'3rem' }}>
            <div className="accent-line" style={{ margin:'0 auto 1.5rem' }} />
            <h2 className="section-title">Future-Proof Expansion</h2>
            <p className="section-subtitle" style={{ margin:'0 auto' }}>Beyond Air, Land, and Sea — High-Intelligence layers coming to GANGAI.</p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))', gap:'1.5rem' }}>
            {futureFeatures.map((f,i) => (
              <div key={i} className="glass-card" style={{ padding:'2rem', position:'relative' }}>
                <div style={{ position:'absolute', top:0, left:0, right:0, height:2, background:`linear-gradient(90deg,${f.color},transparent)` }} />
                <div style={{ fontSize:'2rem', marginBottom:'1rem' }}>{f.icon}</div>
                <h4 style={{ color:f.color, fontSize:'0.95rem', marginBottom:'0.5rem' }}>{f.title}</h4>
                <p style={{ color:'var(--text-secondary)', fontSize:'0.85rem', lineHeight:1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── ALPHA STATUS & WAITLIST ──── */}
      <section className="section-padding" style={{ background:'linear-gradient(180deg,#001133,#000A1A)' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4rem', alignItems:'center' }}>
            <div>
              <div className="accent-line" />
              <h2 className="section-title">Deployment Status</h2>
              <div style={{ display:'flex', flexDirection:'column', gap:'1.5rem', marginTop:'2rem' }}>
                {[
                  { label:'Alpha Testing', status:'ONGOING', color:'#2E8B57', desc:'Deployed in Malaysian tropical corridors. Calibrating YOLOv8 for Belum-Temenggor Forest and Melaka Straits monitoring.' },
                  { label:'National Integration', status:'IN PROGRESS', color:'#D4AF37', desc:'Partnering with local agencies to establish GANGAI Hubs at key enforcement stations across Malaysia.' },
                  { label:'Global Launch', status:'Q4 2026', color:'#4A9EFF', desc:'Scheduled worldwide rollout for international governments, estates, and enforcement agencies.' },
                ].map((s,i) => (
                  <div key={i} className="glass-card" style={{ padding:'1.5rem', display:'flex', gap:'1.5rem', alignItems:'flex-start' }}>
                    <div style={{
                      padding:'4px 12px', background:`${s.color}15`, border:`1px solid ${s.color}40`,
                      borderRadius:100, fontSize:'0.7rem', color:s.color, fontWeight:700, whiteSpace:'nowrap',
                    }}>{s.status}</div>
                    <div>
                      <h4 style={{ color:'var(--text-primary)', fontSize:'0.95rem', marginBottom:'0.25rem' }}>{s.label}</h4>
                      <p style={{ color:'var(--text-muted)', fontSize:'0.82rem', lineHeight:1.6 }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WAITLIST FORM */}
            <div className="glass-card gold-glow" style={{ padding:'3rem', textAlign:'center' }}>
              <div style={{ fontSize:'3rem', marginBottom:'1rem' }}>🛡️</div>
              <h3 style={{ color:'#D4AF37', fontSize:'1.5rem', marginBottom:'0.5rem' }}>Join the Beta Waitlist</h3>
              <p style={{ color:'var(--text-secondary)', fontSize:'0.9rem', marginBottom:'2rem' }}>
                Be among the first to access GANGAI — the Sovereign Shield for your nation.
              </p>
              {joined ? (
                <div>
                  <div style={{ fontSize:'2rem', marginBottom:'0.5rem' }}>✅</div>
                  <p style={{ color:'#2E8B57', fontWeight:700 }}>You're on the waitlist!</p>
                  <p style={{ color:'#607090', fontSize:'0.8rem', marginTop:'0.5rem' }}>We'll notify you when GANGAI launches.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setJoined(true); }}>
                  <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    style={{
                      width:'100%', padding:'14px 16px', background:'rgba(0,20,60,0.6)',
                      border:'1px solid rgba(212,175,55,0.3)', borderRadius:10,
                      color:'var(--text-primary)', fontSize:'0.9rem', fontFamily:'Inter,sans-serif',
                      outline:'none', marginBottom:'1rem',
                    }} />
                  <button type="submit" className="btn-primary" style={{ width:'100%', justifyContent:'center', padding:'16px', fontSize:'1rem' }}>
                    🛡️ Join the Beta Waitlist
                  </button>
                </form>
              )}
              <div style={{ marginTop:'1.5rem', display:'flex', justifyContent:'center', gap:'1rem' }}>
                <a href="https://lenuda.librae.work" target="_blank" rel="noopener noreferrer"
                  style={{ color:'#D4AF37', fontSize:'0.8rem', textDecoration:'none' }}>
                  🔗 LENUDA Platform
                </a>
                <Link href="/contact" style={{ color:'#4A9EFF', fontSize:'0.8rem', textDecoration:'none' }}>
                  📧 Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING STATEMENT */}
      <section style={{ padding:'100px 0', background:'linear-gradient(135deg,#001133,#001A00)', position:'relative', overflow:'hidden' }}>
        <div style={{
          position:'absolute', top:0, left:0, right:0, bottom:0,
          background:'radial-gradient(ellipse at 50% 50%, rgba(212,175,55,0.04), transparent 70%)',
        }} />
        <div className="container" style={{ textAlign:'center', position:'relative', zIndex:1 }}>
          <div className="accent-line" style={{ margin:'0 auto 1.5rem' }} />
          <h2 style={{ fontSize:'clamp(1.6rem,3vw,2.5rem)', marginBottom:'1.5rem', maxWidth:700, margin:'0 auto 1.5rem' }}>
            A New Era of <span className="gold-text">Enforcement</span>
          </h2>
          <blockquote style={{ maxWidth:800, margin:'0 auto 2.5rem', fontSize:'1.1rem', borderColor:'#D4AF37' }}>
            "We are moving from a world of 'Post-Incident Reporting' to 'Pre-Incident Prevention.' GANGAI is the first AI that doesn't just watch the world burn; it alerts the firefighters before the spark becomes a flame. Coming soon to every corner of the planet."
          </blockquote>
          <p style={{ color:'var(--text-muted)', maxWidth:600, margin:'0 auto 2rem', fontSize:'0.9rem' }}>
            GANGAI is not just a monitoring system; it is a Governing Intelligence. From the Melaka Straits to the Belum Forest, Nature's voice will be heard in the halls of justice.
          </p>
          <div style={{ display:'flex', gap:'1rem', justifyContent:'center' }}>
            <Link href="/contact" className="btn-primary" style={{ padding:'16px 40px', fontSize:'1rem' }}>🛡️ Partner with GANGAI</Link>
            <a href="https://lenuda.librae.work" target="_blank" rel="noopener noreferrer"
              className="btn-secondary" style={{ padding:'15px 39px', fontSize:'1rem' }}>
              🔗 LENUDA Platform
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
