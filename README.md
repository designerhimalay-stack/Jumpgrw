# AgentCraft

Marketing site, built with [Astro](https://astro.build). Static output, no client framework.
Needs Node 22.12 or later (see `.nvmrc`).

| Command | |
|---|---|
| `npm ci` | Install exactly what `package-lock.json` records |
| `npm run dev` | Dev server at http://localhost:4321 |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run check` | Type-check `.astro` and `.ts` files |
| `npm run lint` | ESLint |
| `npm run verify` | All of the above plus `scripts/check-site.mjs`; run before every commit |

`dist/` is plain static files and can be deployed to any static host. Pushes to `main` deploy
to GitHub Pages through `.github/workflows/deploy.yml` once Pages is switched on (Settings →
Pages → Source: GitHub Actions). The site is then at https://himalay-glitch.github.io/agentcraft/.

How the page is put together, and the traps worth knowing about, are in
[`docs/DESIGN_NOTES.md`](docs/DESIGN_NOTES.md). Running, deploying and changing the site
safely, written for AI assistants, is [`docs/AI_GUIDE.md`](docs/AI_GUIDE.md). Third-party
code, icons, fonts and photos, with their licences, are listed in
[`THIRD_PARTY_NOTICES.md`](THIRD_PARTY_NOTICES.md).

`stubs/mdast-util-to-hast` is a types-only stand-in, wired in through `overrides` in
`package.json`. Astro's code highlighter lists that package as a dependency but only uses
one of its types, so the stand-in saves installing it and the packages it pulls in. Keep
the `overrides` entry and the `stubs/` folder together.
