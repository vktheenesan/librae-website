'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(180deg, #000A1A 0%, #000510 100%)',
      borderTop: '1px solid rgba(212,175,55,0.15)',
      padding: '75px 0 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Ambient background glow */}
      <div style={{
        position: 'absolute',
        bottom: '-100px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '700px',
        height: '350px',
        background: 'radial-gradient(ellipse, rgba(212,175,55,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Top grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr', gap: '3rem', marginBottom: '3.5rem' }}>
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem', textDecoration: 'none' }}>
              <div style={{
                width: 44,
                height: 44,
                borderRadius: 10,
                overflow: 'hidden',
                border: '1px solid rgba(212,175,55,0.4)',
                background: 'radial-gradient(circle, #001f4d 0%, #000A1A 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: '0 0 15px rgba(212, 175, 55, 0.2)',
              }}>
                <Image src="/librae-logo-nav.png" alt="LIBRAE AI LABS" width={44} height={44} style={{ objectFit: 'contain', width: '90%', height: '90%' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
                <span style={{
                  fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.1rem',
                  background: 'linear-gradient(135deg,#D4AF37,#F0D060)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>LIBRAE AI LABS</span>
                <span style={{ fontSize: '0.62rem', color: '#10b981', fontFamily: 'Space Mono, monospace', letterSpacing: '1.2px', textTransform: 'uppercase', fontWeight: 700 }}>
                  Sovereign Infrastructure
                </span>
              </div>
            </Link>

            <p style={{ color: '#8090b0', fontSize: '0.85rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>
              The Sovereign Artificial Intelligence Engine for National Security, Precision Agriculture, and Autonomous Edge Computing.
            </p>

            {/* Entity stamp */}
            <div style={{
              display: 'flex', flexDirection: 'column', gap: '4px',
              padding: '10px 14px', background: 'rgba(212,175,55,0.06)',
              border: '1px solid rgba(212,175,55,0.2)', borderRadius: '8px',
              fontFamily: 'Space Mono, monospace', fontSize: '0.68rem', color: '#CBD5E1',
              marginBottom: '1.25rem',
            }}>
              <span style={{ color: '#D4AF37', fontWeight: 700 }}>LIBRAE AI LABS SDN. BHD.</span>
              <span style={{ color: '#94A3B8' }}>Co. Reg. No. 202601025362 (1687459-T)</span>
              <span style={{ color: '#64748B', fontSize: '0.62rem' }}>No. 21, Jalan Melur 4, Taman Cempaka, 31000 Batu Gajah, Perak, Malaysia.</span>
            </div>

            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {['SE(3) Continuous', '0% Hallucination', 'SHA-256 Merkle', 'SIRIM ISO Ready'].map(b => (
                <span key={b} style={{
                  padding: '3px 9px', background: 'rgba(212,175,55,0.06)',
                  border: '1px solid rgba(212,175,55,0.2)', borderRadius: 100,
                  fontSize: '0.65rem', color: '#D4AF37', fontWeight: 600, fontFamily: 'Space Mono, monospace',
                }}>
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Sovereign Platforms */}
          <div>
            <h5 style={{ color: '#D4AF37', marginBottom: '1rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1.5px', fontFamily: 'Space Mono, monospace' }}>Sovereign Engines</h5>
            {[
              { href: '/cahaya', label: 'CAHAYA (MPOB Edition)' },
              { href: '/lenuda', label: 'LENUDA (Cloud Twin)' },
              { href: '/lei', label: 'LEI (Drone Intelligence)' },
              { href: '/lia', label: 'LIA (Cyber-Immunity)' },
              { href: '/#rd-pipeline', label: '29 Sovereign Domains' },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{
                display: 'block', color: '#8090b0', textDecoration: 'none',
                fontSize: '0.82rem', marginBottom: '0.6rem', transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.target.style.color = '#D4AF37'}
                onMouseLeave={e => e.target.style.color = '#8090b0'}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Technical Due Diligence */}
          <div>
            <h5 style={{ color: '#D4AF37', marginBottom: '1rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1.5px', fontFamily: 'Space Mono, monospace' }}>Due Diligence</h5>
            {[
              { href: '/#empirical-proof', label: 'Empirical Receipts' },
              { href: '/#whitepapers', label: 'White Papers (PDF)' },
              { href: '/compare', label: 'Librae vs Palantir/ESRI' },
              { href: '/docs', label: 'System Documentation' },
              { href: '/about', label: 'Institutional Profile' },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{
                display: 'block', color: '#8090b0', textDecoration: 'none',
                fontSize: '0.82rem', marginBottom: '0.6rem', transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.target.style.color = '#D4AF37'}
                onMouseLeave={e => e.target.style.color = '#8090b0'}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Direct Leadership & Gateway */}
          <div>
            <h5 style={{ color: '#D4AF37', marginBottom: '1rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1.5px', fontFamily: 'Space Mono, monospace' }}>Direct Inquiries</h5>
            <p style={{ color: '#CBD5E1', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.25rem' }}>
              Theenesan VK Kunjaayappan
            </p>
            <p style={{ color: '#64748B', fontSize: '0.75rem', marginBottom: '0.75rem', fontFamily: 'Space Mono, monospace' }}>
              Founder & System Architect
            </p>
            
            <a href="mailto:theenesanvk@librae.work" style={{ color: '#38bdf8', fontSize: '0.82rem', textDecoration: 'none', display: 'block', marginBottom: '0.4rem', fontFamily: 'Space Mono, monospace' }}>
              ✉ theenesanvk@librae.work
            </a>
            <a href="tel:+60182639800" style={{ color: '#10b981', fontSize: '0.82rem', textDecoration: 'none', display: 'block', marginBottom: '0.75rem', fontFamily: 'Space Mono, monospace' }}>
              📞 +6018-2639800
            </a>

            <div style={{ color: '#64748B', fontSize: '0.75rem', lineHeight: 1.5, marginTop: '1rem' }}>
              🇲🇾 <strong>HQ:</strong> Batu Gajah, Perak & KL, Malaysia<br />
              🌐 <strong>Web:</strong> https://librae.work
            </div>
          </div>
        </div>

        {/* Ambient glow line above bottom bar */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.25) 30%, rgba(16,185,129,0.2) 70%, transparent)',
          marginBottom: '1.5rem',
        }} />

        {/* Bottom bar */}
        <div style={{ padding: '0 0 28px' }}>
          <p style={{
            color: '#D4AF37', fontWeight: 600, fontStyle: 'italic',
            fontSize: '0.95rem', textAlign: 'center', marginBottom: '1.5rem', letterSpacing: '0.3px',
          }}>
            "Truth exists with or without us. Librae ensures it cannot be ignored."
          </p>
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', flexWrap: 'wrap', gap: '1rem',
          }}>
            <p style={{ color: '#64748B', fontSize: '0.75rem', fontFamily: 'Space Mono, monospace' }}>
              © 2026 LIBRAE AI LABS SDN. BHD. (Co. Reg. No. 202601025362 / 1687459-T). All Rights Reserved.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              {['Privacy Policy', 'Terms of Sovereignty', 'Data Integrity Statement', 'ISO 42001 Framework'].map(t => (
                <span key={t} style={{ color: '#64748B', fontSize: '0.75rem', cursor: 'pointer', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = '#D4AF37'}
                  onMouseLeave={e => e.target.style.color = '#64748B'}>
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
