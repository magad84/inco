# ADR-005: Provider-Agnostic AI Explanation Strategy

**Status:** Approved  
**Date:** 2026-08-06  
**Owner:** Mostafa Gad

## Decision

INCO will use an optional provider-agnostic AI explanation layer for the public demo.

Default provider order:

1. OpenRouter free-tier compatible endpoint.
2. Self-hosted Ollama on the Neom Cloud VPS as fallback.
3. Deterministic output only when both AI providers are unavailable or disabled.

The deterministic engine remains the sole source of truth. AI may explain, summarize, translate, and improve readability, but it may not alter decision states, remove warnings, invent sources, certify cargo, confirm carrier acceptance, or override authority and specialist confirmation requirements.

## Data Boundary

Only a sanitized projection of the deterministic result may be sent to a cloud provider. The cloud payload must exclude:

- personal data;
- customer, company, counterparty, invoice, account, and shipment identifiers;
- uploaded documents;
- credentials and secrets;
- protected or licensed source content;
- private rule packs;
- commercially sensitive free text not required for explanation.

## Configuration

The provider is selected through environment variables, not hard-coded model names.

Example:

```text
AI_EXPLANATION_ENABLED=true
AI_PROVIDER=openrouter
AI_MODEL=openrouter/free
AI_FALLBACK_PROVIDER=ollama
OLLAMA_BASE_URL=http://127.0.0.1:11434
```

Provider availability, free-tier limits, model names, prices, and terms are volatile and must be reviewed before deployment.

## Failure Behavior

AI failure must never block the deterministic result. The user receives the structured engine output with a clear statement that the optional explanation is unavailable.
