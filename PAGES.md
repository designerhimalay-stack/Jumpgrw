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
| 1 | MVP launch teams | [`src/pages/page1`](src/pages/page1/) | `/page1/` | Teams › Team models |
| 2 | Product discovery | [`src/pages/page2`](src/pages/page2/) | `/page2/` | Teams › Launch |
| 3 | Prototype to launch | [`src/pages/page3`](src/pages/page3/) | `/page3/` | Teams › Launch |
| 4 | Production teams | [`src/pages/page4`](src/pages/page4/) | `/page4/` | Teams › Team models |
| 7 | Staff augmentation | [`src/pages/page7`](src/pages/page7/) | `/page7/` | Teams › Flexible |
| 8 | Specialist developers | [`src/pages/page8`](src/pages/page8/) | `/page8/` | Teams › Flexible |
| 9 | Global capability center | [`src/pages/page9`](src/pages/page9/) | `/page9/` | Teams › Flexible |

## Technologies menu

| # | Page | Folder | Path | Menu |
|---|---|---|---|---|
| 10 | Product managers | [`src/pages/page10`](src/pages/page10/) | `/page10/` | Technologies › Product & experience |
| 11 | UX/UI designers | [`src/pages/page11`](src/pages/page11/) | `/page11/` | Technologies › Product & experience |
| 12 | Business analysts | [`src/pages/page12`](src/pages/page12/) | `/page12/` | Technologies › Product & experience |
| 13 | React developers | [`src/pages/page13`](src/pages/page13/) | `/page13/` | Technologies › Frontend |
| 14 | Angular developers | [`src/pages/page14`](src/pages/page14/) | `/page14/` | Technologies › Frontend |
| 15 | Full stack developers | [`src/pages/page15`](src/pages/page15/) | `/page15/` | Technologies › Backend |
| 16 | Node.js developers | [`src/pages/page16`](src/pages/page16/) | `/page16/` | Technologies › Backend |
| 17 | Python developers | [`src/pages/page17`](src/pages/page17/) | `/page17/` | Technologies › Backend |
| 18 | .NET developers | [`src/pages/page18`](src/pages/page18/) | `/page18/` | Technologies › Backend |
| 19 | Java developers | [`src/pages/page19`](src/pages/page19/) | `/page19/` | Technologies › Backend |
| 20 | PHP developers | [`src/pages/page20`](src/pages/page20/) | `/page20/` | Technologies › Backend |
| 21 | iOS developers | [`src/pages/page21`](src/pages/page21/) | `/page21/` | Technologies › Mobile |
| 22 | Android developers | [`src/pages/page22`](src/pages/page22/) | `/page22/` | Technologies › Mobile |
| 23 | Kotlin developers | [`src/pages/page23`](src/pages/page23/) | `/page23/` | Technologies › Mobile |
| 24 | React Native developers | [`src/pages/page24`](src/pages/page24/) | `/page24/` | Technologies › Mobile |
| 25 | Flutter developers | [`src/pages/page25`](src/pages/page25/) | `/page25/` | Technologies › Mobile |
| 26 | Generative AI engineers | [`src/pages/page26`](src/pages/page26/) | `/page26/` | Technologies › AI & data |
| 27 | Machine learning engineers | [`src/pages/page27`](src/pages/page27/) | `/page27/` | Technologies › AI & data |
| 28 | Data engineers | [`src/pages/page28`](src/pages/page28/) | `/page28/` | Technologies › AI & data |
| 5 | QA engineers | [`src/pages/page5`](src/pages/page5/) | `/page5/` | Technologies › Delivery |
| 29 | Automation QA engineers | [`src/pages/page29`](src/pages/page29/) | `/page29/` | Technologies › Delivery |
| 6 | DevOps engineers | [`src/pages/page6`](src/pages/page6/) | `/page6/` | Technologies › Delivery |

## X-Shore menu

| # | Page | Folder | Path | Menu |
|---|---|---|---|---|
| 30 | United States | [`src/pages/page30`](src/pages/page30/) | `/page30/` | X-Shore › Onshore |
| 31 | Mexico | [`src/pages/page31`](src/pages/page31/) | `/page31/` | X-Shore › Nearshore |
| 32 | Canada | [`src/pages/page32`](src/pages/page32/) | `/page32/` | X-Shore › Nearshore |
| 33 | India | [`src/pages/page33`](src/pages/page33/) | `/page33/` | X-Shore › Offshore |
| 34 | GCC from India | [`src/pages/page34`](src/pages/page34/) | `/page34/` | X-Shore › Offshore |

Each page's own sections are listed in its folder's `README.md` ("The page:") and described
in its `docs/sections.md`.
