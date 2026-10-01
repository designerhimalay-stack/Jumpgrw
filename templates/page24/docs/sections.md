# React Native developers: sections

This page's sections, in page order, after the hero. Each one is designed for this page
alone, apart from the FAQ and the close, which are the same on every AgentCraft page. Copy lives in `src/pages/index.astro`,
styles in the Page 24 block of `src/styles/globals.css`.

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

### TwoAppsSection (`#two-apps`)

`src/components/TwoAppsSection.astro`, light. One frame, three parts: an iPhone on the left and
an Android phone on the right, both turned in towards one React Native file (`App.tsx`) in the
middle. Two switches over the file, Theme (light, dark) and Language (English, Español), change
the one value each sets in the file, and both phones follow at once, each in its own platform's
chrome (large title, inset list and tab bar on iOS; app bar, FAB and navigation bar on Android).
The switches are native radio buttons and the state lives in CSS (`:has`), so they work by
keyboard and without the script; the script only steps through the four states while the frame
is in view, and stops for good once the reader uses a switch. Both languages are drawn in the
same cell, so nothing moves. Props: header copy, `file`, the switch and phone labels, and
`screens.en` / `screens.es` (the wallet screen's text). Tablets and phones: the file across the
top (the imports and closing lines hidden), the phones side by side under it, smaller.

### OtaSection (`#ota`)

`src/components/OtaSection.astro`, dark. The headline spans the top; a photo holds columns 1–2
and a release panel columns 3–4. The panel's version badge rolls from `from` to `to`, then a
fleet of `devices` phones takes the update in a fixed, early-weighted scatter while a clock
runs to 24 hours along a rail that ends on its last mark, and the share counts up;
`holdouts` phones stay on the old version. Under it, the store route and the over-the-air
route (`routes`). Reversible; without the script, or under reduced motion, the finished day
shows. Phones: a short photo band and a tighter panel.

### MetroSection (`#ecosystem`)

`src/components/MetroSection.astro`, light. The ecosystem as a transit map (React Native's
bundler is called Metro). Three lines: the app line runs TypeScript → React → Expo → Jest →
Testing Library → Fastlane and forks into two termini, the iOS and Android apps; the data line
(Redux, React Query, GraphQL, Firebase) crosses it at React; the ops line (GitHub Actions,
Sentry) at Fastlane. Each station is a logo tile on its line with its name and job. Lines draw
in as the section arrives, stations follow, and two trains run the app line while the map is in
view (paused off screen, hidden under reduced motion). `lines` holds every station's position
on a 1200 × 520 plan and where its label sits; `echo` stations appear only in the strip view.
Tablets and phones (≤991px): the strip diagram instead, each line a vertical strip of its stops,
two strips side by side; each strip's rail ends at its last stop.

### FaqSection and CtaSection

Shared on every page; this page passes its own questions, photo and close.

## Photos

| File | Unsplash ID | What it shows |
|---|---|---|
| `src/assets/pages/p24-hero.jpg` | WargGLQW_Yk (photo-1570101945621-945409a6370f) | A developer using a phone in both hands |
| `src/assets/pages/p24-ota.jpg` | kwzWjTnDPLk (photo-1528901166007-3784c7dd3653) | Two developers leaning in over a laptop |
| `src/assets/pages/p24-faq.jpg` | 5ZnS3wK6sUg (photo-1531493731235-b5c309dca387) | A developer coding at a desk with two screens |

All under the Unsplash License.

## Logos

Simple Icons (CC0), in `src/lib/tech-logos.ts`: react, typescript, expo, jest, testinglibrary,
fastlane, apple, android, redux, reactquery, graphql, firebase, githubactions, sentry.

## Copy to check before launch

- The wallet screens (names, amounts, Spanish strings) are illustrative.
- The over-the-air fleet: 120 phones, 94% on the new version within a day, 7 holdouts.
- "1–3 days" for a store release and "next launch" for an over-the-air update.
- The FAQ answers are drafts, including "Expo for most new apps".
