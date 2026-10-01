# AgentCraft · MVP launch teams

One page of the AgentCraft site as a standalone Astro 7 project (static output, no UI
framework shipped to the client; behaviour lives in plain `<script>` tags; Tailwind v4
through `@tailwindcss/vite`; Outfit and Inter from the `fonts` config). See `README.md`
for running and deploying, and `docs/sections.md` before changing a section.

Non-negotiable:

- Run `npm run verify` before every commit; it must end `check-site: OK`. Don't weaken the check.
- Don't change the design unless the owner asks.
- The brand (name, logo, tagline) lives only in `src/lib/brand.ts`. Never write the name
  into a component or the page: use `BRAND.name`.
- One shared navbar dropdown (`[data-ac-nav-mega]`), never a panel per menu.
- No root-relative URLs: `withBase()` for links within this build, `SITE_URL` / `pageHref()`
  for the rest of the AgentCraft site, imports for assets, relative `url()` in CSS.
- Nothing may move the page after load; reserve the space.
- Phones and tablets get their own compact layout: less scrolling, the important content kept.
- Never describe any part of the site as taken from another website, and never add another
  site's name, assets or code. One word is banned from the project outright; `check-site`
  knows it. For templates use `document.importNode(template.content, true)`.
- `npm ci` to install; commit `package.json` and `package-lock.json` together; keep `stubs/`.
- Commit and push only when the owner asks.
