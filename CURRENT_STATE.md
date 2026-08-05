# INCO Current State

**Date:** 2026-08-05  
**Phase:** Deterministic core validated; trade-lane knowledge implementation active  
**Implementation status:** Executable domain core and trade-lane evaluator passing CI; origin, carrier, gateway, and corridor registries under controlled expansion

## Execution Authority

The owner has authorized autonomous progression through all already-approved research, knowledge, schema, deterministic-code, testing, documentation, and GitHub stages.

Continue without routine approval. Escalate only decisions involving pricing, paid licenses, production architecture or deployment, authentication, payment, AI, live carrier APIs, public marketplace exposure, material legal/security risk, or a major scope change.

Every executable result must pass CI before approval. Missing or volatile information must return `confirmation_required`, `source_unavailable`, `stale_review_required`, or `enhanced_compliance_required` rather than a guessed answer.

## Approved Product Direction

- Bilingual professional decision support for international commerce and logistics.
- Core trade-term review plus cargo, country, gateway, carrier, and full trade-lane analysis.
- Rules-first and fully useful without generative AI.
- Launch destination markets: UAE, Saudi Arabia, Egypt, and Oman.
- Priority origin markets: China, India, Turkey, Italy, United States, Russia, and Australia.
- Russia and other triggered transactions require enhanced transaction-specific compliance screening.

## Architecture Decisions

### ADR-001: Deterministic Core

**Status:** Approved and implemented through `@inco/domain-core` version `0.2.0`.

- Strict TypeScript.
- JSON Schemas as external contracts.
- Controlled decimal arithmetic with `decimal.js`.
- No framework, database, authentication, payment, PDF, AI, or network dependency in the domain package.

### ADR-002: Trade-Lane Knowledge Scope

**Status:** Approved and active.

- Origin Country Packs.
- Transport Gateway Registry.
- Carrier and Carrier Service Registry.
- Trade Lane and Transit Segment model.
- Route & Carrier Decision Pack direction.

## WP-01: Trade-Term Decision Logic

**Status:** In progress.

Completed:

- Eleven-term operational matrix.
- Machine-readable dataset and schemas.
- Responsibility, risk, cost, suitability, and alternatives structures.
- Representative fixtures.
- Controlled bilingual terminology.

Remaining:

- Record-by-record controlled source review.
- Final verification dates and message keys.
- Additional fixtures.

## WP-02: Logistics Knowledge Architecture

**Status:** Active; foundation established.

Completed:

- Source hierarchy and registry.
- Destination-country schema and four seed packs.
- DG pre-screen specification.
- Cargo and container-planning specifications.
- Broker marketplace specification.
- Question-to-rule traceability and acceptance scenarios.

Remaining:

- Normalize country and DG rules into executable records.
- Fill P0 official-source gaps.

## WP-03: Origins, Gateways, Carriers, and Trade Lanes

**Status:** Active. GitHub Issue #4.

### Origin packs completed

- China.
- India.
- Turkey.
- Italy.
- United States.
- Russia with enhanced compliance controls.
- Australia.

### Carrier knowledge completed to verified-partial level

- Express source and service records for DHL Express, FedEx, Aramex, and UPS.
- Ocean and air records for selected services from MSC, CMA CGM, Hapag-Lloyd, Emirates SkyCargo, Etihad Cargo, and Turkish Cargo.
- Volatile operational advisories are separated from stable capability rules.
- Carrier integrity tests reject missing sources, duplicate services, missing review controls, and stale volatile advisories.

### Gateway knowledge completed to verified-partial level

UAE, China, and India initial records:

- Dubai International Airport.
- Al Maktoum International Airport.
- Khalifa Port.
- Port of Shanghai.
- Shanghai Pudong International Airport.
- Jawaharlal Nehru Port.

Saudi Arabia, Egypt, and Oman initial records:

- Jeddah Islamic Port.
- Cairo International Airport.
- Sokhna Port.
- Muscat International Airport.
- Port of Sohar.

Gateway rules preserve `confirmation_required` for terminal assignment, cargo acceptance, dangerous-goods handling, equipment, cut-offs, customs, permits, and inland movement where current confirmation is needed.

### Trade-lane corridors and executable evaluation

Completed:

- Launch corridor registry linking origin, destination, mode, gateways, carrier-service candidates, cargo scope, confirmation requirements, and risk flags.
- Deterministic `evaluateTradeLane()` implementation.
- Filtering by countries, mode, cargo category, optional gateways, and optional service.
- Stale corridor detection against transaction date.
- `source_unavailable` when no verified corridor or service source exists.
- `confirmation_required` for current operational confirmation and incomplete route structure.
- `enhanced_compliance_required` override with transaction-specific screening controls.
- Automated tests for candidate, source-gap, stale, unsupported, validation, and enhanced-compliance cases.

Files:

- `packages/domain-core/src/trade-lane-evaluator.ts`
- `packages/domain-core/test/trade-lane-evaluator.test.ts`
- `knowledge/trade-lanes/launch-corridors.v0.1.json`

### Next autonomous work

1. Complete gateway records for Turkey, Italy, United States, Australia, and Russia.
2. Add additional Saudi, Egyptian, and Omani gateways where route demand justifies them.
3. Expand corridor coverage and transit-segment modeling.
4. Add Russia enhanced-compliance fixtures and rule records.
5. Normalize country and DG requirements into executable evaluation.
6. Expand route, transit, carrier, stale-rule, and source-gap tests.

## Approved Executable Result

### `@inco/domain-core` version `0.2.0`

Implemented:

- Unit normalization for mm, cm, m, inches, kg, g, and lb.
- CBM per package and total CBM.
- Gross, volumetric, and chargeable weight.
- Per-piece and shipment-total bases.
- Rounding increments and shipment minimums.
- Runtime validation.
- Stale-rule blocking and unverified-rule warnings.
- Audit metadata.
- Deterministic trade-lane corridor evaluation.
- Source-gap, stale-record, incomplete-route, and enhanced-compliance decisions.

A shipment-total aggregation defect was detected and corrected before approval. Version `0.2.0` build and all tests passed in GitHub Actions run `31030180600`.

## Active Quality Gates

CI runs when changing:

- Domain-core code and tests.
- Cargo fixtures.
- Carrier services and source records.
- Gateway records and source records.
- Trade-lane corridor records.
- Carrier, gateway, and trade-lane schemas.

The tests currently cover:

- Cargo calculations and regressions.
- Express carrier traceability.
- Ocean and air carrier traceability.
- Gateway traceability for UAE, China, India, Saudi Arabia, Egypt, and Oman.
- Trade-lane reference integrity and uncertainty controls.
- Executable trade-lane evaluation decisions.

## Safety Boundaries

- No carrier acceptance claim without current evidence or direct confirmation.
- No gateway capability inferred from a code or name alone.
- No volatile rule without effective and review dates.
- No DG pre-screen presented as final classification.
- No route, abnormal-load, or container-fit result presented as approval.
- No provider ranking based solely on sponsorship.

## Decisions Still Requiring Owner Approval

- Pricing and material changes to free-versus-paid boundaries.
- Paid data or software licenses.
- Final production architecture, hosting commitment, and deployment.
- Google authentication.
- Payment provider.
- AI model or provider.
- Live booking, rates, or government APIs.
- Public broker marketplace launch.

## Change Log

### 2026-08-05

- Autonomous execution authority recorded in project governance.
- Domain core `0.1.1` approved after CI.
- Seven origin packs completed.
- Express, ocean, and air carrier knowledge records and tests added.
- Gateway records expanded across UAE, China, India, Saudi Arabia, Egypt, and Oman.
- Launch corridor registry added and linked to gateway and carrier records.
- Deterministic trade-lane evaluator implemented and approved as domain core `0.2.0`.
- GitHub Actions run `31030180600` completed successfully.
