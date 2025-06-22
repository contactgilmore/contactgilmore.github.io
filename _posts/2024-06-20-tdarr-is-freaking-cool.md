---
layout: post
title: "Still testing..."
date: 2024-06-20
thumbnail: /assets/images/blog2025/tdarrLogo.png
---

# Blog Title: My SRE Monitoring Guide

![Descriptive Alt Text](/assets/images/1311.png)

## Introduction

Welcome to my blog! In this post, we’ll dive into how I set up monitoring and alerting as a Site Reliability Engineer.

---

## Key Concepts

- 📊 Real-time metrics
- ⚠️ Alert thresholds
- 🛠️ Incident response tooling

## Example Dashboard

Here's a snapshot of the dashboard in action:

![Monitoring Dashboard](/assets/images/fallout.jpg)

## Learn More

Visit [New Relic's official documentation](https://docs.newrelic.com) for more tools and features.

---

## Code Sample

```bash
#!/bin/bash
# Monitor disk space
df -h | grep '/dev/sda1'
