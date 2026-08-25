#!/usr/bin/env python3
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
POLICY_PATH = ROOT / "config/ci/runner-routing-policy.json"
WORKFLOWS = ROOT / ".github/workflows"
RUNS_ON = re.compile(r"^(?P<indent>\s*)runs-on:\s*(?P<value>.*)\s*$")
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


def main() -> None:
    policy = json.loads(POLICY_PATH.read_text(encoding="utf-8"))
    assert policy["repository"] == "contactgilmore/contactgilmore.github.io"
    assert policy["trust_mode"] == "public_untrusted_github_hosted"
    assert policy["private_self_hosted_infrastructure_allowed"] is False
    assert policy["github_hosted_runners_allowed"] is True

    violations: list[str] = []
    selectors_checked = 0

    for path in sorted([*WORKFLOWS.glob("*.yml"), *WORKFLOWS.glob("*.yaml")]):
        lines = path.read_text(encoding="utf-8").splitlines()
        rel = path.relative_to(ROOT)
        for index, line in enumerate(lines):
            match = RUNS_ON.match(line)
            if match:
                selectors_checked += 1
                rendered = render_selector(lines, index, match)
                if "self-hosted" in rendered.lower():
                    violations.append(f"{rel}:{index + 1}:private_self_hosted_runner_forbidden={rendered}")

            if "actions/cache@" in line and not policy["github_dependency_cache_allowed"]:
                violations.append(f"{rel}:{index + 1}:github_dependency_cache_forbidden")
            if CLOUD_CACHE.match(line) and not policy["github_dependency_cache_allowed"]:
                violations.append(f"{rel}:{index + 1}:setup_action_cloud_cache_forbidden")

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
    print("github_dependency_cache_allowed=false")


if __name__ == "__main__":
    main()
