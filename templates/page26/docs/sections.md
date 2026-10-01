# Generative AI engineers: sections

This page's sections, in page order, after the hero. Each one is designed for this page
alone, apart from the FAQ and the close, which are the same on every AgentCraft page. Copy lives in `src/pages/index.astro`,
styles in the Page 26 block of `src/styles/globals.css`.

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

### RagSection

`src/components/RagSection.astro`, `#rag`, dark. Retrieval-augmented generation, played out. The header splits around a photo of an engineer at work. Under it, one frame on the page's columns: the question and its query vector with a few facts about the index (column 1), the knowledge base as eight chunks, each with its source and similarity score (columns 2–3), and the answer (column 4). The three steps run in turn, marked in the frame's top bar: the vector lights, the top three chunks light and take their rank, then the answer streams in word by word with citation chips that name those ranks, and its sources list under it. Two questions to try, as toggle buttons (`aria-pressed`); each replays the run. Pointing at a chip outlines its chunk. Every word is in the markup from the start and both answers share one grid cell, so nothing moves. Without the script, or under reduced motion, the finished first answer shows. Tablet: question over its vector, the chunks four across, the answer under them. Phone: the steps as numbers beside the questions, six chunks as source and score only, the index facts and source list dropped.

### RouterSection

`src/components/RouterSection.astro`, `#router`, light. A model router. Column 1: the incoming request, a three-way switch for what to optimise (Quality, Speed, Cost: native radio buttons in a fieldset, so it works by keyboard and without a script) and a readout of the provider chosen. Column 2: the router, its routes fanning out to every provider (the script redraws the curves at the column's real size). Columns 3–4: the providers by logo (Anthropic, Google Gemini, Mistral AI, Meta Llama, Hugging Face) with price per million tokens, latency and eval score. The best provider for the chosen priority takes the route: its line draws itself again, its row lights and the winning figure turns blue. All of it is CSS (`:has()`). Along the foot, on the page's columns: orchestration (LangChain, LangGraph), retrieval (Qdrant, PostgreSQL with pgvector, Redis as a semantic cache) and self-hosting (Ollama, Hugging Face), plus a note that OpenAI and Azure-hosted models are routed too (OpenAI has no logo in Simple Icons, so it is named in text only). Tablet and phone: the fan drops out; the request, switch and readout sit over the provider rows; on phones the provider notes drop and the tool groups stack as rows.

### EvalsSection

`src/components/EvalsSection.astro`, `#evals`, dark. The eval board and its release gate. The header splits around a photo of the team reviewing results. Under it, columns 1–3: a table, one row per prompt suite, one bar per metric (pass rate, groundedness, p95 latency, cost per 1k requests), each bar with its threshold marked as a white tick; the bars fill metric by metric as the section arrives and each ticks as it clears its bar. Column 4: the release gate, a count of thresholds met and a barrier arm on a post with a signal lamp; once every threshold is met the arm lifts, the lamp and the status turn green. Reversible; without the script, or under reduced motion, the finished run shows with the gate open. Tablet: the gate runs under the table, its barrier beside the count. Phone: each suite is a row of four small bars, each naming its metric.

### FaqSection

`src/components/FaqSection.astro`. The shared FAQ, with this page's four questions and a photo of two engineers at a laptop. The answers are drafts.

### CtaSection

`src/components/CtaSection.astro`. The shared close, with this page's text.

## Photos

| File | Unsplash ID | Shows |
|---|---|---|
| `src/assets/pages/p26-hero.jpg` | M1yPeeHZ08w (photo 1753545975907-dcb51efdd0d5) | An engineer in headphones coding on a laptop at night |
| `src/assets/pages/p26-rag.jpg` | 502MC5en1-8 (photo 1573495803564-3e64400e9a20) | An engineer on a laptop on a window ledge above a city (black and white) |
| `src/assets/pages/p26-evals.jpg` | RdEFWm0N84o (photo 1781246212288-7fa538344718) | A team reviewing results on laptops around a meeting table |
| `src/assets/pages/p26-faq.jpg` | YDWdxElP3XI (photo 1758691737083-0e7fdbde0f05) | Two colleagues talking through a result on a laptop |

All Unsplash License.

## Copy to check before launch

- The knowledge base, the two questions, their similarity scores and the answers are illustrative, as are the index facts (12,480 chunks, 38 ms search).
- The router's prices, latencies and eval scores per provider are illustrative and will date quickly; they are chosen only so each priority picks a different provider.
- The eval suites, case counts, thresholds and results, and the build label, are illustrative.
- Hero specs ("1 to 4 engineers") and the FAQ answers are drafts.
