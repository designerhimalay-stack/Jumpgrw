# Global capability center: sections

This page's sections, in page order, after the hero. Each one is designed for this page
alone, apart from the FAQ and the close, which are the same on every AgentCraft page. Copy lives in `src/pages/index.astro`,
styles in the Page 9 block of `src/styles/globals.css`.

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

### GlobeSection

`src/components/GlobeSection.astro`. One center, four time zones, on the dark tone. Columns 1–2: the claim and the hubs, each with its role and local time, live. Columns 3–4: a dotted globe turning slowly, the hubs pulsing and arcs of light running between them; choosing a hub turns the globe to face it, and the globe can be dragged.

### BotSection

`src/components/BotSection.astro`. Build, operate, transfer. The header splits around a photo of a leadership team; under it the three phases on the columns, and running under all three an ownership bar: AgentCraft's share and yours, the line between them sliding from left to right across the phases as the section arrives, until the center is entirely yours.

### FloorSection

`src/components/FloorSection.astro`. The center, as a floor plan, on a grey band. Rooms for each capability laid out on drafting paper, their walls drawn in one after another as the section arrives, each named with what it does. Pointing at a room lifts it. The claim sits on the left.

### ControlSection

`src/components/ControlSection.astro`. Governance, on the dark tone. A tall photo of the team holds columns 1–2; columns 3–4 list what stays in the client's control, each with a ring that draws itself closed as the section arrives, one after another.

### FaqSection

`src/components/FaqSection.astro`. Frequently asked: the header holds its place on the left while the answers scroll past on the right. Native <details> sharing one name, so only one answer is open at a time and it all works without scripts. See docs/components/faq.md. Questions are the brief's. The answers are drafts written from what the page already says (the stats, the team models, X-Shore); have them checked before launch.

### CtaSection

`src/components/CtaSection.astro`. The closing call to action, on the accent. Behind it, a drafting mark: concentric circles on a crosshair with one dashed ring turning slowly, the compass the team plans with. Copy is the brief's. See docs/components/cta-footer.md.

### The globe

`src/lib/globe.ts` draws it on a canvas: land as dots from `src/lib/land-dots.json` (Natural Earth 1:110m land, public domain, via the world-atlas package, ISC; sampled every 2.2°), orthographic with an 18° tilt, the near side only. It turns slowly, can be dragged, and turns to face a hub when one is chosen. Paused off screen; one still frame under reduced motion.

## Copy to check before launch

The copy is written from the brief where there was one, cut to one short line per item. Drafts to check: everything: there was no brief. The build-operate-transfer timings and shares, the floor plan, the hub roles and the FAQ answers are drafts.

## Photos

| File | Source |
|---|---|
| `src/assets/pages/p9-bot.jpg` | Unsplash, photo 1573165231977-3f0e27806045 (Unsplash License) |
| `src/assets/pages/p9-faq.jpg` | Unsplash, photo 1582005450386-52b25f82d9bb (Unsplash License) |
| `src/assets/pages/p9-gov.jpg` | Unsplash, photo 1573497701240-345a300b8d36 (Unsplash License) |
| `src/assets/pages/p9-hero.jpg` | Unsplash, photo 1573164574511-73c773193279 (Unsplash License) |
