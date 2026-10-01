// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

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
