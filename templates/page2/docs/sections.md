# Product discovery: sections

This page's sections, in page order, after the hero. Each one is designed for this page
alone, apart from the FAQ and the close, which are the same on every AgentCraft page. Copy lives in `src/pages/index.astro`,
styles in the Page 2 block of `src/styles/globals.css`.

## The frame every page shares

- **Layout:** `Layout` with `navTone="field"`, so the navbar is dark over the hero from the
  first frame; `PageHero`'s script then follows the scroll (dark over the hero, light
  after).
- **FAQ:** `FaqSection`, the same on every AgentCraft page: header, button and a photo in
  a sticky column on the left, the questions as an accordion (native `<details>`, one open
  at a time) on the right. Each page passes its own questions and photo.
- **Close:** `CtaSection`, the same on every AgentCraft page: the accent band with the
  drafting compass, running straight into the footer. Each page passes its own text.
- **Hero:** `PageHero`, the same on every AgentCraft page: breadcrumb, two-tone name,
  lede and buttons on the left, the framed photo on the right, four spec cells along the
  foot.
- **Links:** the navbar and footer link to the home page's sections and the other pages on
  the main site (`SITE_URL`, `sectionHref()` and `pageHref()` in `src/lib/paths.ts`);
  `#contact` and `#top` stay on this page.
- **Grammar:** every section sets `data-ac-sec` (light, dark, accent), draws the column
  rules with `GridRules`, marks frame corners with `Joints`, and plays its entrance on
  `data-ac-in` (`src/lib/in-view.ts`), reversibly. Headlines are two-tone and fill in per
  character (`RevealText`).
- **Nothing moves the page:** anything that changes while the reader is on the page keeps
  one size (all states share one grid cell, or space is reserved).
- **Motion:** every animation has a `prefers-reduced-motion` rule; loops pause off screen.
- **Phones and tablets:** every section has its own compact layout up to 991px and again
  below 600px, built to cut scrolling. See the page's block in `src/styles/globals.css`.

## Sections

### ClaritySection

`src/components/ClaritySection.astro`. The case for discovery, on drafting paper. One frame across the page: the photo of a workshop fills columns 1–2; columns 3–4 are grid paper with the claim, the argument, and the result as an annotated list, each outcome numbered in a dashed drafting circle, its note set against the right edge.

### ChecklistSection

`src/components/ChecklistSection.astro`. The readiness check, as a checklist and a schedule. Three cards, one per asset the client may already have, each a real checkbox; the fourth column is the answer on the accent, the plan's length in weeks. Under them, the schedule: one segment per phase along a ruler of weeks, on grid paper. Checking an asset crosses its phase out and hatches it. Every segment is always drawn, so the schedule never changes height. See docs/sections.md.

### NumeralsSection

`src/components/NumeralsSection.astro`. How discovery works, on the dark tone. Columns 1–2: the claim, then the steps as a list led by large outlined numerals, which fill with the accent one after another as the section arrives. Columns 3–4: a photo of the team at work, as tall as the list.

### BlueprintSection

`src/components/BlueprintSection.astro`. The deliverables, previewed. Column 1 lists them; columns 2–4 are a dark viewer that draws the chosen one live: a requirements document writing itself, an architecture diagram connecting up, a prototype being tapped through, a budget filling its ring. It moves on to the next by itself every few seconds until the reader picks one, and pauses off screen. Every preview sits in the same cell, so the viewer never changes size.

### LedgerSection

`src/components/LedgerSection.astro`. The cost of assumptions, as a ledger. A photo of the board holds column 1 for the full height; column 2 is what skipping discovery costs, crossed in grey; columns 3–4 are the same lines with discovery, on the accent. One grid, so each line sits level with its counterpart.

### FaqSection

`src/components/FaqSection.astro`. Frequently asked: the header holds its place on the left while the answers scroll past on the right. Native <details> sharing one name, so only one answer is open at a time and it all works without scripts. See docs/components/faq.md. Questions are the brief's. The answers are drafts written from what the page already says (the stats, the team models, X-Shore); have them checked before launch.

### CtaSection

`src/components/CtaSection.astro`. The closing call to action, on the accent. Behind it, a drafting mark: concentric circles on a crosshair with one dashed ring turning slowly, the compass the team plans with. Copy is the brief's. See docs/components/cta-footer.md.

## Copy to check before launch

The copy is written from the brief where there was one, cut to one short line per item. Drafts to check: the readiness plan lengths (two weeks a phase, a one-week review when every phase is covered), the outcomes, the ledger lines and the FAQ answers.

## Photos

| File | Source |
|---|---|
| `src/assets/pages/discovery.jpg` | Supplied by the AgentCraft team |
| `src/assets/pages/p2-assumptions.jpg` | Unsplash, photo 1573164574572-cb89e39749b4 (Unsplash License) |
| `src/assets/pages/p2-clarity.jpg` | Unsplash, photo 1552664730-d307ca884978 (Unsplash License) |
| `src/assets/pages/p2-faq.jpg` | Unsplash, photo 1590402494587-44b71d7772f6 (Unsplash License) |
| `src/assets/pages/p2-steps.jpg` | Unsplash, photo 1557426272-fc759fdf7a8d (Unsplash License) |
