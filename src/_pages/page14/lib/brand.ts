import logoFile from "@pg/page14/assets/brand/jumpgrowth-logo.webp";
import type { ImageMetadata } from "astro";

/* ===========================================================================
   THE BRAND — change it here, and only here.

   Every place this page shows the brand reads from this file: the browser
   tab title, the navbar wordmark and logo, the hero, every line of copy that
   names the company, the FAQ, the call to action, the footer wordmark,
   tagline and copyright. Change `name` below and all of them change at once.

   To use a logo image:
     1. Put the file in src/assets/brand/ (SVG or PNG, e.g. logo.svg).
     2. Uncomment the import below and point it at the file.
     3. Set `logo: logoFile`.
   The mark then shows in the navbar and footer (beside the name, or on its
   own if `showName` is false) and becomes the browser-tab icon.
   =========================================================================== */

// import logoFile from "@pg/page14/assets/brand/logo.svg";

export const BRAND = {
  /** The company name, exactly as it should read everywhere. */
  name: "JumpGrowth",

  /** An imported logo image, or null for the name alone (as now). */
  logo: logoFile as ImageMetadata | null,

  /** Show the name beside the logo. Ignored when there is no logo. */
  showName: false,

  /** The line under the footer wordmark. */
  tagline: "AI adds speed. People own the outcome.",

  /** What the company does, used after the name in the default tab title. */
  descriptor: "AI-assisted product teams",

  /** Where the brief at the foot of the page is sent. A placeholder until the
      real inbox is confirmed. */
  email: "hello@jumpgrowth.com",
};
