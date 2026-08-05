# INCO Country Compliance Pack Schema

**Version:** 0.1  
**Date:** 2026-08-05  
**Status:** Approved working schema under WP-02

## 1. Purpose

A Country Compliance Pack organizes current official requirements and confirmation routes for a transaction involving one launch country.

Initial countries:

- United Arab Emirates.
- Saudi Arabia.
- Egypt.
- Oman.

A country pack is not a legal summary and must not be a flat list of generic requirements. It is a versioned set of knowledge objects activated by transaction context.

## 2. Country Pack Dimensions

Every record must specify the relevant dimensions:

```text
Country
× National / Local Jurisdiction
× Origin / Destination / Transit / Domestic Role
× Transport Mode
× Cargo Category
× Vehicle or Equipment Type
× Port / Airport / Border / Free Zone / Route
× Authority
× Effective Date
```

Unknown dimensions must remain explicit. A national source must not automatically be applied as a complete local rule when local administration controls the process.

## 3. Pack Structure

Each country pack contains:

1. Country identity and scope.
2. authority registry.
3. customs and trade portals.
4. cargo and dangerous-goods confirmation routes.
5. mode-specific transport requirements.
6. road, vehicle, route, and abnormal-load indicators.
7. postal and courier sources.
8. customs-broker verification routes.
9. permit and approval registry.
10. operational notices.
11. executable rules.
12. unresolved research gaps.
13. review log.

## 4. Country Pack Metadata

```yaml
country_pack_id: string
country_code: string
country_name_en: string
country_name_ar: string
version: string
status: draft | active | review_required | suspended | retired
owner: string
created_at: date
last_reviewed_at: date
next_review_at: date
supported_languages:
  - en
  - ar
source_ids: string[]
rule_ids: string[]
known_gaps: string[]
```

## 5. Authority Object

```yaml
authority_id: string
country_code: string
name_en: string
name_ar: string | null
level: national | emirate | province | governorate | city | port | airport | customs_point
role:
  - customs
  - road_transport
  - traffic
  - dangerous_goods
  - environment
  - civil_aviation
  - maritime
  - postal
  - port
  - airport
  - licensing
jurisdiction: string[]
official_url: string
contact_route: string | null
verification_status: string
last_verified: date
next_review: date
notes: string
```

## 6. Country Requirement Object

```yaml
requirement_id: string
country_pack_id: string
title_en: string
title_ar: string | null
transaction_role:
  - origin
  - destination
  - transit
  - domestic
transport_modes: string[]
cargo_categories: string[]
locations: string[]
trigger_expression: string
requirement_type:
  - information
  - document
  - permit
  - license
  - declaration
  - inspection
  - approval
  - route_confirmation
  - carrier_confirmation
  - specialist_confirmation
  - prohibition
  - restriction
outcome_status: string
severity: critical | high | medium | low | information
required_actions: string[]
required_evidence: string[]
authority_ids: string[]
source_ids: string[]
effective_from: date | null
effective_to: date | null
last_verified: date
next_review: date
verification_status: string
public_wording_key: string
internal_notes: string
```

## 7. Permit Object

```yaml
permit_id: string
country_code: string
name_en: string
name_ar: string | null
issuing_authority_id: string
applies_to:
  transport_modes: string[]
  cargo_categories: string[]
  vehicle_categories: string[]
  jurisdictions: string[]
trigger_fields: string[]
trigger_expression: string | null
required_documents: string[]
fees:
  amount: number | null
  currency: string | null
  basis: string | null
validity: string | null
processing_time: string | null
application_url: string
source_ids: string[]
effective_from: date | null
last_verified: date
next_review: date
verification_status: string
confirmation_required: boolean
notes: string
```

Published fees and processing times must be effective-dated. Unknown or variable values must not be estimated as official.

## 8. Road and Abnormal-Load Object

```yaml
road_rule_id: string
country_code: string
local_jurisdiction: string
vehicle_category: string[]
load_category: string[]
thresholds:
  gross_weight_kg: number | null
  axle_weight_kg: number | null
  length_mm: number | null
  width_mm: number | null
  height_mm: number | null
  overhang_mm: number | null
threshold_logic: any | all | authority_assessment
road_or_route_scope: string[]
time_windows: string[]
escort_requirement: string | null
route_study_required: boolean | null
permit_ids: string[]
source_ids: string[]
effective_from: date | null
effective_to: date | null
last_verified: date
next_review: date
verification_status: string
notes: string
```

If a threshold is not available from a verified official source, the rule must not infer one. The result must request authority or specialist confirmation.

## 9. Customs-Broker Verification Object

```yaml
broker_verification_route_id: string
country_code: string
local_jurisdiction: string | null
licensing_authority_id: string
regulated_provider_type: string
required_license_fields: string[]
public_verification_url: string | null
manual_verification_process: string | null
license_scope_fields:
  - customs_points
  - transaction_types
  - activities
  - representatives
expiry_check_required: boolean
source_ids: string[]
last_verified: date
next_review: date
verification_status: string
notes: string
```

## 10. Postal and Courier Rule Object

```yaml
postal_rule_id: string
country_code: string
provider_id: string
service_id: string | null
origin_scope: string[]
destination_scope: string[]
cargo_scope: string[]
rule_type:
  - prohibited
  - restricted
  - conditional_acceptance
  - dimensions
  - weight
  - packaging
  - dangerous_goods
  - documentation
rule_value: string
source_ids: string[]
effective_from: date | null
effective_to: date | null
last_verified: date
next_review: date
verification_status: string
carrier_confirmation_required: boolean
```

## 11. Operational Notice Object

```yaml
notice_id: string
country_code: string
publisher_id: string
notice_type: route | road_time | port | airport | customs | carrier | emergency | service_suspension
locations: string[]
transport_modes: string[]
cargo_scope: string[]
summary: string
effective_from: datetime | null
effective_to: datetime | null
source_id: string
last_checked: datetime
verification_status: string
```

Operational notices must never be stored as permanent rules without review.

## 12. User-Facing Output Structure

A country result should show:

- Applicable country role: origin, destination, transit, or domestic.
- applicable authority or local jurisdiction.
- verified requirements.
- conditional requirements.
- missing information.
- permits or approvals that may be required.
- carrier or authority confirmation required.
- current official source link.
- source last verified date.
- consequence of not confirming.
- recommended next action.

## 13. Uncertainty Rules

Use one of:

- `VERIFIED_CURRENT`
- `VERIFIED_WITH_LIMITATIONS`
- `LOCAL_JURISDICTION_REQUIRED`
- `ROUTE_CONFIRMATION_REQUIRED`
- `AUTHORITY_CONFIRMATION_REQUIRED`
- `CARRIER_CONFIRMATION_REQUIRED`
- `SPECIALIST_CONFIRMATION_REQUIRED`
- `SOURCE_UNAVAILABLE`
- `STALE_REVIEW_REQUIRED`
- `UNSUPPORTED_SCENARIO`

No requirement may be presented as current when the source review date has expired.

## 14. Country Pack Launch Gate

A country pack may be activated in production only when:

- Core authorities and official portals are identified.
- the supported transaction roles and modes are explicit.
- minimum dangerous-goods confirmation routes are documented.
- road and abnormal-load gaps are visible.
- customs-broker verification route is defined or marked unavailable.
- volatile rules have review dates.
- representative test scenarios pass.
- public wording has been reviewed for unsupported certainty.

## 15. Initial Seed Order

1. UAE national and Dubai seed pack.
2. Saudi Arabia national seed pack.
3. Oman national seed pack.
4. Egypt national seed pack, with road/bridge gaps explicitly blocked until authoritative sources are verified.
