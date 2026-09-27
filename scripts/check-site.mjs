/**
 * check-site.mjs
 *
 * Static checker run by `npm run verify` and the deploy workflow.
 * Reads the built dist/ directory — no browser, no Chromium, works in CI.
 *
 * Checks (in page order):
 *   1. dist/index.html exists.
 *   2. Every expected section id is present in the HTML.
 *   3. No root-relative href or src attributes (they break the GitHub Pages sub-path).
 *   4. The banned word (cloneNode) does not appear in any .html/.js/.css file.
 *   5. The AgentCraft Display font-face is declared (hero camera depends on it).
 *
 * Exit 0 on success, exit 1 on any failure.
 */

import { readFileSync, readdirSync } from 'fs';
import { join, extname } from 'path';

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

const basePath = process.env.BASE_PATH || '';

if (!basePath) {
  // No BASE_PATH set → built for root; /_astro/* URLs are correct.
  ok('BASE_PATH not set — skipping sub-path check (root build)');
} else {
  // BASE_PATH is set (e.g. "/Jumpgrw"). The built HTML must not contain
  // asset or page hrefs that start with "/" but not with the base path.
  // Match href="/" or src="/" followed by anything that is NOT the base path.
  const escapedBase = basePath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const wrongRoot = new RegExp(`(?:href|src)="\/(?!${escapedBase.slice(1)}|\/|#)[^"]*"`, 'g');
  const matches = [...html.matchAll(wrongRoot)].map(m => m[0]);
  if (matches.length === 0) {
    ok(`All asset/page URLs start with BASE_PATH (${basePath})`);
  } else {
    for (const m of matches) {
      fail(`URL missing base path in index.html: ${m}`);
    }
  }
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

// ─── result ───────────────────────────────────────────────────────────────────

console.log('');
if (failures > 0) {
  console.error(`check-site: FAILED (${failures} failure${failures > 1 ? 's' : ''})`);
  process.exit(1);
} else {
  console.log('check-site: OK');
}
