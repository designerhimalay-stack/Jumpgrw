/* The site can be served from a sub-path (GitHub Pages serves a project at
   /<repo>/), set by `base` in astro.config.mjs. Any link to another page of
   the site goes through withBase() so it follows the base; a bare "/contact"
   would point at the domain root instead. In-page "#hash" links need nothing. */
const BASE = import.meta.env.BASE_URL.replace(/\/+$/, "");

export const withBase = (path: string): string => `${BASE}/${path.replace(/^\/+/, "")}`;
