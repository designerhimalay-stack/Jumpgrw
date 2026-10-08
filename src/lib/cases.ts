import { PROJECTS, type Project } from "@/lib/projects";
import { withBase } from "@/lib/paths";

/* The write-up behind each product on the Case Studies page, kept as data in
   src/data/cases/<slug>.json and shown by src/pages/case-studies/[slug].astro.
   Pages differ in how much they say: a product may have a problem, a solution
   or only some of it, so every part is optional and the page shows what
   exists. */

interface RawItem {
  title: string;
  body: string;
}

interface RawSection {
  title: string;
  paras: string[];
  items: RawItem[];
}

interface RawCase {
  slug: string;
  name: string;
  stores: { ios?: string; android?: string };
  intro: string[];
  sections: RawSection[];
}

export interface CaseGroup {
  title: string;
  items: RawItem[];
}

export interface CaseStudy {
  project: Project;
  /** The product's own description, beyond the one-line brief. */
  intro: string[];
  stores: { ios?: string; android?: string };
  problem?: { paras: string[]; items: RawItem[] };
  solution?: { paras: string[]; groups: CaseGroup[] };
}

const FILES = import.meta.glob<RawCase>("../data/cases/*.json", { eager: true, import: "default" });
const BY_SLUG = new Map(Object.values(FILES).map((raw) => [raw.slug, raw]));

const isProblem = (title: string) => /problem|challenge/i.test(title);
const isResult = (title: string) => /result/i.test(title);
const isSolution = (title: string) => /^the solution/i.test(title);

export const getCaseStudy = (project: Project): CaseStudy => {
  const raw = BY_SLUG.get(project.slug);
  const sections = (raw?.sections ?? []).filter((s) => !isResult(s.title) && (s.items.length || s.paras.length));
  const problemAt = sections.findIndex((s) => isProblem(s.title));

  /* Text that opens the page before "The Problem" joins the introduction. */
  const intro = [...(raw?.intro ?? [])];
  sections.slice(0, Math.max(problemAt, 0)).forEach((s) => {
    if (!s.items.length) intro.push(...s.paras);
  });

  const problemSection = problemAt >= 0 ? sections[problemAt] : undefined;
  const rest = sections.filter((s, i) => i > problemAt && !isProblem(s.title));
  const early = problemAt > 0 ? sections.slice(0, problemAt).filter((s) => s.items.length) : [];

  const groups: CaseGroup[] = [];
  const paras: string[] = [];
  for (const s of [...early, ...rest]) {
    if (isSolution(s.title)) paras.push(...s.paras);
    if (s.items.length) groups.push({ title: isSolution(s.title) ? "Core features" : s.title, items: s.items });
    else if (!isSolution(s.title)) paras.push(...s.paras);
  }

  /* A page often repeats its brief as an intro paragraph, sometimes reworded
     ("Gun Lox" for "GunLox"), so drop any intro paragraph that is nearly the
     same as the brief or as an earlier intro paragraph. Compared on the full
     normalized text by word overlap, not just the opening. */
  const norm = (text: string) => text.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
  const words = (text: string) => new Set(norm(text).split(" ").filter(Boolean));
  const similar = (a: Set<string>, b: Set<string>) => {
    if (!a.size || !b.size) return false;
    let shared = 0;
    for (const w of a) if (b.has(w)) shared += 1;
    return shared / Math.min(a.size, b.size) >= 0.8;
  };
  const briefWords = words(project.brief);
  const distinct: string[] = [];
  const kept: Set<string>[] = [briefWords];
  for (const paragraph of [...new Set(intro)]) {
    const w = words(paragraph);
    if (kept.some((seen) => similar(w, seen))) continue;
    distinct.push(paragraph);
    kept.push(w);
  }

  return {
    project,
    intro: distinct,
    stores: raw?.stores ?? {},
    problem: problemSection ? { paras: problemSection.paras, items: problemSection.items } : undefined,
    solution: groups.length || paras.length ? { paras, groups } : undefined,
  };
};

/* Where each technology sits in a product, so a stack can be shown by layer.
   A name that isn't listed falls into "Other". */
export type StackLayer = "Client" | "Services" | "Data" | "Cloud & hosting" | "Other";

const LAYER_OF: Record<string, StackLayer> = {
  "React Native": "Client",
  Flutter: "Client",
  Angular: "Client",
  AngularJS: "Client",
  "Vue.js": "Client",
  "HTML/CSS": "Client",
  "Android (Java)": "Client",
  "iOS (Swift / Objective-C)": "Client",
  "Node.js": "Services",
  "Express.js": "Services",
  LoopBack: "Services",
  ".NET": "Services",
  PHP: "Services",
  MongoDB: "Data",
  MySQL: "Data",
  "MS SQL Server": "Data",
  NGINX: "Cloud & hosting",
  AWS: "Cloud & hosting",
  "AWS Lambda": "Cloud & hosting",
  "AWS Lex": "Cloud & hosting",
  "AWS Transcribe": "Cloud & hosting",
  Azure: "Cloud & hosting",
};

export const LAYER_ORDER: StackLayer[] = ["Client", "Services", "Data", "Cloud & hosting", "Other"];

/** A product's stack grouped by layer, in the order a request travels. */
export const stackLayers = (stack: string[]): { layer: StackLayer; items: string[] }[] =>
  LAYER_ORDER.map((layer) => ({ layer, items: stack.filter((tech) => (LAYER_OF[tech] ?? "Other") === layer) })).filter(
    (group) => group.items.length > 0,
  );

/** "How it fits together" only means something when the stack spans layers. */
export const showArchitecture = (project: Project): boolean => stackLayers(project.stack).length >= 2;

/** "iOS, Android & Web" → 3 */
export const platformCount = (platform: string): number => platform.split(/,|&/).filter((part) => part.trim()).length;

export const caseHref = (project: Project): string => withBase(`/case-studies/${project.slug}/`);

/** The next product in the portfolio, wrapping round. */
export const neighbours = (project: Project): { prev: Project; next: Project } => {
  const i = PROJECTS.findIndex((p) => p.slug === project.slug);
  return { prev: PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length], next: PROJECTS[(i + 1) % PROJECTS.length] };
};
