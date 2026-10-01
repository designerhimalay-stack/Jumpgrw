# Specialist developers: sections

This page's sections, in page order, after the hero. Each one is designed for this page
alone, apart from the FAQ and the close, which are the same on every AgentCraft page. Copy lives in `src/pages/index.astro`,
styles in the Page 8 block of `src/styles/globals.css`.

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

### RevealListSection

`src/components/RevealListSection.astro`. The specialties, as a list set large. Pointing at a row brings up a photo of that kind of specialist at work, floating with the pointer, and the row's detail slides in on the right. On touch screens and small screens each row simply shows its photo as a thumbnail. See docs/sections.md.

### RadarSection

`src/components/RadarSection.astro`. A specialist's profile, as a radar, on the dark tone. Choose a specialty and the shape morphs to its profile: where the depth is, what else they bring. Beside it, the role, what they typically do and their tools. The shapes describe a typical profile, not a person.

### FunnelSection

`src/components/FunnelSection.astro`. Vetting, as a funnel. The header splits around a photo of an interview; under it the stages stack as bars that narrow from the full width to a single specialist, each drawn out from the centre in turn as the section arrives, with what each stage checks beside it.

### FaqSection

`src/components/FaqSection.astro`. Frequently asked: the header holds its place on the left while the answers scroll past on the right. Native <details> sharing one name, so only one answer is open at a time and it all works without scripts. See docs/components/faq.md. Questions are the brief's. The answers are drafts written from what the page already says (the stats, the team models, X-Shore); have them checked before launch.

### CtaSection

`src/components/CtaSection.astro`. The closing call to action, on the accent. Behind it, a drafting mark: concentric circles on a crosshair with one dashed ring turning slowly, the compass the team plans with. Copy is the brief's. See docs/components/cta-footer.md.

## Copy to check before launch

The copy is written from the brief where there was one, cut to one short line per item. Drafts to check: everything: there was no brief. The radar shapes are illustrative; the specialties, vetting stages and FAQ answers are drafts.

## Photos

| File | Source |
|---|---|
| `src/assets/pages/p8-ai.jpg` | Unsplash, photo 1486312338219-ce68d2c6f44d (Unsplash License) |
| `src/assets/pages/p8-cloud.jpg` | Unsplash, photo 1590650153855-d9e808231d41 (Unsplash License) |
| `src/assets/pages/p8-data.jpg` | Unsplash, photo 1515378791036-0648a3ef77b2 (Unsplash License) |
| `src/assets/pages/p8-faq.jpg` | Unsplash, photo 1573497491208-6b1acb260507 (Unsplash License) |
| `src/assets/pages/p8-hero.jpg` | Unsplash, photo 1573496799652-408c2ac9fe98 (Unsplash License) |
| `src/assets/pages/p8-product.jpg` | Unsplash, photo 1581092160562-40aa08e78837 (Unsplash License) |
| `src/assets/pages/p8-vetting.jpg` | Unsplash, photo 1551836022-d5d88e9218df (Unsplash License) |
