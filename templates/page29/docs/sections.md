# Automation QA engineers: sections

This page's sections, in page order, after the hero. Each one is designed for this page
alone, apart from the FAQ and the close, which are the same on every AgentCraft page. Copy lives in `src/pages/index.astro`,
styles in the Page 29 block of `src/styles/globals.css`.

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

### SyncSection

`src/components/SyncSection.astro`, `#sync`, light. One frame: columns 1–2 an editor holding
an automated checkout test, columns 3–4 a browser running it. While the frame is on screen
the test plays step by step. Each step's line lights up with a spinner. A cursor glides to
its target in the browser and acts: it clicks, or a field types itself. The line then
ticks green. The last line's assertion lands on the confirmation screen, the run summary
shows ("1 passed"), it holds, and it starts again. Cursor positions are measured from the
targets (`data-ac-sync-target`), so they work at any size. The three browser screens share
one grid cell. The loop runs only while the frame is on screen. Without the script, or
under reduced motion, the finished run shows. Props: `lines` (code, and the browser `step`
each one drives), `browser` (the shop's copy), `summary`. Tablets and phones put the
browser above the editor. Phones also wrap the code under its indent.

### ShardSection

`src/components/ShardSection.astro`, `#shards`, dark. The header splits around a photo of
two engineers at their monitors. Under it, one frame on a minute scale: two clocks (one
runner, eight shards), then the suite as a single bar of eight chunks end to end. As the
section arrives a sweep runs along the bar and the first clock counts to the full time.
Then the chunks drop out of the bar into eight parallel lanes, all starting at zero; the
second clock stops at the longest lane, where an "All shards done" marker lands. The bar
keeps a dashed outline of the old run. It runs back when the section leaves. Chunks move by
transform in container units on a track of fixed height. The clocks show their final
times as written, so no script still reads right. Props: `chunks` (minutes each; their sum
is the single runner's time), `before`, `after`, `stats`. Phones shrink the clocks and
lanes and drop the chunk numbers.

### FlakySection

`src/components/FlakySection.astro`, `#flaky`, light. Columns 1–3: a run history, one row
per test and one dot per run (green passed, amber passed on retry, red failed). As the
section arrives the runs fill in column by column, as they used to go. Then the fix line
drops in at its run and every dot after it settles to green. Each row's flake rate reads
before (struck through) and after. Column 4: what fixed it, three items. It runs back when
the section leaves. Without the script, or under reduced motion, the settled history
shows. Props: `tests` (`runs`: one letter per run, p / r / f; the runs after `fixAt` are
drawn as they would have gone, then settle), `fixAt`, `fixes`. The fix line's position is
worked out in CSS from the row's columns, so it sits in the gap before its run at every
width. Tablets put the fixes under the board in three columns. Phones put each test's name
over its runs.

### RackSection

`src/components/RackSection.astro`, `#stack`, dark. The header splits around a photo of an
engineer weighing up a run. Under it, a rack of four 1U units, one per layer (UI, API and
unit, performance, CI). Each has rack ears with screws, a status lamp, its layer and what
it covers. The tools sit in it as modules: a white tile with the logo in its own colour,
the tool's name, and an activity light. As the section arrives the units slide in from
the top and their lamps come on. The activity lights flicker in turn, only while the
section is on screen. Props: `units` (`code`, `label`, `note`, `tools`; a tool's `name`
overrides the logo's title). Phones drop the ears, put each unit's label in one line over
its modules, and set the modules five to a row.

### FaqSection

`src/components/FaqSection.astro`. The shared FAQ: four questions about working with an
automation engineer, and a photo of two engineers reviewing a run on a laptop.

### CtaSection

`src/components/CtaSection.astro`. The shared close, on the accent.

## Photos

| File | Unsplash ID | What it shows |
|---|---|---|
| `src/assets/pages/p29-hero.jpg` | `ZTLUNxoRaPY` (photo 1681164315014-06bf36b2597a) | An engineer reads code across two monitors |
| `src/assets/pages/p29-shards.jpg` | `Im_cQ6hQo10` (photo 1629904853893-c2c8981a1dc5) | Two engineers work through code at their monitors |
| `src/assets/pages/p29-rack.jpg` | `wqtDizNUOrM` (photo 1690383682965-faf2cf669634) | An engineer weighs up a run at his desk |
| `src/assets/pages/p29-faq.jpg` | `cIocF-SSZiM` (photo 1695891689981-0be360e84d3f) | Two engineers review a run together on a laptop |

All under the Unsplash License. Logos: Simple Icons (CC0), see `THIRD_PARTY_NOTICES.md`:
Selenium, Cypress, WebdriverIO, Appium, Cucumber, Postman, Jest, Vitest, Testing Library, k6,
Apache JMeter, Gatling, GitHub Actions, Jenkins, GitLab, CircleCI, Docker.

## Copy to check before launch

All figures are illustrative. Check before launch:

- The test script and the shop in the browser (Trailhead, Trail runner, $89, the test
  card number, sam@mail.test); "1 passed, 4.2s".
- The shard times: 42:00 on one runner, 5:48 across eight shards (chunks 5.8, 5.2, 5.6,
  4.9, 5.4, 5.1, 5.3, 4.7 min), and the stats (1,240 tests, 7× faster, under 6 min).
- The run history: the six test names, their runs, the fix at run 11, and the rates.
- The hero specs, including "Suites under 10 min".
- The FAQ answers, including "usually the first sprint".
