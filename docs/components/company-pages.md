# Company and Insights pages

About, Case Studies, Blog, White Papers and Events. (A Careers page was taken down at the
owner's request; `/careers/` redirects to About.) Each is built like the X-Shore
pages (`page30`–`page34`): the page30 layout and styles, then the home styles, a
`PageHero`, sections from the shared kit, the shared `ContactForm`, the `Footer`.

| Route | Page | Sections |
|---|---|---|
| `/about/` | `src/pages/about/index.astro` | `HireWhy`, `about/LeadershipSection`, `about/RecognitionSection`, `about/InsightsSection`, `about/LocationsSection` |
| `/case-studies/` | `src/pages/case-studies/index.astro` | `CaseStudiesSection` (the home page's four), `cases/ProjectsGrid` |
| `/blog/` | `src/pages/blog/index.astro` | `insights/BlogIndex` |
| `/whitepaper/` | `src/pages/whitepaper/index.astro` | `insights/WhitePapersIndex` |
| `/events/` | `src/pages/events/index.astro` | `insights/EventsIndex` |

## Content

All copy is JumpGrowth's, from its published pages; the full articles, white-paper
downloads, event pages and project write-ups stay on jumpgrowth.com and the cards link to
them. Edit the data, not the components:

- `src/lib/projects.ts`: the 13 portfolio projects, in the published order. Each card's id
  is the project's `slug`; the home page's case studies link to `/case-studies/#<slug>`.
- `src/lib/insights.ts`: blog posts (newest first), blog topics, white papers, upcoming and
  past events. Add an event to `UPCOMING_EVENTS` and the Events page and the About page's
  events line pick it up; the empty state disappears on its own.
- `src/lib/offices.ts`: the six offices, used by About. Dallas is the HQ.

The Blog and White Papers topic buttons filter in place (`hidden` on the cards). Blog cards
draw their own right and bottom rules and an inner wrapper clips the outer ones, so the grid
stays ruled whatever a filter leaves. The newest article runs full width only while every
topic shows.

The project grid ends with a "Your product could be next" tile that spans whatever is left
of the last row (computed from the project count for three and two columns).

## Images

- **Leadership portraits** (`src/assets/about/leader-*.jpg`, 720 × 900): the owners'
  studio headshots, each scaled so eye-to-chin is 232 px with the eye midpoint at
  (360, 360). Where a source runs out at the top, its backdrop is extended and blurred in;
  Hemant Madaan's (533 px wide) is upscaled and lightly sharpened; Ketki Naidu's (816 px
  square) has 49 px of its plain wall mirrored and blurred in at the top. The tightest source
  (Jignesh Jayaswal's, cut off just below the tie) sets that scale, so any looser framing
  would need canvas added under a suit. Re-frame a replacement the same way rather than
  stretching it. A leader without a photo shows their initials in the same frame, and
  without a `linkedin` URL the badge is left out.
- **Project mockups** (`src/assets/cases/projects/*.webp`): transparent device renders,
  trimmed. GunLox and Loan Mantra use the render from the project page rather than the
  listing image, which is a logo.
- **Hero images.** The hero card sets white text over the top of its image, so a light
  image needs a dark top. `cases/portfolio-hero.jpg` (three phone mockups) and
  `insights/whitepapers/papers-hero.jpg` (the three covers) are composed on the navy ground
  with the lower half faded out under the card; `insights/events/events-hero.jpg` and
  `careers/hero.jpg` are graded copies of the DFW Startup Week photo and
  `teams/extension.jpg`, darkened at the top (`careers/hero.jpg` now serves an industry
  page, through `src/lib/industries.ts`). The Blog hero is `teams/specialist.jpg`.
- **Blog covers** are a mix of 3:2 and 16:9; the cover boxes are 16:9 so the 16:9 covers
  keep their left-hand titles.
