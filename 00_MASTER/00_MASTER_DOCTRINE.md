# ContactGilmore Portfolio Master Doctrine

Status: active doctrine  
Owner: Mike Gilmore  
Home: `00_MASTER/00_MASTER_DOCTRINE.md`

## Purpose

This is the repository-wide **single start-here authority** for the ContactGilmore professional portfolio. Mike is owner and final decision maker. GPT is project manager and may perform bounded GitHub work when Mike authorizes the task.

The project goal is to maintain `contactgilmore.github.io` as a polished professional profile, technical portfolio, writing platform, and public demonstration of disciplined AI-assisted software delivery.

## Single-entry fresh-chat contract

A new GPT chat should normally need only this instruction:

```text
Review contactgilmore/contactgilmore.github.io and begin with 00_MASTER/00_MASTER_DOCTRINE.md. Follow its startup protocol before taking action.
```

The master doctrine is responsible for routing the new session to all additional authority. The user should not have to upload a ZIP, run a handoff script, reconstruct state from chat memory, or manually enumerate standard startup files.

If a new-chat request needs unusually specific source material, the handoff prompt may additionally name those files, PRs, commits, or external sources. Those are supplements to the master-doctrine startup, not replacements for it.

The repository is the durable project memory. Chat memory is helpful but non-authoritative.

## Central shared-governance adoption

```text
CENTRAL_REPOSITORY_GOVERNANCE = REQUIRED
CENTRAL_DEVELOPMENT_GOVERNANCE = REQUIRED
CENTRAL_AUGUSTA_METHOD_BRAND = NOT_APPLICABLE
central repository = contactgilmore/augusta-method-governance
consumed central snapshot = 377fbbd47c695d764e033e3839ea9a7c3fdba409
```

Shared repository/GitHub and Sprint System execution policy comes from the central repository. Portfolio product/content, architecture, public-disclosure, professional-read, brand, editorial, release, blog/URL, and production-authorization authority remains local. Do not recreate `00_MASTER/01_SPRINT_SYSTEM/`.

## Public repository disclosure and professional-artifact law

`contactgilmore/contactgilmore.github.io` is a public repository. Every tracked file, branch, commit, pull request, workflow, artifact, issue, discussion, image, metadata field, and generated output must be treated as publicly discoverable, clonable, forkable, copyable, and durable.

```text
PUBLIC_DISCLOSURE_DEFAULT=YES
SENSITIVE_DATA_ALLOWED=NO
SECRETS_IN_REPOSITORY=PROHIBITED
PRIVATE_CONTEXT_IN_PROJECT_DOCS=PROHIBITED
PUBLIC_DOCUMENTATION_IS_PORTFOLIO_EVIDENCE=YES
```

The repository is intentionally allowed to demonstrate architecture, SDLC thinking, sprint execution, doctrine, decision records, CI/CD, testing, accessibility, release controls, rollback planning, and responsible AI-assisted delivery. It must **not** become private project memory or a transcript of Mike's personal life/job search.

Every tracked document must pass two tests:

1. **Safety test:** Would publication or verbatim copying materially increase personal, security, financial, professional, or privacy risk?
2. **Professional-read test:** Would Mike be comfortable with a recruiter, hiring manager, security engineer, stranger, or future fork owner reading the sentence without additional private context?

If either answer is no or uncertain, sanitize, generalize, omit, or stop for owner review.

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
private reasoning, scratchpad content, or conversational details that are not needed to understand the public engineering work
```

Public professional facts may be published only when intentionally relevant to the portfolio and appropriate for unrestricted public disclosure.

Before every tracked change, GPT must apply the safety and professional-read tests. Convenience, sprint velocity, debugging value, documentation completeness, or continuity never overrides this rule.

Git history is durable. Accidentally committed sensitive information must be treated as exposed even if later deleted from the current tree; stop and address rotation, revocation, notification, and/or history-remediation requirements as appropriate.

## Shared-development governance law

Central Development Governance owns the reusable Sprint System. This repository does not keep a second local copy. Living state and project-specific sprint records remain local and are not counted as central doctrine.

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

Each domain has one portfolio subject folder with exactly five Markdown documents. Sprint records are the execution-history exception and live under `docs/sprints/`.

`docs/sprints/` contains the active sprint record plus recently completed sprint records. Completed records become archive-eligible 30 calendar days after their recorded close date and then move to `docs/sprints/archive/`. The archive is historical evidence, not startup authority, and must not be read during routine startup unless a specific historical/audit/regression need requires it.

## Deterministic startup read order

After the new chat is pointed to this master doctrine, GPT must read, without requiring Mike to enumerate them:

```text
contactgilmore/augusta-method-governance/00_MASTER/00_MASTER_DOCTRINE.md
central Repository Governance module when REQUIRED
central Development Governance module when REQUIRED
00_MASTER/WHERE_WE_ARE.md
00_MASTER/ACTIVE_SPRINT.md
00_MASTER/LAST_CLOSEOUT_PROMPT.txt
```

Then:

1. perform the lightweight `docs/sprints/` hygiene check defined by sprint-system doctrine; do not read `docs/sprints/archive/` by default;
2. read the active sprint record named by `ACTIVE_SPRINT.md`, if a sprint is open;
3. read only the domain documents referenced by the active work package or needed for the task;
4. inspect the relevant current source files and current PR/branch state through connected GitHub;
5. reconcile documentation claims against repository truth before writing;
6. apply the public-disclosure/professional-read gate before any tracked update.

Do not require Mike to upload repository snapshots when connected GitHub access can recover current state.

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

Tracked repository work should be handled through connected GitHub rather than transferred to Mike as manual patch work.

## Current source authority

```text
GitHub: contactgilmore/contactgilmore.github.io
Production branch: main
Current hosting: GitHub Pages via GitHub Actions
Build target: static HTML generated by Astro
Production deployment: automatic on push to main after approved merge; workflow_dispatch retained as fallback
```

Branch names are living state. `ACTIVE_SPRINT.md` and GitHub truth override examples in older history.

## GitHub-first execution law

Default route:

```text
connected GitHub read
-> reconcile repository truth with living state
-> bounded branch from exact current main
-> GPT performs approved tracked-source changes
-> public-disclosure + professional-read review
-> review exact changed-file set
-> repository-portable CI / browser validation
-> draft PR while evidence is incomplete
-> owner acceptance when required
-> merge only after approval
-> push to main automatically builds and deploys GitHub Pages
-> verify production deployment and affected live surfaces
-> record final evidence and next state
```

The **merge to `main` is the human production authorization**. Do not require a second manual deploy click as a routine release ceremony. `workflow_dispatch` exists for operational fallback/recovery and deliberate re-runs.

Do not make experimental changes directly on `main`.

## Legacy handoff/process retirement law

The former workflow of generating ZIP packages, local patch/apply scripts, manually applying changes on Mike's computer, and uploading a repository ZIP into a new chat is **retired as a normal operating model**.

Do not recreate that workflow merely because old documentation, historical commits, or prior chats mention it.

Use ZIP/export/manual transfer only as an explicit disaster-recovery fallback when connected GitHub access is unavailable and the owner asks for it. If used, treat the package as a temporary transfer artifact, not project authority.

Current authority order is:

```text
Git repository truth
-> master/startup doctrine
-> living state
-> active sprint record
-> domain docs
-> CI/PR/deployment evidence
-> chat context
```

## Production and content protection law

Protected portfolio assets include:

```text
historical blog article identities and publication dates
published blog/article URLs
required public images/assets
main branch production behavior
GitHub Pages availability or successor-host availability
historical Git content
```

Rules:

1. Never rewrite or delete historical blog content as a side effect of unrelated framework, design, or process work; deliberate editorial refreshes are allowed when explicitly scoped and original publication history is preserved.
2. Preserve article slugs or provide explicit redirects/compatibility routes before changing public URLs.
3. Preserve required image references or migrate them with verified replacements.
4. Keep production deployable while a replacement candidate is under review.
5. Framework/hosting changes must not erase authorship history or article metadata without an explicit content decision.
6. Historical content is not exempt from the public-disclosure law; if an audit discovers sensitive material, stop and classify it.

## Technology direction

Current production architecture:

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

Hosting is an architectural decision, not doctrine identity. GitHub Pages may later be replaced by another static host if the owner approves and the change improves security, privacy, reliability, workflow, or professional presentation without breaking URLs/content.

## GitHub Actions runner and storage policy

While this repository is public, ordinary CI and deployment use GitHub-hosted standard runners such as:

```text
ubuntu-latest
```

Public-repository workflows must not run untrusted pull-request or fork code on Mike's dedicated self-hosted infrastructure. The dedicated server is not registered for this portfolio by default.

Repository-portable checks include or should preserve:

```text
Astro build
type/content validation
public asset audit
internal/broken-link checks
Playwright responsive/browser smoke
axe accessibility checks
URL regression checks for historical blog posts
```

Workflows and artifacts must also comply with the public-disclosure law. Never echo secrets or private data into Actions logs or upload sensitive artifacts.

Routine successful validation artifacts and GitHub dependency caches remain off. Playwright may upload the smallest useful failure-only evidence for one day. GitHub Pages deployment artifacts are bounded deployment mechanics, not the general evidence warehouse. The former long-lived candidate branch and routine candidate-packaging workflow are retired and must not be recreated without a newly proven release-architecture need.

## Roles

Mike owns priority, approval, final public representation, career-positioning decisions, and approval to merge production-significant changes.

GPT owns project management, doctrine review, roadmap and sprint design, tracked repository execution, architecture/content recommendations, verification design, risk classification, public-disclosure review, professional-read review, and closeout/handoff updates.

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

Historical/legacy files may remain only when they have compatibility, content-history, or rollback value.

## Hard compliance gates

```text
Gate 1 — master doctrine read from current repository truth
Gate 2 — startup doctrine and living state deterministically recovered
Gate 3 — current branch/PR/sprint truth reconciled
Gate 4 — exact scope and no-touch paths declared
Gate 5 — public-disclosure and professional-read safety verified
Gate 6 — protected blog/URL/production constraints resolved
Gate 7 — required domain doctrine read
Gate 8 — exact changed-file set reviewed
Gate 9 — proof matches the claim
Gate 10 — Mike's current decision controls
Gate 11 — living state and sprint authority updated when truth changes
Gate 12 — production changes are explicit, reversible, automatically deployed from approved `main`, and verified
```

If a gate fails, stop and state what is missing.

## Change history

- **2026-08-15:** Adopted the current central GOV-2 lifecycle/storage baseline; retired the exact merged Portfolio 2.0 candidate branch and obsolete candidate-packaging workflow after bounded proof; preserved public GitHub-hosted execution and zero live artifact/cache posture.
- **2026-08-08:** Standardized execution records under `docs/sprints/`, established a 30-day recent-record window, and made `docs/sprints/archive/` historical-only so routine startup does not accumulate document creep.
- **2026-08-08:** Made approved merge to `main` the human production authorization and changed GitHub Pages to automatic deployment on `main` pushes; retained manual workflow dispatch as an operational fallback.
- **2026-08-08:** Established the master doctrine as the single fresh-chat entry point; retired ZIP/script/upload handoff as the normal workflow; made repository documentation itself a recruiter-readable public engineering artifact subject to safety and professional-read gates.
- **2026-08-08:** Made public-disclosure safety a hard repository law and established GitHub-hosted runners as the default for the public portfolio; prohibited exposing dedicated self-hosted infrastructure to untrusted public-repository workflow code.
- **2026-08-08:** Established Portfolio 2.0 governance modeled on Job Search Studio, with Astro migration direction, production protection, blog preservation, and GitHub-first execution.
