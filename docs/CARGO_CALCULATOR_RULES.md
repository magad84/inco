# INCO Cargo Calculator Deterministic Rules

**Version:** 0.1  
**Date:** 2026-08-05  
**Status:** Implementation-ready mathematical rules; carrier configurations remain versioned

## 1. Scope

This document governs:

- Unit normalization.
- CBM.
- gross weight.
- volumetric weight.
- chargeable-weight estimate.
- precision and rounding.
- validation and stale-rule behavior.

It does not govern freight rates, fuel surcharges, dimensional oversize fees, customs charges, taxes, or final carrier billing.

## 2. Internal Units

Use:

- Millimeters for stored dimensions.
- kilograms for stored weight.
- cubic meters for volume.
- cubic centimeters only as an intermediate for volumetric-weight formulas expressed in `cm3/kg`.

## 3. Exact Conversion Constants

### Dimensions to millimeters

```text
1 mm = 1 mm
1 cm = 10 mm
1 m = 1000 mm
1 in = 25.4 mm
1 ft = 304.8 mm
```

### Weight to kilograms

```text
1 kg = 1 kg
1 metric tonne = 1000 kg
1 lb = 0.45359237 kg
```

Do not use shortened approximations for stored values.

## 4. Decimal Arithmetic

- Use decimal arithmetic suitable for financial and measurement calculations.
- Do not rely on uncontrolled binary floating-point equality.
- Preserve normalized input precision through calculation.
- Compare expected values using approved tolerances in tests.

## 5. CBM

After normalization to millimeters:

```text
cbm_per_package = length_mm × width_mm × height_mm ÷ 1,000,000,000
```

```text
total_cbm_for_package_type = cbm_per_package × quantity
```

```text
total_cbm = sum(total_cbm_for_package_type)
```

Rules:

- Use outer packaged dimensions.
- Do not sort or rotate dimensions for CBM; volume is unchanged.
- Protrusions, skids, handles, and non-rectangular allowances must already be included in the supplied packaged dimensions or handled by a later shape/allowance module.
- Do not apply a packing-utilization discount to CBM.

## 6. Gross Weight

```text
gross_weight_per_package_kg = convert(input_weight, input_unit)
```

```text
total_gross_weight_for_package_type = gross_weight_per_package_kg × quantity
```

```text
total_gross_weight_kg = sum(total_gross_weight_for_package_type)
```

Rules:

- Gross weight includes product and packaging.
- If the user has only net weight, the calculator must request packaging weight or label the result as incomplete; it must not invent packaging weight.

## 7. Volumetric Weight

For a carrier/service divisor expressed in cubic centimeters per kilogram:

```text
package_volume_cm3 = length_mm × width_mm × height_mm ÷ 1000
```

```text
volumetric_weight_per_package_kg = package_volume_cm3 ÷ divisor_cm3_per_kg
```

### Per-piece basis

```text
total_volumetric_weight_kg = sum(
  volumetric_weight_per_package_kg after any carrier-approved piece rounding
  × quantity
)
```

### Consolidated basis

Use only when the verified carrier/service rule explicitly permits calculation on a consolidated external shipment volume.

The free calculator must default to package-level calculation when package details are supplied and no verified consolidated-basis rule exists.

## 8. Chargeable Weight

When the selected rule uses higher-of billing:

### Per piece

```text
chargeable_per_package = max(
  gross_weight_per_package_kg,
  volumetric_weight_per_package_kg
)
```

Apply carrier-approved rounding or minimum only at the configured stage.

```text
total_chargeable_weight_kg = sum(chargeable_per_package × quantity)
```

### Consolidated

```text
total_chargeable_weight_kg = max(
  total_gross_weight_kg,
  total_volumetric_weight_kg
)
```

Use only when supported by the provider/service rule.

## 9. Rounding Policy

### Internal calculation

- Do not round dimensions after normalization.
- Do not round CBM per package before multiplication unless a verified provider rule explicitly requires it.
- Do not round volumetric weight before applying the provider/service rule.
- Preserve full working precision in the audit record.

### Carrier/service rounding

The carrier rule may define:

- Rounding increment.
- rounding direction.
- minimum chargeable weight.
- per-piece or shipment-level stage.

Possible directions:

- `UP`
- `NEAREST`
- `DOWN`, allowed only if a verified rule explicitly uses it

No global carrier rounding rule is permitted.

### Display rounding

Recommended default presentation, subject to UX approval:

- Dimensions: up to 3 decimal places in the user's unit.
- CBM per package: up to 9 decimal places where needed.
- Total CBM: up to 6 decimal places.
- Weight: up to 3 decimal places.

Display rounding must not change the stored or audited result.

## 10. Stale and User-Configured Rules

### Verified current

A current provider/service rule may produce a provider-specific result.

### Verified with limitations

The result must show the limitation and confirmation requirement.

### User configured, unverified

The calculator may compute the arithmetic result but must label it as based on a user-entered factor and not a verified carrier rule.

### Stale review required

The system must not label the result as a current provider-specific commercial calculation.

Allowed behavior:

- Show CBM and gross weight.
- optionally show a mathematical scenario based on the stale factor only if clearly labeled as non-current and not used as a definitive quote.

Preferred MVP behavior:

- Block provider-specific chargeable output and request a current rule.

## 11. Validation Rules

Reject:

- Missing unit.
- zero or negative dimension.
- zero or negative gross weight.
- zero, negative, or non-integer quantity.
- unsupported unit.
- zero or negative divisor.
- unknown rounding rule.
- duplicate package type IDs within one request unless explicit merge behavior is implemented.
- stale provider rule used as current.

Warn:

- Extremely large dimensions or quantities requiring confirmation.
- suspicious unit/measurement combinations.
- user-entered unverified divisor.
- package dimensions that may trigger oversize handling, if a current provider rule is available.

## 12. Result Audit

Store:

- Original input.
- normalized dimensions and weights.
- calculator version.
- formula version.
- carrier rule and source ID, if any.
- carrier rule verification status and date.
- unrounded intermediate values.
- rounding steps.
- final stored values.
- display values.
- assumptions and warnings.
- generation timestamp.

## 13. Error Codes

- `VALIDATION_REQUIRED_FIELD`
- `VALIDATION_POSITIVE_NUMBER_REQUIRED`
- `VALIDATION_POSITIVE_INTEGER_REQUIRED`
- `VALIDATION_UNSUPPORTED_UNIT`
- `VALIDATION_DUPLICATE_PACKAGE_TYPE_ID`
- `VALIDATION_INVALID_DIVISOR`
- `VALIDATION_INVALID_ROUNDING_RULE`
- `STALE_CARRIER_RULE_BLOCKED`
- `USER_CONFIGURED_RULE_WARNING`
- `CALCULATION_RANGE_CONFIRMATION_REQUIRED`

## 14. Acceptance Gate

The calculator is ready for coding when:

- Input and output schemas validate.
- fixture arithmetic is independently checked.
- decimal and rounding strategy is selected in implementation.
- all error fixtures are covered.
- source/version audit is preserved.
- no carrier rule is embedded directly in formula code.
