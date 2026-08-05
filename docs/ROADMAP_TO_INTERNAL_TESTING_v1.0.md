# INCO Roadmap to Internal Testing v1.0

**Status:** Approved execution plan  
**Scope:** Free and official sources only  
**Target:** Internal functional testing of one complete transaction workflow  
**Repository:** `magad84/inco`

## Coding Convention

- `CR-*` Country Rules
- `DG-*` Cargo Nature and DG Pre-Screen
- `GC-*` Gateway and Carrier Coverage
- `TL-*` Trade-Lane Engine
- `E2E-*` End-to-End Scenarios
- `UAT-*` Internal Test Harness and Readiness
- `DOC-*` Governance and Documentation

Status values:

- `DONE`
- `IN_PROGRESS`
- `READY`
- `BLOCKED`
- `DEFERRED`

---

## Phase 0 — Existing Foundation

| Code | Task | Status | Output / Acceptance |
|---|---|---:|---|
| `TL-000` | Deterministic domain core foundation | DONE | TypeScript package builds and tests pass |
| `TL-001` | Cargo calculator | DONE | CBM, gross, volumetric, chargeable weight |
| `TL-002` | Trade-lane evaluator v0.2.0 | DONE | Candidate, stale, source-gap, confirmation and enhanced-compliance states |
| `GC-000` | Initial gateway registry | DONE | UAE, Saudi Arabia, Egypt, Oman, China and India seed gateways |
| `GC-001` | Initial carrier registry | DONE | Express, ocean and air verified-partial records |
| `DOC-000` | Free and official source policy | DONE | ADR-003 approved |

---

## Phase 1 — Executable Destination Country Rules

**Goal:** Convert the four destination seed packs into machine-readable, executable requirements.

| Code | Task | Priority | Dependency | Status | Acceptance Criteria |
|---|---|---:|---|---:|---|
| `CR-COM-001` | Finalize destination-country rule schema | P0 | None | READY | Supports authority, source, trigger, requirement, impact, next action, effective and review dates |
| `CR-AE-001` | Normalize UAE import rules | P0 | `CR-COM-001` | READY | Executable UAE general-import and confirmation rules |
| `CR-SA-001` | Normalize Saudi Arabia import rules | P0 | `CR-COM-001` | READY | Executable Saudi general-import and confirmation rules |
| `CR-EG-001` | Normalize Egypt import rules | P0 | `CR-COM-001` | READY | Executable Egypt general-import and confirmation rules |
| `CR-OM-001` | Normalize Oman import rules | P0 | `CR-COM-001` | READY | Executable Oman general-import and confirmation rules |
| `CR-COM-002` | Country-rule integrity tests | P0 | `CR-AE-001`–`CR-OM-001` | READY | Reject missing sources, dates, authority, impact or next action |
| `CR-COM-003` | Implement `evaluateCountryRequirements()` | P0 | `CR-COM-002` | READY | Returns requirements, gaps, risks, source status and confirmation actions |

**Phase gate `GATE-CR-01`:** All four destination packs evaluate successfully against fixtures and CI.

---

## Phase 2 — Cargo Nature and DG Pre-Screen

**Goal:** Detect cargo indicators and request the correct evidence without claiming final classification.

| Code | Task | Priority | Dependency | Status | Acceptance Criteria |
|---|---|---:|---|---:|---|
| `DG-001` | Finalize cargo pre-screen input/output schemas | P0 | None | READY | Structured description, composition, battery, liquid, gas, temperature, biological and dimension fields |
| `DG-002` | Create deterministic indicator rule set | P0 | `DG-001` | READY | Rules for batteries, chemicals, gases, flammables, magnetized, radioactive, biological, food, pharma, reefer, oversized and high-value cargo |
| `DG-003` | Implement `prescreenCargo()` | P0 | `DG-002` | READY | Returns indicator state, missing evidence, severity and next action |
| `DG-004` | Add carrier and gateway escalation mapping | P0 | `DG-003` | READY | Maps cargo indicators to carrier pre-approval, handler, authority or specialist confirmation |
| `DG-005` | Add DG fixtures and regression tests | P0 | `DG-004` | READY | Minimum 15 positive, negative and insufficient-information cases |

**Phase gate `GATE-DG-01`:** No fixture produces unsupported final classification or acceptance claim.

---

## Phase 3 — Minimum Gateway and Carrier Coverage

**Goal:** Reach sufficient free-source coverage for the first internal scenarios.

| Code | Task | Priority | Dependency | Status | Acceptance Criteria |
|---|---|---:|---|---:|---|
| `GC-TR-001` | Add principal Turkey seaport and cargo airport | P1 | None | READY | Official-source, reviewed, shipment-specific confirmation preserved |
| `GC-IT-001` | Add principal Italy seaport and cargo airport | P1 | None | READY | Supports Italy-to-Oman project-cargo scenario |
| `GC-US-001` | Add one US seaport and cargo airport | P1 | None | READY | Official-source verified-partial records |
| `GC-AU-001` | Add one Australia seaport and cargo airport | P1 | None | READY | Official-source verified-partial records |
| `GC-RU-001` | Add Russia gateway seeds with enhanced controls | P1 | None | READY | No route recommendation without enhanced compliance review |
| `GC-CAR-001` | Add Maersk service-source record | P1 | None | READY | Candidate only; no live schedule, rate or capacity claim |
| `GC-CAR-002` | Add Qatar Airways Cargo record | P1 | None | READY | Route/product confirmation required |
| `GC-CAR-003` | Add Saudia Cargo record | P1 | None | READY | Route/product confirmation required |
| `GC-CAR-004` | Add EgyptAir Cargo record | P1 | None | READY | Route/product confirmation required |
| `GC-CAR-005` | Add Oman Air Cargo record where official evidence supports it | P1 | None | READY | Unsupported services remain source-unavailable |
| `GC-COM-001` | Expand registry integrity tests | P0 | All `GC-*` above | READY | No duplicate IDs, missing source, missing review date or implied acceptance |

**Phase gate `GATE-GC-01`:** Every first-wave test scenario has at least one fully referenced gateway pair and one candidate service or explicit source-gap result.

---

## Phase 4 — Integrated Trade-Lane Engine

**Goal:** Produce one consolidated decision from cargo, country, gateway and carrier modules.

| Code | Task | Priority | Dependency | Status | Acceptance Criteria |
|---|---|---:|---|---:|---|
| `TL-003` | Extend trade-lane input contract | P0 | `CR-COM-003`, `DG-003` | READY | Accepts transaction, cargo, trade term, countries, gateways, service and date |
| `TL-004` | Integrate cargo pre-screen | P0 | `DG-005` | READY | Cargo risks and evidence gaps influence route decision |
| `TL-005` | Integrate destination-country rules | P0 | `CR-COM-003` | READY | Country requirements included with authority, source, impact and next action |
| `TL-006` | Integrate gateway and carrier rules | P0 | `GC-COM-001` | READY | Candidate service and gateway results remain conditional where required |
| `TL-007` | Add trade-term review linkage | P0 | Existing WP-01 data | READY | Selected trade term is checked against mode, named place and route control |
| `TL-008` | Implement consolidated decision output | P0 | `TL-004`–`TL-007` | READY | One result: status, calculations, risks, requirements, confirmations, alternatives and sources |
| `TL-009` | Add integrated regression tests | P0 | `TL-008` | READY | Deterministic results for complete, incomplete, stale, DG and enhanced-compliance cases |

**Phase gate `GATE-TL-01`:** Integrated engine passes CI with no hidden critical risks and no unsupported certainty.

---

## Phase 5 — End-to-End Internal Scenarios

| Code | Scenario | Priority | Status | Minimum Expected Output |
|---|---|---:|---:|---|
| `E2E-001` | China → UAE, general containerized cargo, ocean | P0 | READY | Trade-term review, cargo calculations, gateways, carrier candidate, UAE requirements and confirmations |
| `E2E-002` | India → Saudi Arabia, reefer/general ocean cargo | P0 | READY | Saudi requirements, reefer evidence, source-gap handling and route checks |
| `E2E-003` | Turkey → Egypt, possible DG air cargo | P0 | READY | DG evidence request, airline/station confirmation and Egypt requirements |
| `E2E-004` | China → Oman, general air cargo | P1 | READY | Cargo calculation, transit risk, Muscat handling and Oman requirements |
| `E2E-005` | Italy → Oman, oversized project cargo | P1 | READY | Equipment, lifting, route, permits and engineering confirmation requirements |
| `E2E-006` | Russia-related transaction | P1 | READY | Enhanced compliance override and no simple permitted/prohibited conclusion |

**Phase gate `GATE-E2E-01`:** All six scenarios produce explainable, source-traceable outputs and expected uncertainty states.

---

## Phase 6 — Internal Test Harness

| Code | Task | Priority | Dependency | Status | Acceptance Criteria |
|---|---|---:|---|---:|---|
| `UAT-001` | Create simple local test runner | P0 | `GATE-TL-01` | READY | User can load JSON case and receive structured bilingual result |
| `UAT-002` | Create internal test-case template | P0 | None | READY | Inputs, expected outputs, defects, severity and approval fields |
| `UAT-003` | Create bilingual result renderer | P0 | `TL-008` | READY | Human-readable Arabic/English result without production UI commitment |
| `UAT-004` | Add test evidence export | P1 | `UAT-001` | READY | JSON and Markdown evidence files |
| `UAT-005` | Execute first internal test cycle | P0 | `E2E-001`–`E2E-006`, `UAT-001`–`UAT-003` | READY | Defect log and pass/fail report |
| `UAT-006` | Fix critical/high defects and rerun | P0 | `UAT-005` | READY | No open critical defect; high defects accepted or corrected |

**Internal Testing Readiness Gate `GATE-UAT-READY`:**

- CI green.
- `E2E-001`, `E2E-002`, and `E2E-003` pass as the mandatory first-wave scenarios.
- No unsupported carrier acceptance or regulatory certainty.
- Every official-confirmation item shows reason, authority/provider, source, impact, and next action.
- No paid dependency.

---

## Execution Order

```text
CR-COM-001
→ CR-AE-001 / CR-SA-001 / CR-EG-001 / CR-OM-001
→ CR-COM-002
→ CR-COM-003

DG-001
→ DG-002
→ DG-003
→ DG-004
→ DG-005

GC country/carrier tasks
→ GC-COM-001

CR + DG + GC
→ TL-003 through TL-009
→ E2E-001 through E2E-006
→ UAT-001 through UAT-006
→ GATE-UAT-READY
```

## Definition of Done for Every Task

A task is `DONE` only when:

1. The output is committed to `main`.
2. Sources and review dates are recorded where applicable.
3. Tests are added or updated.
4. GitHub Actions passes.
5. `CURRENT_STATE.md` is updated for material milestones.
6. No paid source or service has been introduced.
