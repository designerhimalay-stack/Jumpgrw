# ShowcaseSection

Four team models after ProcessSection. Columns 1–2: "01 MVP Team", a framed 2 × 2 of a
Developer card, an AI tools card and a tall portrait. Columns 3–4: "02 Production Teams",
"03 Specialist Developers" and "04 Team Extension", stacked.

- **Files:** `src/components/ShowcaseSection.astro`,
  `src/components/showcase/DeveloperSkills.astro`,
  `src/components/showcase/AiToolsOrbit.astro`, `src/assets/showcase/`,
  `src/assets/ai-logos/`, the showcase block in `globals.css`
- **Interaction model:** scroll-driven for the AI tools ring; everything else static.
- **Anchor:** `#teams` (the navbar's Teams menu and the footer's team models land here).

## Header

"+ AI-assisted delivery" over "AI adds speed. / People own the outcome." (the second sentence
in the accent, as X-Shore), set exactly as the
stats and process headers: four columns on the gutter, the display headline one sentence per
line, the eyebrow's rise-and-de-blur and the headline's per-character fill, reversible on
`data-ac-in` (IntersectionObserver, `-10%` margins, as in process). Copy lives in `COPY` in
`ShowcaseSection.astro`.

The container has no top padding: the process section's bottom padding is already the
section gap. Below 810, where process tightens its bottom padding, the container makes up
the difference so the gap stays `--section-gap` at every width.

## Layout

On `--gutter` with the same four columns as `[data-ac-grid-rules]`. At ≥1200 the MVP frame
takes columns 1–2 and the team cards 3–4, so every outer edge lands on a rule and the two
share the third. Below 1200 each spans the full width, edge to edge on the outer rules; below 810 the
cells stack and the portrait is dropped.

The section renders the same `[data-ac-grid-rules]` block as stats and process, always
drawn, so the verticals run on from above.

## The frame

The process lattice's grammar: a square 1.5px `--ac-line`
frame filled white (so the page rules stop at its edge), 1px cell rules, crosshair joints in
each cell's 10px padding (bottom joints only where nothing sits below), and 12px tiles with
the process live-card surface.

A header row spans the top of the frame, "MVP Team" (`COPY.frameTitle`), closed off by the
same 1px cell rule, like the caption bar over the process lattice. Its title takes the
process step titles' level (display face, 500, `clamp(19px, 1.7vw, 24px)`), well below the
section headline. The frame's rows are `auto` for it and `minmax(0, 1fr)` twice for the cards.

## Team cards (columns 3–4)

"02 Production Teams", "03 Specialist Developers", "04 Team Extension" (`TEAMS` in
`ShowcaseSection.astro`), stacked flush in one frame beside MVP Team ("01"), whose right edge
they share. Each is a header row (number in the accent, title at the step-title level; the
same `[data-ac-frame-head]` as MVP Team) over a photo cell and a skills cell that meet on the
fourth column rule. Skills are rows in the Developer card's style on the live-card surface.
The row stretches, so the stack always runs the MVP frame's full height. In the markup the
MVP frame comes first, so the order reads 01 → 04 when they stack below 1200 (photo over
skills below 810). Below 810 both halves stay short: a 2:1 photo, and the skills as chips
that wrap two or three to a line, about 360px a card instead of 490.

Photos (`src/assets/teams/`, cropped to 1440 × 880, served up to 1440w): `production.jpg`
`images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1440&h=880&fit=crop&crop=faces`
(Unsplash License); `specialist.jpg`
Pexels 1181677 by Christina Morillo and `extension.jpg` Pexels 7988757 by Mikhail Nilov
(Pexels License, free for commercial use, no attribution required), supplied by the team
2026-09-26.

## Developer card

Live markup: a "Developer" header card with a `</>` tile, and five skill cards (Frontend, Backend, DevOps, Databases, Cloud) branching off a dotted trunk, each
with a line icon and a check.

Drawn on a 476 × 410 canvas. `DeveloperSkills.astro` holds the geometry in canvas units and
emits positions as percentages; `globals.css` sizes everything in multiples of `--u`
(`100cqw / 476`), so the drawing scales with its card at every width. The card drops its own
padding because the canvas carries its margins. Five sub-cards take a tight rhythm
(46-unit cards, 12-unit gaps) to stay inside 410.

| | |
|---|---|
| cards | white, radius 11u, 1px `rgb(10 16 34 / 0.1)` ring, soft shadow |
| header tile | 30.7u, `#ededfc` with a `#f3f4fc` inner edge, icon `#613de3` |
| labels | `--font-stack` 500 at 15.3u, `#0f1115` |
| checks | 23u disc `#ededfc`, tick `#613de3` |
| connectors | `#dcdfe9`, 1px, dashed 2.6u / 2.6u, 12u elbows |

## AI tools card

The AI tools the team works with, on a ring that turns as the page scrolls, over a title
and body (`COPY` in `AiToolsOrbit.astro`). Laid out on a 391 × 435 card, sized in `--u`
(`100cqw / 391`) like the Developer card.
Being taller in proportion, it sets the row height; the Developer drawing centres in its
card.

- **Ring:** ten 50u logo discs, 36° apart on a 222u dashed track (`#e3e6ed`), built as five
  rotated diameters with a disc at each end. A 2u white halo breaks the dashes around each
  disc. The stage fades out downward (`mask-image: linear-gradient(#000 36%, transparent
  80%)`), so only the upper arc reads. The logos turn with the ring.
- **Motion — scroll-driven:** 0° → 144° while the card's top travels from 1.518 to 0.05
  viewport heights below the viewport top, 0.109° per pixel on a 900px window. Reduced
  motion, and no script, rest it at 144°.
- **Order:** at 144° the top arc reads Cursor, Gemini, ChatGPT, Claude, GitHub Copilot;
  Perplexity and Mistral sit on the fading ends; Meta Llama, Hugging Face and DeepSeek come
  round as it turns.

## Assets

| File | Source | Licence |
|---|---|---|
| `showcase/portrait.jpg` | Supplied by the team (2026-09-25), stored at 1600×2400 | Record its source here |
| `avatars/avatar-1.jpg` | `images.unsplash.com/photo-1573497019940-1c28c88b4f3e` | Unsplash License |
| `avatars/avatar-2.jpg` | `images.unsplash.com/photo-1507003211169-0a1dd7228f2d` | Unsplash License |
| `avatars/avatar-3.jpg` | `images.unsplash.com/photo-1580489944761-15a19d654956` | Unsplash License |
| `ai-logos/*.svg` | `@lobehub/icons-static-svg` 1.95.1 | MIT (the icon files) |

The avatars are used by the process header's rating row. All three come from
`images.unsplash.com` (the free Unsplash License, commercial use allowed, no attribution
required); Unsplash+ images are served from a different host and none are used.

The AI logos are the LobeHub set, chosen because Simple Icons dropped OpenAI's mark at
OpenAI's request. The icon files are MIT; the marks themselves remain their owners'
trademarks, shown here to name tools the team works with.
