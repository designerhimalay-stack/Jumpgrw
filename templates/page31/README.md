# AgentCraft · Nearshore engineers, Mexico

One page of the AgentCraft site, as a complete, independent [Astro](https://astro.build)
project. Static output, no client framework. Needs Node 22.12 or later (see `.nvmrc`).

**The page:** a hero, then tech we use, choose the work, why teams choose us, ways to work together, the team planning view, find the engineer you need, help across your stack, how they help, real examples, your pod, is this a good fit, how it works, the FAQ and the contact form. The sections come from the shared hire kit in `src/components/hire/`. It is all in
`src/pages/index.astro`, served at the root of wherever you host it.

| Command | |
|---|---|
| `npm ci` | Install exactly what `package-lock.json` records |
| `npm run dev` | Dev server at http://localhost:4321 |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run check` | Type-check `.astro` and `.ts` files |
| `npm run lint` | ESLint |
| `npm run verify` | All of the above plus `scripts/check-site.mjs`; run before every commit |

## Change the brand name or logo

Everything this page shows of the brand comes from one file, **`src/lib/brand.ts`**: the
tab title, the navbar and footer wordmarks, every line of copy that names the company,
the FAQ, the call to action, the tagline and the copyright.

- **Name:** change `name`. It changes everywhere on the page at once.
- **Logo:** put the file in `src/assets/brand/`, import it in `brand.ts` (the line is
  there, commented out) and set `logo`. It shows in the navbar and footer, beside the
  name or on its own (`showName: false`), and becomes the browser-tab icon.
- **Tagline:** `tagline`, under the footer wordmark.

Links to the main site's sections (`#why-agentcraft`) and its address (`SITE_URL`) are
addresses, not text, so they don't change with the name.

## Links to the rest of the site

The navbar and footer link to the home page's sections and to the other pages. Those live
on the main AgentCraft site, at `PUBLIC_SITE_URL` (default
`https://himalay-glitch.github.io/agentcraft/`, set in `src/lib/paths.ts`). Set it when
you build if the main site lives elsewhere:

```sh
PUBLIC_SITE_URL=https://www.example.com/ npm run build
```

`#contact` and `#top` stay on this page, and this page's own entry in the Teams menu links
to itself.

## Deploy

`dist/` is plain static files: deploy it to any static host.

**GitHub Pages, as its own repository:** push this folder as the root of a repository.
`.github/workflows/deploy.yml` then builds, checks and publishes it once Pages is switched
on (Settings → Pages → Source: GitHub Actions); the page appears at
`https://<owner>.github.io/<repo>/`. The workflow sets `BASE_PATH` and `SITE_URL` itself.
Inside the AgentCraft repository this workflow is inert: GitHub only runs workflows from
the repository root, where `npm run build:all` publishes this page at `/page31/`.

To see it as GitHub Pages will serve it:

```sh
BASE_PATH=/<repo> npm run build
BASE_PATH=/<repo> node scripts/check-site.mjs
BASE_PATH=/<repo> npm run preview
```

## Where things are

| Path | What lives there |
|---|---|
| `src/pages/index.astro` | The page: its copy, photos and section order |
| `src/components/hire/` | The hire section kit: one props-driven component per section, its types (`types.ts`) and the radio switch they share |
| `src/components/` | The navbar, footer, hero, FAQ and the shared pieces the sections build on |
| `src/styles/globals.css` | Tokens, then one block per piece; the hire kit's rules are in the Hire sections block (phone rules in the Phone pass) |
| `src/assets/pages/` | This page's photos |
| `docs/sections.md` | The section kit: every section, its props and its phone layout |
| `scripts/check-site.mjs` | The build guard `verify` runs |
| `stubs/` | A types-only stand-in wired in by `package.json` `overrides`; keep both |

Rules for changing it are in [`AGENTS.md`](AGENTS.md); licences in
[`THIRD_PARTY_NOTICES.md`](THIRD_PARTY_NOTICES.md).
