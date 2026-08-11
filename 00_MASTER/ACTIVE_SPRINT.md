# Active Sprint

Status: **P9 ACTIVE — VERIFICATION / OWNER EDITORIAL GATE PREP**  
Updated: 2026-08-10

Sprint: **P9 — Editorial Voice and Full Blog Quality**

Sprint record:

`docs/sprints/SPRINT_P9_EDITORIAL_VOICE_AND_FULL_BLOG_QUALITY_2026-08-10.md`

Current GitHub authority:

```text
production branch: main
current GitHub main: ed22dbc186429e6f8f1fe098fd4e26a3c670bf27
main content tree: 89cb31cf7b823bedd826c1ba16001c42d36bb37e
P9 branch: portfolio-p9-editorial-voice
draft PR: #29
last article-rewrite head before verification docs: 0691ee8d9eba3a1c9d49869ea54181fdeb6a7a5b
```

The current website remains the previously deployed post-P8 employer-facing polish. The two P9-opening housekeeping commits on `main` added and immediately removed the sprint record by mistake; corrected `main` has the exact same tracked content tree as before that error. P9 implementation proceeds only on the bounded branch.

## Sprint goal

Restore a coherent human technical-blog voice across Writing without weakening factual rigor, beginner accessibility, web scannability, public safety, or AI-assisted production discipline.

The specific quality failure is the visible editorial discontinuity between the established human-written / AI-assisted corpus and the August 8 AI-created articles. The newer posts were technically strong but overused isolated one-sentence paragraphs, dense concept-by-concept sectioning, repeated explanatory templates, and upstream-documentation-style completeness.

## Work-package state

```text
P9-WP1 external editorial research + all-12-article corpus audit     COMPLETE
P9-WP2 durable house voice / AI editorial authority                 COMPLETE
P9-WP3 priority August 8 article repair                             COMPLETE
P9-WP4 earlier-corpus targeted disposition                          COMPLETE — 8 RETAINED
P9-WP5 build/browser/accessibility/publication evidence             IN PROGRESS
```

## Article disposition

Materially revised with `updated: 2026-08-10`:

```text
OpenTelemetry                 structural rewrite complete
Argo CD / GitOps              structural rewrite complete
Kubernetes                    moderate rewrite complete
Prompt. Prove. Ship. intro    prose-rhythm rewrite complete
```

Intentionally retained after full-corpus review:

```text
SRE Tools overview
Rundeck
New Relic
PagerDuty
Git
Terraform
GitHub Actions
Cursor
```

The earlier articles remain the internal voice baseline. They were not changed merely to manufacture uniformity.

## Durable editorial direction

Portfolio long-form writing should behave as a **technical essay/tutorial hybrid**:

```text
human reason to care
-> one primary mental model
-> cohesive short paragraphs
-> truthful experience when available OR grounded author judgment
-> practical example/workflow
-> tradeoffs/failure modes
-> safe starting path
-> conclusion that returns to the operating idea
```

Scannability does not mean fragmenting every idea into a one-sentence paragraph or heading. One-sentence paragraphs remain available for deliberate emphasis, but cohesive multi-sentence paragraphs are the default blog rhythm.

Detailed house voice and AI-drafting review authority:

`docs/editorial/AI_ASSISTED_PUBLISHING_WORKFLOW.md`

## Verification already complete

- all 12 current blog articles were read and dispositioned;
- current external first-party links retained by the four rewritten articles were re-opened and verified against Kubernetes, OpenTelemetry, Argo CD/OpenGitOps, OpenAI, and GitHub documentation;
- no invented personal technology implementation story, customer/employer event, metric, or screenshot was added;
- article publication dates, slugs, routes, series metadata, thumbnails, and Prompt `publishedAt` remain preserved.

## Protected boundaries

- Preserve publication dates, slugs, routes, series identity/order, and historical publication truth.
- Never invent tool usage, employer/customer stories, incidents, metrics, screenshots, or first-person events.
- First person is encouraged for truthful experience and clearly framed judgment/opinion.
- Do not remove necessary technical/security caveats merely to shorten an article.
- Do not write to an SEO word count; length follows the reader outcome.
- Do not create a parallel blog-style doctrine file when existing editorial/product authority can own the rule.
- No unrelated homepage, Work, case-study, runtime, visual-system, or infrastructure changes.

## Remaining proof before owner review

```text
exact changed-file/material-diff review
Astro/content/build integrity
asset/internal-link integrity
Playwright desktop/tablet/phone smoke
representative axe accessibility coverage
rendered long-form visual/readability review
public-disclosure/professional-read review
```

## Owner gate

Mike must review the materially rewritten public articles before merge because they are public professional representation. GPT owns the repository mechanics and verification leading to that gate.

## Release model

```text
bounded P9 branch
-> draft PR while editorial/technical evidence is incomplete
-> exact-head CI / browser / accessibility proof
-> owner editorial approval
-> merge to main = production authorization
-> automatic GitHub Pages deployment
-> live verification
-> living-state closeout
```
