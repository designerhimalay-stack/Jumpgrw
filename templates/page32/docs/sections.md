# Engineers and teams in Canada: sections

This page sells engineers and teams in Canada across the stack: web and front end, mobile,
back end, data, AI/ML, QA, and DevOps and cloud, working in the same or neighbouring time
zones as US teams, in English and French. It follows the Mexico (nearshore) page's
sections, calls to action and order, with its own copy. Every section after the hero,
apart from the FAQ, comes from the shared **hire kit** in `src/components/hire/`, the same
files on every page that sells engineers; each page passes its own copy, photos and roles.
Copy lives in `src/pages/index.astro`, styles in the "Hire sections" block of
`src/styles/globals.css` (tablet rules at 991px with each part, phone rules in the Phone
pass). The kit is used exactly as on the Mexico page; nothing was added to it.

## The frame every page shares

- **Layout:** `Layout` with `navTone="field"`, so the navbar is dark over the hero from the
  first frame; `PageHero`'s script then follows the scroll (dark over the hero, light
  after).
- **FAQ:** `FaqSection`, the same on every AgentCraft page: header, button and a photo in
  a sticky column on the left, the questions as an accordion (native `<details>`, one open
  at a time) on the right. Each page passes its own questions and photo.
- **Close:** `HireContact` replaces `CtaSection` on hire pages: the same accent band,
  with a brief form beside the copy.
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

## The hire kit

`src/components/hire/`. Each section is one component driven only by props (shapes in
`types.ts`); nothing page-specific lives in a component. Each takes `id`, `eyebrow`,
`headline` (one line each), `accent` (defaults to the last line), `lede` and `tone`
(`light`, `tint` for a pale blue ground, or `dark`).

- **Switch** (`HireSwitch.astro`): a visually hidden radio and its label. Services, Why and
  Process build their tab lists from it: arrow keys move the choice, and the CSS shows the
  pane whose `data-ac-hire-pane` matches the checked option, so it works without
  JavaScript. Panes share one grid cell. Up to eight options per switch.
- **Entrances:** every section plays on `data-ac-in` (`toggleInView`) and reverses when it
  leaves; card rows rise in turn; every animation has a reduced-motion rule.
- **Rails:** card rows (ways, engineers, cases) slide sideways under 992px; on phones the
  columns, steps and option lists do too.

## Sections

### Hero (`PageHero`, `#top`)

Unchanged shared hero. "Hire engineers in Canada.", a lede on the skills, hours and
languages, the two calls to action (to `#contact` and `#ways`) and the four proof figures as
specs.

### HireStack (`#stack`, tint)

Tech we use. One framed table, a row per group (web and front end, mobile, back end, data,
AI and ML, QA and testing, DevOps and cloud): the group's name, then its Simple Icons logos in brand
colour on white 12px tiles with their names. Brands with no icon (iOS, React Native, dbt,
Power BI, OpenAI, Playwright, AWS, Azure) are named in dashed text chips. Phone: the logos
lose their names (kept for screen readers) and each group is one line.

### HireServices (`#help`, tint)

Choose the work your team needs. Eight services (the eighth is English and French
products) as options in columns 1–2, the chosen one's
panel in columns 3–4: description, common work and the tools used. Phone: the options become
a chip rail over the panel.

### HireWhy (`#why`)

Why teams choose us. Three reasons as large numbered options beside a detail panel (title,
body, proof points); under them three proof figures and "Talk to our team". Phone: the
reasons are a chip rail; the panel's proof points are left out.

### HireWays (`#ways`)

Ways to work together. Three photo cards (staff augmentation, augmented squad, managed
delivery pod) with the model and team size set on the photo, the title, one line, skills and
"Plan this team shape" (to `#plan`); "You stay in control…" under them.

### HirePlanner (`#plan`, tint)

Team planning view. A native range slider (1–12 engineers, labelled, arrow keys) beside the
cost panel on the ink: one engineer's month ($125 × 160 = $20,000), the selected team's
month, the capacity line, "Build my team plan" and "Planning figures are directional, not a
quote." Every changing number has a reserved width and tabular figures. Without the script
it shows 3 engineers and $60,000. Phone: the capacity strip is left out.

### HireEngineers (`#engineers`, dark)

Find the engineer you need: the heart of the page. Specialty chips (native radios) over seven
engineer cards, four across: a photo of a person at work, years of experience, "Senior
specialty role", the role, who it's for, skill tags and "Discuss this engineering hire".
Filtering dims the others and never changes the wall's size; on a rail it slides to the
first match. Closes with "These are example roles…".

### HireColumns (`#do`)

Get help across your stack. Three framed columns (Build, Data and AI, Platform), each a
title, a line and tags. Phone: a rail.

### HireSteps (`#how`)

How they help. Four numbered steps, one per grid column, each with a focus line; an accent
rule draws across each top. Closes with "Need help with one part of your stack?… Find the
right role" (to `#engineers`). Phone: a rail.

### HireCases (`#cases`)

Real examples. Three case cards: sector, team type, title, what we did, the illustrative
capability mix, tools and two result figures. Footnote: client details private, results are
examples.

### HirePod (`#pod`, dark)

Your pod. Copy, three lead lines and "Talk about your team" beside a pod roster (initials,
role, layer, a tick that checks in on arrival) with Rituals / Ownership / Start. Phone: the
long lede and the layers are left out.

### HireFit (`#fit`, tint)

Is this a good fit? Four numbered statements, one per column. Two by two below 992px.

### HireProcess (`#process`)

How it works. Five steps (Discovery call → Pick the suitable model → Receive pre-vetted
options → Interview & selection → Onboarding & kickoff) as a list, the chosen step's detail
("What we cover" and a link) and its photo with the step number. Phone: five numbered
buttons, a photo strip, then the detail.

### FaqSection (`#faq`)

The shared FAQ: eight questions with short answers (the reference's, with time zones and
French added for Canada), beside a photo.

### HireContact (`#contact`, accent)

Where does your team need help? Copy, email and phone, and a consent line beside a white
brief form: name, company, work email, phone, what you need, when, a message. Real
`<label>`s; name, email and "what you need" are required and validated by the browser. It
posts to `BRAND.contact.formAction` when set; otherwise the script opens a `mailto:` to
`BRAND.contact.email` with the fields in the body (no script: a plain `mailto:` action).
Contact details live in `src/lib/brand.ts`.

## Photos

Royalty-free Unsplash photos (Unsplash License; none are Unsplash+). Each is recorded in the
shared photo registry and used on this page only. Six were already on this page and are
kept (renamed); eleven are new. No country tie is needed.

| File | Unsplash ID | Photo id | What it shows | Used in |
|---|---|---|---|---|
| `p32-hero.jpg` | _kf2Z44k7Ng | 1517701221265-7da25447217b | An engineer at a laptop at a counter by a tall window (kept) | Hero |
| `p32-faq.jpg` | kDCFzh7DxG0 | 1581629736537-72102ba45fa3 | An engineer at her desk by a tall office window (kept) | FAQ |
| `p32-ways-solo.jpg` | xLBNRz5Fy78 | 1569347345215-ed9792fc35e8 | An engineer on a laptop in a meeting room (kept) | Ways: staff augmentation |
| `p32-ways-squad.jpg` | Qx7A7SChpnI | 1603195827187-459ab02554a0 | Three engineers working together on one laptop | Ways: augmented squad |
| `p32-ways-pod.jpg` | AxAPuIRWHGk | 1574790398664-0cb03682ed1c | Engineers in headphones at rows of screens in a studio (kept) | Ways: managed delivery pod |
| `p32-eng-web.jpg` | zSpGWzwRFas | 1557425507-57dd2cafc241 | A developer in a cap at a monitor (kept) | Engineers: front-end and full-stack |
| `p32-eng-mobile.jpg` | 5v2Q5b4onY8 | 1573497620013-7f7660da1a48 | A developer at her laptop in a glass-walled office | Engineers: mobile |
| `p32-eng-backend.jpg` | B6JINerWMz0 | 1583508915901-b5f84c1dcde1 | An engineer at a wide monitor in a sunny office | Engineers: back end |
| `p32-eng-data.jpg` | CZ9AjMGKIFI | 1549082984-1323b94df9a6 | A woman thinking at a desk with two screens | Engineers: data |
| `p32-eng-ml.jpg` | mVV0s8ZvEm4 | 1578496479939-722d9dd1cc5b | An engineer studying a scatter plot on his monitor | Engineers: AI/ML |
| `p32-eng-qa.jpg` | fXVx1opWGxM | 1557425747-929b65a39785 | A smiling engineer in glasses in a team meeting (kept) | Engineers: QA automation |
| `p32-eng-devops.jpg` | G1N9kDHqBrQ | 1549692520-acc6669e2f0c | An engineer in a plaid shirt at a monitor in an open office | Engineers: DevOps and cloud |
| `p32-step-call.jpg` | 6ie6OjshvWg | 1616587894289-86480e533129 | A man on a video call at a laptop | Process: discovery call |
| `p32-step-model.jpg` | UUcgVSq2m3g | 1758876203342-fc14c0bba67c | Two colleagues planning at a desk by a wall of notes | Process: pick the model |
| `p32-step-options.jpg` | sgIgF8xKY8o | 1704440305758-4adae3af55ed | Three colleagues reviewing work on a laptop | Process: pre-vetted options |
| `p32-step-interview.jpg` | CvyRP10doo0 | 1729371568794-fb9c66ab09cf | Two colleagues talking at a laptop | Process: interview |
| `p32-step-kickoff.jpg` | E3LsanLgkLM | 1702047149248-a6049168d2a8 | A team around a table with laptops | Process: kickoff |

## Copy to check before launch

- Proof figures: 20+ years building software, 200+ engineers under one roof / in one team,
  300+ clients served, 4+ locations.
- Planning rate: $125 an hour, 160 hours per engineer a month ($20,000 per engineer; 1–12
  engineers; starts at 3 = $60,000). Directional, not a quote.
- Team sizes: 1, 2–4 and 5–8 engineers.
- Engineer cards' years of experience (6+ to 10+) and skills: example roles.
- Case studies: all three are placeholders written for this page (bilingual patient portal,
  demand forecasting, cloud platform move). Replace them with real engagements, or check
  every figure: 2 languages from one codebase, 40% fewer defects reaching release; 25% less
  overstock, daily forecasts up from weekly; 3× more frequent releases, zero downtime
  during the move.
- Claims about Canada: engineers across Pacific to Eastern (and Atlantic) time, bilingual
  English and French engineers, "a short flight away".
- Contact details: hello@agentcraft.ai, +1 (512) 837-2200 (`src/lib/brand.ts`); the form
  has no service yet (`formAction` is empty, so it opens an email).
- The FAQ answers are drafts.
