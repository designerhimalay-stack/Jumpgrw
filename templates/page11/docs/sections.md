# UX/UI designers: sections

This page's sections, in page order, after the hero. Each one is designed for this page
alone, apart from the FAQ and the close, which are the same on every AgentCraft page. Copy lives in `src/pages/index.astro`,
styles in the Page 11 block of `src/styles/globals.css`.

## The frame every page shares

- **Layout:** `Layout` with `navTone="field"`, so the navbar is dark over the hero from the
  first frame; `PageHero`'s script then follows the scroll (dark over the hero, light
  after).
- **FAQ:** `FaqSection`, the same on every AgentCraft page: header, button and a photo in
  a sticky column on the left, the questions as an accordion (native `<details>`, one open
  at a time) on the right. Each page passes its own questions and photo.
- **Close:** `CtaSection`, the same on every AgentCraft page: the accent band with the
  drafting compass, running straight into the footer. Each page passes its own text.
- **Hero:** `PageHero`, the same on every AgentCraft page: breadcrumb, two-tone name,
  lede and buttons on the left, the framed photo on the right, four spec cells along the
  foot.
- **Links:** the navbar and footer link to the home page's sections and the other pages on
  the main site (`SITE_URL`, `sectionHref()` and `pageHref()` in `src/lib/paths.ts`);
  `#contact` and `#top` stay on this page.
- **Grammar:** every section sets `data-ac-sec` (light, dark, accent), draws the column
  rules with `GridRules`, marks frame corners with `Joints`, and plays its entrance on
  `data-ac-in` (`src/lib/in-view.ts`), reversibly. Headlines are two-tone and fill in per
  character (`RevealText`).
- **Nothing moves the page:** anything that changes while the reader is on the page keeps
  one size (all states share one grid cell, or space is reserved).
- **Motion:** every animation has a `prefers-reduced-motion` rule; loops pause off screen.
- **Phones and tablets:** every section has its own compact layout up to 991px and again
  below 600px, built to cut scrolling. See the page's block in `src/styles/globals.css`.

## Sections

### TokensSection

`src/components/TokensSection.astro`, `#tokens`, dark. Columns 1–2: the design tokens in
four groups (colour swatches, type scale, spacing, radius). Columns 3–4: an artboard with a
card component, first a grey wireframe. As the section plays, each group lights and is
applied in turn, 1.2s apart: colour fills the card and its button, the type scale
replaces the monospace placeholder text, the spacing opens the cramped layout out (pink
redlines show 24 and 16 while it happens), and the corners round (a marker shows 12). Then
"Built from 16 tokens" shows. A Replay button runs it again; it resets when the section
leaves. Nothing changes size: the card's final layout is fixed, wireframe and set text
share one grid cell, and the cramped spacing is drawn with transforms. Without the script,
or under reduced motion, the finished card shows. Phones: slimmer token rows (no hints), a
shorter card, Replay beside the artboard label.

### ResearchSection

`src/components/ResearchSection.astro`, `#research`, light. Columns 1–3: a wall of twelve
sticky notes, scattered and tilted before the section arrives; on arrival they travel into
three clusters of four under theme labels (affinity mapping), and scatter again when it
leaves. Column 4: a photo of a designer mapping a flow on a whiteboard. Positions are
transforms in container-query units on a wall of fixed height. The sorted wall is also
in the markup as a list for screen readers. Without the script, or under reduced motion,
the sorted wall shows. Tablets and phones put the photo above; phones sort the notes into
three theme rows of four.

### CanvasSection

`src/components/CanvasSection.astro`, `#toolbelt`, dark. A design-canvas window: a slim
toolbar (tools, page name, two avatars, zoom) over a dot grid, with eight named frames,
one per tool (Figma, Framer, Storybook, Webflow, Miro, Sketch, Maze, Dovetail), each an
artboard holding the logo and what the designers use it for. Two named cursors glide from
frame to frame along their own paths every 2.6s, selecting each frame (outline and
handles in the cursor's colour); the tag flips left near the right edge. Cursor positions
are measured from the frames, so they work on any layout. The loop runs only while the
canvas is on screen; under reduced motion the cursors rest on their first frames.
Desktop places frames freely (`at`: left %, top %, width %, height px); tablets lay them on
a four-column grid, phones on two.

### AccessSection

`src/components/AccessSection.astro`, `#accessible`, light. The header splits around a
photo of two designers at a laptop. Under it, columns 1–2: a three-way switch (As designed,
Low vision, Colour blind; buttons with `aria-pressed`) over a small interface drawn in the
page's colour pairs. Columns 3–4: each pair with its contrast ratio and AA / AAA badges.
Ratios are worked out from the colours at build time (WCAG 2 luminance) and again through
a deuteranopia simulation (Machado 2009, the same matrix as the preview's SVG filter), so
the colour-blind view shows its own real figures. Low vision blurs the preview. Every
reading shares one grid cell. Without the script the design shows as made. Phones drop the
preview's window bar and slim the rows.

### FaqSection

`src/components/FaqSection.astro`. The shared FAQ: four questions about working with the
designers, and a photo of a team sorting sticky notes on a glass wall.

### CtaSection

`src/components/CtaSection.astro`. The shared close, on the accent.

## Photos

| File | Unsplash ID | What it shows |
|---|---|---|
| `src/assets/pages/p11-hero.jpg` | `ARW7Ic7MSAM` (photo 1542744095-0d53267d353e) | A designer at a web layout, colour swatches printed beside her laptop |
| `src/assets/pages/p11-whiteboard.jpg` | `--kQ4tBklJI` (photo 1542744094-24638eff58bb) | A designer maps a user flow on a whiteboard |
| `src/assets/pages/p11-review.jpg` | `whfkAvWoM7s` (photo 1752650735501-633d9d5d2b3b) | Two designers review a screen together at a laptop |
| `src/assets/pages/p11-faq.jpg` | `euNzbqwIIUI` (photo 1758691736934-e5d6d0c7f875) | A team sorts sticky notes on a glass wall |

All under the Unsplash License. Logos: Simple Icons (CC0), see `THIRD_PARTY_NOTICES.md`:
Figma, Framer, Sketch, Miro, Storybook, Webflow, Maze, Dovetail, Lighthouse.

## Copy to check before launch

- The token values (colours, type sizes, spacing, radii) are the page's own palette, drawn
  as an example system; "Built from 16 tokens" counts them.
- The research notes and themes are illustrative.
- The tool notes on the canvas and the cursor names (Maya, Leo) are illustrative.
- The contrast ratios are computed, not typed; check the four colour pairs are the ones
  you want to show. "Checked with Lighthouse and by hand" is a claim about process.
- The FAQ answers.
