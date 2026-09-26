# FaqSection

"Straight answers about building your team." The header holds on the left while the
questions scroll past on the right.

- **Files:** `src/components/FaqSection.astro`, the FAQ block in `globals.css`
- **Interaction model:** click / keyboard per question; no script beyond the entrance.

## Layout

Columns 1–2: "+ Frequently asked / 07", the headline over three lines ("your team." in the
accent), and the brief's dark
"Ask a team specialist" button (square, like ours; brand accent, darker accent on hover, as the navbar's); sticky under the navbar. Columns 3–4:
the questions in a drafting frame, each with a number, the question in the display face,
and a round "+" that turns to a "×" (our eyebrow mark). Below 992 it stacks and the
header stops sticking.

## Behaviour

Native `<details name="faq">`: one answer open at a time, keyboard and screen readers for
free, and it works without JavaScript. The first is open on load. Where the browser
supports `interpolate-size` and `::details-content` (Chromium), the answer eases open;
elsewhere it simply appears. The open question gets the accent rule on its leading edge.

## Copy

Questions are the brief's. The answers are **drafts** written from what the page already
says (the "2 wks to first commit" stat, the team models, X-Shore, the Dallas HQ); have them
checked before launch. The button links to `/contact`, which doesn't exist yet.
