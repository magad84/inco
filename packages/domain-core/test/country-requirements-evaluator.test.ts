import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";

import {
  evaluateCountryRequirements,
  type DestinationCountryRule,
} from "../src/country-requirements-evaluator.js";

interface CountryRuleFile {
  rules: DestinationCountryRule[];
}

const root = resolve(process.cwd(), "../..");
const uaeRules = (
  JSON.parse(
    readFileSync(resolve(root, "knowledge/country-rules/uae.v0.1.json"), "utf8"),
  ) as CountryRuleFile
).rules;

test("returns source unavailable for unsupported destination country", () => {
  const result = evaluateCountryRequirements(
    { countryCode: "ZZ", transactionDate: "2026-08-05", facts: {} },
    uaeRules,
    "2026-08-05T18:00:00Z",
  );

  assert.equal(result.status, "source_unavailable");
  assert.equal(result.findings.length, 0);
});

test("requires jurisdiction and route facts for UAE movement", () => {
  const result = evaluateCountryRequirements(
    {
      countryCode: "AE",
      transactionDate: "2026-08-05",
      facts: { transactionRole: "import" },
    },
    uaeRules,
    "2026-08-05T18:00:00Z",
  );

  assert.equal(result.status, "confirmation_required");
  assert.ok(result.missingInputs.includes("emirate"));
  assert.ok(result.missingInputs.includes("gateway_or_city"));
  assert.ok(result.staleRuleIds.includes("CR-AE-JURISDICTION-001"));
});

test("activates Dubai special-load confirmation workflow", () => {
  const result = evaluateCountryRequirements(
    {
      countryCode: "AE",
      transactionDate: "2026-08-05",
      facts: {
        transactionRole: "import",
        emirate: "Dubai",
        gateway_or_city: "Jebel Ali",
        transaction_role: "import",
        transport_mode: "road",
        specialLoadIndicator: true,
        loaded_gross_weight: 70000,
        overall_length: 22,
        overall_width: 4.2,
        overall_height: 4.8,
        vehicle_and_trailer_type: "modular_trailer",
        origin: "Jebel Ali",
        destination: "Dubai Industrial City",
        route: "to_be_confirmed",
        movement_time: "night",
      },
    },
    uaeRules,
    "2026-08-05T18:00:00Z",
  );

  const finding = result.findings.find(
    (item) => item.ruleId === "CR-AE-DXB-SPECIAL-LOAD-001",
  );
  assert.ok(finding);
  assert.equal(finding.decision, "confirmation_required");
  assert.equal(finding.confirmationRequired, true);
  assert.equal(finding.missingInputs.length, 0);
});

test("does not apply Dubai special-load rule when explicit emirate differs", () => {
  const result = evaluateCountryRequirements(
    {
      countryCode: "AE",
      transactionDate: "2026-08-05",
      facts: {
        transactionRole: "import",
        emirate: "Abu Dhabi",
        specialLoadIndicator: true,
      },
    },
    uaeRules,
    "2026-08-05T18:00:00Z",
  );

  assert.equal(
    result.findings.some(
      (finding) => finding.ruleId === "CR-AE-DXB-SPECIAL-LOAD-001",
    ),
    false,
  );
});

test("rejects invalid country codes", () => {
  assert.throws(
    () =>
      evaluateCountryRequirements(
        { countryCode: "uae", transactionDate: "2026-08-05", facts: {} },
        uaeRules,
      ),
    /countryCode/,
  );
});
