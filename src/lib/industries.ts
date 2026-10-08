import type { ImageMetadata } from "astro";
import { PROJECTS, type Project } from "@/lib/projects";

import zoneUs from "@/assets/xshore/zone-us.jpg";
import zoneIndia from "@/assets/xshore/zone-india.jpg";
import people from "@/assets/why/people.jpg";
import specialist from "@/assets/teams/specialist.jpg";
import production from "@/assets/teams/production.jpg";
import extension from "@/assets/teams/extension.jpg";
import portrait from "@/assets/showcase/portrait.jpg";
import codeReview from "@/assets/careers/hero.jpg";

/* The industries JumpGrowth builds for. Each page's text (the challenges it
   solves, its solutions, process, reasons, client stories and FAQs) is the
   company's own and is kept as data in src/data/industries/<slug>.json. This
   module adds what the data doesn't hold: the order, a short line for cards,
   a photo, and the case studies from the portfolio that belong to each. */

interface Item {
  title: string;
  body: string;
}

interface Block {
  title: string;
  lead: string;
  items: Item[];
}

interface IndustryData {
  slug: string;
  name: string;
  title: string;
  intro: string[];
  challenges: Block | null;
  solutions: Block | null;
  process: Block | null;
  why: Block | null;
  stories: Block | null;
  faqs: { q: string; a: string }[];
}

export interface Industry extends IndustryData {
  /** One line for cards and the hero lede. */
  summary: string;
  photo: ImageMetadata;
  photoAlt: string;
  cases: Project[];
}

const FILES = import.meta.glob<IndustryData>("../data/industries/*.json", { eager: true, import: "default" });
const BY_SLUG = new Map(Object.values(FILES).map((data) => [data.slug, data]));

const META: { slug: string; summary: string; photo: ImageMetadata; photoAlt: string; cases: string[] }[] = [
  {
    slug: "healthcare",
    summary: "HIPAA-ready EHR, telehealth and patient apps that keep data secure and care moving.",
    photo: zoneUs,
    photoAlt: "A product lead maps a care workflow on sticky notes while the team works at laptops.",
    cases: ["totally-pregnant", "grief-unleashed", "dna-vibe"],
  },
  {
    slug: "medical-devices",
    summary: "Device software, firmware and cloud platforms built for regulatory audits and security.",
    photo: specialist,
    photoAlt: "An engineer in headphones works across two monitors of code.",
    cases: ["dna-vibe", "gunlox"],
  },
  {
    slug: "pharmaceuticals",
    summary: "Compliant software for labs, supply chains and AI-assisted research.",
    photo: production,
    photoAlt: "A JumpGrowth team member by a bright office window.",
    cases: [],
  },
  {
    slug: "banking",
    summary: "Secure, cloud-first banking platforms, from core modernisation to open-banking APIs.",
    photo: codeReview,
    photoAlt: "Two engineers review code together on a monitor.",
    cases: ["loan-mantra", "lever5"],
  },
  {
    slug: "financial-services",
    summary: "Fintech products, wallets and trading platforms that scale without legacy drag.",
    photo: people,
    photoAlt: "Two colleagues work through a plan together at a screen.",
    cases: ["loan-mantra", "lever5"],
  },
  {
    slug: "insurance",
    summary: "Underwriting, claims and fraud-detection software for insurers and agents.",
    photo: portrait,
    photoAlt: "A teammate concentrates on her laptop at a shared desk.",
    cases: [],
  },
  {
    slug: "manufacturing",
    summary: "MES, ERP, inventory and AI tools that cut downtime and waste.",
    photo: zoneIndia,
    photoAlt: "An engineer codes on a laptop among the team.",
    cases: [],
  },
  {
    slug: "logistics",
    summary: "Fleet, routing and last-mile software that gives operations full visibility.",
    photo: extension,
    photoAlt: "Two engineers talk through a block of code on a monitor.",
    cases: ["ship-it-pro"],
  },
];

export const INDUSTRIES: Industry[] = META.map((meta) => {
  const data = BY_SLUG.get(meta.slug);
  if (!data) throw new Error(`No industry data for "${meta.slug}" in src/data/industries/`);
  return {
    ...data,
    summary: meta.summary,
    photo: meta.photo,
    photoAlt: meta.photoAlt,
    cases: meta.cases.map((slug) => PROJECTS.find((p) => p.slug === slug)).filter((p): p is Project => Boolean(p)),
  };
});

export const industryHref = (slug: string): string => `/industries/${slug}/`;

/** "Hospital Group, Illinois, USA" → { who: "Hospital Group", where: "Illinois, USA" } */
export const splitClient = (title: string): { who: string; where: string } => {
  const parts = title.split(",").map((part) => part.trim());
  return parts.length > 1 ? { who: parts[0], where: parts.slice(1).join(", ") } : { who: title, where: "" };
};
