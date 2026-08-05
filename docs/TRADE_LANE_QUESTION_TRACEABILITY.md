# INCO Trade-Lane Question Traceability

**Version:** 0.1  
**Date:** 2026-08-05  
**Status:** Working implementation map for WP-03

## Purpose

This document links each route-selection question to the rule family, evidence requirement, output, and uncertainty state it controls. Questions are not collected unless they affect a calculation, rule, warning, comparison, or confirmation requirement.

## Core Traceability

| Question family | Minimum fields | Rule or process | Output affected | Missing-data behavior |
|---|---|---|---|---|
| Origin | country, city/region, proposed gateway | Origin Country Pack and Gateway Registry | candidate gateways, export checks | `insufficient_information` |
| Destination | country, city/region, proposed gateway | Destination Country Pack and Gateway Registry | import and inland-delivery checks | `insufficient_information` |
| Cargo identity | commercial description, use, composition where relevant | Cargo pre-screen | prohibited/restricted/DG indicators | `confirmation_required` when evidence is missing |
| Packages | quantity, dimensions, units, gross weight | Cargo Calculator | CBM, gross weight, volumetric and chargeable weight | calculation blocked for missing critical fields |
| Special handling | battery, liquid, chemical, food, temperature, fragile, high-value, live, magnetic, biological | DG and special-cargo pre-screen | evidence list, carrier confirmation, specialist route | `confirmation_required` |
| Size and weight | packed dimensions, total weight, per-piece weight | Gateway capability, equipment, road and abnormal-load rules | equipment candidates, route-study and permit indicators | `confirmation_required` |
| Mode | ocean, air cargo, express, postal, road, multimodal | mode compatibility | eligible provider and service families | alternatives displayed without acceptance claim |
| Provider | carrier and exact service | Carrier Service Registry | volumetric factor, service limits, cargo acceptance state | `source_required` or `stale_review_required` |
| Transit | countries and gateways | transit controls and carrier routing | transit risks and checks | no route recommendation without data |
| Commercial priority | cost, speed, control, reliability, temperature, door delivery | comparison logic | ranked operational candidates | ranking must explain assumptions |
| Russia linkage | parties, beneficial owner, bank, product, end use, end user, transit | enhanced compliance process | enhanced-screening state | shipment permission must not be claimed |
| Final delivery | address type, road access, unloading, vehicle limits | inland transport and local authority packs | last-mile constraints and permit indicators | `confirmation_required` |

## Recommendation Gate

A carrier or route may be described as a **candidate** when basic mode and geographic compatibility are present.

It may be described as **conditionally suitable** only when:

- The relevant origin and destination gateway records are verified for the needed capability.
- The provider and exact service rule is current.
- Cargo indicators and evidence requirements are resolved sufficiently.
- Known transit restrictions have been evaluated.
- Any remaining confirmation is clearly named.

It may be described as **confirmed available** only when a current authoritative source or direct provider confirmation supports that exact route, service, cargo, and date.

## Ranking Controls

Operational ranking must be based on documented factors such as:

- Route and gateway compatibility.
- Cargo acceptance state.
- Weight and dimension fit.
- Required handling capability.
- Number and seriousness of unresolved confirmations.
- User priorities.

Sponsorship may affect labeled visibility only. It must not alter operational suitability or verification status.
