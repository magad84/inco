# INCO All-Gates Execution Plan v1.0

**Date:** 2026-08-06  
**Owner:** Mostafa Gad  
**Status:** Approved execution framework

## Objective

Progress INCO through all maturity gates without weakening deterministic safety, exposing protected knowledge, or committing to paid providers before an explicit provider decision.

## Gate A: Public Open-Core Showcase

**Target:** Complete

Required:

- Apache-2.0 license and NOTICE.
- Public README aligned with actual maturity.
- SECURITY and CONTRIBUTING policies.
- Threat model.
- Dependency monitoring and code scanning.
- Representative data only.
- No protected source content, credentials, or customer data.
- CI green.
- Screenshots, architecture diagram, demo video, and MostafaGad.net project page.

Remaining media work:

- Approved screenshots.
- Architecture diagram asset.
- Short bilingual demonstration video.
- Website integration when the website implementation phase reaches the INCO product page.

## Gate B: Anonymous Public Tools

**Target:** Engineering foundation in progress

Implemented baseline:

- Deterministic HTTP evaluation path.
- Request body limit.
- JSON content-type enforcement.
- Request timeout.
- Basic in-memory rate limiting.
- Security headers.
- Loopback-only default binding.

Still required before internet exposure:

- Production reverse proxy or API gateway.
- Distributed rate limiting.
- Structured request schema validation.
- Health and readiness endpoints.
- Privacy-safe structured logging.
- Metrics, alerting, and error tracking.
- Deployment environment separation.
- Independent security review.
- Anonymous usage and privacy notice.

## Gate C: Accounts and Saved Cases

**Target:** Architecture-ready; provider selection pending

Required:

- Identity provider and session model.
- Organization and membership model.
- Role and tenant authorization.
- Encrypted relational database.
- Saved case and evidence snapshot model.
- Retention, export, and deletion workflows.
- Backup, restore, and disaster-recovery tests.
- Cross-tenant isolation tests.

Provider decisions pending:

- Authentication provider.
- Database technology and managed/self-hosted model.
- Production hosting architecture.

## Gate D: Paid Reports and Workspaces

**Target:** Product and control design pending

Required:

- Payment provider.
- Product, price, entitlement, invoice, refund, and tax model.
- Tamper-evident report evidence.
- Expert-review workflow.
- Customer support and dispute process.
- Terms of service, privacy notice, and commercial boundary.

Commercial principle:

The primary commercial layer remains consulting, training, expert-reviewed packs, private deployments, white-label implementations, and company-specific rule packs. Direct SaaS revenue remains evidence-led.

## Gate E: Live Integrations and Optional AI

**Target:** Deferred until providers and use cases are approved

Required:

- Provider-specific security and contractual review.
- Credential storage and rotation.
- Source-health monitoring and kill switches.
- Current-data fallback to controlled uncertainty.
- AI prompt-injection and data-exfiltration controls.
- Deterministic core remains source of truth.
- Human review for high-risk outputs.

Pending decisions:

- Carrier or government API providers.
- AI model/provider and permitted data boundary.
- Paid data licenses.

## Cross-Gate Workstreams

### Knowledge Operations

- Expand road and multimodal route packs.
- Expand product-specific rules by country.
- Maintain review dates and source health.
- Separate public samples from protected operational releases.
- Add signed or checksummed knowledge releases.

### Quality

- Expand negative, contradiction, stale-source, and abuse tests.
- Add accessibility, RTL, localization, performance, and browser testing.
- Persist UAT evidence and defect history.

### Security

- Restore a generated lockfile.
- Pin GitHub Actions to immutable commit SHAs after verification.
- Enable repository-level secret scanning and push protection where available.
- Add SBOM and release provenance.
- Conduct repository-history secret and protected-content review.

### Public Positioning

- Demonstrate how operational expertise becomes executable governance.
- Link INCO to MostafaGad.net.
- Publish concise technical and professional case studies.
- Avoid presenting the project as a carrier, customs, legal, or authority approval service.

## Decision Boundary

Execution continues automatically for documentation, schemas, deterministic logic, test coverage, public sample data, security baselines, and deployment-neutral architecture.

Owner selection remains required before committing to:

- production hosting architecture;
- authentication provider;
- database provider;
- payment provider;
- AI provider;
- paid data or software;
- live carrier or government integration;
- public marketplace launch.
