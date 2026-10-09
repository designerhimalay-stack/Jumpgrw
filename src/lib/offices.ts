import type { ImageMetadata } from "astro";

/* JumpGrowth's offices, from the company's Our Global Presence list
   (jumpgrowth.com/about). Used by the About page. Dallas is the
   headquarters. Cards show the area only; the full Dallas address is in the
   footer. */

import locDallas from "@/assets/about/loc-dallas.jpg";
import locToronto from "@/assets/about/loc-toronto.jpg";
import locSydney from "@/assets/about/loc-sydney.jpg";
import locMexico from "@/assets/about/loc-mexico-city.jpg";
import locDelhi from "@/assets/about/loc-delhi-ncr.jpg";
import locPune from "@/assets/about/loc-pune.jpg";

export interface Office {
  country: string;
  city: string;
  address: string[];
  photo: ImageMetadata;
  alt: string;
  hq?: boolean;
}

export const OFFICES: Office[] = [
  { country: "USA", city: "Dallas, TX", address: ["Richardson, Texas"], photo: locDallas, alt: "Aerial view of Richardson, Texas, in the Dallas area", hq: true },
  { country: "Canada", city: "Toronto", address: ["Ontario"], photo: locToronto, alt: "The Toronto skyline and the CN Tower" },
  { country: "Mexico", city: "Mexico City", address: ["Mexico"], photo: locMexico, alt: "The cathedral on the Zócalo, Mexico City" },
  { country: "India", city: "Delhi NCR", address: ["Gurugram, Haryana"], photo: locDelhi, alt: "Highway interchanges in Delhi NCR" },
  { country: "India", city: "Pune", address: ["Kharadi, Maharashtra"], photo: locPune, alt: "An office tower in Pune" },
  { country: "Australia", city: "Sydney", address: ["New South Wales"], photo: locSydney, alt: "The Sydney Opera House and the city skyline" },
];
