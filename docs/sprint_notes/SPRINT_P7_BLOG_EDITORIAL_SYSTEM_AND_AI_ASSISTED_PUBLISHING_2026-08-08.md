# Sprint P7 — Blog Editorial System and AI-Assisted Publishing

Opened: 2026-08-08  
Branch: `portfolio-blog-editorial`  
Draft PR: `#16`  
Production baseline: `21031c0a18ae1c10ab9bafcbd0922c4b620c5383`

## Objective

Turn Writing into a sustainable technical publishing system with GPT handling repeatable research, drafting, maintenance, metadata, and verification while preserving Mike's established voice, factual integrity, public safety, and owner publication control.

## Durable editorial decisions

- Keep the current clean Writing list unless archive growth creates a real navigation problem.
- Preserve original publication dates as historical facts.
- Use a separate `updated` value and `dateModified` only after material revision.
- GPT is the default editorial drafter/researcher but may not invent personal experience, employer/customer stories, metrics, screenshots, or first-person claims.
- Prefer current first-party technical documentation for version/product/capability claims.
- Treat every committed draft, research note, PR, workflow artifact, and screenshot as public.
- Product-logo thumbnails remain the default visual treatment for individual tool articles. Replace one only when obsolete, low-quality, misleading, or visually unsuitable.
- Do not create decorative replacement artwork merely because a sprint is open; the weak launch-post thumbnail was removed when that post was retired.

## Voice contract

Beginner-friendly without talking down; practical explanation before jargon; conversational openings and occasional dry humor; grounded opinions; explain how tools fit into real operating workflows; connect technology to reliability, delivery, customer impact, toil reduction, or team effectiveness. Preserve real stories when safe. Avoid generic AI listicle cadence.

## Content audit outcome

The original nine-post migration set is now eight active articles plus one retired launch note.

```text
We have a blog!        RETIRED from active article collection
SRE Tools overview     REFRAMED as living series introduction
Rundeck                 REFRESHED
New Relic               REFRESHED
PagerDuty               REFRESHED
Git                     KEPT / structural metadata only
Terraform               REFRESHED
GitHub Actions          REFRESHED
Cursor                  REFRESHED
```

`We have a blog!` is removed from the active Astro article collection. `/we-have-a-blog/` remains a lightweight compatibility page that directs readers to Writing, and the old Vault Boy thumbnail is removed.

## P7-WP3 content-system implementation — COMPLETE

The Astro blog schema supports:

```yaml
updated:
slug:
series:
seriesOrder:
seriesStatus:
```

Rules:

- migrated articles keep their legacy compatibility paths;
- future articles declare a validated lowercase/hyphenated `slug` and do not require a routing-code change;
- the series overview uses `seriesOrder: 0`;
- individual installments use explicit positive order values;
- article layout supports Published / Updated presentation and `dateModified` structured data;
- previous/next series navigation is generated from typed metadata rather than title parsing.

The migration-era byte-for-byte content invariant was deliberately evolved. Current checks preserve historical article identities, original publication dates, active legacy routes, and explicit compatibility treatment for retired legacy content while permitting reviewed editorial maintenance and future new posts.

## P7-WP4 article refresh and series cleanup — COMPLETE

### SRE Tools overview

Reframed from a fixed top-ten ranking into a living learning path. Original publication date remains 2025-06-10; `updated` is 2026-08-08. It explains #1–#7, why the original list evolved, and the approved #8–#10 direction.

### Rundeck

Refreshed around the current distinction between the open-source Rundeck project and PagerDuty Runbook Automation, while preserving the real self-service/support-enablement story.

### New Relic

Refreshed around current observability language and current free-tier context while preserving the real telemetry/FSx troubleshooting story.

### PagerDuty

Refreshed around modern incident-management/automation capabilities, current entry-level plan context, and the distinction between disciplined incident management and any one mandatory vendor. The real on-call transformation story remains.

### Git

Core content remains durable. Added typed series metadata only and intentionally did not manufacture an Updated date.

### Terraform

Refreshed current remote-state locking guidance, including S3 native lockfiles and deprecated DynamoDB locking; replaced an oversimplified IaC comparison table with a durable tradeoff discussion. Real IaC-adoption story remains.

### GitHub Actions

Refreshed the workflow example and security/least-privilege guidance, including modern action/runtime generations, `npm ci`, permissions, fork boundaries, OIDC, environments, and current static-site automation framing. Real TeamCity-to-Actions story remains.

### Cursor

Refreshed around current Agent, Rules, privacy/access, and autonomy/verification concerns while preserving the original “AI accelerates judgment but does not replace it” thesis and real usage examples.

### Assets and navigation

- orphan logo assets that were only used by the old overview gallery were pruned rather than exempted from the asset policy;
- individual purpose-built article thumbnails remain;
- previous/next series navigation was added at article end;
- Writing archive remains visually simple.

## P7-WP5 Git to Know You continuation decision — COMPLETE

Approved sequence:

```text
#8 Kubernetes
#9 OpenTelemetry
#10 Argo CD / GitOps
```

Rationale:

- Kubernetes supplies the container-orchestration foundation;
- OpenTelemetry teaches vendor-neutral instrumentation/telemetry and complements New Relic;
- Argo CD then teaches GitOps desired-state/reconciliation on Kubernetes and connects Git + Actions + Kubernetes;
- AWS remains foundational but is too broad for one tool-style beginner article and moves to a possible future Cloud Foundations series;
- FireHydrant remains valid but adds less distinct educational ground than the selected topics.

## P7-WP6 reusable AI publication workflow — COMPLETE

Authority:

`docs/editorial/AI_ASSISTED_PUBLISHING_WORKFLOW.md`

Reusable flow:

```text
topic signal
-> relevance research
-> first-party source pack
-> outline in established voice
-> draft
-> factual/version/link verification
-> public-disclosure review
-> metadata / slug / series placement / visuals
-> Astro + asset/link + Playwright + axe validation
-> owner editorial review
-> PR approval
-> manual production deployment
```

## P7-WP7 final regression and owner gate — ACTIVE

Expanded Playwright coverage now includes:

```text
Writing archive
SRE Tools series overview
Rundeck
New Relic
PagerDuty
Git
Terraform
GitHub Actions
Cursor
retired launch compatibility page
Published/Updated metadata
previous/next series navigation
```

Final acceptance requires exact-head validation, zero orphan assets, legacy/date/route protection, internal-link verification, responsive Playwright across all configured viewport projects, axe representative scans, screenshot visual review, public-disclosure review, and owner approval.

## Work packages

```text
P7-WP1 editorial strategy / topic relevance / AI contract: COMPLETE
P7-WP2 existing-content audit: COMPLETE
P7-WP3 content schema and series/update/slug metadata: COMPLETE
P7-WP4 article refresh and series cleanup: COMPLETE
P7-WP5 Git to Know You continuation decision: COMPLETE
P7-WP6 reusable AI publication workflow: COMPLETE
P7-WP7 browser/editorial regression and owner gate: ACTIVE
```

## Public-repository boundary

Repository documentation demonstrates the editorial/AI workflow but is not private project memory. Keep only sanitized decisions needed to reproduce the public engineering/editorial process. Do not commit private job-search strategy, personal scheduling constraints, unpublished employer information, private source material, credentials, internal infrastructure identifiers, or conversational scratchpad.
