# INCO Open-Source Container Solver Evaluation

**Version:** 0.2  
**Date:** 2026-08-05  
**Status:** Technical and license discovery; no dependency approved

## 1. Objective

Evaluate open-source projects that may accelerate a future paid Container Load Planner without compromising licensing, maintainability, safety, or INCO's independent architecture.

No external solver is approved for production or imported into `magad84/inco`.

## 2. Required Evaluation Criteria

### Functional

- Three-dimensional rectangular packing.
- multiple container and item types.
- quantity constraints.
- allowed orientation constraints.
- payload constraints.
- door-opening feasibility.
- stackability.
- fragile and heavy item handling.
- maximum top load.
- support-area or stability checks.
- weight distribution.
- loading and unloading sequence.
- unallocated-item explanation.
- deterministic repeatability where required.
- 2D/3D result export.

### Technical

- Active maintenance.
- automated tests.
- documented algorithm.
- acceptable runtime for web use.
- API or library integration.
- no mandatory paid external solver.
- containerized deployment suitability.
- security review.
- ability to audit and reproduce results.

### Legal

- Explicit license.
- commercial-use compatibility.
- modification and distribution obligations.
- attribution requirements.
- patent clauses.
- dependency licenses.

### Product safety

- Solver result is a proposal, not a safe-loading certificate.
- Assumptions and warnings can be exposed.
- Packing optimization remains separate from securing, lashing, dangerous-goods segregation, road permits, and carrier acceptance.

## 3. Evaluation Summary

| Candidate | Maintenance signal | License | Current decision |
|---|---|---|---|
| `coin-or/clp-spreadsheet-solver` | Updated July 2026 | Eclipse Public License 2.0 | Reference, benchmark, and requirements source |
| `hansehe/ContainerLoading` | Single visible initial commit in November 2021 | MIT | Algorithm experiment only; not production candidate |
| `mahdims/3D-bin-packing` | Last visible updates in 2020 | No repository license detected | Do not adopt or copy; research reference only |
| D-Wave 3D bin-packing examples | Separate service/ecosystem dependency | Project-specific review required | Optimization research only |

## 4. Candidate: coin-or/clp-spreadsheet-solver

Repository:

`https://github.com/coin-or/clp-spreadsheet-solver`

Observed capabilities from project documentation:

- Represents and solves container-loading / 3D bin-packing problems.
- Uses a large-neighborhood-search heuristic.
- Visualizes solutions in 3D.
- Animates loading and unloading plans.
- Supports multiple interface languages, including Arabic.
- Supports heavy items restricted to floor level.
- Supports fragile items that cannot carry top loads.
- Includes a left/right weight-balance objective.

Maintenance signal:

- The repository received an update in July 2026 and earlier updates in 2025.

License:

- Eclipse Public License 2.0.
- Direct reuse or modification requires review of source-availability, notice, distribution, and commercial-contributor obligations.

Technical assessment:

- Strongest current reference among the reviewed candidates.
- Useful for defining professional constraints, expected outputs, and benchmark cases.
- Current delivery is an Excel workbook with macros rather than a web-service library.
- Macros and workbook execution are not suitable as the core production backend.
- The associated published algorithm and test methodology may be more valuable than embedding the workbook.

Decision:

`REFERENCE_BENCHMARK_AND_REQUIREMENTS_SOURCE`

No code adoption without separate legal and architecture approval.

## 5. Candidate: hansehe/ContainerLoading

Repository:

`https://github.com/hansehe/ContainerLoading`

Observed characteristics:

- Python project with a genetic-algorithm structure.
- Contains a package directory, tests directory, and test requirements.
- Uses item dimensions, volume, and weight as solver inputs.
- MIT license permits commercial use, modification, and distribution subject to notice preservation.

Material concerns from initial code review:

- Public documentation is extremely limited.
- The visible commit history shows only an initial work-in-progress commit in November 2021.
- The public wrapper sets returned item weights to zero, which means output objects do not preserve the input weight as currently written.
- The reviewed wrapper does not establish support for door-opening checks, stackability, top-load limits, fragile/heavy logic, support area, load sequence, or weight-distribution safety.
- Presence of a tests directory does not establish adequate coverage; test behavior must be inspected and executed before any benchmark.

Decision:

`ALGORITHM_EXPERIMENT_ONLY`

It may be cloned later into an isolated benchmark environment, but it is not a production dependency candidate in its current state.

## 6. Candidate: mahdims/3D-bin-packing

Repository:

`https://github.com/mahdims/3D-bin-packing`

Observed characteristics:

- Genetic-algorithm and tabu-search implementation.
- Includes research datasets, scripts, documentation PDF, and result workbooks.
- README instructs execution with Python 2.
- Public visible updates are from 2020.

Material concerns:

- No repository license was detected through the GitHub license endpoint.
- Without an explicit license, INCO must not copy, modify, distribute, or embed the code.
- Python 2 is obsolete for a new production service.
- No clear automated test suite or current package/API design was observed.
- Professional physical constraints and production safety behavior remain unverified.

Decision:

`RESEARCH_REFERENCE_ONLY_NO_CODE_REUSE`

## 7. Candidate: D-Wave 3D Bin-Packing Examples

Initial assessment:

- Useful for studying mathematical formulation, optimization objectives, and visualization.
- May introduce dependency on an external optimization service or vendor ecosystem.
- Not preferred for INCO when it creates mandatory variable cost or vendor lock-in.
- Physical stability, top-load, door-opening, sequence, and operational constraints require independent implementation and verification.

Decision:

`OPTIMIZATION_RESEARCH_ONLY`

## 8. Build-versus-Adopt Direction

Approved direction for continued research:

1. Define INCO's data and constraint model independently.
2. Maintain an implementation-neutral acceptance scenario library.
3. Build benchmark fixtures from approved scenarios.
4. Compare candidate engines against the same fixtures.
5. Select or implement an algorithm behind an internal `LoadPlannerEngine` interface.
6. Keep UI, case data, reports, safety warnings, and commercial logic independent from the solver.
7. Allow engine replacement without data-model migration.

Proposed interface:

```text
LoadPlannerEngine.solve(input_case, objective, constraints)
    -> plan
    -> unallocated_items
    -> metrics
    -> warnings
    -> solver_metadata
```

## 9. Mandatory Benchmark Dataset

- Single SKU exact fit.
- multiple SKU mixed sizes.
- orientation restricted.
- no-top-load fragile items.
- heavy floor-only items.
- payload exceeded.
- door opening smaller than item cross-section.
- low support surface.
- left/right weight imbalance.
- fore/aft weight imbalance.
- loading sequence constraint.
- unloading sequence constraint.
- palletized cargo.
- unallocated priority items.
- repeatability and timeout behavior.
- invalid, extreme, and adversarial input handling.

## 10. Adoption Gate

A solver may be approved only when:

- License review is complete.
- security and dependency review is complete.
- automated benchmark results meet defined acceptance thresholds.
- the solution can be self-hosted or an alternative is explicitly approved.
- required constraints are supported or safely added.
- outputs preserve all critical item and equipment data.
- limitations are exposed to the user.
- a replacement path is documented.

## 11. Current Recommendation

Do not import any reviewed repository into INCO now.

Use `coin-or/clp-spreadsheet-solver` as the strongest requirements and benchmark reference. Build INCO's own schemas, tests, and engine interface first. After that, run isolated technical benchmarks to decide whether to implement a solver internally or adapt a legally suitable library.
