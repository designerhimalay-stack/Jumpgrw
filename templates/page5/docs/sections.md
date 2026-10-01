# QA pods: sections

This page's sections, in page order, after the hero. Each one is designed for this page
alone, apart from the FAQ and the close, which are the same on every AgentCraft page. Copy lives in `src/pages/index.astro`,
styles in the Page 5 block of `src/styles/globals.css`.

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

### TestRunSection

`src/components/TestRunSection.astro`. A test run, live, on the dark tone. The headline spans the top; under it a photo of the team reviewing a build holds columns 1–2, and a test runner fills columns 3–4: the suite runs line by line as the section arrives, each test ticking as it passes, the totals counting up, and it runs again each time the section comes back into view. Every line is in the markup from the start and the window is a fixed height, so nothing moves. Without the script, or under reduced motion, the finished run shows.

### PyramidSection

`src/components/PyramidSection.astro`. The testing pyramid, built. Columns 1–2: four tiers stacked from a wide base to a flat, narrow top (room for its label), laid one on another from the bottom up as the section arrives. Columns 3–4: what the pod does at each tier, level with its tier. Pointing at a tier or its row lights both. See docs/sections.md.

### MatrixSection

`src/components/MatrixSection.astro`. Coverage, as a matrix. The header splits around a photo of someone testing on a tablet; under it, browsers down the side and screens across the top, every cell filling with a tick in a diagonal wave from the top left as the section arrives, the way a coverage run fills in. See docs/sections.md.

### CostCurveSection

`src/components/CostCurveSection.astro`. Why testing early pays, as a chart, on the dark tone. The cost of fixing a bug climbs steeply the later it is found; the curve draws itself left to right across the page's columns as the section arrives, and the band where a QA pod catches bugs lights under it. Relative, not measured: the axis says "cost to fix", with no figures.

### FaqSection

`src/components/FaqSection.astro`. Frequently asked: the header holds its place on the left while the answers scroll past on the right. Native <details> sharing one name, so only one answer is open at a time and it all works without scripts. See docs/components/faq.md. Questions are the brief's. The answers are drafts written from what the page already says (the stats, the team models, X-Shore); have them checked before launch.

### CtaSection

`src/components/CtaSection.astro`. The closing call to action, on the accent. Behind it, a drafting mark: concentric circles on a crosshair with one dashed ring turning slowly, the compass the team plans with. Copy is the brief's. See docs/components/cta-footer.md.

## Copy to check before launch

The copy is written from the brief where there was one, cut to one short line per item. Drafts to check: everything: there was no brief. The test run is illustrative, the cost curve is relative (no figures), and the pyramid shares, coverage and FAQ answers are drafts.

## Photos

| File | Source |
|---|---|
| `src/assets/pages/p5-console.jpg` | Unsplash, photo 1531538606174-0f90ff5dce83 (Unsplash License) |
| `src/assets/pages/p5-devices.jpg` | Unsplash, photo 1573164713714-d95e436ab8d6 (Unsplash License) |
| `src/assets/pages/p5-faq.jpg` | Unsplash, photo 1573166364524-d9dbfd8bbf83 (Unsplash License) |
| `src/assets/pages/p5-hero.jpg` | Unsplash, photo 1563986768609-322da13575f3 (Unsplash License) |
