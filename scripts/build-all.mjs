// Builds the whole AgentCraft site: this home page into dist/, then each page
// template in templates/ into dist/<name>/, so the navbar's /page1/ …
// /page34/ links resolve. Each template is checked with its own
// `verify` (type-check, lint, build, check-site) before it is copied in, and
// the combined dist/ is checked last. Run by `npm run build:all` and by the
// deploy workflow. Reads BASE_PATH and SITE_URL like `astro build` does.
//
// Every template is also a complete project on its own: to host one page
// alone, deploy its folder. See templates/README.md.
import { execSync } from "node:child_process";
import { cpSync, existsSync, readdirSync, rmSync, statSync } from "node:fs";
import { join } from "node:path";

const BASE = (process.env.BASE_PATH || "/").replace(/\/+$/, "");
const run = (cmd, cwd, env = {}) =>
  execSync(cmd, { cwd, stdio: "inherit", env: { ...process.env, ...env } });

run("npm run build", ".");

const templates = readdirSync("templates").filter((name) =>
  existsSync(join("templates", name, "package.json")) && statSync(join("templates", name)).isDirectory(),
);

for (const name of templates) {
  const dir = join("templates", name);
  console.log(`\nbuild-all: ${name}`);
  if (!existsSync(join(dir, "node_modules"))) run("npm ci", dir);
  run("npm run verify", dir, {
    BASE_PATH: `${BASE}/${name}`,
    // The rest of the site is served from this same host, next to the page.
    PUBLIC_SITE_URL: `${BASE}/`,
  });
  const out = join("dist", name);
  rmSync(out, { recursive: true, force: true });
  cpSync(join(dir, "dist"), out, { recursive: true });
}

run("node scripts/check-site.mjs", ".");
console.log(`\nbuild-all: OK (home + ${templates.join(", ")})`);
