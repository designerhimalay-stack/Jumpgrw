import type { ImageMetadata } from "astro";
import type { TechLogoSlug } from "@/lib/tech-logos";

/* Content shapes for the "hire" section kit (src/components/hire/). Every
   section in the kit takes its copy through these props, so the same files
   serve every page: a page keeps all its words, photos and roles in
   src/pages/index.astro and passes them in. Nothing page-specific lives in a
   component. See docs/sections.md. */

/** The header every hire section opens with (rendered by SectionHead). */
export interface HireHead {
  /** The section's anchor, e.g. "stack". */
  id: string;
  /** Mono micro label over the headline. */
  eyebrow: string;
  /** One line each; the accent line is set in the brand blue. */
  headline: string[];
  /** Index of the accent line; defaults to the last line. */
  accent?: number;
  /** One or two sentences beside the headline. */
  lede?: string;
}

export interface HireLink {
  label: string;
  /** An in-page anchor ("#contact") or a URL passed through withBase(). */
  href: string;
}

/** A photo of people at work. */
export interface HirePhoto {
  image: ImageMetadata;
  alt: string;
  /** CSS object-position, e.g. "50% 30%", so the crop keeps the face. */
  focus?: string;
}

/** A large figure with a caption: "20+" / "Years building software". */
export interface HireFigure {
  value: string;
  label: string;
}

/* -- Tech we use (HireStack) ------------------------------------------------ */

export interface HireStackGroup {
  /** The row's label, e.g. "Web and app". */
  name: string;
  /** Logos drawn from src/lib/tech-logos.ts (Simple Icons only). */
  logos: TechLogoSlug[];
  /** Brands with no icon we may draw, named in text after the logos. */
  named?: string[];
}

/* -- Choose the work (HireServices) ----------------------------------------- */

export interface HireService {
  /** The list item, e.g. "Web and app development". */
  name: string;
  /** The panel's description. */
  body: string;
  /** "Common work" chips. */
  work: string[];
  /** The tools used, as text chips. */
  tools: string[];
}

/* -- Why teams choose us (HireWhy) ------------------------------------------ */

export interface HireReason {
  title: string;
  body: string;
  /** Short proof points under the body. */
  points: string[];
}

/* -- Ways to work together (HireWays) --------------------------------------- */

export interface HireModel {
  /** Mono label on the photo, e.g. "Staff augmentation". */
  kind: string;
  /** e.g. "1 engineer". */
  size: string;
  title: string;
  body: string;
  skills: string[];
  photo: HirePhoto;
}

/* -- Find the engineer (HireEngineers) -------------------------------------- */

export interface HireFilter {
  /** Matched against each engineer's `tags`. */
  key: string;
  label: string;
}

export interface HireEngineer {
  /** e.g. "Senior specialty role". */
  level: string;
  role: string;
  /** Who the role is for, one line. */
  for: string;
  /** e.g. "8+ years". */
  years: string;
  skills: string[];
  /** Filter keys this card answers to. */
  tags: string[];
  photo: HirePhoto;
}

/* -- Get help across your stack (HireColumns) ------------------------------- */

export interface HireColumn {
  /** Mono label, e.g. "Build". */
  label: string;
  title: string;
  body: string;
  tags: string[];
}

/* -- How they help (HireSteps) ---------------------------------------------- */

export interface HireStep {
  title: string;
  body: string;
  /** The "focus" line under the body. */
  focus: string;
}

/* -- Real examples (HireCases) ---------------------------------------------- */

export interface HireCase {
  sector: string;
  /** Team type, e.g. "Mobile and QA squad". */
  team: string;
  title: string;
  body: string;
  /** The illustrative capability mix. */
  roles: string[];
  tools: string[];
  results: [HireFigure, HireFigure];
}

/* -- Your pod (HirePod) ----------------------------------------------------- */

export interface HirePodMember {
  /** Two letters, e.g. "TL". */
  initials: string;
  role: string;
  /** The layer the role owns, e.g. "Architecture". */
  layer: string;
}

/** A line with a bold opening: "Start small" + " with the role you need now." */
export interface HireLead {
  lead: string;
  rest: string;
}

/* -- How it works (HireProcess) --------------------------------------------- */

export interface HireProcessStep {
  title: string;
  body: string;
  /** "What we cover" checklist. */
  covers: string[];
  photo: HirePhoto;
}

/* -- Contact (HireContact) -------------------------------------------------- */

export interface HireContactCopy {
  eyebrow: string;
  headline: string[];
  accent?: number;
  body: string;
  /** The form's title, e.g. "Tell us what you need." */
  formTitle: string;
  /** Options for "What do you need?". */
  needs: string[];
  /** Options for "When do you need help?". */
  timings: string[];
  submit: string;
  /** The line under the button. */
  note: string;
  /** The consent line beside the contact details. */
  consent: string;
}
