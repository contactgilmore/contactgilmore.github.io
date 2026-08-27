# Portfolio Repository Settings and Security

Status: active local adoption fact  
Updated: 2026-08-27

The repository is intentionally public. Every tracked branch, PR, issue, workflow log, artifact, image, and generated output is treated as publicly discoverable and durable.

Local Master disclosure rules remain stricter than generic central policy where necessary. Secrets, private personal context, private infrastructure details, confidential third-party material, and non-public job-search information are prohibited from tracked/public surfaces.

Production significance is owner-gated: an approved squash merge to `main` is the human production authorization for the public site.

## Live repository settings — verified 2026-08-27

```text
visibility = PUBLIC
default branch = main
squash merge = ENABLED
merge commits = DISABLED
rebase merge = DISABLED
delete merged head branches = ENABLED
auto merge = DISABLED
GitHub Pages = ENABLED
```

The former GOV-2E settings drift is resolved. These values were re-read from live GitHub during the P11 startup reconciliation; do not preserve the historical drift as current state merely because older sprint evidence mentions it.

The public-repository trust boundary overrides convenience: public PR/fork code must not receive access to private runner hosts or private host-admin credentials. Repository workflows use bounded approved GitHub-hosted standard runners under the current runner-routing policy.

If live settings later disagree with this adoption fact, live GitHub wins for diagnosis and the discrepancy must be reconciled deliberately under central Repository Governance.
