#!/usr/bin/env python3
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
POLICY_PATH = ROOT / "config/ci/runner-routing-policy.json"
WORKFLOWS = ROOT / ".github/workflows"
RUNS_ON = re.compile(r"^(?P<indent>\s*)runs-on:\s*(?P<value>.*)\s*$")
TIMEOUT = re.compile(r"^(?P<indent>\s*)timeout-minutes:\s*(?P<value>\d+)\s*$")
CLOUD_CACHE = re.compile(r"^\s*cache:\s*['\"]?(npm|yarn|pnpm)['\"]?\s*$", re.IGNORECASE)


def render_selector(lines: list[str], index: int, match: re.Match[str]) -> str:
    value = match.group("value").strip()
    if value:
        return value
    base_indent = len(match.group("indent"))
    continuation: list[str] = []
    for following in lines[index + 1 :]:
        if not following.strip():
            continue
        indent = len(following) - len(following.lstrip())
        if indent <= base_indent:
            break
        continuation.append(following.strip())
    return " ".join(continuation)


def timeout_for_selector(lines: list[str], index: int, match: re.Match[str]) -> int | None:
    property_indent = len(match.group("indent"))
    start = index
    while start > 0:
        previous = lines[start - 1]
        if previous.strip() and len(previous) - len(previous.lstrip()) < property_indent:
            break
        start -= 1
    end = index + 1
    while end < len(lines):
        following = lines[end]
        if following.strip() and len(following) - len(following.lstrip()) < property_indent:
            break
        end += 1
    for candidate in lines[start:end]:
        found = TIMEOUT.match(candidate)
        if found and len(found.group("indent")) == property_indent:
            return int(found.group("value"))
    return None


def setup_node_cache_disabled(lines: list[str], index: int) -> bool:
    step_indent = len(lines[index]) - len(lines[index].lstrip())
    saw_with = False
    for following in lines[index + 1 :]:
        if not following.strip():
            continue
        indent = len(following) - len(following.lstrip())
        stripped = following.strip()
        if indent <= step_indent and stripped.startswith("-"):
            break
        if stripped == "with:":
            saw_with = True
            continue
        if saw_with and re.match(r"package-manager-cache:\s*false\s*$", stripped, re.IGNORECASE):
            return True
    return False


def normalized_selector(rendered: str) -> str:
    return rendered.strip().strip("[]").strip().strip("'\"").lower()


def main() -> None:
    policy = json.loads(POLICY_PATH.read_text(encoding="utf-8"))
    assert policy["repository"] == "contactgilmore/contactgilmore.github.io"
    assert policy["trust_mode"] == "public_untrusted_github_hosted"
    assert policy["private_self_hosted_infrastructure_allowed"] is False
    assert policy["github_hosted_runners_allowed"] is True

    allowed_labels = {str(x).lower() for x in policy.get("allowed_hosted_runner_labels", [])}
    artifact_exceptions = set(policy.get("github_artifact_exceptions", []))
    max_timeout = int(policy.get("max_job_timeout_minutes", 60))
    violations: list[str] = []
    selectors_checked = 0

    for path in sorted([*WORKFLOWS.glob("*.yml"), *WORKFLOWS.glob("*.yaml")]):
        lines = path.read_text(encoding="utf-8").splitlines()
        rel = path.relative_to(ROOT).as_posix()
        for index, line in enumerate(lines):
            match = RUNS_ON.match(line)
            if match:
                selectors_checked += 1
                rendered = render_selector(lines, index, match)
                lowered = rendered.lower()
                if "self-hosted" in lowered:
                    violations.append(f"{rel}:{index + 1}:private_self_hosted_runner_forbidden={rendered}")
                selector = normalized_selector(rendered)
                if allowed_labels and selector not in allowed_labels:
                    violations.append(f"{rel}:{index + 1}:nonstandard_or_unapproved_hosted_runner={rendered}")
                timeout = timeout_for_selector(lines, index, match)
                if timeout is None and policy.get("job_timeout_required"):
                    violations.append(f"{rel}:{index + 1}:job_timeout_minutes_required")
                elif timeout is not None and timeout > max_timeout:
                    violations.append(f"{rel}:{index + 1}:job_timeout_minutes_exceeds_policy={timeout}>{max_timeout}")

            if "actions/upload-artifact@" in line:
                if not policy.get("github_artifact_upload_allowed", False) and rel not in artifact_exceptions:
                    violations.append(f"{rel}:{index + 1}:github_artifact_upload_forbidden")
            if "actions/cache@" in line and not policy["github_dependency_cache_allowed"]:
                violations.append(f"{rel}:{index + 1}:github_dependency_cache_forbidden")
            if CLOUD_CACHE.match(line) and not policy["github_dependency_cache_allowed"]:
                violations.append(f"{rel}:{index + 1}:setup_action_cloud_cache_forbidden")
            if (
                policy.get("require_explicit_setup_cache_disable")
                and re.search(r"uses:\s*actions/setup-node@", line, re.IGNORECASE)
                and not setup_node_cache_disabled(lines, index)
            ):
                violations.append(f"{rel}:{index + 1}:setup_node_package_manager_cache_must_be_false")

    if selectors_checked == 0:
        violations.append("no_runs_on_selectors_found")

    if violations:
        print("RUNNER_POLICY=REFUSE")
        for violation in violations:
            print(f"violation={violation}")
        raise SystemExit(1)

    print("RUNNER_POLICY=PASS")
    print(f"runs_on_selectors_checked={selectors_checked}")
    print("trust_mode=public_untrusted_github_hosted")
    print("private_self_hosted_infrastructure_allowed=false")
    print("github_hosted_runners_allowed=true")
    print("standard_hosted_runner_labels_only=true")
    print("bounded_jobs=true")
    print("github_dependency_cache_allowed=false")


if __name__ == "__main__":
    main()
