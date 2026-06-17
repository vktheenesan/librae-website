# CAHAYA — Sovereign Edge-Compute Spatial Intelligence Workspace

> **Product of Librae AI Labs** | Version 1.0 | Last Updated: June 2026
>
> *Air-gapped. Local-first. AI-native.*

---

## Table of Contents

1. [What Is CAHAYA](#1-what-is-cahaya)
2. [The 3-Panel Layout](#2-the-3-panel-layout)
3. [AI Architecture](#3-ai-architecture)
4. [10 Industry Domains](#4-10-industry-domains)
5. [Licensing & Pricing](#5-licensing--pricing)
6. [System Requirements](#6-system-requirements)
7. [Download & Install](#7-download--install)
8. [Security Architecture](#8-security-architecture)
9. [30-Day Free Trial](#9-30-day-free-trial)
10. [FAQ & Troubleshooting](#10-faq--troubleshooting)

---

## 1. What Is CAHAYA

CAHAYA is a **sovereign, air-gapped desktop workspace** for spatial intelligence. It is not a cloud service — it runs **entirely on your local machine**, giving you full ownership of your data, models, and outputs.

### Core Architecture

CAHAYA is built on a **7-layer HTML5/JS + FastAPI architecture**:

| Layer | Technology | Function |
|-------|-----------|----------|
| 1 | HTML5 / CSS3 | Presentation & responsive layout |
| 2 | JavaScript (ES2024+) | Client-side logic & UI state management |
| 3 | MapLibre GL JS | Geospatial rendering, vector tiles, 3D terrain |
| 4 | Three.js / WebGL | Digital twin simulation & physics engine |
| 5 | Web Workers | Parallel compute for raster analysis |
| 6 | FastAPI (Python) | Local REST API, model orchestration, GIS compute |
| 7 | Local LLM Runtime | On-device AI inference (GGUF / ONNX) |

**Key Principles:**

- **Zero cloud dependency** — every computation runs on your hardware
- **Air-gapped capable** — no internet required after initial setup
- **Full GIS-standard compliance** — outputs in every major geospatial format
- **AI-native** — an autonomous AI agent is the primary interface

---

## 2. The 3-Panel Layout

CAHAYA's interface is divided into three functional zones designed for maximum workflow efficiency.

```
┌──────────────┬──────────────────────────────────────┬──────────────────┐
│              │                                      │                  │
│   LEFT       │          CENTER WORKSPACE             │    RIGHT PANEL   │
│   SIDEBAR    │          (Main Area)                  │    (AI Agent)    │
│              │                                      │                  │
│  Admin &     │  ┌──────┬──────────┬──────────┐      │  Natural         │
│  Config      │  │Earth │ AI Work  │Simulation│      │  Language        │
│              │  │Intel │ Engine   │   Lab    │      │  Interface       │
│  Expandable  │  └──────┴──────────┴──────────┘      │                  │
│              │                                      │  Plan → Review   │
│              │  MapLibre GL JS Viewport              │  → Execute       │
│              │  Vector / Multispectral Views          │                  │
│              │                                      │  Full Chat       │
│              │                                      │  History         │
│              │                                      │                  │
└──────────────┴──────────────────────────────────────┴──────────────────┘
```

---

### 2.1 LEFT SIDEBAR — Administration & Configuration

The left sidebar is an expandable admin panel that controls workspace configuration, connections, and domain selection.

#### Industry Domain Selector

Select from **10 specialized industry domains** — each loads domain-specific AI models, regulatory frameworks, analysis templates, and output standards:

| # | Domain | Key Focus |
|---|--------|-----------|
| 1 | Agriculture & ESG | EUDR, RSPO/MSPO, plantation boundary auditing |
| 2 | Mining & Resources | JORC 2012, volumetrics, resource estimation |
| 3 | Urban Planning | FAR density, height compliance, shadow analysis |
| 4 | Defense & Security | Zero-egress viewsheds, threat mapping |
| 5 | Maritime & Coastal | Bathymetry, S-57 charts, shoreline drift |
| 6 | Environmental | EIA automation, pollutant dispersion modeling |
| 7 | Energy & Renewables | Solar GHI, Weibull wind, grid optimization |
| 8 | Infrastructure | Pipeline deformation, rail alignment, BIM |
| 9 | Forestry & Carbon | Canopy height models, Verra VCS carbon credits |
| 10 | Emergency Response | Flood routing, Rothermel wildfire simulation |

#### Satellite Constellation Status

Live status panel for **Google Earth Engine (GEE)** satellite constellations:

- Connection health indicators (green/amber/red)
- Data freshness timestamps
- Band availability per constellation
- Coverage footprint for active area of interest

#### API Connections

Manage connections to external geospatial data providers:

| Provider | Data Type | Auth Method |
|----------|-----------|-------------|
| Google Earth Engine (GEE) | Satellite imagery, 30+ constellations | Service account / OAuth |
| ESRI ArcGIS | Basemaps, feature services, geocoding | API key |
| Sentinel Hub | Sentinel-1/2, Landsat, custom scripts | OAuth client credentials |
| Planet Labs | High-res daily imagery (3m–50cm) | API key |

#### MCP Server Connections

Configure **Model Context Protocol (MCP)** server connections for extended AI tool use — file system access, database queries, external API orchestration.

#### API Key Management

Secure vault for all API credentials:

- Encrypted at rest (AES-256)
- Per-key access scoping
- Rotation reminders
- Usage logging

#### Document Upload Folder

Upload reference documents (PDFs, reports, standards, regulations) for the AI to learn from:

- **Personalizes the AI** to your organization's specific context
- Supports: PDF, DOCX, TXT, CSV, XLSX, GeoJSON
- Embedded into local vector store for retrieval-augmented generation (RAG)
- Documents never leave your machine

#### Additional Admin Controls

- **AI Name & Language Customization** — rename the AI agent, set preferred response language
- **User Management** — create accounts, assign domain permissions, audit activity logs
- **Bug Reporting** — built-in bug reporter with screenshot capture, logs auto-attached

---

### 2.2 CENTER WORKSPACE — Main Canvas

The center panel is the primary workspace — the largest area of the interface. It contains three tabbed modules:

#### Tab 1: Earth Intelligence

Real-time satellite intelligence powered by Google Earth Engine.

- **30+ satellite constellations** accessible through GEE
- **AI Scan** — automated anomaly detection, change analysis, classification
- Multispectral band composites (NDVI, NDWI, NBR, SAVI, etc.)
- Time-series analysis with temporal sliders
- Cloud masking and atmospheric correction
- Export to GeoTIFF, COG, PNG with full georeferencing

#### Tab 2: AI Work Engine

Document-centric analytical workspace:

- **Upload** — ingest datasets, shapefiles, rasters, point clouds, CAD files
- **Analyse** — AI-powered spatial analysis, statistical computation, pattern recognition
- **Export** — generate reports, maps, datasets in all GIS-standard formats

Supported analysis outputs:

```
PDF Reports          │  GeoJSON / TopoJSON    │  Shapefiles (.shp)
Video Animations     │  GeoTIFF / COG         │  KML / KMZ
Map Overlays         │  CSV / Excel           │  GeoPackage (.gpkg)
3D Models (.glb)     │  DXF / DWG             │  PostGIS SQL
```

#### Tab 3: Simulation Lab

Full digital twin simulation environment:

- **Digital Twin Engine** — create living replicas of physical environments
- **Three.js WebGL** — hardware-accelerated 3D rendering
- **Real-time Physics** — fluid dynamics (flood), fire spread (Rothermel), structural loading
- Scenario modeling with adjustable parameters
- Time-step simulation playback with export to video

#### Core Viewport Features

- **MapLibre GL JS** — high-performance vector tile rendering
- **Relational Attribute Editor** — edit feature properties with schema-aware forms
- **Python CadQuery Compiler** — programmatic 3D geometry generation
- **Vector / Multispectral Views** — toggle between vector overlays and raster imagery

---

### 2.3 RIGHT PANEL — AI Agent

The right panel houses CAHAYA's autonomous AI agent — the primary way users interact with the system.

#### Natural Language Workflow

Users describe tasks in plain language. The AI handles everything:

**Step 1 — Describe**
```
User: "Flood simulation for Klang Valley, 100-year return period"
```

**Step 2 — AI Creates Plan**

The AI generates a detailed execution plan:

| Plan Element | Example |
|-------------|---------|
| Location | Klang Valley, Selangor (3.0319° N, 101.6841° E) |
| Scale | 45 km² catchment area, 5m DEM resolution |
| Actors Involved | DID (Drainage & Irrigation), NADMA, local authorities |
| Data Sources | SRTM DEM, Sentinel-1 SAR, JPS rainfall data |
| Key Factors | Manning's n coefficients, soil infiltration, land use |
| NPCs / Agents | Upstream dam operators, drainage infrastructure |
| Special Design | 3D terrain model, animated flood progression |
| Custom Data Needs | Historical rainfall records, culvert capacities |

**Step 3 — Review & Edit**

User reviews the plan, adjusts parameters, adds constraints.

**Step 4 — Execute**

AI orchestrates the full pipeline — data acquisition, processing, simulation, rendering.

**Step 5 — Output**

Deliverables in **all GIS-standard formats**:

- PDF reports with full metadata and methodology
- GeoJSON / Shapefile with flood extent polygons
- Video animation of flood progression
- Map overlays for web or desktop GIS
- Full metadata, coordinate reference systems, projection info
- GIS-standard compliance (OGC, ISO 19115)

#### Additional AI Features

- **Chat History Preserved** — continue previous work sessions, pick up where you left off
- **Web Toggle** — switch internet access on/off for air-gapped mode
- **Desktop File Access** — AI can find, read, and explain any document on your PC
- **Context Awareness** — AI understands what's loaded in the viewport and responds accordingly

---

## 3. AI Architecture

CAHAYA employs a **multi-model routing architecture** that selects the optimal AI model for each task type.

### Model Routing

```
┌─────────────────────────────────────────────────────┐
│                   Task Router                        │
├──────────────┬──────────────┬────────────────────────┤
│   Spatial    │    Report    │     Fallback           │
│  Reasoning   │   Drafting   │      Chain             │
├──────────────┼──────────────┼────────────────────────┤
│  Librae GeoInt AI 2.5   │   Librae Report Engine     │  Librae GeoInt AI → Librae Report Engine         │
│  (Local)     │   (Cloud)    │  → Claude (if online)  │
└──────────────┴──────────────┴────────────────────────┘
```

| Model | Role | Runs Where | Air-Gapped? |
|-------|------|-----------|-------------|
| **Librae GeoInt AI 2.5** (7B/32B/72B) | Spatial reasoning, GIS analysis, code generation | Local GPU | ✅ Yes |
| **Librae Report Engine** | Report drafting, natural language, research | Cloud API | ❌ No (requires internet) |
| **Fallback Chain** | Automatic failover if primary model is unavailable | Auto-routed | Varies |

### Air-Gapped Mode

When running in air-gapped mode (no internet):

- **Librae GeoInt AI handles all tasks** — spatial reasoning, report writing, analysis
- No data leaves the machine
- All satellite data must be pre-loaded or ingested from local files
- Full functionality maintained for analysis, simulation, and reporting

### Desktop File Access

CAHAYA's AI can access and analyze files stored anywhere on your local machine:

- Read and summarize PDFs, Word documents, spreadsheets
- Parse GIS files (shapefiles, GeoJSON, GeoTIFF)
- Explain code files, configuration, and scripts
- Cross-reference multiple documents for comprehensive analysis

---

## 4. 10 Industry Domains

Each domain pack loads specialized models, regulatory frameworks, analysis templates, and output standards.

---

### 4.1 Agriculture & ESG

**Primary Focus:** EUDR compliance, plantation boundary auditing, ESG reporting

| Capability | Detail |
|-----------|--------|
| **EUDR Boundary Auditing** | Automated verification of zero-deforestation since Dec 31, 2020. Polygon-level auditing against satellite baselines. |
| **RSPO Compliance** | Roundtable on Sustainable Palm Oil — New Planting Procedure (NPP) compliance, HCV/HCS assessment support |
| **MSPO Compliance** | Malaysian Sustainable Palm Oil — boundary verification, audit trail generation |
| **Carbon Estimation** | Above-ground biomass estimation from canopy height models, REDD+ compatible outputs |
| **Crop Health Monitoring** | NDVI time-series, pest/disease anomaly detection, yield estimation |
| **Supply Chain Traceability** | Mill-to-plantation boundary mapping, chain of custody documentation |

---

### 4.2 Mining & Resources

**Primary Focus:** JORC 2012 compliance, resource estimation, volumetric analysis

| Capability | Detail |
|-----------|--------|
| **JORC 2012 Reporting** | Joint Ore Reserves Committee standard — Exploration Results, Mineral Resources, Ore Reserves classification |
| **Stockpile Volumetrics** | Point cloud → DEM differencing → volume calculation with cut/fill analysis |
| **Pit Optimization** | Open-pit design optimization with slope stability constraints |
| **Rehabilitation Monitoring** | Temporal NDVI analysis for mine site rehabilitation compliance |
| **Tailings Dam Monitoring** | InSAR deformation monitoring, stability risk assessment |
| **Resource Block Modeling** | 3D block model generation from drill-hole data |

---

### 4.3 Urban Planning

**Primary Focus:** Development control, density analysis, compliance verification

| Capability | Detail |
|-----------|--------|
| **FAR Density Analysis** | Floor Area Ratio calculation from building footprints and zoning overlays |
| **Solar Shadow Analysis** | Hour-by-hour shadow casting simulation for development impact assessment |
| **Height Compliance** | Building height verification against zoning regulations and flight path restrictions |
| **Traffic Impact** | Origin-destination modeling, intersection capacity analysis |
| **Green Space Assessment** | Urban canopy cover percentage, park accessibility isochrones |
| **Infrastructure Capacity** | Utility network capacity analysis (water, sewage, electrical) |

---

### 4.4 Defense & Security

**Primary Focus:** Operational security, terrain analysis, zero-egress operation

| Capability | Detail |
|-----------|--------|
| **Zero-Egress Viewsheds** | Line-of-sight analysis with terrain and structure occlusion — fully air-gapped |
| **Threat Mapping** | Threat corridor identification, vulnerability assessment overlays |
| **Terrain Analysis** | Slope, aspect, roughness, cover and concealment classification |
| **Route Planning** | Optimal path analysis with terrain cost surfaces and avoidance zones |
| **Change Detection** | Automated detection of construction, vehicle movement, terrain modification |
| **Signals Analysis** | RF propagation modeling, communication dead-zone mapping |

---

### 4.5 Maritime & Coastal

**Primary Focus:** Hydrographic surveying, coastal management, navigation charting

| Capability | Detail |
|-----------|--------|
| **Bathymetry** | Satellite-derived bathymetry (SDB) from multispectral imagery |
| **Shoreline Drift Analysis** | Historical shoreline extraction and erosion/accretion rate calculation |
| **S-57 Electronic Navigation Charts** | IHO S-57 compliant chart production with standard object/attribute catalogs |
| **Coastal Flood Modeling** | Storm surge simulation with tidal harmonics and sea-level rise scenarios |
| **Port & Harbor Analysis** | Berth utilization, vessel traffic density, dredging volume estimation |
| **Marine Protected Areas** | Habitat classification, coral reef health assessment from multispectral data |

---

### 4.6 Environmental

**Primary Focus:** Environmental Impact Assessments, pollution modeling, regulatory compliance

| Capability | Detail |
|-----------|--------|
| **EIA Automation** | Automated Environmental Impact Assessment report generation with spatial evidence |
| **Pollutant Dispersion Modeling** | Gaussian plume modeling for air quality, advection-diffusion for water contamination |
| **Biodiversity Assessment** | Habitat suitability modeling, species distribution prediction |
| **Water Quality** | Remote sensing-derived turbidity, chlorophyll-a, cyanobacteria indices |
| **Noise Mapping** | ISO 9613-2 compliant noise propagation modeling |
| **Waste Site Monitoring** | Landfill volume estimation, leachate migration risk assessment |

---

### 4.7 Energy & Renewables

**Primary Focus:** Solar/wind resource assessment, grid optimization, energy modeling

| Capability | Detail |
|-----------|--------|
| **Solar GHI Analysis** | Global Horizontal Irradiance mapping from satellite-derived datasets |
| **Weibull Wind Analysis** | Wind resource assessment using Weibull distribution fitting at hub height |
| **Solar Farm Layout** | Panel placement optimization with terrain constraints and shading analysis |
| **Grid Connection** | Transmission line routing, substation proximity analysis |
| **Energy Yield Estimation** | Annual energy production modeling (P50/P90) with loss factors |
| **Environmental Screening** | Avian risk assessment, visual impact analysis, glint-and-glare modeling |

---

### 4.8 Infrastructure

**Primary Focus:** Linear asset monitoring, structural assessment, construction management

| Capability | Detail |
|-----------|--------|
| **Pipeline Deformation** | InSAR-based ground deformation monitoring along pipeline corridors |
| **Rail Alignment** | Horizontal/vertical alignment verification from survey data and LiDAR |
| **Road Network Analysis** | Pavement condition assessment, traffic flow optimization |
| **Bridge Inspection** | Point cloud analysis for structural deformation detection |
| **Construction Progress** | Drone imagery comparison for construction milestone tracking |
| **Utility Corridor Planning** | Multi-criteria corridor selection with environmental and engineering constraints |

---

### 4.9 Forestry & Carbon

**Primary Focus:** Forest inventory, carbon accounting, REDD+ compliance

| Capability | Detail |
|-----------|--------|
| **Canopy Height Models (CHM)** | LiDAR/photogrammetric-derived canopy height at sub-meter resolution |
| **Verra VCS Carbon Credits** | Verified Carbon Standard methodology — baseline setting, additionality, permanence |
| **Biomass Estimation** | Allometric equations applied to CHM for above-ground biomass calculation |
| **REDD+ Monitoring** | Reducing Emissions from Deforestation and Degradation — activity data, emission factors |
| **Forest Inventory** | Automated tree detection, species classification, diameter estimation |
| **Fire Risk Mapping** | Fuel load estimation, fire weather index integration, firebreak planning |

---

### 4.10 Emergency Response

**Primary Focus:** Natural disaster simulation, response planning, real-time situational awareness

| Capability | Detail |
|-----------|--------|
| **Flood Routing** | 2D hydrodynamic simulation with rainfall inputs and DEM-based flow accumulation |
| **Rothermel Wildfire Model** | Fire spread simulation using Rothermel's surface fire model with wind, slope, fuel inputs |
| **Earthquake Impact** | Building vulnerability assessment, shaking intensity interpolation |
| **Evacuation Planning** | Road network capacity analysis, shelter assignment optimization |
| **Landslide Susceptibility** | Statistical/deterministic slope stability assessment |
| **Damage Assessment** | Pre/post-event satellite imagery comparison for rapid damage classification |

---

## 5. Licensing & Pricing

### Tier Comparison

| Feature | Professional | Enterprise | Dedicated |
|---------|-------------|-----------|-----------|
| **Price** | $5,000–$8,000/seat/year | $18,000/seat/year *or* $75,000 org license | $250,000–$2M+/year |
| **Domain Packs** | 1–3 domains | All 10 domains | All 10 domains + custom |
| **AI Model** | 7B (Edge) | 32B (Standard) | 72B (Sovereign) |
| **Target Users** | Consultants, ESG firms, small teams | Plantations, mining corps, infrastructure firms | Defense, government, national agencies |
| **Support** | Email + docs | Dedicated account manager | On-site engineering team |
| **Deployment** | Self-install desktop | Self-install or managed | Air-gapped hardware install |
| **SLA** | Best effort | 99.5% response SLA | 99.9% with on-site support |

### Add-On Pricing

| Add-On | Price | Description |
|--------|-------|-------------|
| Cross-Industry Pack | +$4,500/year | Access domains beyond your tier allocation |
| Multi-Site License | +30% of base | Deploy across multiple physical locations |
| Bespoke Regulatory Module | $10,000–$75,000 (one-time) | Custom compliance framework development (e.g., national-specific EIA templates, proprietary reporting standards) |

### Volume Discounts

| Seats | Discount |
|-------|----------|
| 5–10 | 10% |
| 11–25 | 15% |
| 26–50 | 20% |
| 50+ | Custom negotiation |

---

## 6. System Requirements

### Hardware Tiers

#### Edge Tier (7B Model — Professional License)

| Component | Minimum Specification |
|-----------|----------------------|
| **GPU** | NVIDIA RTX 4060 (8GB VRAM) **or** Apple Mac M-series with 16GB unified memory |
| **CPU** | 8+ cores (Intel i7/AMD Ryzen 7 or Apple M2+) |
| **RAM** | 32GB DDR4/DDR5 |
| **Storage** | 250GB NVMe SSD (available) |
| **OS** | Windows 10/11, macOS 13+, Ubuntu 22.04+ |

#### Standard Tier (32B Model — Enterprise License)

| Component | Minimum Specification |
|-----------|----------------------|
| **GPU** | NVIDIA RTX 4090 (24GB VRAM) **or** NVIDIA A6000 (48GB VRAM) |
| **CPU** | 8+ cores (Intel i9/AMD Ryzen 9 or Apple M3 Pro+) |
| **RAM** | 64GB DDR5 |
| **Storage** | 500GB NVMe SSD (available) |
| **OS** | Windows 10/11, macOS 13+, Ubuntu 22.04+ |

#### Sovereign Tier (72B Model — Dedicated License)

| Component | Minimum Specification |
|-----------|----------------------|
| **GPU** | 144GB+ VRAM total — 2× NVIDIA A100 (80GB) **or** 2× NVIDIA H100 (80GB) |
| **CPU** | 16+ cores server-grade (Intel Xeon/AMD EPYC) |
| **RAM** | 256GB+ ECC DDR5 |
| **Storage** | 2TB+ NVMe SSD (RAID recommended) |
| **OS** | Ubuntu 22.04 LTS, RHEL 9+, Windows Server 2022 |

### Software Dependencies

All tiers require:

```
Python 3.11+
Node.js 20 LTS
CUDA 12.x (NVIDIA GPUs)
Docker (optional, for containerized deployment)
```

---

## 7. Download & Install

### Installation Flow

```
Step 1    Visit librae.work/cahaya
  │
Step 2    Download installer for your OS
  │       ├── Windows: CAHAYA-Setup-x.x.x.exe
  │       ├── macOS:   CAHAYA-x.x.x.dmg
  │       └── Linux:   cahaya-x.x.x.AppImage
  │
Step 3    Run installer
  │       └── Follow on-screen prompts
  │
Step 4    Choose industry domain(s)
  │       └── Select 1–10 domain packs based on license
  │
Step 5    Enter trial token or license key
  │       ├── Trial: CAHAYA-30D-XXXXXXXX
  │       └── Licensed: Provided via secure delivery
  │
Step 6    Resources download (10–15 minutes)
  │       ├── AI model weights (size varies by tier)
  │       ├── Base map tiles
  │       ├── Regulatory frameworks
  │       └── Domain-specific templates
  │
Step 7    Workspace ready ✓
          └── Launch CAHAYA and begin working
```

### Post-Install Verification

After installation, CAHAYA runs an automatic health check:

```bash
✓ GPU detected: NVIDIA RTX 4090 (24GB VRAM)
✓ AI model loaded: Librae GeoInt AI-2.5-32B-Instruct (Q4_K_M)
✓ FastAPI server: http://127.0.0.1:8741
✓ MapLibre GL JS: Initialized
✓ License: Valid (Enterprise, expires 2027-06-18)
✓ Domains active: Agriculture, Mining, Forestry
```

---

## 8. Security Architecture

CAHAYA is built from the ground up for **sovereign, air-gapped operation**. Security is not a feature — it is the architecture.

### Zero-Egress Design

```
┌─────────────────────────────────────────────┐
│              CAHAYA Desktop                  │
│                                             │
│   All traffic bound to 127.0.0.1 (loopback) │
│   No outbound connections in air-gapped mode │
│   No telemetry, no analytics, no callbacks   │
│                                             │
│   FastAPI ← → localhost:8741 only            │
│   WebSocket ← → localhost:8742 only          │
│                                             │
└─────────────────────────────────────────────┘
```

### Hardware-Locked Licensing

| Security Layer | Implementation |
|---------------|---------------|
| **Hardware Fingerprint** | SHA-256 hash of CPU ID, GPU serial, motherboard UUID, MAC address |
| **License Verification** | RSA-256 signed JWT tokens verified against hardware fingerprint |
| **Tamper Detection** | Immutable file verification on every launch — binary checksums validated |
| **Key Storage** | License keys stored in OS-native secure keychain (Windows DPAPI / macOS Keychain / Linux Secret Service) |

### Air-Gapped Mode Security

When operating in air-gapped mode:

- ✅ **No cloud telemetry** — zero data transmission
- ✅ **No update checks** — manual update process only
- ✅ **No API calls** — all AI runs locally
- ✅ **No DNS resolution** — network stack disabled
- ✅ **Immutable file verification** — SHA-256 checksums on all binaries and model weights
- ✅ **Audit logging** — all user actions logged locally with timestamps

### Data Sovereignty

- All data remains on the user's machine
- No data replication to external servers
- User controls all backups and exports
- Compliant with data residency requirements (PDPA, GDPR, etc.)

---

## 9. 30-Day Free Trial

### How to Get Started

1. **Visit** [librae.work/cahaya](https://librae.work/cahaya)
2. **Enter your details:**
   - Full name
   - Email address
   - Entity / organization name
3. **Receive your trial token** via email:
   ```
   CAHAYA-30D-XXXXXXXX
   ```
4. **Download and install** CAHAYA (see [Section 7](#7-download--install))
5. **Activate** — enter your trial token during setup
6. **Start working** — full Professional-tier access for 30 days

### Trial Specifications

| Feature | Trial Access |
|---------|-------------|
| Duration | 30 calendar days |
| AI Model | 7B (Edge tier) |
| Domains | Up to 3 domains |
| Outputs | Watermarked exports |
| Support | Community + email |
| Data | Fully local, fully yours |
| Conversion | Upgrade to paid license anytime during trial |

### After Trial Expiry

- Workspace remains accessible in **read-only mode**
- All your data, projects, and outputs remain on your machine
- Re-activate with a purchased license to resume full access
- No data is deleted or locked

---

## 10. FAQ & Troubleshooting

### Frequently Asked Questions

**Q: Does CAHAYA require an internet connection?**
A: Only for initial download, resource installation, and cloud-based AI models (Librae Report Engine). Once installed, CAHAYA operates fully offline in air-gapped mode using the local Librae GeoInt AI model.

**Q: Can I use CAHAYA on multiple machines?**
A: Each license is hardware-locked. Multi-site licenses (+30%) allow deployment across multiple machines. Contact sales for volume licensing.

**Q: What GIS formats does CAHAYA export?**
A: PDF, GeoJSON, TopoJSON, Shapefile, GeoTIFF, Cloud-Optimized GeoTIFF, KML/KMZ, GeoPackage, DXF, CSV, Excel, PostGIS SQL, GLB/GLTF (3D), video (MP4/WebM).

**Q: Is my data sent to any cloud service?**
A: No. In air-gapped mode, zero data leaves your machine. When cloud AI models are enabled (web toggle ON), only text prompts are sent — never your geospatial data or files.

**Q: Can I use my own satellite imagery?**
A: Yes. CAHAYA accepts GeoTIFF, COG, JPEG2000, and other standard raster formats. Import via the AI Work Engine tab.

**Q: Does CAHAYA work on Apple Silicon (M1/M2/M3/M4)?**
A: Yes. CAHAYA supports Apple Silicon with Metal acceleration for the local AI model. 16GB unified memory minimum for the 7B model.

**Q: How do I update CAHAYA?**
A: In standard mode, CAHAYA checks for updates on launch. In air-gapped mode, download the update package from librae.work/cahaya and install manually.

**Q: Can I customize the AI's name and language?**
A: Yes. In the left sidebar admin panel, you can rename the AI agent and set your preferred response language.

---

### Troubleshooting

#### GPU Not Detected

```
Error: No compatible GPU detected
```

**Solution:**
1. Verify NVIDIA drivers are installed: `nvidia-smi`
2. Ensure CUDA 12.x is installed: `nvcc --version`
3. For Mac: Verify Metal support in System Information → Graphics
4. Restart CAHAYA after driver installation

#### Model Loading Failure

```
Error: Failed to load model weights
```

**Solution:**
1. Verify available VRAM meets minimum requirements
2. Check available disk space (model files: 4GB–140GB depending on tier)
3. Re-download model weights: Settings → AI Model → Re-download
4. Close other GPU-intensive applications

#### License Activation Failure

```
Error: Hardware fingerprint mismatch
```

**Solution:**
1. Ensure you're activating on the same machine where the license was issued
2. If hardware changed (new GPU, RAM upgrade), contact support for re-issuance
3. Check system clock is accurate (JWT validation requires correct time)

#### Map Tiles Not Loading

```
Error: MapLibre GL JS — tile fetch failed
```

**Solution:**
1. In air-gapped mode: verify offline tile cache is populated (Settings → Map → Cache Status)
2. In online mode: check internet connection and API key validity
3. Clear tile cache: Settings → Map → Clear Cache → Re-download

#### FastAPI Server Not Starting

```
Error: Port 8741 already in use
```

**Solution:**
1. Check for other CAHAYA instances: kill existing processes
2. Verify port 8741 is available: `lsof -i :8741` (macOS/Linux) or `netstat -ano | findstr :8741` (Windows)
3. Change port in config: `~/.cahaya/config.yaml` → `server.port`

---

## Support & Contact

| Channel | Details |
|---------|---------|
| Documentation | librae.work/docs |
| Email Support | support@librae.work |
| Sales Inquiries | sales@librae.work |
| AI Chat | librae.work/contact |
| Trial Sign-Up | librae.work/cahaya |

---

*© 2026 Librae AI Labs. All rights reserved.*
*CAHAYA is a registered trademark of Librae AI Labs Sdn. Bhd.*
