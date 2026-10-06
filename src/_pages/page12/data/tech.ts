import type { TechProfile } from "@pg/page12/types/hire";
import hero from "@pg/page12/assets/pages/p12-hero.jpg";
import ways from "@pg/page12/assets/pages/p12-ways.jpg";
import board from "@pg/page12/assets/pages/p12-board.jpg";
import stakeholders from "@pg/page12/assets/pages/p12-stakeholders.jpg";
import r1 from "@pg/page12/assets/pages/p12-r1.jpg";
import r2 from "@pg/page12/assets/pages/p12-r2.jpg";
import r3 from "@pg/page12/assets/pages/p12-r3.jpg";
import r4 from "@pg/page12/assets/pages/p12-r4.jpg";
import steps from "@pg/page12/assets/pages/p12-steps.jpg";
import faq from "@pg/page12/assets/pages/p12-faq.jpg";

/* Business analysts: everything on this page that is about business
   analysis. The rest of the words come from src/lib/hire-copy.ts, shared
   with every Technologies page. The examples and the skills answer are
   drafts; have them checked before launch. Photo sources are in
   docs/sections.md. */

export const TECH: TechProfile = {
  group: "Product & experience",
  crumb: "Business analysts",
  skill: "business analysis",
  Skill: "Business analysis",
  one: "business analyst",
  many: "business analysts",
  people: "Analysts",
  kit: "toolkit",
  products: "products and services",

  hero: {
    lede: "Experienced business analysts who turn what stakeholders need into clear requirements and better processes, from a first MVP to an enterprise platform.",
    photo: { image: hero, alt: "A business analyst presents charts on a screen to colleagues around a meeting table." },
  },

  core: [
    { name: "Jira", logo: "jira", note: "Stories and backlog" },
    { name: "Confluence", logo: "confluence", note: "Specifications" },
    { name: "Miro", logo: "miro", note: "Workshops" },
    { name: "Lucid", logo: "lucid", note: "Process maps" },
    { name: "Camunda", logo: "camunda", note: "BPMN models" },
    { name: "Power BI", note: "Report checks" },
  ],
  ecosystem: ["diagrams.net", "Figma", "Notion", "Excel", "Google Sheets", "SQL", "Looker", "Metabase", "Loom"],

  benefits: [
    {
      title: "Requirements engineers can build",
      body: "Stakeholder needs written up as stories with clear acceptance criteria, so nothing is left to guesswork in the sprint.",
      work: ["Requirements elicitation", "User stories", "Acceptance criteria"],
      tools: ["Jira", "Confluence", "Miro"],
    },
    {
      title: "Processes mapped as they run",
      body: "How the work really flows across people and systems, mapped end to end, with the delays and handoffs fixed before code is written.",
      work: ["Process mapping", "Gap analysis", "Process redesign"],
      tools: ["Lucid", "Camunda", "diagrams.net", "Miro"],
    },
    {
      title: "Stakeholders in step",
      body: "Who decides and who needs to know, mapped early, with trade-offs taken to the right person and every decision recorded.",
      work: ["Stakeholder mapping", "Workshops", "Decision logs"],
      tools: ["Miro", "Confluence", "Notion", "Loom"],
    },
    {
      title: "Requirements checked against data",
      body: "Enough SQL and reporting to test a requirement against the real data and validate a report before it ships.",
      work: ["Data analysis", "Report validation", "UAT support"],
      tools: ["SQL", "Power BI", "Looker", "Excel"],
    },
  ],

  roles: [
    {
      title: "Lead Business Analyst",
      body: "Runs the analysis for a product or programme: elicits the needs, owns the requirements and keeps stakeholders aligned.",
      skills: ["Elicitation", "User stories", "Jira", "Confluence"],
      part: "Requirements",
      photo: { image: r1, alt: "Two colleagues discuss a chart pinned to a whiteboard." },
    },
    {
      title: "Business Process Analyst",
      body: "Maps how work flows today, finds where it stalls and designs the process your new system should support.",
      skills: ["Process mapping", "BPMN", "Camunda", "Lucid"],
      part: "Process",
      photo: { image: r2, alt: "Two men work through a diagram on a flip chart." },
    },
    {
      title: "Technical Business Analyst",
      body: "Specifies integrations, APIs and data flows in terms both the business and your engineers can sign off.",
      skills: ["API specs", "Data mapping", "SQL", "Confluence"],
      part: "Integration",
      photo: { image: r3, alt: "A woman sketches on a whiteboard while her team follows along at laptops." },
    },
    {
      title: "Data Business Analyst",
      body: "Defines the metrics and reports the business needs, checks them against the data and supports testing before release.",
      skills: ["SQL", "Power BI", "Looker", "Excel"],
      part: "Data",
      photo: { image: r4, alt: "Two colleagues work through a process diagram on a whiteboard, one holding a laptop." },
    },
  ],

  capabilities: [
    {
      label: "Elicit",
      icon: "pointer",
      title: "Understand the need",
      body: "Analysts who run interviews and workshops and find the real need behind each request.",
      chips: ["Interviews", "Workshops", "Miro"],
    },
    {
      label: "Specify",
      icon: "document",
      title: "Write it down clearly",
      body: "Specialists who turn needs into stories, process maps and specifications your engineers can build from.",
      chips: ["User stories", "Process maps", "Jira"],
    },
    {
      label: "Validate",
      icon: "shield",
      title: "Check it works",
      body: "Analysts who test the result against the requirements and the data, and support sign-off before release.",
      chips: ["UAT", "Data checks", "Sign-off"],
    },
  ],

  help: [
    {
      icon: "pointer",
      title: "Understand the business",
      body: "Interviews, workshops and a stakeholder map that show what the business needs and who decides.",
      covers: "Elicitation and stakeholders",
    },
    {
      icon: "diagram",
      title: "Map and specify",
      body: "Processes mapped as they run, and requirements written as stories with clear acceptance criteria.",
      covers: "Processes, stories and criteria",
    },
    {
      icon: "plug",
      title: "Support the build",
      body: "Questions answered inside the sprint, changes assessed and the backlog kept in step with decisions.",
      covers: "Refinement, changes and decisions",
    },
    {
      icon: "shield",
      title: "Validate and improve",
      body: "Acceptance testing, data checks and a look at how the new process performs once it is live.",
      covers: "UAT, data checks and follow-up",
    },
  ],

  examples: [
    {
      client: "US product company",
      model: "Dedicated product pod",
      title: "Requirements for a launch",
      body: "We provided business analysts to turn a critical launch’s scope into clear stories and keep stakeholders aligned to release.",
      roles: ["Lead Business Analyst", "Product Manager", "Delivery Lead"],
      stack: ["Jira", "Confluence", "Miro", "Figma"],
      outcomes: [
        { value: "Clearer", label: "requirements" },
        { value: "Fewer", label: "late changes" },
      ],
    },
    {
      client: "US enterprise platform",
      model: "Architecture and delivery",
      title: "Process and systems redesign",
      body: "We added specialists to map the platform’s core processes and specify the integrations needed to modernise them.",
      roles: ["Business Process Analyst", "Technical Business Analyst", "Solutions Architect"],
      stack: ["Lucid", "Camunda", "Confluence", "Jira"],
      outcomes: [
        { value: "Simpler", label: "core processes" },
        { value: "Reduced", label: "manual handoffs" },
      ],
    },
    {
      client: "US financial services",
      model: "Augmented squad",
      title: "Regulatory change delivery",
      body: "We placed business analysts inside the client’s compliance workflow to specify and validate regulatory changes.",
      roles: ["Lead Business Analyst", "Data Business Analyst", "QA Engineer"],
      stack: ["Jira", "Confluence", "SQL", "Power BI"],
      outcomes: [
        { value: "Compliant", label: "feature releases" },
        { value: "Seamless", label: "team integration" },
      ],
    },
  ],

  skillsAnswer:
    "Requirements elicitation, user stories and acceptance criteria, process mapping and BPMN, stakeholder management, integration and data specifications, SQL and report validation, and UAT.",

  /* Questions about this skill, asked first in the FAQ. Drafts, to be
     reworked; the four about how hiring works are shared (hire-copy.ts). */
  faqs: [
    {
      q: "Do we need a BA if we have a PM?",
      a: "Often, yes. The PM decides what matters; the analyst works out exactly how it should behave and writes it down.",
    },
    {
      q: "Can they start on our existing backlog?",
      a: "Yes. Most start by tidying it: splitting epics, adding acceptance criteria and flagging what nobody has decided.",
    },
    {
      q: "Do they work with data?",
      a: "Enough SQL to check the data behind a requirement and validate a report before it ships.",
    },
    {
      q: "What if stakeholders disagree?",
      a: "They map who decides, bring the trade-off to that person with evidence, and record the decision.",
    },
  ],

  photos: {
    ways: [
      { image: ways, alt: "An analyst works through charts and graphs on a laptop at a desk." },
      { image: board, alt: "An analyst maps work on a whiteboard of sticky notes in an orange meeting room.", focus: "40% 50%" },
      { image: stakeholders, alt: "Two analysts discuss a wall of sticky notes in a bright office.", focus: "50% 40%" },
    ],
    steps: { image: steps, alt: "Two colleagues review notes together at a table beside a laptop." },
    faq: { image: faq, alt: "An analyst writes on sticky notes on a dark wall during a workshop.", focus: "60% 40%" },
  },
};
