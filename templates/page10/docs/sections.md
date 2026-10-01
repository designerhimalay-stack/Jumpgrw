# Product managers: sections

This page's sections, in page order, after the hero. Each one is designed for this page
alone, apart from the FAQ and the close, which are the same on every AgentCraft page. Copy lives in `src/pages/index.astro`,
styles in the Page 10 block of `src/styles/globals.css`.

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

### RoadmapSection

`src/components/RoadmapSection.astro`, `#roadmap`, light. A Now / Next / Later board under
a milestone rail. The board's progress is tied to the scroll: as it travels up the screen
the rail fills from its first milestone to its last (it ends exactly on the last dot), and
at each milestone every card moves a column left, from Later to Next to Now, the card that
was in Now marking itself shipped. Scrolling back runs it in reverse. Cards are outcome
statements with a metric chip; the column counts change with the stage. Cards move by
transform inside a fixed field of nine ghost slots, so nothing on the page moves. Without
the script the board shows its last stage; under reduced motion the stages switch without
travel. Props: `columns`, `milestones` (three), `cards` (six, in priority order),
`shippedLabel`. Phones: the same board, smaller cards, chips that wrap.

### WeekSection

`src/components/WeekSection.astro`, `#week`, dark. Photo-led: the headline over a wide photo
of a PM leading the team, with a Monday-to-Friday strip of rituals laid over the photo's
foot. The highlight steps along the week every 2.8s while the section is on screen, a bar
filling across the chosen day; choosing a day (click, or arrow keys along the strip) holds
it. Days are buttons with `aria-pressed`. Tablets and phones put the strip under the photo
as five day tabs and one detail panel, every day's detail stacked in one grid cell. Under
reduced motion it doesn't step; Monday shows and the days still switch.

### ToolsSection

`src/components/ToolsSection.astro`, `#tools`, light. The PM's tools as a keyboard: three
staggered rows of logo keycaps with ink modifier keys carrying the row's category (Plan,
Shape, Measure) and trailing keys, then a foot row with a modifier, a key either side of an
accent space bar. Keys ripple down in turn as the section arrives and press into their
skirt on hover, focus and tap. Column 4 is a read-out that shows the last key's logo, name
and one-line note (each note is also in its key for screen readers). Widths are in
quarter-key units; every row adds up to 29. Tablets and phones put the read-out above the
keys; phones drop the modifier keys and the key legends.

### MetricTreeSection

`src/components/MetricTreeSection.astro`, `#metrics`, dark. The header splits: headline and
lede in columns 1–2, a photo of two colleagues reading a dashboard in columns 3–4. Under
it, across the page, a north-star metric branching into four input metrics, each with the
lever the team is pulling. On arrival the branches draw down (stem, bar, a drop to each
input) and every figure counts up from zero; it resets when the section leaves. Figures
are in the markup as written, so no script shows the final numbers. Phones hang the
inputs off a rail down the left that ends at the last input's joint, each input on two
lines with its lever beside its change.

### FaqSection

`src/components/FaqSection.astro`. The shared FAQ, with four questions about working with a
PM and a photo of two PMs planning the week on a whiteboard.

### CtaSection

`src/components/CtaSection.astro`. The shared close, on the accent.

## Photos

| File | Unsplash ID | What it shows |
|---|---|---|
| `src/assets/pages/p10-hero.jpg` | `-Lzdk59aldE` (photo 1758691736664-0b83e4f1215e) | A product manager presents charts on a screen to her team |
| `src/assets/pages/p10-week.jpg` | `K0aM-ztA76Q` (photo 1758873269035-aae0e1fd3422) | A PM leads a whiteboard session with the team |
| `src/assets/pages/p10-metrics.jpg` | `1FzEg5g7vt0` (photo 1758876202980-0a28b744fb24) | Two colleagues review a dashboard on a laptop |
| `src/assets/pages/p10-faq.jpg` | `wODKtuRipCA` (photo 1676276376052-dc9c9c0b6917) | Two PMs plan the week on a whiteboard of sticky notes |

All under the Unsplash License. Logos: Simple Icons (CC0), see `THIRD_PARTY_NOTICES.md`:
Jira, Linear, Asana, Trello, ClickUp, Confluence, Notion, Figma, Miro, Loom, Google
Analytics, Mixpanel, PostHog, Hotjar, Airtable.

## Copy to check before launch

All figures are illustrative. Check before launch:

- Roadmap cards and their metrics (Conversion +3 pts, Time to value −40%, Dead ends −25%,
  Seats +1.5, Revenue +8%, Churn −2 pts) and the milestones (Week 1, 6, 12).
- The week's rituals, days and times.
- The tools and their one-line notes.
- The metric tree: 18,400 weekly active teams, +12% this quarter; 42% activation (+6 pts),
  3.4 invites per team (+0.8), 9.2 sessions per week (+1.1), 74% week-8 retention
  (+4 pts), and the levers.
- The FAQ answers, including "usually within two sprints".
