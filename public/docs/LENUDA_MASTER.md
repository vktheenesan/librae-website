# LENUDA — Environmental Intelligence Ledger & Digital Twin Platform

> **Librae Environment Nature Unified Digital Asset**
>
> Product of Librae AI Labs | Version 1.0 | Last Updated: June 2026
>
> *Cloud-native. Blockchain-sealed. Continuously verified.*

---

## Table of Contents

1. [What Is LENUDA](#1-what-is-lenuda)
2. [Core dMRV Pipeline](#2-core-dmrv-pipeline)
3. [EUDR Compliance](#3-eudr-compliance)
4. [Satellite Pipeline](#4-satellite-pipeline)
5. [5-Stage Verification Loop](#5-5-stage-verification-loop)
6. [Blockchain Attestation](#6-blockchain-attestation)
7. [Carbon Credit Verification](#7-carbon-credit-verification)
8. [RSPO/MSPO Compliance](#8-rspmspo-compliance)
9. [Billing & Pricing](#9-billing--pricing)
10. [Interactive Carbon Calculator](#10-interactive-carbon-calculator)
11. [Platform Access](#11-platform-access)
12. [FAQ](#12-faq)

---

## 1. What Is LENUDA

LENUDA (**Librae Environment Nature Unified Digital Asset**) is a **cloud-native environmental intelligence ledger and digital twin platform**. It provides continuous, automated monitoring, verification, and reporting of environmental assets — from plantation boundaries to carbon stocks.

### Core Function

LENUDA's primary purpose is **ongoing dMRV** — digital Monitoring, Reporting, and Verification:

```
┌──────────────────────────────────────────────────────────────────────┐
│                        LENUDA Platform                                │
│                                                                      │
│   Continuous Satellite    →   Automated Compliance   →   Blockchain  │
│   Monitoring                  Verification               Sealed      │
│                                                          Audit Trail │
│                                                                      │
│   ┌─────────────┐   ┌──────────────────┐   ┌──────────────────┐     │
│   │ 30+ Sat     │   │ EUDR / RSPO /    │   │ SHA-256 Sealed   │     │
│   │ Constellations│  │ MSPO / Verra VCS │   │ Polygon L2       │     │
│   │ Weekly Sweeps│   │ Auto-Verification│   │ Immutable Ledger │     │
│   └─────────────┘   └──────────────────┘   └──────────────────┘     │
│                                                                      │
│   ┌─────────────────────────────────────────────────────────────┐    │
│   │                 Digital Twin Engine                          │    │
│   │   Living environmental replicas with real-time data feeds   │    │
│   └─────────────────────────────────────────────────────────────┘    │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

### LENUDA vs. CAHAYA

| Aspect | CAHAYA | LENUDA |
|--------|--------|--------|
| **Deployment** | Desktop (local machine) | Cloud-native (Librae infrastructure) |
| **Primary Use** | On-demand spatial analysis | Continuous monitoring & verification |
| **AI Compute** | User's own GPU | Librae's GPU allocation |
| **Storage** | User's local storage | Librae's cloud storage |
| **Air-Gapped** | Yes (fully offline) | No (cloud-dependent) |
| **Blockchain** | Not included | SHA-256 sealed, Polygon L2 attested |
| **Billing** | Per-seat annual license | Per-hectare + usage-based compute |
| **Best For** | Analysis, simulation, one-off projects | Ongoing compliance, auditing, dMRV |

LENUDA includes **all CAHAYA analytical capabilities** — satellite intelligence, AI agent, simulation lab, 10 industry domains — but runs on Librae's own cloud infrastructure with dedicated GPU allocation for each client.

---

## 2. Core dMRV Pipeline

LENUDA implements a fully automated **digital Monitoring, Reporting, and Verification** pipeline that replaces traditional manual auditing.

### Pipeline Architecture

```
┌─────────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│  MONITOR     │───→│   REPORT      │───→│   VERIFY      │───→│   ATTEST     │
│              │    │              │    │              │    │              │
│ Satellite    │    │ Automated    │    │ AI + Rules   │    │ Blockchain   │
│ feeds,       │    │ compliance   │    │ engine cross- │    │ sealed,      │
│ sensor data, │    │ report       │    │ validation    │    │ immutable    │
│ IoT streams  │    │ generation   │    │              │    │ audit trail  │
└─────────────┘    └──────────────┘    └──────────────┘    └──────────────┘
```

### What dMRV Replaces

| Traditional Approach | LENUDA dMRV |
|---------------------|-------------|
| Manual field audits (quarterly/annual) | Continuous satellite monitoring (weekly+) |
| Consultant-driven reports ($500+/ha) | Automated report generation (from $5/ha) |
| Paper-based verification | AI-powered rules engine verification |
| Fragmented audit trails | Blockchain-sealed immutable records |
| Months-long turnaround | Near real-time alerts and reports |
| Subjective assessments | Quantitative, satellite-derived metrics |

---

## 3. EUDR Compliance

### What Is EUDR?

The **EU Deforestation Regulation** (EUDR) is mandatory from **2025**. It requires companies placing certain commodities on the EU market to prove that their products are:

- **Deforestation-free** — no deforestation since December 31, 2020
- **Legally produced** — in compliance with the laws of the country of production
- **Covered by a due diligence statement** — with geolocation data for all plots of land

### Covered Commodities

| Commodity | Examples |
|-----------|---------|
| Palm oil | Crude palm oil, palm kernel oil, oleochemicals |
| Soy | Soybeans, soy meal, soy oil |
| Cocoa | Cocoa beans, cocoa butter, chocolate |
| Coffee | Green coffee, roasted coffee |
| Rubber | Natural rubber, latex products |
| Cattle | Beef, leather goods |
| Wood | Timber, paper, furniture, charcoal |

### How LENUDA Handles EUDR

```
┌───────────────────────────────────────────────────────────────┐
│                    LENUDA EUDR Workflow                        │
│                                                               │
│  1. Upload plantation/plot boundaries (GeoJSON/Shapefile)     │
│                     │                                         │
│  2. Baseline scan: Dec 31, 2020 satellite imagery              │
│                     │                                         │
│  3. Change detection: 2020 → present, weekly Sentinel sweeps   │
│                     │                                         │
│  4. AI classification: forest/non-forest, land-use change      │
│                     │                                         │
│  5. Compliance verdict: PASS / FAIL / REVIEW per polygon       │
│                     │                                         │
│  6. Due diligence package: geolocation, imagery, attestation   │
│                     │                                         │
│  7. Blockchain seal: SHA-256 → Merkle tree → Polygon L2       │
└───────────────────────────────────────────────────────────────┘
```

### EUDR Output Package

Each verified boundary generates a complete due diligence package:

| Document | Format | Contents |
|----------|--------|----------|
| Boundary Polygons | GeoJSON | Georeferenced boundary with CRS metadata |
| Baseline Imagery | GeoTIFF | Dec 31, 2020 composite (cloud-free) |
| Change Analysis | PDF | Temporal comparison report with evidence |
| Compliance Certificate | PDF | PASS/FAIL per polygon with methodology |
| Audit Hash | JSON | SHA-256 hash, Merkle root, transaction ID |
| Geolocation Data | CSV | Centroid coordinates for each plot |

---

## 4. Satellite Pipeline

### Primary Constellation Pairing

LENUDA combines **radar and optical** satellite data for all-weather, high-frequency monitoring:

| Satellite | Type | Capability | Revisit | Resolution |
|-----------|------|-----------|---------|------------|
| **Sentinel-1** | SAR (Synthetic Aperture Radar) | Penetrates clouds, day/night imaging, deformation detection | 6 days | 5m × 20m |
| **Sentinel-2** | Optical (Multispectral) | 13 spectral bands, vegetation indices, land classification | 5 days | 10m |

### Combined Sweep Schedule

```
Week 1:  Mon ─── Sentinel-2 optical pass ─── cloud-free composite
         Thu ─── Sentinel-1 SAR pass ──────── all-weather backup

Week 2:  Mon ─── Sentinel-2 optical pass ─── change detection
         Thu ─── Sentinel-1 SAR pass ──────── deformation check

         ... continuous cycle ...
```

### Extended Constellation Access

Through **Google Earth Engine (GEE)**, LENUDA accesses **30+ satellite constellations**:

| Category | Constellations | Use Case |
|----------|---------------|----------|
| Optical High-Res | Landsat 8/9, MODIS, VIIRS | Land cover classification, historical baselines |
| Radar | Sentinel-1, ALOS PALSAR | Forest structure, flood mapping, deformation |
| Atmospheric | Sentinel-5P, TROPOMI | Air quality, methane detection |
| Thermal | Landsat TIRS, ECOSTMWF | Fire detection, urban heat islands |
| Elevation | SRTM, ALOS AW3D30, Copernicus DEM | Terrain modeling, flood routing |
| Vegetation | MODIS LAI/FPAR, VIIRS VNP | Canopy dynamics, phenology tracking |

---

## 5. 5-Stage Verification Loop

Every environmental asset in LENUDA passes through a **5-stage verification loop** that ensures data integrity from ingestion to attestation.

### Stage Diagram

```
┌──────────────┐   ┌──────────────┐   ┌──────────────┐   ┌──────────────┐   ┌──────────────┐
│  STAGE 1      │   │  STAGE 2      │   │  STAGE 3      │   │  STAGE 4      │   │  STAGE 5      │
│  Boundary     │──→│  Baseline     │──→│  Continuous   │──→│  SHA-256      │──→│  L2            │
│  Ingestion    │   │  Scan         │   │  Audit        │   │  Sealing      │   │  Attestation   │
└──────────────┘   └──────────────┘   └──────────────┘   └──────────────┘   └──────────────┘
```

### Stage Details

#### Stage 1: Boundary Ingestion

- Accept boundary polygons in GeoJSON, Shapefile, KML, GeoPackage, WKT
- Topology validation (self-intersections, slivers, gaps)
- CRS normalization to EPSG:4326 (WGS 84)
- Area calculation and centroid extraction
- Metadata tagging (owner, commodity, certification scheme)

#### Stage 2: Baseline Scan

- Retrieve satellite imagery for the **regulatory baseline date** (e.g., Dec 31, 2020 for EUDR)
- Generate cloud-free composite from best-available imagery
- Land cover classification: forest, agriculture, water, urban, bare soil
- Calculate baseline vegetation indices (NDVI, NDWI, EVI)
- Store as immutable reference dataset

#### Stage 3: Continuous Audit

- **Weekly Sentinel-1 + Sentinel-2 sweeps** over all registered boundaries
- Automated change detection against baseline
- AI classification of detected changes:
  - Deforestation / degradation
  - New planting / replanting
  - Infrastructure development
  - Natural events (fire, flood, landslide)
- Alert generation for non-compliant changes
- Confidence scoring for each detection

#### Stage 4: SHA-256 Sealing

- Every data package (imagery, analysis results, compliance verdict) is **SHA-256 hashed**
- Individual hashes are compiled into a **Merkle tree**
- Merkle root represents the cryptographic summary of the entire verification batch
- Sealing timestamp recorded with millisecond precision
- Hash chain ensures any tampering is immediately detectable

#### Stage 5: L2 Attestation

- Merkle root is **attested on Polygon L2** (Layer 2 blockchain)
- Transaction creates an immutable, publicly verifiable record
- Attestation includes:
  - Merkle root hash
  - Batch metadata (boundary count, date range, verification type)
  - LENUDA platform version
  - Transaction ID for public verification
- Records are **audit-ready** — any auditor can independently verify the attestation

---

## 6. Blockchain Attestation

### Architecture

LENUDA's blockchain layer provides **immutable, tamper-evident audit trails** for all environmental data.

```
┌─────────────────────────────────────────────────────────────────┐
│                    Attestation Pipeline                          │
│                                                                 │
│   Data Package    →    SHA-256 Hash    →    Merkle Tree         │
│   (imagery,            (per package)        (batch compilation)  │
│    analysis,                                                    │
│    verdict)                                                     │
│                                                                 │
│                                           Merkle Root           │
│                                              │                  │
│                                              ▼                  │
│                                        Polygon L2               │
│                                        Attestation              │
│                                              │                  │
│                                              ▼                  │
│                                     Immutable Audit-Ready        │
│                                     Carbon Records               │
└─────────────────────────────────────────────────────────────────┘
```

### Why Blockchain?

| Challenge | Traditional Approach | LENUDA Solution |
|-----------|---------------------|----------------|
| Data tampering | Trust-based (certificates, signatures) | Cryptographic proof (SHA-256 + Merkle trees) |
| Audit trail integrity | Paper records, databases | Immutable blockchain attestation |
| Third-party verification | Requires trusted intermediary | Publicly verifiable on-chain |
| Historical records | Subject to modification | Permanent, timestamped records |
| Cross-border recognition | Jurisdiction-dependent | Universal cryptographic standard |

### Polygon L2 Selection Rationale

| Factor | Polygon L2 |
|--------|-----------|
| Transaction cost | < $0.01 per attestation |
| Finality time | ~2 seconds |
| Environmental footprint | Proof-of-Stake (minimal energy) |
| Ethereum compatibility | Full EVM compatibility, inherits Ethereum security |
| Enterprise adoption | Used by major institutions globally |

### Verification Process

Any auditor, regulator, or third party can independently verify a LENUDA attestation:

```
1. Obtain attestation transaction ID from LENUDA certificate
2. Look up transaction on Polygon L2 block explorer
3. Extract Merkle root from transaction data
4. Request original data packages from LENUDA
5. Recompute SHA-256 hashes and Merkle tree
6. Compare computed Merkle root with on-chain record
7. Match confirms data integrity ✓
```

---

## 7. Carbon Credit Verification

### Methodology: Verra VCS (Verified Carbon Standard)

LENUDA implements the **Verra Verified Carbon Standard** methodology for forest carbon credit quantification and verification.

### Carbon Quantification Pipeline

```
┌────────────────┐   ┌────────────────┐   ┌────────────────┐   ┌────────────────┐
│ Canopy Height  │──→│ Biomass Volume │──→│ Carbon Stock   │──→│ Credit         │
│ Model (CHM)    │   │ Estimation     │   │ Calculation    │   │ Issuance       │
└────────────────┘   └────────────────┘   └────────────────┘   └────────────────┘
```

#### Step 1: Canopy Height Models (CHM)

- LiDAR-derived or photogrammetric canopy height at sub-meter resolution
- Sentinel-2 assisted CHM calibration for broad-area coverage
- Tree crown delineation and individual tree detection
- Canopy cover percentage calculation

#### Step 2: Biomass Volume Estimation

- Allometric equations applied to CHM data
- Species-specific or pantropical biomass models
- Above-ground biomass (AGB) per hectare
- Below-ground biomass estimation (root-to-shoot ratios)

#### Step 3: Carbon Stock Calculation

- Biomass → Carbon conversion (typically 0.47 factor)
- Carbon density mapping (tC/ha)
- Baseline carbon stock establishment
- Leakage and permanence risk assessment

#### Step 4: Credit Issuance

- Net carbon sequestration calculation (monitoring period)
- Additionality demonstration
- Buffer pool allocation (risk of reversal)
- Verification-ready documentation package

### REDD+ Monitoring

LENUDA supports **REDD+** (Reducing Emissions from Deforestation and Forest Degradation):

| REDD+ Component | LENUDA Capability |
|----------------|-------------------|
| Activity Data | Automated deforestation/degradation detection from satellite time-series |
| Emission Factors | Species-specific and pantropical allometric models |
| Reference Level | Historical baseline from satellite archive (10+ years) |
| MRV | Continuous satellite monitoring with blockchain attestation |
| Safeguards | Community boundary mapping, indigenous land overlay |

---

## 8. RSPO/MSPO Compliance

### RSPO (Roundtable on Sustainable Palm Oil)

LENUDA automates key RSPO compliance requirements:

| RSPO Requirement | LENUDA Automation |
|-----------------|-------------------|
| **Principle 7.1** — New planting on land cleared after Nov 2005 | Historical satellite analysis, land cover classification |
| **HCV Assessment** — High Conservation Value area identification | AI-powered habitat classification, species distribution modeling |
| **HCS Assessment** — High Carbon Stock forest identification | Canopy height models, carbon density mapping |
| **NPP (New Planting Procedure)** | Automated boundary submission, satellite evidence package |
| **Supply Chain Traceability** | Mill-to-plantation boundary mapping, geofencing |
| **Annual Surveillance** | Continuous satellite monitoring, automated alerts |

### MSPO (Malaysian Sustainable Palm Oil)

| MSPO Requirement | LENUDA Automation |
|-----------------|-------------------|
| **Principle 4** — Environment, Natural Resources, Biodiversity | Continuous monitoring of buffer zones, riparian areas |
| **Land Use Verification** | Boundary auditing against title and gazette boundaries |
| **Compliance Reporting** | Automated report generation for MSPO audit cycle |
| **Smallholder Support** | Simplified boundary upload, group certification management |

### Supply Chain Boundary Auditing

```
Mill Catchment Area
├── Estate A (verified ✓)
│   ├── Block 1 — 450 ha — EUDR PASS
│   ├── Block 2 — 380 ha — EUDR PASS
│   └── Block 3 — 520 ha — EUDR REVIEW (cloud cover, rescanning)
├── Estate B (verified ✓)
│   ├── Block 1 — 600 ha — EUDR PASS
│   └── Block 2 — 290 ha — EUDR PASS
└── Smallholder Group C (in progress)
    ├── Plot 1 — 12 ha — EUDR PASS
    ├── Plot 2 — 8 ha — EUDR PASS
    └── Plot 3 — 15 ha — Pending boundary correction
```

---

## 9. Billing & Pricing

LENUDA uses a fundamentally different billing model from CAHAYA. Instead of per-seat licensing, LENUDA charges based on **monitored area and compute usage**.

### Pricing Structure

| Component | Price | Description |
|-----------|-------|-------------|
| **Platform Fee** | From **$5/hectare** | Base rate for boundary monitoring, compliance verification, blockchain attestation |
| **Cloud Compute** | Usage-based | GPU hours consumed for AI analysis, simulation, report generation |
| **Storage** | Usage-based | Satellite imagery, analysis outputs, historical archives |
| **GPU Allocation** | Dedicated per client | Own GPU allocation on Librae infrastructure — no shared queues |

### Cost Comparison: LENUDA vs. Traditional

| Service | Traditional Consulting | LENUDA |
|---------|----------------------|--------|
| EUDR boundary audit | $500–$2,000/ha | From $5/ha |
| Carbon credit MRV | $50,000–$200,000/project | Usage-based, from $5/ha |
| RSPO audit support | $100,000+/year | Included in platform fee |
| Ongoing monitoring | Manual re-surveys ($$$) | Continuous, automated |
| Turnaround time | 3–12 months | Days to weeks |
| Audit trail | Paper-based | Blockchain-sealed |

### Pricing Tiers

| Tier | Area Coverage | Features | Indicative Price |
|------|-------------|----------|-----------------|
| **Starter** | Up to 5,000 ha | EUDR compliance, basic monitoring | From $5/ha/year |
| **Professional** | 5,000–50,000 ha | Full dMRV, carbon verification, multi-scheme | Custom pricing |
| **Enterprise** | 50,000+ ha | Dedicated GPU, SLA, API access, custom integrations | Custom pricing |

### What's Included in Platform Fee

- ✅ Weekly Sentinel-1 + Sentinel-2 monitoring
- ✅ Automated change detection and alerts
- ✅ EUDR compliance verification
- ✅ Blockchain attestation (SHA-256 + Polygon L2)
- ✅ Compliance reports (PDF, GeoJSON)
- ✅ Dashboard access
- ✅ Standard support

### What's Usage-Based

- 💳 Advanced AI analysis (carbon estimation, simulation)
- 💳 High-resolution imagery processing (Planet Labs, commercial satellites)
- 💳 Custom report generation
- 💳 API calls beyond standard allocation
- 💳 Extended historical archive storage

---

## 10. Interactive Carbon Calculator

### Access

The LENUDA Interactive Carbon Calculator is available at:

👉 **[librae.work/lenuda](https://librae.work/lenuda)**

### What It Does

The calculator provides **instant estimates** of:

- Carbon stock per hectare based on land type and region
- Potential carbon credit revenue at current market prices
- Cost comparison: LENUDA vs. traditional MRV consulting
- ROI projection for LENUDA platform adoption

### How to Use

1. Visit [librae.work/lenuda](https://librae.work/lenuda)
2. Enter your total monitored area (hectares)
3. Select land type (tropical forest, plantation, mangrove, etc.)
4. Select compliance schemes (EUDR, Verra VCS, RSPO, MSPO)
5. View instant cost and carbon estimates
6. Download estimate report or contact sales

---

## 11. Platform Access

### Login

Access the LENUDA platform at:

👉 **[https://lenuda.librae.work/Login](https://lenuda.librae.work/Login)**

### Getting Started

1. **Request Access** — Contact Librae AI Labs via [librae.work/contact](https://librae.work/contact) or email sales@librae.work
2. **Onboarding** — Librae team configures your workspace, GPU allocation, and monitoring areas
3. **Boundary Upload** — Upload your plantation/plot boundaries
4. **Monitoring Begins** — Automated satellite sweeps commence within 24 hours
5. **Dashboard Live** — Access compliance status, alerts, and reports

### Platform Features

| Feature | Description |
|---------|-------------|
| **Dashboard** | Real-time compliance status across all boundaries |
| **Alert System** | Automated notifications for detected changes |
| **Report Center** | Generate and download compliance reports |
| **Map Viewer** | Interactive map with satellite imagery overlays |
| **Audit Trail** | Blockchain-sealed verification history |
| **API Access** | RESTful API for integration with existing systems |
| **Team Management** | Multi-user access with role-based permissions |

---

## 12. FAQ

**Q: How is LENUDA different from CAHAYA?**
A: CAHAYA is a desktop application for on-demand spatial analysis. LENUDA is a cloud platform for continuous monitoring and verification (dMRV). LENUDA includes all CAHAYA capabilities but runs on Librae's cloud with dedicated GPU and adds blockchain attestation and ongoing monitoring.

**Q: Do I need CAHAYA to use LENUDA?**
A: No. LENUDA is a standalone cloud platform accessible via web browser. However, CAHAYA users can export projects to LENUDA for ongoing monitoring.

**Q: How often are boundaries scanned?**
A: Weekly at minimum (Sentinel-1 + Sentinel-2 combined). Higher-frequency monitoring available with commercial satellite add-ons.

**Q: Is the blockchain attestation legally recognized?**
A: Blockchain attestation provides cryptographic proof of data integrity. While legal recognition varies by jurisdiction, the EU's approach to digital evidence increasingly supports cryptographically verifiable records. LENUDA's attestation meets the technical requirements for evidentiary purposes.

**Q: Can I use LENUDA for carbon credit issuance?**
A: LENUDA provides Verra VCS-compliant carbon quantification and MRV documentation. Actual credit issuance requires submission to a carbon standard (Verra, Gold Standard) with LENUDA outputs as supporting evidence.

**Q: What happens to my data if I cancel?**
A: You retain full export access to all your data, reports, and attestation records for 90 days after cancellation. Blockchain attestations remain permanently on-chain regardless of subscription status.

**Q: Can LENUDA handle smallholder plots?**
A: Yes. LENUDA supports boundaries of any size, from 1-hectare smallholder plots to 100,000+ hectare concessions. Group certification management is available for smallholder cooperatives.

**Q: How accurate is the deforestation detection?**
A: LENUDA achieves >95% accuracy for deforestation detection at 10m resolution using combined Sentinel-1 (radar) and Sentinel-2 (optical) data. All detections include confidence scores and are available for manual review.

**Q: Is my data shared with other clients?**
A: No. Each client has dedicated storage, dedicated GPU allocation, and isolated environments. Your boundary data, analysis results, and reports are never shared or accessible to other clients.

**Q: What regions does LENUDA cover?**
A: LENUDA operates globally. Sentinel-1 and Sentinel-2 provide worldwide coverage. Regional expertise is strongest in Southeast Asia (Malaysia, Indonesia), West Africa, and South America — the primary EUDR commodity regions.

---

## Support & Contact

| Channel | Details |
|---------|---------|
| Platform Login | [lenuda.librae.work/Login](https://lenuda.librae.work/Login) |
| Carbon Calculator | [librae.work/lenuda](https://librae.work/lenuda) |
| Sales & Onboarding | sales@librae.work |
| Technical Support | support@librae.work |
| AI Chat | [librae.work/contact](https://librae.work/contact) |

---

*© 2026 Librae AI Labs. All rights reserved.*
*LENUDA — Librae Environment Nature Unified Digital Asset — is a registered trademark of Librae AI Labs Sdn. Bhd.*
