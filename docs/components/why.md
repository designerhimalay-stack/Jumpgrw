# WhySection

Why AgentCraft: three reasons in a row on our columns, with the first one over a photo of
people at work.

- **Files:** `src/components/WhySection.astro`, the Why AgentCraft block in `globals.css`,
  `src/assets/why/people.jpg`
- **Interaction model:** hover per cell; viewport-driven entrance.

## Layout

Header: "+ Why AgentCraft" on the left and the lede ("Experienced people, flexible team
design, and one accountable delivery system.") on the right of the same row. No display
headline: the lead cell's title plays that part, as in the brief.

Each title is two-tone like the section headlines, its closing phrase in the accent:
"Product builders, / not a stack of résumés", "AI-assisted / execution", "Flexible /
X-shore teams" (`title: [ink, accent]` in `WhySection.astro`).

Frame: **01 People** spans columns 1–2 over the photo, inked from the floor up so the copy
reads, with a square accent icon tile. **02 Leverage** and **03 Coverage** are one column
each: a tinted icon tile and label at the top, title and body on the floor. Below 1200,
People goes full width over the other two; below 768 everything stacks.

## Behaviour

Hover draws a 3px accent rule along the cell's floor from the right (the brief's bars),
tips and fills the icon tile, and settles the People photo in slightly. Cell contents rise
in on arrival, staggered. Hyphenated words in titles are kept whole so "X-shore" and
"AI-assisted" don't split at the hyphen. Reduced motion: no transitions.

## Copy and image

All copy is the brief's. The photo is an Unsplash stand-in (1531482615713-2afd69097998,
Unsplash License).
