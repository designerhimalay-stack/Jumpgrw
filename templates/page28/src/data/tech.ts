import type { TechProfile } from "@/types/hire";
import hero from "@/assets/pages/p28-hero.jpg";
import ways from "@/assets/pages/p28-ways.jpg";
import platform from "@/assets/pages/p28-platform.jpg";
import team from "@/assets/pages/p28-team.jpg";
import r1 from "@/assets/pages/p28-r1.jpg";
import r2 from "@/assets/pages/p28-r2.jpg";
import r3 from "@/assets/pages/p28-r3.jpg";
import r4 from "@/assets/pages/p28-r4.jpg";
import steps from "@/assets/pages/p28-steps.jpg";
import faq from "@/assets/pages/p28-faq.jpg";

/* Data engineers: everything on this page that is about data engineering.
   The rest of the words come from src/lib/hire-copy.ts, shared with every
   Technologies page. The examples and the skills answer are drafts; have
   them checked before launch. Photo sources are in docs/sections.md. */

export const TECH: TechProfile = {
  group: "AI & data",
  crumb: "Data engineers",
  skill: "data engineering",
  Skill: "Data engineering",
  one: "data engineer",
  many: "data engineers",
  people: "Engineers",
  kit: "stack",
  products: "data platforms",

  hero: {
    lede: "Engineers who build the pipelines your numbers depend on: tested at every step, on time every morning, and cheap to run.",
    photo: { image: hero, alt: "A data engineer walks colleagues through a chart on a wall screen." },
  },

  core: [
    { name: "Apache Spark", logo: "apachespark", note: "Batch processing" },
    { name: "Apache Airflow", logo: "apacheairflow", note: "Orchestration" },
    { name: "dbt", note: "Data modelling" },
    { name: "Snowflake", logo: "snowflake", note: "Data warehouse" },
    { name: "Apache Kafka", logo: "apachekafka", note: "Event streaming" },
    { name: "Databricks", logo: "databricks", note: "Lakehouse" },
  ],
  ecosystem: ["Python", "SQL", "BigQuery", "PostgreSQL", "Apache Flink", "Airbyte", "Trino", "Terraform", "Great Expectations"],

  benefits: [
    {
      title: "Reliable pipelines",
      body: "Pipelines that run on time every morning, wait on their dependencies and retry what fails before anyone notices.",
      work: ["Pipeline development", "Orchestration", "Backfills"],
      tools: ["Apache Airflow", "Prefect", "Python", "Docker"],
    },
    {
      title: "Data you can trust",
      body: "Tests at every layer for schemas, nulls, duplicates and row counts, so bad data stops before it reaches a dashboard.",
      work: ["Data quality", "Data contracts", "Freshness alerts"],
      tools: ["dbt", "Great Expectations", "Apache Airflow", "SQL"],
    },
    {
      title: "A warehouse the business can use",
      body: "Raw data modelled into clean, documented tables, from the landing layer to the numbers the board reads.",
      work: ["Data modelling", "Warehouse design", "Semantic layers"],
      tools: ["dbt", "Snowflake", "BigQuery", "Looker"],
    },
    {
      title: "Platforms that cost less to run",
      body: "Batch where it’s enough, streaming where it pays, and compute sized to the job, so the bill stays in check.",
      work: ["Cost optimisation", "Streaming", "Platform migration"],
      tools: ["Apache Spark", "Apache Kafka", "Databricks", "Terraform"],
    },
  ],

  roles: [
    {
      title: "Data Architect",
      body: "Sets the shape of your data platform: sources, layers, storage and the standards the team builds to.",
      skills: ["Snowflake", "Databricks", "dbt", "Terraform"],
      part: "Architecture",
      photo: { image: r1, alt: "A researcher studies a scatter plot of results on his monitor." },
    },
    {
      title: "Senior Data Engineer",
      body: "Builds pipelines end to end, from the source system to the modelled table, with the tests alongside.",
      skills: ["Python", "SQL", "Apache Spark", "Apache Airflow"],
      part: "Core delivery",
      photo: { image: r2, alt: "A woman presents a chart on a large screen to colleagues." },
    },
    {
      title: "Analytics Engineer",
      body: "Turns raw tables into documented, tested models and metrics your analysts and dashboards rely on.",
      skills: ["dbt", "SQL", "Snowflake", "Looker"],
      part: "Modelling",
      photo: { image: r3, alt: "An engineer with braided hair studies image analysis results on two monitors." },
    },
    {
      title: "Streaming Data Engineer",
      body: "Builds the real-time feeds behind decisions that can’t wait, from event capture to the landed table.",
      skills: ["Apache Kafka", "Apache Flink", "Apache Spark", "Python"],
      part: "Streaming",
      photo: { image: r4, alt: "Over-the-shoulder view of an analyst working through a dashboard of charts on a laptop." },
    },
  ],

  capabilities: [
    {
      label: "Build",
      icon: "diagram",
      title: "Build data pipelines",
      body: "Data engineers who build the pipelines, warehouses and lakes your reporting and products depend on.",
      chips: ["Apache Spark", "Apache Airflow", "dbt"],
    },
    {
      label: "Integrate",
      icon: "plug",
      title: "Connect your sources",
      body: "Specialists who bring data in from your apps, databases and SaaS tools, in batch or as it happens.",
      chips: ["Apache Kafka", "Airbyte", "APIs"],
    },
    {
      label: "Platform",
      icon: "cloud",
      title: "Run it securely",
      body: "Engineers who run your data platform in your cloud, with access, cost and freshness under watch.",
      chips: ["Cloud platforms", "Infrastructure as code", "Governance"],
    },
  ],

  help: [
    {
      icon: "plug",
      title: "Connect your sources",
      body: "Ingestion from your apps, databases and SaaS tools, in batch or streaming, landing raw data you can replay.",
      covers: "Ingestion, batch and streaming",
    },
    {
      icon: "diagram",
      title: "Model the warehouse",
      body: "Layered models that clean, join and sum raw data into tables the business can trust.",
      covers: "Modelling, warehouses and lakes",
    },
    {
      icon: "calendar",
      title: "Orchestrate and test",
      body: "Scheduled runs with dependencies, retries and data tests, so nothing bad is published.",
      covers: "Orchestration, tests and quality",
    },
    {
      icon: "shield",
      title: "Operate and improve",
      body: "Freshness, cost and access watched in production, with runbooks and alerts your team owns.",
      covers: "Freshness, cost and governance",
    },
  ],

  examples: [
    {
      client: "US product company",
      model: "Dedicated product pod",
      title: "Data platform team",
      body: "We provided data engineers to stand up a modern data platform and set up reliable nightly pipelines.",
      roles: ["Data Architect", "Senior Data Engineer", "Delivery Lead"],
      stack: ["Apache Airflow", "dbt", "Snowflake", "Python"],
      outcomes: [
        { value: "Faster", label: "time to insight" },
        { value: "Reliable", label: "nightly runs" },
      ],
    },
    {
      client: "US enterprise platform",
      model: "Architecture and delivery",
      title: "Warehouse modernisation",
      body: "We added specialists to move the platform’s legacy reporting onto a modern lakehouse and pay down its technical debt.",
      roles: ["Data Architect", "Analytics Engineer", "Platform Engineer"],
      stack: ["Databricks", "Apache Spark", "dbt", "Terraform"],
      outcomes: [
        { value: "Modern", label: "data architecture" },
        { value: "Lower", label: "running costs" },
      ],
    },
    {
      client: "US financial services",
      model: "Augmented squad",
      title: "Governed financial data",
      body: "We placed data engineers inside the client’s strict security and compliance workflow to deliver audited reporting pipelines.",
      roles: ["Senior Data Engineer", "Analytics Engineer", "Security Engineer"],
      stack: ["Apache Kafka", "Snowflake", "dbt", "Apache Airflow"],
      outcomes: [
        { value: "Compliant", label: "data pipelines" },
        { value: "Trusted", label: "reporting" },
      ],
    },
  ],

  skillsAnswer:
    "Data architecture, batch and streaming pipelines, Spark and Kafka, orchestration with Airflow, dbt modelling, Snowflake, BigQuery and Databricks, data quality and cost tuning.",

  /* Questions about this skill, asked first in the FAQ. Drafts, to be
     reworked; the four about how hiring works are shared (hire-copy.ts). */
  faqs: [
    {
      q: "Batch or streaming?",
      a: "Batch, unless a decision needs the data within minutes. Streaming costs more to run and to staff, so we use it where it pays.",
    },
    {
      q: "Can you work in the stack we already have?",
      a: "Yes. We work in your warehouse, orchestrator and cloud, and change them only when cost or reliability asks for it.",
    },
    {
      q: "How do you stop bad data reaching dashboards?",
      a: "Tests at every layer: schemas, nulls, duplicates and row counts. A failed check stops the run before anything is published.",
    },
    {
      q: "Who owns the pipelines afterwards?",
      a: "Your team. Every pipeline is in version control and documented, and handed over with runbooks and alerts already wired.",
    },
  ],

  photos: {
    ways: [
      { image: ways, alt: "An analyst in a blazer reviews a dashboard on a large monitor beside his laptop." },
      { image: platform, alt: "An engineer concentrates at his screen in a busy, blue-lit office.", focus: "68% 35%" },
      { image: team, alt: "Four colleagues work through data together at a long desk.", focus: "50% 40%" },
    ],
    steps: { image: steps, alt: "Two men chat over a laptop in a busy cafe-style office." },
    faq: { image: faq, alt: "Colleagues go through charts together around a meeting table.", focus: "50% 40%" },
  },
};
