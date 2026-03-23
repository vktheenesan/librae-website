import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About Librae | The Human Intelligence Behind the System',
  description: 'Meet the architect and the distributed intelligence network behind Librae Environmental Intelligence — humans and AI, unified by one mission.',
};

const aiAgents = [
  { name:'CTO Agent', powered:'Gemini 3.1 (Vertex AI)', role:'Strategic expansion & system evolution', color:'#D4AF37', icon:'🧠', flow:['Strategy Input','Market Analysis','Roadmap Generation','Tech Scaling'] },
  { name:'KIMI 2.5', powered:'Kimi (Moonshot AI)', role:'Deep-learning logic & localized adaptation', color:'#FF9F43', icon:'🤖', flow:['Pattern Recognition','Logic Reasoning','Refinement','Execution'] },
  { name:'System Developer', powered:'Gemini 2.5 (AI Studio)', role:'Logic optimization & execution', color:'#2E8B57', icon:'⚙️', flow:['Code Input','Algorithm Review','Optimization','Logic Output'] },
  { name:'Lead Architect', powered:'Claude Opus', role:'Structural integrity & experience design', color:'#4A9EFF', icon:'🏗️', flow:['Design Input','Structure Analysis','UX Review','Integrity Check'] },
  { name:'External Auditor', powered:'Gemini 3.1 (Vertex AI)', role:'Verification & compliance enforcement', color:'#7B4AFF', icon:'🔍', flow:['Data Input','Cross-Reference','ESG Check','Compliance Report'] },
];

const timeline = [
  { year:'Foundation', title:'Understanding Systems', desc:'Education and business — learning that systems shape outcomes, not intentions.', color:'#607090', icon:'📚' },
  { year:'Realization', title:'The Gap', desc:'AI was advancing faster than humanity’s ability to apply it to real-world environmental crises.', color:'#D4AF37', icon:'🔄' },
  { year:'Execution', title:'Deploying Infrastructure', desc:'Satellite + AI + blockchain deployed across millions of hectares in SE Asia.', color:'#2E8B57', icon:'🌍' },
  { year:'2026', title:'Global Recognition', desc:'Fluxx Regional Leadership in AI Winner · NIA AIMspire Nominee · Okada Manila.', color:'#D4AF37', icon:'🏆' },
  { year:'Future', title:'Global Standardization', desc:'LENUDA as the accepted standard for Digital Natural Assets across jurisdictions.', color:'#3EAB6C', icon:'🚀' },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero hero-bg grid-bg">
        <div className="container" style={{ position:'relative', zIndex:1, paddingTop:'2rem' }}>
          <div className="badge" style={{ marginBottom:'1.5rem' }}>
            🌍 About Librae
          </div>
          <h1 className="section-title" style={{ maxWidth:700 }}>
            From{' '}<span className="gold-text">Batu Gajah</span>{' '}
            to the <span className="gradient-text">Systems of Earth</span>
          </h1>
          <p className="section-subtitle">
            A distributed intelligence network — humans and AI across continents, unified by one mission: environmental sovereignty through data truth.
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
              <h2 style={{ fontSize:'clamp(1.8rem,3vw,2.8rem)', marginBottom:'0.5rem' }}>
                The <span className="gold-text">Architect</span>
              </h2>
              <p style={{ color:'var(--text-muted)', fontSize:'0.8rem', textTransform:'uppercase', letterSpacing:'1.5px', marginBottom:'1.5rem' }}>
                Theenesan VK Kunjaayappan · Founder & System Architect
              </p>
              <p style={{ color:'var(--text-secondary)', lineHeight:1.9, marginBottom:'1.5rem' }}>
                Born in Batu Gajah, Perak, Theenesan did not begin with satellites or AI — but with a simple understanding: <strong style={{ color:'#D4AF37' }}>systems shape outcomes</strong>.
              </p>
              <p style={{ color:'var(--text-secondary)', lineHeight:1.9, marginBottom:'1.5rem' }}>
                From modest beginnings in education and business, he recognized a critical gap — technology was advancing faster than humanity's ability to apply it to real-world crises. He transitioned from entrepreneur to System Architect, designing infrastructure where AI serves not profit alone — but planetary balance.
              </p>
              <div style={{ padding:'1.5rem', background:'rgba(212,175,55,0.05)', border:'1px solid rgba(212,175,55,0.15)', borderRadius:12 }}>
                <p style={{ color:'#D4AF37', fontWeight:600, fontSize:'1rem', fontStyle:'italic' }}>
                  "If nature cannot speak, we will build systems that allow it to be heard — clearly, truthfully, and without distortion."
                </p>
                <p style={{ color:'#607090', fontSize:'0.8rem', marginTop:'0.5rem' }}>— Theenesan VK Kunjaayappan</p>
              </div>
              <div style={{ marginTop:'2rem', display:'flex', gap:'1rem' }}>
                <a href="mailto:theenesanvk@librae.work" className="btn-primary">
                  📧 Contact Theenesan
                </a>
                <Link href="/contact" className="btn-secondary">
                  Partner with Librae
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────── AI AGENTS ──────── */}
      <section className="section-padding grid-bg" style={{ background:'#000A1A' }}>
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'4rem' }}>
            <div className="accent-line" style={{ margin:'0 auto 1.5rem' }} />
            <h2 className="section-title">A Distributed Intelligence Network</h2>
            <p className="section-subtitle" style={{ margin:'0 auto' }}>
              Librae is not a traditional company. It is a coordinated intelligence system — spanning humans and AI across continents, connected through real-time data, not hierarchy.
            </p>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:'2rem' }}>
            {aiAgents.map((agent, i) => (
              <div key={i} className="glass-card" style={{ padding:'2.5rem', overflow:'hidden', position:'relative' }}>
                <div style={{ position:'absolute', top:0, left:0, right:0, height:2, background:`linear-gradient(90deg,${agent.color},transparent)` }} />
                <div style={{ display:'flex', alignItems:'flex-start', gap:'1.5rem', marginBottom:'1.5rem' }}>
                  <div style={{
                    width:56, height:56, borderRadius:14, flexShrink:0,
                    background:`${agent.color}20`, border:`1px solid ${agent.color}40`,
                    display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.8rem',
                  }}>
                    {agent.icon}
                  </div>
                  <div>
                    <h3 style={{ color:'var(--text-primary)', fontSize:'1.2rem', marginBottom:'0.25rem' }}>{agent.name}</h3>
                    <p style={{ color:agent.color, fontSize:'0.8rem', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.5px' }}>
                      Powered by {agent.powered}
                    </p>
                    <p style={{ color:'var(--text-muted)', fontSize:'0.85rem', marginTop:'0.25rem' }}>{agent.role}</p>
                  </div>
                </div>
                <div>
                  <p style={{ color:'#607090', fontSize:'0.75rem', textTransform:'uppercase', letterSpacing:'1px', marginBottom:'0.75rem' }}>
                    Logic Flow
                  </p>
                  <div style={{ display:'flex', alignItems:'center', gap:'0.4rem', flexWrap:'wrap' }}>
                    {agent.flow.map((step, si) => (
                      <span key={si} style={{ display:'flex', alignItems:'center', gap:'0.4rem' }}>
                        <span style={{ padding:'4px 10px', background:`${agent.color}15`, border:`1px solid ${agent.color}30`,
                          borderRadius:100, fontSize:'0.72rem', color:agent.color, fontWeight:600 }}>
                          {step}
                        </span>
                        {si < agent.flow.length - 1 && <span style={{ color:`${agent.color}60`, fontSize:'0.8rem' }}>→</span>}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop:'3rem', padding:'2rem', background:'rgba(212,175,55,0.05)', border:'1px solid rgba(212,175,55,0.15)', borderRadius:16, textAlign:'center' }}>
            <p style={{ color:'var(--text-secondary)', fontSize:'0.95rem', lineHeight:1.7 }}>
              <span style={{ color:'#D4AF37', fontWeight:700 }}>The Human Role:</span> Humans do not compete with AI here. They anchor it with ethics, context, and accountability. Every SHA-256 hash and polygon assessment meets the highest standards of human oversight.
            </p>
            <div style={{ display:'flex', justifyContent:'center', flexWrap:'wrap', gap:'0.5rem', marginTop:'1rem' }}>
              {['Google Gemini 3.1','Gemini 2.5','Vertex AI','AI Studio','Google Earth Engine','GKE','Google Cloud','GA4'].map(b => (
                <span key={b} style={{ padding:'4px 12px', background:'rgba(74,158,255,0.08)', border:'1px solid rgba(74,158,255,0.2)', borderRadius:100, fontSize:'0.7rem', color:'#4A9EFF', fontWeight:600 }}>{b}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────── GLOBAL TEAM ──────── */}
      <section className="section-padding" style={{ background:'linear-gradient(180deg,#001133,#000A1A)' }}>
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'4rem' }}>
            <div className="accent-line" style={{ margin:'0 auto 1.5rem' }} />
            <h2 className="section-title">A Global Hybrid Workforce</h2>
            <p className="section-subtitle" style={{ margin:'0 auto' }}>
              A coordinated network across four nations — connected through real-time data, not hierarchy.
            </p>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'1.5rem' }}>
            {[
              { flag:'🇲🇾', country:'Malaysia', city:'Batu Gajah & KL', role:'Global HQ', desc:'Foundation of operations. MPOB-scale monitoring and system architecture.', color:'#D4AF37' },
              { flag:'🇻🇳', country:'Vietnam', city:'Ho Chi Minh City', role:'Tech Development', desc:'Frontend engineering and data pipeline optimization specialists.', color:'#2E8B57' },
              { flag:'🇮🇳', country:'India', city:'Punjab & Haryana', role:'Deep-Tech Hub', desc:'AI development, restoration projects, and large-scale analysis.', color:'#4A9EFF' },
              { flag:'🇺🇸', country:'USA', city:'Strategic Hub', role:'Corporate Gateway', desc:'Silicon Valley partnerships and North American carbon market access.', color:'#7B4AFF' },
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
          <div style={{ textAlign:'center', marginBottom:'4rem' }}>
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
