import type { TechProfile } from "@/types/hire";
import hero from "@/assets/pages/p29-hero.jpg";
import ways from "@/assets/pages/p29-ways.jpg";
import shards from "@/assets/pages/p29-shards.jpg";
import rack from "@/assets/pages/p29-rack.jpg";
import r1 from "@/assets/pages/p29-r1.jpg";
import r2 from "@/assets/pages/p29-r2.jpg";
import r3 from "@/assets/pages/p29-r3.jpg";
import r4 from "@/assets/pages/p29-r4.jpg";
import steps from "@/assets/pages/p29-steps.jpg";
import faq from "@/assets/pages/p29-faq.jpg";

/* Automation QA engineers: everything on this page that is about test
   automation. The rest of the words come from src/lib/hire-copy.ts, shared
   with every Technologies page. The skill is "test automation" so the
   shared sentences read well ("Add a test automation team"). The examples
   and the skills answer are drafts; have them checked before launch. Photo
   sources are in docs/sections.md. */

export const TECH: TechProfile = {
  group: "Delivery",
  crumb: "Automation QA",
  skill: "test automation",
  Skill: "Test automation",
  one: "automation QA engineer",
  many: "automation QA engineers",
  people: "Engineers",
  kit: "stack",
  products: "tested products",

  hero: {
    lede: "Specialist automation QA engineers who automate the checks your team repeats and keep every suite fast and stable, from a first smoke test to an enterprise pipeline.",
    photo: { image: hero, alt: "An automation engineer reads test code across two monitors." },
  },

  core: [
    { name: "Playwright", note: "Browser automation" },
    { name: "Cypress", logo: "cypress", note: "End-to-end tests" },
    { name: "Selenium", logo: "selenium", note: "Cross-browser tests" },
    { name: "Appium", logo: "appium", note: "Mobile automation" },
    { name: "Postman", logo: "postman", note: "API tests" },
    { name: "k6", logo: "k6", note: "Load testing" },
  ],
  ecosystem: ["WebdriverIO", "Cucumber", "Jest", "Vitest", "JMeter", "Gatling", "GitHub Actions", "Jenkins", "Docker"],

  benefits: [
    {
      title: "Suites that stay fast",
      body: "Tests split across parallel runners and kept lean, so feedback lands while the change is still fresh.",
      work: ["Parallel runs", "Suite optimisation", "Smoke suites"],
      tools: ["Playwright", "GitHub Actions", "Docker"],
    },
    {
      title: "No more flaky tests",
      body: "Flaky tests quarantined the day they fail, fixed at the cause and only then trusted again.",
      work: ["Flake triage", "Test data", "Stable selectors"],
      tools: ["Playwright", "Cypress", "WebdriverIO", "Jest"],
    },
    {
      title: "Every layer covered",
      body: "UI, API, mobile and load tests in one framework, each check placed at the level where it is cheapest to run.",
      work: ["UI automation", "API testing", "Mobile automation"],
      tools: ["Selenium", "Postman", "Appium", "k6"],
    },
    {
      title: "Tests wired into delivery",
      body: "Suites that run on every merge in your pipeline and block a release only when something is really broken.",
      work: ["CI integration", "Quality gates", "Test reporting"],
      tools: ["GitHub Actions", "Jenkins", "Docker", "Cucumber"],
    },
  ],

  roles: [
    {
      title: "Test Automation Architect",
      body: "Chooses the framework, sets the structure of your suites and the standards every automated test is written to.",
      skills: ["Playwright", "Selenium", "TypeScript", "CI/CD"],
      part: "Architecture",
      photo: { image: r1, alt: "A developer in glasses tests an app on a phone held sideways at his laptop." },
    },
    {
      title: "UI Automation Engineer",
      body: "Automates your key user journeys in real browsers and keeps those tests stable as the interface changes.",
      skills: ["Playwright", "Cypress", "WebdriverIO", "Cucumber"],
      part: "Core delivery",
      photo: { image: r2, alt: "A senior colleague and a younger developer check an app on a phone together at a desk." },
    },
    {
      title: "API Test Engineer",
      body: "Tests your services and integrations directly, with contract and regression checks that run in seconds.",
      skills: ["Postman", "Jest", "REST and GraphQL", "Docker"],
      part: "Integration",
      photo: { image: r3, alt: "Two colleagues compare an app on their phones side by side." },
    },
    {
      title: "Performance Test Engineer",
      body: "Builds the load tests that show how your product behaves on its busiest day, and finds the bottlenecks before users do.",
      skills: ["k6", "JMeter", "Gatling", "Grafana"],
      part: "Performance",
      photo: { image: r4, alt: "Overhead view of an engineer working at a desk with three large monitors." },
    },
  ],

  capabilities: [
    {
      label: "Build",
      icon: "zap",
      title: "Build automated suites",
      body: "Automation QA engineers who build reliable UI, API and mobile test suites in the framework that fits.",
      chips: ["Playwright", "Cypress", "Appium"],
    },
    {
      label: "Integrate",
      icon: "sync",
      title: "Run in your pipeline",
      body: "Specialists who wire tests into your CI, so every merge is checked before it reaches your users.",
      chips: ["GitHub Actions", "Jenkins", "Quality gates"],
    },
    {
      label: "Platform",
      icon: "cloud",
      title: "Scale the test runs",
      body: "Engineers who run suites in parallel across browsers and devices and keep the results easy to read.",
      chips: ["Parallel runs", "Docker", "Test reporting"],
    },
  ],

  help: [
    {
      icon: "diagram",
      title: "Choose what to automate",
      body: "Your current tests reviewed and the checks worth automating chosen by risk and by how often they repeat.",
      covers: "Audit, strategy and framework",
    },
    {
      icon: "zap",
      title: "Automate the suite",
      body: "UI, API, mobile and load tests written alongside your features, in the same repository as the code.",
      covers: "UI, API, mobile and load",
    },
    {
      icon: "sync",
      title: "Wire it into CI",
      body: "Suites that run on every merge, in parallel, with clear quality gates before release.",
      covers: "Pipelines, gates and reports",
    },
    {
      icon: "shield",
      title: "Keep it fast and stable",
      body: "Flaky tests fixed at the cause and slow ones trimmed, so the team keeps trusting a green build.",
      covers: "Flakes, speed and upkeep",
    },
  ],

  examples: [
    {
      client: "US product company",
      model: "Dedicated product pod",
      title: "Automation for a launch",
      body: "We provided automation QA engineers to cover a critical product launch with suites that run on every merge.",
      roles: ["Test Automation Architect", "UI Automation Engineer", "Delivery Lead"],
      stack: ["Playwright", "Postman", "GitHub Actions", "Docker"],
      outcomes: [
        { value: "Faster", label: "release cycles" },
        { value: "Reliable", label: "green builds" },
      ],
    },
    {
      client: "US enterprise platform",
      model: "Architecture and delivery",
      title: "Test framework modernisation",
      body: "We added specialists to replace a slow, flaky legacy suite with a modern framework and parallel runs.",
      roles: ["Test Automation Architect", "API Test Engineer", "Platform Engineer"],
      stack: ["Selenium", "Playwright", "Jenkins", "Docker"],
      outcomes: [
        { value: "Shorter", label: "test runs" },
        { value: "Stable", label: "test suites" },
      ],
    },
    {
      client: "US financial services",
      model: "Augmented squad",
      title: "Compliant test automation",
      body: "We placed automation QA engineers inside the client’s audit and compliance workflow to automate regression testing.",
      roles: ["UI Automation Engineer", "Performance Test Engineer", "Security Engineer"],
      stack: ["Cypress", "Appium", "k6", "Jenkins"],
      outcomes: [
        { value: "Compliant", label: "release evidence" },
        { value: "Seamless", label: "team integration" },
      ],
    },
  ],

  skillsAnswer:
    "Test automation architecture, UI automation with Playwright, Cypress or Selenium, API and contract testing, mobile automation with Appium, load testing, CI integration and flaky-test fixing.",

  /* Questions about this skill, asked first in the FAQ. Drafts, to be
     reworked; the four about how hiring works are shared (hire-copy.ts). */
  faqs: [
    {
      q: "Which framework will they use?",
      a: "Yours, if it works. If there isn’t one, they pick with your team and write the first suite in week one.",
    },
    {
      q: "How long until tests run in CI?",
      a: "Usually the first sprint: a smoke suite on every merge, then wider coverage as it proves stable.",
    },
    {
      q: "Do they replace manual testing?",
      a: "They take the repeatable checks off your testers, who can then spend their time exploring.",
    },
    {
      q: "What happens to flaky tests?",
      a: "They’re quarantined the day they flake, fixed at the cause, and only then trusted again.",
    },
  ],

  photos: {
    ways: [
      { image: ways, alt: "A developer rests her chin on her hand as she reads code on her monitor." },
      { image: shards, alt: "Two engineers work through test code at their monitors in a bright office.", focus: "50% 45%" },
      { image: rack, alt: "An engineer weighs up a test run at his desk.", focus: "50% 40%" },
    ],
    steps: { image: steps, alt: "Two colleagues laugh while working at a laptop in a bright office." },
    faq: { image: faq, alt: "Two engineers review a test run together on a laptop.", focus: "50% 45%" },
  },
};
