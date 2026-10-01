# Onshore engineers, United States: sections

This page sells US-based engineers and teams across the stack: web and app, mobile, back
end, data, AI/ML, QA, and DevOps and cloud. It follows the owner's onshore reference page
for its content, sections, calls to action and order (widened from AI to every engineering
role), rebuilt in the site's design. Every section after the hero, apart from the FAQ,
comes from the shared **hire kit** in `src/components/hire/`, the same files on every page
that sells engineers; each page passes its own copy, photos and roles. Copy lives in
`src/pages/index.astro`, styles in the "Hire sections" block of `src/styles/globals.css`
(tablet rules at 991px with each part, phone rules in the Phone pass).

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

Unchanged shared hero. "Hire onshore US engineers.", a lede naming the roles, the two calls
to action (to `#contact` and `#ways`) and the four proof figures as specs.

### HireStack (`#stack`, tint)

Tech we use. One framed table, a row per group (web and app, mobile, back end, data, AI and
ML, QA and testing, DevOps and cloud): the group's name, then its Simple Icons logos in brand
colour on white 12px tiles with their names. Brands with no icon (iOS, React Native, dbt,
OpenAI, Playwright, AWS, Azure) are named in dashed text chips. Phone: the logos
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

Get help across your stack. Three framed columns (Build, Data and models, Platform), each a
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
shared photo registry and used on this page only. Seven were already on this page before the
rebuild and were kept (renamed where their use changed); the rest are new.

| File | Unsplash ID | Photo id | What it shows | Used in |
|---|---|---|---|---|
| `p30-hero.jpg` | HBMPQZZondc | 1688646583123-16844c80e78a | An engineer at a laptop by a bright window (kept) | Hero |
| `p30-faq.jpg` | rxpThOwuVgE | 1556761175-5973dc0f32e7 | An engineer briefing his team in a brick-walled office (kept) | FAQ |
| `p30-ways-solo.jpg` | d-GFToJRNvo | 1688646556970-ef523af3ed97 | An engineer with a laptop in an office lounge (kept, was `p30-role-1`) | Ways: staff augmentation |
| `p30-ways-squad.jpg` | _S7-KX8geL0 | 1559523182-a284c3fb7cff | Three engineers on laptops on sofas in a brick-walled office (kept, was `p30-zones`) | Ways: augmented squad |
| `p30-ways-pod.jpg` | ZT5v0puBjZI | 1622675363311-3e1904dc1885 | A product team with laptops around a long table | Ways: managed delivery pod |
| `p30-eng-web.jpg` | x2HOYOOudUI | 1657818025947-ec5eaa348227 | A developer smiling as he works at a desk | Engineers: full-stack web |
| `p30-eng-mobile.jpg` | gyOxAEmtL6w | 1588346987693-23bcc81da1d1 | A developer smiling from her desk beside a laptop | Engineers: mobile |
| `p30-eng-backend.jpg` | ysSCKfw2VeY | 1739547320601-10807d9d256f | A developer in glasses smiling as he types | Engineers: back end and APIs |
| `p30-eng-data.jpg` | YK0HPwWDJ1I | 1569012871812-f38ee64cd54c | A woman thinking at a large monitor | Engineers: data |
| `p30-eng-ml.jpg` | dF3aTolQw8U | 1753450298481-362990f811ea | An engineer smiling at his screens in a brick office | Engineers: machine learning |
| `p30-eng-genai.jpg` | 1dwyU46p7eE | 1580983218547-8333cb1d76b9 | A developer working on a laptop at a meeting table | Engineers: GenAI and LLM |
| `p30-eng-qa.jpg` | WP5hSpSJUec | 1683803041344-90c78373213e | An engineer taking notes beside her laptop (kept, was `p30-role-3`) | Engineers: QA automation |
| `p30-eng-devops.jpg` | upaTLEhyTzc | 1632923946112-637c9167403f | An engineer at a standing desk in a long office | Engineers: DevOps and MLOps |
| `p30-step-call.jpg` | dfmsZyFVi_I | 1653566031535-bcf33e1c2893 | Three colleagues talking at a meeting table | Process: discovery call |
| `p30-step-model.jpg` | R3jJvOSzjrk | 1571826784833-50a3087d9d60 | A team lead at a whiteboard with two colleagues | Process: pick the model |
| `p30-step-options.jpg` | QMIL8Kdy7Ic | 1683803063663-3b1f28d97297 | An engineer reviewing work on a laptop (kept, was `p30-role-2`) | Process: pre-vetted options |
| `p30-step-interview.jpg` | -f0SlS5MYnI | 1683199320521-38e3370de70d | Two colleagues talking over a laptop (kept, was `p30-role-4`) | Process: interview |
| `p30-step-kickoff.jpg` | KHpjeuaWOec | 1681949287382-052ea3954a51 | A team gathered at a pinboard in a sunlit office | Process: kickoff |

The old `p30-locks.jpg` (TdMuKUzW9xg, hands at a laptop) was removed with its section.

## Copy to check before launch

- Proof figures: 20+ years building software, 200+ engineers under one roof / in one team,
  300+ clients served, 4+ locations.
- Planning rate: $125 an hour, 160 hours per engineer a month ($20,000 per engineer; 1–12
  engineers; starts at 3 = $60,000). Directional, not a quote.
- Team sizes: 1, 2–4 and 5–8 engineers.
- "US-based", "your business hours" and "on site when needed": confirm where the engineers
  are and what on-site work is offered.
- Engineer cards' years of experience (6+ to 9+) and skills: example roles.
- Case results: "Automated" and "Consistent"; 87% approval accuracy, 61% fraud detection;
  6× less downtime, 43% maintenance cost savings. The three examples are the reference's,
  all AI and data work.
- Contact details: hello@agentcraft.ai, +1 (512) 837-2200 (`src/lib/brand.ts`); the form
  has no service yet (`formAction` is empty, so it opens an email).
- The FAQ answers are drafts.
