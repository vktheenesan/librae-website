'use client';
import { useState } from 'react';

const interests = ['EUDR Compliance', 'Carbon Credit Generation', 'Sentinel Monitoring', 'Swarm Deployment', 'GANGAI Beta Waitlist', 'Partnership Inquiry'];
const regions = ['SE Asia', 'India', 'Americas', 'Europe', 'Middle East & Africa', 'Others'];

export default function ContactPage() {
  const [form, setForm] = useState({ entity:'', interest:'', region:'', message:'' });
  const [hashProgress, setHashProgress] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (field, val) => {
    setForm(prev => ({ ...prev, [field]: val }));
    const filled = Object.values({ ...form, [field]: val }).filter(v => v.length > 0).length;
    setHashProgress((filled / 4) * 100);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error('Transmission failed');
      setSubmitted(true);
    } catch (err) {
      setErrorMsg('Failed to send transmission. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="page-hero hero-bg grid-bg">
        <div className="container" style={{ position:'relative', zIndex:1, paddingTop:'2rem' }}>
          <div className="badge" style={{ marginBottom:'1.5rem' }}>🌍 Global Gateway</div>
          <h1 className="section-title" style={{ maxWidth:700 }}>
            Direct Access to the{' '}<span className="gold-text">Architects</span>
          </h1>
          <p className="section-subtitle">
            Connect with our global headquarters in Malaysia, USA, and India. Every transmission is secured.
          </p>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="section-padding" style={{ background:'linear-gradient(180deg,#000A1A,#001133)' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'2rem', marginBottom:'4rem' }}>
            {[
              { name:'Theenesan VK Kunjaayappan', role:'Founder & System Architect', email:'theenesanvk@librae.work',
                scope:'Global Strategy, AI Infrastructure, and Sovereign Partnerships', flag:'🇲🇾', color:'#D4AF37' },
              { name:'Sreebalaji Sampath', role:'Managing Director (India)', email:'sreebalajisampath@librae.work',
                scope:'South Asian Operations, Restoration Projects, and Localized AI Development', flag:'🇮🇳', color:'#2E8B57' },
              { name:'Administrative & Finance', role:'Operations Hub', email:'admin@librae.work',
                scope:'Procurement, Invoicing, and Operational Support', flag:'🏢', color:'#4A9EFF' },
            ].map((p,i) => (
              <div key={i} className="glass-card" style={{ padding:'2.5rem', position:'relative' }}>
                <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:`linear-gradient(90deg,${p.color},transparent)` }} />
                <div style={{ fontSize:'2rem', marginBottom:'1rem' }}>{p.flag}</div>
                <h3 style={{ color:'var(--text-primary)', fontSize:'1.1rem', marginBottom:'0.25rem' }}>{p.name}</h3>
                <p style={{ color:p.color, fontSize:'0.8rem', fontWeight:600, marginBottom:'1rem' }}>{p.role}</p>
                <p style={{ color:'var(--text-secondary)', fontSize:'0.85rem', lineHeight:1.6, marginBottom:'1rem' }}>{p.scope}</p>
                <a href={`mailto:${p.email}`} style={{ color:p.color, fontSize:'0.85rem', textDecoration:'none', fontFamily:'Space Mono,monospace',
                  padding:'8px 14px', background:`${p.color}10`, border:`1px solid ${p.color}30`, borderRadius:8, display:'inline-block' }}>
                  📧 {p.email}
                </a>
              </div>
            ))}
          </div>

          {/* FORM */}
          <div style={{ display:'grid', gridTemplateColumns:'1.2fr 1fr', gap:'4rem', alignItems:'start' }}>
            <div>
              <div className="accent-line" />
              <h2 className="section-title" style={{ fontSize:'2rem' }}>Secure Inquiry</h2>
              <p style={{ color:'var(--text-secondary)', marginBottom:'2rem', fontSize:'0.9rem' }}>
                Every submission generates a SHA-256 hash receipt for your records.
              </p>

              {submitted ? (
                <div className="glass-card gold-glow" style={{ padding:'3rem', textAlign:'center' }}>
                  <div style={{ fontSize:'3rem', marginBottom:'1rem' }}>✅</div>
                  <h3 style={{ color:'#D4AF37', marginBottom:'0.5rem' }}>Transmission Secured</h3>
                  <p style={{ color:'var(--text-secondary)', fontSize:'0.9rem' }}>
                    Your inquiry has been submitted. A SHA-256 receipt will be sent to your inbox.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ display:'flex', flexDirection:'column', gap:'1.25rem' }}>
                    <div>
                      <label style={{ color:'#607090', fontSize:'0.75rem', textTransform:'uppercase', letterSpacing:'1px', display:'block', marginBottom:'6px' }}>
                        Entity Name
                      </label>
                      <input type="text" required value={form.entity} onChange={e => handleChange('entity', e.target.value)}
                        placeholder="Government, Estate, NGO, or Private Partner"
                        style={{
                          width:'100%', padding:'14px 16px', background:'rgba(0,20,60,0.6)', border:'1px solid rgba(212,175,55,0.2)', borderRadius:10,
                          color:'var(--text-primary)', fontSize:'0.9rem', fontFamily:'Inter,sans-serif', outline:'none',
                        }} />
                    </div>
                    <div>
                      <label style={{ color:'#607090', fontSize:'0.75rem', textTransform:'uppercase', letterSpacing:'1px', display:'block', marginBottom:'6px' }}>
                        Primary Interest
                      </label>
                      <select required value={form.interest} onChange={e => handleChange('interest', e.target.value)}
                        style={{
                          width:'100%', padding:'14px 16px', background:'rgba(0,20,60,0.6)', border:'1px solid rgba(212,175,55,0.2)', borderRadius:10,
                          color: form.interest ? 'var(--text-primary)' : '#607090', fontSize:'0.9rem', fontFamily:'Inter,sans-serif', outline:'none',
                        }}>
                        <option value="" disabled>Select your primary interest</option>
                        {interests.map(int => <option key={int} value={int}>{int}</option>)}
                      </select>
                    </div>
                    <div>
                      <label style={{ color:'#607090', fontSize:'0.75rem', textTransform:'uppercase', letterSpacing:'1px', display:'block', marginBottom:'6px' }}>
                        Region of Interest
                      </label>
                      <select required value={form.region} onChange={e => handleChange('region', e.target.value)}
                        style={{
                          width:'100%', padding:'14px 16px', background:'rgba(0,20,60,0.6)', border:'1px solid rgba(212,175,55,0.2)', borderRadius:10,
                          color: form.region ? 'var(--text-primary)' : '#607090', fontSize:'0.9rem', fontFamily:'Inter,sans-serif', outline:'none',
                        }}>
                        <option value="" disabled>Select region</option>
                        {regions.map(r => <option key={r} value={r}>{r}</option>)}
                      </select>
                    </div>
                    <div>
                      <label style={{ color:'#607090', fontSize:'0.75rem', textTransform:'uppercase', letterSpacing:'1px', display:'block', marginBottom:'6px' }}>
                        Message
                      </label>
                      <textarea required value={form.message} onChange={e => handleChange('message', e.target.value)}
                        placeholder="Describe your project or inquiry..."
                        rows="5"
                        style={{
                          width:'100%', padding:'14px 16px', background:'rgba(0,20,60,0.6)', border:'1px solid rgba(212,175,55,0.2)', borderRadius:10,
                          color:'var(--text-primary)', fontSize:'0.9rem', fontFamily:'Inter,sans-serif', outline:'none', resize:'vertical',
                        }} />
                    </div>
                    {/* SHA-256 Progress Bar */}
                    <div>
                      <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'4px' }}>
                        <span style={{ color:'#607090', fontSize:'0.72rem', textTransform:'uppercase', letterSpacing:'1px' }}>SHA-256 Integrity</span>
                        <span style={{ fontFamily:'Space Mono,monospace', fontSize:'0.72rem', color:'#D4AF37' }}>{Math.round(hashProgress)}%</span>
                      </div>
                      <div style={{ height:4, background:'rgba(212,175,55,0.15)', borderRadius:2 }}>
                        <div style={{ width:`${hashProgress}%`, height:'100%', background:'linear-gradient(90deg,#D4AF37,#2E8B57)',
                          borderRadius:2, transition:'width 0.4s ease' }} />
                      </div>
                    </div>
                    {errorMsg && <p style={{color:'#FF6B6B', fontSize:'0.85rem', textAlign:'center'}}>{errorMsg}</p>}
                    <button type="submit" disabled={loading} className="btn-primary" style={{ width:'100%', justifyContent:'center', padding:'16px', fontSize:'1rem', opacity: loading ? 0.7 : 1 }}>
                      {loading ? '🔐 Encrypting & Sending...' : '🔐 Send Secure Transmission'}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* LOCATIONS */}
            <div>
              <div className="accent-line" />
              <h2 className="section-title" style={{ fontSize:'1.6rem' }}>The Librae Footprint</h2>
              <div style={{ display:'flex', flexDirection:'column', gap:'1.5rem', marginBottom:'2rem' }}>
                {[
                  { flag:'🇲🇾', entity:'Librae Management Sdn Bhd', loc:'Batu Gajah, Perak & KL', role:'Global HQ · Regional ESG Infrastructure', color:'#D4AF37' },
                  { flag:'🇺🇸', entity:'Librae Inc', loc:'USA Strategic Partnerships', role:'Corporate · Global Carbon Markets', color:'#4A9EFF' },
                  { flag:'🇮🇳', entity:'Librae Pvt Ltd', loc:'Punjab & Haryana', role:'Operations · Tech Dev & Restoration', color:'#2E8B57' },
                ].map((l,i) => (
                  <div key={i} className="glass-card" style={{ padding:'1.5rem', display:'flex', gap:'1rem', alignItems:'center' }}>
                    <div style={{ fontSize:'2rem' }}>{l.flag}</div>
                    <div>
                      <h4 style={{ color:l.color, fontSize:'0.95rem', marginBottom:'2px' }}>{l.entity}</h4>
                      <p style={{ color:'var(--text-muted)', fontSize:'0.8rem' }}>{l.loc}</p>
                      <p style={{ color:'var(--text-secondary)', fontSize:'0.78rem' }}>{l.role}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* LENUDA Button */}
              <div className="glass-card gold-glow" style={{ padding:'2rem', textAlign:'center' }}>
                <p style={{ color:'#607090', fontSize:'0.75rem', textTransform:'uppercase', letterSpacing:'1.5px', marginBottom:'1rem' }}>Access the Platform</p>
                <a href="https://lenuda.librae.work" target="_blank" rel="noopener noreferrer"
                  className="btn-primary" style={{ width:'100%', justifyContent:'center', padding:'16px', fontSize:'1rem' }}>
                  🔗 Go to LENUDA Platform
                </a>
                <p style={{ color:'#607090', fontSize:'0.72rem', marginTop:'0.75rem' }}>lenuda.librae.work · Powered by Polygon L2</p>
              </div>

              {/* Tech Stack */}
              <div style={{ marginTop:'2rem' }}>
                <p style={{ color:'#607090', fontSize:'0.72rem', textTransform:'uppercase', letterSpacing:'1.5px', marginBottom:'0.75rem' }}>Tech Stack</p>
                <div style={{ display:'flex', flexWrap:'wrap', gap:'0.5rem' }}>
                  {['D3.js / Three.js','SHA-256','Polygon L2','Gemini 3.1','Gemini 2.5','Vertex AI','Earth Engine','GKE','Google Cloud','GA4'].map(b => (
                    <span key={b} style={{ padding:'4px 12px', background:'rgba(212,175,55,0.08)',
                      border:'1px solid rgba(212,175,55,0.2)', borderRadius:100, fontSize:'0.7rem', color:'#D4AF37', fontWeight:600 }}>
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
