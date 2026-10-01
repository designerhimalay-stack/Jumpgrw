# Nearshore engineers, Mexico: sections

This page's sections, in page order, after the hero. Each one is designed for this page
alone, apart from the FAQ and the close, which are the same on every AgentCraft page. Copy lives in `src/pages/index.astro`,
styles in the Page 31 block of `src/styles/globals.css`.

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

### StackSection (`#stack`)

`src/components/StackSection.astro`. The stack, as a type case, on the light tone. One frame split into five drawers (foundation models, ML and data toolkit, agents and retrieval, MLOps and cloud, app and dev tools). Column 1 numbers and counts each drawer; columns 2–4 hold eight compartments, each a logo in its brand colour, the unused ones hatched. The compartments drop in drawer by drawer as the section arrives. Tools with no logo we may draw (OpenAI GPT, LlamaIndex, Pinecone, AWS, Azure) are set as a dashed lettered block with their name. Tablet: the label sits over its row of eight. Phone: each drawer is one line of logos, names kept for screen readers.

### FanSection (`#ways`)

`src/components/FanSection.astro`. Ways to work together, as a swatch fan, on the dark tone. The headline spans the top. On the left, a framed photo of two people at a laptop, with "You stay in control" set into its foot. On the right, the three engagement models (staff augmentation, augmented squad, managed delivery pod) are white swatch cards pinned on one bolt, each swatch a deeper blue as the team grows, with the team size set large (1, 2–4, 5–8), the title, one line and the skills. A picker above the deck (native radios: arrow keys work, and it runs on CSS alone without the script) brings the chosen card upright to the front while the others fan out behind it in shade; clicking a card behind does the same. The deck opens from a closed stack as the section arrives (without the script it is simply open). Every card shares one grid cell and the deck has fixed padding for the turned corners, so nothing moves. Tablet: the photo across the top, the picker and fan under it. Phone: the photo a short strip with the control line under it, the picker in three short cells, a smaller fan that turns less.

### EquationSection (`#capacity`)

`src/components/EquationSection.astro`. Capacity, as a sum, on the light tone: $125 an hour × 160 hours × team = the month, the answer on the accent. A rail of twelve team sizes under it (native radios, so arrow keys work; the fill up to the choice is pure CSS). The script only rewrites the team and the total; every figure has a reserved width. It starts at 3 engineers ($60,000) and says it is directional, not a quote. Phone: the terms on one line, the rail in two rows of six.

### RolesSection (`#roles`)

`src/components/RolesSection.astro`. The roles, as a wall of engineer cards, on the dark tone. Filter buttons (All, NLP & GenAI, Computer vision, Data & ML, MLOps & LLMOps; `aria-pressed`) under the header; six cards, each a bench of the role's four main tools (real logos on white tiles, two by two, over a fine grid) beside the role, its purpose and skills. Filtering greys the others out rather than removing them, so the wall never changes height. Without the script all cards stay lit. Phone: the filters slide sideways; each card is a small bench beside the title and two skills.

### SpinesSection (`#how`)

`src/components/SpinesSection.astro`. How it works, as spines on a shelf, on the light tone. Five steps stand side by side as narrow spines, number and name set upright; the chosen one opens wide (tabs with arrow-key support) to its detail, with five rising bars filled up to the chosen step. The frame keeps one size; opening a spine only shares out the width. Under it, "A good fit when you" in four lines. Phone: five numbered buttons over one detail panel, every panel in the same grid cell.

### DossierSection (`#examples`)

`src/components/DossierSection.astro`. How teams use us, as three dossiers, on the dark tone. The header splits around a photo of a developer at work. Each file is stamped "Example"; the client's name is covered by a redaction bar that draws across on arrival, then the sector, the team, its roles and two results set large. A footnote says results are examples, not guarantees. Tablet and phone: the files slide sideways.

### FaqSection

`src/components/FaqSection.astro`. Four questions on engagement, interviews, controls and scaling. Native `<details>` sharing one name, beside a photo of a developer at work.

### CtaSection

`src/components/CtaSection.astro`. The shared close, with this page's copy.

## Photos

The owner's rule: only people in Mexico, confirmed by the photo's Unsplash title, description or location naming Mexico or a Mexican city. Free Unsplash photos of people at work that pass this test are rare (most Mexico-labelled office photos are Unsplash+, which is not royalty-free), so the role cards carry each role's tool logos instead of portraits.

| File | Unsplash ID | Photo id | What it shows | Tie to Mexico |
|---|---|---|---|---|
| `src/assets/pages/p31-hero.jpg` | wvIDhB99jKM | 1603418242909-2eaeeea04c40 | Two engineers working through a problem on one laptop | Location: Playa del Carmen, Quintana Roo, Mexico; description "…group working in Playa del Carmen, Mexico" |
| `src/assets/pages/p31-team.jpg` | Q5RBHz9cu1A | 1612550761236-e813928f7271 | Two people talking through a project at a laptop | Location: Universidad Anáhuac Cancún, Cancún, Quintana Roo, México; description "two students talk about projects" |
| `src/assets/pages/p31-examples.jpg` | 1oQ4oigftZ4 | 1603418457605-8c16afc76f8e | A developer working at a laptop on a terrace | Description "…remote work … in Playa del Carmen, Mexico" |
| `src/assets/pages/p31-faq.jpg` | 68U5GBCtuEU | 1588865876768-f9e265a1d38f | A developer at a laptop | Location: Tijuana, B.C., México; description "…in Tijuana, México" |

All under the Unsplash License.

## Copy to check before launch

- The planning rate ($125 an hour, 160 hours a month) and the totals it produces: directional, not a quote.
- The three example dossiers and their results (87%, 61%, 6×, 43%) are examples; confirm them or mark them as illustrative.
- The engagement sizes (1, 2 to 4, 5 to 8 engineers), the roles and their tools.
- The FAQ answers are drafts.
