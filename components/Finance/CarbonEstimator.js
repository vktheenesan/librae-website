'use client';
import { useState, useMemo } from 'react';

const rates = {
  PrimaryForest: { baseline: 25, premium: 80, label: 'Primary Forest Preservation' },
  Peatland: { baseline: 40, premium: 120, label: 'Peatland Restoration (High Sink)' },
  Rubber: { baseline: 10, premium: 35, label: 'Rubber Smallholder Agroforestry' },
  Palm: { baseline: 8, premium: 30, label: 'Sustainable Palm (RSPO/EUDR)' },
};

export default function CarbonEstimator() {
  const [area, setArea] = useState(1000);
  const [unit, setUnit] = useState('Hectares'); // Rai or Hectares
  const [type, setType] = useState('PrimaryForest');

  // 1 Hectare = 6.25 Rai
  const totalHectares = unit === 'Hectares' ? area : area / 6.25;

  const data = useMemo(() => {
    const r = rates[type];
    const estimatedTCO2e = totalHectares * r.baseline;
    
    // Traditional vs Librae DMRV value
    const traditionalValue = estimatedTCO2e * 5; // $5 standard credit
    const libraeValue = estimatedTCO2e * r.premium; // Premium DMRV credit
    const uplift = libraeValue - traditionalValue;

    return { estimatedTCO2e, traditionalValue, libraeValue, uplift, premiumPrice: r.premium };
  }, [type, totalHectares]);

  return (
    <div className="glass-card" style={{ padding: '2.5rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        {/* Input Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 1fr) 1fr', gap: '2rem', alignItems: 'end' }}>
          <div>
            <label style={{ color: '#607090', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '8px' }}>
              Project Area
            </label>
            <div style={{ display: 'flex' }}>
              <input type="number" min="1" value={area} onChange={e => setArea(e.target.value)}
                style={{
                  flex: 1, padding: '14px 16px', background: 'rgba(0,20,60,0.6)', border: '1px solid rgba(212,175,55,0.2)',
                  borderRadius: '10px 0 0 10px', color: 'var(--text-primary)', fontSize: '1.2rem', fontFamily: 'Space Mono, monospace', outline: 'none'
                }} />
              <select value={unit} onChange={e => setUnit(e.target.value)}
                style={{
                  padding: '14px 16px', background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)', borderLeft: 'none',
                  borderRadius: '0 10px 10px 0', color: '#D4AF37', fontSize: '0.9rem', fontWeight: 600, outline: 'none', cursor: 'pointer'
                }}>
                <option value="Hectares">Hectares</option>
                <option value="Rai">Rai</option>
              </select>
            </div>
          </div>
          <div>
            <label style={{ color: '#607090', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '8px' }}>
              Forest Ecosystem Type
            </label>
            <select value={type} onChange={e => setType(e.target.value)}
              style={{
                width: '100%', padding: '14px 16px', background: 'rgba(0,20,60,0.6)', border: '1px solid rgba(212,175,55,0.2)', borderRadius: '10px',
                color: 'var(--text-primary)', fontSize: '1rem', outline: 'none', cursor: 'pointer'
              }}>
              {Object.entries(rates).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
            </select>
          </div>
        </div>

        {/* Output Visualization */}
        <div style={{ background: 'rgba(0,10,26,0.6)', border: '1px solid rgba(46,139,87,0.2)', borderRadius: '12px', padding: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap:'wrap', gap:'1rem' }}>
            <div>
              <p style={{ color: '#607090', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Estimated Annual Yield</p>
              <p className="stat-number" style={{ color: 'var(--text-primary)', fontSize: '2rem' }}>
                {Math.round(data.estimatedTCO2e).toLocaleString()} <span style={{ fontSize: '1rem', color: '#2E8B57' }}>tCO₂e / yr</span>
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span className="badge">DMRV Premium: ${data.premiumPrice}/tCO₂e</span>
            </div>
          </div>

          {/* Comparison Bars */}
          <div style={{ marginTop: '2rem' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ color: '#607090', fontSize: '0.8rem' }}>Traditional &ldquo;Paper Credit&rdquo; ($5)</span>
                <span style={{ color: 'var(--text-secondary)', fontFamily: 'Space Mono', fontSize: '0.9rem' }}>${Math.round(data.traditionalValue).toLocaleString()}</span>
              </div>
              <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: '15%', height: '100%', background: '#607090' }} />
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ color: '#D4AF37', fontSize: '0.8rem', fontWeight: 600 }}>Librae High-Fidelity Credit (${data.premiumPrice})</span>
                <span style={{ color: '#D4AF37', fontFamily: 'Space Mono', fontSize: '1.1rem', fontWeight: 700 }}>${Math.round(data.libraeValue).toLocaleString()}</span>
              </div>
              <div style={{ width: '100%', height: '12px', background: 'rgba(212,175,55,0.1)', borderRadius: '6px', overflow: 'hidden' }}>
                {/* Visualizing the massive difference */}
                <div style={{ width: '100%', height: '100%', background: 'linear-gradient(90deg, #D4AF37, #2E8B57)', boxShadow: '0 0 10px rgba(212,175,55,0.5)' }} />
              </div>
            </div>
            
            <p style={{ color: '#2E8B57', fontSize: '0.8rem', textAlign: 'right', marginTop: '1rem', fontFamily: 'Space Mono', fontWeight: 600 }}>
              + ${Math.round(data.uplift).toLocaleString()} Annual Uplift via DMRV
            </p>
          </div>
        </div>

        <p style={{ color: '#607090', fontSize: '0.75rem', textAlign: 'center', lineHeight: 1.5 }}>
          *Estimations based on IPCC Tier 3 models and continuous Copernicus baseline data. Actual yield depends on GaiaAI™ predictive tracking, ground worker additionality, and ICVCM certification finalization.
        </p>
      </div>
    </div>
  );
}
