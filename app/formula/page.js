import Link from 'next/link';

export const metadata = {
  title: 'The Librae Formula | Integrity Through Prosperity',
  description: 'Triple-Lock confidence framework, high-value job creation, anti-corruption paygrade, and global deployment strategy.',
};

const roles = [
  { title:'Swarm Commanders', desc:'Trained locals managing Pentagon Swarm autonomous drones in the field.', icon:'🛩️', color:'#D4AF37' },
  { title:'Edge-AI Technicians', desc:'Maintaining Jetson Nano/Pi 5 Master Nodes and LoRa mesh networks.', icon:'⚡', color:'#4A9EFF' },
  { title:'Geospatial Analysts', desc:'Experts trained in 14+ AI methodologies: NDVI, SAVI, MSPI.', icon:'🗺️', color:'#2E8B57' },
  { title:'Sovereignty Leads', desc:'Liaisons bridging small farmers and the global carbon market.', icon:'🤝', color:'#7B4AFF' },
];

const deployments = [
  { flag:'🇲🇾', entity:'Librae Management Sdn Bhd', country:'Malaysia HQ', city:'Batu Gajah, Perak & KL', role:'Global HQ & MPOB-scale operations', color:'#D4AF37' },
  { flag:'🇺🇸', entity:'Librae Inc', country:'USA Corporate', city:'Strategic Partnerships', role:'Silicon Valley & North American carbon markets', color:'#4A9EFF' },
  { flag:'🇮🇳', entity:'Librae Pvt Ltd', country:'India Operations', city:'Punjab & Haryana', role:'Deep-tech development & restoration projects', color:'#2E8B57' },
];

export default function FormulaPage() {
  return (
    <>
      <section className="page-hero hero-bg grid-bg">
        <div className="container" style={{ position:'relative', zIndex:1, paddingTop:'2rem' }}>
          <div className="badge" style={{ marginBottom:'1.5rem' }}>⚖️ The Formula</div>
          <h1 className="section-title" style={{ maxWidth:700 }}>
            Integrity Through{' '}<span className="gold-text">Prosperity</span>
          </h1>
          <p className="section-subtitle">
            High-integrity data creates high-value compensation. We build a systemic barrier against corruption and greenwashing.
          </p>
        </div>
      </section>

      {/* TRIPLE LOCK */}
      <section className="section-padding" style={{ background:'linear-gradient(180deg,#000A1A,#001133)' }}>
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'4rem' }}>
            <div className="accent-line" style={{ margin:'0 auto 1.5rem' }} />
            <h2 className="section-title">The Triple-Lock Confidence Framework</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'2rem' }}>
            {[
              { title:'Ground-Truth', sub:'Empirical Physics', icon:'📡', color:'#D4AF37',
                desc:'Local 7-in-1 sensor data and LiDAR provide empirical physical evidence from the field. Every reading SHA-256 hashed at source.' },
              { title:'Satellite-Truth', sub:'Multi-Spectral Consistency', icon:'🛰️', color:'#2E8B57',
                desc:'Cross-referencing Sentinel-2, Landsat, and Pleiades Neo eliminates any ambiguity in land-use classification.' },
              { title:'Mathematical-Truth', sub:'Cryptographic Finality', icon:'🔐', color:'#7B4AFF',
                desc:'Once hashed via SHA-256 and anchored on Polygon L2, the report is immutable. Even we cannot change it.' },
            ].map((lock,i) => (
              <div key={i} className="glass-card" style={{ padding:'2.5rem', textAlign:'center', position:'relative' }}>
                <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:`linear-gradient(90deg,${lock.color},transparent)` }} />
                <div style={{ fontSize:'3rem', marginBottom:'1rem' }}>{lock.icon}</div>
                <h3 style={{ color:lock.color, fontSize:'1.2rem', marginBottom:'0.25rem' }}>{lock.title}</h3>
                <p style={{ color:'#607090', fontSize:'0.75rem', textTransform:'uppercase', letterSpacing:'1px', marginBottom:'1rem' }}>{lock.sub}</p>
                <p style={{ color:'var(--text-secondary)', fontSize:'0.9rem', lineHeight:1.7 }}>{lock.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop:'2rem', padding:'1.5rem', background:'rgba(46,139,87,0.08)', border:'1px solid rgba(46,139,87,0.2)', borderRadius:12, textAlign:'center' }}>
            <p style={{ color:'var(--text-secondary)', fontSize:'0.9rem' }}>
              <strong style={{ color:'#D4AF37' }}>Global Alignment:</strong> Pre-calibrated to IPCC Tier 3 and EUDR standards. When we say a forest is protected, Brussels, Washington, and Tokyo accept it as absolute fact.
            </p>
          </div>
        </div>
      </section>

      {/* JOB CREATION */}
      <section className="section-padding grid-bg" style={{ background:'#000A1A' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'5rem', alignItems:'center' }}>
            <div>
              <div className="accent-line" />
              <h2 className="section-title">Empowering the Guardians</h2>
              <p style={{ color:'var(--text-secondary)', lineHeight:1.8, marginBottom:'2rem' }}>
                To protect nature, we must protect the people who monitor it. Librae doesn't just hire; we transform local labor into Environmental Intelligence Officers.
              </p>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}>
                {roles.map((r,i) => (
                  <div key={i} className="glass-card" style={{ padding:'1.5rem' }}>
                    <div style={{ fontSize:'1.5rem', marginBottom:'0.5rem' }}>{r.icon}</div>
                    <h4 style={{ color:r.color, fontSize:'0.95rem', marginBottom:'0.3rem' }}>{r.title}</h4>
                    <p style={{ color:'var(--text-muted)', fontSize:'0.8rem', lineHeight:1.5 }}>{r.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="accent-line" />
              <h2 className="section-title" style={{ fontSize:'1.8rem' }}>The Anti-Corruption Pay Grade</h2>
              <div className="glass-card" style={{ padding:'2.5rem' }}>
                <div style={{ textAlign:'center', marginBottom:'2rem' }}>
                  <span style={{ fontFamily:'Space Mono,monospace', fontSize:'2rem', color:'#D4AF37', fontWeight:700 }}>$4,000 – $6,000</span>
                  <p style={{ color:'#607090', fontSize:'0.8rem', textTransform:'uppercase', letterSpacing:'1px', marginTop:'4px' }}>USD / Month · Core Technical Roles</p>
                </div>
                <div style={{ display:'flex', flexDirection:'column', gap:'1rem' }}>
                  {[
                    { title:'Integrity is Unhackable', desc:'A well-paid worker is the strongest defense against bribery and the "Greenwash Industry."' },
                    { title:'Incentivizing Protection', desc:'When they protect the trees, they protect their high-value careers.' },
                    { title:'Quality of Intelligence', desc:'High-level AI and blockchain systems require high-level human oversight.' },
                  ].map((p,i) => (
                    <div key={i} style={{ display:'flex', gap:'12px', alignItems:'flex-start' }}>
                      <span style={{ width:6, height:6, borderRadius:3, background:'#D4AF37', flexShrink:0, marginTop:8 }} />
                      <div>
                        <strong style={{ color:'#D4AF37', fontSize:'0.9rem' }}>{p.title}</strong>
                        <p style={{ color:'var(--text-secondary)', fontSize:'0.85rem', lineHeight:1.6 }}>{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL DEPLOYMENT */}
      <section className="section-padding" style={{ background:'linear-gradient(180deg,#001133,#000A1A)' }}>
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'3rem' }}>
            <div className="accent-line" style={{ margin:'0 auto 1.5rem' }} />
            <h2 className="section-title">Global Deployment Strategy</h2>
            <p className="section-subtitle" style={{ margin:'0 auto' }}>
              For every country we enter, we don't just extract data — we deposit knowledge, technology, and wealth.
            </p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'2rem' }}>
            {deployments.map((d,i) => (
              <div key={i} className="glass-card" style={{ padding:'2.5rem', textAlign:'center', position:'relative' }}>
                <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:`linear-gradient(90deg,${d.color},transparent)` }} />
                <div style={{ fontSize:'3rem', marginBottom:'1rem' }}>{d.flag}</div>
                <h3 style={{ color:d.color, fontSize:'1.1rem', marginBottom:'0.25rem' }}>{d.entity}</h3>
                <p style={{ color:'#607090', fontSize:'0.75rem', textTransform:'uppercase', letterSpacing:'1px', marginBottom:'0.75rem' }}>
                  {d.country} · {d.city}
                </p>
                <p style={{ color:'var(--text-secondary)', fontSize:'0.85rem', lineHeight:1.6 }}>{d.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding:'80px 0', background:'linear-gradient(135deg,#001133,#001A00)' }}>
        <div className="container" style={{ textAlign:'center' }}>
          <h2 style={{ fontSize:'clamp(1.6rem,3vw,2.4rem)', marginBottom:'1rem' }}>
            Partner with a <span className="gold-text">Sovereign State</span>
          </h2>
          <p style={{ color:'var(--text-secondary)', marginBottom:'2rem' }}>High-value careers. Premium carbon credits. Global compliance. Join the force for nature.</p>
          <div style={{ display:'flex', gap:'1rem', justifyContent:'center' }}>
            <Link href="/contact" className="btn-primary" style={{ padding:'16px 40px' }}>🌿 Join the Force</Link>
            <a href="https://lenuda.librae.work" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding:'15px 39px' }}>
              🔗 LENUDA Platform
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
