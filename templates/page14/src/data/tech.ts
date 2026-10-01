import type { TechProfile } from "@/types/hire";
import hero from "@/assets/pages/p14-hero.jpg";
import ways from "@/assets/pages/p14-ways.jpg";
import team from "@/assets/pages/p14-team.jpg";
import review from "@/assets/pages/p14-review.jpg";
import r1 from "@/assets/pages/p14-r1.jpg";
import r2 from "@/assets/pages/p14-r2.jpg";
import r3 from "@/assets/pages/p14-r3.jpg";
import r4 from "@/assets/pages/p14-r4.jpg";
import steps from "@/assets/pages/p14-steps.jpg";
import faq from "@/assets/pages/p14-faq.jpg";

/* Angular developers: everything on this page that is about Angular. The
   rest of the words come from src/lib/hire-copy.ts, shared with every
   Technologies page. The examples and the skills answer are drafts; have
   them checked before launch. Photo sources are in docs/sections.md. */

export const TECH: TechProfile = {
  group: "Frontend",
  skill: "Angular",
  Skill: "Angular",
  one: "Angular developer",
  many: "Angular developers",
  people: "Engineers",
  kit: "stack",
  products: "Angular applications",

  hero: {
    lede: "Enterprise Angular developers who build and modernise large applications, from signals and standalone components to monorepos, inside your product team.",
    photo: { image: hero, alt: "An engineer with headphones works at a pair of monitors in a busy open-plan office." },
  },

  core: [
    { name: "Angular", logo: "angular", note: "Web framework" },
    { name: "TypeScript", logo: "typescript", note: "Typed code" },
    { name: "RxJS", logo: "reactivex", note: "Reactive streams" },
    { name: "NgRx", logo: "ngrx", note: "App state" },
    { name: "Nx", logo: "nx", note: "Monorepo tooling" },
    { name: "Angular Material", logo: "materialdesign", note: "UI components" },
  ],
  ecosystem: ["Angular CLI", "esbuild", "PrimeNG", "Ionic", "Jest", "Jasmine", "Cypress", "Storybook", "ESLint"],

  benefits: [
    {
      title: "Upgrades without a rewrite",
      body: "Large apps moved up one major version at a time, AngularJS included, with the product shipping between every step.",
      work: ["Version upgrades", "AngularJS migration", "Modernisation"],
      tools: ["Angular CLI", "TypeScript", "Nx", "Jest"],
    },
    {
      title: "Reactive state that scales",
      body: "Signals for local and derived state, NgRx where many features share it, and RxJS streams kept easy to read.",
      work: ["State architecture", "Signals adoption", "Refactoring"],
      tools: ["NgRx", "RxJS", "Angular", "TypeScript"],
    },
    {
      title: "Workspaces for many teams",
      body: "Monorepos with clear module boundaries, so several teams can ship from one codebase without stepping on each other.",
      work: ["Monorepo setup", "Shared libraries", "Build speed"],
      tools: ["Nx", "esbuild", "ESLint", "Jest"],
    },
    {
      title: "Consistent, accessible interfaces",
      body: "Shared components and typed forms that look and behave the same on every screen, documented and tested.",
      work: ["Component libraries", "Typed forms", "Accessibility"],
      tools: ["Angular Material", "PrimeNG", "Storybook", "Cypress"],
    },
  ],

  roles: [
    {
      title: "Angular Architect",
      body: "Sets the shape of your Angular estate: module boundaries, state, the upgrade path and the standards the team builds to.",
      skills: ["Angular", "Nx", "NgRx", "TypeScript"],
      part: "Architecture",
      photo: { image: r1, alt: "Developers work in a row at desktop monitors in a busy office." },
    },
    {
      title: "Angular Specialist",
      body: "Ships features end to end in your app, from the component and its state to the API call, with the tests alongside.",
      skills: ["Angular", "RxJS", "NgRx", "TypeScript"],
      part: "Core delivery",
      photo: { image: r2, alt: "An engineer in a white shirt works across a laptop and two monitors at his desk." },
    },
    {
      title: "Migration Engineer",
      body: "Moves AngularJS and older Angular versions forward one step at a time, keeping the app releasable throughout.",
      skills: ["AngularJS", "Angular CLI", "TypeScript", "Jest"],
      part: "Modernisation",
      photo: { image: r3, alt: "A woman reads notes at her desk beside a laptop in a bright office." },
    },
    {
      title: "UI Engineer",
      body: "Turns designs into accessible, responsive screens and keeps your shared component library in good order.",
      skills: ["Angular Material", "Storybook", "TypeScript", "Cypress"],
      part: "Interfaces",
      photo: { image: r4, alt: "Two colleagues work side by side at their desks in a bright office." },
    },
  ],

  capabilities: [
    {
      label: "Build",
      icon: "layout",
      title: "Build Angular applications",
      body: "Angular developers who build large, dependable applications and fast, API-backed screens.",
      chips: ["Angular", "TypeScript", "RxJS"],
    },
    {
      label: "Integrate",
      icon: "plug",
      title: "Connect your systems",
      body: "Specialists who connect your front end to your APIs, sign-in, data and third-party services.",
      chips: ["REST and GraphQL", "NgRx", "Sign-in and SSO"],
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
      title: "Angular application team",
      body: "We provided Angular developers to bring a critical customer portal to launch and set up reliable delivery workflows.",
      roles: ["Angular Architect", "Angular Specialist", "Delivery Lead"],
      stack: ["Angular", "TypeScript", "RxJS", "NgRx"],
      outcomes: [
        { value: "Faster", label: "feature release cycles" },
        { value: "Reliable", label: "production deployments" },
      ],
    },
    {
      client: "US enterprise platform",
      model: "Architecture and delivery",
      title: "AngularJS modernisation",
      body: "We added specialists to move a large AngularJS platform to modern Angular, route by route, without pausing releases.",
      roles: ["Migration Engineer", "Angular Architect", "QA Engineer"],
      stack: ["Angular", "TypeScript", "Nx", "Jest"],
      outcomes: [
        { value: "Current", label: "Angular version" },
        { value: "Continuous", label: "releases throughout" },
      ],
    },
    {
      client: "US financial services",
      model: "Augmented squad",
      title: "Secure feature delivery",
      body: "We placed Angular developers inside the client’s strict security and compliance workflow to ship new account features.",
      roles: ["Angular Specialist", "Security Engineer", "UI Engineer"],
      stack: ["Angular", "NgRx", "Angular Material", "Cypress"],
      outcomes: [
        { value: "Compliant", label: "feature releases" },
        { value: "Seamless", label: "team integration" },
      ],
    },
  ],

  skillsAnswer:
    "Angular architecture, version upgrades and AngularJS migration, TypeScript, RxJS, state with signals or NgRx, Nx monorepos, component libraries, testing and accessibility.",

  /* Questions about this skill, asked first in the FAQ. Drafts, to be
     reworked; the four about how hiring works are shared (hire-copy.ts). */
  faqs: [
    {
      q: "Can you upgrade us without a rewrite?",
      a: "Usually, yes. We move one major version at a time, run old and new side by side where needed, and keep releasing throughout.",
    },
    {
      q: "We still run AngularJS. Where do we start?",
      a: "With a hybrid app: the new framework boots alongside the old, and screens move across one route at a time.",
    },
    {
      q: "Signals or NgRx?",
      a: "Signals for local and derived state; NgRx where many features share state and you want its tooling. Many apps use both.",
    },
    {
      q: "Do you work in our monorepo?",
      a: "Yes. We follow your module boundaries and CI, and use affected builds so each change tests only what it touches.",
    },
  ],

  photos: {
    ways: [
      { image: ways, alt: "A developer in a grey sweater works at a desktop computer in a busy open office." },
      { image: team, alt: "An engineering team reviews a plan together around a meeting table with laptops.", focus: "50% 40%" },
      { image: review, alt: "A developer talks a colleague through a design on her monitor as the team works around them.", focus: "50% 45%" },
    ],
    steps: { image: steps, alt: "Two women talk through a project at a desk in a modern office." },
    faq: { image: faq, alt: "An engineer sketches an architecture on a whiteboard for a colleague.", focus: "60% 40%" },
  },
};
