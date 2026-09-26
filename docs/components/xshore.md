# XShoreSection

"One team. Three talent regions." The three delivery regions beside the brief's photo of
one working day across time zones.

- **Files:** `src/components/XShoreSection.astro`, `src/lib/timezones.ts`, the X-Shore
  block in `globals.css`, `src/assets/xshore/time-zones.jpg`
- **Interaction model:** time-driven (clocks and working dots redraw every 30s),
  viewport-driven entrance (reversible on `data-ac-in`), hover tint on a region.

## Layout

Header as every other section: "+ X-Shore delivery", the headline one sentence per line with
the second in `--color-accent`, the lede in columns 2–3. Below, one drafting frame across
all four columns, split on the third rule: a caption row ("One operating rhythm · Multiple
time zones", plus a live Dallas clock with a slow ping), the photo on the left spanning the
three rows, and the three regions stacked on the right. Below 1200 everything stacks. Below 810 the caption row sets "One operating rhythm" and
"Multiple time zones" on a line each, without the dot, and the clock under them.

## The photo

The brief's image (SF, London, Bengaluru, Tokyo), converted from PNG to JPEG. It keeps its
square with a padding sizer and sets the height the three regions share (`1fr` rows).
Where the regions need a little more, it crops from the centre; the captions baked into
its four corners survive down to 1200. The regions are compact for that reason: the
number sits inline with the label, the live clock chips share the label's row, and title
and body settle on the cell's floor.

The image carries its own "One operating rhythm · Multiple time zones" banner, which
repeats the frame's caption row. Drop one of them if that reads as doubled.

## Clocks

`src/lib/timezones.ts` formats each zone's local time and says whether it is inside a
9 AM to 6 PM day. It is used both at build time, so the page renders complete without
scripts, and by the live script, so the two can't drift. Offsets come from `Intl`, so
daylight saving is always current.

The chart that stood here before (24-hour working-day bars, overlaps, a now line) was
replaced by the photo at the brief's request.

## Copy

Region copy is the brief's, verbatim.
