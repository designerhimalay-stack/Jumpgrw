import type { ImageMetadata } from "astro";

/* JumpGrowth's portfolio: every product in the company's portfolio, in its
   order. Briefs, taglines and stacks are the company's own words; each
   product's problem and solution text is in src/data/cases/ and shown on its
   own page (see src/lib/cases.ts). The mockups are transparent device
   renders. */

import gunlox from "@/assets/cases/projects/gunlox.webp";
import shipItPro from "@/assets/cases/projects/ship-it-pro.webp";
import greenaider from "@/assets/cases/projects/greenaider.webp";
import loanMantra from "@/assets/cases/projects/loan-mantra.webp";
import vowtimer from "@/assets/cases/projects/vowtimer.webp";
import lever5 from "@/assets/cases/projects/lever5.webp";
import pennAi from "@/assets/cases/projects/penn-ai.webp";
import fireflies from "@/assets/cases/projects/fireflies.webp";
import theoh from "@/assets/cases/projects/theoh.webp";
import dnaVibe from "@/assets/cases/projects/dna-vibe.webp";
import griefUnleashed from "@/assets/cases/projects/grief-unleashed.webp";
import voicestar from "@/assets/cases/projects/voicestar.webp";
import totallyPregnant from "@/assets/cases/projects/totally-pregnant.webp";

const SITE = "https://jumpgrowth.com/portfolio";

export interface Project {
  /** Anchor on the Case Studies page; the home page's cases link here. */
  slug: string;
  name: string;
  /** What it is, from the project's own page. */
  category: string;
  platform: string;
  tagline: string;
  brief: string;
  stack: string[];
  mockup: ImageMetadata;
  url: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "gunlox",
    name: "GunLox",
    category: "Smart firearm lock",
    platform: "iOS & Android",
    tagline: "Revolutionizing firearm security with the GunLox smart lock app.",
    brief: "The GunLox Smart Firearm Lock Companion App brings a new level of security and convenience to firearm management. With Bluetooth-enabled locking, users can easily control their smart gun locks through the app, which offers features like firearm tracking, usage logs, and remote access.",
    stack: ["Node.js", "React Native", "NGINX", "Angular", "MongoDB"],
    mockup: gunlox,
    url: `${SITE}/gunlox/`,
  },
  {
    slug: "ship-it-pro",
    name: "Ship It Pro",
    category: "B2B load planning",
    platform: "iOS & Android",
    tagline: "Cargo management with 3D interactive load diagrams.",
    brief: "Ship It Pro introduces a groundbreaking B2B load planning software, revolutionizing cargo management with its 3D interactive load diagrams and collaborative communication features.",
    stack: ["Node.js", "React Native", "NGINX", "Angular", "MongoDB"],
    mockup: shipItPro,
    url: `${SITE}/ship-it-pro/`,
  },
  {
    slug: "greenaider",
    name: "Greenaider",
    category: "Carbon footprint platform",
    platform: "Web",
    tagline: "Track, reduce, and transform your climate impact.",
    brief: "The GA Footprint Calculator empowers individuals and organizations to measure, track, and reduce their carbon footprint through sustainable choices, goal-setting, and green challenges.",
    stack: ["Node.js", "React Native", "NGINX", "Angular", "MongoDB"],
    mockup: greenaider,
    url: `${SITE}/greenaider/`,
  },
  {
    slug: "loan-mantra",
    name: "Loan Mantra",
    category: "Lending platform",
    platform: "Web",
    tagline: "Expert advisory and automated lending made simple.",
    brief: "Loan Mantra combines over 35 years of expertise with its cutting-edge BLUE™ lending platform to deliver tailored financial solutions for small businesses and middle-market companies. From strategic advisory to SBA loans, the firm empowers businesses to achieve their goals through seamless and efficient lending processes.",
    stack: ["HTML/CSS", ".NET", "Azure", "MS SQL Server"],
    mockup: loanMantra,
    url: `${SITE}/hca-loan-mantra/`,
  },
  {
    slug: "vowtimer",
    name: "VowTimer",
    category: "Wedding guest app",
    platform: "iOS & Android",
    tagline: "An app for the wedding guests that came for the party.",
    brief: "VowTimer provides a platform for wedding guests to connect pre-ceremony and take bets on what everyone’s thinking and how long the ceremony is going to take. Wedding guests can bet on the time it takes for the ceremony to end.",
    stack: ["Node.js", "React Native", "NGINX", "Angular", "MongoDB"],
    mockup: vowtimer,
    url: `${SITE}/vow-timer-app/`,
  },
  {
    slug: "lever5",
    name: "Lever5",
    category: "Stock trading platform",
    platform: "Web",
    tagline: "Multiple levels of leverage, with maximum price movements and lever numbers.",
    brief: "Lever5 is a web-based US stock trading platform, where people can trade stocks with trading credits, bought with actual money. It’s a platform to trade on stock price movements through private peer-to-peer contracts without paying any trading commission, offering a unique trading mechanism for superior earning potential and the freedom of day trading.",
    stack: ["Vue.js", "MySQL", "NGINX"],
    mockup: lever5,
    url: `${SITE}/lever5/`,
  },
  {
    slug: "penn-ai",
    name: "Penn.AI",
    category: "Speech to text",
    platform: "iOS & Android",
    tagline: "An AI-based platform that converts voice meetings into text notes.",
    brief: "This AI-powered mobile application transcribes your voice meetings in real time, providing speech-to-text notes on the fly. The notes can then be organized and searched as needed for records.",
    stack: ["Node.js", "React Native", "MongoDB"],
    mockup: pennAi,
    url: `${SITE}/penn-ai/`,
  },
  {
    slug: "fireflies",
    name: "Fireflies",
    category: "Friends & deals",
    platform: "iOS & Android",
    tagline: "Find new bars and restaurants while earning loyalty points.",
    brief: "Fireflies is a social app for users to enjoy discounted drinks while inviting friends to bars and restaurants, and publicly or privately pinning their location on the in-app map. Bar owners can also use the platform to market themselves and post offers to users.",
    stack: ["Node.js", "React Native", "NGINX", "Express.js", "MongoDB"],
    mockup: fireflies,
    url: `${SITE}/fireflies/`,
  },
  {
    slug: "theoh",
    name: "THEOH",
    category: "Open house platform",
    platform: "iOS & Android",
    tagline: "Search for or advertise open houses while on the go.",
    brief: "For homeowners and realtors, THEOH is an all-in-one platform. The app shows the open houses in your area with the photos, videos, and mapped location details of each property, so you can manage the listings and leads with just one click.",
    stack: ["Node.js", "LoopBack", "React Native", "NGINX", "MongoDB"],
    mockup: theoh,
    url: `${SITE}/theoh-app/`,
  },
  {
    slug: "dna-vibe",
    name: "DNA Vibe",
    category: "Wearable wellness device",
    platform: "iOS & Android",
    tagline: "A mobile app to turn on and manage the DNA Vibe device.",
    brief: "DNA Vibe is a wearable wellness device, delivering a proprietary blend of signaling protocols in low-level red light, near-infrared and magnetic. The safety and efficacy of these products have been well established through multiple double-blind clinical trials and FDA approvals.",
    stack: ["Node.js", "Flutter", "LoopBack", "MongoDB", "PHP", "NGINX"],
    mockup: dnaVibe,
    url: `${SITE}/dna-vibe/`,
  },
  {
    slug: "grief-unleashed",
    name: "Grief Unleashed",
    category: "Grief counseling app",
    platform: "Web, iOS & Android",
    tagline: "Helping people through grief, and growing stronger through the journey.",
    brief: "Grief Unleashed provides a web and mobile platform for users to receive real counseling from verified counselors who care about them and their life. Members book appointments with a counselor and have one-to-one video or audio sessions with them.",
    stack: ["Node.js", "React Native", "AWS", "MongoDB"],
    mockup: griefUnleashed,
    url: `${SITE}/grief-unleashed/`,
  },
  {
    slug: "voicestar",
    name: "VoiceStar.ai",
    category: "Voice-enabled bar inventory",
    platform: "iOS & Android",
    tagline: "Cuts the manual hours spent accounting for inventory.",
    brief: "VoiceStar.ai is a SaaS platform providing an AI-based mobile application for restaurant and bar professionals to manage their bar and food inventories by voice, reducing the manual hours spent accounting for inventories compared to current systems.",
    stack: ["Node.js", "AWS Lambda", "AWS Lex", "AWS Transcribe", "Express.js", "AngularJS", "MongoDB", "React Native", "NGINX"],
    mockup: voicestar,
    url: `${SITE}/voicestar/`,
  },
  {
    slug: "totally-pregnant",
    name: "Totally Pregnant",
    category: "Pregnancy aid app",
    platform: "iOS & Android",
    tagline: "Each application can be white-labelled to the hospital’s brand.",
    brief: "Totally Pregnant is an enterprise application that helps moms-to-be through pregnancy by answering pressing questions. It provides blogs, videos, chapters, toolboxes, parental and birth classes, products, a due date calculator, and more, all related to the specific week of pregnancy.",
    stack: ["Android (Java)", "iOS (Swift / Objective-C)"],
    mockup: totallyPregnant,
    url: `${SITE}/totally/`,
  },
];
