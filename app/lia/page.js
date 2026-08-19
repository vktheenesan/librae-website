import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'LIA — Sovereign Cyber-Immunity & Deterministic Governance for Banks, Machines & AI Agents | Librae AI Labs',
  description: 'Librae Immune Agency (LIA) is a deterministic cyber-immunity and governance engine engineered for banks, financial institutions, autonomous machines, and AI agents. Bank Negara Malaysia (BNM) Sandbox ready with 100% output determinism, eBPF kernel telemetry, and Merkle DAG non-repudiation.',
  keywords: [
    'LIA', 'Librae Immune Agency', 'Banking AI Security', 'BNM Sandbox AI',
    'Bank Negara RMiT', 'AI Agent Cybersecurity', 'Deterministic AI Governance',
    'Machine Cyber-Immunity', 'eBPF kernel telemetry', 'Merkle SHA-256 proofs', 'Zero Trust AI Security'
  ],
  openGraph: {
    title: 'LIA — Cyber-Immunity for Banks, Machines & AI Agents | Librae AI Labs',
    description: 'Deterministic 5-organ cyber-immunity architecture for enterprise AI agents, machines, and banking sandbox compliance.',
    url: 'https://librae.work/lia',
    images: [{ url: 'https://librae.work/og-image.png', width: 1200, height: 630, alt: 'LIA Sovereign Cyber-Immunity for Banks and AI Agents' }]
  }
};

const organs = [
  {
    name: '1. Vision (eBPF Kernel Telemetry)',
    icon: '👁️',
    tag: 'Kernel Observability',
    desc: 'Deep kernel-level observation via eBPF probes that monitor syscalls, socket buffers, and memory transitions without agent instrumentation overhead.',
    color: '#38bdf8'
  },
  {
    name: '2. Shield (Deterministic BNF Firewall)',
    icon: '🛡️',
    tag: 'Input & Grammar Validation',
    desc: 'Formal Backus-Naur Form (BNF) grammar constraints that mathematically prevent prompt injections, formula hallucinations, and out-of-spec execution before tokens run.',
    color: '#10b981'
  },
  {
    name: '3. Reflex (Microsecond Circuit Breaker)',
    icon: '⚡',
    tag: 'Sub-20µs Threat Containment',
    desc: 'Zero-latency execution interrupters that isolate anomalous agent trajectories and freeze unauthorized state mutations before financial leakage occurs.',
    color: '#f59e0b'
  },
  {
    name: '4. Heal (Continuous State Rollback)',
    icon: '🧬',
    tag: 'Cryptographic Rollback',
    desc: 'Automated atomic state rollbacks powered by append-only SHA-256 Merkle DAG trees, restoring pristine operating baselines with zero residual contamination.',
    color: '#a855f7'
  },
  {
    name: '5. Immune Memory (Merkle Ledger DAG)',
    icon: '🏛️',
    tag: 'Statutory Non-Repudiation',
    desc: 'Distributed tamper-evident memory bank anchoring every verified threat pattern and remediation receipt to Polygon L2 for statutory compliance audits.',
    color: '#D4AF37'
  }
];

export default function LIAPage() {
  return (
    <>
      {/* ──────── 1. HERO SECTION ──────── */}
      <section className="page-hero hero-bg grid-bg" style={{ paddingTop: '100px', paddingBottom: '70px', position: 'relative' }}>
        <div className="glow-orb glow-orb-purple" style={{ width: '500px', height: '500px', top: '-100px', left: '-100px', zIndex: 0 }} />
        <div className="glow-orb glow-orb-gold" style={{ width: '400px', height: '400px', bottom: '0', right: '-100px', zIndex: 0 }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '6px 14px', background: 'rgba(168,85,247,0.1)',
              border: '1px solid rgba(168,85,247,0.3)', borderRadius: '100px',
              color: '#c084fc', fontSize: '0.74rem', fontFamily: 'Space Mono, monospace', fontWeight: 700,
            }}>
              🛡️ LIBRAE IMMUNE AGENCY (LIA) · CYBER-IMMUNITY FOR THE AGENTIC ERA
            </div>
            <span style={{
              padding: '4px 10px', background: 'rgba(212,175,55,0.1)',
              border: '1px solid rgba(212,175,55,0.3)', borderRadius: '100px',
              color: '#D4AF37', fontSize: '0.7rem', fontFamily: 'Space Mono, monospace', fontWeight: 700
            }}>
              BNM SANDBOX & RMiT READY · 100% DETERMINISTIC
            </span>
          </div>

          <h1 className="section-title" style={{ maxWidth: 900, fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', lineHeight: 1.15, marginBottom: '1.5rem' }}>
            Why Banks, Machines & Autonomous AI Agents Require{' '}
            <span style={{
              background: 'linear-gradient(135deg, #a855f7 0%, #c084fc 50%, #D4AF37 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              Deterministic Cyber-Immunity.
            </span>
          </h1>

          <p className="section-subtitle" style={{ maxWidth: 840, fontSize: '1.05rem', lineHeight: 1.85, marginBottom: '2.5rem' }}>
            In the agentic era, AI is no longer a passive chatbot—it is an autonomous agent with permission to move bank funds, sign legal transactions, manipulate core databases, and control physical machines. Traditional perimeter firewalls cannot verify or restrain autonomous agent logic. <strong>LIA delivers the sovereign immune system</strong>: a <strong>Five Organs architecture</strong> with formal BNF grammar firewalls, microsecond reflex circuit breakers, and SHA-256 Merkle DAG non-repudiation.
          </p>

          {/* Action CTAs */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
            <a
              href="/whitepapers/LIBRAE_LIA_Executive_Master_White_Paper.pdf"
              download="LIBRAE_LIA_Executive_Master_White_Paper.pdf"
              className="btn-primary"
              style={{
                background: 'linear-gradient(135deg, #a855f7 0%, #7e22ce 100%)',
                color: '#FFFFFF', fontWeight: 800, padding: '14px 28px', fontSize: '0.92rem'
              }}
            >
              📥 Download LIA Master White Paper (PDF) →
            </a>

            <a
              href="/whitepapers/LIBRAE_LIA_Empirical_Benchmarks_Report.pdf"
              download="LIBRAE_LIA_Empirical_Benchmarks_Report.pdf"
              className="btn-secondary"
              style={{ borderColor: 'rgba(168,85,247,0.4)', color: '#c084fc', padding: '14px 24px', fontSize: '0.92rem' }}
            >
              📊 Determinism Benchmark Receipts
            </a>

            <Link
              href="/contact"
              className="btn-secondary"
              style={{ borderColor: 'rgba(212,175,55,0.4)', color: '#D4AF37', padding: '14px 24px', fontSize: '0.92rem' }}
            >
              🏛️ Schedule BNM Sandbox Briefing
            </Link>
          </div>

          {/* 4 Hard Immunity Metrics */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }} className="lia-stats-grid">
            {[
              { val: '100%', label: 'Output Determinism', color: '#10b981', desc: '0% mathematical or schema hallucination' },
              { val: 'Sub-20µs', label: 'Reflex Circuit Breaker', color: '#38bdf8', desc: 'Immediate anomalous agent freeze' },
              { val: 'SHA-256', label: 'Merkle DAG Non-Repudiation', color: '#D4AF37', desc: 'Bitwise immutable audit trail' },
              { val: 'BNM RMiT', label: 'Regulatory Sandbox Ready', color: '#c084fc', desc: 'Bank Negara & ISO 42001 compliant' },
            ].map((st, i) => (
              <div key={i} className="glass-card" style={{ padding: '1.5rem', borderTop: `2px solid ${st.color}` }}>
                <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '1.6rem', fontWeight: 800, color: st.color, marginBottom: '4px' }}>
                  {st.val}
                </div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#F0F4FF', marginBottom: '4px' }}>
                  {st.label}
                </div>
                <div style={{ fontSize: '0.72rem', color: '#8090b0' }}>
                  {st.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── 2. WHY BANKS & AUTONOMOUS AGENTS NEED LIA ──────── */}
      <section className="section-padding" style={{ background: '#000A1A', borderTop: '1px solid rgba(212,175,55,0.1)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4.5rem', alignItems: 'center' }}>
            <div>
              <div className="accent-line" style={{ background: '#a855f7' }} />
              <h2 className="section-title" style={{ fontSize: '2.2rem', marginBottom: '1.25rem' }}>
                The Agentic Threat Paradigm: <span style={{ color: '#c084fc' }}>When AI Can Move Money & Control Machines</span>
              </h2>
              <p style={{ color: '#A0B0CC', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '0.98rem' }}>
                When banks, financial institutions, and critical infrastructure deploy AI agents to handle lending decisions, fraud reviews, fund transfers, and industrial valves, traditional cybersecurity is obsolete. An agent cannot be protected by a VPN—it can be hijacked via indirect prompt injection, tool-call spoofing, or mathematical hallucination.
              </p>
              <p style={{ color: '#A0B0CC', lineHeight: 1.85, marginBottom: '1.5rem', fontSize: '0.98rem' }}>
                <strong>LIA solves the four fatal risks of autonomous enterprise AI:</strong>
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  {
                    title: '1. Zero Prompt Injections & Schema Drift',
                    desc: 'LIA enforces formal Backus-Naur Form (BNF) grammar constraints at the tokenizer level. Unsanctioned payloads or out-of-spec tool calls are mathematically rejected before execution.'
                  },
                  {
                    title: '2. 100% Deterministic Financial Arithmetic',
                    desc: 'Mathematical computations, balance assertions, and statutory regulatory filings are routed through formal Symbolic CAS engines with verified 0% hallucination.'
                  },
                  {
                    title: '3. Instant Autonomous Freeze (< 20µs)',
                    desc: 'If an AI agent behaves outside its defined risk bounds, the Reflex Organ instantly severs execution privileges and freezes state variables without human intervention.'
                  },
                  {
                    title: '4. Cryptographic Non-Repudiation for Auditors',
                    desc: 'Every prompt, decision tree step, and state mutation is hashed into an append-only SHA-256 Merkle DAG for permanent compliance proofs under BNM RMiT & ISO 42001.'
                  }
                ].map((item, i) => (
                  <div key={i} style={{ padding: '1rem 1.25rem', background: 'rgba(168,85,247,0.06)', borderLeft: '3px solid #a855f7', borderRadius: '0 8px 8px 0' }}>
                    <div style={{ color: '#c084fc', fontWeight: 700, fontSize: '0.88rem', marginBottom: '3px' }}>
                      {item.title}
                    </div>
                    <div style={{ color: '#8090b0', fontSize: '0.82rem', lineHeight: 1.6 }}>
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Regulatory Sandbox Card */}
            <div className="glass-card" style={{ padding: '2.5rem', border: '1px solid rgba(168,85,247,0.25)', position: 'relative' }}>
              <div style={{
                position: 'absolute', top: '-12px', right: '20px',
                padding: '4px 12px', background: 'linear-gradient(135deg, #a855f7 0%, #7e22ce 100%)',
                borderRadius: '100px', fontSize: '0.68rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'Space Mono, monospace'
              }}>
                BANK NEGARA READY
              </div>

              <h4 style={{ color: '#D4AF37', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '1.25rem', fontFamily: 'Space Mono, monospace' }}>
                Bank Negara Malaysia (BNM) Sandbox Alignment
              </h4>

              <p style={{ color: '#CBD5E1', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                LIA is architected directly against the <strong>Risk Management in Technology (RMiT)</strong> policy document and <strong>Cyber Security Act 2024</strong> mandates for Critical National Information Infrastructure (CNII).
              </p>

              <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.76rem', background: 'rgba(0,0,0,0.6)', padding: '1.25rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '1.5rem' }}>
                <div style={{ color: '#c084fc', marginBottom: '6px' }}>// LIA Deterministic Audit Receipt</div>
                <div style={{ color: '#8090b0' }}>BNF_Grammar_State: <span style={{ color: '#10b981' }}>ENFORCED (0% Drift)</span></div>
                <div style={{ color: '#8090b0' }}>eBPF_Probe_Latency: <span style={{ color: '#38bdf8' }}>14.2 µs</span></div>
                <div style={{ color: '#8090b0' }}>Agent_Sandbox_Boundary: <span style={{ color: '#D4AF37' }}>WASM Air-Gapped</span></div>
                <div style={{ color: '#8090b0' }}>Merkle_Root_Seal: <span style={{ color: '#a855f7' }}>0x7f9a...3b21</span></div>
                <div style={{ color: '#8090b0' }}>Regulatory_Verdict: <span style={{ color: '#10b981' }}>COMPLIANT (RMiT s.10.4)</span></div>
              </div>

              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {['BNM RMiT s.10', 'ISO/IEC 42001', 'Cyber Security Act 2024', 'NIST SP 800-207'].map((std) => (
                  <span key={std} style={{
                    padding: '4px 10px', background: 'rgba(212,175,55,0.08)',
                    border: '1px solid rgba(212,175,55,0.25)', borderRadius: '100px',
                    fontSize: '0.68rem', color: '#D4AF37', fontFamily: 'Space Mono, monospace'
                  }}>
                    {std}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────── 3. THE FIVE ORGANS ARCHITECTURE ──────── */}
      <section className="section-padding" style={{ background: 'linear-gradient(180deg, #000A1A 0%, #00122e 100%)', borderTop: '1px solid rgba(212,175,55,0.1)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem' }}>
            <div className="accent-line" style={{ margin: '0 auto 1rem', background: '#a855f7' }} />
            <h2 className="section-title" style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>
              The Five Organs Architecture: <span style={{ color: '#c084fc' }}>Biological Resilience for AI</span>
            </h2>
            <p style={{ color: '#A0B0CC', fontSize: '0.98rem', lineHeight: 1.8 }}>
              Inspired by the human immune system, LIA divides cybersecurity into five decoupled, deterministic organs that operate at the kernel and bytecode levels.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1.25rem' }} className="organs-grid">
            {organs.map((org, i) => (
              <div key={i} className="glass-card" style={{ padding: '1.75rem 1.25rem', display: 'flex', flexDirection: 'column', borderTop: `2px solid ${org.color}` }}>
                <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>{org.icon}</div>
                <div style={{ color: org.color, fontSize: '0.7rem', fontFamily: 'Space Mono, monospace', fontWeight: 700, marginBottom: '6px', textTransform: 'uppercase' }}>
                  {org.tag}
                </div>
                <h4 style={{ color: '#F0F4FF', fontSize: '1rem', fontWeight: 700, marginBottom: '0.75rem', lineHeight: 1.3 }}>
                  {org.name}
                </h4>
                <p style={{ color: '#8090b0', fontSize: '0.8rem', lineHeight: 1.7, flexGrow: 1 }}>
                  {org.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── 4. INSTITUTIONAL CALL TO ACTION ──────── */}
      <section className="section-padding" style={{ background: '#000814', borderTop: '1px solid rgba(212,175,55,0.1)' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, rgba(168,85,247,0.06) 0%, rgba(0,20,50,0.6) 100%)',
            border: '1px solid rgba(168,85,247,0.3)',
            borderRadius: '16px',
            padding: '3.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '3rem',
            flexWrap: 'wrap'
          }}>
            <div style={{ maxWidth: '650px' }}>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '1rem' }}>
                <span style={{ padding: '3px 10px', background: 'rgba(168,85,247,0.15)', border: '1px solid rgba(168,85,247,0.4)', borderRadius: '100px', fontSize: '0.7rem', color: '#c084fc', fontFamily: 'Space Mono, monospace', fontWeight: 700 }}>
                  BNM SANDBOX & ENTERPRISE PILOT
                </span>
                <span style={{ padding: '3px 10px', background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.4)', borderRadius: '100px', fontSize: '0.7rem', color: '#D4AF37', fontFamily: 'Space Mono, monospace', fontWeight: 700 }}>
                  0% HALLUCINATION GUARANTEE
                </span>
              </div>
              <h3 style={{ fontSize: '1.8rem', color: '#F0F4FF', fontWeight: 800, marginBottom: '1rem' }}>
                Inoculate Your Enterprise AI Agents & Financial Pipelines
              </h3>
              <p style={{ color: '#A0B0CC', fontSize: '0.92rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Deploy the LIA Five Organs Daemon as an on-premise proxy or eBPF sidecar across your banking workloads, robotic control planes, and sovereign AI agent deployments.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href="/whitepapers/LIBRAE_LIA_Executive_Master_White_Paper.pdf"
                  download="LIBRAE_LIA_Executive_Master_White_Paper.pdf"
                  className="btn-primary"
                  style={{ background: 'linear-gradient(135deg, #a855f7 0%, #7e22ce 100%)', color: '#FFFFFF', fontWeight: 800, padding: '12px 24px', fontSize: '0.88rem' }}
                >
                  📥 Download Master White Paper (PDF)
                </a>
                <Link
                  href="/contact"
                  className="btn-secondary"
                  style={{ borderColor: 'rgba(212,175,55,0.4)', color: '#D4AF37', padding: '12px 24px', fontSize: '0.88rem' }}
                >
                  🏛️ Request Technical Briefing
                </Link>
              </div>
            </div>

            <div style={{
              background: 'rgba(0,10,26,0.8)',
              border: '1px solid rgba(212,175,55,0.2)',
              borderRadius: '12px',
              padding: '1.5rem 2rem',
              textAlign: 'center',
              minWidth: '240px'
            }}>
              <div style={{ fontSize: '0.72rem', color: '#8090b0', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', fontFamily: 'Space Mono, monospace' }}>
                DETERMINISTIC VERDICT
              </div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#c084fc', fontFamily: 'Space Mono, monospace', marginBottom: '4px' }}>
                100.00%
              </div>
              <div style={{ fontSize: '0.8rem', color: '#CBD5E1', marginBottom: '12px' }}>
                Formula Determinism
              </div>
              <div style={{ fontSize: '0.72rem', color: '#D4AF37', fontFamily: 'Space Mono, monospace' }}>
                Zero Egress · Air-Gapped
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
