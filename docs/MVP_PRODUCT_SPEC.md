# INCO MVP Product Specification

**Version:** 0.1  
**Status:** Draft for owner review  
**Date:** 2026-08-05  
**Work package:** WP-01

## 1. MVP Objective

Deliver a bilingual, structured decision-support workflow that reviews a proposed trade term for a specific transaction and gives the user an explainable professional result.

The MVP must be useful without generative AI, user registration, payment, or external integrations.

## 2. Product Outcome

The user should leave the workflow able to answer:

1. Is the selected term broadly suitable for this transaction?
2. Is it compatible with the intended transport arrangement?
3. Is the named place or point clear enough?
4. What must the seller do?
5. What must the buyer do?
6. Where does risk transfer?
7. How are the main cost responsibilities allocated?
8. What are the material operational and commercial risks?
9. What are the advantages and disadvantages for each party?
10. What information is missing?
11. Which alternatives deserve review?
12. What should be clarified before acceptance?

## 3. MVP User Journey

### Step 1: Select Perspective

The user selects one perspective:

- Seller.
- Buyer.
- Neutral reviewer or adviser.

This affects emphasis and the ordering of risks and advantages. It must not change the underlying rule outcome.

### Step 2: Identify the Proposed Term

Capture:

- Proposed trade term.
- Whether the term is already written in a quotation, purchase order, contract, or other document.
- Exact wording of the named place or point, if available.
- Whether the user is selecting a new term or reviewing an existing one.

### Step 3: Describe the Transaction

Capture the minimum necessary transaction context:

- Seller country.
- Buyer country.
- Origin location.
- Destination location.
- Intended physical delivery point.
- Main transport mode.
- Whether more than one transport mode is expected.
- Cargo description.
- Containerized status where relevant.
- Special handling or insurance concerns where relevant.

### Step 4: Capture Intended Responsibilities

Ask who the parties expect to control or perform:

- Export formalities.
- Origin handling.
- Main carriage.
- Cargo insurance.
- Destination handling.
- Import formalities.
- Delivery to the final agreed point.

Questions must be conditional and avoid requiring the user to know technical terminology.

### Step 5: Capture Commercial Priorities

Ask what matters most in the transaction:

- Seller wants limited responsibility after dispatch.
- Seller wants control over freight or customer service.
- Buyer wants control over freight and service providers.
- Buyer wants a delivered solution.
- Either party has limited capability in the other country.
- Insurance control is important.
- Cost visibility is important.
- The transaction requires a specific documentary or payment outcome.

The MVP should allow multiple priorities and should not assume one universal best term.

### Step 6: Validate Information

Before analysis, identify:

- Missing required information.
- Contradictory answers.
- Unclear named place.
- Mismatch between intended responsibilities and selected term.
- Insufficient information for a confident result.

The user may continue with a conditional result when noncritical information is missing. Critical missing information must block a definitive recommendation.

### Step 7: Produce the Review

Generate an explainable structured result using the approved rules engine.

## 4. Input Model v0.1

### Required Inputs

- User perspective.
- Proposed term.
- Seller country.
- Buyer country.
- Origin location or origin type.
- Destination location or destination type.
- Main transport mode.
- Intended delivery point.
- Exact named place or point, or confirmation that it is not yet defined.
- Expected controller of main carriage.
- Expected party responsible for export formalities.
- Expected party responsible for import formalities.

### Conditional Inputs

- Multimodal movement.
- Containerized cargo.
- Insurance expectations.
- Origin and destination handling responsibility.
- Special cargo handling.
- Required final delivery service.
- Documentary-payment considerations.
- Known contractual wording.
- Known restrictions or operational constraints.

### Optional Context

- Product description.
- Shipment value band.
- Frequency of similar transactions.
- Existing logistics-provider arrangement.
- User notes.

Optional fields must not affect the result unless an approved rule explicitly uses them.

## 5. Analysis Dimensions

The rules engine will evaluate the transaction across the following dimensions:

1. **Transport Compatibility**  
   Whether the selected term fits the stated transport arrangement.

2. **Named-Place Clarity**  
   Whether the place or point is sufficiently specific for the intended operational handover.

3. **Delivery Alignment**  
   Whether the legal or rule-based delivery concept aligns with what the parties appear to expect physically.

4. **Responsibility Alignment**  
   Whether the intended responsibilities match the selected term.

5. **Risk-Transfer Alignment**  
   Whether the timing and location of risk transfer match the user's expectations.

6. **Cost-Control Alignment**  
   Whether the party expected to control or pay major logistics activities is aligned with the term.

7. **Operational Capability**  
   Whether either party is being assigned activities it may not be equipped to manage.

8. **Insurance Alignment**  
   Whether insurance responsibility and desired protection are clear and aligned.

9. **Clearance Exposure**  
   Whether export and import responsibilities create avoidable operational exposure.

10. **Contract Clarity**  
    Whether the wording is sufficiently clear to avoid conflicting expectations.

## 6. Rating Model

### Suitability Rating

Do not use a percentage in the MVP unless a later validated scoring model supports it.

Use one of:

- **Strong Fit**: the selected term broadly aligns with the stated transaction and no material conflict is detected.
- **Conditional Fit**: the term may be used, but material clarification, capability, or risk issues remain.
- **Poor Fit**: the term materially conflicts with the intended transport, responsibilities, delivery expectation, or risk allocation.
- **Insufficient Information**: critical facts are missing or contradictory.

### Risk Severity

- **Critical**: may invalidate the intended arrangement or create a material exposure requiring action before acceptance.
- **High**: substantial commercial or operational exposure requiring clarification or mitigation.
- **Medium**: relevant exposure that should be reviewed and assigned.
- **Low**: limited exposure or improvement opportunity.
- **Information**: explanatory note without an identified adverse condition.

### Confidence

Confidence is based on data completeness and rule coverage, not model opinion:

- High.
- Medium.
- Low.

## 7. Result Structure

### A. Decision Summary

- Suitability rating.
- Confidence.
- Number of critical and high risks.
- Key conclusion in plain language.

### B. Transaction Profile

- Parties and countries.
- Proposed term.
- Named place or point.
- Transport arrangement.
- Intended delivery point.
- User perspective.

### C. What the Term Means for This Transaction

- Seller's main responsibilities.
- Buyer's main responsibilities.
- Delivery and risk-transfer summary.
- Main cost-allocation summary.

### D. Alignment Review

For each analysis dimension:

- Status: aligned, conditional, misaligned, or unknown.
- Explanation.
- Relevant user input.
- Required clarification or action.

### E. Risks

Each risk record includes:

- Risk title.
- Severity.
- Affected party.
- Triggering condition.
- Why it matters.
- Suggested mitigation or clarification.

### F. Advantages and Disadvantages

Separate views for:

- Seller.
- Buyer.

Do not present a characteristic as universally positive or negative. Explain the transaction condition that makes it an advantage or disadvantage.

### G. Missing and Contradictory Information

- Missing field or assumption.
- Why it matters.
- Whether it blocks the result.
- Recommended question.

### H. Alternatives Worth Reviewing

For each candidate alternative:

- Why it may fit better.
- What changes for the seller.
- What changes for the buyer.
- New risks or responsibilities introduced.

Alternatives must be rule-selected, not randomly listed.

### I. Clarification and Next Actions

- Named-place correction or clarification.
- Contract or purchase-order clarification points.
- Questions for the other party.
- Internal confirmation required.
- Prioritized next actions.

### J. Professional Boundary

Display the approved decision-support disclaimer and any case-specific requirement for specialist confirmation.

## 8. Free Review Boundary

The free on-screen result includes:

- Suitability rating.
- Confidence.
- Core seller and buyer responsibility summary.
- Risk-transfer summary.
- Up to five most material risks.
- Concise advantages and disadvantages.
- Missing-information summary.
- One alternative worth reviewing, when supported.
- Limited next actions.

The free experience must remain genuinely useful and must not hide a critical risk merely to promote payment.

## 9. Paid Trade Decision Pack Boundary

The planned paid report includes:

- Full analysis across all dimensions.
- Full risk register.
- Detailed seller and buyer responsibility matrix.
- Cost and responsibility breakdown.
- Detailed advantages and disadvantages for each party.
- Comparison with multiple relevant alternatives.
- Named-place review and correction guidance.
- Contract and purchase-order clarification points.
- Negotiation questions.
- Prioritized action plan.
- Saved case and report access.
- Professional export format.

Payment, pricing, gateway, taxes, and invoice logic are outside the current MVP specification.

## 10. Authentication Trigger

The free review does not require registration.

Google sign-in is introduced only when the user chooses to:

- Save a case.
- Resume later.
- Purchase a report.
- Access a previously purchased report.
- Manage account data.

The initial anonymous case should be securely associated with the account after sign-in without exposing another user's data.

## 11. Error and Uncertainty States

The product must support:

- Required field missing.
- Contradictory responsibility expectations.
- Unknown or unsupported term.
- Incomplete named place.
- Unsupported transaction scenario.
- Low-confidence result.
- Rule version unavailable.
- Technical failure.

No error state should silently fall back to a confident recommendation.

## 12. MVP Acceptance Criteria

The MVP is acceptable when:

1. A user can complete a review without AI or registration.
2. The same validated inputs produce the same rule result.
3. Risk transfer and cost allocation are shown separately.
4. Seller and buyer responsibilities are not conflated.
5. Missing critical information prevents a definitive fit rating.
6. A transport mismatch produces an explicit warning.
7. An unclear named place produces a clarification requirement.
8. Contradictory intended responsibilities are surfaced.
9. Alternatives are linked to specific alignment problems.
10. Critical risks are visible in the free result.
11. The result explains why each material warning appears.
12. Arabic and English data structures can represent equivalent meaning.
13. The implementation stores a rule version with each result.
14. No generative AI dependency exists in the core flow.

## 13. Deferred Decisions

- Final supported-term list and term-level rule matrix.
- Detailed rule source register.
- Numeric scoring.
- Technology stack.
- Database design.
- Authentication provider configuration.
- Payment gateway and pricing.
- PDF design.
- AI model or provider.
- Hosting and deployment.

## 14. Next Specification Task

Create the term-level rules matrix and representative test cases using approved internal source material. No production code should implement professional rules until that matrix is reviewed.
