---
layout: post
title: "#10. Git to Know You: Argo CD and GitOps"
date: 2026-08-08
thumbnail: /assets/images/blog2026/082026/argo-icon-color.svg
slug: gtny-argocd-gitops
categories: [sre, devops, kubernetes]
tags: [argocd, gitops, kubernetes, continuous-delivery, reconciliation]
series: "Git to Know You"
seriesOrder: 10
seriesStatus: "complete"
---

**A deployment gets much easier to reason about when “what should be running?” has one reviewable answer.**

Without that, production can become a collection of partially remembered actions:

- somebody changed a manifest;
- somebody else ran `kubectl apply`;
- a pipeline deployed a different revision;
- an emergency edit happened directly in the cluster;
- a controller changed part of the object afterward;
- and now Git, CI, and the cluster all disagree about what “correct” means.

GitOps is an operating model for reducing that ambiguity.

Argo CD is one of the most common ways to apply that model to Kubernetes.

---

> **Beginner note:**  
> GitOps is not “put everything in Git and let a robot deploy it.” The useful idea is narrower: describe desired state declaratively, version it, let software pull that desired state, and continuously reconcile the real system toward it. Git is important because it gives the desired state history, review, and auditability. The reconciliation loop is what turns that history into operations.

---

## Start With GitOps, Not Argo CD

Before learning the product, learn the model.

The vendor-neutral [OpenGitOps principles](https://opengitops.dev/) define four properties for a GitOps-managed system:

1. **Declarative** — the desired state is expressed as declarations rather than a sequence of manual steps.
2. **Versioned and immutable** — desired state is stored with version history and immutable revisions.
3. **Pulled automatically** — software agents pull the desired-state declarations from the source.
4. **Continuously reconciled** — software observes actual state and attempts to move it toward the desired state.

That gives us a useful loop:

```text
Git says what should exist
        ↓
agent reads the desired state
        ↓
agent compares desired vs. actual
        ↓
agent reports or corrects the difference
        ↺
```

GitOps is therefore more than CI/CD with YAML files.

A pipeline that reads a repository and pushes commands into production can be automated and version controlled, but it is still fundamentally a **push** deployment model. GitOps adds a pull/reconciliation relationship between declared state and the running environment.

---

## What Is Argo CD?

[Argo CD](https://argo-cd.readthedocs.io/en/stable/) is a declarative GitOps continuous-delivery tool for Kubernetes.

It runs as a Kubernetes controller and continually compares two things:

```text
desired state from Git
          vs.
live state in Kubernetes
```

When those differ, the application becomes **OutOfSync**.

Argo CD can show the difference and let an operator synchronize it manually, or it can automatically reconcile the cluster toward the declared target state.

That is the core product.

The UI, CLI, SSO, RBAC, ApplicationSets, sync waves, notifications, multi-cluster support, and other features all sit around that reconciliation loop.

---

## The Important CI/CD Split

GitOps makes more sense when **continuous integration** and **continuous delivery** stop being treated as one giant pipeline.

A simplified application flow might look like this:

```text
source repo
   ↓
CI tests code
   ↓
CI builds image
   ↓
image pushed to registry
   ↓
config repo updated with new image revision
   ↓
Argo CD notices Git changed
   ↓
Argo CD reconciles Kubernetes
```

That split matters because the CI system does not necessarily need credentials that let it issue deployment commands directly to the production cluster.

The official Argo CD [CI automation guidance](https://argo-cd.readthedocs.io/en/stable/user-guide/ci_automation/) describes the same GitOps pattern: CI changes the desired configuration in Git, and Argo CD handles synchronization from there.

This creates a cleaner boundary:

**CI proves and publishes an artifact. Git records the release intent. Argo CD applies the declared state.**

---

## The `Application` Is the Main Object to Learn

Argo CD represents a deployed application with an `Application` custom resource.

At minimum, it needs to know:

- which Git repository contains the desired state;
- which revision to track;
- which path or chart describes the application;
- which Kubernetes cluster is the destination;
- which namespace is the destination;
- which Argo CD project governs the application;
- how synchronization should behave.

A small example looks like this:

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: demo-web
  namespace: argocd
spec:
  project: demo

  source:
    repoURL: https://github.com/example/platform-config.git
    targetRevision: main
    path: apps/demo-web

  destination:
    server: https://kubernetes.default.svc
    namespace: demo-web

  syncPolicy:
    automated:
      enabled: true
      prune: true
      selfHeal: true
    syncOptions:
      - CreateNamespace=true
```

Read that as an operating contract:

> “The desired state for `demo-web` lives at this revision and path in Git. It belongs in this cluster and namespace. Keep it synchronized, remove managed resources that disappear from Git, and correct live drift.”

The full field set is documented in the official [Application specification](https://argo-cd.readthedocs.io/en/stable/user-guide/application-specification/).

---

## `targetRevision` Is a Real Deployment Decision

The `targetRevision` field decides what Git revision Argo CD treats as desired state.

It can track a branch, tag, commit, or supported version expression depending on the source type.

Those choices imply different operating behavior.

### Track a branch

If an application tracks `main`, changes merged to that branch can become new desired state automatically.

That is simple and works well when the branch itself is the controlled promotion boundary.

### Pin a commit

A commit SHA gives you a precise immutable revision.

That increases reproducibility because the declared deployment target cannot silently move.

### Track a tag or version

Tags can provide a release-oriented boundary, but mutable tags weaken the “immutable desired state” property if they are moved later.

The important lesson is not that one choice is universally correct. It is that **what Argo CD tracks determines what counts as a deployment change**.

The official [tracking strategies](https://argo-cd.readthedocs.io/en/stable/user-guide/tracking_strategies/) documentation covers the tradeoffs and even warns about ambiguous Git references when a branch and tag share the same name.

---

## Synced and Healthy Are Different Questions

One of Argo CD's most useful mental models is that **sync state** and **health state** are not the same thing.

Sync asks:

> “Does the live Kubernetes configuration match the desired configuration?”

Health asks:

> “Do the running resources appear operational according to their health checks?”

Those can disagree.

An application may be:

```text
Synced + Healthy
```

The desired state is applied and the resources look good.

It may also be:

```text
Synced + Degraded
```

Git and Kubernetes agree about the configuration, but the workload itself is unhealthy.

Or:

```text
OutOfSync + Healthy
```

The current workload may still be serving traffic normally even though the live configuration differs from the desired state.

That separation is valuable during troubleshooting because **configuration drift and runtime health are different failure dimensions**.

Argo CD's overview documents both drift detection and resource health analysis as separate capabilities.

---

## Manual Sync Is a Good Place to Start

GitOps does not require you to enable every automatic behavior on day one.

A safe learning progression is:

```text
Git change
→ Argo CD detects OutOfSync
→ human reviews diff
→ human clicks/runs Sync
→ observe result
```

That teaches the state model before automation starts correcting things for you.

Once the team trusts the workflow, automatic synchronization can remove the manual deployment step.

That is a better progression than enabling prune, self-heal, and broad production permissions before anyone understands what Argo CD thinks it owns.

---

## Automated Sync Changes the Operating Model

With automated synchronization enabled, Argo CD can synchronize when Git moves to a new desired state.

Two options deserve special attention.

### `prune`

Pruning allows Argo CD to remove managed resources that no longer exist in the desired state.

Without pruning, deleting a manifest from Git does not necessarily delete the live Kubernetes resource automatically.

With pruning, Git deletion can become cluster deletion.

That is powerful, and it is exactly why it deserves review controls around the repository.

### `selfHeal`

Self-heal tells Argo CD to re-synchronize when live cluster state changes away from the desired state even though Git did not change.

That turns a manual `kubectl edit` into temporary drift instead of a new unofficial source of truth.

The project intentionally keeps these behaviors distinct; the current [automated sync policy](https://argo-cd.readthedocs.io/en/stable/user-guide/auto_sync/) documents the safety defaults for pruning, allow-empty behavior, and self-healing.

---

## Drift Detection Is the Feature, Not an Error Message

An `OutOfSync` application is not automatically a broken application.

It is Argo CD telling you:

> “The live state and declared state are different.”

That difference could mean:

- somebody manually changed a resource;
- Git contains a new release that has not been synchronized;
- a resource was deleted;
- a controller mutated a field after creation;
- a templating function rendered nondeterministic output;
- pruning is disabled and an old resource remains;
- the manifest itself contains something Kubernetes normalized or discarded.

The next step is not “force sync until green.”

The next step is **understand the diff**.

Argo CD provides [diff customization](https://argo-cd.readthedocs.io/en/stable/user-guide/diffing/) for cases where controllers or known Kubernetes behavior legitimately alter fields. That feature should be used narrowly. Ignoring every noisy field is just a more sophisticated way to stop looking at drift.

---

## Git Becomes a Production Control Surface

GitOps does not make Git less important.

It makes Git **more** important.

If merging a configuration change can alter production, then repository controls are part of production controls.

That means things like:

- protected branches;
- pull-request review;
- required CI checks;
- least-privilege write access;
- signed or otherwise attributable changes where appropriate;
- clear ownership of environment configuration;
- a readable commit history;
- a deliberate emergency-change process.

A GitOps repository is not a casual scratchpad simply because it contains YAML.

The OpenGitOps model explicitly depends on desired state being versioned and immutable. Argo CD's own best practices also recommend separating application source from deployment configuration in many environments because it improves audit history, access separation, and automation behavior.

See [Argo CD best practices](https://argo-cd.readthedocs.io/en/stable/user-guide/best_practices/) for the repository-separation rationale.

---

## Separate Source Code From Environment Configuration When It Helps

A common GitOps pattern uses two kinds of repositories:

```text
application source repo
  code
  tests
  Dockerfile
  CI

configuration repo
  Kubernetes manifests
  Helm values
  Kustomize overlays
  environment revisions
```

The source repository answers:

> “How do we build the application?”

The configuration repository answers:

> “What version and configuration should this environment run?”

That separation is not mandatory for every small project, but it becomes useful when build permissions and production-deployment permissions should differ.

It also avoids a fun little automation trap where CI commits a deployment change to the same repository and accidentally triggers itself again.

---

## Do Not Confuse GitOps With Secret Storage

Git is a good place for **desired state**.

Plaintext production secrets are not suddenly a good idea because the repository is called GitOps.

Argo CD needs credentials for private repositories, and its documentation supports HTTPS, SSH, tokens, GitHub Apps, and other repository authentication methods. Those credentials are configured for Argo CD; they are not an excuse to place application passwords or private keys directly into a public or broadly readable config repository.

The official [private repository](https://argo-cd.readthedocs.io/en/stable/user-guide/private-repositories/) documentation covers repository authentication.

For application secrets, the architecture should preserve the same principle you would use anywhere else: **Git may declare how a secret is referenced or obtained without storing the raw secret in plaintext.**

---

## `AppProject` Is a Security Boundary Worth Learning Early

Every Argo CD application belongs to an `AppProject`.

Projects can restrict:

- which Git repositories are trusted sources;
- which clusters and namespaces applications may target;
- which Kubernetes resource kinds may be deployed;
- project-specific roles and permissions.

This matters because the automatically created `default` project is intentionally permissive for initial use. The Argo CD documentation recommends dedicated projects with explicit source, destination, and resource permissions for real environments.

The [Projects](https://argo-cd.readthedocs.io/en/stable/user-guide/projects/) documentation is one of the first security pages worth reading after the basic tutorial.

A useful principle is:

**A repository should not be able to deploy anywhere merely because Argo CD can reach the cluster.**

---

## RBAC Should Match the Workflow You Actually Want

Argo CD has its own authorization model for actions such as viewing applications, syncing, deleting, accessing logs, and overriding desired state.

Not every user who can inspect an application needs permission to synchronize it.

Not every user who can synchronize an application needs permission to override its declared source with arbitrary manifests or revisions.

That last distinction is particularly important: Argo CD's [RBAC documentation](https://argo-cd.readthedocs.io/en/stable/operator-manual/rbac/) treats override as a powerful privilege because it can intentionally deploy state that differs from the configured source.

If Git is supposed to be the release authority, casually handing out ways around Git defeats the architecture.

---

## Sync Waves and Hooks Handle Ordering, but Use Them Carefully

Real applications sometimes need deployment ordering.

Examples:

- create a namespace before namespaced resources;
- run a database migration before a new application version;
- install a custom resource definition before its custom resources;
- run a validation job after synchronization.

Argo CD supports **sync phases**, **resource hooks**, and **sync waves** for these workflows.

A wave is an integer ordering value. Lower waves are processed before higher waves. Hooks can run in phases such as PreSync and PostSync.

That gives you a way to express deployment choreography without moving the entire process back into an imperative shell script.

But ordering logic can become its own mini-platform. If every application needs fifteen waves and a collection of lifecycle jobs, the delivery design probably deserves another look.

The official [sync phases and waves](https://argo-cd.readthedocs.io/en/stable/user-guide/sync-waves/) guide explains the ordering model.

---

## GitOps Does Not Mean “Never Touch the Cluster”

This is an important practical correction.

Production troubleshooting still requires observing the live system.

You may still use commands such as:

```bash
kubectl get pods
kubectl describe deployment demo-web
kubectl logs deployment/demo-web
argocd app get demo-web
argocd app diff demo-web
```

The GitOps rule is not “humans may never use `kubectl`.”

The useful rule is:

**Do not let an undocumented imperative change quietly become the new desired state.**

If you make an emergency change directly in the cluster, decide what happens next:

- revert it and let Git remain authoritative;
- encode the intended change in Git;
- or explicitly document a temporary exception and its rollback path.

Otherwise the reconciliation loop will eventually remind you which source of truth you chose.

---

## Reconciliation Can Fight Other Controllers

Kubernetes is full of controllers.

Horizontal Pod Autoscalers adjust replicas. Operators mutate custom resources. Admission webhooks inject fields. Cloud controllers update service details. Controllers may reorder or normalize configuration.

Argo CD is also a controller.

If two controllers both believe they own the same field, you can create a very efficient argument between robots.

The fix is not always “make Argo CD stronger.”

Sometimes the right answer is to stop declaring a field that another controller legitimately owns, or to configure a narrowly scoped ignored difference when the live mutation is expected.

Argo CD's best-practices documentation explicitly uses autoscaled replicas as an example of leaving room for imperatively managed fields.

Ownership boundaries matter as much for controllers as they do for teams.

---

## A Safe Way to Learn Argo CD

You do not need a production cluster or multi-cluster platform to learn the useful part.

Use a disposable Kubernetes environment and one tiny application.

A good progression is:

1. install Argo CD using the current official getting-started guide;
2. create one Git repository or directory containing a small Deployment and Service;
3. create an Argo CD `Application` with **manual** sync;
4. observe the initial `OutOfSync` state;
5. inspect the diff and synchronize it;
6. change the image tag or replica count in Git and watch Argo CD detect the difference;
7. manually change one managed field in Kubernetes and inspect the resulting drift;
8. enable automated sync;
9. test self-heal with a harmless field change;
10. test pruning with a disposable resource;
11. replace the default project with a narrowly scoped `AppProject`;
12. inspect the application history and compare the cluster state with the Git revision that produced it.

The official [getting started guide](https://argo-cd.readthedocs.io/en/stable/getting_started/) is deliberately small enough to use as a learning lab.

The goal is not to click every screen in Argo CD.

The goal is to understand **who declares state, who reconciles it, what counts as drift, and which controls prevent the wrong Git change from becoming the wrong production state**.

---

## Where Argo CD Helps

Argo CD is especially useful when teams need:

- repeatable Kubernetes deployments from reviewed configuration;
- clear desired-vs-live diffs;
- drift detection;
- automated reconciliation;
- auditable environment changes;
- separation between CI artifact creation and cluster deployment;
- consistent deployment patterns across multiple applications or clusters;
- RBAC and project boundaries around who can deploy what and where;
- support for common manifest formats such as plain YAML, Helm, and Kustomize.

The more environments and services you operate, the more valuable a consistent reconciliation model becomes.

---

## Where GitOps Hurts

GitOps adds its own operational surface.

You now have to manage:

- the Argo CD control plane;
- repository availability and credentials;
- cluster credentials and permissions;
- configuration-repository structure;
- reconciliation behavior;
- false-positive or expected diffs;
- sync ordering;
- secret-management boundaries;
- access to Git as a production control surface;
- recovery when Git, Argo CD, or the cluster cannot agree.

It can also encourage cargo-cult automation.

Turning on auto-sync, prune, and self-heal everywhere is not maturity if nobody understands the deletion path, project permissions, or controller ownership model.

The desired outcome is not maximum automation.

It is **a deployment process whose state, authority, and recovery behavior are easy to explain**.

---

## Bottom Line

GitOps gives deployment the same qualities that made Git useful for code: reviewable intent, history, reproducibility, and a clear record of change.

Argo CD adds the Kubernetes reconciliation engine that continuously asks:

```text
What does Git say should exist?
What actually exists?
What is different?
Should I report it, or correct it?
```

Learn that loop before learning the feature list.

Understand the difference between sync and health. Treat prune and self-heal as operational policies, not checkboxes. Protect the repository as a production control surface. Use projects and RBAC to constrain blast radius. Expect other Kubernetes controllers to own some fields. Keep emergency changes from becoming invisible configuration history.

That closes the current cloud-native stretch of **Git to Know You**:

```text
Kubernetes → define and run desired workload state
OpenTelemetry → understand what the running system is doing
Argo CD / GitOps → reconcile deployed state from reviewed declarations
```

The products will keep changing. The operating ideas are the part worth keeping.