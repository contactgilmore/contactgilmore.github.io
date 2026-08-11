# Where We Are

Status: active living state  
Updated: 2026-08-10

## Production authority

Portfolio 2.0 is live at `https://contactgilmore.github.io/` using Astro and GitHub Pages workflow publishing.

Current production truth:

```text
production branch: main
current main at P10 open: d0c1600f2af85541084aa4afd888beaf0f2a48e5
last material site/content release: P9 — Editorial Voice and Full Blog Quality
P9 source merge: 80614d4d24c6f7fbf6087ed2325f27a63786d3d2
P9 Pages / Validate Astro / Playwright: SUCCESS
P9 closeout merge: d0c1600f2af85541084aa4afd888beaf0f2a48e5
production deployment policy: automatic after approved merge to main
```

## Active sprint

**P10 — Employer Readiness and Final Portfolio Polish** is active at the owner professional-representation gate.

```text
branch: p10-employer-readiness-final-polish
draft PR: #31
record: docs/sprints/SPRINT_P10_EMPLOYER_READINESS_AND_FINAL_PORTFOLIO_POLISH_2026-08-10.md
exact implementation/browser-certified head: 432b6aae2fed56dd78b998ae2781b58a681970e9
Validate Astro migration #267 / 31457749622: SUCCESS
Playwright portfolio smoke #236 / 31457749583: SUCCESS
Playwright: 140 passed / 4 intentional skips / 0 failures
artifact: 9088709831
artifact digest: sha256:f4b604d15fc4bab6dcc1092fc20c51869dd1190e5d6e39ea73f74c95a9450295
```

Blog article bodies are out of scope and unchanged. P9 remains their editorial authority.

## P10 audit conclusion

The full non-blog employer-facing scan covered Home, Work, all three case studies, About, Resume, the Writing index/global navigation, shared header/footer/meta shell, and desktop/tablet/phone evidence.

The approved Portfolio 2.0 design remains strong. P10 does **not** redesign the site. Keep the homepage hero/right focus rail, three-pillar proof hierarchy, case-study structure, About narrative, supported metrics, compact Home experience timeline, and responsive visual system.

## P10 candidate outcome

### Resume

`/resume/` now behaves like a scan-first resume while remaining web-native and public-safe:

```text
Mike Gilmore
Technical Delivery & Customer Solutions
concise professional summary
Salt Lake City area
public email / LinkedIn / GitHub
```

The professional summary is no longer first-person portfolio prose. Existing capability tags, employer chronology, accomplishment bullets, and supported metrics remain intact. No education, certifications, dates, phone/address, or private details were invented.

### Proof precision and evaluation flow

- `permanent remediation` became evidence-aligned `durable remediation` on employer-facing proof surfaces.
- `shared operating system` became literal `shared operating model` where it describes the program-delivery case.
- All three case studies now end with both `Back to selected work` and `View resume`.
- No supported metrics were removed or inflated.

### Navigation and site identity

- Work remains current on nested `/work/*` routes.
- Writing remains current on article routes without article-body edits.
- Added a stable 96×96 MG favicon matching the existing brand mark.
- Added `og:site_name` and home `WebSite` structured data.
- Work, About, Writing, and Resume use clearer compact document titles.
- Homepage hero composition remains unchanged.

### Documentation hygiene

Product doctrine's exactly-five-file rule is restored for `docs/product/contactgilmore-portfolio/`.

The full case-study truth/evidence authority was consolidated into:

`docs/product/contactgilmore-portfolio/03_PROOF_AND_CASE_STUDY_STRATEGY.md`

before redundant `05_CASE_STUDY_TRUTH_MAP.md` was removed. Historical P4 provenance referring to the old filename remains intentionally historical and is not live authority.

The product backlog now records P8/P9 as completed and stability as the default post-P10 posture.

## Exact-head proof

`432b6aae2fed56dd78b998ae2781b58a681970e9` passed:

```text
21 Astro pages
22 referenced public assets / 22 present / 0 orphan
140 Playwright passes
4 intentional project skips
0 failures
all P10 employer-readiness regressions on desktop/tablet/phone
representative axe accessibility
existing homepage/Work/Writing/series/browser contracts
```

Exact-head desktop/phone screenshots were reviewed. Resume reads as a resume; Work and case studies retain the approved visual system; Work current-state is visible on nested cases; the Work/Resume exit buttons fit the existing takeaway band; the homepage first viewport remains the approved composition. No new overflow, hierarchy, spacing, or responsive defect was found.

## Durable writing state

P9 is complete, owner approved, and deployed. Long-form authority remains:

`docs/editorial/AI_ASSISTED_PUBLISHING_WORKFLOW.md`

The earlier human-written / AI-assisted corpus remains the internal voice baseline, and the P9 owner-approved rewrites for Kubernetes, OpenTelemetry, Argo CD / GitOps, and Prompt. Prove. Ship. remain production truth. Do not reopen article bodies during P10.

## Durable site rules

- Home is scan-first and routes to proof.
- Work carries professional proof.
- About carries professional narrative and working style.
- Resume carries scan-first résumé evidence and should not behave like About or a blog.
- Writing carries long-form technical communication.
- Merge to `main` is human production authorization; Pages deployment is the automated consequence.
- Public repo artifacts must remain safe for unrestricted disclosure.
- Original publication dates and immutable `publishedAt` remain historical authority; `updated` never reorders publication chronology.
- Canonical sprint records live under `docs/sprints/` with the 30-day archive lifecycle.
- Avoid parallel doctrine/style files when existing authority can own the rule.

## Remaining gate

Mike reviews the material Resume/employer-facing candidate. If approved, mark PR #31 ready, merge, verify automatic Pages/production checks, close P10, and prefer stability over further cosmetic churn unless a real employer/user defect is found.

## Public-safety boundary

Do not publish private correspondence, customer identities, proprietary employer/customer artifacts, credentials, private infrastructure details, private addresses/phone numbers, health/financial information, unsupported metrics, or private job-search/personal context.

A fresh chat must recover this same state from repository authority without depending on conversation memory or routine reading of archived sprint records.
