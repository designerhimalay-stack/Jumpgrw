import type { ImageMetadata } from "astro";
import logoFile from "@/assets/brand/jumpgrowth-logo.webp";

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
};
