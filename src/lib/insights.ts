import type { ImageMetadata } from "astro";

/* JumpGrowth's published insights: blog posts, white papers and events, in
   one place so the About page and the Blog, White Papers and Events pages
   never disagree. Every blog article, white paper and event has its own page
   on this site: article text is in src/data/blog/ (src/lib/articles.ts), a
   paper's highlights in src/data/papers/ (src/lib/papers.ts), and an event's
   page is built from its entry below. Newest first. */

import buildAiMvp from "@/assets/insights/blog/build-ai-powered-mvp-30-days.png";
import customVsInHouse from "@/assets/insights/blog/custom-software-company-vs-in-house-2026.png";
import aiMvpRoadmap from "@/assets/insights/blog/ai-mvp-development-roadmap-2026.png";
import jgVsDallas from "@/assets/insights/blog/jumpgrowth-vs-dallas-software-companies-2026.png";
import industriesDallas from "@/assets/insights/blog/industries-driving-software-dallas-2026.jpg";
import nearshoreTeams from "@/assets/insights/blog/nearshore-teams-2026-comparison.jpg";
import aiBusinessSoftware from "@/assets/insights/blog/ai-business-software-buyers-guide-2026.jpg";
import customVsOffTheShelf from "@/assets/insights/blog/custom-vs-off-the-shelf-dallas-2026.jpg";
import healthcareSoftware from "@/assets/insights/blog/custom-healthcare-software-2026.jpg";
import hiringPythonJava from "@/assets/insights/blog/hiring-python-java-developers-2026.jpg";

import vibeCoding from "@/assets/insights/whitepapers/vibe-coding.jpg";
import mobileApp from "@/assets/insights/whitepapers/why-your-business-needs-a-mobile-app.png";
import businessAi from "@/assets/insights/whitepapers/business-potential-of-ai.webp";

import dfwStartupWeek from "@/assets/insights/events/dfw-startup-week-2025.webp";

const SITE = "https://jumpgrowth.com";

export interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  /** The article's original address; the site's own page is /blog/<slug>/. */
  url: string;
  /** The article's page name, taken from `url`. */
  slug: string;
  cover: ImageMetadata;
  author?: string;
}

const POSTS: Omit<BlogPost, "slug">[] = [
  {
    title: "How to Build an AI-Powered MVP in 30 Days: Architecture, Stack, and Cost Breakdown",
    excerpt: "Step-by-step technical guide for AI MVP development in 30 days. LLM selection, backend stack, cost ranges, and phased timeline for startups.",
    category: "App Development",
    url: `${SITE}/blog/build-ai-powered-mvp-30-days-architecture-stack-cost/`,
    cover: buildAiMvp,
    author: "Naval Madaan",
  },
  {
    title: "Custom Software Development Company vs. In-House Team: A 2026 Cost and Risk Analysis",
    excerpt: "Compare total cost, risk, and delivery speed of a custom software development company vs. in-house team across startup, SMB, and enterprise contexts.",
    category: "Software Development",
    url: `${SITE}/blog/custom-software-development-company-vs-in-house-team-2026/`,
    cover: customVsInHouse,
  },
  {
    title: "AI MVP Development in 2026: A Technical Roadmap from Idea to Validated Product",
    excerpt: "A stage-by-stage technical guide to AI MVP development in 2026, data architecture, model selection, sprint timelines, and validation loops that actually work.",
    category: "MVP Development",
    url: `${SITE}/blog/ai-mvp-development-technical-roadmap-2026/`,
    cover: aiMvpRoadmap,
  },
  {
    title: "JumpGrowth vs. Other Dallas Software Development Companies: How to Evaluate Your Options in 2026",
    excerpt: "A practical, data-backed framework for evaluating any software development company in Dallas, with scoring criteria, Clutch benchmarks, and honest trade-offs.",
    category: "Software Development",
    url: `${SITE}/blog/jumpgrowth-vs-dallas-software-development-companies-how-to-evaluate-2026/`,
    cover: jgVsDallas,
  },
  {
    title: "Top Industries Driving Custom Software Development Demand in Dallas in 2026",
    excerpt: "Discover which Dallas industries are fueling demand for custom software development in 2026, with sector investment data, complexity benchmarks, and real insights.",
    category: "Software Development",
    url: `${SITE}/blog/industries-driving-custom-software-development-dallas-2026/`,
    cover: industriesDallas,
  },
  {
    title: "Nearshore Software Development Teams in 2026: Time Zone, Cost, and Talent Quality Compared to Offshore",
    excerpt: "Compare nearshore vs offshore dev teams in 2026. Hourly rates, time zone overlap, English proficiency, and talent density by region analyzed with real data.",
    category: "Nearshore",
    url: `${SITE}/blog/nearshore-software-development-teams-2026-comparison/`,
    cover: nearshoreTeams,
  },
  {
    title: "AI Business Software in 2026: The Complete Buyer’s Guide for Enterprises Evaluating Custom vs. Off-the-Shelf Solutions",
    excerpt: "Compare custom vs. SaaS AI business software for enterprises: TCO framework, feature matrix, implementation timelines, and no-code AI builder options.",
    category: "Software Development",
    url: `${SITE}/blog/ai-business-software-buyers-guide-2026-custom-vs-off-the-shelf/`,
    cover: aiBusinessSoftware,
  },
  {
    title: "Custom Software Development vs. Off-the-Shelf Solutions: What Dallas Businesses Need to Know in 2026",
    excerpt: "Dallas businesses: compare custom software development vs. SaaS across cost, scalability, and integration. Real data for logistics, fintech, and healthcare.",
    category: "Software Development",
    url: `${SITE}/blog/custom-software-development-vs-off-the-shelf-solutions-dallas-2026/`,
    cover: customVsOffTheShelf,
  },
  {
    title: "Custom Healthcare Software Development in 2026: Compliance, Costs, and Build vs. Buy",
    excerpt: "HIPAA compliance costs, FHIR integration, and a real build vs. buy analysis for custom healthcare software development in 2026. Data-backed and practitioner-written.",
    category: "Software Development",
    url: `${SITE}/blog/custom-healthcare-software-development-2026-compliance-costs-build-vs-buy/`,
    cover: healthcareSoftware,
  },
  {
    title: "Hiring Python and Java Developers in 2026: Salary Benchmarks, Vetting Frameworks, and Build vs. Buy Decisions",
    excerpt: "Data-driven guide to hiring Python and Java developers in 2026: salary benchmarks, technical vetting, and when to hire full-time vs. nearshore teams.",
    category: "Software Development",
    url: `${SITE}/blog/hiring-python-java-developers-2026-salary-benchmarks-vetting-frameworks/`,
    cover: hiringPythonJava,
  },
];

export const BLOG_POSTS: BlogPost[] = POSTS.map((post) => ({
  ...post,
  slug: post.url.split("/blog/")[1].replace(/\/$/, ""),
}));

/** The topics the company blog files posts under. */
export const BLOG_CATEGORIES = [
  "App Development", "App of the week", "AR / VR Development", "Artificial Intelligence", "Companies",
  "Delivery Apps", "Global Capabilities Center", "MVP Development", "Nearshore", "Software Development",
  "Startups", "Tech Industry", "Technology", "Tips", "Web App Development",
];

export interface WhitePaper {
  title: string;
  summary: string;
  topic: "Artificial Intelligence" | "Mobile Application";
  /** The paper's original address; the site's own page is /whitepaper/<slug>/. */
  url: string;
  slug: string;
  cover: ImageMetadata;
}

const PAPERS: Omit<WhitePaper, "slug">[] = [
  {
    title: "Vibe Coding: Navigating the Future of AI-Enhanced Software Development",
    summary: "Explore how AI is reshaping the way we build software. This whitepaper introduces the concept of Vibe Coding—an innovative, AI-assisted development approach that allows both technical and non-technical users to turn ideas into working software using natural language prompts. Learn how your product teams can accelerate innovation, improve efficiency, and stay ahead in the age of intelligent automation.",
    topic: "Artificial Intelligence",
    url: `${SITE}/whitepaper/vibe-coding-navigating-the-future-of-ai-enhanced-software-development/`,
    cover: vibeCoding,
  },
  {
    title: "Why Your Business Needs a Mobile App?",
    summary: "Mobile applications are a direct channel for businesses to engage with their customers, offering personalized experiences that foster loyalty and drive revenue, whether through ecommerce, social media, or service delivery.",
    topic: "Mobile Application",
    url: `${SITE}/whitepaper/why-your-business-needs-a-mobile-app/`,
    cover: mobileApp,
  },
  {
    title: "The Business Potential of AI",
    summary: "AI technologies are transforming industries by enabling businesses to automate processes, enhance decision-making, and unlock unprecedented levels of efficiency and innovation.",
    topic: "Artificial Intelligence",
    url: `${SITE}/whitepaper/the-business-potential-of-ai/`,
    cover: businessAi,
  },
];

export const WHITE_PAPERS: WhitePaper[] = PAPERS.map((paper) => ({
  ...paper,
  slug: paper.url.split("/whitepaper/")[1].replace(/\/$/, ""),
}));

export interface CompanyEvent {
  title: string;
  tagline: string;
  category: string;
  start: string;
  end: string;
  /** e.g. "03 Aug – 07 Aug 2025" */
  dates: string;
  place: string;
  /** The event's original address; the site's own page is /events/<slug>/. */
  url: string;
  slug: string;
  image: ImageMetadata;
}

const withEventSlug = (events: Omit<CompanyEvent, "slug">[]): CompanyEvent[] =>
  events.map((event) => ({ ...event, slug: event.url.split("/event/")[1].replace(/\/$/, "") }));

export const UPCOMING_EVENTS: CompanyEvent[] = [];

export const PAST_EVENTS: CompanyEvent[] = withEventSlug([
  {
    title: "DFW Startup Week 2025",
    tagline: "Where Innovation Meets Opportunity",
    category: "Startup & Tech Conference",
    start: "2025-08-03",
    end: "2025-08-07",
    dates: "03 Aug – 07 Aug 2025",
    place: "Dallas, Texas 75275",
    url: `${SITE}/event/dfw-startup-week-2025-where-innovation-meets-opportunity/`,
    image: dfwStartupWeek,
  },
]);
