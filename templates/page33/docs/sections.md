# Offshore engineers and teams in India: sections

This page sells India-based engineers and teams across the stack: web and app, mobile, back
end, data, AI/ML, QA, and DevOps and cloud, with planned overlap with the US workday. It
follows the owner's offshore reference page (`offshore.pdf`) for its content, sections,
calls to action and order, widened from AI developers to engineers of every kind, and is
rebuilt in the site's design. Every section after the hero, apart from the FAQ, comes from
the shared **hire kit** in `src/components/hire/`, the same files on every page that sells
engineers; each page passes its own copy, photos and roles. Copy lives in
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

Unchanged shared hero. "Hire engineers from India.", a lede naming the skills and the
planned US-hour overlap, the two calls to action (to `#contact` and `#ways`) and the four
proof figures as specs.

### HireStack (`#stack`, tint)

Tech we use. One framed table, a row per group (web and app, mobile, back end, data, AI and
ML, QA and testing, DevOps and cloud): the group's name, then its Simple Icons logos in brand
colour on white 12px tiles with their names. Brands with no icon (iOS, React Native, dbt,
OpenAI, Playwright, AWS, Azure) are named in dashed text chips. Phone: the logos lose their
names (kept for screen readers) and each group is one line.

### HireServices (`#help`, tint)

Choose the work your team needs. Eight services (web and app, mobile, back end and APIs,
data engineering, AI and machine learning, QA and test automation, DevOps and cloud,
maintenance and support) as options in columns 1–2, the chosen one's panel in columns 3–4:
description, common work and the tools used. Phone: the options become a chip rail over the
panel.

### HireWhy (`#why`)

Why teams choose us. Three reasons (senior engineers matched to your work; a delivery model
built around your team; US alignment, India delivery) as large numbered options beside a
detail panel; under them three proof figures and "Talk to our team". Phone: the reasons are
a chip rail; the panel's proof points are left out.

### HireWays (`#ways`)

Ways to work together. Three photo cards (staff augmentation, augmented squad, managed
delivery pod) with the model and team size set on the photo, the title, one line, skills and
"Plan this team shape" (to `#plan`); "You stay in control…" under them.

### HirePlanner (`#plan`, tint), savings mode

Cost savings calculator. A native range slider (1–12 engineers, labelled, arrow keys,
starting at 3) beside the cost panel on the ink: the same team at US onshore $90/hr and
offshore $32/hr, 160 hours each, both monthly totals, the estimated monthly saving and
"About 64% lower than the US onshore planning estimate.", "Build my team plan" and the note
"This is not a … quote." Every changing number has a reserved width and tabular figures.
Without the script it shows 3 engineers: $43,200 against $15,360, saving $27,840.

### HireEngineers (`#engineers`, dark)

Find the engineer you need: the heart of the page. Specialty chips (native radios: web &
mobile, back end, data & AI, QA, DevOps & cloud) over eight engineer cards, four across: a
photo of a person at work, years of experience, "Senior specialty role", the role, who it's
for, skill tags and "Discuss this engineering hire". The roles: full-stack web developer,
mobile app developer, back-end engineer, data engineer, AI/ML engineer, QA automation
engineer, DevOps and cloud engineer, technical lead. Filtering dims the others and never
changes the wall's size; on a rail it slides to the first match. Closes with "These are
example roles…".

### HireColumns (`#do`)

Get help across your stack. Three framed columns (Build, Data and AI, Platform), each a
title, a line and tags. Phone: a rail.

### HireSteps (`#how`)

How they help. Four numbered steps (build inside your product, develop the data and model
layer, integrate and release, operate and improve), one per grid column, each with a focus
line. Closes with "Need help with one part of your stack?… Find the right role" (to
`#engineers`). Phone: a rail.

### HireCases (`#cases`)

Real examples. The reference's three case cards (production quality vision team, lending
risk-model team, predictive maintenance team): sector, team type, title, what we did, the
illustrative capability mix, tools and two result figures. Footnote: client details
private, results are examples.

### HirePod (`#pod`, dark)

"One team. Two locations." Copy, three lead lines and "Talk about your team" beside a pod
roster (technical lead, full-stack, mobile, ML and QA automation engineers) with Rituals /
Ownership / Start. Phone: the long lede and the layers are left out.

### HireFit (`#fit`, tint)

Is this a good fit? Four numbered statements, one per column. Two by two below 992px.

### HireProcess (`#process`)

How it works. Five steps (Discovery call → Pick the suitable model → Receive pre-vetted
options → Interview & selection → Onboarding & kickoff) as a list, the chosen step's detail
("What we cover" and a link) and a photo. Two photos serve the five steps: the video call
for steps 1–3, the team at a table for steps 4–5 (the kit's optional per-step photo). Phone:
five numbered buttons, a photo strip, then the detail.

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
shared photo registry and used on this page only. Seven were kept from the page's earlier
version; eight are new.

| File | Unsplash ID | Photo id | What it shows | Used in |
|---|---|---|---|---|
| `p33-hero.jpg` | 4uLggtgBBCo | 1737575655055-e3967cbefd03 | A smiling developer in glasses at his desk in front of two monitors | Hero |
| `p33-ways-solo.jpg` | 4x4eyP2mMAY | 1621858436649-25dedba0eb38 | A developer in a checked shirt at a laptop at a bright desk | Ways: staff augmentation |
| `p33-ways-squad.jpg` | dEElc6rrPUA | 1627599936744-51d288f89af4 | Developers side by side at desktop computers in a long office | Ways: augmented squad |
| `p33-faq.jpg` | 77XNEjHDmjk | 1578992176613-3768c7f5163b | A team at laptops round a table in a coworking space (kept) | Ways: managed delivery pod |
| `p33-fullstack.jpg` | n9-cNWJxYQA | 1548057407-b022b3f5b6ab | An engineer at a laptop in a coworking space (kept) | Engineers: full-stack web |
| `p33-eng-mobile.jpg` | iqeq8rjyDiU | 1653566031492-ad2a512a9c7d | A developer typing on a sticker-covered laptop in a quiet office | Engineers: mobile |
| `p33-backend.jpg` | 01_cE4yUgOA | 1696834137457-8872b6c525f4 | A smiling engineer in a headset at a white desk (kept) | Engineers: back end |
| `p33-data.jpg` | 9i2t23J7HnE | 1675664534136-51375fb40129 | A woman working on a laptop on a bench outdoors (kept) | Engineers: data |
| `p33-eng-ml.jpg` | x16ZMxIXlyQ | 1752776541969-a4a883830ece | An engineer in glasses concentrating on his screen | Engineers: AI/ML |
| `p33-qa.jpg` | jctvi30MWRM | 1627401632925-a4c565d08a80 | An engineer in a blue shirt standing in an office (kept) | Engineers: QA automation |
| `p33-eng-devops.jpg` | eVN6Px4AfAo | 1753452265240-adc4d7a0821a | An engineer looking up from a desk of screens | Engineers: DevOps and cloud |
| `p33-lead.jpg` | zXR0fNWHDDQ | 1778692258270-bc0e80e975c0 | A lead in glasses and a blazer, smiling (kept) | Engineers: technical lead |
| `p33-step-call.jpg` | 9Pqp6CUaIu4 | 1759752394757-323a0adc0d62 | A man on a video call with a team at his laptop | Process: steps 1–3 |
| `p33-step-team.jpg` | 3byjpnsmU2A | 1681164315393-8d2850f570fa | Engineers at laptops around a long table | Process: steps 4–5 |
| `p33-stack.jpg` | qMnPOToyQ4c | 1653503425441-9d975e51ce91 | Two people going over work on a laptop at a café table (kept) | FAQ |

## Copy to check before launch

- Proof figures: 20+ years building software, 200+ engineers under one roof / in one team,
  300+ clients served, 4+ locations.
- Savings calculator: US onshore $90 an hour against offshore $32 an hour, 160 hours per
  engineer a month ($14,400 against $5,120 per engineer; 1–12 engineers; starts at 3 =
  $43,200 against $15,360, saving $27,840, about 64% lower). A planning estimate, not a
  quote.
- Team sizes: 1, 2–4 and 5–8 engineers.
- Engineer cards' years of experience (6+ to 12+) and skills: example roles.
- Case results: "Automated" and "Consistent"; 87% approval accuracy, 61% fraud detection;
  6× less downtime, 43% maintenance cost savings. The three examples are the reference's,
  all AI and data work.
- "US alignment, India delivery", "planned US-hour overlap" and "written handoffs": the
  reference names Dallas alignment in one place and an Austin headquarters in another; the
  page names neither.
- Contact details: hello@agentcraft.ai, +1 (512) 837-2200 (`src/lib/brand.ts`); the form
  has no service yet (`formAction` is empty, so it opens an email).
- The FAQ answers are drafts.
