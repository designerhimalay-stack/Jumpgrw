# Python developers: sections

This page's sections, in page order, after the hero. Each one is designed for this page
alone, apart from the FAQ and the close, which are the same on every AgentCraft page. Copy lives in `src/pages/index.astro`,
styles in the Page 17 block of `src/styles/globals.css`.

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

### NotebookSection

`src/components/NotebookSection.astro`. A notebook, run, on the light tone. The header spans the top. Under it, a portrait photo of an engineer holds column 1 and a notebook fills columns 2–4: file name, kernel and a "Run all" button along its top, then four cells that execute in turn as the section arrives (`In [ ]` → `In [*]` → `In [1]`), the kernel dot going busy and idle. Each output appears in space kept for it: a line of text, a small table, then a tiny bar chart whose bars rise. "Run all" replays it; it resets when the section leaves. Without the script, or under reduced motion, the finished run shows. The code is highlighted at build time by a small tokenizer in the component. Phones: a short landscape photo over the notebook, a narrow prompt column, the kernel's name dropped (its dot and state stay).

### FrameworkSection

`src/components/FrameworkSection.astro`. Pick the framework, on the light tone. Under the header, use-case pills (a native radio group: arrow keys move between them). Under them, Django, FastAPI and Flask as three columns in one frame, each with its logo on a tile, a tagline, three traits and the use cases it fits best. Choosing a use case lights its best-fit column (a blue cap, the "Best fit" tag, the matching pill) and dims the other two; a verdict line under the frame says why. The verdicts share one grid cell and the tag's space is always kept, so nothing moves. The first use case is chosen in the markup. Phones: 44px pills; each framework becomes one row (logo, name, tagline, tag) and the cap runs down its left edge; traits and per-column pills give way to the verdict.

### ToolkitSection

`src/components/ToolkitSection.astro`. The wider toolkit, on the dark tone, led by a photo. Columns 1–2: a tall photo of an engineer at three monitors, opening downward as the section arrives. Columns 3–4: the header, then the toolkit set as a Python dict: each key a group ("data", "ml", "models", "tasks", "quality", "ship"), each value a list of logos on white tiles with their names, an indent guide down the body. The lines write themselves in, left to right, one after another, and clear when the section leaves. A logo whose brand colour is too pale for the white tile (Ruff) draws in ink. Phones: a short photo; each key sits over its logos, and the brackets and commas give way.

### FaqSection

`src/components/FaqSection.astro`. The shared FAQ with four Python questions and a photo of a team at a monitor.

### CtaSection

`src/components/CtaSection.astro`. The shared close, with this page's text.

## Photos

| File | Unsplash ID | What it shows |
|---|---|---|
| `src/assets/pages/p17-hero.jpg` | `FCHlYvR5gJI` (photo 1534665482403-a909d0d97c67) | A developer writing code on a laptop |
| `src/assets/pages/p17-notebook.jpg` | `VDReJqqfou8` (photo 1573496005746-6dff81c990a0) | An engineer at a desktop computer in a bright office |
| `src/assets/pages/p17-toolkit.jpg` | `fdGTi4IcaJc` (photo 1719400471588-575b23e27bd7) | A developer at three monitors of code in a dark room |
| `src/assets/pages/p17-faq.jpg` | `UikYLDQj9_I` (photo 1758873268745-dd2cf0d677b5) | Four colleagues discussing work at a monitor |

All under the Unsplash License.

## Logos

Simple Icons (CC0; see `THIRD_PARTY_NOTICES.md`), generated into `src/lib/tech-logos.ts`: python, django, fastapi, flask, pandas, numpy, jupyter, scikitlearn, polars, pytorch, apacheairflow, celery, redis, sqlalchemy, pydantic, postgresql, pytest, ruff, poetry, uv, docker.

## Copy to check before launch

- The notebook's data (1,204,311 rows, revenue by region) is invented for illustration.
- The framework verdicts and traits ("back-office screens take days", "docs generated for free") are generalisations; check they match how the team wants to position each framework.
- Hero spec "Within two weeks" and the FAQ answers (Python versions, tooling) are drafts.
