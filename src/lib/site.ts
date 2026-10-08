import type { ImageMetadata } from "astro";
import ogDefault from "@/assets/brand/og-default.jpg";

/* The company's identity for every page's <head>: the title pattern, the
   default description and share image, and the facts search engines read as
   structured data. One place, so no page drifts. The phone number is left out
   of the structured data until the real one replaces the placeholder in the
   navbar and contact form (see the open items in docs/AI_GUIDE.md). */

export const SITE = {
  name: "JumpGrowth",
  descriptor: "AI-assisted product teams",
  description:
    "JumpGrowth builds senior, AI-assisted product teams across the US, Mexico, Canada and India: MVP squads, production teams and specialist developers, assembled in weeks.",
  email: "hello@jumpgrowth.com",
  /** The headquarters, as the footer prints it. */
  address: {
    street: "801 E Campbell Rd, Ste 365",
    locality: "Richardson",
    region: "TX",
    postalCode: "75081",
    country: "US",
  },
  /** Navy of the hero field, for the browser's own chrome. */
  themeColor: "#071127",
  ogImage: ogDefault as ImageMetadata,
  ogImageAlt: "The JumpGrowth wordmark over engineers reviewing code together.",
};

/** "Page · JumpGrowth", or the brand line on its own. */
export const pageTitle = (title?: string): string =>
  title ? (title.includes(SITE.name) ? title : `${title} · ${SITE.name}`) : `${SITE.name} · ${SITE.descriptor}`;
