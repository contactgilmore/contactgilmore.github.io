---
layout: post
title: "#8. Git to Know You: Kubernetes"
date: 2026-08-08
updated: 2026-08-10
thumbnail: /assets/images/blog2026/082026/kubernetes-icon-color.svg
slug: gtny-kubernetes
categories: [sre, devops, containers]
tags: [kubernetes, containers, orchestration, reliability, devops]
series: "Git to Know You"
seriesOrder: 8
seriesStatus: "complete"
---

**Containers are easy right up until you have a lot of them.**

One container on one machine is understandable. A few containers behind a load balancer are still manageable. Then an instance dies, traffic shifts, a deployment needs to roll forward without dropping requests, one service needs three replicas while another needs twenty, and somebody asks which machine is actually running what.

That is the problem Kubernetes is built to organize. A container runtime answers, “How do I package and run this container?” Kubernetes answers a different question: **“How do I keep a collection of containerized workloads in the state I intended?”** That distinction is the key to the whole platform.

---

> **Beginner note:**  
> Kubernetes is a large system. Do not start by trying to memorize every object or build a production cluster. Start with the desired-state model, a few core objects, and a disposable local environment where it is safe to break things.

---

## The mental model: declare what you want, then reconcile

Kubernetes is an open-source platform for managing containerized workloads and services. It exposes an API where you describe the state you want, stores that intent, and uses controllers to keep actual cluster state moving toward it.

If you ask for three replicas of an application, Kubernetes keeps trying to maintain three. If a Pod disappears, a controller can replace it because the desired state still says that replica should exist. If you change the image in a Deployment, Kubernetes can roll the workload toward the new version instead of requiring you to log into individual machines and replace processes by hand.

The Kubernetes documentation calls its objects a **record of intent**, which is a phrase worth remembering. YAML is just one way we submit that intent to the API; the control loop is the real idea. The official [Kubernetes object model](https://kubernetes.io/docs/concepts/overview/working-with-objects/) is the best place to go deeper on desired state and reconciliation.

---

## Control plane and workers, without the vocabulary avalanche

A Kubernetes cluster has a **control plane** and one or more **worker nodes**. The control plane owns the API and cluster-level decisions: it stores cluster data, schedules workloads, and runs the controllers that compare desired state with reality. Worker nodes run the actual Pods and include components such as the kubelet and a container runtime.

For a beginner, this model is enough:

```text
control plane -> stores intent and coordinates
worker nodes  -> run the workloads
```

You can learn `kube-apiserver`, `etcd`, `kube-scheduler`, `kube-controller-manager`, CNI, CSI, and every other acronym when the problem in front of you actually requires them. Kubernetes has enough nouns already; there is no reason to collect all of them before you have launched your first Pod. The official [cluster components](https://kubernetes.io/docs/concepts/overview/components/) page covers the full breakdown when you are ready for it.

---

## Four objects will get you surprisingly far

I would start with this chain:

```text
Container -> Pod -> Deployment -> Service
```

A **Pod** is the smallest deployable compute object in Kubernetes. Most beginner workloads put one primary application container in a Pod, although Pods can contain multiple tightly coupled containers that need to share networking or storage context. The important operational lesson is that Pods are replaceable; treating a Pod like a precious server you plan to nurse forever fights the platform instead of using it.

A **Deployment** manages application Pods through ReplicaSets. You describe the Pod template and how many replicas you want, and the Deployment controller works toward that state. Deployments also give you rollout behavior when the template changes.

A **Service** gives a changing group of Pods a stable network identity. Deployments create and replace Pods over time, so clients need something more durable than one Pod IP. Services select matching Pods, normally through labels, and expose them behind a consistent endpoint.

Then add **ConfigMaps** for ordinary configuration and **Secrets** for sensitive values when you need them. One warning is worth learning immediately: base64-encoded Secret data is not encryption, and cluster-level controls still determine how Secrets are stored and protected.

The project documentation for [Pods](https://kubernetes.io/docs/concepts/workloads/pods/), [Deployments](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/), [Services](https://kubernetes.io/docs/concepts/services-networking/service/), and [Secrets](https://kubernetes.io/docs/concepts/security/secrets-good-practices/) is much better reference material than trying to fit every object into one blog post.

---

## A small manifest that teaches the right things

A beginner example should show more than “run nginx.” The interesting part of Kubernetes is not that it can start a container; Docker can already do that. The interesting part is the operating policy around the workload.

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

This says much more than “please run nginx.” It says to keep two replicas, give the scheduler resource expectations, constrain resource use, keep unready Pods out of Service traffic, restart a container that repeatedly fails its liveness check, and expose the matching Pods through one Service. That is Kubernetes in miniature: **declaration plus policy plus reconciliation.**

For a production delivery system, I would also prefer an immutable image digest when exact reproducibility matters instead of assuming an image tag can never move. The Kubernetes [container image documentation](https://kubernetes.io/docs/concepts/containers/images/) explains the difference.

---

## Health checks and resources are operational decisions

Readiness and liveness look like two small YAML blocks, but they answer different questions. A **readiness probe** asks whether this Pod should receive traffic right now. If readiness fails, Kubernetes can keep the process running while removing the Pod from Service traffic.

A **liveness probe** asks whether the container is unhealthy enough that Kubernetes should restart it, while a **startup probe** can protect a slow-starting application from being judged too early. Mix those responsibilities carelessly and a health check can become an outage generator. If a temporary downstream database problem makes an application unready, restarting the process every few seconds may do nothing except make recovery noisier.

The official [probe documentation](https://kubernetes.io/docs/concepts/workloads/pods/probes/) covers the mechanics; the judgment about what “healthy” means still belongs to the application and team.

Resources work the same way. **Requests** tell the scheduler what a container needs when deciding where it can run. **Limits** constrain how much CPU or memory it may consume. Set them wildly high and you waste capacity; set them unrealistically low and the cluster may look fine until workloads are throttled or killed under real load.

Kubernetes cannot make good placement decisions if every workload claims it needs nothing. The [resource management documentation](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/) is worth reading once the basic Deployment makes sense.

---

## Troubleshooting starts by asking Kubernetes what it sees

The platform gets much less mysterious when you stop guessing and inspect state. A basic troubleshooting loop goes a long way:

```bash
kubectl get pods
kubectl describe pod <pod-name>
kubectl logs <pod-name>
```

`kubectl` is a client for the Kubernetes API, so the same API-driven model applies whether you are creating a Deployment, checking rollout status, reading events, or inspecting logs.

Some common failures become fairly readable once you know where to look. A **Pending** Pod may not be schedulable because of resources, constraints, storage, or setup. **ImagePullBackOff** usually points you toward the image name, registry, or credentials. **CrashLoopBackOff** means the container is repeatedly starting and failing. A Service with no useful backends often sends you straight to labels, selectors, and readiness.

Those names are not a troubleshooting certification; they are clues. The useful habit is to inspect object state and events before inventing a theory about what the cluster is doing. The official [application debugging guide](https://kubernetes.io/docs/tasks/debug/debug-application/) is more valuable than memorizing a giant error-code list.

---

## Security and upgrades do not arrive by magic

Kubernetes gives you a lot of security controls. It does not configure all of them correctly for your environment by telepathy. A few habits are worth carrying into the platform early:

- use RBAC with least privilege;
- do not give workloads Kubernetes API credentials they do not need;
- understand how Secrets are protected in the actual cluster;
- verify that the networking implementation enforces the policies you rely on;
- keep image and dependency trust in the delivery process;
- treat cluster and client upgrades as compatibility work, not casual package updates.

The last point matters because Kubernetes components have documented version-skew rules. For example, current Kubernetes guidance supports `kubectl` within one minor version older or newer than the control plane. You do not need that table memorized, but you should know it exists before upgrading random pieces independently.

The official [RBAC guidance](https://kubernetes.io/docs/concepts/security/rbac-good-practices/) and [Version Skew Policy](https://kubernetes.io/releases/version-skew-policy/) are the references I would keep handy rather than baking a specific current release number into an evergreen beginner article.

---

## Where Kubernetes earns the complexity

Kubernetes is not a prize you win for having containers. It starts earning its complexity when the system genuinely needs repeatable scheduling and replacement, independent deployments across several services, controlled rollouts, service discovery, horizontal scaling, shared platform policy, or a common operating API across enough workloads that custom orchestration becomes the more expensive choice.

For a small application running happily on one or two machines, Kubernetes can create more operational work than it removes. You now have another distributed system, another security model, another network abstraction, another upgrade path, and a very large API surface to understand.

So I would not ask only, “Can this run on Kubernetes?” Almost anything can. I would ask, **“What operational problem does Kubernetes solve here, and is that problem expensive enough to justify the platform?”** That question will save you more time than learning another fifty resource types.

---

## A safe way to learn

Use a disposable local environment such as **kind** or **minikube**. The goal is to see the control loop, not to prove you can build a production control plane on a laptop.

A good learning loop is:

1. create a Deployment;
2. inspect the Pods;
3. expose them with a Service;
4. change the image or replica count;
5. watch the rollout;
6. deliberately break a selector or image name;
7. use `get`, `describe`, and `logs` to explain the failure;
8. delete a Pod and watch the controller restore the desired replica count;
9. delete the workload and recreate it from the manifest.

That exercise teaches what Kubernetes is actually doing. Installing a dozen add-ons before you understand a Pod mostly teaches you how quickly YAML can accumulate. The official [learning environment](https://kubernetes.io/docs/setup/learning-environment/) and [Kubernetes Basics](https://kubernetes.io/docs/tutorials/kubernetes-basics/) guides are solid next steps.

---

## Bottom Line

Kubernetes is not mainly about YAML, and it is not mainly about memorizing `kubectl` commands. It is a system for declaring workload intent and continually reconciling a cluster toward that state.

Learn Pods, Deployments, Services, probes, resources, and the API-driven troubleshooting loop first. The rest of the ecosystem becomes much easier to place once that model clicks, and it leads naturally to another problem: once a distributed platform is constantly replacing and moving workloads, how do you follow one request through all of it and understand what the system actually did?

That is where **OpenTelemetry** enters the series next.
