# DevOps pods: sections

This page's sections, in page order, after the hero. Each one is designed for this page
alone, apart from the FAQ and the close, which are the same on every AgentCraft page. Copy lives in `src/pages/index.astro`,
styles in the Page 6 block of `src/styles/globals.css`.

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

### FlowSection

`src/components/FlowSection.astro`. The delivery pipeline, running, on the dark tone. Columns 1–2: the claim over a photo of the team. Columns 3–4: the pipeline top to bottom, a stage per node, with changes flowing down it for good as small packets of light, each stage glowing as one passes. Pure CSS motion; it stands still under reduced motion.

### StatusSection

`src/components/StatusSection.astro`. A status board, the kind the pod sets up for you. One row per service, one bar per day for the last sixty days, the bars rising in a wave from the left as the section arrives; a lighter bar marks a day with an incident, and pointing at one names it. The history is illustrative and says so.

### IacSection

`src/components/IacSection.astro`. Infrastructure as code, applied. The header splits around a photo of engineers at their screens. Under it: the code on the left, and on the right the resources it creates, each ticking to "created" in turn as its line in the code lights, the way an apply runs. Replays on each arrival.

### SunSection

`src/components/SunSection.astro`. Follow the sun, on the dark tone. A 24-hour dial in columns 1–2: each region's working day drawn as an arc round it, so together they close the ring, and a hand pointing at the real time now, in UTC, turning with the day. Columns 3–4: the claim, a photo of the team, and each region's local time, live. The arcs draw themselves in as the section arrives.

### FaqSection

`src/components/FaqSection.astro`. Frequently asked: the header holds its place on the left while the answers scroll past on the right. Native <details> sharing one name, so only one answer is open at a time and it all works without scripts. See docs/components/faq.md. Questions are the brief's. The answers are drafts written from what the page already says (the stats, the team models, X-Shore); have them checked before launch.

### CtaSection

`src/components/CtaSection.astro`. The closing call to action, on the accent. Behind it, a drafting mark: concentric circles on a crosshair with one dashed ring turning slowly, the compass the team plans with. Copy is the brief's. See docs/components/cta-footer.md.

## Copy to check before launch

The copy is written from the brief where there was one, cut to one short line per item. Drafts to check: everything: there was no brief. The status history and the code are illustrative; the regions' working hours and the FAQ answers are drafts.

## Photos

| File | Source |
|---|---|
| `src/assets/pages/p6-faq.jpg` | Unsplash, photo 1556761175-b413da4baf72 (Unsplash License) |
| `src/assets/pages/p6-hero.jpg` | Unsplash, photo 1573164713988-8665fc963095 (Unsplash License) |
| `src/assets/pages/p6-iac.jpg` | Unsplash, photo 1629904853716-f0bc54eea481 (Unsplash License) |
| `src/assets/pages/p6-oncall.jpg` | Unsplash, photo 1581091226825-a6a2a5aee158 (Unsplash License) |
| `src/assets/pages/p6-pipeline.jpg` | Unsplash, photo 1544256718-3bcf237f3974 (Unsplash License) |
