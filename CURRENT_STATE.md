# INCO Current State

**Date:** 2026-08-06  
**Phase:** Free public-service build and deployment preparation  
**Implementation status:** deterministic domain core, bilingual public interface, anonymous hardened API, health/readiness probes, Apache-2.0 public core, CI, CodeQL, threat model, deployment runbook, and passing internal UAT foundation.

## Approved Strategic Positioning

INCO supports Mostafa Gad’s approved brand position:

> **Business and Operations Leader with deep supply-chain expertise**

Technology, automation, and AI are execution enablers, not the primary professional identity.

Mostafa Gad’s project role is Founder, Product Owner, Domain Architect, Business-Rules Owner, and Knowledge and Source-Governance Lead.

## Approved Service Model

INCO is a real, free, limited professional service for:

- supply-chain, logistics, procurement, customs, trade, and operations professionals;
- entrepreneurs;
- individual importers.

The objective is to deliver useful professional checks, increase qualified traffic, strengthen Mostafa Gad’s authority, and connect users with MostafaGad.net, research, books, videos, and the public GitHub project.

The first public release has:

- no registration;
- no payment;
- no saved cases;
- no document upload;
- no persistent customer-data requirement;
- no AI dependency;
- bilingual deterministic output;
- clear privacy and professional boundaries.

## Hosting and Runtime Direction

- Main website: MostafaGad.net on Neom Cloud.
- INCO service: `inco.mostafagad.net` on the existing Hostinger VPS runtime.
- HTTPS and reverse proxy: Caddy.
- Initial application: private Node service behind the proxy.
- Ollama, PostgreSQL, Redis, and Qdrant are not required by the initial service.
- Optional AI adapter remains implemented but disabled through `AI_ENABLED=false`.

See `docs/PUBLIC_SERVICE_DEPLOYMENT_RUNBOOK_v1.0.md`.

## Implemented Domain Core

- CBM, gross, volumetric, and chargeable-weight calculations.
- Destination-country requirement evaluation.
- Dangerous-goods and special-cargo pre-screen.
- Trade-lane corridor evaluation.
- Integrated cargo, country, route, gateway, and carrier decision output.
- Controlled states: `candidate`, `confirmation_required`, `source_unavailable`, `blocked_information_required`, and `enhanced_compliance_required`.
- Bilingual internal reports and CLI runner.
- Real HTTP evaluation endpoint.

## Implemented Public Interface

The former internal UAT console has been converted into a public-service interface with:

- English LTR and Arabic RTL modes;
- simplified shipment-fact entry;
- mobile-responsive layout;
- accessible labels and skip navigation;
- professional result sections for route, cargo, destination, risks, missing information, confirmations, sources, and next step;
- deterministic-state-aware next-step messaging;
- visible privacy warning against entering identifying or confidential information;
- visible professional-use boundary;
- founder and brand positioning aligned with Web V3;
- links to MostafaGad.net and GitHub;
- canonical URL and `WebApplication` structured data.

## API and Security Baseline

Implemented:

- request body-size limit;
- JSON content-type enforcement;
- request timeout;
- basic anonymous rate limiting;
- browser security headers;
- loopback default binding with explicit deployment host setting;
- `GET /healthz`;
- `GET /readyz`;
- privacy-safe deployment guidance;
- regression tests covering security, public UI positioning, bilingual behavior, SEO foundations, and deterministic safety boundaries.

## Knowledge Coverage

Destination markets:

- UAE;
- Saudi Arabia;
- Egypt;
- Oman.

Priority origins:

- China;
- India;
- Turkey;
- Italy;
- United States;
- Russia with enhanced-compliance controls;
- Australia.

Additional controlled coverage includes road and multimodal candidate structures, medicines, food, chemicals, batteries, carrier and gateway seeds, source-normalization rules, and eleven controlled trade-term records.

No dataset implies live route, schedule, capacity, price, cut-off, acceptance, clearance, permit, or authority approval.

## Repository and Governance

Implemented:

- Apache License 2.0;
- NOTICE and public/private boundary;
- SECURITY.md;
- CONTRIBUTING.md;
- Dependabot;
- CodeQL;
- threat model;
- production-readiness gap analysis;
- ADR-006 brand and free-service model;
- public-service deployment runbook.

## Current Release Gate

### Completed or substantially completed

- deterministic engine;
- source-governed public knowledge foundation;
- internal UAT cycles;
- public-service positioning;
- bilingual public UI foundation;
- anonymous API security baseline;
- health and readiness probes;
- deployment-neutral and Hostinger-specific runbook;
- open-source governance.

### Remaining before public launch

1. Generate and commit a valid dependency lockfile.
2. Complete repository-history review for secrets and protected source content.
3. Add production container files and pinned runtime image.
4. Add Caddy deployment configuration template without secrets.
5. Add automated smoke tests for the running HTTP service.
6. Verify current CI and CodeQL after the public UI changes.
7. Complete browser/mobile accessibility review.
8. Confirm DNS access and Hostinger VPS deployment access.
9. Deploy to `inco.mostafagad.net` and validate TLS, health, readiness, rate limiting, and rollback.
10. Integrate the INCO gateway page and internal links into MostafaGad.net V3.
11. Add privacy-safe analytics only after the tracking boundary is approved.
12. Prepare screenshots, architecture asset, and short bilingual launch video.

## Decisions Required From Owner

No strategic product decision is currently pending.

Execution-time inputs will be required only for:

- Hostinger VPS access;
- DNS control for `inco.mostafagad.net`;
- final approval immediately before public DNS cutover.

## Change Log

### 2026-08-06

- INCO repositioned from demo/SaaS language to a free limited professional service.
- Brand role aligned to Business and Operations Leader with deep supply-chain expertise.
- AI disabled for initial public launch to avoid unnecessary cost and resource consumption.
- Public bilingual responsive interface implemented.
- Deterministic next-step presentation added.
- Health and readiness endpoints added.
- Public UI and API governance tests added.
- Hostinger VPS deployment runbook added.
- README reconciled with the free-service and brand strategy.
