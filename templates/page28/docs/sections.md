# Data engineers: sections

This page's sections, in page order, after the hero. Each one is designed for this page
alone, apart from the FAQ and the close, which are the same on every AgentCraft page. Copy lives in `src/pages/index.astro`,
styles in the Page 28 block of `src/styles/globals.css`.

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

### DagSection

`src/components/DagSection.astro`, `#dag`, dark. One night's pipeline as a graph, in five stages (extract, validate, transform, load, publish), its edges drawn behind the task boxes. Columns 1–3: each task waits on everything upstream, then goes queued, running, success; `events` fails on its first try, sits up for retry (amber) and passes on the second. Edges light as their task finishes and flow while the next one runs. Column 4: the run: the Airflow logo, the DAG's name and schedule, a run clock, the count of tasks in each state, the retry note, and a "Run again" button. The schedule is worked out from each task's `after` list and `dur`, so tasks can be added in `index.astro`. The run plays when the section arrives and resets when it leaves. States share one grid cell and figures are tabular, so nothing moves. Without the script, or under reduced motion, the finished run shows. Tablet: the run panel under the graph, in two columns. Phone: the graph turns to run top to bottom, and the run is a compact panel.

### LayersSection

`src/components/LayersSection.astro`, `#layers`, light. Bronze, silver and gold. The header splits around a photo of the team. Under it, one frame in three layers, each with its colour on its top edge: bronze (column 1) holds six raw lines as they landed, problem cells marked in amber and the duplicate struck through; silver (columns 2–3) the same orders trimmed, typed, deduplicated and joined to a region, with the row that could not be fixed held back; gold (column 4) March revenue, summed by region, its bars growing. What each step did is set as a chip on the layer's edge. Marks, rows and bars arrive in turn and reverse when the section leaves. Tablet: bronze and gold side by side, silver under them. Phone: the layers become three tabs (native radio buttons, so they work by keyboard and without a script) over one shared grid cell; silver drops its date column.

### FreshnessSection

`src/components/FreshnessSection.astro`, `#freshness`, dark. Column 1: how many tables are inside their SLA, the 30-day record, and a note on what just happened (three notes in one cell). Columns 2–4: six table cards, each a freshness tank that drains as the data ages toward its SLA and refills when a load lands, with the table's layer, age, status and a sparkline of rows per load. While the section is on screen a simulated clock runs (1 s = 6 min): tables reload on their schedules, and `inventory_snap`'s load runs late once, so its tank empties, it turns amber, the count drops to 5, and the late load then lands and it shows "Back on SLA". The clock stops off screen and resets on the way back. Without the script, or under reduced motion, every table shows inside its SLA. Tablet: the summary as a strip over the cards. Phone: the cards two across, without their layer tags.

### PlatformSection

`src/components/PlatformSection.astro`, `#platform`, light. The platform as a flow diagram. Columns 2–4: four stages left to right, ingest (Kafka, Airbyte, Flink), store (Snowflake, BigQuery, Databricks, PostgreSQL, ClickHouse, Parquet), process (Spark, Trino, DuckDB, Python, Polars) and serve (Looker, Metabase, Superset). Each tool is a node as tall as its share of the volume, and soft bands join neighbouring stages, each as wide as the flow it carries (`links` in `index.astro`: `[from, to, volume]`, between neighbouring stages only). Under the flow, a dashed rail of what schedules and runs it: orchestrate (Airflow, Prefect) and run (Docker, Kubernetes, Terraform, GCP), each with the stages it `touches`. Column 1: the photo, and a readout whose notes (a key with the count and the tools named in text only, dbt, Fivetran and Apache Iceberg, then one note per tool) share one grid cell. Hover, focus or tap a tool and its bands and the tools at their far ends light while the rest fade, and the readout says what it does and where its data comes from and goes; a rail tool lights the stages it touches. Escape or moving focus away clears it. Node and band geometry is worked out in the component from `stages` and `links`, so tools and volumes can be changed in `index.astro`. Stage labels and nodes arrive stage by stage, the bands draw in left to right after them, and all of it reverses when the section leaves. Without the script, or under reduced motion, the whole diagram shows, still. Tablet: the diagram full width, photo and readout side by side under it. Phone: the stages stack and the flow runs top to bottom; each tool is a logo cell (the readout names it), each stage's name sits over the bands that run into it, and photo and readout sit side by side.

### FaqSection

`src/components/FaqSection.astro`. The shared FAQ, with this page's four questions and a photo of colleagues going through charts. The answers are drafts.

### CtaSection

`src/components/CtaSection.astro`. The shared close, with this page's text.

## Photos

| File | Unsplash ID | Shows |
|---|---|---|
| `src/assets/pages/p28-hero.jpg` | SSEuzLIIYAc (photo 1758691736542-c437fea2c673) | A data engineer walks colleagues through a chart on a wall screen |
| `src/assets/pages/p28-team.jpg` | 0iTp1WNlMGc (photo 1758873268705-bb756c95f26a) | Four colleagues working through data at a long desk |
| `src/assets/pages/p28-platform.jpg` | jEr29j1pmms (photo 1764001276717-06fb8d0783db) | An engineer concentrates at his screen in a busy, blue-lit office |
| `src/assets/pages/p28-faq.jpg` | 3B5Hf9_PLpU (photo 1758518729829-162d6bf27b5e) | Colleagues going through charts around a meeting table |

All Unsplash License.

## Copy to check before launch

- The DAG (`orders_daily`, its tasks, the 02:00 UTC schedule, the run time and the retry reason) is illustrative.
- The raw, cleaned and summed rows, the euro conversion (€640 to $696) and the March revenue figures are illustrative.
- The six tables, their SLAs, load intervals, ages, row counts, the 99.4% 30-day record and the paging note are illustrative.
- The platform's band widths (each tool's share of the volume) and which stages each rail tool touches are illustrative.
- Hero specs ("1 to 5 engineers"; "Spark, Airflow, dbt") and the FAQ answers are drafts.
