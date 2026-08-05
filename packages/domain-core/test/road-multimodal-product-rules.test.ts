import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";

const root = resolve(process.cwd(), "../..");
const routeSources = JSON.parse(
  readFileSync(
    resolve(root, "knowledge/source-records/road-multimodal-gcc.v0.1.json"),
    "utf8",
  ),
) as {
  sources: Array<{
    sourceId: string;
    url: string;
    verifiedAt: string;
    reviewBy: string;
    supports: string[];
    doesNotSupport: string[];
    verificationStatus: string;
  }>;
};
const routeData = JSON.parse(
  readFileSync(
    resolve(root, "knowledge/trade-lanes/gcc-road-multimodal.v0.1.json"),
    "utf8",
  ),
) as {
  corridors: Array<{
    tradeLaneId: string;
    mode: string;
    decisionState: string;
    requiredConfirmations: string[];
    riskFlags: string[];
    sourceIds: string[];
    reviewBy: string;
  }>;
};
const productData = JSON.parse(
  readFileSync(
    resolve(root, "knowledge/product-rules/launch-product-controls.v0.1.json"),
    "utf8",
  ),
) as {
  rules: Array<{
    ruleId: string;
    countryCode: string;
    productCategory: string;
    decisionState: string;
    requiredInformation: string[];
    requiredConfirmations: string[];
    sourceIds: string[];
    reviewBy: string;
  }>;
  sources: Array<{ sourceId: string; url: string; verifiedAt: string; reviewBy: string }>;
};

const routeSourceIds = new Set(routeSources.sources.map((source) => source.sourceId));
const productSourceIds = new Set(productData.sources.map((source) => source.sourceId));

test("official road and multimodal sources are review-controlled and explicitly limited", () => {
  assert.equal(new Set(routeSources.sources.map((source) => source.sourceId)).size, routeSources.sources.length);
  for (const source of routeSources.sources) {
    assert.match(source.url, /^https:\/\//);
    assert.ok(Date.parse(source.verifiedAt));
    assert.ok(Date.parse(source.reviewBy));
    assert.ok(source.supports.length > 0);
    assert.ok(source.doesNotSupport.length > 0);
    assert.equal(source.verificationStatus, "verified_partial");
  }
});

test("road and multimodal corridors never imply live route or cargo acceptance", () => {
  assert.equal(new Set(routeData.corridors.map((corridor) => corridor.tradeLaneId)).size, routeData.corridors.length);
  assert.ok(routeData.corridors.some((corridor) => corridor.mode === "road"));
  assert.ok(routeData.corridors.some((corridor) => corridor.mode === "multimodal"));
  for (const corridor of routeData.corridors) {
    assert.equal(corridor.decisionState, "confirmation_required");
    assert.ok(corridor.requiredConfirmations.length >= 6);
    assert.ok(corridor.riskFlags.length > 0);
    assert.ok(Date.parse(corridor.reviewBy));
    for (const sourceId of corridor.sourceIds) assert.ok(routeSourceIds.has(sourceId));
  }
});

test("launch product controls cover medicine food chemical and battery categories", () => {
  assert.deepEqual(
    productData.rules.map((rule) => rule.productCategory).sort(),
    ["battery", "chemical", "food", "pharmaceutical"],
  );
  assert.equal(new Set(productData.rules.map((rule) => rule.ruleId)).size, productData.rules.length);
  for (const rule of productData.rules) {
    assert.ok(["confirmation_required", "blocked_information_required"].includes(rule.decisionState));
    assert.ok(rule.requiredInformation.length >= 8);
    assert.ok(rule.requiredConfirmations.length >= 4);
    assert.ok(Date.parse(rule.reviewBy));
    for (const sourceId of rule.sourceIds) assert.ok(productSourceIds.has(sourceId));
  }
});

test("country-specific product rules retain official-source traceability", () => {
  const saRules = productData.rules.filter((rule) => rule.countryCode === "SA");
  assert.equal(saRules.length, 2);
  for (const rule of saRules) assert.ok(rule.sourceIds.length > 0);

  const generalRules = productData.rules.filter((rule) => rule.countryCode === "ALL");
  assert.equal(generalRules.length, 2);
  for (const rule of generalRules) {
    assert.equal(rule.decisionState, "blocked_information_required");
  }
});
