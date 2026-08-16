#!/usr/bin/env python3
from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
errors: list[str] = []
CENTRAL_SNAPSHOT = "377fbbd47c695d764e033e3839ea9a7c3fdba409"
OLD_CENTRAL_SNAPSHOTS = {
    "4eaebde64a4a6ad3bf918d25c76812eae1db978a",
    "483a9e2dab6684ad82a043e9de8b184fc0b53adf",
}
CLEANUP_BASE = "6cd58c05a5b68de0eac4a69e2315c3539c0a0144"
CANDIDATE_HEAD = "c1211564f2086280d3a09fe992e1dc378aa960dd"
BRANCH_RETIREMENT_HEAD = "97a1d746c4517e84fdfb9eca01cc8d292d8fbaf6"
BRANCH_RETIREMENT_RUN = "31919041013"
BRANCH_RETIREMENT_JOB = "95095736087"


def read(rel: str) -> str:
    path = ROOT / rel
    if not path.is_file():
        errors.append(f"missing required file: {rel}")
        return ""
    return path.read_text(encoding="utf-8")


required = {
    "README.md",
    "00_MASTER/00_MASTER_DOCTRINE.md",
    "00_MASTER/WHERE_WE_ARE.md",
    "00_MASTER/ACTIVE_SPRINT.md",
    "00_MASTER/LAST_CLOSEOUT_PROMPT.txt",
    "package.json",
    "package-lock.json",
    "docs/repository-governance/00_REPOSITORY_GOVERNANCE_DOCTRINE.md",
    "docs/product/00_PRODUCT_DOCTRINE.md",
    "docs/architecture/00_ARCHITECTURE_DOCTRINE.md",
    "docs/brand/00_BRAND_DOCTRINE.md",
    "docs/versioning/00_VERSIONING_DOCTRINE.md",
    "docs/versioning/contactgilmore-portfolio/00_VERSIONING_BRIEF.md",
    "docs/versioning/contactgilmore-portfolio/01_BRANCH_AND_RELEASE_WORKFLOW.md",
}
for rel in sorted(required):
    if not (ROOT / rel).is_file():
        errors.append(f"missing required file: {rel}")

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
    "PUBLIC_DISCLOSURE_DEFAULT=YES",
):
    if token not in master:
        errors.append(f"Master missing required central/public token: {token}")

sprint_dir = ROOT / "00_MASTER/01_SPRINT_SYSTEM"
if sprint_dir.exists() and any(
    path.suffix.lower() == ".md" for path in sprint_dir.iterdir() if path.is_file()
):
    errors.append(
        "duplicated local Sprint System must not exist after central Development Governance adoption"
    )

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
    actual = {
        path.name
        for path in repo_gov.iterdir()
        if path.is_file() and path.suffix.lower() == ".md"
    }
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
    actual = {
        path.name
        for path in root.iterdir()
        if path.is_file() and path.suffix.lower() == ".md"
    }
    if actual != expected_names:
        errors.append(
            f"{rel_dir} five-document law violation: "
            f"expected={sorted(expected_names)} actual={sorted(actual)}"
        )

repo_root = read("docs/repository-governance/00_REPOSITORY_GOVERNANCE_DOCTRINE.md")
if CENTRAL_SNAPSHOT not in repo_root:
    errors.append("repository-governance root missing current central snapshot")

readme = read("README.md")
for token in (
    "Portfolio 2.0 is live on `main`",
    "there is no long-lived foundation or candidate-packaging branch",
    "GitHub-hosted Actions",
):
    if token not in readme:
        errors.append(f"README missing current production/branch token: {token}")

versioning_brief = read(
    "docs/versioning/contactgilmore-portfolio/00_VERSIONING_BRIEF.md"
)
branch_workflow = read(
    "docs/versioning/contactgilmore-portfolio/01_BRANCH_AND_RELEASE_WORKFLOW.md"
)
for token in (
    CANDIDATE_HEAD,
    BRANCH_RETIREMENT_RUN,
    BRANCH_RETIREMENT_JOB,
    "no long-lived foundation or candidate branch",
):
    if token not in versioning_brief:
        errors.append(f"Versioning Brief missing retirement token: {token}")
for token in (
    "main` is the only production branch",
    "candidate-packaging workflow is retired",
    "Public self-hosted execution remains prohibited",
):
    if token not in branch_workflow:
        errors.append(f"Branch workflow missing current rule: {token}")

where = read("00_MASTER/WHERE_WE_ARE.md")
active = read("00_MASTER/ACTIVE_SPRINT.md")
last = read("00_MASTER/LAST_CLOSEOUT_PROMPT.txt")
for rel, body in (
    ("00_MASTER/WHERE_WE_ARE.md", where),
    ("00_MASTER/ACTIVE_SPRINT.md", active),
    ("00_MASTER/LAST_CLOSEOUT_PROMPT.txt", last),
):
    for token in (
        CENTRAL_SNAPSHOT,
        CLEANUP_BASE,
        CANDIDATE_HEAD,
        BRANCH_RETIREMENT_HEAD,
        BRANCH_RETIREMENT_RUN,
        BRANCH_RETIREMENT_JOB,
    ):
        if token not in body:
            errors.append(f"{rel} missing GOV-2E recovery token: {token}")

for token in ("P10", "stability", "9090915653"):
    if token not in where:
        errors.append(f"WHERE_WE_ARE missing accepted production token: {token}")
for token in (
    "NO ACTIVE IMPLEMENTATION SPRINT",
    "P10",
    "CENTRAL_DEVELOPMENT_GOVERNANCE = REQUIRED",
    "candidate-packaging workflow = ABSENT",
):
    if token not in active:
        errors.append(f"ACTIVE_SPRINT missing required token: {token}")

settings = read(
    "docs/repository-governance/github/01_REPOSITORY_SETTINGS_AND_SECURITY.md"
)
for token in (
    "visibility = PUBLIC",
    "squash merge = ENABLED",
    "merge commits = ENABLED — DRIFT",
    "rebase merge = ENABLED — DRIFT",
    "delete merged head branches = DISABLED — DRIFT",
    "separate bounded settings-only transaction",
):
    if token not in settings:
        errors.append(f"settings authority missing audited drift token: {token}")

actions_storage = read(
    "docs/repository-governance/github/02_ACTIONS_RUNNERS_STORAGE_AND_CACHE.md"
)
lifecycle = read(
    "docs/repository-governance/github/03_LIFECYCLE_AUDIT_AND_CLEANUP.md"
)
for rel, body in (
    ("docs/repository-governance/github/02_ACTIONS_RUNNERS_STORAGE_AND_CACHE.md", actions_storage),
    ("docs/repository-governance/github/03_LIFECYCLE_AUDIT_AND_CLEANUP.md", lifecycle),
):
    for token in (
        "Actions artifacts",
        "Actions caches",
        "candidate-packaging workflow",
    ):
        if token not in body:
            errors.append(f"{rel} missing GOV-2E storage/lifecycle token: {token}")

for rel in (
    "00_MASTER/00_MASTER_DOCTRINE.md",
    "00_MASTER/WHERE_WE_ARE.md",
    "00_MASTER/ACTIVE_SPRINT.md",
    "00_MASTER/LAST_CLOSEOUT_PROMPT.txt",
    "docs/repository-governance/00_REPOSITORY_GOVERNANCE_DOCTRINE.md",
):
    body = read(rel)
    for old_snapshot in OLD_CENTRAL_SNAPSHOTS:
        if old_snapshot in body:
            errors.append(f"stale central snapshot remains in current authority: {rel}")

workflows = ROOT / ".github/workflows"
for path in sorted(workflows.glob("*.y*ml")):
    body = path.read_text(encoding="utf-8")
    if re.search(r"runs-on:\s*\[?\s*self-hosted", body, re.I):
        errors.append(
            f"public portfolio workflow routes to self-hosted runner: {path.relative_to(ROOT)}"
        )
    if re.search(r"uses:\s*actions/cache@", body):
        errors.append(f"GitHub dependency cache action found: {path.relative_to(ROOT)}")
    if re.search(r"^\s*cache:\s*(npm|yarn|pnpm)\b", body, re.MULTILINE):
        errors.append(
            f"setup-node cloud dependency cache found: {path.relative_to(ROOT)}"
        )
    if "actions/setup-node@" in body and "package-manager-cache: false" not in body:
        errors.append(
            f"setup-node does not explicitly disable package-manager-cache: {path.relative_to(ROOT)}"
        )
    if re.search(r"^\s*-?\s*run:\s*npm install(?:\s|$)", body, re.MULTILINE):
        errors.append(
            f"workflow uses npm install instead of lockfile-driven npm ci: {path.relative_to(ROOT)}"
        )
    if "playwright-smoke-failure-evidence" in body and "retention-days: 1" not in body:
        errors.append("Playwright failure evidence must retain exactly one day")

playwright = read(".github/workflows/playwright-smoke.yml")
for token in ("runs-on: ubuntu-latest", "if: failure()", "retention-days: 1", "npm ci"):
    if token not in playwright:
        errors.append(f"Playwright smoke missing public/local-first token: {token}")

if errors:
    print("Portfolio governance check: FAIL")
    for error in errors:
        print(f"- {error}")
    sys.exit(1)

print("Portfolio governance check: PASS")
