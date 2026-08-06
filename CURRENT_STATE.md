# INCO Current State

**Date:** 2026-08-06  
**Phase:** Free public-service launch preparation  
**Implementation status:** `@inco/domain-core` version `0.4.0` with deterministic decision engine, real UAT HTTP endpoint, passing `UAT-CYCLE-003`, Apache-2.0 public-core license, road and multimodal candidate packs, product-rule packs, threat model, dependency monitoring, CodeQL workflow, and optional provider-agnostic AI explanation adapter.

## Execution Authority

The owner has authorized progression through all approved research, knowledge, schema, deterministic-code, testing, documentation, GitHub, and deployment-preparation stages.

The approved launch model is a real, free, limited, anonymous professional service. It is not a temporary demo and is not a paid SaaS product.

## Approved Brand Positioning

INCO must support the approved Mostafa Gad V3 positioning:

> **Business & Operations Leader with Deep Supply Chain Expertise**

The hierarchy is:

1. Business and management leadership.
2. Operations as the executive core.
3. Supply Chain as the flagship deep expertise.
4. Governance, performance, transformation, research, and professional learning as supporting authority.
5. Applied AI and business automation as management enablers.

Mostafa Gad is presented in INCO as Founder, Product Owner, Domain Architect, Business-Rules Owner, and Knowledge and Source-Governance Lead.

He is not positioned primarily as a software developer, AI engineer, full-stack developer, or technical specialist.

See `docs/ADR_006_BRAND_POSITIONING_AND_FREE_SERVICE_MODEL.md`.

## Approved Service Model

INCO is a free, limited decision-support service for:

- supply-chain and logistics professionals;
- procurement, trade, customs, and operations practitioners;
- entrepreneurs;
- small importers;
- individual and first-time importers.

The strategic objective is to:

- provide useful initial guidance;
- attract qualified professional traffic;
- strengthen trust in Mostafa Gad's management and supply-chain expertise;
- connect users with related articles, research, books, videos, and professional pages;
- support professional reputation, speaking, teaching, collaboration, and career opportunities.

The initial public service will have:

- no registration;
- no payments;
- no subscriptions;
- no saved cases;
- no document uploads;
- no live booking or rates;
- no final customs, carrier, authority, legal, insurance, or dangerous-goods approval.

## Approved Architecture Decisions

- `ADR-001`: deterministic TypeScript domain core.
- `ADR-002`: origin, gateway, carrier, service, and trade-lane architecture.
- `ADR-003`: free-and-official-source-first policy.
- `ADR-004`: open-core positioning, protected commercial boundary, and Apache-2.0 public-core licensing.
- `ADR-005`: provider-agnostic AI explanation layer with OpenRouter primary, Ollama fallback, and deterministic-only degradation.
- `ADR-006`: Mostafa Gad brand positioning and free limited-service model.

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
- README alignment with the approved MG V3 positioning.

## AI Status

The provider-agnostic AI explanation layer remains available in the codebase, but the approved public-launch default is:

```text
AI_ENABLED=false
```

The deterministic engine and bilingual templates will produce the service result without consuming OpenRouter or Ollama resources.

AI may be activated later only if real usage demonstrates a clear user-value case.

## Hosting Direction

- Main website: Neom Cloud.
- INCO public service target: `inco.mostafagad.net`.
- Final hosting placement must follow the actual current server architecture and access available at deployment time.
- The service should use the minimum required runtime and should not activate PostgreSQL, Redis, Qdrant, Ollama, authentication, or payment services without a demonstrated requirement.

## Current Launch Workstream

### Product and UX

Remaining:

- simplify the current UAT console into a public bilingual service journey;
- define the minimum launch inputs;
- convert internal technical states into clear professional language;
- add related-content links back to MostafaGad.net;
- add a concise founder and expertise attribution section;
- add accessibility and mobile checks.

### Public-Service Engineering

Remaining:

- formal request-schema middleware;
- health and readiness endpoints;
- production reverse proxy;
- proxy-level rate limiting;
- privacy-safe logs and basic operational monitoring;
- production environment configuration;
- deployment and rollback runbook.

### Brand and Search Integration

Remaining:

- MostafaGad.net INCO landing page;
- bilingual metadata and structured data;
- internal links between INCO, articles, research, books, videos, and biography pages;
- sitemap and canonical configuration;
- Search Console submission after launch;
- screenshots and architecture diagram;
- short bilingual walkthrough video.

### Repository and Release Readiness

Remaining:

- restore a generated lockfile;
- review repository history for secrets and protected content;
- create a public release checklist;
- confirm CI and CodeQL are green on the final launch commit;
- create the first public release tag.

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

No additional product-positioning or commercial decision is currently required.

Operational inputs will be required when deployment begins:

- actual server access and runtime inventory;
- DNS control for `inco.mostafagad.net`;
- final hosting placement based on the verified server architecture;
- analytics and Search Console access if measurement is enabled.

## Change Log

### 2026-08-06

- Apache-2.0 licensing and NOTICE confirmed.
- Threat model, Dependabot, and CodeQL added.
- Anonymous endpoint security baseline implemented and tested.
- AI explanation adapter implemented and tested, then set as disabled-by-default for launch.
- MG V3 brand source reviewed.
- `ADR-006` approved.
- INCO repositioned from demo/SaaS framing to a real, free, limited professional service.
- Payment, subscription, accounts, saved cases, and document uploads removed from the approved launch scope.
- README aligned with the approved positioning: Business & Operations Leader with Deep Supply Chain Expertise.
