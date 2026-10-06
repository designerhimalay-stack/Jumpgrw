# XShoreSection

"One team. Three talent regions." The three delivery regions beside four live location
tiles: one working day across time zones.

- **Files:** `src/components/XShoreSection.astro`, `src/lib/timezones.ts`, the X-Shore
  block in `globals.css`, `src/assets/xshore/zone-{us,canada,mexico,india}.jpg`
- **Interaction model:** time-driven (clocks, tiles, working dots and the summary redraw
  every 30s), viewport-driven entrance (reversible on `data-ac-in`), hover tint on a region.

## Layout

Header as every other section: "+ X-Shore delivery", the headline one sentence per line with
the second in `--color-accent`, the lede in columns 2–3. Below, one drafting frame across
all four columns, split on the third rule: a caption row ("One operating rhythm · Multiple
time zones", plus a live Dallas clock with a slow ping), the four location tiles on the
left spanning the three rows, and the three regions stacked on the right. Below 1200
everything stacks. Below 810 the caption row sets "One operating rhythm" and "Multiple time
zones" on a line each, without the dot, and the clock under them.

## The four locations

A 2 × 2 square of tiles — United States, Canada, Mexico, India — that sets the height the
three regions share (`1fr` rows); it grows taller, never wider, when the regions need more.
Each tile is a photo with its region and a Working / Off hours pill on top, and the place,
its live local time, a day bar (midnight to midnight, the 9–6 shift lit, a dot for now) and
a note ("Day ends in 8h" / "Back in 12h 30m") below. Off hours, the photo dims to grey.
India shows "IST", since en-US has no short name for it.

Under the tiles, a strip of what the four add up to: teams working now, how many of the
next 24 hours at least one team is on (in quarter-hour steps), and which team starts next.

Region clocks: Dallas (onshore); Toronto and Mexico City (nearshore); Delhi and Pune
(offshore).

## Clocks

`src/lib/timezones.ts` formats each zone's local time, says whether it is inside a 9 AM to
6 PM day (`WORK_START`/`WORK_END`), and computes each tile's state and the summary
(`tileState`, `tilesSummary`). It is used both at build time, so the page renders complete
without scripts, and by the live script, so the two can't drift. Offsets come from `Intl`,
so daylight saving is always current. The day bar's lit shift is fixed in CSS at 9:00–18:00;
change it with the constants.

## Photographs

Unsplash License (free, no attribution required): US `1552664730-d307ca884978`, Canada
`1531482615713-2afd69097998`, Mexico `1522071820081-009f0129c71c`, India
`1504384764586-bb4cdc1707b0`.

## Copy

Region copy is the brief's, verbatim.
