# AgentCraft · Angular developers

One page of the AgentCraft site, as a complete, independent [Astro](https://astro.build)
project. Static output, no client framework. Needs Node 22.12 or later (see `.nvmrc`).

**The page:** a hero with four proof figures, then tech we use, the work your team needs,
why us, ways to work together, a savings planner, the engineers, what they do, how they
help, real examples, your pod, is this a fit, how it works, FAQ, and a contact brief. It is
built from the hire kit shared by every Technologies page: the sections in
`src/components/hire/`, the shared words in `src/lib/hire-copy.ts`, and this page's skill
in `src/data/tech.ts`. See `docs/sections.md`.

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
the repository root, where `npm run build:all` publishes this page at `/page14/`.

To see it as GitHub Pages will serve it:

```sh
BASE_PATH=/<repo> npm run build
BASE_PATH=/<repo> node scripts/check-site.mjs
BASE_PATH=/<repo> npm run preview
```

## Where things are

| Path | What lives there |
|---|---|
| `src/pages/index.astro` | The page: the hire kit's sections in order (the same on every Technologies page) |
| `src/data/tech.ts` | This page's skill: tools, roles, examples and photos |
| `src/lib/hire-copy.ts` | The words every Technologies page shares |
| `src/components/hire/` | The hire kit's sections |
| `src/components/` | The hero, navbar, footer and FAQ |
| `src/styles/hire.css` | The hire kit's styles |
| `src/styles/globals.css` | Tokens, the shared section grammar, hero, FAQ, footer and navbar |
| `src/assets/pages/` | This page's photos |
| `docs/sections.md` | Every section, its layout on each screen, and the photo sources |
| `scripts/check-site.mjs` | The build guard `verify` runs |
| `stubs/` | A types-only stand-in wired in by `package.json` `overrides`; keep both |

Rules for changing it are in [`AGENTS.md`](AGENTS.md); licences in
[`THIRD_PARTY_NOTICES.md`](THIRD_PARTY_NOTICES.md).
