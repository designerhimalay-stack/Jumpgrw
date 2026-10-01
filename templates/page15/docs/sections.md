# Full stack developers: sections

This page's sections, in page order, after the hero. Each one is designed for this page
alone, apart from the FAQ and the close, which are the same on every AgentCraft page. Copy lives in `src/pages/index.astro`,
styles in the Page 15 block of `src/styles/globals.css`.

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

### WaterfallSection

`src/components/WaterfallSection.astro`, `#request`, light. One checkout request as a network waterfall. A drafting frame: the request line along the top (`POST /api/checkout`, `200 OK`), a "Cache hit" switch (a `role="switch"` button) and the total in milliseconds. Under it, one row per phase (DNS, TCP and TLS, gateway, service, cache, database, response, render): its name, the tool's logo and its layer in column 1, its bar on a 0–600 ms scale across columns 2–4, the ticks on the column rules, bars shaded by layer (network, edge, service, data, browser; keyed along the foot). A dashed line marks the first byte. On arrival the bars draw left to right in turn and the total counts up; leaving resets them. The switch replays the request warm: the cache hits, the database bar turns to a dashed outline marked "Skipped", everything after it slides earlier, the first byte moves and the total falls from 412 to 240 ms; a polite live region reads the new total. Bars sit in a fixed track and move by custom properties, so nothing shifts. The phases are data in `index.astro` (`cold` and `warm`: start and duration in ms). Tablets: a wider label column without the layer names. Phones: the same chart with a 41% label column, smaller logos and the end ticks only. Without the script the cold request shows, drawn; reduced motion shows it without the draw.

### EndToEndSection

`src/components/EndToEndSection.astro`, `#end-to-end`, dark. One feature (invite a teammate) from table to screen. A frame on the columns: a photo of two developers at a laptop in column 1, the running feature in column 2 (a light app screen on a dotted ground: the team list with the new invite pending, the invite form and a "201 Invite sent" toast), and the code in columns 3–4 as three tabs: Schema (Prisma), API (Node.js) and Component (React), each with its logo and file path. While the section is on screen the tabs step on their own, a rail under the open tab filling over five seconds (a CSS animation; its end opens the next tab); each step outlines and tags the part of the screen that code produces. Picking a tab, by click or arrow keys (a proper tablist, roving tabindex), stops the stepping for good. All panes share one grid cell, so nothing moves. Tablets: photo and screen side by side, the code under them. Phones: the photo beside a compact screen (the pending row, the form, the toast), then the code at a smaller size, scrolling sideways inside its pane if a line is long. Without the script the schema tab shows; reduced motion does not auto-step.

### StackPickerSection

`src/components/StackPickerSection.astro`, `#stack`, light. Build your stack. A frame on the columns: in columns 1–3, five layers (front end, back end, data, API, shipping), each a row of chips with the tools' logos; one pick per layer, as native radio buttons, so arrow keys move within a row. Column 4 is the pod on the dark tone: a photo of a team, the five picks as a dashed spine of logo tiles, and who does what (lead, two developers, shared DevOps), rewritten from the picks (`{front} + {back}` and so on, in `index.astro`). Every option's logo sits in the same spine cell and each role keeps one line, so a change of pick moves nothing. The rows rise in on arrival. Tablets: the layers full width, the pod under them with the photo beside its text. Phones: one row of logo tiles per layer (names under the logos, hidden visually below 375px), a short photo, the roles two by two. Without the script the default stack and its pod show.

### FaqSection

`src/components/FaqSection.astro`, shared. Four full stack questions with draft answers, and a photo of two developers reviewing code at a desk.

### CtaSection

`src/components/CtaSection.astro`, shared. The close, with this page's text.

## Logos

Simple Icons (CC0), generated into `src/lib/tech-logos.ts` with the tools' `logos.mjs`: react, vuedotjs, angular, nextdotjs, nodedotjs, python, go, postgresql, mongodb, supabase, redis, graphql, docker, kubernetes, vercel, prisma, cloudflare, nginx. REST has no mark, so it shows as a `{ }` glyph.

## Copy to check before launch

- The waterfall's timings (412 ms cold, 240 ms warm, first byte at 306 and 134 ms) are plausible for one API call, not measurements.
- The feature's code is a teaching example, not a client's code.
- The pod (three developers and a shared DevOps engineer, "about two weeks") and the hero's "Within two weeks" start time.
- The stack options per layer.
- FAQ answers are drafts: team shape, profile lean, working in the client's stack, deployment.

## Photos

| File | Unsplash ID | What it shows |
|---|---|---|
| `src/assets/pages/p15-hero.jpg` | qOHFI6Nb4Uk (photo-1758598497575-9d46f32dff1b) | A developer with headphones working on a laptop at a bright desk (hero) |
| `src/assets/pages/p15-feature.jpg` | GXEcTqlZHno (photo-1531535701800-03b2bec4fbfd) | Two developers working through a feature on a laptop (end to end) |
| `src/assets/pages/p15-team.jpg` | rtD_lcsN6_U (photo-1690378820474-b468b8ee64d3) | Three developers reviewing work on two laptops in an open office (stack) |
| `src/assets/pages/p15-faq.jpg` | tPxHQIZU2OQ (photo-1531498001693-66235ecacf14) | Two developers reviewing code together at a desk (FAQ) |

All under the Unsplash License.
