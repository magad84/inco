# ADR-004: Open Core Positioning and Commercial Boundary

**Status:** Approved  
**Date:** 2026-08-05  
**Owner:** Mostafa Gad

## Decision

INCO is positioned first as an open professional showcase, trust-building platform, and consulting lead-generation asset. Direct SaaS revenue remains a secondary hypothesis to be validated by real usage.

The public repository will expose the deterministic core, schemas, representative datasets, test scenarios, architecture, governance methods, and an internal/demo console.

Protected knowledge operations and commercial services remain outside the public core.

## Public Core

The public layer may include:

- deterministic decision logic;
- schemas and validation rules;
- representative source-governed datasets;
- sample country, carrier, gateway, route, cargo, and trade-term rules;
- automated tests and UAT evidence;
- architecture and source-governance documentation;
- a non-production demo or internal console;
- contribution guidance and roadmap.

## Protected Knowledge Operations

The following must not be exposed merely because the repository is public:

- protected or licensed source files and restricted wording;
- `INTERNAL-TRADE-001` source content;
- customer, shipment, counterparty, payment, identity, or commercial data;
- credentials, tokens, private endpoints, and operational secrets;
- private company-specific rule packs;
- paid data and proprietary normalized datasets;
- expert-reviewed customer reports;
- private deployment configuration.

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

## Licensing Gate

The repository is public, but a specific open-source license is a separate legal and commercial decision. No license file shall be added until the owner approves the selected model after comparing permissive, copyleft, and source-available options.

Until then, public visibility must not be described as a completed open-source licensing decision.

## Success Measures

The project will be evaluated by:

- qualified professional traffic and repository engagement;
- invitations to speak, teach, consult, or collaborate;
- credible demonstrations of product, operations, and supply-chain leadership;
- reuse of the architecture and governance approach;
- business enquiries and private implementation opportunities;
- evidence of which outputs users are willing to pay for.
