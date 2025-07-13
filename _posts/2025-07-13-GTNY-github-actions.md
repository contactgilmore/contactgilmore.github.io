---
layout: post
title: "#6. Git to Know You: GitHub Actions"
date: 2025-07-13
thumbnail: /assets/images/blog2025/0626/githubActionsThumb.png
categories: [sre, automation, ci-cd]
tags: [github actions, ci/cd, workflows, automation, devops]
---

**It’s automation time.**  
You’ve learned Git, committed your first `.tf` file, maybe even dabbled in observability tooling. Now you’re staring at your repository and thinking, *"Wouldn’t it be cool if I didn’t have to manually build or deploy anything ever again?"* Enter GitHub Actions—a native CI/CD system that lets you connect events in your repo (like a push, PR, or release) to actual workflows that build, test, and ship your code automatically.

This is where things start to feel like real DevOps. You push a commit and things just *happen*. Your tests run. Your infrastructure updates. Your app gets deployed. It feels like magic—but it's not. It's GitHub Actions.

---

>
> **Disclaimer:  
> Everything in this blog is written with beginners in mind. If you're curious about Site Reliability Engineering and don't know where to start—you're exactly who this is for. I'm not here to throw a bunch of jargon at you or assume you already know everything. The goal is to keep it clear, practical, and beginner-friendly. Whether you're switching roles, just getting started in tech, or exploring SRE for the first time—welcome! This is the stuff I wish I had been told.**
>

---

## What Is GitHub Actions?

GitHub Actions is a **CI/CD platform built into GitHub**. It lets you **automate workflows**—like testing code, deploying applications, building Docker containers, or even posting in Slack—whenever something happens in your repository.

Think of it like this:  
🧠 “When something happens in GitHub → run one or more jobs automatically.”

A few examples:
- Push code to `main`? ✅ Run tests and deploy to staging.
- Open a pull request? ✅ Lint the code and post results in the PR.
- Merge to production? ✅ Deploy the app, notify the team, bump a version number.

GitHub Actions gives you automation without needing to leave your GitHub workflow.

---

## Why GitHub Actions?

There are a lot of CI/CD options—Jenkins, GitLab CI, CircleCI, Travis, ArgoCD, and more. But GitHub Actions has some serious advantages:

- **Built-In Integration**  
  It’s already part of GitHub. No separate UI, account, or API needed.

- **YAML-Based & Declarative**  
  If you’ve used Terraform or Kubernetes, the syntax will feel familiar.

- **Highly Event-Driven**  
  Over 30 supported trigger events—from pushes and pull requests to issues and releases.

- **Massive Marketplace**  
  Thousands of pre-built actions you can drop into any workflow.

- **Generous Free Tier**  
  Plenty of free minutes for personal and open-source projects.

- **Secure Secrets Handling**  
  Store secrets like tokens, keys, and passwords directly in GitHub, with restricted access.

---

## A Simple Example

Here’s a basic workflow triggered by a push to the `main` branch:

```yaml
# .github/workflows/deploy.yml
name: Deploy App

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repo
        uses: actions/checkout@v3

      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: npm test

      - name: Deploy
        run: npm run deploy
```

This small file lives in `.github/workflows` and becomes your new deployment script—fully automated, versioned, and repeatable.

---

## A Real Story: How GitHub Actions Helped My Team

Before GitHub Actions, our deployments were tedious and fragile. We built our apps in TeamCity, downloaded the artifacts manually, unzipped them, and ran install scripts by hand. It was easy to mess up and nearly impossible to track changes reliably.

As we moved toward microservices and containers, it became obvious that this wouldn’t scale. So we started using Git the right way: every change lived in a branch, every update had a pull request, and every merge had a peer review.

GitHub Actions connected the rest of the dots. Now when we merge a PR, GitHub Actions runs a pipeline that builds, tests, and deploys our changes. It’s consistent. It’s fast. And if something goes wrong? We revert the PR and everything is back to the previous working state—no guesswork, no SSHing into servers.

This wasn’t just for apps either. Our infrastructure runs through GitHub Actions too. Terraform format, validate, plan, and apply are all part of our CI/CD flow. Our secrets live safely in a provider like Terraform Cloud, and GitHub Actions references those securely without ever exposing credentials.

By the time we finished implementing it across teams, we had eliminated at least 25% of our [TOIL](https://sre.google/sre-book/eliminating-toil/)—no more babysitting deployments or fixing broken scripts in the middle of the night.

---

## Common Use Cases

- **CI/CD Pipelines**  
  Build → Test → Deploy across different branches or environments.

- **Terraform Deployments**  
  Automate `terraform fmt`, `validate`, `plan`, and `apply`.

- **Jekyll/GitHub Pages**  
  Push to `main`, and your static blog publishes itself.

- **Chat Notifications**  
  Post to Slack, Discord, or Teams when pipelines complete.

- **Security Scans**  
  Run Snyk, Trivy, or any scanner with PR context.

- **Custom Actions**  
  Write your own using JavaScript, Docker, or bash.

---

## Drawbacks

- **Resource Limits**  
  GitHub-hosted runners have fixed CPU/memory. Use self-hosted for big builds.

- **Debugging Can Be Tricky**  
  Logging is minimal, and trial-and-error is common when starting out.

- **YAML Is Sensitive**  
  One wrong indent and your whole job fails. Seriously.

- **Vendor Lock-In**  
  Deeply integrated into GitHub, which can be limiting if you ever move off-platform.

- **Forked PRs Can’t Access Secrets**  
  A security feature that can block automation in open source workflows.

---

## Cost

GitHub Actions is **free** for public repositories and comes with generous minutes for private repos too. GitHub Pro and org accounts get even more.

Need more power? You can always run your own **self-hosted runners** on-prem or in the cloud.

---

## Bottom Line

GitHub Actions brings real automation to your development workflow. From app builds to infrastructure as code, you can trigger anything—securely, automatically, and repeatably. It’s fast to learn, easy to scale, and powerful enough for teams of any size.

It’s not just “nice to have.” It’s your next step toward reducing [TOIL](https://sre.google/sre-book/eliminating-toil/) and making your work smoother, faster, and more fun.

Start with one workflow file—and watch your entire release process transform.

Stay tuned for the next post in the **Git to Know You** series.
