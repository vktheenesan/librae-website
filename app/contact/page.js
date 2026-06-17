'use client';
import { useState, useEffect, useRef } from 'react';

const interests = ['EUDR Compliance', 'Carbon Credit Generation', 'Sentinel Monitoring', 'Swarm Deployment', 'CAHAYA Licensing', 'Partnership Inquiry'];
const regions = ['SE Asia', 'India', 'Americas', 'Europe', 'Middle East & Africa', 'Others'];

export default function ContactPage() {
  const [showForm, setShowForm] = useState(false);
  // Contact Form State
  const [form, setForm] = useState({ name:'', email:'', entity:'', interest:'', region:'', message:'' });
  const [hashProgress, setHashProgress] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Chatbot State
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'system', text: 'Welcome to the secure gateway. I am BAYU, your environmental intelligence assistant. How can I assist you with CAHAYA, LENUDA, or system diagnostics?' }
  ]);
  const [chatLoading, setChatLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleFormChange = (field, val) => {
    setForm(prev => ({ ...prev, [field]: val }));
    const filled = Object.values({ ...form, [field]: val }).filter(v => v.length > 0).length;
    setHashProgress((filled / 6) * 100);
  };

  const handleFormSubmit = async (e) => {
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
      setErrorMsg('Failed to send secure transmission. Please check your network connection.');
    } finally {
      setLoading(false);
    }
  };

  const handleChatSubmit = async (e) => {
    e.preventDefault();
    if (!chatInput.trim() || chatLoading) return;

    const userText = chatInput.trim();
    setChatInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setChatLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText })
      });
      
      if (!res.ok) throw new Error('Chat link failed');
      
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'system', text: data.reply || 'No transmission received.' }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'system', text: 'Telemetry offline. Safe handshake could not be verified.' }]);
    } finally {
      setChatLoading(false);
    }
  };

  return (
    <>
      <section className="page-hero hero-bg grid-bg">
        <div className="container" style={{ position:'relative', zIndex:1, paddingTop:'2rem' }}>
          <div className="badge" style={{ marginBottom:'1.5rem' }}>🌍 Global Gateway</div>
          <h1 className="section-title" style={{ maxWidth:700 }}>
            Direct Access to the <span className="gold-text">Architects</span>
          </h1>
          <p className="section-subtitle">
            Connect with our global offices in Malaysia, USA, and India. Every transmission is secured and authenticated.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section-padding" style={{ background:'linear-gradient(180deg,#000A1A,#001133)' }}>
        <div className="container">
          
          {/* Secure Chat Widget (BAYU) - Primary Focus on Top */}
          <div className="glass-card" style={{ padding:'2rem', marginBottom:'4rem', border: '1px solid rgba(74,158,255,0.3)', background: 'rgba(0,15,40,0.4)', display: 'flex', flexDirection: 'column', height: '520px' }}>
            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '12px', marginBottom: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#4A9EFF', fontWeight: 'bold', fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}>🗣️ Secure Support Node (BAYU)</span>
              <span style={{ fontSize: '0.75rem', color: '#2E8B57', fontFamily: 'Space Mono, monospace' }}>Handshake verified</span>
            </div>

            {/* Messages Box */}
            <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px', paddingRight: '10px', marginBottom: '15px' }}>
              {messages.map((m, i) => (
                <div key={i} style={{ 
                  alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '80%',
                  background: m.role === 'user' ? 'rgba(74,158,255,0.1)' : 'rgba(255,255,255,0.03)',
                  border: m.role === 'user' ? '1px solid rgba(74,158,255,0.25)' : '1px solid rgba(255,255,255,0.05)',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  fontSize: '0.85rem',
                  lineHeight: 1.6,
                  color: m.role === 'user' ? '#E0E5FF' : '#BCC8D8'
                }}>
                  {m.text}
                </div>
              ))}
              {chatLoading && (
                <div style={{ alignSelf: 'flex-start', fontSize: '0.8rem', color: '#607090', fontStyle: 'italic' }}>
                  🛰️ Aligning signals...
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input form */}
            <form onSubmit={handleChatSubmit} style={{ display: 'flex', gap: '10px' }}>
              <input type="text" value={chatInput} onChange={e => setChatInput(e.target.value)} disabled={chatLoading}
                placeholder="Ask BAYU about CAHAYA local evaluation, compliance integration, or system specifications..."
                style={{
                  flex: 1, padding: '12px 16px', background: 'rgba(0,10,30,0.8)', border: '1px solid rgba(74,158,255,0.25)', borderRadius: 8,
                  color: 'var(--text-primary)', fontSize: '0.88rem', outline: 'none'
                }} />
              <button type="submit" disabled={chatLoading || !chatInput.trim()} className="btn-primary" style={{ padding: '12px 24px', fontSize: '0.85rem', background: '#4A9EFF', borderColor: '#4A9EFF', color: '#000' }}>
                Send
              </button>
            </form>
          </div>

          {/* HUMAN OFFICE / LEADERSHIP BLUEPRINT */}
          <h2 style={{ fontSize: '1.6rem', color: '#E0E2E5', marginBottom: '2rem', fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}>
            Human Office Details & Leadership Blueprint
          </h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'2rem', marginBottom:'4rem' }} className="leadership-grid">
            {[
              { name:'Theenesan VK Kunjaayappan', role:'Founder & System Architect', email:'theenesanvk@librae.work',
                scope:'Global Strategy, AI Infrastructure, and Partnerships', flag:'🇲🇾', color:'#D4AF37' },
              { name:'Sreebalaji Sampath', role:'Managing Director (India)', email:'sreebalajisampath@librae.work',
                scope:'South Asian Operations, Restoration Projects, and Localized AI Development', flag:'🇮🇳', color:'#2E8B57' },
              { name:'Nurliyana Binti Raman', role:'Admin & Finance', email:'hr@librae.work',
                scope:'Procurement, Human Resources, Licensing audits, and Administration', flag:'🇲🇾', color:'#4A9EFF' },
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

          <div style={{ display:'grid', gridTemplateColumns:'1.2fr 1fr', gap:'4rem', alignItems:'start' }} className="contact-details-grid">
            {/* Optional Form Column */}
            <div>
              <div className="accent-line" />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h2 className="section-title" style={{ fontSize:'1.8rem', margin: 0 }}>Transmission Form</h2>
                <button 
                  onClick={() => setShowForm(!showForm)} 
                  className="btn-secondary" 
                  style={{ padding: '8px 16px', fontSize: '0.8rem' }}
                >
                  {showForm ? 'Hide Form' : 'Show Form (Optional) ↴'}
                </button>
              </div>
              <p style={{ color:'var(--text-secondary)', marginBottom:'2rem', fontSize:'0.9rem' }}>
                If you prefer not to use the AI chat, you can expand this form to sync a secure inquiry directly to our CRM.
              </p>

              {showForm && (
                submitted ? (
                  <div className="glass-card gold-glow" style={{ padding:'3rem', textAlign:'center' }}>
                    <div style={{ fontSize:'3rem', marginBottom:'1rem' }}>✅</div>
                    <h3 style={{ color:'#D4AF37', marginBottom:'0.5rem' }}>Transmission Secured</h3>
                    <p style={{ color:'var(--text-secondary)', fontSize:'0.9rem' }}>
                      Your inquiry has been submitted and synced with the CRM database.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} style={{ animation: 'fadeInUp 0.3s ease forwards' }}>
                    <div style={{ display:'flex', flexDirection:'column', gap:'1.25rem' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div>
                          <label style={{ color:'#607090', fontSize:'0.75rem', textTransform:'uppercase', letterSpacing:'1px', display:'block', marginBottom:'6px' }}>
                            Full Name
                          </label>
                          <input type="text" required value={form.name} onChange={e => handleFormChange('name', e.target.value)}
                            placeholder="Your Name"
                            style={{
                              width:'100%', padding:'14px 16px', background:'rgba(0,20,60,0.6)', border:'1px solid rgba(212,175,55,0.2)', borderRadius:10,
                              color:'var(--text-primary)', fontSize:'0.9rem', outline:'none',
                            }} />
                        </div>
                        <div>
                          <label style={{ color:'#607090', fontSize:'0.75rem', textTransform:'uppercase', letterSpacing:'1px', display:'block', marginBottom:'6px' }}>
                            Email Address
                          </label>
                          <input type="email" required value={form.email} onChange={e => handleFormChange('email', e.target.value)}
                            placeholder="name@organization.com"
                            style={{
                              width:'100%', padding:'14px 16px', background:'rgba(0,20,60,0.6)', border:'1px solid rgba(212,175,55,0.2)', borderRadius:10,
                              color:'var(--text-primary)', fontSize:'0.9rem', outline:'none',
                            }} />
                        </div>
                      </div>

                      <div>
                        <label style={{ color:'#607090', fontSize:'0.75rem', textTransform:'uppercase', letterSpacing:'1px', display:'block', marginBottom:'6px' }}>
                          Entity Name
                        </label>
                        <input type="text" required value={form.entity} onChange={e => handleFormChange('entity', e.target.value)}
                          placeholder="Government Agency or Private Enterprise"
                          style={{
                            width:'100%', padding:'14px 16px', background:'rgba(0,20,60,0.6)', border:'1px solid rgba(212,175,55,0.2)', borderRadius:10,
                            color:'var(--text-primary)', fontSize:'0.9rem', outline:'none',
                          }} />
                      </div>
                      
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div>
                          <label style={{ color:'#607090', fontSize:'0.75rem', textTransform:'uppercase', letterSpacing:'1px', display:'block', marginBottom:'6px' }}>
                            Primary Interest
                          </label>
                          <select required value={form.interest} onChange={e => handleFormChange('interest', e.target.value)}
                            style={{
                              width:'100%', padding:'14px 16px', background:'rgba(0,20,60,0.6)', border:'1px solid rgba(212,175,55,0.2)', borderRadius:10,
                              color: form.interest ? 'var(--text-primary)' : '#607090', fontSize:'0.9rem', outline:'none',
                            }}>
                            <option value="" disabled>Select interest</option>
                            {interests.map(int => <option key={int} value={int}>{int}</option>)}
                          </select>
                        </div>
                        <div>
                          <label style={{ color:'#607090', fontSize:'0.75rem', textTransform:'uppercase', letterSpacing:'1px', display:'block', marginBottom:'6px' }}>
                            Region of Interest
                          </label>
                          <select required value={form.region} onChange={e => handleFormChange('region', e.target.value)}
                            style={{
                              width:'100%', padding:'14px 16px', background:'rgba(0,20,60,0.6)', border:'1px solid rgba(212,175,55,0.2)', borderRadius:10,
                              color: form.region ? 'var(--text-primary)' : '#607090', fontSize:'0.9rem', outline:'none',
                            }}>
                            <option value="" disabled>Select region</option>
                            {regions.map(r => <option key={r} value={r}>{r}</option>)}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label style={{ color:'#607090', fontSize:'0.75rem', textTransform:'uppercase', letterSpacing:'1px', display:'block', marginBottom:'6px' }}>
                          Message
                        </label>
                        <textarea required value={form.message} onChange={e => handleFormChange('message', e.target.value)}
                          placeholder="Detail your operational constraints or deployment requirements..."
                          rows="5"
                          style={{
                            width:'100%', padding:'14px 16px', background:'rgba(0,20,60,0.6)', border:'1px solid rgba(212,175,55,0.2)', borderRadius:10,
                            color:'var(--text-primary)', fontSize:'0.9rem', outline:'none', resize:'vertical',
                          }} />
                      </div>

                      {/* SHA-256 Progress Bar */}
                      <div>
                        <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'4px' }}>
                          <span style={{ color:'#607090', fontSize:'0.72rem', textTransform:'uppercase', letterSpacing:'1px' }}>SHA-256 Receipt Seal</span>
                          <span style={{ fontFamily:'Space Mono,monospace', fontSize:'0.72rem', color:'#D4AF37' }}>{Math.round(hashProgress)}%</span>
                        </div>
                        <div style={{ height:4, background:'rgba(212,175,55,0.15)', borderRadius:2 }}>
                          <div style={{ width:`${hashProgress}%`, height:'100%', background:'linear-gradient(90deg,#D4AF37,#2E8B57)',
                            borderRadius:2, transition:'width 0.4s ease' }} />
                        </div>
                      </div>

                      {errorMsg && <p style={{color:'#FF6B6B', fontSize:'0.85rem', textAlign:'center'}}>{errorMsg}</p>}
                      
                      <button type="submit" disabled={loading} className="btn-primary" style={{ width:'100%', justifyContent:'center', padding:'16px', fontSize:'1rem', opacity: loading ? 0.7 : 1 }}>
                        {loading ? '🔐 Processing Cryptographic Receipt...' : '🔐 Execute Transmission'}
                      </button>
                    </div>
                  </form>
                )
              )}
            </div>

            {/* Footprint List Column */}
            <div>
              <div className="accent-line" />
              <h2 className="section-title" style={{ fontSize:'1.8rem' }}>The Librae Footprint</h2>
              <div style={{ display:'flex', flexDirection:'column', gap:'1.5rem' }}>
                {[
                  { flag:'🇲🇾', entity:'Librae AI Labs Sdn Bhd', loc:'Batu Gajah, Perak & KL', role:'Global HQ · Operations Hub', color:'#D4AF37' },
                  { flag:'🇺🇸', entity:'Librae Inc', loc:'USA Strategic Partnerships', role:'Corporate · Strategic Market Access', color:'#4A9EFF' },
                  { flag:'🇮🇳', entity:'Librae Pvt Ltd', loc:'Punjab & Haryana', role:'Operations · Research & Tech Development', color:'#2E8B57' },
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
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 1024px) {
            .leadership-grid { grid-template-columns: 1fr !important; }
            .contact-details-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          }
        `}</style>
      </section>
    </>
  );
}
