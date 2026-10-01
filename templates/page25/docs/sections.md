# Flutter developers: sections

This page's sections, in page order, after the hero. Each one is designed for this page
alone, apart from the FAQ and the close, which are the same on every AgentCraft page. Copy lives in `src/pages/index.astro`,
styles in the Page 25 block of `src/styles/globals.css`.

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

### WidgetTreeSection (`#widget-tree`)

`src/components/WidgetTreeSection.astro`, light. One frame in two halves: the app's widget
tree on the left, indented by depth with a guide per level, and on the right a phone in a pale
bezel with every widget's bounds traced faintly over its screen (debug paint). Pointing at,
focusing or tapping a widget lights its box, tinted and tagged with its name and size; while
the frame is in view and nobody is pointing, the light steps through the tree on its own. The
tree is a list of buttons (`aria-pressed` marks the lit one). Every box is drawn from the start
and only its opacity changes. Without the script the Column stays lit. Props: header copy,
`treeLabel`, `tip`, `nodes` (id, name, hint, depth; each id has a box on the 240 × 520 screen
in the component) and `screen` (the trips screen's text). Tablets and phones: the phone on top,
smaller, the tree under it as two columns of names (hints hidden on phones).

### FramesSection (`#frames`)

`src/components/FramesSection.astro`, dark. Headline, lede and three readings (frame rate,
janky frames, slowest frame) in columns 1–2, a photo in columns 3–4, and across the foot a frame
chart: each frame a pair of bars (UI thread, raster thread) under a dashed budget line, streaming
in from the right while the section is in view (paused off screen, still under reduced motion).
A 60 Hz / 120 Hz switch (native radios, state in CSS) moves the budget and swaps the frames and
readings, all drawn in one cell. Frame times are generated in the component, a fixed spread well
under each budget. Phones: a short photo band and a shorter chart.

### PlatformsSection (`#platforms`)

`src/components/PlatformsSection.astro`, light. A honeycomb: Flutter and Dart at the heart on
the accent, six platform cells round it (iOS, Android, Web, macOS, Windows, Linux), opening
outward as the section arrives. Picking a cell (pointer, focus or tap) shows its build sheet
beside it: the command, the output and where it ships; in view and untouched, the pick steps
round the ring. Under the sheet, the tools around the build. Windows has no logo in Simple Icons,
so its cell shows a plain screen glyph and its name; macOS uses the Apple logo. Every sheet
shares one grid cell. Tablets: the comb, then the sheet. Phones: a smaller comb and the tools as
logo tiles.

### FaqSection and CtaSection

Shared on every page; this page passes its own questions, photo and close.

## Photos

| File | Unsplash ID | What it shows |
|---|---|---|
| `src/assets/pages/p25-hero.jpg` | o0A5BpHxziU (photo-1609177336889-4e69aa3b1ff6) | A developer using his phone beside a glowing monitor |
| `src/assets/pages/p25-frames.jpg` | VzJjPuk53sk (photo-1575089976121-8ed7b2a54265) | A developer coding across a monitor and a laptop |
| `src/assets/pages/p25-faq.jpg` | CPs2X8JYmS8 (photo-1551434678-e076c223a692) | Two developers at their desks in a bright office |

All under the Unsplash License.

## Logos

Simple Icons (CC0), in `src/lib/tech-logos.ts`: flutter, dart, apple, android, webassembly,
linux, firebase, supabase, codemagic, androidstudio, xcode. Windows is named in text only.

## Copy to check before launch

- The trips screen (places, dates) is illustrative.
- The frame chart: frame times, "11.3 ms" and "5.7 ms" slowest frames, "0" janky frames.
- The build commands and outputs (`flutter build ipa`, `appbundle`, `web --wasm`, `macos`,
  `windows`, `linux`) and where each ships.
- "Every frame gets about 16 milliseconds".
- The FAQ answers are drafts, including "we usually start with Riverpod".
