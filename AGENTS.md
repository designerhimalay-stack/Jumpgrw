# AgentCraft

Astro 7, static output, no UI framework shipped to the client. Components are `.astro` files
whose behaviour lives in plain `<script>` tags. Tailwind v4 runs through `@tailwindcss/vite`;
Outfit and Inter come from the `fonts` config in `astro.config.mjs`. Deployed to GitHub
Pages by `.github/workflows/deploy.yml`.

This is a finished design template. **Read `docs/AI_GUIDE.md` before your first change.** It
covers running, deploying and changing the site without breaking it. Read
`docs/DESIGN_NOTES.md` before changing the hero portal, fonts, or scroll mechanics; several
of them fail silently.

Non-negotiable, in short (the guide has the reasons):

- Run `npm run verify` before every commit; it must end `check-site: OK`. Don't weaken the check.
- Don't change the design unless the owner asks.
- One shared navbar dropdown (`[data-ac-nav-mega]`), never a panel per menu.
- No root-relative URLs: `withBase()` for page links, imports for assets, relative `url()` in CSS.
- Don't edit `src/components/ui/` (vendored MIT code; keep its notice).
- Nothing may move the page after load; reserve the space.
- Never describe any part of the site as taken from another website, and never add another
  site's name, assets or code. One word is banned from the repository outright; `check-site`
  knows it. For templates use `document.importNode(template.content, true)`.
- `npm ci` to install; commit `package.json` and `package-lock.json` together; keep `stubs/`.
- Commit and push only when the owner asks.
