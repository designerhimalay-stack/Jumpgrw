// Build guard. Runs after `astro build` (`npm run verify` runs both) and in the
// deploy workflow before anything is published. It fails on the mistakes that
// break this site without an error of their own. See docs/AI_GUIDE.md.
import { execSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { extname, join } from "node:path";

const DIST = "dist";
const BASE = (process.env.BASE_PATH || "/").replace(/\/+$/, ""); // "" at the domain root
// The rest of the AgentCraft site, when it is served from this same host.
const SITE = (process.env.PUBLIC_SITE_URL || "").startsWith("/") ? process.env.PUBLIC_SITE_URL : "";
const problems = [];

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });

if (!existsSync(join(DIST, "index.html"))) {
  console.error("check-site: dist/index.html is missing. Run `astro build` first.");
  process.exit(1);
}
const html = readFileSync(join(DIST, "index.html"), "utf8");

// 1. Every root-relative URL carries the base path, or it 404s on GitHub Pages.
if (BASE) {
  for (const file of walk(DIST).filter((f) => [".html", ".css"].includes(extname(f)))) {
    const text = readFileSync(file, "utf8");
    const urls = [
      ...[...text.matchAll(/\s(?:href|src|action|poster|content)="(\/[^"]*)"/g)].map((m) => m[1]),
      ...[...text.matchAll(/url\(\s*["']?(\/[^"')]+)/g)].map((m) => m[1]),
      ...[...text.matchAll(/\ssrcset="([^"]+)"/g)].flatMap((m) => m[1].split(",").map((part) => part.trim().split(/\s+/)[0])),
    ]
      .filter((url) => url.startsWith("/") && !url.startsWith("//"))
      .filter((url) => !(SITE && url.startsWith(SITE)));
    for (const url of urls) {
      if (url !== BASE && !url.startsWith(`${BASE}/`)) problems.push(`${file}: "${url}" does not start with the base path ${BASE}/`);
    }
  }
}

// 2. Every in-page link has a target. "#top" is handled by SmoothScroll.
const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
for (const hash of new Set([...html.matchAll(/\shref="#([^"]*)"/g)].map((m) => m[1]))) {
  if (hash && hash !== "top" && !ids.has(hash)) problems.push(`link "#${hash}" has no element with id="${hash}"`);
}

// 3. The page's sections, once each and in this order.
const SECTIONS = [
  "data-ac-phero",
  'id="training"',
  'id="explain"',
  'id="drift"',
  'id="toolkit"',
  'id="faq"',
  'id="contact"',
  "<footer data-ac-footer",
];
let last = -1;
for (const marker of SECTIONS) {
  const at = html.indexOf(marker);
  if (at === -1) problems.push(`section marker ${marker} is missing from the page`);
  else if (at < last) problems.push(`section marker ${marker} is out of order`);
  else last = at;
}

// 4. The navbar has one shared dropdown panel, with one pane per menu trigger.
const megas = html.match(/\sdata-ac-nav-mega[\s>=]/g)?.length ?? 0;
const panes = html.match(/\sdata-ac-nav-pane[\s>=]/g)?.length ?? 0;
const triggers = html.match(/\sdata-ac-nav-trigger[\s>=]/g)?.length ?? 0;
if (megas !== 1) problems.push(`expected exactly one [data-ac-nav-mega] dropdown, found ${megas}`);
if (panes !== triggers) problems.push(`${triggers} menu triggers but ${panes} dropdown panes`);

// 5. One word the owner has asked never to appear in this repository, in any
//    file name or file, in any case. Built from parts so this file passes.
const banned = new RegExp(["cl", "one"].join(""), "i");
let tracked = [];
try {
  tracked = execSync("git ls-files -co --exclude-standard", { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] })
    .split("\n")
    .filter(Boolean);
} catch {
  console.warn("check-site: git is unavailable, skipping the repository word check.");
}
for (const file of [...tracked, ...walk(DIST)]) {
  if (banned.test(file)) problems.push(`file name contains the banned word: ${file}`);
  if (existsSync(file) && statSync(file).isFile() && banned.test(readFileSync(file, "latin1"))) problems.push(`banned word inside: ${file}`);
}

if (problems.length) {
  console.error(`check-site: ${problems.length} problem(s)\n  - ${problems.join("\n  - ")}`);
  process.exit(1);
}
console.log(`check-site: OK (base "${BASE || "/"}", ${ids.size} ids, ${SECTIONS.length} sections in order, one dropdown)`);
