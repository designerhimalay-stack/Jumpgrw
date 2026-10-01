# Nearshore engineers, Canada: sections

This page's sections, in page order, after the hero. Each one is designed for this page
alone, apart from the FAQ and the close, which are the same on every AgentCraft page. Copy lives in `src/pages/index.astro`,
styles in the Page 32 block of `src/styles/globals.css`.

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

### FlightsSection (`#flights`)

`src/components/FlightsSection.astro`. A short flight away, on the dark tone. A map frame with three hub buttons (Toronto, Vancouver, Montréal; `aria-pressed`): picking one redraws the arcs from that hub to US cities with their flight times, and a plane runs along them. Beside the map, a photo of an engineer in Montréal and the list of nonstop times from the chosen hub; every hub's list shares one grid cell, so nothing moves. Tablet: the photo and list sit under the map. Phone: the hub buttons and the times, the map left out (its labels cannot be read at that size).

### BilingualSection (`#bilingual`)

`src/components/BilingualSection.astro`. English and French, on one switch. Columns 1–2: a photo of developers in Québec City and two points (built in both, ready for Québec). Columns 3–4: a small sign-in screen drawn in CSS with an EN / FR switch (native radios); flipping it turns every string over like a card. Both languages share one cell, so nothing moves, and it works without a script. Phone: a short photo and a tighter screen (one field).

### MosaicSection (`#people`)

`src/components/MosaicSection.astro`. The people, as a mosaic, on the dark tone. Four photos of engineers in Toronto, Vancouver and Montréal, each captioned with a role and city, interleave with three specialty tiles (web and mobile, cloud and platform, data and AI) carrying their skills. The tiles swing open in turn as the section arrives. Phone: two columns of short tiles; specialties keep title and skills.

### FrostSection (`#stack`)

`src/components/FrostSection.astro`. The stack through a winter window. A four-pane window drawn in elevation (double frame, glazing bars, the glass hatch, a sill carrying the footnote), under a small note ("Toronto · 8:40 a.m. · −14 °C"). One area per pane (web and mobile; back end and APIs; data and AI; cloud and DevOps), each with four real logos and a one-line note: React, Next.js, Swift, Kotlin; Node.js, Python, Spring, GraphQL; PostgreSQL, MongoDB, PyTorch, TensorFlow; Docker, Kubernetes, Terraform, Google Cloud (Simple Icons). As the section arrives, the frost on each pane (a white veil with ferns of ice, an SVG masked by a registered `--ac-melt` radius) melts from the middle out, pane by pane, and stays feathered in the corners; it returns when the section leaves. The script arms the frost, so without it the logos are simply clear; with reduced motion it clears at once. Not interactive: the panes are plain lists. AWS and Azure are named in text only. Tablet: logos two a row beside their names. Phone: the panes stacked, two logos a row, notes left out.

### PassSection (`#how`)

`src/components/PassSection.astro`. How it works, as a boarding pass, on the dark tone. The stub holds a photo of an engineer in Toronto and the trip (from Canada, to your team, senior class, a full US day of overlap). Five legs follow: check-in (discovery call), seat (pick the model), boarding (pre-vetted profiles), gate (interview and select) and take-off (onboard and kick off), each with its week; a "Cleared" stamp lands on each leg in turn. Phone: the legs two by two, each its gate, step and week.

### FaqSection

`src/components/FaqSection.astro`. Four Canada questions beside a photo of an engineer at her desk in Toronto. Native `<details>` sharing one name. The answers are drafts.

### CtaSection

`src/components/CtaSection.astro`. The shared close, with this page's copy.

## Photos

Every photo is of people working in Canada: each one's Unsplash page names a Canadian city as its location.

| File | Unsplash ID | Photo id | What it shows | Tie to Canada |
|---|---|---|---|---|
| `src/assets/pages/p32-hero.jpg` | _kf2Z44k7Ng | 1517701221265-7da25447217b | An engineer at a laptop by a tall window | Location: Ottawa, Canada |
| `src/assets/pages/p32-flights.jpg` | KPBG8BaKJQ4 | 1461701204332-2aa3db5b20c8 | An engineer working in an open office ("Working in open office space") | Location: Rue Saint-Jacques, Montréal, Canada |
| `src/assets/pages/p32-bilingual.jpg` | AxAPuIRWHGk | 1574790398664-0cb03682ed1c | Developers at a row of screens | Location: Boulevard Charest Est, Québec, QC, Canada |
| `src/assets/pages/p32-dev-toronto.jpg` | zSpGWzwRFas | 1557425507-57dd2cafc241 | A developer facing a monitor | Location: Toronto, Canada ("…in Toronto, Canada") |
| `src/assets/pages/p32-dev-vancouver.jpg` | ElELSfycRvw | 1688578735997-32626d2babd4 | An engineer at a desk with a computer | Location: Vancouver, BC, Canada |
| `src/assets/pages/p32-dev-montreal.jpg` | pjAH2Ax4uWk | 1511376777868-611b54f68947 | A developer facing a desktop screen | Location: Rue Saint-Jacques, Montréal, Canada |
| `src/assets/pages/p32-dev-liberty.jpg` | xLBNRz5Fy78 | 1569347345215-ed9792fc35e8 | An engineer working on a laptop | Location: Liberty Village, Toronto, ON, Canada |
| `src/assets/pages/p32-pass.jpg` | fXVx1opWGxM | 1557425747-929b65a39785 | An engineer smiling in a team meeting | Location: Toronto, Canada ("…in Toronto, Canada") |
| `src/assets/pages/p32-faq-toronto.jpg` | kDCFzh7DxG0 | 1581629736537-72102ba45fa3 | An engineer at her desk by a tall window ("Woman in black shirt sitting at the table") | Location: Toronto, ON, Canada |

All under the Unsplash License.

## Copy to check before launch

- Flight times are approximate nonstop times; check them, and that the routes shown are flown.
- The hubs (Toronto, Vancouver, Montréal) and the roles and cities in the mosaic are examples.
- The French strings on the bilingual screen: have a native speaker check them.
- The window note (Toronto, 8:40 a.m., −14 °C) is illustrative.
- The process weeks (day 1 to week 3) and the overlap claim.
- The FAQ answers are drafts.
