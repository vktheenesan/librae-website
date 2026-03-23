'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/cryptographic-seal', label: 'The Seal' },
  { href: '/ground-truth', label: 'Ground-Truth' },
  { href: '/aerial-intelligence', label: 'Aerial' },
  { href: '/constellation', label: 'Constellation' },
  { href: '/intelligence', label: 'Intelligence' },
  { href: '/formula', label: 'Formula' },
  { href: '/gangai', label: 'GANGAI' },
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
    <nav className={scrolled ? 'scrolled' : ''} style={{ padding: '0' }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '72px',
      }}>
        {/* Logo */}
        <Link href="/" style={{ display:'flex', alignItems:'center', gap:'12px', textDecoration:'none' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            overflow: 'hidden',
            border: '1px solid rgba(212,175,55,0.4)',
          }}>
            <Image src="/logo.jpg" alt="Librae" width={40} height={40} style={{ objectFit:'cover', width:'100%', height:'100%' }} />
          </div>
          <span style={{
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 800,
            fontSize: '1.4rem',
            background: 'linear-gradient(135deg, #D4AF37, #F0D060)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.5px',
          }}>LIBRAE</span>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="desktop-nav">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} style={{
              padding: '8px 12px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '0.82rem',
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

        {/* CTA */}
        <Link href="/contact" className="btn-primary" style={{ fontSize: '0.82rem', padding: '10px 22px' }} suppressHydrationWarning>
          Get EUDR Ready
        </Link>

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
      {menuOpen && (
        <div style={{
          background: 'rgba(0,10,26,0.98)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(212,175,55,0.1)',
          padding: '1rem 2rem 2rem',
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
          <Link href="/contact" className="btn-primary" onClick={() => setMenuOpen(false)}
            style={{ marginTop: '1rem', display: 'inline-flex', fontSize:'0.9rem' }}>
            Get EUDR Ready
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (max-width: 640px) {
          nav .btn-primary { display: none; }
        }
      `}</style>
    </nav>
  );
}
