'use client';

export default function TruthSealPage() {
  const steps = [
    { title: 'Local Ingestion', desc: 'Concession bounds and point-clouds are loaded locally into the CAHAYA workspace node.' },
    { title: 'SHA-256 Hash Generation', desc: 'The system computes a unique SHA-256 hash receipt for the dataset, locking its initial state.' },
    { title: 'Merkle Tree Compilation', desc: 'Individual file hashes are structured into a Merkle tree, generating a single cryptographic Merkle Root.' },
    { title: 'Polygon L2 Attestation', desc: 'The Merkle Root is written to the Polygon L2 ledger, anchoring the physical asset state forever.' }
  ];

  return (
    <>
      {/* Hero */}
      <section className="page-hero hero-bg grid-bg">
        <div className="container" style={{ position:'relative', zIndex:1, paddingTop:'2rem' }}>
          <div className="badge" style={{ marginBottom:'1.5rem', background:'rgba(212,175,55,0.15)', borderColor:'rgba(212,175,55,0.3)', color:'#D4AF37' }}>
            🔐 Physical-To-Digital Trust Chain
          </div>
          <h1 className="section-title" style={{ maxWidth:800 }}>
            Truth & Seal: <span className="gold-text">Cryptographic Integrity</span>
          </h1>
          <p className="section-subtitle" style={{ maxWidth:700 }}>
            Librae secures the boundary between the physical and digital world. We combine localized ground sensors with immutable cryptographic ledger entries to prove ecological reality.
          </p>
        </div>
      </section>

      {/* Ground Truth Section */}
      <section className="section-padding" style={{ background: '#000A1A' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div className="accent-line" />
              <h2 className="section-title">Physical Ground-Truth</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Remote sensing alone cannot verify ecological truth. CAHAYA coordinates with physical **Sentient Master Nodes** deployed on-site.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                These master nodes ingest local telemetry from a **LoRa Mesh Network** of low-power worker sensors placed across the concession. Running local, air-gapped YOLOv8 computer vision models, the nodes verify ground parameters (like canopy cover, tree diameter, and water clarity) in real-time.
              </p>
              <div style={{ padding: '1.5rem', background: 'rgba(46,139,87,0.03)', borderLeft: '3px solid #2E8B57', borderRadius: '0 8px 8px 0' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', margin: 0, lineHeight: 1.6 }}>
                  <strong>Local Autonomy:</strong> The entire ground sensor mesh functions without internet access, storing telemetry in encrypted local databases until authenticated sync handshakes are executed.
                </p>
              </div>
            </div>

            {/* Mesh visualization */}
            <div className="glass-card" style={{ padding: '2.5rem', background: 'rgba(0,10,30,0.5)', border: '1px solid rgba(46,139,87,0.2)' }}>
              <h3 style={{ color: '#2E8B57', marginBottom: '1.5rem', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Local Sensor Mesh Network</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                {[
                  { title: 'Sentient Master Node', desc: 'Central coordinator. Runs YOLOv8 and encrypts telemetry payload.', color: '#D4AF37' },
                  { title: 'LoRa Mesh Array', desc: 'P2P mesh routing data across 15km concession without telecom grids.', color: '#2E8B57' },
                  { title: 'Worker Nodes', desc: 'Solar-powered canopy, acoustic, and water quality sensors.', color: '#4A9EFF' },
                  { title: 'Local SQLite DB', desc: 'Secures local logs on physical nodes until authorized sync.', color: '#7B4AFF' }
                ].map((n, i) => (
                  <div key={i} className="glass-card" style={{ padding: '1.25rem', background: 'rgba(255,255,255,0.02)', textAlign: 'center' }}>
                    <h4 style={{ color: n.color, fontSize: '0.9rem', marginBottom: '4px' }}>{n.title}</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem', lineHeight: 1.4, margin: 0 }}>{n.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cryptographic Seal */}
      <section className="section-padding grid-bg" style={{ background: 'linear-gradient(180deg,#000A1A,#001133)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '5rem', alignItems: 'center' }}>
            
            {/* Merkle chart */}
            <div className="glass-card" style={{ padding: '2.5rem', background: 'rgba(0,20,60,0.4)', border: '1px solid rgba(212,175,55,0.2)' }}>
              <h3 style={{ color: '#D4AF37', marginBottom: '1.5rem', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>The Integrity Protocol</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {steps.map((s, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                    <div style={{ fontFamily: 'Space Mono, monospace', color: '#D4AF37', fontSize: '0.9rem', fontWeight: 'bold' }}>
                      {(i+1).toString().padStart(2, '0')}
                    </div>
                    <div>
                      <strong style={{ color: '#E0E2E5', fontSize: '0.9rem', display: 'block', marginBottom: '2px' }}>{s.title}</strong>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', margin: 0, lineHeight: 1.5 }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="accent-line" />
              <h2 className="section-title">The Cryptographic Seal</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Once ground parameters and boundary polygons are verified, the system generates an immutable cryptographic seal. By grouping files into a Merkle tree structure, we write only the root hash to the Polygon L2 blockchain ledger.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                This creates a permanent anchor. Anyone with the original files can verify their integrity against the blockchain hash. If even a single polygon vertex or sensor log is altered, the Merkle root changes, failing verification instantly.
              </p>
              
              <div style={{ padding: '1.25rem', background: 'rgba(212,175,55,0.05)', border: '1px solid rgba(212,175,55,0.15)', borderRadius: 12 }}>
                <h4 style={{ color: '#D4AF37', fontSize: '0.95rem', margin: '0 0 6px', fontWeight: 'bold' }}>The 30g Carbon Pledge</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', margin: 0, lineHeight: 1.5 }}>
                  Unlike traditional blockchain mining, Librae writes hashes to Layer-2 rollups in batches. We generate less than **30 grams of CO₂** per verification run, making our proof framework net-positive for the environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
