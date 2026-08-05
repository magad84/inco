# INCO Project Context

**Status:** Approved product and knowledge foundation  
**Owner:** Mostafa Gad  
**Repository:** `magad84/inco`  
**Last updated:** 2026-08-05

## 1. Product Definition

INCO is a bilingual, structured international-commerce and logistics decision-support platform.

Its core product reviews a proposed trade term for a specific transaction. The wider approved direction adds modular support for cargo pre-screening, country and carrier requirements, freight calculations, container loading, abnormal-load indicators, and verified customs-clearance provider discovery.

INCO must convert user data and verified rules into practical, explainable outputs. It must not behave as a general chatbot or claim authority that belongs to a government body, carrier, competent specialist, or licensed service provider.

## 2. Primary User Problems

Professionals often make shipment decisions using fragmented information spread across:

- Commercial agreements.
- carrier terms.
- government services and permits.
- dangerous-goods requirements.
- package dimensions and weights.
- equipment specifications.
- local road and route restrictions.
- customs-clearance providers.

INCO organizes these inputs into guided workflows that identify:

- What is known.
- what is missing.
- what can be calculated.
- what can be determined by an approved rule.
- what remains conditional.
- what requires current carrier, authority, or specialist confirmation.

## 3. Target Users

Primary users:

- Import and export professionals.
- logistics and freight professionals.
- procurement and sourcing teams.
- Supply Chain professionals.
- customs and trade operations specialists.
- sellers, buyers, and SMEs involved in cross-border transactions.
- freight forwarders and transport planners.
- professionals preparing cargo for sea, air, courier, postal, road, or multimodal movement.

INCO must address users as working professionals, not as beginners.

## 4. Approved Product Modules

### 4.1 Trade-Term Review

The core workflow must:

- Review whether the selected term fits the actual transaction.
- Check transport-mode compatibility.
- review the named place and intended delivery point.
- separate delivery, risk transfer, cost allocation, and operational control.
- map seller and buyer responsibilities.
- identify operational and commercial risks.
- explain advantages and disadvantages for each party.
- identify missing or contradictory assumptions.
- compare practical alternatives.
- produce clarification, negotiation, and next-action points.

### 4.2 Cargo Nature and Dangerous-Goods Pre-Screen

The pre-screen may identify indicators of:

- Dangerous goods.
- restricted or prohibited cargo.
- batteries.
- liquids, aerosols, gases, chemicals, powders, fuels, or machinery containing regulated substances.
- perishables or temperature-controlled cargo.
- fragile, high-value, live, magnetic, biological, radioactive, oversized, or overweight cargo.

The module must not provide a final dangerous-goods classification or declare cargo accepted. It must request relevant evidence and route the user to the appropriate carrier, authority, or competent specialist when required.

### 4.3 Country Compliance Packs

Initial country scope:

1. United Arab Emirates.
2. Saudi Arabia.
3. Egypt.
4. Oman.

Country data must be versioned and may vary by:

- Emirate, province, governorate, city, port, airport, border, free zone, or local authority.
- import, export, transit, or domestic movement.
- transport mode.
- cargo category.
- route and infrastructure.
- effective date.

### 4.4 Carrier Rules Registry

Carrier categories:

- Ocean carriers.
- air cargo operators.
- express couriers.
- national postal operators.
- road carriers.
- specialist heavy-haul providers.

Rules must record provider, service, market or route, cargo scope, effective date, expiry where known, verification date, and confirmation requirement.

No universal carrier acceptance rule or volumetric divisor may be hard-coded where the actual condition depends on provider, service, route, or date.

### 4.5 Cargo Calculators

Deterministic calculators may include:

- CBM per package and total CBM.
- total gross weight.
- volumetric weight.
- chargeable weight.
- preliminary pallet count.
- preliminary container comparison and count.
- volume and payload utilization.

Pure mathematics must be distinguished from carrier-specific commercial rules and operational estimates.

### 4.6 Container Load Planner

A future paid module may optimize multiple carton or package types within a selected cargo transport unit.

It may consider:

- Actual container dimensions and door opening.
- payload.
- carton quantity, dimensions, weight, and permitted orientation.
- stackability and maximum supported load.
- fragile, heavy, floor-only, keep-upright, and no-top-load constraints.
- pallets and dunnage.
- loading and unloading sequence.
- approximate weight distribution.
- separation constraints where supported by approved rules.

The output is a proposed loading arrangement, not a safety certificate, securing approval, carrier acceptance, route approval, or dangerous-goods segregation approval.

### 4.7 Road, Bridge, Tunnel, and Abnormal-Load Indicators

This module activates only when cargo, vehicle, or route data indicates potential restrictions.

It may identify likely requirements for:

- Exceptional dimensions or gross weight.
- axle limits.
- truck-time or road restrictions.
- permits.
- route study.
- bridge or tunnel review.
- escort.
- competent authority confirmation.

INCO must not claim that a route or load is approved without current confirmation.

### 4.8 Verified Customs-Broker Marketplace

A future marketplace may connect users with registered customs-clearance providers.

Provider matching may use:

- Country and customs point.
- import, export, or transit scope.
- transport mode.
- cargo category.
- verified license and service coverage.
- language and availability.
- verified transaction feedback.

Sponsored visibility must be clearly labeled and kept separate from operational match and verification status.

## 5. Core Workflow Model

The platform follows this logic:

1. User selects a task or complete-case route.
2. INCO collects only relevant transaction data.
3. Inputs are validated for completeness and consistency.
4. Applicable modules and rule sets are activated.
5. Mathematical results are calculated deterministically.
6. Versioned rules produce indicators, warnings, and responsibilities.
7. Current external confirmation requirements are identified.
8. Results show sources, assumptions, uncertainty, and next actions.
9. Paid outputs add depth, optimization, report generation, or workflow value.

## 6. Free and Paid Direction

### Free capabilities

- INCO Free Review.
- Core trade-term suitability and risk summary.
- Basic cargo and dangerous-goods pre-screen.
- Basic CBM, gross-weight, volumetric-weight, and chargeable-weight calculations.
- Preliminary container and route indicators.
- Missing-information checks.

Critical risks must not be hidden to force payment.

### Paid capabilities

- INCO Trade Decision Pack.
- Detailed multi-option comparison and responsibility matrix.
- professional report and saved case.
- multi-SKU Container Load Plan.
- 2D/3D loading visualization and printable plan.
- advanced country/carrier/compliance brief where supported.
- future provider request-for-quotation workflow.

Initial monetization direction: pay per report or paid output. Credit bundles, subscriptions, and company workspaces remain later-stage options.

Pricing amounts and payment provider are not approved.

## 7. Authentication Direction

- Visitors should receive useful free results without registration.
- Google sign-in is planned for saving, resuming, purchasing, accessing reports, and managing account data.
- Request minimum identity scopes only.
- Do not request Gmail, Drive, contacts, or unrelated Google permissions.
- Authentication and payment processing remain independent modules.

## 8. AI Decision

AI remains outside the current implementation commitment.

Undecided items include:

- Model.
- provider.
- local or hosted runtime.
- free or paid API.
- document extraction.
- conversational assistance.

The deterministic rules, calculators, source registry, and structured workflows must operate without an LLM.

A later AI layer may assist with free-text understanding, extraction, clarification, translation, or report wording only after evaluation. It must remain replaceable and must never become the sole source for safety, compliance, responsibility, or recommendation logic.

## 9. Knowledge and Source Governance

The source hierarchy is:

1. Applicable official law, regulation, or government service.
2. Official international safety or transport source.
3. Official carrier rule, equipment guide, tariff, or operational notice.
4. Official port, airport, postal, customs, or road authority guidance.
5. Approved technical publication with clear licensing.
6. Reputable secondary material for discovery only.
7. Provider or user declaration, clearly marked as self-declared.

Every executable rule must be:

- Traceable to an approved source.
- explainable.
- testable.
- versioned.
- effective-dated where relevant.
- assigned a review date.
- capable of returning uncertainty or confirmation-required states.

The AI module and general web content are not sources of truth.

## 10. Product and Brand Boundaries

- INCO has its own approved identity, visual assets, colors, and UX direction.
- Do not reuse the MostafaGad.net palette or another product identity.
- Do not recolor or alter approved INCO assets without owner approval.
- MostafaGad.net may provide product discovery and endorsement but does not absorb INCO's application architecture or data.
- Keep INCO in its independent repository, architecture, data boundary, and deployment model.

## 11. Professional and Safety Boundaries

INCO must:

- Avoid unsupported certainty.
- distinguish mathematical calculations from rule-based guidance and current confirmation.
- explain missing data and conditional results.
- separate risk transfer from cost allocation.
- avoid inventing sources, requirements, formulas, classifications, or contractual language.
- avoid presenting a pre-screen as a final dangerous-goods determination.
- avoid presenting a geometric fit as a safe loading approval.
- avoid presenting a provider registration as government endorsement.
- identify when legal, customs, dangerous-goods, insurance, carrier, transport, road, or specialist confirmation is needed.
- refuse assistance intended to facilitate illegal trade, evasion, unsafe movement, or falsification.

## 12. Current Delivery Gate

The current phase is knowledge architecture and deterministic specification.

Before production coding, the project requires enough of the following to avoid embedding assumptions in code:

- Source Registry.
- country and carrier schemas.
- trade-term rules.
- cargo/DG pre-screen rules.
- calculator specifications.
- question-to-rule traceability.
- uncertainty and confirmation states.
- representative test scenarios.
- free versus paid output boundaries.

## 13. Deferred Decisions

Do not implement without explicit approval:

- Generative AI or chatbot functionality.
- Final production technology stack.
- Paid software or data licenses.
- Government API integrations.
- Automated legal-document amendment.
- Live carrier booking or rate APIs.
- Subscription billing.
- Team workspaces.
- Public API.
- ERP integrations.
- Production customs-broker marketplace launch.
- Pricing amounts or payment-provider selection.

## 14. Governing Principle

**Verified rules before questions. Questions before code. Calculation before optimization. Confirmation before commitment.**
