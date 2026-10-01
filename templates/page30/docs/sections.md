# Onshore engineers, United States: sections

This page's sections, in page order, after the hero. Each one is designed for this page
alone, apart from the FAQ and the close, which are the same on every AgentCraft page. Copy lives in `src/pages/index.astro`,
styles in the Page 30 block of `src/styles/globals.css`.

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

### ZonesSection

`src/components/ZonesSection.astro`. Same time zones, on the dark tone. The header splits around a photo of engineers at work. Under it, the country as four bands, Pacific to Eastern, one per column of the page: each band carries its zone, the real local time now (a script fills the clocks; without it they read `--:--`) and its hubs, placed roughly where they sit on the map. Dashed lines run from Dallas, the head office, to every hub, flowing while the section is in view. Hubs and lines share one plane, so every line ends on its dot. On phones each zone is one row: code and clock on the left, its hubs as text on the right.

### WhenSection

`src/components/WhenSection.astro`. When onshore is the right call, as a switchyard. Three questions, each with a yes / no switch (native radios), sit in columns 1–2; a wire runs from each to the verdict in columns 3–4. Any "yes" lights its wire and shows "Onshore is the right call"; with every answer "no", the bottom wire lights and the verdict turns to nearshore, linking to the Mexico page. Pure CSS (`:has`), so it works without a script; both verdicts share one grid cell, so nothing moves.

### PortraitsSection

`src/components/PortraitsSection.astro`. The roles, as a portrait strip, on the dark tone. One tall photo of an engineer per column of the page, the role set on its foot; pointing at a portrait (or tabbing to it) slides its tools up over the photo. The portraits open upward in turn as the section arrives. On touch screens the tools always show; on phones the cards are two by two and shorter.

### NestSection

`src/components/NestSection.astro`. Ways to work together, as nested frames. Three square frames sit one inside another (1 engineer, 2–4 engineers, 5–8 engineers), beside the three models: staff augmentation, augmented squad and managed pod. Pointing at or focusing a model lights its frame. On phones the frames become a wide figure above the list.

### LocksSection

`src/components/LocksSection.astro`. Compliance-sensitive work, on the dark tone. The headline, the frameworks (HIPAA, SOC 2, PCI DSS) as stamps and a photo of a team at work fill columns 1–2; columns 3–4 list five controls, each with a padlock whose shackle closes as the section arrives and the real logos of the tools behind it: Okta, Auth0, GitHub, GitLab, Vault, 1Password, Jira, GitHub Actions, Sentry and Datadog (Simple Icons).

### FaqSection

`src/components/FaqSection.astro`. Four onshore questions beside a photo of a team briefing. Native `<details>` sharing one name. The answers are drafts; have them checked before launch.

### CtaSection

`src/components/CtaSection.astro`. The shared close, with this page's copy.

## Photos

Every photo is of people working in the United States: each one's Unsplash page names a US city as its location.

| File | Unsplash ID | Photo id | What it shows | Tie to the US |
|---|---|---|---|---|
| `src/assets/pages/p30-hero.jpg` | HBMPQZZondc | 1688646583123-16844c80e78a | An engineer at a laptop by a bright window | Location: New York, NY, USA |
| `src/assets/pages/p30-zones.jpg` | _S7-KX8geL0 | 1559523182-a284c3fb7cff | Three engineers on laptops in a brick-walled office | Location: East 6th Street, Austin, Texas, USA |
| `src/assets/pages/p30-role-1.jpg` | d-GFToJRNvo | 1688646556970-ef523af3ed97 | An engineer with a laptop in a lounge | Location: New York, NY, USA |
| `src/assets/pages/p30-role-2.jpg` | QMIL8Kdy7Ic | 1683803063663-3b1f28d97297 | A developer working through a screen on a laptop | Location: New York, NY, USA ("…work in New York, United States") |
| `src/assets/pages/p30-role-3.jpg` | WP5hSpSJUec | 1683803041344-90c78373213e | An engineer taking notes beside a laptop | Location: New York, NY, USA ("…work in New York, United States") |
| `src/assets/pages/p30-role-4.jpg` | -f0SlS5MYnI | 1683199320521-38e3370de70d | Two colleagues reviewing work on a laptop (the card shows one) | Location: New York, NY, USA |
| `src/assets/pages/p30-locks.jpg` | TdMuKUzW9xg | 1683803055067-1ca1c17cb2b9 | A team working at laptops around one table | Location: New York, NY, USA |
| `src/assets/pages/p30-faq.jpg` | rxpThOwuVgE | 1556761175-5973dc0f32e7 | An engineer briefing his team | Location: East 6th Street, Austin, Texas, USA |

All under the Unsplash License.

## Copy to check before launch

- The hubs (Seattle, San Francisco, Los Angeles, Denver, Phoenix, Chicago, Dallas, Austin, New York, Atlanta) and their map positions are illustrative; confirm where engineers actually are.
- The decision guide's questions and verdicts, the engagement sizes (1, 2–4, 5–8 engineers) and on-site terms.
- The frameworks named (HIPAA, SOC 2, PCI DSS) and the controls list: confirm what the team actually works under.
- The roles and their tools are examples.
- The FAQ answers are drafts.
