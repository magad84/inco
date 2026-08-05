# INCO Customs-Broker Marketplace Specification

**Version:** 0.1  
**Date:** 2026-08-05  
**Status:** Future-module specification under WP-02

## 1. Purpose

Create a controlled marketplace where users can discover and contact customs-clearance providers registered on INCO and matched to the shipment context.

The marketplace is not an unverified directory and must not imply government endorsement.

## 2. Launch Boundary

The marketplace is not part of the first deterministic calculator release. It may proceed after:

- Provider data model approval.
- country-specific license-verification process.
- privacy and consent design.
- complaints and suspension process.
- ranking policy.
- commercial terms.

Initial countries:

- UAE.
- Saudi Arabia.
- Egypt.
- Oman.

## 3. Provider Types

- Customs-clearance company.
- Licensed customs broker.
- Customs consultant, where legally distinct.
- Freight forwarder with verified clearance capability.
- Specialist dangerous-goods service provider, later.
- Heavy-haul or abnormal-load specialist, later.

A provider must not be shown under a regulated category without appropriate evidence.

## 4. Provider Profile Data

### Identity

- Legal name.
- trade name.
- country.
- registration number.
- tax number where required.
- registered address.
- website.
- official email.
- official phone.
- authorized representative.

### License and verification

- License type.
- issuing authority.
- license number.
- issue date.
- expiry date.
- licensed ports, airports, borders, or customs offices.
- license-status evidence.
- verification source.
- verification date.
- next verification date.
- limitations.

### Coverage

- Countries.
- emirates, provinces, governorates, or regions.
- sea ports.
- airports.
- land borders.
- free zones.
- import, export, transit, temporary admission, or other declared services.

### Cargo expertise

- General cargo.
- food and perishables.
- pharmaceuticals and healthcare.
- chemicals.
- dangerous goods.
- machinery and project cargo.
- automotive.
- electronics.
- e-commerce and express.
- personal effects.
- other supported sectors.

All expertise claims require provider declaration and may require supporting evidence before receiving a verified badge.

### Commercial information

- Quotation method.
- currencies.
- minimum charges if declared.
- working hours.
- response service level.
- languages.
- payment terms.

The platform should avoid publishing a misleading universal price because customs-clearance costs depend on transaction conditions and third-party charges.

## 5. Verification Status

- `APPLIED`
- `DOCUMENTS_PENDING`
- `VERIFICATION_IN_PROGRESS`
- `VERIFIED`
- `VERIFIED_WITH_LIMITATIONS`
- `EXPIRING`
- `EXPIRED`
- `SUSPENDED`
- `REJECTED`

### Verified means

- Provider identity checked.
- relevant current license or registration checked where a public or authority-supported route exists.
- declared coverage reconciled with available evidence.
- contact channel confirmed.

### Verified does not mean

- Government endorsement.
- guaranteed service quality.
- guaranteed customs outcome.
- guaranteed price or response time.
- approval for every cargo type.

## 6. Country Verification Seeds

### UAE

- Verify local customs-clearance licensing based on the relevant emirate/customs administration.
- Federal law recognizes licensed customs brokers, while licensing details are managed by competent customs administrations.
- AEO status may be recorded separately but does not replace customs-broker verification.

### Saudi Arabia

- Use the official customs-clearance license issuance and license-status inquiry services.
- Distinguish customs-clearance licenses from customs-consulting licenses.
- The importer/exporter may authorize a broker through the official trade platform using the broker license number.

### Egypt

- Require evidence of the customs-issued clearance license, commercial registration showing clearance activity, tax registration, and approved representatives.
- Verify current validity through official or direct authority-supported evidence where no public status endpoint is available.

### Oman

- Use the official customs clearance-companies and license-requirements source.
- Record licensed port coverage.
- Require broker course and Bayan-related evidence where applicable.

## 7. Matching Logic

Operational match factors:

1. Country and customs point coverage.
2. Import, export, or transit service.
3. Cargo category.
4. dangerous-goods or special-cargo capability.
5. language.
6. current verification status.
7. availability and response time.
8. user-selected preferences.
9. historical verified transaction feedback.

Paid sponsorship must not alter the operational match score. Sponsored profiles may receive separately labeled visibility.

## 8. Contact Workflow

1. User completes or opens an INCO case.
2. User consents to share selected case data.
3. INCO shows matched verified providers.
4. User selects one or more providers.
5. The platform shares only approved fields.
6. Provider accepts or rejects the lead.
7. User and provider communicate through the approved channel.
8. The platform records response status without reading external private communications unless explicitly designed and consented.

## 9. Minimum Data Sharing

Default shareable fields:

- Origin and destination country.
- customs point if known.
- transport mode.
- cargo category.
- package count.
- gross weight and CBM.
- dangerous-goods pre-screen status.
- requested service.
- required response date.

Do not share by default:

- Full invoice.
- customer identity documents.
- supplier bank details.
- exact commercial price.
- confidential contracts.
- safety data sheets.
- personal addresses.

The user must choose whether to share attachments later.

## 10. Reviews and Quality Signals

Only users linked to an actual platform lead or transaction may submit transaction feedback.

Feedback categories:

- Response speed.
- clarity of quotation.
- communication.
- documentation support.
- service completion.

INCO must not publish allegations involving fraud, crime, or legal violations automatically. Such reports enter a controlled complaint process.

## 11. Complaints and Suspension

Triggers:

- Expired license.
- license mismatch.
- misleading service claims.
- repeated non-response.
- misuse of customer data.
- payment disputes.
- authority notice.
- verified serious complaint.

Possible actions:

- Request correction.
- limit profile claims.
- remove verified badge.
- suspend new leads.
- suspend profile.
- reject or terminate registration.

## 12. Commercial Models

Possible later models:

- Free basic verified listing.
- Annual verification and profile subscription.
- Paid qualified lead.
- Request-for-quotation package.
- Clearly labeled sponsored visibility.
- Company workspace partnership.

Do not charge users merely to see whether a provider is licensed. Monetization should come from provider tools, qualified leads, workflow, or premium services.

## 13. Required Platform Controls

- Google or business-account authentication.
- Provider organization accounts.
- role-based access.
- document upload and secure storage.
- expiry reminders.
- manual verification queue.
- audit log.
- consent record.
- data-retention and deletion process.
- complaint case management.
- sponsored-content labeling.

## 14. Acceptance Criteria Before Launch

- At least one approved license-verification workflow per launch country.
- Clear distinction between verified and self-declared fields.
- Expiry and re-verification automation.
- User consent before data sharing.
- Tested ranking that excludes sponsorship from operational match.
- Complaint and suspension process.
- Privacy notice and provider terms.
- No provider shown as "best" without transparent evidence and comparison criteria.
