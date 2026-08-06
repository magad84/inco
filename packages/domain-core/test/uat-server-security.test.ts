import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";

const root = resolve(process.cwd(), "../..");
const source = readFileSync(resolve(root, "packages/domain-core/src/uat-server.ts"), "utf8");

test("anonymous evaluation endpoint enforces body, timeout, and rate controls", () => {
  assert.match(source, /MAX_BODY_BYTES/);
  assert.match(source, /RATE_LIMIT/);
  assert.match(source, /request\.setTimeout/);
  assert.match(source, /413/);
  assert.match(source, /429/);
  assert.match(source, /415/);
});

test("server emits baseline browser security headers", () => {
  for (const header of [
    "content-security-policy",
    "referrer-policy",
    "x-content-type-options",
    "x-frame-options",
    "permissions-policy",
    "cache-control",
  ]) {
    assert.match(source, new RegExp(header));
  }
});

test("internal console binds to loopback by default", () => {
  assert.match(source, /server\.listen\(port, "127\.0\.0\.1"/);
});
