import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";

const root = resolve(process.cwd(), "../..");
const html = readFileSync(resolve(root, "packages/uat-ui/index.html"), "utf8");
const app = readFileSync(resolve(root, "packages/uat-ui/app.js"), "utf8");

test("public UI is positioned as a free service rather than an internal demo", () => {
  assert.match(html, /FREE PROFESSIONAL SERVICE/);
  assert.match(html, /Free limited professional service/);
  assert.doesNotMatch(html, /INTERNAL USE ONLY|Internal Test Console/);
});

test("public UI identifies the approved management and supply-chain positioning", () => {
  assert.match(html, /Business and Operations Leader with deep supply-chain expertise/);
  assert.match(html, /<span>INCO<\/span><small>by Mostafa Gad<\/small>/);
  assert.doesNotMatch(html, /Software Developer|AI Engineer|Technical Specialist/);
});

test("public UI states privacy and professional boundaries", () => {
  assert.match(html, /does not intentionally save your shipment case/);
  assert.match(html, /does not replace current carrier acceptance/);
  assert.match(html, /Do not enter names, invoice numbers, account details/);
});

test("public UI has bilingual and search-discovery foundations", () => {
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /WebApplication/);
  assert.match(html, /https:\/\/inco\.mostafagad\.net\//);
  assert.match(app, /const copy =/);
  assert.match(app, /locale === "ar"/);
});

test("recommended next steps preserve deterministic safety states", () => {
  for (const state of ["blocked_information_required","enhanced_compliance_required","source_unavailable","confirmation_required"]) assert.match(app, new RegExp(state));
});
