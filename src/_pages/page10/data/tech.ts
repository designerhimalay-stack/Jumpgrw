import type { TechProfile } from "@pg/page10/types/hire";
import hero from "@pg/page10/assets/pages/p10-hero.jpg";
import ways from "@pg/page10/assets/pages/p10-ways.jpg";
import week from "@pg/page10/assets/pages/p10-week.jpg";
import metrics from "@pg/page10/assets/pages/p10-metrics.jpg";
import r1 from "@pg/page10/assets/pages/p10-r1.jpg";
import r2 from "@pg/page10/assets/pages/p10-r2.jpg";
import r3 from "@pg/page10/assets/pages/p10-r3.jpg";
import r4 from "@pg/page10/assets/pages/p10-r4.jpg";
import steps from "@pg/page10/assets/pages/p10-steps.jpg";
import faq from "@pg/page10/assets/pages/p10-faq.jpg";

/* Product managers: everything on this page that is about product
   management. The rest of the words come from src/lib/hire-copy.ts, shared
   with every Technologies page. The examples and the skills answer are
   drafts; have them checked before launch. Photo sources are in
   docs/sections.md. */

export const TECH: TechProfile = {
  group: "Product & experience",
  crumb: "Product managers",
  skill: "product management",
  Skill: "Product management",
  one: "product manager",
  many: "product managers",
  people: "Product managers",
  kit: "toolkit",
  products: "products",

  hero: {
    lede: "Experienced product managers who run discovery, own the roadmap and measure what moved, from a first MVP to an enterprise platform, inside your product team.",
    photo: { image: hero, alt: "A product manager presents charts on a screen to her team in a bright meeting room." },
  },

  core: [
    { name: "Jira", logo: "jira", note: "Backlog and sprints" },
    { name: "Productboard", note: "Roadmaps" },
    { name: "Confluence", logo: "confluence", note: "Specs and decisions" },
    { name: "Figma", logo: "figma", note: "Flow reviews" },
    { name: "Mixpanel", logo: "mixpanel", note: "Product analytics" },
    { name: "Miro", logo: "miro", note: "Discovery workshops" },
  ],
  ecosystem: ["Linear", "Notion", "Amplitude", "PostHog", "Google Analytics", "Hotjar", "Loom", "Asana", "Airtable"],

  benefits: [
    {
      title: "Discovery before delivery",
      body: "Customer interviews, problem framing and quick tests that settle what to build before engineers spend a sprint on it.",
      work: ["Customer interviews", "Problem framing", "Prototype tests"],
      tools: ["Miro", "Figma", "Loom", "Airtable"],
    },
    {
      title: "Roadmaps tied to outcomes",
      body: "A roadmap of results the team is chasing, each with the number that proves it, rather than a list of features.",
      work: ["Product strategy", "Roadmapping", "Prioritisation"],
      tools: ["Productboard", "Jira", "Confluence", "Notion"],
    },
    {
      title: "Delivery that stays on course",
      body: "Clear stories, steady rituals and early warnings when scope or timing slips, so engineering always knows what matters next.",
      work: ["Backlog management", "Sprint rituals", "Release planning"],
      tools: ["Jira", "Linear", "Confluence"],
    },
    {
      title: "Decisions backed by data",
      body: "Funnels, cohorts and experiments that show what each release changed, and what the team should try next.",
      work: ["Product metrics", "Experiments", "Stakeholder reporting"],
      tools: ["Mixpanel", "Amplitude", "PostHog", "Google Analytics"],
    },
  ],

  roles: [
    {
      title: "Senior Product Manager",
      body: "Owns a product area end to end: sets the outcomes, runs discovery and keeps the roadmap honest with your leadership.",
      skills: ["Product strategy", "Discovery", "Roadmapping", "Productboard"],
      part: "Strategy",
      photo: { image: r1, alt: "A woman with red hair smiles as she points to sticky notes on a wall." },
    },
    {
      title: "Technical Product Manager",
      body: "Works closely with engineering on APIs, platforms and integrations, turning technical trade-offs into clear product decisions.",
      skills: ["APIs", "Platform roadmaps", "Jira", "Confluence"],
      part: "Platform",
      photo: { image: r2, alt: "Two colleagues sort sticky notes on a window during a planning session." },
    },
    {
      title: "Growth Product Manager",
      body: "Finds the levers behind activation, retention and revenue, then runs the experiments that move them.",
      skills: ["Experiments", "Mixpanel", "Amplitude", "PostHog"],
      part: "Growth",
      photo: { image: r3, alt: "A man studies a wall covered in yellow sticky notes." },
    },
    {
      title: "Product Owner",
      body: "Runs the backlog day to day: writes the stories, answers the team’s questions and accepts the work as it lands.",
      skills: ["Backlog management", "User stories", "Scrum", "Jira"],
      part: "Delivery",
      photo: { image: r4, alt: "A woman in glasses places sticky notes on a dark planning wall." },
    },
  ],

  capabilities: [
    {
      label: "Discover",
      icon: "pointer",
      title: "Find the right problem",
      body: "Product managers who talk to customers, frame the problem and test ideas before they reach the backlog.",
      chips: ["Interviews", "Prototypes", "Miro"],
    },
    {
      label: "Deliver",
      icon: "calendar",
      title: "Lead the roadmap",
      body: "Specialists who turn strategy into a roadmap and a backlog your engineers and designers can deliver.",
      chips: ["Roadmaps", "User stories", "Jira"],
    },
    {
      label: "Measure",
      icon: "diagram",
      title: "Prove what moved",
      body: "Product managers who measure every release, report to stakeholders and decide what comes next.",
      chips: ["Product metrics", "Experiments", "Mixpanel"],
    },
  ],

  help: [
    {
      icon: "pointer",
      title: "Find the right problem",
      body: "Customer conversations, data and quick tests that show which problem is worth solving first.",
      covers: "Research, framing and bets",
    },
    {
      icon: "diagram",
      title: "Shape the roadmap",
      body: "Outcomes, priorities and a roadmap your leadership agrees with and your team understands.",
      covers: "Strategy, priorities and roadmap",
    },
    {
      icon: "calendar",
      title: "Lead the delivery",
      body: "Clear stories, steady rituals and close work with design and engineering until the release is live.",
      covers: "Backlog, rituals and release",
    },
    {
      icon: "sync",
      title: "Measure and iterate",
      body: "Metrics and experiments after launch, so each release teaches the team what to build next.",
      covers: "Metrics, learning and next steps",
    },
  ],

  examples: [
    {
      client: "US product company",
      model: "Dedicated product pod",
      title: "Product lead for a launch",
      body: "We provided a product manager to take a critical launch from discovery to release and set up a steady delivery rhythm.",
      roles: ["Senior Product Manager", "Product Designer", "Delivery Lead"],
      stack: ["Productboard", "Jira", "Figma", "Mixpanel"],
      outcomes: [
        { value: "Focused", label: "launch scope" },
        { value: "Faster", label: "release cycles" },
      ],
    },
    {
      client: "US enterprise platform",
      model: "Architecture and delivery",
      title: "Platform roadmap reset",
      body: "We added product specialists to rebuild a sprawling platform roadmap around outcomes the business could measure.",
      roles: ["Technical Product Manager", "Product Owner", "Solutions Architect"],
      stack: ["Jira", "Confluence", "Productboard", "Amplitude"],
      outcomes: [
        { value: "Clearer", label: "roadmap priorities" },
        { value: "Aligned", label: "stakeholders" },
      ],
    },
    {
      client: "US financial services",
      model: "Augmented squad",
      title: "Regulated product delivery",
      body: "We placed product managers inside the client’s strict compliance workflow to plan and ship new customer features.",
      roles: ["Product Owner", "Business Analyst", "Security Engineer"],
      stack: ["Jira", "Confluence", "Figma", "Mixpanel"],
      outcomes: [
        { value: "Compliant", label: "feature releases" },
        { value: "Seamless", label: "team integration" },
      ],
    },
  ],

  skillsAnswer:
    "Product strategy, discovery and customer research, roadmapping and prioritisation, backlog ownership, technical and platform product management, growth experiments and product analytics.",

  /* Questions about this skill, asked first in the FAQ. Drafts, to be
     reworked; the four about how hiring works are shared (hire-copy.ts). */
  faqs: [
    {
      q: "Will the PM replace our product lead?",
      a: "No. They work to your product lead’s strategy and take the day-to-day: discovery, backlog, rituals and reporting.",
    },
    {
      q: "How fast can they own a roadmap?",
      a: "Usually within two sprints: the first to listen and map, the second to run the rituals themselves.",
    },
    {
      q: "Do they write the tickets or the strategy?",
      a: "Both, at the right altitude: outcomes and bets for leadership, clear stories for the team.",
    },
    {
      q: "Which tools do they need?",
      a: "Yours. They work in your tracker, docs and analytics, and set up what’s missing.",
    },
  ],

  photos: {
    ways: [
      { image: ways, alt: "A woman in a red top smiles while working on a laptop in a bright office." },
      { image: week, alt: "A product manager leads a whiteboard session with his team around a table.", focus: "50% 38%" },
      { image: metrics, alt: "Two colleagues review a product dashboard on a laptop at a shared desk.", focus: "55% 50%" },
    ],
    steps: { image: steps, alt: "A colleague leads a whiteboard session while two teammates take notes at the table." },
    faq: { image: faq, alt: "Two product managers plan the week on a whiteboard of sticky notes.", focus: "50% 45%" },
  },
};
