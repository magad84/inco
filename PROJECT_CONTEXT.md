# INCO Project Context

**Status:** PRODUCT / BUSINESS KNOWLEDGE SOURCE OF TRUTH  
**Owner:** Mostafa Gad  
**Repository:** `magad84/inco`  
**Last updated:** 2026-08-07  
**Purpose:** Preserve approved product knowledge independently of chat history. This file does not certify the current software architecture or implementation.

---

# 1. Knowledge Classification

## APPROVED

- INCO V1 is a real, free, bilingual international-trade and logistics decision-support product.
- INCO is a flagship Mostafa Gad knowledge-to-execution product under `MostafaGad.net`, not an independent corporate brand.
- Mostafa Gad is positioned primarily as a Business & Operations Leader with deep supply-chain expertise. Technology, AI, automation, and open-source engineering are execution enablers, not the primary professional identity.
- V1 is anonymous and has no registration, payment, subscription, paid tier, saved cases, document upload, or persistent customer database.
- The deterministic/rules-first result is controlling. AI/MyGPT cannot override or downgrade the deterministic result.
- V1 launch destination packs: UAE, Saudi Arabia, Egypt, Oman.
- Priority origin context: China, India, Turkey, Italy, United States, Russia with enhanced-compliance controls, and Australia.
- Public controlled decision states are exactly:
  - `candidate`
  - `confirmation_required`
  - `source_unavailable`
  - `blocked_information_required`
  - `enhanced_compliance_required`
- Official confirmation output uses five parts: reason; authority/provider; official source; impact; next action.
- No unsupported live claims for rates, capacity, schedules, cut-offs, booking, carrier acceptance, customs clearance, permits, or authority approval.
- Unknown or insufficient safety/composition data must not be treated as evidence that cargo is non-dangerous or accepted.
- Damaged lithium batteries must never be represented as accepted for air transport without qualified assessment and written acceptance from the actual operating carrier.
- Russia-related cases require enhanced transaction-specific compliance screening rather than a simple country-level allowed/prohibited conclusion.
- Outside the four primary V1 destination packs, only general/candidate guidance may be given; no country-specific definitive result may be invented. The exact technical handling must still conform to the five approved public states.
- V1 privacy model: shipment-case data is intended to be processed locally in the browser; no intentional transmission to a remote INCO evaluation API; no deliberate persistent case storage.
- MyGPT is an optional external explanation/checklist companion using the approved URL, with no automatic transfer of shipment data or result data.
- EN public route: `https://mostafagad.net/inco/`.
- AR public route: `https://mostafagad.net/ar/inco/`.
- Each language route self-canonicalizes. `hreflang=en` points to `/inco/`, `hreflang=ar` to `/ar/inco/`, and `x-default` to `/inco/`.
- `/products/inco/` must redirect permanently to `/inco/` if present. `/ar/products/inco/` must redirect permanently to `/ar/inco/` if present.
- `/products/` and `/ar/products/` are discovery hubs, not competing INCO detail pages.
- SEO and GEO are one coordinated discoverability strategy based on crawlability, expert-led content, truthful structured data, stable URLs, source-grounded statements, and entity linking to Mostafa Gad / MostafaGad.net.
- Specialist logistics/trade/customs/DG terminology may remain English in Arabic UI where professionally clearer. General UI labels and explanatory copy must remain coherent in Arabic.
- Figma is the visual source of truth. GitHub does not replace Figma.

## CURRENT DIRECTION

- Close product/business/design knowledge and hand execution to Codex for technical validation, implementation-gap analysis, visual alignment, QA, and pre-deployment work.
- Preserve the static anonymous V1 boundary unless a later owner decision changes it.
- Keep INCO as an authority/acquisition product for MostafaGad.net, demonstrating conversion of domain expertise into governed execution.
- Support search intent around real shipment problems rather than only the INCO brand name.
- Use non-sensitive provenance where useful: engine/release version, knowledge release, evaluation date, source-review/effective date, and allowed public source identifiers/links.
- Use contextual internal links from INCO to relevant Mostafa Gad expertise, research, articles, and knowledge-to-execution content without interrupting the shipment workflow.

## OPEN / MISSING

- Final governing law, jurisdiction, dispute wording, and final limitation-of-liability wording for public Terms: `OWNER / LEGAL DECISION REQUIRED`.
- Actual Neom Cloud / parent-site technical logging, access, retention, deletion, and inherited analytics/tracking behavior: `TECHNICAL / HOSTING VALIDATION REQUIRED`.
- Final public Terms and Privacy publication state: drafts exist but require the above reviews.
- Visual design for standalone Terms and Privacy pages/routes is not preserved as an approved dedicated Figma screen: `DESIGN REQUIRED` if a dedicated page treatment beyond parent-site legal templates is needed.
- Actual repository architecture, routing, code quality, tests, implementation parity, and deployment readiness: `TECHNICAL VALIDATION REQUIRED BY CODEX`.
- Parent MostafaGad.net integration details such as actual sitemap generation, redirect implementation layer, shared navigation, and final production routing: `TECHNICAL VALIDATION REQUIRED`.
- Any future analytics measurement model beyond launch: `OWNER DECISION REQUIRED` before tracking is added.

## DEFERRED

Not part of V1 launch unless separately approved:

- Authentication and user accounts.
- Saved shipment cases and persistent reports.
- Document upload / AI document analysis.
- Payment, pricing, subscription, paid reports, freemium or premium tiers.
- Live carrier booking, rates, capacity, schedules, or cut-off integrations.
- Live government/customs APIs.
- Public API, ERP integrations, team workspaces.
- Production broker marketplace.
- Multi-SKU container-load planner / 2D or 3D loading optimization as a public V1 feature.
- Large-scale road/bridge/tunnel/abnormal-load planning productization.
- Expansion beyond the approved launch-market knowledge scope.
- Embedded generative chat inside MostafaGad.net.
- Mass AI-generated SEO pages, doorway pages, keyword permutations, or AI-specific ranking hacks.

## SUPERSEDED / REJECTED

- V1 as a paid/freemium product, including `advanced service for a small fee`, paid tier, premium plan, pricing, subscription, or paid-report upsell: superseded by the free V1 decision.
- Google sign-in as a V1 requirement: superseded / deferred.
- Saved cases and persistent customer database as V1 requirements: superseded / deferred.
- INCO as only an external GPT gateway: superseded.
- INCO as primarily a subdomain application: superseded for V1 public entry.
- `/products/inco/` as the canonical detail page: superseded by `/inco/` and `/ar/inco/` language architecture.
- Historical parent-site descriptions that conflict with current INCO ADRs are background only for INCO-specific implementation.
- The legacy public decision state `unsupported_scope` is not part of the approved five-state contract. Codex must trace any remaining implementation usage before changing code.

---

# 2. Product Identity, Vision, and Positioning

## Product name

**INCO**

## Public descriptor

EN: **Free International Trade & Logistics Decision Support**  
AR: **أداة مجانية لدعم قرارات التجارة الدولية والشحن**

Preferred service/footer wording:

- EN: `Free professional decision-support service`
- AR: `خدمة مجانية لدعم القرار المهني`

The word `limited` may describe professional reliance, verification, coverage, or liability boundaries, but not a commercial free-vs-paid tier.

## Vision

Turn professional international-trade, shipping, logistics, and supply-chain knowledge into structured, source-governed, practical decision support that makes uncertainty, missing facts, risks, required confirmations, and next actions explicit before execution.

## Brand role

INCO should prove that Mostafa Gad can convert management and supply-chain expertise into governed, executable decision systems. The product strengthens the wider MostafaGad.net knowledge-to-execution positioning.

Public attribution should be clear but restrained:

- INCO by Mostafa Gad.
- Founder / Product Owner / Domain Architect / Business-Rules Owner / Knowledge and Source-Governance Lead.
- Do not reposition Mostafa Gad primarily as a software developer or AI engineer.

---

# 3. Target Users and Roles

## Primary end users

- Supply-chain and logistics professionals.
- Procurement, trade, customs, and operations practitioners.
- Import/export professionals.
- Entrepreneurs and SMEs involved in cross-border trade.
- Small and individual importers, including first-time importers.
- Freight and shipment-planning professionals.

The product should address users as working professionals and provide concise practical decision support rather than beginner training.

## V1 user roles

### Anonymous Visitor / Professional User

- No authentication.
- Can open EN or AR route.
- Enters shipment facts.
- Runs deterministic check.
- Reads result, sources, risks, missing information, confirmations, and next action.
- Can use privacy-safe copy actions where provided.
- Can open MyGPT manually through the approved external link.
- Can follow contextual links to relevant MostafaGad.net content.

No account, administrator, organization, broker, billing, or saved-case user role is part of V1 public scope.

---

# 4. V1 Product Scope and Modules

## M01. Shipment Facts Intake — APPROVED

Purpose: collect only material facts that can change the result.

Approved/required data model includes where applicable:

- Country of origin.
- Country of export / dispatch.
- Country of import / destination.
- Planned transaction date.
- Transport mode.
- Cargo category.
- Physical state.
- Technical / goods description.
- Whether composition is known.
- Known hazard indicators.
- Special-handling indicators.
- Enhanced-compliance trigger / material compliance context.

Users must be warned not to enter unnecessary personal, banking, invoice, credential, contract, or confidential commercial data.

## M02. Cargo / Dangerous-Goods / Special-Cargo Pre-Screen — APPROVED

Purpose: identify indicators that may affect shipment feasibility, evidence requirements, carrier acceptance, authority confirmation, or specialist review.

Rules:

- Pre-screen is not final dangerous-goods classification.
- Missing composition/SDS/technical evidence may block evaluation.
- Do not declare cargo non-dangerous merely because hazard data is absent.
- Do not claim carrier acceptance.
- Damaged lithium battery cases require qualified assessment and actual-carrier confirmation.

## M03. Destination Requirements — APPROVED

Primary destination packs:

- UAE.
- Saudi Arabia.
- Egypt.
- Oman.

Purpose: expose destination-specific candidate requirements, missing data, controlled-source references, uncertainty, and required confirmation.

Outside these packs, provide only general guidance and clearly disclose scope limits.

## M04. Trade Lane / Route / Service Candidate Evaluation — APPROVED

Purpose: identify candidate route/service conditions without inventing live availability.

Outputs may include candidate route/service state, route risks, missing gateway/carrier facts, and confirmation requirements.

No live schedule, capacity, rate, booking, cut-off, acceptance, or route-approval claim is allowed without a supported current process.

## M05. Deterministic Calculations — APPROVED DOMAIN CAPABILITY; PUBLIC UI EXPOSURE TO BE VALIDATED

Documented domain capabilities include:

- CBM.
- Total gross weight.
- Volumetric weight.
- Chargeable weight.

Mathematical calculation must remain distinct from carrier-specific commercial rules and operational estimates.

Codex must verify which calculators are actually intended to be exposed in the current public V1 UI rather than assuming every domain capability needs a new screen.

## M06. Decision Assembly and Controlled States — APPROVED

Public result state must be one of the five approved states only:

- `candidate`
- `confirmation_required`
- `source_unavailable`
- `blocked_information_required`
- `enhanced_compliance_required`

Confidence/completeness must not be confused with decision state.

## M07. Official Confirmation Protocol — APPROVED

When current confirmation is required, output must clearly provide:

1. Reason.
2. Authority/provider.
3. Official source, where available.
4. Impact if not confirmed.
5. Recommended next action.

## M08. Result / Evidence / Next Action — APPROVED

Result structure should expose as applicable:

- Decision state and summary/reasons.
- Route and service status.
- Cargo status.
- Destination requirements.
- Key risks.
- Missing information.
- Required confirmations.
- Controlled source references.
- Recommended next action.
- Technical evidence / non-sensitive provenance.
- Professional boundary.

No downloadable paid professional report is a V1 requirement.

## M09. MyGPT Companion — APPROVED

Approved external URL:

`https://chatgpt.com/g/g-6a66319a00a48191a0601bc4039fb159-inco`

Role:

- explain the deterministic result;
- ask for material missing facts;
- create practical checklists;
- prepare questions for providers/authorities;
- explain why confirmation is required.

Must not:

- override or downgrade website result;
- invent approvals, live rates, schedules, capacity, permits, or booking status;
- provide unsupported final dangerous-goods classification;
- expose internal/protected sources;
- automatically receive form or result data from the website.

Approved Knowledge configuration: files `01` through `08` only. MyGPT audit completed 16/16 with no failures; post-cleanup regression 3/3 passed. Owner approval to expose the link is granted, but the website button is not considered production-live until implementation and live verification complete.

## M10. Privacy / Terms / Professional Boundary — APPROVED REQUIREMENT; FINAL LEGAL REVIEW OPEN

V1 must provide:

- concise pre-use professional-boundary copy near the run action;
- visible Terms link;
- visible Privacy link;
- visible Professional limitations/boundary path or clear linked section;
- distinction between locally processed shipment-case values and ordinary hosting/security logs;
- no claim that absolutely no technical data is processed by hosting unless verified.

Terms and Privacy drafts exist under `docs/`.

## M11. Feedback — APPROVED LOCAL-ONLY CONCEPT; IMPLEMENTATION PARITY TO BE VALIDATED

V1 feedback must not silently transmit or store responses.

If exposed, the action must clearly mean copy/prepare feedback, not successful server submission.

Server-side feedback collection requires a future approved data flow, purpose, consent basis where applicable, retention rule, endpoint, abuse controls, and privacy update.

## M12. SEO / GEO / Entity Authority — APPROVED

Requirements:

- EN self-canonical `/inco/` and AR self-canonical `/ar/inco/`.
- Reciprocal hreflang and x-default.
- Truthful language-specific title/meta/Open Graph/structured data.
- INCO represented as `WebApplication` or appropriate equivalent where accurate.
- Mostafa Gad linked as creator/founder where visible and truthful.
- Semantic heading structure.
- Stable URLs and source-grounded public content.
- Contextual internal links to relevant MostafaGad.net authority content.
- No fake ratings/reviews/certifications/authority signals.
- No mass thin pages or GEO hacks.
- `llms.txt` is not a launch requirement.

---

# 5. Business and Validation Rules

## General rules

- Verified rules before certainty.
- Missing material information must not be guessed.
- Source unavailability must not be converted into confidence.
- Current provider/authority-controlled facts require confirmation when live data is unavailable.
- Critical safety/compliance warnings are never hidden.
- User willingness to accept risk does not remove authority/carrier requirements.
- The deterministic website result is authoritative over chat interpretation.

## Input validation principles

- Required material fields must be validated for presence and consistency.
- Country identifiers should use valid supported codes/values.
- Dates must be valid and materially relevant to rule applicability.
- Cargo description must be sufficiently clear for the rules being applied.
- Unknown composition/hazard status must remain explicit rather than silently defaulting to safe.
- Invalid or incomplete requests should produce a controlled error/missing-information path, not an invented recommendation.

## Safety / compliance examples that are product rules

- Unknown chemical without SDS/composition: do not release or describe as non-dangerous; obtain missing technical evidence and qualified assessment.
- Damaged lithium battery by air: do not confirm acceptance; require qualified DG assessment and written acceptance from actual operating airline/carrier.
- Russia-related transaction: enhanced transaction-specific compliance review required.
- Unsupported destination: no definitive local clearance/duty/approval claim; general candidate guidance only and local official/provider confirmation.
- Requested current rate/capacity/cut-off/booking when no live source exists: use `source_unavailable`; do not invent.

---

# 6. Data and Privacy Principles

## Shipment-case data

Approved intent:

- evaluate in browser;
- do not intentionally send to remote INCO evaluation API;
- do not deliberately persist in customer database;
- do not write shipment/result values to localStorage, sessionStorage, IndexedDB, cookies, URL query strings, analytics payloads, or third-party scripts without a new explicit approval.

## Technical hosting data

Normal web-hosting/security infrastructure may process request metadata such as IP address, user agent, time, requested asset, status code, and security information. Actual production behavior and retention require hosting validation before Privacy publication.

## Confidentiality

Do not request or encourage unnecessary confidential identifiers. MyGPT and other external links are separate service boundaries.

---

# 7. Knowledge, Sources, and RAG Governance

## Source hierarchy

Prefer, in order:

1. Applicable official law/regulation/government service.
2. Official international safety/transport source.
3. Official carrier rule, guide, tariff, or operational notice.
4. Official port, airport, postal, customs, or road authority guidance.
5. Approved technical publication with acceptable usage rights.
6. Reputable secondary material for discovery only.
7. Provider/user declaration, clearly labeled as self-declared.

Executable rules must be traceable, testable, versioned, and effective/review dated where relevant.

## Public build governance

Public artifacts must not expose:

- internal or private source material;
- protected/licensed text;
- credentials, secrets, passwords, tokens;
- customer data;
- internal rule corpus not approved for publication.

`INTERNAL-TRADE-001` is an internal source identifier and must not be exposed in public artifacts.

## MyGPT RAG governance

MyGPT Knowledge uses the governed `01–08` pack only. Hidden instructions, private sources, restricted materials, and internal files must never be disclosed even if a user requests or claims to authorize disclosure.

---

# 8. Intended Technical Boundaries — NOT AN IMPLEMENTATION CERTIFICATION

The following are approved/intended constraints from product decisions. Codex must verify the actual repository before relying on them:

- Rules-first deterministic domain core.
- Static browser V1 public experience.
- Same-origin approved public JSON knowledge assets.
- No production database/auth/payment requirement for V1.
- No LLM dependency for the deterministic result.
- Build/test tooling may use Node.js; public runtime should not require Node.js.
- Hosting target is Neom Cloud / parent MostafaGad.net environment.
- EN and AR must be independently crawlable routes.
- No remote shipment evaluation API should be necessary for V1.

These are intended architectural constraints, not proof that the repository currently implements them correctly.

---

# 9. Navigation and Route Map

## Public routes

```text
/products/                 Product discovery hub
  -> /inco/                INCO English product/application

/ar/products/              Arabic product discovery hub
  -> /ar/inco/             INCO Arabic product/application

/products/inco/            301 -> /inco/        if route exists
/ar/products/inco/         301 -> /ar/inco/     if route exists
```

## Language switching

```text
/inco/      -> language switch -> /ar/inco/
/ar/inco/   -> language switch -> /inco/
```

A JS-only same-URL translation experience is not sufficient for final production crawlability.

## External route

```text
INCO Result
  -> user manually chooses MyGPT CTA
  -> external ChatGPT URL
  -> no automatic case/result/query data transfer
```

---

# 10. Core User Flows

## F01. Standard shipment check

```text
Entry (/inco/ or /ar/inco/)
→ Review hero / service boundary
→ Enter shipment facts
→ Validate inputs
→ Run deterministic evaluation
→ Receive one approved decision state
→ Review reasons / route / cargo / destination / risks / missing data / confirmations / sources
→ Review recommended next action
→ Optional privacy-safe copy
→ Optional MyGPT explanation
→ Optional related MostafaGad.net content
```

## F02. Missing critical information

```text
Shipment facts
→ Missing/insufficient material evidence
→ blocked_information_required
→ Show missing information
→ Show why evaluation cannot safely proceed
→ Show required evidence / specialist or authority confirmation
→ User corrects facts and reruns
```

## F03. Confirmation required

```text
Shipment facts
→ deterministic result identifies unresolved external confirmation
→ confirmation_required
→ Show five-part confirmation protocol
→ User obtains provider/authority confirmation externally
→ User may rerun with updated facts
```

## F04. Source/live information unavailable

```text
Request depends on current rate/capacity/schedule/cut-off/booking/acceptance or unavailable source
→ source_unavailable
→ Do not invent current value
→ Identify provider/authority/source required
→ Explain impact
→ Give next action
```

## F05. Enhanced compliance

```text
Material enhanced-compliance trigger
→ enhanced_compliance_required
→ Suspend reliance on general result
→ Request transaction/party/end-use/payment-route facts as appropriate
→ Require qualified/current review
```

## F06. MyGPT companion

```text
Deterministic result exists
→ User clicks approved MyGPT CTA
→ External ChatGPT page opens in new tab
→ No shipment/result data transferred automatically
→ MyGPT may explain/checklist only
→ Website decision state remains controlling
```

## F07. Error path

```text
Invalid input / failed governed asset / evaluation error
→ no fabricated success state
→ clear error or controlled unavailable/missing-information message
→ preserve entered privacy boundary
→ user corrects/retries or obtains external confirmation
```

---

# 11. Screens & UX Map

The approved public experience is a single-page product/application with four approved viewport/language baselines. `Designed` does not mean `Implemented`.

## SCR-01 — English Desktop

- **Figma node:** `2:2`
- **Screen name:** `Desktop / INCO Product Page • EN • V1 APPROVED`
- **Purpose:** Full English desktop shipment decision-support experience.
- **User role:** Anonymous professional user.
- **Entry point:** `/inco/`.
- **Main components:** Header; approved INCO logo; language switcher; logistics hero; service/trust messaging; shipment-facts form; deterministic decision summary; result cards; official-confirmation protocol; recommended next action; MyGPT entry; professional boundary; footer.
- **Inputs:** Shipment facts defined in M01.
- **Outputs:** Controlled decision state, reasons, route/service, cargo status, destination requirements, risks, missing information, confirmations, sources, next action, technical evidence where exposed.
- **Actions:** Run check; language switch; copy result where provided; open MyGPT; navigate relevant parent-site links/legal links.
- **Validation:** Material required fields, consistency, privacy warning, controlled failure states.
- **Related workflow:** F01–F07.
- **Related data:** Shipment case data, public knowledge packs, source/provenance metadata.
- **Design status:** APPROVED.
- **Implementation status:** TECHNICAL VALIDATION REQUIRED.

## SCR-02 — English Mobile

- **Figma node:** `2:150`
- **Screen name:** `Mobile / INCO Product Page • EN • V1 APPROVED`
- **Purpose:** English mobile equivalent of SCR-01.
- **User role:** Anonymous professional user.
- **Entry point:** `/inco/` on mobile.
- **Main components:** Mobile header; logo; language switcher; hero; shipment form; result summary/cards; official confirmation; next action; MyGPT; professional boundary; footer.
- **Inputs:** Same functional inputs as desktop. Planned transaction date was explicitly added to the corrected mobile baseline on 2026-08-07.
- **Outputs:** Same functional result contract as desktop.
- **Actions:** Same core actions; mobile copy/action parity must be preserved.
- **Validation:** Same business validation plus responsive/no-overflow/tap-target requirements.
- **Related workflow:** F01–F07.
- **Related data:** Same as SCR-01.
- **Design status:** APPROVED after date-field correction.
- **Implementation status:** TECHNICAL VALIDATION REQUIRED.

## SCR-03 — Arabic Desktop RTL

- **Figma node:** `40:2`
- **Screen name:** `Desktop / INCO Product Page • AR • RTL • V1 APPROVED`
- **Purpose:** Full Arabic RTL desktop experience.
- **User role:** Anonymous professional user.
- **Entry point:** `/ar/inco/`.
- **Main components:** Arabic/RTL equivalents of SCR-01 with specialist terminology allowed to remain English where clearer.
- **Inputs/Outputs/Actions:** Same functional contract as EN.
- **Validation:** Same product rules plus `lang=ar`, RTL direction, bilingual terminology, punctuation, alignment, reading order, and accessibility.
- **Related workflow:** F01–F07.
- **Related data:** Same governed data contract.
- **Design status:** APPROVED.
- **Implementation status:** TECHNICAL VALIDATION REQUIRED.

## SCR-04 — Arabic Mobile RTL

- **Figma node:** `45:2`
- **Screen name:** `Mobile / INCO Product Page • AR • RTL • V1 APPROVED`
- **Purpose:** Arabic mobile shipment decision-support experience.
- **User role:** Anonymous professional user.
- **Entry point:** `/ar/inco/` on mobile.
- **Main components:** Arabic mobile equivalents of SCR-02.
- **Inputs:** Same functional inputs. `تاريخ المعاملة المتوقع` was added to the corrected baseline on 2026-08-07.
- **Outputs:** Same functional result contract.
- **Actions:** Same mobile action contract.
- **Validation:** RTL, no clipping/overflow, correct Arabic general UI copy, permitted specialist English terminology, accessible tap/focus behavior.
- **Related workflow:** F01–F07.
- **Related data:** Same governed data contract.
- **Design status:** APPROVED after corrections.
- **Implementation status:** TECHNICAL VALIDATION REQUIRED.

## SCR-05 — Terms of Use

- **Purpose:** Public legal/service-boundary page or parent-site legal route linked from INCO.
- **User role:** Anonymous visitor.
- **Entry point:** Footer / pre-use notice.
- **Main components:** Service scope; preliminary-support boundary; user responsibilities; prohibited use; external-services boundary; IP/open-source boundary; unresolved legal clauses once approved.
- **Inputs:** None.
- **Outputs:** Terms content.
- **Actions:** Return to INCO / follow relevant legal links.
- **Validation:** Must not publish invented jurisdiction/liability wording.
- **Status:** MISSING VISUAL DESIGN / DRAFT CONTENT EXISTS / DESIGN REQUIRED if no parent-site template is reused.
- **Implementation status:** TECHNICAL VALIDATION REQUIRED.

## SCR-06 — Privacy Notice

- **Purpose:** Explain V1 local case processing, technical hosting logs, tracking status, clipboard behavior, MyGPT boundary, and retention facts.
- **User role:** Anonymous visitor.
- **Entry point:** Footer / pre-use notice.
- **Main components:** Data categories; processing; hosting logs; cookies/analytics; retention; external services; security/contact.
- **Inputs:** None.
- **Outputs:** Privacy notice.
- **Actions:** Return to INCO / follow external privacy links where appropriate.
- **Validation:** Must match actual hosting/analytics configuration before publication.
- **Status:** MISSING VISUAL DESIGN / DRAFT CONTENT EXISTS / HOSTING VALIDATION REQUIRED.
- **Implementation status:** TECHNICAL VALIDATION REQUIRED.

## No V1 screens approved for

- Authentication/login.
- Dashboard.
- Saved cases.
- Billing/payment.
- Document upload.
- Admin console.
- Broker marketplace.
- Paid report generation.
- Container-load planner.

These must not be inferred from historical brainstorming.

---

# 12. Figma / Visual Design Preservation

## File

`https://www.figma.com/design/ukiYrUNG1zs38GMS3edxJ2`

## Organized page structure

1. `00 • FILE GUIDE & STATUS`
2. `01 • INCO LOGO MASTER • APPROVED`
3. `10 • APPROVED V1 BASELINES • DO NOT EDIT`
4. `20 • COMPONENTS & TOKENS • CONTROLLED`
5. `90 • QA & IMPLEMENTATION NOTES`
6. `99 • ARCHIVE • DO NOT USE`

## Approved assets / nodes

- EN Desktop `2:2`.
- EN Mobile `2:150`.
- AR Desktop RTL `40:2`.
- AR Mobile RTL `45:2`.
- V1 closure note `48:2`.
- Primary logo master `31:12`, locked.
- MyGPT sections:
  - EN Desktop `12:26`
  - EN Mobile `12:33`
  - AR Desktop `40:156`
  - AR Mobile `45:84`

Approved frames and logo are locked. Archive content must not be used for production implementation.

Do not redraw, reconstruct, stretch, recolor, crop, or approximate the logo.

## Design preservation gaps

- Dedicated Terms and Privacy page designs are not recorded as approved Figma screens in the current product source. `DESIGN PRESERVATION REQUIRED` if bespoke INCO legal pages are needed rather than approved parent-site templates.
- Codex must inspect live Figma nodes, not rely on screenshots or old exported descriptions.

---

# 13. SEO / GEO / MostafaGad.net Integration

## Entity relationship

`Mostafa Gad` → professional domain expertise → `INCO` → structured, source-governed decision support.

## Canonical architecture

- EN: `https://mostafagad.net/inco/`
- AR: `https://mostafagad.net/ar/inco/`

## Search/GEO principles

- Target real problem intent: shipment readiness, import/export requirements, DG pre-screen, destination requirements, missing SDS/chemical facts, damaged batteries, freight-quotation readiness, and decision uncertainty.
- Arabic should express the same problems naturally, not through literal keyword stuffing.
- Public answer/content structures should make known facts, missing information, risk, authority/provider, source, impact, and next action easy to retrieve and cite.
- Structured data must match visible content and may connect INCO to Mostafa Gad as creator/founder.
- Do not fabricate ratings, certifications, endorsements, live status, or authority.
- No duplicate indexable INCO detail pages.

---

# 14. Governance Precedence

For INCO-specific conflicts, apply this order:

1. `PROJECT_CONTEXT.md` for stable product/business requirements.
2. `CURRENT_STATE.md` for current phase/status/open items.
3. Latest approved INCO ADRs and explicit owner decisions, especially ADR-008, ADR-009, ADR-010.
4. Live approved Figma baselines for visual/interaction design.
5. Current Codex pre-execution gate / task for execution instructions.
6. Parent MostafaGad.net V3 rules for non-conflicting cross-site integration.
7. Historical INCO/parent documents only as background where superseded.

When a historical document conflicts with this consolidated context, do not resurrect the old requirement without owner approval.

---

# 15. Conflict Governance

Codex may propose and implement a technical correction when it does not change approved product requirements.

If a correction changes any of the following, stop and classify it `CTO / PRODUCT OWNER DECISION REQUIRED`:

- Product scope.
- Business rule or controlled state.
- User journey.
- Approved screen behavior or visual hierarchy.
- Commercial/free model.
- Data ownership or retention.
- Major architecture boundary.
- Integration strategy.
- Security/privacy policy.
- Brand positioning or canonical route model.

---

# 16. Codex Technical Review Requirement

The next technical phase must compare:

```text
Approved Product Requirements
        ↓
GitHub Documentation
        ↓
Actual Repository
        ↓
Actual Data / APIs / Routing / Architecture
        ↓
Actual Implementation
```

Codex must detect and report:

- Architecture conflicts.
- Requirement conflicts.
- Missing or incorrect implementation.
- Duplicate logic.
- Dead code.
- Technical debt.
- Security/privacy issues.
- Data-model inconsistencies.
- Routing/canonical/hreflang conflicts.
- Integration problems.
- Scalability and maintainability risks.
- Missing tests.
- Documentation drift.

This closure does not pre-approve the architecture merely because it was described in earlier documentation.

---

# 17. Governing Product Principle

**Rules before certainty. Missing information before guessing. Confirmation before commitment. Deterministic result before AI explanation. Professional value before marketing friction.**
