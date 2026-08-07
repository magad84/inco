# INCO Privacy Notice — V1 Launch Draft

**Status:** DRAFT FOR OWNER / LEGAL REVIEW  
**Date:** 2026-08-07  
**Applies to:** `https://mostafagad.net/inco`

> This draft describes the intended V1 technical data flow. It must be reconciled with the actual MostafaGad.net / Neom Cloud hosting configuration, server-log retention, analytics settings, and applicable privacy requirements before publication.

## 1. V1 Design Principle

INCO V1 is designed as an anonymous browser-based decision-support service with:

- no user account;
- no payment;
- no saved shipment cases;
- no document upload;
- no persistent customer database for shipment assessments;
- deterministic evaluation in the browser using same-origin public knowledge assets.

## 2. Shipment Information Entered by the User

The service may ask for shipment facts such as:

- origin country;
- country of export or dispatch where applicable;
- destination country;
- planned transaction date;
- transport mode;
- cargo category;
- physical state;
- technical description;
- known hazard indicators;
- special-handling indicators;
- whether composition is known;
- other material facts required by the deterministic rules.

Users should not enter names, account numbers, invoice numbers, banking details, passwords, credentials, confidential contracts, or unnecessary personal or proprietary information.

## 3. How Shipment-Case Data Is Processed

The approved V1 architecture evaluates shipment-case values in the user's browser using the INCO deterministic engine and same-origin governed JSON knowledge files.

INCO does not intentionally transmit shipment-case values to a remote INCO evaluation API and does not intentionally persist the shipment case in a customer database.

The public implementation must not store shipment or result values in localStorage, sessionStorage, IndexedDB, cookies, URL query strings, analytics payloads, or third-party scripts unless a later change is separately approved and this notice is updated.

## 4. Ordinary Website / Hosting Technical Data

Accessing the website may cause ordinary web-hosting or security infrastructure to process technical request data such as:

- IP address;
- user agent / browser information;
- date and time;
- requested page or asset;
- HTTP status and security-related request information.

This technical data is distinct from the shipment-case content entered into the INCO form.

**OWNER / HOSTING REVIEW REQUIRED:** confirm the actual Neom Cloud / MostafaGad.net logging configuration, purposes, access, retention period, and deletion practices before public publication.

## 5. Cookies and Analytics

Approved INCO V1 does not require cookies, tracking, or analytics for the deterministic shipment assessment.

No analytics, advertising trackers, third-party chat widgets, or behavioral tracking should be added as part of the final visual alignment unless separately approved, privacy-reviewed, and reflected in this notice and any consent mechanism required by applicable law.

**LAUNCH VERIFICATION REQUIRED:** confirm the parent website or hosting layer does not automatically introduce unreviewed trackers into the INCO route.

## 6. Clipboard Functions

When a user chooses a copy action, INCO may write the selected result or feedback summary to the browser clipboard. This occurs only after the user's action and is intended to remain on the user's device.

## 7. Feedback

The approved pre-launch feedback pattern is local-only: it may prepare a feedback summary for the user to copy. It must not silently transmit or store feedback responses.

Any future server-side feedback collection requires an approved endpoint, purpose, privacy notice, retention rule, consent basis where applicable, abuse controls, and owner approval.

## 8. MyGPT / ChatGPT Boundary

The INCO website may link to the INCO Assistant on ChatGPT as a separate external service.

The approved link must not automatically transfer shipment form values, result content, query parameters, personal information, confidential information, or local browser-storage values.

Once a user opens ChatGPT, use of that service is subject to the third party's own account, privacy, and service terms. Users should not share confidential information unless they are satisfied that doing so is appropriate.

## 9. External Links

Links to authorities, carriers, external websites, GitHub, ChatGPT, or other third parties may lead to services with their own privacy practices. INCO does not control those external privacy practices.

## 10. Security

The public build is designed to exclude private, internal, licensed, credential, secret, and protected source material. Users should nevertheless avoid entering unnecessary confidential or identifying data.

## 11. Retention

Shipment-case values: intended V1 model is no deliberate persistent storage by INCO.

Technical hosting/security logs: **actual retention period must be confirmed from the production hosting configuration before publication**.

## 12. Contact and Rights Requests

Use the official privacy/contact route published on MostafaGad.net for privacy questions, correction requests, or other applicable requests.

The exact rights available to an individual may depend on applicable law and jurisdiction.

## 13. Changes to This Notice

This notice should be reviewed whenever INCO introduces or changes analytics, accounts, document uploads, saved cases, payment, feedback collection, AI data transfer, live integrations, or other data-processing behavior.

## 14. Effective Date

Draft prepared: 7 August 2026.  
Public effective date: **to be set after hosting/privacy verification and launch approval**.
