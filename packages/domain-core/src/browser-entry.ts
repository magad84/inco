import type { DestinationCountryRule } from "./country-requirements-evaluator.js";
import type { TradeLaneCorridor } from "./trade-lane-evaluator.js";
import { evaluateUatRequest, type UatEvaluationRequest } from "./uat-evaluation.js";

interface CorridorPack { corridors: TradeLaneCorridor[] }
interface CountryRulePack { rules: DestinationCountryRule[] }

const countryFile: Record<string, string> = {
  AE: "uae.v0.1.json",
  SA: "ksa.v0.1.json",
  EG: "egypt.v0.1.json",
  OM: "oman.v0.1.json",
};

let corridorCache: TradeLaneCorridor[] | undefined;
const countryRuleCache = new Map<string, DestinationCountryRule[]>();

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url, { cache: "no-store", credentials: "same-origin" });
  if (!response.ok) throw new Error(`Knowledge asset unavailable: ${response.status}`);
  return response.json() as Promise<T>;
}

async function loadCorridors(): Promise<TradeLaneCorridor[]> {
  if (!corridorCache) {
    const pack = await fetchJson<CorridorPack>("./knowledge/launch-corridors.v0.1.json");
    corridorCache = pack.corridors;
  }
  return corridorCache;
}

async function loadCountryRules(countryCode: string): Promise<DestinationCountryRule[]> {
  const code = countryCode.trim().toUpperCase();
  const cached = countryRuleCache.get(code);
  if (cached) return cached;

  const file = countryFile[code];
  if (!file) return [];

  const pack = await fetchJson<CountryRulePack>(`./knowledge/${file}`);
  countryRuleCache.set(code, pack.rules);
  return pack.rules;
}

export async function evaluatePublicRequest(request: UatEvaluationRequest) {
  const [corridors, destinationRules] = await Promise.all([
    loadCorridors(),
    loadCountryRules(request.destinationCountry),
  ]);

  return evaluateUatRequest(request, { corridors, destinationRules });
}

export const supportedDestinationCountries = Object.freeze(Object.keys(countryFile));
