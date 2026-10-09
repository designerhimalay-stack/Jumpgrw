# Detail pages, hubs and the shared head

The pieces behind the article, case-study, white-paper, event, industry, contact, FAQ,
engagement-models and legal pages. All of them sit on the subpage grammar
(`data-ac-sec` tones, `SectionHead`, `GridRules`, `Joints`, `toggleInView`) and change no
existing section.

## Head and SEO: `src/layouts/Layout.astro`

One layout for every page. It writes the title (`pageTitle()` adds " · JumpGrowth"), the
description, a canonical link and `og:url` (only when `SITE_URL` is set), Open Graph and
Twitter cards with a 1200 x 630 image cropped by `getImage`, theme colour, favicons
(`src/assets/brand/icon-*.png`) and structured data: Organization on every page, WebSite on
the home page, BreadcrumbList when a page passes `breadcrumbs`, and anything in `schema`
(BlogPosting on articles, FAQPage on `/faq/` and industry pages). `noindex` keeps a page out
of search (the 404). Company facts live in `src/lib/site.ts`.

`pageTitle()` also shortens a long title (an article headline) to the part before its
colon, and `metaDescription()` cuts a description to 160 characters at a sentence or word,
so search results don't truncate them mid-word.

The layout also renders `CookieNotice.astro`: a fixed card at the foot of the screen (so it
moves nothing), shown on a first visit after the opening paint. "Accept all" lets client
videos play in the page; "Essential only" (and no choice yet) opens them on YouTube instead.
The choice lives in `localStorage` (`src/lib/consent.ts`); the footer's "Cookie settings"
reopens the card. The site sets no cookies of its own; if analytics or another third party
is ever added, gate it on `getConsent() === "all"` and list it in the privacy policy.

`integrations/seo-files.mjs` writes `sitemap.xml` and `robots.txt` after the build from the
pages Astro produced, leaving out the 404 page and the redirect stubs.
`integrations/legacy-routes.mjs` is the map of old `/pageN/` addresses to their named paths;
`astro.config.mjs` turns it into redirects whose destinations carry the base path.

## Openings

| Component | Use | Notes |
|---|---|---|
| `PageHero` (kit, `@pg/page30`) | Hubs and topic pages | Photo, specs strip, optional card |
| `DetailHero.astro` | Article, case study, paper, event | Long title or product name; `fit="contain"` sets a device render or cover on the plain navy field with one glow; the picture keeps a fixed shape so nothing moves on load |
| `SimpleHero.astro` | Privacy policy, terms of use, 404 | No picture; label, two-tone headline, lede, optional children |
| `ContactForm hero` | `/contact/` | The form itself opens the page on the navy field |

All of them hand the navbar's tone to the page through `src/lib/nav-tone.ts`
(`followHero`): dark while the opening is under the bar, light after.

## Bodies

- **`insights/ArticleBody.astro`**: reading column (about 70 characters) with a sticky "On
  this page" list from the h2s at 1100px and up; tables scroll inside their own frame on
  phones. Reads any `{ blocks }` in the `ArticleBlock` shape (articles, privacy policy,
  terms of use).
- **`cases/CaseDetail.astro`**: overview, then `CaseInsights` (number cards; a features bar
  chart when there are two or more feature groups; a stack donut when the stack spans two or
  more layers), problem cards, solution groups, `CaseArchitecture` (stack by layer, shown
  when there are two or more layers), and previous/next. Parts with no text are left out;
  bands alternate white and tint. A lone last card stretches to fill its row.
- **`insights/PaperDetail.astro`**, **`insights/EventDetail.astro`**: what the paper covers
  and its highlights; the event's facts and status. Neither invents text beyond its data.
- **`industries/IndustryDetail.astro`**: challenges (numbered cards), solutions (ruled
  two-column list), process (numbered timeline), why us (navy band), client results (with
  location), related case studies. `FaqSection` follows with the industry's own questions.
- **`industries/IndustriesGrid.astro`**, **`EngagementModels.astro`**: the two hubs.

## Spacing

The subpage stylesheet spaces a tint/white edge only when a component's `<script>` sits
between the two sections. Components here that render several sections back to back rely on
the matching direct-adjacency rules in `src/styles/globals.css`.

## Data

| Folder | Read by | Page |
|---|---|---|
| `src/data/blog/*.json` | `src/lib/articles.ts` | `/blog/[slug]/` |
| `src/data/cases/*.json` | `src/lib/cases.ts` | `/case-studies/[slug]/` |
| `src/data/papers/*.json` | `src/lib/papers.ts` | `/whitepaper/[slug]/` |
| `src/data/industries/*.json` | `src/lib/industries.ts` | `/industries/[slug]/` |
| `src/data/legal/privacy-policy.json` | the page itself | `/privacy-policy/` |

The text is JumpGrowth's own. Article and policy text is stored as escaped HTML (inline
`<strong>`, `<em>`, `<a>` only); a link written `@blog/<slug>` points at another article.
