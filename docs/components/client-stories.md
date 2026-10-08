# ClientStoriesSection

"Teams that bring products to life." One client at a time: a portrait, the quote, who
said it, and a strip of all seven clients whose bars time the rotation. A carousel rather
than another list, so it doesn't repeat the case studies above it.

- **Files:** `src/components/ClientStoriesSection.astro` and the Client stories block in
  `globals.css`. Each story's picture is its video's thumbnail; the earlier portrait
  photos (`src/assets/clients/`) were removed once nothing used them.
- **Interaction model:** time-driven rotation; prev/next and client tabs; viewport-gated.

## Layout

Header: "+ Client stories / 07", "Teams that bring / products to life." (the second line in
the accent), and the controls
(prev, "01 / 07", next) hanging off the last column onto the frame's top edge, as the
brief's arrows sit on its frame. Frame: portrait in column 1 (4:5 at least), quote in
columns 2–4 (accent quote mark, the quote in the display face, then name, role and "Read
case study"), and the client strip across all four columns. The strip scrolls sideways
when seven tabs don't fit and keeps the open one in view. Phones stack portrait over quote, the portrait cut to 72% of its width so the quote starts
inside the section's first screen; "Read case study" gets a 44px tap height there and on
any touch screen.

## Behaviour

- **Rotation:** the open tab's top bar fills over `--ac-story-duration` (8s) and its
  `animationend` turns the carousel. It pauses under keyboard focus in the frame
  (`data-ac-hold`, set by `lib/rotation.ts`) and while the section is out of view; the
  mouse doesn't pause it.
- **Prev/next or a tab** opens that story and moves the bar to its tab, so the timer starts
  over from there. While keyboard focus holds the rotation the deck's `aria-live` is
  `polite`, so changes someone makes are announced; otherwise it is `off`.
- All seven quotes stack in one grid cell, so the deck is as tall as the longest.
- **Reduced motion:** no rotation, no transitions.
- **Accessibility:** the frame is a labelled carousel region, each quote a `div` with
  `role="group"` and `aria-roledescription="slide"`, labelled "n of 7: Client" (a
  `<figure>` may not take that role); hidden slides are `visibility: hidden`; tabs carry
  `aria-current`.

## Copy and images

Ethnomet's quote and attribution (Mike Amanyi, Chief Product Officer) are the brief's.
The other six quotes and roles are **placeholders**, attributed by role only; replace them
with approved testimonials. Every portrait is an Unsplash stand-in (Unsplash License),
Ethnomet's for the brief's video still: 1531384441138-2736e62e0919,
1507152832244-10d45c7eda57, 1560250097-0b93528c311a, 1508214751196-bcfd4ca60f91,
1531427186611-ecfd6d936c79, 1544005313-94ddf0286df2, 1566492031773-4f4e44671857.
