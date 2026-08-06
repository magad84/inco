# INCO V1 Project Closure and Codex Handoff

**Closure date:** 2026-08-06  
**Owner and approver:** Mostafa Gad  
**Project status:** V1 DESIGN AND PRODUCT-DEFINITION PHASE CLOSED  
**Next execution owner:** Codex under CTO / Product Owner governance

## 1. V1 Closure Decision

INCO V1 is approved as a bilingual, rules-first international-commerce and logistics decision-support service. The approved V1 scope, product logic, visual direction, bilingual layouts, logo governance, privacy boundary, and public deployment target are frozen for implementation.

No redesign, repositioning, or scope expansion is permitted during implementation without explicit owner approval.

## 2. Public Product and Deployment Target

- Required public URL: `https://mostafagad.net/inco`
- Hosting target: Neom Cloud cPanel
- Deployment path: `public_html/inco`
- Runtime: static HTML, CSS, JavaScript, and approved JSON knowledge assets
- No Node.js, npm, database, Docker, Redis, Qdrant, or AI provider is required in production

## 3. Source Repositories and Design Files

- GitHub repository: `https://github.com/magad84/inco`
- Figma file: `https://www.figma.com/design/ukiYrUNG1zs38GMS3edxJ2`
- Figma logo master: `https://www.figma.com/design/ukiYrUNG1zs38GMS3edxJ2?node-id=31-3`
- English Desktop: `https://www.figma.com/design/ukiYrUNG1zs38GMS3edxJ2?node-id=2-2`
- English Mobile: `https://www.figma.com/design/ukiYrUNG1zs38GMS3edxJ2?node-id=2-150`
- Arabic Desktop RTL: `https://www.figma.com/design/ukiYrUNG1zs38GMS3edxJ2?node-id=40-2`
- Arabic Mobile RTL: `https://www.figma.com/design/ukiYrUNG1zs38GMS3edxJ2?node-id=45-2`

## 4. Approved Figma Frames

- `Desktop / INCO Product Page • EN • V1 APPROVED`
- `Mobile / INCO Product Page • EN • V1 APPROVED`
- `Desktop / INCO Product Page • AR • RTL • V1 APPROVED`
- `Mobile / INCO Product Page • AR • RTL • V1 APPROVED`

The only approved logo source is:

- Page: `00 • INCO LOGO MASTER • APPROVED`
- Master node: `31:12`

The logo must not be redrawn, reconstructed, stretched, recolored, cropped, or approximated.

## 5. Approved Product Model

- Free, limited professional service
- No registration or payment
- No saved shipment cases
- No document uploads
- No persistent customer database
- Deterministic rules-first output
- English LTR and Arabic RTL
- Browser-side processing with no intentional shipment-case transmission
- Controlled result states and explicit uncertainty
- Official-confirmation protocol when carrier, customs, regulator, or destination confirmation is required
- MyGPT is a conversational companion only and cannot override the deterministic engine

## 6. Approved V1 Markets

Primary destinations:

- UAE
- Saudi Arabia
- Egypt
- Oman

Priority origins include China, India, Turkey, Italy, United States, Russia with enhanced-compliance controls, and Australia.

## 7. Implementation Rules for Codex

1. Read `CURRENT_STATE.md` and the approved governance and deployment documents before editing code.
2. Treat the deterministic domain core as the authority for decisions and states.
3. Implement the four approved Figma frames faithfully and responsively.
4. Preserve the approved logo master and brand colors.
5. Preserve Arabic RTL behavior, field logic, card hierarchy, privacy text, and official-confirmation presentation.
6. Do not add live prices, schedules, capacity, cut-offs, acceptance, customs approval, permits, or clearance claims.
7. Do not introduce registration, payment, persistent storage, uploads, or analytics without approval.
8. Keep MyGPT gated until its final Knowledge Pack, one-time final instruction revision, mandatory audit scenarios, and explicit owner approval are complete.
9. Maintain static deployment compatibility with Neom Cloud cPanel.
10. Run all tests, static builds, leakage checks, and CodeQL before handoff.

## 8. Locked MyGPT Final Audit Gate

The MyGPT public link must remain disabled until all of the following are complete:

1. Prepare and approve the final governed MyGPT Knowledge Pack from the same approved master knowledge used by the browser release.
2. Update the MyGPT instructions once only after the coded application, decision states, output fields, bilingual wording, and official-confirmation protocol are stable.
3. Run and record all mandatory review scenarios in `docs/MYGPT_INCO_REVIEW_v1.0.md`.
4. Correct any material failure and rerun affected and regression scenarios.
5. Obtain explicit approval from Mostafa Gad to expose the MyGPT public link.

No Codex implementation, deployment, visual completion, or website launch decision may be interpreted as automatic approval of the conversational assistant.

## 9. Remaining Execution Work

The project is closed as a V1 design and product-definition package, but the following implementation and launch tasks remain:

- implement the approved Figma UI in the repository;
- reconcile final bilingual copy with runtime strings;
- run browser, mobile, RTL, and accessibility QA;
- run full automated tests and static build;
- produce and inspect the deployment artifact;
- prepare the final MyGPT Knowledge Pack;
- execute the one-time final MyGPT instruction update after application stability;
- run and record the full MyGPT audit scenarios;
- keep the MyGPT public link disabled until explicit approval;
- deploy to Neom Cloud;
- validate live HTTPS, paths, cache behavior, and rollback;
- connect the page to MostafaGad.net navigation, sitemap, and internal links.

## 10. Change Control

INCO V1 is closed. Any change to the product scope, public positioning, logo, information architecture, result hierarchy, official-confirmation protocol, MyGPT role, privacy boundary, deployment target, or approved bilingual layouts requires explicit approval from Mostafa Gad and a new versioned decision record.
