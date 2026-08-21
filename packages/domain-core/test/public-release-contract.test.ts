import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";

const root = resolve(process.cwd(), "../..");
const en = readFileSync(resolve(root, "packages/uat-ui/index.html"), "utf8");
const ar = readFileSync(resolve(root, "packages/uat-ui/ar.html"), "utf8");
const enCompact = en.replace(/\s+/g, " ");
const arCompact = ar.replace(/\s+/g, " ");
const app = readFileSync(resolve(root, "packages/uat-ui/app.js"), "utf8");
const build = readFileSync(resolve(root, "scripts/build-public.mjs"), "utf8");

test("EN and AR are independent self-canonical crawlable routes", () => {
  assert.match(
    enCompact,
    /rel="canonical" href="https:\/\/mostafagad\.net\/inco\/"/,
  );
  assert.match(
    arCompact,
    /rel="canonical" href="https:\/\/mostafagad\.net\/ar\/inco\/"/,
  );
  for (const document of [enCompact, arCompact]) {
    assert.match(
      document,
      /hreflang="en" href="https:\/\/mostafagad\.net\/inco\/"/,
    );
    assert.match(
      document,
      /hreflang="ar" href="https:\/\/mostafagad\.net\/ar\/inco\/"/,
    );
    assert.match(
      document,
      /hreflang="x-default" href="https:\/\/mostafagad\.net\/inco\/"/,
    );
    assert.match(document, /"@type":\s*"WebApplication"/);
    assert.match(document, /"isAccessibleForFree":\s*true/);
  }
  assert.match(build, /"ar\/inco"/);
});

test("browser runtime preserves the anonymous local-evaluation boundary", () => {
  assert.doesNotMatch(
    app,
    /localStorage|sessionStorage|indexedDB|document\.cookie/,
  );
  assert.doesNotMatch(app, /fetch\(|XMLHttpRequest|sendBeacon|\/api\/evaluate/);
  assert.match(app, /import\("\.\/engine\.js"\)/);
  assert.match(en, /No registration/);
  assert.doesNotMatch(
    en + ar,
    /small fee|paid tier|premium plan|subscription|feedback/i,
  );
});

test("V1.1 navigation and accessibility requirements remain explicit", () => {
  for (const document of [en, ar]) {
    assert.match(document, /id="exportCountry"/);
    assert.match(document, /id="transactionDate"/);
    assert.match(document, /id="professional-boundary"/);
    assert.match(document, /id="copyResult"/);
    assert.match(document, /MostafaGad\.net \/ (?:Products|المنتجات)/);
  }
});
