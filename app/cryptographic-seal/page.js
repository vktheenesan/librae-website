'use client';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const MerkleVisualizer = dynamic(() => import('@/components/Blockchain/MerkleVisualizer'), { ssr: false });

function CarbonGauge() {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        let v = 0;
        const t = setInterval(() => { v += 0.5; if (v >= 30) { setVal(30); clearInterval(t); } else setVal(v); }, 30);
        obs.disconnect();
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const pct = (val / 100) * 100;
  return (
    <div ref={ref} style={{ textAlign:'center' }}>
      <div style={{ position:'relative', width:200, height:200, margin:'0 auto' }}>
        <svg viewBox="0 0 200 200" style={{ transform:'rotate(-90deg)' }}>
          <circle cx="100" cy="100" r="85" fill="none" stroke="rgba(212,175,55,0.1)" strokeWidth="12" />
          <circle cx="100" cy="100" r="85" fill="none" stroke="#2E8B57"
            strokeWidth="12" strokeLinecap="round"
            strokeDasharray={`${pct * 5.34} 534`}
            style={{ transition:'stroke-dasharray 0.3s' }} />
        </svg>
        <div style={{ position:'absolute', inset:0, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center' }}>
          <span style={{ fontFamily:'Space Mono,monospace', fontSize:'2.5rem', fontWeight:700, color:'#2E8B57' }}>
            {Math.round(val)}g
          </span>
          <span style={{ color:'#607090', fontSize:'0.75rem' }}>CO₂ / Report</span>
        </div>
      </div>
    </div>
  );
}

const processSteps = [
  { num:'01', title:'Ingestion', desc:'PDF Deeds, Excel sheets, Drone KML, and GeoJSON are uploaded into the secure pipeline.', icon:'📥', color:'#4A9EFF' },
  { num:'02', title:'Harmonization', desc:'Our AI agents clean the "messy vector" data, resolving overlaps, fixing projections, and standardizing formats.', icon:'🔄', color:'#D4AF37' },
  { num:'03', title:'Verification', desc:'Multi-spectral analysis via Sentinel-1 (SAR) and Sentinel-2 confirms actual land use vs declared usage.', icon:'🛰️', color:'#2E8B57' },
  { num:'04', title:'Sealing', desc:'The report is hashed with SHA-256, Merkle-rooted, and timestamped on the Polygon L2 blockchain.', icon:'🔐', color:'#D4AF37' },
  { num:'05', title:'Issuance', desc:'A LENUDA-backed certificate is issued, ready for EUDR pre-audit or the premium carbon market.', icon:'💎', color:'#7B4AFF' },
];

const carbonItems = [
  { label:'AI Inference', desc:'Optimized Google Gemini 3.1 & 2.5 via Vertex AI tokens', pct:35 },
  { label:'Satellite Uplink', desc:'Copernicus & Landsat constellation energy', pct:25 },
  { label:'Cloud & Blockchain', desc:'GCP nodes + Polygon PoS consensus', pct:30 },
  { label:'Network Overhead', desc:'API routing & data transfer', pct:10 },
];

export default function CryptographicSealPage() {
  return (
    <>
      <section className="page-hero hero-bg grid-bg">
        <div className="container" style={{ position:'relative', zIndex:1, paddingTop:'2rem' }}>
          <div className="badge" style={{ marginBottom:'1.5rem' }}>🔐 Cryptographic Integrity</div>
          <h1 className="section-title" style={{ maxWidth:700 }}>
            Proof of <span className="gold-text">Origin.</span>{' '}
            Proof of <span className="gradient-text">Reality.</span>
          </h1>
          <div style={{ color:'var(--text-secondary)', fontSize:'1.05rem', lineHeight:1.8, maxWidth:600, margin:'0 auto 2rem' }}>
            <p style={{ marginBottom:'1rem' }}>Every dataset — no matter how small — contains a fragment of Earth's truth.</p>
            <p style={{ marginBottom:'0.5rem' }}>We ensure that truth is:</p>
            <ul style={{ listStyle:'none', padding:0, margin:0, color:'#D4AF37', fontWeight:600, display:'flex', justifyContent:'center', gap:'1.5rem', flexWrap:'wrap' }}>
              <li>✓ Captured accurately</li>
              <li>✓ Processed intelligently</li>
              <li>✓ Sealed immutably</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ──── MERKLE TREE ──── */}
      <section className="section-padding" style={{ background:'linear-gradient(180deg,#000A1A,#001133)' }}>
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'3rem' }}>
            <div className="accent-line" style={{ margin:'0 auto 1.5rem' }} />
            <h2 className="section-title">The Integrity Protocol</h2>
            <p className="section-subtitle" style={{ margin:'0 auto' }}>
              A single farmer's data is not isolated. It becomes part of a larger truth structure. Thousands of data points merge into a single root — a mathematical representation of reality. If even one element is altered, the system rejects it. Truth, once sealed, cannot be rewritten.
            </p>
          </div>
          <div className="glass-card" style={{ padding:'2.5rem', overflow:'hidden' }}>
            <MerkleVisualizer />
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'2rem', marginTop:'3rem' }}>
            {[
              { title:'SHA-256 Hashing', desc:'Every byte of data creates a unique 256-bit digital fingerprint. One changed pixel breaks the entire chain.', color:'#D4AF37' },
              { title:'Merkle Aggregation', desc:'Thousands of individual hashes aggregate into a single Root — verifying 3M hectares with mathematical certainty.', color:'#2E8B57' },
              { title:'On-Chain Timestamping', desc:'The Merkle Root is anchored to Polygon L2, creating an immutable public record no one can alter.', color:'#7B4AFF' },
            ].map((c,i) => (
              <div key={i} className="glass-card" style={{ padding:'2rem' }}>
                <div style={{ width:40, height:3, background:c.color, borderRadius:2, marginBottom:'1rem' }} />
                <h3 style={{ color:c.color, fontSize:'1.1rem', marginBottom:'0.5rem' }}>{c.title}</h3>
                <p style={{ color:'var(--text-secondary)', fontSize:'0.9rem', lineHeight:1.7 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── LENUDA ──── */}
      <section className="section-padding grid-bg" style={{ background:'#000A1A' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'5rem', alignItems:'center' }}>
            <div>
              <div className="badge" style={{ borderColor:'rgba(123,74,255,0.4)', color:'#7B4AFF', background:'rgba(123,74,255,0.1)', marginBottom:'1.5rem' }}>
                💎 ERC-1155 on Polygon L2
              </div>
              <h2 className="section-title">
                <span style={{ color:'#D4AF37' }}>LENUDA</span> — The Standard of Truth
              </h2>
              <p style={{ color:'var(--text-muted)', fontSize:'0.8rem', textTransform:'uppercase', letterSpacing:'1.5px', marginBottom:'1rem' }}>
                Librae Environment Nature Unified Digital Asset
              </p>
              <p style={{ color:'var(--text-secondary)', lineHeight:1.9, marginBottom:'1.5rem' }}>
                LENUDA is not a token. It is a <strong style={{ color:'#D4AF37' }}>representation of verified natural truth</strong>.
              </p>
              <p style={{ color:'var(--text-secondary)', lineHeight:1.9, marginBottom:'2rem' }}>
                Each asset — whether carbon, land, or audit — carries a proven origin, a verified condition, and an immutable record governed by the ERC-1155 Multi-Token Standard on Polygon Layer 2.
              </p>
              <a href="https://lenuda.librae.work" target="_blank" rel="noopener noreferrer" className="btn-primary">
                🔗 Explore LENUDA Platform
              </a>
            </div>
            {/* 3D Coin placeholder */}
            <div style={{ display:'flex', alignItems:'center', justifyContent:'center' }}>
              <div style={{
                width:280, height:280, borderRadius:'50%',
                background:'conic-gradient(from 0deg, #D4AF37, #2E8B57, #D4AF37)',
                padding:4,
                animation:'rotate-slow 12s linear infinite',
              }}>
                <div style={{
                  width:'100%', height:'100%', borderRadius:'50%',
                  background:'radial-gradient(circle at 40% 40%, #001A33, #000A1A)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  flexDirection:'column', gap:'0.5rem',
                }}>
                  <span style={{ fontSize:'3.5rem' }}>💎</span>
                  <span style={{ fontFamily:'Outfit,sans-serif', fontWeight:800, fontSize:'1.4rem', color:'#D4AF37' }}>LENUDA</span>
                  <span style={{ fontFamily:'Space Mono,monospace', fontSize:'0.7rem', color:'#607090' }}>ERC-1155 · Polygon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──── CARBON PLEDGE ──── */}
      <section className="section-padding" style={{ background:'linear-gradient(180deg,#001133,#000A1A)' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1.5fr', gap:'4rem', alignItems:'center' }}>
            <CarbonGauge />
            <div>
              <div className="accent-line" />
              <h2 className="section-title">The 30g Carbon Pledge</h2>
              <p style={{ color:'#2E8B57', fontWeight:600, fontFamily:'Outfit,sans-serif', marginBottom:'1rem' }}>"We do not protect the planet by damaging it in the process."</p>
              <p style={{ color:'var(--text-secondary)', lineHeight:1.8, marginBottom:'2rem' }}>
                Every Librae assessment operates under extreme efficiency — minimizing its own environmental cost to less than 30g of CO₂. The result: The value created is not offset by the system itself.
              </p>
              <div style={{ display:'flex', flexDirection:'column', gap:'1rem' }}>
                {carbonItems.map((item,i) => (
                  <div key={i}>
                    <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'4px' }}>
                      <span style={{ color:'var(--text-primary)', fontSize:'0.85rem', fontWeight:600 }}>{item.label}</span>
                      <span style={{ color:'#607090', fontSize:'0.8rem' }}>{item.pct}%</span>
                    </div>
                    <div style={{ height:6, background:'rgba(46,139,87,0.15)', borderRadius:3 }}>
                      <div style={{ width:`${item.pct}%`, height:'100%', background:'linear-gradient(90deg,#2E8B57,#3EAB6C)', borderRadius:3, transition:'width 1s' }} />
                    </div>
                    <p style={{ color:'#607090', fontSize:'0.72rem', marginTop:'2px' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──── PROCESS ──── */}
      <section className="section-padding grid-bg" style={{ background:'#000A1A' }}>
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'4rem' }}>
            <div className="accent-line" style={{ margin:'0 auto 1.5rem' }} />
            <h2 className="section-title">From Messy Vector to Premium Credit</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:'1rem' }}>
            {processSteps.map((s,i) => (
              <div key={i} className="glass-card" style={{ padding:'2rem 1.5rem', textAlign:'center', position:'relative' }}>
                <div style={{ position:'absolute', top:0, left:0, right:0, height:2, background:`linear-gradient(90deg,${s.color},transparent)` }} />
                <span style={{ fontFamily:'Space Mono,monospace', fontSize:'0.75rem', color:'#607090' }}>{s.num}</span>
                <div style={{ fontSize:'2rem', margin:'0.75rem 0' }}>{s.icon}</div>
                <h4 style={{ color:s.color, fontSize:'1rem', marginBottom:'0.5rem' }}>{s.title}</h4>
                <p style={{ color:'var(--text-secondary)', fontSize:'0.82rem', lineHeight:1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding:'80px 0', background:'linear-gradient(135deg,#001133,#001A00)' }}>
        <div className="container" style={{ textAlign:'center' }}>
          <h2 style={{ fontSize:'clamp(1.6rem,3vw,2.4rem)', marginBottom:'1rem' }}>
            Request Your <span className="gold-text">Proof of Hash</span>
          </h2>
          <p style={{ color:'var(--text-secondary)', marginBottom:'2rem' }}>
            Upload your data and receive an instant SHA-256 receipt via email. Sealed, verified, immutable.
          </p>
          <div style={{ display:'flex', gap:'1rem', justifyContent:'center' }}>
            <Link href="/contact" className="btn-primary" style={{ padding:'16px 40px' }}>🔐 Request Audit</Link>
            <a href="https://lenuda.librae.work" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding:'15px 39px' }}>
              🔗 LENUDA Platform
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
