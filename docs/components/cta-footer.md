# CtaSection and Footer

The close: a call to action on the accent, then the footer.

- **Files:** `src/components/CtaSection.astro`, `src/components/Footer.astro`, the Call to
  action and footer blocks in `globals.css`

## CtaSection (`#contact`)

"+ Ready when you are", "Let’s assemble the team / behind your next release." (the second
line in the page's navy ink, the two-tone headline turned over for the accent band) in white on
`--color-accent`, the brief's body and a white "Plan my team" button in column 4. Behind the
copy, a drafting compass in place of the brief's plain circles: concentric circles on a
crosshair, one dashed ring turning once a minute (still under reduced motion). The button
links to `/contact`, which doesn't exist yet. The navbar's "Build your team" lands here.

## Footer

The sign-off "THE TEAM BEHIND THE BUILD." in Outfit caps, one line sized to the columns
("The team" in the accent), filling per character on arrival; phones let it wrap. At ≤479
the columns become brand across the top, the two link lists side by side, and the address
last, the right-hand list without end padding so "Specialist developers" stays on one line
and the two lists' rows stay level down to 360px; at ≤809 every footer link is a 44px row,
and "Back to top" is a 44px target on any touch screen. Then the
four-column grid: the wordmark with the page's own line ("AI adds speed. People own the
outcome."), Quick links, Headquarters, and Team models, then © and "Back to top".

The © year is written at build time and set again from the visitor's clock on load, so it
is never a year behind. The sign-off is read from a visually hidden copy (a `<p>` cannot
carry `aria-label`).

Links go to this page's sections until the other pages exist; "Plan my team" links to
`/contact` through `withBase()`. The address is the brief's
first line; its city was cut off in the screenshot, so "Dallas, TX" is inferred from the
navbar. Confirm it.
