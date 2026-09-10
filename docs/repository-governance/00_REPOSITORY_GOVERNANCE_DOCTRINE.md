# Portfolio Repository Governance Adoption

Status: active local adoption authority
Owner: Mike Gilmore
Updated: 2026-09-10

```text
CENTRAL_REPOSITORY_GOVERNANCE = REQUIRED
central repository = contactgilmore/augusta-method-governance
consumed central snapshot = 8ee00cbf5c8dcf13f5ca7538559677dff70542bf
```

This public repository consumes canonical Repository Governance from the central store. Local files under `docs/repository-governance/github/` record only Portfolio-specific adoption facts, public trust boundaries, implementation, evidence, and explicit stricter exceptions.

Shared repository structure/GitHub/runner/storage/lifecycle policy, shared security/scanning/DR assurance, and shared infrastructure patch/container-host policy remain central policy classes. They must not be independently forked here.

If central authority appears stale, wrong, unsafe, internally inconsistent, or incompatible with a real Portfolio constraint, preserve the safer current state, alert Mike, and request owner approval. Do not silently fork, weaken, or replace shared policy locally. Correct central first when the rule is genuinely shared, then propagate the accepted result here.

The local GitHub subject contains exactly five living child documents. Shared GitHub, storage, lifecycle, branch-hygiene, and bootstrap policy must not be copied or forked here.

Live GitHub remains authoritative for actual repository settings, branches, pull requests, Actions, artifacts, caches, and Pages state. A stale local adoption fact must be reconciled to live GitHub rather than treated as an exception.
