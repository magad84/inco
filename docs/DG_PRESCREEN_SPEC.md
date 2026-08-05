# INCO Dangerous-Goods and Special-Cargo Pre-Screen Specification

**Version:** 0.1  
**Date:** 2026-08-05  
**Status:** Working deterministic specification under WP-02

## 1. Purpose

The pre-screen helps users identify when cargo may require dangerous-goods data, special handling, carrier acceptance, government approval, or competent specialist review before a shipment is planned or booked.

It is an information and evidence triage workflow. It is not a legal classification tool and must not certify cargo as non-dangerous, accepted, permitted, correctly packed, or correctly declared.

## 2. Supported Transport Context

The workflow may be used for:

- Ocean freight.
- air cargo.
- express courier.
- postal services.
- road freight.
- multimodal movement.

The result must be mode-specific. A conclusion for one mode must not automatically be reused for another mode.

## 3. Approved Status Model

### `NO_INDICATOR_FOUND`

No dangerous-goods or special-cargo indicator was detected from the supplied answers.

Required wording:

- This is not a certification that the cargo is non-dangerous.
- The result depends on the accuracy and completeness of the supplied product and packaging information.
- Carrier and destination restrictions may still apply.

### `POSSIBLE_DANGEROUS_GOODS`

One or more product, component, use, or packaging indicators suggest that dangerous-goods rules may apply.

### `DANGEROUS_GOODS_DATA_REQUIRED`

The user must provide technical transport data before the workflow can continue reliably.

Possible evidence:

- Current safety data sheet.
- UN number.
- proper shipping name.
- class or division.
- packing group.
- flash point.
- battery chemistry and watt-hour rating.
- package and quantity details.

### `SPECIAL_CARGO_DATA_REQUIRED`

Cargo may not be dangerous goods but requires additional information because it is fragile, high-value, live, perishable, temperature-controlled, magnetic, biological, oversized, overweight, or otherwise operationally special.

### `CARRIER_ACCEPTANCE_REQUIRED`

The selected provider, service, station, route, aircraft, vessel, or postal product must confirm acceptance.

### `AUTHORITY_CONFIRMATION_REQUIRED`

A competent government, customs, transport, environment, civil aviation, maritime, postal, or local authority must confirm an approval, permit, restriction, or national variation.

### `SPECIALIST_CONFIRMATION_REQUIRED`

A qualified dangerous-goods, chemical, transport, packing, or safety specialist must review the case.

### `INSUFFICIENT_INFORMATION`

Critical product, composition, packaging, quantity, or route information is missing or contradictory.

Multiple statuses may apply to one case.

## 4. Minimum Input Groups

### 4.1 Product Identity

- Commercial product name.
- manufacturer or supplier, optional.
- technical description.
- intended use.
- composition or active ingredients where relevant.
- physical state: solid, liquid, gas, aerosol, powder, paste, gel, article, or unknown.

The commercial name alone is never sufficient for a final determination.

### 4.2 Hazard Indicators

Ask whether the cargo contains or is associated with:

- Lithium or other batteries.
- fuel or fuel residue.
- flammable liquid or solid.
- compressed, liquefied, or dissolved gas.
- aerosol.
- paint, ink, adhesive, resin, solvent, cleaner, perfume, cosmetic, or alcohol.
- oxidizer or organic peroxide.
- toxic or infectious substance.
- corrosive substance.
- pesticide, fertilizer, or agricultural chemical.
- magnetized material.
- radioactive material.
- dry ice or another refrigerant.
- biological material.
- engine, machinery, vehicle, or equipment containing battery, fuel, oil, or gas.
- medical or pharmaceutical material requiring special control.
- unknown chemical composition.

A `yes`, `unknown`, or contradictory answer may trigger additional questions.

### 4.3 Existing Technical Data

- Safety data sheet available?
- revision date.
- transport information section completed?
- UN number known?
- proper shipping name known?
- class or division known?
- subsidiary risk known?
- packing group known?
- marine pollutant or environmental hazard indicated?
- flash point known?
- emergency contact available?

The platform must not extract or infer missing regulated data without a separately approved document-processing workflow and verification controls.

### 4.4 Batteries

When batteries are present, request:

- Chemistry.
- battery alone, packed with equipment, or contained in equipment.
- rechargeable or non-rechargeable.
- watt-hour rating or lithium content where applicable.
- number of cells and batteries.
- state of charge where relevant.
- damaged, defective, recalled, prototype, or waste status.
- test summary or other required evidence availability.
- packaging configuration.

Damaged, defective, recalled, waste, prototype, or unknown-status batteries must trigger specialist and carrier confirmation.

### 4.5 Package and Quantity

- Inner packaging type.
- outer packaging type.
- quantity per inner package.
- quantity per outer package.
- package count.
- net quantity.
- gross weight.
- package dimensions.
- closure and leak-protection details where relevant.
- limited, excepted, small-quantity, or other exception claimed by user.

A claimed exception remains unverified until the applicable rule, quantities, packaging, and route are confirmed.

### 4.6 Shipment Context

- Origin.
- destination.
- transit points.
- transport mode.
- carrier and service if selected.
- passenger or cargo aircraft context where applicable and known.
- sea container, less-than-container load, road vehicle, postal, or courier context.
- planned shipment date.

## 5. Non-DG Special-Cargo Indicators

The same pre-screen may identify operational categories such as:

- Temperature controlled.
- perishable.
- live animal or plant.
- fragile.
- high value.
- theft sensitive.
- oversized.
- overweight.
- indivisible load.
- moisture sensitive.
- odor producing.
- food-grade segregation required.
- pharmaceutical or healthcare controlled.
- personal effects.
- waste or used goods.

Each category activates its own evidence and carrier/country checks. It must not be merged into dangerous-goods status.

## 6. Deterministic Trigger Examples

### Unknown chemical composition

```yaml
trigger:
  product_category: chemical_or_mixture
  composition_known: false
outcome:
  - INSUFFICIENT_INFORMATION
  - DANGEROUS_GOODS_DATA_REQUIRED
required_actions:
  - Obtain current technical product information and safety data.
```

### Lithium battery indicated

```yaml
trigger:
  battery_present: true
outcome:
  - POSSIBLE_DANGEROUS_GOODS
required_questions:
  - chemistry
  - packing_configuration
  - watt_hour_or_lithium_content
  - damaged_or_defective_status
  - package_quantity
```

### Damaged battery

```yaml
trigger:
  battery_present: true
  damaged_defective_recalled_or_waste: true
outcome:
  - SPECIALIST_CONFIRMATION_REQUIRED
  - CARRIER_ACCEPTANCE_REQUIRED
severity: critical
```

### Perfume or aerosol

```yaml
trigger:
  product_indicator:
    - perfume
    - aerosol
outcome:
  - POSSIBLE_DANGEROUS_GOODS
  - DANGEROUS_GOODS_DATA_REQUIRED
required_evidence:
  - safety_data_or_transport_classification
```

### No hazard indicator but incomplete identity

```yaml
trigger:
  hazard_indicators: none_declared
  technical_description_complete: false
outcome:
  - INSUFFICIENT_INFORMATION
```

### Known regulated data

```yaml
trigger:
  un_number_known: true
  proper_shipping_name_known: true
  class_known: true
outcome:
  - CARRIER_ACCEPTANCE_REQUIRED
  - COUNTRY_AND_MODE_RULE_CHECK_REQUIRED
```

Known data does not equal automatic acceptance.

## 7. Evidence Model

Evidence status:

- `NOT_PROVIDED`
- `USER_DECLARED`
- `DOCUMENT_PROVIDED_UNREVIEWED`
- `DOCUMENT_REVIEW_REQUIRED`
- `SPECIALIST_VERIFIED`
- `CARRIER_CONFIRMED`
- `AUTHORITY_CONFIRMED`
- `EXPIRED_OR_STALE`

User declarations must not be displayed as verified technical facts.

## 8. Output Structure

### A. Pre-Screen Summary

- Status or statuses.
- confidence based on completeness.
- transport mode.
- critical missing information.

### B. Indicators Found

For each indicator:

- User input that triggered it.
- why it matters.
- applicable mode.
- required next question or evidence.

### C. Required Evidence

- Evidence item.
- why required.
- who should provide or verify it.
- whether the case is blocked without it.

### D. Carrier and Country Checks

- Provider or authority.
- confirmation reason.
- official source where available.
- last verified date.
- effect of not confirming.

### E. Next Actions

Prioritized actions such as:

1. Obtain current safety data or transport classification.
2. Confirm package and quantity details.
3. Consult a competent specialist.
4. Submit data to the selected carrier.
5. Check origin, transit, and destination requirements.
6. Do not book or tender cargo until the critical item is resolved.

## 9. Blocking Logic

A workflow must block a definitive transport recommendation when:

- Product identity is materially incomplete.
- composition is unknown for a chemical or mixture.
- battery condition is unknown or abnormal.
- regulated data conflicts.
- quantity or packaging is missing where it changes the applicable rule.
- transport mode is unknown.
- an expired document is the only evidence.
- a required carrier or authority confirmation is absent.

The platform may still provide a useful missing-information and next-action report.

## 10. Source and Edition Control

Each mode-specific rule records:

- International framework source.
- edition or amendment.
- effective date.
- national variation source.
- carrier/service source.
- last verified date.
- next review date.
- usage rights.

Detailed protected tables and licensed publications must not be copied into this public repository. The system should store original rule logic only where legally permitted and maintain links or internal references under the approved license.

## 11. Free and Paid Boundary

### Free

- Indicator questionnaire.
- preliminary status.
- critical missing information.
- evidence checklist.
- carrier/authority confirmation flags.
- limited next actions.

### Paid or advanced later

- Saved case.
- multi-mode comparison.
- detailed country and carrier compliance brief.
- controlled document review.
- professional report.
- expert or verified provider referral.

Safety-critical warnings must remain visible in the free result.

## 12. Acceptance Tests

Minimum scenarios:

1. Ordinary finished product with complete non-hazard description.
2. Unknown chemical mixture.
3. Perfume.
4. Aerosol can.
5. Lithium battery contained in equipment.
6. Batteries shipped alone.
7. Damaged or recalled battery.
8. Machine containing fuel residue.
9. Dry ice used as refrigerant.
10. Magnetized equipment.
11. Pharmaceutical cold-chain cargo.
12. Oversized machinery with no DG indicator.
13. Conflicting safety data and user answers.
14. Known UN number but no carrier selected.
15. Postal shipment with a restricted-product indicator.

Every test must verify that INCO returns the correct uncertainty and confirmation state rather than unsupported acceptance.

## 13. Implementation Gate

The module may enter implementation after:

- Question-to-rule mapping is complete.
- initial mode-specific source records are verified.
- edition control is defined.
- public wording is reviewed.
- representative tests pass.
- no protected source content is embedded improperly.
