# Where We Are

Status: active living state  
Updated: 2026-08-08

## Production authority

Portfolio 2.0 is live at `https://contactgilmore.github.io/` using Astro and GitHub Pages workflow publishing.

Current production truth:

```text
production branch: main
current production merge: fad90493ab0cad61fee834cdace94256e97e8557
current release: P8 quality ratchet + Prompt. Prove. Ship. introduction
automatic deployment run: 31290363581
result: SUCCESS
production deployment policy: automatic after approved merge to main
manual workflow dispatch: fallback only
```

Final P8 candidate evidence:

```text
candidate head: 151c32f6a012fba970c3d678c5a566062b47f5ec
Validate Astro migration: 31290157900 — SUCCESS
Playwright portfolio smoke: 31290157896 — SUCCESS
Playwright result: 116 passed / 4 intentional skips
asset audit: 22 referenced / 22 present / 0 orphan
Astro output: 21 pages
Playwright artifact: 9031135480
artifact digest: sha256:e0cc0cefefa63525965fb15683f8b9c7e3b0096d73c2c23c01c66471627fbd0c
```

There is **no active implementation sprint**.

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
- Owner/local browser smoke tests should reuse the documented shared Playwright environment before installing duplicate browser tooling.
- Product/tool logo thumbnails should prefer authoritative SVG artwork and use a contained logo-card treatment rather than crop-to-fill behavior. If only raster artwork is available, use a 16:9 source at 1600×900 or larger with generous whitespace.
- GPT should continue autonomously through routine bounded repository work until a genuine owner decision, local-only proof, scope expansion, safety uncertainty, or production gate is reached; owner gates should be concise and mobile-friendly without weakening evidence requirements.
- Canonical sprint execution records live under `docs/sprints/`. Closed records remain there for 30 calendar days after their recorded close date, then become eligible for Git move to `docs/sprints/archive/`; routine startup does not read the archive.
- Avoid documentation duplication. Living state points to one authoritative sprint record rather than creating parallel summaries.

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
- Fresh-chat governance now explicitly favors autonomous bounded execution, exact-head proof, concise owner gates, and low owner friction without weakening quality.
- Sprint execution records were standardized under `docs/sprints/` with a 30-day recent-history window and historical-only archive.
- The homepage hero was structurally recalibrated for laptop-class viewports; a focused test caught an initial first-viewport failure, the implementation was corrected without weakening the test, and the owner approved the final MacBook presentation.
- Standard desktop regression now exercises 1440×900, with focused 1440×900 and 1280×800 hero checks.
- **Prompt. Prove. Ship.** is the approved next series direction.
- **Prompt. Prove. Ship.: From Chat to Change** is published at `/prompt-prove-ship/` with a purpose-built vector thumbnail and intentional homepage feature placement.
- The new intro and existing portfolio surfaces passed responsive/browser/accessibility regression before merge.

## Writing state

### Git to Know You — complete

The first series runs from Rundeck through Argo CD / GitOps. Its overview and #1–#10 entries are explicitly complete and remain a coherent beginner-friendly learning path.

### Prompt. Prove. Ship. — introduced

Series promise:

**AI-assisted engineering without outsourcing judgment.**

The published introduction moves from tool education into the operating model around AI-assisted engineering: repository context, bounded work, claim-matching evidence, safe autonomy, review, and release control.

No numbered follow-on article is currently committed. A later focused sprint may choose the strongest sequence from the series foundation rather than manufacturing a calendar.

Cloud Foundations remains a later candidate.

## Brand note

The MacBook-class hero issue is resolved and deployed. One intentionally non-blocking observation remains for the later employer-readiness pass: the upper-right focus rail may feel slightly open above its horizontal rule. Do not add decorative filler now; revisit only if the composition still feels unfinished in the final full-site review.

## Employer-readiness finish line

After the next focused Prompt. Prove. Ship. writing arc:

1. pause new content;
2. run one deliberate employer-facing final pass across Home / Work / Writing / About / Resume;
3. evaluate recruiter scanability, web-administration quality, responsive behavior, accessibility, metadata/discoverability, links, public safety, visual consistency, performance, and documentation/assets;
4. fix only material issues;
5. publish the accepted final polish;
6. enter a stability period instead of continuous cosmetic churn.

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
public-disclosure review
owner approval when public representation materially changes
merge to main
automatic GitHub Pages deployment
post-deploy verification
living-state closeout
```

A fresh chat must recover this same conclusion from repository authority without depending on conversation memory or routine reading of archived sprint records.
