# .NET developers: sections

This page's sections, in page order, after the hero. Each one is designed for this page
alone, apart from the FAQ and the close, which are the same on every AgentCraft page. Copy lives in `src/pages/index.astro`,
styles in the Page 18 block of `src/styles/globals.css`.

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

### RingsSection

`src/components/RingsSection.astro`. Clean architecture as concentric rings, on the light tone. Columns 1–2: Domain as a disc at the centre, then Application, Infrastructure and UI / API as bands, each named along its top and labelled with what lives there along its foot; arrowheads on the boundaries point inward, the way dependencies run. The disc grows and each band draws round, from the centre outward, as the section arrives. Columns 3–4: the rings as a tab list (arrow keys, Home and End move between them), and under it the chosen ring's projects with their logos and its dependency rule. Picking a ring, in the tabs or by clicking the diagram, lights it; every panel shares one grid cell, so nothing moves. Domain is chosen in the markup. Phones: a 320px diagram with larger names and no foot labels (the tabs carry them), the tabs two by two at 44px.

### ModerniseSection

`src/components/ModerniseSection.astro`. .NET Framework 4.8 against modern .NET, on the dark tone. The header splits around a photo of an engineer at her code. Under it, one frame: a two-way switch (a radio group) between the runtimes and a note that 4.8 = 100, then four metrics (throughput, memory, cold start, hosting cost), each a bar in a fixed track on a shared 0–240 scale with the old runtime's mark always drawn at 100. On arrival the bars stand at "before", then move to "after" and rest there, the change written at the end of each row; the switch flips them by hand, and once touched the section stops switching itself. Both readouts share one grid cell. Without the script, or under reduced motion, "after" shows. Phones: the switch spans the width; each metric's name and change share a line with its bar under them.

### SolutionSection

`src/components/SolutionSection.astro`. The solution, opened in an IDE's solution explorer, on the light tone. The header splits around a photo of two engineers at a whiteboard. Under it, the explorer across the full width: the solution, its folders and five projects as a tree with indent guides, what each node holds in the middle, and the tools it carries as logo chips on the right. On arrival the tree expands from the top, each row writing in and each chevron turning open just after it; leaving folds it again. Every row is laid out from the start, so nothing moves. Tablets drop the middle column; phones show the logos as marks alone.

### FaqSection

`src/components/FaqSection.astro`. The shared FAQ with four .NET questions and a photo of a team planning at a whiteboard.

### CtaSection

`src/components/CtaSection.astro`. The shared close, with this page's text.

## Photos

| File | Unsplash ID | What it shows |
|---|---|---|
| `src/assets/pages/p18-hero.jpg` | `Xn3D8DIzH7Q` (photo 1674483699209-25fb6d962119) | A developer working through code across two monitors |
| `src/assets/pages/p18-modernise.jpg` | `iQqRM0XJvn8` (photo 1580894912989-0bc892f4efd0) | An engineer reading code on a large monitor |
| `src/assets/pages/p18-whiteboard.jpg` | `PviMD8jDeYE` (photo 1573166826272-5acd0ef8f650) | Two engineers discussing a diagram on a whiteboard |
| `src/assets/pages/p18-faq.jpg` | `CdTQI-Nh7J4` (photo 1758873269117-d5845126928a) | A team planning at a whiteboard around a table |

All under the Unsplash License.

## Logos

Simple Icons (CC0; see `THIRD_PARTY_NOTICES.md`), generated into `src/lib/tech-logos.ts`: dotnet, blazor, nuget, rider, docker, kubernetes, postgresql, redis, rabbitmq, githubactions, swagger, grafana. C#, Visual Studio and Azure are not in Simple Icons, so they appear in text only (the FAQ names Visual Studio).

## Copy to check before launch

- The modernisation figures (2.1× throughput, 35% less memory, 55% faster cold start, 30% lower hosting cost) are relative and illustrative; real gains depend on the application. Check the wording and whether to show them at all.
- The target runtime is shown as ".NET 8"; update it if the team standardises on a later release.
- The solution ("Shop") and its project names are an example layout, not a client's.
- Hero spec "Within two weeks" and the FAQ answers are drafts.
