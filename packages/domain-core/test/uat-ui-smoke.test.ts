import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";

const root = resolve(process.cwd(), "../..");
const html = readFileSync(resolve(root, "packages/uat-ui/index.html"), "utf8");
const js = readFileSync(resolve(root, "packages/uat-ui/app.js"), "utf8");
const server = readFileSync(resolve(root, "packages/domain-core/src/uat-server.ts"), "utf8");
const css = readFileSync(resolve(root, "packages/uat-ui/styles.css"), "utf8");

test("internal UAT UI exposes required scenario inputs and safety boundary", () => {
  for (const id of ["origin", "destination", "transactionDate", "mode", "cargo", "description", "physicalState", "compositionKnown", "hazards", "special", "enhanced", "run", "state", "risks", "sources", "raw"]) {
    assert.match(html, new RegExp(`id=["']${id}["']`));
  }
  assert.match(html, /internal functional testing/i);
  assert.match(html, /does not provide carrier acceptance/i);
});

test("internal UAT UI calls the real deterministic endpoint and renders module outputs", () => {
  assert.match(js, /fetch\("\/api\/evaluate"/);
  assert.match(js, /result\.decisionState/);
  assert.match(js, /result\.lane\.decisionState/);
  assert.match(js, /result\.cargo\.statuses/);
  assert.match(js, /result\.destination\.status/);
  assert.match(js, /result\.criticalRisks/);
  assert.match(js, /result\.sources/);
  assert.match(server, /evaluateUatRequest/);
  assert.match(server, /evaluateIntegratedDecision|\.\/index\.js/);
});

test("internal UAT UI has responsive styling", () => {
  assert.match(css, /@media/);
  assert.match(css, /grid-template-columns/);
});
