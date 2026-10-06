import type { TechProfile } from "@pg/page13/types/hire";
import hero from "@pg/page13/assets/pages/p13-hero.jpg";
import ways from "@pg/page13/assets/pages/p13-ways.jpg";
import desk from "@pg/page13/assets/pages/p13-desk.jpg";
import pairing from "@pg/page13/assets/pages/p13-pairing.jpg";
import r1 from "@pg/page13/assets/pages/p13-r1.jpg";
import r2 from "@pg/page13/assets/pages/p13-r2.jpg";
import r3 from "@pg/page13/assets/pages/p13-r3.jpg";
import r4 from "@pg/page13/assets/pages/p13-r4.jpg";
import steps from "@pg/page13/assets/pages/p13-steps.jpg";
import faq from "@pg/page13/assets/pages/p13-faq.jpg";

/* React developers: everything on this page that is about React. The rest of
   the words come from src/lib/hire-copy.ts, shared with every Technologies
   page. The examples and the skills answer are drafts; have them checked
   before launch. Photo sources are in docs/sections.md. */

export const TECH: TechProfile = {
  group: "Frontend",
  skill: "React",
  Skill: "React",
  one: "React developer",
  many: "React developers",
  people: "Engineers",
  kit: "stack",
  products: "React products",

  hero: {
    lede: "Specialist React developers who build fast, dependable web applications, from a first MVP to an enterprise platform, inside your product team.",
    photo: { image: hero, alt: "A frontend developer writes code across two large monitors at her desk." },
  },

  core: [
    { name: "React", logo: "react", note: "UI library" },
    { name: "Next.js", logo: "nextdotjs", note: "React framework" },
    { name: "TypeScript", logo: "typescript", note: "Typed code" },
    { name: "Redux", logo: "redux", note: "App state" },
    { name: "Zustand", note: "Light state" },
    { name: "Tailwind CSS", logo: "tailwindcss", note: "Styling" },
  ],
  ecosystem: ["Vite", "React Query", "React Router", "Jest", "Testing Library", "Storybook", "Playwright", "Vercel"],

  benefits: [
    {
      title: "Fast, responsive interfaces",
      body: "Interfaces that stay quick as the product grows: lean renders, code splitting, and Core Web Vitals checked on every release.",
      work: ["Feature development", "Performance tuning", "Web Vitals"],
      tools: ["React", "Next.js", "Vite", "Lighthouse"],
    },
    {
      title: "Reusable component systems",
      body: "Components your teams build once and use everywhere, documented, tested and consistent across every screen.",
      work: ["Component libraries", "Design systems", "Accessibility"],
      tools: ["Storybook", "TypeScript", "Tailwind CSS", "Figma"],
    },
    {
      title: "The whole React ecosystem",
      body: "Engineers who know which library fits the job, from routing and data fetching to forms and testing, and when to leave one out.",
      work: ["Platform scaling", "Library upgrades", "Modernisation"],
      tools: ["React Query", "React Router", "Vite", "Jest"],
    },
    {
      title: "Clean state management",
      body: "State that’s easy to follow: server data cached where it’s used, shared state only where it earns its place.",
      work: ["State architecture", "API integration", "Refactoring"],
      tools: ["Redux", "Zustand", "React Query", "TypeScript"],
    },
  ],

  roles: [
    {
      title: "Frontend Architect",
      body: "Sets the shape of your React app: rendering, state, performance budgets and the standards the team builds to.",
      skills: ["React", "Next.js", "TypeScript", "Redux"],
      part: "Architecture",
      photo: { image: r1, alt: "A developer in a grey shirt writes code on a wide curved monitor beside a laptop." },
    },
    {
      title: "React Specialist",
      body: "Ships features end to end in your codebase, from the component to the API call, with the tests alongside.",
      skills: ["Next.js", "Redux", "Zustand", "TypeScript"],
      part: "Core delivery",
      photo: { image: r2, alt: "A woman with curly hair works on a laptop at a table in a bright, airy room." },
    },
    {
      title: "UI Engineer",
      body: "Turns designs into accessible, responsive interfaces that look and behave right on every screen.",
      skills: ["TypeScript", "Tailwind CSS", "Storybook", "Testing Library"],
      part: "Interfaces",
      photo: { image: r3, alt: "Two women work through a problem together at a laptop by a window covered in sticky notes." },
    },
    {
      title: "Design System Engineer",
      body: "Builds and runs your design system: the shared components, tokens and documentation every team relies on.",
      skills: ["React", "Storybook", "Figma", "Tailwind CSS"],
      part: "Design system",
      photo: { image: r4, alt: "A developer with long hair thinks through code at a laptop and monitor." },
    },
  ],

  capabilities: [
    {
      label: "Build",
      icon: "layout",
      title: "Build React applications",
      body: "React developers who build robust applications and fast, API-backed experiences.",
      chips: ["React", "Next.js", "Redux"],
    },
    {
      label: "Integrate",
      icon: "plug",
      title: "Connect your systems",
      body: "Specialists who connect your front end to your APIs, sign-in, data and third-party services.",
      chips: ["REST and GraphQL", "React Query", "TypeScript"],
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
      title: "React application team",
      body: "We provided React developers to speed up a critical product launch and set up reliable delivery workflows.",
      roles: ["Frontend Architect", "React Specialist", "Delivery Lead"],
      stack: ["React", "Next.js", "Redux", "Zustand"],
      outcomes: [
        { value: "Faster", label: "feature release cycles" },
        { value: "Reliable", label: "production deployments" },
      ],
    },
    {
      client: "US enterprise platform",
      model: "Architecture and delivery",
      title: "Core React modernisation",
      body: "We added specialists to modernise the platform’s front-end architecture and pay down its technical debt.",
      roles: ["React Specialist", "Platform Engineer", "QA Engineer"],
      stack: ["Next.js", "Redux", "Zustand", "TypeScript"],
      outcomes: [
        { value: "Modern", label: "architecture standards" },
        { value: "Reduced", label: "technical debt" },
      ],
    },
    {
      client: "US financial services",
      model: "Augmented squad",
      title: "Secure feature delivery",
      body: "We placed React developers inside the client’s strict security and compliance workflow to ship new capabilities.",
      roles: ["Frontend Architect", "Security Engineer", "Data Engineer"],
      stack: ["Redux", "Zustand", "TypeScript", "Tailwind CSS"],
      outcomes: [
        { value: "Compliant", label: "feature releases" },
        { value: "Seamless", label: "team integration" },
      ],
    },
  ],

  skillsAnswer:
    "Frontend architecture, React and Next.js, TypeScript, state with Redux or Zustand, design systems, performance tuning, testing and accessibility.",

  /* Questions about this skill, asked first in the FAQ. Drafts, to be
     reworked; the four about how hiring works are shared (hire-copy.ts). */
  faqs: [
    {
      q: "Do your developers work in Next.js too?",
      a: "Yes. Most of our React work ships on Next.js, from the App Router and server components to static export.",
    },
    {
      q: "Can they take over an existing codebase?",
      a: "Yes. The first week is a read-through: the component tree, state, tests and bundle, then a short list of fixes by impact.",
    },
    {
      q: "How do you keep the app fast as it grows?",
      a: "Budgets in CI. Bundle size and Lighthouse run on every pull request, so a slow change is caught before it merges.",
    },
    {
      q: "Which state library do you use?",
      a: "The lightest one that fits: local state first, React Query for server data, and Redux only where shared state earns it.",
    },
  ],

  photos: {
    ways: [
      { image: ways, alt: "A developer in glasses works on code across a monitor and a laptop by a window." },
      { image: desk, alt: "A developer studies a component layout on his monitor at a home-office desk.", focus: "62% 30%" },
      { image: pairing, alt: "Two developers pair on code across a laptop and a pair of monitors.", focus: "50% 45%" },
    ],
    steps: { image: steps, alt: "A man and a woman talk and smile over a laptop at a meeting table." },
    faq: { image: faq, alt: "A senior developer points out a change on a colleague’s monitor.", focus: "50% 40%" },
  },
};
