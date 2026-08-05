# INCO Project Context

**Status:** Approved product, knowledge, and deterministic-core foundation  
**Owner:** Mostafa Gad  
**Repository:** `magad84/inco`  
**Last updated:** 2026-08-05

## 0. Execution Authority and Decision Escalation

The owner authorizes autonomous progression through all already-approved research, knowledge-engineering, schema, deterministic-code, testing, documentation, and GitHub stages.

The execution agent should:

- Continue directly into the next approved work stage without pausing for routine approval.
- Choose efficient, maintainable, low-risk implementation details.
- Commit completed work to GitHub with clear messages.
- Run and review CI before treating executable results as approved.
- Correct defects discovered by tests or source review without owner interruption.
- Record material progress in `CURRENT_STATE.md` and the relevant GitHub issue.
- Return `confirmation_required`, `source_unavailable`, or `stale_review_required` instead of guessing.

Owner escalation is required only for decisions involving:

- Pricing or material changes to free-versus-paid boundaries.
- Paid software, data, or content licenses.
- Final production architecture, hosting commitment, or deployment.
- Authentication, payment, public API, or live carrier-booking integrations.
- AI model/provider selection.
- Material legal, sanctions, security, privacy, or public-marketplace risk.
- A major product-scope change outside approved ADR-001 and ADR-002.

## 1. Product Definition

INCO is a bilingual, structured international-commerce and logistics decision-support platform.

Its core product reviews a proposed trade term for a specific transaction. The wider approved direction adds modular support for cargo pre-screening, origin and destination country requirements, transport gateways, carrier services, freight calculations, container loading, abnormal-load indicators, and verified customs-clearance provider discovery.

INCO must evaluate the full shipment trade lane:

```text
Origin Country
→ Origin Gateway
→ Export Requirements
→ Carrier and Service
→ Transit, when applicable
→ Destination Gateway
→ Destination Country Requirements
→ Inland Transport and Final Delivery
```

INCO must convert user data and verified rules into practical, explainable outputs. It must not behave as a general chatbot or claim authority that belongs to a government body, carrier, competent specialist, or licensed service provider.

## 2. Primary User Problems

Professionals often make shipment decisions using fragmented information spread across:

- Commercial agreements.
- Origin-country export processes.
- Destination-country import processes.
- Ports, airports, land borders, dry ports, and inland depots.
- Carrier services and local conditions.
- Government permits and operational notices.
- Dangerous-goods requirements.
- Package dimensions and weights.
- Equipment specifications.
- Local road and route restrictions.
- Customs-clearance providers.

INCO organizes these inputs into guided workflows that identify:

- What is known.
- What is missing.
- What can be calculated.
- What can be determined by an approved rule.
- What remains conditional.
- What requires current carrier, authority, or specialist confirmation.

## 3. Target Users

Primary users:

- Import and export professionals.
- Logistics and freight professionals.
- Procurement and sourcing teams.
- Supply Chain professionals.
- Customs and trade operations specialists.
- Sellers, buyers, and SMEs involved in cross-border transactions.
- Freight forwarders and transport planners.
- Professionals preparing cargo for sea, air, courier, postal, road, rail, or multimodal movement.

INCO must address users as working professionals, not as beginners.

## 4. Approved Geographic Model

### 4.1 Launch Destination Markets

1. United Arab Emirates.
2. Saudi Arabia.
3. Egypt.
4. Oman.

Destination packs focus on import requirements, destination customs, local transport, road and permit controls, postal conditions, gateways, and verified customs-clearance providers.

### 4.2 Priority Origin Markets

1. China.
2. India.
3. Turkey.
4. Italy.
5. United States.
6. Russia.
7. Australia.

Origin packs focus on export declarations, product controls, export permits, origin documentation, dangerous-goods and special-cargo requirements, postal and courier conditions, and the principal gateways relevant to launch-market trade lanes.

The priority-origin list is an approved research scope, not a permanent ranking of countries. Future expansion may use verified trade data, user demand, product categories, and actual shipment cases.

### 4.3 Russia Enhanced Compliance

Russia-related transactions require enhanced, transaction-specific screening that may include counterparties, beneficial ownership, banks, payment routes, product and end-use controls, re-export, carriers, vessels or aircraft, gateways, transit countries, and specialist legal confirmation.

INCO must not issue a simple country-level permitted or prohibited conclusion where transaction-specific screening is required.

## 5. Approved Product Modules

### 5.1 Trade-Term Review

The core workflow must:

- Review whether the selected term fits the actual transaction.
- Check transport-mode compatibility.
- Review the named place and intended delivery point.
- Separate delivery, risk transfer, cost allocation, and operational control.
- Map seller and buyer responsibilities.
- Identify operational and commercial risks.
- Explain advantages and disadvantages for each party.
- Identify missing or contradictory assumptions.
- Compare practical alternatives.
- Produce clarification, negotiation, and next-action points.

### 5.2 Cargo Nature and Dangerous-Goods Pre-Screen

The pre-screen may identify indicators of dangerous, restricted, prohibited, temperature-controlled, fragile, high-value, biological, magnetic, radioactive, oversized, overweight, or otherwise special cargo.

The module must not provide a final dangerous-goods classification or declare cargo accepted. It must request relevant evidence and route the user to the appropriate carrier, authority, or competent specialist when required.

### 5.3 Origin and Destination Country Packs

Country data must be versioned and may vary by:

- Import, export, re-export, transit, or domestic movement.
- State, emirate, province, governorate, city, port, airport, border, free zone, or local authority.
- Transport mode.
- Cargo category.
- Route and infrastructure.
- Effective date.

### 5.4 Transport Gateway Registry

Ports, cargo airports, land borders, dry ports, inland container depots, rail terminals, and relevant free-zone gateways are independent knowledge objects.

Gateway records may include:

- Official identity and location codes.
- Gateway type and authorities.
- Cargo and equipment capabilities.
- Dangerous-goods and special-cargo indicators.
- Customs and operating conditions.
- Access, truck, route, weight, dimension, and operating constraints.
- Effective date, verification date, and confirmation status.

A location code may identify a gateway but must not be treated as proof of current operational capability.

### 5.5 Carrier and Service Registry

A carrier name alone is not an executable rule. Carrier knowledge must be stored by provider, service, origin, destination, cargo category, and effective date.

Initial priority includes:

- Express: DHL Express, FedEx, Aramex, national postal operators, and UPS where authoritative sources are available.
- Ocean: Maersk, MSC, CMA CGM, COSCO, Hapag-Lloyd, ONE, and Evergreen.
- Air cargo: Emirates SkyCargo, Etihad Cargo, Qatar Airways Cargo, Saudia Cargo, Turkish Cargo, EgyptAir Cargo, and Oman Air Cargo.

Rules may include service coverage, weight and dimension limits, volumetric factors, cargo prohibitions and restrictions, dangerous-goods acceptance processes, documentation, equipment, local conditions, and confirmation requirements.

No universal carrier acceptance rule or volumetric divisor may be hard-coded where the actual condition depends on provider, service, market, route, or date.

### 5.6 Trade-Lane Review

The route module links origin pack, origin gateway, carrier service, transit segments, destination gateway, destination pack, and inland movement.

Outputs may include:

- Candidate gateways and services.
- Missing cargo evidence.
- Export, transit, import, and local confirmation points.
- Carrier-specific calculations.
- Dangerous-goods and special-cargo warnings.
- Route and operational risks.
- Alternative gateway, carrier, service, or mode options.
- Required next actions and official confirmation sources.

### 5.7 Cargo Calculators

Deterministic calculators may include:

- CBM per package and total CBM.
- Total gross weight.
- Volumetric weight.
- Chargeable weight.
- Preliminary pallet count.
- Preliminary container comparison and count.
- Volume and payload utilization.

Pure mathematics must be distinguished from carrier-specific commercial rules and operational estimates.

### 5.8 Container Load Planner

A future paid module may optimize multiple carton or package types within a selected cargo transport unit while considering dimensions, door opening, payload, orientation, stackability, top-load, fragile and heavy constraints, pallets, dunnage, loading sequence, and approximate weight distribution.

The output is a proposed loading arrangement, not a safety certificate, securing approval, carrier acceptance, route approval, or dangerous-goods segregation approval.

### 5.9 Road, Bridge, Tunnel, and Abnormal-Load Indicators

This module activates only when cargo, vehicle, or route data indicates potential restrictions. It may identify likely requirements for permits, route studies, bridge or tunnel review, escort, axle controls, truck-time restrictions, and authority confirmation.

INCO must not claim that a route or load is approved without current confirmation.

### 5.10 Verified Customs-Broker Marketplace

A future marketplace may connect users with registered customs-clearance providers using verified license, customs point, mode, cargo category, language, availability, and transaction feedback.

Sponsored visibility must be clearly labeled and kept separate from operational match and verification status.

## 6. Core Workflow Model

1. User selects a task or complete-case route.
2. INCO collects only relevant transaction, cargo, origin, destination, and route data.
3. Inputs are validated for completeness and consistency.
4. Applicable country, gateway, carrier, trade-term, cargo, and route modules are activated.
5. Mathematical results are calculated deterministically.
6. Versioned rules produce indicators, warnings, responsibilities, and candidate options.
7. Current external confirmation requirements are identified.
8. Results show sources, assumptions, uncertainty, stale rules, and next actions.
9. Paid outputs add depth, comparison, optimization, report generation, or workflow value.

## 7. Free and Paid Direction

### Free capabilities

- INCO Free Review.
- Core trade-term suitability and risk summary.
- Basic cargo and dangerous-goods pre-screen.
- Basic CBM, gross-weight, volumetric-weight, and chargeable-weight calculations.
- Candidate country, gateway, carrier, and service indicators.
- Preliminary container and route indicators.
- Missing-information and critical-risk checks.

Critical risks must not be hidden to force payment.

### Paid capabilities

- INCO Trade Decision Pack.
- Detailed multi-option comparison and responsibility matrix.
- INCO Route & Carrier Decision Pack.
- Origin-to-destination route, gateway, and service comparison.
- Carrier-specific calculations and confirmation checklist.
- Professional report and saved case.
- Multi-SKU Container Load Plan.
- 2D/3D loading visualization and printable plan.
- Advanced country, gateway, carrier, and compliance brief where supported.
- Future provider request-for-quotation workflow.

Initial monetization direction: pay per report or paid output. Credit bundles, subscriptions, and company workspaces remain later-stage options.

Pricing amounts and payment provider are not approved.

## 8. Authentication Direction

- Visitors should receive useful free results without registration.
- Google sign-in is planned for saving, resuming, purchasing, accessing reports, and managing account data.
- Request minimum identity scopes only.
- Do not request Gmail, Drive, contacts, or unrelated Google permissions.
- Authentication and payment processing remain independent modules.

## 9. AI Decision

AI remains outside the current implementation commitment.

The deterministic rules, calculators, source registry, gateway and carrier records, and structured workflows must operate without an LLM.

A later AI layer may assist with free-text understanding, extraction, clarification, translation, or report wording only after evaluation. It must remain replaceable and must never become the sole source for safety, compliance, carrier acceptance, responsibility, or recommendation logic.

## 10. Architecture Decision

ADR-001 is approved for the first implementation slice:

- Strict TypeScript deterministic domain core.
- JSON Schemas as external contracts.
- Reviewed decimal arithmetic for measurement and commercial calculations.
- No database, authentication, payment, AI, network services, or production web framework in the first package.
- Python optimization remains deferred to the paid load-planner benchmark stage.

ADR-002 is approved for origin markets, gateways, carriers, services, transit segments, and full trade-lane modeling.

## 11. Knowledge and Source Governance

The source hierarchy is:

1. Applicable official law, regulation, or government service.
2. Official international safety or transport source.
3. Official carrier rule, equipment guide, tariff, or operational notice.
4. Official port, airport, postal, customs, or road authority guidance.
5. Approved technical publication with clear licensing.
6. Reputable secondary material for discovery only.
7. Provider or user declaration, clearly marked as self-declared.

Every executable rule must be traceable, explainable, testable, versioned, effective-dated where relevant, assigned a review date, and capable of returning uncertainty or confirmation-required states.

A carrier or gateway result must not be shown as current when its governing rule is stale or unavailable.

## 12. Product, Professional, and Safety Boundaries

INCO must:

- Use only approved INCO identity and visual assets.
- Remain independent from MostafaGad.net application architecture and data.
- Avoid unsupported certainty.
- Distinguish calculations, verified rules, conditional guidance, and current confirmation.
- Avoid presenting a pre-screen as a final dangerous-goods determination.
- Avoid presenting a geometric fit as a safe loading approval.
- Avoid presenting a provider registration as government endorsement.
- Avoid claiming carrier acceptance without current evidence or direct confirmation.
- Avoid ranking a carrier, gateway, or provider solely because of sponsorship.
- Identify when legal, customs, sanctions, dangerous-goods, insurance, carrier, transport, road, or specialist confirmation is needed.
- Refuse assistance intended to facilitate illegal trade, evasion, unsafe movement, or falsification.

## 13. Deferred Decisions

Do not implement without explicit approval:

- Generative AI or chatbot functionality.
- Final production web application architecture.
- Paid software or data licenses.
- Government API integrations.
- Live carrier booking or rate APIs.
- Subscription billing.
- Team workspaces.
- Public API.
- ERP integrations.
- Production customs-broker marketplace launch.
- Pricing amounts or payment-provider selection.

## 14. Governing Principle

**Verified rules before questions. Questions before code. Calculation before optimization. Confirmation before commitment. Route context before carrier recommendation.**
