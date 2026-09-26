import type { ImageMetadata } from "astro";

/** Line icons drawn in Navbar.astro's NAV_ICONS. */
export type NavIcon =
  | "rocket"
  | "layers"
  | "cpu"
  | "userPlus"
  | "grid"
  | "compass"
  | "browser"
  | "server"
  | "phone"
  | "sparkles"
  | "shield"
  | "cloud"
  | "pen"
  | "pin"
  | "globe"
  | "sun"
  | "clock"
  | "users"
  | "message"
  | "mail"
  | "book"
  | "help";

export interface NavMenuItem {
  label: string;
  href: string;
  /** One line under the label. */
  note?: string;
  icon?: NavIcon;
}

export interface NavMenuGroup {
  /** Mono label over the group. */
  title: string;
  href?: string;
  items: NavMenuItem[];
}

export interface NavOverview {
  tag: string;
  headline: string;
  description: string;
  href: string;
  label?: string;
}

/** One menu's content in the navbar's single shared dropdown. */
export interface NavMenu {
  overview: NavOverview;
  columns: NavMenuGroup[];
  variant?: "standard" | "tech";
}

export interface NavLink {
  label: string;
  href: string;
  /** Content for the shared dropdown; the item becomes a button that opens it. */
  menu?: NavMenu;
}

export interface HeroCta {
  label: string;
  href: string;
  /** "diagonal" renders ↗, "right" renders →. */
  arrow: "diagonal" | "right";
}

export interface Stat {
  /** Counted up from zero once the card scrolls into view. */
  value: number;
  /** Appended when counting finishes, e.g. "+" or " wks". */
  suffix?: string;
  /** Parenthesised caption under the number. */
  label: string;
  /** The wide highlighted cell. Exactly one stat should set this. */
  featured?: boolean;
}

export interface HeroContent {
  /** Rendered in white. */
  headline: string;
  /** Rendered in accent blue italic on its own line. */
  headlineAccent: string;
  /** One short supporting sentence. */
  body: string;
  primaryCta: HeroCta;
  secondaryCta: HeroCta;
  /** Foreground cut-out, anchored to the container's bottom-right. Imported
      from src/assets so the build can emit its responsive sizes. */
  image: ImageMetadata;
  imageAlt: string;
}

export interface ProcessStep {
  /** Uppercased in the badge by the stylesheet, so write it in sentence case. */
  badge: string;
  title: string;
  body: string;
  /** Italic line above the visual. Changes with the step. */
  caption: string;
}
