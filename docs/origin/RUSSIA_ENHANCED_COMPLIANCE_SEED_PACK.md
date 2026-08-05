# Russia Enhanced Compliance Origin Seed Pack

**Version:** 0.1  
**Status:** Research seed; enhanced screening mandatory

## Scope

Covers shipments originating in Russia or involving Russian parties, goods, banks, carriers, vessels, aircraft, transit points, ownership, or re-export risk.

## Mandatory Screening Dimensions

- Exporter, consignee, intermediate parties, and beneficial ownership.
- Product classification and controlled-goods indicators.
- End user and end use.
- Bank, currency, payment route, and trade-finance feasibility.
- Carrier, vessel, aircraft, and operator acceptance.
- Origin, transit, and destination-country restrictions.
- Re-export and diversion risk.
- Insurance availability and exclusions.
- Current sanctions and counter-sanctions controls.

## Required Inputs

- Full legal names and registration identifiers for all parties.
- Beneficial ownership information where available.
- Product description, HS candidate, technical specifications, and end use.
- Proposed bank, currency, and payment flow.
- Carrier, vessel or flight, gateways, and transit countries.
- Prior origin and re-export history.
- Insurance and broker involvement.

## Initial Gateway Candidates

### Maritime

- Novorossiysk.
- St. Petersburg.
- Vladivostok.
- Vostochny.

### Air Cargo

- Moscow Sheremetyevo.
- Moscow Domodedovo.
- Moscow Vnukovo.

Gateway inclusion does not imply that the route, carrier, bank, or goods are legally or operationally available.

## Mandatory Result States

- `enhanced_compliance_screening_required`
- `restricted_party_screening_required`
- `banking_route_confirmation_required`
- `carrier_acceptance_required`
- `legal_review_required`
- `sanctions_data_stale_review_required`
- `route_not_recommendable_on_current_evidence`

## Automatic Escalation Triggers

- Missing beneficial ownership.
- Controlled or dual-use indicators.
- Military, energy, aerospace, electronics, telecom, or industrial-control end use.
- Unusual intermediary or transshipment structure.
- Bank or carrier unable to confirm acceptance.
- Conflicting jurisdictional restrictions.
- Stale sanctions data.

## Priority Research Backlog

1. Current official export-control sources.
2. Current sanctions sources for each launch destination and relevant transit jurisdiction.
3. Banking and payment restrictions.
4. Carrier and insurer acceptance evidence.
5. Port and airport operational sources.
6. Restricted-party data governance and update frequency.

## Safety Boundary

INCO must not provide a simple `allowed` or `not allowed` conclusion for Russia-linked transactions without current multi-jurisdiction evidence. It provides screening status, missing evidence, escalation reason, authority or specialist to consult, and the effect of proceeding without confirmation.
