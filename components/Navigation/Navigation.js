'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/cahaya', label: 'CAHAYA' },
  { href: '/lenuda', label: 'LENUDA' },
  { href: '/orbit-and-aerial', label: 'Orbit & Aerial' },
  { href: '/truth-and-seal', label: 'Truth & Seal' },
  { href: '/docs', label: 'Documentation' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''} style={{ padding: '0' }}>
        {/* Gold top line — always visible brand signal */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #D4AF37 20%, #D4AF37 80%, transparent)',
          opacity: scrolled ? 1 : 0.5,
          transition: 'opacity 0.4s',
          zIndex: 10,
        }} />

        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '72px',
        }}>
          {/* Logo + Wordmark */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            {/* SVG Icon */}
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              overflow: 'hidden',
              border: '1px solid rgba(212,175,55,0.35)',
              background: '#000A1A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <Image
                src="/librae-logo.svg"
                alt="Librae AI Labs"
                width={40}
                height={40}
                style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                priority
              />
            </div>

            {/* Text lockup */}
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
              <span style={{
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 800,
                fontSize: '1.15rem',
                background: 'linear-gradient(135deg, #D4AF37, #F0D060)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.3px',
              }}>LIBRAE AI LABS</span>
              <span style={{
                fontSize: '0.6rem',
                color: '#2E8B57',
                fontFamily: 'Space Mono, monospace',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                fontWeight: 400,
                opacity: 0.85,
              }}>Voice of Nature</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2px', overflowX: 'auto', msOverflowStyle: 'none', scrollbarWidth: 'none' }} className="desktop-nav">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} style={{
                padding: '8px 11px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.3px',
                color: pathname === link.href ? '#D4AF37' : '#A0B0CC',
                background: pathname === link.href ? 'rgba(212,175,55,0.1)' : 'transparent',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.target.style.color = '#D4AF37'; e.target.style.background = 'rgba(212,175,55,0.08)'; }}
                onMouseLeave={e => { if (pathname !== link.href) { e.target.style.color = '#A0B0CC'; e.target.style.background = 'transparent'; } }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* BAYU Status + Talk Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }} className="nav-right">
            {/* System Online badge */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '5px 12px',
              background: 'rgba(46,139,87,0.08)',
              border: '1px solid rgba(46,139,87,0.2)',
              borderRadius: '100px',
              fontSize: '0.68rem',
              color: '#2E8B57',
              fontFamily: 'Space Mono, monospace',
              letterSpacing: '0.5px',
              whiteSpace: 'nowrap',
            }} className="status-badge">
              <span style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#2E8B57',
                display: 'inline-block',
                animation: 'pulse-online 2s infinite',
              }} />
              Systems Online
            </div>

            {/* Talk to BAYU CTA */}
            <Link
              href="/contact"
              className="btn-bayu"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '9px 20px',
                background: 'rgba(74,158,255,0.1)',
                border: '1px solid rgba(74,158,255,0.35)',
                borderRadius: '8px',
                color: '#4A9EFF',
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 700,
                fontSize: '0.8rem',
                textDecoration: 'none',
                transition: 'all 0.25s ease',
                letterSpacing: '0.3px',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(74,158,255,0.18)';
                e.currentTarget.style.borderColor = 'rgba(74,158,255,0.6)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(74,158,255,0.2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(74,158,255,0.1)';
                e.currentTarget.style.borderColor = 'rgba(74,158,255,0.35)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              🤖 Talk to BAYU
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: 'none',
              background: 'none', border: '1px solid rgba(212,175,55,0.3)',
              borderRadius: '8px', padding: '8px', cursor: 'pointer', color: '#D4AF37',
            }}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen
                ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
              }
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} style={{
          background: 'rgba(0,10,26,0.98)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(212,175,55,0.1)',
          padding: menuOpen ? '1rem 2rem 2rem' : '0 2rem',
          maxHeight: menuOpen ? '500px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1), padding 0.3s ease',
        }}>
          {navLinks.map(link => (
            <Link key={link.href} href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                padding: '12px 0',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                color: pathname === link.href ? '#D4AF37' : '#A0B0CC',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
              }}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setMenuOpen(false)}
            style={{
              marginTop: '1.25rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '10px 22px',
              background: 'rgba(74,158,255,0.1)',
              border: '1px solid rgba(74,158,255,0.35)',
              borderRadius: '8px',
              color: '#4A9EFF',
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 700,
              fontSize: '0.9rem',
              textDecoration: 'none',
            }}>
            🤖 Talk to BAYU
          </Link>
        </div>

        <style>{`
          @keyframes pulse-online {
            0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(46,139,87,0.5); }
            50% { opacity: 0.7; box-shadow: 0 0 0 4px rgba(46,139,87,0); }
          }
          @media (max-width: 1100px) {
            .desktop-nav { display: none !important; }
            .mobile-menu-btn { display: flex !important; }
            .status-badge { display: none !important; }
          }
          @media (max-width: 720px) {
            .nav-right { display: none; }
            .mobile-menu-btn { display: flex !important; }
          }
        `}</style>
      </nav>
    </>
  );
}
