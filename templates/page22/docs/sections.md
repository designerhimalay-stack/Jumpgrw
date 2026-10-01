# Android developers: sections

This page's sections, in page order, after the hero. Each one is designed for this page
alone, apart from the FAQ and the close, which are the same on every AgentCraft page. Copy lives in `src/pages/index.astro`,
styles in the Page 22 block of `src/styles/globals.css`.

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

### ScreensSection

`src/components/ScreensSection.astro`. Every screen, on the light tone. The header splits around a photo of a developer testing on a phone. Under it, five devices drawn as ink outlines stand on one baseline, each under a dimension line with its size: a 6.1″ and a 6.7″ phone, a foldable opened flat (dashed hinge), an 11″ tablet and a watch on its strap. Inside each, the same app in wireframe: list and bottom bar on the phones (compact), rail, list and detail on the foldable (medium) and the tablet (expanded), one card on the watch. The outlines draw up from the baseline as the section arrives; then a selection steps down the list on every device at once, the detail panes and the watch card following (loops only while in view). All sizes are in one unit (`--k`, a share of the row's width), so the devices and their contents scale together. Phones: the two phones and the watch on one row, the foldable and tablet on the next at a smaller scale.

### RolloutSection

`src/components/RolloutSection.astro`. A staged rollout, on the dark tone. A framed photo holds columns 1–2; a rollout control fills columns 3–4: the share of users and devices on the new version, a five-stop track (1%, 5%, 20%, 50%, 100%) whose stops are buttons, and two half-circle gauges (crash-free users, ANR rate), each with a dashed halt line and its safe zone. As the section arrives the release walks the track one stage at a time and the needles settle inside the safe zone at every stop; pressing a stop takes over from the autoplay. The track's fill runs from the first stop to the current one and ends on it. Every figure sits in a fixed-width box, so nothing moves; without the script the final stage shows. Tablets and phones: the photo becomes a band over the panel.

### DependencySection

`src/components/DependencySection.astro`. The Android stack as a dependency tree, on the light tone. The `:app` module sits at the root in the accent; a trunk drops to a bus that feeds four branches (ui, build, data, ship), each listing three tools as logo tiles off a vertical line, the last line stopping at its tick. The lines draw from the root outward as the section arrives and the tiles follow; pointing at a branch lights its path back to the root. Tablets and phones: the tree turns on its side, one trunk down the left, each branch's tools in a row of three under its name.

### FaqSection

`src/components/FaqSection.astro`. The shared FAQ, with four Android questions and a photo of a developer holding an Android phone.

### CtaSection

`src/components/CtaSection.astro`. The shared close on the accent: "Start at 1%. End with everyone."

## Photos

| File | Unsplash ID | Shows |
|---|---|---|
| `src/assets/pages/p22-hero.jpg` | d7ljes6v67s (photo 1705579607101-b0090e3e7824) | An engineer checks her phone at a desk with two laptops |
| `src/assets/pages/p22-screens.jpg` | vHvPXbK0F84 (photo 1758598304704-8dc72fe16003) | A developer in glasses tests an app on his phone at a desk |
| `src/assets/pages/p22-rollout.jpg` | tCKxV9J4Sjg (photo 1590924268411-1456c38288dd) | An engineer tests an app on a phone in front of his monitors |
| `src/assets/pages/p22-faq.jpg` | RjXOvhpmb20 (photo 1585180753283-c3ecb2d15106) | A developer holds an Android phone in front of monitors |

All under the Unsplash License.

## Copy to check before launch

- Hero spec "Joins your sprint, week one".
- Device sizes (6.1″, 6.7″, 7.6″ open, 11″, 1.4″) are typical, not specific models.
- The rollout's figures are illustrative: 2.4M installs, crash-free rates 99.80–99.84%, ANR rates 0.16–0.21%. The halt lines (crash-free below 99.5%, ANR above 0.47%) are an example policy; check them against the client's own thresholds.
- The FAQ answers are drafts.

## Logos

Simple Icons (CC0): Android, Kotlin, Jetpack Compose, Material Design, Android Studio, Gradle, GitHub Actions, Firebase, SQLite, Google Cloud, JUnit 5, Sentry, Google Play.
