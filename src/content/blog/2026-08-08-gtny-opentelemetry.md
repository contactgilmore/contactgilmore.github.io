---
layout: post
title: "#9. Git to Know You: OpenTelemetry"
date: 2026-08-08
updated: 2026-08-10
thumbnail: /assets/images/blog2026/082026/open-telemetry.svg
slug: gtny-opentelemetry
categories: [sre, observability, devops]
tags: [opentelemetry, observability, tracing, metrics, logs, otlp]
series: "Git to Know You"
seriesOrder: 9
seriesStatus: "complete"
---

**Distributed systems are very good at turning one user request into six unrelated-looking problems.**

A browser calls an API. That API calls another service. The second service talks to a database, publishes a message, and waits on something else. The user sees a spinner while one dashboard says latency is up, one log says timeout, and another service insists everything is fine.

I think this is the easiest way to understand why OpenTelemetry exists. The problem is not that we have no telemetry. The problem is that all of those signals need enough shared context to tell one coherent story, and OpenTelemetry is part of the layer that makes that possible.

---

> **Beginner note:**  
> OpenTelemetry is not another monitoring dashboard. It does not replace Grafana, Jaeger, Prometheus, New Relic, Datadog, or another observability backend. Think of it as the common instrumentation and telemetry layer that helps applications produce useful data without hard-wiring every application directly to one backend.

---

## What OpenTelemetry actually does

OpenTelemetry, usually shortened to **OTel**, is an open-source observability framework for generating, collecting, and exporting telemetry. The project supports signals such as **traces, metrics, and logs**, and provides common APIs, SDKs, conventions, protocols, and a Collector for moving that data through an observability system.

The mental model I would keep is deliberately simple:

```text
application / infrastructure
        ↓
instrumentation
        ↓
telemetry + shared context
        ↓
OTLP / Collector
        ↓
observability backend
```

Your backend still stores, queries, visualizes, and alerts on the data. OpenTelemetry sits earlier in the path and gives teams a more standard way to describe and transport what happened. That vendor-neutral boundary is the interesting part: changing or adding a backend can become a smaller problem when the application is not built entirely around one vendor's proprietary instrumentation model.

It does **not** make every observability product interchangeable, and that is not the goal. The project's [What is OpenTelemetry?](https://opentelemetry.io/docs/what-is-opentelemetry/) page is a good reference for the formal scope.

---

## One request, three useful views

OpenTelemetry has enough terminology to make a beginner think the terminology is the point. It isn't. Start with what you are trying to learn from a system, and imagine a checkout request has suddenly become slow.

A **metric** can tell you that checkout latency moved from its normal range to something ugly. Metrics are good at showing the shape of behavior over time: rates, counts, latency distributions, queue depth, CPU, memory, errors, or whatever else you choose to measure.

A **trace** can follow one checkout operation through several services and show that most of the delay happened inside an inventory call. Traces are built from spans, with each span representing a unit of work such as an HTTP request, database query, or message operation. A **log** can then preserve the specific event that explains what happened inside that slow inventory span, perhaps a connection-pool timeout or a failed dependency call.

Individually, those signals are useful. Together, they are much more useful when you can move from the metric spike to a trace and then to the related log instead of manually lining up timestamps and hoping you found the same incident. That correlation is the lesson I would learn before worrying about every OpenTelemetry API type; the project maintains current overviews for [signals](https://opentelemetry.io/docs/concepts/signals/) and [traces](https://opentelemetry.io/docs/concepts/signals/traces/).

---

## Context is what keeps the story together

A distributed trace falls apart if every service believes it is starting a brand-new request. When Service A calls Service B, some trace context has to cross that boundary so Service B can understand which larger operation it belongs to and which span came before it.

OpenTelemetry calls this **context propagation**, and instrumentation can handle much of it automatically across supported frameworks and protocols. That creates an important troubleshooting habit: if a trace suddenly splits in the middle, do not assume the services stopped producing telemetry. Sometimes the instrumentation is working on both sides and the context simply stopped crossing one network or messaging boundary.

That is a much more useful mental model than memorizing a list of propagators. The project explains the mechanics in its [context propagation](https://opentelemetry.io/docs/concepts/context-propagation/) guidance.

---

## Instrumentation gives telemetry meaning

Telemetry does not appear just because you bought an observability platform. Something still has to describe what the application is doing, and OpenTelemetry supports both automatic or **zero-code instrumentation** and **manual instrumentation** for that job.

Automatic instrumentation is a practical way to get broad visibility into familiar operations such as HTTP requests, database calls, and common runtime behavior without manually wrapping every line of code. Manual instrumentation adds the application-specific meaning that a generic library cannot know. A framework can tell you an HTTP request occurred; your code knows the request represented `reserve_inventory` or `process_refund`.

I would treat those approaches as complementary rather than competitive: automatic instrumentation gives you breadth, while manual instrumentation adds meaning where the generic view stops being enough. OpenTelemetry keeps current language and instrumentation guidance under its [instrumentation documentation](https://opentelemetry.io/docs/concepts/instrumentation/).

The other half of meaning is identity. A 900 ms span becomes much more useful when the telemetry consistently tells you which logical service, version, environment, container, or Kubernetes workload produced it. OpenTelemetry represents that producing entity with a **Resource**, and its **Semantic Conventions** give teams common names for familiar attributes and operations.

That sounds like standards work because it is standards work. It is also what keeps ten teams from inventing ten different spellings of `service.name` and making everybody regret it later. See [Resources](https://opentelemetry.io/docs/concepts/resources/) and [Semantic Conventions](https://opentelemetry.io/docs/concepts/semantic-conventions/) for the deeper reference.

---

## OTLP and the Collector: the useful plumbing

Once an application is producing telemetry, the data has to go somewhere. **OTLP**, the OpenTelemetry Protocol, is the project's standard protocol for moving telemetry between sources, intermediary components, and backends.

For a small lab, direct export from an application to a compatible backend can be perfectly reasonable; you do not earn extra observability points for adding more infrastructure than you need. As an environment grows, the **OpenTelemetry Collector** becomes more interesting because it gives you a telemetry control point outside the application.

The Collector is built around pipelines of receivers, processors, and exporters:

```text
receiver → processor → exporter
```

That can let you batch data, retry delivery, enrich or transform telemetry, filter unwanted data, redact sensitive fields, or route the same telemetry toward more than one destination without rebuilding every application each time the backend architecture changes.

It also means you now operate another service. A Collector can fail, fill buffers, consume resources, need upgrades, and become important enough that you should observe the observability pipeline. There is no prize for putting a Collector everywhere by reflex.

The official [OTLP specification](https://opentelemetry.io/docs/specs/otlp/) covers the protocol, while the [Collector documentation](https://opentelemetry.io/docs/collector/) explains when that intermediary layer becomes useful.

---

## The expensive part is collecting the wrong things

Observability conversations often start with “How do we collect more?” I think the better question is **“What evidence will help us answer the operational question?”**

Metrics make that obvious because of **cardinality**. If you attach an effectively unique value such as a user ID to a metric, you can create a huge number of distinct time series. The metric may be technically valid and operationally painful at the same time.

Tracing has a similar design decision in **sampling**. High-volume systems may produce far more traces than it makes sense to retain, and sampling determines which evidence survives. The policy should reflect the questions you need to investigate rather than an arbitrary percentage somebody copied from an example.

Then there is privacy. Logs, URLs, headers, database statements, custom attributes, and propagated context can all carry information you did not intend to export. Automatic instrumentation is convenient precisely because it can see a lot, which is a good reason to review what it actually captures before shipping the stream somewhere else.

This is where observability becomes an engineering system instead of a checkbox. Cost, privacy, cardinality, sampling, and signal quality all affect whether the telemetry remains useful. OpenTelemetry's [sampling](https://opentelemetry.io/docs/concepts/sampling/) documentation is a good starting point for that tradeoff.

---

## Why this fits so naturally after Kubernetes

The previous article was about Kubernetes, where Pods are replaceable, workloads move, replicas scale, and desired state is constantly being reconciled. That is great for operating software, but less great for the old habit of identifying a problem by saying, “it was on server three.”

OpenTelemetry fits that world because the useful identity becomes the logical service and operation rather than one long-lived machine. Resource metadata can still tell you which Pod, node, container, or environment was involved, while the trace can follow the request through a system even as the individual workload instances change underneath it.

This is one of the places where the last few tools in the series start connecting. Kubernetes gives the workloads a common operating model; OpenTelemetry gives their behavior a common language.

---

## A safe way to learn it

Do not begin by building an enterprise observability platform. You can learn most of the important architecture with one tiny application and telemetry you can actually see.

I would use a progression like this:

1. run a small application with one HTTP request;
2. add automatic or basic SDK instrumentation;
3. give the service a meaningful `service.name`;
4. export the telemetry locally, directly or through a Collector;
5. inspect a trace and identify the spans in the request;
6. add one manual span around application-specific work;
7. make one outbound request and verify the trace stays connected across the boundary;
8. add one useful metric with bounded attributes;
9. correlate one log with the same request;
10. deliberately break propagation and explain what changed.

That exercise gives you something a feature tour does not: a mental picture of how the evidence travels. Once that makes sense, point the same telemetry at a real backend and learn what the backend adds on top—storage, queries, dashboards, alerts, retention, service maps, and all the product-specific features that OpenTelemetry intentionally does not standardize away.

---

## Bottom Line

OpenTelemetry is not the pretty service map. It is part of the machinery that makes a useful service map possible.

If you remember only one thing, remember the path: **instrument the work, preserve context as the request moves, identify who produced the telemetry, use common meanings where you can, and move the signals toward a backend that can help you investigate them.** You can learn the rest of the nouns as you need them.

And once you have both Kubernetes desired state and OpenTelemetry evidence, the next question becomes interesting: how do we make the deployed state follow what we reviewed in Git without turning deployment into another collection of manual steps? That is where **Argo CD and GitOps** come in next.
