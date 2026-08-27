#!/usr/bin/env python3
from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
errors: list[str] = []
CENTRAL_SNAPSHOT = "065c670ea96878d2d21f065908d6b66d49c16dc2"
STALE_CENTRAL_SNAPSHOTS = {
    "377fbbd47c695d764e033e3839ea9a7c3fdba409",
    "4eaebde64a4a6ad3bf918d25c76812eae1db978a",
    "483a9e2dab6684ad82a043e9de8b184fc0b53adf",
}
ACTIVE_SPRINT = "P11"
ACTIVE_HORIZON = "H2"
ACTIVE_PRODUCT_GOAL = "PG-2"
ACTIVE_SPRINT_RECORD = "docs/sprints/SPRINT_P11_PROMPT_PROVE_SHIP_EDITORIAL_CONTINUATION_2026-08-27.md"


def read(rel: str) -> str:
    path = ROOT / rel
    if not path.is_file():
        errors.append(f"missing required file: {rel}")
        return ""
    return path.read_text(encoding="utf-8")


required = {
    "README.md",
    "00_MASTER/00_MASTER_DOCTRINE.md",
    "00_MASTER/PRODUCT_ROADMAP.md",
    "00_MASTER/WHERE_WE_ARE.md",
    "00_MASTER/ACTIVE_SPRINT.md",
    "00_MASTER/LAST_CLOSEOUT_PROMPT.txt",
    "00_MASTER/README.md",
    "00_MASTER/PACKAGE_PROFILE.txt",
    "package.json",
    "package-lock.json",
    "docs/repository-governance/00_REPOSITORY_GOVERNANCE_DOCTRINE.md",
    "docs/product/00_PRODUCT_DOCTRINE.md",
    "docs/product/contactgilmore-portfolio/00_PRODUCT_BRIEF.md",
    "docs/product/contactgilmore-portfolio/04_BACKLOG_AND_RISKS.md",
    "docs/architecture/00_ARCHITECTURE_DOCTRINE.md",
    "docs/brand/00_BRAND_DOCTRINE.md",
    "docs/versioning/00_VERSIONING_DOCTRINE.md",
    "docs/editorial/AI_ASSISTED_PUBLISHING_WORKFLOW.md",
    "docs/editorial/NEXT_SERIES_FOUNDATION.md",
    ACTIVE_SPRINT_RECORD,
    "src/pages/[...slug].astro",
}
for rel in sorted(required):
    if not (ROOT / rel).is_file():
        errors.append(f"missing required file: {rel}")

if (ROOT / "ROADMAP.md").exists():
    errors.append("parallel root ROADMAP.md must be absent; canonical roadmap is 00_MASTER/PRODUCT_ROADMAP.md")

for forbidden in (
    ".github/workflows/package-pages-candidate.yml",
    ".github/workflows/gov-2e-retire-candidate-branch.yml",
):
    if (ROOT / forbidden).exists():
        errors.append(f"retired workflow remains: {forbidden}")

master = read("00_MASTER/00_MASTER_DOCTRINE.md")
for token in (
    "contactgilmore/augusta-method-governance",
    CENTRAL_SNAPSHOT,
    "CENTRAL_REPOSITORY_GOVERNANCE = REQUIRED",
    "CENTRAL_DEVELOPMENT_GOVERNANCE = REQUIRED",
    "CENTRAL_AUGUSTA_METHOD_BRAND = NOT_APPLICABLE",
    "00_MASTER/PRODUCT_ROADMAP.md",
    "PUBLIC_DISCLOSURE_DEFAULT=YES",
    "draft: true",
):
    if token not in master:
        errors.append(f"Master missing required current token: {token}")

sprint_dir = ROOT / "00_MASTER/01_SPRINT_SYSTEM"
if sprint_dir.exists() and any(path.suffix.lower() == ".md" for path in sprint_dir.iterdir() if path.is_file()):
    errors.append("duplicated local Sprint System must not exist after central Development Governance adoption")

repo_gov = ROOT / "docs/repository-governance/github"
expected_repo_gov = {
    "00_GITHUB_PLATFORM_DOCTRINE.md",
    "01_REPOSITORY_SETTINGS_AND_SECURITY.md",
    "02_ACTIONS_RUNNERS_STORAGE_AND_CACHE.md",
    "03_LIFECYCLE_AUDIT_AND_CLEANUP.md",
    "04_NEW_REPOSITORY_BOOTSTRAP.md",
}
if not repo_gov.is_dir():
    errors.append("missing docs/repository-governance/github")
else:
    actual = {path.name for path in repo_gov.iterdir() if path.is_file() and path.suffix.lower() == ".md"}
    if actual != expected_repo_gov:
        errors.append(
            "repository-governance five-document law violation: "
            f"expected={sorted(expected_repo_gov)} actual={sorted(actual)}"
        )

for rel_dir, expected_names in {
    "docs/product/contactgilmore-portfolio": {
        "00_PRODUCT_BRIEF.md",
        "01_AUDIENCE_AND_VISITOR_JOURNEYS.md",
        "02_CONTENT_AND_INFORMATION_ARCHITECTURE.md",
        "03_PROOF_AND_CASE_STUDY_STRATEGY.md",
        "04_BACKLOG_AND_RISKS.md",
    },
    "docs/architecture/contactgilmore-portfolio": {
        "00_PRODUCT_BRIEF.md",
        "01_RUNTIME_AND_WORKFLOW.md",
        "02_ENGINE_CONTRACT.md",
        "03_CONTENT_AND_URL_CONTRACT.md",
        "04_BACKLOG_AND_RISKS.md",
    },
    "docs/brand/contactgilmore-portfolio": {
        "00_BRAND_BRIEF.md",
        "01_VISUAL_SYSTEM_HARD_STANDARDS.md",
        "02_PRODUCT_SURFACE_AND_INTERACTION_RULES.md",
        "03_TOKENS_AND_CODE_REFERENCES.md",
        "04_BACKLOG_AND_RISKS.md",
    },
    "docs/versioning/contactgilmore-portfolio": {
        "00_VERSIONING_BRIEF.md",
        "01_BRANCH_AND_RELEASE_WORKFLOW.md",
        "02_VALIDATION_AND_EVIDENCE.md",
        "03_HANDOFF_AND_RECOVERY.md",
        "04_BACKLOG_AND_RISKS.md",
    },
}.items():
    root = ROOT / rel_dir
    if not root.is_dir():
        errors.append(f"missing governed domain directory: {rel_dir}")
        continue
    actual = {path.name for path in root.iterdir() if path.is_file() and path.suffix.lower() == ".md"}
    if actual != expected_names:
        errors.append(
            f"{rel_dir} five-document law violation: "
            f"expected={sorted(expected_names)} actual={sorted(actual)}"
        )

repo_root = read("docs/repository-governance/00_REPOSITORY_GOVERNANCE_DOCTRINE.md")
if CENTRAL_SNAPSHOT not in repo_root:
    errors.append("repository-governance root missing current central snapshot")

roadmap = read("00_MASTER/PRODUCT_ROADMAP.md")
for token in (
    "one canonical roadmap",
    "Roadmap Horizon H2",
    "Product Goal PG-2",
    "P11",
    "Context Is Part of the System",
):
    if token not in roadmap:
        errors.append(f"Product Roadmap missing current direction token: {token}")

where = read("00_MASTER/WHERE_WE_ARE.md")
active = read("00_MASTER/ACTIVE_SPRINT.md")
last = read("00_MASTER/LAST_CLOSEOUT_PROMPT.txt")
sprint = read(ACTIVE_SPRINT_RECORD)
for rel, body in (
    ("00_MASTER/WHERE_WE_ARE.md", where),
    ("00_MASTER/ACTIVE_SPRINT.md", active),
    ("00_MASTER/LAST_CLOSEOUT_PROMPT.txt", last),
    (ACTIVE_SPRINT_RECORD, sprint),
):
    for token in (CENTRAL_SNAPSHOT, ACTIVE_SPRINT, ACTIVE_HORIZON, ACTIVE_PRODUCT_GOAL):
        if token not in body:
            errors.append(f"{rel} missing current sprint/central token: {token}")

for token in ("P10", "COMPLETE", "stability", "9090915653"):
    if token not in where:
        errors.append(f"WHERE_WE_ARE missing accepted production token: {token}")

for token in (
    "Status: **ACTIVE**",
    ACTIVE_SPRINT_RECORD,
    "Context Is Part of the System",
    "Owner gate",
):
    if token not in active:
        errors.append(f"ACTIVE_SPRINT missing required token: {token}")
if "NO ACTIVE IMPLEMENTATION SPRINT" in active:
    errors.append("ACTIVE_SPRINT still claims there is no active sprint")

product_backlog = read("docs/product/contactgilmore-portfolio/04_BACKLOG_AND_RISKS.md")
for token in ("P10", "COMPLETE", "P11", "Draft leakage"):
    if token not in product_backlog:
        errors.append(f"Product backlog missing reconciled token: {token}")
if re.search(r"P10[^\n]*\bactive\b", product_backlog, re.IGNORECASE):
    errors.append("Product backlog still describes P10 as active")

series = read("docs/editorial/NEXT_SERIES_FOUNDATION.md")
for token in (
    "ACTIVE SERIES DIRECTION / P11 CONTINUATION",
    "Context Is Part of the System",
    "Plan Before Edit",
    "low-owner-friction",
):
    if token not in series:
        errors.append(f"Series foundation missing P11 token: {token}")

settings = read("docs/repository-governance/github/01_REPOSITORY_SETTINGS_AND_SECURITY.md")
for token in (
    "visibility = PUBLIC",
    "squash merge = ENABLED",
    "merge commits = DISABLED",
    "rebase merge = DISABLED",
    "delete merged head branches = ENABLED",
    "former GOV-2E settings drift is resolved",
):
    if token not in settings:
        errors.append(f"settings authority missing current live token: {token}")

route_source = read("src/pages/[...slug].astro")
if ".filter(({ data }) => data.draft !== true)" not in route_source:
    errors.append("catch-all article route does not exclude draft content from getStaticPaths")

package_profile = read("00_MASTER/PACKAGE_PROFILE.txt")
for token in (
    "CANONICAL_ROADMAP=00_MASTER/PRODUCT_ROADMAP.md",
    "PRODUCT_BRIEF=docs/product/contactgilmore-portfolio/00_PRODUCT_BRIEF.md",
    f"CENTRAL_SNAPSHOT={CENTRAL_SNAPSHOT}",
):
    if token not in package_profile:
        errors.append(f"PACKAGE_PROFILE missing startup token: {token}")

for rel in (
    "00_MASTER/00_MASTER_DOCTRINE.md",
    "00_MASTER/WHERE_WE_ARE.md",
    "00_MASTER/ACTIVE_SPRINT.md",
    "00_MASTER/LAST_CLOSEOUT_PROMPT.txt",
    "00_MASTER/PACKAGE_PROFILE.txt",
    "docs/repository-governance/00_REPOSITORY_GOVERNANCE_DOCTRINE.md",
):
    body = read(rel)
    for stale_snapshot in STALE_CENTRAL_SNAPSHOTS:
        if stale_snapshot in body:
            errors.append(f"stale central snapshot remains in current authority: {rel}")

readme = read("README.md")
for token in (
    "Portfolio 2.0 is live on `main`",
    "there is no long-lived foundation or candidate-packaging branch",
    "GitHub-hosted Actions",
):
    if token not in readme:
        errors.append(f"README missing current production/branch token: {token}")

versioning_brief = read("docs/versioning/contactgilmore-portfolio/00_VERSIONING_BRIEF.md")
branch_workflow = read("docs/versioning/contactgilmore-portfolio/01_BRANCH_AND_RELEASE_WORKFLOW.md")
for token in (
    "no long-lived foundation or candidate branch",
    "candidate-packaging workflow is retired",
    "Public self-hosted execution remains prohibited",
):
    if token not in f"{versioning_brief}\n{branch_workflow}":
        errors.append(f"versioning authority missing retained production rule: {token}")

actions_storage = read("docs/repository-governance/github/02_ACTIONS_RUNNERS_STORAGE_AND_CACHE.md")
lifecycle = read("docs/repository-governance/github/03_LIFECYCLE_AUDIT_AND_CLEANUP.md")
for rel, body in (
    ("docs/repository-governance/github/02_ACTIONS_RUNNERS_STORAGE_AND_CACHE.md", actions_storage),
    ("docs/repository-governance/github/03_LIFECYCLE_AUDIT_AND_CLEANUP.md", lifecycle),
):
    for token in ("Actions artifacts", "Actions caches", "candidate-packaging workflow"):
        if token not in body:
            errors.append(f"{rel} missing retained storage/lifecycle token: {token}")

workflows = ROOT / ".github/workflows"
for path in sorted(workflows.glob("*.y*ml")):
    body = path.read_text(encoding="utf-8")
    if re.search(r"runs-on:\s*\[?\s*self-hosted", body, re.I):
        errors.append(f"public portfolio workflow routes to self-hosted runner: {path.relative_to(ROOT)}")
    if re.search(r"uses:\s*actions/cache@", body):
        errors.append(f"GitHub dependency cache action found: {path.relative_to(ROOT)}")
    if re.search(r"^\s*cache:\s*(npm|yarn|pnpm)\b", body, re.MULTILINE):
        errors.append(f"setup-node cloud dependency cache found: {path.relative_to(ROOT)}")
    if "actions/setup-node@" in body and "package-manager-cache: false" not in body:
        errors.append(f"setup-node does not explicitly disable package-manager-cache: {path.relative_to(ROOT)}")
    if re.search(r"^\s*-?\s*run:\s*npm install(?:\s|$)", body, re.MULTILINE):
        errors.append(f"workflow uses npm install instead of lockfile-driven npm ci: {path.relative_to(ROOT)}")
    if "playwright-smoke-failure-evidence" in body and "retention-days: 1" not in body:
        errors.append("Playwright failure evidence must retain exactly one day")

playwright = read(".github/workflows/playwright-smoke.yml")
for token in ("runs-on: ubuntu-latest", "if: failure()", "retention-days: 1", "npm ci"):
    if token not in playwright:
        errors.append(f"Playwright smoke missing public-runner/evidence token: {token}")

if errors:
    print("Portfolio governance check: FAIL")
    for error in errors:
        print(f"- {error}")
    sys.exit(1)

print("Portfolio governance check: PASS")
