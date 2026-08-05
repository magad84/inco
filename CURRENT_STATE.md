# INCO Current State

**Date:** 2026-08-05  
**Phase:** Deterministic core validated; integrated rule modules under active implementation  
**Implementation status:** Domain core `0.3.0` includes cargo calculation, trade-lane evaluation, destination-country requirement evaluation, and dangerous-goods/special-cargo pre-screen

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
- Current implementation uses only free, official, and open-source resources.

## Architecture Decisions

### ADR-001: Deterministic Core

**Status:** Approved and implemented through `@inco/domain-core` version `0.3.0`.

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

### ADR-003: Free and Official Source First

**Status:** Approved.

- No paid data, software, API, or content license in the current stage.
- Use official free sources and open-source tooling.
- Missing live or licensed data returns uncertainty rather than inferred certainty.

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

**Status:** Active; executable country and cargo pre-screen modules started.

Completed:

- Source hierarchy and registry.
- Destination-country schema and four seed packs.
- Executable destination-country rule schema.
- Executable seed rule packs for UAE, Saudi Arabia, Egypt, and Oman.
- Deterministic `evaluateCountryRequirements()` implementation.
- Country-rule integrity and evaluator tests.
- Dangerous-goods pre-screen input and output schemas.
- Deterministic `prescreenCargo()` implementation.
- Representative DG/special-cargo tests covering ordinary cargo, unknown mixtures, aerosols, perfume/alcohol indicators, damaged batteries, and oversized machinery.

Remaining:

- Official source normalization for country rule records.
- Additional DG indicator rules and mode/country escalation mapping.
- Full acceptance scenario fixture set.

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

## Roadmap to Internal Testing

Source of truth: `docs/ROADMAP_TO_INTERNAL_TESTING_v1.0.md`.

Current workstreams:

- Issue #5: executable destination-country rules.
- Issue #6: dangerous-goods and cargo nature pre-screen.
- Issue #7: minimum gateway and carrier coverage.
- Issue #8: integrated trade-lane engine.
- Issue #9: internal end-to-end scenarios.
- Issue #10: internal test harness and readiness gate.

### Next autonomous work

1. Complete source normalization and rule records required for `GATE-CR-01`.
2. Expand DG pre-screen rules and escalation mapping required for `GATE-DG-01`.
3. Complete priority gateways and carrier-service records required for `GATE-GC-01`.
4. Integrate cargo pre-screen, country requirements, gateway, carrier, and trade-term outputs into one consolidated result.
5. Execute the first three end-to-end scenarios and create the internal test harness.

## Approved Executable Result

### `@inco/domain-core` version `0.3.0`

Implemented:

- CBM, gross, volumetric, and chargeable-weight calculation.
- Unit normalization, per-piece and shipment-total bases, rounding, minimums, runtime validation, and audit metadata.
- Deterministic trade-lane corridor evaluation.
- Deterministic destination-country requirement evaluation.
- Deterministic dangerous-goods and special-cargo pre-screen.
- Source-gap, stale-record, incomplete-route, missing-input, carrier-confirmation, specialist-confirmation, and enhanced-compliance decisions.

## Active Quality Gates

CI runs when changing:

- Domain-core code and tests.
- Cargo fixtures.
- Carrier services and source records.
- Country-rule records and schemas.
- DG pre-screen schemas.
- Gateway records and source records.
- Trade-lane corridor records.
- Carrier, gateway, and trade-lane schemas.

The tests currently cover:

- Cargo calculations and regressions.
- Express carrier traceability.
- Ocean and air carrier traceability.
- Country-rule integrity for UAE, Saudi Arabia, Egypt, and Oman.
- Destination-country evaluator decisions.
- DG and special-cargo representative scenarios.
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
- Any future paid data or software license.
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
- Free-and-official-source-first policy approved in ADR-003.
- Roadmap to internal testing created with coded tasks and GitHub workstreams.
- Destination-country rule schema, four executable seed packs, evaluator, and tests added.
- DG pre-screen schemas, deterministic evaluator, and representative tests added.
- Domain core advanced to `0.3.0`.
