# Offshore engineers, India: sections

This page's sections, in page order, after the hero. Each one is designed for this page
alone, apart from the FAQ and the close, which are the same on every AgentCraft page. Copy lives in `src/pages/index.astro`,
styles in the Page 33 block of `src/styles/globals.css`.

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

### OvernightSection

`src/components/OvernightSection.astro`, `id="overnight"`, light. The night shift as a board time-lapse. Under the header, one frame: a strip with two clocks, Dallas on the left and Bengaluru on the right (in the accent), and between them a rail of four moments (hand-off 18:00, pick-up 22:30, review 03:00, morning 08:00, Dallas time). Under it a three-column board (handed off, in progress in India, ready for you) with five task cards. When the frame comes into view the clocks run through the night from moment to moment and the cards cross the board; the strip goes navy while Dallas sleeps and light again at the morning, and the rail fills from the first dot to the current one, ending exactly on the last. Each moment is a button (`aria-pressed`), so the night can be stepped through by keyboard; clicking one stops the run. Every card is one size and moves by transform; each card's column and row per moment are inline custom properties (`--c0`…`--r3`), and the board's height is reserved for the most rows any column holds. Statuses and the summary line share one grid cell each. Without the script, or under reduced motion, the morning shows. The India offset (`offset`, minutes) is 630 (IST against CDT); the times and tasks are illustrative and the note says so. Phone: clocks side by side over the rail, smaller cards (12px titles, no initials), the note under the summary.

### RolesSection

`src/components/RolesSection.astro`, `id="roles"`, dark. The roles as a row of photo panels, one open at a time: the open panel is wide and in full colour with the years, the role, a line and its tools; the others stand as tall grey slivers with the role's name turned up the side. Pointing (mouse), tapping or tabbing to a panel opens it; the row keeps one height and the panels share its width, so nothing else moves. Without the script the first panel is open. Tablets and phones: a two-by-two deck, every card open (photo, years, role, tools); phones drop the one-line description to save height.

### HubsSection

`src/components/HubsSection.astro`, `id="hubs"`, light. Talent hubs on a dotted map of India. Columns 1–2: the country drawn in dots (a coarse outline written in the component and filled on a flat grid at build time, no map data), with a pin on each hub; the chosen hub's pin rings (a slow pulse, paused off screen) and the dots within reach of it light in the accent, brightest at the city. Columns 3–4: the five hubs as ARIA tabs (arrow keys, Home, End), and under them the chosen hub's pool, a line and its strengths. Panels share one grid cell (hidden ones keep their space), so switching moves nothing; the pins select too. Without the script Bengaluru shows. Phone: the map at up to 310px tall, the tabs wrapped in two rows, a smaller figure.

### BlendSection

`src/components/BlendSection.astro`, `id="blend"`, dark. A blended team, costed. Columns 1–2: the claim, two controls (a stepper for engineers in India, 2–12; a switch for an optional lead in Dallas) and a photo of an India lead. Columns 3–4: the team as fourteen seats in a fixed grid (Dallas lead outlined, India lead in white, engineers in the accent, empty seats dashed), the monthly figure and the saving against the same team all onshore, and two bars (all onshore, blended) that scale by transform. Rates and hours are props and are illustrative; the note under the bars says so. Without the script the default team (six engineers, lead in Dallas) shows, worked out at build time. Tablet: seats in one row of fourteen. Phone: controls side by side, a 140px photo, seats seven a row, no key.

### StackSection

`src/components/StackSection.astro`, `id="stack"`, light. Bench depth: how many engineers in India ship in each technology, as a pictogram. The header splits around a photo of two engineers at a laptop in Dharamshala; under it one frame. Its bar holds the layer filter on the left (All layers, Front end, Back end, Data & AI, Cloud & QA) and a readout on the right: the headcount of the chosen layer (or of the whole bench), its line, and the layer's deepest technology, worked out from the props. The filter is a radio group in a `<fieldset>` (each chip a label round its radio), so it works by keyboard (Tab in, arrow keys) and without the script; CSS `:has()` shows the chosen readout (all readouts share one grid cell) and greys the other groups' squares, logos and names, so nothing moves. Under the bar, four groups of six columns, one per technology: a stack of squares (one per engineer, two wide) rising off an ink baseline with its count on top, then its logo in brand colour and its name running down from it; the group's name sits under an accent rule. Each group reserves the rows its deepest column needs (`--ac-rows`) and the groups share one baseline. As the section arrives the squares fill bottom up, column by column; leaving empties them. Without the script, or under reduced motion, the full bench shows (the hidden start state is under `@media (scripting: enabled)`). A key and a note close the frame. Logos: React, Next.js, TypeScript, Angular, Vue.js, Flutter, Node.js, Spring Boot, .NET, Go, Python, GraphQL, PostgreSQL, Apache Spark, Databricks, Snowflake, PyTorch, Hugging Face, Docker, Kubernetes, Terraform, Google Cloud, Selenium, Cypress (`src/lib/tech-logos.ts`, Simple Icons). Tablet: smaller squares and logos, still one row of groups. Phone: the groups two by two at one square per two engineers (every other square drops out, `--ac-rows-sm` reserves the height, and the key switches to say so), names kept for screen readers only, the readout's figure beside its line, chips wrapped in two rows of 44px, a 120px photo.

### FaqSection

`src/components/FaqSection.astro`, the shared FAQ, with four questions on hand-offs, overlap, who leads in India, and security.

### CtaSection

`src/components/CtaSection.astro`, the shared close: "Scale in India. Lead from Dallas."

## Photos

Every person shown is in India: each photo's own Unsplash title, description or location names India or an Indian city.

| File | Unsplash ID | What it shows | Tie to India (from the photo's Unsplash page) |
|---|---|---|---|
| `src/assets/pages/p33-hero.jpg` | `ee4g8naRkPk` (photo 1696834137451-f52f471a58bc) | A developer in headphones coding on a laptop | Description: "captured in Jaipur, India"; location Jaipur, Rajasthan, India; tags india, jaipur |
| `src/assets/pages/p33-backend.jpg` | `01_cE4yUgOA` (photo 1696834137457-8872b6c525f4) | A developer in a headset, smiling at his desk (roles: backend) | Description: "located in Jaipur, India"; location Jaipur, Rajasthan, India |
| `src/assets/pages/p33-fullstack.jpg` | `n9-cNWJxYQA` (photo 1548057407-b022b3f5b6ab) | An engineer at a MacBook in a coworking space (roles: full stack) | Location: Viman Nagar, Pune, Maharashtra, India; tags india, pune |
| `src/assets/pages/p33-data.jpg` | `9i2t23J7HnE` (photo 1675664534136-51375fb40129) | A young woman working on a laptop on a campus bench (roles: data & AI) | Description: "Young Indian Girl Is Using Laptop" |
| `src/assets/pages/p33-qa.jpg` | `jctvi30MWRM` (photo 1627401632925-a4c565d08a80) | A young professional in a blue shirt in an office (roles: QA) | Description: "portrait man in Jalandhar, India"; location Jalandhar, Punjab, India |
| `src/assets/pages/p33-lead.jpg` | `zXR0fNWHDDQ` (photo 1778692258270-bc0e80e975c0) | A lead in glasses and a blazer, smiling (blend) | Description: "confident indian business man … in formal wear and glasses" |
| `src/assets/pages/p33-stack.jpg` | `qMnPOToyQ4c` (photo 1653503425441-9d975e51ce91) | Two people going over work on a laptop at a café table (stack) | Location: Dharamkot, Dharamshala, Himachal Pradesh, India; tags india |
| `src/assets/pages/p33-faq.jpg` | `77XNEjHDmjk` (photo 1578992176613-3768c7f5163b) | A team at laptops round a table in a coworking space (FAQ) | Description: a coworking space "located in Hyderabad"; location Hyderabad, Telangana, India |

All under the Unsplash License.

## Copy to check before launch

- The night on the board: times, tasks, initials and the summary lines are illustrative (the note says so). The offset assumes CDT; in winter (CST) India is 11½ hours ahead, not 10½.
- Hero spec "10½ hours ahead" (CDT) and "2 to 50+ engineers".
- Role years (6–10, 8–12, 5–9, 5–8) and tools.
- Hub pool sizes (~2M, ~1M, ~0.7M, ~0.8M, ~1M "tech workers, approx.") and each hub's strengths: rounded planning estimates, to confirm.
- Blend rates: $150/hr onshore, $60/hr India lead, $45/hr engineer, 160 hours a month; the "less than the same team onshore" saving follows from them.
- Bench depth: engineers per technology (React 28, Next.js 16, TypeScript 26, Angular 14, Vue.js 8, Flutter 10; Node.js 22, Spring Boot 18, .NET 12, Go 6, Python 24, GraphQL 10; PostgreSQL 20, Spark 8, Databricks 6, Snowflake 6, PyTorch 10, Hugging Face 6; Docker 22, Kubernetes 14, Terraform 10, Google Cloud 8, Selenium 12, Cypress 10), layer headcounts (64 front end, 58 back end, 32 data and AI, 46 cloud and QA) and the total, 200 engineers in India across five hubs. All illustrative (the note says so); an engineer counts under every tool they use, so the squares outnumber the headcount.
- FAQ answers are drafts.
