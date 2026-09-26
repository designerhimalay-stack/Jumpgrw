# ProcessSection

"The people to move / your roadmap forward." (the second phrase in the accent). A sticky
two-column panel: three step cards on
the left, a stage on the right, set into a lattice of ghost cards.

- **Files:** `src/components/ProcessSection.astro`, `src/components/process/` (stage panels
  and corner joints), the process block in `globals.css`
- **Interaction model:** **scroll-driven** at ≥810px. The panel pins under the navbar while
  a track runs past it; the active step advances as the track is consumed. Below 810px the
  panel un-sticks and every step is listed at once. No clicks, no hovers, no timers.

## Geometry (1440)

| | |
|---|---|
| panel | `position: sticky`, `top: var(--ac-pin-top)`, grid `36% / 1fr`, no gap |
| cards column | border `1.5px`, three rows of `minmax(var(--ac-cell-h), auto)` |
| step cell | `padding: 10px`, `border-bottom: 1px` |
| step card | radius 12, `padding: 24px`, flex column `gap: 32px`; title→body 12px |
| **active** card | white, `border-style: solid`, four-layer shadow |
| **waiting** card | transparent, `1px dotted` |
| badge | `padding: 5px 10px`, radius 4; active takes `--color-accent`, waiting is neutral |
| visual column | border `1.5px`, no left border; rows `auto / 1fr` |
| caption bar | `padding: 12px`, centred, 12px italic |
| lattice | columns `15% / 70% / 15%`; centre rows `20% / 1fr / 20%`, sides `16% / 45% / 39%` |
| stage frame | `padding: 10px`, `rgb(255 255 255 / 0.22)` |

Solid lines are structure (the panel frame, the cell rules, the live step's surface). Dotted
is everything waiting (the empty ghost cards, the two step cards that are not current). That
contrast is what stops the lattice reading as a table.

## Rating

An `AvatarStack` (Unsplash portraits `avatar-{1,2,3}.jpg`, sources in `showcase.md`), a 12px
rule and "Rated 4.8/5". At ≥992 it sits
in the fourth column, starting on that column's rule, with its bottom edge on the headline's
baseline; the headline is held to columns 1–3 so the two can never collide. The baseline
offset (`--display-size × 0.122 + 3.5px`) was measured at 1440, 1200 and 1024 and holds to
within a third of a pixel. Below 992 it drops under the headline. It joins the header
entrance at 160ms, between the headline and the lede.

## Local tokens

Scoped to `[data-ac-process]`, so nothing else resolves them.

| Token | Value | Purpose |
|---|---|---|
| `--ac-rule` | `rgb(10 16 34 / 0.1)` | Shared with the stats section, so the column rules render identically in both |
| `--ac-line` | `var(--ac-rule)` | Panel hairlines and corner joints. Aliased so the two cannot drift |
| `--ac-ink` | `#0a1022` | Headings |
| `--ac-cell-h` | `clamp(150px, min(14.6vw, 23.4vh), 210px)` | Drives the panel height; the `vh` term keeps a pinned panel off the bottom of a short window |
| `--ac-run` | `clamp(900px, 165vh, 1600px)` | Scroll consumed while pinned |
| `--ac-pin-top` | `124px` | Meta strip plus main bar plus clearance |

## The mechanic

`[data-ac-process-track]` holds two children: the sticky panel and a `[data-ac-process-run]`
spacer. The scroll handler reads `track.offsetHeight - panel.offsetHeight` as the run,
divides the consumed fraction into three, and writes `data-ac-active` onto the matching cell.

> **The run has to be a sibling box, not padding on the track.** A sticky element is clamped
> to its containing block, which for an in-flow child is the parent's *content* box; padding
> sits outside it. `padding-bottom: var(--ac-run)` leaves the panel clamped back to its
> static position every frame and it never pins. This cost an hour — do not "simplify" it.

> **Nothing between the track and the panel may carry a `transform`.** A transform on an
> ancestor makes that ancestor the containing block and the pin stops working. The entrance
> therefore rides on the panel itself.

## Column rules, in two bands

The rules do not cross the panel. Two `[data-ac-grid-rules]` blocks, `data-ac-band="head"`
and `"tail"`; the scroll handler writes `--ac-rules-head` and `--ac-rules-tail` onto the
section each frame from the panel's own top and bottom edges. Head runs from the section's
top to the panel; tail from the panel's bottom to the section's bottom. Both edges move with
the pin, which is why they are written from JS rather than expressed in CSS. Before the first
measurement both bands are empty, so nothing is drawn in the wrong place.

## Corner joints

Four `<i>` per cell, each drawing a crosshair from two 1px bars on `::before` / `::after`.
No SVG, no path data. A cell only marks its **bottom** corners when nothing sits directly
below it — otherwise the mark and its neighbour's top mark land a few pixels apart on the
same rule and read as a smudge.

## Stage panels

`BriefPanel`, `ShortlistPanel`, `DeliveryPanel` are live DOM, not images, sized in `cqw`
against `[data-ac-process-stage-inner]` (a `container-type: inline-size` box) with `max()`
floors so text stays legible as the column narrows. No invented people: the shortlist rows
are roles and stacks only.

## Continuity with the stats section

This section is not styled as its own island. It takes the stats section's fill (`#ffffff`),
ink, rule colour, header grid (four columns on `--gutter`, eyebrow and headline full width,
lede at column 2 capped to 500px) and entrance grammar (rise 30px, de-blur from 8px,
staggered, reversible). It renders the **same** `[data-ac-grid-rules]` markup, so the
verticals run unbroken from one section into the next.

Measured at 1440: both sections' rules, eyebrows and headlines span 72→1368, both ledes
396→896, and the stats card row and the process panel share the same outer edges.

What is its own: the rules split into two bands (above), and the accent wash on
`[data-ac-process]::before`. The wash is anchored to the section rather than the viewport,
so it deepens as the second step comes up and lifts again on the way out, and it fades to
`#ffffff` at both ends so the boundary with the stats section is invisible.

## Responsive

| Width | Layout |
|---|---|
| ≥1200 | Two-column sticky panel, cards column 36% |
| 810–1199 | Same panel, cards column narrows |
| ≤809 | Stacks. Stage above a plain list of the three steps, side ghost columns hidden, nothing pins. The open step follows the scroll: the last card whose top has crossed 55% of the viewport (otherwise steps 2 and 3 never open and read as disabled). The three stage panels are different heights, so the stage is held at the tallest (`--ac-stage-h`, each panel rendered off-screen at the stage's width and measured, again on resize and once fonts load); without it every step change moved the page below by 80–180px. |
| ≤599 | The mock's type floors come up a step (12.5px body, 10.5px labels). |

`STACK_QUERY` in the component and the `@media (max-width: 809px)` block must change
together.

The caption bar is held the same way at every width (`--ac-caption-h`): on a narrow phone
one caption wraps to two lines where the others fit on one. Captions are centred and
balanced when they wrap.

The tail band of column rules is cut with `clip-path` rather than moved (`inset` top), so
its per-frame change does not count as layout shift.

## Reduced motion

Keeps the pin and the step advance, which are scroll position rather than motion, and drops
everything that animates: the entrance lift, the card and badge transitions, the caption and
stage fades.
