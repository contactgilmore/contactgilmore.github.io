# Where We Are

Status: active living state  
Updated: 2026-08-08

## Production authority

Production remains the existing Jekyll site on `main`. Portfolio 2.0 work is isolated to `portfolio-2.0-foundation`; no Pages cutover has occurred.

## Durable decisions

- Astro 7+ with TypeScript/content collections is the replacement static-site foundation.
- Preserve the technical blog, historical article bodies, compatibility URLs, and published assets.
- Use GitHub-hosted `ubuntu-latest` for this public repository; do not expose Node3 to ordinary public-repo workflows.
- Treat all repository content, branches, PRs, logs, artifacts, screenshots, metadata, and evidence as public disclosure surfaces.
- Avoid React/CMS/database additions unless a later requirement justifies them.
- The P3 smoke-tested Portfolio 2.0 brand system is now active visual authority.
- Mike delegates routine design/UX/navigation/color/layout decisions to GPT; explicit owner approval remains required for production cutover and the site must accurately represent Mike.

## P1 — complete

Foundation and Astro migration complete. Nine real Markdown posts are migrated byte-for-byte, legacy routes/assets are regression-tested, and a non-deploying GitHub Pages artifact has been successfully packaged.

## P2 — complete

Professional positioning and information architecture accepted on 2026-08-08.

Accepted direction:

```text
Technical Delivery & Customer Solutions
Implementation & Technical Delivery
Integrations & Troubleshooting
Customer & Stakeholder Leadership
```

Resume review confirmed the site must also keep business systems analysis and program delivery visible alongside implementation, technical integration depth, and operational/reliability leadership.

Accepted top-level structure:

```text
Home / Work / Writing / About / Resume
```

## P3 — complete

Astro visual system and primary portfolio shell implemented for Home, Work, Writing, About, Resume, and historical article surfaces.

A Playwright production-build smoke suite is now a durable repository quality gate across desktop, tablet, and phone viewports.

Final accepted P3 evidence:

```text
commit: 3372e074745d4a22d1ee18f6f525063414756700
Playwright run: 31251097496
result: 21 / 21 passed
blog source-integrity: passed
Astro build: passed
horizontal overflow checks: passed
console/page-error checks: passed
navigation and skip-link focus: passed
```

Browser testing found and corrected a real phone-width Resume hero overflow before the design was frozen. Full-page renders of the major surfaces were visually inspected. Brand doctrine now records the proven palette, typography, spacing, navigation, responsive behavior, component language, motion posture, and allowed modern flow patterns.

## Current sprint

Sprint P4 — Professional Case Studies and Content Refresh.

Detailed note: `docs/sprint_notes/SPRINT_P4_PROFESSIONAL_CASE_STUDIES_AND_CONTENT_REFRESH_2026-08-08.md`.

## Current action

P4-WP1: map current resume-supported evidence into public-safe case-study truth maps before writing deeper case-study pages. No confidential customer/employer details and no invented metrics.
