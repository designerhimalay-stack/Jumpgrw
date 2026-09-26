# AgentCraft — design notes

How the site is put together: the tokens everything resolves from, the mechanics that are
not obvious from reading the CSS, and the traps that cost real time. Component-level detail
lives in `docs/components/`.

---

## 1. Tokens

All in `src/styles/globals.css` under `:root`, some redefined in `max-width` media blocks.
Renaming one means updating its `:root` definition, **every** breakpoint redefinition, and
every `var()` consumer.

### Colour

| Token | Value | Used by |
|---|---|---|
| `--color-accent` | `#507af7` | Nav CTA and hover, hero CTA, active step badge, stat card, progress fills |
| `--color-accent-dark` | `#3a65eb` | Hover state of both CTAs |
| `--color-accent-border` | `#4571f2` | Nav hover pill border |
| `--color-grey` | `#f6f6f6` | `body`, navbar rest state |
| `--ac-field-gradient` | 18-stop vertical ramp, `#000715` → `#b1bbf5` | The hero field and the BUILD type |

`--ac-field-gradient` is defined **once**, in `globals.css`. `Hero.astro` passes
`var(--ac-field-gradient)` straight through rather than carrying its own copy of the stops.

### Layout

```css
--gutter:      clamp(20px, 5vw, 72px);
--section-gap: clamp(104px, 24vh, 260px);   /* clamp(80px, 15vh, 140px) below 992px */
--band-pad:    clamp(96px, 16vh, 180px);    /* each side of a change of tone */
```

**`--gutter`** is every section's left and right edge. Consumers: the navbar container,
`[data-gp-content]` (horizontal padding only — its vertical rhythm is separate),
`[data-ac-stats-inner]`, `[data-ac-grid-rules]`, `[data-ac-process-head]` and
`[data-ac-process-track]`.

Verified flush at 390 / 768 / 1440: navbar logo, meta strip, hero headline, hero body, hero
CTA, capability rail, stats eyebrow, stats headline, stats card, the first column rule, and
the process section's header and panel all share one left edge. The navbar CTA, stats
headline, last stat card and process panel share one right edge. Two deliberate exceptions:
both section **ledes** start at column 2, and stat **numbers and captions** are inset by
their card's padding.

**Phones (≤599):** the column rules drop to the two outer edges. Text runs the full width
there, and the old two-column split put a centre rule through every headline and lede. The
stat cards go two-up under the featured one, each only as tall as its number and caption
(the stats section went from 1.6 screens to 0.8 at 390 × 844). The mobile pass of
2026-09-26 also touched the hero (§4), scrolling (§5), process, showcase, skills, client
stories and the footer; each component doc has its part.

**`--section-gap`** is the space where two sections' content meets. It is driven by viewport
**height**, so the narrow-width override exists to stop a phone in portrait taking nearly
the desktop value on a much shorter column.

It has to stay far larger than any gap inside a section — the biggest of those is 54px at
1440 — because the column rules run unbroken from one section into the next, so this is the
only cue that a new section has started. Measured: **216px at 1440 (4.0× the internal
rhythm), 157px at 390 (3.1×)**.

> Two earlier passes were both too tight: 81px, close enough to the internal 54px that the
> stats cards and the process eyebrow read as one block, then 144px, which still read as
> cramped against a stat card band 342px deep. Size this against the **mass** above it, not
> against the text rhythm.

**`--band-pad`** replaces the gap wherever the tone changes (X-Shore → dark Case Studies →
Client Stories, FAQ → blue CTA → dark footer): each side carries it, so the edge sits
halfway between the two sections' content. The edge itself marks the break, so it can be
smaller than the gap. Measured 2026-09-26: 144 | 144 at 1440 × 900, 135 | 135 at 390.

> **Fails silently:** every component renders its `<script>` right after its `<section>`,
> so a plain `dark + light` sibling selector never matches. The neighbour rules allow one
> element in between (`+ script +`). Before that fix Client Stories' eyebrow sat flush on
> the dark edge.

### Type

Two families, two jobs. **Outfit** (`--font-display-stack`) carries brand voice: the
wordmark, every headline, step titles, stat numbers. **Inter** (`--font-stack`) carries
everything that gets read.

| Token | Value |
|---|---|
| `--display-size` | `clamp(36px, 6.2vw, 88px)` |
| `--display-weight` / `--display-lh` / `--display-ls` | `400` / `1.06` / `-0.02em` |
| `--text-lede` / `--text-body` / `--text-caption` | `18px` / `16px` / `14px` |
| `--text-lh` / `--text-ls` | `1.55` / `-0.005em` |
| `--ac-char-step` / `--ac-char-fade` | `18ms` / `300ms` — see §3 |

`.mono-label` is the micro-label treatment: Inter at 11px, `0.14em` tracking, uppercase,
weight 500. Used for eyebrows, badges, CTAs and header metadata. The class name is a
leftover from when it was set in a monospace; the treatment is no longer mono.

Every section headline uses `--display-size`, so the hero, stats and process headlines sit
on one scale.

**Two-tone headlines.** Every section headline is ink, then its closing phrase in
`--color-accent`: "Building product teams / that ship.", "One team. / Three talent
regions.", "Proof is in / the product." and so on down the page, and the Why AgentCraft
titles the same way. On the accent band (the call to action) the phrase takes the navy
ink instead. Shared-header sections pass `accent={index}` to `SectionHead`; Stats, Process
and Showcase wrap the phrase in `[data-ac-headline-accent]`; X-Shore has its own
`[data-ac-xshore-accent]`. The hero keeps its gradient fill and the footer its own
two-tone sign-off. A new section keeps the pattern.

### Breakpoints

Declared with `@custom-variant`, max-width based.

| Variant | Query |
|---|---|
| `mdown:` | `(max-width: 991px)` |
| `sdown:` | `(max-width: 767px)` |
| `xsdown:` | `(max-width: 479px)` |

The process panel has its own stack breakpoint at **809px**, in both `STACK_QUERY`
(`ProcessSection.astro`) and the `@media (max-width: 809px)` block. Change them together.

---

## 2. Page

Astro, static output, no UI framework on the client. Every component is a `.astro` file that
renders its markup at build time and carries its behaviour in a plain `<script>`.

```
<SmoothScroll />   Lenis, no DOM; also owns in-page links (see below)
<Navbar />         fixed; dark meta strip over the main bar; one shared mega dropdown
<main>
  <Hero />                 scroll-driven camera through "BUILD", then the copy and
  │                        cut-out rise on the blue field
  <StatsSection />         white; hairline column rules; narrow/wide/narrow cards
  <ProcessSection />       #process   white; rules continued; sticky step panel
  <ShowcaseSection />      #teams     white; MVP Team frame + three team cards
  <XShoreSection />        #x-shore   white; time-zone photo + three regions
  <CaseStudiesSection />   #case-studies   dark; auto-advancing project list + image
  <ClientStoriesSection /> #client-stories white; portrait, quote, client strip
  <SkillsSection />        #skills    white; eight-role lattice with hover reveal
  <WhySection />           #why-agentcraft white; people over a photo + two features
  <FaqSection />           #faq       white; sticky header, native <details>
  <CtaSection />           #contact   accent; call to action, drafting compass
</main>
<Footer />         dark; sign-off line, links, address
```

Everything from Case Studies down shares one grammar: `data-ac-sec="light|dark|accent"`
sets the tone tokens, `SectionHead.astro` renders the header, `GridRules.astro` the column
rules, and `lib/in-view.ts` the reversible `data-ac-in` entrance. A change of tone is a hard
edge, so both sides of it carry `--band-pad`.

| Behaviour | Model |
|---|---|
| Navbar and hero entrance | time-driven, once per load — held by `data-ac-intro="start"` before first paint, released by `SmoothScroll` on the second frame |
| Navbar tone | scroll-driven — follows `data-portal-phase` on `<html>`, i.e. what is under the bar |
| Navbar menus | one shared panel, hover (mouse) or click; moving between triggers swaps the pane without closing; Escape / outside click / focus leaving closes; mobile groups are `<details>` (see `docs/components/navbar.md`) |
| Hero camera | scroll-driven — `GlyphPortal` progress |
| Hero copy + cut-out | scroll-driven, reversible — `data-portal-state` before / in / after |
| Hero capability rail | time-driven — 44s marquee, paused on hover and focus |
| Stats counters | viewport-driven, reversible — the whole row re-arms each time the section enters or leaves |
| Section headings | viewport-driven, reversible — fill in character by character |
| Process step advance | scroll-driven — sticky panel over a track spacer, run split three ways; ≤809 nothing pins and the open step is the card that has crossed 55% of the viewport, with the stage and its caption held at their tallest panel's height so a step change never moves the page |
| Case studies, client stories | time-driven rotation timed by a CSS animation; paused by keyboard focus or leaving view (not by the mouse); a choice restarts the timer from there; off under reduced motion |
| Skills, Why AgentCraft | hover / focus per cell |
| FAQ | native `<details name>`, one open at a time |

Everything except the capability rail, the two rotations and the on-load entrance is
reversible. A refresh always starts at the top and replays the opening; only a fresh visit
that arrives with a hash (a shared link) goes straight to its section (§5).

**Nothing moves the page after it has laid out.** Measured 2026-09-26: layout shift (CLS)
0.000 at 320, 360, 390, 820, 1024 and 1440 after a full scroll down and back, with every
section's top where it started. Anything whose content changes size while the reader is
on the page must reserve its tallest size first, as the process stage and caption, the
case-study details (`--ac-case-details-h`) and the client-stories deck do.

### In-page links

Navbar, menus, footer and CTAs link to section ids. `SmoothScroll` handles every same-page
`#` link: it retires the opening frame first (otherwise the camera's retire-and-jump-home
would land the page back at the top), then travels to the section clear of the fixed bar,
and pushes the hash. A load that arrives with a hash waits for `load` and the fonts, then
goes straight there. `#top` is the top.

"Clear of the fixed bar" is the bar's **layout height** (`offsetHeight`) plus 12px, not its
on-screen box: on a load with a hash the bar is still sliding down, and its box would read
as almost nothing and land the section underneath it. Verified at 1440 and 390, clicked and
arriving: every section lands 12px below the bar.

### Two sticky mechanics

The navbar (`position: fixed`) and the process panel (`position: sticky`). They do not
interact. The panel pins at `--ac-pin-top: 124px`, which is the meta strip plus the main
bar plus clearance — **if the navbar's height changes, that token changes with it.**

---

## 3. Heading reveal

Every section heading fills in character by character when its section arrives, and empties
again on the way out.

`RevealText` emits one `<span data-ac-reveal-char>` per character carrying its index as
`--ac-char-i`; `globals.css` turns that into `transition-delay`. **Nothing animates in the
component.** The gate is whatever the section already uses to say it is in view
(`[data-ac-in]`, or `data-portal-state` for the hero), which is what makes the reveal
reversible for free and gives it replay-on-return.

The two section headings have **no** block-level rise: the characters are the entrance, and
running both reads as two effects. The hero headline keeps its rise and de-blur but hands
`opacity` to the characters, for the same reason.

`--ac-char-step` / `--ac-char-fade` are `18ms` / `300ms`. They are tokens rather than
literals so a future context can run the reveal at its own pace without touching the
headings.

**Accessibility:** every span is `aria-hidden`, and the heading carries the real sentence as
`aria-label`, which wins over element contents. That only works on headings: the footer's
sign-off is a `<p>`, which may not carry `aria-label`, so it holds a visually hidden
(`sr-only`) copy of the sentence instead. Assistive technology reads one string, not a
letter at a time. Verified at 390 that a heading's box is identical revealed and unrevealed,
so nothing reflows.

---

## 4. Hero mechanic

`src/components/ui/GlyphPortal.astro` (markup) and `src/components/ui/glyph-portal.ts`
(`mountGlyphPortal()`, the camera) are **third-party MIT-licensed code** and each carries a
copyright notice at the top of the file. That notice is a condition of the licence and must
stay with the files. Local modification: the upstream component is split into markup and a
mount function, with its props serialised onto the section as `data-gp-options`. The camera
logic itself is unchanged.

### The font trap — read before changing `fontFamily`

The portal measures its own type with `document.fonts.check()`. The Astro font loader's
auto-generated fallback face never passes that check, which trips the component's stalled
guard and silently disables all motion — no error, just a static word.

`Hero.astro` therefore holds the portal in a `<template>` and mounts it only once an
explicitly-named `@font-face` (`"AgentCraft Display"` →
`src/assets/fonts/Outfit-variable.woff2`, referenced by a **relative** `url()` so the build
hashes it and adds the base path) resolves via `document.fonts.load()`, with an 1800ms timeout to Arial. Until then a
`100svh` placeholder holds the first screen. **If you change the portal's face, add a
matching `@font-face` with a real family name.** A `--font-*` variable from the `fonts`
config alone will break it.

### The same guard, tripped by a hidden tab

The guard has a second trigger: a first animation frame arriving more than 2.5s after
mount. A page that loads where it cannot be seen (a background tab, or a window covered by
the editor, where the dev server reloads it on every save) gets no frames, so it came
forward as a static word, the pin scrolling away with the page, and an empty `#000715`
panel where the copy should be; the camera travel then retired the frame and skipped the
hero altogether. So `Hero.astro` also waits for `document.visibilityState === "visible"`
before mounting, and `SmoothScroll` starts the 500ms hold only once the hero is mounted
(it counts frames, which a hidden tab does not run). Verified 2026-09-26 with frames held
back for 4s: the opening plays in full once the tab comes forward.

### Navbar over the field

`Hero` writes two reversible attributes on `<html>`:

- `data-portal-phase` — `paper` | `field`. The navbar is fixed, so its tone has to follow
  whatever is under it. Driving this off portal progress alone left the bar dark over the
  white stats section, because progress stays pinned at `1` once you scroll past.
- `data-portal-state` — `before` | `in` | `after`. Drives the hero's entrance and exit.

### Phones: the cut-out comes back

The cut-out is hidden 810–991 (it would sit under the full-width copy). At ≤809 it returns
in flow rather than pinned to the corner: the panel's grid row stretches, the copy column
becomes a flex column, and the photo takes whatever height the copy leaves, contained and
sitting on the bottom edge, bled through the padding into the white fade. Without it the
lower 40% of a phone's first screen was empty field. On a short screen (SE, 667px) it is
simply smaller; it can never ride up over the buttons.

The portal's touch-only "Choose a letter" select (`[data-gp-touch-picker]`) is hidden from
`globals.css`, not removed from the vendored file: it only changes which letter the camera
flies into, and the default letter serves. It needs `!important`, because the portal's
scoped style lands after our sheet at equal specificity.

### Capability rail

The strip under the hero CTAs drifts left forever: 44s linear, infinite, ~10px/s. Pauses on
hover and focus-within, off under reduced motion.

Three identical copies of the list sit on the rail, each carrying its own trailing gap as
`padding-right` rather than the rail carrying a `gap`. That makes one copy exactly a third
of the rail, so `translateX(calc(-100% / 3))` lands the loop on itself with no seam.

> **Watch out:** the rail is `width: max-content` and `[data-gp-content]` is a grid. Grid
> items take `min-width: auto`, so without `min-width: 0` on `[data-ac-reveal]` and
> `[data-ac-copy]` the whole hero column refuses to shrink below the rail's width and blows
> out on a phone. Both set it.

---

## 5. Smooth scroll

Lenis, `duration: 0.9`, exponential ease-out, `syncTouch: false` (touch devices already have
good native momentum; smoothing it fights the OS). It animates the real scroll position, so
native `scroll` events still fire and the hero's scroll-driven camera keeps working
untouched. Disabled entirely under `prefers-reduced-motion`.

### Touch screens

`(hover: none) and (pointer: coarse)` changes two things in `SmoothScroll.astro`; desktop
is untouched.

- **The intro yields to a finger.** The 5s camera travel is Lenis moving the page, and
  with `syncTouch` off a finger scrolls natively, so the two fought frame by frame. The
  first `touchstart` stops the travel and hands the page over; a touch before the 500ms
  hold means the travel never starts. A cancelled travel never reports arrival, so there
  is no late jump home.
- **The frame retires at rest, in place.** Retiring mid-fling means a programmatic jump
  during momentum, which iOS answers by stopping the page dead. On touch the retire waits
  until scrolling has been still for 160ms, then removes the frame and moves the page up by
  exactly its height (`jumpTo(scrollY - landing)`), so nothing on screen moves. Verified
  2026-09-26: the stats heading sits at the same viewport position before and after.

### Reload starts at the top

The hero is a scroll-driven camera and every section's entrance is gated on arriving at it,
so being dropped back into the middle of the page on a refresh shows all of that already
finished. Two things stop it:

1. `history.scrollRestoration = 'manual'` in an inline script in `<head>`. This is the only
   place early enough. Setting it from a module script does not work: the restore has already
   happened, and Chrome re-applies it as the document grows, which it does here because the
   portal's scroll length is only known once it mounts.
2. `lenis.scrollTo(0, { immediate: true, force: true })` right after Lenis is constructed.
   Lenis caches the position it was built at and steers the page back to it on its next
   frame, so a raw `window.scrollTo` would simply be undone.

A fresh visit with a hash (a shared link to a section) is exempt. A **refresh** is not:
in-page links leave their hash in the address, so on a reload (`PerformanceNavigationTiming`
type `reload`) `SmoothScroll` drops the hash with `history.replaceState` before anything
else reads it, and the opening plays again.

> Dev server: if the BUILD camera never moves in `npm run dev` but does in a build, look for
> a `504 (Outdated Optimize Dep)` on `lenis.js` in the console. It happens when packages
> change under a running dev server. Stop it, `rm -rf node_modules/.vite`, start it again.

> Testing note: `keyboard.press('F5')` in Playwright goes to the page, not the browser
> chrome, and does not reload. Use `location.reload()`.

---

## 6. Renaming AgentCraft

The brand string is **not** centralised. It appears in:

| File | Context | Visible? |
|---|---|---|
| `src/components/Navbar.astro` | Logo text node | Yes — top-left wordmark |
| `src/layouts/Layout.astro` | `title` / `description` | Yes — tab, search results |
| `src/components/Hero.astro` | `HERO.imageAlt` | Screen readers only |
| `src/styles/globals.css` | `@font-face { font-family: "AgentCraft Display" }` | No — but see §4 |

Also: `package.json` `name`, and the repo directory itself.

`"AgentCraft Display"` is load-bearing. If you rename it, rename it in **both** the
`@font-face` block and both `PORTAL_FACE` constants in `Hero.astro` (frontmatter and
script), or the hero silently loses its motion.

### Routes

Navigation goes to this page's sections (`#teams`, `#contact` …). Two links point at pages
that do not exist yet, `/case-studies` ("View case study") and `/contact` ("Plan my team"),
both written through `withBase()` from `src/lib/paths.ts` so they follow the base path
(§8). Any new link to another page must go through it too.

### Assets

| Path | Notes |
|---|---|
| `src/assets/team-photo.webp` | Supplied by the team. 1545×984, transparent margins trimmed, PNG→WebP q88 (2.1 MB → 288 KB). Hero cut-out. The build emits it at seven widths (384–1545w, q75) |
| `src/assets/fonts/Outfit-variable.woff2` | The portal's explicitly-named face, imported by `globals.css` with a relative path. SIL OFL |

There is **no favicon**. The browser falls back to its own generic document icon until
AgentCraft has a mark of its own.

---

## 7. Conventions

- Styling hooks are `data-ac-*` attributes, not class names, so a grep for a hook finds
  exactly its rules and its markup.
- Anything reversible is driven by an attribute on an ancestor (`data-ac-in`,
  `data-portal-state`, `data-ac-intro`) and expressed as a CSS transition, never as an
  imperative animation. That is what makes every entrance replay on the way back for free.
- Scroll handlers are coalesced through `requestAnimationFrame` and only write to the DOM
  when the value actually changed.
- Anything that has to replay a CSS entrance animation (the process caption and stage) is
  swapped for a fresh node rather than edited in place.
- No root-relative URLs in source (`"/x"`): import assets from `src/assets`, reference
  them with relative `url()` in CSS, and write page links with `withBase()`. The site is
  served from a sub-path on GitHub Pages, and `scripts/check-site.mjs` fails the build on
  any URL that misses it.
- Touch targets are at least 44px. Where the drawn element is smaller, the hit area grows
  invisibly (equal padding and negative margin, or a transparent `::before`) so nothing on
  screen moves; the touch-only ones sit under `@media (pointer: coarse)`.
- Photos: `widths` run up to the source file's own width (Astro drops anything larger and
  adds the original), so retina screens get the sharpest file there is.

---

## 8. Build, check, deploy

| Command | |
|---|---|
| `npm run verify` | Type-check, lint, build and `scripts/check-site.mjs`. Run it before every commit |
| `BASE_PATH=/agentcraft npm run build` then `BASE_PATH=/agentcraft node scripts/check-site.mjs` | Build and check exactly as GitHub Pages serves it |

`astro.config.mjs` reads `SITE_URL` and `BASE_PATH` from the environment; both unset means
the domain root. `.github/workflows/deploy.yml` runs on every push to `main` and every pull
request: `npm ci`, check, lint, build with the Pages sub-path, `check-site`, then publishes
to GitHub Pages (pushes to `main` only, and only once Pages is switched on: Settings →
Pages → Source: GitHub Actions). `check-site` fails on a URL without the base path, an
in-page link without a target, a section missing or out of order, more than one navbar
dropdown, or the one word the owner has banned from the repository.

The step-by-step for running, deploying and changing the site safely, written for AI
assistants, is `docs/AI_GUIDE.md`.
