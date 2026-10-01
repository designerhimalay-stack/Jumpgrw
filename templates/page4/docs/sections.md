# Production teams: sections

This page's sections, in page order, after the hero. Each one is designed for this page
alone, apart from the FAQ and the close, which are the same on every AgentCraft page. Copy lives in `src/pages/index.astro`,
styles in the Page 4 block of `src/styles/globals.css`.

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

### ReleaseFeedSection

`src/components/ReleaseFeedSection.astro`. A product that is already live. The headline sits over columns 1–2; a wide photo of the team runs columns 1–3 under it, and a release feed hangs in column 4, over the photo's edge, scrolling a production team's week of releases without end. The feed pauses on hover and stands still under reduced motion.

### SignalsSection

`src/components/SignalsSection.astro`. What a production team watches, on the dark tone: four delivery signals, one per column, each with a trend line that draws itself as the section arrives and the direction it should move in. The lines show the direction of travel, not a client's figures.

### SizerSection

`src/components/SizerSection.astro`. Team size, as a slider. The header splits around a photo of a team at work. Under it, drag from the smallest team to the largest: the seats fill one by one, each with its role's monogram, and the list on the right marks which roles the team has at that size. Every seat and every role is always drawn, so nothing moves as the size changes. Starts at a sensible default; works without the script at that size. See docs/sections.md.

### CadenceSection

`src/components/CadenceSection.astro`. The team's rhythm, as a loop, on a grey band. Columns 1–2: a ring drawn in the display face's weight, the stages of a sprint set round it and a marker travelling the ring for good, one lap every twelve seconds; the stage nearest the marker lights as it passes. Columns 3–4: the claim and the rituals the team keeps with yours.

### FaqSection

`src/components/FaqSection.astro`. Frequently asked: the header holds its place on the left while the answers scroll past on the right. Native <details> sharing one name, so only one answer is open at a time and it all works without scripts. See docs/components/faq.md. Questions are the brief's. The answers are drafts written from what the page already says (the stats, the team models, X-Shore); have them checked before launch.

### CtaSection

`src/components/CtaSection.astro`. The closing call to action, on the accent. Behind it, a drafting mark: concentric circles on a crosshair with one dashed ring turning slowly, the compass the team plans with. Copy is the brief's. See docs/components/cta-footer.md.

## Copy to check before launch

The copy is written from the brief where there was one, cut to one short line per item. Drafts to check: everything: there was no brief. The release feed and trend lines are illustrative; team sizes, role order, rituals, milestones and FAQ answers are drafts.

## Photos

| File | Source |
|---|---|
| `src/assets/pages/p4-faq.jpg` | Unsplash, photo 1531497865144-0464ef8fb9a9 (Unsplash License) |
| `src/assets/pages/p4-floor.jpg` | Unsplash, photo 1504384308090-c894fdcc538d (Unsplash License) |
| `src/assets/pages/p4-hero.jpg` | Unsplash, photo 1542744094-3a31f272c490 (Unsplash License) |
| `src/assets/pages/p4-size.jpg` | Unsplash, photo 1517245386807-bb43f82c33c4 (Unsplash License) |
