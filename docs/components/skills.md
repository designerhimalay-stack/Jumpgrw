# SkillsSection

The eight roles we staff, as a lattice laid on the page's four columns.

- **Files:** `src/components/SkillsSection.astro`, the Skills block in `globals.css`
- **Interaction model:** hover / focus per cell; viewport-driven entrance.

## Layout

Header: "+ Skills / 08", "Every skill / your product needs." (the second line in the
accent), lede in column 4. Then a 4 × 2
lattice whose lines are the grid's 1px gaps over an opaque rule colour (so the page's own
column rules behind can't double them). 2 columns below 992, 1 below 480. Each cell:
number and arrow, an icon tile, and the role's name on the floor.

## Hover (and keyboard focus)

- A soft accent light follows the pointer (`--mx`/`--my` from the script; centred without it).
- The icon tile fills with the accent and tips −8° with a little overshoot.
- The arrow turns accent and nudges up-right.
- The name slides up as the description opens beneath it (`grid-template-rows` 0fr → 1fr),
  so the cell never changes height.
- The cell's corner crosshairs turn accent.

Touch screens (`hover: none`) just show the descriptions. At ≤479 each role is one row
(icon on the left, number, name and description on the right), as tall as its words
rather than a 250px tile with the name on the floor. Cells rise in on arrival,
staggered by `--i`. Reduced motion: no transitions.

## Copy

Role names and descriptions are the brief's. The headline and lede are ours (placeholders).
Icons are drawn in the Feather style (MIT). Each cell links to `/contact`, which doesn't
exist yet.
