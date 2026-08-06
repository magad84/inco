import { createServer, type IncomingMessage, type ServerResponse } from "node:http";
import { readFileSync } from "node:fs";
import { extname, resolve } from "node:path";
import { evaluateUatRequest, type DestinationCountryRule, type TradeLaneCorridor, type UatEvaluationRequest } from "./index.js";

const root = resolve(process.cwd(), "../..");
const uiRoot = resolve(root, "packages/uat-ui");
const corridors = (JSON.parse(readFileSync(resolve(root, "knowledge/trade-lanes/launch-corridors.v0.1.json"), "utf8")) as { corridors: TradeLaneCorridor[] }).corridors;
const ruleFileByCountry: Record<string, string> = { AE: "uae.v0.1.json", SA: "ksa.v0.1.json", EG: "egypt.v0.1.json", OM: "oman.v0.1.json" };
const startedAt = new Date().toISOString();
const MAX_BODY_BYTES = 64 * 1024;
const RATE_WINDOW_MS = 60_000;
const RATE_LIMIT = 30;
const rateBuckets = new Map<string, { count: number; resetAt: number }>();

function loadRules(countryCode: string): DestinationCountryRule[] {
  const file = ruleFileByCountry[countryCode];
  if (!file) return [];
  return (JSON.parse(readFileSync(resolve(root, "knowledge/country-rules", file), "utf8")) as { rules: DestinationCountryRule[] }).rules;
}
function securityHeaders(): Record<string, string> { return {
  "content-security-policy": "default-src 'self'; script-src 'self'; style-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'none'; frame-ancestors 'none'",
  "referrer-policy": "strict-origin-when-cross-origin", "x-content-type-options": "nosniff", "x-frame-options": "DENY",
  "permissions-policy": "camera=(), microphone=(), geolocation=()", "cache-control": "no-store"
}; }
function sendJson(response: ServerResponse, status: number, body: unknown): void { response.writeHead(status, { ...securityHeaders(), "content-type": "application/json; charset=utf-8" }); response.end(JSON.stringify(body)); }
function clientKey(request: IncomingMessage): string { return request.socket.remoteAddress ?? "unknown"; }
function allowRequest(request: IncomingMessage): boolean {
  const now = Date.now(); const key = clientKey(request); const bucket = rateBuckets.get(key);
  if (!bucket || now >= bucket.resetAt) { rateBuckets.set(key, { count: 1, resetAt: now + RATE_WINDOW_MS }); return true; }
  bucket.count += 1; return bucket.count <= RATE_LIMIT;
}
const mime: Record<string, string> = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8" };

const server = createServer((request, response) => {
  request.setTimeout(5_000, () => { if (!response.headersSent) sendJson(response, 408, { error: "Request timeout" }); request.destroy(); });

  if (request.method === "GET" && request.url === "/healthz") { sendJson(response, 200, { status: "ok", service: "inco-public-service", startedAt }); return; }
  if (request.method === "GET" && request.url === "/readyz") {
    const ready = corridors.length > 0 && Object.keys(ruleFileByCountry).length === 4;
    sendJson(response, ready ? 200 : 503, { status: ready ? "ready" : "not_ready", corridorCount: corridors.length, destinationPacks: Object.keys(ruleFileByCountry) }); return;
  }

  if (request.method === "POST" && request.url === "/api/evaluate") {
    if (!allowRequest(request)) { sendJson(response, 429, { error: "Rate limit exceeded" }); return; }
    if (!request.headers["content-type"]?.toLowerCase().startsWith("application/json")) { sendJson(response, 415, { error: "Content-Type must be application/json" }); return; }
    let body = ""; let bytes = 0;
    request.on("data", (chunk: Buffer) => { bytes += chunk.length; if (bytes > MAX_BODY_BYTES) { sendJson(response, 413, { error: "Request body too large" }); request.destroy(); return; } body += chunk.toString("utf8"); });
    request.on("end", () => {
      if (response.writableEnded) return;
      try {
        const payload = JSON.parse(body) as UatEvaluationRequest;
        const result = evaluateUatRequest(payload, { corridors, destinationRules: loadRules(payload.destinationCountry.trim().toUpperCase()) });
        sendJson(response, 200, result);
      } catch (error) { sendJson(response, 400, { error: error instanceof Error ? error.message : "Invalid request" }); }
    });
    return;
  }
  if (request.method !== "GET") { sendJson(response, 405, { error: "Method not allowed" }); return; }
  const path = request.url === "/" ? "index.html" : (request.url ?? "/").replace(/^\//, "");
  if (!/^(index\.html|app\.js|styles\.css)$/.test(path)) { response.writeHead(404, securityHeaders()).end("Not found"); return; }
  response.writeHead(200, { ...securityHeaders(), "content-type": mime[extname(path)] ?? "text/plain" }); response.end(readFileSync(resolve(uiRoot, path)));
});

const port = Number(process.env.PORT ?? 4173);
const host = process.env.HOST ?? "127.0.0.1";
server.listen(port, host, () => process.stdout.write(`INCO public service: http://${host}:${port}\n`));
