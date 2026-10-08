# Page index

Every page of the AgentCraft site, by number. The whole site is one Astro project: the
home page is `src/pages/index.astro`, and each numbered page is a route at
`src/pages/pageN/index.astro`. Each page's own sections, styles and assets live under
`src/_pages/pageN/` (imported through the `@pg/*` alias); the navbar and footer are shared
from `src/components/`.

- **Folder:** the page's route (`src/pages/pageN/index.astro`); its sections live in
  `src/_pages/pageN/`.
- **Path:** where the page is served, under the site's base (`/agentcraft/` on GitHub Pages).
- **Menu:** where the navbar links to it.
- **Brand:** the shared name and logo are set in `src/lib/brand.ts`.

To run the site locally: `npm ci && npm run dev`, then open http://localhost:4321/ and
navigate to any page.

## Home

| Page | Folder | Path |
|---|---|---|
| Home | repository root | `/` |

## Team models: Teams menu

| # | Page | Folder | Path | Menu |
|---|---|---|---|---|
| 1 | MVP launch teams | [`src/pages/page1`](src/pages/page1/) | `/mvp-launch-teams/` | Teams › Team models |
| 2 | Product discovery | [`src/pages/page2`](src/pages/page2/) | `/product-discovery/` | Teams › Launch |
| 3 | Prototype to launch | [`src/pages/page3`](src/pages/page3/) | `/prototype-to-launch/` | Teams › Launch |
| 4 | Production teams | [`src/pages/page4`](src/pages/page4/) | `/production-teams/` | Teams › Team models |
| 7 | Staff augmentation | [`src/pages/page7`](src/pages/page7/) | `/staff-augmentation/` | Teams › Flexible |
| 8 | Specialist developers | [`src/pages/page8`](src/pages/page8/) | `/specialist-developers/` | Teams › Flexible |
| 9 | Global capability center | [`src/pages/page9`](src/pages/page9/) | `/global-capability-center/` | Teams › Flexible |

## Technologies menu

| # | Page | Folder | Path | Menu |
|---|---|---|---|---|
| 10 | Product managers | [`src/pages/page10`](src/pages/page10/) | `/hire-product-managers/` | Technologies › Product & experience |
| 11 | UX/UI designers | [`src/pages/page11`](src/pages/page11/) | `/hire-ux-ui-designers/` | Technologies › Product & experience |
| 12 | Business analysts | [`src/pages/page12`](src/pages/page12/) | `/hire-business-analysts/` | Technologies › Product & experience |
| 13 | React developers | [`src/pages/page13`](src/pages/page13/) | `/hire-react-developers/` | Technologies › Frontend |
| 14 | Angular developers | [`src/pages/page14`](src/pages/page14/) | `/hire-angular-developers/` | Technologies › Frontend |
| 15 | Full stack developers | [`src/pages/page15`](src/pages/page15/) | `/hire-full-stack-developers/` | Technologies › Backend |
| 16 | Node.js developers | [`src/pages/page16`](src/pages/page16/) | `/hire-nodejs-developers/` | Technologies › Backend |
| 17 | Python developers | [`src/pages/page17`](src/pages/page17/) | `/hire-python-developers/` | Technologies › Backend |
| 18 | .NET developers | [`src/pages/page18`](src/pages/page18/) | `/hire-dotnet-developers/` | Technologies › Backend |
| 19 | Java developers | [`src/pages/page19`](src/pages/page19/) | `/hire-java-developers/` | Technologies › Backend |
| 20 | PHP developers | [`src/pages/page20`](src/pages/page20/) | `/hire-php-developers/` | Technologies › Backend |
| 21 | iOS developers | [`src/pages/page21`](src/pages/page21/) | `/hire-ios-developers/` | Technologies › Mobile |
| 22 | Android developers | [`src/pages/page22`](src/pages/page22/) | `/hire-android-developers/` | Technologies › Mobile |
| 23 | Kotlin developers | [`src/pages/page23`](src/pages/page23/) | `/hire-kotlin-developers/` | Technologies › Mobile |
| 24 | React Native developers | [`src/pages/page24`](src/pages/page24/) | `/hire-react-native-developers/` | Technologies › Mobile |
| 25 | Flutter developers | [`src/pages/page25`](src/pages/page25/) | `/hire-flutter-developers/` | Technologies › Mobile |
| 26 | Generative AI engineers | [`src/pages/page26`](src/pages/page26/) | `/hire-generative-ai-engineers/` | Technologies › AI & data |
| 27 | Machine learning engineers | [`src/pages/page27`](src/pages/page27/) | `/hire-machine-learning-engineers/` | Technologies › AI & data |
| 28 | Data engineers | [`src/pages/page28`](src/pages/page28/) | `/hire-data-engineers/` | Technologies › AI & data |
| 5 | QA engineers | [`src/pages/page5`](src/pages/page5/) | `/hire-qa-engineers/` | Technologies › Delivery |
| 29 | Automation QA engineers | [`src/pages/page29`](src/pages/page29/) | `/hire-automation-qa-engineers/` | Technologies › Delivery |
| 6 | DevOps engineers | [`src/pages/page6`](src/pages/page6/) | `/hire-devops-engineers/` | Technologies › Delivery |

## X-Shore menu

| # | Page | Folder | Path | Menu |
|---|---|---|---|---|
| 30 | United States | [`src/pages/page30`](src/pages/page30/) | `/onshore-developers-usa/` | X-Shore › Onshore |
| 31 | Mexico | [`src/pages/page31`](src/pages/page31/) | `/nearshore-developers-mexico/` | X-Shore › Nearshore |
| 32 | Canada | [`src/pages/page32`](src/pages/page32/) | `/nearshore-developers-canada/` | X-Shore › Nearshore |
| 33 | India | [`src/pages/page33`](src/pages/page33/) | `/offshore-developers-india/` | X-Shore › Offshore |
| 34 | GCC from India | [`src/pages/page34`](src/pages/page34/) | `/global-capability-center-india/` | X-Shore › Offshore |

Each page's own sections are listed in its folder's `README.md` ("The page:") and described
in its `docs/sections.md`.
