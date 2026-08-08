# Sprint P7 — Blog Editorial System and AI-Assisted Publishing

Opened: 2026-08-08  
Branch: `portfolio-blog-editorial`  
Production baseline: `21031c0a18ae1c10ab9bafcbd0922c4b620c5383`

## Objective

Turn Writing into a sustainable technical publishing system with GPT handling repeatable research/drafting/maintenance while preserving Mike's established voice, factual integrity, public safety, and owner publication control.

## Durable editorial decisions

- Keep the current clean Writing list unless archive growth creates a real navigation problem.
- Preserve original publication dates as historical facts.
- Use a separate `updated` value and `dateModified` only after material revision.
- Do not mechanically finish the original ten-tool list.
- GPT is the default editorial drafter/researcher but may not invent personal experience, employer/customer stories, metrics, screenshots, or first-person claims.
- Prefer current first-party technical documentation for version/product/capability claims.
- Treat every committed draft, research note, PR, workflow artifact, and screenshot as public.
- Product-logo thumbnails remain the default visual treatment for tool articles. Replace one only when obsolete, low-quality, misleading, or visually unsuitable; do not manufacture decorative art merely for novelty.

## Voice contract

Beginner-friendly without talking down; practical explanation before jargon; conversational openings and occasional dry humor; grounded opinions; explain how tools fit into real operating workflows; connect technology to reliability, delivery, customer impact, toil reduction, or team effectiveness. Preserve real stories when safe. Avoid generic AI listicle cadence.

## Existing-content audit

The original nine-post migration set has become eight active articles plus one explicitly retired launch note.

```text
We have a blog!        RETIRED from active article collection
SRE Tools overview     REFRAME as living series introduction
Rundeck                 REFRESH
New Relic               REFRESH
PagerDuty               REFRESH
Git                     KEEP / light refresh
Terraform               REFRESH — high priority
GitHub Actions          REFRESH — high priority
Cursor                  KEEP / targeted refresh
```

### Retired launch post

`We have a blog!` served the first site draft but no longer describes the portfolio accurately. Owner decision: remove it from the active Astro article collection rather than rewrite it. Preserve `/we-have-a-blog/` as a lightweight compatibility page that directs readers to Writing so historical external links do not become unexplained 404s. Remove the old Vault Boy thumbnail because it has no remaining active-content purpose.

Cross-series findings:

- shorten/remove the repeated long beginner disclaimer through series-level presentation rather than repeating boilerplate forever;
- Benefits / Drawbacks / Cost / Bottom Line remains an available beginner template, not a mandatory structure;
- real professional stories are the strongest differentiator;
- avoid absolute claims that one commercial vendor is universally mandatory;
- verify time-sensitive pricing, limits, versions, product names, and commands at publication time;
- use typed metadata for series ordering rather than title parsing.

## P7-WP3 implementation — COMPLETE

Astro content schema supports:

```yaml
updated:
series:
seriesOrder:
seriesStatus:
```

Blog layout supports separate Published / Updated presentation and `dateModified` structured data. Writing archive intro is reader-facing rather than internal design rationale.

The original migration integrity gate was intentionally evolved. During the Jekyll-to-Astro migration, byte-for-byte equality was the correct invariant. P7 makes editorial revision an explicit requirement, so the gate now preserves active legacy article identities and original publication dates, permits reviewed content revisions/new posts, and verifies explicit compatibility handling for retired legacy articles.

## P7-WP4 priority refresh — ACTIVE

### Terraform

Materially refreshed on the P7 branch. Original date remains 2025-07-13; updated date is 2026-08-08. Current HashiCorp guidance replaces the article's old S3 + DynamoDB locking recommendation with S3 native lockfiles (`use_lockfile = true`); DynamoDB locking is deprecated. The old simplistic Terraform/CloudFormation/Bicep scorecard was replaced with a durable tradeoff discussion. The real IaC adoption story remains.

### GitHub Actions

Materially refreshed on the P7 branch. Original date remains 2025-07-20; updated date is 2026-08-08. Example now demonstrates current action generations, Node 24, `npm ci`, explicit read permissions, least privilege, fork/secret boundaries, OIDC, deployment environments, and modern static-site workflow framing. The TeamCity-to-Actions story and existing toil metric remain source-derived.

## P7-WP5 continuation research — IN PROGRESS

Current evidence materially changes the likely remaining series:

1. **Kubernetes** — current leading candidate for #8; teaches the orchestration layer connecting containers, reliability, deployment, and modern cloud operations.
2. **OpenTelemetry** — current leading candidate for #9; teaches vendor-neutral observability concepts and complements New Relic rather than duplicating it.
3. **Argo CD / GitOps** — current leading candidate for #10; makes the most educational sense after Kubernetes and connects Git + Actions + Kubernetes.
4. **AWS** — foundational and professionally relevant, but likely better as a focused cloud-foundations series than one enormous generic tool article.
5. **FireHydrant** — active and useful, but lower incremental educational value because PagerDuty/Rundeck already cover much of the incident/runbook capability space.

Final sequencing remains subject to current first-party source review and owner gate.

## AI-assisted publishing workflow direction

Reusable workflow:

```text
topic signal
-> relevance research
-> source pack (first-party preferred)
-> outline in established voice
-> draft
-> factual/version/link verification
-> public-disclosure review
-> metadata / series placement / visuals
-> Astro + link + Playwright + axe validation
-> owner editorial review
-> PR approval
-> manual production deployment
```

A new post should not require Mike to perform routine research or first-draft work. Ask targeted questions only when a real personal anecdote or unsupported first-person claim would materially improve the article.

## Work packages

```text
P7-WP1 editorial strategy / topic relevance / AI contract: COMPLETE
P7-WP2 existing-content audit: COMPLETE
P7-WP3 content schema and series/update metadata: COMPLETE
P7-WP4 priority article refresh batch: ACTIVE
P7-WP5 Git to Know You continuation decision: IN PROGRESS
P7-WP6 reusable AI publication workflow: IN PROGRESS
P7-WP7 browser/editorial regression and owner gate: PENDING
```

## Public-repository boundary

Repository documentation demonstrates the editorial/AI workflow but is not private project memory. Keep only sanitized decisions needed to reproduce the public engineering/editorial process. Do not commit private job-search strategy, personal scheduling constraints, unpublished employer information, private source material, credentials, internal infrastructure identifiers, or conversational scratchpad.
