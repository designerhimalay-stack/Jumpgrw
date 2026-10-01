import type { TechProfile } from "@/types/hire";
import hero from "@/assets/pages/p16-team.jpg";
import ways from "@/assets/pages/p16-ways.jpg";
import terminal from "@/assets/pages/p16-terminal.jpg";
import load from "@/assets/pages/p16-load.jpg";
import r1 from "@/assets/pages/p16-r1.jpg";
import r2 from "@/assets/pages/p16-r2.jpg";
import r3 from "@/assets/pages/p16-r3.jpg";
import r4 from "@/assets/pages/p16-r4.jpg";
import steps from "@/assets/pages/p16-steps.jpg";
import faq from "@/assets/pages/p16-faq.jpg";

/* Node.js developers: everything on this page that is about Node.js. The
   rest of the words come from src/lib/hire-copy.ts, shared with every
   Technologies page. The examples and the skills answer are drafts; have
   them checked before launch. Photo sources are in docs/sections.md. */

export const TECH: TechProfile = {
  group: "Backend",
  skill: "Node.js",
  Skill: "Node.js",
  one: "Node.js developer",
  many: "Node.js developers",
  people: "Engineers",
  kit: "stack",
  products: "Node.js services",

  hero: {
    lede: "Backend Node.js developers who build fast, dependable APIs and services that hold their latency at peak, inside your product team.",
    photo: { image: hero, alt: "A developer points out a line of code on a laptop to a colleague at his desk." },
  },

  core: [
    { name: "Node.js", logo: "nodedotjs", note: "JavaScript runtime" },
    { name: "TypeScript", logo: "typescript", note: "Typed code" },
    { name: "NestJS", logo: "nestjs", note: "Structured APIs" },
    { name: "Express", logo: "express", note: "HTTP server" },
    { name: "Fastify", logo: "fastify", note: "Fast routes" },
    { name: "PostgreSQL", logo: "postgresql", note: "Relational data" },
  ],
  ecosystem: ["Prisma", "MongoDB", "Redis", "GraphQL", "Socket.IO", "Jest", "pnpm", "Docker", "PM2"],

  benefits: [
    {
      title: "APIs that stay fast",
      body: "Non-blocking code, lean queries and services load-tested before launch, so latency holds when traffic peaks.",
      work: ["API development", "Performance tuning", "Load testing"],
      tools: ["Fastify", "Redis", "k6", "Grafana"],
    },
    {
      title: "Structured, typed services",
      body: "Strict TypeScript and clear module boundaries, so a growing codebase stays easy to read and safe to change.",
      work: ["Service design", "TypeScript migration", "Refactoring"],
      tools: ["NestJS", "TypeScript", "Prisma", "Jest"],
    },
    {
      title: "Real-time and event-driven",
      body: "Live updates, queues and background jobs that keep working when one part of the system slows down.",
      work: ["Real-time features", "Queues and jobs", "Event handling"],
      tools: ["Socket.IO", "Redis", "RabbitMQ", "GraphQL"],
    },
    {
      title: "Lean, current dependencies",
      body: "Every package chosen on purpose, kept on supported versions and scanned before it ships.",
      work: ["Dependency upgrades", "Node.js LTS upgrades", "Security fixes"],
      tools: ["pnpm", "npm", "Node.js", "GitHub Actions"],
    },
  ],

  roles: [
    {
      title: "Backend Architect",
      body: "Sets the shape of your Node.js services: boundaries, data, performance budgets and the standards the team builds to.",
      skills: ["Node.js", "NestJS", "PostgreSQL", "TypeScript"],
      part: "Architecture",
      photo: { image: r1, alt: "A developer works across two monitors full of code in a dim room." },
    },
    {
      title: "Node.js Specialist",
      body: "Ships features end to end in your services, from the endpoint to the query, with the tests alongside.",
      skills: ["Express", "Fastify", "Prisma", "TypeScript"],
      part: "Core delivery",
      photo: { image: r2, alt: "A woman in a mustard cardigan works on a laptop at a desk." },
    },
    {
      title: "API Engineer",
      body: "Designs and builds the REST and GraphQL APIs your apps and partners depend on, documented and versioned.",
      skills: ["GraphQL", "REST", "OpenAPI", "NestJS"],
      part: "Integration",
      photo: { image: r3, alt: "Two women work through something together at a laptop in an office." },
    },
    {
      title: "Real-time Engineer",
      body: "Builds the live updates, queues and background jobs that keep your product responsive under load.",
      skills: ["Socket.IO", "Redis", "RabbitMQ", "Node.js"],
      part: "Real-time",
      photo: { image: r4, alt: "A developer in headphones studies his laptop screen at a cafe table." },
    },
  ],

  capabilities: [
    {
      label: "Build",
      icon: "zap",
      title: "Build Node.js services",
      body: "Node.js developers who build fast APIs, services and background workers.",
      chips: ["Node.js", "NestJS", "Express"],
    },
    {
      label: "Integrate",
      icon: "plug",
      title: "Connect your systems",
      body: "Specialists who connect your services to databases, queues, payments and third-party APIs.",
      chips: ["REST and GraphQL", "PostgreSQL", "Redis"],
    },
    {
      label: "Platform",
      icon: "cloud",
      title: "Deploy securely",
      body: "Engineers who ship containers safely through your pipeline and watch latency after release.",
      chips: ["Docker", "CI/CD", "Observability"],
    },
  ],

  examples: [
    {
      client: "US product company",
      model: "Dedicated product pod",
      title: "Node.js API team",
      body: "We provided Node.js developers to build the API behind a critical product launch and set up reliable delivery workflows.",
      roles: ["Backend Architect", "Node.js Specialist", "Delivery Lead"],
      stack: ["Node.js", "TypeScript", "NestJS", "PostgreSQL"],
      outcomes: [
        { value: "Faster", label: "feature release cycles" },
        { value: "Reliable", label: "production deployments" },
      ],
    },
    {
      client: "US enterprise platform",
      model: "Architecture and delivery",
      title: "Service performance overhaul",
      body: "We added specialists to find the slow paths in a busy platform’s services, fix them and move it to a current Node.js release.",
      roles: ["Node.js Specialist", "Platform Engineer", "QA Engineer"],
      stack: ["Node.js", "Fastify", "Redis", "Docker"],
      outcomes: [
        { value: "Lower", label: "API latency" },
        { value: "Current", label: "runtime versions" },
      ],
    },
    {
      client: "US financial services",
      model: "Augmented squad",
      title: "Secure payment services",
      body: "We placed Node.js developers inside the client’s strict security and compliance workflow to ship new payment services.",
      roles: ["Backend Architect", "Security Engineer", "API Engineer"],
      stack: ["Node.js", "TypeScript", "Express", "PostgreSQL"],
      outcomes: [
        { value: "Compliant", label: "service releases" },
        { value: "Seamless", label: "team integration" },
      ],
    },
  ],

  skillsAnswer:
    "Backend architecture, Node.js with Express, NestJS or Fastify, TypeScript, REST and GraphQL APIs, databases and caching, real-time features, performance tuning and testing.",

  /* Questions about this skill, asked first in the FAQ. Drafts, to be
     reworked; the four about how hiring works are shared (hire-copy.ts). */
  faqs: [
    {
      q: "Express, NestJS or Fastify?",
      a: "Whichever fits the service. NestJS for large teams that want structure, Fastify where raw speed matters, Express where it already runs.",
    },
    {
      q: "Can they fix a slow API?",
      a: "Usually. We profile first: blocking work on the event loop, slow queries and chatty calls are the common causes, and each has a known fix.",
    },
    {
      q: "Do they work in TypeScript?",
      a: "By default. Strict types on new code, and a gradual path for JavaScript services you already run.",
    },
    {
      q: "What about serverless?",
      a: "Yes. They build functions as readily as long-running services, and will tell you when a container is the better fit.",
    },
  ],

  photos: {
    ways: [
      { image: ways, alt: "A developer in a black t-shirt writes code on a laptop at a desk." },
      { image: terminal, alt: "A developer with headphones works in a terminal across two monitors.", focus: "18% 50%" },
      { image: load, alt: "Two engineers watch a load test on a monitor in a dim room.", focus: "50% 40%" },
    ],
    steps: { image: steps, alt: "Two men talk through a project at a table with laptops in a plant-filled office." },
    faq: { image: faq, alt: "A team gathers around a laptop to review a service together.", focus: "50% 35%" },
  },
};
