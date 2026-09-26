# AI guide: run, change and deploy this site without breaking it

For any AI coding assistant working in this repository (Claude, ChatGPT or Codex, Gemini,
Copilot, Cursor or any other) and for the people directing them. This site is a finished
design template. Your job is to keep it exactly as it is while you run it, deploy it, or
make the change you were asked for. Read this file top to bottom before your first edit.

Where a rule can be checked by a machine, `npm run verify` and the deploy workflow check
it, and a failure blocks the deploy.

---

## 1. Rules

1. **Verify before every commit.** Run `npm run verify`. It must end with
   `check-site: OK`. Never commit a failing build, and never edit, skip or weaken
   `scripts/check-site.mjs` to make a failure pass: fix the cause.
2. **Don't change the design.** A fix keeps every size, colour, spacing, font, image
   crop and animation as it is, unless the owner asks for a design change.
3. **One navbar dropdown.** Every menu fills the single shared panel
   `[data-ac-nav-mega]`, in the same shape (two large cards, two columns of rows, a strip
   along the bottom). The `NavMenu` types enforce the shape. Never give a menu its own
   panel or layout.
4. **No root-relative URLs.** The site is served from a sub-path on GitHub Pages
   (`/agentcraft/`). Link to another page with `withBase("/page")` from
   `src/lib/paths.ts`, import images from `src/assets/`, and use relative `url()` in CSS.
   `href="#section"` links need nothing.
5. **Don't edit the vendored hero portal** (`src/components/ui/GlyphPortal.astro`,
   `src/components/ui/glyph-portal.ts`). It is third-party MIT code; its copyright notice
   must stay. Adjust it from `Hero.astro` or `globals.css`.
6. **Keep the `"AgentCraft Display"` font face.** The hero camera measures that face and
   silently stops moving without it (docs/DESIGN_NOTES.md §4).
7. **Nothing may move the page after it has loaded.** Anything that changes size while
   the reader is on the page reserves its tallest size first.
8. **Provenance.** Never write that any part of this site was copied from, based on,
   modelled on or measured against another website, and never add another website's
   name, URL, screenshots, fonts, images or code. Third-party material goes in only
   under a licence that allows it, recorded in `THIRD_PARTY_NOTICES.md` and the
   component's doc. The owner has also banned one particular word from the repository:
   in file names, file contents and commit messages, in any case. `check-site` knows the
   word; if it flags a file, rephrase. The usual way it creeps in is the DOM method that
   duplicates a node. Use `document.importNode(template.content, true)` or
   `document.createElement(...)` instead.
9. **Keep installs reproducible.** Add a package with `npm install <name>`, so
   `package-lock.json` updates. Install with `npm ci`. Commit `package.json` and
   `package-lock.json` together. Keep `stubs/` and the `overrides` entry in
   `package.json` together (see the README).
10. **Commit and push only when the owner asks.** Describe the change plainly in the
    commit message. Never commit `dist/`, `.astro/` or `node_modules/`.

---

## 2. Run it

Needs Node 22.12 or later (`.nvmrc` says 22) and npm 10 or later.

```sh
nvm use          # or install Node 22 any other way
npm ci           # exactly what package-lock.json records
npm run dev      # http://localhost:4321/
```

| Command | What it does |
|---|---|
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve `dist/` (Astro 7 runs it in the background; `npx astro preview stop` ends it) |
| `npm run check` | Type-check `.astro` and `.ts` |
| `npm run lint` | ESLint |
| `npm run verify` | check + lint + build + `scripts/check-site.mjs` |

To see the site exactly as GitHub Pages will serve it:

```sh
BASE_PATH=/agentcraft npm run build
BASE_PATH=/agentcraft node scripts/check-site.mjs
BASE_PATH=/agentcraft npm run preview    # http://localhost:4321/agentcraft/
```

---

## 3. Deploy to GitHub Pages

Deploys are automatic once Pages is switched on. `.github/workflows/deploy.yml` runs on every
push to `main`, on every pull request, and on demand (Actions tab → "Deploy to GitHub
Pages" → Run workflow).

**One-time setup, done by the repository owner in GitHub:**

1. Make sure the repository may publish Pages. A **public** repository can on any plan.
   A **private** one needs GitHub Pro, Team or Enterprise, and even then the published
   site is public unless the organisation uses Enterprise private Pages.
2. Settings → Pages → Build and deployment → **Source: GitHub Actions**.
3. Push to `main`, or run the workflow by hand. The site appears at
   `https://<owner>.github.io/<repo>/`; for this repository,
   **https://himalay-glitch.github.io/agentcraft/**.

**What the workflow does:** installs with `npm ci` on Node from `.nvmrc`, type-checks, lints,
builds with the Pages sub-path (`BASE_PATH`) and origin (`SITE_URL`), runs `check-site`, then
uploads and publishes. Pull requests are built and checked but never published. Until Pages
is switched on, runs still build and check, and finish with a notice saying publishing was
skipped.

**A custom domain** needs no code change: add it under Settings → Pages. The workflow then
builds with an empty base path.

**Don't** publish from a branch or a `docs/` folder, commit `dist/`, or hard-code `base`
in `astro.config.mjs`. All three break the base-path handling.

| Symptom | Cause | Fix |
|---|---|---|
| Workflow notice "GitHub Pages is not switched on" | Setup step 2 not done, or the plan doesn't allow Pages on a private repository | Do setup steps 1–2, then re-run |
| Live page has no styles or images | Something bypassed the base path | `BASE_PATH=/agentcraft node scripts/check-site.mjs` names the URL; see rule 4 |
| BUILD word never moves on the live site | The portal's font face failed to load | Check the `@font-face` in `globals.css` still uses a relative `url()` |
| `npm ci` fails in the workflow | `package-lock.json` out of step with `package.json`, or `stubs/` missing | `npm install` locally, commit both files; keep `stubs/` |

---

## 4. Map

| Path | What lives there |
|---|---|
| `src/pages/index.astro` | The page: the order of the sections |
| `src/layouts/Layout.astro` | `<head>`, fonts, the pre-paint inline script |
| `src/components/*.astro` | One file per section, copy in constants at the top |
| `src/components/ui/` | The vendored hero portal (rule 5) |
| `src/styles/globals.css` | Tokens (`:root`), then one block per section, then the navbar menus |
| `src/lib/` | `in-view.ts` (entrances), `rotation.ts`, `timezones.ts`, `paths.ts` (`withBase`) |
| `src/assets/` | Images and the portal font, all imported so the build hashes them |
| `src/types/hero.ts` | Content types, including the navbar menu shape |
| `scripts/check-site.mjs` | The guard run by `verify` and the workflow |
| `stubs/` | A types-only stand-in wired in by `package.json` `overrides` |
| `docs/DESIGN_NOTES.md` | Tokens, mechanics and traps. Read before touching the hero, fonts or scrolling |
| `docs/components/*.md` | One spec per section: layout, behaviour, copy, image sources |
| `THIRD_PARTY_NOTICES.md` | Every third-party piece and its licence |

Styling hooks are `data-ac-*` attributes, not class names. Rename one only together with
every CSS rule and script that uses it.

---

## 5. Things that break without an error

| Trap | What you see | Where it is explained |
|---|---|---|
| Portal font face renamed or given a root-relative path | BUILD sits still, no camera | DESIGN_NOTES §4 |
| A rule written as `section + section` | Spacing between sections wrong: every section is followed by its `<script>` | DESIGN_NOTES §1, `--band-pad` |
| A `transform` on anything around the process panel, or the run turned into padding | The process panel stops pinning | docs/components/process.md |
| `STACK_QUERY` and the `809px` media block changed separately | Process layout and script disagree | DESIGN_NOTES §1 |
| Navbar height changed without `--ac-pin-top` | Pinned panel slides under the bar | DESIGN_NOTES §2 |
| Content that resizes with no reserved height | Page jumps while scrolling; section links land short | DESIGN_NOTES §2 |
| Packages changed while `npm run dev` is running | BUILD sits still in dev only; console shows `504 (Outdated Optimize Dep)` | Stop the server, `rm -rf node_modules/.vite`, start again |
| The touch "Choose a letter" rule loses `!important` | A select box appears over the phone hero | DESIGN_NOTES §4 |

---

## 6. Making common changes safely

- **Text:** in the constants at the top of each section's `.astro` file (`COPY`, `STEPS`,
  `TEAMS`, `NAV_LINKS` …). Headlines are split into characters by `RevealText`, so pass the
  sentence as a prop; don't hand-write spans.
- **Headlines are two-tone:** ink, then the closing phrase in the brand blue (navy on the
  blue call-to-action band). Keep that when you change a headline or add a section:
  `SectionHead` takes `accent={lineIndex}`; see DESIGN_NOTES §1, Type.
- **Colours:** tokens in `:root` in `globals.css`. The brand blue is `--color-accent` and its
  two siblings; change all three together.
- **Images:** save into `src/assets/<section>/`, import, render with `<Image>`, set
  `widths` up to the file's own width and `sizes` to match the layout, and give real `alt`
  text unless the image is decoration. Record the source and licence in the section's doc
  and in `THIRD_PARTY_NOTICES.md`.
- **Navbar menus:** edit `NAV_LINKS` in `Navbar.astro` and fill the fixed shape. Icons come
  from `NAV_ICONS` in the same file.
- **A new section:** follow the shared grammar (`data-ac-sec`, `SectionHead`, `GridRules`,
  `toggleInView`), give it an `id`, add it to `index.astro`, add its marker to `SECTIONS`
  in `scripts/check-site.mjs` in page order, write `docs/components/<name>.md`, and add it
  to the page map in DESIGN_NOTES §2.
- **A new page:** `src/pages/<name>.astro` using `Layout`; link to it with
  `withBase("/<name>")`.
- **Motion:** drive it from an attribute on an ancestor and a CSS transition, keep it
  reversible like the rest, and give it a `prefers-reduced-motion` rule.
- **Touch targets** stay at 44px or more. Grow the hit area invisibly rather than
  resizing what is drawn.

---

## 7. Before you say you're done

- [ ] `npm run verify` ends with `check-site: OK`.
- [ ] `BASE_PATH=/agentcraft npm run build` and then `BASE_PATH=/agentcraft node scripts/check-site.mjs` pass.
- [ ] You looked at the page at 1440, 1024, 768, 390 and 360 pixels wide: the first screen, the
      BUILD zoom on load **and on refresh**, the navbar dropdown and the phone menu, and every
      section down to the footer. There are no console errors.
- [ ] Nothing about the design changed that the owner did not ask for.
- [ ] The section's doc (and DESIGN_NOTES, if a mechanic changed) says what the code now does.
- [ ] New third-party material is in `THIRD_PARTY_NOTICES.md`.
- [ ] You committed only if asked, with `package.json` and `package-lock.json` together.

---

## 8. Open items for the team

These are known and waiting on decisions, not bugs to fix on your own:

- `/contact` and `/case-studies` pages don't exist yet; "Plan my team" and "View case study"
  point at them.
- Six testimonials, three case-study summaries and the stand-in photos are placeholders.
- The headquarters address needs confirming.
- White 11px text on the brand blue (and the small blue FAQ numbers on white) measure
  3.84:1 against the 4.5:1 accessibility guideline. `--color-accent-dark` would pass
  (4.95:1), but choosing it is a brand decision.
- The showcase portrait's source is recorded as "supplied by the team"; add its licence.
