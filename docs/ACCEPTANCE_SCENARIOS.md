# INCO Acceptance Scenario Library

**Version:** 0.1  
**Date:** 2026-08-05  
**Status:** Initial deterministic test specification

## 1. Purpose

These scenarios define expected product behavior before application development.

A scenario is not complete unless it states:

- Inputs.
- applicable modules.
- expected calculations.
- expected warnings and uncertainty.
- free result.
- paid extension.
- prohibited system behavior.

## 2. Trade-Term Scenarios

### SC-T01: Containerized cargo with an unsuitable sea-specific term

**Context**

- Seller in China.
- buyer in UAE.
- containerized cargo.
- movement includes road origin, sea main leg, and road destination.
- user selects a term commonly associated with delivery on board a vessel.
- cargo is handed to a container terminal before vessel loading.

**Expected**

- Transport/delivery alignment warning.
- Explain that operational handover may occur before the selected delivery event expected by the user.
- Recommend reviewing a term suitable for delivery to the carrier or terminal.
- Named place must be specific.

**Prohibited**

- Do not say the selected term is always legally invalid.
- Do not recommend an alternative without explaining the responsibility and risk changes.

### SC-T02: Seller offers delivered-duty responsibility without destination capability

**Context**

- Seller has no entity, broker, tax capability, or import-clearance experience in the buyer country.
- selected term expects the seller to carry destination import obligations.

**Expected**

- `Poor Fit` or `Conditional Fit` depending on available capability evidence.
- High operational-capability and clearance-exposure warnings.
- Require destination legal, tax, customs, and broker confirmation.
- Compare a delivered alternative that leaves import formalities with the buyer.

### SC-T03: Buyer expects risk at destination but selected term transfers earlier

**Expected**

- Critical or high risk-expectation conflict.
- Separate freight payment from risk transfer.
- Show exact clarification question for the contract.
- Critical warning visible in free result.

### SC-T04: Named place contains only a country

**Expected**

- Named-place status: insufficiently specific.
- Ask for terminal, port, warehouse, address, or precise point depending on term.
- No definitive recommendation until the delivery point is clarified.

## 3. Dangerous-Goods and Special-Cargo Scenarios

### SC-DG01: Perfume shipment by air courier

**Inputs**

- Product: perfume.
- liquid.
- safety data not provided.
- courier selected.
- UAE origin, Saudi destination.

**Expected**

- `POSSIBLE_DANGEROUS_GOODS`.
- `DANGEROUS_GOODS_DATA_REQUIRED`.
- `CARRIER_CONFIRMATION_REQUIRED`.
- Request safety data, composition/transport data, package quantity, and service.
- Activate origin carrier and destination prohibition/restriction checks.

**Prohibited**

- Do not declare the perfume accepted or prohibited solely from its name.

### SC-DG02: Lithium battery contained in equipment

**Inputs**

- Rechargeable battery installed in equipment.
- chemistry known as lithium-ion.
- watt-hour rating missing.
- condition normal.
- air cargo planned.

**Expected**

- `POSSIBLE_DANGEROUS_GOODS`.
- request watt-hour rating, package configuration, quantity, and required evidence.
- carrier and country confirmation.
- no final acceptance.

### SC-DG03: Damaged battery

**Expected**

- Critical status.
- `SPECIALIST_CONFIRMATION_REQUIRED`.
- `CARRIER_ACCEPTANCE_REQUIRED`.
- do not allow a normal booking-readiness result.

### SC-DG04: Unknown chemical mixture

**Expected**

- `INSUFFICIENT_INFORMATION`.
- `DANGEROUS_GOODS_DATA_REQUIRED`.
- block definitive transport recommendation.
- request current technical and safety data.

### SC-DG05: Oversized machinery with no hazard data issue

**Inputs**

- Equipment is drained and user declares no battery, fuel, oil, gas, or regulated substance.
- dimensions exceed normal road limits.

**Expected**

- No DG indicator found with explicit non-certification warning.
- `SPECIAL_CARGO_DATA_REQUIRED` for oversized load.
- activate equipment, road, route, and permit modules.

## 4. Cargo Calculator Scenarios

### SC-CAL01: CBM single package type

**Inputs**

- 100 cartons.
- 60 × 40 × 30 cm.
- 12 kg gross per carton.

**Expected**

- CBM per carton: `0.072 m3`.
- total CBM: `7.2 m3`.
- total gross weight: `1,200 kg`.
- unit normalization audit retained.

### SC-CAL02: Volumetric weight with configured divisor

**Inputs**

- One package: 60 × 40 × 30 cm.
- gross weight: 12 kg.
- configured divisor: 5000 cm3/kg.

**Expected**

- Volumetric weight: `14.4 kg`.
- chargeable estimate: `14.4 kg` where the service uses higher-of billing.
- display divisor, provider/service or generic-assumption status, and source date.

### SC-CAL03: Same package, different service divisor

**Inputs**

- Same package.
- configured divisor: 4000 cm3/kg.

**Expected**

- Volumetric weight: `18 kg`.
- prove that divisor is provider/service configured and not universal.

### SC-CAL04: Volume fits but payload fails

**Inputs**

- Dense cargo with low CBM and weight above selected equipment payload.

**Expected**

- Preliminary container count driven by payload, not volume.
- prominent payload warning.

### SC-CAL05: Invalid unit

**Inputs**

- Dimensions entered without unit.

**Expected**

- Calculation blocked.
- specific correction message.
- no silent assumption.

## 5. Container Load Planner Scenarios

### SC-CLP01: Exact geometric fit

**Expected**

- All items allocated.
- utilization metrics.
- no claim of operational safety.

### SC-CLP02: Item fits internal space but cannot pass door opening

**Expected**

- Item unallocated.
- reason: door-opening feasibility.
- no false fit based only on internal dimensions.

### SC-CLP03: Fragile no-top-load cartons

**Expected**

- No item placed above fragile cartons.
- lower utilization accepted rather than constraint violation.

### SC-CLP04: Heavy floor-only cartons

**Expected**

- Heavy cartons placed at floor level only.
- payload and floor-load warnings remain separate.

### SC-CLP05: Weight imbalance

**Expected**

- Plan may be produced if hard constraints pass.
- prominent left/right or fore/aft balance warning.
- alternative plan requested where possible.

### SC-CLP06: Mixed SKUs with unloading priority

**Expected**

- Items needed first positioned according to the approved accessibility model.
- explain any trade-off between utilization and unloading sequence.

### SC-CLP07: Dangerous-goods incompatibility without approved segregation rules

**Expected**

- Optimization blocked or isolated from final recommendation.
- `SPECIALIST_CONFIRMATION_REQUIRED`.
- no invented segregation distance or arrangement.

## 6. Road and Abnormal-Load Scenarios

### SC-R01: Dubai special-load indicator

**Inputs**

- Loaded dimensions or weight cross a verified Dubai threshold.
- route and movement date supplied.

**Expected**

- Permit and route confirmation required.
- current truck restriction and operational notice check.
- no claim that permit will be granted.

### SC-R02: Abu Dhabi heavy vehicle during restricted hours

**Expected**

- Effective-dated time restriction warning.
- request route, date, vehicle category, and any exemption/permit.
- source freshness visible.

### SC-R03: Oman load potentially within no-escort permit range

**Expected**

- Candidate permit route, not automatic approval.
- verify all published conditions.
- route and authority confirmation required.

### SC-R04: Egypt exceptional load without verified official rule source

**Expected**

- `SOURCE_UNAVAILABLE` plus `AUTHORITY_CONFIRMATION_REQUIRED`.
- collect dimensions, weights, axles, and route for specialist follow-up.
- do not borrow thresholds from UAE, Saudi Arabia, or Oman.

### SC-R05: Saudi indivisible exceptional load

**Expected**

- Exceptional-load indicator.
- request current permit and route process.
- show regulation-level warning about legal limits and permit status.
- no definitive threshold result until active official data is complete.

## 7. Postal and Carrier Scenarios

### SC-P01: Saudi postal shipment containing lithium batteries

**Expected**

- SPL dangerous/prohibited category trigger.
- carrier confirmation required.
- request service, packing configuration, battery data, and destination rule.

### SC-P02: Oman Post parcel containing a listed prohibited item

**Expected**

- Provider prohibition indicator linked to current source.
- destination customs warning.
- no option to proceed as normal parcel readiness.

### SC-P03: Egypt Post shipment while official source remains unavailable

**Expected**

- `SOURCE_UNAVAILABLE`.
- instruction to confirm directly with Egypt Post and destination authority.
- no inferred prohibited-item list.

### SC-CAR01: Carrier service not selected

**Expected**

- Generic calculation allowed with explicit assumption.
- carrier acceptance and commercial charge remain unconfirmed.

### SC-CAR02: Stale carrier rule

**Expected**

- Definitive provider output blocked.
- re-verification requested.
- last verified and review due dates shown.

## 8. Customs-Broker Marketplace Scenarios

### SC-B01: Saudi broker with valid official license status

**Expected**

- Verified status when identity, license, scope, and current official status align.
- verification date and limitations shown.
- no government endorsement claim.

### SC-B02: Oman broker licensed for limited customs points

**Expected**

- `VERIFIED_WITH_LIMITATIONS`.
- match only supported customs points.

### SC-B03: Egypt broker with documents but no public status endpoint

**Expected**

- Manual verification workflow.
- distinguish official documents from current authority-status confirmation.
- do not display fully verified until the approved process completes.

### SC-B04: Sponsored broker with weak operational match

**Expected**

- Sponsorship may create labeled visibility.
- operational match rank remains based on coverage, cargo, customs point, verification, and availability.
- sponsored provider must not be labeled best.

### SC-B05: User refuses data-sharing consent

**Expected**

- Provider discovery may remain available.
- no lead or case data transmitted.

## 9. Account and Commercial Scenarios

### SC-A01: Anonymous free review

**Expected**

- Complete free result without Google sign-in.
- critical warnings visible.
- session data handled under the approved anonymous retention policy.

### SC-A02: User saves after free result

**Expected**

- Google sign-in requested.
- minimum identity scope only.
- anonymous case associated securely with the authenticated account.

### SC-A03: User purchases paid report

**Expected**

- Authentication and payment handled separately.
- report linked to case, rule version, source version, and payment status.
- no pricing or gateway assumption before approval.

## 10. Cross-Cutting Failure Scenarios

### SC-X01: Contradictory user answers

**Expected**

- contradiction displayed.
- confidence reduced.
- definitive recommendation blocked where material.

### SC-X02: Rule expired

**Expected**

- `STALE_REVIEW_REQUIRED`.
- no definitive output from expired rule.

### SC-X03: Unsupported country

**Expected**

- General calculation may remain available.
- country compliance result marked unsupported.
- no rules borrowed from a neighboring country.

### SC-X04: Attempt to facilitate illegal or unsafe movement

**Expected**

- Refuse the unsafe or evasive assistance.
- preserve lawful compliance guidance and official confirmation routes where appropriate.

## 11. Implementation Use

Each scenario will later be converted into:

- Structured input fixture.
- expected output fixture.
- unit tests for formulas.
- rule-engine tests.
- integration tests.
- bilingual content tests.
- stale-source and uncertainty tests.

No module is production-ready until its P0/P1 scenarios pass.
