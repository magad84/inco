# INCO Cargo Calculators and Load Planner Specification

**Version:** 0.1  
**Date:** 2026-08-05  
**Status:** Working functional specification  
**Work Package:** WP-02

## 1. Objective

Define the calculation services that INCO can implement without generative AI and separate free arithmetic tools from paid optimization and professional reports.

## 2. Product Boundary

### Free calculators

- CBM per package type.
- total CBM.
- total gross weight.
- volumetric weight using a selected or carrier-configured divisor.
- chargeable weight as the greater of actual and volumetric weight where that carrier/service rule applies.
- preliminary container-capacity comparison.
- preliminary container count by volume and payload.

### Paid tools

- Multi-SKU container-loading optimization.
- orientation and stackability constraints.
- weight-distribution indicators.
- heavy and fragile item controls.
- loading and unloading sequence.
- palletized and non-palletized scenarios.
- multiple container comparison.
- unallocated-item report.
- professional PDF and saved case.

The paid tool is not sold as a safety certificate, verified stowage plan, dangerous-goods segregation approval, carrier acceptance, or road permit.

## 3. Base Units

Internal calculations should use SI units:

- Length: millimeters.
- Weight: kilograms.
- Volume: cubic meters.

The UI may accept:

- mm, cm, m.
- inch, foot.
- kg, metric tonne.
- lb.

All values must be normalized before calculation. The result must display the source unit and normalized value.

## 4. CBM Calculation

For dimensions in meters:

```text
CBM per unit = length_m × width_m × height_m
Total CBM = CBM per unit × quantity
```

For dimensions in centimeters:

```text
CBM per unit = length_cm × width_cm × height_cm ÷ 1,000,000
```

For dimensions in millimeters:

```text
CBM per unit = length_mm × width_mm × height_mm ÷ 1,000,000,000
```

Validation:

- Dimensions must be greater than zero.
- Quantity must be a positive integer.
- Outer packaged dimensions are required, not product-only dimensions.
- Bulges, handles, skids, and protrusions must be included where relevant.
- Multiple package types are calculated separately and summed.

## 5. Gross Weight

```text
Gross weight per package = net product weight + packaging weight
Total gross weight = gross weight per package × quantity
```

The UI must not infer gross weight from net weight without explicit packaging data or an approved assumption clearly marked as an estimate.

## 6. Volumetric Weight

Generic formula:

```text
Volumetric weight_kg = length_cm × width_cm × height_cm ÷ divisor_cm3_per_kg
```

The divisor is not universal. It must be selected by:

1. Carrier.
2. service.
3. market or route.
4. effective date.

Example source-backed configurations for research and tests only:

- DHL Express commonly publishes `5000 cm3/kg` for its express calculation.
- FedEx services may use different dimensional rules by market and service.
- A FedEx UAE regional freight service publishes `4000 cm3/kg`.

The production calculator must show:

- Provider.
- service.
- divisor.
- effective date.
- source last verified date.
- warning when a generic divisor is used.

## 7. Chargeable Weight

Where the selected service uses higher-of billing:

```text
Chargeable weight = max(actual gross weight, volumetric weight)
```

For multi-piece shipments, carrier rules may calculate dimensional weight per package rather than on the consolidated external dimensions. The calculator must follow the selected service rule.

The result is an estimate unless confirmed by the carrier after reweighing and remeasurement.

## 8. Container Reference Data

Initial reference equipment types:

- 20-foot dry.
- 40-foot dry.
- 40-foot high cube.
- 45-foot high cube, later.
- 20-foot open top, later.
- 40-foot open top, later.
- flat rack, later.
- reefer, later.

Each equipment profile stores:

- Provider or reference fleet.
- ISO type where available.
- internal length, width, and height.
- door width and height.
- nominal volume.
- tare.
- maximum gross weight.
- maximum payload.
- last verified date.
- warning that actual equipment may vary.

The final load planner must allow manual entry of actual unit dimensions and certified plate limits.

## 9. Preliminary Container Estimate

The free estimate compares both volume and payload:

```text
Containers by volume = ceil(total_cargo_cbm / usable_reference_cbm)
Containers by payload = ceil(total_cargo_weight / allowed_payload)
Preliminary container count = max(containers_by_volume, containers_by_payload)
```

`usable_reference_cbm` must not equal nominal volume by default. A configurable utilization factor may be used only as an estimate and must display its assumption.

The free estimate must warn that it does not account for:

- carton orientation.
- door opening.
- non-rectangular items.
- pallets.
- dunnage.
- stackability.
- fragile or heavy items.
- load sequence.
- weight distribution.
- securing.
- segregation.
- local road limits.

## 10. Paid Multi-SKU Load Planner

### 10.1 Required item fields

- Item type ID.
- Description.
- packaged length, width, and height.
- quantity.
- gross weight.
- allowed rotations.
- stackable yes/no.
- maximum supported load.
- heavy flag.
- fragile flag.
- floor-only flag.
- keep-upright flag.
- no-top-load flag.
- pallet ID if palletized.
- loading priority.
- unloading priority.
- incompatibility group.

### 10.2 Required container fields

- Container type.
- actual internal dimensions.
- actual door opening.
- tare.
- maximum gross weight.
- payload.
- floor loading limit if available.
- structural constraints where modeled.
- safety clearance.
- reserved space.

### 10.3 Optimization objectives

The solver may optimize one or more weighted objectives:

1. Maximize loaded item count.
2. Maximize loaded volume.
3. Minimize number of containers.
4. Minimize unallocated priority items.
5. Improve left-right weight balance.
6. Improve fore-aft weight balance.
7. Respect loading/unloading sequence.
8. Minimize unsupported surfaces.

The UI must explain the selected objective. A high volume utilization score must not override safety constraints.

### 10.4 Hard constraints

- No geometric overlap.
- Stay within internal dimensions.
- Pass through door opening where required.
- Respect permitted orientations.
- Respect payload.
- Respect quantity.
- Respect floor-only and no-top-load rules.
- Respect stackability.
- Respect maximum supported load where modeled.
- Respect mandatory separation rules where available.

### 10.5 Soft constraints and warnings

- Weight imbalance.
- low support area.
- excessive stack height.
- fragile item exposure.
- blocked unloading sequence.
- low utilization.
- high void ratio.
- concentrated weight.
- unresolved cargo-securing plan.

### 10.6 Outputs

- Container selection.
- coordinate and orientation for each loaded item.
- loaded quantity by item type.
- unallocated quantity and reason.
- gross cargo weight.
- utilization by volume.
- utilization by payload.
- left-right and fore-aft weight indicators.
- estimated center of mass.
- loading order.
- unloading order.
- 2D layer views.
- interactive 3D view.
- warnings.
- assumption and source panel.
- PDF plan.

## 11. Safety and Professional Boundaries

The load planner must display that:

- Actual container dimensions and payload govern.
- Carrier and terminal acceptance remain required.
- Cargo securing and lashing require competent operational review.
- Dangerous-goods segregation and declaration are outside geometric optimization unless an approved rules module explicitly covers them.
- Road axle, bridge, tunnel, and permit requirements are separate checks.
- A proposed plan must be verified at loading.

## 12. Data and Audit

Each saved calculation records:

- Calculator version.
- rule version.
- source-data version.
- units.
- user inputs.
- assumptions.
- result.
- warnings.
- generated timestamp.

Paid reports must be reproducible from the saved input and versioned rule set.

## 13. Acceptance Tests

Minimum test categories:

1. One carton type fitting exactly.
2. One carton type exceeding door height.
3. Volume fits but payload fails.
4. Payload fits but dimensions prevent packing.
5. Multiple SKU with rotation prohibited.
6. Fragile items with no top load.
7. Heavy items restricted to floor.
8. Mixed pallets and cartons.
9. Uneven weights requiring balance warning.
10. Items left unallocated with explicit reason.
11. Carrier divisor changes by service.
12. Invalid or missing unit conversions.

## 14. Commercial Direction

- Basic CBM and volumetric calculations remain free.
- A user may run the free calculator without registration.
- Saving a case may require Google sign-in.
- Multi-SKU optimization, visualization, PDF, and report history belong to a paid transaction pack or credit model.
- Pricing amounts and payment provider remain undecided.
