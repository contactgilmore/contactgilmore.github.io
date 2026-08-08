# Sprint P4 — Professional Case Studies and Content Refresh

Opened: 2026-08-08  
Status: OPEN  
Owner: Mike Gilmore  
Project manager/executor: GPT  
Working branch: `portfolio-2.0-foundation`

## Thesis

Turn the proven Portfolio 2.0 visual shell into stronger professional evidence. Replace broad capability claims with public-safe case-study narratives grounded in Mike's current resumes and already-public professional claims, while keeping the site concise enough for recruiter scanning.

## Source-of-truth posture

Primary evidence for this sprint comes from Mike's current 2026-08-08 resumes and existing approved portfolio copy. Do not invent outcomes, customer names, timelines, internal system details, architecture specifics, or metrics.

Public-safe resume-supported evidence currently includes:

```text
100+ enterprise migrations / implementations / deployments
40% faster deployments
50% lower onboarding effort
30% lower onboarding escalations
20% lower cloud costs
55% lower repeat customer escalations
99.9% availability / SLA support
60% improvement in response and recovery metrics
40% fewer repeat incidents
30% improved release reliability
operating practices standardized across three combined businesses
India-based team onboarding into shared operating practices
```

Use only claims that remain accurate in context.

## Public-disclosure boundary

This is a public repository. Case studies must be sanitized. Never include:

- private customer or partner identities;
- internal URLs, environment names, credentials, secrets, or account identifiers;
- private incident records, tickets, screenshots, or correspondence;
- confidential product architecture or non-public implementation details;
- private job-search/interview information;
- private phone/address, health, financial, or household information.

If useful detail cannot be stated safely, generalize the pattern rather than guessing.

## Work packages

### P4-WP1 — Evidence inventory and case-study truth map
Status: COMPLETE

Created `docs/product/contactgilmore-portfolio/05_CASE_STUDY_TRUTH_MAP.md`.

The truth map separates DIRECT evidence, SAFE GENERALIZATION, SUPPORTING SKILL context, and DO NOT CLAIM boundaries for all three planned case-study lanes. It specifically blocks fabricated customer identities, proprietary architecture, tool-to-metric attribution without evidence, financial impact, internal artifacts, and causality stronger than the resumes support.

Acceptance: met.

### P4-WP2 — Enterprise implementation and migration case study
Status: COMPLETE

Implemented:

```text
/work/implementation-delivery/
```

The page uses a public-safe case-study hero, substantiated outcome metrics, context/problem narrative, four-stage delivery flow, technical/delivery judgment section, and professional takeaway. Playwright coverage passed across desktop, tablet, and phone.

Acceptance: met.

### P4-WP3 — Reliability and cross-functional remediation case study
Status: COMPLETE

Implemented:

```text
/work/reliability-remediation/
```

The story centers recurring customer-impact signals, root-cause/pattern analysis, cross-functional prioritization, remediation ownership, and release readiness rather than an SRE tool inventory. The Work overview links into the page and Playwright coverage includes the route.

Acceptance: met.

### P4-WP4 — Program delivery and operating-model case study
Status: COMPLETE PENDING FINAL INTEGRATED REGRESSION

Implemented:

```text
/work/operating-model/
```

The story centers response ownership, alert/escalation clarity, governance, documentation, operating-practice standardization across three combined businesses, and team onboarding. It explicitly presents the work as a blend of systems analysis, change management, program delivery, and technical operations.

Acceptance: content and structure implemented; final integrated browser regression remains under WP6.

### P4-WP5 — Homepage, Work, About, and project copy refinement
Status: COMPLETE

Changes:

- Homepage selected-work cards now link directly to all three case studies.
- Work is the evidence hub and links all three evidence lanes.
- Resume remains the chronology but now connects major roles to the relevant deeper case studies.
- About was rewritten to explain working style and professional perspective rather than duplicating career chronology and credentials.
- Repeated homepage language was tightened around the operating-model lane.

Technical project evidence remains secondary and is not allowed to displace the senior professional case-study hierarchy.

Acceptance: met pending final integrated browser review.

### P4-WP6 — Content safety and Playwright regression
Status: IN PROGRESS

Run public-disclosure review, build/integrity/legacy URL gates, and the full Playwright browser smoke suite after case-study integration.

Acceptance: no private/confidential additions, no regression in historical blog content/URLs, all three case-study routes render cleanly, and all browser smoke gates are green.

### P4-WP7 — Content closeout and P5 handoff
Status: QUEUED

Review the final professional story, record remaining evidence limitations honestly, and prepare quality/discoverability/launch work for P5.

Acceptance: portfolio tells one coherent senior technical-delivery story and is ready for launch hardening.

## CI posture

Feature-branch site validation now runs through the open pull request rather than duplicate push + pull-request executions. Direct pushes to `main` will still run the same validation after eventual cutover.

## Design authority

The P3 smoke-tested brand system is active doctrine. P4 extends it rather than redesigning it casually. New case-study patterns may use asymmetric, sticky, horizontal, or scroll-supported composition when evidence benefits, but they must remain within the brand system and pass responsive browser review.

## Production boundary

No production `main` merge or GitHub Pages cutover occurs in P4 without explicit Mike approval.
