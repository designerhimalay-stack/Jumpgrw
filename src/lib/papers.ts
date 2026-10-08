/* What a white paper's page says beyond its summary in src/lib/insights.ts:
   an introduction and the key highlights, kept as data in
   src/data/papers/<slug>.json. Only papers with written highlights have a
   file; the others show their summary alone. */

export interface PaperExtras {
  slug: string;
  title: string;
  intro: string[];
  highlightsTitle: string;
  highlights: { title: string; body: string }[];
}

const FILES = import.meta.glob<PaperExtras>("../data/papers/*.json", { eager: true, import: "default" });
const BY_SLUG = new Map(Object.values(FILES).map((paper) => [paper.slug, paper]));

export const getPaperExtras = (slug: string): PaperExtras | undefined => BY_SLUG.get(slug);
