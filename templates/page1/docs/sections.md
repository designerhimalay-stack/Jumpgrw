# MVP launch teams: sections

This page's sections, in page order, after the hero. Each one is designed for this page
alone, apart from the FAQ and the close, which are the same on every AgentCraft page. Copy lives in `src/pages/index.astro`,
styles in the Page 1 block of `src/styles/globals.css`.

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

### LanesSection

`src/components/LanesSection.astro`. The case for a launch team, as a race. A photo band across the four columns carries the headline; under it, one lane per way of staffing a launch, each bar as long as that route takes to reach a first commit. The bars run out from the start line as the section arrives, ours the shortest and on the accent. A row of what only a launch team brings closes it.

### RosterSection

`src/components/RosterSection.astro`. The squad builder, as a roster, on the dark tone. A pill switch across the top picks the launch constraint; the pod for it lines up underneath as one card per role, each with a monogram, on the page's four columns. Every pod sits in the same grid cell, so the roster keeps the tallest pod's height and nothing below moves when the choice changes. The numbers close it on the stats section's narrow / wide / narrow cards.

### GanttSection

`src/components/GanttSection.astro`. The build plan as a chart. The header splits around a photo of the squad at work; under it, a ruler of weeks runs along the top of the frame and each phase is a bar across the weeks it takes, its hand-over written on the bar. The bars draw left to right in turn as the section arrives, so the plan reads as a schedule filling in. Column 1 names each phase, on the page's first column.

### LoadSection

`src/components/LoadSection.astro`. Built to scale, shown as a launch week, on the dark tone. Columns 1–2: the myth struck through, the claim, the practices and what the client keeps. Columns 3–4: a dashboard for the week after launch. The user count climbs to its target as the traffic curve draws in, latency holds flat under it, and three readouts settle. The numbers are illustrative and say so.

### FaqSection

`src/components/FaqSection.astro`. Frequently asked: the header holds its place on the left while the answers scroll past on the right. Native <details> sharing one name, so only one answer is open at a time and it all works without scripts. See docs/components/faq.md. Questions are the brief's. The answers are drafts written from what the page already says (the stats, the team models, X-Shore); have them checked before launch.

### CtaSection

`src/components/CtaSection.astro`. The closing call to action, on the accent. Behind it, a drafting mark: concentric circles on a crosshair with one dashed ring turning slowly, the compass the team plans with. Copy is the brief's. See docs/components/cta-footer.md.

## Copy to check before launch

The copy is written from the brief where there was one, cut to one short line per item. Drafts to check: the Lean and Assurance pods (the brief describes only the Velocity pod), the race lanes, the phase weeks and hand-overs, and the FAQ answers.

## Photos

| File | Source |
|---|---|
| `src/assets/pages/mvp-launch.jpg` | Supplied by the AgentCraft team |
| `src/assets/pages/p1-blueprint.jpg` | Unsplash, photo 1552581234-26160f608093 (Unsplash License) |
| `src/assets/pages/p1-faq.jpg` | Unsplash, photo 1531545514256-b1400bc00f31 (Unsplash License) |
| `src/assets/pages/p1-momentum.jpg` | Unsplash, photo 1522071820081-009f0129c71c (Unsplash License) |
