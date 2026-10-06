import type { TechProfile } from "@pg/page22/types/hire";
import hero from "@pg/page22/assets/pages/p22-hero.jpg";
import ways from "@pg/page22/assets/pages/p22-ways.jpg";
import screens from "@pg/page22/assets/pages/p22-screens.jpg";
import rollout from "@pg/page22/assets/pages/p22-rollout.jpg";
import r1 from "@pg/page22/assets/pages/p22-r1.jpg";
import r2 from "@pg/page22/assets/pages/p22-r2.jpg";
import r3 from "@pg/page22/assets/pages/p22-r3.jpg";
import r4 from "@pg/page22/assets/pages/p22-r4.jpg";
import steps from "@pg/page22/assets/pages/p22-steps.jpg";
import faq from "@pg/page22/assets/pages/p22-faq.jpg";

/* Android developers: everything on this page that is about Android. The
   rest of the words come from src/lib/hire-copy.ts, shared with every
   Technologies page. The examples and the skills answer are drafts; have
   them checked before launch. Photo sources are in docs/sections.md. */

export const TECH: TechProfile = {
  group: "Mobile",
  skill: "Android",
  Skill: "Android",
  one: "Android developer",
  many: "Android developers",
  people: "Engineers",
  kit: "stack",
  products: "Android apps",

  hero: {
    lede: "Kotlin and Jetpack Compose engineers who build Android apps that feel right on every phone, foldable, tablet and watch your users own.",
    photo: { image: hero, alt: "An engineer checks her phone at a desk with two laptops open in a bright studio." },
  },

  core: [
    { name: "Kotlin", logo: "kotlin", note: "Language" },
    { name: "Jetpack Compose", logo: "jetpackcompose", note: "Declarative UI" },
    { name: "Android Studio", logo: "androidstudio", note: "Android IDE" },
    { name: "Gradle", logo: "gradle", note: "Builds" },
    { name: "Coroutines", note: "Async code" },
    { name: "Google Play", logo: "googleplay", note: "Distribution" },
  ],
  ecosystem: ["Material Design", "Room", "Hilt", "Retrofit", "Firebase", "JUnit 5", "Espresso", "Sentry", "GitHub Actions"],

  benefits: [
    {
      title: "Apps for every screen",
      body: "Compose layouts that adapt to phones, foldables, tablets and watches, with Material Design and accessibility built in.",
      work: ["Feature development", "Adaptive layouts", "Accessibility"],
      tools: ["Jetpack Compose", "Material Design", "Android Studio", "Figma"],
    },
    {
      title: "Careful Play releases",
      body: "Staged rollouts on Google Play, promoted only while crash and ANR rates stay well inside the line.",
      work: ["Release management", "Staged rollouts", "Play policy updates"],
      tools: ["Google Play", "Gradle", "GitHub Actions", "Firebase"],
    },
    {
      title: "Fast, stable apps",
      body: "Apps that start quickly and stay responsive on mid-range devices: profiled, tested on real hardware and watched after release.",
      work: ["Performance tuning", "ANR reduction", "Device testing"],
      tools: ["Android Studio", "Firebase", "Sentry", "Espresso"],
    },
    {
      title: "Modern Kotlin codebases",
      body: "Code your team can keep building on: Kotlin and coroutines, clear modules, and Java and Views moved over where it pays.",
      work: ["Modernisation", "Modular architecture", "Java to Kotlin"],
      tools: ["Kotlin", "Coroutines", "Hilt", "Gradle"],
    },
  ],

  roles: [
    {
      title: "Android Architect",
      body: "Sets the shape of your app: modules, data flow, dependency injection and the standards the team builds to.",
      skills: ["Kotlin", "Jetpack Compose", "Hilt", "Gradle"],
      part: "Architecture",
      photo: { image: r1, alt: "A developer in a grey-green shirt checks his phone beside an open laptop." },
    },
    {
      title: "Senior Android Engineer",
      body: "Ships features end to end in your app, from the screen to the API call, with the tests alongside.",
      skills: ["Kotlin", "Jetpack Compose", "Coroutines", "Room"],
      part: "Core delivery",
      photo: { image: r2, alt: "A woman in a denim shirt checks her phone beside her laptop." },
    },
    {
      title: "Compose UI Engineer",
      body: "Turns designs into accessible, adaptive screens that look and behave right on every phone, foldable and tablet.",
      skills: ["Jetpack Compose", "Material Design", "Accessibility", "Figma"],
      part: "Interfaces",
      photo: { image: r3, alt: "Two colleagues work through an app on their phones at a white table." },
    },
    {
      title: "Android Release Engineer",
      body: "Runs your build, test and release pipeline: signing, device testing, Play tracks and staged rollouts.",
      skills: ["Gradle", "GitHub Actions", "Firebase Test Lab", "Google Play"],
      part: "Release",
      photo: { image: r4, alt: "A developer in a cap checks his phone beside an open laptop at a long table." },
    },
  ],

  capabilities: [
    {
      label: "Build",
      icon: "mobile",
      title: "Build Android apps",
      body: "Android developers who build native apps for phones, foldables, tablets and watches.",
      chips: ["Kotlin", "Jetpack Compose", "Material Design"],
    },
    {
      label: "Integrate",
      icon: "plug",
      title: "Connect your systems",
      body: "Specialists who connect your app to your APIs, sign-in, payments, push notifications and Google services.",
      chips: ["REST and GraphQL", "Retrofit", "Firebase"],
    },
    {
      label: "Platform",
      icon: "cloud",
      title: "Release securely",
      body: "Engineers who ship safely through staged Play rollouts and keep watch on crashes and ANRs after release.",
      chips: ["CI/CD", "Google Play", "Crash monitoring"],
    },
  ],

  examples: [
    {
      client: "US product company",
      model: "Dedicated product pod",
      title: "Android app team",
      body: "We provided Android developers to speed up a critical app launch and set up reliable build and release workflows.",
      roles: ["Android Architect", "Senior Android Engineer", "Delivery Lead"],
      stack: ["Kotlin", "Jetpack Compose", "Hilt", "Firebase"],
      outcomes: [
        { value: "Faster", label: "app release cycles" },
        { value: "Reliable", label: "staged rollouts" },
      ],
    },
    {
      client: "US enterprise platform",
      model: "Architecture and delivery",
      title: "Views to Compose modernisation",
      body: "We added specialists to modernise the app’s architecture, move key screens to Compose and pay down its technical debt.",
      roles: ["Android Architect", "Senior Android Engineer", "QA Engineer"],
      stack: ["Kotlin", "Jetpack Compose", "Coroutines", "Gradle"],
      outcomes: [
        { value: "Modern", label: "app architecture" },
        { value: "Reduced", label: "technical debt" },
      ],
    },
    {
      client: "US financial services",
      model: "Augmented squad",
      title: "Secure feature delivery",
      body: "We placed Android developers inside the client’s strict security and compliance workflow to ship new in-app capabilities.",
      roles: ["Senior Android Engineer", "Security Engineer", "QA Engineer"],
      stack: ["Kotlin", "Jetpack Compose", "Room", "JUnit 5"],
      outcomes: [
        { value: "Compliant", label: "feature releases" },
        { value: "Seamless", label: "team integration" },
      ],
    },
  ],

  skillsAnswer:
    "Android architecture, Kotlin and Jetpack Compose, coroutines, Material Design, Google Play releases, performance tuning, device testing and accessibility.",

  /* Questions about this skill, asked first in the FAQ. Drafts, to be
     reworked; the four about how hiring works are shared (hire-copy.ts). */
  faqs: [
    {
      q: "Kotlin only, or Java too?",
      a: "Kotlin first. They maintain Java where it lives and migrate it when the change pays for itself.",
    },
    {
      q: "Which devices do you test on?",
      a: "A matrix of real phones, foldables and tablets across Android versions, plus a device lab in the cloud for the long tail.",
    },
    {
      q: "Can they run our Play Console releases?",
      a: "Yes: signing, tracks, staged rollouts, pre-launch reports and the policy updates that come with them.",
    },
    {
      q: "Compose or Views?",
      a: "New screens in Compose. Existing Views stay and interoperate until moving them is worth it.",
    },
  ],

  photos: {
    ways: [
      { image: ways, alt: "A developer in a grey sweater checks his phone beside his laptop at a window desk." },
      { image: screens, alt: "A developer in glasses tests an app on his phone at a desk with a laptop.", focus: "50% 35%" },
      { image: rollout, alt: "An engineer in glasses tests an app on a phone in front of his monitors.", focus: "50% 45%" },
    ],
    steps: { image: steps, alt: "Two women take notes during a conversation at a white table by a window." },
    faq: { image: faq, alt: "A developer holds an Android phone in front of a desk of monitors.", focus: "50% 55%" },
  },
};
