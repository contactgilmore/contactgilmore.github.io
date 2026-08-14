# Validation and Evidence

Minimum migration evidence should eventually include:

```text
clean dependency install
Astro build
content-schema validation
representative article render comparison
full migrated post count
asset-path checks
old public URL inventory/regression
internal link check
responsive browser review
accessibility/basic Lighthouse review
GitHub Pages deployment proof
```

Claims must match evidence. A green build alone is not production acceptance.

## CI evidence-storage law

Routine successful browser validation is proved by the exact-head Actions run, test summary, and deployment/source identity. A successful Playwright run does not require a large retained HTML/report artifact merely for convenience.

For this public portfolio:

```text
successful Playwright run = Actions log/status is normal durable evidence
Playwright artifact upload = failure evidence only
failure payload = smallest useful diagnostic set
transient failure-artifact retention = 1 day by default
self-hosted evidence storage = prohibited for ordinary public-repository PR/fork CI
```

This repository intentionally stays on GitHub-hosted runners because public pull-request/fork code must not be exposed to private self-hosted infrastructure. That security boundary means local Node3 storage is not the default evidence sink here. The correct optimization is to avoid cloud artifact creation on successful runs and retain only bounded short-lived failure diagnostics.

Large repeated browser reports are not release authority. Production acceptance remains the combination of exact source identity, green claim-matching validation, owner approval where required, merge to `main`, and successful Pages deployment.
