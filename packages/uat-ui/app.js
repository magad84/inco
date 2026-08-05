const $ = (id) => document.getElementById(id);

function evaluateScenario() {
  const origin = $("origin").value.trim().toUpperCase();
  const destination = $("destination").value.trim().toUpperCase();
  const description = $("description").value.trim();
  const cargo = $("cargo").value.trim();
  const enhanced = $("enhanced").checked;

  let state = "confirmation_required";
  let reason = "Current carrier, gateway, route, and destination requirements must be confirmed.";
  const confirmations = ["current_route", "capacity", "cutoff", "cargo_acceptance"];
  const missing = [];

  if (!/^[A-Z]{2}$/.test(origin) || !/^[A-Z]{2}$/.test(destination)) {
    state = "blocked_information_required";
    reason = "Origin and destination must use two-letter uppercase country codes.";
    missing.push("valid_origin_country", "valid_destination_country");
  } else if (!description || !cargo) {
    state = "blocked_information_required";
    reason = "Cargo identity and technical description are required before evaluation.";
    missing.push("cargo_category", "technical_description");
  } else if (enhanced) {
    state = "enhanced_compliance_required";
    reason = "Transaction-specific screening overrides a simple route candidate.";
    confirmations.push(
      "counterparty_screening",
      "beneficial_owner_screening",
      "bank_and_payment_route_screening",
      "product_and_end_use_controls",
    );
  }

  $("state").textContent = state;
  $("state").dataset.state = state;
  $("reason").textContent = reason;
  $("confirmations").textContent = [...new Set(confirmations)].join(", ");
  $("missing").textContent = missing.length ? missing.join(", ") : "None identified by this UI pre-check.";
}

$("run").addEventListener("click", evaluateScenario);
