# INCO Threat Model v1.0

**Date:** 2026-08-06  
**Scope:** Public open-core repository, anonymous public tools, future accounts, paid reports, live integrations, and optional AI layer  
**Status:** Approved baseline

## 1. Assets

- Deterministic decision logic.
- Public and protected knowledge releases.
- Source provenance, review dates, and verification status.
- User identity and organization membership.
- Shipment, cargo, counterparty, payment-route, and commercial data.
- Generated reports and audit evidence.
- Credentials, API keys, signing keys, and deployment secrets.
- INCO name, reputation, and professional trust.

## 2. Trust Boundaries

1. Public browser to public API.
2. Public API to deterministic engine.
3. Engine to public knowledge release.
4. Engine to protected operational knowledge store.
5. Application to authentication provider.
6. Application to database and object storage.
7. Application to payment provider.
8. Application to carrier, authority, or other third-party integrations.
9. Optional AI interpretation layer to deterministic output and user-provided content.
10. CI/CD pipeline to source repository and deployment environment.

## 3. Principal Threats

| ID | Threat | Risk | Required controls |
|---|---|---:|---|
| `TM-001` | Malformed or oversized input causes denial of service | High | Request-size limits, strict schemas, timeouts, rate limits, resource ceilings |
| `TM-002` | Manipulated cargo description suppresses risk indicators | High | Structured required fields, contradiction checks, missing-evidence states, no product-name-only clearance |
| `TM-003` | Stale rule or source produces misleading output | High | Effective dates, review dates, stale gates, release identifiers, blocked publication, monitoring |
| `TM-004` | User treats candidate guidance as approval | High | Controlled states, prominent boundaries, confirmation checklist, evidence traceability |
| `TM-005` | Cross-tenant data exposure | Critical | Organization-scoped authorization, row-level checks, isolation tests, deny-by-default access |
| `TM-006` | Credential or secret leakage | Critical | Managed secrets store, rotation, secret scanning, no client-side secrets, environment separation |
| `TM-007` | Malicious uploaded document | High | File allowlist, malware scan, isolated object storage, size limits, expiring URLs, no direct execution |
| `TM-008` | Report or evidence is altered after generation | High | Immutable snapshot, engine and knowledge versions, timestamp, source IDs, content hash, signed release metadata |
| `TM-009` | API abuse, scraping, or automated cost exhaustion | High | Rate limits, quotas, anomaly detection, caching, circuit breakers, no paid API fan-out by default |
| `TM-010` | Dependency or CI supply-chain compromise | High | Lockfile, dependency review, code scanning, secret scanning, SBOM, pinned actions, least-privilege tokens |
| `TM-011` | Third-party integration returns incomplete or deceptive data | High | Provider-specific validation, source status, fallback states, freshness checks, kill switch |
| `TM-012` | AI prompt injection or data exfiltration | High | AI remains optional, deterministic core as source of truth, content isolation, tool allowlist, no secret access, human review |
| `TM-013` | Privileged expert override hides original evidence | Medium | Non-destructive override record, named reviewer, reason, expiry, original result retained |
| `TM-014` | Logs expose shipment or counterparty data | High | Data minimization, redaction, field allowlist, restricted retention, access controls |
| `TM-015` | Trademark or endorsement confusion from forks | Medium | NOTICE, trademark boundary, no implied endorsement or certification |

## 4. Abuse Cases

- Repeated anonymous requests intended to exhaust CPU or external quotas.
- Use of invalid country codes, impossible dimensions, or contradictory declarations to bypass controls.
- Automated extraction of private or protected datasets.
- Submission of secrets, personal data, or regulated documents into a public demo.
- Attempt to use INCO output as a customs, legal, sanctions, DG, booking, or authority approval.
- Forked deployments presenting themselves as endorsed by Mostafa Gad or INCO.

## 5. Security Invariants

The system must preserve the following invariants:

1. Missing evidence never becomes affirmative approval.
2. Stale operational data cannot remain a current recommendation.
3. AI cannot override deterministic safety states.
4. Public clients never receive protected source content or credentials.
5. Tenant data cannot be addressed without tenant-scoped authorization.
6. Reports identify the engine version, knowledge release, source IDs, and evaluation time.
7. Expert overrides remain auditable and do not destroy the original result.
8. Live integration failure degrades to controlled uncertainty.

## 6. Gate Mapping

### Gate A: Public Open-Core Showcase

- No customer or protected data.
- Apache-2.0 license, NOTICE, SECURITY, CONTRIBUTING.
- CI, dependency and code scanning.
- Demo labeled non-production.

### Gate B: Anonymous Public Tools

- Hardened API boundary.
- Request schemas, rate limiting, security headers, logging controls, monitoring.
- No persistent shipment data by default.

### Gate C: Accounts and Saved Cases

- Authentication, authorization, tenant isolation, encrypted storage, retention and deletion.

### Gate D: Paid Reports

- Entitlements, payment isolation, immutable evidence, support and dispute process.

### Gate E: Live Integrations and AI

- Provider review, secret isolation, source-health monitoring, prompt-injection defenses, kill switches, human review.

## 7. Review Triggers

Review this threat model when any of the following occurs:

- Public deployment.
- Authentication or persistent storage.
- Payment integration.
- File uploads.
- New country or regulated product scope.
- Live carrier or government integration.
- AI or agent tooling.
- Material security incident or source-integrity failure.
