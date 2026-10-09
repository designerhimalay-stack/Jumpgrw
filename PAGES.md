# Page index

Every page of the JumpGrowth site. The whole site is one Astro project: each page is a
route under `src/pages/`, and every page uses the one shared layout,
`src/layouts/Layout.astro`, for its head (title, canonical address, share cards,
structured data). The navbar, footer and contact form are shared from `src/components/`.

- **Route:** the page's file under `src/pages/`.
- **Kit:** the team, technology and X-Shore pages keep their own sections, styles and assets
  in `src/_pages/pageN/` (imported as `@pg/pageN`). They were first served at `/pageN/`;
  those addresses now redirect to the paths below (`integrations/legacy-routes.mjs`).
- **Path:** where the page is served, under the site's base (`/agentcraft/` on GitHub Pages).
- **Text as data:** articles, case studies, papers, industries and the legal pages keep
  their text in `src/data/` and are rendered by the `[slug]` routes.

To run the site locally: `npm ci && npm run dev`, then open http://localhost:4321/.

## Home and company

| Page | Route | Path | Menu |
|---|---|---|---|
| Home | `src/pages/index.astro` | `/` | |
| About | `src/pages/about/` | `/about/` | Company › Company |
| Case studies | `src/pages/case-studies/index.astro` | `/case-studies/` | Case Studies; Company › Proof |
| Case study (13) | `src/pages/case-studies/[slug].astro` | `/case-studies/<slug>/` | from Case Studies |
| Industries | `src/pages/industries/index.astro` | `/industries/` | Company › Proof |
| Industry (8) | `src/pages/industries/[slug].astro` | `/industries/<slug>/` | from Industries |
| How we build teams | `src/pages/how-we-build-teams/` | `/how-we-build-teams/` | Company › Proof |
| Contact | `src/pages/contact/` | `/contact/` | Company › Connect |
| Engagement models | `src/pages/engagement-models/` | `/engagement-models/` | Teams (overview) |
| Privacy policy | `src/pages/privacy-policy/` | `/privacy-policy/` | footer, every form, cookie notice |
| Terms of use | `src/pages/terms-of-use/` | `/terms-of-use/` | footer, every form |
| Not found | `src/pages/404.astro` | any missing address | |

## Insights

| Page | Route | Path | Menu |
|---|---|---|---|
| Blog | `src/pages/blog/index.astro` | `/blog/` (`?topic=` filters) | Insights › Explore |
| Article (10) | `src/pages/blog/[slug].astro` | `/blog/<slug>/` | from Blog |
| White papers | `src/pages/whitepaper/index.astro` | `/whitepaper/` | Insights › Explore |
| White paper (3) | `src/pages/whitepaper/[slug].astro` | `/whitepaper/<slug>/` | from White Papers |
| Events | `src/pages/events/index.astro` | `/events/` | Insights › Explore |
| Event | `src/pages/events/[slug].astro` | `/events/<slug>/` | from Events |
| FAQ | `src/pages/faq/` | `/faq/` | Insights › Resources |

## Team models: Teams menu

| Page | Route | Kit | Path | Menu |
|---|---|---|---|---|
| MVP launch teams | `src/pages/mvp-launch-teams/` | `page1` | `/mvp-launch-teams/` | Teams › Launch |
| Product discovery | `src/pages/product-discovery/` | `page2` | `/product-discovery/` | Teams › Launch |
| Prototype to launch | `src/pages/prototype-to-launch/` | `page3` | `/prototype-to-launch/` | Teams › Launch |
| Production teams | `src/pages/production-teams/` | `page4` | `/production-teams/` | Teams › Build & run |
| QA pods | `src/pages/hire-qa-engineers/` | `page5` | `/hire-qa-engineers/` | Teams › Build & run |
| DevOps pods | `src/pages/hire-devops-engineers/` | `page6` | `/hire-devops-engineers/` | Teams › Build & run |
| Staff augmentation | `src/pages/staff-augmentation/` | `page7` | `/staff-augmentation/` | Teams › Extend |
| Specialist developers | `src/pages/specialist-developers/` | `page8` | `/specialist-developers/` | Teams › Extend |
| Global capability center | `src/pages/global-capability-center/` | `page9` | `/global-capability-center/` | Teams › Extend |

## Technologies menu

| Page | Route | Kit | Path | Menu |
|---|---|---|---|---|
| Product managers | `src/pages/hire-product-managers/` | `page10` | `/hire-product-managers/` | Technologies › Product & experience |
| UX/UI designers | `src/pages/hire-ux-ui-designers/` | `page11` | `/hire-ux-ui-designers/` | Technologies › Product & experience |
| Business analysts | `src/pages/hire-business-analysts/` | `page12` | `/hire-business-analysts/` | Technologies › Product & experience |
| React developers | `src/pages/hire-react-developers/` | `page13` | `/hire-react-developers/` | Technologies › Frontend |
| Angular developers | `src/pages/hire-angular-developers/` | `page14` | `/hire-angular-developers/` | Technologies › Frontend |
| Full stack developers | `src/pages/hire-full-stack-developers/` | `page15` | `/hire-full-stack-developers/` | Technologies › Backend |
| Node.js developers | `src/pages/hire-nodejs-developers/` | `page16` | `/hire-nodejs-developers/` | Technologies › Backend |
| Python developers | `src/pages/hire-python-developers/` | `page17` | `/hire-python-developers/` | Technologies › Backend |
| .NET developers | `src/pages/hire-dotnet-developers/` | `page18` | `/hire-dotnet-developers/` | Technologies › Backend |
| Java developers | `src/pages/hire-java-developers/` | `page19` | `/hire-java-developers/` | Technologies › Backend |
| PHP developers | `src/pages/hire-php-developers/` | `page20` | `/hire-php-developers/` | Technologies › Backend |
| iOS developers | `src/pages/hire-ios-developers/` | `page21` | `/hire-ios-developers/` | Technologies › Mobile |
| Android developers | `src/pages/hire-android-developers/` | `page22` | `/hire-android-developers/` | Technologies › Mobile |
| Kotlin developers | `src/pages/hire-kotlin-developers/` | `page23` | `/hire-kotlin-developers/` | Technologies › Mobile |
| React Native developers | `src/pages/hire-react-native-developers/` | `page24` | `/hire-react-native-developers/` | Technologies › Mobile |
| Flutter developers | `src/pages/hire-flutter-developers/` | `page25` | `/hire-flutter-developers/` | Technologies › Mobile |
| Generative AI engineers | `src/pages/hire-generative-ai-engineers/` | `page26` | `/hire-generative-ai-engineers/` | Technologies › AI & data |
| Machine learning engineers | `src/pages/hire-machine-learning-engineers/` | `page27` | `/hire-machine-learning-engineers/` | Technologies › AI & data |
| Data engineers | `src/pages/hire-data-engineers/` | `page28` | `/hire-data-engineers/` | Technologies › AI & data |
| QA engineers | `src/pages/hire-qa-engineers/` | `page5` | `/hire-qa-engineers/` | Technologies › Delivery |
| Automation QA engineers | `src/pages/hire-automation-qa-engineers/` | `page29` | `/hire-automation-qa-engineers/` | Technologies › Delivery |
| DevOps engineers | `src/pages/hire-devops-engineers/` | `page6` | `/hire-devops-engineers/` | Technologies › Delivery |

## X-Shore menu

| Page | Route | Kit | Path | Menu |
|---|---|---|---|---|
| United States | `src/pages/onshore-developers-usa/` | `page30` | `/onshore-developers-usa/` | X-Shore › Onshore |
| Mexico | `src/pages/nearshore-developers-mexico/` | `page31` | `/nearshore-developers-mexico/` | X-Shore › Nearshore |
| Canada | `src/pages/nearshore-developers-canada/` | `page32` | `/nearshore-developers-canada/` | X-Shore › Nearshore |
| India | `src/pages/offshore-developers-india/` | `page33` | `/offshore-developers-india/` | X-Shore › Offshore |
| GCC from India | `src/pages/global-capability-center-india/` | `page34` | `/global-capability-center-india/` | X-Shore › Offshore |

Each kit's own sections are listed in its folder's `README.md` ("The page:") and described
in its `docs/sections.md`.

## Generated files

`sitemap.xml` (when `SITE_URL` is set) and `robots.txt` are written at build time from the
pages actually built (`integrations/seo-files.mjs`). The 404 page and the redirects at the
old `/pageN/` addresses are left out of the sitemap.
