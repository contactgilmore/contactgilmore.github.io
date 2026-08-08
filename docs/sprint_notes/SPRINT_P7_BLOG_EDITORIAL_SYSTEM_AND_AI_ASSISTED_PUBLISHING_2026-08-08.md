# Sprint P7 — Blog Editorial System and AI-Assisted Publishing

Opened: 2026-08-08  
Branch: `portfolio-blog-editorial`  
Production baseline: `21031c0a18ae1c10ab9bafcbd0922c4b620c5383`

## Objective

Turn the Writing area into a sustainable technical publishing system that can remain active with limited owner time. Preserve the established voice and professional value while moving research, drafting, maintenance, and series administration into a disciplined GPT-assisted workflow.

## Editorial operating decision

The existing Writing list is accepted as the default archive presentation. Original publication dates remain historical facts. A materially revised article may add an `updated` / `dateModified` value while retaining `datePublished`.

## Git to Know You decision

Do **not** mechanically complete the original ten-tool list. The original overview named AWS, Argo CD, Terraform, Cursor, PagerDuty, New Relic, FireHydrant, Git, GitHub Actions, and Rundeck. Seven dedicated tool articles currently exist: Rundeck, New Relic, PagerDuty, Git, Terraform, GitHub Actions, and Cursor.

AWS, Argo CD, and FireHydrant are **candidates, not obligations**. Before another installment, GPT researches current relevance against professional positioning, contemporary cloud/platform/AI/observability/automation practice, distinct educational value, and current tool health. A stronger current topic may replace or reorder an original candidate.

## AI-assisted authoring contract

GPT is the default editorial drafter going forward. GPT may research, recommend topics, outline, draft, verify technical/time-sensitive claims, prepare metadata, recommend/create public-safe visuals, run quality gates, revise from feedback, and prepare PRs. Mike remains final editorial/publication authority and supplies personal experience only when needed.

### Voice contract

Preserve the qualities already present in the blog:

- beginner-friendly without talking down to the reader;
- practical explanations before jargon;
- conversational openings and occasional dry humor;
- clear opinions when supported by experience/evidence;
- explain how a tool fits into an operating workflow, not only what buttons it has;
- connect tooling to reliability, delivery, customer impact, toil reduction, or team effectiveness;
- use personal stories when they are real and approved;
- keep paragraphs readable and avoid generic AI listicle cadence.

Do not manufacture personal anecdotes, employer/customer events, metrics, tool usage, or first-person claims. If a personal story would materially improve the article and repository authority does not support one, ask Mike a small number of targeted questions.

## P7-WP2 — existing nine-post audit

Status: **ANALYSIS COMPLETE; IMPLEMENTATION PENDING**

Classification model:

```text
KEEP — accurate and useful; only minor copy/link cleanup if needed
REFRESH — materially update technical content and add honest dateModified
REFRAME — underlying topic remains useful but article purpose/voice needs substantial revision
RETIRE_FROM_FEATURE — preserve URL/history but stop promoting it
```

### We have a blog! — REFRAME / RETIRE FROM FEATURE

Historical launch note that still describes the site as brand new and under layout experimentation. Preserve URL/history, but stop treating it as current featured writing. Either rewrite as a short retrospective/archive introduction or retain as a clearly historical note.

### Git to Know You: SRE Tools — REFRAME

Useful as series context, but its promise that every original tool will receive a dedicated article is now an unnecessary constraint. Refresh into a living series index/introduction. Preserve the publication date and explain that the series evolves with the tooling landscape.

### #1 Rundeck — REFRESH

The self-service/runbook story remains strong and supports the portfolio's automation/customer-enablement narrative. Current PagerDuty material still recognizes Rundeck Community while paid branding has evolved toward PagerDuty Runbook Automation / Process Automation. Refresh product naming, current capabilities, and cost/support wording. Keep the real team story.

### #2 New Relic — REFRESH

The observability story remains one of the strongest articles. Current first-party pricing/product terminology is more specific than the 2025 article: the current free tier includes 100 GB monthly ingest, unlimited basic users, and one full-platform user. Refresh pricing, retention/edition wording, and current observability terminology without turning the article into marketing copy. Preserve the real monitoring story subject to public-disclosure review.

### #3 PagerDuty — REFRESH

The personal on-call story remains valuable. Pricing language is stale/over-specific and should be replaced with current verified plan language or a durable official link. Modern PagerDuty also emphasizes event orchestration and automation beyond basic paging. Soften the absolute closing claim that PagerDuty itself is “not optional”; incident-management discipline is foundational, but a specific vendor is not universally mandatory.

### #4 Git — KEEP / LIGHT REFRESH

Core technical explanation remains durable and the version-control adoption story is useful. Main work is editorial: review absolutes, verify any time-sensitive hosting/free-tier wording, and add series metadata. No reason for a large rewrite merely to create freshness.

### #5 Terraform — HIGH-PRIORITY REFRESH

Material technical change confirmed in current HashiCorp documentation: the S3 backend supports native lockfiles via `use_lockfile = true`, while DynamoDB-based locking is deprecated. The article currently recommends S3 + DynamoDB. Refresh remote-state guidance, verify current Terraform edition/licensing terminology, update stale module/example versions where useful, and review the comparison table for oversimplification. Preserve the real infrastructure-as-code adoption story.

### #6 GitHub Actions — HIGH-PRIORITY REFRESH

The example uses `actions/checkout@v3`, `actions/setup-node@v4`, and Node 18. Current official Actions repositories use newer action/runtime generations and test modern Node releases. Refresh the workflow example to a current supported baseline, use `npm ci` where a lockfile exists, improve least-privilege/security explanation, update the Pages example from Jekyll-era assumptions to modern workflow-based static deployment, and verify current billing/free-use wording. Preserve the real TeamCity-to-Actions delivery story.

### #7 Cursor — KEEP / TARGETED REFRESH

Newest post; its core message has aged well: AI as an accelerator with human verification. Refresh current product terminology/capabilities only where first-party documentation supports it. The judgment/verification emphasis is strategically useful because the portfolio itself demonstrates structured AI-assisted engineering. Avoid rewriting it into a product-feature catalog.

## Cross-series editorial findings

- The repeated beginner disclaimer is part of the original voice but is long and repetitive. Consider moving a shorter audience statement into series metadata/layout.
- “Benefits / Drawbacks / Cost / Bottom Line” is a useful beginner template, but future articles should use it when it fits rather than force every topic into identical listicle structure.
- Existing real stories are the strongest differentiator. Preserve and public-safety review them rather than replacing them with generic examples.
- Avoid absolute vendor claims that imply one commercial product is universally mandatory. Explain the underlying engineering capability and why the tool is one implementation of it.
- Time-sensitive pricing, plan limits, versions, and product naming must be verified at publication/update time or written durably with a link to current official details.
- Series numbering should be metadata-driven; title text should not be the only ordering mechanism.

## Series model direction

Candidate typed metadata:

```yaml
series: "Git to Know You"
seriesOrder: 7
seriesStatus: "ongoing"
updated: 2026-08-08 # only when materially revised
```

Exact schema is an implementation decision after the audit. Prefer metadata over hard-coded title parsing. Avoid filters/carousels/category UI until archive size demonstrates a real need.

## Planning model for the portfolio

The portfolio keeps a **lightweight roadmap plus bounded sprints**. The roadmap contains durable direction and meaningful future capabilities. Concrete changes open a bounded sprint, receive evidence/owner gates, and close. Avoid manufacturing product-style phases or backlog volume.

## Work packages

### P7-WP1 — editorial strategy / topic relevance / AI contract — COMPLETE

### P7-WP2 — existing nine-post audit — ANALYSIS COMPLETE

### P7-WP3 — content schema and series/update metadata — NEXT

### P7-WP4 — priority article refresh batch

Refresh Terraform, GitHub Actions, and other high-value stale posts using current first-party sources and honest modified dates.

### P7-WP5 — Git to Know You continuation decision

Deep-research candidate remaining/replacement topics and select the next article sequence.

### P7-WP6 — AI drafting template and publication workflow

Codify a reusable research -> draft -> verify -> owner review -> PR -> deploy flow.

### P7-WP7 — browser/editorial regression and owner gate

Validate archive/articles across viewports and obtain owner approval before publication/deployment.

## Public-repository boundary

Repository documentation may demonstrate the editorial/AI workflow, but must not contain private job-search strategy, personal scheduling pressure, unpublished employer information, private source material, or conversational scratchpad. Keep only sanitized decisions needed to reproduce the public engineering/editorial process.
