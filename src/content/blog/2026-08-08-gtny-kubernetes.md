---
layout: post
title: "#8. Git to Know You: Kubernetes"
date: 2026-08-08
thumbnail: /assets/images/blog2026/082026/kubernetes-icon-color.svg
slug: gtny-kubernetes
categories: [sre, devops, containers]
tags: [kubernetes, containers, orchestration, reliability, devops]
series: "Git to Know You"
seriesOrder: 8
seriesStatus: "ongoing"
---

**Containers are easy right up until you have a lot of them.**

One container on one machine is understandable. A few containers behind a load balancer are still manageable. Then an instance dies, traffic shifts, a deployment needs to roll forward without dropping requests, one service needs three replicas while another needs twenty, and somebody asks which machine is actually running what.

That is the problem Kubernetes is built to organize.

If a container runtime answers, “How do I package and run this container?”, Kubernetes answers a different question:

> “How do I keep a collection of containerized workloads in the state I intended?”

That distinction is the key to understanding the platform.

---

> **Beginner note:**  
> Kubernetes is a large system. You do not need a production cluster, cloud account, or a week of YAML to learn the useful part. Start with the object model and a disposable local cluster. The goal is to understand what Kubernetes is reconciling and why.

---

## What Is Kubernetes?

Kubernetes is an open-source platform for managing containerized workloads and services. It provides APIs and controllers for deployment, scaling, networking, configuration, recovery, and other operational concerns.

The important phrase is **desired state**.

When you create a Kubernetes object, you describe what you want. Kubernetes stores that intent and continually works to make the actual cluster state match it.

Ask for three replicas of an application and Kubernetes tries to keep three running. Replace the image version in a Deployment and Kubernetes can roll the workload toward that new state. Lose a Pod and a controller can create another one because the requested state still says that replica should exist.

That control-loop model is much more important than memorizing `kubectl` commands.

The official [Kubernetes concepts documentation](https://kubernetes.io/docs/concepts/) and [object model](https://kubernetes.io/docs/concepts/overview/working-with-objects/) are the best places to build that mental model.

---

## The Cluster: Control Plane and Workers

A Kubernetes cluster has a **control plane** and one or more **worker nodes**.

The control plane makes cluster-level decisions and maintains the system's state. Its core pieces include:

- **kube-apiserver** — the front door to the Kubernetes API;
- **etcd** — the key-value store used for API data;
- **kube-scheduler** — decides which suitable node should run an unscheduled Pod;
- **kube-controller-manager** — runs controllers that keep actual state moving toward desired state.

Worker nodes run the workloads. A node normally includes the **kubelet**, which makes sure assigned Pods are running, plus a container runtime and networking components.

You can go much deeper into every component, but the beginner model is enough:

**control plane decides and coordinates → worker nodes run the workload**

The current component breakdown lives in the official [Kubernetes Components](https://kubernetes.io/docs/concepts/overview/components/) documentation.

---

## The Four Objects to Learn First

Kubernetes has a lot of resource types. Ignore most of them at the beginning.

Start with this chain:

**Container → Pod → Deployment → Service**

### Pod

A **Pod** is the smallest deployable compute object in Kubernetes. It can contain one or more tightly coupled containers that share networking and storage context.

Pods are intentionally replaceable. You usually do not want to treat a specific Pod like a precious server that must live forever.

### Deployment

A **Deployment** manages a set of application Pods through ReplicaSets. You describe the desired number of replicas and the Pod template, and the Deployment controller works toward that state.

Deployments also provide controlled rollout behavior when the Pod template changes.

### Service

Pods come and go, so applications need something more stable than a Pod name or Pod IP. A **Service** exposes a logical set of Pods behind a stable network endpoint.

The Service selects matching Pods using labels. That small detail is responsible for a surprising amount of both Kubernetes magic and Kubernetes troubleshooting.

### ConfigMap and Secret

Once those four make sense, add **ConfigMap** for non-confidential configuration and **Secret** for sensitive values.

Do not confuse a Kubernetes Secret with automatic encryption. Secret values are represented as base64-encoded data and are stored unencrypted by default unless the cluster is configured for encryption at rest. Base64 is encoding, not security.

Official references: [Pods](https://kubernetes.io/docs/concepts/workloads/pods/), [Deployments](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/), [Services](https://kubernetes.io/docs/concepts/services-networking/service/), and [Secrets good practices](https://kubernetes.io/docs/concepts/security/secrets-good-practices/).

---

## A Small Deployment That Actually Teaches Something

A useful beginner manifest should show more than “run nginx.” It should expose a few of the controls that make Kubernetes operationally interesting.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: demo-web
spec:
  replicas: 2
  selector:
    matchLabels:
      app: demo-web
  template:
    metadata:
      labels:
        app: demo-web
    spec:
      containers:
        - name: web
          image: nginx:stable-alpine
          ports:
            - containerPort: 80
          resources:
            requests:
              cpu: 100m
              memory: 64Mi
            limits:
              cpu: 250m
              memory: 128Mi
          readinessProbe:
            httpGet:
              path: /
              port: 80
            initialDelaySeconds: 2
            periodSeconds: 5
          livenessProbe:
            httpGet:
              path: /
              port: 80
            initialDelaySeconds: 10
            periodSeconds: 10
---
apiVersion: v1
kind: Service
metadata:
  name: demo-web
spec:
  selector:
    app: demo-web
  ports:
    - port: 80
      targetPort: 80
```

This example says:

- keep two replicas of the workload;
- schedule them with explicit CPU and memory requests;
- enforce resource limits;
- send Service traffic only to Pods that pass readiness checks;
- restart a container if its liveness check repeatedly fails;
- expose matching Pods through one stable in-cluster Service.

The image tag above keeps the example readable. In a production delivery system, pinning an immutable image digest gives stronger reproducibility because image tags can move while digests identify exact image content.

The official docs explain [resource requests and limits](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/), [probes](https://kubernetes.io/docs/concepts/workloads/pods/probes/), and [container image tags versus digests](https://kubernetes.io/docs/concepts/containers/images/).

---

## Readiness Is Not Liveness

This is worth separating because mixing the two can turn a health check into an outage generator.

A **readiness probe** answers whether a container is ready to receive traffic. A failed readiness probe can remove that Pod from Service traffic without requiring the container to restart.

A **liveness probe** asks whether the container should be restarted because it is unhealthy.

A **startup probe** protects slow-starting applications by delaying liveness and readiness checks until startup succeeds.

Those jobs are different. A database dependency being temporarily unavailable might make an application not ready for traffic, but killing and restarting the process every few seconds may make recovery worse.

Probes are not decorative YAML. They encode operational decisions.

---

## Resource Requests Are Scheduling Inputs

Kubernetes cannot make good placement decisions if every workload pretends it needs nothing.

A resource **request** tells the scheduler how much CPU or memory a container needs when deciding where it can run. A resource **limit** constrains how much of that resource the container may consume.

The details matter. CPU limits can throttle workloads. Exceeding a memory limit can result in an out-of-memory kill. Requests that are far too high waste capacity; requests that are far too low can make a cluster look healthier on paper than it is in reality.

This is one of the places where Kubernetes stops being “a container tool” and starts looking like an operating system for shared compute.

---

## `kubectl` Is the Client, Not the Platform

`kubectl` is the command-line client most people use to talk to the Kubernetes API.

A few commands go a long way when learning:

```bash
kubectl apply -f demo.yaml
kubectl get deployments,pods,services
kubectl rollout status deployment/demo-web
kubectl describe pod <pod-name>
kubectl logs <pod-name>
```

The first command is especially important. Kubernetes supports both imperative and declarative management, but declarative configuration is easier to version, review, reproduce, and eventually connect to a GitOps workflow.

That is why YAML exists in so many Kubernetes examples. The file is not the interesting part. **The reviewable declaration of intent is.**

The official [`kubectl` overview](https://kubernetes.io/docs/concepts/overview/kubectl/) covers the client model and recommends declarative management for reproducible workflows.

---

## Troubleshooting: Start With State, Then Events

Kubernetes troubleshooting gets much easier when you stop guessing and ask the API what state it sees.

A practical first pass is:

```bash
kubectl get pods
kubectl describe pod <pod-name>
kubectl logs <pod-name>
```

Then read the status and recent events.

Some common patterns:

- **Pending** — the Pod has not been scheduled or cannot complete setup; resources, placement constraints, storage, or cluster configuration may be involved.
- **ImagePullBackOff** — Kubernetes cannot successfully pull the requested image; inspect the image name, registry access, and pull credentials.
- **CrashLoopBackOff** — the container repeatedly starts and exits; logs, termination state, command/configuration, and probes are good places to investigate.
- **Service has no useful backends** — inspect labels, selectors, and readiness. A perfectly healthy Pod with the wrong label is invisible to the Service that was supposed to reach it.
- **OOMKilled** — memory usage exceeded the effective limit; inspect workload behavior and resource configuration instead of blindly raising the number.

The official [application debugging](https://kubernetes.io/docs/tasks/debug/debug-application/) guidance is more valuable than memorizing a list of error names because it teaches how to inspect the objects and events behind them.

---

## Security Does Not Arrive Automatically

Kubernetes gives you security controls. It does not configure all of them correctly for your environment by telepathy.

A few beginner rules are worth learning early:

- use RBAC with least privilege;
- avoid giving workloads Kubernetes API credentials they do not need;
- prefer short-lived ServiceAccount tokens over long-lived static tokens;
- understand how Secrets are protected in the actual cluster;
- use NetworkPolicy only after confirming the cluster networking implementation enforces it;
- keep image provenance and dependency trust in the delivery process, not as an afterthought.

A Kubernetes API object existing does not always mean the surrounding infrastructure enforces the behavior you assumed. NetworkPolicy is a good example: the API can exist while the selected networking implementation provides no NetworkPolicy enforcement.

See the project's [ServiceAccount guidance](https://kubernetes.io/docs/concepts/security/service-accounts/), [RBAC good practices](https://kubernetes.io/docs/concepts/security/rbac-good-practices/), and [networking overview](https://kubernetes.io/docs/concepts/services-networking/).

---

## Version Skew Is Part of Operations

Kubernetes moves quickly enough that version compatibility belongs in normal operations.

At this article's publication in August 2026, upstream Kubernetes maintains the three most recent minor release branches: **1.36, 1.35, and 1.34**. The project provides roughly one year of patch support for modern minor releases.

`kubectl` is supported within one minor version older or newer than the API server. Other cluster components have their own skew rules, and an upgrade has a supported order.

You do not need to memorize that matrix. You do need to know it exists before casually upgrading half a cluster.

The current matrix is maintained in the official [Version Skew Policy](https://kubernetes.io/releases/version-skew-policy/).

---

## Where Kubernetes Helps

Kubernetes is strongest when the operational problem justifies the abstraction:

- multiple services with independent deployment cycles;
- workloads that need repeatable scheduling and replacement;
- controlled rolling updates and rollback behavior;
- service discovery and internal load balancing;
- horizontal scaling;
- shared platform controls around policy, configuration, identity, and observability;
- teams that benefit from a common deployment API across environments.

It creates a consistent control surface for systems that would otherwise accumulate a lot of custom orchestration logic.

That can remove enormous amounts of toil.

---

## Where Kubernetes Hurts

Kubernetes is not a prize you win for having containers.

It adds real complexity:

- another distributed system to understand;
- cluster and component upgrades;
- networking abstractions;
- storage abstractions;
- RBAC and workload identity;
- resource management;
- admission and policy layers;
- a very large API surface;
- failure modes that can cross application and platform boundaries.

For a small application running happily on one or two machines, Kubernetes can create more operational work than it removes.

The right question is not “Can this run on Kubernetes?”

Almost anything can.

The better question is **“Does orchestration solve a problem here that is expensive enough to justify the platform?”**

---

## A Safe Way to Learn

Do not begin by building a highly available production control plane from scratch.

Use a disposable local learning environment such as **kind** or **minikube**, both referenced by the Kubernetes project for local learning. Then work through a small loop:

1. create a Deployment;
2. inspect the Pods;
3. expose them with a Service;
4. change the image or replica count;
5. watch the rollout;
6. deliberately break a selector or image name;
7. use `get`, `describe`, and `logs` to explain the failure;
8. delete the workload and create it again from the manifest.

That exercise teaches the core idea better than installing a dozen add-ons before you understand what a Pod is.

The official [learning environment](https://kubernetes.io/docs/setup/learning-environment/) and [Kubernetes Basics](https://kubernetes.io/docs/tutorials/kubernetes-basics/) guides are solid starting points.

---

## Bottom Line

Kubernetes is not mainly about YAML, and it is not mainly about memorizing commands.

It is a system for expressing desired state and continuously reconciling infrastructure toward that intent.

Learn the relationship between Pods, Deployments, Services, health probes, resource requests, and the API. Learn how to inspect state when the system disagrees with your expectations. Learn the security and version boundaries before they become production surprises.

Once that mental model clicks, the ecosystem around Kubernetes starts making more sense too.

And that leads naturally to the next problem: **how do you understand what all of these distributed workloads are actually doing?**

That is where OpenTelemetry enters the series next.
