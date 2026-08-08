# Active Sprint

Sprint: **P7 — Blog Editorial System and AI-Assisted Publishing**  
Status: ACTIVE  
Opened: 2026-08-08  
Branch: `portfolio-blog-editorial`

Current work package: **P7-WP4 — priority article refresh batch**

Sprint note: `docs/sprint_notes/SPRINT_P7_BLOG_EDITORIAL_SYSTEM_AND_AI_ASSISTED_PUBLISHING_2026-08-08.md`

Production baseline:

```text
P6 accepted and squash-merged to main: 21031c0a18ae1c10ab9bafcbd0922c4b620c5383
GitHub Pages build type: workflow
production deployment: manual-only
```

Completed P7 scope:

```text
P7-WP1 editorial strategy / topic relevance / AI authoring contract: COMPLETE
P7-WP2 existing nine-post editorial audit: COMPLETE
P7-WP3 content schema and series/update metadata foundation: COMPLETE
P7-WP4 priority article refresh batch: ACTIVE
P7-WP5 Git to Know You continuation decision: PENDING
P7-WP6 reusable AI publication workflow: PENDING
P7-WP7 browser/editorial regression and owner gate: PENDING
```

## Editorial decisions

- Original publication dates remain historical facts.
- Materially revised articles may receive a separate `updated` date and `dateModified` structured data.
- The clean Writing list remains the default archive presentation.
- Series metadata is typed in the Astro content schema rather than inferred permanently from title strings.
- AWS, Argo CD, and FireHydrant are candidates, not obligations; future topics require current relevance research.
- GPT is the default research/drafting engine but must not invent personal experience, employer/customer stories, metrics, or first-person claims.

## Existing-post audit result

```text
We have a blog!        REFRAME / retire from feature prominence
SRE Tools overview     REFRAME as living series introduction
Rundeck                 REFRESH
New Relic               REFRESH
PagerDuty               REFRESH
Git                     KEEP / light refresh
Terraform               REFRESH — high priority
GitHub Actions          REFRESH — high priority
Cursor                  KEEP / targeted refresh
```

## P7-WP4 priority

Refresh Terraform and GitHub Actions first because both contain materially stale technical guidance/examples. Preserve the real professional stories while correcting current product/runtime guidance and overly absolute claims. Add an honest updated date only after substantive revision.

## Portfolio planning model

Maintain a lightweight directional roadmap for durable themes and known future work, but execute changes through bounded one-off/maintenance sprints when there is a concrete outcome.

Roadmap answers **where the portfolio is heading**. Sprints answer **what we are changing now**.

## Public-repository rule

All P7 notes, drafts committed to Git, source research summaries, PRs, workflow artifacts, and metadata are public artifacts. Do not use the repository as private brainstorming memory. Research notes must be concise, sanitized, professionally readable, and necessary to reproduce an editorial decision.
