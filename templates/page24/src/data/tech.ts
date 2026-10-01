import type { TechProfile } from "@/types/hire";
import hero from "@/assets/pages/p24-hero.jpg";
import ways from "@/assets/pages/p24-ways.jpg";
import ota from "@/assets/pages/p24-ota.jpg";
import extra from "@/assets/pages/p24-extra.jpg";
import r1 from "@/assets/pages/p24-r1.jpg";
import r2 from "@/assets/pages/p24-r2.jpg";
import r3 from "@/assets/pages/p24-r3.jpg";
import r4 from "@/assets/pages/p24-r4.jpg";
import steps from "@/assets/pages/p24-steps.jpg";
import faq from "@/assets/pages/p24-faq.jpg";

/* React Native developers: everything on this page that is about React
   Native. The rest of the words come from src/lib/hire-copy.ts, shared with
   every Technologies page. The examples and the skills answer are drafts;
   have them checked before launch. Photo sources are in docs/sections.md. */

export const TECH: TechProfile = {
  group: "Mobile",
  skill: "React Native",
  Skill: "React Native",
  one: "React Native developer",
  many: "React Native developers",
  people: "Engineers",
  kit: "stack",
  products: "React Native apps",

  hero: {
    lede: "One team, one codebase, two native apps: React Native developers who ship to iOS and Android together, inside your product team.",
    photo: { image: hero, alt: "A developer tries a build on his phone, holding it in both hands." },
  },

  core: [
    { name: "React Native", logo: "react", note: "Mobile framework" },
    { name: "TypeScript", logo: "typescript", note: "Typed code" },
    { name: "Expo", logo: "expo", note: "Toolchain" },
    { name: "Redux", logo: "redux", note: "App state" },
    { name: "React Query", logo: "reactquery", note: "Server state" },
    { name: "Fastlane", logo: "fastlane", note: "Release automation" },
  ],
  ecosystem: ["React Navigation", "EAS Update", "Jest", "Testing Library", "Detox", "Firebase", "GraphQL", "Sentry", "GitHub Actions"],

  benefits: [
    {
      title: "Two apps, one codebase",
      body: "One TypeScript codebase that ships to iOS and Android together, drawing each platform’s own native controls.",
      work: ["Feature development", "Cross-platform UI", "Accessibility"],
      tools: ["React Native", "TypeScript", "Expo", "React Navigation"],
    },
    {
      title: "Fixes in hours",
      body: "JavaScript fixes ship as over-the-air updates, with native changes going through both stores on a steady release plan.",
      work: ["Over-the-air updates", "Store releases", "Release automation"],
      tools: ["EAS Update", "Fastlane", "GitHub Actions", "Sentry"],
    },
    {
      title: "Native when it counts",
      body: "Developers who drop into Swift or Kotlin for the screen or module that needs it, and keep the rest shared.",
      work: ["Native modules", "Performance tuning", "Device APIs"],
      tools: ["Swift", "Kotlin", "Expo Modules", "React Native"],
    },
    {
      title: "Clean state and data",
      body: "Server data cached where it’s used, shared state only where it earns its place, and APIs typed end to end.",
      work: ["State architecture", "API integration", "Refactoring"],
      tools: ["Redux", "React Query", "GraphQL", "TypeScript"],
    },
  ],

  roles: [
    {
      title: "Mobile Architect",
      body: "Sets the shape of your React Native app: navigation, state, native boundaries and the standards the team builds to.",
      skills: ["React Native", "TypeScript", "Expo", "Redux"],
      part: "Architecture",
      photo: { image: r1, alt: "A developer in a red plaid shirt tests something on his phone at his laptop desk." },
    },
    {
      title: "React Native Specialist",
      body: "Ships features end to end on both platforms, from the screen to the API call, with the tests alongside.",
      skills: ["React Native", "TypeScript", "React Query", "Jest"],
      part: "Core delivery",
      photo: { image: r2, alt: "A man in glasses and a blazer checks an app on his phone at his laptop." },
    },
    {
      title: "Native Module Engineer",
      body: "Writes the Swift and Kotlin your app needs underneath, from device APIs to performance-critical screens.",
      skills: ["Swift", "Kotlin", "Expo Modules", "React Native"],
      part: "Native",
      photo: { image: r3, alt: "A woman checks her phone beside a laptop on a balcony table." },
    },
    {
      title: "Mobile Release Engineer",
      body: "Runs builds, over-the-air updates and store releases for both apps, with crash reports watched after each one.",
      skills: ["Fastlane", "EAS Update", "GitHub Actions", "Sentry"],
      part: "Release",
      photo: { image: r4, alt: "Two women look at a phone together at a cafe table." },
    },
  ],

  capabilities: [
    {
      label: "Build",
      icon: "mobile",
      title: "Build cross-platform apps",
      body: "React Native developers who build iOS and Android apps from one codebase, from a first MVP to a full product.",
      chips: ["React Native", "TypeScript", "Expo"],
    },
    {
      label: "Integrate",
      icon: "plug",
      title: "Connect your systems",
      body: "Specialists who connect your app to your APIs, sign-in, payments, push notifications and native services.",
      chips: ["REST and GraphQL", "React Query", "Firebase"],
    },
    {
      label: "Platform",
      icon: "cloud",
      title: "Release securely",
      body: "Engineers who ship safely through both stores and over the air, and keep watch on crashes after release.",
      chips: ["CI/CD", "Over-the-air updates", "Crash monitoring"],
    },
  ],

  examples: [
    {
      client: "US product company",
      model: "Dedicated product pod",
      title: "React Native app team",
      body: "We provided React Native developers to launch one app on iOS and Android together and set up reliable release workflows.",
      roles: ["Mobile Architect", "React Native Specialist", "Delivery Lead"],
      stack: ["React Native", "TypeScript", "Expo", "Redux"],
      outcomes: [
        { value: "Faster", label: "feature release cycles" },
        { value: "Reliable", label: "store releases" },
      ],
    },
    {
      client: "US enterprise platform",
      model: "Architecture and delivery",
      title: "React Native upgrade",
      body: "We added specialists to upgrade an ageing React Native app a version at a time and pay down its technical debt.",
      roles: ["Mobile Architect", "Native Module Engineer", "QA Engineer"],
      stack: ["React Native", "TypeScript", "Swift", "Kotlin"],
      outcomes: [
        { value: "Modern", label: "app architecture" },
        { value: "Reduced", label: "technical debt" },
      ],
    },
    {
      client: "US financial services",
      model: "Augmented squad",
      title: "Secure feature delivery",
      body: "We placed React Native developers inside the client’s strict security and compliance workflow to ship new capabilities on both platforms.",
      roles: ["React Native Specialist", "Security Engineer", "QA Engineer"],
      stack: ["React Native", "TypeScript", "React Query", "Jest"],
      outcomes: [
        { value: "Compliant", label: "feature releases" },
        { value: "Seamless", label: "team integration" },
      ],
    },
  ],

  skillsAnswer:
    "Mobile architecture, React Native and TypeScript, Expo, state with Redux or React Query, native modules in Swift and Kotlin, over-the-air updates, store releases and testing.",

  /* Questions about this skill, asked first in the FAQ. Drafts, to be
     reworked; the four about how hiring works are shared (hire-copy.ts). */
  faqs: [
    {
      q: "Does a React Native app feel native?",
      a: "Yes. It draws each platform’s own controls, and our developers drop into Swift or Kotlin when a screen needs it.",
    },
    {
      q: "What can an over-the-air update change?",
      a: "JavaScript and assets: fixes, copy, layouts. Anything that touches native code still goes through the stores.",
    },
    {
      q: "Expo or a bare project?",
      a: "Expo for most new apps; bare, or a mix, when you need custom native modules. We work in either.",
    },
    {
      q: "Can you take over an app we already have?",
      a: "Yes. We audit it, upgrade React Native a version at a time, and add tests before we change features.",
    },
  ],

  photos: {
    ways: [
      { image: ways, alt: "A developer in a denim jacket and headphones smiles over his notes beside a laptop." },
      { image: ota, alt: "Two developers lean in over a laptop, reviewing code together.", focus: "60% 40%" },
      { image: extra, alt: "A group of developers works on laptops around a shared table, one pointing at a screen." },
    ],
    steps: { image: steps, alt: "A woman in a denim jacket explains an idea at a meeting table with her laptop." },
    faq: { image: faq, alt: "A developer writes code at a desk with two screens in a busy studio.", focus: "40% 45%" },
  },
};
