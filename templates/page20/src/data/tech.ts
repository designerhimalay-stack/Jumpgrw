import type { TechProfile } from "@/types/hire";
import hero from "@/assets/pages/p20-hero.jpg";
import ways from "@/assets/pages/p20-ways.jpg";
import platforms from "@/assets/pages/p20-platforms.jpg";
import maintain from "@/assets/pages/p20-maintain.jpg";
import r1 from "@/assets/pages/p20-r1.jpg";
import r2 from "@/assets/pages/p20-r2.jpg";
import r3 from "@/assets/pages/p20-r3.jpg";
import r4 from "@/assets/pages/p20-r4.jpg";
import steps from "@/assets/pages/p20-steps.jpg";
import faq from "@/assets/pages/p20-faq.jpg";

/* PHP developers: everything on this page that is about PHP. The rest of the
   words come from src/lib/hire-copy.ts, shared with every Technologies page.
   The examples and the skills answer are drafts; have them checked before
   launch. Photo sources are in docs/sections.md. */

export const TECH: TechProfile = {
  group: "Backend",
  skill: "PHP",
  Skill: "PHP",
  one: "PHP developer",
  many: "PHP developers",
  people: "Engineers",
  kit: "stack",
  products: "PHP applications",

  hero: {
    lede: "PHP developers who build on Laravel, Symfony and WordPress, and keep older PHP estates fast, patched and upgraded, inside your product team.",
    photo: { image: hero, alt: "A developer works at his laptop beside a colleague in a bright office." },
  },

  core: [
    { name: "PHP", logo: "php", note: "Core language" },
    { name: "Laravel", logo: "laravel", note: "App framework" },
    { name: "Symfony", logo: "symfony", note: "Enterprise framework" },
    { name: "WordPress", logo: "wordpress", note: "Content platform" },
    { name: "MySQL", logo: "mysql", note: "Relational data" },
    { name: "Composer", logo: "composer", note: "Packages" },
  ],
  ecosystem: ["Drupal", "WooCommerce", "Livewire", "Doctrine", "PHPUnit", "Redis", "Docker", "PhpStorm"],

  benefits: [
    {
      title: "Products built on Laravel",
      body: "SaaS products, APIs and admin panels built on Laravel, with queues and tests in place from the first sprint.",
      work: ["Feature development", "API development", "Admin panels"],
      tools: ["Laravel", "Livewire", "Redis", "MySQL"],
    },
    {
      title: "Upgrades to PHP 8",
      body: "Older apps moved up one version at a time, with tests around the risky paths first, so nothing stops running.",
      work: ["Version upgrades", "Legacy rescues", "Modernisation"],
      tools: ["PHP", "Composer", "PHPUnit", "Docker"],
    },
    {
      title: "WordPress and Drupal, done properly",
      body: "Custom themes, plugins and modules, store integrations and safe core updates for the sites your business runs on.",
      work: ["Custom themes", "Plugins and modules", "Store integrations"],
      tools: ["WordPress", "WooCommerce", "Drupal", "MySQL"],
    },
    {
      title: "Healthy legacy code",
      body: "The steady work that keeps a PHP estate fast, patched and safe to change: profiling, dependencies and security fixes.",
      work: ["Performance tuning", "Security patches", "Dependency updates"],
      tools: ["Composer", "Redis", "PhpStorm", "MySQL"],
    },
  ],

  roles: [
    {
      title: "PHP Architect",
      body: "Sets the shape of your PHP estate: frameworks, data, the upgrade path and the standards the team builds to.",
      skills: ["PHP", "Laravel", "Symfony", "MySQL"],
      part: "Architecture",
      photo: { image: r1, alt: "A developer in a black t-shirt works at a standing desk with an all-in-one computer in a plant-filled studio." },
    },
    {
      title: "Laravel Specialist",
      body: "Ships features end to end in your Laravel app, from the route to the query, with the tests alongside.",
      skills: ["Laravel", "Livewire", "Redis", "PHPUnit"],
      part: "Core delivery",
      photo: { image: r2, alt: "A woman in a headset smiles while working on her laptop in a colourful office." },
    },
    {
      title: "WordPress Engineer",
      body: "Builds custom themes, plugins and store integrations, and keeps your sites fast and safely updated.",
      skills: ["WordPress", "WooCommerce", "PHP", "MySQL"],
      part: "Platforms",
      photo: { image: r3, alt: "A man leans in to help a colleague at her laptop on a standing desk." },
    },
    {
      title: "Modernisation Engineer",
      body: "Takes older PHP code up to PHP 8 a step at a time, with tests first and the app running throughout.",
      skills: ["PHP", "Symfony", "Composer", "PHPUnit"],
      part: "Modernisation",
      photo: { image: r4, alt: "A developer in a plaid shirt smiles while working on a laptop in his lap." },
    },
  ],

  capabilities: [
    {
      label: "Build",
      icon: "layout",
      title: "Build PHP applications",
      body: "PHP developers who build robust web apps, APIs and content platforms.",
      chips: ["Laravel", "Symfony", "WordPress"],
    },
    {
      label: "Integrate",
      icon: "plug",
      title: "Connect your systems",
      body: "Specialists who connect your PHP apps to payments, ERP, search and third-party APIs.",
      chips: ["REST APIs", "WooCommerce", "Queues"],
    },
    {
      label: "Platform",
      icon: "cloud",
      title: "Deploy securely",
      body: "Engineers who automate your deploys, test your rollbacks and keep production patched.",
      chips: ["Docker", "CI/CD", "Security"],
    },
  ],

  examples: [
    {
      client: "US product company",
      model: "Dedicated product pod",
      title: "Laravel product team",
      body: "We provided PHP developers to build a Laravel product for a critical launch and set up reliable delivery workflows.",
      roles: ["PHP Architect", "Laravel Specialist", "Delivery Lead"],
      stack: ["PHP", "Laravel", "MySQL", "Redis"],
      outcomes: [
        { value: "Faster", label: "feature release cycles" },
        { value: "Reliable", label: "production deployments" },
      ],
    },
    {
      client: "US enterprise platform",
      model: "Architecture and delivery",
      title: "PHP 8 modernisation",
      body: "We added specialists to move a large legacy platform from PHP 5 to PHP 8, step by step, and pay down its technical debt.",
      roles: ["Modernisation Engineer", "PHP Architect", "QA Engineer"],
      stack: ["PHP", "Symfony", "Composer", "PHPUnit"],
      outcomes: [
        { value: "Supported", label: "PHP version" },
        { value: "Reduced", label: "technical debt" },
      ],
    },
    {
      client: "US financial services",
      model: "Augmented squad",
      title: "Secure feature delivery",
      body: "We placed PHP developers inside the client’s strict security and compliance workflow to ship new account and payment features.",
      roles: ["Laravel Specialist", "Security Engineer", "Data Engineer"],
      stack: ["PHP", "Laravel", "MySQL", "Docker"],
      outcomes: [
        { value: "Compliant", label: "feature releases" },
        { value: "Seamless", label: "team integration" },
      ],
    },
  ],

  skillsAnswer:
    "PHP architecture, Laravel and Symfony, WordPress, WooCommerce and Drupal, REST APIs, PHP 8 upgrades, legacy code rescues, performance tuning and testing.",

  /* Questions about this skill, asked first in the FAQ. Drafts, to be
     reworked; the four about how hiring works are shared (hire-copy.ts). */
  faqs: [
    {
      q: "Can you upgrade an old PHP 5 app?",
      a: "Yes. We put tests around the risky parts first, then move up one version at a time so the app keeps running.",
    },
    {
      q: "Do you work on WordPress and WooCommerce?",
      a: "Yes: custom themes and plugins, store integrations, speed work and safe core updates.",
    },
    {
      q: "Laravel or Symfony?",
      a: "Both. We follow what you run today, and for new builds we recommend one to suit the product and the team.",
    },
    {
      q: "Can you take over an app another team built?",
      a: "Yes. We start with an audit of the code, dependencies and hosting, and agree a plan before changing anything.",
    },
  ],

  photos: {
    ways: [
      { image: ways, alt: "A developer in a grey hoodie works in a code editor on his laptop, phone beside him." },
      { image: platforms, alt: "A developer in headphones writes code across his monitors in a dim room.", focus: "4% 50%" },
      { image: maintain, alt: "An engineer works through code on her laptop at a bright desk.", focus: "62% 50%" },
    ],
    steps: { image: steps, alt: "A small team talks through a project around laptops in a glass-walled meeting room." },
    faq: { image: faq, alt: "A team listens to a colleague present in a meeting room, laptops open.", focus: "50% 45%" },
  },
};
