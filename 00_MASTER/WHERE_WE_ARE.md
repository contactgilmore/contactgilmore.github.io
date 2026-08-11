# Where We Are

Status: active living state  
Updated: 2026-08-10

## Production authority

Portfolio 2.0 is live at `https://contactgilmore.github.io/` using Astro and GitHub Pages workflow publishing.

Current repository/production truth:

```text
production branch: main
current GitHub main at P9 open: ed22dbc186429e6f8f1fe098fd4e26a3c670bf27
current main content tree: 89cb31cf7b823bedd826c1ba16001c42d36bb37e
last material website release: post-P8 employer-facing polish — Writing order/series intros + Work spacing
material release merge: e4f368365a36923295d0c4272a2caeb0ea67f05f
automatic deployment run: 31293406396
result: SUCCESS
production Validate Astro migration: 31293406399 — SUCCESS
production Playwright portfolio smoke: 31293406404 — SUCCESS
production deployment policy: automatic after approved merge to main
manual workflow dispatch: fallback only
```

The two P9-opening housekeeping commits on `main` added and immediately removed the P9 sprint record by mistake. Corrected `main` has the exact same tracked content tree as the pre-error portfolio authority, so no site/content source change survived the correction. Git history intentionally preserves the mistake and compensating removal.

Final approved pre-P9 website candidate evidence:

```text
candidate head: 09b5e21e7ba8fe98aaced5a84a6a72bac0e2c423
Validate Astro migration: 31293235502 — SUCCESS
Playwright portfolio smoke: 31293235506 — SUCCESS
Playwright result: 125 passed / 4 intentional skips
asset audit: 22 referenced / 22 present / 0 orphan
Astro output: 21 pages
Playwright artifact: 9032136163
artifact digest: sha256:99330d1e6d60a9486376767e13801744fe085aea0ada35778d0ece694f381bcb
```

## Active sprint

**P9 — Editorial Voice and Full Blog Quality** is active on:

```text
branch: portfolio-p9-editorial-voice
record: docs/sprints/SPRINT_P9_EDITORIAL_VOICE_AND_FULL_BLOG_QUALITY_2026-08-10.md
```

P9 was opened because the August 8 AI-created articles are technically strong but visibly different from the established human-written / AI-assisted corpus. The main defects are machine-like one-sentence paragraph cadence, over-sectioning, repeated explanatory templates, and source-pack completeness turning blog posts into condensed documentation.

## Durable decisions

- Astro 7+ with TypeScript/content collections is the production static-site foundation.
- Use GitHub-hosted runners for ordinary public-repository workflows; do not expose private self-hosted infrastructure.
- Treat repository content, docs, branches, PRs, logs, artifacts, screenshots, and metadata as public disclosure surfaces.
- Public docs may demonstrate SDLC, sprint execution, CI/CD, testing, accessibility, release controls, rollback planning, and responsible AI-assisted delivery, but must never become private project memory.
- Retain only public assets with a current content, brand, or compatibility purpose.
- Avoid React/CMS/database additions unless a real requirement justifies them.
- The smoke-tested Portfolio 2.0 visual system remains brand authority.
- Merge to `main` is the human production authorization; GitHub Pages deploys automatically from pushes to `main` after the workflow's build/integrity gates pass.
- `workflow_dispatch` remains an operational fallback, not the normal release path.
- Portfolio planning uses a lightweight directional roadmap plus bounded sprints for concrete work.
- Date-only editorial metadata must render as the stored calendar date regardless of build-machine timezone.
- `publishedAt`, when present, is immutable first-publication/production-authorization metadata used for deterministic ordering. It is never replaced by a later merge timestamp. Later revisions use `updated`, and revision metadata never promotes an older article in publication order.
- Same-day Writing order resolves deterministically by `publishedAt` when present, then visible publication date, series order, and stable content ID.
- Series introductions use a restrained light-neutral divider-card treatment in Writing.
- Thumbnails are wordless by default. Series overviews/intros use conceptual artwork rather than repeating article title, series name, slogan, or explanatory copy inside the image.
- Product/tool logo thumbnails should prefer authoritative SVG artwork and use a contained logo-card treatment rather than crop-to-fill behavior. If only raster artwork is available, use a 16:9 source at 1600×900 or larger with generous whitespace.
- Owner/local browser smoke tests should reuse the documented shared Playwright environment before installing duplicate browser tooling.
- GPT should continue autonomously through routine bounded repository work until a genuine owner decision, local-only proof, scope expansion, safety uncertainty, or production gate is reached; owner gates should be concise and mobile-friendly without weakening evidence requirements.
- Canonical sprint execution records live under `docs/sprints/`. Closed records remain there for 30 calendar days after their recorded close date, then become eligible for Git move to `docs/sprints/archive/`; routine startup does not read the archive.
- Avoid documentation duplication. Living state points to one authoritative sprint record rather than creating parallel summaries.
- Portfolio Writing is a professional proof surface, not only a technical reference archive.
- Long-form articles should normally be technical essay/tutorial hybrids: one useful mental model, cohesive prose, practical judgment, enough technical detail for the reader outcome, and links to authoritative docs for exhaustive reference detail.
- One-sentence paragraphs remain an intentional emphasis tool, not the default article cadence. Cohesive short paragraphs are the normal blog rhythm.
- AI-assisted factual rigor does not replace voice review. Material drafts must be compared with the established portfolio corpus for paragraph rhythm, narrative continuity, authorial signal, heading/list density, and generic AI-template repetition.

## Current production structure

```text
Home / Work / Writing / About / Resume
```

Current positioning:

```text
Technical Delivery & Customer Solutions
Implementation & Technical Delivery
Integrations & Troubleshooting
Customer & Stakeholder Leadership
```

Current case studies:

```text
/work/implementation-delivery/
/work/reliability-remediation/
/work/operating-model/
```

## P8 — complete and deployed

Sprint: **Portfolio Quality Ratchet and Series Transition**

Record:

`docs/sprints/SPRINT_P8_PORTFOLIO_QUALITY_RATCHET_AND_SERIES_TRANSITION_2026-08-08.md`

P8 outcomes:

- Git to Know You is durably closed as the first complete #1–#10 series; no #11 is implied.
- Stale pre-launch/product/architecture/versioning backlog language was reconciled with current production truth.
- Fresh-chat governance explicitly favors autonomous bounded execution, exact-head proof, concise owner gates, and low owner friction without weakening quality.
- Sprint execution records were standardized under `docs/sprints/` with a 30-day recent-history window and historical-only archive.
- The homepage hero was structurally recalibrated for laptop-class viewports; a focused test caught an initial first-viewport failure, the implementation was corrected without weakening the test, and the owner approved the final MacBook presentation.
- Standard desktop regression exercises 1440×900, with focused 1440×900 and 1280×800 hero checks.
- **Prompt. Prove. Ship.** is the approved next series direction.
- **Prompt. Prove. Ship.: From Chat to Change** is published at `/prompt-prove-ship/` and intentionally featured on the homepage.

## Post-P8 employer-facing polish — deployed

The approved bounded polish package refined presentation and editorial behavior without opening another sprint:

- Work cards now keep a deliberate gap between capability pills and `View case study` actions.
- Writing uses real/immutable publication ordering metadata when available, so same-day posts do not depend on arbitrary filename ordering.
- The Prompt. Prove. Ship. introduction leads the Aug 8 release batch while the visible publication date remains truthful.
- `updated` metadata is explicitly excluded from publication ordering; the Cursor regression protects this behavior.
- Series introductions stand out as subtle divider cards rather than ordinary rows.
- Git to Know You and Prompt. Prove. Ship. overview/introduction thumbnails use wordless conceptual SVG artwork.
- The owner questioned whether the homepage right-side rail had been rolled back. Verification confirmed `src/styles/home.css` was unchanged between the P8 production baseline and the polish candidate, and its later import continues to override older shared hero defaults. No homepage rollback occurred.

## Writing state

### Git to Know You — complete

The first series runs from Rundeck through Argo CD / GitOps. Its overview and #1–#10 entries are explicitly complete and remain a coherent beginner-friendly learning path.

### Prompt. Prove. Ship. — introduced

Series promise:

**AI-assisted engineering without outsourcing judgment.**

The published introduction moves from tool education into the operating model around AI-assisted engineering: repository context, bounded work, claim-matching evidence, safe autonomy, review, and release control.

No numbered follow-on article is currently committed. A later focused sprint may choose the strongest sequence from the series foundation rather than manufacturing a calendar.

Cloud Foundations remains a later candidate.

### P9 editorial audit — active

The full 12-article corpus has been read and compared with current technical-writing, people-first-content, web-readability, developer-tutorial/blog, and AI-authorship research.

Internal voice conclusion:

```text
Rundeck / New Relic / PagerDuty / Terraform / GitHub Actions = primary voice benchmarks
Git = strongest raw personality; preserve rather than normalize
Cursor = still recognizably authorial; only targeted polish if needed
```

Priority repair:

```text
OpenTelemetry                 STRUCTURAL REWRITE
Argo CD / GitOps              STRUCTURAL REWRITE
Kubernetes                    MODERATE REWRITE
Prompt. Prove. Ship. intro    MODERATE PROSE-RHYTHM REWRITE
```

The earlier corpus is not being rewritten for superficial consistency. It remains the voice source unless a specific reader/editorial defect justifies a narrow change.

P9 has strengthened the existing editorial workflow rather than creating another style-guide document. The durable standard now distinguishes blog writing from reference documentation, treats cohesive short paragraphs as the default rhythm, requires authorial value beyond source synthesis, constrains heading/list overuse, and adds an explicit voice review before technical sign-off.

Material article rewrites will preserve original publication dates/slugs/series metadata and add `updated: 2026-08-10`. Mike's editorial approval is required before the rewritten public articles merge because this changes professional representation.

## Brand note

The MacBook-class hero issue is resolved and deployed. One intentionally non-blocking observation remains for the later employer-readiness pass: the upper-right focus rail may feel slightly open above its rule. Do not add decorative filler now; revisit only if the composition still feels unfinished in the final full-site review.

## Employer-readiness finish line

After the next focused Prompt. Prove. Ship. writing arc:

1. pause new content;
2. run one deliberate employer-facing final pass across Home / Work / Writing / About / Resume;
3. evaluate recruiter scanability, web-administration quality, responsive behavior, accessibility, metadata/discoverability, links, public safety, visual consistency, performance, and documentation/assets;
4. fix only material issues;
5. publish the accepted final polish;
6. enter a stability period instead of continuous cosmetic churn.

P9 is a corrective quality sprint and does not count as the future numbered Prompt. Prove. Ship. content arc.

The portfolio should remain credible both as a professional profile and as a working example of content governance, accessibility, CI/CD, web administration, and disciplined AI-assisted delivery.

## Public-writing boundaries

Do not publish customer identities, private employer/customer artifacts, proprietary scripts/configuration, privileged topology, internal host names, ticket IDs, private RCA documents, private correspondence, unsupported metrics, or private job-search/personal context.

For AI-assisted articles, do not fabricate anecdotes or tool usage. Use sourced generic examples or ask for small factual input when a genuine first-person story materially improves an article.

## Verification posture

Material changes continue to follow:

```text
bounded branch
PR
exact-head applicable CI / route / asset / browser / accessibility checks
public-disclosure + editorial-voice review
owner approval when public representation materially changes
merge to main
automatic GitHub Pages deployment
post-deploy verification
living-state closeout
```

A fresh chat must recover this same conclusion from repository authority without depending on conversation memory or routine reading of archived sprint records.
