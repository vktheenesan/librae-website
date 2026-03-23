import Link from 'next/link';

export const metadata = {
  title: 'The Librae Intelligence Suite | Modular Sovereignty',
  description: 'AgroTrace™, ForestGuard™, TerraVital™, and GaiaAI™ — four branded intelligence modules with 14+ satellite methodologies for premium carbon credits and EUDR compliance.',
};

const modules = [
  {
    name:'AgroTrace™', icon:'🌴', color:'#D4AF37',
    focus:'EUDR, MSPO/RSPO, and Small Farmer Market Access',
    tagline:'Compliance & Supply Chain Integrity',
    methods:[
      { name:'2020 Baseline', desc:'Automated verification of land status as of Dec 31, 2020 to meet strict European export laws via Sentinel-2 time-series.' },
      { name:'PeatGuard™', desc:'InSAR (Interferometric SAR) detection of millimeter-scale land subsidence over protected peat zones using Sentinel-1.' },
      { name:'RiparianShield™', desc:'Automated river buffer verification ensuring legal widths via high-resolution Sentinel-2 and Landsat imagery.' },
      { name:'NDVI Monitoring', desc:'Continuous vegetation health tracking across plantation polygons with Sentinel-2 Red Edge bands.' },
      { name:'Hydrology Mapping', desc:'Water table analysis and flood-risk scoring using SAR backscatter and NDWI indices.' },
      { name:'Forensic Verification', desc:'SHA-256 data fingerprint + GPS-tagged field task list for ground officers to verify "Truth on Site."' },
    ],
  },
  {
    name:'ForestGuard™', icon:'🌳', color:'#2E8B57',
    focus:'Verra / Gold Standard Eligibility and High-Integrity Credits',
    tagline:'Carbon Stocks & Biodiversity',
    methods:[
      { name:'Carbon Stock (AGB)', desc:'Real-time Above Ground Biomass calculation in tCO₂e using GEDI LiDAR + Sentinel-2 fusion.' },
      { name:'NDFI Disturbance', desc:'Detects "Selective Logging" — subtle removal of high-value trees that standard satellites miss.' },
      { name:'LegacyForest™', desc:'AI classifier distinguishing natural primary forests from commercial plantations to prevent greenwashing.' },
      { name:'Hansen GFW', desc:'Tracking annual forest loss/gain since 2000 using Landsat 30m archive data.' },
      { name:'GEDI (ISS LiDAR)', desc:'Forest canopy height and vertical structure measurement from the International Space Station.' },
      { name:'SAR Coherence', desc:'Detecting subtle changes in forest structure under cloud cover using Sentinel-1 interferometry.' },
    ],
  },
  {
    name:'TerraVital™', icon:'🏜️', color:'#FF9F43',
    focus:'Desert Greening, Cooling Effects, and Ecosystem Recovery',
    tagline:'Restoration & Thermodynamics',
    methods:[
      { name:'Cooling Island Effect™', desc:'Thermodynamic analysis comparing LST (Land Surface Temperature) vs. NDVI to prove restoration is physically cooling the planet.' },
      { name:'Phenology Engine™', desc:'HANTS (Harmonic Analysis of Time Series) distinguishing seasonal grass (temporary) from permanent tree growth (permanent carbon).' },
      { name:'Albedo Shift™', desc:'Measuring reflectivity change as sand is replaced by vegetation — key metric for global cooling grants.' },
      { name:'SAVI', desc:'Soil-Adjusted Vegetation Index correcting for soil brightness in sparse desert areas using Sentinel-2.' },
      { name:'BSI', desc:'Bare Soil Index mapping the extent of bare soil to monitor desertification trends.' },
      { name:'NDMI', desc:'Normalized Difference Moisture Index detecting water stress in soil and plants via Sentinel-2 SWIR bands.' },
    ],
  },
  {
    name:'GaiaAI™', icon:'🧠', color:'#7B4AFF',
    focus:'Systemic Risk and Earth System Science',
    tagline:'The Predictive "Brain"',
    methods:[
      { name:'Satellite Consensus', desc:'Bayesian model resolving sensor conflicts (e.g., if Optical sees smoke but Radar sees no heat — GaiaAI determines the truth).' },
      { name:'SIF Detection', desc:'Solar-Induced Fluorescence — the "Holy Grail" of plant science: detecting actual photosynthesis to see if a forest is "breathing."' },
      { name:'EcoRisk Engine™', desc:'12-month forecast for fire, peat, and drought enabling governments to move from "Reaction" to "Prevention."' },
      { name:'Carbon Flux', desc:'Calculating actual CO₂ sequestration vs. emission of specific estates using Sentinel-5P and GOSAT data.' },
      { name:'Multi-Spectral Fusion', desc:'Cross-referencing Sentinel-1 SAR, Sentinel-2 Optical, Landsat Thermal, and GEDI LiDAR for consensus classification.' },
      { name:'AI Synthesis', desc:'Google Gemini 3.1 & 2.5 (Vertex AI) synthesizes all satellite layers into a Human-Readable Audit Report in 3-5 minutes.' },
    ],
  },
];

export default function IntelligencePage() {
  return (
    <>
      <section className="page-hero hero-bg grid-bg">
        <div className="container" style={{ position:'relative', zIndex:1, paddingTop:'2rem' }}>
          <div className="badge" style={{ marginBottom:'1.5rem' }}>🧠 Modular Sovereignty</div>
          <h1 className="section-title" style={{ maxWidth:700 }}>
            The Librae{' '}<span className="gradient-text">Intelligence Suite</span>
          </h1>
          <p className="section-subtitle">
            Four branded intelligence modules combining satellite physics, AI synthesis, and cryptographic verification — turning raw Earth data into premium-grade audit reports.
          </p>
        </div>
      </section>

      {/* DUAL PIPELINE */}
      <section className="section-padding" style={{ background:'linear-gradient(180deg,#000A1A,#001133)' }}>
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'3rem' }}>
            <div className="accent-line" style={{ margin:'0 auto 1.5rem' }} />
            <h2 className="section-title">The Dual-Processing Pipeline</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr auto 1fr', gap:'2rem', alignItems:'center' }}>
            <div className="glass-card" style={{ padding:'2.5rem' }}>
              <h3 style={{ color:'#D4AF37', marginBottom:'0.5rem' }}>📐 Vector Intelligence</h3>
              <p style={{ color:'#607090', fontSize:'0.8rem', textTransform:'uppercase', letterSpacing:'1px', marginBottom:'1rem' }}>The Skeleton</p>
              <p style={{ color:'var(--text-secondary)', lineHeight:1.7, marginBottom:'1.5rem' }}>
                We ingest "messy" data — hand-drawn KMLs, drone GPS logs, and scanned land deeds. Our AI performs Data Matchmaking and Object Identification, cleaning geometry and identifying overlaps.
              </p>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'0.5rem' }}>
                {['KML','GeoJSON','GPS Logs','Land Deeds','Excel'].map(t => (
                  <span key={t} style={{ padding:'4px 10px', background:'rgba(212,175,55,0.1)', border:'1px solid rgba(212,175,55,0.25)',
                    borderRadius:100, fontSize:'0.72rem', color:'#D4AF37', fontWeight:600 }}>{t}</span>
                ))}
              </div>
            </div>
            <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'8px' }}>
              <div style={{ width:2, height:60, background:'linear-gradient(180deg,#D4AF37,#2E8B57)' }} />
              <div style={{ padding:'12px 18px', background:'rgba(212,175,55,0.15)', border:'1px solid rgba(212,175,55,0.4)',
                borderRadius:12, color:'#D4AF37', fontWeight:700, fontSize:'0.85rem' }}>
                🔗 FUSION
              </div>
              <div style={{ width:2, height:60, background:'linear-gradient(180deg,#2E8B57,#4A9EFF)' }} />
            </div>
            <div className="glass-card" style={{ padding:'2.5rem' }}>
              <h3 style={{ color:'#4A9EFF', marginBottom:'0.5rem' }}>🛰️ Raster Intelligence</h3>
              <p style={{ color:'#607090', fontSize:'0.8rem', textTransform:'uppercase', letterSpacing:'1px', marginBottom:'1rem' }}>The Muscle</p>
              <p style={{ color:'var(--text-secondary)', lineHeight:1.7, marginBottom:'1.5rem' }}>
                Using the Copernicus + Landsat constellation via Google Earth Engine, we classify every pixel by its biological signature — not just "green" but the exact species and health.
              </p>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'0.5rem' }}>
                {['Sentinel-1','Sentinel-2','Landsat','GEDI','Pleiades Neo'].map(t => (
                  <span key={t} style={{ padding:'4px 10px', background:'rgba(74,158,255,0.1)', border:'1px solid rgba(74,158,255,0.25)',
                    borderRadius:100, fontSize:'0.72rem', color:'#4A9EFF', fontWeight:600 }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="section-padding grid-bg" style={{ background:'#000A1A' }}>
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'4rem' }}>
            <div className="accent-line" style={{ margin:'0 auto 1.5rem' }} />
            <h2 className="section-title">Intelligence Modules</h2>
            <p className="section-subtitle" style={{ margin:'0 auto' }}>
              Each module is purpose-built for a specific domain. Every report includes satellite evidence, AI interpretation, and SHA-256 cryptographic sealing.
            </p>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:'2.5rem' }}>
            {modules.map((mod,i) => (
              <div key={i} className="glass-card" style={{ padding:'3rem', position:'relative' }}>
                <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:`linear-gradient(90deg,${mod.color},transparent)` }} />
                <div style={{ display:'flex', alignItems:'center', gap:'1.5rem', marginBottom:'1rem' }}>
                  <div style={{
                    width:64, height:64, borderRadius:18, flexShrink:0,
                    background:`${mod.color}15`, border:`2px solid ${mod.color}40`,
                    display:'flex', alignItems:'center', justifyContent:'center', fontSize:'2rem',
                  }}>{mod.icon}</div>
                  <div>
                    <h3 style={{ color:mod.color, fontSize:'1.5rem', marginBottom:'0.15rem' }}>{mod.name}</h3>
                    <p style={{ color:'var(--text-primary)', fontSize:'0.9rem', fontWeight:600 }}>{mod.tagline}</p>
                  </div>
                  <div style={{ marginLeft:'auto' }}>
                    <span style={{ padding:'5px 14px', background:`${mod.color}15`, border:`1px solid ${mod.color}30`,
                      borderRadius:100, fontSize:'0.72rem', color:mod.color, fontWeight:700 }}>
                      {mod.methods.length} Satellite Layers
                    </span>
                  </div>
                </div>
                <p style={{ color:'var(--text-muted)', fontSize:'0.82rem', marginBottom:'2rem' }}>
                  <strong>Focus:</strong> {mod.focus}
                </p>
                <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1rem' }}>
                  {mod.methods.map((m,mi) => (
                    <div key={mi} style={{ padding:'1.25rem', background:`${mod.color}06`, borderRadius:12, border:`1px solid ${mod.color}12` }}>
                      <div style={{ color:mod.color, fontWeight:700, fontSize:'0.88rem', marginBottom:'6px', fontFamily:'Outfit,sans-serif' }}>{m.name}</div>
                      <p style={{ color:'var(--text-secondary)', fontSize:'0.82rem', lineHeight:1.6 }}>{m.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S IN A REPORT */}
      <section className="section-padding" style={{ background:'linear-gradient(180deg,#001133,#000A1A)' }}>
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'3rem' }}>
            <div className="accent-line" style={{ margin:'0 auto 1.5rem' }} />
            <h2 className="section-title">What's in Every Report</h2>
            <p className="section-subtitle" style={{ margin:'0 auto' }}>
              Every Librae report is a fusion of satellite physics, AI interpretation, and cryptographic proof — not just raw data.
            </p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'1.5rem' }}>
            {[
              { icon:'🛰️', title:'Multi-Spectral Maps', desc:'NDVI, EVI, SAVI, NDMI overlays from Sentinel-2, Landsat, and GEDI fused into a single composite view.', color:'#4A9EFF' },
              { icon:'📊', title:'AI-Synthesized Analysis', desc:'Google Gemini 3.1 & 2.5 (Vertex AI) produces human-readable findings from billions of data points in 3-5 minutes.', color:'#D4AF37' },
              { icon:'🔐', title:'SHA-256 Seal', desc:'Every report Merkle-rooted and timestamped on Polygon L2. Immutable. Even Librae cannot alter it after issuance.', color:'#7B4AFF' },
              { icon:'📋', title:'Field Task List', desc:'GPS-tagged verification checklist for ground officers — bridging satellite truth with on-site confirmation.', color:'#2E8B57' },
            ].map((r,i) => (
              <div key={i} className="glass-card" style={{ padding:'2rem', textAlign:'center', position:'relative' }}>
                <div style={{ position:'absolute', top:0, left:0, right:0, height:2, background:`linear-gradient(90deg,${r.color},transparent)` }} />
                <div style={{ fontSize:'2.5rem', marginBottom:'1rem' }}>{r.icon}</div>
                <h4 style={{ color:r.color, marginBottom:'0.5rem', fontSize:'1rem' }}>{r.title}</h4>
                <p style={{ color:'var(--text-secondary)', fontSize:'0.85rem', lineHeight:1.6 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FUSION SECTION */}
      <section className="section-padding grid-bg" style={{ background:'#000A1A' }}>
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'3rem' }}>
            <div className="accent-line" style={{ margin:'0 auto 1.5rem' }} />
            <h2 className="section-title">Beyond Code — The Laws of Nature</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'1.5rem' }}>
            {[
              { icon:'⚛️', title:'Physics', desc:'Light-reflectance curves, InSAR interferometry, and spectral signatures of specific plants.', color:'#7B4AFF' },
              { icon:'🧬', title:'Biology', desc:'Local growth rates, phenology cycles, and species-specific carbon ratios integrated.', color:'#2E8B57' },
              { icon:'➗', title:'Math', desc:'SHA-256 hashing, Merkle Trees, and Bayesian consensus models seal the final output.', color:'#D4AF37' },
              { icon:'🤖', title:'AI', desc:'Google Gemini 3.1 & 2.5 via Vertex AI + Google Earth Engine synthesize billions of data points in 3-5 minutes.', color:'#4A9EFF' },
            ].map((f,i) => (
              <div key={i} className="glass-card" style={{ padding:'2rem', textAlign:'center' }}>
                <div style={{ fontSize:'2.5rem', marginBottom:'1rem' }}>{f.icon}</div>
                <h4 style={{ color:f.color, marginBottom:'0.5rem' }}>{f.title}</h4>
                <p style={{ color:'var(--text-secondary)', fontSize:'0.85rem', lineHeight:1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
          {/* Google Infrastructure banner */}
          <div style={{ marginTop:'2.5rem', padding:'1.5rem 2rem', background:'rgba(74,158,255,0.05)',
            border:'1px solid rgba(74,158,255,0.15)', borderRadius:12, textAlign:'center' }}>
            <p style={{ color:'var(--text-muted)', fontSize:'0.75rem', textTransform:'uppercase', letterSpacing:'1.5px', marginBottom:'0.75rem' }}>
              Powered by Google Cloud Infrastructure
            </p>
            <div style={{ display:'flex', justifyContent:'center', flexWrap:'wrap', gap:'0.75rem' }}>
              {['Google Gemini 3.1','Gemini 2.5','Vertex AI','AI Studio','Google Earth Engine','GKE','Google Cloud Platform','Google Analytics G4'].map(b => (
                <span key={b} style={{ padding:'5px 14px', background:'rgba(74,158,255,0.08)', border:'1px solid rgba(74,158,255,0.2)',
                  borderRadius:100, fontSize:'0.75rem', color:'#4A9EFF', fontWeight:600 }}>{b}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding:'80px 0', background:'linear-gradient(135deg,#001133,#001A00)' }}>
        <div className="container" style={{ textAlign:'center' }}>
          <h2 style={{ fontSize:'clamp(1.6rem,3vw,2.4rem)', marginBottom:'1rem' }}>
            See Science in <span className="gold-text">Action</span>
          </h2>
          <p style={{ color:'var(--text-secondary)', marginBottom:'2rem' }}>Request a multi-spectral analysis using AgroTrace™, ForestGuard™, TerraVital™, or GaiaAI™.</p>
          <div style={{ display:'flex', gap:'1rem', justifyContent:'center' }}>
            <Link href="/contact" className="btn-primary" style={{ padding:'16px 40px' }}>🔬 Request Analysis</Link>
            <a href="https://lenuda.librae.work" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding:'15px 39px' }}>
              🔗 LENUDA Platform
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
