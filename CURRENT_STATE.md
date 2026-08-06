# INCO Current State

**Date:** 2026-08-06  
**Phase:** Public open-core showcase completion and anonymous-tool hardening  
**Implementation status:** `@inco/domain-core` version `0.4.0` with deterministic decision engine, real UAT HTTP endpoint, passing `UAT-CYCLE-003`, Apache-2.0 public-core license, road and multimodal candidate packs, product-rule packs, threat model, dependency monitoring, CodeQL workflow, and provider-agnostic AI explanation adapter.

## Execution Authority

The owner has authorized progression through all maturity stages. Execution continues automatically for documentation, schemas, deterministic logic, public sample data, tests, security baselines, and deployment-neutral architecture.

Approved deployment direction: Neom Cloud VPS, anonymous public demo first, self-hosted authentication and PostgreSQL later, CAP-style manual payment for professional services, and optional AI explanation through OpenRouter with Ollama fallback.

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
- `ADR-005`: provider-agnostic AI explanation layer with OpenRouter primary, Ollama fallback, and deterministic-only degradation.

## Implemented Core

- CBM, gross, volumetric, and chargeable-weight calculations.
- Destination-country requirement evaluation.
- Dangerous-goods and special-cargo pre-screen.
- Trade-lane corridor evaluation.
- Integrated decision output across cargo, country, route, gateway, and carrier conditions.
- Controlled states including `candidate`, `confirmation_required`, `source_unavailable`, `blocked_information_required`, and `enhanced_compliance_required`.
- Bilingual internal reports and CLI runner.
- Real browser-console adapter and HTTP evaluation endpoint.
- Optional AI explanation adapter that cannot alter deterministic results.

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
- AI sanitization, provider fallback, timeout, and deterministic-state integrity tests.

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

Approved target:

- Neom Cloud VPS.
- Anonymous public demo at an isolated INCO subdomain.
- No accounts, payments, document uploads, or saved customer cases in the first demo.

Remaining before internet exposure:

- Production reverse proxy.
- Distributed or proxy-level rate limiting.
- Formal request-schema middleware.
- Health and readiness endpoints.
- Privacy-safe logs, metrics, alerting, and error tracking.
- Environment separation and deployment runbook.
- Anonymous-use privacy notice.

### Gate C: Accounts and Saved Cases

**Status:** Architecture approved; activation deferred until demo usage supports it.

Approved direction:

- Self-hosted authentication.
- PostgreSQL on the Neom Cloud VPS.

Required before activation:

- Authentication and authorization implementation.
- Tenant isolation.
- Encrypted database and backups.
- Saved-case and evidence-snapshot model.
- Retention, deletion, export, backup, and restore controls.

### Gate D: Paid Reports and Workspaces

**Status:** Deferred until demand is demonstrated.

Approved direction:

- CAP-style manual payment and verification workflow for professional services and expert-reviewed outputs.

Required before activation:

- Product and pricing model.
- Payment-proof review and entitlement controls.
- Tamper-evident reports.
- Expert-review workflow.
- Commercial terms, support, refunds, and disputes.

### Gate E: Live Integrations and Optional AI

**Status:** AI explanation architecture implemented; live integrations remain deferred.

Approved AI direction:

- OpenRouter free-tier compatible endpoint as the demo primary provider.
- Ollama on the VPS as fallback.
- Deterministic-only output if both are unavailable.
- Provider selected by environment variables.
- Sanitized deterministic projection only; no customer-sensitive or protected knowledge sent to cloud AI.

Remaining before AI is enabled publicly:

- Create and securely store the OpenRouter API key.
- Confirm the current free model identifier and provider terms at deployment time.
- Select the installed Ollama fallback model based on VPS capacity.
- Add UI disclosure and provider-status telemetry.
- Perform prompt-injection and data-boundary tests.

## Current Master Plan

See `docs/ALL_GATES_EXECUTION_PLAN_v1.0.md`.

## Safety Boundaries

- No carrier acceptance claim without current evidence or direct confirmation.
- No gateway capability inferred from a code or name alone.
- No volatile rule without review controls.
- No DG pre-screen presented as final classification.
- No route, customs, permit, legal, sanctions, insurance, or authority result presented as approval.
- AI cannot override deterministic safety states.
- AI failure cannot block the deterministic result.
- Live integration failure must degrade to controlled uncertainty.

## Decisions Still Requiring Owner Input or Deployment Credentials

- Neom Cloud VPS access details and DNS control when deployment begins.
- OpenRouter API key.
- Ollama installed-model selection after VPS capacity check.
- Final public demo subdomain.
- Pricing only when paid services are activated.
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
- Neom Cloud VPS, anonymous demo, self-hosted future identity, VPS PostgreSQL, CAP-style payments, and optional cloud/local AI direction approved.
- ADR-005 added.
- Provider-agnostic AI explanation adapter implemented with OpenRouter primary, Ollama fallback, sanitization, timeout, and deterministic-only degradation.
- AI explanation regression tests passed in CI run `31063210745`.
