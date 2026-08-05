import { createServer } from "node:http";
import { readFileSync } from "node:fs";
import { extname, resolve } from "node:path";
import { evaluateUatRequest, type DestinationCountryRule, type TradeLaneCorridor, type UatEvaluationRequest } from "./index.js";

const root = resolve(process.cwd(), "../..");
const uiRoot = resolve(root, "packages/uat-ui");
const corridors = (JSON.parse(readFileSync(resolve(root, "knowledge/trade-lanes/launch-corridors.v0.1.json"), "utf8")) as { corridors: TradeLaneCorridor[] }).corridors;
const ruleFileByCountry: Record<string, string> = {
  AE: "uae.v0.1.json",
  SA: "ksa.v0.1.json",
  EG: "egypt.v0.1.json",
  OM: "oman.v0.1.json",
};

function loadRules(countryCode: string): DestinationCountryRule[] {
  const file = ruleFileByCountry[countryCode];
  if (!file) return [];
  return (JSON.parse(readFileSync(resolve(root, "knowledge/country-rules", file), "utf8")) as { rules: DestinationCountryRule[] }).rules;
}

function sendJson(response: import("node:http").ServerResponse, status: number, body: unknown): void {
  response.writeHead(status, { "content-type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(body));
}

const mime: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
};

const server = createServer((request, response) => {
  if (request.method === "POST" && request.url === "/api/evaluate") {
    let body = "";
    request.on("data", (chunk) => { body += chunk; });
    request.on("end", () => {
      try {
        const payload = JSON.parse(body) as UatEvaluationRequest;
        const result = evaluateUatRequest(payload, {
          corridors,
          destinationRules: loadRules(payload.destinationCountry.trim().toUpperCase()),
        });
        sendJson(response, 200, result);
      } catch (error) {
        sendJson(response, 400, { error: error instanceof Error ? error.message : "Invalid request" });
      }
    });
    return;
  }

  const path = request.url === "/" ? "index.html" : (request.url ?? "/").replace(/^\//, "");
  if (!/^(index\.html|app\.js|styles\.css)$/.test(path)) {
    response.writeHead(404).end("Not found");
    return;
  }
  response.writeHead(200, { "content-type": mime[extname(path)] ?? "text/plain" });
  response.end(readFileSync(resolve(uiRoot, path)));
});

const port = Number(process.env.PORT ?? 4173);
server.listen(port, () => process.stdout.write(`INCO UAT console: http://localhost:${port}\n`));
