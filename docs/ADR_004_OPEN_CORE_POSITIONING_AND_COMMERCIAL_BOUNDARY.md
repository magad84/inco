# ADR-004: Open Core Positioning and Commercial Boundary

**Status:** Approved  
**Date:** 2026-08-06  
**Owner:** Mostafa Gad

## Decision

INCO is positioned first as an open professional showcase, trust-building platform, and consulting lead-generation asset. Direct SaaS revenue remains a secondary hypothesis to be validated by real usage.

The public repository exposes the deterministic core, schemas, representative datasets, test scenarios, architecture, governance methods, and an internal/demo console.

Protected knowledge operations and commercial services remain outside the public core.

The public core is licensed under the **Apache License, Version 2.0**.

## Public Core

The Apache-licensed public layer may include:

- deterministic decision logic;
- schemas and validation rules;
- representative source-governed datasets;
- sample country, carrier, gateway, route, cargo, and trade-term rules;
- automated tests and UAT evidence;
- architecture and source-governance documentation;
- a non-production demo or internal console;
- contribution guidance and roadmap.

## Protected Knowledge Operations

The following are not exposed or licensed merely because the repository is public:

- protected or licensed source files and restricted wording;
- `INTERNAL-TRADE-001` source content;
- customer, shipment, counterparty, payment, identity, or commercial data;
- credentials, tokens, private endpoints, and operational secrets;
- private company-specific rule packs;
- paid data and proprietary normalized datasets;
- expert-reviewed customer reports;
- private deployment configuration;
- managed services and private operational workflows.

## Commercial Layer

Revenue is expected primarily from:

1. consulting and transformation leads;
2. training and workshops;
3. expert-reviewed decision packs;
4. company-specific rule packs;
5. private or managed deployments;
6. white-label implementations;
7. professional load-planning and advanced workflow modules;
8. future business workspaces and saved-case services.

Individual subscription revenue is not treated as the primary business case until usage evidence supports it.

## Licensing Decision

The approved license for the public core is:

> Apache License 2.0

The license permits use, modification, distribution, and commercial use of the licensed public core, subject to its terms. It also includes an express patent-license grant and requires preservation of the license and applicable attribution notices.

The license does not grant rights to:

- protected or licensed materials not included in the public core;
- customer or private operational data;
- private rule packs or managed-service content;
- credentials or internal deployment configuration;
- the INCO name, visual identity, logos, or Mostafa Gad name as trademarks, endorsements, certifications, or indications of affiliation beyond reasonable attribution.

Repository files `LICENSE` and `NOTICE` govern the licensed public distribution.

## Contribution Rule

Unless explicitly stated otherwise, contributions intentionally submitted for inclusion in the public core are accepted under Apache License 2.0, consistent with Section 5 of the license.

Contributors must not submit:

- third-party confidential or restricted content;
- customer or shipment data;
- protected source text;
- secrets or credentials;
- content they do not have the right to license.

## Success Measures

The project will be evaluated by:

- qualified professional traffic and repository engagement;
- invitations to speak, teach, consult, or collaborate;
- credible demonstrations of product, operations, and supply-chain leadership;
- reuse of the architecture and governance approach;
- business enquiries and private implementation opportunities;
- evidence of which outputs users are willing to pay for.
