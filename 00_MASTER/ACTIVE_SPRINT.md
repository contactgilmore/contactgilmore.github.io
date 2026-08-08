# Active Sprint

Sprint: **P7 — Blog Editorial System and AI-Assisted Publishing**  
Status: ACTIVE  
Opened: 2026-08-08  
Branch: `portfolio-blog-editorial`

Current work package: **P7-WP4 — article refresh and series cleanup**

Sprint note: `docs/sprint_notes/SPRINT_P7_BLOG_EDITORIAL_SYSTEM_AND_AI_ASSISTED_PUBLISHING_2026-08-08.md`
Editorial workflow: `docs/editorial/AI_ASSISTED_PUBLISHING_WORKFLOW.md`

Production baseline:

```text
P6 accepted and squash-merged to main: 21031c0a18ae1c10ab9bafcbd0922c4b620c5383
GitHub Pages build type: workflow
production deployment: manual-only
```

P7 status:

```text
P7-WP1 editorial strategy / topic relevance / AI authoring contract: COMPLETE
P7-WP2 existing-content editorial audit: COMPLETE
P7-WP3 content schema and updated/series metadata foundation: COMPLETE
P7-WP4 article refresh and series cleanup: ACTIVE
P7-WP5 Git to Know You continuation decision: COMPLETE
P7-WP6 reusable AI publication workflow: COMPLETE
P7-WP7 browser/editorial regression and owner gate: PENDING
```

## Accepted editorial decisions

- Original publication dates remain historical facts.
- Materially revised articles may receive a separate `updated` date and `dateModified` structured data.
- The clean Writing list remains the default archive presentation.
- Series metadata is typed in the Astro content schema rather than inferred permanently from title strings.
- GPT is the default research/drafting engine but must not invent personal experience, employer/customer stories, metrics, screenshots, or first-person claims.
- Product-logo thumbnails remain the default for tool articles; overview/concept articles may use a distinct series-level graphic.
- `We have a blog!` is retired from the active article set. `/we-have-a-blog/` remains as a compatibility page and the old thumbnail is removed.
- `Git to Know You: SRE Tools` is now a living series introduction rather than a fixed 2025 top-ten promise.
- Final continuation sequence: **#8 Kubernetes -> #9 OpenTelemetry -> #10 Argo CD / GitOps**.
- AWS moves to a possible future cloud-foundations series rather than one oversized generic tool article.
- FireHydrant is no longer required to complete Git to Know You.

## Current P7-WP4 scope

- finish targeted refreshes for existing articles according to the audit rather than rewriting everything mechanically;
- apply/normalize series metadata where useful;
- replace the SRE Tools overview thumbnail with a stronger series-level graphic;
- keep article claims, links, product naming, versions, pricing language, and screenshots current enough for publication;
- preserve real professional stories after public-disclosure review.

## Portfolio planning model

Maintain a lightweight directional roadmap for durable themes and known future work, but execute changes through bounded one-off/maintenance sprints when there is a concrete outcome.

Roadmap answers **where the portfolio is heading**. Sprints answer **what we are changing now**.

## Public-repository rule

All P7 notes, drafts committed to Git, source research summaries, PRs, workflow artifacts, and metadata are public artifacts. Do not use the repository as private brainstorming memory. Research notes must be concise, sanitized, professionally readable, and necessary to reproduce an editorial decision.
