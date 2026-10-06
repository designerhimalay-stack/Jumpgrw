import type { ImageMetadata } from "astro";
import type { TechLogoSlug } from "@pg/page11/lib/tech-logos";
import type { LineIcon } from "@pg/page11/types/page";

/* Content shapes for the hire kit (src/components/hire/), the one section set
   every Technologies page is built from. A page fills in a TechProfile
   (src/content/tech.ts); src/lib/hire-copy.ts turns it into the copy for
   every section, so the pages share their wording and differ only where the
   skill does. See docs/sections.md. */

export interface Photo {
  image: ImageMetadata;
  alt: string;
  /** object-position, e.g. "50% 30%". */
  focus?: string;
}

/** A tool in "Tech we use". With no logo it is drawn as a monogram. */
export interface StackItem {
  name: string;
  logo?: TechLogoSlug;
  /** What it is, in two or three words: "UI library". */
  note: string;
}

/** A tab in "Choose the work your team needs". */
export interface Benefit {
  title: string;
  body: string;
  /** Three kinds of work it covers. */
  work: [string, string, string];
  tools: string[];
}

export interface Role {
  title: string;
  /** What this engineer does for you, one sentence. */
  body: string;
  skills: string[];
  /** The part of the pod the role covers: "Architecture". */
  part: string;
  photo: Photo;
}

/** A card in "What our engineers do". */
export interface Capability {
  label: string;
  icon: LineIcon;
  title: string;
  body: string;
  chips: string[];
}

/** A column in "How they help". */
export interface HelpStage {
  icon: LineIcon;
  title: string;
  body: string;
  /** What the stage covers, in a line along its floor. */
  covers: string;
}

export interface Outcome {
  value: string;
  label: string;
}

export interface Example {
  client: string;
  model: string;
  title: string;
  body: string;
  roles: string[];
  stack: string[];
  outcomes: [Outcome, Outcome];
}

export interface WayToWork {
  kicker: string;
  title: string;
  body: string;
  chips: string[];
  photo: Photo;
}

export interface Reason {
  title: string;
  body: string;
  tags: [string, string, string];
}

export interface Step {
  title: string;
  kicker: string;
  body: string;
  covers: [string, string, string];
}

export interface Figure {
  value: string;
  label: string;
}

/** Everything that differs between two Technologies pages. */
export interface TechProfile {
  /** The page's column in the Technologies menu: "Frontend". */
  group: string;
  /** The page's own name in the breadcrumb, when it isn't `Skill`:
      "Product managers". */
  crumb?: string;
  /** The skill, as it reads in a sentence: "React", "full stack". */
  skill: string;
  /** The skill at the start of a sentence or in a title: "React", "Full stack". */
  Skill: string;
  /** One of them: "React developer". */
  one: string;
  /** Several: "React developers". */
  many: string;
  /** Who they are, generically, capitalised: "Engineers", "Designers". */
  people: string;
  /** What they work in: "stack", "toolkit". */
  kit: string;
  /** What the team ships: "React products", "products". */
  products: string;

  hero: {
    lede: string;
    photo: Photo;
  };
  /** Six core tools, then the wider ecosystem by name. */
  core: [StackItem, StackItem, StackItem, StackItem, StackItem, StackItem];
  ecosystem: string[];
  benefits: [Benefit, Benefit, Benefit, Benefit];
  roles: [Role, Role, Role, Role];
  capabilities: [Capability, Capability, Capability];
  /** Defaults to the engineering stages in hire-copy.ts. */
  help?: [HelpStage, HelpStage, HelpStage, HelpStage];
  examples: [Example, Example, Example];
  /** The answer to "What … skills can we hire for?". */
  skillsAnswer: string;
  /** Questions about this skill, asked first in the FAQ. Drafts. */
  faqs: { q: string; a: string }[];
  photos: {
    /** The three "Ways to work" cards: one engineer, a squad, a pod. */
    ways: [Photo, Photo, Photo];
    /** Beside "How it works". */
    steps: Photo;
    faq: Photo;
  };
}
