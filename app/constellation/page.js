import Link from 'next/link';

export const metadata = {
  title: 'Copernicus & Landsat Constellation | Librae',
  description: 'Multi-spectral satellite arsenal: Sentinel-1 SAR, Sentinel-2 Optical, Sentinel-5P Methane plus Landsat and Pleiades Neo for 30cm precision.',
};

const satellites = [
  { name:'Sentinel-1', subtitle:'The Radar Enforcer (SAR)', icon:'📡', color:'#D4AF37',
    sees:'Synthetic Aperture Radar that "sees" through clouds, smoke, and total darkness.',
    edge:'Detects illegal logging during monsoon season and oil spills in the Melaka Straits when optical satellites are blind.',
    tags:['SAR','All-Weather','Night Vision','Oil Spill Detection'] },
  { name:'Sentinel-2', subtitle:'The Forest Guardian (Optical)', icon:'🌿', color:'#2E8B57',
    sees:'High-resolution (10m) multi-spectral imagery including "Red Edge" bands.',
    edge:'Workhorse for EUDR Compliance. Distinguishes healthy forest from degraded land and verifies the 2020 cut-off date for global exports.',
    tags:['10m Resolution','Red Edge','EUDR','NDVI'] },
  { name:'Sentinel-3', subtitle:'The Thermal & Marine Watcher', icon:'🌊', color:'#4A9EFF',
    sees:'Sea and land surface temperature and ocean color.',
    edge:'Used for ocean oil spills and monitoring the thermal signature of large-scale mill operations.',
    tags:['SST','Ocean Color','Thermal','Marine'] },
  { name:'Sentinel-5P & 5A', subtitle:'The Atmosphere\'s Voice', icon:'💨', color:'#7B4AFF',
    sees:'Trace gases: Methane (CH₄), NO₂, and Carbon Monoxide (CO).',
    edge:'Detects "invisible polluters" — methane leaks in industrial zones, factory smoke turned into enforcement reports. 5A (2025) gives high-frequency updates.',
    tags:['CH₄','NO₂','CO','Aerosol'] },
  { name:'Sentinel-6', subtitle:'The Sea Level Sentinel', icon:'🌐', color:'#D4AF37',
    sees:'Millimeter-scale changes in sea level.',
    edge:'Predicts flood risks and long-term climate impact on high-value coastal land.',
    tags:['Sea Level','Altimetry','Coastal Risk'] },
  { name:'Landsat 8 & 9', subtitle:'The Historical Record', icon:'📜', color:'#FF9F43',
    sees:'30m resolution optical and thermal data with a 50-year archive.',
    edge:'While Sentinel is for the "Now," Landsat is for the "Proof." The archive proves land was cleared decades ago, protecting farmers from false deforestation claims.',
    tags:['50-Year Archive','30m','Historical Proof','USGS'] },
];

export default function ConstellationPage() {
  return (
    <>
      <section className="page-hero hero-bg grid-bg">
        <div className="container" style={{ position:'relative', zIndex:1, paddingTop:'2rem' }}>
          <div className="badge" style={{ marginBottom:'1.5rem' }}>🛰️ Planetary Observation</div>
          <h1 className="section-title" style={{ maxWidth:700 }}>
            Data Sovereignty from <span className="gold-text">Orbit</span>
          </h1>
          <p className="section-subtitle">
            The full power of the Copernicus Programme and USGS Landsat, providing a 360° audit of Earth's health with zero blind spots.
          </p>
        </div>
      </section>

      {/* SATELLITES */}
      <section className="section-padding" style={{ background:'linear-gradient(180deg,#000A1A,#001133)' }}>
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'4rem' }}>
            <div className="accent-line" style={{ margin:'0 auto 1.5rem' }} />
            <h2 className="section-title">Meet the Constellation</h2>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:'2rem' }}>
            {satellites.map((sat,i) => (
              <div key={i} className="glass-card" style={{ padding:'2.5rem', display:'grid', gridTemplateColumns:'auto 1fr', gap:'2.5rem', alignItems:'start', position:'relative' }}>
                <div style={{ position:'absolute', top:0, left:0, right:0, height:2, background:`linear-gradient(90deg,${sat.color},transparent)` }} />
                <div style={{
                  width:80, height:80, borderRadius:20,
                  background:`${sat.color}15`, border:`1px solid ${sat.color}35`,
                  display:'flex', alignItems:'center', justifyContent:'center', fontSize:'2.5rem', flexShrink:0,
                }}>{sat.icon}</div>
                <div>
                  <h3 style={{ color:sat.color, fontSize:'1.3rem', marginBottom:'0.25rem' }}>{sat.name}</h3>
                  <p style={{ color:'#607090', fontSize:'0.8rem', textTransform:'uppercase', letterSpacing:'1px', marginBottom:'1rem' }}>{sat.subtitle}</p>
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem', marginBottom:'1.25rem' }}>
                    <div>
                      <p style={{ color:'#607090', fontSize:'0.72rem', textTransform:'uppercase', letterSpacing:'1px', marginBottom:'4px' }}>What it Sees</p>
                      <p style={{ color:'var(--text-secondary)', fontSize:'0.9rem', lineHeight:1.6 }}>{sat.sees}</p>
                    </div>
                    <div>
                      <p style={{ color:'#607090', fontSize:'0.72rem', textTransform:'uppercase', letterSpacing:'1px', marginBottom:'4px' }}>The Librae Edge</p>
                      <p style={{ color:'var(--text-secondary)', fontSize:'0.9rem', lineHeight:1.6 }}>{sat.edge}</p>
                    </div>
                  </div>
                  <div style={{ display:'flex', flexWrap:'wrap', gap:'0.5rem' }}>
                    {sat.tags.map(t => (
                      <span key={t} style={{ padding:'4px 12px', background:`${sat.color}12`, border:`1px solid ${sat.color}25`,
                        borderRadius:100, fontSize:'0.72rem', color:sat.color, fontWeight:600 }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLEIADES NEO */}
      <section className="section-padding grid-bg" style={{ background:'#000A1A' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4rem', alignItems:'center' }}>
            <div>
              <div className="accent-line" />
              <h2 className="section-title">Pleiades Neo — 30cm Precision</h2>
              <p style={{ color:'var(--text-secondary)', lineHeight:1.8, marginBottom:'1.5rem' }}>
                At 30cm resolution, we see individual tree crowns, fence lines, and vehicle movement. The ultimate verification for Gold Standard carbon credits — available for large estates and government defense.
              </p>
              <div style={{ display:'flex', gap:'2rem' }}>
                <div style={{ textAlign:'center' }}>
                  <div className="stat-number" style={{ fontSize:'2rem' }}>10m</div>
                  <div className="stat-label">Sentinel-2</div>
                </div>
                <div style={{ fontSize:'2rem', color:'#607090', display:'flex', alignItems:'center' }}>→</div>
                <div style={{ textAlign:'center' }}>
                  <div className="stat-number" style={{ fontSize:'2rem', color:'#2E8B57' }}>30cm</div>
                  <div className="stat-label">Pleiades Neo</div>
                </div>
                <div style={{ fontSize:'1rem', color:'#607090', display:'flex', alignItems:'center' }}>33× sharper</div>
              </div>
            </div>
            <div className="glass-card" style={{ padding:'2rem', textAlign:'center' }}>
              <p style={{ color:'#D4AF37', fontWeight:700, fontFamily:'Outfit,sans-serif', fontSize:'1.1rem', marginBottom:'1rem' }}>International Compliance</p>
              <blockquote style={{ margin:0, fontSize:'0.95rem' }}>
                "This constellation is the same infrastructure used by ESA, NASA, and the United Nations. A report generated in Malaysia or Thailand is recognized by auditors in Brussels, Washington, and Tokyo. We don't just provide data; we provide International Compliance."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding:'80px 0', background:'linear-gradient(135deg,#001133,#001A00)' }}>
        <div className="container" style={{ textAlign:'center' }}>
          <h2 style={{ fontSize:'clamp(1.6rem,3vw,2.4rem)', marginBottom:'1rem' }}>
            See Your Land from <span className="gold-text">Orbit</span>
          </h2>
          <p style={{ color:'var(--text-secondary)', marginBottom:'2rem' }}>Request a satellite assessment of your estate, region, or country.</p>
          <div style={{ display:'flex', gap:'1rem', justifyContent:'center' }}>
            <Link href="/contact" className="btn-primary" style={{ padding:'16px 40px' }}>🛰️ Request Assessment</Link>
            <a href="https://lenuda.librae.work" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding:'15px 39px' }}>
              🔗 LENUDA Platform
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
