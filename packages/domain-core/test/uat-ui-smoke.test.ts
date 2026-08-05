import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";

const root = resolve(process.cwd(), "../..");
const html = readFileSync(resolve(root, "packages/uat-ui/index.html"), "utf8");
const js = readFileSync(resolve(root, "packages/uat-ui/app.js"), "utf8");
const css = readFileSync(resolve(root, "packages/uat-ui/styles.css"), "utf8");

test("internal UAT UI exposes required scenario inputs and safety boundary", () => {
  for (const id of ["origin", "destination", "mode", "cargo", "description", "enhanced", "run", "state"]) {
    assert.match(html, new RegExp(`id=["']${id}["']`));
  }
  assert.match(html, /internal functional testing/i);
  assert.match(html, /does not provide carrier acceptance/i);
});

test("internal UAT UI preserves controlled decision states", () => {
  assert.match(js, /confirmation_required/);
  assert.match(js, /blocked_information_required/);
  assert.match(js, /enhanced_compliance_required/);
  assert.match(js, /counterparty_screening/);
});

test("internal UAT UI has responsive styling", () => {
  assert.match(css, /@media/);
  assert.match(css, /grid-template-columns/);
});
