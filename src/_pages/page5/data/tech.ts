import type { TechProfile } from "@pg/page5/types/hire";
import hero from "@pg/page5/assets/pages/p5-hero.jpg";
import ways from "@pg/page5/assets/pages/p5-ways.jpg";
import consolePhoto from "@pg/page5/assets/pages/p5-console.jpg";
import devices from "@pg/page5/assets/pages/p5-devices.jpg";
import r1 from "@pg/page5/assets/pages/p5-r1.jpg";
import r2 from "@pg/page5/assets/pages/p5-r2.jpg";
import r3 from "@pg/page5/assets/pages/p5-r3.jpg";
import r4 from "@pg/page5/assets/pages/p5-r4.jpg";
import steps from "@pg/page5/assets/pages/p5-steps.jpg";
import faq from "@pg/page5/assets/pages/p5-faq.jpg";

/* QA engineers: everything on this page that is about quality assurance,
   manual and automated. The rest of the words come from
   src/lib/hire-copy.ts, shared with every Technologies page. The examples
   and the skills answer are drafts; have them checked before launch. Photo
   sources are in docs/sections.md. */

export const TECH: TechProfile = {
  group: "Delivery",
  crumb: "QA engineers",
  skill: "QA",
  Skill: "QA",
  one: "QA engineer",
  many: "QA engineers",
  people: "Engineers",
  kit: "stack",
  products: "tested products",

  hero: {
    lede: "Specialist QA engineers who plan, run and automate your testing, from a first release to an enterprise platform, inside your product team.",
    photo: { image: hero, alt: "A tester checks an app on a phone beside a laptop running the same build." },
  },

  core: [
    { name: "TestRail", logo: "testrail", note: "Test management" },
    { name: "Jira", logo: "jira", note: "Defect tracking" },
    { name: "Playwright", note: "Browser automation" },
    { name: "Postman", logo: "postman", note: "API testing" },
    { name: "Appium", logo: "appium", note: "Mobile automation" },
    { name: "BrowserStack", note: "Real devices" },
  ],
  ecosystem: ["Selenium", "Cypress", "Zephyr", "k6", "JMeter", "axe", "Charles Proxy", "GitHub Actions", "Jenkins"],

  benefits: [
    {
      title: "A test strategy that fits",
      body: "A clear plan for what to test, how deeply and when, sized to the risk in each release rather than to a template.",
      work: ["Test strategy", "Risk analysis", "Release criteria"],
      tools: ["TestRail", "Jira", "Confluence"],
    },
    {
      title: "Exploratory and manual testing",
      body: "Testers who think like your users and find the problems no script anticipated, then write them up so they’re easy to fix.",
      work: ["Exploratory sessions", "Regression passes", "Acceptance testing"],
      tools: ["TestRail", "Jira", "BrowserStack", "Charles Proxy"],
    },
    {
      title: "Automation where it pays",
      body: "The checks your team repeats every sprint, automated and run in your pipeline, so people spend their time on what needs judgement.",
      work: ["UI automation", "API testing", "CI integration"],
      tools: ["Playwright", "Postman", "Appium", "GitHub Actions"],
    },
    {
      title: "Performance and accessibility",
      body: "Load, speed and accessibility checked before release, so the product holds up for every user on a busy day.",
      work: ["Load testing", "Accessibility audits", "Device coverage"],
      tools: ["k6", "JMeter", "axe", "BrowserStack"],
    },
  ],

  roles: [
    {
      title: "QA Lead",
      body: "Sets your test strategy and release criteria, runs the QA effort and tells you plainly whether a build is ready to ship.",
      skills: ["Test strategy", "TestRail", "Jira", "Risk analysis"],
      part: "Test strategy",
      photo: { image: r1, alt: "A developer in glasses tests an app on a phone held sideways." },
    },
    {
      title: "Exploratory Tester",
      body: "Works through your product the way users do, finds the edge cases and writes defects your engineers can act on straight away.",
      skills: ["Exploratory testing", "Regression", "Jira", "BrowserStack"],
      part: "Manual testing",
      photo: { image: r2, alt: "A developer tests an app on a tablet at his desk beside a laptop." },
    },
    {
      title: "Test Automation Engineer",
      body: "Turns repeated checks into stable automated suites for your UI and APIs, and keeps them running in your pipeline.",
      skills: ["Playwright", "Postman", "TypeScript", "GitHub Actions"],
      part: "Automation",
      photo: { image: r3, alt: "A woman checks an app on her phone against the same screen on her laptop." },
    },
    {
      title: "Mobile QA Engineer",
      body: "Tests your iOS and Android apps on the devices and OS versions your users actually have, by hand and with automation.",
      skills: ["Appium", "BrowserStack", "iOS", "Android"],
      part: "Devices",
      photo: { image: r4, alt: "Two women check something on a phone together beside a laptop." },
    },
  ],

  capabilities: [
    {
      label: "Plan",
      icon: "document",
      title: "Plan your testing",
      body: "QA engineers who turn requirements into test plans, cases and clear release criteria.",
      chips: ["Test strategy", "Test cases", "TestRail"],
    },
    {
      label: "Automate",
      icon: "sync",
      title: "Automate the repeats",
      body: "Specialists who automate your regression checks and run them on every change in your pipeline.",
      chips: ["Playwright", "Postman", "CI/CD"],
    },
    {
      label: "Release",
      icon: "shield",
      title: "Release with confidence",
      body: "Engineers who test across browsers and devices, sign off each build and keep watch after release.",
      chips: ["Real devices", "Performance", "Accessibility"],
    },
  ],

  help: [
    {
      icon: "document",
      title: "Plan the testing",
      body: "Test strategy, cases and release criteria written against your requirements, before the first line of code.",
      covers: "Strategy, cases and criteria",
    },
    {
      icon: "pointer",
      title: "Test as you build",
      body: "Features tested inside the sprint, by hand and by script, so defects are found while the work is still fresh.",
      covers: "Manual, exploratory and automated",
    },
    {
      icon: "shield",
      title: "Gate every release",
      body: "Regression, performance and device checks on each build, with a clear go or no-go before anything ships.",
      covers: "Regression, devices and sign-off",
    },
    {
      icon: "sync",
      title: "Learn and improve",
      body: "Production issues traced back to gaps in the tests, and the suite updated so the same bug doesn’t return.",
      covers: "Defect analysis and coverage",
    },
  ],

  examples: [
    {
      client: "US product company",
      model: "Dedicated product pod",
      title: "QA for a product launch",
      body: "We provided QA engineers to test a critical product launch and set up a release process the team could repeat.",
      roles: ["QA Lead", "Exploratory Tester", "Test Automation Engineer"],
      stack: ["TestRail", "Jira", "Playwright", "BrowserStack"],
      outcomes: [
        { value: "Confident", label: "launch sign-off" },
        { value: "Fewer", label: "production defects" },
      ],
    },
    {
      client: "US enterprise platform",
      model: "Architecture and delivery",
      title: "Regression suite rebuild",
      body: "We added specialists to replace a slow manual regression cycle with automated suites that run on every change.",
      roles: ["Test Automation Engineer", "QA Lead", "Platform Engineer"],
      stack: ["Playwright", "Postman", "GitHub Actions", "TestRail"],
      outcomes: [
        { value: "Shorter", label: "regression cycles" },
        { value: "Stable", label: "test suites" },
      ],
    },
    {
      client: "US financial services",
      model: "Augmented squad",
      title: "Compliant release testing",
      body: "We placed QA engineers inside the client’s audit and compliance workflow to test and sign off each release.",
      roles: ["QA Lead", "Mobile QA Engineer", "Security Engineer"],
      stack: ["TestRail", "Jira", "Appium", "BrowserStack"],
      outcomes: [
        { value: "Compliant", label: "release evidence" },
        { value: "Seamless", label: "team integration" },
      ],
    },
  ],

  skillsAnswer:
    "Test strategy and planning, manual and exploratory testing, UI and API automation, mobile and cross-browser testing, performance and accessibility testing, and release sign-off.",

  /* Questions about this skill, asked first in the FAQ. Drafts, to be
     reworked; the four about how hiring works are shared (hire-copy.ts). */
  faqs: [
    {
      q: "Can they work with our existing tests?",
      a: "Yes. We start from your suite, fix what is flaky, and grow coverage where the risk is highest.",
    },
    {
      q: "Do you only automate, or test by hand too?",
      a: "Both. Automation covers what repeats; exploratory testing finds what nobody scripted.",
    },
    {
      q: "Which tools do you use?",
      a: "Whatever fits your stack: Playwright, Cypress, Appium, k6 and others, run in your CI.",
    },
  ],

  photos: {
    ways: [
      { image: ways, alt: "A woman in a yellow sweater works on a laptop at a standing desk." },
      { image: consolePhoto, alt: "Two teammates point at a laptop screen, reviewing a build together.", focus: "50% 50%" },
      { image: devices, alt: "A tester works through an app on a tablet at a bright table.", focus: "50% 45%" },
    ],
    steps: { image: steps, alt: "Two women meet at a conference table with a laptop and a wall screen showing an app." },
    faq: { image: faq, alt: "An engineer maps test flows on a whiteboard.", focus: "50% 40%" },
  },
};
