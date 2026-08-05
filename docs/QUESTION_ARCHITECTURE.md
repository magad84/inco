# INCO Question Architecture

**Version:** 0.1  
**Date:** 2026-08-05  
**Status:** Draft derived from WP-02 knowledge architecture

## 1. Principle

INCO must not present one long universal form. Questions are activated by transaction context and module triggers.

The form should collect only the data needed to:

- Produce the requested result.
- Detect missing or contradictory information.
- Determine which knowledge modules apply.
- Identify when authority, carrier, or specialist confirmation is required.

## 2. Entry Routes

The user starts with one task:

1. Review a trade term.
2. Check cargo and transport requirements.
3. Calculate shipment volume and chargeable weight.
4. Estimate container requirements.
5. Plan carton loading in a container.
6. Check road or abnormal-load indicators.
7. Find a verified customs-clearance provider.
8. Build a complete shipment-preparation case.

The complete case route may activate all relevant modules. Simpler routes should not request unrelated data.

## 3. Universal Case Questions

### Q-U01: User perspective

- Seller.
- buyer.
- importer.
- exporter.
- freight/logistics professional.
- procurement professional.
- customs professional.
- neutral reviewer.

Required for trade-term and decision-report routes.

### Q-U02: Origin and destination

- Origin country.
- origin city or location.
- destination country.
- destination city or location.
- transit countries or hubs if known.

Required for country, carrier, postal, route, and broker modules.

### Q-U03: Transport mode

- Ocean.
- air cargo.
- express courier.
- postal.
- road.
- rail.
- multimodal.
- undecided.

Conditionally request main leg, first leg, and final leg.

### Q-U04: Cargo description

- Commercial product name.
- technical description.
- intended use.
- packaged form.

Free text is accepted as user-provided data, not as a verified classification.

### Q-U05: Required output

- Quick free review.
- detailed professional report.
- calculation only.
- load plan.
- provider referral.

## 4. Trade-Term Review Questions

### Transaction and term

- Selected trade term.
- exact named place or point written in the quotation, purchase order, or contract.
- rule edition/date stated in the document, if any.
- intended physical delivery point.
- point at which the parties expect risk to transfer.

### Transport control

- Who selects the main carrier?
- Who books and pays main freight?
- Who arranges insurance?
- Who handles export clearance?
- Who handles import clearance?
- Who loads at origin?
- Who unloads at destination?
- Who pays destination handling or terminal charges according to the commercial expectation?

### Objectives

- Seller wants minimal responsibility.
- buyer wants transport control.
- seller wants freight control.
- buyer wants delivered cost clarity.
- party wants risk retained until destination.
- party lacks clearance capability in the other country.

### Triggers

- If the named place is missing or too broad, activate clarification warning.
- If transport mode and selected term may conflict, activate compatibility review.
- If expected risk transfer conflicts with the selected term, activate critical contradiction.
- If a party is expected to complete foreign-country clearance without capability, activate operational-capability warning.

## 5. Cargo-Nature and Dangerous-Goods Pre-Screen Questions

### Core indicators

- Is the product a liquid, gas, aerosol, powder, paste, chemical, fuel, paint, adhesive, cleaner, perfume, cosmetic, medicine, pesticide, fertilizer, battery, magnet, engine, machine containing fuel, compressed cylinder, radioactive item, biological material, or temperature-sensitive product?
- Does it contain lithium batteries? If yes: installed in equipment, packed with equipment, or batteries alone?
- Is a safety data sheet available?
- Is a UN number known?
- Is a proper shipping name known?
- Is a dangerous-goods class or division known?
- Is a packing group known?
- Is the flash point known where relevant?
- Is the shipment limited quantity, excepted quantity, or another declared exception? User declaration only until verified.

### Package and quantity

- Package type.
- package count.
- quantity per package.
- net quantity and gross weight.
- inner and outer packaging.
- pressure or temperature controls.

### Outcome logic

- Missing technical identity with a hazard indicator leads to `DANGEROUS_GOODS_DATA_REQUIRED`.
- Known DG data leads to carrier and country checks, not automatic acceptance.
- No indicator found leads to `NO_INDICATOR_FOUND` with a warning that absence of indicators is not certification.
- Conflicting answers lead to `SPECIALIST_CONFIRMATION_REQUIRED`.

## 6. Country and Route Questions

- Is the country an origin, destination, or transit country?
- Import, export, transit, or domestic movement?
- Port, airport, border, free zone, or city involved?
- Does cargo need a government permit or approval according to available documents?
- Is the route fixed?
- Are there known tunnels, bridges, restricted city areas, or prohibited truck times?

The user is not expected to know every requirement. Unknown answers trigger official-source guidance rather than rejection.

## 7. Carrier and Postal Questions

- Carrier or provider selected?
- Service name selected?
- Account-specific contract or published tariff?
- Origin and destination postal codes where relevant?
- Package count, dimensions, and weight per package?
- Dangerous or restricted cargo indicators?
- Temperature or time sensitivity?
- Oversize or additional-handling indicators?
- Booking already accepted, rejected, or not submitted?

If carrier/service is not selected, the calculator may use a clearly labeled generic estimate and request confirmation before commercial use.

## 8. CBM and Volumetric-Weight Questions

For each package type:

- Package ID or description.
- Outer length.
- outer width.
- outer height.
- unit.
- quantity.
- gross weight per package.
- weight unit.

Optional:

- Carrier.
- service.
- known volumetric divisor.

Validation:

- Positive values only.
- Quantity is integer.
- Units required.
- Package-level calculations preserved for carrier rules that charge per piece.

## 9. Preliminary Container Estimate Questions

- Cargo is loose cartons or palletized?
- Number of package types.
- Total CBM and gross weight, or package details.
- Preferred equipment types.
- Is refrigeration required?
- Is cargo out of gauge?
- Is cargo dense or floor-load sensitive?
- Is mixed cargo present?

Result remains preliminary until detailed load planning or actual booking.

## 10. Paid Container Load Planner Questions

For each item type:

- Dimensions.
- quantity.
- gross weight.
- allowed orientations.
- keep upright?
- stackable?
- maximum top load?
- fragile?
- heavy or floor-only?
- loading priority?
- unloading priority?
- incompatible with another item group?

For the container:

- Reference type or actual unit dimensions.
- actual door opening.
- payload and gross limits.
- floor limit if available.
- reserved space or clearance.
- pallets and dunnage.

Optimization preference:

- Maximize loaded quantity.
- minimize containers.
- prioritize specific items.
- improve weight balance.
- protect unloading sequence.

## 11. Road and Abnormal-Load Questions

- Vehicle type.
- tractor and trailer type.
- number of axles.
- unladen vehicle weight.
- cargo weight.
- combined gross weight.
- overall loaded length.
- width.
- height from road level.
- overhang.
- indivisible load?
- origin and destination location.
- proposed route.
- requested travel date and time.
- escort available?
- vehicle operating card and registration available?

Triggers map to the applicable country/local authority thresholds. No universal threshold may override local rules.

## 12. Customs-Broker Referral Questions

- Country.
- customs point.
- import, export, or transit.
- transport mode.
- cargo category.
- DG or special-cargo pre-screen status.
- expected arrival or departure date.
- language preference.
- required service.
- number of providers to contact.
- consent to share selected case fields.

The user chooses providers before any data is shared.

## 13. Free Versus Paid Question Boundary

### Free

- Essential transaction fields.
- selected trade term.
- basic cargo indicators.
- basic dimensions and weights.
- one carrier/service configuration.
- quick country/route indicators.

### Paid

- Full multi-option comparison.
- detailed package and SKU data.
- multiple carrier scenarios.
- actual equipment constraints.
- multi-SKU load optimization.
- versioned report.
- saved attachments and evidence, later.
- provider RFQ workflow, later.

## 14. Error and Uncertainty States

- Required field missing.
- unit missing.
- contradictory answers.
- source unavailable.
- rule expired or under review.
- carrier confirmation required.
- authority confirmation required.
- specialist confirmation required.
- unsupported country or service.

The platform must return the next useful action rather than a generic failure message.

## 15. Next Derivation Work

1. Map each question to a rule or calculator field.
2. Remove questions that do not affect a result.
3. Define conditional visibility.
4. Define Arabic and English labels.
5. Define data types and validation.
6. Create test cases and expected outcomes.
7. Convert the approved version into implementation schemas.
