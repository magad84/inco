# INCO Current State

**Date:** 2026-08-05  
**Phase:** Internal functional testing, real-engine browser console validated  
**Implementation status:** `@inco/domain-core` version `0.4.0` with integrated deterministic decision engine, real UAT HTTP endpoint, eleven-term verification overlay, source-normalization register, and passing `UAT-CYCLE-003`

## Execution Authority

The owner has authorized autonomous progression through all approved research, knowledge, schema, deterministic-code, testing, documentation, and GitHub stages.

Continue without routine approval. Escalate only decisions involving pricing, paid licenses, production architecture or deployment, authentication, payment, AI, live carrier or government APIs, public marketplace exposure, material legal or security risk, or a major scope change.

## Current Product Boundary

- Bilingual professional decision support for international commerce and logistics.
- Rules-first deterministic core that works without generative AI.
- Destination markets: UAE, Saudi Arabia, Egypt, and Oman.
- Priority origins: China, India, Turkey, Italy, United States, Russia, and Australia.
- Free, official, and open-source resources only.
- Missing or volatile data returns controlled uncertainty instead of guessed certainty.
- No production launch, live booking, rates, payment, authentication, or public marketplace approval.

## Approved Architecture Decisions

- `ADR-001`: deterministic TypeScript domain core.
- `ADR-002`: origin, gateway, carrier, service, and trade-lane knowledge architecture.
- `ADR-003`: free-and-official-source-first policy.

## Approved Executable Result

### `@inco/domain-core` version `0.4.0`

Implemented:

- CBM, gross, volumetric, and chargeable-weight calculations.
- Provider-factor metadata, rounding, minimums, validation, and audit controls.
- Destination-country requirement evaluation.
- Dangerous-goods and special-cargo pre-screen.
- Trade-lane corridor evaluation.
- Integrated decision output combining cargo, country, route, gateway, and carrier conditions.
- Controlled states including `candidate`, `confirmation_required`, `source_unavailable`, `blocked_information_required`, and `enhanced_compliance_required`.
- Bilingual internal test reports and CLI runner.
- Real browser-console adapter and HTTP evaluation endpoint.

## UAT Browser Console

The internal browser console is now connected to the real deterministic engine.

Execution flow:

1. Browser form posts to `/api/evaluate`.
2. The server loads controlled corridor and destination-rule datasets.
3. `evaluateUatRequest()` normalizes and validates the request.
4. `evaluateIntegratedDecision()` executes lane, cargo, and destination logic.
5. The UI renders decision state, lane state, cargo statuses, destination state, missing information, confirmations, critical risks, source identifiers, and raw evidence.

Run from `packages/domain-core`:

```bash
npm run uat:console
```

## UAT-CYCLE-003

**Status:** PASS  
**Evidence:** `docs/UAT_CYCLE_003_REPORT_v1.0.md`  
**CI run:** `31037274839`

Coverage:

- Six approved launch scenarios through the UAT adapter.
- Unsupported road scenario.
- Unsupported multimodal scenario.
- Contradictory chemical-data scenario.
- Invalid country-code rejection.
- Damaged battery indicator.
- Temperature-controlled medicine.
- Commercial food cargo.
- Oversized road cargo.
- Multimodal chemical contradiction.

## Trade-Term Verification

The eleven controlled trade-term records now have a record-by-record verification overlay:

- File: `knowledge/trade-terms.verification.v1.0.json`.
- Controlled source: `INTERNAL-TRADE-001`.
- Checks: mode scope, delivery, risk, carriage, insurance, export clearance, import clearance, loading/unloading, and named point.
- Gate status: PASS.

Public output remains conditional on original INCO wording, no protected source text, specific named point, stated version, and no legal-advice claim.

## Official-Source Normalization

The normalization register is active:

- File: `knowledge/source-normalization.v1.0.json`.
- Country packs: UAE, Saudi Arabia, Egypt, Oman.
- Carrier datasets: express/courier, ocean/air, priority carriers.
- Review cadence and fallback states are enforced by tests.
- Live route, schedule, capacity, rate, cut-off, booking, cargo acceptance, permit, and authority decisions remain confirmation-controlled.

## Knowledge Coverage

### Destination countries

- UAE.
- Saudi Arabia.
- Egypt.
- Oman.

### Priority origins

- China.
- India.
- Turkey.
- Italy.
- United States.
- Russia with enhanced compliance controls.
- Australia.

### Carrier and service coverage

Verified-partial or controlled seed records include express, ocean, and air services from DHL Express, FedEx, Aramex, UPS, MSC, CMA CGM, Hapag-Lloyd, Maersk, Emirates SkyCargo, Etihad Cargo, Turkish Cargo, Qatar Airways Cargo, Saudia Cargo, EgyptAir Cargo, and Oman Air Cargo.

No record implies live schedule, capacity, rate, cut-off, or acceptance.

### Gateway coverage

Initial verified-partial gateway records cover the approved destination markets and principal gateways in China, India, Turkey, Italy, United States, Australia, and Russia.

No capability is inferred from a code or gateway name alone.

## Safety Boundaries

- No carrier acceptance claim without current evidence or direct confirmation.
- No gateway capability inferred from a code or name alone.
- No volatile rule without review controls.
- No DG pre-screen presented as final classification.
- No route, abnormal-load, container-fit, customs, or authority result presented as approval.
- Russia-related and other triggered cases require transaction-specific screening.

## Remaining Non-Production Work

- Add more verified route structures for road and multimodal transport.
- Add more product-specific destination-rule coverage for medicines, food, chemicals, batteries, and controlled products.
- Expand bilingual browser-console content and accessibility checks.
- Add persistent test-run evidence and defect-history storage.
- Prepare production-readiness architecture and security gap analysis.

## Decisions Still Requiring Owner Approval

- Pricing or changes to free-versus-paid boundaries.
- Paid data, software, API, or content licenses.
- Final production architecture, hosting commitment, and deployment.
- Authentication.
- Payment provider.
- AI model or provider.
- Live booking, rates, carrier, or government APIs.
- Public marketplace launch.

## Change Log

### 2026-08-05

- Autonomous execution authority recorded.
- Domain core progressed from `0.1.1` to `0.4.0` with CI validation.
- Seven origin packs, destination-country rules, gateway records, carrier-service records, and launch corridors added.
- Cargo calculator, country evaluator, DG pre-screen, trade-lane evaluator, and integrated decision engine implemented.
- Six end-to-end scenarios and two initial internal test cycles passed.
- Bilingual internal test CLI and reporting added.
- `GATE-UAT-READY` approved.
- Browser UAT console connected to the real deterministic engine.
- `UAT-CYCLE-003` passed in CI run `31037274839`.
- Eleven-term controlled verification ledger completed.
- Official-source normalization register and extended cargo/mode coverage added.
