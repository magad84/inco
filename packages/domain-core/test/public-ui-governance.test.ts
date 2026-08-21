import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";

const root = resolve(process.cwd(), "../..");
const html = readFileSync(resolve(root, "packages/uat-ui/index.html"), "utf8");
const ar = readFileSync(resolve(root, "packages/uat-ui/ar.html"), "utf8");
const app = readFileSync(resolve(root, "packages/uat-ui/app.js"), "utf8");
const compact = html.replace(/\s+/g, " ");
const arCompact = ar.replace(/\s+/g, " ");

test("public UI is positioned as a free service rather than an internal demo", () => {
  assert.match(compact, /free professional service/i);
  assert.match(compact, /Free professional decision-support service/);
  assert.doesNotMatch(html, /INTERNAL USE ONLY|Internal Test Console/);
});

test("public UI identifies the approved management and supply-chain positioning", () => {
  assert.match(
    compact,
    /Business (?:and|&) Operations Leader with deep supply-chain expertise/,
  );
  assert.match(compact, /assets\/inco-logo\.svg/);
  assert.doesNotMatch(
    compact,
    /Software Developer|AI Engineer|Technical Specialist/,
  );
});

test("public UI states privacy and professional boundaries", () => {
  assert.match(compact, /not intentionally saved or transmitted/);
  assert.match(compact, /preliminary decision support/);
  assert.match(compact, /Do not enter names, invoice numbers, account details/);
});

test("public UI has bilingual and search-discovery foundations", () => {
  assert.match(compact, /application\/ld\+json/);
  assert.match(compact, /WebApplication/);
  assert.match(compact, /https:\/\/mostafagad\.net\/inco\//);
  assert.match(arCompact, /<html lang="ar" dir="rtl">/);
  assert.match(arCompact, /https:\/\/mostafagad\.net\/ar\/inco\//);
  assert.match(app, /document\.documentElement\.lang/);
});

test("approved MyGPT entry is external and transfers no case data", () => {
  const exact =
    /href="https:\/\/chatgpt\.com\/g\/g-6a66319a00a48191a0601bc4039fb159-inco"/;
  assert.match(compact, exact);
  assert.match(arCompact, exact);
  assert.match(compact, /target="_blank" rel="noopener noreferrer external"/);
  assert.doesNotMatch(compact, /chatgpt\.com[^"\s]*[?#]/);
});

test("recommended next steps preserve deterministic safety states", () => {
  for (const state of [
    "candidate",
    "blocked_information_required",
    "enhanced_compliance_required",
    "source_unavailable",
    "confirmation_required",
  ])
    assert.match(app, new RegExp(state));
  assert.doesNotMatch(app, /unsupported_scope/);
});
