---
layout: post
title: "#6. Git to Know You: GitHub Actions"
date: 2025-07-20
updated: 2026-08-08
thumbnail: /assets/images/blog2025/0626/githubActionsThumb.png
categories: [sre, automation, ci-cd]
tags: [github actions, ci/cd, workflows, automation, devops]
series: "Git to Know You"
seriesOrder: 6
seriesStatus: "ongoing"
---

**It’s automation time.**

You have Git. You have infrastructure as code. Now comes the dangerous question: *“Why am I still doing this part by hand?”*

That question is where CI/CD starts becoming practical instead of theoretical.

GitHub Actions lets events in a repository trigger repeatable workflows. Open a pull request and run validation. Merge approved code and build an artifact. Publish a release and deploy it. Schedule a maintenance check. The important part is not that things happen automatically. The important part is that the process is **versioned, reviewable, and repeatable**.

This portfolio is a good example. Changes go through Git, automated validation, browser testing, accessibility checks, and a controlled GitHub Pages deployment workflow. The automation does not remove judgment; it makes the judgment points explicit.

---

> **Beginner note:**  
> GitHub Actions can automate powerful operations, so start with validation before deployment. A workflow that runs tests on a pull request is a much safer place to learn than one that immediately changes production infrastructure.

---

## What Is GitHub Actions?

GitHub Actions is GitHub's workflow automation and CI/CD platform. Workflow files live in `.github/workflows/` and are written in YAML.

The basic model is simple:

**event → workflow → jobs → steps**

For example:

- Open or update a pull request → run tests and linting.
- Merge to `main` → build a deployable artifact.
- Manually approve a release → deploy that artifact.
- Run on a schedule → check links, dependencies, or other maintenance tasks.

The workflow becomes part of the repository, so changes to the delivery process can go through the same review history as changes to the application.

---

## A modern beginner example

Here is a small Node workflow that validates a project when code is pushed or a pull request is opened:

```yaml
name: Validate

on:
  push:
    branches: [main]
  pull_request:

permissions:
  contents: read

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Check out repository
        uses: actions/checkout@v7

      - name: Set up Node
        uses: actions/setup-node@v7
        with:
          node-version: 24
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test
```

There are a few details here that matter more than they first appear.

`npm ci` gives CI a dependency install based on the lockfile instead of casually changing dependency resolution. The workflow declares read-only repository permissions because validation does not need write access. And the Node version is explicit instead of depending on whatever happens to be preinstalled on the runner.

Current major versions will change again eventually. That is normal. Treat workflow dependencies like any other dependency: review and update them deliberately.

---

## Why GitHub Actions?

GitHub Actions is especially convenient when the source already lives in GitHub:

- **Repository-native automation** — pull requests, branches, releases, issues, and schedules can all become workflow triggers.
- **Versioned delivery logic** — the YAML lives beside the code it validates or deploys.
- **Hosted and self-hosted runners** — jobs can run on GitHub-managed infrastructure or on appropriately secured infrastructure you operate.
- **Reusable actions and workflows** — common steps can be composed instead of rewritten everywhere.
- **Environment and approval controls** — sensitive deployment paths can require explicit gates.
- **OIDC support** — cloud workloads can often use short-lived identity federation instead of storing long-lived cloud credentials as repository secrets.

GitHub Actions is not the only good CI/CD platform. Jenkins, GitLab CI/CD, CircleCI, Azure DevOps, Buildkite, and others can all be the right answer. The transferable skill is designing a delivery process that is observable, repeatable, appropriately privileged, and easy to recover when something fails.

---

## A Real Story: How GitHub Actions Helped My Team

Before GitHub Actions, our deployments were tedious and fragile. We built applications in TeamCity, downloaded artifacts manually, unzipped them, and ran installation scripts by hand.

That worked until the environment started changing faster. As we moved toward microservices and containers, the number of manual steps became harder to justify and harder to reproduce consistently.

We moved toward a Git-centered workflow: changes lived in branches, pull requests created a review point, and merges became a natural automation trigger.

GitHub Actions connected those pieces. Builds, tests, deployment steps, and infrastructure checks could run from a workflow instead of depending on someone remembering the procedure. Terraform validation and planning could live in the same delivery system as application automation.

By the time we had implemented that model across teams, we had eliminated at least 25 percent of our toil. The biggest improvement was not simply speed. The process became visible and repeatable. If something failed, we had workflow history and Git history instead of trying to reconstruct which manual step someone ran.

---

## Security is part of the workflow

Automation can move mistakes faster too, so permissions deserve the same attention as the build steps.

A few habits matter:

- Give `GITHUB_TOKEN` only the permissions a job actually needs.
- Be cautious with workflows triggered from untrusted forked pull requests.
- Prefer short-lived cloud authentication such as OIDC where the provider and use case support it.
- Protect production deployments with environments, branch rules, reviews, or manual gates when appropriate.
- Treat third-party actions as dependencies. Review their source/reputation and keep them current; higher-risk environments may pin actions to full commit SHAs.
- Never print secrets or sensitive configuration into workflow logs.

A green workflow is useful. A green workflow with unnecessary administrative permissions is still a bad workflow.

---

## Common Use Cases

GitHub Actions works well for much more than “deploy on push”:

- application tests and builds;
- Terraform formatting, validation, and planning;
- container builds and security scans;
- static-site builds and GitHub Pages packaging;
- scheduled maintenance and link checks;
- release automation;
- browser and accessibility testing;
- notifications and workflow coordination.

One lesson I have learned is not to automate everything into one enormous workflow. Small jobs with clear responsibilities are easier to understand, retry, and troubleshoot.

---

## Where GitHub Actions can hurt

- **Debugging remote runners takes practice.** A failed job can require more context than a local command.
- **Permissions can be too broad.** Convenience defaults are not a substitute for least privilege.
- **Third-party actions add supply-chain dependencies.** Know what you are executing.
- **Hosted-runner limits matter for large workloads.** Self-hosting can add capacity, but it also adds security and maintenance responsibilities.
- **Deep platform coupling is real.** A workflow designed around GitHub events and environments takes work to move elsewhere.
- **YAML can become a programming language by accident.** When a workflow becomes unreadable, extract reusable scripts or workflows instead of adding another hundred lines of conditionals.

---

## Cost

GitHub's billing model depends on repository visibility, runner type, account plan, and usage. Public repositories can use standard GitHub-hosted runners without the same metered-minute model applied to private repositories, while private-repository allowances and paid usage vary by plan.

Because pricing and included usage can change, check GitHub's current Actions billing documentation before designing a workload around a particular allowance.

Self-hosted runners shift compute onto infrastructure you operate, but “self-hosted” does not mean free. You own the machine, patching, isolation, capacity, and security boundary.

---

## Bottom Line

GitHub Actions is useful because it turns delivery knowledge into something executable and reviewable.

Start with validation. Make a pull request run a test you would otherwise run manually. Then add artifact creation, security checks, or deployment gates as the workflow matures.

The goal is not to make every change happen automatically. The goal is to automate the repeatable parts while keeping human judgment at the points where judgment actually matters.

That is a much healthier definition of CI/CD than “push to `main` and hope.”
