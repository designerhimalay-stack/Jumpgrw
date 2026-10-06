import type { TechProfile } from "@pg/page15/types/hire";
import hero from "@pg/page15/assets/pages/p15-hero.jpg";
import ways from "@pg/page15/assets/pages/p15-ways.jpg";
import feature from "@pg/page15/assets/pages/p15-feature.jpg";
import team from "@pg/page15/assets/pages/p15-team.jpg";
import r1 from "@pg/page15/assets/pages/p15-r1.jpg";
import r2 from "@pg/page15/assets/pages/p15-r2.jpg";
import r3 from "@pg/page15/assets/pages/p15-r3.jpg";
import r4 from "@pg/page15/assets/pages/p15-r4.jpg";
import steps from "@pg/page15/assets/pages/p15-steps.jpg";
import faq from "@pg/page15/assets/pages/p15-faq.jpg";

/* Full stack developers: everything on this page that is about full stack
   work. The rest of the words come from src/lib/hire-copy.ts, shared with
   every Technologies page. The examples and the skills answer are drafts;
   have them checked before launch. Photo sources are in docs/sections.md. */

export const TECH: TechProfile = {
  group: "Backend",
  skill: "full stack",
  Skill: "Full stack",
  one: "full stack developer",
  many: "full stack developers",
  people: "Engineers",
  kit: "stack",
  products: "full stack products",

  hero: {
    lede: "End-to-end engineers who design the database, build the API and ship the interface as one connected piece of work, inside your product team.",
    photo: { image: hero, alt: "A developer with headphones works on a laptop at a bright desk." },
  },

  core: [
    { name: "MERN stack", note: "React and Node" },
    { name: "MEAN stack", note: "Angular and Node" },
    { name: "Jamstack", logo: "jamstack", note: "Static-first web" },
    { name: "Serverless", logo: "serverless", note: "Managed functions" },
    { name: "REST/GraphQL", logo: "graphql", note: "API design" },
    { name: "Docker", logo: "docker", note: "Containers" },
  ],
  ecosystem: ["React", "Angular", "Vue.js", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL", "Kubernetes"],

  benefits: [
    {
      title: "Complete ownership of features",
      body: "One developer owns a feature from the table to the button, so nothing gets lost between front end and back end.",
      work: ["Feature development", "Platform scaling", "Modernisation"],
      tools: ["MERN stack", "MEAN stack", "Jamstack", "Serverless"],
    },
    {
      title: "Reduced communication overhead",
      body: "Fewer handoffs between specialists, so decisions are made once and work moves from ticket to release faster.",
      work: ["End-to-end delivery", "API and UI changes", "Bug fixing"],
      tools: ["REST/GraphQL", "Node.js", "React", "PostgreSQL"],
    },
    {
      title: "Holistic security and performance",
      body: "Engineers who see the whole request, from browser to database, and fix security and speed where the problem really is.",
      work: ["Performance tuning", "Security reviews", "Caching"],
      tools: ["Node.js", "Redis", "PostgreSQL", "Docker"],
    },
    {
      title: "Rapid prototyping",
      body: "A working version of an idea, with real data and a real interface, in days rather than sprints.",
      work: ["Prototypes", "MVP builds", "Proofs of concept"],
      tools: ["Next.js", "Serverless", "Supabase", "Vercel"],
    },
  ],

  roles: [
    {
      title: "Full Stack Engineer",
      body: "Builds features end to end in your codebase, from the schema and the API to the screen, with the tests alongside.",
      skills: ["MERN stack", "MEAN stack", "Jamstack", "Serverless"],
      part: "Core delivery",
      photo: { image: r1, alt: "A developer in glasses works across a laptop and a monitor at a busy desk." },
    },
    {
      title: "Solutions Architect",
      body: "Shapes how your application fits together: the data, the services, the APIs and the standards the team builds to.",
      skills: ["MEAN stack", "Jamstack", "Serverless", "REST/GraphQL"],
      part: "Architecture",
      photo: { image: r2, alt: "A developer focuses on code across two monitors and a laptop." },
    },
    {
      title: "Tech Lead",
      body: "Leads the developers day to day, reviews the work and keeps front end, back end and release moving together.",
      skills: ["Jamstack", "Serverless", "REST/GraphQL", "Docker"],
      part: "Technical lead",
      photo: { image: r3, alt: "Two developers work on laptops at a long wooden table in a warm brick office." },
    },
    {
      title: "Systems Engineer",
      body: "Looks after the environments, containers and pipelines your full stack application runs on.",
      skills: ["Docker", "Serverless", "Kubernetes", "CI/CD"],
      part: "Platform",
      photo: { image: r4, alt: "A woman in a red cardigan smiles at her laptop at a white desk at home." },
    },
  ],

  capabilities: [
    {
      label: "Build",
      icon: "layout",
      title: "Build full stack applications",
      body: "Full stack developers who build robust applications and fast, API-backed experiences.",
      chips: ["MERN stack", "Jamstack", "Serverless"],
    },
    {
      label: "Integrate",
      icon: "plug",
      title: "Connect your systems",
      body: "Specialists who connect your applications to your APIs, data layers and third-party services.",
      chips: ["REST and GraphQL", "MEAN stack", "Databases"],
    },
    {
      label: "Platform",
      icon: "cloud",
      title: "Deploy securely",
      body: "Engineers who ship safely through your pipeline and keep watch on production after release.",
      chips: ["Cloud platforms", "CI/CD", "Security"],
    },
  ],

  examples: [
    {
      client: "US product company",
      model: "Dedicated product pod",
      title: "Full stack application team",
      body: "We provided full stack developers to speed up a critical product launch and set up reliable delivery workflows.",
      roles: ["Full Stack Engineer", "Solutions Architect", "Delivery Lead"],
      stack: ["MERN stack", "MEAN stack", "Jamstack", "Serverless"],
      outcomes: [
        { value: "Faster", label: "feature release cycles" },
        { value: "Reliable", label: "production deployments" },
      ],
    },
    {
      client: "US enterprise platform",
      model: "Architecture and delivery",
      title: "Core full stack modernisation",
      body: "We added specialists to modernise the platform’s architecture from database to interface and pay down its technical debt.",
      roles: ["Solutions Architect", "Platform Engineer", "QA Engineer"],
      stack: ["MEAN stack", "Jamstack", "Serverless", "REST/GraphQL"],
      outcomes: [
        { value: "Modern", label: "architecture standards" },
        { value: "Reduced", label: "technical debt" },
      ],
    },
    {
      client: "US financial services",
      model: "Augmented squad",
      title: "Secure feature delivery",
      body: "We placed full stack developers inside the client’s strict security and compliance workflow to ship new capabilities.",
      roles: ["Full Stack Engineer", "Security Engineer", "Data Engineer"],
      stack: ["Jamstack", "Serverless", "REST/GraphQL", "Docker"],
      outcomes: [
        { value: "Compliant", label: "feature releases" },
        { value: "Seamless", label: "team integration" },
      ],
    },
  ],

  skillsAnswer:
    "Solutions architecture, MERN and MEAN stacks, Jamstack and serverless builds, REST and GraphQL APIs, SQL and NoSQL databases, Docker and end-to-end feature delivery.",

  /* Questions about this skill, asked first in the FAQ. Drafts, to be
     reworked; the four about how hiring works are shared (hire-copy.ts). */
  faqs: [
    {
      q: "Is one full stack developer enough?",
      a: "For a feature, often yes. For a product, we pair them with a lead and add specialists where depth matters, such as data or design.",
    },
    {
      q: "Which side are they stronger on?",
      a: "We tell you up front. Every profile shows a lean, front end or back end, and we match it to the work you have queued.",
    },
    {
      q: "Can they work in our existing stack?",
      a: "Yes. We staff to your stack, not ours, and the first week is spent reading your code, pipeline and conventions.",
    },
    {
      q: "Who handles deployment?",
      a: "They do, through your pipeline: containers, preview environments and the checks that guard a release.",
    },
  ],

  photos: {
    ways: [
      { image: ways, alt: "A developer in headphones works on code at a monitor in a bright white studio." },
      { image: feature, alt: "Two developers work through a feature together on a laptop.", focus: "62% 40%" },
      { image: team, alt: "Three developers review work together on two laptops in an open office.", focus: "50% 45%" },
    ],
    steps: { image: steps, alt: "A man explains something to two colleagues gathered around a laptop." },
    faq: { image: faq, alt: "Two developers smile as they review code together at a desk.", focus: "50% 40%" },
  },
};
