import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";

const root = resolve(process.cwd(), "../..");
const manifest = JSON.parse(
  readFileSync(resolve(root, "knowledge/asset-manifest.v1.0.json"), "utf8"),
) as {
  version: string;
  groups: Array<{
    classification: string;
    decision: string;
    paths: string[];
  }>;
};
const build = readFileSync(resolve(root, "scripts/build-public.mjs"), "utf8");

test("knowledge manifest is complete, versioned, and points to repository assets", () => {
  assert.equal(manifest.version, "1.0");
  assert.deepEqual(
    manifest.groups.map((group) => group.classification),
    [
      "PRODUCTION_KNOWLEDGE",
      "REFERENCE_SOURCE_DATA",
      "RESEARCH_EVIDENCE",
      "ARCHIVE_SUPERSEDED",
    ],
  );

  const paths = manifest.groups.flatMap((group) => group.paths);
  assert.equal(new Set(paths).size, paths.length);
  for (const path of paths) {
    assert.ok(existsSync(resolve(root, path)), `Missing knowledge asset: ${path}`);
  }
});

test("production manifest matches the static public knowledge allowlist", () => {
  const production = manifest.groups.find(
    (group) => group.classification === "PRODUCTION_KNOWLEDGE",
  );
  assert.ok(production);
  assert.equal(production.decision, "REUSE");

  for (const path of production.paths) {
    assert.ok(build.includes(`"${path}"`), `${path} is absent from public build`);
  }

  const archive = manifest.groups.find(
    (group) => group.classification === "ARCHIVE_SUPERSEDED",
  );
  assert.ok(archive);
  for (const path of archive.paths) {
    assert.ok(!build.includes(path), `${path} must remain outside public build`);
  }
});
