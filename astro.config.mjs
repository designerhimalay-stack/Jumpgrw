// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import seoFiles from "./integrations/seo-files.mjs";
import { LEGACY_ROUTES } from "./integrations/legacy-routes.mjs";

/* Two families, two jobs: Outfit carries the brand voice (logo, headlines,
   figures), Inter does the reading work (body, navigation, labels). Both SIL
   Open Font License. Upright only, as before: the one italic on the page (the
   process caption) has always been Inter synthesised, and loading a real italic
   would change how it reads. */
export default defineConfig({
  /* Where the site is served. Locally, and on any host that serves it from the
     domain root, both stay unset. The GitHub Pages workflow passes the Pages
     origin and the repo's sub-path (e.g. /agentcraft), which Astro then puts in
     front of every asset, script and image. Page links do the same through
     withBase() in src/lib/paths.ts. */
  site: process.env.SITE_URL || undefined,
  base: process.env.BASE_PATH || "/",
  /* The pages first built at /page1/ to /page34/ redirect to their named
     addresses (integrations/legacy-routes.mjs). Astro places the redirect
     pages under the base but leaves the destination as written, so the
     destination carries the base itself. */
  redirects: Object.fromEntries(
    Object.entries(LEGACY_ROUTES).map(([from, to]) => [from, `${(process.env.BASE_PATH || "").replace(/\/+$/, "")}${to}/`]),
  ),
  /* sitemap.xml and robots.txt, written from the pages the build produced. */
  integrations: [seoFiles()],
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Outfit",
      cssVariable: "--font-display",
      weights: [300, 400, 500, 600, 700],
      styles: ["normal"],
      subsets: ["latin"],
      display: "swap",
    },
    {
      provider: fontProviders.google(),
      name: "Inter",
      cssVariable: "--font-body",
      weights: ["100 900"],
      styles: ["normal"],
      subsets: ["latin"],
      display: "swap",
    },
  ],
});
