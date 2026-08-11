# Where We Are

Status: active living state  
Updated: 2026-08-10

## Production authority

Portfolio 2.0 is live at `https://contactgilmore.github.io/` using Astro and GitHub Pages workflow publishing.

Current production truth:

```text
production branch: main
current material release: P9 — Editorial Voice and Full Blog Quality
production merge: 80614d4d24c6f7fbf6087ed2325f27a63786d3d2
Pages deployment run: 31454588266 — SUCCESS
production Validate Astro migration: 31454588241 — SUCCESS
production Playwright portfolio smoke: 31454588274 — SUCCESS
production deployment policy: automatic after approved merge to main
manual workflow_dispatch: fallback only
```

There is **no active implementation sprint**.

Most recently completed sprint:

`docs/sprints/SPRINT_P9_EDITORIAL_VOICE_AND_FULL_BLOG_QUALITY_2026-08-10.md`

## Current product posture

The site remains a professional portfolio and technical-writing platform positioned around:

```text
Technical Delivery & Customer Solutions
Implementation & Technical Delivery
Integrations & Troubleshooting
Customer & Stakeholder Leadership
```

Top-level structure remains:

```text
Home / Work / Writing / About / Resume
```

Current professional case studies remain:

```text
/work/implementation-delivery/
/work/reliability-remediation/
/work/operating-model/
```

No P9 layout, CSS, component, routing, asset, homepage, Work, About, Resume, runtime, or infrastructure behavior changed.

## Writing state

### Git to Know You — complete

Git to Know You remains a completed #1–#10 beginner-friendly series. No #11 is implied.

P9 audited all 12 current Astro articles. The earlier eight entries were intentionally retained unchanged and now serve as the internal voice baseline:

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

Materially revised and owner-approved in P9:

```text
Kubernetes                    moderate editorial rewrite
OpenTelemetry                 structural editorial rewrite
Argo CD / GitOps              structural editorial rewrite
Prompt. Prove. Ship. intro    prose-rhythm rewrite
```

All four preserve original publication dates, routes, slugs, thumbnails, series metadata, and historical ordering metadata. Each uses `updated: 2026-08-10`. Prompt retains its immutable `publishedAt`.

### Prompt. Prove. Ship. — introduced

Series promise remains:

**AI-assisted engineering without outsourcing judgment.**

The introduction remains published and featured. No numbered follow-on article is committed yet.

P9 is a corrective editorial-quality sprint and does **not** count as the future focused Prompt. Prove. Ship. content arc.

## Durable editorial decisions

Authority remains:

`docs/editorial/AI_ASSISTED_PUBLISHING_WORKFLOW.md`

The portfolio house standard now explicitly treats substantial long-form posts as **technical essay/tutorial hybrids**, not condensed copies of upstream documentation.

Durable rules:

- source packs are evidence, not automatic outlines;
- research breadth may exceed publication breadth;
- cohesive short paragraphs are the normal blog rhythm;
- one-sentence paragraphs remain available for genuine emphasis, transition, humor, or deliberately isolated conclusions, not as the dominant cadence;
- headings mark meaningful changes in the reader's question/task rather than every new term;
- lists are for genuinely list-shaped material;
- substantial posts should add authorial value beyond source synthesis through verified experience, grounded professional judgment, analogy, recommendation, tradeoff analysis, or a useful mental model;
- AI-assisted drafts require explicit voice review separate from factual/technical verification;
- the earlier human-written / AI-assisted corpus is the primary internal voice reference;
- do not use AI detectors as authorship or quality gates;
- never invent tool usage, employer/customer stories, incidents, metrics, screenshots, or first-person events;
- first person is appropriate for truthful experience and clearly framed judgment/opinion;
- Writing is a professional proof surface, so material public voice/representation changes require owner editorial approval.

Product content authority in `docs/product/contactgilmore-portfolio/02_CONTENT_AND_INFORMATION_ARCHITECTURE.md` also records Writing as professional proof, not only a reference archive.

## P9 verification and release

Exact implementation/browser-certified head:

`266eb4079bc3e30e9ecd74ff5e52a0f382616d29`

Candidate proof:

```text
Validate Astro migration #264 / 31452230462 — SUCCESS
Playwright portfolio smoke #233 / 31452230492 — SUCCESS
125 passed / 4 intentional skips
artifact: 9086752892
artifact digest: sha256:9a6b78871db1f3915d4e09be5e465a66830da696a20e743ab7b84190de1c266b
```

Owner-local proof on the final review branch:

```text
Astro 7.2.0 build — 21 pages / PASS
Playwright 1.62.1 — 125 passed / 4 intentional skips / 0 failures
clean preview on 127.0.0.1:4322
initial visual scan — PASS
final voice/tone/editorial read — APPROVED
```

Production proof on merge `80614d4d24c6f7fbf6087ed2325f27a63786d3d2`:

```text
Pages — SUCCESS
Validate Astro migration — SUCCESS
Playwright portfolio smoke — SUCCESS
```

## Other durable site decisions

- Astro 7+ with TypeScript/content collections remains the static-site foundation.
- The smoke-tested Portfolio 2.0 visual system remains brand authority.
- The owner-approved MacBook homepage hero calibration remains deployed.
- Writing ordering remains deterministic: immutable `publishedAt` when present, then visible publication date, series order, and stable content ID. `updated` never promotes an older article.
- Series introductions remain subtle light-neutral divider cards.
- Thumbnails are wordless by default; series introductions use conceptual artwork rather than repeating title/series copy.
- Work case-study actions retain deliberate spacing from capability pills.
- GitHub-hosted runners remain the ordinary public-repository workflow environment; do not expose private self-hosted infrastructure.
- Merge to `main` remains human production authorization; Pages deployment is the automated consequence.
- Canonical sprint execution records live under `docs/sprints/`; completed records become archive-eligible after 30 calendar days and routine startup does not read `docs/sprints/archive/`.
- Avoid duplicate summaries and parallel doctrine files when existing authority can own a rule.

## Next-work posture

Do not manufacture another sprint merely because P9 closed.

A future focused **Prompt. Prove. Ship.** content sprint may select the strongest durable topics around repository context, bounded autonomy, controlled tool access, claim-matching proof, troubleshooting, and review/release controls. Topic order and article count are not yet commitments.

After that focused writing arc:

1. pause new content;
2. perform one deliberate employer-readiness/web-administration-quality pass across Home / Work / Writing / About / Resume;
3. fix only material issues;
4. publish the accepted final polish;
5. favor a stability period over continuous cosmetic churn.

One non-blocking visual observation remains for that later final pass: the upper-right homepage focus rail may still feel slightly open above its rule. Do not add filler merely to occupy space.

## Public-safety boundary

Do not publish private correspondence, customer identities, proprietary employer/customer artifacts, credentials, private infrastructure details, private addresses/phone numbers, health/financial information, unsupported metrics, or private job-search/personal context.

A fresh chat must recover this same state from repository authority without depending on conversation memory or routine reading of archived sprint records.
