import type { ImageMetadata } from "astro";
import type { HeroCta } from "@pg/page10/types/hero";

/* Content shapes for the subpage sections. Each subpage keeps its copy in its
   own src/pages/*.astro file and passes it to these sections as props, so
   every subpage is built from the same pieces. See docs/components/subpages.md. */

/** Line icons drawn in src/lib/line-icons.ts. */
export type LineIcon =
  | "zap"
  | "wallet"
  | "shield"
  | "layout"
  | "plug"
  | "cloud"
  | "document"
  | "diagram"
  | "pointer"
  | "calendar"
  | "sync"
  | "mobile"
  | "loader"
  | "alert"
  | "lock"
  | "devices";

export interface PageHeroContent {
  /** Breadcrumb over the headline, e.g. ["Launch phase", "MVP launch teams"]. */
  trail: string[];
  /** One line each; the accent line is set in the brand blue. Keep each line
      short enough to sit in two columns (about 13 characters). */
  headline: string[];
  accent?: number;
  lede: string;
  ctas: HeroCta[];
  image: ImageMetadata;
  imageAlt: string;
  /** The four cells along the foot of the hero, one per column. */
  specs: [HeroSpec, HeroSpec, HeroSpec, HeroSpec];
  /** Optional: who the page is for, a mono line over the headline
      ("For app and engineering leaders"). */
  audience?: string;
  /** Optional: "long" sets the headline a step smaller, for a full-sentence
      headline of three or four lines instead of two short ones. */
  size?: "long";
  /** Optional: up to three short assurances in a row under the buttons, each
      with its icon. */
  assurances?: HeroAssurance[];
  /** Optional: the card laid over the foot of the photo. */
  card?: HeroCard;
  /** Optional: a line under the specs, e.g. headquarters and delivery
      locations. */
  base?: { title: string; line: string };
}

export interface HeroAssurance {
  icon: "shield" | "clock" | "lock" | "users" | "globe";
  label: string;
}

/** The card on the hero photo: a status bar along its top, a kicker and a
    statement over the photo's foot, and a strip under it. */
export interface HeroCard {
  /** Left of the top bar, after the live dot, e.g. "Build context / Active". */
  status: string;
  /** Right of the top bar, e.g. "Mexico-based delivery". */
  place: string;
  /** Optional mono note under the bar, e.g. "Start with one engineer…". */
  note?: string;
  /** Mono kicker over the statement, e.g. "Engineering capacity, inside your org." */
  kicker: string;
  /** The statement, a short sentence in the display face. */
  statement: string;
  /** The strip under the photo: a small label and a bold line. */
  foot: { label: string; value: string };
}

export interface HeroSpec {
  label: string;
  value: string;
}

/** A column of the comparison table. */
export interface CompareOption {
  label: string;
  /** The one-line verdict under the label. */
  verdict: string;
}

/** A row of the comparison table: what is compared, then one value per option. */
export interface CompareRow {
  label: string;
  values: string[];
}

export interface PodRole {
  title: string;
  note: string;
}

export interface Constraint {
  label: string;
  icon: LineIcon;
  pod: {
    name: string;
    summary: string;
    size: string;
    roles: [PodRole, PodRole, PodRole, PodRole];
  };
}

export interface PageStat {
  /** Counted up from zero when numeric; shown as written otherwise. */
  value: number | string;
  suffix?: string;
  label: string;
  featured?: boolean;
}

export interface Phase {
  title: string;
  /** Timing, shown opposite the number; optional. */
  when?: string;
  body: string;
  /** What the phase hands over, in a box on the cell's floor; optional. */
  output?: string;
}

export interface Practice {
  icon: LineIcon;
  label: string;
}

export interface Outcome {
  title: string;
  note: string;
}

/** An asset the client may already have, and the discovery phase it covers. */
export interface ReadinessAsset {
  label: string;
  phase: { title: string; note: string };
}

export interface Deliverable {
  icon: LineIcon;
  title: string;
  body: string;
  /** The form it arrives in, e.g. "Figma". */
  format: string;
}

/** A capability the prototype may need, for the architecture mapper. */
export interface ArchRequirement {
  label: string;
  icon: LineIcon;
}

/** A layer of the target stack: what it is at its base, then what each
    requirement adds to it, in the requirements' order. */
export interface ArchLayer {
  title: string;
  base: string;
  additions: string[];
}

/** A photo that opens a section beside its headline (SectionHead `media`). */
export interface SectionPhoto {
  image: ImageMetadata;
  alt: string;
  /** object-position, e.g. "50% 30%". */
  focus?: string;
}
