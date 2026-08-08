# Where We Are

Status: active living state  
Updated: 2026-08-08

## Production authority

Portfolio 2.0 is live at `https://contactgilmore.github.io/` from GitHub Pages workflow publishing.

Production site deployment:

```text
site source commit: bb2968e523bd7af87e3cd31a3a7e045ecb44947b
deployment workflow: Deploy Portfolio to GitHub Pages
deployment run: 31253088467
build job: SUCCESS
deploy job: SUCCESS
GitHub Pages status: built
GitHub Pages build type: workflow
HTTPS: enforced
```

The pre-cutover Jekyll rollback target remains:

`2637f64cce154ded6086df2220e5889bdd6aa007`

Documentation-only commits may advance `main` after the deployed site-source commit. Do not confuse repository head with the exact deployed site commit when performing rollback or deployment forensics.

## Durable decisions

- Astro 7+ with TypeScript/content collections is the production static-site foundation.
- Preserve the technical blog, historical article bodies, compatibility URLs, and required published assets.
- Use GitHub-hosted `ubuntu-latest` for this public repository; do not expose Node3 to ordinary public-repo workflows.
- Treat all repository content, branches, PRs, logs, artifacts, screenshots, metadata, and evidence as public disclosure surfaces.
- Retain only public assets that have a content, brand, or compatibility reason.
- Avoid React/CMS/database additions unless a later requirement justifies them.
- The smoke-tested Portfolio 2.0 brand system is active visual authority.
- Mike delegates routine design/UX/navigation/color/layout decisions to GPT; the site must accurately represent Mike.
- Production deployment is intentionally manual-only through `.github/workflows/deploy-pages.yml` unless a later owner-approved operating decision changes that policy.
- Three deep professional case studies remain the right portfolio shape; they focus on the most relevant 2018–2026 enterprise/technical experience rather than trying to make the portfolio chronological.
- Earlier customer operations and leadership experience should explain the career foundation, especially influence without authority and people leadership, rather than become a fourth retail case study by default.

## P1–P5

P1 through P5 are complete. Portfolio 2.0 was migrated from Jekyll to Astro, redesigned, hardened, tested, and deployed successfully on 2026-08-08.

Current production structure:

```text
Home / Work / Writing / About / Resume
```

Current professional positioning:

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

Historical blog prose remains protected and unchanged.

## P6 — open

Sprint: **Recruiter Proofread, Voice, and Case-Study Polish**  
Branch: `portfolio-2.0-polish`

Purpose: perform the deep recruiter/hiring-manager proofread after launch and convert the initial evidence-first copy into a more authentic, first-person, specific professional narrative without changing the proven visual system.

The detailed continuity record, including public-safe experience facts supplied by Mike, is:

`docs/sprint_notes/SPRINT_P6_RECRUITER_PROOFREAD_AND_CASE_STUDY_POLISH_2026-08-08.md`

Key P6 narrative decisions:

- Implementation case study: evolve from generic delivery language into the story of converting a difficult early legacy migration into scripts, validation checks, runbooks, and repeatable orchestration.
- Reliability case study: evolve into the story of turning major-customer outage complaints into observability, pattern isolation, RCA, leadership communication, and cross-functional software remediation.
- Operating-model case study: show how meaningful dashboards/alerts, standardized runbooks/RCA practices, incident documentation, Jira automation, and team onboarding became a shared reliability operating system.
- About page: connect earlier multi-unit leadership to influence without authority, then show the progression through SaaS implementation, cloud delivery, SRE, and Technical Delivery & Customer Solutions.
- Leadership philosophy: emphasize complementary strengths, energy, fit, ownership, and team balance rather than trying to make every person equally strong at everything.
- Home/Work/Resume: reduce repeated metrics and let each page do a different job in the recruiter scan path.

Current work package: **P6-WP1 — Recruiter/hiring-manager copy audit and continuity capture**.

## Public-writing boundaries for P6

Do not publish customer identities, private employer/customer artifacts, proprietary scripts/configuration, exact privileged topology, internal host names, ticket IDs, private RCA documents, private correspondence, or unsupported metrics.

Generalized descriptions of professional methods, technologies, migration patterns, integration domains, incident patterns, and leadership practices may be used when they are accurate and safe for unrestricted public disclosure.

## Verification posture

Every P6 production candidate must pass:

```text
Astro validation
historical blog source-integrity protection
public asset audit
internal-link verification
Playwright desktop/tablet/phone smoke
axe accessibility checks
public-disclosure review
owner proofread before merge/deploy
```

Production remains unchanged while P6 work is developed on the polish branch.
