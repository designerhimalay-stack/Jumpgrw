import type { TechProfile } from "@pg/page6/types/hire";
import hero from "@pg/page6/assets/pages/p6-hero.jpg";
import ways from "@pg/page6/assets/pages/p6-ways.jpg";
import pipeline from "@pg/page6/assets/pages/p6-pipeline.jpg";
import iac from "@pg/page6/assets/pages/p6-iac.jpg";
import r1 from "@pg/page6/assets/pages/p6-r1.jpg";
import r2 from "@pg/page6/assets/pages/p6-r2.jpg";
import r3 from "@pg/page6/assets/pages/p6-r3.jpg";
import r4 from "@pg/page6/assets/pages/p6-r4.jpg";
import steps from "@pg/page6/assets/pages/p6-steps.jpg";
import faq from "@pg/page6/assets/pages/p6-faq.jpg";

/* DevOps engineers: everything on this page that is about DevOps, cloud and
   reliability. The rest of the words come from src/lib/hire-copy.ts, shared
   with every Technologies page. The examples and the skills answer are
   drafts; have them checked before launch. Photo sources are in
   docs/sections.md. */

export const TECH: TechProfile = {
  group: "Delivery",
  crumb: "DevOps engineers",
  skill: "DevOps",
  Skill: "DevOps",
  one: "DevOps engineer",
  many: "DevOps engineers",
  people: "Engineers",
  kit: "stack",
  products: "cloud platforms",

  hero: {
    lede: "Specialist DevOps engineers who build your pipelines, codify your infrastructure and keep production reliable, from a first deployment to an enterprise platform.",
    photo: { image: hero, alt: "Two engineers with laptops walk a corridor of server racks lit in blue." },
  },

  core: [
    { name: "Kubernetes", logo: "kubernetes", note: "Container platform" },
    { name: "Terraform", logo: "terraform", note: "Infrastructure as code" },
    { name: "Docker", logo: "docker", note: "Containers" },
    { name: "GitHub Actions", logo: "githubactions", note: "CI/CD pipelines" },
    { name: "AWS", note: "Cloud platform" },
    { name: "Prometheus", logo: "prometheus", note: "Metrics" },
  ],
  ecosystem: ["Azure", "Google Cloud", "Helm", "Argo CD", "Ansible", "Grafana", "Datadog", "Jenkins", "GitLab CI"],

  benefits: [
    {
      title: "Pipelines that ship safely",
      body: "Every change built, tested and released the same way, with gradual rollouts and a one-step rollback when something goes wrong.",
      work: ["CI/CD pipelines", "Release automation", "Rollback plans"],
      tools: ["GitHub Actions", "Argo CD", "Jenkins", "Docker"],
    },
    {
      title: "Infrastructure as code",
      body: "Networks, clusters and permissions written in code in your repository, reviewed like features and rebuilt in minutes.",
      work: ["Cloud foundations", "Environment set-up", "Migrations"],
      tools: ["Terraform", "Ansible", "Helm", "AWS"],
    },
    {
      title: "Observability and on-call",
      body: "Metrics, logs and alerts that tell you what broke and why, with a clear owner for every alert, day or night.",
      work: ["Monitoring", "Incident response", "Runbooks"],
      tools: ["Prometheus", "Grafana", "Datadog", "PagerDuty"],
    },
    {
      title: "Secure, cost-aware cloud",
      body: "Access, secrets and spending kept under control, with security checks in the pipeline and regular reviews of what can be right-sized.",
      work: ["Cloud security", "Secrets management", "Cost optimisation"],
      tools: ["Vault", "AWS", "Kubernetes", "Terraform"],
    },
  ],

  roles: [
    {
      title: "Cloud Architect",
      body: "Designs your cloud foundations: accounts, networks, environments and the standards every service is deployed to.",
      skills: ["AWS", "Azure", "Terraform", "Kubernetes"],
      part: "Architecture",
      photo: { image: r1, alt: "An engineer watches a wall of monitoring screens in a control room." },
    },
    {
      title: "Platform Engineer",
      body: "Builds the pipelines, clusters and tooling your developers use to ship, so a release is routine rather than an event.",
      skills: ["Kubernetes", "Docker", "GitHub Actions", "Helm"],
      part: "Platform",
      photo: { image: r2, alt: "Two engineers with tablets talk in a corridor beside server racks." },
    },
    {
      title: "Site Reliability Engineer",
      body: "Keeps production healthy: sets service levels, wires up monitoring and leads the response when an alert fires.",
      skills: ["Prometheus", "Grafana", "Datadog", "PagerDuty"],
      part: "Reliability",
      photo: { image: r3, alt: "An engineer smiles as he works across a bank of monitors." },
    },
    {
      title: "DevSecOps Engineer",
      body: "Builds security into the pipeline and the cloud: access, secrets, scanning and the evidence your auditors ask for.",
      skills: ["Vault", "Terraform", "AWS", "Kubernetes"],
      part: "Security",
      photo: { image: r4, alt: "Two engineers work side by side at monitors in an operations room." },
    },
  ],

  capabilities: [
    {
      label: "Build",
      icon: "zap",
      title: "Automate delivery",
      body: "DevOps engineers who build CI/CD pipelines that take every change from commit to production safely.",
      chips: ["GitHub Actions", "Argo CD", "Docker"],
    },
    {
      label: "Integrate",
      icon: "document",
      title: "Codify your infrastructure",
      body: "Specialists who move your environments into code, one at a time, with no big-bang migration.",
      chips: ["Terraform", "Kubernetes", "Helm"],
    },
    {
      label: "Platform",
      icon: "cloud",
      title: "Run production",
      body: "Engineers who watch your systems, answer alerts and keep reliability, security and cloud costs in check.",
      chips: ["Observability", "On-call", "Cost control"],
    },
  ],

  help: [
    {
      icon: "diagram",
      title: "Map what you run",
      body: "Your current cloud, environments and release process documented, with the risks and quick wins named.",
      covers: "Audit, architecture and plan",
    },
    {
      icon: "zap",
      title: "Automate the pipeline",
      body: "Builds, tests and deployments that run on every change, the same way in every environment.",
      covers: "CI/CD and environments",
    },
    {
      icon: "cloud",
      title: "Codify and release",
      body: "Infrastructure written as code in your repository, rolled out gradually and reversible in one step.",
      covers: "Infrastructure as code and rollouts",
    },
    {
      icon: "shield",
      title: "Operate and improve",
      body: "Monitoring, on-call, security and cost reviews, so production stays reliable long after launch.",
      covers: "Reliability, security and cost",
    },
  ],

  examples: [
    {
      client: "US product company",
      model: "Dedicated product pod",
      title: "Delivery pipeline team",
      body: "We provided DevOps engineers to automate releases ahead of a critical launch and set up reliable deployment workflows.",
      roles: ["Platform Engineer", "Site Reliability Engineer", "Delivery Lead"],
      stack: ["GitHub Actions", "Docker", "Kubernetes", "AWS"],
      outcomes: [
        { value: "Faster", label: "release cycles" },
        { value: "Reliable", label: "production deployments" },
      ],
    },
    {
      client: "US enterprise platform",
      model: "Architecture and delivery",
      title: "Cloud platform modernisation",
      body: "We added specialists to move hand-built environments into code and modernise the platform’s cloud foundations.",
      roles: ["Cloud Architect", "Platform Engineer", "QA Engineer"],
      stack: ["Terraform", "Kubernetes", "Helm", "Argo CD"],
      outcomes: [
        { value: "Repeatable", label: "environments" },
        { value: "Reduced", label: "cloud spend" },
      ],
    },
    {
      client: "US financial services",
      model: "Augmented squad",
      title: "Secure cloud operations",
      body: "We placed DevOps engineers inside the client’s strict security and compliance workflow to run and harden production.",
      roles: ["DevSecOps Engineer", "Site Reliability Engineer", "Security Engineer"],
      stack: ["AWS", "Terraform", "Vault", "Datadog"],
      outcomes: [
        { value: "Compliant", label: "cloud controls" },
        { value: "Seamless", label: "team integration" },
      ],
    },
  ],

  skillsAnswer:
    "Cloud architecture on AWS, Azure and Google Cloud, CI/CD pipelines, infrastructure as code, Kubernetes and containers, observability and on-call, cloud security and cost optimisation.",

  /* Questions about this skill, asked first in the FAQ. Drafts, to be
     reworked; the four about how hiring works are shared (hire-copy.ts). */
  faqs: [
    {
      q: "Can you work with our existing cloud setup?",
      a: "Yes. We start by mapping what you run today, then move it into code one environment at a time, with no big-bang migration.",
    },
    {
      q: "Who is on call?",
      a: "Our DevOps engineers join your on-call rota and cover the hours your team is offline, so a night-time alert never waits for the morning.",
    },
    {
      q: "Will we be locked in to you?",
      a: "No. Everything lives in your accounts and your repositories, written as code your team can read, run and change.",
    },
    {
      q: "How do you handle cloud costs?",
      a: "Costs are watched like any other signal: budgets, alerts, and a monthly review of what can be right-sized.",
    },
  ],

  photos: {
    ways: [
      { image: ways, alt: "A developer in a green shirt works across several screens in a dark office." },
      { image: pipeline, alt: "Engineers at work across rows of screens in a dimly lit operations room.", focus: "50% 45%" },
      { image: iac, alt: "Engineers work at desks of large monitors in an open office.", focus: "50% 50%" },
    ],
    steps: { image: steps, alt: "Two men discuss a project across a table with laptops." },
    faq: { image: faq, alt: "Engineers talk through their work across desks in a bright office.", focus: "50% 45%" },
  },
};
