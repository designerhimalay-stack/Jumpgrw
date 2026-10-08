import { BLOG_POSTS, type BlogPost } from "@/lib/insights";
import { withBase } from "@/lib/paths";

/* The text of each blog article, kept as data in src/data/blog/<slug>.json so
   the site renders every article as its own page (src/pages/blog/[slug].astro)
   in the site's own layout. A block is a heading, a paragraph (with inline
   <strong>, <em> and <a>), a list or a table. A link written as "@blog/<slug>"
   points at another article of this site. */

export type ArticleBlock =
  | { t: "h2"; text: string }
  | { t: "h3"; text: string }
  | { t: "h4"; text: string }
  | { t: "p"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "table"; rows: string[][] };

export interface Article {
  slug: string;
  title: string;
  published: string;
  modified: string;
  readTime: string;
  author: string;
  blocks: ArticleBlock[];
}

const FILES = import.meta.glob<Article>("../data/blog/*.json", { eager: true, import: "default" });
const BY_SLUG = new Map(Object.values(FILES).map((article) => [article.slug, article]));

export const getArticle = (slug: string): Article => {
  const article = BY_SLUG.get(slug);
  if (!article) throw new Error(`No article text for "${slug}" in src/data/blog/`);
  return article;
};

/** Points "@blog/<slug>" links at this site and opens outside links in a new tab. */
export const resolveLinks = (html: string): string =>
  html
    .replace(/href="@blog\/([a-z0-9-]+)"/g, (_, slug: string) => `href="${withBase(`/blog/${slug}/`)}"`)
    .replace(/<a href="(https?:[^"]+)"/g, '<a href="$1" target="_blank" rel="noopener"');

/** "17 September 2026" from an ISO timestamp. */
export const formatDate = (iso: string): string =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export const slugify = (text: string): string =>
  text
    .replace(/<[^>]+>/g, "")
    .toLowerCase()
    .replace(/&amp;/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);

/** The h2 headings with unique anchors, for the "On this page" list. */
export const outline = (article: Pick<Article, "blocks">): { id: string; text: string }[] => {
  const seen = new Map<string, number>();
  const headings: { id: string; text: string }[] = [];
  for (const block of article.blocks) {
    if (block.t !== "h2") continue;
    const base = slugify(block.text) || "section";
    const n = seen.get(base) ?? 0;
    seen.set(base, n + 1);
    headings.push({ id: n ? `${base}-${n + 1}` : base, text: block.text.replace(/<[^>]+>/g, "") });
  }
  return headings;
};

/** Up to `count` other articles, same topic first. */
export const related = (post: BlogPost, count = 3): BlogPost[] => {
  const others = BLOG_POSTS.filter((other) => other.slug !== post.slug);
  const same = others.filter((other) => other.category === post.category);
  return [...same, ...others.filter((other) => !same.includes(other))].slice(0, count);
};
