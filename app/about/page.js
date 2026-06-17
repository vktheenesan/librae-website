import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About Librae | Executive Profile & Blueprint',
  description: 'Meet the founder and learn the corporate blueprint, engineering pipeline, and mission timeline of Librae AI Labs Sdn Bhd.',
};

const timeline = [
  { year: 'Foundation', title: 'Understanding Systems', desc: 'Born in Batu Gajah, Perak — learning that structural systems shape outcomes, not intentions.', color: '#607090', icon: '📚' },
  { year: 'Realization', title: 'The Spatial Gap', desc: 'Recognized a critical gap: technology was advancing faster than organizations could deploy it for environmental sovereignty.', color: '#D4AF37', icon: '🔄' },
  { year: 'Execution', title: 'Deploying Infrastructure', desc: 'Fusing satellite telemetry and local-first simulation nodes across millions of hectares in Southeast Asia.', color: '#2E8B57', icon: '🌍' },
  { year: '2026', title: 'Strategic Milestones', desc: 'Fluxx Regional Leadership in AI Winner and NIA AIMspire Nominee at Okada Manila.', color: '#D4AF37', icon: '🏆' },
  { year: 'Future', title: 'Civilization Infrastructure', desc: 'Standardizing LENUDA and CAHAYA as trusted operational layers for high-consequence environments.', color: '#3EAB6C', icon: '🚀' }
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero hero-bg grid-bg">
        <div className="container" style={{ position:'relative', zIndex:1, paddingTop:'2rem' }}>
          <div className="badge" style={{ marginBottom:'1.5rem' }}>
            🌍 About Librae AI Labs
          </div>
          <h1 className="section-title" style={{ maxWidth:700 }}>
            From <span className="gold-text">Batu Gajah</span> to the Systems of Earth
          </h1>
          <p className="section-subtitle" style={{ maxWidth: 800 }}>
            Librae AI Labs Sdn Bhd is an elite Malaysian technology company headquartered in Batu Gajah, Perak & Kuala Lumpur, designing sovereign intelligence infrastructure for high-consequence environments.
          </p>
        </div>
      </section>

      {/* ──────── FOUNDER ──────── */}
      <section className="section-padding" style={{ background:'linear-gradient(180deg,#000A1A,#001133)' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1.4fr', gap:'5rem', alignItems:'center' }}>
            {/* Portrait */}
            <div style={{ position:'relative' }}>
              <div style={{
                position:'absolute', inset:'-20px',
                background:'radial-gradient(circle,rgba(212,175,55,0.15),transparent 70%)',
                borderRadius:24,
              }} />
              <div style={{
                position:'relative',
                borderRadius:20,
                overflow:'hidden',
                border:'1px solid rgba(212,175,55,0.3)',
                aspectRatio:'3/4',
                background:'linear-gradient(135deg,#001133,#002366)',
              }} className="gold-glow">
                <Image
                  src="/founder.png"
                  alt="Theenesan VK Kunjaayappan"
                  fill
                  style={{ objectFit:'cover', objectPosition:'center top' }}
                />
                {/* Overlay badges */}
                <div style={{
                  position:'absolute', bottom:0, left:0, right:0,
                  background:'linear-gradient(transparent,rgba(0,10,26,0.95))',
                  padding:'2rem 1.5rem 1.5rem',
                }}>
                  <div style={{ display:'flex', gap:'8px', flexWrap:'wrap', marginBottom:'0.75rem' }}>
                    <span className="badge">🏆 Fluxx 2026 Winner</span>
                    <span className="badge" style={{ borderColor:'rgba(46,139,87,0.4)', color:'#3EAB6C', background:'rgba(46,139,87,0.1)' }}>
                      NIA AIMspire Nominee
                    </span>
                  </div>
                  <p style={{ fontSize:'0.75rem', color:'#607090' }}>Okada Manila Global Stage · 2026</p>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div>
              <div className="accent-line" />
              <h2 style={{ fontSize:'clamp(1.8rem,3vw,2.8rem)', marginBottom:'0.5rem', fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}>
                The <span className="gold-text">Architect</span>
              </h2>
              <p style={{ color:'var(--text-muted)', fontSize:'0.8rem', textTransform:'uppercase', letterSpacing:'1.5px', marginBottom:'1.5rem' }}>
                Theenesan VK Kunjaayappan · Founder & Principal System Architect
              </p>
              <p style={{ color:'var(--text-secondary)', lineHeight:1.9, marginBottom:'1.5rem', fontSize: '0.98rem' }}>
                Born in Batu Gajah, Perak, Theenesan VK founded Librae AI Labs with a simple conviction:
              </p>
              <div style={{ padding:'1.5rem', background:'rgba(212,175,55,0.05)', border:'1px solid rgba(212,175,55,0.15)', borderRadius:12, marginBottom: '1.5rem' }}>
                <p style={{ color:'#D4AF37', fontWeight:600, fontSize:'1.1rem', fontStyle:'italic', margin: 0 }}>
                  "If nature cannot speak, we will build systems that allow it to be understood more clearly."
                </p>
              </div>
              <p style={{ color:'var(--text-secondary)', lineHeight:1.9, marginBottom:'1.5rem', fontSize: '0.98rem' }}>
                His work focuses on designing systems that bridge the gap between raw environmental data and practical, explainable intelligence. Under his leadership, Librae pursues a long-term vision of building infrastructure that seamlessly connects physical environments, digital networks, and autonomous execution layers.
              </p>
              <div style={{ marginTop:'2rem', display:'flex', gap:'1rem', flexWrap: 'wrap' }}>
                <a href="https://www.google.com/search?q=https://www.linkedin.com/in/theenesan-vk-kunjaayappan-982a7a2a0/" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-flex', gap: '6px', alignItems: 'center' }}>
                  🔗 Connect on LinkedIn
                </a>
                <Link href="/contact" className="btn-secondary">
                  Partner with Librae
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────── ENGINEERING PIPELINE ──────── */}
      <section className="section-padding grid-bg" style={{ background:'#000A1A' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div className="accent-line" />
              <h2 className="section-title">The Engineering Pipeline</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Our engineering pipeline utilizes rigorous automated testing, validation layers, and security audits to enforce absolute mathematical logic before software is compiled and cleared for air-gapped environments.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                This ensures that all modules ship with maximum resource efficiency, complete data protection, and structural execution integrity. We operate on deterministic principles to eliminate the risks of probabilistic black boxes.
              </p>
            </div>
            
            <div className="glass-card" style={{ padding: '2.5rem', background: 'rgba(0,10,30,0.5)', border: '1px solid rgba(46,139,87,0.2)' }}>
              <h3 style={{ color: '#2E8B57', marginBottom: '1.5rem', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Validation Layers</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { label: 'Mathematical Logic Auditing', desc: 'Verifies formulas against established spatial methodologies.' },
                  { label: 'Air-Gapped Resource Compiles', desc: 'Minimizes CPU/VRAM footprint for offline processing.' },
                  { label: 'Security Vulnerability Sweeps', desc: 'Secures local loopback daemons against internal leaks.' }
                ].map((item, i) => (
                  <div key={i} style={{ paddingBottom: '8px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <strong style={{ color: '#E0E2E5', fontSize: '0.9rem', display: 'block', marginBottom: '2px' }}>{item.label}</strong>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', margin: 0, lineHeight: 1.4 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────── GLOBAL HUBS ──────── */}
      <section className="section-padding" style={{ background:'linear-gradient(180deg,#001133,#000A1A)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="accent-line" style={{ margin:'0 auto 1.5rem' }} />
            <h2 className="section-title">A Unified International Structure</h2>
            <p className="section-subtitle" style={{ margin:'0 auto' }}>
              Librae AI Labs combines experienced human leadership with a highly integrated technical architecture across four international hubs.
            </p>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'1.5rem' }}>
            {[
              { flag:'🇲🇾', country:'Malaysia', city:'Batu Gajah & KL', role:'Global Headquarters', desc:'Strategic operations, core architecture, and national-scale environmental monitoring.', color:'#D4AF37' },
              { flag:'🇻🇳', country:'Vietnam', city:'Ho Chi Minh City', role:'Tech Development', desc:'Frontend visualization pipelines and spatial Three.js rendering optimization.', color:'#2E8B57' },
              { flag:'🇮🇳', country:'India', city:'Punjab & Haryana', role:'Deep-Tech Hub', desc:'Computational logic, deterministic calculation auditing, and large-scale asset analysis.', color:'#4A9EFF' },
              { flag:'🇺🇸', country:'USA', city:'Strategic Hub', role:'Corporate Gateway', desc:'Tech partnership alignments and North American carbon market access coordinates.', color:'#7B4AFF' },
            ].map((loc, i) => (
              <div key={i} className="glass-card" style={{ padding:'2rem', textAlign:'center' }}>
                <div style={{ fontSize:'2.5rem', marginBottom:'1rem' }}>{loc.flag}</div>
                <div style={{ color:loc.color, fontWeight:700, marginBottom:'0.25rem', fontFamily:'Outfit,sans-serif' }}>{loc.country}</div>
                <div style={{ color:'#607090', fontSize:'0.75rem', marginBottom:'0.25rem' }}>{loc.city}</div>
                <div style={{ padding:'3px 10px', background:`${loc.color}15`, border:`1px solid ${loc.color}30`,
                  borderRadius:100, fontSize:'0.7rem', color:loc.color, fontWeight:600, display:'inline-block', margin:'0.5rem 0 1rem' }}>
                  {loc.role}
                </div>
                <p style={{ color:'var(--text-muted)', fontSize:'0.82rem', lineHeight:1.6 }}>{loc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── TIMELINE ──────── */}
      <section className="section-padding grid-bg" style={{ background:'#000A1A' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="accent-line" style={{ margin:'0 auto 1.5rem' }} />
            <h2 className="section-title">The Mission Timeline</h2>
          </div>

          <div style={{ position:'relative' }}>
            <div style={{ position:'absolute', top:28, left:0, right:0, height:2,
              background:'linear-gradient(90deg,transparent,#D4AF37,#2E8B57,transparent)', opacity:0.3 }} />

            <div style={{ display:'grid', gridTemplateColumns:`repeat(${timeline.length},1fr)`, gap:'1rem' }}>
              {timeline.map((step, i) => (
                <div key={i} style={{ textAlign:'center', paddingTop:'1rem' }}>
                  <div style={{ display:'flex', justifyContent:'center', marginBottom:'1.5rem' }}>
                    <div style={{
                      width:56, height:56, borderRadius:'50%',
                      background:`${step.color}20`, border:`2px solid ${step.color}`,
                      display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.3rem',
                      position:'relative', zIndex:1,
                    }}>
                      {step.icon}
                    </div>
                  </div>
                  <div style={{ color:step.color, fontFamily:'Space Mono,monospace', fontSize:'0.8rem', fontWeight:700, marginBottom:'0.5rem' }}>
                    {step.year}
                  </div>
                  <h4 style={{ fontSize:'0.95rem', marginBottom:'0.5rem', color:'var(--text-primary)' }}>{step.title}</h4>
                  <p style={{ color:'var(--text-muted)', fontSize:'0.8rem', lineHeight:1.6 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────── SYSTEM PHILOSOPHY ──────── */}
      <section style={{ padding:'80px 0', background:'linear-gradient(135deg,#001133,#001A00)' }}>
        <div className="container" style={{ textAlign:'center', maxWidth:700, margin:'0 auto' }}>
          <div className="accent-line" style={{ margin:'0 auto 2rem' }} />
          <p style={{ color:'var(--text-muted)', fontSize:'1.05rem', lineHeight:2, fontStyle:'italic', marginBottom:'2rem' }}>
            "We do not control the system.
            <br />We design it.
            <br />Those who govern must decide how truth is applied."
          </p>
          <Link href="/contact" className="btn-primary" style={{ fontSize:'1rem', padding:'16px 40px' }}>
            🌿 Connect with Librae
          </Link>
        </div>
      </section>
    </>
  );
}
