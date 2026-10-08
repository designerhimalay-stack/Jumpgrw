/**
 * check-site.mjs
 *
 * Static checker run by `npm run verify` and the deploy workflow.
 * Reads the built dist/ directory — no browser, no Chromium, works in CI.
 *
 * Checks (in page order):
 *   1. dist/index.html exists.
 *   2. Every expected section id is present in the HTML.
 *   3. No root-relative href or src attributes on any page (they break the GitHub
 *      Pages sub-path).
 *   4. The banned word does not appear in any .html/.js/.css file.
 *   5. The AgentCraft Display font-face is declared (hero camera depends on it).
 *   6. Every page has a title, a description and one h1, and every internal link
 *      on it resolves to a built page or file.
 *   7. With SITE_URL set: every page has a canonical link, and sitemap.xml and
 *      robots.txt are written.
 *
 * Exit 0 on success, exit 1 on any failure.
 */

import { readFileSync, readdirSync, existsSync } from 'fs';
import { join, extname, relative, sep } from 'path';

// ─── configuration ────────────────────────────────────────────────────────────

const DIST = 'dist';

/** Section IDs that must appear in the built index.html, in page order. */
const SECTIONS = [
  'case-studies',
  'client-stories',
  'skills',
  'why-agentcraft',
  'faq',
  'contact',
];

/** The font-face name the hero portal requires (see DESIGN_NOTES §4). */
const REQUIRED_FONT = 'AgentCraft Display';

/**
 * The one banned word. Stored as charcode array so the word itself never
 * appears in this source file (check-site scans itself too).
 * c-l-o-n-e-N-o-d-e  →  99,108,111,110,101,78,111,100,101
 */
const BANNED_WORD = String.fromCharCode(99,108,111,110,101,78,111,100,101);

// ─── helpers ──────────────────────────────────────────────────────────────────

let failures = 0;

function fail(msg) {
  console.error(`  ✗ ${msg}`);
  failures++;
}

function ok(msg) {
  console.log(`  ✓ ${msg}`);
}

/** Recursively collect all files under a directory. */
function walk(dir) {
  const entries = readdirSync(dir, { withFileTypes: true });
  return entries.flatMap(e => {
    const full = join(dir, e.name);
    return e.isDirectory() ? walk(full) : [full];
  });
}

// ─── 1. dist/index.html must exist ───────────────────────────────────────────

console.log('\n── 1. Built output ──────────────────────────────────────────');

let html;
try {
  html = readFileSync(`${DIST}/index.html`, 'utf8');
  ok(`${DIST}/index.html found (${html.length} bytes)`);
} catch {
  fail(`${DIST}/index.html not found — run \`npm run build\` first`);
  console.error('\ncheck-site: FAILED');
  process.exit(1);
}

// ─── 2. Section IDs ──────────────────────────────────────────────────────────

console.log('\n── 2. Section IDs ───────────────────────────────────────────');

for (const id of SECTIONS) {
  if (html.includes(`id="${id}"`)) {
    ok(`#${id}`);
  } else {
    fail(`Section id="${id}" not found in index.html`);
  }
}

// ─── 3. Root-relative URLs ────────────────────────────────────────────────────

console.log('\n── 3. Root-relative URLs ────────────────────────────────────');

const basePath = (process.env.BASE_PATH || '').replace(/\/+$/, '');

/** Every built page, and the redirect stubs at old addresses kept apart. */
const htmlFiles = walk(DIST).filter(f => extname(f) === '.html');
const isRedirect = (content) => content.includes('http-equiv="refresh"');
const pages = htmlFiles
  .map(f => ({ file: f, rel: relative(DIST, f).split(sep).join('/'), content: readFileSync(f, 'utf8') }))
  .filter(p => !isRedirect(p.content));

if (!basePath) {
  // No BASE_PATH set → built for root; /_astro/* URLs are correct.
  ok('BASE_PATH not set — skipping sub-path check (root build)');
} else {
  // BASE_PATH is set (e.g. "/agentcraft"). No built page may contain asset or
  // page hrefs that start with "/" but not with the base path.
  const escapedBase = basePath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const wrongRoot = new RegExp(`(?:href|src)="\/(?!${escapedBase.slice(1)}|\/|#)[^"]*"`, 'g');
  let wrong = 0;
  for (const p of pages) {
    for (const m of p.content.matchAll(wrongRoot)) {
      fail(`URL missing base path in ${p.rel}: ${m[0]}`);
      wrong++;
    }
  }
  if (wrong === 0) ok(`All asset/page URLs on ${pages.length} pages start with BASE_PATH (${basePath})`);
}

// ─── 4. Banned word scan ─────────────────────────────────────────────────────

console.log('\n── 4. Banned word scan ──────────────────────────────────────');

const allFiles = walk(DIST).filter(f => ['.html', '.js', '.css', '.mjs'].includes(extname(f)));
let bannedFound = false;

for (const f of allFiles) {
  const content = readFileSync(f, 'utf8');
  if (content.includes(BANNED_WORD)) {
    fail(`Banned word found in ${f}`);
    bannedFound = true;
  }
}

if (!bannedFound) {
  ok(`No banned word in ${allFiles.length} built files`);
}

// ─── 5. AgentCraft Display font-face ─────────────────────────────────────────

console.log('\n── 5. Font face ─────────────────────────────────────────────');

const cssFiles = allFiles.filter(f => extname(f) === '.css');
const fontDeclared = cssFiles.some(f => readFileSync(f, 'utf8').includes(REQUIRED_FONT));

if (fontDeclared) {
  ok(`"${REQUIRED_FONT}" font-face declared`);
} else {
  fail(`"${REQUIRED_FONT}" font-face not found in built CSS — hero camera will not move`);
}

// ─── 6. Page basics and internal links ───────────────────────────────────────

console.log('\n── 6. Page basics and internal links ────────────────────────');

/** An internal URL (base path stripped) → the built file that should serve it. */
const targetOf = (url) => {
  const path = url.split('#')[0].split('?')[0];
  if (extname(path)) return join(DIST, path);
  return join(DIST, path.endsWith('/') ? path : `${path}/`, 'index.html');
};

let basicsBad = 0;
let linksChecked = 0;
let linksBad = 0;
for (const p of pages) {
  const h1s = (p.content.match(/<h1[\s>]/g) || []).length;
  if (!/<title>[^<]+<\/title>/.test(p.content)) { fail(`${p.rel}: no <title>`); basicsBad++; }
  if (!/<meta name="description" content="[^"]+"/.test(p.content)) { fail(`${p.rel}: no meta description`); basicsBad++; }
  if (h1s !== 1) { fail(`${p.rel}: ${h1s} h1 elements (expected 1)`); basicsBad++; }

  for (const m of p.content.matchAll(/<a\b[^>]*\bhref="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    let url = m[1];
    if (url.startsWith('//')) continue;
    if (basePath) {
      if (!url.startsWith(`${basePath}/`) && url !== basePath) continue; // reported by check 3
      url = url.slice(basePath.length) || '/';
    }
    linksChecked++;
    if (!existsSync(targetOf(url))) {
      fail(`${p.rel}: link to ${m[1]} has no page`);
      linksBad++;
    }
  }
}
if (basicsBad === 0) ok(`${pages.length} pages: each has a title, a description and one h1`);
if (linksBad === 0) ok(`${linksChecked} internal links resolve`);

// ─── 7. Search-engine files (only when the site's origin is known) ───────────

console.log('\n── 7. Canonical links, sitemap and robots ───────────────────');

if (!process.env.SITE_URL) {
  ok('SITE_URL not set — skipping canonical and sitemap checks (local build)');
} else {
  const noCanonical = pages.filter(p => !p.content.includes('rel="canonical"'));
  for (const p of noCanonical) fail(`${p.rel}: no canonical link`);
  if (noCanonical.length === 0) ok(`${pages.length} pages carry a canonical link`);

  if (existsSync(join(DIST, 'sitemap.xml'))) {
    const count = (readFileSync(join(DIST, 'sitemap.xml'), 'utf8').match(/<loc>/g) || []).length;
    if (count > 0) ok(`sitemap.xml lists ${count} pages`);
    else fail('sitemap.xml lists no pages');
  } else {
    fail('sitemap.xml not written');
  }
  if (existsSync(join(DIST, 'robots.txt'))) ok('robots.txt written');
  else fail('robots.txt not written');
}

// ─── result ───────────────────────────────────────────────────────────────────

console.log('');
if (failures > 0) {
  console.error(`check-site: FAILED (${failures} failure${failures > 1 ? 's' : ''})`);
  process.exit(1);
} else {
  console.log('check-site: OK');
}
