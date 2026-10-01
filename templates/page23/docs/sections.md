# Kotlin developers: sections

This page's sections, in page order, after the hero. Each one is designed for this page
alone, apart from the FAQ and the close, which are the same on every AgentCraft page. Copy lives in `src/pages/index.astro`,
styles in the Page 23 block of `src/styles/globals.css`.

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

### RewriteSection

`src/components/RewriteSection.astro`. Java to Kotlin, on the dark tone. One frame, two files: `User.java` (34 lines) on the left; on the right `User.kt`, a line counter with a bar, and the three moves that get there (fields and getters → `val`, the constructor → `class User(…)`, equals/hashCode/toString → `data`). As the section arrives each move lights its Java lines, then strikes them through, while the matching Kotlin piece appears and the counter drops from 34 to 5. Lines and pieces keep their boxes from the start; only colour and opacity change. Without the script, or under reduced motion, the finished state shows. Tablets: the Kotlin file beside the counter and moves, blank Java lines folded away. Phones: smaller code, no moves list.

### PrismSection

`src/components/PrismSection.astro`. Kotlin Multiplatform, on the light tone. A framed photo of two engineers reviewing code holds the first column; the rest is an optical bench on a dot grid. The shared module (`commonMain`: models, networking, storage, business rules) sends one beam into a glass prism around the Kotlin mark, which splits it into four rays, one per target: Android (`androidMain`, Jetpack Compose), iOS (`iosMain`, SwiftUI), web (`wasmJsMain`, Compose for Web) and server (`jvmMain`, Ktor). Beam, prism, rays and targets draw in order; then a pulse of light runs down the beam and out along the rays while in view (paused off screen, off under reduced motion). The lines use percentage coordinates, so they stay crisp at any size. Tablets: the photo becomes a band. Phones: the bench turns upright, the rays fanning down to four targets in a row.

### CoroutinesSection

`src/components/CoroutinesSection.astro`. Coroutines, on the dark tone. A trace view: a millisecond ruler, three network calls and a render lane. Each call launches (a ring), waits suspended (a dashed line) and resumes (a block). A two-way switch (native radios, so it works by keyboard and without script, via CSS `:has()`) picks one by one or concurrently; the code beside the trace swaps, the calls slide to their start times by transform, and the totals (1,000 ms against 450 ms) highlight. While in view a playhead sweeps the trace, uncovering it and counting the clock, and the modes alternate until the reader picks one. Tablets: the switch and totals beside the code. Phones: narrower lane names, shorter lanes.

### CompletionSection

`src/components/CompletionSection.astro`. The toolchain as an editor's search palette, on the light tone. A framed photo of an engineer at a monitor fills columns 1–2; columns 3–4 hold a search field and nine matches, each a logo tile, name, coordinate or use, and role. Rows arrive one after another, then the selection steps down the list while the section is in view, the field showing the chosen name with a blinking caret (paused off screen). The field's names share one grid cell, so nothing moves. Tablets: the role column goes. Below 768px: the photo becomes a band over the palette. Phones: a compact palette without the hint row.

### FaqSection

`src/components/FaqSection.astro`. The shared FAQ, with four Kotlin questions and a photo of a developer working in an editor.

### CtaSection

`src/components/CtaSection.astro`. The shared close on the accent: "Fewer lines. More shipped."

## Photos

| File | Unsplash ID | Shows |
|---|---|---|
| `src/assets/pages/p23-hero.jpg` | 7PHq2BCa7dM (photo 1573495612937-f01934eeaaa7) | A developer in headphones codes at a standing desk with two monitors |
| `src/assets/pages/p23-pairing.jpg` | bPVM4nOy0Rg (photo 1573165265437-f5e267bb3db6) | Two engineers review code together on a laptop |
| `src/assets/pages/p23-toolchain.jpg` | vJP-wZ6hGBg (photo 1536148935331-408321065b18) | An engineer writes code at a desktop monitor in an open office |
| `src/assets/pages/p23-faq.jpg` | I8OhOu-wLO4 (photo 1453060113865-968cea1ad53a) | A developer works through code in an editor on a laptop |

All under the Unsplash License.

## Copy to check before launch

- Hero specs: "Starts within two weeks"; targets "Android, iOS, server".
- The Java and Kotlin code and the counts (34 lines to 5) are illustrative.
- The multiplatform targets and their native layers (Compose for Web on wasmJs, Ktor on the JVM) are typical choices, not a promise for every project.
- The trace timings (calls of 300, 400 and 250 ms, render 50 ms; 1,000 ms against 450 ms) are illustrative.
- The palette's coordinates and descriptions are illustrative; check versions and artifact names.
- The FAQ answers are drafts.

## Logos

Simple Icons (CC0): Kotlin, OpenJDK, Android, iOS, WebAssembly, Jetpack Compose, Ktor, Spring Boot, Gradle, IntelliJ IDEA, Android Studio, JUnit 5, Docker.
