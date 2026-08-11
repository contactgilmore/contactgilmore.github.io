# Active Sprint

Status: **P9 ACTIVE — EDITORIAL VOICE / FULL BLOG QUALITY**  
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
open portfolio PRs at sprint open: none
```

The current website remains the previously deployed post-P8 employer-facing polish. The two P9-opening housekeeping commits on `main` added and immediately removed the sprint record by mistake; corrected `main` has the exact same tracked content tree as before that error. P9 implementation proceeds only on the bounded branch.

## Sprint goal

Restore a coherent human technical-blog voice across Writing without weakening factual rigor, beginner accessibility, web scannability, public safety, or AI-assisted production discipline.

The specific quality failure to correct is the visible editorial discontinuity between the established human-written / AI-assisted corpus and the August 8 AI-created articles. The newer posts are technically strong but overuse isolated one-sentence paragraphs, dense concept-by-concept sectioning, repeated explanatory templates, and upstream-documentation-style completeness.

## Work-package state

```text
P9-WP1 external editorial research + all-12-article corpus audit     COMPLETE
P9-WP2 durable house voice / AI editorial authority                 IN PROGRESS
P9-WP3 priority August 8 article repair                             QUEUED
P9-WP4 earlier-corpus targeted disposition                          AUDITED / MOSTLY KEEP
P9-WP5 build/browser/accessibility/publication evidence             QUEUED
```

## Priority article disposition

```text
OpenTelemetry                 STRUCTURAL REWRITE
Argo CD / GitOps              STRUCTURAL REWRITE
Kubernetes                    MODERATE REWRITE
Prompt. Prove. Ship. intro    MODERATE PROSE-RHYTHM REWRITE
```

Earlier articles are the internal voice baseline and are not to be normalized merely for consistency. Rundeck, New Relic, PagerDuty, Terraform, and GitHub Actions are primary benchmarks. Git retains intentional rough-edged personality. Cursor receives at most narrowly justified light polish.

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

## Protected boundaries

- Preserve publication dates, slugs, routes, series identity/order, and historical publication truth.
- Add `updated: 2026-08-10` to materially rewritten existing articles rather than changing original dates.
- Never invent tool usage, employer/customer stories, incidents, metrics, screenshots, or first-person events.
- First person is encouraged for truthful experience and clearly framed judgment/opinion.
- Do not remove necessary technical/security caveats merely to shorten an article.
- Do not write to an SEO word count; length follows the reader outcome.
- Do not create a parallel blog-style doctrine file when existing editorial/product authority can own the rule.
- No unrelated homepage, Work, case-study, runtime, visual-system, or infrastructure changes.

## Required proof

Before owner publication review:

```text
complete article/content diff review
current factual/link verification for retained time-sensitive claims
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
