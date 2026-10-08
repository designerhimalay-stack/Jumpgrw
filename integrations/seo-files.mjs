// @ts-check
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

/* Writes sitemap.xml and robots.txt into the build, from the pages Astro
   actually built, so neither can drift from the site. The 404 page and the
   redirect stubs at old addresses are left out of the sitemap.

   A sitemap needs absolute addresses, so it is written only when the build
   knows the site's origin (SITE_URL, which the deploy workflow passes).
   robots.txt is always written; it names the sitemap when there is one. */

/** @returns {import("astro").AstroIntegration} */
export default function seoFiles() {
  /** @type {URL | undefined} */
  let site;
  let base = "/";
  /** @type {Set<string>} */
  let redirectSources = new Set();

  const clean = (/** @type {string} */ p) => "/" + p.replace(/^\/+|\/+$/g, "");

  return {
    name: "jumpgrowth:seo-files",
    hooks: {
      "astro:config:done": ({ config }) => {
        site = config.site ? new URL(config.site) : undefined;
        base = config.base || "/";
        redirectSources = new Set(Object.keys(config.redirects ?? {}).map(clean));
      },
      "astro:build:done": ({ pages, dir, logger }) => {
        const out = fileURLToPath(dir);
        const root = base.endsWith("/") ? base : `${base}/`;
        const urls = pages
          .map((page) => clean(page.pathname))
          .filter((p) => !/^\/404(\/|$)/.test(p) && !redirectSources.has(p))
          .map((p) => (p === "/" ? root : `${root}${p.slice(1)}/`))
          .sort();

        if (site) {
          const today = new Date().toISOString().slice(0, 10);
          const body = urls
            .map((p) => `  <url><loc>${new URL(p, site).href}</loc><lastmod>${today}</lastmod></url>`)
            .join("\n");
          fs.writeFileSync(
            path.join(out, "sitemap.xml"),
            `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`,
          );
          logger.info(`sitemap.xml: ${urls.length} pages`);
        } else {
          logger.info("sitemap.xml skipped: no SITE_URL, so no absolute addresses");
        }

        const sitemapLine = site ? `\nSitemap: ${new URL(`${root}sitemap.xml`, site).href}\n` : "\n";
        fs.writeFileSync(path.join(out, "robots.txt"), `User-agent: *\nAllow: /\n${sitemapLine}`);
      },
    },
  };
}
