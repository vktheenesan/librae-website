'use client';

export default function OrbitAerialPage() {
  const satellites = [
    { name: 'Copernicus Sentinel-1', band: 'C-Band Synthetic Aperture Radar (SAR)', res: '10m Resolution', desc: 'Active radar imaging that penetrates cloud cover and weather conditions to map terrain changes, slope movements, and surface boundaries.' },
    { name: 'Copernicus Sentinel-2', band: 'Multi-Spectral Optical (13 Bands)', res: '10m – 20m Resolution', desc: 'Measures chlorophyll absorption, forest canopy changes, soil moisture, and NDWI (Normalized Difference Water Index) parameters.' },
    { name: 'Landsat 8 / 9', band: 'Operational Land Imager (OLI) & TIRS', res: '30m Resolution', desc: 'Thermal infrared sensors tracking surface temperature, long-term biomass changes, and agricultural crop health cycles.' },
    { name: 'Pleiades Neo', band: 'Panchromatic & Multi-Spectral (Very High Res)', res: '30cm Resolution', desc: 'Direct tasking constellation for extreme precision verification of individual tree heights and canopy boundaries.' }
  ];

  return (
    <>
      {/* Hero */}
      <section className="page-hero hero-bg grid-bg">
        <div className="container" style={{ position:'relative', zIndex:1, paddingTop:'2rem' }}>
          <div className="badge" style={{ marginBottom:'1.5rem', background:'rgba(74,158,255,0.15)', borderColor:'rgba(74,158,255,0.3)', color:'#4A9EFF' }}>
            🛰️ Orbital & Aerial Telemetry Layers
          </div>
          <h1 className="section-title" style={{ maxWidth:800 }}>
            Orbit & Aerial: <span className="gold-text">Multi-Tiered Observations</span>
          </h1>
          <p className="section-subtitle" style={{ maxWidth:700 }}>
            Geospatial intelligence requires multiple observation altitudes. Librae fuses high-frequency orbital radars with autonomous local drone swarms to eliminate spatial blind spots.
          </p>
        </div>
      </section>

      {/* Satellite Constellation */}
      <section className="section-padding" style={{ background: '#000A1A' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="accent-line" style={{ margin: '0 auto 1.5rem' }} />
            <h2 className="section-title">Orbital Constellation Ingestion</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: 600, margin: '0 auto' }}>
              Fusing optical, radar, and thermal bands to capture a continuous multi-spectral record of Earth's surface integrity.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 2fr)', gap: '2rem' }}>
            {satellites.map((s, i) => (
              <div key={i} className="glass-card" style={{ padding: '2.5rem', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg,#4A9EFF,transparent)' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <h3 style={{ color: '#4A9EFF', fontSize: '1.2rem', fontWeight: 800, margin: 0 }}>{s.name}</h3>
                  <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.8rem', color: '#D4AF37' }}>{s.res}</span>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontStyle: 'italic', marginBottom: '1rem' }}>{s.band}</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Drone Swarms */}
      <section className="section-padding grid-bg" style={{ background: 'linear-gradient(180deg,#000A1A,#001133)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div className="accent-line" />
              <h2 className="section-title">The Pentagon Swarm Architecture</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Where orbital resolution is insufficient or cloud cover blocks optical visibility, CAHAYA deploys **The Pentagon Swarm**—an autonomous fleet of 5 coordinated UAV nodes.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                The swarm utilizes a decentralized leader-follower model. The lead drone ("The General") maps the boundary and calculates optimal flight trajectories. It distributes specific search sweeps to the other four drones, executing LiDAR, thermal, and multispectral scans concurrently.
              </p>
              <div style={{ padding: '1.5rem', background: 'rgba(212,175,55,0.03)', borderLeft: '3px solid #D4AF37', borderRadius: '0 8px 8px 0' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', margin: 0, lineHeight: 1.6 }}>
                  <strong>Orchestration Protocol:</strong> Swarm coordination operates on localized peer-to-peer LoRa mesh frequencies. If one drone loses signal, the General dynamically redistributes the remaining spatial bounds to ensure continuity.
                </p>
              </div>
            </div>

            {/* Swarm visual box */}
            <div className="glass-card" style={{ padding: '2.5rem', background: 'rgba(0,10,30,0.5)', border: '1px solid rgba(74,158,255,0.2)' }}>
              <h3 style={{ color: '#4A9EFF', marginBottom: '1.5rem', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Fleet Configuration</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { role: 'The General (1x)', equip: 'High-power LiDAR + Edge Compute Module', roleColor: '#D4AF37' },
                  { role: 'Node 01: Multi-Spectral', equip: 'RedEdge-P Multi-band Optical sensor', roleColor: '#4A9EFF' },
                  { role: 'Node 02: Thermal Ingress', equip: 'FLIR Boson Longwave Infrared thermal camera', roleColor: '#4A9EFF' },
                  { role: 'Node 03: High-Res Photogrammetry', equip: '61MP full-frame mapping sensor', roleColor: '#4A9EFF' },
                  { role: 'Node 04: Chemical Scan', equip: 'Sniffer payload for localized gas detection', roleColor: '#4A9EFF' }
                ].map((n, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <span style={{ color: n.roleColor, fontSize: '0.85rem', fontWeight: 600 }}>{n.role}</span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{n.equip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
