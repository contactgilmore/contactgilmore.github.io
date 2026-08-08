# Sprint P7 — Blog Editorial System and AI-Assisted Publishing

Opened: 2026-08-08  
Branch: `portfolio-blog-editorial`  
Production baseline: `21031c0a18ae1c10ab9bafcbd0922c4b620c5383`

## Objective

Turn the Writing area into a sustainable technical publishing system that can remain active when Mike has limited time. Preserve the established voice and professional value while moving research, drafting, maintenance, and series administration into a disciplined GPT-assisted workflow.

## Editorial operating decision

The existing Writing list is accepted as the default archive presentation. Do not redesign it merely because a new sprint opened. Improve the content model underneath it first.

Original publication dates remain historical facts. A materially revised article may add an `updated` / `dateModified` value while retaining `datePublished`.

## Git to Know You decision

Do **not** mechanically complete the original ten-tool list.

The original overview named AWS, Argo CD, Terraform, Cursor, PagerDuty, New Relic, FireHydrant, Git, GitHub Actions, and Rundeck. Seven dedicated tool articles currently exist: Rundeck, New Relic, PagerDuty, Git, Terraform, GitHub Actions, and Cursor.

Before drafting another installment, GPT must research current relevance against:

- Mike's current professional positioning;
- current implementation / Professional Services / Technical Success / systems-delivery role relevance;
- contemporary cloud/platform/AI/observability/automation practice;
- whether the topic adds a distinct lesson rather than duplicating an existing article;
- whether the tool is still active and useful enough to justify a standalone beginner article.

AWS, Argo CD, and FireHydrant are therefore **candidates, not obligations**. A stronger current topic may replace or reorder them. If the series concept itself needs to evolve beyond “ten tools,” preserve URL/history and explain the editorial evolution rather than forcing an outdated list.

## AI-assisted authoring contract

GPT is the default editorial drafter going forward.

For a new post GPT may:

1. research the topic using current first-party documentation plus high-quality secondary sources when useful;
2. recommend whether the topic belongs in an existing series, a new series, or should be skipped;
3. produce the outline and first draft using the established article structure and Mike's existing voice;
4. verify commands, versions, product names, links, pricing claims, and time-sensitive statements before proposing publication;
5. prepare frontmatter, categories/tags, series metadata, SEO/social metadata, and internal previous/next links;
6. recommend or create public-safe diagrams/graphics when they materially improve comprehension;
7. run build/link/Playwright/accessibility checks before owner review;
8. revise from Mike's feedback and prepare the PR.

Mike supplies personal experience only when needed and remains final editorial/publication authority.

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

## Existing-content audit

Each current post receives one classification:

```text
KEEP — accurate and useful; only minor copy/link cleanup if needed
REFRESH — materially update technical content and add honest dateModified
REFRAME — underlying topic remains useful but article purpose/voice needs substantial revision
RETIRE_FROM_FEATURE — preserve URL/history but stop promoting it
```

Audit criteria:

- factual/current technical accuracy;
- deprecated versions or commands;
- stale pricing/tier claims;
- broken or redirected links;
- screenshots that no longer help;
- unsupported or overly absolute claims;
- confidential/public-disclosure concerns;
- relevance to current professional positioning;
- readability and established voice;
- duplication across the series.

Known examples already identified:

- Terraform: remote-state locking guidance needs current verification; old DynamoDB-locking guidance may be deprecated.
- GitHub Actions: workflow example uses older action/runtime versions and warrants refresh.
- New Relic: current product/observability terminology warrants verification.
- `We have a blog!`: describes the site as brand new/work-in-progress and should be reframed or retired from feature prominence while preserving history.

## Series model direction

Candidate typed metadata:

```yaml
series: "Git to Know You"
seriesOrder: 7
seriesStatus: "ongoing"
updated: 2026-08-08 # only when materially revised
```

Exact schema is an implementation decision after the audit. Prefer metadata over hard-coded title parsing.

Future archive behavior may show lightweight series grouping/count/status once multiple series make it useful. Avoid filters/carousels/category UI until archive size demonstrates a real need.

## Planning model for the portfolio

The portfolio keeps a **lightweight roadmap plus bounded sprints**.

This is not a product backlog that needs artificial quarterly phases. The roadmap contains only durable direction, known maintenance themes, and meaningful future capabilities. Concrete changes open a bounded sprint, receive evidence/owner gates, and close.

Examples of recurring maintenance that do not require a permanent active sprint:

- dependency updates;
- stale-link/article checks;
- featured-writing refresh;
- case-study updates after career changes;
- occasional design/accessibility regression review.

A sprint is appropriate when work has a meaningful multi-file outcome, research decision, migration, new series, or publication batch.

## Work packages

### P7-WP1 — editorial strategy / topic relevance / AI contract — ACTIVE

Establish sustainable authoring and decide what the series should cover before drafting new articles.

### P7-WP2 — existing nine-post audit

Classify and substantively review every current article.

### P7-WP3 — content schema and series/update metadata

Implement only the metadata/navigation justified by WP2.

### P7-WP4 — priority article refresh batch

Refresh the highest-value stale posts with current sources and honest modified dates.

### P7-WP5 — Git to Know You continuation decision

Deep-research candidate remaining/replacement topics and select the next article sequence.

### P7-WP6 — AI drafting template and publication workflow

Codify a reusable research -> draft -> verify -> owner review -> PR -> deploy flow.

### P7-WP7 — browser/editorial regression and owner gate

Validate archive/articles across viewports and obtain owner approval before publication/deployment.

## Public-repository boundary

Repository documentation may demonstrate the editorial/AI workflow, but must not contain private job-search strategy, personal scheduling pressure, unpublished employer information, private source material, or conversational scratchpad. Keep only sanitized decisions needed to reproduce the public engineering/editorial process.
