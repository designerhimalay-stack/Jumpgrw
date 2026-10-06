import type { TechProfile } from "@pg/page21/types/hire";
import hero from "@pg/page21/assets/pages/p21-hero.jpg";
import ways from "@pg/page21/assets/pages/p21-ways.jpg";
import release from "@pg/page21/assets/pages/p21-release.jpg";
import toolchain from "@pg/page21/assets/pages/p21-toolchain.jpg";
import r1 from "@pg/page21/assets/pages/p21-r1.jpg";
import r2 from "@pg/page21/assets/pages/p21-r2.jpg";
import r3 from "@pg/page21/assets/pages/p21-r3.jpg";
import r4 from "@pg/page21/assets/pages/p21-r4.jpg";
import steps from "@pg/page21/assets/pages/p21-steps.jpg";
import faq from "@pg/page21/assets/pages/p21-faq.jpg";

/* iOS developers: everything on this page that is about iOS. The rest of
   the words come from src/lib/hire-copy.ts, shared with every Technologies
   page. The examples and the skills answer are drafts; have them checked
   before launch. Photo sources are in docs/sections.md. */

export const TECH: TechProfile = {
  group: "Mobile",
  skill: "iOS",
  Skill: "iOS",
  one: "iOS developer",
  many: "iOS developers",
  people: "Engineers",
  kit: "stack",
  products: "iOS apps",

  hero: {
    lede: "Senior Swift engineers who build native iPhone and iPad apps inside your team, from the first SwiftUI screen to the App Store release.",
    photo: { image: hero, alt: "A developer checks an app on an iPhone beside a MacBook showing the same data." },
  },

  core: [
    { name: "Swift", logo: "swift", note: "Language" },
    { name: "SwiftUI", note: "Declarative UI" },
    { name: "UIKit", note: "Classic UI" },
    { name: "Xcode", logo: "xcode", note: "Apple IDE" },
    { name: "Core Data", note: "Local storage" },
    { name: "Fastlane", logo: "fastlane", note: "Release automation" },
  ],
  ecosystem: ["TestFlight", "App Store Connect", "Swift Package Manager", "CocoaPods", "XCTest", "Firebase", "Sentry", "RevenueCat", "GitHub Actions"],

  benefits: [
    {
      title: "Native, polished interfaces",
      body: "Screens that feel at home on iPhone and iPad: SwiftUI layouts, smooth animation and accessibility built in from the start.",
      work: ["Feature development", "SwiftUI screens", "Accessibility"],
      tools: ["SwiftUI", "UIKit", "Xcode", "Figma"],
    },
    {
      title: "Smooth App Store releases",
      body: "Signed builds, TestFlight rounds, review notes and phased rollouts, run by engineers who know App Store review well.",
      work: ["Release automation", "TestFlight betas", "App Store review"],
      tools: ["Fastlane", "TestFlight", "App Store Connect", "GitHub Actions"],
    },
    {
      title: "Fast, stable apps",
      body: "Apps that launch quickly and stay up: profiled in Instruments, crash reports watched, and memory kept in check on older devices.",
      work: ["Performance tuning", "Crash reduction", "Memory profiling"],
      tools: ["Instruments", "Sentry", "Firebase", "Xcode"],
    },
    {
      title: "Modern Swift codebases",
      body: "Code your team can keep building on: Swift concurrency, clear modules, tests alongside, and UIKit moved to SwiftUI where it pays.",
      work: ["Modernisation", "Modular architecture", "Unit and UI tests"],
      tools: ["Swift", "Swift Package Manager", "XCTest", "SwiftUI"],
    },
  ],

  roles: [
    {
      title: "iOS Architect",
      body: "Sets the shape of your app: modules, data flow, concurrency and the standards the team builds to.",
      skills: ["Swift", "SwiftUI", "Swift Concurrency", "Swift Package Manager"],
      part: "Architecture",
      photo: { image: r1, alt: "Over-the-shoulder view of a man checking an iPhone app beside his MacBook." },
    },
    {
      title: "Senior iOS Engineer",
      body: "Ships features end to end in your app, from the screen to the API call, with the tests alongside.",
      skills: ["Swift", "SwiftUI", "UIKit", "XCTest"],
      part: "Core delivery",
      photo: { image: r2, alt: "A developer in headphones checks an app on his phone in front of a desktop monitor." },
    },
    {
      title: "Mobile UI Engineer",
      body: "Turns designs into accessible, adaptive screens that look and behave right on iPhone, iPad and Apple Watch.",
      skills: ["SwiftUI", "UIKit", "Accessibility", "Figma"],
      part: "Interfaces",
      photo: { image: r3, alt: "A woman in a red blazer taps through an app on her phone at her laptop desk." },
    },
    {
      title: "iOS Release Engineer",
      body: "Runs your build and release pipeline: signing, TestFlight, App Store review and phased rollouts.",
      skills: ["Fastlane", "Xcode Cloud", "GitHub Actions", "App Store Connect"],
      part: "Release",
      photo: { image: r4, alt: "A woman in glasses checks her phone beside a laptop in a creative studio." },
    },
  ],

  capabilities: [
    {
      label: "Build",
      icon: "mobile",
      title: "Build iOS apps",
      body: "iOS developers who build native iPhone and iPad apps, from the first screen to a full product.",
      chips: ["Swift", "SwiftUI", "UIKit"],
    },
    {
      label: "Integrate",
      icon: "plug",
      title: "Connect your systems",
      body: "Specialists who connect your app to your APIs, sign-in, payments, push notifications and Apple services.",
      chips: ["REST and GraphQL", "Sign in with Apple", "StoreKit"],
    },
    {
      label: "Platform",
      icon: "cloud",
      title: "Release securely",
      body: "Engineers who ship safely through TestFlight and the App Store, and keep watch on crashes after release.",
      chips: ["CI/CD", "App Store Connect", "Crash monitoring"],
    },
  ],

  examples: [
    {
      client: "US product company",
      model: "Dedicated product pod",
      title: "iOS app team",
      body: "We provided iOS developers to speed up a critical app launch and set up a reliable TestFlight and release workflow.",
      roles: ["iOS Architect", "Senior iOS Engineer", "Delivery Lead"],
      stack: ["Swift", "SwiftUI", "Fastlane", "Firebase"],
      outcomes: [
        { value: "Faster", label: "app release cycles" },
        { value: "Reliable", label: "App Store releases" },
      ],
    },
    {
      client: "US enterprise platform",
      model: "Architecture and delivery",
      title: "UIKit to SwiftUI modernisation",
      body: "We added specialists to modernise the app’s architecture, move key screens to SwiftUI and pay down its technical debt.",
      roles: ["iOS Architect", "Senior iOS Engineer", "QA Engineer"],
      stack: ["Swift", "SwiftUI", "UIKit", "XCTest"],
      outcomes: [
        { value: "Modern", label: "app architecture" },
        { value: "Reduced", label: "technical debt" },
      ],
    },
    {
      client: "US financial services",
      model: "Augmented squad",
      title: "Secure feature delivery",
      body: "We placed iOS developers inside the client’s strict security and compliance workflow to ship new in-app capabilities.",
      roles: ["Senior iOS Engineer", "Security Engineer", "QA Engineer"],
      stack: ["Swift", "SwiftUI", "Core Data", "XCTest"],
      outcomes: [
        { value: "Compliant", label: "feature releases" },
        { value: "Seamless", label: "team integration" },
      ],
    },
  ],

  skillsAnswer:
    "iOS architecture, Swift and SwiftUI, UIKit, Swift concurrency, Apple frameworks and services, App Store releases, performance tuning, testing and accessibility.",

  /* Questions about this skill, asked first in the FAQ. Drafts, to be
     reworked; the four about how hiring works are shared (hire-copy.ts). */
  faqs: [
    {
      q: "SwiftUI or UIKit?",
      a: "Both. New screens are built in SwiftUI; working UIKit code stays and is bridged where it earns its keep.",
    },
    {
      q: "Can they take us through App Store review?",
      a: "Yes. They prepare builds, screenshots, privacy details and review notes, and answer the reviewers’ questions.",
    },
    {
      q: "Will they work in our existing codebase?",
      a: "Yes. They start with your repository, your conventions and your CI, and raise changes as ordinary pull requests.",
    },
    {
      q: "Do they cover iPad and Apple Watch?",
      a: "Yes. Layouts adapt to iPad from the start, and watchOS companions are built on the same shared Swift code.",
    },
  ],

  photos: {
    ways: [
      { image: ways, alt: "A smiling developer holds up an iPhone beside his MacBook at a home desk." },
      { image: release, alt: "A developer holds an iPhone while working on a MacBook at a wooden desk.", focus: "30% 50%" },
      { image: toolchain, alt: "An engineer works at a desk with an iMac and a MacBook.", focus: "60% 40%" },
    ],
    steps: { image: steps, alt: "Two women talk through ideas across a small round table." },
    faq: { image: faq, alt: "A developer writes code on a MacBook with an iPhone plugged in beside it.", focus: "50% 45%" },
  },
};
