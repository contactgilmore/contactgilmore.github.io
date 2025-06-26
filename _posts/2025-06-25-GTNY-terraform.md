---
layout: post
title: "#5. Git to Know You: Terraform"
date: 2025-06-25
thumbnail: /assets/images/blog2025/0625/terraformThumb.png
categories: [sre, infrastructure, devops]
tags: [terraform, infrastructure-as-code, iac, cloud]
---

**This one’s a big deal. No exaggeration.**  
No sarcasm—Terraform is a must-have. It’s hard to overstate how critical this tool is. Even if it feels like a steep learning curve at first, adopting Terraform is one of the smartest moves your team can make. I’d rank it #1 on any infrastructure list—but it helps to hit a few key milestones first.

Once your team has tackled [TOIL](https://sre.google/sre-book/eliminating-toil/), is running solid root cause analysis (RCA) calls with real evidence, and has version control locked in—you’re ready to learn the tool you’ll wish you’d started with. If you’ve ever touched HTML or CSS, you’ll be fine. If you’ve written any code, this will feel like home. I promise, if you know any scripting language, it will be a breeze.

Tired of wasting time copy-pasting cloud console steps into a README, or worse—clicking through AWS manually every time you spin up a dev environment? It's time to meet Terraform. This isn't an ad campaign, it's truth.

This post kicks off a beginner-friendly, technically sound breakdown of Terraform: what it is, why it matters, and how you can start using it like a pro. We'll touch on real-world workflows, advanced patterns like modules and remote state, and compare Terraform with native IaC tools like CloudFormation and Bicep.

---

## What is Terraform?

Terraform is an open-source tool by HashiCorp for managing infrastructure as code. Using its domain-specific language, HCL (HashiCorp Configuration Language), you define what your infrastructure should look like. Then Terraform builds it, updates it, and tears it down.

Instead of manually launching EC2 instances or setting up IAM roles, you define them in `.tf` files. These configurations are versionable, reviewable, and reusable.

### Example
```hcl
resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t3.micro"

  tags = {
    Name = "web-server"
  }
}
```

---

## Why Terraform?

Terraform shines in a few key areas:

- **Cloud Agnostic**: One language, many clouds. AWS, Azure, GCP, GitHub, Cloudflare—you name it.
- **Modular and Reusable**: Infrastructure can be broken into reusable components.
- **Declarative**: You describe *what* you want, not *how* to get there.
- **Git-native**: Store your IaC in Git, review changes in PRs, and trigger automation via CI/CD.
- **Huge Ecosystem**: Providers and modules for nearly every popular platform.

Compared to AWS CloudFormation and Azure Bicep, Terraform:

| Feature               | Terraform         | CloudFormation       | Bicep          |
|-----------------------|-------------------|------------------------|----------------|
| Multi-cloud support   | ✓ Yes             | x No                  | x No           |
| Language              | HCL (custom)      | JSON/YAML             | Bicep DSL      |
| Reusability/Modules   | ✓ Strong          | ~ Limited             | ✓ Moderate     |
| Ecosystem             | Huge              | AWS only              | Azure only     |
| Community Modules     | ✓ Available       | x None                | ~ Growing      |
| State Management      | ✓ Built-in        | ✓ With StackSets       | ✓ Native       |

---

## Typical Terraform Workflow

A basic Terraform lifecycle looks like this:

### `terraform fmt`
Formats your code to standard HCL style.

### `terraform validate`
Checks that your code is syntactically valid.

### `terraform plan`
Generates an execution plan so you know what will happen before you run it.

```bash
terraform plan -out=tfplan.out
```

### `terraform apply`
Executes the changes in your infrastructure.

```bash
terraform apply tfplan.out
```

### `terraform destroy`
Tears down your infrastructure when you're done.

This declarative workflow means safer, more predictable deployments. Combine it with GitHub Actions or Atlantis, and you've got full GitOps infrastructure pipelines.

---

## The Terraform Registry

If you’re ever unsure how to define a resource—say, an S3 bucket or an IAM role—the [Terraform Registry](https://registry.terraform.io) is your best friend.

It’s essentially Terraform’s official documentation and module hub. You’ll find:

- **Provider documentation**: every resource, every argument, and what each one does.
- **Input/output examples**: real-world usage patterns.
- **Prebuilt modules**: reusable chunks of infrastructure code you can plug and play.
- **Versioning**: pin the exact version of a module or provider you want to use.

## AWS S3 Bucket Resource - registry.terraform.io:
>
> ![Terraform Registry S3 Example](/assets/images/blog2025/0625/terraformRegistrySS.png)

The registry allows teams to write less and reuse more. Want to create a VPC with subnets and NAT gateways? Someone's probably built a module for that already.

---


## A Real Story: How Terraform Helped My Team

Before Terraform, our team had just completed a move from a traditional on-prem environment to AWS. We weren’t using Kubernetes or containers yet—just good ol’ EC2 with Windows and IIS, running a monolithic architecture. Infrastructure tasks were slow, inconsistent, and sometimes chaotic.

We’d manually resize EC2 instances if traffic picked up. We’d bootstrap machines by hand, tweaking registry keys and setting up scheduled tasks. We had no visibility into how things were configured and no real versioning of infrastructure decisions. If someone made a change in the console, no one else knew unless something broke. Rolling back was basically: “Do you remember what this looked like two weeks ago?”

Then we adopted Terraform.

We started small—just codifying a single VPC and one EC2 instance. But the impact was immediate. Once we could define infrastructure as code, it unlocked a whole new mindset. Everything was tracked in Git. We could `plan` our changes, review them in pull requests, and collaborate on architecture decisions like we would any other software change.

Our [TOIL](https://sre.google/sre-book/eliminating-toil/) dropped significantly—by at least 25%. Engineers weren’t wasting time manually clicking through the AWS Console anymore. We had standardized templates, reusable modules, and could spin up or destroy dev environments in minutes. It wasn’t just about saving time. It was about building trust. Everyone on the team could see exactly what the infrastructure looked like, at any given moment.

Best of all, when something went wrong, we didn’t scramble—we opened a PR, reverted the change, and applied. That kind of control turned our infrastructure from a liability into an asset.


---

## Reusability and Git Collaboration

Terraform modules allow you to define reusable infrastructure components. Want a consistent VPC setup across dev, staging, and prod? Make a module.

Example usage:
```hcl
module "vpc" {
  source = "terraform-aws-modules/vpc/aws"
  version = "4.0.2"

  name = "main"
  cidr = "10.0.0.0/16"
  azs  = ["us-west-2a", "us-west-2b", "us-west-2c"]
}
```

Modules can be local or pulled from the Terraform Registry. By using Git for all configuration changes, you get version history, peer reviews, and the ability to roll back.

---

## Drawbacks

Terraform isn’t perfect:
- **State management requires care**. Use remote backends (S3 + DynamoDB) for team collaboration.
- **Error messages can be cryptic**, especially with modules.
- **Drift detection isn't automatic**. You must `plan` often.
- **Complex plans can be hard to interpret**. Use smaller modules and tags for traceability.

---

## Final Thoughts

Terraform brings the discipline of software engineering to the world of infrastructure. It replaces the chaos of inconsistent environments with repeatable, testable blueprints.

Start small. Define a single S3 bucket or EC2 instance. Once you're comfortable, build out modules, adopt remote state, and integrate GitOps flows.

If you manage infrastructure and want to scale your systems (and sanity), Terraform should be in your toolkit.

---

*Next in the Git to Know You series: Kubernetes.*
