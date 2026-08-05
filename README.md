# INCO

**International Commerce & Logistics Assistant**

INCO is a structured decision-support product for reviewing trade terms before they are accepted in a commercial transaction.

It helps users assess whether a selected term fits the transaction, understand seller and buyer responsibilities, identify the transfer of risk and cost, review operational advantages and disadvantages, detect missing information, and compare practical alternatives.

## Current Product Direction

INCO is being developed as an independent product with its own repository, identity, architecture, data boundaries, and deployment model.

The first release is rules-first and workflow-driven. It does not depend on a generative AI model.

## Core MVP

The initial product will provide:

- A guided transaction questionnaire.
- Selected trade-term suitability review.
- Named-place and delivery-point checks.
- Seller and buyer responsibility mapping.
- Risk-transfer and cost-allocation analysis.
- Operational risk identification.
- Advantages and disadvantages for each party.
- Missing-information detection.
- Comparison with practical alternatives.
- A structured decision brief.

## Commercial Model

### INCO Free Review

The free review provides an initial suitability result, key risks, concise advantages and disadvantages, missing information, and a limited alternative comparison.

### INCO Trade Decision Pack

The paid professional output is planned to include a detailed comparison, responsibility matrix, party-specific risks and advantages, clarification and negotiation points, recommended actions, saved results, and a professional report.

The initial payment model is expected to be pay-per-report. Credit bundles and business workspaces are later-stage options.

## Account Direction

Users should be able to start a free review without registration. Google sign-in is planned when a user wants to save, continue, or purchase a professional report.

Google authentication and payment processing are separate capabilities. A payment gateway will be selected later.

## AI Status

The AI module is intentionally undecided and outside the current implementation scope.

No model, provider, local runtime, or paid API has been approved. The core decision logic must remain usable without AI and allow a future replaceable AI layer if it adds proven value.

## Product Boundary

INCO is a professional decision-support tool. It does not replace contractual, legal, customs, insurance, freight, or regulatory advice where specialist confirmation is required.

Results depend on the information provided by the user and must clearly distinguish confirmed logic, conditional guidance, missing information, and matters requiring external verification.

## Governance

- Product Owner: Mostafa Gad.
- Strategic product and architecture governance: ChatGPT.
- Engineering execution: Codex.
- Source control: GitHub.
- Repository: `magad84/inco`.

See `PROJECT_CONTEXT.md`, `CURRENT_STATE.md`, and `AGENTS.md` before implementation.
