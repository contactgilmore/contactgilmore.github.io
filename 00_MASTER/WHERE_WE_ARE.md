# Where We Are

Status: active living state  
Updated: 2026-08-11

## Central governance adoption

```text
current trusted repository main = 1d53cf919a928df3c6c2414e30d6688c8302fe28
central-adoption base = a78a3ea171acd176435817bd7fb06ea2f46e7212
CENTRAL_REPOSITORY_GOVERNANCE = REQUIRED
CENTRAL_DEVELOPMENT_GOVERNANCE = REQUIRED
CENTRAL_AUGUSTA_METHOD_BRAND = NOT_APPLICABLE
central snapshot = 4eaebde64a4a6ad3bf918d25c76812eae1db978a
```

The GOV-1 Portfolio reconciliation side package is COMPLETE on trusted repository main `1d53cf919a928df3c6c2414e30d6688c8302fe28`. PR #36 exact head `919d33c2de2c545a57a11a0f14647fc4ef3b60a7` passed Portfolio Governance run `31863980494`, Validate Astro run `31863980495`, and Playwright smoke run `31863980466`; successful Playwright produced zero failure artifacts. Post-merge main passed Portfolio Governance `31864145177`, Validate Astro `31864145203`, Playwright smoke `31864145165`, and Pages deployment `31864145155`. Actions caches remain zero. P10 production authority, public positioning, content, visual design, and the stability posture are unchanged; P10 merge `99bcd3a82cc37a99350d6eae2171b053d8f27199` and accepted artifact `9090915653` remain historical product/release evidence rather than current repository-head identity.

## Production authority

Portfolio 2.0 is live at `https://contactgilmore.github.io/` using Astro and GitHub Pages workflow publishing.

Current production truth:

```text
production branch: main
current material release: P10 — Employer Readiness and Final Portfolio Polish
implementation PR: #31
production merge: 99bcd3a82cc37a99350d6eae2171b053d8f27199
Pages deployment run: 31464158531 — SUCCESS
Validate Astro migration run: 31464158520 — SUCCESS
Playwright portfolio smoke run: 31464158526 — SUCCESS
Playwright: 140 passed / 4 intentional skips / 0 failures
production evidence artifact: 9090915653
artifact digest: sha256:d64e15e5b55379dc705c17397b48a016e6eba214d94448b34bd48e6bc98eba06
production deployment policy: automatic after approved merge to main
```

There is **no active implementation sprint**.

Most recently completed sprint:

`docs/sprints/SPRINT_P10_EMPLOYER_READINESS_AND_FINAL_PORTFOLIO_POLISH_2026-08-10.md`

P10 closed on 2026-08-11 and remains in `docs/sprints/` through the 30-day recent-history window.

## Current product posture

The site is a professional portfolio and technical-writing platform positioned around:

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

Primary professional case studies remain:

```text
/work/implementation-delivery/
/work/reliability-remediation/
/work/operating-model/
```

The P10 employer-readiness audit concluded that Portfolio 2.0 does **not** need another redesign. The approved homepage hero/right rail, three-pillar proof hierarchy, case-study composition, About narrative, supported metrics, compact experience timeline, responsive system, and P9 long-form article bodies remain deliberate authority.

Post-P10 default is **stability over cosmetic churn**.

## P10 accepted outcomes

### Resume

`/resume/` now behaves as a scan-first resume inside the Portfolio 2.0 visual system:

```text
Mike Gilmore
Technical Delivery & Customer Solutions
Salt Lake City area
public email / LinkedIn / GitHub
one Professional Summary
core capabilities
experience evidence
```

The hero is a resume header rather than a second narrative summary. The substantive Professional Summary is non-first-person and appears once. The final P10 scan removed duplicate role/summary positioning so experience evidence appears sooner, particularly on phone layouts.

Existing employer chronology, accomplishment bullets, supported metrics, and capability evidence remain intact. P10 did not invent education, certifications, dates, private phone/address data, or unsupported claims.

### Work and proof

- `permanent remediation` was tightened to evidence-aligned `durable remediation` on employer-facing proof surfaces.
- `shared operating system` was tightened to literal `shared operating model` where that wording better matches the evidence.
- All three professional case studies end with both `Back to selected work` and `View resume`.
- The canonical case-study truth/evidence authority is `docs/product/contactgilmore-portfolio/03_PROOF_AND_CASE_STUDY_STRATEGY.md`.
- No supported metrics were removed or inflated.

### Navigation and site identity

- Exact Work/Writing destinations use `aria-current="page"`.
- Nested Work case studies and Writing articles use `aria-current="location"` on the parent navigation item while retaining the same visual current state.
- Brand interaction authority is reconciled to that tested semantic rule.
- `/favicon.svg` is the stable MG site favicon.
- `og:site_name` and home `WebSite` structured data are present.
- Work, About, Writing, and Resume use clearer descriptive document titles.
- Homepage composition was not redesigned.

### Documentation hygiene

Product doctrine's five-document subject-folder rule is restored for `docs/product/contactgilmore-portfolio/`.

Case-study DIRECT / SAFE GENERALIZATION / SUPPORTING SKILLS / DO NOT CLAIM evidence was consolidated into canonical:

`docs/product/contactgilmore-portfolio/03_PROOF_AND_CASE_STUDY_STRATEGY.md`

Redundant `05_CASE_STUDY_TRUTH_MAP.md` was removed after consolidation. Historical P4 provenance that mentions the old filename remains historical only and is not current authority.

The product backlog records stability as the post-P10 posture.

## P10 verification and release

Final implementation/browser-certified source before closeout bookkeeping:

`db1e1f3a25ee8192909ee91655216084c66680e4`

Candidate evidence:

```text
Validate Astro migration #282 / run 31461649858 — SUCCESS
Playwright portfolio smoke #251 / run 31461649933 — SUCCESS
144 tests discovered / 140 passed / 4 intentional skips / 0 failures
21 Astro pages
22 referenced public assets / 22 present / 0 orphan
artifact: 9090048571
artifact digest: sha256:5283e324af164f6919e756695f3800fe2f1c750db9f471b4b3d0e10d57ac708e
```

Owner approved the final public Resume and bounded employer-facing representation. PR #31 was then marked ready and squash-merged to `main` as:

`99bcd3a82cc37a99350d6eae2171b053d8f27199`

Production proof on that exact merge:

```text
Deploy Portfolio to GitHub Pages run 31464158531 — SUCCESS
Validate Astro migration run 31464158520 — SUCCESS
Playwright portfolio smoke run 31464158526 — SUCCESS
144 tests discovered / 140 passed / 4 intentional skips / 0 failures
21 Astro pages
22 referenced public assets / 22 present / 0 orphan
production artifact: 9090915653
production digest: sha256:d64e15e5b55379dc705c17397b48a016e6eba214d94448b34bd48e6bc98eba06
```

The production suite verified the Home, Work, all three professional case studies, Writing, About, Resume, current-location navigation, employer-readiness contracts, existing writing/series regressions, and representative axe accessibility coverage across desktop/tablet/phone.

## Durable writing state

P9 — Editorial Voice and Full Blog Quality — remains the long-form editorial authority.

Detailed rules live in:

`docs/editorial/AI_ASSISTED_PUBLISHING_WORKFLOW.md`

Durable P9 rules include:

- substantial posts are technical essay/tutorial hybrids rather than condensed upstream documentation;
- source packs are evidence, not automatic outlines;
- research breadth may exceed publication breadth;
- cohesive short paragraphs are the normal long-form rhythm;
- one-sentence paragraphs are for intentional emphasis, transition, humor, or isolated conclusions rather than the dominant cadence;
- headings mark meaningful changes in the reader's question/task;
- lists are for genuinely list-shaped material;
- substantial writing should add verified experience, grounded judgment, analogy, recommendation, tradeoff analysis, or another useful authorial signal beyond source synthesis;
- AI-assisted drafts require explicit voice review separate from factual/technical verification;
- the earlier human-written / AI-assisted corpus remains the internal voice reference;
- never invent tool use, employer/customer stories, incidents, metrics, screenshots, or first-person events;
- Writing is professional proof, so material public voice/representation changes require owner editorial approval.

P10 did not reopen blog article bodies. Resume, About, Work, Home, and Writing have different reading jobs; blog paragraph rules must not be mechanically normalized across those surfaces.

## Durable site rules

- Home is scan-first and routes to proof.
- Work carries professional evidence.
- Case studies demonstrate role, judgment, approach, and supported outcomes.
- About carries concise professional narrative and working style.
- Resume carries scan-first resume evidence and should not behave like About or a blog.
- Writing carries long-form technical communication and professional point of view.
- Merge to `main` is human production authorization; Pages deployment is the automated consequence.
- Public repository artifacts must remain safe for unrestricted disclosure and professional review.
- Original article publication dates and immutable `publishedAt` remain historical authority; `updated` never reorders publication chronology.
- Canonical sprint records live under `docs/sprints/`; completed records become archive-eligible after 30 calendar days and routine startup does not read `docs/sprints/archive/`.
- Avoid duplicate summaries and parallel doctrine/style files when existing authority can own the rule.

## Next-work posture

Do not manufacture another sprint merely because P10 closed.

The previously discussed focused **Prompt. Prove. Ship.** writing arc remains directional rather than committed. If it is pursued later, it must follow the P9 editorial standard from the first outline and should be opened as a deliberate bounded content sprint.

Other work should be triggered by evidence, such as:

- meaningful new professional experience or case-study proof;
- a real employer/user defect;
- stale/broken external links or time-sensitive technical claims;
- dependency/security/browser maintenance;
- a deliberate useful article or writing arc;
- a performance/accessibility/discoverability issue supported by evidence.

Do not continue polishing the current Portfolio 2.0 surfaces merely to make them different.

## Public-safety boundary

Do not publish private correspondence, customer identities, proprietary employer/customer artifacts, credentials, private infrastructure details, private addresses/phone numbers, health/financial information, unsupported metrics, or private job-search/personal context.

A fresh chat must recover this same production/stability state from repository authority without depending on conversation memory or routine reading of archived sprint records.
