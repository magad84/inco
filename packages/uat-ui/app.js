const $ = (id) => document.getElementById(id);

function list(values) {
  return values && values.length ? values.join(", ") : "None";
}

async function evaluateScenario() {
  $("run").disabled = true;
  $("reason").textContent = "Evaluating with the deterministic engine...";

  const payload = {
    originCountry: $("origin").value.trim().toUpperCase(),
    destinationCountry: $("destination").value.trim().toUpperCase(),
    mode: $("mode").value,
    cargoCategory: $("cargo").value.trim(),
    technicalDescription: $("description").value.trim(),
    physicalState: $("physicalState").value,
    compositionKnown: $("compositionKnown").checked,
    hazardIndicators: $("hazards").value.split(",").map((v) => v.trim()).filter(Boolean),
    specialCargoIndicators: $("special").value.split(",").map((v) => v.trim()).filter(Boolean),
    enhancedComplianceTrigger: $("enhanced").checked,
    transactionDate: $("transactionDate").value,
  };

  try {
    const response = await fetch("/api/evaluate", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || "Evaluation failed");

    $("state").textContent = result.decisionState;
    $("state").dataset.state = result.decisionState;
    $("reason").textContent = list(result.reasons);
    $("confirmations").textContent = list(result.requiredConfirmations);
    $("missing").textContent = list(result.missingInformation);
    $("risks").textContent = list(result.criticalRisks);
    $("sources").textContent = list(result.sources);
    $("laneState").textContent = result.lane.decisionState;
    $("cargoState").textContent = list(result.cargo.statuses);
    $("countryState").textContent = result.destination.status;
    $("raw").textContent = JSON.stringify(result, null, 2);
  } catch (error) {
    $("state").textContent = "request_error";
    $("reason").textContent = error.message;
    $("confirmations").textContent = "None";
    $("missing").textContent = "Correct the request and run again.";
    $("risks").textContent = "Request not evaluated";
    $("sources").textContent = "None";
    $("raw").textContent = "";
  } finally {
    $("run").disabled = false;
  }
}

$("transactionDate").value = new Date().toISOString().slice(0, 10);
$("run").addEventListener("click", evaluateScenario);
