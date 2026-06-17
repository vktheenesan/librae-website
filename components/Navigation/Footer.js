'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(180deg, #000A1A 0%, #000510 100%)',
      borderTop: '1px solid rgba(212,175,55,0.12)',
      padding: '70px 0 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Ambient background glow */}
      <div style={{
        position: 'absolute',
        bottom: '-100px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '300px',
        background: 'radial-gradient(ellipse, rgba(212,175,55,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Top grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: '3rem', marginBottom: '3.5rem' }}>
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem', textDecoration: 'none' }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, overflow: 'hidden', border: '1px solid rgba(212,175,55,0.35)', background: '#000A1A', flexShrink: 0 }}>
                <Image src="/librae-logo.svg" alt="Librae AI Labs" width={40} height={40} style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
                <span style={{
                  fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.05rem',
                  background: 'linear-gradient(135deg,#D4AF37,#F0D060)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>LIBRAE AI LABS</span>
                <span style={{ fontSize: '0.58rem', color: '#2E8B57', fontFamily: 'Space Mono, monospace', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                  Voice of Nature
                </span>
              </div>
            </Link>

            <p style={{ color: '#607090', fontSize: '0.85rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>
              Intelligence for Peace.<br />Infrastructure for Truth.
            </p>

            {/* Entity stamp */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '4px 10px', background: 'rgba(212,175,55,0.05)',
              border: '1px solid rgba(212,175,55,0.15)', borderRadius: '6px',
              fontFamily: 'Space Mono, monospace', fontSize: '0.62rem', color: '#607090',
              marginBottom: '1rem', letterSpacing: '0.5px',
            }}>
              🏢 Librae AI Labs Sdn Bhd · Malaysia
            </div>

            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {['SHA-256', 'Polygon L2', 'EUDR Ready'].map(b => (
                <span key={b} style={{
                  padding: '3px 10px', background: 'rgba(212,175,55,0.06)',
                  border: '1px solid rgba(212,175,55,0.18)', borderRadius: 100,
                  fontSize: '0.68rem', color: '#D4AF37', fontWeight: 600,
                }}>
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Platform links */}
          <div>
            <h5 style={{ color: '#D4AF37', marginBottom: '1rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Platform</h5>
            {[
              { href: '/', label: 'Homepage' },
              { href: '/about', label: 'About Us' },
              { href: '/cahaya', label: 'CAHAYA' },
              { href: '/lenuda', label: 'LENUDA' },
              { href: '/orbit-and-aerial', label: 'Orbit & Aerial' },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{
                display: 'block', color: '#607090', textDecoration: 'none',
                fontSize: '0.82rem', marginBottom: '0.5rem', transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.target.style.color = '#D4AF37'}
                onMouseLeave={e => e.target.style.color = '#607090'}>
                {l.label}
              </Link>
            ))}
          </div>

          <div>
            <h5 style={{ color: '#D4AF37', marginBottom: '1rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Intelligence</h5>
            {[
              { href: '/truth-and-seal', label: 'Truth & Seal' },
              { href: '/compare', label: 'Librae vs Palantir/ESRI' },
              { href: '/intelligence-overview', label: 'Intelligence Overview' },
              { href: '/docs', label: 'Documentation' },
              { href: '/contact', label: 'Global Gateway' },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{
                display: 'block', color: '#607090', textDecoration: 'none',
                fontSize: '0.82rem', marginBottom: '0.5rem', transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.target.style.color = '#D4AF37'}
                onMouseLeave={e => e.target.style.color = '#607090'}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Connect */}
          <div>
            <h5 style={{ color: '#D4AF37', marginBottom: '1rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Connect</h5>
            <p style={{ color: '#607090', fontSize: '0.8rem', marginBottom: '0.4rem' }}>🇲🇾 Batu Gajah, Perak & KL</p>
            <p style={{ color: '#607090', fontSize: '0.8rem', marginBottom: '0.4rem' }}>🇺🇸 USA Corporate</p>
            <p style={{ color: '#607090', fontSize: '0.8rem', marginBottom: '1rem' }}>🇮🇳 Punjab & Haryana</p>
            <a href="mailto:theenesanvk@librae.work" style={{ color: '#D4AF37', fontSize: '0.8rem', textDecoration: 'none', display: 'block', marginBottom: '0.5rem' }}>
              theenesanvk@librae.work
            </a>
            <a href="https://www.linkedin.com/in/theenesan-kunjaayappan-6bb064270/" target="_blank" rel="noopener noreferrer" style={{ color: '#4A9EFF', fontSize: '0.8rem', textDecoration: 'none' }}>
              in/theenesan-kunjaayappan
            </a>
          </div>
        </div>

        {/* Ambient glow line above bottom bar */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.25) 30%, rgba(46,139,87,0.2) 70%, transparent)',
          marginBottom: '1.5rem',
        }} />

        {/* Bottom bar */}
        <div style={{ padding: '0 0 28px' }}>
          <p style={{
            color: '#D4AF37', fontWeight: 600, fontStyle: 'italic',
            fontSize: '0.98rem', textAlign: 'center', marginBottom: '1.5rem', letterSpacing: '0.3px',
          }}>
            "Truth exists with or without us. Librae ensures it cannot be ignored."
          </p>
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', flexWrap: 'wrap', gap: '1rem',
          }}>
            <p style={{ color: '#607090', fontSize: '0.75rem', fontFamily: 'Space Mono, monospace' }}>
              © 2026 Librae AI Labs Sdn Bhd. All Rights Reserved.<br />
              <span style={{ fontSize: '0.65rem', opacity: 0.6 }}>Next.js · Supabase · Three.js · D3.js · Polygon L2</span>
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              {['Privacy Policy', 'Terms of Sovereignty', 'Data Integrity Statement'].map(t => (
                <span key={t} style={{ color: '#607090', fontSize: '0.75rem', cursor: 'pointer', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = '#D4AF37'}
                  onMouseLeave={e => e.target.style.color = '#607090'}>
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
