# React developers: sections

This page's sections, in page order, after the hero. Each one is designed for this page
alone, apart from the FAQ and the close, which are the same on every AgentCraft page. Copy lives in `src/pages/index.astro`,
styles in the Page 13 block of `src/styles/globals.css`.

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

### RenderTreeSection

`src/components/RenderTreeSection.astro`, `#render-path`, light. The render path on a component tree. A drafting frame holds a small shop's components, App at the top, wired with elbow connectors on a dotted ground. "Add to cart" changes one piece of state in App: the components that re-render flash in turn, level by level, and the connectors into them light, so the path reads top to bottom. The "Wrap in React.memo" switch (a `role="switch"` button) marks three components `memo`: the path shrinks to the four that need the new state and the rest show dashed, as skipped. Each node keeps its own render count (×n, mount included); the frame's foot counts re-rendered and skipped for the last update, and a polite live region reads the result. Plays once on each arrival. Phones: the same nodes as an indented outline, the way a component inspector lists them. Without the script, the memoised state shows. The tree is data in `index.astro` (`nodes`: name, parent, x, row, `path`, `memo`).

### EcosystemSection

`src/components/EcosystemSection.astro`, `#ecosystem`, dark. React's atom drawn large. The headline spans the top; under it, a photo in column 1, the atom in columns 2–3 and its key in column 4. The React logo is the nucleus; three elliptical orbits in fine line (0°, 60°, 120°) stand for build, code and quality, and each library sits on its orbit as a white 12px tile with a one-word role. The orbits draw in on arrival and the tiles pop on after them; then the tiles travel their orbits, one turn in 96 seconds, phased so that no two ever meet, and the nucleus turns slowly. Both stop off screen (IntersectionObserver, `animation-play-state`) and hold still under reduced motion. Pointing at or focusing an orbit in the key lights that orbit and its tiles. Tablets: the atom centred, photo and key side by side under it. Phones: smaller tiles without the roles, the key as three columns (logo and role), then a short photo.

### ScorecardSection

`src/components/ScorecardSection.astro`, `#scorecard`, light. A performance audit in one frame. Along the top, four circular gauges, one per column (performance, accessibility, best practices, SEO): each ring draws round to its score while the number counts up, with a tick at 90 where a score turns good. Under them, a photo of two developers pairing (columns 1–2) and the Core Web Vitals (columns 3–4): LCP, INP and CLS, each a bar on a scale split at its thresholds (good, needs work, poor, shaded), filling to its value, with the thresholds labelled under it. Replays on each arrival; reduced motion shows the finished report. Phones: the four gauges on one row, then the photo, then the vitals.

### FaqSection

`src/components/FaqSection.astro`, shared. Four React questions with draft answers, and a photo of a senior developer pointing out a change on a colleague's monitor.

### CtaSection

`src/components/CtaSection.astro`, shared. The close, with this page's text.

## Logos

Simple Icons (CC0), generated into `src/lib/tech-logos.ts` with the tools' `logos.mjs`: react, nextdotjs, typescript, redux, reactquery, vite, tailwindcss, jest, testinglibrary, storybook, lighthouse.

## Copy to check before launch

- The render counts follow from the tree as drawn; the tree itself is a teaching example, not a client app.
- The scores (96, 100, 100, 98) and the vitals (LCP 1.8 s, INP 120 ms, CLS 0.04) are plausible targets, not measurements. The thresholds (2.5 s / 4 s, 200 ms / 500 ms, 0.1 / 0.25) are the published Core Web Vitals ones; check them before launch in case they change.
- Hero specs: "Within two weeks" start time; "Jest and RTL" as the testing default.
- FAQ answers are drafts: Next.js coverage, the first-week read-through, budgets in CI, the state-library stance.
- The ecosystem's library choices and roles.

## Photos

| File | Unsplash ID | What it shows |
|---|---|---|
| `src/assets/pages/p13-hero.jpg` | 64YrPKiguAE (photo-1580894908361-967195033215) | A frontend developer coding across two large monitors (hero) |
| `src/assets/pages/p13-desk.jpg` | KAzgxInZXMo (photo-1613980790147-f4f449df0dd9) | A developer studying a component layout on his monitor (ecosystem) |
| `src/assets/pages/p13-pairing.jpg` | Hp4RPL_Z6wE (photo-1637073849667-91120a924221) | Two developers pairing on code across a laptop and monitors (scorecard) |
| `src/assets/pages/p13-faq.jpg` | slWBjTGhREQ (photo-1531496730074-83b638c0a7ac) | A senior developer pointing out a change on a colleague's monitor (FAQ) |

All under the Unsplash License.
