# ContactGilmore Portfolio Master Doctrine

Status: active doctrine  
Owner: Mike Gilmore  
Home: `00_MASTER/00_MASTER_DOCTRINE.md`

## Purpose

This is the repository-wide start-here authority for the ContactGilmore professional portfolio. Mike is owner and final decision maker. GPT is project manager and may perform bounded GitHub work when Mike authorizes the task.

The project goal is to evolve `contactgilmore.github.io` into a polished professional profile and portfolio that supports Mike's career positioning while preserving the existing technical blog and public URL continuity.

## Public repository disclosure law

`contactgilmore/contactgilmore.github.io` is a public repository. Every tracked file, branch, commit, pull request, workflow, artifact, issue, discussion, image, metadata field, and generated output must be treated as publicly discoverable.

```text
PUBLIC_DISCLOSURE_DEFAULT=YES
SENSITIVE_DATA_ALLOWED=NO
SECRETS_IN_REPOSITORY=PROHIBITED
PRIVATE_CONTEXT_IN_PROJECT_DOCS=PROHIBITED
```

Never commit, paste into tracked documentation, expose through workflow logs/artifacts, or otherwise publish:

```text
home or private physical addresses
private phone numbers
credentials, passwords, API keys, access tokens, cookies, SSH/private keys, recovery codes, or secrets
financial account information, balances, tax records, loan details, or private compensation records
health, diagnosis, medication, disability, insurance, or other medical information
private job-search records, unpublished applications, recruiter correspondence, interview notes, or negotiation details
private emails, calendar data, contact records, or personal correspondence
private infrastructure details that materially increase attack surface, including credentials, internal-only addresses, privileged topology, or security-sensitive configuration
local filesystem paths or machine information when disclosure creates unnecessary security or privacy risk
third-party confidential, proprietary, NDA-covered, customer, employer, or partner information
resume/application source documents containing information not intentionally approved for public display
unredacted screenshots, logs, exports, backups, database contents, or metadata containing any of the above
```

Public professional facts may be published only when they are intentionally part of the portfolio and appropriate for unrestricted public disclosure.

Before every tracked change, GPT must apply a public-disclosure review. If content is not clearly safe to publish, exclude or sanitize it and ask Mike when necessary. Convenience, sprint velocity, debugging value, or documentation completeness never overrides this rule.

Git history is durable. Accidentally committed sensitive information must be treated as exposed even if later deleted from the current tree; stop and address credential rotation or history-remediation requirements as appropriate.

## Six-file startup doctrine law

Startup doctrine is exactly six files:

```text
00_MASTER/00_MASTER_DOCTRINE.md
00_MASTER/01_SPRINT_SYSTEM/00_SPRINT_SYSTEM_DOCTRINE.md
00_MASTER/01_SPRINT_SYSTEM/01_SPRINT_RHYTHM_AND_WORK_PACKAGES.md
00_MASTER/01_SPRINT_SYSTEM/02_CLOSEOUT_HANDOFF_AND_PACKAGING.md
00_MASTER/01_SPRINT_SYSTEM/03_GPT_REVIEW_AND_CHANGE_GUARDRAILS.md
00_MASTER/01_SPRINT_SYSTEM/04_BACKLOG_RISKS_AND_ACCOUNTABILITY.md
```

Living state sits beside doctrine and is not counted as doctrine.

## Living current-state files

```text
00_MASTER/WHERE_WE_ARE.md
00_MASTER/ACTIVE_SPRINT.md
00_MASTER/LAST_CLOSEOUT_PROMPT.txt
00_MASTER/README.md
00_MASTER/PACKAGE_PROFILE.txt
```

There is exactly one `WHERE_WE_ARE.md` and one `ACTIVE_SPRINT.md`.

## Documentation-domain law

All durable project documentation lives under `docs/`.

```text
docs/product/00_PRODUCT_DOCTRINE.md
docs/architecture/00_ARCHITECTURE_DOCTRINE.md
docs/brand/00_BRAND_DOCTRINE.md
docs/versioning/00_VERSIONING_DOCTRINE.md
```

Each domain has one portfolio subject folder with exactly five Markdown documents. Sprint notes are the exception and live under `docs/sprint_notes/`.

## Startup read order

For substantial work, read:

```text
00_MASTER/00_MASTER_DOCTRINE.md
00_MASTER/01_SPRINT_SYSTEM/00_SPRINT_SYSTEM_DOCTRINE.md
00_MASTER/01_SPRINT_SYSTEM/01_SPRINT_RHYTHM_AND_WORK_PACKAGES.md
00_MASTER/01_SPRINT_SYSTEM/02_CLOSEOUT_HANDOFF_AND_PACKAGING.md
00_MASTER/01_SPRINT_SYSTEM/03_GPT_REVIEW_AND_CHANGE_GUARDRAILS.md
00_MASTER/01_SPRINT_SYSTEM/04_BACKLOG_RISKS_AND_ACCOUNTABILITY.md
00_MASTER/WHERE_WE_ARE.md
00_MASTER/ACTIVE_SPRINT.md
00_MASTER/LAST_CLOSEOUT_PROMPT.txt
```

Then read the active sprint note and only the domain documents required by the task.

## Source-request protocol

Before substantial action, identify:

```text
Current authority:
Current sprint/work package:
Task classification:
Documents already read:
Documents needed next:
Allowed update paths:
No-touch paths:
Verification gates:
Stop conditions:
```

Tracked repository work should be handled through the connected GitHub repository rather than transferred to Mike as manual patch work.

## Current source authority

```text
GitHub: contactgilmore/contactgilmore.github.io
Production branch: main
Working branch for Portfolio 2.0 foundation: portfolio-2.0-foundation
Hosting target: GitHub Pages
Build target: static HTML generated by Astro
```

## GitHub-first execution law

Default route:

```text
connected GitHub read
-> bounded branch from exact current main
-> GPT performs approved tracked-source changes
-> public-disclosure review
-> review exact changed-file set
-> repository-portable validation
-> draft PR while evidence is incomplete
-> owner acceptance
-> merge only after approval
```

Do not make experimental changes directly on `main`.

## Production and content protection law

The following are protected until explicitly migrated and verified:

```text
existing _posts/ content
existing blog images and assets
currently published article URLs
main branch production behavior
GitHub Pages availability
historical Git content
```

Rules:

1. Never rewrite or delete blog article bodies merely to complete the framework migration.
2. Preserve article slugs or provide explicit redirects before production cutover.
3. Preserve image references or migrate them with verified replacements.
4. Keep current production deployable until the Astro replacement passes acceptance.
5. Framework modernization must not erase authorship history or article metadata without an explicit content decision.
6. Historical content is not exempt from the public-disclosure law; if an audit discovers sensitive material, stop and classify it before migration or republication.

## Technology direction

Current target architecture:

```text
Astro 7+
TypeScript
Markdown content collections
custom HTML/CSS
minimal client JavaScript
GitHub Actions
GitHub Pages
```

React or another UI framework is not a default dependency. Add one only when a real interaction requires it.

## GitHub Actions runner policy

Because this repository is public, ordinary CI and deployment use GitHub-hosted standard runners such as:

```text
ubuntu-latest
```

Public-repository workflows must not run untrusted pull-request or fork code on Mike's dedicated Node3 self-hosted server. Node3 is not registered for this portfolio by default.

Repository-portable checks should eventually include:

```text
Astro build
type/content validation
broken-link checks
HTML/accessibility checks where practical
Lighthouse or equivalent quality checks
URL regression checks for migrated blog posts
```

Workflows and artifacts must also comply with the public-disclosure law. Never echo secrets or private data into Actions logs or upload sensitive artifacts.

## Roles

Mike owns priority, approval, final visual acceptance, career positioning decisions, and production merge authorization.

GPT owns project management, doctrine review, roadmap and sprint design, tracked repository execution, migration planning, content-structure recommendations, verification design, risk classification, public-disclosure review, and closeout/handoff updates.

## Root hygiene

Preferred root essentials:

```text
README.md
CHANGELOG.md
ROADMAP.md
00_MASTER/
docs/
src/
public/
scripts/
tests/
.github/
```

Legacy Jekyll files may remain during migration until their retirement is an explicit accepted work package.

## Hard compliance gates

```text
Gate 1 — current authority identified
Gate 2 — startup doctrine and living state read
Gate 3 — exact scope and no-touch paths declared
Gate 4 — public-disclosure safety verified; no sensitive/private material introduced
Gate 5 — blog/URL/production protection resolved
Gate 6 — required domain doctrine read
Gate 7 — exact changed-file set reviewed
Gate 8 — proof matches the claim
Gate 9 — Mike's current decision controls
Gate 10 — living state and sprint authority updated when truth changes
Gate 11 — production cutover is explicit, reversible, and verified
```

If a gate fails, stop and state what is missing.

## Change history

- **2026-08-08:** Made public-disclosure safety a hard repository law and established GitHub-hosted runners as the default for the public portfolio; prohibited exposing Node3 to untrusted public-repository workflow code.
- **2026-08-08:** Established Portfolio 2.0 governance modeled on Job Search Studio, with Astro migration direction, production protection, blog preservation, and GitHub-first execution.