# Node.js developers: sections

This page's sections, in page order, after the hero. Each one is designed for this page
alone, apart from the FAQ and the close, which are the same on every AgentCraft page. Copy lives in `src/pages/index.astro`,
styles in the Page 16 block of `src/styles/globals.css`.

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

### EventLoopSection

`src/components/EventLoopSection.astro`, `#event-loop`, light. The event loop, run step by step. A drafting frame: four lines of source (columns 1–2: `console.log("A")`, a `setTimeout` for D, a `queueMicrotask` for C, `console.log("B")`) beside the console they print to (columns 3–4, four cells that fill A, B, C, D); under them the runtime, one lane per column: the call stack (three fixed slots, frames pushing on and popping off), the microtask queue, the timer queue and the loop's own rule (run the script, drain microtasks, take the next callback), with a one-line note per step. While on screen a script steps through eight states (1.3 s each, the last held longer), then runs the program again; it stops off screen. The states are data in `index.astro` (`steps`: running line, stack, queues, lines printed, phase, note). Every piece has a fixed place, so nothing moves. Without the script, and under reduced motion, step 5 shows still: the stack empty, C and D waiting, A and B printed, "Drain microtasks" lit. Tablets: source and console full width, the lanes two by two. Phones: smaller source, the console as a strip, the stack beside both queues, the loop's rule along the foot.

### PackagesSection

`src/components/PackagesSection.astro`, `#packages`, dark. package.json, installing. A frame on the columns: a photo of a developer at a terminal in column 1, and an editor open on `package.json` in columns 2–4. Every dependency line carries its logo on a white tile and, on the right, the job it does (HTTP server, structure, SQL access…); the engines and packageManager lines carry Node.js and pnpm. On arrival the install runs: package by package (260 ms apart) its dot fills, its logo and line light and its time appears, while a rail down the gutter grows from the first package's dot to the one installing, ending exactly on the last package's dot (its ends are computed from the line positions, separately for phones, which hide two lines); the run line along the foot counts "Installing n/9", then "9 packages · done in 3.8 s", with `npm ci` as the alternative. Leaving resets it. Every line has one height, so nothing moves. Without the script, and under reduced motion, the finished install shows. Tablets: the photo as a band over the editor. Phones: a short photo, the file without its name and packageManager lines and without the jobs.

### UnderLoadSection

`src/components/UnderLoadSection.astro`, `#under-load`, light. An API under load. A frame on the columns: a photo of two engineers watching a test in columns 1–2, and the test's readout in columns 3–4: requests per second as one large figure that counts up on arrival, a sparkline of the ramp and the plateau (drawn in left to right, with the target as a dashed guide) that keeps moving while on screen, a new point a second, the p95 latency against its 100 ms target, three Node.js health figures (error rate, event-loop lag, workers) and the tools behind the test along the foot (k6, Grafana, Prometheus, PM2, Docker, each with its job). The figure keeps a fixed width and the line redraws inside one SVG, so nothing moves; the live part stops off screen. Without the script, and under reduced motion, the plateau shows still. Tablets: the photo as a band over the readout. Phones: a short photo, a smaller readout, the tools as logos only.

### FaqSection

`src/components/FaqSection.astro`, shared. Four Node.js questions with draft answers, and a photo of a team reviewing a service around a laptop.

### CtaSection

`src/components/CtaSection.astro`, shared. The close, with this page's text.

## Logos

Simple Icons (CC0), generated into `src/lib/tech-logos.ts` with the tools' `logos.mjs`: nodedotjs, express, nestjs, fastify, typescript, prisma, mongodb, redis (for ioredis), socketdotio, graphql, pnpm, npm, k6, grafana, prometheus, pm2, docker.

## Copy to check before launch

- The package versions and install times are illustrative; check the versions against current releases before launch, or drop the minor numbers.
- The load test (2,000 virtual users, about 12,400 requests per second, p95 48 ms against a 100 ms target, 0.02% errors, 4 ms event-loop lag, 6 workers) is illustrative, not a measurement.
- The event loop's order (A, B, C, D) is how Node.js runs this program; the program itself is a teaching example.
- Hero specs ("Node.js LTS", "Within two weeks") and the FAQ answers are drafts.

## Photos

| File | Unsplash ID | What it shows |
|---|---|---|
| `src/assets/pages/p16-team.jpg` | RIk-i9rXPao (photo-1632910121591-29e2484c0259) | A developer pointing out a line of code on a laptop to a colleague (hero) |
| `src/assets/pages/p16-terminal.jpg` | 7wLQNYKL3Rw (photo-1631624210938-539575f92e3c) | A developer with headphones working in a terminal across two monitors (package.json) |
| `src/assets/pages/p16-load.jpg` | E8pqwxaS6ko (photo-1765561667528-28e39c6174dd) | Two engineers watching a screen in a dim room (under load) |
| `src/assets/pages/p16-faq.jpg` | yd_RKGH_RH4 (photo-1758691737124-05c5bffe46f0) | A team gathered around a laptop reviewing work (FAQ) |

All under the Unsplash License.
