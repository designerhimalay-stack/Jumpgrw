# Business analysts: sections

This page's sections, in page order, after the hero. Each one is designed for this page
alone, apart from the FAQ and the close, which are the same on every AgentCraft page. Copy lives in `src/pages/index.astro`,
styles in the Page 12 block of `src/styles/globals.css`.

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

### StorySection

`src/components/StorySection.astro`, `#story`, light. The header splits around a photo of an
analyst at a board. Under it, one frame: columns 1–2 hold a stakeholder's words from a
discovery call, columns 3–4 the user story they become. As the section arrives, a marker
picks out three numbered phrases in turn (who, what, why) and the matching line of the
story fills in. Then the Given / When / Then criteria arrive and the story is stamped
"Ready for sprint". It runs back when the section leaves. Each story line keeps its
placeholder and its text in one grid cell, so nothing moves. Without the script, or under
reduced motion, the finished story shows. Props: `quote` (`parts`: strings and `{ text,
mark }`), `story` (three `lines`), `criteria`. Tablets and phones stack the quote over the
story. Phones also tighten both and shorten the header photo.

### SwimlaneSection

`src/components/SwimlaneSection.astro`, `#process`, dark. A refund process in BPMN-style
lanes (customer, support, finance, system). The map is drawn twice from one model in the
component: lanes across for tablets and desktop, lanes down for phones, so the labels stay
readable. While the frame is on screen, a token walks the as-is route and waits at the
finance approval, which is flagged as the bottleneck. The map then switches to the to-be
design, where a "< $50?" gateway sends small refunds straight to the system, and the token
runs through. The note and the three read-outs (lead time, hand-offs, share needing
finance) change with the view; each keeps both states in one grid cell. The As-is / To-be
buttons (`aria-pressed`, arrow keys) pick a view and stop the loop. The loop pauses off
screen. Without the script the to-be map shows. Under reduced motion the token stays
hidden and the buttons still switch. Props: `lanes`, `nodes` (labels by id), `states`,
`flags`, `readouts`. The node positions and edges live in the component.

### StakeholderSection

`src/components/StakeholderSection.astro`, `#stakeholders`, light. Columns 1–2: a power /
interest grid, its quadrants named in their corners. The people start bunched in the
middle, unsorted, and settle into their quadrants as the section arrives (positions in
container units on a square plot, by transform); they bunch again when it leaves.
Columns 3–4: a photo of two analysts at a wall of notes, then the four engagement
approaches with their cadences. Picking one (click, hover, or up and down arrows; buttons
with `aria-pressed`) lights its quadrant and its people. Without the script, or under
reduced motion, the sorted map shows. Props: `people` (`power` and `interest`, 0–100;
labels flip to the left past interest 62), `quadrants`. Tablets keep the two columns with
a shorter photo. Below 768px the plot stacks over the photo and the list.

### ToolkitSection

`src/components/ToolkitSection.astro`, `#toolkit`, dark. The analyst's tools set as the
contents page of a specification: a paper sheet on the dark band, its margin column
carrying the document's details and revision history, its body four chapters (Elicit,
Model, Specify, Validate). Each entry has a logo tile, the tool's name, a dotted leader,
what the analyst uses it for and its clause number. As the section arrives the entries set
in order, the leaders draw, and an "Approved" stamp lands. It runs back when the section
leaves. Below 1280px the role drops under the name and the leaders go. Tablets put the
document details across the top. Phones set each chapter's entries two to a row, without
clauses or revisions.

### FaqSection

`src/components/FaqSection.astro`. The shared FAQ: four questions about working with an
analyst, and a photo of an analyst writing up sticky notes.

### CtaSection

`src/components/CtaSection.astro`. The shared close, on the accent.

## Photos

| File | Unsplash ID | What it shows |
|---|---|---|
| `src/assets/pages/p12-hero.jpg` | `rOvpex8XDeU` (photo 1758691736490-03d39c292d7a) | An analyst presents charts on a screen to colleagues |
| `src/assets/pages/p12-board.jpg` | `4wSnhAT8d9g` (photo 1677506048892-edde55cf3277) | An analyst maps work on a whiteboard of sticky notes |
| `src/assets/pages/p12-stakeholders.jpg` | `ynkz9cpyvzI` (photo 1758876203195-69a51e4145f0) | Two analysts discuss a wall of sticky notes |
| `src/assets/pages/p12-faq.jpg` | `PAYitTwkMwQ` (photo 1758876019380-0e5f636376b2) | An analyst writes up sticky notes on a dark wall |

All under the Unsplash License. Logos: Simple Icons (CC0), see `THIRD_PARTY_NOTICES.md`:
Miro, Zoom, Loom, Typeform, diagrams.net, Lucid, Camunda, Figma, Jira, Confluence, Notion,
Google Docs, PostgreSQL, Google Sheets, Looker, Metabase.

## Copy to check before launch

All figures are illustrative. Check before launch:

- The discovery-call quote, the story (REF-142, 3 points) and its criteria ($50 threshold,
  same-day email).
- The process figures: lead time 2.4 days → 4 hours, hand-offs 3 → 2, refunds needing
  finance 100% → 22%.
- The stakeholder map: the eight roles, where each sits, and the cadences.
- The toolkit: the document details (SPEC-012, owner, revisions) and each tool's role.
- The FAQ answers.
