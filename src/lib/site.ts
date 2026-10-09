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

/* Search results show about 60 characters of a title and 160 of a
   description; past that they cut mid-word. */
const TITLE_MAX = 65;
const DESCRIPTION_MAX = 160;

/** "Page · JumpGrowth", or the brand line on its own. A long title (an
    article's headline) keeps the part before its colon, and drops the brand
    when that is what it takes to fit. */
export const pageTitle = (title?: string): string => {
  if (!title) return `${SITE.name} · ${SITE.descriptor}`;
  const branded = (text: string) => (text.includes(SITE.name) ? text : `${text} · ${SITE.name}`);
  if (branded(title).length <= TITLE_MAX) return branded(title);
  const head = title.split(":")[0].trim();
  const short = head.length >= 20 && head.length < title.length ? head : title;
  return branded(short).length <= TITLE_MAX ? branded(short) : short;
};

/** A description cut to what search results show: at the last full sentence
    that fits, or else the last whole word, with an ellipsis. */
export const metaDescription = (text: string): string => {
  if (text.length <= DESCRIPTION_MAX) return text;
  const fit = text.slice(0, DESCRIPTION_MAX);
  const sentence = fit.lastIndexOf(". ");
  if (sentence >= 100) return fit.slice(0, sentence + 1);
  return `${text.slice(0, DESCRIPTION_MAX - 1).replace(/[\s,;:]+\S*$/, "")}…`;
};
