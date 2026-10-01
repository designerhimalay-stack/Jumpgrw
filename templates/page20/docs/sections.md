# PHP developers: sections

This page's sections, in page order, after the hero. Each one is designed for this page
alone, apart from the FAQ and the close, which are the same on every AgentCraft page. Copy lives in `src/pages/index.astro`,
styles in the Page 20 block of `src/styles/globals.css`.

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

### ClimbSection

`src/components/ClimbSection.astro`. The version climb, on the light tone. The header spans the top. Under it, one frame: the key in column 1 (the PHP logo on a tile, what is measured, the 5.6 baseline, a legend for the two bar fills, and a note that the figures are illustrative), then a staircase across columns 2–4: PHP 5.6, 7.4 and 8.x as bars as tall as their relative throughput (1×, 2×, 2.3×), hatched while end of life and solid blue for the supported line, each figure on top and dashed guides at 1× and 2×. A stepped line runs along the tops. Under each bar: its version, support status and what it brings. On arrival the bars rise in turn (scaleY from the floor), the figures fade in and the line reveals left to right; only transforms, opacity and a clip-path change. Tablets: the key becomes a row over the chart. Phones: a lower plot and smaller step lists, the "Brings" label dropped.

### PlatformsSection

`src/components/PlatformsSection.astro`. Frameworks and platforms, on the dark tone. Under the header, a tall photo of a developer at his monitors holds column 1 and six flip cards fill columns 2–4, three by two: Laravel, Symfony, plain PHP, WordPress, Drupal and WooCommerce. A card's front is the logo on a white tile, its name and kind, and a "Flip" hint; its back, in the accent, is what the team builds on it. Each card is a native checkbox stretched over the whole card, so it flips by click, tap, or Tab then Space with no script, and shows a focus ring; both faces share one grid cell, so a card is the same size either way. Under reduced motion the faces swap without turning. The cards rise in on arrival. Tablets: the photo becomes a band over the cards. Phones: a short photo and the cards two by two.

### MaintainSection

`src/components/MaintainSection.astro`. Maintain and modernise, on the light tone, led by a photo. Columns 1–2: a framed photo of an engineer at her laptop, opening from its left edge. Columns 3–4: the header, then a "legacy health plan": six tasks (tests, deploys, the PHP 8 upgrade, slow queries, Composer dependencies, security patches) with when each happens, whose boxes tick on one after another as the section arrives, and a six-segment bar under them filling a segment per tick; under that, the toolbelt (Composer, MySQL, Redis, Docker, PhpStorm) as logo tiles with their roles. The script only arms the entrance (`data-armed`), so without it every box shows ticked and the photo shows; it clears when the section leaves. Tablets: the photo becomes a band over the copy. Phones: a short photo, a tighter list, the toolbelt as five small tiles with names only.

### FaqSection

`src/components/FaqSection.astro`. The shared FAQ with four PHP questions and a photo of a team in a meeting.

### CtaSection

`src/components/CtaSection.astro`. The shared close, with this page's text.

## Photos

| File | Unsplash ID | What it shows |
|---|---|---|
| `src/assets/pages/p20-hero.jpg` | `nz9omeuNkUo` (photo 1690384007667-094a1ddcf41f) | A developer at his laptop beside a colleague |
| `src/assets/pages/p20-platforms.jpg` | `9SoCnyQmkzI` (photo 1510915228340-29c85a43dcfe) | A developer in headphones coding across monitors in a dim room |
| `src/assets/pages/p20-maintain.jpg` | `1ZrHX1Kj594` (photo 1713947503588-8ff8196dc4a3) | An engineer working on her laptop at a bright desk |
| `src/assets/pages/p20-faq.jpg` | `gMsnXqILjp4` (photo 1542744173-8e7e53415bb0) | A team listening to a colleague present in a meeting room |

All under the Unsplash License.

## Logos

Simple Icons (CC0; see `THIRD_PARTY_NOTICES.md`), generated into `src/lib/tech-logos.ts`: php, laravel, symfony, wordpress, drupal, woocommerce, composer, mysql, redis, docker, phpstorm.

## Copy to check before launch

- The version figures (PHP 7.4 about 2× and 8.x about 2.3× the requests of 5.6) are relative and illustrative; real gains depend on the application. Check the wording and whether to show them.
- "Security fixes ended 2018" for PHP 5.6, and the features listed per version, should be checked against the current PHP release notes.
- The health-plan timings (Week 1, Weeks 3–6, Monthly) are an example plan, not a commitment.
- Hero spec "Within two weeks" and the FAQ answers are drafts.
