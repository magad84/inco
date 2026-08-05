# INCO Verified Source Registry

**Version:** 0.1  
**Date:** 2026-08-05  
**Status:** Seed registry for WP-02  
**Scope:** UAE, Saudi Arabia, Egypt, Oman, international transport safety, carrier rules, cargo calculations, and container planning

## 1. Registry Rules

- Only official, primary, or clearly licensed technical sources may drive executable rules.
- A URL is not itself a rule. Each source must be translated into a versioned rule object and tested.
- Carrier, government-service, route, and operational rules require review dates.
- Paid or restricted publications may be used only within their license and must not be copied into this public repository.
- Public product text must paraphrase and cite approved sources without reproducing protected content.
- The AI module is not a source of truth.

## 2. International Safety and Packing Sources

| ID | Publisher | Scope | Access | Volatility | Review | URL | Notes |
|---|---|---|---|---|---|---|---|
| INT-CTU-001 | UNECE | Packing and securing cargo transport units for sea and land | Public | V1 | On revision | https://unece.org/transport/documents/standards/ctu-code | Primary foundation for packing, securing, responsibilities, overloading, and declaration. Arabic and English versions available. |
| INT-CTU-002 | UNECE | 2025 revision work for cargo transport unit packing code | Public | V1 | Monthly until adopted | https://unece.org/transport/documents/2026/07/working-documents/imoilounece-code-practice-packing-cargo-transport-0 | Treat as revision material until final adoption and effective status are confirmed. |
| INT-SEA-DG-001 | IMO | Maritime dangerous goods framework | Public overview; detailed code licensed | V1 | Each amendment | https://www.imo.org/en/ourwork/safety/pages/dangerousgoods-default.aspx | Use for maritime DG framework and edition control. Do not copy detailed protected tables. |
| INT-SEA-DG-002 | IMO | Current maritime dangerous goods edition status | Public overview; publication licensed | V1 | Each amendment | https://www.imo.org/en/publications/pages/imdg%20code.aspx | Current page states the 2024 edition with amendment 42-24 is mandatory from 1 January 2026. |
| INT-AIR-DG-001 | ICAO | Safe transport of dangerous goods by air | Public overview | V1 | Each biennial edition and corrigendum | https://www.icao.int/Dangerous-Goods/Technical-Instructions | The 2025-2026 Technical Instructions apply through 31 December 2026. Detailed manual is licensed. |
| INT-AIR-DG-002 | ICAO | Air dangerous-goods principles and enforcement | Public | V1 | Each update | https://www.icao.int/dangerous-goods | Use for the requirement that national systems implement and enforce air DG controls. |

## 3. United Arab Emirates Sources

| ID | Authority | Scope | Volatility | Review | URL | Notes |
|---|---|---|---|---|---|---|
| UAE-RTA-001 | Dubai RTA | Permit for large and special load vehicles | V2 | Monthly | https://rta.ae/wps/portal/rta/ae/home/rta-services/service-details?serviceId=329 | Seed thresholds include special load indicators for weight, width, height, and length. Confirm at transaction time. |
| UAE-RTA-002 | Dubai RTA | Heavy vehicles in banned times and roads | V2 | Monthly | https://www.rta.ae/wps/portal/rta/ae/home/rta-services/service-details?serviceId=332 | Use for permit trigger, documents, validity, and current route/time controls. |
| UAE-RTA-003 | Dubai RTA | Truck movement restriction notices | V4 | Daily when relevant | https://rta.ae/wps/portal/rta/ae/home/news-and-media/all-news/NewsDetails/expanding-truck-movement-restrictions-to-enhance-road-safety-levels | Operational notices can temporarily change the normal rule; do not hard-code. |
| UAE-POST-001 | Emirates Post | Dangerous, prohibited, and restricted postal items | V3 | Monthly | https://www.emiratespost.ae/dangerous-goods | Product-level pre-screen source. Acceptance still depends on service and destination. |
| UAE-CUS-001 | Federal customs authority | Unified customs law and customs-broker framework | V2 | Quarterly | https://icp.gov.ae/en/legal-affairs/ | Establishes that customs brokers are licensed and subject to local administration conditions. |
| UAE-CUS-002 | Federal customs authority | Unified customs procedures resources | V2 | Quarterly | https://icp.gov.ae/customs-affair/ | Use as the official gateway for current UAE customs procedures and service fees. |
| UAE-AEO-001 | Federal customs authority | Authorized economic operator eligibility and contacts | V2 | Quarterly | https://icp.gov.ae/en/economic-operator/ | Useful provider profile evidence but not a substitute for customs-broker license verification. |
| UAE-AIR-001 | Etihad Cargo | Dangerous-goods cargo product conditions | V3 | Monthly | https://www.etihadcargo.com/content/eag/egcmc/etihadcargo/global/en/products/dangerous-goods.html | Carrier-specific cargo acceptance workflow. Current acceptance must be confirmed. |

## 4. Saudi Arabia Sources

| ID | Authority | Scope | Volatility | Review | URL | Notes |
|---|---|---|---|---|---|---|
| KSA-TGA-001 | Transport General Authority | Heavy goods transport regulation | V2 | Quarterly | https://www.tga.gov.sa/ar/Regulations/Regulation/4785 | Covers safety, cargo securing, documents, weights, dimensions, and special-load indicators. |
| KSA-TGA-002 | Transport General Authority | Freight-facility operations regulation | V2 | Quarterly | https://www.tga.gov.sa/ar/Regulations/Regulation/4789 | Supports logistics-facility and truck-parking data, not cargo legality. |
| KSA-ZATCA-001 | ZATCA | Issue customs-clearance license | V2 | Quarterly | https://zatca.gov.sa/en/eServices/Pages/eServices-264.aspx | Marketplace verification source for broker licensing workflow. |
| KSA-ZATCA-002 | ZATCA | Verify customs-clearance license status | V2 | At onboarding and expiry | https://zatca.gov.sa/ar/eServices/Pages/eServices-272.aspx | Key verification route for registered brokers. |
| KSA-ZATCA-003 | ZATCA | Authorize customs broker through Fasah | V2 | Quarterly | https://zatca.gov.sa/en/eServices/Pages/eServices-235.aspx | Shows importer/exporter authorization requires broker license number and Fasah account. |
| KSA-ZATCA-004 | ZATCA | Customs consulting license | V2 | Quarterly | https://zatca.gov.sa/ar/eServices/Pages/eServices-228.aspx | Distinguish customs consulting from customs clearance operations. |
| KSA-DG-001 | Saudi national platform | Dangerous-goods declaration service | V2 | Quarterly | https://my.gov.sa/en/services/563047 | Research required to map exact mode, authority, and transaction conditions. |

## 5. Egypt Sources

| ID | Authority | Scope | Volatility | Review | URL | Notes |
|---|---|---|---|---|---|---|
| EGY-CUS-001 | Egyptian Customs Authority | Customs-dealer and customs-clearance office registration requirements | V2 | Quarterly | https://customs.gov.eg/Services/Declartion_RegistrationLicensing | Marketplace onboarding must verify the office license, commercial activity, tax registration, and approved representatives. |
| EGY-CUS-002 | Egyptian Customs Authority | Advance cargo information overview | V2 | Quarterly | https://customs.gov.eg/Services/ACI | Use only for current official shipment-preparation indicators after checking latest notices and mode rollout. |
| EGY-CUS-003 | Egyptian Customs Authority | Official customs portal and current notices | V4 | Weekly | https://customs.gov.eg/ | Operational changes must be checked before presenting current procedures. |
| EGY-ENV-001 | Egyptian Environmental Affairs Agency | Licenses for hazardous waste and hazardous-material activities | V2 | Quarterly | https://www.eeaa.gov.eg/Service/80/157/index | Pre-screen trigger for specialist and authority confirmation; not a product classification database. |
| EGY-ENV-002 | Egyptian Environmental Affairs Agency | Current hazardous-waste transport licensing direction | V2 | Quarterly | https://www.eeaa.gov.eg/News/22904/Details | Shows enforcement focus on linking licensed transport companies to hazardous-waste operations. |
| EGY-ROAD-001 | Roads and bridges authority | Exceptional-load route and bridge requirements | V2 | Monthly | Pending verified official public source | Research gap. No executable rule until an authoritative service or regulation is captured. |
| EGY-POST-001 | Egypt Post | Postal prohibitions and restrictions | V3 | Monthly | Pending verified official public source | Research gap. Carrier-specific acceptance must remain unavailable until verified. |

## 6. Oman Sources

| ID | Authority | Scope | Volatility | Review | URL | Notes |
|---|---|---|---|---|---|---|
| OMN-ROAD-001 | Oman government / transport ministry | Abnormal-load permit | V2 | Monthly | https://gov.om/en/w/get-permits-for-transporting-exceptional-loads | Official permit service with axle-based fees, operating-card requirements, and possible police escort. |
| OMN-ROAD-002 | Royal Oman Police | Permit without police escort | V2 | Monthly | https://gov.om/en/w/get-a-permit-without-escort | Provides dimensional and weight ranges for a no-police-escort process; route and authority approval may still apply. |
| OMN-NAQL-001 | Oman government / transport ministry | Naql platform for land-transport permits | V2 | Quarterly | https://gov.om/en/w/naql-e-platform-for-public-and-land-transport-workers | Official gateway for operating cards and exceptional-load permits. |
| OMN-CUS-001 | Oman Customs | Customs-clearance license requirements and listed clearance companies | V2 | Quarterly | https://customs.gov.om/en/clearance-companies/ | Strong marketplace verification source, including license conditions and port coverage. |
| OMN-CUS-002 | Oman Customs | Customs-broker user registration in Bayan | V2 | Quarterly | https://www.customs.gov.om/en/business-services/procedural_services/users-registration-in-bayan-system/ | Requires customs-clearance course evidence for broker users. |
| OMN-CUS-003 | Oman Customs | Customs-broker transfer and authorization process | V2 | Quarterly | https://www.customs.gov.om/en/business-services/procedural_services/request-of-customs-broker-authorization/ | Useful for employment/status validation; not a public license-status API. |
| OMN-CUS-004 | Oman Customs | Official permit directory | V2 | Quarterly | https://www.customs.gov.om/en/business-services/permit/ | Use as authoritative permit-discovery gateway. |
| OMN-POST-001 | Oman Post | Postal prohibitions and restrictions | V3 | Monthly | Pending verified official public source | Research gap. Do not infer acceptance from general postal standards alone. |

## 7. Carrier and Calculation Sources

| ID | Publisher | Scope | Volatility | Review | URL | Notes |
|---|---|---|---|---|---|---|
| CAR-DHL-001 | DHL Express | Volumetric-weight formula and higher-of actual/volumetric billing | V3 | Monthly | https://dct.dhl.com/help | Current standard shown as divisor 5000 for cm/kg, subject to service and market confirmation. |
| CAR-FDX-001 | FedEx | Dimensional-weight method | V3 | Monthly | https://www.fedex.com/en-us/shipping/packaging/what-is-dimensional-weight.html | Formula varies by market and service. Do not use a U.S. divisor for every country. |
| CAR-FDX-UAE-001 | FedEx UAE | Current surcharges, dimensions, and service conditions | V3 | Monthly | https://www.fedex.com/en-ae/shipping/rates.html | Effective dates and threshold changes must be stored with each rule. |
| CAR-FDX-UAE-002 | FedEx UAE | Regional Economy Freight dimensional divisor | V3 | Monthly | https://www.fedex.com/en-ae/shipping/services/regional-economy-freight-services.html | Example of a service-specific divisor of 4000 cm3/kg; proves the need for provider/service configuration. |
| CAR-MSK-001 | Maersk | Container types and cargo weight limits | V3 | Monthly | https://www.maersk.com/support/faqs/2023/10/09/cargo-weight-limit | Capacities and payloads are references; local country and actual equipment limits may differ. |
| CAR-HL-001 | Hapag-Lloyd | Container specifications | V3 | Quarterly | https://www.hapag-lloyd.com/en/services-information/cargo-fleet/container.html | Use actual unit data for final planning because manufacturers and series vary. |
| CAR-HL-002 | Hapag-Lloyd | Container packing and weight-distribution guides | V3 | Quarterly | https://www.hapag-lloyd.com/en/services-information/cargo-fleet/special.html | Technical planning source; detailed PDFs require review before converting to rules. |
| CAR-ETD-DG-001 | Etihad Cargo | Dangerous-goods cargo acceptance | V3 | Monthly | https://www.etihadcargo.com/content/eag/egcmc/etihadcargo/global/en/products/dangerous-goods.html | Use for airline-specific requirements and declaration workflow, with direct confirmation before booking. |
| CAR-EMR-DG-001 | Emirates SkyCargo | Local sales conditions and dangerous-goods product link | V3 | Monthly | https://www.skycargo.com/media/3xojf1ar/01jul2026_lsc_me-uae_uae-ae.pdf | Conditions are effective-dated; source should be rechecked for replacement documents. |

## 8. Open-Source Evaluation Sources

| ID | Repository | Scope | License | Status | Notes |
|---|---|---|---|---|---|
| OSS-CLP-001 | coin-or/clp-spreadsheet-solver | 3D container-loading problem, visualization, unloading animation, heavy/fragile constraints | Eclipse Public License 2.0 | Reference and benchmark candidate | Excel/VBA implementation is not a direct web backend dependency. Use test cases and algorithmic ideas only after legal and technical review. |
| OSS-3DBP-001 | mahdims/3D-bin-packing | 3D bin-packing implementation | License review required | Discovery only | Do not import until maintenance, test coverage, constraints, and license are verified. |
| OSS-CL-001 | hansehe/ContainerLoading | Container-loading implementation | License review required | Discovery only | Evaluate stability, payload logic, orientation, support, and API suitability. |

## 9. Research Gaps Blocking Executable Rules

1. Egypt official exceptional-load, road, bridge, and tunnel permit sources.
2. Official postal prohibited/restricted-item sources for Saudi Arabia, Egypt, and Oman.
3. Detailed Saudi exceptional-load permit workflow and thresholds from the active authority site.
4. UAE emirate-by-emirate abnormal-load and truck-restriction rules beyond Dubai.
5. Country-specific airline and ocean-carrier local conditions for the four launch countries.
6. Official road axle-load tables and bridge-route approval processes for all four countries.
7. Dangerous-goods national variations and competent-authority contacts by mode.
8. Public broker-license verification routes for UAE emirates, Egypt, and Oman where available.
9. Service-specific volumetric divisors for postal and courier services in each launch country.
10. Verified standard pallet specifications and service-specific pallet acceptance rules.

## 10. Review Cadence

- International editions and amendments: on publication and quarterly.
- Government regulations and services: quarterly, plus event-driven checks.
- Carrier rules and formulas: monthly and at transaction time.
- Temporary operational notices: daily while active.
- Broker licenses: onboarding, renewal, expiry, and complaint trigger.
- Open-source dependencies: before adoption and every release.
