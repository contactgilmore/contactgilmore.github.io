# Sprint P7 — Blog Editorial System and AI-Assisted Publishing

Opened: 2026-08-08  
Closed: 2026-08-08  
Branch: `portfolio-blog-editorial`  
PR: `#16`  
Production baseline at open: `21031c0a18ae1c10ab9bafcbd0922c4b620c5383`  
P7 source merge: `5af373ab34a2ea1fd4692dc271fc1063b99f11f8`

## Objective

Turn Writing into a sustainable technical publishing system with GPT handling repeatable research, drafting, maintenance, metadata, and verification while preserving Mike's established voice, factual integrity, public safety, and owner publication control.

## Final status

**COMPLETE / OWNER APPROVED / DEPLOYED**

All work packages completed:

```text
P7-WP1 editorial strategy / topic relevance / AI contract: COMPLETE
P7-WP2 existing-content audit: COMPLETE
P7-WP3 content schema and series/update/slug metadata: COMPLETE
P7-WP4 article refresh and series cleanup: COMPLETE
P7-WP5 Git to Know You continuation decision: COMPLETE
P7-WP6 reusable AI publication workflow: COMPLETE
P7-WP7 browser/editorial regression and owner gate: COMPLETE
```

## Durable editorial decisions

- Keep the current clean Writing list unless archive growth creates a real navigation problem.
- Preserve original publication dates as historical facts.
- Use a separate `updated` value and `dateModified` only after material revision.
- GPT is the default editorial drafter/researcher but may not invent personal experience, employer/customer stories, metrics, screenshots, or first-person claims.
- Prefer current first-party technical documentation for version/product/capability claims.
- Treat every committed draft, research note, PR, workflow artifact, and screenshot as public.
- Product-logo thumbnails remain the default visual treatment for individual tool articles. Replace one only when obsolete, low-quality, misleading, or visually unsuitable.

## Content audit outcome

```text
We have a blog!        RETIRED from active article collection
SRE Tools overview     REFRAMED as living series introduction
Rundeck                 REFRESHED
New Relic               REFRESHED
PagerDuty               REFRESHED
Git                     KEPT / structural metadata only
Terraform               REFRESHED
GitHub Actions          REFRESHED
Cursor                  REFRESHED
```

`We have a blog!` was removed from the active Astro article collection. `/we-have-a-blog/` remains a lightweight compatibility page directing readers to Writing, and the old Vault Boy thumbnail was removed.

## Content-system implementation

The Astro blog schema supports:

```yaml
updated:
slug:
series:
seriesOrder:
seriesStatus:
```

Migrated articles keep their legacy compatibility paths. Future articles declare a validated lowercase/hyphenated `slug`; the series overview uses `seriesOrder: 0`; individual installments use positive order values; article layout supports Published/Updated presentation and `dateModified`; previous/next series navigation is generated from typed metadata.

The migration-era byte-for-byte invariant was deliberately evolved. Current checks preserve historical article identities, original publication dates, active legacy routes, and explicit compatibility treatment for retired legacy content while permitting reviewed editorial maintenance and future new posts.

## Article refresh results

- **SRE Tools overview:** reframed from fixed top-ten ranking into a living learning path.
- **Rundeck:** refreshed around current open-source Rundeck vs. commercial PagerDuty Runbook Automation positioning.
- **New Relic:** refreshed current observability language/free-tier context while preserving the real troubleshooting story.
- **PagerDuty:** refreshed modern incident-management/automation framing and removed vendor-absolutist wording.
- **Git:** kept largely intact; series metadata added without an artificial Updated date.
- **Terraform:** updated remote-state locking guidance, including native S3 lockfiles and deprecated DynamoDB locking; replaced oversimplified IaC comparison language.
- **GitHub Actions:** refreshed current workflow/runtime/security guidance, least privilege, fork boundaries, OIDC, environments, and static-site automation framing.
- **Cursor:** refreshed Agent, Rules, privacy/access, and verification/autonomy concerns while preserving the original thesis.

Orphan overview assets were pruned rather than exempted from the public-asset policy. Individual purpose-built article thumbnails remain. Writing archive presentation stayed intentionally simple.

## Git to Know You continuation

Approved sequence:

```text
#8 Kubernetes
#9 OpenTelemetry
#10 Argo CD / GitOps
```

AWS moves to a possible future Cloud Foundations series because it is too broad for one tool-style beginner article. FireHydrant is no longer required to complete the series.

## Reusable AI publication workflow

Authority:

`docs/editorial/AI_ASSISTED_PUBLISHING_WORKFLOW.md`

Reusable flow:

```text
topic signal
-> relevance research
-> first-party source pack
-> outline in established voice
-> draft
-> factual/version/link verification
-> public-disclosure review
-> metadata / slug / series placement / visuals
-> Astro + asset/link + Playwright + axe validation
-> owner editorial review
-> PR approval
-> merge to main
-> automatic Pages deployment
-> production verification
```

## Final verification and owner gate

Exact P7 candidate head: `2ccfa0fbacbc220d33a07abd67ed763f061618a5`.

Before merge, the candidate passed:

- Astro validation;
- historical identity/date/compatibility checks;
- zero-orphan public asset audit;
- route and internal-link verification;
- expanded Playwright desktop/tablet/phone coverage across Writing, overview, all seven installments, compatibility page, updated metadata, and series navigation;
- representative axe accessibility scans;
- rendered screenshot human visual review;
- public-disclosure/editorial diff review;
- owner local smoke test on macOS Chrome.

PR #16 was then marked ready and squash-merged to `main` as `5af373ab34a2ea1fd4692dc271fc1063b99f11f8`.

## Release-policy follow-up

After P7 merge, owner approved simplifying the release model. PR #17 changed `.github/workflows/deploy-pages.yml` to deploy automatically on pushes to `main` while retaining `workflow_dispatch` as fallback.

Policy merge: `88d4a34d63234416f73ba4771cc9839359d5196a`.

The resulting push automatically triggered **Deploy Portfolio to GitHub Pages** run `31280952066`, which completed successfully. This run published current `main`, including P7, without a manual Run Workflow action.

Durable release rule: **merge to `main` is the human production authorization; deployment is the automated consequence.**

## Public-repository boundary

Repository documentation demonstrates the editorial/AI workflow but is not private project memory. Keep only sanitized decisions needed to reproduce the public engineering/editorial process. Do not commit private job-search strategy, personal scheduling constraints, unpublished employer information, private source material, credentials, internal infrastructure identifiers, or conversational scratchpad.
