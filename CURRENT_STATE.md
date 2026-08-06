# INCO Current State

**Date:** 2026-08-06  
**Phase:** Public open-core showcase completion and anonymous-tool hardening  
**Implementation status:** `@inco/domain-core` version `0.4.0` with deterministic decision engine, real UAT HTTP endpoint, passing `UAT-CYCLE-003`, Apache-2.0 public-core license, road and multimodal candidate packs, product-rule packs, threat model, dependency monitoring, and CodeQL workflow.

## Execution Authority

The owner has authorized progression through all maturity stages. Execution continues automatically for documentation, schemas, deterministic logic, public sample data, tests, security baselines, and deployment-neutral architecture.

Provider and commitment decisions remain explicit gates for production hosting, authentication, database, payment, AI, paid data, live carrier or government integrations, and public marketplace launch.

## Approved Product and Commercial Positioning

- INCO is a bilingual, rules-first decision-support platform for international commerce and logistics.
- The deterministic core works without generative AI.
- The public core is licensed under Apache License 2.0.
- Protected knowledge operations, customer data, expert-reviewed outputs, private rule packs, managed deployments, and white-label implementations remain outside the public license boundary.
- The project is positioned first as a professional showcase, trust-building platform, and consulting lead-generation asset.
- Direct SaaS revenue remains a secondary hypothesis to be validated by real usage.

## Approved Architecture Decisions

- `ADR-001`: deterministic TypeScript domain core.
- `ADR-002`: origin, gateway, carrier, service, and trade-lane architecture.
- `ADR-003`: free-and-official-source-first policy.
- `ADR-004`: open-core positioning, protected commercial boundary, and Apache-2.0 public-core licensing.

## Implemented Core

- CBM, gross, volumetric, and chargeable-weight calculations.
- Destination-country requirement evaluation.
- Dangerous-goods and special-cargo pre-screen.
- Trade-lane corridor evaluation.
- Integrated decision output across cargo, country, route, gateway, and carrier conditions.
- Controlled states including `candidate`, `confirmation_required`, `source_unavailable`, `blocked_information_required`, and `enhanced_compliance_required`.
- Bilingual internal reports and CLI runner.
- Real browser-console adapter and HTTP evaluation endpoint.

## UAT Status

`UAT-CYCLE-003`: PASS.

Evidence:

- `docs/UAT_CYCLE_003_REPORT_v1.0.md`.
- CI run `31037274839`.

Coverage includes six launch scenarios plus invalid inputs, unsupported road and multimodal cases, chemical contradictions, damaged batteries, temperature-controlled medicine, food, oversized cargo, and enhanced-compliance scenarios.

## Knowledge Coverage

### Destination markets

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
- Russia with enhanced-compliance controls.
- Australia.

### Additional structured coverage

- Initial GCC road and multimodal candidate structures.
- Product-rule pack for medicines, food, chemicals, and batteries.
- Eleven-term controlled verification overlay.
- Source-normalization register with review cadence and fallback states.

No dataset implies live route, schedule, capacity, price, cut-off, carrier acceptance, customs clearance, permit, or authority approval.

## Licensing and Repository Governance

Implemented:

- `LICENSE`: Apache License 2.0.
- `NOTICE`: attribution and trademark boundary.
- `SECURITY.md`.
- `CONTRIBUTING.md`.
- Public-core versus protected-knowledge boundary.

## Security and Production Readiness

Implemented baseline:

- `docs/PRODUCTION_READINESS_ARCHITECTURE_SECURITY_GAP_ANALYSIS_v1.0.md`.
- `docs/THREAT_MODEL_v1.0.md`.
- Dependabot configuration for npm and GitHub Actions.
- CodeQL workflow for JavaScript/TypeScript.
- Anonymous evaluation endpoint request-size limit.
- JSON content-type enforcement.
- Request timeout.
- Basic rate limiting.
- Browser security headers.
- Loopback-only default binding for the internal console.
- Security regression tests for the endpoint baseline.

## Maturity Gates

### Gate A: Public Open-Core Showcase

**Status:** Substantially complete.

Remaining:

- Approved screenshots.
- Architecture diagram asset.
- Short bilingual demo video.
- Repository-history review for secrets and protected content.
- MostafaGad.net INCO project-page integration.
- Generated lockfile restoration and release provenance improvements.

### Gate B: Anonymous Public Tools

**Status:** Engineering foundation in progress.

Remaining before internet exposure:

- Production reverse proxy or API gateway.
- Distributed rate limiting.
- Formal request-schema middleware.
- Health and readiness endpoints.
- Privacy-safe logs, metrics, alerting, and error tracking.
- Environment separation and independent security review.
- Anonymous-use privacy notice.

### Gate C: Accounts and Saved Cases

**Status:** Architecture-ready; providers not selected.

Required:

- Authentication and authorization.
- Tenant isolation.
- Encrypted database.
- Saved-case and evidence-snapshot model.
- Retention, deletion, export, backup, and restore controls.

### Gate D: Paid Reports and Workspaces

**Status:** Control design pending.

Required:

- Payment and entitlement provider.
- Product and pricing model.
- Tamper-evident reports.
- Expert-review workflow.
- Commercial terms, support, refunds, and disputes.

### Gate E: Live Integrations and Optional AI

**Status:** Deferred pending approved providers and use cases.

Required:

- Provider-specific security review.
- Credential isolation and rotation.
- Source-health monitoring and kill switches.
- Controlled fallback when integrations fail.
- AI prompt-injection and data-exfiltration controls.
- Human review for high-risk outputs.

## Current Master Plan

See `docs/ALL_GATES_EXECUTION_PLAN_v1.0.md`.

## Safety Boundaries

- No carrier acceptance claim without current evidence or direct confirmation.
- No gateway capability inferred from a code or name alone.
- No volatile rule without review controls.
- No DG pre-screen presented as final classification.
- No route, customs, permit, legal, sanctions, insurance, or authority result presented as approval.
- AI cannot override deterministic safety states.
- Live integration failure must degrade to controlled uncertainty.

## Decisions Still Requiring Owner Selection

- Production hosting architecture.
- Authentication provider.
- Database provider and managed/self-hosted model.
- Payment provider and commercial pricing.
- AI model/provider and permitted data boundary.
- Paid data or software.
- Live carrier or government integrations.
- Public marketplace launch.

## Change Log

### 2026-08-06

- Apache-2.0 licensing and NOTICE confirmed.
- All-gates execution authorized.
- Threat model added.
- Dependabot and CodeQL added.
- Anonymous endpoint security baseline implemented and tested.
- All-gates execution plan created.
- Current state reconciled with completed road, multimodal, product-rule, licensing, and production-readiness work.
