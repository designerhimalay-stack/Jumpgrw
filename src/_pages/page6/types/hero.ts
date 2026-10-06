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
  note: string;
  icon: NavIcon;
}

export interface NavMenuGroup {
  /** Mono label over the group. */
  title: string;
  items: NavMenuItem[];
}

/** One menu's content in the navbar's single shared dropdown. Every menu has
    the same shape (two large cards, two columns of icon rows, a strip along
    the bottom with one prompt and one link), so the panel keeps one layout
    and one height as it switches between them. */
export interface NavMenu {
  feature: { title: string; items: [NavMenuItem, NavMenuItem] };
  columns: [NavMenuGroup, NavMenuGroup];
  footer: { text: string; label: string; href: string };
}

/** A column of a directory menu: a heading that links to the area, then its
    links, one line each. */
export interface NavDirectoryGroup {
  title: string;
  href: string;
  items: { label: string; href: string }[];
}

/** The other shape the shared dropdown takes, for a menu that is a list of
    links (Technologies, X-Shore): columns of plain links under their
    headings (up to six), and the same strip along the bottom. It sits in the
    same panel, in the same grid cell as the other panes; see
    docs/components/navbar.md. */
export interface NavDirectoryMenu {
  directory: NavDirectoryGroup[];
  footer: { text: string; label: string; href: string };
}

export interface NavLink {
  label: string;
  href: string;
  /** Content for the shared dropdown; the item becomes a button that opens it. */
  menu?: NavMenu | NavDirectoryMenu;
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
