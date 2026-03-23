'use client';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const Globe = dynamic(() => import('@/components/Globe/Globe'), { ssr: false, loading: () => <div style={{ width:'100%', height:'100%', background:'radial-gradient(circle at 60% 40%, #001A33, #000A1A)' }} /> });

const trinityCards = [
  {
    icon: '🔱',
    color: '#D4AF37',
    title: 'Truth',
    subtitle: 'The Memory of the Land',
    desc: 'Every boundary, every tree, every hectare holds a story. We convert KML, GeoJSON, and land deeds into immutable records — preserving what the land has always known.',
    tags: ['SHA-256', 'Merkle Trees', 'Polygon L2'],
  },
  {
    icon: '🧠',
    color: '#2E8B57',
    title: 'Intelligence',
    subtitle: 'The Speed of Understanding',
    desc: 'Nature does not wait. What once required 8 weeks of human interpretation is now understood in minutes through a multi-spectral observation layer — where no deforestation, emission, or anomaly remains unseen.',
    tags: ['Gemini 3.1', 'Vertex AI', 'Earth Engine'],
  },
  {
    icon: '🕊️',
    color: '#4A9EFF',
    title: 'Peace',
    subtitle: 'The Outcome of Alignment',
    desc: 'When humans align with nature\'s laws, prosperity follows. We bridge small farmers to global ESG and EUDR standards — unlocking access, trust, and carbon value.',
    tags: ['EUDR', 'Gold Standard', 'Carbon Markets'],
  },
];

function AnimatedCounter({ target, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        let start = 0;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(timer); }
          else setCount(Math.floor(start));
        }, 16);
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function HomePage() {
  return (
    <>
      {/* ──────── HERO ──────── */}
      <section className="hero-bg" style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        position: 'relative', overflow: 'hidden', paddingTop: '72px',
      }}>
        <div className="grid-bg" style={{ position:'absolute', inset:0, pointerEvents:'none' }} />
        <div className="container" style={{
          display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '3rem',
          alignItems: 'center', position: 'relative', zIndex: 1,
        }}>
          <div>
            <div className="badge" style={{ marginBottom: '1.5rem' }}>
              🌍 The Digital Twin of Earth's Integrity
            </div>
            <h1 style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.8rem)', lineHeight: 1.08,
              marginBottom: '1.5rem', fontFamily: 'Outfit, sans-serif', fontWeight: 800,
            }}>
              Intelligence for{' '}<span className="gold-text">Peace.</span>
              <br />Infrastructure for{' '}<span className="gradient-text">Truth.</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem', maxWidth: 520 }}>
              Earth is constantly speaking — through forests, oceans, and atmosphere.
              We translate its signals using the Copernicus Constellation and cryptographic integrity — securing the future of small farmers, sovereign nations, and global estates.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
              <Link href="/constellation" className="btn-primary">🏔️ Explore the Living Map</Link>
              <Link href="/contact" className="btn-secondary">Become EUDR Ready</Link>
            </div>
            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }}>
              {[
                { value: 3, suffix:'M+', label: 'Hectares Monitored' },
                { value: 5, suffix:' min', label: 'Report Generation' },
                { value: 30, suffix:'g', label: 'CO₂ Per Assessment' },
              ].map((stat, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div className="stat-number"><AnimatedCounter target={stat.value} suffix={stat.suffix} /></div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Globe */}
          <div style={{ height: '600px', position: 'relative' }}>
            <Globe />
          </div>
        </div>
      </section>

      {/* ──────── DECLARATION ──────── */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(180deg,#000A1A,#001133)', position: 'relative' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
          <div className="accent-line" style={{ margin: '0 auto 2rem' }} />
          <p style={{
            color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: 2, letterSpacing: '0.3px',
          }}>
            "We are not a software company.
            <br />We are not a consultancy.
            <br />We are not an analytics platform."
          </p>
          <h2 style={{
            fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', margin: '2rem 0',
            color: '#D4AF37', fontFamily: 'Outfit,sans-serif', fontWeight: 800,
          }}>
            We are infrastructure for environmental truth.
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 2 }}>
            Where systems fail to see, we measure.
            <br />Where truth is questioned, we verify.
            <br />Where nature is ignored, we enforce.
          </p>
        </div>
      </section>

      {/* ──────── TRINITY ──────── */}
      <section className="section-padding grid-bg" style={{ background: '#000A1A' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="accent-line" style={{ margin:'0 auto 1.5rem' }} />
            <h2 className="section-title">Three Layers of Truth</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2rem' }}>
            {trinityCards.map((card, i) => (
              <div key={i} className="glass-card" style={{ padding: '2.5rem', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${card.color},transparent)` }} />
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{card.icon}</div>
                <h3 style={{ color: card.color, fontSize: '1.3rem', marginBottom: '0.25rem' }}>{card.title}</h3>
                <p style={{ color: '#607090', fontSize: '0.8rem', fontStyle: 'italic', marginBottom: '1rem' }}>{card.subtitle}</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>{card.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {card.tags.map(tag => (
                    <span key={tag} style={{ padding: '4px 10px', background: `${card.color}12`, border: `1px solid ${card.color}25`, borderRadius: 100, fontSize: '0.7rem', color: card.color, fontWeight: 600 }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── THE PROBLEM ──────── */}
      <section className="section-padding" style={{ background: 'linear-gradient(180deg,#001133,#000A1A)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div className="accent-line" />
              <h2 className="section-title">The Broken Balance</h2>
              <blockquote style={{ fontSize: '1.05rem', lineHeight: 1.9 }}>
                "A system meant to protect the Earth has become inaccessible to those who depend on it most."
              </blockquote>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginTop: '1.5rem' }}>
                Traditional ESG compliance can cost up to <strong style={{ color: '#FF6B6B' }}>$10,000 USD</strong> — an impossible burden for a farmer with 5 rai of land.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginTop: '1rem' }}>
                Across Southeast Asia, millions of hectares risk exclusion from global markets — not due to wrongdoing, but due to complexity.
              </p>
              <p style={{ color: '#D4AF37', fontWeight: 700, fontFamily: 'Outfit,sans-serif', fontSize: '1.1rem', marginTop: '1.5rem' }}>
                The imbalance is clear. We restore it.
              </p>
            </div>
            <div>
              <div className="accent-line" />
              <h3 style={{ color: '#2E8B57', fontFamily: 'Outfit,sans-serif', fontSize: '1.3rem', marginBottom: '1.5rem' }}>How We Restore It</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
                We scale integrity — processing millions of estates while preserving precision at the individual polygon level.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { title: 'Batch Processing', desc: '100,000+ polygons in a single pipeline run.', color: '#D4AF37' },
                  { title: 'Individual Precision', desc: 'Every farmer\'s 5-rai plot receives the same scientific rigor as a 50,000-hectare estate.', color: '#2E8B57' },
                  { title: 'Democratized Access', desc: '$5/hectare replaces $10,000 consultancy.', color: '#4A9EFF' },
                ].map((s, i) => (
                  <div key={i} className="glass-card" style={{ padding: '1.25rem 1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ width: 6, height: 6, borderRadius: 3, background: s.color, flexShrink: 0, marginTop: 8 }} />
                    <div>
                      <strong style={{ color: s.color, fontSize: '0.9rem' }}>{s.title}</strong>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.6 }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────── TECHNICAL SOVEREIGNTY ──────── */}
      <section className="section-padding grid-bg" style={{ background: '#000A1A' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="accent-line" style={{ margin:'0 auto 1.5rem' }} />
            <h2 className="section-title">The Infrastructure of Truth</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', fontStyle: 'italic', maxWidth: 600, margin: '0 auto' }}>
              Nature cannot be negotiated with.
              It can only be measured, verified, and respected.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '2rem', marginBottom: '2rem' }}>
            <div className="glass-card" style={{ padding: '2.5rem', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg,#4A9EFF,transparent)' }} />
              <h3 style={{ color: '#4A9EFF', marginBottom: '0.5rem', fontSize: '1.2rem' }}>🛰️ Satellite Intelligence</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                We listen through multiple lenses — radar, optical, atmospheric — capturing truth beyond human visibility. A multi-spectral observation layer where no deforestation, emission, or anomaly remains unseen.
              </p>
            </div>
            <div className="glass-card" style={{ padding: '2.5rem', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg,#D4AF37,transparent)' }} />
              <h3 style={{ color: '#D4AF37', marginBottom: '0.5rem', fontSize: '1.2rem' }}>🔐 Cryptographic Integrity</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                Every dataset is sealed using SHA-256 and structured into Merkle Trees. Once recorded, truth cannot be altered — only verified. No greenwashing. No manipulation. Only verifiable reality.
              </p>
            </div>
          </div>
          {/* Trust Trigger */}
          <div style={{ padding: '1.5rem 2rem', background: 'rgba(212,175,55,0.05)', border: '1px solid rgba(212,175,55,0.15)', borderRadius: 12, textAlign: 'center' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontStyle: 'italic' }}>
              "A report generated within Librae is not a claim. It is a <strong style={{ color: '#D4AF37' }}>verifiable position</strong> — defensible across jurisdictions."
            </p>
          </div>
        </div>
      </section>

      {/* ──────── VOICE OF NATURE ──────── */}
      <section className="section-padding" style={{ background: 'linear-gradient(180deg,#001133,#000A1A)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div className="accent-line" />
              <p style={{ color: '#607090', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>
                Librae Environment Nature Unified Digital Asset
              </p>
              <h2 className="section-title">
                <span className="gold-text">LENUDA</span> — The Voice of Nature
              </h2>
              <div style={{ marginBottom: '2rem' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 2, fontStyle: 'italic' }}>
                  "The forest does not protest when it is cleared.
                  <br />The ocean does not testify when it is polluted.
                  <br />The atmosphere does not warn when it is poisoned."
                </p>
                <p style={{ color: '#D4AF37', fontSize: '1rem', fontWeight: 700, marginTop: '1rem' }}>
                  "Yet none of them are silent."
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.8, marginTop: '1rem' }}>
                  They speak through patterns, signals, and imbalance.
                  We are the system that listens — and ensures they are heard.
                </p>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                LENUDA is not a tokenization layer. It is a <strong style={{ color: '#D4AF37' }}>standardization of verified natural truth</strong>. Each asset represents a state of reality — measured, confirmed, and cryptographically sealed.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="https://lenuda.librae.work" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  🔗 Explore LENUDA
                </a>
                <Link href="/constellation" className="btn-secondary">🛰️ See the Constellation</Link>
              </div>
            </div>
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                {[
                  { icon: '🛡️', label: 'Enforce', desc: 'Accountability where harm exists', color: '#D4AF37' },
                  { icon: '🌿', label: 'Protect', desc: 'Ecosystems where balance remains', color: '#2E8B57' },
                  { icon: '🔐', label: 'Seal', desc: 'Every truth with cryptographic proof', color: '#7B4AFF' },
                  { icon: '🌍', label: 'Translate', desc: 'Earth\'s signals into human action', color: '#4A9EFF' },
                ].map((r, i) => (
                  <div key={i} className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{r.icon}</div>
                    <h4 style={{ color: r.color, fontSize: '0.95rem', marginBottom: '0.25rem' }}>{r.label}</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: 1.5 }}>{r.desc}</p>
                  </div>
                ))}
              </div>
              {/* Closing line */}
              <div style={{ marginTop: '1.5rem', padding: '1.25rem', background: 'rgba(212,175,55,0.05)', border: '1px solid rgba(212,175,55,0.15)', borderRadius: 12 }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7, textAlign: 'center' }}>
                  We are not observers. We are the voice nature never had — and the enforcement it always needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────── CLOSING ──────── */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg,#001133,#001A00)', position: 'relative' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 2, maxWidth: 600, margin: '0 auto 2rem', fontStyle: 'italic' }}>
            "We do not generate data.
            <br />We reveal what the Earth has already recorded."
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/intelligence" className="btn-primary" style={{ padding: '16px 40px' }}>🧠 Explore the Intelligence Suite</Link>
            <Link href="/contact" className="btn-secondary" style={{ padding: '15px 39px' }}>🌿 Connect with Librae</Link>
          </div>
        </div>
      </section>
    </>
  );
}
