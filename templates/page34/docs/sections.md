# GCC from India: sections

This page sells your own global capability center (GCC) in India: an engineering center
that we help you set up, hire and run, with the option to take it over
(build-operate-transfer). The center hires leaders and engineers across the stack (web and
app, back end, mobile, data, AI/ML, QA, DevOps and cloud). It follows the owner's offshore
reference for its content, sections, calls to action and order, adapted to a GCC and
rebuilt in the site's design. Every section after the hero, apart from the FAQ, comes from
the shared **hire kit** in `src/components/hire/` (the same files as the Mexico page,
page 31; nothing added or changed), each passed this page's own copy, photos and roles.
Copy lives in `src/pages/index.astro`, styles in the "Hire sections" block of
`src/styles/globals.css` (tablet rules at 991px with each part, phone rules in the Phone
pass).

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

Unchanged shared hero. "Your own GCC in India.", a one-sentence lede, "Plan your India
center" (to `#contact`) and "Explore ways to start" (to `#ways`), and the four proof figures
as specs.

### HireStack (`#stack`, tint)

Tech we use: "Engineers who fit your stack." A row per group (web and app, mobile, back end,
data, AI and ML, QA and testing, DevOps and cloud, center tools): Simple Icons logos on white
12px tiles. Brands with no icon (iOS, React Native, dbt, Power BI, OpenAI, Playwright, AWS,
Azure, Slack) are named in dashed text chips. Logos: React, Next.js, Angular, TypeScript,
Node.js, Swift, Kotlin, Flutter, Python, OpenJDK, Go, .NET, PostgreSQL, MongoDB, Redis,
Snowflake, Databricks, Apache Airflow, Apache Kafka, PyTorch, TensorFlow, Hugging Face,
LangChain, MLflow, Selenium, Cypress, Jest, Postman, Docker, Kubernetes, Terraform, GitHub
Actions, Google Cloud, Jira, Confluence, Okta, 1Password, Zoom (`src/lib/tech-logos.ts`).

### HireServices (`#help`, tint)

Choose the work your center takes on. Eight areas: product engineering, back end and
platforms, mobile apps, data and analytics, AI and machine learning, quality engineering,
cloud/DevOps/SRE, and center set-up and operations (entity, office, payroll, IT). Each
panel: description, common work, tools.

### HireWhy (`#why`)

Why teams build with us: your team inside your center; set up without the overhead; a
clear path to ownership. Three proof figures and "Talk to our team".

### HireWays (`#ways`)

Ways to work together: "Start with a pod. Grow a center. Own it when ready." Three photo
cards: start with a pod (5–8 engineers), scale to a center (25–150+ people),
build-operate-transfer (your entity), each with skills and "Plan this team shape" (to
`#plan`). "You stay in control…" under them.

### HirePlanner (`#plan`, tint), savings mode

Cost savings calculator: a 1–12 slider (starts at 3) comparing a US onshore team at $90/hr
with the India center at $32/hr, 160 hours each: both monthly totals, the monthly saving and
"About 64% lower…". At 3 engineers: $43,200 against $15,360, saving $27,840. The note says it
is team cost only, before center set-up, and not a quote.

### HireEngineers (`#engineers`, dark)

The roles you hire into the center. Filters: leadership, product & back end, data & AI, QA,
DevOps & cloud. Eight cards with a photo each: GCC center head, engineering manager,
full-stack engineer, back-end engineer, data engineer, AI/ML engineer, QA automation
engineer, DevOps and SRE engineer. Closes with "These are example roles…".

### HireColumns (`#do`)

Get help across your whole stack: Build (own product areas), Data and AI, Operate (QA,
cloud and SRE, with HR, payroll, IT and the office run by us).

### HireSteps (`#how`)

How the center helps: build inside your product, own whole areas, integrate and release,
operate and improve. Closes with "Need one part of your center first?… Find the right role"
(to `#engineers`).

### HireCases (`#cases`)

Real examples of centers: a pod grown into a 60-person product center (healthcare
software); a data and AI hub inside a fintech's India center; a 45-person center
transferred to an industrial equipment maker. Footnote: client details private, results are
examples.

### HirePod (`#pod`, dark)

How does your India center look with us? Your leaders own product and architecture, a
center head runs the India team, we run the site. Roster "India center / 01": center head,
engineering manager, full-stack, data, QA. Terms: daily overlap, your IP, transfer option.

### HireFit (`#fit`, tint)

Built for teams ready for their own India center: four statements.

### HireProcess (`#process`)

Five steps to your India center (discovery call → pick the model: pod, center or BOT →
pre-vetted options, leaders first → interview & selection → onboarding & kickoff). Two
photos: the discovery call photo serves steps 1–3, the whiteboard photo steps 4–5 (the kit's
optional per-step photo).

### FaqSection (`#faq`)

The shared FAQ with seven GCC questions (what a GCC is, starting with a pod, the roles,
who leads it, ownership of code/IP/people, take-over timing, cost),
beside a photo.

### HireContact (`#contact`, accent)

Where does your center start? The brief form (name, company, work email, phone, what you
need: one pod / a full India center / build-operate-transfer / not sure, when, a message).
Posts to `BRAND.contact.formAction` when set, otherwise opens a `mailto:` to
`BRAND.contact.email`. Contact details live in `src/lib/brand.ts`.

## Photos

Royalty-free Unsplash photos (Unsplash License; none are Unsplash+). Each is recorded in the
shared photo registry and used on this page only. No country tie is needed (owner,
2026-10-01); the four kept from the earlier version of this page were taken in India.

| File | Unsplash ID | Photo id | What it shows | Used in |
|---|---|---|---|---|
| `p34-hero.jpg` | LTDE3UZCzAM | 1686249959385-ee6c7dcdf0ec | A professional works on a laptop in a bright loft office | Hero (replaced 2026-10-02) |
| `p34-faq.jpg` | ueUYcRPXnXw | 1770627016447-cb9d29ed0398 | A leader in a white blazer at her desk (New Delhi, India) | FAQ (kept) |
| `p34-team.jpg` | cW4lLTavU80 | 1577962917302-cd874c4e31d2 | A team meeting round a table, one presenting (Bengaluru); cropped to the right so a wall mural is left out | Ways: build-operate-transfer (kept) |
| `p34-director.jpg` | 7eSLtuTYmbU | 1770626894265-bdb99db109f1 | A leader at her desk with a laptop (New Delhi, India) | Roles: GCC center head (kept) |
| `p34-ways-pod.jpg` | 6DSItOWspGY | 1581090123456-6405208b0264 | Three engineers working through a problem at one laptop | Ways: start with a pod |
| `p34-ways-center.jpg` | EyRIpXtcCEU | 1748256467077-c75ef01579aa | Engineers at rows of desks in an open-plan office | Ways: scale to a center |
| `p34-eng-lead.jpg` | W002NEO2wds | 1730210730648-4c0618bb3e11 | A man in a light shirt at a laptop in an open office | Roles: engineering manager |
| `p34-eng-fullstack.jpg` | YF7iYfmF488 | 1632910073143-6d2c52a448e5 | A developer in glasses at a laptop at a wooden table | Roles: full-stack engineer |
| `p34-eng-backend.jpg` | iEiUITs149M | 1542744094-3a31f272c490 | An engineer at a desktop computer in a wood-panelled office | Roles: back-end engineer |
| `p34-eng-data.jpg` | au6F67CJGTA | 1573495611745-41a6963351ed | A woman typing on a laptop by a window | Roles: data engineer |
| `p34-eng-ml.jpg` | 7RRj4wDX7LE | 1573495783323-9e59a325d4b4 | A woman in glasses working on a laptop in a lounge chair | Roles: AI/ML engineer |
| `p34-eng-qa.jpg` | SxaGgDQl2rU | 1748256373165-e4d125c5124f | A man smiling as he works at a desktop computer | Roles: QA automation |
| `p34-eng-devops.jpg` | kQIdjLbCghA | 1730130054404-c2bd8e7038c2 | An engineer in headphones at a large monitor | Roles: DevOps and SRE |
| `p34-step-call.jpg` | wD1LRb9OeEo | 1557804506-669a67965ba0 | A team lead at a whiteboard while colleagues listen on sofas | Process: steps 1–3 |
| `p34-step-kickoff.jpg` | ZH_58Z1blrI | 1581090124321-d19ad6d7cd5a | Engineers sketching a system on a whiteboard | Process: steps 4–5 |

## Copy to check before launch

- Proof figures: 20+ years building software, 200+ engineers under one roof / in one team,
  300+ clients served, 4+ locations.
- Savings calculator: $90 an hour US onshore, $32 an hour offshore, 160 hours per engineer a
  month; 1–12 engineers, starts at 3 ($43,200 against $15,360, saving $27,840, about 64%
  lower). Team cost only, before center set-up; not a quote.
- Stage sizes: a pod of 5–8 engineers; a center of 25–150+ people.
- Role cards' years of experience (7+ to 15+) and skills: example roles.
- Case results: 60 people in 14 months and 2 product lines owned; 35% lower data platform
  cost and 24h model monitoring cover; 45 people transferred and 95% kept through handover.
  The three examples are drafts for GCC engagements.
- The tools named under "Center tools" (Jira, Confluence, Okta, 1Password, Zoom, Slack) and
  the center set-up service: confirm these match what the team uses.
- FAQ answers are drafts, especially the take-over timing ("often after two or three
  years"), IP and people ownership, and the cost model (set-up fee, then cost plus a
  management fee).
- Contact details: hello@agentcraft.ai, +1 (512) 837-2200 (`src/lib/brand.ts`); the form
  has no service yet (`formAction` is empty, so it opens an email).
