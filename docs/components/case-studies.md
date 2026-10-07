# CaseStudiesSection

"Proof is in the product." The page's dark section: a list of four projects on the left
that opens one at a time and advances on its own, and the open project's image on the right.

- **Files:** `src/components/CaseStudiesSection.astro`, the Case studies block in
  `globals.css`, `src/assets/cases/*.jpg`
- **Shared pieces:** `SectionHead`, `GridRules`, `lib/in-view.ts`, the shared section
  grammar (`data-ac-sec="dark"`)
- **Interaction model:** time-driven rotation, click to choose, viewport-gated.

## Layout

Header: "+ Selected case studies / 04", "Proof is in / the product." (the second line in the
accent). Frame across all four
columns, split on the third rule: list in columns 1–2, image in 3–4 (a rounded tile inset
in the cell, as the showcase portrait). Below 1200 the image goes on top at 16:10, 4:3 on
phones.

A project row: number, name, and on the right an arrow (closed) or the timer ring (open).
Open, it shows the summary, the stack in mono caps over a rule, and a ghost "View case
study" button (the hero's ghost style). A 2px accent rule draws down its leading edge.

## Behaviour

- **Rotation:** the open project's ring is a CSS animation (`--ac-case-duration`, 6s), and
  its `animationend` opens the next project. So pausing the animation pauses the rotation:
  keyboard focus inside the frame (`data-ac-hold`, set by `lib/rotation.ts`), or the
  section out of view (no `data-ac-in`). The mouse doesn't pause it; it keeps turning with
  the pointer resting on it.
- **Choosing** a project moves the ring to it, so the timer starts over from there and the
  rotation carries on.
- **No layout movement:** every project's details open to the tallest one's height,
  measured into `--ac-case-details-h` (re-measured on resize and after fonts load). On
  desktop the open row also takes up whatever height the image leaves over.
- **Image:** crossfade with a slow settle from 1.06 scale; the tag chip and the "01 / 04"
  counter ride on it.
- **Reduced motion:** no rotation, no transitions.
- **Accessibility:** each name is an `h3 > button` with `aria-expanded` and
  `aria-controls`; closed details are `inert`. The image column is decorative
  (`aria-hidden`).

## Copy and images

GunLox's summary and stack are the brief's; the other three are condensed from JumpGrowth's
own project write-ups (`src/lib/projects.ts`). Each image is its video's poster frame.
"View case study" links to the project's card on the Case Studies page,
`/case-studies/#<slug>` (through `withBase()`); see `company-pages.md`.
It is drawn 42px tall; on touch screens a transparent `::before` makes the target 44.
Images are served up to their full 1600px width.
