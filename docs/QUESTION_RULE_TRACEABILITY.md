# INCO Question-to-Rule Traceability Matrix

**Version:** 0.1  
**Date:** 2026-08-05  
**Status:** Working traceability specification under WP-01 and WP-02

## 1. Purpose

Every production question must affect an approved calculation, rule, validation, output, or workflow decision.

Questions that do not change a result must be removed or clearly marked as optional context.

## 2. Traceability Fields

Each question record contains:

- Question ID.
- module.
- user-facing purpose.
- data type.
- required or conditional state.
- visibility trigger.
- validation.
- rule or formula IDs affected.
- output fields affected.
- uncertainty state.
- free or paid boundary.
- retention class.

## 3. Universal Case Questions

| Question ID | Field | Required | Trigger | Affects | Output | Commercial | Retention |
|---|---|---:|---|---|---|---|---|
| Q-U01 | User perspective | Conditional | Trade-term or decision report | Perspective ordering only | Risk/advantage ordering | Free | Case |
| Q-U02 | Origin country | Yes | All shipment routes | Country-pack selection, carrier route | Transaction profile, requirements | Free | Case |
| Q-U03 | Origin location | Conditional | Country, route, carrier, or road analysis | Local jurisdiction and route | Applicable authority and route | Free | Case |
| Q-U04 | Destination country | Yes | All shipment routes | Country-pack selection, carrier route | Transaction profile, requirements | Free | Case |
| Q-U05 | Destination location | Conditional | Country, route, carrier, or road analysis | Local jurisdiction and route | Applicable authority and route | Free | Case |
| Q-U06 | Transit country or hub | Conditional | Multimodal or known transit | Transit country and carrier checks | Additional confirmation | Free | Case |
| Q-U07 | Main transport mode | Yes | All shipment routes | Mode-specific rules | Applicable modules and sources | Free | Case |
| Q-U08 | Additional transport modes | Conditional | Multimodal selected | Mode-specific checks | Multimodal warnings | Free | Case |
| Q-U09 | Cargo commercial name | Yes | Cargo-related routes | Pre-screen only | Cargo profile | Free | Case |
| Q-U10 | Technical description | Conditional | Cargo pre-screen | DG and special-cargo triggers | Completeness and evidence needs | Free | Sensitive case data |
| Q-U11 | Required output | Yes | Entry | Route orchestration | Free or paid workflow | Free | Session |

## 4. Trade-Term Review Questions

| Question ID | Field | Required | Trigger | Rule group | Output | Commercial |
|---|---|---:|---|---|---|---|
| Q-T01 | Selected trade term | Yes | Trade-term review | TERM-* | Suitability and responsibility model | Free |
| Q-T02 | Exact named place or point | Yes or explicit unknown | Trade-term review | TERM-NAMED-PLACE-* | Named-place clarity | Free |
| Q-T03 | Intended physical delivery point | Yes | Trade-term review | TERM-DELIVERY-* | Delivery alignment | Free |
| Q-T04 | Expected risk-transfer point | Conditional | User has an expectation | TERM-RISK-* | Risk expectation conflict | Free |
| Q-T05 | Party selecting main carrier | Yes | Trade-term review | TERM-CONTROL-* | Freight-control alignment | Free |
| Q-T06 | Party paying main carriage | Yes | Trade-term review | TERM-COST-* | Cost allocation alignment | Free |
| Q-T07 | Party arranging insurance | Conditional | Insurance relevant | TERM-INSURANCE-* | Insurance alignment | Free |
| Q-T08 | Party handling export clearance | Yes | Cross-border | TERM-CLEARANCE-* | Responsibility alignment | Free |
| Q-T09 | Party handling import clearance | Yes | Cross-border | TERM-CLEARANCE-* | Responsibility alignment | Free |
| Q-T10 | Party loading at origin | Conditional | Term/point requires | TERM-HANDLING-* | Handling responsibility | Paid detail; core conflict free |
| Q-T11 | Party unloading at destination | Conditional | Term/point requires | TERM-HANDLING-* | Handling responsibility | Paid detail; core conflict free |
| Q-T12 | Commercial priorities | Conditional | Comparison requested | TERM-ALTERNATIVE-* | Alternative ranking | One alternative free; full paid |
| Q-T13 | Contract or quotation wording | Optional | Existing document | TERM-CONTRACT-* | Clarification points | Paid report; critical conflict free |

## 5. Cargo and Dangerous-Goods Pre-Screen Questions

| Question ID | Field | Required | Trigger | Rule group | Output | Commercial |
|---|---|---:|---|---|---|---|
| Q-DG01 | Physical state | Conditional | Cargo pre-screen | DG-IDENTITY-* | Completeness and indicators | Free |
| Q-DG02 | Composition known | Conditional | Chemical/mixture/product uncertainty | DG-COMPOSITION-* | Data required status | Free |
| Q-DG03 | Hazard indicator checklist | Yes | Cargo pre-screen | DG-INDICATOR-* | Possible DG/special cargo | Free |
| Q-DG04 | Safety data available | Conditional | Chemical, mixture, battery, fuel, etc. | DG-EVIDENCE-* | Evidence status | Free |
| Q-DG05 | Safety data revision date | Conditional | Safety data available | DG-EVIDENCE-STALE-* | Stale document warning | Free |
| Q-DG06 | UN number | Conditional | Known or suspected DG | DG-TRANSPORT-DATA-* | Carrier/country checks | Free |
| Q-DG07 | Proper shipping name | Conditional | Known DG | DG-TRANSPORT-DATA-* | Completeness | Free |
| Q-DG08 | Class or division | Conditional | Known DG | DG-TRANSPORT-DATA-* | Mode checks | Free |
| Q-DG09 | Packing group | Conditional | Applicable category | DG-TRANSPORT-DATA-* | Mode checks | Free |
| Q-DG10 | Flash point | Conditional | Flammable liquid context | DG-FLASHPOINT-* | Data requirement | Free |
| Q-DG11 | Battery present | Yes/unknown | Cargo pre-screen | DG-BATTERY-* | Battery branch | Free |
| Q-DG12 | Battery chemistry | Conditional | Battery present | DG-BATTERY-* | Evidence and carrier checks | Free |
| Q-DG13 | Battery packing configuration | Conditional | Battery present | DG-BATTERY-* | Mode and carrier checks | Free |
| Q-DG14 | Battery rating/content | Conditional | Battery present | DG-BATTERY-* | Evidence requirement | Free |
| Q-DG15 | Damaged/defective/recalled/waste | Conditional | Battery present | DG-BATTERY-CRITICAL-* | Critical specialist/carrier warning | Free |
| Q-DG16 | Package and quantity details | Conditional | DG or exception claimed | DG-QUANTITY-* | Rule applicability | Free |
| Q-DG17 | Exception claimed | Optional | User declares limited/excepted/etc. | DG-EXCEPTION-* | Unverified exception status | Free |
| Q-DG18 | Carrier and service | Conditional | Acceptance check | CARRIER-DG-* | Carrier confirmation | Free/advanced detail paid |

## 6. Carrier and Postal Questions

| Question ID | Field | Required | Trigger | Rule group | Output | Commercial |
|---|---|---:|---|---|---|---|
| Q-C01 | Provider | Conditional | Carrier-specific calculation/check | CARRIER-* | Provider rule selection | Free |
| Q-C02 | Service | Conditional | Provider has multiple services | CARRIER-SERVICE-* | Formula/limit selection | Free |
| Q-C03 | Route or market | Conditional | Provider rule varies by market | CARRIER-ROUTE-* | Applicability | Free |
| Q-C04 | Account-specific tariff | Optional | Commercial calculation | CARRIER-CONTRACT-* | User-defined override with evidence status | Paid saved case |
| Q-C05 | Booking status | Optional | Carrier acceptance workflow | CARRIER-ACCEPTANCE-* | Unconfirmed/accepted/rejected | Free status; saved paid |
| Q-C06 | Booking reference | Optional | Booking exists | Audit only | Case record | Paid saved case |

## 7. Cargo Calculator Questions

| Question ID | Field | Required | Trigger | Formula | Output | Commercial |
|---|---|---:|---|---|---|---|
| Q-CAL01 | Package type ID | Yes | Multiple packages | Grouping | Per-type results | Free |
| Q-CAL02 | Outer length | Yes | CBM/weight | CAL-CBM-* | CBM | Free |
| Q-CAL03 | Outer width | Yes | CBM/weight | CAL-CBM-* | CBM | Free |
| Q-CAL04 | Outer height | Yes | CBM/weight | CAL-CBM-* | CBM | Free |
| Q-CAL05 | Dimension unit | Yes | CBM/weight | CAL-UNIT-* | Normalized dimensions | Free |
| Q-CAL06 | Quantity | Yes | CBM/weight | CAL-CBM-* | Total CBM | Free |
| Q-CAL07 | Gross weight per package | Yes | Weight/chargeable | CAL-WEIGHT-* | Total gross weight | Free |
| Q-CAL08 | Weight unit | Yes | Weight/chargeable | CAL-UNIT-* | Normalized weight | Free |
| Q-CAL09 | Volumetric divisor | Conditional | Generic/manual calculation | CAL-VOL-* | Volumetric weight | Free with assumption |
| Q-CAL10 | Carrier/service divisor source | Conditional | Carrier configured | CARRIER-VOL-* | Source-backed volumetric weight | Free |
| Q-CAL11 | Calculation basis per piece/consolidated | Conditional | Carrier rule | CARRIER-BASIS-* | Chargeable weight | Free |

## 8. Preliminary Container Estimate Questions

| Question ID | Field | Required | Trigger | Formula/rule | Output | Commercial |
|---|---|---:|---|---|---|---|
| Q-CE01 | Total package data or CBM | Yes | Container estimate | CAL-CONTAINER-* | Volume requirement | Free |
| Q-CE02 | Total gross weight | Yes | Container estimate | CAL-CONTAINER-* | Payload requirement | Free |
| Q-CE03 | Equipment options | Conditional | User preference | EQUIPMENT-* | Comparison | Free |
| Q-CE04 | Utilization assumption | Conditional | Preliminary estimate | CAL-UTILIZATION-* | Estimated count | Free with warning |
| Q-CE05 | Reefer/out-of-gauge/special equipment | Yes/unknown | Container estimate | EQUIPMENT-SPECIAL-* | Unsupported/advanced route | Free indicator |

## 9. Paid Container Load Planner Questions

| Question ID | Field | Required | Trigger | Constraint | Output | Commercial |
|---|---|---:|---|---|---|---|
| Q-CLP01 | Actual equipment dimensions | Yes or approved reference | Paid planner | CLP-BOUNDARY-* | Usable space | Paid |
| Q-CLP02 | Door opening | Yes | Paid planner | CLP-DOOR-* | Feasibility | Paid |
| Q-CLP03 | Payload and gross limit | Yes | Paid planner | CLP-PAYLOAD-* | Weight feasibility | Paid |
| Q-CLP04 | Allowed rotations | Yes | Per SKU | CLP-ROTATION-* | Placement | Paid |
| Q-CLP05 | Stackable | Yes | Per SKU | CLP-STACK-* | Placement | Paid |
| Q-CLP06 | Maximum supported load | Conditional | Stackable | CLP-TOPLOAD-* | Stack feasibility | Paid |
| Q-CLP07 | Fragile/no-top-load | Yes | Per SKU | CLP-FRAGILE-* | Placement | Paid |
| Q-CLP08 | Heavy/floor-only | Yes | Per SKU | CLP-HEAVY-* | Placement | Paid |
| Q-CLP09 | Pallet/dunnage | Conditional | Used | CLP-PALLET-* | Space and load | Paid |
| Q-CLP10 | Load/unload priority | Optional | Sequenced plan | CLP-SEQUENCE-* | Loading plan | Paid |
| Q-CLP11 | Incompatibility group | Conditional | Mixed/special cargo | CLP-SEPARATION-* | Block/segregation warning | Paid; specialist rule required |
| Q-CLP12 | Optimization objective | Yes | Paid planner | CLP-OBJECTIVE-* | Solver plan | Paid |

## 10. Road and Abnormal-Load Questions

| Question ID | Field | Required | Trigger | Rule group | Output | Commercial |
|---|---|---:|---|---|---|---|
| Q-R01 | Vehicle/trailer type | Yes | Road/abnormal load | ROAD-VEHICLE-* | Applicability | Free indicator |
| Q-R02 | Number of axles | Conditional | Weight/permit check | ROAD-AXLE-* | Permit/data requirement | Free indicator |
| Q-R03 | Vehicle unladen weight | Conditional | Loaded weight check | ROAD-WEIGHT-* | Gross calculation | Free |
| Q-R04 | Cargo weight | Yes | Road/abnormal load | ROAD-WEIGHT-* | Loaded gross | Free |
| Q-R05 | Loaded length/width/height | Yes | Road/abnormal load | ROAD-DIMENSION-* | Permit indicator | Free |
| Q-R06 | Overhang | Conditional | Long load | ROAD-OVERHANG-* | Permit indicator | Free |
| Q-R07 | Indivisible load | Yes/unknown | Exceptional-load route | ROAD-INDIVISIBLE-* | Permit category | Free |
| Q-R08 | Proposed route | Conditional | Route supported | ROAD-ROUTE-* | Route/bridge/tunnel checks | Advanced paid brief where supported |
| Q-R09 | Movement date/time | Conditional | Time restriction | ROAD-TIME-* | Restriction notice | Free |
| Q-R10 | Existing permit/escort | Optional | Movement planned | ROAD-PERMIT-* | Readiness status | Paid saved case |

## 11. Broker Referral Questions

| Question ID | Field | Required | Trigger | Workflow | Output | Commercial |
|---|---|---:|---|---|---|---|
| Q-B01 | Country/customs point | Yes | Broker referral | BROKER-MATCH-* | Eligible providers | Free discovery |
| Q-B02 | Transaction type | Yes | Broker referral | BROKER-MATCH-* | Scope match | Free discovery |
| Q-B03 | Cargo category | Yes | Broker referral | BROKER-EXPERTISE-* | Provider match | Free discovery |
| Q-B04 | DG/special status | Conditional | Special cargo | BROKER-SPECIAL-* | Capability requirement | Free discovery |
| Q-B05 | Required date | Conditional | Lead | BROKER-AVAILABILITY-* | Response request | Marketplace workflow |
| Q-B06 | Language | Optional | Match | BROKER-LANGUAGE-* | Provider ranking | Free discovery |
| Q-B07 | Consent to share fields | Yes | Contact requested | BROKER-CONSENT-* | Lead creation | Required, no payment prerequisite |
| Q-B08 | Selected fields/attachments | Yes | Contact requested | BROKER-DATA-* | Shared data record | Controlled workflow |

## 12. Retention Classes

- `SESSION_ONLY`: anonymous data not saved after the defined session period.
- `CASE`: normal transaction data saved only after account action or explicit save.
- `SENSITIVE_CASE_DATA`: technical descriptions, compositions, documents, or commercial information requiring tighter controls.
- `PROVIDER_VERIFICATION`: regulated provider records and documents.
- `AUDIT`: consent, rule version, result version, purchase, and verification events.

Retention durations remain an owner/legal decision before production.

## 13. Removal Rule

A question must be removed from the production form when:

- It maps to no rule, formula, output, validation, or routing decision.
- The same data can be derived reliably from an existing field.
- It is requested only for marketing without approved consent and purpose.
- Its sensitivity exceeds its current product value.

## 14. Next Work

- Assign final rule IDs.
- define JSON schemas.
- create Arabic and English labels.
- define conditional display expressions.
- create acceptance tests per question group.
- validate the free journey can be completed without unnecessary registration or sensitive data.
