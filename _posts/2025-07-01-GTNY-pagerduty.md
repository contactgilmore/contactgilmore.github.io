---
layout: post
title: "#3. Git to Know You: PagerDuty"
date: 2025-07-01
thumbnail: /assets/images/blog2025/0623/pagerdutyThumb.png
categories: [sre, incident-response, on-call]
tags: [pagerduty, on-call, incident-management, reliability]
---

**No way this is #3!** Picture this. An incident occurs and your workflow automatically flows like this: New Relic > PagerDuty > Slack > Jira > Rundeck > New Relic > PagerDuty > SRE On-Call > New Relic Dashboard > resolved with a full RCA trail.

**If you’ve been around** production systems long enough, you know this moment. It is 2 AM, your phone buzzes, and something is on fire. What happens next depends heavily on your tooling, and that is where **PagerDuty** stands out.

As you dig deeper into Site Reliability Engineering, incident response becomes routine. PagerDuty brings structure when things go sideways. It routes alerts, wakes the right people, and kicks off automated responses while keeping everyone informed. If Rundeck focused on reducing toil and New Relic focused on visibility, PagerDuty is what helps you respond effectively.

---

>
> **Disclaimer:  
> Everything in this blog is written with beginners in mind. If you're curious about Site Reliability Engineering and do not know where to start, you are exactly who this is for. I am not here to throw a bunch of jargon at you or assume you already know everything. The goal is to keep it clear, practical, and beginner friendly. Whether you are switching roles, just getting started in tech, or exploring SRE for the first time, welcome. This is the material I wish I had been introduced to earlier.**
>
---

## Why PagerDuty?

PagerDuty is an incident response platform that helps teams react quickly when something breaks. At its core, it ensures the right person is notified as soon as an issue begins and provides tools to track, manage, and resolve it.

Think of it as your on-call coordinator. It integrates with monitoring tools such as New Relic, Datadog, and Prometheus, then turns alerts into actionable incidents. Instead of notifying everyone, PagerDuty follows defined schedules, escalation paths, and rules to contact the correct engineer in the correct order at the right time.

It also centralizes communication, coordinates responses, and logs events for detailed postmortems. Whether you are managing a team of three or thirty, PagerDuty scales and makes incident response predictable.

---

## A Real Story: How PagerDuty Helped My Team

Right after college, I joined a small company with fewer than 100 employees. There were only four of us in IT, and just two of us had real experience with cloud systems or outages.

Because I had the most hands-on experience, I ended up on call 24/7. Anytime something failed, even minor issues, I received the call or ping. Sometimes executives contacted me directly. We often did not know something was down until customers complained. It was exhausting, and eventually every notification triggered stress.

The company was later acquired, and I moved into a larger environment with hundreds of engineers. That is when I discovered PagerDuty, and everything shifted. I set it up for our smaller division, and the implementation was more straightforward than I expected.

We built real on-call schedules, configured escalation paths, and integrated it with our monitoring stack. Suddenly I was no longer the only person receiving alerts in the middle of the night. We established a rotation with backup responders. If someone was on PTO, PagerDuty handled overrides automatically. As the rotation matured, everyone gained valuable experience.

The biggest change was personal. My work-life balance improved quickly. I could sleep without worrying about surprise outages. We had a defined process instead of relying on hope. PagerDuty transformed an all-hours alert mess into a structured system that respected both our time and our sanity.

---

## Dashboards

![PagerDuty Incident Dashboard](/assets/images/blog2025/0623/pagerdutyDash.png)
![SPagerDuty On-Call Schedule](/assets/images/blog2025/0623/pagerdutySchedule.png)

---

## Benefits

- **Structured On-Call Management**  
  Schedules, escalations, and overrides function reliably. No more spreadsheets or confusion about who received the alert.

- **Smart Alert Routing**  
  PagerDuty reduces noise and alerts you based on severity, timing, and service definitions.

- **Automation Hooks**  
  Trigger Rundeck jobs, Slack notifications, or ticket creation automatically when specific alert conditions occur.

- **Status Pages and Communication**  
  Keep stakeholders and internal teams informed with structured status updates and incident timelines.

- **Postmortem Tools**  
  Capture what happened, how the team responded, and what to improve next time with detailed audit trails.

- **Mobile-Friendly**  
  The mobile app allows you to acknowledge, escalate, or take action from anywhere.

- **Extensive Integrations**  
  Integrates seamlessly with New Relic, Datadog, Slack, GitHub, AWS CloudWatch, ServiceNow, and many other platforms.

- **Reliable Notifications**  
  Supports push notifications, SMS, phone calls, and email to ensure critical alerts are delivered.

---

## Drawbacks

- **Learning Curve at Setup**  
  Configuring schedules, escalation policies, and services requires time and careful planning. The platform is powerful, but it takes effort to master.

- **Costs Increase with Scale**  
  The free tier is limited. Full automation, analytics, and advanced features require paid plans, which can become expensive for larger organizations.

- **Alert Fatigue Risk**  
  Without proper tuning, excessive alerts can lead to burnout. Thresholds, deduplication, and suppression rules must be intentional.

- **Busy Interface**  
  The UI offers deep functionality but can feel dense for new users.

- **Overkill for Small Projects**  
  For personal sites or small internal tools, PagerDuty may feel unnecessary.

---

## Cost

PagerDuty offers a free plan for small teams or testing. This includes basic alerting and a single on-call schedule.

Paid tiers expand into automation, service tiers, postmortem reporting, and advanced integrations. Most SRE teams gain significant value from the Professional or Business plans when managing structured on-call rotations.

You can review the latest details at [PagerDuty's pricing](https://www.pagerduty.com/pricing).

---

## Bottom Line

PagerDuty removes chaos from incident response. Whether you are on your first on-call rotation or leading an SRE organization, it provides structure, accountability, and continuous improvement.

If you are building reliable systems, PagerDuty is not optional. It is foundational.

Stay tuned for the next tool in the **Git to Know You** series!