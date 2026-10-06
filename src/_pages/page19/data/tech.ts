import type { TechProfile } from "@pg/page19/types/hire";
import hero from "@pg/page19/assets/pages/p19-hero.jpg";
import ways from "@pg/page19/assets/pages/p19-ways.jpg";
import streams from "@pg/page19/assets/pages/p19-streams.jpg";
import ecosystem from "@pg/page19/assets/pages/p19-ecosystem.jpg";
import r1 from "@pg/page19/assets/pages/p19-r1.jpg";
import r2 from "@pg/page19/assets/pages/p19-r2.jpg";
import r3 from "@pg/page19/assets/pages/p19-r3.jpg";
import r4 from "@pg/page19/assets/pages/p19-r4.jpg";
import steps from "@pg/page19/assets/pages/p19-steps.jpg";
import faq from "@pg/page19/assets/pages/p19-faq.jpg";

/* Java developers: everything on this page that is about Java. The rest of
   the words come from src/lib/hire-copy.ts, shared with every Technologies
   page. The examples and the skills answer are drafts; have them checked
   before launch. Photo sources are in docs/sections.md. */

export const TECH: TechProfile = {
  group: "Backend",
  skill: "Java",
  Skill: "Java",
  one: "Java developer",
  many: "Java developers",
  people: "Engineers",
  kit: "stack",
  products: "Java applications",

  hero: {
    lede: "Java developers who build Spring Boot services, tune the JVM and run event-driven systems on Kafka, inside your product team.",
    photo: { image: hero, alt: "Two developers review code together at a desk with monitors." },
  },

  core: [
    { name: "Java", logo: "openjdk", note: "Core language" },
    { name: "Spring Boot", logo: "springboot", note: "Service framework" },
    { name: "Hibernate", logo: "hibernate", note: "Persistence" },
    { name: "Apache Kafka", logo: "apachekafka", note: "Event streaming" },
    { name: "Kubernetes", logo: "kubernetes", note: "Orchestration" },
    { name: "JUnit 5", logo: "junit5", note: "Testing" },
  ],
  ecosystem: ["Spring Security", "PostgreSQL", "Elasticsearch", "Gradle", "Maven", "Quarkus", "Kotlin", "Docker", "IntelliJ IDEA"],

  benefits: [
    {
      title: "Services built on Spring Boot",
      body: "Well-structured services and APIs on Spring Boot, secured, documented and ready for containers.",
      work: ["API development", "Microservices", "Feature development"],
      tools: ["Spring Boot", "Spring Security", "Hibernate", "PostgreSQL"],
    },
    {
      title: "JVM performance",
      body: "Heap, collector and pause targets set from your production profile, and the code that allocates most put right.",
      work: ["Performance tuning", "Profiling", "Memory issues"],
      tools: ["Java", "Quarkus", "Grafana", "Prometheus"],
    },
    {
      title: "Event-driven systems",
      body: "Kafka-backed services that keep up with traffic, with schemas, consumer groups and monitoring in place.",
      work: ["Event streaming", "Messaging", "Data integration"],
      tools: ["Apache Kafka", "Apache Avro", "Spring Boot", "Kubernetes"],
    },
    {
      title: "Upgrades without the risk",
      body: "Older Java estates moved to current LTS releases in steps, with tests in place before anything changes.",
      work: ["Java upgrades", "Spring upgrades", "Modernisation"],
      tools: ["Java", "Gradle", "Maven", "JUnit 5"],
    },
  ],

  roles: [
    {
      title: "Java Architect",
      body: "Sets the shape of your Java estate: service boundaries, data, events and the standards the team builds to.",
      skills: ["Java", "Spring Boot", "Apache Kafka", "Kubernetes"],
      part: "Architecture",
      photo: { image: r1, alt: "A developer in headphones works across several large monitors in a dim room." },
    },
    {
      title: "Spring Boot Specialist",
      body: "Ships features end to end in your services, from the endpoint to the database, with the tests alongside.",
      skills: ["Spring Boot", "Hibernate", "PostgreSQL", "JUnit 5"],
      part: "Core delivery",
      photo: { image: r2, alt: "A developer in a striped top works across two monitors in a white office." },
    },
    {
      title: "Streaming Engineer",
      body: "Builds and runs the Kafka topics, consumers and schemas your services exchange events through.",
      skills: ["Apache Kafka", "Apache Avro", "Spring Boot", "Java"],
      part: "Events",
      photo: { image: r3, alt: "An older engineer explains something to a younger colleague at a laptop." },
    },
    {
      title: "Performance Engineer",
      body: "Profiles your services under production-like load and tunes the JVM and the code until they hold.",
      skills: ["Java", "Grafana", "Prometheus", "Quarkus"],
      part: "Performance",
      photo: { image: r4, alt: "A developer in a plaid shirt works on a laptop in a bright office." },
    },
  ],

  capabilities: [
    {
      label: "Build",
      icon: "layout",
      title: "Build Java applications",
      body: "Java developers who build robust services, APIs and back-end systems.",
      chips: ["Java", "Spring Boot", "Hibernate"],
    },
    {
      label: "Integrate",
      icon: "plug",
      title: "Connect your systems",
      body: "Specialists who connect your services through APIs and events, and to the databases and search behind them.",
      chips: ["Apache Kafka", "REST APIs", "Elasticsearch"],
    },
    {
      label: "Platform",
      icon: "cloud",
      title: "Deploy securely",
      body: "Engineers who ship containers through your pipeline and keep watch on the JVM in production.",
      chips: ["Kubernetes", "CI/CD", "Security"],
    },
  ],

  examples: [
    {
      client: "US product company",
      model: "Dedicated product pod",
      title: "Java services team",
      body: "We provided Java developers to build the services behind a critical product launch and set up reliable delivery workflows.",
      roles: ["Java Architect", "Spring Boot Specialist", "Delivery Lead"],
      stack: ["Java", "Spring Boot", "Hibernate", "PostgreSQL"],
      outcomes: [
        { value: "Faster", label: "feature release cycles" },
        { value: "Reliable", label: "production deployments" },
      ],
    },
    {
      client: "US enterprise platform",
      model: "Architecture and delivery",
      title: "Core Java modernisation",
      body: "We added specialists to move an older Java platform to current LTS releases and event-driven services on Kafka.",
      roles: ["Java Architect", "Streaming Engineer", "QA Engineer"],
      stack: ["Java", "Spring Boot", "Apache Kafka", "Kubernetes"],
      outcomes: [
        { value: "Modern", label: "Java runtime" },
        { value: "Reduced", label: "technical debt" },
      ],
    },
    {
      client: "US financial services",
      model: "Augmented squad",
      title: "Secure transaction services",
      body: "We placed Java developers inside the client’s strict security and compliance workflow to ship new transaction services.",
      roles: ["Spring Boot Specialist", "Security Engineer", "Performance Engineer"],
      stack: ["Java", "Spring Boot", "Apache Kafka", "PostgreSQL"],
      outcomes: [
        { value: "Compliant", label: "service releases" },
        { value: "Stable", label: "peak-hour latency" },
      ],
    },
  ],

  skillsAnswer:
    "Java architecture, Spring Boot services and APIs, Hibernate, event-driven systems on Kafka, JVM performance tuning, Java and Spring upgrades, Kubernetes and testing.",

  /* Questions about this skill, asked first in the FAQ. Drafts, to be
     reworked; the four about how hiring works are shared (hire-copy.ts). */
  faqs: [
    {
      q: "Which Java versions do you work with?",
      a: "Current LTS releases by default. On older estates we plan the upgrade in steps, with tests in place first.",
    },
    {
      q: "Spring only, or other frameworks too?",
      a: "Mostly Spring Boot, plus Quarkus or Micronaut where startup time and memory matter most.",
    },
    {
      q: "Can you help with performance problems?",
      a: "Yes. We profile under production-like load, then tune the heap, the collector and the code that allocates most.",
    },
    {
      q: "Will they work with our Kafka setup?",
      a: "Yes, self-hosted or managed: topics, schemas, consumer groups and the monitoring around them.",
    },
  ],

  photos: {
    ways: [
      { image: ways, alt: "A developer in a white sweater works on a laptop at a simple desk against a concrete wall." },
      { image: streams, alt: "An engineer writes code at a monitor in a busy office.", focus: "50% 40%" },
      { image: ecosystem, alt: "A developer in glasses types on a laptop at his desk.", focus: "55% 40%" },
    ],
    steps: { image: steps, alt: "A man and a woman discuss notes at a desk with a laptop in a brick-walled office." },
    faq: { image: faq, alt: "Two developers laugh while talking through work at their desks.", focus: "50% 40%" },
  },
};
