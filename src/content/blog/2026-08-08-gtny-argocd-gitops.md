---
layout: post
title: "#10. Git to Know You: Argo CD and GitOps"
date: 2026-08-08
updated: 2026-08-10
thumbnail: /assets/images/blog2026/082026/argo-icon-color.svg
slug: gtny-argocd-gitops
categories: [sre, devops, kubernetes]
tags: [argocd, gitops, kubernetes, continuous-delivery, reconciliation]
series: "Git to Know You"
seriesOrder: 10
seriesStatus: "complete"
---

**GitOps sounds simple right up until Git, CI, and the cluster disagree.**

Somebody changes a manifest. Somebody else runs `kubectl apply`. A pipeline deploys another revision. An emergency fix lands directly in the cluster. A controller changes a field afterward. Everything may still be running, but now the harder question is: **which version is actually supposed to be correct?**

That is the problem I find most useful about GitOps. It is not mainly “deploy from Git.” It is about making desired state explicit, reviewable, and continuously comparable with reality.

Argo CD is one of the best-known ways to apply that model to Kubernetes.

---

> **Beginner note:**  
> GitOps is not “put all of your YAML in Git and let a robot loose on production.” The useful model is: declare the state you want, version that declaration, let software observe both Git and the running system, and reconcile the difference under clear controls.

---

## Start with the reconciliation loop

Before learning Argo CD, learn the operating model.

The vendor-neutral [OpenGitOps principles](https://opengitops.dev/) describe a GitOps-managed system as declarative, versioned and immutable, pulled automatically, and continuously reconciled. In practical terms, that creates a loop like this:

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

That is different from a pipeline that simply runs deployment commands after a merge. A push-based CI/CD pipeline can still be well designed, versioned, and fully automated. GitOps adds the ongoing question: **does the running environment still match the state we declared?**

I would learn that distinction before learning any Argo CD button or CLI command, because almost every useful feature hangs off it.

---

## What Argo CD adds

[Argo CD](https://argo-cd.readthedocs.io/en/stable/) is a declarative continuous-delivery tool for Kubernetes. It runs controllers that compare an application's desired manifests with the resources that actually exist in the target cluster.

If those two states differ, Argo CD can mark the application **OutOfSync**. You can review the difference and synchronize manually, or configure Argo CD to reconcile changes automatically.

That is the core of the product:

```text
desired state in Git
        vs.
live state in Kubernetes
```

Everything else—UI, CLI, projects, RBAC, ApplicationSets, sync waves, notifications, multi-cluster management—exists around that relationship.

This is where I think beginners sometimes get buried. Argo CD has plenty of features, but you do not need to learn the whole platform to understand why it is useful.

---

## CI builds the thing; Git records the intent; Argo applies it

One of the cleaner GitOps patterns separates **continuous integration** from **continuous delivery** instead of turning both into one giant pipeline with every credential imaginable.

A simplified flow might look like this:

```text
application source
      ↓
CI tests and builds
      ↓
image pushed to registry
      ↓
deployment config updated in Git
      ↓
Argo CD sees new desired state
      ↓
Kubernetes is reconciled
```

The important handoff is between the built artifact and the declaration of what an environment should run. CI can prove and publish the artifact. Git can record the intended release. Argo CD can handle the cluster-side reconciliation.

That separation can also reduce the amount of direct cluster access the CI system needs. Argo CD's current [automated sync guidance](https://argo-cd.readthedocs.io/en/stable/user-guide/auto_sync/) explicitly describes a model where CI updates Git and Argo CD performs the deployment rather than requiring the pipeline to call the Argo CD API for every release.

I like this model because authority becomes easier to explain. If production is supposed to follow reviewed configuration, the deployment system should make that relationship visible instead of hiding it behind a shell script.

---

## The `Application` is the one object I would learn first

Argo CD represents a deployed application with an `Application` custom resource. That object tells Argo CD where desired state lives and where it belongs.

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

You can read that without memorizing the schema:

> “The desired state for this application lives here in Git. It belongs in this cluster and namespace. Keep it synchronized according to these policies.”

The exact source revision matters because it defines what Argo CD treats as desired state. Tracking a branch is convenient when that branch is itself a controlled promotion boundary. Pinning an immutable commit gives stronger reproducibility. Tags or version ranges can fit other release models. The point is not that one strategy always wins; the point is that **the thing you track defines what counts as a deployment change**.

The official [Application specification](https://argo-cd.readthedocs.io/en/stable/user-guide/application-specification/) and [tracking strategies](https://argo-cd.readthedocs.io/en/stable/user-guide/tracking_strategies/) cover the deeper options.

---

## Synced is not the same thing as healthy

This distinction is simple and extremely useful.

**Sync status** asks whether the live Kubernetes resources match the desired configuration. **Health status** asks whether the resources appear to be operating successfully.

Those are different questions, so the answers can disagree:

```text
Synced + Healthy
```

The desired state is applied and the workload looks good.

```text
Synced + Degraded
```

Git and Kubernetes agree about the configuration, but the application is unhealthy.

```text
OutOfSync + Healthy
```

The current workload may still be serving traffic while the live configuration differs from what Git says should exist.

That separation prevents a very common troubleshooting mistake: treating configuration drift as identical to runtime failure. Sometimes your configuration is wrong. Sometimes your configuration is applied perfectly and the application is still broken. Argo CD gives you evidence for one dimension; Kubernetes and your observability stack give you evidence for the rest.

---

## I would start with manual sync

GitOps does not require maximum automation on day one.

A very reasonable learning workflow is:

```text
change Git
→ Argo CD detects OutOfSync
→ inspect the diff
→ synchronize manually
→ observe the result
```

That teaches you what Argo CD believes it owns before the controller starts fixing things automatically.

Once the team trusts that model, automatic sync can remove the manual deployment step. Two settings then deserve real attention: **prune** and **self-heal**.

Pruning allows Argo CD to remove managed resources that disappear from desired state. That means deleting a manifest from Git can eventually become deleting a resource from the cluster. Useful? Absolutely. Something I would enable without understanding the deletion path? No.

Self-heal lets Argo CD reconcile live changes that drift away from Git. A manual cluster edit can become temporary instead of quietly becoming a second source of truth. Again, that is powerful because the controller is doing exactly what you told it to do.

Argo CD keeps those behaviors explicit, and its [automated sync policy](https://argo-cd.readthedocs.io/en/stable/user-guide/auto_sync/) documents their safety defaults and semantics.

---

## Drift is information, not an error message

An `OutOfSync` application is Argo CD telling you something very specific: **the declared state and live state are different**.

That can happen because someone changed the cluster manually, Git contains a release that has not been applied yet, a resource was removed, Kubernetes normalized a field, or another controller legitimately changed something after Argo CD created it.

The next move should not automatically be “force sync until the screen turns green.” Read the diff first.

This matters because Kubernetes is full of controllers. Autoscalers adjust replicas. Operators modify custom resources. Admission systems inject fields. Cloud controllers update service state. Argo CD is another controller in the same ecosystem.

If two controllers both believe they own the same field, you can create a **very efficient argument between robots**.

Sometimes the fix is a narrowly scoped diff customization. Sometimes the better fix is to stop declaring a field that another controller legitimately owns. Argo CD's [best-practices guidance](https://argo-cd.readthedocs.io/en/stable/user-guide/best_practices/) explicitly discusses leaving room for fields that are intentionally managed elsewhere.

Ownership boundaries matter for software controllers just as much as they do for teams.

---

## Git becomes part of your production control surface

GitOps makes Git more important, not less.

If a reviewed configuration change can eventually alter production, then repository access and review policy are part of the production security model. Branch protection, required checks, clear ownership, least-privilege write access, and an understandable emergency-change process stop being administrative niceties.

The same applies to Argo CD itself. An `AppProject` can constrain which repositories are trusted sources, which clusters or namespaces an application may target, and what resources it may manage. Argo CD also has RBAC around who can view, synchronize, delete, or override applications.

I would learn those boundaries early enough that “Argo can reach the cluster” never quietly becomes “every repository can deploy everywhere.” The official [Projects](https://argo-cd.readthedocs.io/en/stable/user-guide/projects/) documentation is a good next stop after the basic application model.

And no, GitOps does not make plaintext production secrets a good Git strategy. Git can declare how a secret is referenced or obtained without becoming the place where you store the raw secret itself.

---

## GitOps does not mean you stop looking at the live cluster

You will still troubleshoot the real system.

Commands such as these remain completely normal:

```bash
kubectl get pods
kubectl describe deployment demo-web
kubectl logs deployment/demo-web
argocd app get demo-web
argocd app diff demo-web
```

The useful GitOps rule is not “humans must never touch Kubernetes.” It is **do not let an undocumented imperative change quietly become the new desired state**.

If you make an emergency change directly in the cluster, decide what happens next. Revert it. Encode the intended version in Git. Or document a temporary exception with a clear rollback. Otherwise the reconciliation loop will eventually remind you which source of truth you selected.

That can feel annoying during an incident, but invisible configuration history is worse.

---

## Where Argo CD earns its complexity

I would not introduce GitOps just to say a deployment system is modern. Argo CD earns its keep when the reconciliation model solves a real operational problem.

It becomes especially useful when teams need reviewed Kubernetes deployments across several applications or environments, clear desired-vs-live diffs, drift detection, auditable environment history, consistent promotion controls, and a deliberate separation between building an artifact and authorizing where it runs.

The tradeoff is another control plane to operate. Repository credentials, cluster permissions, reconciliation behavior, deployment ordering, expected diffs, recovery procedures, and Argo CD itself all need maintenance.

For a tiny environment, a simple deployment workflow may be easier to reason about. GitOps is not maturity by default. **Being able to explain who declares state, who applies it, who may override it, and how you recover when those systems disagree is maturity.**

---

## A safe way to learn it

Use a disposable Kubernetes environment and one small application. You want to see the reconciliation loop, not build a platform team in your living room.

I would work through this sequence:

1. install Argo CD using the current [getting started guide](https://argo-cd.readthedocs.io/en/stable/getting_started/);
2. put a small Deployment and Service in Git;
3. create one Argo CD `Application` with manual sync;
4. inspect the first `OutOfSync` diff and synchronize it;
5. change the image or replica count in Git and watch Argo CD detect the change;
6. manually change one harmless managed field in Kubernetes and inspect the drift;
7. enable automated sync;
8. test self-heal on a disposable change;
9. test pruning with a resource you can safely delete;
10. create a narrowly scoped project and verify that it cannot deploy wherever it wants.

By the end, you should be able to answer four questions without opening the docs: **where is desired state, what is live, what is different, and who is allowed to reconcile it?**

That is the useful part of GitOps.

---

## Bottom Line

Git gave us reviewable change history. Kubernetes gave us a desired-state control model. Argo CD connects those ideas by continuously comparing reviewed declarations with a running cluster.

The feature list will keep changing, but the operating lesson is durable: **make deployment intent visible, constrain who can change it, understand what the reconciliation loop owns, and treat drift as evidence before treating it as something to erase.**

That closes the first **Git to Know You** series for me. Rundeck, observability, incident response, Git, infrastructure as code, CI/CD, AI-assisted development, Kubernetes, OpenTelemetry, and GitOps are very different tools, but the progression keeps circling the same professional idea.

The better our systems become at changing themselves, the more important it is that we can explain **who asked for the change, what should happen, what actually happened, and how we know**.

That is the part worth keeping long after a particular tool falls off the list.
