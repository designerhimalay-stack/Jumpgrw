# Staff augmentation: sections

This page's sections, in page order, after the hero. Each one is designed for this page
alone, apart from the FAQ and the close, which are the same on every AgentCraft page. Copy lives in `src/pages/index.astro`,
styles in the Page 7 block of `src/styles/globals.css`.

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

### MergeSection

`src/components/MergeSection.astro`. Two teams becoming one. The headline and lede run across the top; under them a photo of people at work fills columns 2–4, and a card hangs over its left edge: the client's team in one row, AgentCraft's engineers in another, and as the section arrives the second row slides up into the first until they read as one team.

### OverlapSection

`src/components/OverlapSection.astro`. Working hours, overlapped, on the dark tone. Choose where your team sits; a 24-hour ruler in your local time then shows your working day and each of our regions' working day as bars, the hours you all share lit as a band down the chart, and the count of shared hours at the top. Hours are worked out from real time-zone offsets today, so they follow daylight saving; a working day that crosses midnight is drawn in two parts. Every bar is always drawn; only its position changes. See docs/sections.md.

### OnboardSection

`src/components/OnboardSection.astro`. Onboarding, day by day. Columns 1–2 hold the headline and a photo of the team that stay pinned while columns 3–4 scroll past the days; a progress line down the days fills with the reader's scroll, and each day lights as the line reaches it. On a phone nothing pins and the line still fills.

### FlexSection

`src/components/FlexSection.astro`. Scale up, scale down, on a grey band. A year of one client's team as a bar per month rising from the floor as the section arrives, each bar in engineer blocks, the busy months marked with what drove them. The claim sits above, the terms under it. The months are an example and say so.

### FaqSection

`src/components/FaqSection.astro`. Frequently asked: the header holds its place on the left while the answers scroll past on the right. Native <details> sharing one name, so only one answer is open at a time and it all works without scripts. See docs/components/faq.md. Questions are the brief's. The answers are drafts written from what the page already says (the stats, the team models, X-Shore); have them checked before launch.

### CtaSection

`src/components/CtaSection.astro`. The closing call to action, on the accent. Behind it, a drafting mark: concentric circles on a crosshair with one dashed ring turning slowly, the compass the team plans with. Copy is the brief's. See docs/components/cta-footer.md.

## Copy to check before launch

The copy is written from the brief where there was one, cut to one short line per item. Drafts to check: everything: there was no brief. The example year is illustrative; the onboarding days, the working hours, the terms and the FAQ answers are drafts.

## Photos

| File | Source |
|---|---|
| `src/assets/pages/p7-faq.jpg` | Unsplash, photo 1522202176988-66273c2fd55f (Unsplash License) |
| `src/assets/pages/p7-hero.jpg` | Unsplash, photo 1573164713619-24c711fe7878 (Unsplash License) |
| `src/assets/pages/p7-merge.jpg` | Unsplash, photo 1523240795612-9a054b0db644 (Unsplash License) |
| `src/assets/pages/p7-onboard.jpg` | Unsplash, photo 1557804506-669a67965ba0 (Unsplash License) |
