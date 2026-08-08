---
layout: post
title: "#9. Git to Know You: OpenTelemetry"
date: 2026-08-08
thumbnail: https://opentelemetry.io/img/logos/opentelemetry-logo-nav.png
slug: gtny-opentelemetry
categories: [sre, observability, devops]
tags: [opentelemetry, observability, tracing, metrics, logs, otlp]
series: "Git to Know You"
seriesOrder: 9
seriesStatus: "ongoing"
---

**Distributed systems are very good at turning one user request into six unrelated-looking problems.**

A browser calls an API. That API calls another service. The second service talks to a database, publishes a message, waits on something else, and eventually the user sees a spinner.

CPU looks fine. One log says timeout. Another service says success. A dashboard shows latency went up, but not why.

This is where observability stops being a collection of charts and starts becoming a data-correlation problem.

OpenTelemetry exists to standardize how that telemetry is generated, described, moved, and connected.

---

> **Beginner note:**  
> OpenTelemetry is not another monitoring dashboard. It does not replace Grafana, Jaeger, Prometheus, New Relic, Datadog, or another observability backend. It gives applications and infrastructure a common way to produce and export telemetry so those systems have useful data to work with.

---

## What Is OpenTelemetry?

OpenTelemetry, usually shortened to **OTel**, is an open-source observability framework and toolkit for **generating, collecting, and exporting telemetry** such as traces, metrics, and logs.

It is vendor- and tool-agnostic by design.

That distinction matters.

Without a common instrumentation layer, changing observability platforms can mean changing application agents, proprietary libraries, attribute names, exporters, and operational habits at the same time. OpenTelemetry tries to separate those concerns:

```text
application / infrastructure
        ↓
instrumentation
        ↓
OpenTelemetry data + conventions
        ↓
OTLP / Collector
        ↓
observability backend
```

The backend still stores, queries, alerts on, and visualizes the data. OpenTelemetry handles the layer before that.

The project's own [What is OpenTelemetry?](https://opentelemetry.io/docs/what-is-opentelemetry/) page is worth reading because it is unusually clear about what OpenTelemetry **is not**.

---

## Start With the Signals

OpenTelemetry organizes telemetry into signals. The three most familiar are:

- **Traces** — follow work through a distributed request or operation.
- **Metrics** — measurements aggregated over time.
- **Logs** — records of discrete events.

OpenTelemetry also defines **Baggage**, which carries contextual key-value data across service boundaries, and the project is actively developing **profiles** as another signal.

The current signal overview is maintained in the official [Signals](https://opentelemetry.io/docs/concepts/signals/) documentation.

These signals answer different questions.

A metric might tell you:

> Checkout latency is above 2 seconds.

A trace might tell you:

> Most of that latency is inside the inventory call.

A log might tell you:

> The inventory service timed out while waiting on its database connection pool.

The value is not merely having all three. The value is being able to **correlate** them around the same system behavior.

---

## Traces: Follow the Request

A distributed trace represents the path of an operation through a system.

A trace is made of **spans**. Each span represents a unit of work such as:

- receiving an HTTP request;
- making an outbound API call;
- running a database query;
- publishing or consuming a message;
- performing an internal application operation.

A span normally includes timing information, attributes, status, events, and identifiers that connect it to the rest of the trace.

Imagine this request:

```text
browser
  → checkout service
      → inventory service
      → payment service
          → database
```

With distributed tracing, those operations can be represented as related spans in one trace instead of four unrelated timing records.

That is the first mental model to learn: **a trace is the story of one operation; spans are the chapters.**

The current tracing model is documented under [Traces](https://opentelemetry.io/docs/concepts/signals/traces/).

---

## Context Propagation Is What Holds the Trace Together

A trace cannot cross service boundaries unless the services agree on how to carry the context forward.

When Service A calls Service B, it needs to pass enough information for Service B to understand:

```text
which trace am I part of?
which span called me?
what should my parent relationship be?
```

That process is **context propagation**.

OpenTelemetry instrumentation usually handles it automatically. The default propagation model uses the W3C Trace Context format, so trace identifiers can travel in standardized request headers instead of every team inventing its own format.

Without propagation, you can still have spans. They just look like separate traces.

That failure mode is worth remembering because a broken trace is not always an instrumentation failure. Sometimes every service is producing telemetry perfectly and the context simply stopped crossing one boundary.

See [Context propagation](https://opentelemetry.io/docs/concepts/context-propagation/) for the full model.

---

## Metrics: The Shape of System Behavior

Metrics are measurements captured at runtime and aggregated into useful statistics.

Examples include:

- request counts;
- request latency;
- active requests;
- CPU or memory usage;
- queue depth;
- bytes processed;
- error counts;
- custom business measurements.

Metrics are efficient because they summarize many events instead of storing every individual operation as a separate record.

That efficiency creates one of the most important observability design constraints: **cardinality**.

Suppose you record request latency with an attribute named `user.id`. If every user produces a unique attribute combination, the metric system may need to maintain an enormous number of separate time series or aggregation states.

Useful dimensions are good. Unbounded dimensions are expensive.

OpenTelemetry's [Metrics](https://opentelemetry.io/docs/concepts/signals/metrics/) documentation explicitly discusses cardinality limits and why high-cardinality attributes need care.

This is one reason the right question is not “How much telemetry can we collect?”

It is **“What telemetry lets us answer the operational question at a sustainable cost?”**

---

## Logs: Keep the Event, Add the Context

Logs are still logs.

OpenTelemetry does not require teams to throw away mature logging libraries and replace every logging call with a new API. The project includes a logging data model and bridge approach that lets existing logging ecosystems participate in the OpenTelemetry pipeline.

The interesting part is correlation.

A log record that contains trace and span context can take you from:

```text
ERROR database timeout
```

to:

```text
ERROR database timeout
trace_id=...
span_id=...
service.name=inventory
```

Now the log is not an isolated string. It can be connected to the distributed operation that caused it.

The current logging model is covered under [Logs](https://opentelemetry.io/docs/concepts/signals/logs/) and the project's [specification status](https://opentelemetry.io/docs/specs/status/).

---

## Baggage: Useful Context With Sharp Edges

**Baggage** is a key-value store that can travel alongside trace context across services.

That can be useful when a value known near the beginning of a request should be available farther downstream.

But baggage is not automatically a span attribute, metric attribute, or log field. Instrumentation has to decide how to use it.

It also deserves a security warning.

Baggage can be propagated in request headers. Sensitive values can therefore travel farther than expected, including toward third-party services if the application forwards them.

Treat baggage like network-visible context, not a secret vault.

The OpenTelemetry project calls this out directly in its [Baggage](https://opentelemetry.io/docs/concepts/signals/baggage/) guidance.

---

## Instrumentation: Automatic, Manual, or Both

Telemetry does not appear because an observability backend exists. Something has to instrument the application or infrastructure.

OpenTelemetry supports two broad approaches.

### Zero-code instrumentation

Zero-code instrumentation can add telemetry without changing application source code. Depending on the language/runtime, this may involve an agent, runtime hooks, injected libraries, or platform-specific mechanisms.

This is often the fastest way to get broad visibility across standard frameworks and libraries.

### Code-based instrumentation

Manual instrumentation uses OpenTelemetry APIs and SDKs inside the application.

That lets developers describe the application-specific work that generic instrumentation cannot understand:

```text
reserve_inventory
calculate_shipping_quote
validate_entitlement
process_refund
```

The two approaches are complementary. Automatic instrumentation gives breadth; manual instrumentation adds business and application meaning where it matters.

OpenTelemetry documents both models under [Instrumentation](https://opentelemetry.io/docs/concepts/instrumentation/) and maintains language-specific status under [Language APIs & SDKs](https://opentelemetry.io/docs/languages/).

---

## API, SDK, and Instrumentation Are Different Things

The terms blur together quickly, so here is a useful simplification.

### API

The API is what instrumentation calls to describe telemetry operations.

For tracing, that means concepts such as tracers and spans.

### SDK

The SDK is the application-side implementation that configures how telemetry is sampled, processed, and exported.

### Instrumentation library

An instrumentation library understands a specific framework or dependency and translates its behavior into OpenTelemetry signals.

That separation is important for library authors. A reusable library can depend on the OpenTelemetry API without forcing an application to activate a specific telemetry pipeline.

The application decides whether an SDK is configured and where the data goes.

---

## Resources Tell You What Produced the Telemetry

A span saying “database call took 900 ms” is more useful when you know **which service and environment produced it**.

OpenTelemetry represents the entity producing telemetry with a **Resource**.

Resource attributes can describe things such as:

- `service.name`;
- service version;
- deployment environment;
- host;
- process;
- container;
- Kubernetes pod, namespace, or deployment;
- cloud provider metadata.

One of the first things to configure correctly is `service.name`. OpenTelemetry SDKs have a fallback for an unknown service, but a fleet full of `unknown_service` is not a satisfying observability strategy.

The official [Resources](https://opentelemetry.io/docs/concepts/resources/) documentation explains how resources and detectors work.

---

## Semantic Conventions Make Telemetry Portable

Standard transport alone is not enough.

Two services could both send perfectly valid telemetry while disagreeing on every field name:

```text
service
service_name
app
application
svc
```

That makes cross-team queries miserable.

OpenTelemetry **Semantic Conventions** define common names and meanings for telemetry about familiar operations and entities: services, HTTP, databases, messaging, Kubernetes, exceptions, cloud infrastructure, and more.

For example, `service.name` has a shared meaning instead of being a field each team invents independently.

Semantic conventions are one of the less flashy parts of OpenTelemetry and one of the most important. Portable telemetry requires agreement on meaning, not just agreement on wire format.

See [Semantic Conventions](https://opentelemetry.io/docs/concepts/semantic-conventions/) for the concept and the current specification.

---

## OTLP: The Transport Layer

OpenTelemetry Protocol, or **OTLP**, is the standard protocol used to export telemetry.

OTLP supports telemetry over gRPC and HTTP. For OTLP/HTTP, the conventional signal endpoints include:

```text
/v1/traces
/v1/metrics
/v1/logs
```

An application SDK can export OTLP directly to a compatible backend, or it can send OTLP to an OpenTelemetry Collector first.

That gives the architecture a useful boundary:

```text
application
   ↓ OTLP
Collector
   ↓
backend
```

The current protocol details live in the [OTLP specification](https://opentelemetry.io/docs/specs/otlp/).

---

## The Collector: A Telemetry Pipeline You Can Operate

The **OpenTelemetry Collector** is a vendor-neutral service for receiving, processing, and exporting telemetry.

Its basic model is simple:

```text
receiver → processor → exporter
```

A **receiver** accepts or collects telemetry.

A **processor** can batch, filter, transform, enrich, sample, or otherwise handle telemetry.

An **exporter** sends telemetry to another system.

A Collector configuration wires those components into one or more pipelines.

Here is a deliberately small local-lab example:

```yaml
receivers:
  otlp:
    protocols:
      grpc:
        endpoint: 127.0.0.1:4317
      http:
        endpoint: 127.0.0.1:4318

processors:
  batch:

exporters:
  debug:
    verbosity: basic

service:
  pipelines:
    traces:
      receivers: [otlp]
      processors: [batch]
      exporters: [debug]
    metrics:
      receivers: [otlp]
      processors: [batch]
      exporters: [debug]
    logs:
      receivers: [otlp]
      processors: [batch]
      exporters: [debug]
```

That configuration is not a production architecture. It is a learning pipeline: accept OTLP locally, batch the data, and print it so you can see what the instrumentation is actually producing.

The Collector's [overview](https://opentelemetry.io/docs/collector/) and [architecture](https://opentelemetry.io/docs/collector/architecture/) explain the pipeline model in more depth.

---

## Why Put a Collector in the Middle?

For a small experiment, sending telemetry directly from an application to a backend is perfectly reasonable.

At larger scale, the Collector gives you a control point outside the application.

That can be useful for:

- batching;
- retries;
- filtering;
- redaction;
- transformation;
- routing to multiple destinations;
- changing backend details without rebuilding every application;
- centralizing some telemetry policy.

It also moves work somewhere else.

A Collector is another service to configure, scale, secure, observe, and upgrade. If it becomes a critical telemetry gateway, its own failure modes matter.

The right architecture is not “always use a Collector.” The project's guidance is more practical: direct export is fine for getting started, while a Collector is generally recommended as systems grow because it can offload and centralize telemetry handling.

---

## Sampling Is a Design Decision, Not Just a Cost Knob

A busy service can produce an enormous number of spans.

Keeping every trace forever is rarely practical.

**Sampling** controls how much trace data is retained or exported.

A head-based decision happens early, before the full trace is known. Tail-based approaches can make decisions after more of the trace is available, which can make it possible to retain interesting traces such as errors or unusually slow requests.

Sampling changes what evidence survives.

That means a sampling strategy should follow the operational questions you need to answer, not merely an arbitrary percentage.

OpenTelemetry maintains a dedicated [Sampling](https://opentelemetry.io/docs/concepts/sampling/) concept guide.

---

## Telemetry Can Leak Sensitive Data

Observability data can be surprisingly sensitive.

HTTP headers, database statements, URLs, user identifiers, baggage, log bodies, and custom attributes can all contain information that should not leave the application boundary unchanged.

Instrumentation is therefore part of the data-governance surface.

A few practical rules:

- do not capture sensitive headers just because an instrumentation option exists;
- avoid secrets, tokens, passwords, and raw authentication material in attributes or logs;
- treat baggage as data that may cross network boundaries;
- filter or redact sensitive fields before export when required;
- keep the Collector and OTLP endpoints authenticated/encrypted appropriately for the environment;
- review what auto-instrumentation captures before assuming defaults match your privacy requirements.

Observability that creates a security incident is not observability working well.

---

## OpenTelemetry Does Not Eliminate Backend Differences

Vendor-neutral instrumentation does **not** mean every backend behaves the same.

Backends still differ in:

- query languages;
- storage models;
- retention;
- alerting;
- dashboards;
- sampling support;
- service maps;
- pricing;
- data processing features;
- how completely they support each OpenTelemetry signal and semantic convention.

OpenTelemetry reduces coupling at the telemetry-generation and transport layers. It does not flatten the entire observability market into one interchangeable product.

That is still a meaningful improvement.

It lets teams make more of the instrumentation investment in an open standard instead of baking every application directly into one vendor's proprietary model.

---

## OpenTelemetry and Kubernetes Fit Naturally Together

The last article ended with Kubernetes because orchestration gives distributed workloads a consistent operating model.

OpenTelemetry fits naturally into that environment because the telemetry needs the same kind of consistency.

Kubernetes environments constantly change:

- Pods are replaced;
- replicas scale up and down;
- workloads move between nodes;
- service instances are temporary;
- one request can cross many workloads.

Resource metadata, semantic conventions, context propagation, and centralized Collector patterns help turn that churn into telemetry that still describes **which logical service did what**.

The OpenTelemetry project also maintains Kubernetes-specific deployment tooling, including the OpenTelemetry Operator, but learning the core telemetry model first is more useful than starting with another controller and a large Helm values file.

---

## A Safe Way to Learn

You do not need to build a production observability platform to understand OpenTelemetry.

Use one small application and make the telemetry visible.

A useful progression is:

1. start with an application that handles one HTTP request;
2. add zero-code or basic SDK instrumentation;
3. set a meaningful `service.name`;
4. export OTLP to a local Collector;
5. use the Collector's debug exporter so you can inspect the raw telemetry;
6. add one manual span around application-specific work;
7. make one outbound request and verify context propagation creates a connected trace;
8. add one metric with bounded attributes;
9. correlate one log with trace context;
10. deliberately break propagation and compare the result.

That teaches the important architecture without hiding it behind a polished dashboard.

Once the flow makes sense, point the same telemetry at a real backend and see what that backend adds.

---

## Bottom Line

OpenTelemetry is not the thing that shows you a pretty service map.

It is the standardization layer that makes a useful service map, trace search, metric query, or correlated log investigation possible across a mixed distributed system.

Learn the boundaries:

```text
instrumentation generates telemetry
context propagation connects operations
resources identify producers
semantic conventions standardize meaning
OTLP moves the data
Collectors process and route it
backends store, query, alert, and visualize it
```

Once those pieces are clear, OpenTelemetry becomes much less mysterious.

It also makes the next step in this series easier to understand. If Kubernetes describes desired application state and OpenTelemetry describes what the running system is doing, **GitOps asks how we make the deployed state follow what is declared in Git.**

That brings us to **Argo CD and GitOps** next.
