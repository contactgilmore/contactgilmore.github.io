# Portfolio Repository Settings and Security

Status: active local adoption fact

The repository is intentionally public. Every tracked branch, PR, issue, workflow log, artifact, image, and generated output is treated as publicly discoverable and durable.

Local Master disclosure rules remain stricter than generic central policy where necessary. Secrets, private personal context, private infrastructure details, confidential third-party material, and non-public job-search information are prohibited from tracked/public surfaces.

Production significance is owner-gated: an approved squash merge to `main` is the human production authorization for the public site.

## Live GOV-2E settings audit — 2026-08-15

```text
visibility = PUBLIC
default branch = main
squash merge = ENABLED
merge commits = ENABLED — DRIFT
rebase merge = ENABLED — DRIFT
delete merged head branches = DISABLED — DRIFT
```

The drift above is not an accepted Portfolio exception. It requires a separate bounded settings-only transaction that can administer the repository without routing public repository code to private self-hosted infrastructure. That transaction must prove the exact live precondition, change only the four intended values, re-read the result, and remove its temporary branch.

The public-repository trust boundary overrides convenience: public PR/fork code must not receive access to private runner hosts or private host-admin credentials.
