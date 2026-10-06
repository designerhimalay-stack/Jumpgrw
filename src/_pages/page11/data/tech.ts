import type { TechProfile } from "@pg/page11/types/hire";
import hero from "@pg/page11/assets/pages/p11-hero.jpg";
import ways from "@pg/page11/assets/pages/p11-ways.jpg";
import whiteboard from "@pg/page11/assets/pages/p11-whiteboard.jpg";
import review from "@pg/page11/assets/pages/p11-review.jpg";
import r1 from "@pg/page11/assets/pages/p11-r1.jpg";
import r2 from "@pg/page11/assets/pages/p11-r2.jpg";
import r3 from "@pg/page11/assets/pages/p11-r3.jpg";
import r4 from "@pg/page11/assets/pages/p11-r4.jpg";
import steps from "@pg/page11/assets/pages/p11-steps.jpg";
import faq from "@pg/page11/assets/pages/p11-faq.jpg";

/* UX/UI designers: everything on this page that is about research, product
   design and design systems. The rest of the words come from
   src/lib/hire-copy.ts, shared with every Technologies page. The examples
   and the skills answer are drafts; have them checked before launch. Photo
   sources are in docs/sections.md. */

export const TECH: TechProfile = {
  group: "Product & experience",
  crumb: "UX/UI designers",
  skill: "UX/UI",
  Skill: "UX/UI",
  one: "UX/UI designer",
  many: "UX/UI designers",
  people: "Designers",
  kit: "toolkit",
  products: "digital products",

  hero: {
    lede: "Specialist UX/UI designers who research first, design in systems and hand over work that ships as designed, from a first MVP to an enterprise platform.",
    photo: { image: hero, alt: "A designer works on a web page layout at her desk, colour swatches printed beside her laptop." },
  },

  core: [
    { name: "Figma", logo: "figma", note: "Interface design" },
    { name: "Framer", logo: "framer", note: "Interactive prototypes" },
    { name: "Storybook", logo: "storybook", note: "Component docs" },
    { name: "Maze", logo: "maze", note: "Usability testing" },
    { name: "Dovetail", logo: "dovetail", note: "Research repository" },
    { name: "Miro", logo: "miro", note: "Workshops and journeys" },
  ],
  ecosystem: ["Sketch", "Webflow", "ProtoPie", "Zeplin", "Hotjar", "Optimal Workshop", "Notion", "Jira"],

  benefits: [
    {
      title: "Research before pixels",
      body: "Interviews, usability tests and clear synthesis, so every design decision starts from what users actually do.",
      work: ["User interviews", "Usability testing", "Journey mapping"],
      tools: ["Dovetail", "Maze", "Miro", "Hotjar"],
    },
    {
      title: "Design systems, not just screens",
      body: "Tokens, components and documentation kept in step with the code, so one change reaches every screen.",
      work: ["Design tokens", "Component libraries", "Documentation"],
      tools: ["Figma", "Storybook", "Zeplin"],
    },
    {
      title: "Accessible by default",
      body: "Contrast, focus, motion and screen readers checked from the first frame, not patched in after launch.",
      work: ["WCAG reviews", "Inclusive patterns", "Accessibility audits"],
      tools: ["Figma", "Storybook", "Maze"],
    },
    {
      title: "Hand-offs that ship as designed",
      body: "Specced components, prototypes engineers can follow and a designer in review until the feature is live.",
      work: ["Prototyping", "Design specs", "Design QA"],
      tools: ["Figma", "Framer", "ProtoPie", "Jira"],
    },
  ],

  roles: [
    {
      title: "Product Designer",
      body: "Owns the experience of a product area, from the first flow to the final screen, working closely with your PM and engineers.",
      skills: ["Figma", "User flows", "Prototyping", "Framer"],
      part: "Product design",
      photo: { image: r1, alt: "A designer in glasses sketches wireframes beside sticky notes and a laptop." },
    },
    {
      title: "UX Researcher",
      body: "Plans and runs the research, from interviews to usability tests, and turns what users said into a brief the team can act on.",
      skills: ["User interviews", "Usability testing", "Dovetail", "Maze"],
      part: "Research",
      photo: { image: r2, alt: "A young designer in a hoodie works with a stylus on a touchscreen computer in an office." },
    },
    {
      title: "UI Designer",
      body: "Designs polished, accessible interfaces that look and behave right on every screen size.",
      skills: ["Figma", "Visual design", "Accessibility", "Motion"],
      part: "Interfaces",
      photo: { image: r3, alt: "A woman with red hair writes feedback notes on a whiteboard." },
    },
    {
      title: "Design System Lead",
      body: "Builds and runs your design system: the tokens, components and guidelines every team designs and builds with.",
      skills: ["Figma", "Design tokens", "Storybook", "Documentation"],
      part: "Design system",
      photo: { image: r4, alt: "A woman sketches a wireframe on a large sheet of paper on the wall." },
    },
  ],

  capabilities: [
    {
      label: "Research",
      icon: "pointer",
      title: "Understand your users",
      body: "Designers who run interviews and usability tests and turn what they learn into clear design briefs.",
      chips: ["Interviews", "Usability tests", "Dovetail"],
    },
    {
      label: "Design",
      icon: "layout",
      title: "Design the experience",
      body: "Specialists who design flows, interfaces and prototypes inside your design system, or build one with you.",
      chips: ["Figma", "Prototypes", "Design systems"],
    },
    {
      label: "Deliver",
      icon: "devices",
      title: "Hand over and ship",
      body: "Designers who spec the work for engineers, review the build and check it on every device before release.",
      chips: ["Design specs", "Design QA", "Accessibility"],
    },
  ],

  help: [
    {
      icon: "pointer",
      title: "Understand your users",
      body: "Interviews, analytics and usability tests that show where the experience works and where it fails.",
      covers: "Research, journeys and insights",
    },
    {
      icon: "layout",
      title: "Design the experience",
      body: "Flows, interfaces and prototypes built from your design system and tested with real users.",
      covers: "Flows, interfaces and prototypes",
    },
    {
      icon: "plug",
      title: "Hand over and build",
      body: "Specced components and tokens engineers can use, with a designer in review until the feature ships.",
      covers: "Specs, tokens and design QA",
    },
    {
      icon: "sync",
      title: "Test and refine",
      body: "Usability checks and data after launch, so the design keeps improving release by release.",
      covers: "Testing, accessibility and iteration",
    },
  ],

  examples: [
    {
      client: "US product company",
      model: "Dedicated product pod",
      title: "Product design for a launch",
      body: "We provided UX/UI designers to research, design and test a critical product launch alongside the engineering team.",
      roles: ["Product Designer", "UX Researcher", "Delivery Lead"],
      stack: ["Figma", "Maze", "Dovetail", "Framer"],
      outcomes: [
        { value: "Validated", label: "core user flows" },
        { value: "Faster", label: "design hand-off" },
      ],
    },
    {
      client: "US enterprise platform",
      model: "Architecture and delivery",
      title: "Design system rebuild",
      body: "We added specialists to bring scattered interfaces into one design system shared by design and engineering.",
      roles: ["Design System Lead", "UI Designer", "Frontend Engineer"],
      stack: ["Figma", "Storybook", "Zeplin", "Jira"],
      outcomes: [
        { value: "Consistent", label: "interfaces" },
        { value: "Reduced", label: "design rework" },
      ],
    },
    {
      client: "US financial services",
      model: "Augmented squad",
      title: "Accessible customer journeys",
      body: "We placed designers inside the client’s accessibility and compliance workflow to redesign key customer journeys.",
      roles: ["Product Designer", "UI Designer", "QA Engineer"],
      stack: ["Figma", "Maze", "Storybook", "Miro"],
      outcomes: [
        { value: "Accessible", label: "customer journeys" },
        { value: "Seamless", label: "team integration" },
      ],
    },
  ],

  skillsAnswer:
    "Product design, user research and usability testing, UI and visual design, interaction design and prototyping, design systems, accessibility, and design hand-off and QA.",

  /* Questions about this skill, asked first in the FAQ. Drafts, to be
     reworked; the four about how hiring works are shared (hire-copy.ts). */
  faqs: [
    {
      q: "Do your designers do research too?",
      a: "Yes. Interviews, usability tests and synthesis are part of the job, not a separate team.",
    },
    {
      q: "Can they work inside our design system?",
      a: "Yes. They extend what you have: tokens, components and docs, kept in step with the code.",
    },
    {
      q: "How do they hand over to engineers?",
      a: "Specced components, tokens engineers can import, and a designer in review until it ships.",
    },
    {
      q: "What about accessibility?",
      a: "Built in from the first frame: contrast, focus, motion and screen readers, checked before handover.",
    },
  ],

  photos: {
    ways: [
      { image: ways, alt: "A designer in a cap sketches on a tablet with a stylus at his desk." },
      { image: whiteboard, alt: "A designer maps a user flow on a whiteboard.", focus: "35% 40%" },
      { image: review, alt: "Two designers review a screen together at a laptop.", focus: "50% 45%" },
    ],
    steps: { image: steps, alt: "Two colleagues discuss a project over a tablet in a modern office." },
    faq: { image: faq, alt: "A team sorts sticky notes on a glass wall during a research session.", focus: "50% 40%" },
  },
};
