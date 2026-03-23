import Link from 'next/link';

export const metadata = {
  title: 'Aerial Intelligence | The Pentagon Swarm | Librae',
  description: 'Autonomous drone swarm intelligence with 5 specialized UAVs. From hyperspectral to LiDAR to thermal night vision — sovereign data collection.',
};

const soldiers = [
  { name:'The Eye', spec:'Hyperspectral', range:'400nm–2500nm', desc:'Detects chemical leaks, oil spills, or crop stress invisible to humans.', icon:'👁️', color:'#7B4AFF' },
  { name:'The Mapper', spec:'LiDAR', range:'High-precision 3D', desc:'Pierces through dense canopies to create Digital Terrain Models (DTM).', icon:'📐', color:'#4A9EFF' },
  { name:'The Sentinel', spec:'Thermal/Night', range:'Zenmuse H30T', desc:'Detects illegal logging or poaching at midnight using starlight sensors.', icon:'🌙', color:'#FF6B6B' },
  { name:'The Auditor', spec:'High-Res RGB', range:'Centimeter-level', desc:'Captures precise detail for land deed verification and SHA-256 visual hashing.', icon:'📸', color:'#D4AF37' },
];

const hardwareTable = [
  { platform:'DJI Matrice 350 RTK', enhancement:'Integrated Librae AI Node', use:'Hyperspectral & LiDAR' },
  { platform:'Mavic 3 Multispectral', enhancement:'Swarm-link Protocol', use:'Rapid Polygon Assessment' },
  { platform:'Librae Custom (7"/10")', enhancement:'Pi 5 AI Hat + 4G/Sat', use:'Long-range Autonomous Patrols' },
];

export default function AerialPage() {
  return (
    <>
      <section className="page-hero hero-bg grid-bg">
        <div className="container" style={{ position:'relative', zIndex:1, paddingTop:'2rem' }}>
          <div className="badge" style={{ marginBottom:'1.5rem' }}>🛩️ Autonomous Swarm</div>
          <h1 className="section-title" style={{ maxWidth:700 }}>
            The Pentagon <span className="gold-text">Swarm</span>
          </h1>
          <p className="section-subtitle">
            Autonomous coordination. Collective intelligence. Five specialized UAVs that communicate locally to map, detect, and report without human intervention.
          </p>
        </div>
      </section>

      {/* SWARM ARCHITECTURE */}
      <section className="section-padding" style={{ background:'linear-gradient(180deg,#000A1A,#001133)' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'5rem', alignItems:'center' }}>
            <div>
              <div className="accent-line" />
              <h2 className="section-title">The General</h2>
              <p style={{ color:'#D4AF37', fontWeight:600, fontSize:'0.85rem', textTransform:'uppercase', letterSpacing:'1px', marginBottom:'1rem' }}>
                Command & Control · The Hive Mind
              </p>
              <p style={{ color:'var(--text-secondary)', lineHeight:1.8, marginBottom:'1.5rem' }}>
                The General handles primary pathfinding, obstacle avoidance, and global SLAM (Simultaneous Localization and Mapping). Custom-built 10-inch heavy lifter with Raspberry Pi 5 + AI Hat for real-time edge processing.
              </p>
              <p style={{ color:'var(--text-secondary)', lineHeight:1.8, marginBottom:'2rem' }}>
                If a Soldier drone detects a high-interest target (like illegal smoke), the General automatically re-routes the swarm to investigate while maintaining the primary mapping mission.
              </p>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'0.5rem' }}>
                {['SLAM','Pi 5 AI Hat','10" Heavy Lifter','Self-Correction','Edge AI'].map(t => (
                  <span key={t} className="badge">{t}</span>
                ))}
              </div>
            </div>
            {/* Pentagon visual */}
            <div style={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
              <div style={{ position:'relative', width:300, height:300 }}>
                {/* Center General */}
                <div style={{
                  position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)',
                  width:80, height:80, borderRadius:'50%',
                  background:'radial-gradient(circle,rgba(212,175,55,0.3),transparent)',
                  border:'2px solid #D4AF37',
                  display:'flex', alignItems:'center', justifyContent:'center', fontSize:'2rem',
                  boxShadow:'0 0 40px rgba(212,175,55,0.3)',
                }}>🛩️</div>
                {/* 4 Soldiers */}
                {[
                  { angle:0, icon:'👁️' },{ angle:90, icon:'📐' },
                  { angle:180, icon:'🌙' },{ angle:270, icon:'📸' },
                ].map((s,i) => {
                  const r = 120, cx = 150, cy = 150;
                  const x = cx + r * Math.cos(s.angle * Math.PI / 180) - 25;
                  const y = cy + r * Math.sin(s.angle * Math.PI / 180) - 25;
                  return (
                    <div key={i} style={{
                      position:'absolute', left:x, top:y,
                      width:50, height:50, borderRadius:'50%',
                      background:'rgba(46,139,87,0.2)', border:'1px solid #2E8B57',
                      display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.3rem',
                    }}>{s.icon}</div>
                  );
                })}
                {/* Connection lines */}
                <svg style={{ position:'absolute', inset:0 }} viewBox="0 0 300 300">
                  {[0,90,180,270].map((a,i) => {
                    const r = 120, cx = 150, cy = 150;
                    const x = cx + r * Math.cos(a * Math.PI / 180);
                    const y = cy + r * Math.sin(a * Math.PI / 180);
                    return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" />;
                  })}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE SOLDIERS */}
      <section className="section-padding grid-bg" style={{ background:'#000A1A' }}>
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'3rem' }}>
            <div className="accent-line" style={{ margin:'0 auto 1.5rem' }} />
            <h2 className="section-title">The Four Soldiers</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'1.5rem' }}>
            {soldiers.map((s,i) => (
              <div key={i} className="glass-card" style={{ padding:'2rem', textAlign:'center', position:'relative' }}>
                <div style={{ position:'absolute', top:0, left:0, right:0, height:2, background:`linear-gradient(90deg,${s.color},transparent)` }} />
                <div style={{ fontSize:'2.5rem', marginBottom:'1rem' }}>{s.icon}</div>
                <h3 style={{ color:s.color, fontSize:'1rem', marginBottom:'0.25rem' }}>{s.name}</h3>
                <p style={{ fontFamily:'Space Mono,monospace', fontSize:'0.72rem', color:'#607090', marginBottom:'0.5rem' }}>{s.spec} · {s.range}</p>
                <p style={{ color:'var(--text-secondary)', fontSize:'0.85rem', lineHeight:1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOVEREIGN DATA */}
      <section className="section-padding" style={{ background:'linear-gradient(180deg,#001133,#000A1A)' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'5rem', alignItems:'center' }}>
            <div>
              <div className="accent-line" />
              <h2 className="section-title">Sovereign Data</h2>
              <p style={{ color:'var(--text-muted)', fontSize:'0.8rem', textTransform:'uppercase', letterSpacing:'1.5px', marginBottom:'1rem' }}>Offline-First Security</p>
              <blockquote>
                "In the field, connectivity is a luxury. Our drones are designed for Sovereign Operations. All data is processed and stored locally on encrypted drives. Only the SHA-256 Merkle Root is transmitted via satellite or LoRa. Sensitive land data never leaks to unauthorized clouds."
              </blockquote>
              <p style={{ color:'var(--text-secondary)', lineHeight:1.8, marginTop:'1.5rem' }}>
                Our high-integrity, offline-first approach makes this technology ready for both <strong style={{ color:'#2E8B57' }}>Environmental Enforcement</strong> and <strong style={{ color:'#D4AF37' }}>Strategic Observation</strong>, where data security is a matter of national sovereignty.
              </p>
            </div>
            <div>
              <div className="accent-line" />
              <h2 className="section-title" style={{ fontSize:'1.8rem' }}>Hardware Stack</h2>
              <div className="glass-card" style={{ overflow:'hidden' }}>
                <table className="data-table">
                  <thead>
                    <tr><th>Platform</th><th>Enhancement</th><th>Use Case</th></tr>
                  </thead>
                  <tbody>
                    {hardwareTable.map((r,i) => (
                      <tr key={i}><td style={{ fontWeight:600, color:'#D4AF37' }}>{r.platform}</td><td>{r.enhancement}</td><td>{r.use}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding:'80px 0', background:'linear-gradient(135deg,#001133,#001A00)' }}>
        <div className="container" style={{ textAlign:'center' }}>
          <h2 style={{ fontSize:'clamp(1.6rem,3vw,2.4rem)', marginBottom:'1rem' }}>
            Deploy the <span className="gold-text">Pentagon Swarm</span>
          </h2>
          <p style={{ color:'var(--text-secondary)', marginBottom:'2rem' }}>Custom UAV deployment for estates, government agencies, and enforcement operations.</p>
          <Link href="/contact" className="btn-primary" style={{ padding:'16px 40px' }}>🛩️ Request Swarm Deployment</Link>
        </div>
      </section>
    </>
  );
}
