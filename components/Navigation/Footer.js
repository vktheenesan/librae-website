'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(180deg, #000A1A 0%, #000510 100%)',
      borderTop: '1px solid rgba(212,175,55,0.15)',
      padding: '60px 0 0',
    }}>
      <div className="container">
        {/* Top */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '3rem', marginBottom: '3rem' }}>
          {/* Brand */}
          <div style={{ gridColumn: '1 / 2' }}>
            <div style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'1rem' }}>
              <div style={{ width:36, height:36, borderRadius:8, overflow:'hidden', border:'1px solid rgba(212,175,55,0.4)' }}>
                <Image src="/logo.jpg" alt="Librae" width={36} height={36} style={{ objectFit:'cover', width:'100%', height:'100%' }} />
              </div>
              <span style={{ fontFamily:'Outfit,sans-serif', fontWeight:800, fontSize:'1.3rem',
                background:'linear-gradient(135deg,#D4AF37,#F0D060)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
                LIBRAE
              </span>
            </div>
            <p style={{ color:'#607090', fontSize:'0.85rem', lineHeight:1.7, marginBottom:'1rem' }}>
              Intelligence for Peace.<br />Infrastructure for Truth.
            </p>
            <div style={{ display:'flex', gap:'8px', flexWrap:'wrap' }}>
              {['SHA-256', 'Polygon L2', 'EUDR Ready'].map(b => (
                <span key={b} style={{ padding:'3px 10px', background:'rgba(212,175,55,0.08)',
                  border:'1px solid rgba(212,175,55,0.2)', borderRadius:100, fontSize:'0.7rem',
                  color:'#D4AF37', fontWeight:600 }}>
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <h5 style={{ color:'#D4AF37', marginBottom:'1rem', fontSize:'0.8rem', textTransform:'uppercase', letterSpacing:'1px' }}>Platform</h5>
            {[
              { href:'/', label:'Homepage' },
              { href:'/about', label:'About Us' },
              { href:'/cryptographic-seal', label:'Cryptographic Seal' },
              { href:'/ground-truth', label:'Ground-Truth' },
              { href:'/aerial-intelligence', label:'Aerial Intelligence' },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ display:'block', color:'#607090', textDecoration:'none',
                fontSize:'0.85rem', marginBottom:'0.5rem', transition:'color 0.2s' }}
                onMouseEnter={e => e.target.style.color='#D4AF37'}
                onMouseLeave={e => e.target.style.color='#607090'}>
                {l.label}
              </Link>
            ))}
          </div>

          <div>
            <h5 style={{ color:'#D4AF37', marginBottom:'1rem', fontSize:'0.8rem', textTransform:'uppercase', letterSpacing:'1px' }}>Intelligence</h5>
            {[
              { href:'/constellation', label:'Constellation' },
              { href:'/intelligence', label:'AI Modules' },
              { href:'/formula', label:'The Formula' },
              { href:'/contact', label:'Global Gateway' },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ display:'block', color:'#607090', textDecoration:'none',
                fontSize:'0.85rem', marginBottom:'0.5rem', transition:'color 0.2s' }}
                onMouseEnter={e => e.target.style.color='#D4AF37'}
                onMouseLeave={e => e.target.style.color='#607090'}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h5 style={{ color:'#D4AF37', marginBottom:'1rem', fontSize:'0.8rem', textTransform:'uppercase', letterSpacing:'1px' }}>Connect</h5>
            <p style={{ color:'#607090', fontSize:'0.82rem', marginBottom:'0.5rem' }}>🇲🇾 Batu Gajah, Perak & KL</p>
            <p style={{ color:'#607090', fontSize:'0.82rem', marginBottom:'0.5rem' }}>🇺🇸 USA Corporate</p>
            <p style={{ color:'#607090', fontSize:'0.82rem', marginBottom:'1rem' }}>🇮🇳 Punjab & Haryana</p>
            <a href="mailto:theenesanvk@librae.work" style={{ color:'#D4AF37', fontSize:'0.82rem', textDecoration:'none', display:'block', marginBottom:'0.4rem' }}>
              theenesanvk@librae.work
            </a>
            <a href="mailto:admin@librae.work" style={{ color:'#607090', fontSize:'0.82rem', textDecoration:'none' }}>
              admin@librae.work
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(212,175,55,0.08)',
          padding: '30px 0 20px',
        }}>
          <p style={{ color:'#D4AF37', fontWeight:600, fontStyle:'italic', fontSize:'1rem', textAlign:'center', marginBottom:'1.5rem', letterSpacing:'0.5px' }}>
            "Truth exists with or without us. Librae ensures it cannot be ignored."
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}>
            <p style={{ color:'#607090', fontSize:'0.8rem' }}>
              © 2026 Librae. All Rights Reserved. | Built with Three.js · D3.js · Google Cloud · Polygon L2
            </p>
            <div style={{ display:'flex', gap:'1.5rem' }}>
              {['Privacy Policy', 'Terms of Sovereignty', 'Data Integrity Statement'].map(t => (
                <span key={t} style={{ color:'#607090', fontSize:'0.8rem', cursor:'pointer',
                  transition:'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color='#D4AF37'}
                  onMouseLeave={e => e.target.style.color='#607090'}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
