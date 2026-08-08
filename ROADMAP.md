# ContactGilmore Portfolio 2.0 Roadmap

Status: active roadmap  
Updated: 2026-08-08

## North star

Maintain `contactgilmore.github.io` as a polished professional portfolio and technical writing platform that communicates Mike Gilmore's value quickly, demonstrates credible professional proof, and serves as a public example of disciplined AI-assisted software delivery.

## Technology authority

Current production stack:

```text
Astro 7+
TypeScript
Markdown content collections
custom HTML/CSS
minimal client JavaScript
GitHub-hosted Actions for this public repository
GitHub Pages
Playwright browser smoke testing
axe accessibility checks
```

Why this stack remains appropriate:

- preserves Markdown blog content;
- modern, actively maintained static-site ecosystem;
- strong component/layout model without requiring a client framework;
- typed content metadata;
- clean source structure for GPT-assisted changes;
- static output with low operational complexity;
- compatible with GitHub Pages;
- GitHub-hosted Actions avoid exposing private self-hosted infrastructure to public workflow code;
- browser testing protects the responsive visual system rather than relying only on successful compilation.

React, a CMS, database, or alternate hosting provider is not part of the default architecture unless a later requirement justifies the change.

## Design/product direction

Portfolio 2.0 leads with one coherent professional identity:

```text
Technical Delivery & Customer Solutions
```

The site treats implementation, integrations/troubleshooting, customer/stakeholder leadership, systems/program delivery, and operational/reliability depth as connected proof rather than competing identities.

Current top-level structure:

```text
Home / Work / Writing / About / Resume
```

Primary professional proof is carried by three curated case studies rather than a chronological project dump.

## Completed delivery phases

### P1 — Foundation and Astro migration — COMPLETE

Delivered governance, Jekyll/content/URL audit, Astro scaffold, typed blog schema, byte-preserved migration of nine published Markdown articles, legacy route/asset regression, and Pages candidate packaging.

### P2 — Positioning and information architecture — COMPLETE

Delivered the professional umbrella, audience journeys, homepage hierarchy, Work/case-study architecture, About/Resume strategy, and Writing/archive rules.

### P3 — Visual design system — COMPLETE

Delivered the responsive Portfolio 2.0 design system, accessibility defaults, long-form article styling, Playwright desktop/tablet/phone smoke coverage, screenshot evidence, and brand doctrine based on the tested implementation.

### P4 — Professional case studies and content refresh — COMPLETE

Delivered three sanitized professional case studies, truth-mapped evidence, Home/Work/About/Resume integration, recruiter-scan hierarchy, and full browser/accessibility regression.

### P5 — Quality, discoverability, and launch — COMPLETE

Delivered public-asset minimization, sitemap/robots/canonical/social metadata, structured data, accessibility hardening, link/route regression, Pages deployment/rollback controls, owner cutover, and successful Portfolio 2.0 production launch.

### P6 — Recruiter proofread, voice, and case-study polish — ACTIVE

Branch: `portfolio-2.0-polish`  
PR: `#15`

Goals:

- strengthen first-person ownership and specificity in case studies;
- reduce repeated metrics and governance-sounding public copy;
- improve the career-foundation narrative around influence without authority and complementary strengths;
- verify the complete candidate visually at desktop/tablet/phone sizes;
- harden public-repository documentation so it is safe and professional if read or copied;
- retire legacy ZIP/script/upload handoff in favor of repository-native single-entry startup.

Production remains unchanged until the P6 owner proofread/merge/deploy gate is explicitly completed.

## Planned next phase — Writing and editorial system

After P6, open a bounded blog/editorial sprint rather than mixing article maintenance into portfolio proofread work.

Planned scope:

- preserve the current clean Writing list unless evidence justifies a visual change;
- review all published technical articles for 2026 technical accuracy, stale links, screenshots, commands, terminology, and writing quality;
- retain original publication dates;
- add `updated` / `dateModified` support only when an article is materially refreshed;
- add typed series metadata such as series name/order/status;
- support future series grouping and optional previous/next-series navigation without turning the archive into a heavy UI;
- decide whether the introductory blog post remains an article or becomes a writing/series introduction;
- continue public-disclosure and compatibility protections for historical content.

## Continuous portfolio operations

Ongoing work should include:

- publish new writing through the typed content schema;
- periodically review featured content and professional positioning;
- update case studies when professional experience materially changes;
- maintain dependencies and CI/browser quality gates;
- remove stale claims and technologies;
- keep public documentation useful as SDLC/AI-delivery evidence while excluding private project memory;
- use sprint notes for material redesign, migration, content-system, or launch arcs rather than every minor edit.

## Explicit non-goals

- no database or application server;
- no CMS unless publishing friction proves the need;
- no React merely for prestige;
- no animation-heavy portfolio aesthetic;
- no giant skill icon wall or proficiency bars;
- no artificial publication-date refreshing merely to make older articles look newer;
- no production cutover based only on a successful build;
- no public-repository self-hosted runner exposure without a future security justification;
- no tracked private personal/job-search memory in the public repository.
