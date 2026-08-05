# INCO Open-Source Container Solver Evaluation

**Version:** 0.1  
**Date:** 2026-08-05  
**Status:** Discovery and evaluation record; no dependency approved

## 1. Objective

Evaluate open-source projects that may accelerate a future paid container load planner without compromising licensing, maintainability, safety, or INCO's independent architecture.

No external solver has been approved for production.

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

- Maintained repository.
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

- Solver result is treated as a proposal, not a safe-loading certificate.
- Ability to expose assumptions and warnings.
- Separation from securing, lashing, dangerous-goods segregation, road permits, and carrier acceptance.

## 3. Candidate: coin-or/clp-spreadsheet-solver

Repository:

`https://github.com/coin-or/clp-spreadsheet-solver`

Observed capabilities from the project documentation:

- Represents and solves container loading / 3D bin-packing problems.
- Uses a large-neighborhood-search heuristic.
- Visualizes solutions in 3D.
- Animates loading and unloading plans.
- Supports multiple interface languages, including Arabic.
- Supports heavy items restricted to floor level.
- Supports fragile items that cannot carry top loads.
- Includes a weight-balance objective for left/right balance.

License:

- Eclipse Public License 2.0.

Initial assessment:

- Strong reference and benchmark candidate.
- Useful for building test cases and understanding professional constraints.
- Current delivery is an Excel workbook with macros, which is not suitable as the production web backend.
- Direct code reuse requires legal review of EPL-2.0 obligations and technical review of VBA/macros.
- The associated published algorithm may be more useful as a technical reference than embedding the workbook.

Decision:

`REFERENCE_AND_BENCHMARK_ONLY` until legal and architecture review.

## 4. Candidate: mahdims/3D-bin-packing

Repository:

`https://github.com/mahdims/3D-bin-packing`

Initial assessment:

- Relevant project name and problem domain.
- License, maintenance, test coverage, supported constraints, and production suitability require full review.

Decision:

`DISCOVERY_ONLY`.

## 5. Candidate: hansehe/ContainerLoading

Repository:

`https://github.com/hansehe/ContainerLoading`

Initial assessment:

- Relevant container-loading implementation.
- License, stability, weight handling, support rules, and API suitability require full review.

Decision:

`DISCOVERY_ONLY`.

## 6. Candidate: D-Wave 3D Bin Packing Example

Repository family:

D-Wave examples for three-dimensional bin packing.

Initial assessment:

- Useful as a research reference for optimization formulation and visualization.
- May depend on an external optimization service.
- Not preferred for INCO if it creates a mandatory paid or vendor-dependent runtime.
- Physical stability, top-load, and operational constraints require independent verification.

Decision:

`RESEARCH_REFERENCE_ONLY`.

## 7. Build-versus-Adopt Direction

Preferred direction:

1. Define INCO's constraint model independently.
2. Build an implementation-neutral test suite.
3. Benchmark multiple solvers against identical cases.
4. Select or implement an algorithm behind an internal `LoadPlannerEngine` interface.
5. Keep the UI, case data, reports, and warnings independent from the selected solver.
6. Permit engine replacement without data-model migration.

Proposed interface:

```text
LoadPlannerEngine.solve(input_case, objective, constraints)
    -> plan
    -> unallocated_items
    -> metrics
    -> warnings
    -> solver_metadata
```

## 8. Mandatory Test Dataset

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

## 9. Adoption Gate

A solver may be approved only when:

- License review is complete.
- Security and dependency review is complete.
- Test results meet defined acceptance thresholds.
- The solution can be self-hosted or approved otherwise.
- Required constraints are supported or added.
- Result limitations are exposed to the user.
- A replacement path is documented.
