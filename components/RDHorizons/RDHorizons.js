'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function RDHorizons() {
  const [activeCluster, setActiveCluster] = useState(0);
  const [activeDomain, setActiveDomain] = useState(null);

  const clusters = [
    {
      id: 0,
      name: 'Natural Resources & Geospatial Sovereignty',
      shortName: 'Resources & Geospatial',
      icon: '🌿',
      tagline: 'Physical Land, Canopy, Subsurface & Marine Sovereignty',
      flagship: 'CAHAYA Sovereign Engine (MPOB Edition)',
      domains: [
        {
          id: 1,
          name: 'Agriculture & Precision Estate Intelligence',
          flagshipTag: 'LIVE PRODUCTION · CAHAYA',
          isLive: true,
          liveUrl: '/cahaya',
          targetAgency: 'MPOB, Sime Darby, FGV, KLK, IOI Group',
          impact: 'Instant EUDR/MSPO compliance, automated canopy height modeling, yield forecasting, and disease vector detection.',
          engine: 'Decoupled SE(3) Lie Group Tensor Engine + Sentinel-1/2 SAR Fusion',
          auditStandard: 'EUDR (EU 2023/1115), MSPO 2.0 (MS 2530:2022), RSPO P&C 2018'
        },
        {
          id: 2,
          name: 'Forestry & EUDR Deforestation Tracking',
          flagshipTag: null,
          isLive: false,
          targetAgency: 'Jabatan Perhutanan, European Union Competent Authorities, Verra',
          impact: 'Sub-pixel canopy change detection with historical retrospective audits back to Dec 31, 2020.',
          engine: 'Sentinel-1 SAR C-band + Sentinel-2 MSI Multi-Spectral Invariant Kernel',
          auditStandard: 'EUDR Article 9 Cadastral Geolocation & Due Diligence Statements'
        },
        {
          id: 3,
          name: 'Marine & Coastal Zone Management',
          flagshipTag: null,
          isLive: false,
          targetAgency: 'Maritime Institute of Malaysia (MIMA), Marine Department, Port Authorities',
          impact: 'S-57 navigational bathymetry verification, shoreline wave erosion vectors, and coral reef health telemetry.',
          engine: 'Bathymetric Echo-Sounder Tensor + Multi-Temporal Satellite Altimetry',
          auditStandard: 'IHO S-57 / S-100 Universal Hydrographic Data Model'
        },
        {
          id: 4,
          name: 'Mining, Geology & Subsurface Mapping',
          flagshipTag: null,
          isLive: false,
          targetAgency: 'Department of Mineral & Geoscience (JMG), Mining Concessionaires',
          impact: 'Volumetric open-pit cut-and-fill audits, safety berm slope stability, and illegal excavation radar sweeps.',
          engine: 'High-Density LiDAR Point Cloud Mesh + JORC 2012 / NI 43-101 Volumetric Solvers',
          auditStandard: 'JORC Code (2012 Edition), NI 43-101 Technical Reports'
        },
        {
          id: 5,
          name: 'Hydrology & Peatland Subsidence Monitoring',
          flagshipTag: null,
          isLive: false,
          targetAgency: 'Department of Irrigation and Drainage (JPS), Forestry Research Institute (FRIM)',
          impact: 'Sub-centimeter peatland subsidence tracking, water table depth calculation, and wildfire risk index modeling.',
          engine: 'Persistent Scatterer InSAR (PS-InSAR) + Topographic Wetness Index (TWI)',
          auditStandard: 'IPCC Tier 2 Wetland Guidelines, ISO 14064-1 Greenhouse Gas Protocol'
        }
      ]
    },
    {
      id: 1,
      name: 'Autonomous Systems & Data Factory Engine (LEI Powered)',
      shortName: 'Autonomous & Robotics',
      icon: '🛸',
      tagline: '1.58-Bit Ternary Ingestion & Sub-20µs Multi-Sensor Fusion (< 400MB RAM)',
      flagship: 'LEI Data Factory Engine (Ternary 1.58-Bit)',
      domains: [
        {
          id: 6,
          name: 'Commercial Drone Technology & UAV Navigation',
          flagshipTag: 'LIVE PRODUCTION · LEI',
          isLive: true,
          liveUrl: '/lei',
          targetAgency: 'CAAM, MRANTI Drone Sandboxes, Drone Delivery Fleet Operators',
          impact: '0.0564s multi-sensor fusion (LiDAR + SAR + Optical) with sub-20µs kernel latency on embedded ARM/NPU boards.',
          engine: 'LEI 1.58-bit BitNet SIMD Core + SE(3) Rigid Pose Lie Algebra',
          auditStandard: 'CAAM CAD 6011 (Part (I) & (II)), ISO 21384-3 UAS Operations'
        },
        {
          id: 7,
          name: 'Port Logistics & Maritime Vessel Tracking',
          flagshipTag: null,
          isLive: false,
          targetAgency: 'Port Klang Authority, Port of Tanjung Pelepas, Maritime Regulators',
          impact: 'Automated container yard volumetric optimization, AIS spoofing detection, and dockside berth clearance calculations.',
          engine: 'Synthetic Aperture Radar Invariant Mesh + High-Throughput Stream SIMD',
          auditStandard: 'IMO SOLAS Chapter V AIS Directives, ISO 28000 Supply Chain Security'
        },
        {
          id: 8,
          name: 'Autonomous Mobile Robots (AMR) & Warehouse Fleet',
          flagshipTag: null,
          isLive: false,
          targetAgency: 'Mega-Distribution Centers, Manufacturing Plant Assemblies',
          impact: 'Sub-millimeter collision avoidance and deterministic topological navigation with 0% network dependency.',
          engine: 'Decoupled Left-Right Brain SLAM + Local Float64 Rigid Body Solver',
          auditStandard: 'ISO 3691-4 Driverless Industrial Trucks Safety Standards'
        },
        {
          id: 9,
          name: 'Precision Surveying & Cadastral Mapping',
          flagshipTag: null,
          isLive: false,
          targetAgency: 'Jabatan Ukur dan Pemetaan Malaysia (JUPEM), Land Surveyors Board',
          impact: 'Centimeter-grade geodetic coordinate transformation (GDM2000, Kertau 1948, WGS84) with certified zero float drift.',
          engine: 'Double-Precision Geodetic CRS Tensor Engine + Merkle Root Anchoring',
          auditStandard: 'JUPEM Standard Cadastral Survey Guidelines, ISO 19111 Spatial Referencing'
        },
        {
          id: 10,
          name: 'Aviation Airspace & Geofencing Control',
          flagshipTag: null,
          isLive: false,
          targetAgency: 'Civil Aviation Authority of Malaysia (CAAM), UTM Corridor Integrators',
          impact: 'Deterministic dynamic 4D geofencing, no-fly zone enforcement, and de-confliction corridor calculation.',
          engine: 'Continuous 4D Spatiotemporal Boundary Solver + Hardware Security Module (HSM)',
          auditStandard: 'ICAO Annex 11 Air Traffic Services, ASTM F3411 UTM Remote ID'
        }
      ]
    },
    {
      id: 2,
      name: 'Cybersecurity Future & Sovereign Governance (LIA Powered)',
      shortName: 'Cybersecurity Future',
      icon: '🛡️',
      tagline: 'Deterministic Cyber-Immunity for Banks, Machines & AI Agents',
      flagship: 'LIA Sovereign Cyber-Immunity (BNM Sandbox Ready)',
      domains: [
        {
          id: 11,
          name: 'Cyber-Immune Infrastructure Defense',
          flagshipTag: 'LIVE PRODUCTION · LIA',
          isLive: true,
          liveUrl: '/lia',
          targetAgency: 'National Cyber Security Agency (NACSA), CyberSecurity Malaysia, Defense SCIFs',
          impact: 'Small-core deterministic enforcement, eBPF telemetry, WASM policy isolation, and self-healing zero-trust state recovery.',
          engine: 'LIA Five Organs Core (Vision, Shield, Reflex, Heal, Immune Memory)',
          auditStandard: 'Cyber Security Act 2024, ISO/IEC 27001:2022, NIST SP 800-207 Zero Trust'
        },
        {
          id: 12,
          name: 'Critical Infrastructure Protection',
          flagshipTag: null,
          isLive: false,
          targetAgency: 'National Security Council (MKN), Tenaga Nasional (TNB), Gas Malaysia',
          impact: 'Air-gapped telemetry monitoring and instant freeze/contain reflex actions against zero-day control plane attacks.',
          engine: 'Hardware-Bound Loopback State Daemon + Pydantic BNF Grammar Firewall',
          auditStandard: 'Critical National Information Infrastructure (CNII) Protection Policy'
        },
        {
          id: 13,
          name: 'Border Control & Tactical GIS',
          flagshipTag: null,
          isLive: false,
          targetAgency: 'Angkatan Tentera Malaysia (ATM), Polis Diraja Malaysia (PDRM), Border Agency',
          impact: 'SCIF-grade offline viewshed calculation, thermal line-of-sight analysis, and covert terrain passage routing.',
          engine: '3DSRBench 6D Viewpoint Equivariance Engine + Zero-Cloud Footprint (< 8GB RAM)',
          auditStandard: 'MIL-STD-2525D Tactical Symbology, ISO/IEC 15408 Common Criteria'
        },
        {
          id: 14,
          name: 'Emergency Response & Disaster Management',
          flagshipTag: null,
          isLive: false,
          targetAgency: 'Agensi Pengurusan Bencana Negara (NADMA), Jabatan Bomba dan Penyelamat (JBPM)',
          impact: 'Real-time Rothermel wildfire front propagation simulation and dynamic flood inundation escape routing.',
          engine: 'Rothermel Surface Fire Spread + 2D Hydrodynamic Shallow Water Equations',
          auditStandard: 'Sendai Framework for Disaster Risk Reduction 2015-2030'
        },
        {
          id: 15,
          name: 'Satellite Remote Sensing & Orbital Telemetry',
          flagshipTag: null,
          isLive: false,
          targetAgency: 'Malaysian Space Agency (MYSA), International Remote Sensing Operators',
          impact: 'Automated radiometric calibration, cloud masking, and continuous constellation orbit telemetry synchronization.',
          engine: 'Orbital Keplerian Mechanics Solver + Double-Precision Ephemeris Integrator',
          auditStandard: 'CEOS Standards for Satellite Earth Observation, ISO 19115 Metadata'
        }
      ]
    },
    {
      id: 3,
      name: 'Energy, Climate & Industrial Safety',
      shortName: 'Energy & Climate',
      icon: '⚡',
      tagline: 'Deterministic GHG Accounting, Pipeline Integrity & Clean Energy Siting',
      flagship: 'LENUDA Industrial Climate Ledger',
      domains: [
        {
          id: 16,
          name: 'Oil & Gas Refinery Safety Monitoring',
          flagshipTag: null,
          isLive: false,
          targetAgency: 'PETRONAS, Shell, ExxonMobil, Department of Occupational Safety & Health (DOSH)',
          impact: 'Thermal flare volumetric tracking, volatile organic compound (VOC) plume dispersion, and safety buffer integrity.',
          engine: 'Gaussian Plume Atmospheric Dispersion + Multi-Spectral Thermal Radiometry',
          auditStandard: 'API Standard 521 Flare Systems, OSHA Process Safety Management (PSM)'
        },
        {
          id: 17,
          name: 'Methane & Greenhouse Gas Emissions Tracking',
          flagshipTag: null,
          isLive: false,
          targetAgency: 'Ministry of Natural Resources and Environmental Sustainability (NRES), UNFCCC',
          impact: 'Satellite methane plume detection with point-source localization and automated regulatory emission reporting.',
          engine: 'Sentinel-5P TROPOMI Column Absorption Inversion + High-Res Spotter Analytics',
          auditStandard: 'Oil & Gas Methane Partnership (OGMP 2.0 Level 5), IPCC Tier 3 GHG'
        },
        {
          id: 18,
          name: 'Carbon Stock Accounting (Verra/IPCC)',
          flagshipTag: null,
          isLive: false,
          targetAgency: 'Bursa Carbon Exchange (BCX), Verra VCS, Gold Standard, Carbon Project Developers',
          impact: 'Allometric biomass regression and canopy volume calculation with immutable on-chain SHA-256 Merkle sealing.',
          engine: 'LiDAR Canopy Height Model (CHM) Allometry + Polygon L2 Attestation Layer',
          auditStandard: 'Verra VCS Methodology VM0045, ISO 14064-2 Project Carbon Quant'
        },
        {
          id: 19,
          name: 'Power Grid Infrastructure Inspection',
          flagshipTag: null,
          isLive: false,
          targetAgency: 'Tenaga Nasional Berhad (TNB), Sarawak Energy, Energy Commission (ST)',
          impact: 'Transmission line vegetation encroachment detection, pylon structural tilt, and thermal hotspot auditing.',
          engine: 'Corridor LiDAR Clearance Envelope + Radiometric Infrared Fault Classifier',
          auditStandard: 'IEEE 738 Thermal Rating Guidelines, IEC 60826 Transmission Overhead Lines'
        },
        {
          id: 20,
          name: 'Renewable Energy Site Optimization',
          flagshipTag: null,
          isLive: false,
          targetAgency: 'Sustainable Energy Development Authority (SEDA), Large-Scale Solar (LSS) Operators',
          impact: 'Global Horizontal Irradiance (GHI) terrain shading modeling and Weibull wind wake optimization.',
          engine: 'Ray-Tracing Terrain Insolation Core + Weibull Aerodynamic Wake Simulator',
          auditStandard: 'IEC 61724 Photovoltaic System Performance, SEDA LSS Guidelines'
        }
      ]
    },
    {
      id: 4,
      name: 'FinTech, Governance & RegTech',
      shortName: 'FinTech & RegTech',
      icon: '🏛️',
      tagline: 'Cryptographic Audit Trails & BNM Sandbox Regulatory Determinism',
      flagship: 'LIA Deterministic Compliance Engine',
      domains: [
        {
          id: 21,
          name: 'Banking Regulatory Sandboxes (BNM Compliance)',
          flagshipTag: 'SANDBOX READY · LIA',
          isLive: true,
          liveUrl: '/lia',
          targetAgency: 'Bank Negara Malaysia (BNM), Commercial Banking Groups, Digital Banks',
          impact: '100% output determinism, zero hallucinations on regulatory arithmetic, and verifiable audit records.',
          engine: 'Pydantic V2 BNF Grammar Guards + Mathematical Symbolic CAS Verification',
          auditStandard: 'BNM Risk Management in Technology (RMiT), ISO/IEC 42001:2023 (AI Governance)'
        },
        {
          id: 22,
          name: 'Financial Fraud Detection & Transaction Audit',
          flagshipTag: null,
          isLive: false,
          targetAgency: 'Securities Commission Malaysia (SC), Anti-Money Laundering (AMLA) Auditors',
          impact: 'Sub-millisecond graph-of-thought anomaly detection and immutable cryptographic transaction log verification.',
          engine: 'Deterministic Event Bus + WASM Policy Interceptor + SHA-256 State Ledger',
          auditStandard: 'Anti-Money Laundering Act 2001 (AMLA), FATF Recommendation 15'
        },
        {
          id: 23,
          name: 'Insurance Claims Land & Crop Verification',
          flagshipTag: null,
          isLive: false,
          targetAgency: 'General Insurance Association of Malaysia (PIAM), Agricultural Insurers',
          impact: 'Parametric flood and drought crop damage verification in under 60 seconds using satellite radar baselines.',
          engine: 'Sentinel-1 InSAR Coherence Loss + Multi-Temporal Optical NDVI Difference',
          auditStandard: 'World Bank Parametric Agricultural Insurance Guidelines'
        },
        {
          id: 24,
          name: 'Supply Chain Provenance & Merkle Sealing',
          flagshipTag: null,
          isLive: false,
          targetAgency: 'Ministry of Investment, Trade and Industry (MITI), Global Export Exporters',
          impact: 'End-to-end supply chain batch tracking from plantation plot coordinates to export container packing list.',
          engine: 'Append-Only Merkle DAG + Cryptographic SHA-256 Certificate Generator',
          auditStandard: 'UN/CEFACT Blockchain Standards, EU Corporate Sustainability Due Diligence (CSDDD)'
        },
        {
          id: 25,
          name: 'Statutory Compliance & Audit Tracking',
          flagshipTag: null,
          isLive: false,
          targetAgency: 'Suruhanjaya Syarikat Malaysia (SSM), Auditor-General Office, External Big 4 Auditors',
          impact: 'Automated legal and regulatory compliance dossier generation with zero human clerical tampering vulnerability.',
          engine: 'Formal Verification Assertion Engine + Signed Provenance Seal',
          auditStandard: 'SIRIM QAS ISO 9001 / ISO 27001 / ISO 42001 Audit Dossier Alignment'
        }
      ]
    },
    {
      id: 5,
      name: 'Smart Cities & Heavy Engineering',
      shortName: 'Smart Cities & Engineering',
      icon: '🏙️',
      tagline: 'Continuous 3D Structural Health, Microclimate & Telematics',
      flagship: 'CAHAYA 3D Digital Twin Engine',
      domains: [
        {
          id: 26,
          name: 'Urban Planning & Climate Risk Assessment',
          flagshipTag: null,
          isLive: false,
          targetAgency: 'PLANMalaysia, City Councils (DBKL, MBI, MBJB), Urban Redevelopment Agencies',
          impact: 'Floor Area Ratio (FAR) density sweeps, urban heat island microclimate modeling, and solar envelope constraints.',
          engine: '3D Mesh Voxelizer + Microclimate Solar Insolation Ray Caster',
          auditStandard: 'PLANMalaysia National Urbanization Policy, Green Building Index (GBI)'
        },
        {
          id: 27,
          name: 'Structural Health Monitoring',
          flagshipTag: null,
          isLive: false,
          targetAgency: 'Jabatan Kerja Raya (JKR), PLUS Expressway, Bridge & Dam Operators',
          impact: 'Continuous millimeter-level structural deformation monitoring for bridges, dams, and highway viaducts.',
          engine: 'Differential Interferometric SAR (DInSAR) + Ground Sensor Fusion Tensor',
          auditStandard: 'JKR Structural Inspection Manual, Eurocode 3 Design of Steel Structures'
        },
        {
          id: 28,
          name: 'Heavy Equipment & Construction Telematics',
          flagshipTag: null,
          isLive: false,
          targetAgency: 'Mega-Infrastructure Contractors (MRT Corp, ECRL), Heavy Equipment Fleets',
          impact: 'Fleet cycle time optimization, automated earthwork volume reconciliation, and fuel efficiency heatmaps.',
          engine: 'CAN-Bus Edge Telemetry + Dual-Frequency RTK Precision Positioning',
          auditStandard: 'ISO 15143 Earth-moving Machinery Data Exchange'
        },
        {
          id: 29,
          name: 'Transportation Corridor Analytics',
          flagshipTag: null,
          isLive: false,
          targetAgency: 'Ministry of Transport (MOT), Land Public Transport Agency (APAD), Keretapi Tanah Melayu (KTMB)',
          impact: 'Railway track alignment deformation sweeps, landslide risk along transit corridors, and optimal logistics routing.',
          engine: 'High-Speed Mobile LiDAR Point Cloud Segmenter + Geotechnical Slope Stability Solver',
          auditStandard: 'AREMA Manual for Railway Engineering, ISO 22301 Business Continuity'
        }
      ]
    }
  ];

  const currentCluster = clusters[activeCluster];

  return (
    <section id="rd-pipeline" style={{
      padding: '120px 0',
      background: 'linear-gradient(180deg, #000A1A 0%, #00122e 50%, #000A1A 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background ambient lighting */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '-10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(2, 132, 199, 0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '15%',
        right: '-10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 4rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            background: 'rgba(212, 175, 55, 0.08)',
            border: '1px solid rgba(212, 175, 55, 0.25)',
            borderRadius: '100px',
            color: '#D4AF37',
            fontSize: '0.78rem',
            fontFamily: 'Space Mono, monospace',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}>
            🔬 R&D Architecture & Sovereign Domain Pipeline
          </div>

          <h2 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: '1.5rem',
            fontFamily: 'Outfit, sans-serif',
            color: '#F0F4FF',
          }}>
            One Sovereign Engine.{' '}
            <span style={{
              background: 'linear-gradient(135deg, #D4AF37 0%, #F0D060 50%, #4A9EFF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              29 High-Stakes Sovereign Domains.
            </span>
          </h2>

          <p style={{
            color: '#A0B0CC',
            fontSize: '1.05rem',
            lineHeight: 1.8,
            marginBottom: '2rem',
          }}>
            Our decoupled <strong style={{ color: '#F0F4FF' }}>SE(3) Lie Group engine</strong> and <strong style={{ color: '#F0F4FF' }}>1.58-bit SIMD kernel</strong> are pre-engineered to scale across 29 specialized enterprise verticals without changing core code.
          </p>

          {/* Architecture 3-Tier Hierarchy Banner */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
            background: 'rgba(0, 15, 45, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '14px',
            padding: '1.25rem',
            textAlign: 'left',
          }} className="hierarchy-banner">
            <div style={{ padding: '0.75rem', borderRight: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div style={{ color: '#D4AF37', fontFamily: 'Space Mono, monospace', fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>
                Tier 1 · Production Core
              </div>
              <div style={{ color: '#F0F4FF', fontWeight: 700, fontSize: '0.9rem' }}>
                Decoupled SE(3) Tensor Engine
              </div>
              <div style={{ color: '#607090', fontSize: '0.75rem', marginTop: '4px' }}>
                Left-Brain Router + Right-Brain Lie Invariant Math
              </div>
            </div>

            <div style={{ padding: '0.75rem', borderRight: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div style={{ color: '#10b981', fontFamily: 'Space Mono, monospace', fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>
                Tier 2 · Flagship Commercial (Phase 1)
              </div>
              <div style={{ color: '#F0F4FF', fontWeight: 700, fontSize: '0.9rem' }}>
                CAHAYA · LEI · LIA
              </div>
              <div style={{ color: '#607090', fontSize: '0.75rem', marginTop: '4px' }}>
                Agri/ESG (MPOB) · Drone Edge · BNM Cyber-Sandbox
              </div>
            </div>

            <div style={{ padding: '0.75rem' }}>
              <div style={{ color: '#4A9EFF', fontFamily: 'Space Mono, monospace', fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>
                Tier 3 · Scale-Up Roadmap (Phase 2–4)
              </div>
              <div style={{ color: '#F0F4FF', fontWeight: 700, fontSize: '0.9rem' }}>
                29 Sovereign Cartridges
              </div>
              <div style={{ color: '#607090', fontSize: '0.75rem', marginTop: '4px' }}>
                Modular Domain Adapters across 6 Strategic Clusters
              </div>
            </div>
          </div>
        </div>

        {/* 6-Cluster Tab Navigation */}
        <div style={{
          display: 'flex',
          gap: '8px',
          overflowX: 'auto',
          paddingBottom: '1rem',
          marginBottom: '2rem',
          scrollbarWidth: 'none',
        }} className="cluster-tabs">
          {clusters.map((c, i) => {
            const isActive = activeCluster === i;
            return (
              <button
                key={c.id}
                onClick={() => { setActiveCluster(i); setActiveDomain(null); }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 20px',
                  borderRadius: '10px',
                  border: isActive ? '1px solid #D4AF37' : '1px solid rgba(255, 255, 255, 0.08)',
                  background: isActive ? 'rgba(212, 175, 55, 0.12)' : 'rgba(0, 15, 40, 0.5)',
                  color: isActive ? '#F0D060' : '#A0B0CC',
                  cursor: 'pointer',
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.25s ease',
                  boxShadow: isActive ? '0 0 20px rgba(212, 175, 55, 0.15)' : 'none',
                }}
              >
                <span style={{ fontSize: '1.1rem' }}>{c.icon}</span>
                <span>Group {i + 1}: {c.shortName}</span>
                <span style={{
                  padding: '2px 8px',
                  borderRadius: '100px',
                  background: isActive ? 'rgba(212, 175, 55, 0.25)' : 'rgba(255, 255, 255, 0.06)',
                  color: isActive ? '#D4AF37' : '#607090',
                  fontSize: '0.7rem',
                  fontFamily: 'Space Mono, monospace',
                }}>
                  {c.domains.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Cluster Header */}
        <div style={{
          background: 'rgba(0, 20, 55, 0.7)',
          border: '1px solid rgba(212, 175, 55, 0.2)',
          borderRadius: '16px',
          padding: '2rem',
          marginBottom: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem',
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
              <span style={{ fontSize: '1.8rem' }}>{currentCluster.icon}</span>
              <h3 style={{ fontSize: '1.35rem', color: '#F0F4FF', fontWeight: 800 }}>
                Cluster {activeCluster + 1}: {currentCluster.name}
              </h3>
            </div>
            <p style={{ color: '#A0B0CC', fontSize: '0.9rem', margin: 0 }}>
              {currentCluster.tagline}
            </p>
          </div>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            background: 'rgba(2, 132, 199, 0.12)',
            border: '1px solid rgba(2, 132, 199, 0.3)',
            borderRadius: '8px',
            color: '#38bdf8',
            fontSize: '0.78rem',
            fontFamily: 'Space Mono, monospace',
          }}>
            ⚡ Anchor: {currentCluster.flagship}
          </div>
        </div>

        {/* 29 Domains Grid for Current Cluster */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem',
        }} className="domain-cards-grid">
          {currentCluster.domains.map((domain) => {
            const isSelected = activeDomain === domain.id;
            return (
              <div
                key={domain.id}
                onClick={() => setActiveDomain(isSelected ? null : domain.id)}
                className="glass-card"
                style={{
                  padding: '1.75rem',
                  borderRadius: '14px',
                  border: domain.isLive
                    ? '1px solid rgba(16, 185, 129, 0.5)'
                    : isSelected
                    ? '1px solid #D4AF37'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  background: domain.isLive
                    ? 'linear-gradient(145deg, rgba(16, 185, 129, 0.08) 0%, rgba(0, 20, 50, 0.8) 100%)'
                    : isSelected
                    ? 'rgba(0, 30, 75, 0.85)'
                    : 'rgba(0, 15, 40, 0.6)',
                  cursor: 'pointer',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: domain.isLive
                    ? '0 0 30px rgba(16, 185, 129, 0.15)'
                    : isSelected
                    ? '0 10px 30px rgba(212, 175, 55, 0.15)'
                    : 'none',
                }}
              >
                <div>
                  {/* Top Domain ID + Live Production Badge */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{
                      fontFamily: 'Space Mono, monospace',
                      fontSize: '0.75rem',
                      color: '#607090',
                      fontWeight: 700,
                    }}>
                      DOMAIN #{domain.id.toString().padStart(2, '0')}
                    </span>

                    {domain.isLive ? (
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '4px 10px',
                        background: 'rgba(16, 185, 129, 0.18)',
                        border: '1px solid rgba(16, 185, 129, 0.5)',
                        borderRadius: '100px',
                        color: '#10b981',
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        fontFamily: 'Space Mono, monospace',
                        letterSpacing: '0.5px',
                        boxShadow: '0 0 12px rgba(16, 185, 129, 0.4)',
                        animation: 'pulse-live 2s infinite',
                      }}>
                        <span style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: '#10b981',
                        }} />
                        {domain.flagshipTag || '[LIVE PRODUCTION]'}
                      </span>
                    ) : (
                      <span style={{
                        padding: '3px 8px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '100px',
                        color: '#607090',
                        fontSize: '0.65rem',
                        fontFamily: 'Space Mono, monospace',
                      }}>
                        PRE-COMPILED CARTRIDGE
                      </span>
                    )}
                  </div>

                  {/* Domain Title */}
                  <h4 style={{
                    fontSize: '1.12rem',
                    fontWeight: 700,
                    color: domain.isLive ? '#F0F4FF' : isSelected ? '#F0D060' : '#E0E2E5',
                    marginBottom: '0.75rem',
                    lineHeight: 1.35,
                  }}>
                    {domain.name}
                  </h4>

                  {/* Impact Summary */}
                  <p style={{
                    color: '#A0B0CC',
                    fontSize: '0.86rem',
                    lineHeight: 1.6,
                    marginBottom: '1rem',
                  }}>
                    {domain.impact}
                  </p>
                </div>

                {/* Technical Specs Accordion / Expanded Details */}
                <div style={{
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.6rem',
                }}>
                  <div>
                    <span style={{ color: '#D4AF37', fontSize: '0.7rem', fontFamily: 'Space Mono, monospace', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block' }}>
                      Target Institutions / Clients
                    </span>
                    <span style={{ color: '#F0F4FF', fontSize: '0.78rem', fontWeight: 500 }}>
                      {domain.targetAgency}
                    </span>
                  </div>

                  <div>
                    <span style={{ color: '#4A9EFF', fontSize: '0.7rem', fontFamily: 'Space Mono, monospace', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block' }}>
                      Core Mathematical Pipeline
                    </span>
                    <span style={{ color: '#BCC8D8', fontSize: '0.75rem' }}>
                      {domain.engine}
                    </span>
                  </div>

                  <div>
                    <span style={{ color: '#10b981', fontSize: '0.7rem', fontFamily: 'Space Mono, monospace', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block' }}>
                      Compliance & Statutory Alignment
                    </span>
                    <span style={{ color: '#8899B0', fontSize: '0.73rem', fontFamily: 'Space Mono, monospace' }}>
                      {domain.auditStandard}
                    </span>
                  </div>

                  {domain.isLive && domain.liveUrl && (
                    <div style={{ marginTop: '0.75rem' }}>
                      <Link
                        href={domain.liveUrl}
                        className="btn-primary"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '6px 14px',
                          fontSize: '0.75rem',
                          background: 'linear-gradient(135deg, #10b981, #059669)',
                          borderColor: '#10b981',
                        }}
                      >
                        Inspect Live Vertical <span>→</span>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Sovereign Credibility Note Banner */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(0, 20, 60, 0.9) 0%, rgba(0, 10, 30, 0.95) 100%)',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          borderRadius: '16px',
          padding: '2rem 2.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
        }} className="credibility-banner">
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '12px',
            background: 'rgba(212, 175, 55, 0.1)',
            border: '1px solid rgba(212, 175, 55, 0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.8rem',
            flexShrink: 0,
          }}>
            🏛️
          </div>

          <div style={{ flex: 1 }}>
            <h4 style={{ color: '#D4AF37', fontSize: '1.05rem', fontWeight: 700, marginBottom: '6px', fontFamily: 'Outfit, sans-serif' }}>
              Sovereignty, Audit Alignment & Air-Gapped Assurance
            </h4>
            <p style={{ color: '#A0B0CC', fontSize: '0.88rem', lineHeight: 1.7, margin: 0 }}>
              All 29 domains execute on-premise or at the edge with <strong style={{ color: '#F0F4FF' }}>zero cloud-leak</strong>, encrypted <strong style={{ color: '#F0F4FF' }}>SHA-256 Merkle proofs</strong>, and <strong style={{ color: '#F0F4FF' }}>SIRIM ISO 42001/27001</strong> audit alignment. Built for national infrastructure where public cloud AI is a disqualifying liability.
            </p>
          </div>

          <div style={{ flexShrink: 0 }}>
            <a
              href="#whitepapers"
              className="btn-secondary"
              style={{
                padding: '12px 22px',
                fontSize: '0.82rem',
                borderColor: 'rgba(212, 175, 55, 0.4)',
                color: '#D4AF37',
                whiteSpace: 'nowrap',
              }}
            >
              📄 Download R&D White Papers
            </a>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes pulse-live {
          0%, 100% { opacity: 1; box-shadow: 0 0 12px rgba(16, 185, 129, 0.4); }
          50% { opacity: 0.85; box-shadow: 0 0 20px rgba(16, 185, 129, 0.7); }
        }
        @media (max-width: 900px) {
          .hierarchy-banner { grid-template-columns: 1fr !important; }
          .credibility-banner { flex-direction: column !important; text-align: center; }
          .cluster-tabs { overflow-x: auto; -webkit-overflow-scrolling: touch; }
          .domain-cards-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
