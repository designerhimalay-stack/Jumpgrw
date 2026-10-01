# Prototype to launch: sections

This page's sections, in page order, after the hero. Each one is designed for this page
alone, apart from the FAQ and the close, which are the same on every AgentCraft page. Copy lives in `src/pages/index.astro`,
styles in the Page 3 block of `src/styles/globals.css`.

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

### LayersSection

`src/components/LayersSection.astro`. What sits under a design, on the dark tone. Columns 1–2: the claim, then the layers engineering adds, drawn as slabs stacked one on another, each stepping in from the last and sliding into place in turn as the section arrives. Columns 3–4: a photo of developers at work, the full height of the section.

### StackSection

`src/components/StackSection.astro`. The architecture mapper, as a stack diagram and a console. Columns 1–3: the target stack drawn top to bottom as connected layers, each with its base and one capability tag per requirement. Column 4: a dark console with a switch per requirement. A tag is always drawn, dashed while its requirement is off and filled when it is on, so the diagram never changes height.

### PipelineSection

`src/components/PipelineSection.astro`. The build, as a delivery pipeline, over a full-bleed photo of the team inked deep navy. Four stages sit on one line across the columns; as the section arrives the line runs through them and each stage's check lights as it passes. Three numbers close it, set in type on a rule rather than in cards.

### FidelitySection

`src/components/FidelitySection.astro`. Design against production, on one screen. Columns 1–3: the same screen twice, stacked: the design, drawn as a Figma frame with its measurements marked, and the finished build. A handle splits them; drag it (or use the arrow keys) to compare. On arrival the handle sweeps across once. Column 4: how close the build is, as readouts. Drawn in CSS: no images. See docs/sections.md.

### StatesSection

`src/components/StatesSection.astro`. Prototype against production, drawn. A strip across the top shows what a prototype shows: one happy screen. Under it, one card per column for the states production has to handle, each a small browser window drawn in CSS in that state (a shimmering loading skeleton, a field with an error, a code prompt, the same view on three screen sizes). The handoff runs along the foot of the frame. No images.

### FaqSection

`src/components/FaqSection.astro`. Frequently asked: the header holds its place on the left while the answers scroll past on the right. Native <details> sharing one name, so only one answer is open at a time and it all works without scripts. See docs/components/faq.md. Questions are the brief's. The answers are drafts written from what the page already says (the stats, the team models, X-Shore); have them checked before launch.

### CtaSection

`src/components/CtaSection.astro`. The closing call to action, on the accent. Behind it, a drafting mark: concentric circles on a crosshair with one dashed ring turning slowly, the compass the team plans with. Copy is the brief's. See docs/components/cta-footer.md.

## Copy to check before launch

The copy is written from the brief where there was one, cut to one short line per item. Drafts to check: what each requirement adds to each layer, the layer notes and the FAQ answers.

## Photos

| File | Source |
|---|---|
| `src/assets/pages/p3-execution.jpg` | Unsplash, photo 1551434678-e076c223a692 (Unsplash License) |
| `src/assets/pages/p3-faq.jpg` | Unsplash, photo 1521737604893-d14cc237f11d (Unsplash License) |
| `src/assets/pages/p3-real.jpg` | Unsplash, photo 1531482615713-2afd69097998 (Unsplash License) |
| `src/assets/pages/prototype.jpg` | Supplied by the AgentCraft team |
