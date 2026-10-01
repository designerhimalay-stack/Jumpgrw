# Angular developers: sections

This page's sections, in page order, after the hero. Each one is designed for this page
alone, apart from the FAQ and the close, which are the same on every AgentCraft page. Copy lives in `src/pages/index.astro`,
styles in the Page 14 block of `src/styles/globals.css`.

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

### SignalsSection

`src/components/SignalsSection.astro`, `#signals`, light. A reactive graph, live. Along the top of the frame, the one source you can change, written as code: `seats.set(n)`, with a native range slider (arrow keys work) and − / + buttons (44px). Under it the graph on the page's four columns: two signals, three computed values, two more computed from those, and the template as an effect, wired with curves. Changing seats pulses every node that depends on it, layer by layer, the edges into them flowing, each with its new value (subtotal, discount from 20 seats, total, per seat); `currency` and its `label` don't depend on seats and stay still. It plays once on each arrival. The values for the starting count are worked out on the server, so without the script the graph is consistent. Phones: the graph turns to read top down (a second set of edges), formulas hidden. The graph is data in `index.astro` (`nodes`: key, kind, name, formula, layer, reads).

### StaircaseSection

`src/components/StaircaseSection.astro`, `#upgrades`, dark. The upgrade path as a staircase: AngularJS, 8, 14, 17 and latest rise left to right, each step taller than the last, the version on its tread and the migration note under it. On arrival the steps rise from the floor in turn and a marker climbs them, lighting each tread as it lands, until it stands on the latest (filled with the accent). The team photo fills the space the low steps leave above them. The stage has a fixed height and the marker moves by transform (container units), so nothing shifts. Phones: the stair climbs up the screen, oldest at the foot, each step set in a little further. Reduced motion shows the finished climb.

### MonorepoSection

`src/components/MonorepoSection.astro`, `#workspace`, light. An Nx-style workspace. The header splits around a photo of a review. In the frame, a command strip (`nx affected -t test --base=<lib>` with counts of projects affected and apps to retest) and the map: two product domains side by side (an app over its feature libraries over its data library) and the shared libraries along the foot, each domain a dashed boundary, with a drafting-style elbow line from each project to every library it imports. Library tiles are buttons: picking one lights its blast radius (every project that depends on it, directly or not) and the lines between them. The starting pick (`ui`) and its radius are rendered on the server; the lines are drawn from the tiles' positions and redrawn on resize. Phones: the two domains stay side by side as single columns.

### ToolchainSection

`src/components/ToolchainSection.astro`, `#toolchain`, dark. The toolchain as a periodic table: Angular as element 01, twice the size, then twelve more in a six-column table, each numbered, with its logo on a white 12px tile, a two-letter symbol, its name and its job, and a top edge tinted by family (core, reactive, UI, tooling, testing). The key sits in the gap at the top of the table; pointing at a family lights its elements, pressing it pins the highlight (`aria-pressed`). Elements settle in on arrival in number order. Tablets: four columns. Phones: three columns, Angular as a wide row, the key as chips.

### FaqSection

`src/components/FaqSection.astro`, shared. Four Angular questions with draft answers and a whiteboard photo.

### CtaSection

`src/components/CtaSection.astro`, shared. The close, with this page's text.

## Logos

Simple Icons (CC0), in `src/lib/tech-logos.ts`: angular, typescript, nx, reactivex (shown as RxJS), ngrx, materialdesign (shown as Material, for Angular Material), ionic, esbuild, eslint, jasmine, jest, cypress, storybook. Simple Icons has no AngularJS or Karma mark, so AngularJS appears in text only.

## Copy to check before launch

- The version notes summarise each release's headline changes (ngUpgrade hybrid apps; lazy routes via `import()` and the Ivy preview in 8; typed forms and standalone components in 14; control flow, deferrable views and the esbuild builder in 17; signals and zoneless change detection now). Check them against the release notes, and decide which version "Latest" names at launch.
- The signals example (49 per seat, 10% off from 20 seats) is illustrative.
- The workspace is illustrative; its counts follow from the map as drawn.
- Hero specs and FAQ answers are drafts.

## Photos

| File | Unsplash ID | What it shows |
|---|---|---|
| `src/assets/pages/p14-hero.jpg` | YqsTew_jSTA (photo-1637855193682-d5516a13ea7f) | An engineer with headphones at two monitors in an open-plan office (hero) |
| `src/assets/pages/p14-team.jpg` | Yeit9w-RWUA (photo-1622675103136-e4b90c9a33d6) | A team reviewing a plan around a meeting table (staircase) |
| `src/assets/pages/p14-review.jpg` | IPBGKYnuz8Y (photo-1531497258014-b5736f376b1b) | A developer talking a colleague through a design on her monitor (workspace) |
| `src/assets/pages/p14-faq.jpg` | h6gCRTCxM7o (photo-1580894732930-0babd100d356) | An engineer at a whiteboard with a colleague (FAQ) |

All under the Unsplash License.
