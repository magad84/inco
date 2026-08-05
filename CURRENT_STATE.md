# INCO Current State

**Date:** 2026-08-05  
**Phase:** Internal functional testing ready  
**Implementation status:** `@inco/domain-core` version `0.4.0` with integrated deterministic decision engine, six end-to-end scenarios, bilingual UAT runner, and approved `GATE-UAT-READY`

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

No record implies live schedule, capacity, rate, or acceptance.

### Gateway coverage

Initial verified-partial gateway records cover the approved destination markets and principal gateways in China, India, Turkey, Italy, United States, Australia, and Russia.

No capability is inferred from a code or gateway name alone.

## End-to-End Internal Scenarios

Completed and passing:

- `E2E-001`: China to UAE, general containerized ocean cargo.
- `E2E-002`: India to Saudi Arabia, temperature-controlled cargo.
- `E2E-003`: Turkey to Egypt, possible dangerous goods by air.
- `E2E-004`: China to Oman, general air cargo.
- `E2E-005`: Italy to Oman, oversized project cargo.
- `E2E-006`: Russia-related transaction with enhanced compliance override.

## Internal Test Readiness

`GATE-UAT-READY` is approved for internal functional testing only.

Evidence:

- Gate document: `docs/UAT_READINESS_GATE_v1.0.md`.
- Machine-readable gate: `fixtures/uat/readiness-gate.v1.0.json`.
- First-wave fixtures: `fixtures/e2e/cases.v0.1.json`.
- Second-wave fixtures: `fixtures/e2e/cases.v0.2.json`.
- Latest gate CI run: `31035064979`, successful.

Available commands from `packages/domain-core`:

```bash
npm run uat:first-wave
npm run uat:first-wave:ar
npm run uat:second-wave
npm run uat:second-wave:ar
npm run uat:all
npm run uat:all:ar
```

## Open Non-Blocking Work

- Normalize and review remaining official country-rule source records.
- Expand DG contradiction, evidence-status, mode, gateway, and country escalation cases.
- Expand negative and stale-source fixtures.
- Complete controlled source review for all trade-term records.
- Improve route and carrier candidate coverage while preserving confirmation requirements.
- Run additional internal cycles and maintain a defect register.

## Safety Boundaries

- No carrier acceptance claim without current evidence or direct confirmation.
- No gateway capability inferred from a code or name alone.
- No volatile rule without review controls.
- No DG pre-screen presented as final classification.
- No route, abnormal-load, container-fit, customs, or authority result presented as approval.
- Russia-related and other triggered cases require transaction-specific screening.

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
- Six end-to-end scenarios and two internal test cycles passed.
- Bilingual internal test CLI and reporting added.
- `GATE-UAT-READY` approved after successful CI run `31035064979`.
