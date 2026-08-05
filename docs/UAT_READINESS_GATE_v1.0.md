# INCO Internal Testing Readiness Gate v1.0

**Gate code:** `GATE-UAT-READY`  
**Assessment date:** 2026-08-05  
**Status:** PASS FOR INTERNAL FUNCTIONAL TESTING  
**Scope:** Deterministic, free-source, non-production internal testing only

## Gate Result

The INCO deterministic core is ready for structured internal functional testing across the six approved end-to-end scenarios.

This gate does not approve production launch, public availability, live booking, live rates, payment, authentication, AI integration, or authority acceptance.

## Mandatory Conditions

| Control | Result | Evidence |
|---|---:|---|
| Domain package builds under strict TypeScript | PASS | GitHub Actions Domain Core workflow |
| Automated regression suite passes | PASS | CI run `31034849145` |
| Mandatory first-wave scenarios E2E-001 to E2E-003 pass | PASS | `fixtures/e2e/cases.v0.1.json` and automated tests |
| Second-wave scenarios E2E-004 to E2E-006 pass | PASS | `fixtures/e2e/cases.v0.2.json` and automated tests |
| Bilingual test reporting available | PASS | Internal test runner and Markdown renderer |
| No paid dependency introduced | PASS | ADR-003 and current package dependencies |
| Missing or volatile information is not guessed | PASS | `confirmation_required`, `source_unavailable`, `blocked_information_required`, and `enhanced_compliance_required` states |
| No unsupported carrier or authority acceptance claim | PASS | Safety boundaries enforced in datasets, engine, and tests |

## Scenario Coverage

| Code | Scenario | Expected control behavior |
|---|---|---|
| `E2E-001` | China to UAE, general containerized ocean cargo | Conditional route candidate with current carrier and customs confirmations |
| `E2E-002` | India to Saudi Arabia, temperature-controlled cargo | Blocks reliance until special-cargo evidence is complete |
| `E2E-003` | Turkey to Egypt, possible dangerous goods by air | Blocks reliance until DG data, classification, and station confirmations are complete |
| `E2E-004` | China to Oman, general air cargo | Conditional route candidate with route, capacity, handling, and import confirmations |
| `E2E-005` | Italy to Oman, oversized project cargo | Blocks reliance pending engineering, lifting, equipment, route, and permit evidence |
| `E2E-006` | Russia-related transaction | Enhanced-compliance override prevents a simple route recommendation |

## Approved Internal Test Commands

From `packages/domain-core`:

```bash
npm run uat:first-wave
npm run uat:first-wave:ar
npm run uat:second-wave
npm run uat:second-wave:ar
npm run uat:all
npm run uat:all:ar
```

## Open Non-Blocking Gaps

The following gaps do not block internal functional testing but must remain visible in outputs:

1. Country rules remain verified-partial until all official source records are normalized and reviewed.
2. Carrier schedules, capacity, rates, terminal assignment, and cargo acceptance are not live.
3. Final dangerous-goods classification remains outside the pre-screen engine.
4. Oversized and project-cargo movement requires engineering and authority confirmation.
5. Russia-related and other triggered transactions require transaction-specific screening.
6. Trade-term source review and expanded fixtures remain active work.

## Production Exclusions

The gate expressly excludes:

- Public production deployment.
- User authentication.
- Payment processing.
- AI model integration.
- Live carrier or government APIs.
- Public marketplace functionality.
- Binding customs, legal, sanctions, DG, booking, or authority decisions.

## Next Execution Stage

Proceed with controlled internal testing, defect capture, source normalization, additional negative and contradiction cases, and stability hardening. Escalate only when production architecture, deployment, authentication, payment, AI, paid data, public marketplace exposure, or a material product-scope decision is reached.
