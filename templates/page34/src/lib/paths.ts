/* The page can be served from a sub-path (GitHub Pages serves a project at
   /<repo>/), set by `base` in astro.config.mjs. Any link to another page of
   this build goes through withBase() so it follows the base. In-page "#hash"
   links need nothing. */
const BASE = import.meta.env.BASE_URL.replace(/\/+$/, "");

export const withBase = (path: string): string => `${BASE}/${path.replace(/^\/+/, "")}`;

/* This project is one page of the AgentCraft site. The navbar and footer
   link to the rest of it (the home page's sections and the other pages),
   which live at SITE_URL: set PUBLIC_SITE_URL when you build, or change the
   default below. See README.md. */
export const SITE_URL = (import.meta.env.PUBLIC_SITE_URL || "https://himalay-glitch.github.io/agentcraft/").replace(/\/*$/, "/");

/* Which page this project is, so its own navbar link stays on this site. */
export const THIS_PAGE = "page34";

/* A "#section" link from the navbar or footer. The home page's sections are
   on the main site; "#contact" and "#top" stay on this page, which closes on
   its own call to action. */
export const sectionHref = (href: string): string =>
  !href.startsWith("#") || href === "#contact" || href === "#top" ? href : `${SITE_URL}${href}`;

/* A link to one of the AgentCraft pages: this one, or another on the main site. */
export const pageHref = (page: string): string => (page === THIS_PAGE ? withBase("/") : `${SITE_URL}${page}/`);
