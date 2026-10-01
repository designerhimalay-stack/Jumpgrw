# GCC from India: sections

This page's sections, in page order, after the hero. Each one is designed for this page
alone, apart from the FAQ and the close, which are the same on every AgentCraft page. Copy lives in `src/pages/index.astro`,
styles in the Page 34 block of `src/styles/globals.css`.

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

### RampSection

`src/components/RampSection.astro`, `id="ramp"`, light. The ramp to scale. One frame on a grey band: a counter (people in the center, and the month) over a plot of headcount against months 0–18, drawn as a stepped line with a tinted area under it, gridlines at the headcounts that matter (25, 80, 150) and a dashed line every three months. Numbered dots sit on the line at each milestone; under the plot a rail sets the milestones at their months on two alternating rows (entity, leadership, office, first pods, scale, transfer option), each with a short note. As the frame arrives the line is uncovered left to right by a `clip-path` (nothing moves), the dots and milestones light as the line passes them, and the counter runs 0 → 150 in step (requestAnimationFrame); leaving resets it. The SVG stretches to the plot with a non-scaling stroke; dots and labels are HTML placed by percentage, so text never scales. Without the script, or under reduced motion, the finished ramp shows (the hidden start is under `@media (scripting: enabled)`). Tablet: the milestones as a three-column list. Phone: a 190px plot, the milestones in two columns.

### CitiesSection

`src/components/CitiesSection.astro`, `id="cities"`, dark. Choose the city. The header splits around a photo of a team meeting in Bengaluru. Under it one frame: on the left the four cities (Bengaluru, Hyderabad, Pune, Chennai) as ARIA tabs (arrow keys, Home, End) over the chosen city's case (name, a line, what it suits); on the right a strip per measure (tech talent pool, engineer cost indexed to Bengaluru, office rent, weeks to hire a senior), each a scale carrying all four cities as dots. The chosen city's dots grow, take the accent and show their values; the other three stay small and grey, so each choice reads against the field. Every dot is placed at build time and keeps its place; choosing changes only colour, size and which value shows, and the panels share one grid cell (hidden ones keep their space). The strips are hidden from screen readers; each panel carries the same figures as a visually hidden list. Dots grow in on the entrance. Without the script Bengaluru shows. Tablet: the two halves stacked. Phone: names only on the tabs, each strip's ends ("Lower → Higher") on its label's row, a 120px photo.

### ModelSection

`src/components/ModelSection.astro`, `id="model"`, light. The operating model as an org view that assembles, on a grey band with a fine drafting grid. Your leadership at the top (CTO, VP Engineering, Product); a line down to the GCC head in India (the accent card); site operations, run by us (HR, payroll, IT, facilities), branching off to the side in a dashed card; then a bus line feeding four pods (product engineering, data & AI, platform, quality), each with its lead, its size and the logos of the stack it works in on small tiles. As the frame arrives the tiers drop in from the top and the lines draw between them in order; leaving plays it back. Logos: React, TypeScript, Node.js, Python, Databricks, Snowflake, Kubernetes, Terraform, Google Cloud, Cypress, Selenium, GitHub Actions (`src/lib/tech-logos.ts`, Simple Icons). Tablet: operations beside the head, pods two by two under a rule. Phone: head and operations stacked full width (operations without its chips), pods two by two.

### HandledSection

`src/components/HandledSection.astro`, `id="handled"`, dark. What we handle, as paperwork. The header splits around a photo of a director at her desk in New Delhi. Under it six paper forms in a three-by-two grid (legal entity, payroll & benefits, compliance, workspace, hiring, IT & security), each with a form label and number, a title, a line of what it covers, ruled fill-in lines and, where tools are involved, their logos with names: Zoho, Razorpay (payroll); Zoom, Google Meet (workspace); Greenhouse (hiring); Okta, 1Password, Tailscale (IT & security). As the section arrives a "Handled" rubber stamp comes down on each form in turn, too large at first and settling at a slight angle; leaving lifts them. The stamps are drawn in place from the start and only scale and fade, so nothing moves. Under the forms, a framed line of what you keep (who you hire, the budget, the roadmap). Tablet: two forms a row. Phone: two a row, no ruled lines, logos without names (kept for screen readers), the stamp in the form number's place.

### FaqSection

`src/components/FaqSection.astro`, the shared FAQ, with four questions: how a GCC differs from outsourcing, when you can take it over, who leads it, and what it costs to start.

### CtaSection

`src/components/CtaSection.astro`, the shared close: "Your center. Your terms."

## Photos

Every person shown is in India: each photo's own Unsplash title, description or location names India or an Indian city.

| File | Unsplash ID | What it shows | Tie to India (from the photo's Unsplash page) |
|---|---|---|---|
| `src/assets/pages/p34-hero.jpg` | `n3tWVsKjcn0` (photo 1630821816375-248e9e483742) | An engineer in headphones and glasses at his desk (hero) | Location: Urban Estate Phase I, Jalandhar, Punjab, India; tag india |
| `src/assets/pages/p34-team.jpg` | `cW4lLTavU80` (photo 1577962917302-cd874c4e31d2) | A team meeting round a table, one presenting; cropped to the right-hand side (cities) | Description: "Our coworking office space in Bangalore…"; location Bellandur, Bengaluru, Karnataka, India |
| `src/assets/pages/p34-director.jpg` | `7eSLtuTYmbU` (photo 1770626894265-bdb99db109f1) | A director at her desk with a laptop (what we handle) | Description: "… in New Delhi, India"; location Rajouri Garden, New Delhi, Delhi, India |
| `src/assets/pages/p34-faq.jpg` | `ueUYcRPXnXw` (photo 1770627016447-cb9d29ed0398) | An executive in a white blazer at her desk (FAQ) | Description: "… in New Delhi, India"; location Rajouri Garden, New Delhi, Delhi, India |

All under the Unsplash License. The cities photo is cropped from the original (right-hand side, the presenter and table) so the wall mural of country names is left out.

## Copy to check before launch

- The ramp: 4 people by month 2, 10 by month 4, 25 by month 6, 50, 80 by month 12, 115, 150 by month 18; the milestone notes ("GCC head and 3 leads", "Seats for the first 40", "25 people, 3 pods", "80 people, 7 pods"). An example plan; the note says so.
- City figures: talent pools (~2M, ~1M, ~0.7M, ~0.8M), engineer cost index (100, 93, 91, 88), Grade-A office rent (₹95, ₹75, ₹80, ₹70 per sq ft a month), weeks to hire a senior (7, 5, 6, 5), and each city's line and strengths. Rounded planning estimates, to confirm.
- Pod sizes (8–12, 6–10, 5–8, 4–6 people) and pod stacks.
- The tools named on the forms (Zoho, Razorpay, Zoom, Google Meet, Greenhouse, Okta, 1Password, Tailscale): confirm these are what the team actually uses.
- Hero specs ("150 people in 18 months", "Yours, when ready").
- FAQ answers are drafts, especially the take-over timing ("often after two or three years") and the cost model (set-up fee, then cost plus a management fee).
