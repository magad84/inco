# INCO Current State

**Date:** 2026-08-05  
**Phase:** Approved deterministic-core implementation plus trade-lane knowledge expansion  
**Implementation status:** First domain-core slice authorized; executable code not yet committed

## Approved Product Direction

- INCO is an independent bilingual international-commerce and logistics decision-support platform.
- Trade-term review remains the core product.
- The product now models the complete shipment trade lane from origin country and gateway through carrier and transit to destination gateway, destination country, and inland delivery.
- The product is rules-first and must operate without generative AI.
- The AI module remains intentionally pending.
- Free professional diagnostics and paid execution/report outputs remain approved.
- Users should receive useful free results before registration.
- Google sign-in is planned for saving, resuming, purchasing, and report access.
- Authentication and payment processing remain separate.

## Approved Geographic Scope

### Launch Destination Markets

1. United Arab Emirates.
2. Saudi Arabia.
3. Egypt.
4. Oman.

### Priority Origin Markets

1. China.
2. India.
3. Turkey.
4. Italy.
5. United States.
6. Russia, with enhanced compliance controls.
7. Australia.

The priority-origin list is a research and first-release scope, not a permanent ranking of source countries.

## Approved Provider Research Priority

### Express and Postal

- DHL Express.
- FedEx.
- Aramex.
- National postal operators in launch and priority-origin markets.
- UPS where authoritative market and service sources are available.

### Ocean

- Maersk.
- MSC.
- CMA CGM.
- COSCO.
- Hapag-Lloyd.
- ONE.
- Evergreen.

### Air Cargo

- Emirates SkyCargo.
- Etihad Cargo.
- Qatar Airways Cargo.
- Saudia Cargo.
- Turkish Cargo.
- EgyptAir Cargo.
- Oman Air Cargo.

Additional carriers may be added when verified trade lanes and demand justify them.

## Architecture Decisions

### ADR-001: Deterministic Core

**Status:** Approved and Issue #3 closed as completed.

Approved boundary:

- Strict TypeScript deterministic domain core.
- JSON Schemas as external contracts.
- One reviewed decimal-arithmetic dependency.
- No production web framework, database, authentication, payment, PDF, AI, or network calls in the first package.
- Optional Python optimization service remains deferred to the paid Container Load Planner benchmark stage.

Authorization now exists to create `packages/domain-core` and implement the deterministic Cargo Calculator with tests.

### ADR-002: Trade-Lane Knowledge Scope

**Status:** Approved.

Approved additions:

- Origin Country Packs.
- Transport Gateway Registry.
- Carrier and Carrier Service Registry.
- Trade Lane and Transit Segment model.
- Full origin-to-destination route analysis.
- Russia Enhanced Compliance Pack.
- Future `INCO Route & Carrier Decision Pack`.

Decision record:

- `docs/ADR_002_TRADE_LANE_ORIGIN_GATEWAY_CARRIER_SCOPE.md`

## Active Work Packages

### WP-01: MVP Trade-Term Decision Logic

**Status:** In progress; deterministic contracts established.

Completed:

- Eleven-term operational rule matrix.
- Named-place, responsibility, risk, cost, alternative, and suitability structures.
- Machine-readable rule schema.
- Structured eleven-term dataset version 0.1.
- Trade-term input and output schemas.
- Seven representative transaction fixtures.
- Controlled Arabic-English terminology register.

Remaining:

- Controlled record-by-record source review.
- Final verification dates and source status.
- Additional term-level fixtures.
- Executable message-key catalog.

### WP-02: Logistics Knowledge Architecture and Source Registry

**Status:** Active; foundation substantially established.

Completed:

- Knowledge architecture and source hierarchy.
- Source Registry version 0.2.
- Country-pack schema and four destination seed packs.
- Cargo and dangerous-goods pre-screen specification.
- Calculator and paid load-planner specification.
- Broker marketplace specification.
- Question-to-rule traceability.
- Cross-module acceptance scenarios.
- Open-source solver evaluation.

Remaining:

- Normalize verified source records into executable country and carrier rules.
- Fill P0 official-source gaps.
- Create machine-readable DG and destination-country fixtures.

### WP-03: Origin Markets, Gateways, Carriers, and Trade Lanes

**Status:** Active. GitHub Issue #4.

Completed foundation:

- ADR-002 approved.
- Origin Country Pack schema created.
- Transport Gateway schema created.
- Carrier Service schema created.
- Trade Lane schema created.

Files:

- `schemas/origin-country-pack.schema.json`
- `schemas/transport-gateway.schema.json`
- `schemas/carrier-service.schema.json`
- `schemas/trade-lane.schema.json`

Next deliverables:

1. Seven priority-origin research seed packs.
2. Initial gateway records for the four destination and seven origin markets.
3. Initial provider and service records for approved carrier priorities.
4. Russia enhanced-compliance fixtures.
5. Route, transit, carrier, and stale-rule acceptance cases.
6. Question-to-rule traceability for gateway and carrier selection.

## First Implementation Slice Readiness

The deterministic free Cargo Calculator has:

- Functional specification.
- Exact unit conversion rules.
- CBM, gross-weight, volumetric-weight, and chargeable-weight formulas.
- Precision and rounding rules.
- Stale and user-configured carrier-factor behavior.
- Input and output JSON Schemas.
- Valid and invalid fixtures.
- Audit and source/version requirements.

The architecture gate is approved. The next engineering step is to create `packages/domain-core`, validate the schemas, implement the calculator, and execute the fixtures as automated tests.

## Current Safety and Knowledge Boundaries

- Do not claim carrier acceptance without current authoritative evidence or direct provider confirmation.
- Do not infer gateway capability from a location code alone.
- Do not hard-code volatile carrier conditions without effective and review dates.
- Do not treat cargo pre-screening as final dangerous-goods classification.
- Do not present route, bridge, tunnel, or abnormal-load indicators as approval.
- Do not rank carriers, gateways, brokers, or service providers solely because of sponsorship.
- Russia-related transactions must return enhanced compliance screening states where applicable.
- Missing or stale rules must return `confirmation_required`, `source_unavailable`, or `stale_review_required` instead of a guessed conclusion.

## Commercial Boundaries

### Free direction

- Core trade-term review.
- Basic cargo and dangerous-goods pre-screen.
- Basic CBM and weight calculations.
- Candidate gateway, carrier, and service indicators.
- Preliminary container and route indicators.
- Critical risks and missing-information guidance.

### Paid direction

- INCO Trade Decision Pack.
- INCO Route & Carrier Decision Pack.
- Detailed multi-option comparison.
- Multi-SKU Container Load Plan.
- Saved case, visualization, and printable report.
- Advanced origin, destination, gateway, carrier, and compliance brief where verified rules support it.
- Future provider RFQ or marketplace workflow.

Pricing amounts, payment gateway, credits, subscriptions, and company plans remain undecided.

## Explicitly Not Started

- Production frontend and backend.
- Production database.
- Google authentication.
- Payment integration.
- PDF generation.
- Production container solver.
- Provider onboarding portal.
- AI model evaluation or integration.
- Live carrier booking or rate APIs.
- Deployment.

## Next Autonomous Work

Work may continue without owner interruption on:

1. Create and test the TypeScript Cargo Calculator domain core under ADR-001.
2. Build the seven priority-origin seed packs.
3. Seed gateway and carrier-service registries with authoritative sources.
4. Expand route and carrier fixtures.
5. Continue official source-gap research.
6. Normalize country, gateway, carrier, and trade-lane records.

Owner approval is still required before:

- Pricing values.
- Paid data or software licenses.
- Final production web architecture and hosting commitment.
- Google authentication implementation.
- Payment provider selection.
- AI model or provider selection.
- Live booking or rate APIs.
- Public broker-marketplace launch.
- Material changes to free versus paid boundaries.

## Change Log

### 2026-08-05

- Repository initialized and product governance created.
- Trade-term review and paid Trade Decision Pack recorded.
- AI deferred.
- Product expanded into modular logistics decision support.
- WP-02 opened and knowledge, source, country, DG, calculator, marketplace, and test foundations created.
- Eleven-term rules and machine-readable trade-term contracts created.
- Cargo Calculator contracts and fixtures created.
- ADR-001 approved and Issue #3 closed.
- ADR-002 approved for origin markets, gateways, carriers, services, transit, and full trade-lane modeling.
- WP-03 opened as Issue #4.
- Origin Country Pack, Transport Gateway, Carrier Service, and Trade Lane schemas created.
