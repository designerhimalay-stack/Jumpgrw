# Automation QA engineers: sections

This page is a Technologies page, built from the hire kit: the one section set every
Technologies page shares, in the same order and with the same words, changing only where
the skill does. The sections are in `src/components/hire/`, their styles in
`src/styles/hire.css`. The shared words are in `src/lib/hire-copy.ts`; everything about
this page's skill (tools, roles, examples, photos) is in `src/data/tech.ts`.
`src/pages/index.astro` puts them together and is the same on every Technologies page.

The kit's files (`src/components/hire/`, `src/styles/hire.css`, `src/lib/hire-copy.ts`,
`src/lib/tabs.ts`, `src/lib/monogram.ts`, `src/types/hire.ts`, `src/pages/index.astro`)
are identical across the Technologies pages: change one, then copy it to the others.

## The frame every page shares

- **Layout:** `Layout` with `navTone="field"`, so the navbar is dark over the hero from the
  first frame; `PageHero`'s script then follows the scroll.
- **Hero:** `PageHero`, the same component as the X-Shore pages: breadcrumb, an audience
  line ("For product and React leaders"), a full-sentence headline set a step smaller
  ("Hire React developers / for your team."), lede, two buttons (to the brief and to the
  ways to work) and three assurances under them. The photo carries a card: a live status
  bar, a note, a kicker and statement over a shade, and a foot strip. Along the foot, the
  four proof figures (`FIGURES` in `hire-copy.ts`) and the headquarters line. The headline
  fills in per character; the assurances rise in after the buttons; the card fades in last.
- **FAQ:** `FaqSection`, the same on every AgentCraft page, with the kit's nine questions.
- **Grammar:** every section sets `data-ac-sec` (light, dark, accent), draws the column
  rules with `GridRules`, opens with `SectionHead` (eyebrow, two-tone headline, lede),
  marks frame corners with `Joints`, and plays its entrance on `data-ac-in`
  (`src/lib/in-view.ts`), reversibly. Items rise in turn; framed photos open upward.
- **Nothing moves the page:** tab panels share one grid cell (`src/lib/tabs.ts`); the role
  picker dims cards instead of hiding them; the savings figures change in place.
- **Motion:** every animation has a `prefers-reduced-motion` rule.
- **Phones and tablets:** every section has its own compact layout at 991px and 767px.

## The sections, in page order

### Tech we use · `StackSection`, `#stack`, light

A frame on the columns: "Core" in column 1, the six core tools as tiles in columns 2–4
(logo or monogram, name, what it is), then the wider ecosystem as chips and a line on how
tools are chosen. Phones: tiles two-up. The only place the page shows technology.

### Choose the work your team needs · `WorkSection`, `#work`, light

Four kinds of work as a 2×2 of tabs in columns 1–2; the chosen one in columns 3–4 with its
common work and tools. Phones: compact 2×2 over the panel.

### Why teams choose us · `WhySection`, `#why`, light

Three figures stacked in columns 1–2 with a link to the brief; three reasons as tabs over a
panel in columns 3–4, each with three proof points. Phones: the figures in one row.

### Ways to work together · `WaysSection`, `#ways`, light

Three framed photo cards: one engineer (columns 1–2, copy over the photo), a squad, a
managed pod. A line under them: you stay in control. Phones: the lead card, then the other
two as photo-beside-copy rows without chips.

### Savings planner · `SavingsSection`, `#savings`, light

A slider from one to twelve engineers; the monthly cost onshore and offshore on navy, the
difference on the accent. Rates and hours are `RATES` in `hire-copy.ts`; the page renders
the three-engineer figures first, so it reads right without the script.

### Find the engineer you need · `RolesSection`, `#roles`, dark

The heart of the page: four senior specialties as framed photo cards, one per column, each
with what they do, their skills and a link to the brief. The skill buttons above dim the
other cards. Phones: two by two, shorter copy, the buttons on one swiping line.

### What our engineers do · `CapabilitiesSection`, `#capabilities`, light

Build, integrate, platform: three cells with an icon, what they take on and tools as chips;
a rule along each top fills in on arrival.

### How they help · `HelpSection`, `#help`, light

Four stages from product to production, one per column on the page's own rules, a line
drawing across their tops and lighting each node. Phones: two by two.

### Real examples · `ExamplesSection`, `#examples`, light

Three engagements as case files: client type, team model, what the team did, the roles,
the stack, and two outcomes in the accent. Tablets and phones: a sideways-swiping row.

### Your pod · `PodSection`, `#pod`, dark

The headline, how it starts and grows, and a button in columns 1–2; the pod as a roster in
columns 3–4, its four roles checking in one after another, with how it runs along the foot.

### Is this a good fit? · `FitSection`, `#fit`, light

Four signs it is, numbered, each check lighting in turn.

### How it works · `StepsSection`, `#how`, light

Five steps as tabs in column 1, the chosen step in column 2 (what happens, what we cover,
a link to the brief), a photo in columns 3–4 with the step number. Tablets: no photo.
Phones: five numbered buttons over the panel.

### FAQ · `FaqSection`, `#faq`, light

Contextual first: what skills you can hire for, then this page's own questions about the
skill (`faqs` in `src/data/tech.ts`, drafts to be reworked), then four shared questions
about how hiring works (`hire-copy.ts`).

### Contact brief · `ContactSection`, `#contact`, accent

Where does your team need help? The headline, what happens next, the address and how the
details are used in columns 1–2; the brief as a white form in columns 3–4. The site has no
server, so sending opens the reader's email with the brief written out, to `BRAND.email`
in `src/lib/brand.ts` (a placeholder). Point the form at a form service when there is one.

## Logos

Simple Icons (CC0), in `src/lib/tech-logos.ts`: cypress, selenium, appium, postman, k6. Tools without one there are drawn
as a two-letter monogram (`src/lib/monogram.ts`).

## Copy to check before launch

- The figures (20+ years, 200+ engineers, 300+ clients, 4 countries) and the planning
  rates ($90 and $32 an hour, 160 hours a month) in `hire-copy.ts`.
- The three examples on this page and their outcomes are illustrative drafts.
- The FAQ answers, and the brief's address (`BRAND.email`).

## Photos

| File | Unsplash ID | What it shows |
|---|---|---|
| `src/assets/pages/p29-faq.jpg` | `cIocF-SSZiM` (photo 1695891689981-0be360e84d3f) | Two engineers review a run together on a laptop |
| `src/assets/pages/p29-hero.jpg` | `ZTLUNxoRaPY` (photo 1681164315014-06bf36b2597a) | An engineer reads code across two monitors |
| `src/assets/pages/p29-r1.jpg` | fGZVkQeWfLY (photo-1758874383584-7775bafcac8d) | A developer in glasses tests an app on a phone held sideways at his laptop. |
| `src/assets/pages/p29-r2.jpg` | gz6KtHRPAGM (photo-1695654400381-3f1db5e8d656) | A senior colleague and a younger developer check an app on a phone together at a desk. |
| `src/assets/pages/p29-r3.jpg` | G7hib-BUeGU (photo-1690192560051-e06e09db5d1a) | Two colleagues compare an app on their phones side by side. |
| `src/assets/pages/p29-r4.jpg` | qAjJk-un3BI (photo-1550439062-609e1531270e) | Overhead view of an engineer working at a desk with three large monitors. |
| `src/assets/pages/p29-rack.jpg` | `wqtDizNUOrM` (photo 1690383682965-faf2cf669634) | An engineer weighs up a run at his desk |
| `src/assets/pages/p29-shards.jpg` | `Im_cQ6hQo10` (photo 1629904853893-c2c8981a1dc5) | Two engineers work through code at their monitors |
| `src/assets/pages/p29-steps.jpg` | TxSVqNgnjq4 (photo-1543269865-4430f94492b9) | Two colleagues laugh while working at a laptop in a bright office. |
| `src/assets/pages/p29-ways.jpg` | YK0HPwWDJ1I (photo-1569012871812-f38ee64cd54c) | A developer rests her chin on her hand as she reads code on her monitor. |

All under the Unsplash License (free licence, not Unsplash+).
