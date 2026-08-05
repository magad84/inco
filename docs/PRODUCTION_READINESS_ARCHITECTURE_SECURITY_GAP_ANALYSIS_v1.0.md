# INCO Production Readiness Architecture & Security Gap Analysis v1.0

**Date:** 2026-08-05  
**Status:** Pre-production assessment  
**Current gate:** Internal functional testing only

## Executive Conclusion

INCO is technically credible as a deterministic internal decision-support engine and professional open-core showcase. It is not yet ready for public production use with customer data, authentication, payments, saved cases, live integrations, or commercially relied-on reports.

The principal production risk is not only application security. It is the combination of sensitive trade data, volatile external rules, user reliance, source freshness, auditability, and future third-party integrations.

## Current Architecture

Implemented:

- TypeScript deterministic domain core.
- File-based controlled knowledge datasets.
- Country, cargo, route, gateway, carrier, trade-term, and source-governance logic.
- Automated regression and UAT cycles.
- Local/internal HTTP evaluation endpoint.
- Static browser UAT console.

Not implemented or not approved:

- production web framework;
- production API gateway;
- authentication and authorization;
- tenant isolation;
- database and migration strategy;
- encryption key management;
- secrets management;
- payments;
- persistent cases and reports;
- production logging, monitoring, alerting, and incident response;
- rate limiting and abuse controls;
- live carrier or government integrations;
- formal privacy, retention, deletion, and data-processing controls;
- production deployment architecture.

## Recommended Production Architecture

### 1. Public Presentation Layer

- MostafaGad.net product page for positioning, use cases, documentation, and demo access.
- Isolated INCO application deployment on a dedicated subdomain or service boundary.
- Static public documentation separated from authenticated case data.

### 2. Application Layer

- Bilingual web application.
- Server-side API boundary around the deterministic engine.
- Explicit request schemas and response schemas.
- No direct browser access to protected knowledge stores or credentials.
- Versioned decision endpoint and versioned knowledge-release identifier in every report.

### 3. Decision Engine Layer

- Keep the deterministic core independent from the web framework.
- Treat AI as an optional interpretation layer, never the source of truth.
- Require structured inputs before rule execution.
- Preserve conservative states such as `confirmation_required`, `source_unavailable`, and `blocked_information_required`.

### 4. Knowledge Layer

- Public sample data in GitHub.
- Protected operational knowledge in a private controlled store.
- Signed or checksummed knowledge releases.
- Effective dates, review dates, source IDs, verification status, and reviewer identity.
- Promotion workflow from research seed to verified release.
- Rollback capability when a rule or source is found incorrect.

### 5. Data Layer

Future production data should be separated into:

- user identity and account data;
- organization and membership data;
- saved cases and shipment facts;
- generated reports and evidence snapshots;
- billing and entitlement metadata;
- knowledge-release metadata;
- security and audit events.

Do not place credentials, payment card data, protected source files, or uploaded customer evidence in the public repository.

## Security Gap Register

| ID | Severity | Gap | Production control required |
|---|---:|---|---|
| `SEC-001` | Critical | No production authentication or authorization | Approved identity provider, secure sessions, MFA for privileged roles, least privilege, role and tenant checks |
| `SEC-002` | Critical | No tenant isolation model | Organization-scoped data model, row-level authorization tests, cross-tenant access prevention |
| `SEC-003` | Critical | No production secrets management | Managed secrets store, rotation, environment separation, no secrets in GitHub or client bundles |
| `SEC-004` | High | Internal HTTP endpoint lacks production controls | Request-size limits, schema validation, rate limiting, timeouts, security headers, CSRF/CORS policy, abuse detection |
| `SEC-005` | High | No formal privacy and retention model | Data classification, consent, retention periods, deletion workflow, export workflow, regional/legal review |
| `SEC-006` | High | No tamper-evident decision evidence | Persist input snapshot, engine version, knowledge release, source IDs, timestamp, result, and audit hash |
| `SEC-007` | High | Volatile knowledge can become stale | Automated freshness gates, stale-data banners, blocked publication, review queues, source health monitoring |
| `SEC-008` | High | No secure upload pipeline for documents | File-type allowlist, malware scanning, size limits, isolated storage, expiring access URLs, content validation |
| `SEC-009` | High | No incident response and security monitoring | Central logs, alerts, audit review, incident playbooks, owner and escalation matrix |
| `SEC-010` | Medium | No dependency and supply-chain security program | Dependabot or equivalent, lockfile strategy, code scanning, secret scanning, SBOM, pinned actions |
| `SEC-011` | Medium | No availability and recovery objectives | Backups, restore tests, RPO/RTO, health checks, rollback and disaster recovery plan |
| `SEC-012` | Medium | No production accessibility and localization QA | Keyboard, screen-reader, RTL, bilingual terminology, date/number and error-message testing |
| `SEC-013` | Medium | No formal model for expert overrides | Named reviewer, reason, evidence, scope, expiry, and non-destructive audit history |
| `SEC-014` | Medium | No production legal boundary acceptance | Terms, privacy notice, professional boundary, user acknowledgement for controlled outputs |

## Open-Repository Security Controls

Before promoting the public repository:

1. Add a reviewed license only after owner approval.
2. Add `SECURITY.md` with a private vulnerability-reporting path.
3. Add `CONTRIBUTING.md` and data/source contribution rules.
4. Add automated secret scanning and dependency updates.
5. Ensure no protected source text or private files exist in repository history.
6. Separate sample datasets from operational private datasets.
7. Add code owners or review rules for security-sensitive paths.
8. Publish a threat model for the future hosted application.

## Production Release Gates

### Gate A: Public Open-Core Showcase

Requirements:

- updated public README and screenshots;
- license decision completed;
- security policy and contribution policy;
- representative sample data only;
- no customer data or protected sources;
- CI green;
- demo clearly marked non-production.

### Gate B: Public Anonymous Tools

Additional requirements:

- hardened API deployment;
- abuse controls and monitoring;
- privacy-safe request logging;
- no persistent personal or shipment data by default;
- production error handling and availability controls.

### Gate C: Accounts and Saved Cases

Additional requirements:

- authentication and authorization;
- tenant isolation;
- encrypted database and backups;
- retention and deletion workflows;
- security and privacy review.

### Gate D: Paid Reports and Business Workspaces

Additional requirements:

- payment-provider approval;
- entitlement controls;
- invoice and refund rules;
- tamper-evident report evidence;
- support and dispute process;
- formal commercial terms.

### Gate E: Live Integrations and AI

Additional requirements:

- provider-specific security and contractual review;
- credential isolation and rotation;
- source freshness and failure fallback;
- prompt-injection and data-exfiltration controls for AI;
- human review for high-risk outputs;
- integration-specific monitoring and kill switches.

## Immediate Next Actions

1. Update the public README to reflect the real current maturity and open-core positioning.
2. Add `SECURITY.md` and `CONTRIBUTING.md` without exposing private contact or credentials.
3. Add executable governance tests for the new road, multimodal, and product-rule datasets.
4. Build a formal threat model for the future hosted version.
5. Prepare a license comparison decision note for owner approval.
6. Keep production hosting, authentication, payment, AI, and live API selection as explicit owner decisions.
