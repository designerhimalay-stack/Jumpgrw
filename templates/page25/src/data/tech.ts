import type { TechProfile } from "@/types/hire";
import hero from "@/assets/pages/p25-hero.jpg";
import ways from "@/assets/pages/p25-ways.jpg";
import frames from "@/assets/pages/p25-frames.jpg";
import extra from "@/assets/pages/p25-extra.jpg";
import r1 from "@/assets/pages/p25-r1.jpg";
import r2 from "@/assets/pages/p25-r2.jpg";
import r3 from "@/assets/pages/p25-r3.jpg";
import r4 from "@/assets/pages/p25-r4.jpg";
import steps from "@/assets/pages/p25-steps.jpg";
import faq from "@/assets/pages/p25-faq.jpg";

/* Flutter developers: everything on this page that is about Flutter. The
   rest of the words come from src/lib/hire-copy.ts, shared with every
   Technologies page. The examples and the skills answer are drafts; have
   them checked before launch. Photo sources are in docs/sections.md. */

export const TECH: TechProfile = {
  group: "Mobile",
  skill: "Flutter",
  Skill: "Flutter",
  one: "Flutter developer",
  many: "Flutter developers",
  people: "Engineers",
  kit: "stack",
  products: "Flutter apps",

  hero: {
    lede: "One Dart codebase, every screen: Flutter developers who ship smooth apps to phones, the browser and the desktop, inside your product team.",
    photo: { image: hero, alt: "A developer checks an app on his phone beside a glowing monitor." },
  },

  core: [
    { name: "Flutter", logo: "flutter", note: "UI toolkit" },
    { name: "Dart", logo: "dart", note: "Language" },
    { name: "Riverpod", note: "App state" },
    { name: "Bloc", note: "State patterns" },
    { name: "Firebase", logo: "firebase", note: "Backend services" },
    { name: "Fastlane", logo: "fastlane", note: "Release automation" },
  ],
  ecosystem: ["Material Design", "Cupertino widgets", "Flutter DevTools", "GoRouter", "Dio", "Drift", "flutter_test", "GitHub Actions", "Sentry"],

  benefits: [
    {
      title: "One codebase, every screen",
      body: "One Dart codebase that builds for phones, the browser and the desktop, with a real release for each.",
      work: ["Feature development", "Multi-platform builds", "Adaptive layouts"],
      tools: ["Flutter", "Dart", "Material Design", "Cupertino widgets"],
    },
    {
      title: "Smooth at every frame",
      body: "Apps that stay smooth on mid-range devices: profiled in DevTools and kept under the frame budget before each release.",
      work: ["Performance tuning", "Jank fixes", "Device testing"],
      tools: ["Flutter DevTools", "Dart", "Firebase", "Sentry"],
    },
    {
      title: "Flutter in your existing app",
      body: "Flutter screens added to an iOS or Android app one feature at a time, without a full rewrite.",
      work: ["Add-to-app", "Platform channels", "Native integration"],
      tools: ["Flutter", "Swift", "Kotlin", "Dart"],
    },
    {
      title: "Clean state management",
      body: "State kept out of the widgets and easy to follow, in Riverpod, Bloc or whatever your team already knows.",
      work: ["State architecture", "API integration", "Refactoring"],
      tools: ["Riverpod", "Bloc", "Dio", "Dart"],
    },
  ],

  roles: [
    {
      title: "Flutter Architect",
      body: "Sets the shape of your Flutter app: widgets, state, navigation and the standards the team builds to.",
      skills: ["Flutter", "Dart", "Riverpod", "Bloc"],
      part: "Architecture",
      photo: { image: r1, alt: "A developer in a cream sweater smiles at his phone beside a laptop in a bright office." },
    },
    {
      title: "Senior Flutter Engineer",
      body: "Ships features end to end in your app, from the widget to the API call, with the tests alongside.",
      skills: ["Flutter", "Dart", "Riverpod", "Firebase"],
      part: "Core delivery",
      photo: { image: r2, alt: "A man in a patterned jacket smiles at his phone on a sofa." },
    },
    {
      title: "Flutter UI Engineer",
      body: "Turns designs into accessible, adaptive screens that look and behave right on every platform you ship to.",
      skills: ["Flutter", "Material Design", "Cupertino widgets", "Figma"],
      part: "Interfaces",
      photo: { image: r3, alt: "A man in a short-sleeved shirt types on his phone at a counter." },
    },
    {
      title: "Mobile Release Engineer",
      body: "Runs builds and releases for each platform: signing, store tracks, test builds and crash reports after launch.",
      skills: ["Fastlane", "GitHub Actions", "Firebase", "Sentry"],
      part: "Release",
      photo: { image: r4, alt: "A man in a blazer checks his phone at his desk in the evening." },
    },
  ],

  capabilities: [
    {
      label: "Build",
      icon: "mobile",
      title: "Build Flutter apps",
      body: "Flutter developers who build smooth apps for phones, the browser and the desktop from one codebase.",
      chips: ["Flutter", "Dart", "Riverpod"],
    },
    {
      label: "Integrate",
      icon: "plug",
      title: "Connect your systems",
      body: "Specialists who connect your app to your APIs, sign-in, payments, push notifications and native platform features.",
      chips: ["REST and GraphQL", "Firebase", "Platform channels"],
    },
    {
      label: "Platform",
      icon: "cloud",
      title: "Release securely",
      body: "Engineers who ship safely to every store and keep watch on crashes and performance after release.",
      chips: ["CI/CD", "App stores", "Crash monitoring"],
    },
  ],

  examples: [
    {
      client: "US product company",
      model: "Dedicated product pod",
      title: "Flutter app team",
      body: "We provided Flutter developers to launch one app on iOS and Android together and set up reliable release workflows.",
      roles: ["Flutter Architect", "Senior Flutter Engineer", "Delivery Lead"],
      stack: ["Flutter", "Dart", "Riverpod", "Firebase"],
      outcomes: [
        { value: "Faster", label: "feature release cycles" },
        { value: "Reliable", label: "store releases" },
      ],
    },
    {
      client: "US enterprise platform",
      model: "Architecture and delivery",
      title: "Two apps, one codebase",
      body: "We added specialists to bring two native apps onto one Flutter codebase, a feature at a time, and pay down technical debt.",
      roles: ["Flutter Architect", "Senior Flutter Engineer", "QA Engineer"],
      stack: ["Flutter", "Dart", "Bloc", "Kotlin"],
      outcomes: [
        { value: "Unified", label: "mobile codebase" },
        { value: "Reduced", label: "technical debt" },
      ],
    },
    {
      client: "US financial services",
      model: "Augmented squad",
      title: "Secure feature delivery",
      body: "We placed Flutter developers inside the client’s strict security and compliance workflow to ship new capabilities on every platform.",
      roles: ["Senior Flutter Engineer", "Security Engineer", "QA Engineer"],
      stack: ["Flutter", "Dart", "Riverpod", "Dio"],
      outcomes: [
        { value: "Compliant", label: "feature releases" },
        { value: "Seamless", label: "team integration" },
      ],
    },
  ],

  skillsAnswer:
    "Flutter architecture, Dart, state with Riverpod or Bloc, adaptive Material and Cupertino interfaces, add-to-app integration, performance profiling, store releases and testing.",

  /* Questions about this skill, asked first in the FAQ. Drafts, to be
     reworked; the four about how hiring works are shared (hire-copy.ts). */
  faqs: [
    {
      q: "Will a Flutter app look native?",
      a: "It draws its own widgets, so it can look the same everywhere, or follow each platform with the Material and Cupertino sets.",
    },
    {
      q: "Can Flutter join an app we already have?",
      a: "Yes. Add-to-app puts Flutter screens inside an iOS or Android app, one feature at a time.",
    },
    {
      q: "How do you keep it fast?",
      a: "We profile in DevTools on real mid-range devices and keep frame times under budget before each release.",
    },
    {
      q: "Riverpod, Bloc or something else?",
      a: "Whatever your team knows. For new apps we usually start with Riverpod and keep state out of the widgets.",
    },
  ],

  photos: {
    ways: [
      { image: ways, alt: "A developer wearing headphones works on a laptop at a bright home desk." },
      { image: frames, alt: "A developer works through code across two monitors in a dim studio.", focus: "55% 40%" },
      { image: extra, alt: "A web team works on laptops around a table in a bright yellow agency studio." },
    ],
    steps: { image: steps, alt: "Three women talk through a project around laptops at a meeting table." },
    faq: { image: faq, alt: "Two developers work side by side at their desks in a bright office.", focus: "65% 45%" },
  },
};
