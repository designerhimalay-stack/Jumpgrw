# Engineers and teams in Mexico: sections

This page sells engineers and teams in Mexico across the stack: web and app, mobile, back
end, data, AI/ML, QA, and DevOps and cloud. It follows the owner's reference page for its
content, sections, calls to action and order, rebuilt in the site's design. Every section
after the hero, apart from the FAQ, comes from the shared **hire kit** in
`src/components/hire/`, the same files on every page that sells engineers; each page passes
its own copy, photos and roles. Copy lives in `src/pages/index.astro`, styles in the "Hire
sections" block of `src/styles/globals.css` (tablet rules at 991px with each part, phone
rules in the Phone pass).

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

Unchanged shared hero. "Hire Mexico engineers who work close to your team.", the two calls
to action (to `#contact` and `#ways`) and the four proof figures as specs.

### HireStack (`#stack`, tint)

Tech we use. One framed table, a row per group (web and app, mobile, back end, data, AI and
ML, QA and testing, DevOps and cloud): the group's name, then its Simple Icons logos in brand
colour on white 12px tiles with their names. Brands with no icon (iOS, React Native, dbt,
Power BI, OpenAI, Playwright, AWS, Azure) are named in dashed text chips. Phone: the logos
lose their names (kept for screen readers) and each group is one line.

### HireServices (`#help`, tint)

Choose the work your team needs. Eight services as options in columns 1–2, the chosen one's
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

Find the engineer you need: the heart of the page. Specialty chips (native radios) over eight
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

The shared FAQ with the reference's nine questions and short answers, beside a photo.

### HireContact (`#contact`, accent)

Where does your team need help? Copy, email and phone, and a consent line beside a white
brief form: name, company, work email, phone, what you need, when, a message. Real
`<label>`s; name, email and "what you need" are required and validated by the browser. It
posts to `BRAND.contact.formAction` when set; otherwise the script opens a `mailto:` to
`BRAND.contact.email` with the fields in the body (no script: a plain `mailto:` action).
Contact details live in `src/lib/brand.ts`.

## Photos

Royalty-free Unsplash photos (Unsplash License; none are Unsplash+). Each is recorded in the
shared photo registry and used on this page only.

| File | Unsplash ID | Photo id | What it shows | Used in |
|---|---|---|---|---|
| `p31-hero.jpg` | 2j8ygLo8cqE | 1655990280051-1a0b3e61048a | A developer coding at a laptop and two screens | Hero |
| `p31-faq.jpg` | 68U5GBCtuEU | 1588865876768-f9e265a1d38f | A developer at a laptop (Tijuana, Mexico) | FAQ |
| `p31-examples.jpg` | 1oQ4oigftZ4 | 1603418457605-8c16afc76f8e | A developer at a laptop on a terrace (Playa del Carmen, Mexico) | Engineers: back-end engineer |
| `p31-ways-solo.jpg` | 9ukCFPNotzs | 1587578932405-7c740a762f7f | An engineer planning at a desk by a window | Ways: staff augmentation |
| `p31-ways-squad.jpg` | WX0scXYukVo | 1752170080773-fed7758395c3 | Three people laughing as they work at a round table | Ways: augmented squad |
| `p31-ways-pod.jpg` | mpN7xjKQ_Ns | 1556761175-b413da4baf72 | A team talking around a desk in an open office | Ways: managed delivery pod |
| `p31-eng-web.jpg` | fotKKqWNMQ4 | 1524749292158-7540c2494485 | A developer at an iMac in a busy office | Engineers: full-stack web |
| `p31-eng-mobile.jpg` | cOGgH91dJto | 1731801613353-bad3f67e956c | A developer smiling at a laptop in a café | Engineers: mobile |
| `p31-eng-data.jpg` | 7f0_sXc9lT8 | 1790597037883-98cd19d3be11 | A woman typing on a laptop at a bright desk | Engineers: data |
| `p31-eng-ml.jpg` | 4HhmpfsI5yk | 1687293233471-187c8df1beef | A woman working at a standing desk | Engineers: AI/ML |
| `p31-eng-genai.jpg` | eWAzhlcOX4Y | 1743865318581-2e0e59e7292e | A woman smiling at her laptop in a bright room | Engineers: GenAI and LLM |
| `p31-eng-qa.jpg` | Kz8nHVg_tGI | 1560264418-c4445382edbc | A woman at an iMac in an office with colleagues | Engineers: QA automation |
| `p31-eng-devops.jpg` | gTs2w7bu3Qo | 1602992708529-c9fdb12905c9 | An engineer in headphones at a desk with a large screen | Engineers: DevOps and cloud |
| `p31-step-call.jpg` | Be5aVKFv9ho | 1616587226960-4a03badbe8bf | A man on a video call at a laptop | Process: discovery call |
| `p31-step-model.jpg` | hOCYuLmTTnY | 1581091870598-36ce9bad5c77 | Two colleagues at a whiteboard | Process: pick the model |
| `p31-step-options.jpg` | NK2PfIZOQkA | 1787647561979-da6797612e4d | A team reviewing work around a table | Process: pre-vetted options |
| `p31-step-interview.jpg` | 4f2SJLdOmyo | 1771223546326-556cd8382c48 | A woman in a blazer on a call at her laptop | Process: interview |
| `p31-step-kickoff.jpg` | p5wrlynJR4A | 1581092568395-d68050c2ab43 | A team planning at a wall of notes | Process: kickoff |


## Copy to check before launch

- Proof figures: 20+ years building software, 200+ engineers under one roof / in one team,
  300+ clients served, 4+ locations.
- Planning rate: $125 an hour, 160 hours per engineer a month ($20,000 per engineer; 1–12
  engineers; starts at 3 = $60,000). Directional, not a quote.
- Team sizes: 1, 2–4 and 5–8 engineers.
- Engineer cards' years of experience (6+ to 9+) and skills: example roles.
- Case results: "Automated" and "Consistent"; 87% approval accuracy, 61% fraud detection;
  6× less downtime, 43% maintenance cost savings. The three examples are the reference's,
  all AI and data work.
- Contact details: hello@agentcraft.ai, +1 (512) 837-2200 (`src/lib/brand.ts`); the form
  has no service yet (`formAction` is empty, so it opens an email).
- The FAQ answers are drafts.
