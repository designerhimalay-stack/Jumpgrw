import type { TechProfile } from "@/types/hire";
import hero from "@/assets/pages/p18-hero.jpg";
import ways from "@/assets/pages/p18-ways.jpg";
import modernise from "@/assets/pages/p18-modernise.jpg";
import whiteboard from "@/assets/pages/p18-whiteboard.jpg";
import r1 from "@/assets/pages/p18-r1.jpg";
import r2 from "@/assets/pages/p18-r2.jpg";
import r3 from "@/assets/pages/p18-r3.jpg";
import r4 from "@/assets/pages/p18-r4.jpg";
import steps from "@/assets/pages/p18-steps.jpg";
import faq from "@/assets/pages/p18-faq.jpg";

/* .NET developers: everything on this page that is about .NET. The rest of
   the words come from src/lib/hire-copy.ts, shared with every Technologies
   page. The examples and the skills answer are drafts; have them checked
   before launch. Photo sources are in docs/sections.md. */

export const TECH: TechProfile = {
  group: "Backend",
  skill: ".NET",
  Skill: ".NET",
  one: ".NET developer",
  many: ".NET developers",
  people: "Engineers",
  kit: "stack",
  products: ".NET applications",

  hero: {
    lede: "Specialist .NET developers who build clean, layered systems and move .NET Framework estates to modern .NET, inside your product team.",
    photo: { image: hero, alt: "A developer works through code across two monitors." },
  },

  core: [
    { name: ".NET", logo: "dotnet", note: "Runtime and SDK" },
    { name: "C#", note: "Core language" },
    { name: "ASP.NET Core", note: "Web APIs" },
    { name: "Entity Framework Core", note: "Data access" },
    { name: "Blazor", logo: "blazor", note: "Web UI" },
    { name: "Docker", logo: "docker", note: "Containers" },
  ],
  ecosystem: ["Azure", "SQL Server", "PostgreSQL", "RabbitMQ", "Redis", "xUnit", "NuGet", "Swagger", "Kubernetes"],

  benefits: [
    {
      title: "Modernise without a rewrite",
      body: "Legacy .NET Framework moved to modern .NET one boundary at a time, while the existing app keeps running.",
      work: ["Framework migration", "Version upgrades", "Modernisation"],
      tools: [".NET", "ASP.NET Core", "Docker", "Azure"],
    },
    {
      title: "Clean, layered architecture",
      body: "Business rules at the centre and frameworks at the edge, so the code that changes most stays easy to change.",
      work: ["Architecture design", "Domain modelling", "Refactoring"],
      tools: ["C#", ".NET", "Entity Framework Core", "xUnit"],
    },
    {
      title: "APIs and services",
      body: "Fast, documented APIs and background services on ASP.NET Core, ready for containers and the cloud.",
      work: ["API development", "Messaging", "Performance tuning"],
      tools: ["ASP.NET Core", "Swagger", "RabbitMQ", "Redis"],
    },
    {
      title: "Web apps in C#",
      body: "Back offices and internal tools built in Blazor, so one team works in one language from database to screen.",
      work: ["Blazor apps", "Admin tools", "Feature development"],
      tools: ["Blazor", "C#", "Entity Framework Core", "SQL Server"],
    },
  ],

  roles: [
    {
      title: ".NET Architect",
      body: "Sets the shape of your .NET estate: layers, services, the migration path and the standards the team builds to.",
      skills: [".NET", "C#", "ASP.NET Core", "Azure"],
      part: "Architecture",
      photo: { image: r1, alt: "A developer in a striped polo works at a monitor on a standing desk setup." },
    },
    {
      title: ".NET Specialist",
      body: "Ships features end to end in your solution, from the endpoint to the database, with the tests alongside.",
      skills: ["C#", "ASP.NET Core", "Entity Framework Core", "xUnit"],
      part: "Core delivery",
      photo: { image: r2, alt: "A developer in a black t-shirt works on a laptop at a long table in a bright office." },
    },
    {
      title: "Migration Engineer",
      body: "Moves .NET Framework code to modern .NET a piece at a time, keeping production running throughout.",
      skills: [".NET Framework", ".NET", "Docker", "Azure"],
      part: "Modernisation",
      photo: { image: r3, alt: "A senior engineer points out something on screen to a colleague." },
    },
    {
      title: "Cloud Engineer",
      body: "Runs your .NET services in containers and the cloud, with the pipelines and monitoring around them.",
      skills: ["Azure", "Docker", "Kubernetes", "GitHub Actions"],
      part: "Platform",
      photo: { image: r4, alt: "A smiling developer sits at a desk with monitors in an office." },
    },
  ],

  capabilities: [
    {
      label: "Build",
      icon: "layout",
      title: "Build .NET applications",
      body: ".NET developers who build robust APIs, services and Blazor web apps.",
      chips: [".NET", "ASP.NET Core", "Blazor"],
    },
    {
      label: "Integrate",
      icon: "plug",
      title: "Connect your systems",
      body: "Specialists who connect your .NET services to databases, messaging, sign-in and third-party APIs.",
      chips: ["Entity Framework Core", "RabbitMQ", "REST APIs"],
    },
    {
      label: "Platform",
      icon: "cloud",
      title: "Deploy securely",
      body: "Engineers who ship containers through your pipeline to the cloud and keep watch on production after release.",
      chips: ["Azure", "Containers", "Security"],
    },
  ],

  examples: [
    {
      client: "US product company",
      model: "Dedicated product pod",
      title: ".NET application team",
      body: "We provided .NET developers to build the services behind a critical product launch and set up reliable delivery workflows.",
      roles: [".NET Architect", ".NET Specialist", "Delivery Lead"],
      stack: [".NET", "C#", "ASP.NET Core", "SQL Server"],
      outcomes: [
        { value: "Faster", label: "feature release cycles" },
        { value: "Reliable", label: "production deployments" },
      ],
    },
    {
      client: "US enterprise platform",
      model: "Architecture and delivery",
      title: ".NET Framework modernisation",
      body: "We added specialists to move a .NET Framework platform to modern .NET, one boundary at a time, and pay down its technical debt.",
      roles: ["Migration Engineer", ".NET Architect", "QA Engineer"],
      stack: [".NET", "ASP.NET Core", "Entity Framework Core", "Docker"],
      outcomes: [
        { value: "Modern", label: ".NET runtime" },
        { value: "Reduced", label: "technical debt" },
      ],
    },
    {
      client: "US financial services",
      model: "Augmented squad",
      title: "Secure feature delivery",
      body: "We placed .NET developers inside the client’s strict security and compliance workflow to ship new capabilities on Azure.",
      roles: [".NET Specialist", "Security Engineer", "Cloud Engineer"],
      stack: ["C#", "ASP.NET Core", "Azure", "SQL Server"],
      outcomes: [
        { value: "Compliant", label: "feature releases" },
        { value: "Seamless", label: "team integration" },
      ],
    },
  ],

  skillsAnswer:
    ".NET architecture, C# and ASP.NET Core APIs, Entity Framework Core, Blazor, .NET Framework migration, messaging, Azure and containers, and testing.",

  /* Questions about this skill, asked first in the FAQ. Drafts, to be
     reworked; the four about how hiring works are shared (hire-copy.ts). */
  faqs: [
    {
      q: "Can you modernise without a full rewrite?",
      a: "Yes. We move one boundary at a time behind the existing app, so it keeps running while each part lands on modern .NET.",
    },
    {
      q: "Do you work in our architecture or impose one?",
      a: "Yours first. Where it helps, we introduce clean layers gradually, starting with the code that changes most.",
    },
    {
      q: "Which IDEs and tools do your developers use?",
      a: "Rider or Visual Studio, whichever your team uses, with your CI, your package feeds and your conventions.",
    },
    {
      q: "Can they support what runs in production?",
      a: "Yes. The team can own releases, monitoring and fixes for the services they build, or hand them over cleanly.",
    },
  ],

  photos: {
    ways: [
      { image: ways, alt: "A young engineer works at a desk with two monitors in an office." },
      { image: modernise, alt: "An engineer reads code on a large monitor at her desk.", focus: "50% 40%" },
      { image: whiteboard, alt: "Two engineers talk through a system diagram on a whiteboard.", focus: "50% 40%" },
    ],
    steps: { image: steps, alt: "Two men in shirts and ties discuss charts on a laptop in a glass-walled lounge." },
    faq: { image: faq, alt: "A team plans at a whiteboard while colleagues listen at the table.", focus: "50% 45%" },
  },
};
