# INCO Research Backlog

**Version:** 0.1  
**Date:** 2026-08-05  
**Status:** Active backlog under WP-02

## 1. Priority Model

- `P0`: Blocks safe product definition or implementation.
- `P1`: Required for launch-country usefulness.
- `P2`: Valuable expansion after initial validated modules.
- `P3`: Future ecosystem capability.

## 2. P0: International Foundations

### DG-INT-01: Dangerous-goods source map by mode

Deliverable:

- Air, sea, road, and postal source hierarchy.
- edition and amendment control.
- national-variation fields.
- carrier-variation fields.
- data that may be shown publicly versus internal licensed reference only.

Acceptance:

- No pre-screen result implies a final legal classification.
- Every mode has authority/carrier confirmation triggers.

### CTU-INT-01: Cargo packing and securing knowledge model

Deliverable:

- Packing responsibility.
- cargo information flow.
- overload and misdeclaration risks.
- securing and weight-distribution fields.
- load-plan disclaimer and competent-person review triggers.

### CALC-INT-01: Carrier-specific volumetric rules

Deliverable:

- Rule schema by provider, service, market, effective date, and package basis.
- Seed configurations for launch providers.
- fallback generic calculation with explicit warning.

## 3. P0: Country Packs

### UAE-01: Emirate-level road and abnormal-load map

Research:

- Dubai.
- Abu Dhabi.
- Sharjah.
- Federal or cross-emirate controls.
- route, tunnel, bridge, truck-time, escort, permit, and axle requirements.

### UAE-02: Customs-broker verification

Research:

- Licensing authority by emirate.
- public verification route.
- license scope and expiry.
- customs point coverage.

### KSA-01: Exceptional-load permit workflow

Research:

- Active transport authority service.
- legal dimension and weight limits.
- indivisible-load definition.
- route study.
- escort.
- axle limits.
- permit documents and validity.

### KSA-02: Postal and courier restrictions

Research:

- National postal operator official prohibitions.
- service-specific weight and dimension limits.
- batteries, perfumes, medicines, liquids, valuables, and food.

### EGY-01: Roads, bridges, tunnels, and exceptional loads

Research:

- Official authority and application path.
- maximum legal dimensions and weights.
- route and bridge review.
- traffic and escort approvals.
- port-to-road movement requirements.

No executable road rule until an official current source is captured.

### EGY-02: Postal restrictions

Research:

- Official national postal prohibited and restricted items.
- international parcel dimensions and weight.
- carrier-specific dangerous-goods policy.

### OMN-01: Complete abnormal-load rule map

Research:

- Relationship between transport-ministry permit and police escort/no-escort permits.
- axle limits.
- route restrictions.
- paved-road language clarification.
- bridge and property liability.

### OMN-02: Postal restrictions

Research:

- Official national postal prohibited and restricted items.
- service-specific conditions.

## 4. P1: Carrier Registry

### OCEAN-01: Ocean carrier seed pack

Initial providers for research:

- Maersk.
- Hapag-Lloyd.
- CMA CGM.
- MSC.
- COSCO.

Per provider:

- equipment specifications.
- payload and local weight caveat.
- dangerous-goods process.
- special cargo.
- prohibited or restricted cargo.
- verified gross mass workflow.
- booking data.
- route and local office confirmation requirement.

### AIR-01: Air cargo carrier seed pack

Initial providers:

- Emirates SkyCargo.
- Etihad Cargo.
- Saudia Cargo.
- Qatar Airways Cargo as a regional comparator.

Per provider:

- general cargo.
- dangerous goods.
- batteries.
- pharmaceuticals.
- perishables.
- live animals.
- valuables.
- oversized cargo.
- declaration and booking lead time.
- station or route restrictions.

### EXPRESS-01: Express courier seed pack

Initial providers:

- DHL Express.
- FedEx.
- UPS.
- Aramex.

Per provider/service/market:

- volumetric divisor.
- weight and dimensional limits.
- additional handling.
- prohibited and restricted goods.
- dangerous-goods availability.
- remeasurement and billing rules.
- service and destination availability.

### POST-01: National postal seed pack

Providers:

- Emirates Post.
- Saudi Post / SPL.
- Egypt Post.
- Oman Post.

## 5. P1: Cargo Calculators and Load Planning

### CLP-01: Equipment master data

- Reference dimensions for 20 dry, 40 dry, and 40 high cube.
- door openings.
- tare.
- gross and payload.
- provider and source.
- actual-unit override.

### CLP-02: Constraint model

- Rotations.
- stackability.
- support area.
- maximum top load.
- heavy floor-only.
- fragile no-top-load.
- pallets.
- load/unload sequence.
- center of mass.
- weight balance.
- separation rules.

### CLP-03: Open-source benchmark

- Legal review.
- maintenance review.
- automated tests.
- performance benchmark.
- feature gap.
- self-hosting suitability.

### CLP-04: Professional report design

- Input summary.
- assumptions.
- equipment data.
- layout.
- unallocated items.
- utilization.
- safety warnings.
- verification checklist.

## 6. P1: Question and Rule Engineering

### Q-01: Question-to-rule traceability

For every question:

- Data type.
- required or conditional.
- display trigger.
- rule IDs affected.
- output fields affected.
- free or paid status.
- retention class.

### TEST-01: Scenario library

Minimum scenarios:

- Regular ocean cargo.
- containerized cargo with unsuitable trade term.
- lithium batteries.
- perfume/aerosol.
- chemical with missing safety data.
- high-value cargo.
- oversized machinery.
- heavy indivisible load.
- courier package with dimensional weight.
- postal prohibited item.
- multi-SKU container plan.
- broker referral.

## 7. P2: Marketplace

### BRK-01: Provider onboarding by country

- License documents.
- public verification.
- expiry.
- customs-point coverage.
- verified versus self-declared fields.

### BRK-02: Matching and ranking

- Operational match.
- user preferences.
- response behavior.
- verified transaction feedback.
- sponsored visibility separation.

### BRK-03: Consent and lead sharing

- Data minimization.
- explicit user selection.
- attachment controls.
- audit log.
- deletion.

## 8. P2: Commercial Model

- Free calculator boundaries.
- Paid Trade Decision Pack.
- Paid Container Load Plan.
- Credits.
- business workspace.
- provider subscriptions and qualified leads.

Pricing values and payment provider remain owner-decision items after scope and operating-cost analysis.

## 9. P3: Future Capabilities

- Live carrier API connections.
- government API integrations.
- rate quotations.
- shipment booking.
- collaborative company approvals.
- ERP integration.
- public API.
- evaluated AI assistance.

## 10. Work Rule

Research may continue without owner interruption when it:

- Uses approved scope.
- does not create a new commercial commitment.
- does not select a paid provider.
- does not publish a sensitive claim.
- does not import a software dependency.
- does not expose private or licensed material.

Owner approval remains required for:

- launch-country changes.
- pricing.
- paid provider or license purchase.
- production architecture.
- legal/commercial terms.
- public provider marketplace launch.
- AI model/provider selection.
