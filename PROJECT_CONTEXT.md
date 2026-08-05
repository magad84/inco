# INCO Project Context

**Status:** Approved product foundation for the first implementation phase  
**Owner:** Mostafa Gad  
**Repository:** `magad84/inco`  
**Last updated:** 2026-08-05

## 1. Product Definition

INCO is a structured trade-term review and decision-support application.

Its primary purpose is to help a professional user review a proposed trade term before accepting it in a quotation, purchase order, contract, or shipment arrangement.

The product must evaluate the commercial and operational consequences of the selected term rather than merely explain its definition.

## 2. Primary User Problem

Trade terms are often selected by habit, copied from previous transactions, or accepted without checking whether they match:

- The transport mode.
- The intended delivery point.
- The operational capability of each party.
- The expected control over freight, insurance, clearance, and documentation.
- The intended transfer of cost and risk.
- The actual wording used in the commercial agreement.

INCO turns these factors into a structured review and decision brief.

## 3. Target Users

Primary users:

- Import and export professionals.
- Logistics and freight professionals.
- Procurement and sourcing teams.
- Supply Chain professionals.
- Customs and trade operations specialists.
- Sellers, buyers, and SMEs involved in cross-border transactions.

INCO must address users as working professionals, not as beginners.

## 4. Core Value Proposition

INCO helps users:

- Check whether a selected trade term is suitable for the transaction.
- Understand responsibilities by party.
- Identify where risk and cost transfer.
- Detect unclear or contradictory transaction assumptions.
- Review advantages and disadvantages for seller and buyer.
- Compare practical alternatives.
- Identify missing information before commitment.
- Prepare clarification and negotiation points.

## 5. Core Workflow

1. Capture transaction information.
2. Validate completeness and internal consistency.
3. Review the selected trade term.
4. Evaluate transport-mode compatibility.
5. Review the named place and intended delivery point.
6. Map seller and buyer responsibilities.
7. Map risk and cost transfer.
8. Identify operational and commercial risks.
9. Present advantages and disadvantages for each party.
10. Compare relevant alternatives.
11. Generate a structured decision brief.

## 6. Required MVP Inputs

The guided questionnaire should capture only information required by the decision logic, including:

- User perspective: seller, buyer, adviser, or neutral reviewer.
- Selected or proposed trade term.
- Seller country.
- Buyer country.
- Origin location.
- Destination location.
- Named place or point written in the commercial document.
- Main transport mode and multimodal status.
- Product or cargo description at a practical level.
- Whether the cargo is containerized where relevant.
- Party controlling main freight.
- Party expected to arrange insurance.
- Party expected to handle export clearance.
- Party expected to handle import clearance.
- Intended physical delivery point.
- Required level of transport control for each party.
- Known contractual or operational constraints.

The final field list must be minimized during UX design and may use conditional questions.

## 7. Required MVP Outputs

The result must be structured and include:

- Transaction summary.
- Data-completeness status.
- Selected-term suitability review.
- Transport-mode compatibility.
- Named-place and delivery-point review.
- Seller responsibility summary.
- Buyer responsibility summary.
- Risk-transfer point.
- Cost-allocation summary.
- Operational and commercial risks.
- Advantages and disadvantages for each party.
- Missing information and unresolved assumptions.
- Alternative terms worth reviewing.
- Contract clarification points.
- Recommended next actions.
- Decision-support disclaimer.

## 8. Free and Paid Product Boundary

### Free: INCO Free Review

The free experience should provide enough value to establish trust:

- Initial suitability result.
- Core responsibility summary.
- Risk-transfer summary.
- Key risks.
- Concise advantages and disadvantages.
- Missing-information alert.
- One limited alternative comparison.
- On-screen result.

### Paid: INCO Trade Decision Pack

The paid output is planned to include:

- Detailed selected-term review.
- Comparison with multiple relevant alternatives.
- Full responsibility and cost matrix.
- Seller-specific and buyer-specific risks and advantages.
- Named-place clarification.
- Contract and purchase-order clarification points.
- Negotiation questions.
- Prioritized actions.
- Saved case and version history.
- Professional report export.

Initial monetization direction: pay per report. Credit bundles and business workspaces are deferred.

## 9. Authentication Direction

- A visitor should be able to start and complete the free review without registration.
- Google sign-in is planned for saving, resuming, purchasing, and accessing reports.
- Request only minimum identity data required for the account.
- Do not request Gmail, Drive, contacts, or unrelated Google permissions.
- Authentication must remain independent from payment processing.

## 10. AI Decision

AI is not part of the current MVP commitment.

The following remain undecided:

- Model.
- Provider.
- Local or hosted runtime.
- Free or paid API.
- Document extraction.
- Conversational interface.

The rules engine and structured workflow must function without AI. A future AI layer must be replaceable and may assist with free-text understanding, extraction, clarification, translation, or report wording only after evaluation.

## 11. Product and Brand Boundaries

- INCO has its own approved identity, visual assets, colors, and UX direction.
- Do not reuse the MostafaGad.net palette or another product identity.
- Do not recolor or alter approved INCO assets without owner approval.
- MostafaGad.net may provide product discovery and endorsement but does not absorb INCO's application architecture or data.
- Keep INCO in its independent repository and deployment boundary.

## 12. Professional and Safety Boundaries

INCO must:

- Avoid unsupported certainty.
- Explain missing data and conditional results.
- Separate risk transfer from cost allocation.
- Avoid inventing sources, requirements, or contractual language.
- Avoid presenting general guidance as a binding determination.
- Identify when legal, customs, insurance, regulatory, or specialist confirmation is needed.
- Refuse assistance intended to facilitate illegal trade or evasion.

## 13. Deferred Capabilities

Do not implement without explicit approval:

- Generative AI or chatbot functionality.
- HS classification module.
- Duties and tax calculation.
- Government API integrations.
- Automated legal-document amendment.
- Team workspaces.
- Subscription billing.
- Public API.
- ERP integrations.
- Human expert marketplace.

## 14. Governing Principle

**Rules before models. Clarity before automation. Professional decision support before feature expansion.**
