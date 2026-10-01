import type { TechProfile } from "@/types/hire";
import hero from "@/assets/pages/p23-hero.jpg";
import ways from "@/assets/pages/p23-ways.jpg";
import toolchain from "@/assets/pages/p23-toolchain.jpg";
import pairing from "@/assets/pages/p23-pairing.jpg";
import r1 from "@/assets/pages/p23-r1.jpg";
import r2 from "@/assets/pages/p23-r2.jpg";
import r3 from "@/assets/pages/p23-r3.jpg";
import r4 from "@/assets/pages/p23-r4.jpg";
import steps from "@/assets/pages/p23-steps.jpg";
import faq from "@/assets/pages/p23-faq.jpg";

/* Kotlin developers: everything on this page that is about Kotlin. The rest
   of the words come from src/lib/hire-copy.ts, shared with every
   Technologies page. The examples and the skills answer are drafts; have
   them checked before launch. Photo sources are in docs/sections.md. */

export const TECH: TechProfile = {
  group: "Mobile",
  skill: "Kotlin",
  Skill: "Kotlin",
  one: "Kotlin developer",
  many: "Kotlin developers",
  people: "Engineers",
  kit: "stack",
  products: "Kotlin products",

  hero: {
    lede: "Kotlin engineers who write less code that does more: Android apps, shared multiplatform modules and server code, built inside your team.",
    photo: { image: hero, alt: "A developer in headphones writes code at a standing desk with two monitors and a laptop." },
  },

  core: [
    { name: "Kotlin", logo: "kotlin", note: "Language" },
    { name: "Coroutines", note: "Async code" },
    { name: "Kotlin Multiplatform", note: "Shared code" },
    { name: "Jetpack Compose", logo: "jetpackcompose", note: "Android UI" },
    { name: "Ktor", logo: "ktor", note: "Server framework" },
    { name: "Spring Boot", logo: "springboot", note: "JVM services" },
  ],
  ecosystem: ["Kotlin Flow", "Gradle", "IntelliJ IDEA", "Android Studio", "Room", "Hilt", "SQLDelight", "JUnit 5", "Docker"],

  benefits: [
    {
      title: "Concise, readable code",
      body: "Kotlin that says each thing once: data classes, null safety and clear types, so there’s less to read and less to break.",
      work: ["Feature development", "Code reviews", "Refactoring"],
      tools: ["Kotlin", "IntelliJ IDEA", "Android Studio", "Gradle"],
    },
    {
      title: "Java to Kotlin, safely",
      body: "A file at a time, with Java and Kotlin side by side, so the app keeps shipping while the codebase moves.",
      work: ["Java migration", "Modernisation", "Test coverage"],
      tools: ["Kotlin", "Java", "Gradle", "JUnit 5"],
    },
    {
      title: "Shared code across platforms",
      body: "Models, networking and storage written once in Kotlin Multiplatform, with each platform keeping its own native interface.",
      work: ["Multiplatform modules", "Shared business logic", "iOS integration"],
      tools: ["Kotlin Multiplatform", "Ktor", "SQLDelight", "Jetpack Compose"],
    },
    {
      title: "Predictable async code",
      body: "Coroutines and Flow with clear scopes and tests that control time, so async code behaves the same every run.",
      work: ["Concurrency design", "Reactive streams", "Async testing"],
      tools: ["Coroutines", "Kotlin Flow", "JUnit 5", "MockK"],
    },
  ],

  roles: [
    {
      title: "Kotlin Architect",
      body: "Sets the shape of your Kotlin code: modules, shared layers, concurrency and the standards the team builds to.",
      skills: ["Kotlin", "Coroutines", "Kotlin Multiplatform", "Gradle"],
      part: "Architecture",
      photo: { image: r1, alt: "A developer in glasses checks an app on his phone beside his laptop." },
    },
    {
      title: "Senior Android Engineer",
      body: "Ships Android features end to end in Kotlin, from the Compose screen to the API call, with the tests alongside.",
      skills: ["Kotlin", "Jetpack Compose", "Coroutines", "Hilt"],
      part: "Android",
      photo: { image: r2, alt: "A woman in a black blouse checks her phone at her laptop desk." },
    },
    {
      title: "Multiplatform Engineer",
      body: "Builds the shared Kotlin layer your iOS and Android apps both use, and wires it into each native interface.",
      skills: ["Kotlin Multiplatform", "Ktor", "SQLDelight", "SwiftUI"],
      part: "Shared code",
      photo: { image: r3, alt: "A developer in a polo shirt checks his smartphone beside a laptop at his desk." },
    },
    {
      title: "Kotlin Backend Engineer",
      body: "Builds the services behind your apps in Ktor or Spring Boot, sharing models with the apps where that helps.",
      skills: ["Ktor", "Spring Boot", "PostgreSQL", "Docker"],
      part: "Server",
      photo: { image: r4, alt: "A man in a denim shirt checks his phone by a bright window." },
    },
  ],

  capabilities: [
    {
      label: "Build",
      icon: "mobile",
      title: "Build Kotlin apps",
      body: "Kotlin developers who build Android apps and the shared code and services behind them.",
      chips: ["Kotlin", "Jetpack Compose", "Coroutines"],
    },
    {
      label: "Integrate",
      icon: "plug",
      title: "Connect your systems",
      body: "Specialists who connect your apps to your APIs, data and services, with Kotlin on both sides where it helps.",
      chips: ["Ktor", "Kotlin Multiplatform", "REST and GraphQL"],
    },
    {
      label: "Platform",
      icon: "cloud",
      title: "Deploy securely",
      body: "Engineers who ship apps and services safely through your pipeline and keep watch on production after release.",
      chips: ["CI/CD", "Docker", "Security"],
    },
  ],

  examples: [
    {
      client: "US product company",
      model: "Dedicated product pod",
      title: "Kotlin app team",
      body: "We provided Kotlin developers to speed up a critical product launch and set up reliable delivery workflows.",
      roles: ["Kotlin Architect", "Senior Android Engineer", "Delivery Lead"],
      stack: ["Kotlin", "Jetpack Compose", "Coroutines", "Hilt"],
      outcomes: [
        { value: "Faster", label: "feature release cycles" },
        { value: "Reliable", label: "production releases" },
      ],
    },
    {
      client: "US enterprise platform",
      model: "Architecture and delivery",
      title: "Java to Kotlin modernisation",
      body: "We added specialists to move a large Java codebase to Kotlin, a module at a time, while the product kept shipping.",
      roles: ["Kotlin Architect", "Kotlin Backend Engineer", "QA Engineer"],
      stack: ["Kotlin", "Spring Boot", "Gradle", "JUnit 5"],
      outcomes: [
        { value: "Modern", label: "codebase standards" },
        { value: "Reduced", label: "technical debt" },
      ],
    },
    {
      client: "US financial services",
      model: "Augmented squad",
      title: "Shared mobile logic",
      body: "We placed Kotlin developers inside the client’s strict security and compliance workflow to share logic across its iOS and Android apps.",
      roles: ["Multiplatform Engineer", "Security Engineer", "QA Engineer"],
      stack: ["Kotlin Multiplatform", "Ktor", "Coroutines", "SQLDelight"],
      outcomes: [
        { value: "Compliant", label: "feature releases" },
        { value: "Consistent", label: "app behaviour" },
      ],
    },
  ],

  skillsAnswer:
    "Kotlin architecture, Android with Jetpack Compose, coroutines and Flow, Kotlin Multiplatform, Ktor and Spring Boot services, Java migration and testing.",

  /* Questions about this skill, asked first in the FAQ. Drafts, to be
     reworked; the four about how hiring works are shared (hire-copy.ts). */
  faqs: [
    {
      q: "Can they move our Java code to Kotlin?",
      a: "Yes, a file at a time. Java and Kotlin live in the same module, so the app keeps shipping during the move.",
    },
    {
      q: "Is Kotlin Multiplatform ready for production?",
      a: "For shared logic, yes. They share models, networking and storage, and keep each platform’s interface native.",
    },
    {
      q: "Do they write server code too?",
      a: "Yes: Ktor or Spring Boot services in Kotlin, sharing models with the apps where that helps.",
    },
    {
      q: "How do they keep coroutines predictable?",
      a: "Structured concurrency with clear scopes, and tests that control virtual time, so async code behaves the same every run.",
    },
  ],

  photos: {
    ways: [
      { image: ways, alt: "A developer in an orange t-shirt works on a laptop at a white desk." },
      { image: toolchain, alt: "An engineer writes code at a desktop monitor in an open office.", focus: "60% 72%" },
      { image: pairing, alt: "Two engineers review Kotlin code together on a laptop.", focus: "62% 50%" },
    ],
    steps: { image: steps, alt: "Two women go over a plan on a tablet at a table in a brick-walled room." },
    faq: { image: faq, alt: "A developer works through code in an editor on a laptop.", focus: "50% 50%" },
  },
};
