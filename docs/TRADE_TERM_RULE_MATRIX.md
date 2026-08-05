# INCO Trade-Term Rule Matrix

**Version:** 0.1  
**Date:** 2026-08-05  
**Status:** Deterministic implementation seed under WP-01  
**Coverage:** EXW, FCA, CPT, CIP, DAP, DPU, DDP, FAS, FOB, CFR, CIF

## 1. Purpose

This matrix translates the principal trade terms into implementation fields for transaction review.

It is an original operational summary for decision-support design. It is not contract language, legal advice, or a substitute for the complete governing rules and the parties' agreement.

INCO must evaluate a term against the actual transaction. It must not present any term as universally best or worst.

## 2. Core Separation

Every result must keep these concepts separate:

1. **Named place or port:** The location written with the selected term.
2. **Delivery event:** The event at which the seller has delivered under the selected term.
3. **Risk transfer:** The point at which loss or damage risk transfers from seller to buyer.
4. **Cost allocation:** Which party contracts or pays each logistics activity.
5. **Operational control:** Which party selects and manages carriers, routes, insurance, brokers, and handling.
6. **Customs responsibility:** Which party handles export and import formalities.

Payment of freight to destination does not necessarily mean risk remains with the seller until destination.

## 3. Mode Groups

### Any mode or multimodal

- EXW
- FCA
- CPT
- CIP
- DAP
- DPU
- DDP

### Sea or inland-waterway shipment only

- FAS
- FOB
- CFR
- CIF

A sea-only term used for a containerized or multimodal movement must trigger a compatibility review, especially when the seller hands cargo to a terminal or carrier before vessel loading.

## 4. Master Responsibility Matrix

| Term | Mode | Seller delivery event | Risk transfers | Seller pays main carriage? | Seller arranges cargo insurance? | Export clearance | Import clearance | Destination unloading |
|---|---|---|---|---:|---:|---|---|---|
| EXW | Any | Goods placed at buyer's disposal at named place, normally not loaded on collecting vehicle | At that delivery event | No | No | Buyer | Buyer | Buyer |
| FCA | Any | Goods delivered to buyer's carrier/person at named place; loading treatment depends on whether delivery is at seller premises or another place | At that delivery event | No | No | Seller | Buyer | Buyer/main-carriage chain |
| CPT | Any | Goods handed to the carrier contracted by seller | At handover to that carrier, not at named destination | Yes, to named destination | No | Seller | Buyer | Buyer unless separately agreed |
| CIP | Any | Goods handed to the carrier contracted by seller | At handover to that carrier, not at named destination | Yes, to named destination | Yes | Seller | Buyer | Buyer unless separately agreed |
| DAP | Any | Goods placed at buyer's disposal on arriving means, ready for unloading at named destination | At named destination before unloading | Yes | No mandatory seller insurance obligation | Seller | Buyer | Buyer |
| DPU | Any | Goods placed at buyer's disposal after unloading at named destination | After unloading at named destination | Yes | No mandatory seller insurance obligation | Seller | Buyer | Seller |
| DDP | Any | Goods placed at buyer's disposal on arriving means, ready for unloading, with import formalities handled by seller | At named destination before unloading | Yes | No mandatory seller insurance obligation | Seller | Seller | Buyer |
| FAS | Sea/inland waterway | Goods placed alongside the buyer's nominated vessel at named shipment port | Alongside the vessel | No | No | Seller | Buyer | Buyer/main-carriage chain |
| FOB | Sea/inland waterway | Goods placed on board the buyer's nominated vessel at named shipment port | On board the vessel | No | No | Seller | Buyer | Buyer/main-carriage chain |
| CFR | Sea/inland waterway | Goods placed on board vessel at shipment port | On board at shipment port, although seller pays freight to destination port | Yes, to named destination port | No | Seller | Buyer | Buyer/main-carriage chain |
| CIF | Sea/inland waterway | Goods placed on board vessel at shipment port | On board at shipment port, although seller pays freight and insurance to destination port | Yes, to named destination port | Yes | Seller | Buyer | Buyer/main-carriage chain |

## 5. Term Records

## 5.1 EXW

### Implementation fields

- `mode_group`: any
- `delivery_location_type`: seller premises or other named place
- `seller_loading_obligation`: false unless separately agreed
- `seller_export_clearance_obligation`: false
- `buyer_main_carriage_control`: true
- `risk_transfer_stage`: origin before collection/loading under the default arrangement

### Transaction strengths

For seller:

- Lowest default transport and customs involvement.
- Early delivery and risk transfer.

For buyer:

- Maximum control over collection, carrier, route, consolidation, and insurance.

### Common risks

- Buyer may be unable to complete export formalities in seller's country.
- Ambiguity over who loads and who bears loading damage.
- Seller may lack export evidence needed for tax or regulatory records.
- Buyer assumes risk before controlling physical loading.

### Alternative triggers

Suggest FCA review when:

- Seller can export clear the goods.
- Carrier collection occurs at seller premises or another origin point.
- Buyer wants main freight control but needs a cleaner export and loading allocation.

## 5.2 FCA

### Implementation fields

- `mode_group`: any
- `named_place_required`: true
- `delivery_variants`:
  - seller premises: seller loads buyer's collecting vehicle
  - other named place: seller brings goods to place on its vehicle, ready for unloading
- `seller_export_clearance_obligation`: true
- `buyer_main_carriage_control`: true
- `risk_transfer_stage`: delivery to buyer's nominated carrier/person at named place

### Transaction strengths

- Suitable for containerized and multimodal movements.
- Buyer controls main carriage.
- Seller handles export formalities.
- Delivery point can match terminal or carrier handover.

### Common risks

- Named place may omit the exact terminal, warehouse, gate, or handover point.
- Parties may confuse delivery at seller premises with delivery at another place.
- Terminal handling and unloading at the named place may be unclear.
- Carrier nomination and collection timing may be poorly coordinated.

### Alternative triggers

- Review CPT or CIP when seller should contract main carriage.
- Review EXW only when buyer can legally and operationally manage origin export and loading exposure.

## 5.3 CPT

### Implementation fields

- `mode_group`: any
- `seller_main_carriage_payment`: true
- `seller_insurance_obligation`: false
- `delivery_and_risk_location`: first carrier handover
- `cost_destination`: named destination
- `seller_export_clearance_obligation`: true
- `buyer_import_clearance_obligation`: true

### Transaction strengths

For seller:

- Seller can control freight procurement and quote a delivered-carriage price.
- Risk transfers before the paid destination movement is completed.

For buyer:

- Seller arranges main carriage while buyer avoids destination import responsibility being shifted to seller.

### Common risks

- Buyer may incorrectly believe seller retains risk to destination because seller pays freight.
- First carrier and delivery point may be unclear in a multimodal chain.
- Insurance may be absent or controlled by neither party adequately.
- Destination charges may not be fully understood.

### Alternative triggers

- Review CIP when seller must arrange cargo insurance.
- Review DAP when parties intend seller risk to continue to destination.
- Review FCA when buyer should control main carriage.

## 5.4 CIP

### Implementation fields

- `mode_group`: any
- `seller_main_carriage_payment`: true
- `seller_insurance_obligation`: true
- `delivery_and_risk_location`: first carrier handover
- `cost_destination`: named destination
- `seller_export_clearance_obligation`: true
- `buyer_import_clearance_obligation`: true

### Transaction strengths

- Seller arranges carriage and cargo insurance to the named destination.
- Works for multimodal and containerized movement.
- Gives buyer evidence of seller-arranged insurance while retaining early risk transfer structure.

### Common risks

- Buyer may confuse insurance arrangement with seller retaining risk.
- Insurance amount, scope, exclusions, claims process, and beneficiary details may not match the transaction need.
- First carrier and risk-transfer point may be unclear.
- Destination charges and unloading remain potentially misunderstood.

### Alternative triggers

- Review CPT when buyer prefers to arrange its own insurance.
- Review DAP when seller should retain risk to destination.
- Review FCA when buyer should control freight.

## 5.5 DAP

### Implementation fields

- `mode_group`: any
- `seller_delivery_destination`: true
- `seller_unloading_obligation`: false
- `seller_import_clearance_obligation`: false
- `risk_transfer_stage`: destination, ready for unloading
- `buyer_import_clearance_obligation`: true

### Transaction strengths

For seller:

- Seller controls the transport chain to destination without taking import-clearance responsibility.

For buyer:

- Delivered transport solution while buyer retains import clearance and local regulatory control.

### Common risks

- Buyer may not be ready to clear imports, causing delay, storage, or demurrage exposure.
- Named destination may not specify terminal, warehouse, gate, or exact point.
- Unloading responsibility may be misunderstood.
- Seller's carrier may face access, appointment, or waiting constraints at destination.

### Alternative triggers

- Review DPU when seller must unload.
- Review DDP only when seller can lawfully and operationally handle destination import obligations.
- Review CPT/CIP when risk should transfer earlier.

## 5.6 DPU

### Implementation fields

- `mode_group`: any
- `seller_delivery_destination`: true
- `seller_unloading_obligation`: true
- `seller_import_clearance_obligation`: false
- `risk_transfer_stage`: after unloading at named destination
- `buyer_import_clearance_obligation`: true

### Transaction strengths

- Seller manages transport and unloading to the named destination.
- Useful when seller controls suitable unloading equipment or service.

### Common risks

- Seller may not have safe unloading capability at destination.
- Site access, lifting equipment, labor, permits, and liability may be unclear.
- Import clearance delay may prevent seller from reaching or unloading at the agreed point.
- Seller bears unloading damage risk.

### Alternative triggers

- Review DAP when buyer should unload.
- Review DDP when seller should also handle import formalities and has capability.
- Review CPT/CIP when risk should transfer earlier.

## 5.7 DDP

### Implementation fields

- `mode_group`: any
- `seller_delivery_destination`: true
- `seller_import_clearance_obligation`: true
- `seller_duties_and_import_charges_obligation`: true under the default allocation
- `seller_unloading_obligation`: false
- `risk_transfer_stage`: destination, ready for unloading

### Transaction strengths

For buyer:

- Maximum default seller responsibility and delivered-price simplicity.

For seller:

- Maximum control over the customer delivery experience where seller has destination capability.

### Common risks

- Seller may be unable to act as importer, register for tax, obtain permits, or appoint brokers appropriately.
- Duties, taxes, fees, product compliance, and valuation may be uncertain.
- Seller may quote without understanding destination storage, inspection, or last-mile exposure.
- Buyer may expect unloading although default delivery is ready for unloading.

### Alternative triggers

- Review DAP when buyer should handle import clearance and import charges.
- Review DPU when seller must unload but buyer handles import clearance.
- Block a strong-fit result when seller destination capability is unknown.

## 5.8 FAS

### Implementation fields

- `mode_group`: sea_or_inland_waterway_only
- `delivery_location_type`: alongside vessel at named shipment port
- `seller_export_clearance_obligation`: true
- `buyer_vessel_nomination`: true
- `risk_transfer_stage`: alongside vessel

### Transaction strengths

- Buyer controls vessel and main freight.
- Can suit bulk, breakbulk, or port-side cargo delivered alongside vessel.

### Common risks

- Unsuitable for typical container terminal handover.
- Vessel nomination, berth, timing, and alongside access may be unclear.
- Port handling and loading costs may be disputed.
- Delay if vessel is unavailable or changes berth.

### Alternative triggers

- Review FCA for containerized cargo delivered to a terminal or carrier.
- Review FOB where seller should place goods on board.
- Review CFR/CIF where seller should contract ocean freight.

## 5.9 FOB

### Implementation fields

- `mode_group`: sea_or_inland_waterway_only
- `delivery_location_type`: on board vessel at named shipment port
- `seller_export_clearance_obligation`: true
- `buyer_vessel_nomination`: true
- `risk_transfer_stage`: on board vessel

### Transaction strengths

- Buyer controls ocean freight.
- Seller manages export and vessel loading to the delivery event.
- Common operational fit for appropriate non-containerized port shipments.

### Common risks

- Often misapplied to containerized cargo handed to a terminal before loading.
- Vessel nomination and cut-off coordination may fail.
- Terminal handling and loading cost boundaries may be unclear.
- Buyer may not control events before the on-board delivery point even though it appointed the carrier.

### Alternative triggers

- Review FCA for containerized or terminal-delivered cargo.
- Review CFR/CIF when seller should contract ocean freight.
- Review FAS when delivery should occur alongside vessel.

## 5.10 CFR

### Implementation fields

- `mode_group`: sea_or_inland_waterway_only
- `seller_main_carriage_payment`: true
- `seller_insurance_obligation`: false
- `delivery_and_risk_location`: on board vessel at shipment port
- `cost_destination`: named destination port
- `seller_export_clearance_obligation`: true
- `buyer_import_clearance_obligation`: true

### Transaction strengths

- Seller controls ocean freight cost while risk transfers at shipment.
- Buyer receives freight-paid movement to destination port.

### Common risks

- Buyer may assume risk remains with seller to destination because freight is prepaid.
- No seller insurance obligation.
- Destination charges, discharge, and onward movement may be unclear.
- Containerized cargo may be operationally better aligned with CPT.

### Alternative triggers

- Review CIF when seller must arrange cargo insurance.
- Review CPT for containerized or multimodal movement.
- Review DAP when seller should retain risk to destination.

## 5.11 CIF

### Implementation fields

- `mode_group`: sea_or_inland_waterway_only
- `seller_main_carriage_payment`: true
- `seller_insurance_obligation`: true
- `delivery_and_risk_location`: on board vessel at shipment port
- `cost_destination`: named destination port
- `seller_export_clearance_obligation`: true
- `buyer_import_clearance_obligation`: true

### Transaction strengths

- Seller arranges ocean freight and cargo insurance to destination port.
- Buyer receives a freight-and-insurance-paid commercial structure.

### Common risks

- Buyer may confuse insurance and freight payment with seller retaining destination risk.
- Insurance scope, value, exclusions, and claims process may be inadequate for buyer needs.
- Destination charges and discharge are often misunderstood.
- Containerized cargo may be operationally better aligned with CIP.

### Alternative triggers

- Review CIP for containerized or multimodal movement.
- Review CFR when buyer prefers its own insurance.
- Review DAP when seller should retain risk to destination.

## 6. Named-Place Validation Rules

### Minimum validation

The named place or port must be specific enough to identify the intended operational handover or cost destination.

Potential components:

- Facility or terminal.
- port or airport.
- city and country.
- street address or warehouse.
- berth, gate, container yard, freight station, or other point where relevant.

### Statuses

- `CLEAR`
- `BROAD_BUT_REVIEWABLE`
- `INSUFFICIENTLY_SPECIFIC`
- `CONTRADICTS_INTENDED_DELIVERY`
- `UNKNOWN`

### Critical triggers

- Country only.
- City only where multiple terminals or delivery points materially change responsibility.
- Destination place used where shipment-port delivery should be stated, or vice versa.
- Contract text contains different named points for the same term.
- User expectation does not match the written point.

## 7. Responsibility Categories

Every term record must map:

- Packaging and marking.
- quality/quantity checks required for delivery.
- loading at seller premises.
- pre-carriage.
- export clearance.
- origin handling.
- terminal delivery.
- main carriage.
- cargo insurance.
- destination handling.
- unloading.
- import clearance.
- import duties and taxes.
- final delivery.
- notices and transport documents.

Values:

- `SELLER`
- `BUYER`
- `DEPENDS_ON_NAMED_POINT`
- `DEPENDS_ON_CARRIAGE_CONTRACT`
- `SEPARATE_AGREEMENT_REQUIRED`
- `UNKNOWN`

## 8. Suitability Logic

### Strong Fit

- Mode is compatible.
- named place is clear.
- intended responsibilities align.
- intended risk transfer aligns.
- assigned party has operational capability.
- no critical contradiction is detected.

### Conditional Fit

- Term can work, but named-place, capability, insurance, handling, destination-charge, or contract clarification is required.

### Poor Fit

- Material mode conflict.
- material delivery/risk expectation conflict.
- party cannot perform a central assigned obligation.
- selected term contradicts the intended commercial structure.

### Insufficient Information

- Critical place, mode, responsibility, capability, or risk expectation is missing or contradictory.

## 9. Mandatory Free Warnings

The free result must always expose:

- Mode incompatibility.
- unclear named place.
- risk-versus-cost confusion.
- export/import clearance capability conflict.
- destination unloading conflict.
- absence or misunderstanding of insurance where material.
- any critical contradiction between the written term and intended transaction.

## 10. Implementation Gate

Before these rules enter production:

- Each term must be represented in structured data.
- responsibility values must be reviewed.
- named-place examples must be tested.
- at least three representative scenarios per term must pass.
- Arabic and English labels must preserve equivalent meaning.
- no protected source text may be copied into public code or product content.
- the result must store the rule-matrix version.
