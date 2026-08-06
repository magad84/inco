import type { IntegratedDecisionResult } from "./integrated-decision-engine.js";

export type AiProvider = "openrouter" | "ollama" | "disabled";

export interface SanitizedDecisionProjection {
  decisionState: IntegratedDecisionResult["decisionState"];
  criticalRisks: string[];
  missingInformation: string[];
  requiredConfirmations: string[];
  sourceIds: string[];
  reasons: string[];
}

export interface AiExplanationConfig {
  enabled: boolean;
  provider: AiProvider;
  model: string;
  fallbackProvider?: AiProvider;
  fallbackModel?: string;
  openRouterApiKey?: string;
  openRouterBaseUrl?: string;
  ollamaBaseUrl?: string;
  timeoutMs?: number;
}

export interface AiExplanationResult {
  status: "generated" | "unavailable" | "disabled";
  provider: AiProvider;
  model?: string;
  explanation?: string;
  deterministicDecisionState: IntegratedDecisionResult["decisionState"];
  warning: string;
}

export function sanitizeDecisionForAi(result: IntegratedDecisionResult): SanitizedDecisionProjection {
  return {
    decisionState: result.decisionState,
    criticalRisks: [...result.criticalRisks],
    missingInformation: [...result.missingInformation],
    requiredConfirmations: [...result.requiredConfirmations],
    sourceIds: [...result.sources],
    reasons: [...result.reasons],
  };
}

function promptFor(projection: SanitizedDecisionProjection): string {
  return [
    "Explain this deterministic international-trade decision in clear professional language.",
    "Do not change the decision state, remove warnings, add facts, invent sources, or imply carrier/authority approval.",
    "State that the deterministic engine is the source of truth.",
    JSON.stringify(projection),
  ].join("\n");
}

async function postJson(url: string, headers: Record<string, string>, body: unknown, timeoutMs: number): Promise<unknown> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json", ...headers },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    if (!response.ok) throw new Error(`AI provider returned ${response.status}`);
    return response.json();
  } finally {
    clearTimeout(timeout);
  }
}

async function callOpenRouter(config: AiExplanationConfig, prompt: string): Promise<string> {
  if (!config.openRouterApiKey) throw new Error("OPENROUTER_API_KEY is not configured");
  const base = (config.openRouterBaseUrl ?? "https://openrouter.ai/api/v1").replace(/\/$/, "");
  const payload = await postJson(`${base}/chat/completions`, {
    authorization: `Bearer ${config.openRouterApiKey}`,
  }, {
    model: config.model,
    messages: [{ role: "user", content: prompt }],
    temperature: 0.1,
  }, config.timeoutMs ?? 12_000) as { choices?: Array<{ message?: { content?: string } }> };
  const text = payload.choices?.[0]?.message?.content?.trim();
  if (!text) throw new Error("OpenRouter returned no explanation");
  return text;
}

async function callOllama(config: AiExplanationConfig, prompt: string, model: string): Promise<string> {
  const base = (config.ollamaBaseUrl ?? "http://127.0.0.1:11434").replace(/\/$/, "");
  const payload = await postJson(`${base}/api/generate`, {}, {
    model,
    prompt,
    stream: false,
  }, config.timeoutMs ?? 20_000) as { response?: string };
  const text = payload.response?.trim();
  if (!text) throw new Error("Ollama returned no explanation");
  return text;
}

async function callProvider(provider: AiProvider, model: string, config: AiExplanationConfig, prompt: string): Promise<string> {
  if (provider === "openrouter") return callOpenRouter({ ...config, model }, prompt);
  if (provider === "ollama") return callOllama(config, prompt, model);
  throw new Error("AI provider is disabled");
}

export async function explainDecision(
  result: IntegratedDecisionResult,
  config: AiExplanationConfig,
): Promise<AiExplanationResult> {
  const warning = "AI explanation is optional. The deterministic engine result, warnings, sources, and confirmation requirements remain authoritative.";
  if (!config.enabled || config.provider === "disabled") {
    return { status: "disabled", provider: "disabled", deterministicDecisionState: result.decisionState, warning };
  }

  const prompt = promptFor(sanitizeDecisionForAi(result));
  try {
    const explanation = await callProvider(config.provider, config.model, config, prompt);
    return { status: "generated", provider: config.provider, model: config.model, explanation, deterministicDecisionState: result.decisionState, warning };
  } catch {
    const fallback = config.fallbackProvider;
    const fallbackModel = config.fallbackModel ?? config.model;
    if (fallback && fallback !== "disabled" && fallback !== config.provider) {
      try {
        const explanation = await callProvider(fallback, fallbackModel, config, prompt);
        return { status: "generated", provider: fallback, model: fallbackModel, explanation, deterministicDecisionState: result.decisionState, warning };
      } catch {
        // Fall through to deterministic-only output.
      }
    }
    return { status: "unavailable", provider: config.provider, model: config.model, deterministicDecisionState: result.decisionState, warning };
  }
}
