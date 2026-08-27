# Portfolio Repository Governance Adoption

Status: active local adoption authority  
Updated: 2026-08-27

```text
CENTRAL_REPOSITORY_GOVERNANCE = REQUIRED
central repository = contactgilmore/augusta-method-governance
consumed central snapshot = 065c670ea96878d2d21f065908d6b66d49c16dc2
```

This public repository consumes canonical Repository Governance from the central store. Local files under `docs/repository-governance/github/` record only Portfolio-specific adoption facts, public trust boundaries, and explicit exceptions.

The local GitHub subject contains exactly five living child documents. Shared GitHub, storage, lifecycle, branch-hygiene, and bootstrap policy must not be copied or forked here.

Live GitHub remains authoritative for actual repository settings, branches, pull requests, Actions, artifacts, caches, and Pages state. A stale local adoption fact must be reconciled to live GitHub rather than treated as an exception.
