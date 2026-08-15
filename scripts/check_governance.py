#!/usr/bin/env python3
from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
errors: list[str] = []
CENTRAL_SNAPSHOT = "4eaebde64a4a6ad3bf918d25c76812eae1db978a"


def read(rel: str) -> str:
    p = ROOT / rel
    if not p.is_file():
        errors.append(f"missing required file: {rel}")
        return ""
    return p.read_text(encoding="utf-8")


required = {
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
}
for rel in sorted(required):
    if not (ROOT / rel).is_file():
        errors.append(f"missing required file: {rel}")

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
if sprint_dir.exists() and any(p.suffix.lower() == ".md" for p in sprint_dir.iterdir() if p.is_file()):
    errors.append("duplicated local Sprint System must not exist after central Development Governance adoption")

repo_gov = ROOT / "docs/repository-governance/github"
expected = {
    "00_GITHUB_PLATFORM_DOCTRINE.md",
    "01_REPOSITORY_SETTINGS_AND_SECURITY.md",
    "02_ACTIONS_RUNNERS_STORAGE_AND_CACHE.md",
    "03_LIFECYCLE_AUDIT_AND_CLEANUP.md",
    "04_NEW_REPOSITORY_BOOTSTRAP.md",
}
if not repo_gov.is_dir():
    errors.append("missing docs/repository-governance/github")
else:
    actual = {p.name for p in repo_gov.iterdir() if p.is_file() and p.suffix.lower() == ".md"}
    if actual != expected:
        errors.append(f"repository-governance five-document law violation: expected={sorted(expected)} actual={sorted(actual)}")

for rel_dir, expected_names in {
    "docs/product/contactgilmore-portfolio": {
        "00_PRODUCT_BRIEF.md", "01_AUDIENCE_AND_VISITOR_JOURNEYS.md", "02_CONTENT_AND_INFORMATION_ARCHITECTURE.md",
        "03_PROOF_AND_CASE_STUDY_STRATEGY.md", "04_BACKLOG_AND_RISKS.md"
    },
    "docs/architecture/contactgilmore-portfolio": {
        "00_PRODUCT_BRIEF.md", "01_RUNTIME_AND_WORKFLOW.md", "02_ENGINE_CONTRACT.md",
        "03_CONTENT_AND_URL_CONTRACT.md", "04_BACKLOG_AND_RISKS.md"
    },
    "docs/brand/contactgilmore-portfolio": {
        "00_BRAND_BRIEF.md", "01_VISUAL_SYSTEM_HARD_STANDARDS.md", "02_PRODUCT_SURFACE_AND_INTERACTION_RULES.md",
        "03_TOKENS_AND_CODE_REFERENCES.md", "04_BACKLOG_AND_RISKS.md"
    },
    "docs/versioning/contactgilmore-portfolio": {
        "00_VERSIONING_BRIEF.md", "01_BRANCH_AND_RELEASE_WORKFLOW.md", "02_VALIDATION_AND_EVIDENCE.md",
        "03_HANDOFF_AND_RECOVERY.md", "04_BACKLOG_AND_RISKS.md"
    },
}.items():
    root = ROOT / rel_dir
    if not root.is_dir():
        errors.append(f"missing governed domain directory: {rel_dir}")
        continue
    actual = {p.name for p in root.iterdir() if p.is_file() and p.suffix.lower() == ".md"}
    if actual != expected_names:
        errors.append(f"{rel_dir} five-document law violation: expected={sorted(expected_names)} actual={sorted(actual)}")

workflows = ROOT / ".github/workflows"
for p in sorted(workflows.glob("*.y*ml")):
    body = p.read_text(encoding="utf-8")
    if re.search(r"runs-on:\s*\[?\s*self-hosted", body, re.I):
        errors.append(f"public portfolio workflow routes to self-hosted runner: {p.relative_to(ROOT)}")
    if re.search(r"uses:\s*actions/cache@", body):
        errors.append(f"GitHub dependency cache action found: {p.relative_to(ROOT)}")
    if re.search(r"^\s*cache:\s*(npm|yarn|pnpm)\b", body, re.MULTILINE):
        errors.append(f"setup-node cloud dependency cache found: {p.relative_to(ROOT)}")
    if "actions/setup-node@" in body and "package-manager-cache: false" not in body:
        errors.append(f"setup-node does not explicitly disable package-manager-cache: {p.relative_to(ROOT)}")
    if re.search(r"^\s*-?\s*run:\s*npm install(?:\s|$)", body, re.MULTILINE):
        errors.append(f"workflow uses npm install instead of lockfile-driven npm ci: {p.relative_to(ROOT)}")
    if "playwright-smoke-failure-evidence" in body and "retention-days: 1" not in body:
        errors.append("Playwright failure evidence must retain exactly one day")

playwright = read(".github/workflows/playwright-smoke.yml")
for token in ("runs-on: ubuntu-latest", "if: failure()", "retention-days: 1", "npm ci"):
    if token not in playwright:
        errors.append(f"Playwright smoke missing public/local-first token: {token}")

where = read("00_MASTER/WHERE_WE_ARE.md")
active = read("00_MASTER/ACTIVE_SPRINT.md")
for token in ("P10", "stability", "9090915653"):
    if token not in where:
        errors.append(f"WHERE_WE_ARE missing accepted production token: {token}")
for token in ("NO ACTIVE IMPLEMENTATION SPRINT", "P10", "CENTRAL_DEVELOPMENT_GOVERNANCE = REQUIRED"):
    if token not in active:
        errors.append(f"ACTIVE_SPRINT missing required token: {token}")

if errors:
    print("Portfolio governance check: FAIL")
    for error in errors:
        print(f"- {error}")
    sys.exit(1)

print("Portfolio governance check: PASS")
