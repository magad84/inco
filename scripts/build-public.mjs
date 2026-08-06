import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const requireFromDomainCore = createRequire(resolve(root, "packages/domain-core/package.json"));
const { build } = requireFromDomainCore("esbuild");
const output = resolve(root, "dist-public");
const ui = resolve(root, "packages/uat-ui");
const knowledgeOutput = resolve(output, "knowledge");

const publicKnowledgeFiles = [
  ["knowledge/trade-lanes/launch-corridors.v0.1.json", "launch-corridors.v0.1.json"],
  ["knowledge/country-rules/uae.v0.1.json", "uae.v0.1.json"],
  ["knowledge/country-rules/ksa.v0.1.json", "ksa.v0.1.json"],
  ["knowledge/country-rules/egypt.v0.1.json", "egypt.v0.1.json"],
  ["knowledge/country-rules/oman.v0.1.json", "oman.v0.1.json"],
];

const forbiddenPatterns = [
  /INTERNAL-TRADE-001/i,
  /internal[_ -]?only/i,
  /private[_ -]?source/i,
  /licensed[_ -]?text/i,
  /api[_ -]?key/i,
  /secret/i,
  /password/i,
];

async function copyGovernedKnowledge(sourceRelative, targetName) {
  const source = resolve(root, sourceRelative);
  const content = await readFile(source, "utf8");
  JSON.parse(content);

  for (const pattern of forbiddenPatterns) {
    if (pattern.test(content)) {
      throw new Error(`Public bundle blocked: forbidden marker ${pattern} in ${sourceRelative}`);
    }
  }

  await writeFile(resolve(knowledgeOutput, targetName), content, "utf8");
}

await rm(output, { recursive: true, force: true });
await mkdir(knowledgeOutput, { recursive: true });

for (const file of ["index.html", "styles.css", "app.js"]) {
  await cp(resolve(ui, file), resolve(output, file));
}

for (const [source, target] of publicKnowledgeFiles) {
  await copyGovernedKnowledge(source, target);
}

await build({
  entryPoints: [resolve(root, "packages/domain-core/src/browser-entry.ts")],
  outfile: resolve(output, "engine.js"),
  bundle: true,
  format: "esm",
  platform: "browser",
  target: ["es2020"],
  minify: true,
  sourcemap: false,
  legalComments: "none",
});

await writeFile(
  resolve(output, "release.json"),
  `${JSON.stringify({ service: "INCO", deployment: "static-browser", generatedAt: new Date().toISOString() }, null, 2)}\n`,
  "utf8",
);

console.log(`Static public bundle created at ${output}`);
