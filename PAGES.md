# Page index

Every page of the AgentCraft site, by number. The home page is this repository's root
project; each numbered page is its own independent Astro project in `templates/pageN/`,
which can be hosted on its own (see [`templates/README.md`](templates/README.md)).

- **Folder:** where the page's project lives. Its page is `src/pages/index.astro`.
- **Path:** where `npm run build:all` (and the deploy) publishes it, under the site's base
  (`/agentcraft/` on GitHub Pages).
- **Menu:** where the navbar links to it.
- **Brand:** each folder's name and logo are set in its own `src/lib/brand.ts`, and only
  there.

To run one page locally: `cd templates/pageN && npm ci && npm run dev`, then open
http://localhost:4321/.

## Home

| Page | Folder | Path |
|---|---|---|
| Home | repository root | `/` |

## Team models: Teams menu

| # | Page | Folder | Path | Menu |
|---|---|---|---|---|
| 1 | MVP launch teams | [`templates/page1`](templates/page1/) | `/page1/` | Teams › Team models |
| 2 | Product discovery | [`templates/page2`](templates/page2/) | `/page2/` | Teams › Launch |
| 3 | Prototype to launch | [`templates/page3`](templates/page3/) | `/page3/` | Teams › Launch |
| 4 | Production teams | [`templates/page4`](templates/page4/) | `/page4/` | Teams › Team models |
| 7 | Staff augmentation | [`templates/page7`](templates/page7/) | `/page7/` | Teams › Flexible |
| 8 | Specialist developers | [`templates/page8`](templates/page8/) | `/page8/` | Teams › Flexible |
| 9 | Global capability center | [`templates/page9`](templates/page9/) | `/page9/` | Teams › Flexible |

## Technologies menu

| # | Page | Folder | Path | Menu |
|---|---|---|---|---|
| 10 | Product managers | [`templates/page10`](templates/page10/) | `/page10/` | Technologies › Product & experience |
| 11 | UX/UI designers | [`templates/page11`](templates/page11/) | `/page11/` | Technologies › Product & experience |
| 12 | Business analysts | [`templates/page12`](templates/page12/) | `/page12/` | Technologies › Product & experience |
| 13 | React developers | [`templates/page13`](templates/page13/) | `/page13/` | Technologies › Frontend |
| 14 | Angular developers | [`templates/page14`](templates/page14/) | `/page14/` | Technologies › Frontend |
| 15 | Full stack developers | [`templates/page15`](templates/page15/) | `/page15/` | Technologies › Backend |
| 16 | Node.js developers | [`templates/page16`](templates/page16/) | `/page16/` | Technologies › Backend |
| 17 | Python developers | [`templates/page17`](templates/page17/) | `/page17/` | Technologies › Backend |
| 18 | .NET developers | [`templates/page18`](templates/page18/) | `/page18/` | Technologies › Backend |
| 19 | Java developers | [`templates/page19`](templates/page19/) | `/page19/` | Technologies › Backend |
| 20 | PHP developers | [`templates/page20`](templates/page20/) | `/page20/` | Technologies › Backend |
| 21 | iOS developers | [`templates/page21`](templates/page21/) | `/page21/` | Technologies › Mobile |
| 22 | Android developers | [`templates/page22`](templates/page22/) | `/page22/` | Technologies › Mobile |
| 23 | Kotlin developers | [`templates/page23`](templates/page23/) | `/page23/` | Technologies › Mobile |
| 24 | React Native developers | [`templates/page24`](templates/page24/) | `/page24/` | Technologies › Mobile |
| 25 | Flutter developers | [`templates/page25`](templates/page25/) | `/page25/` | Technologies › Mobile |
| 26 | Generative AI engineers | [`templates/page26`](templates/page26/) | `/page26/` | Technologies › AI & data |
| 27 | Machine learning engineers | [`templates/page27`](templates/page27/) | `/page27/` | Technologies › AI & data |
| 28 | Data engineers | [`templates/page28`](templates/page28/) | `/page28/` | Technologies › AI & data |
| 5 | QA engineers | [`templates/page5`](templates/page5/) | `/page5/` | Technologies › Delivery |
| 29 | Automation QA engineers | [`templates/page29`](templates/page29/) | `/page29/` | Technologies › Delivery |
| 6 | DevOps engineers | [`templates/page6`](templates/page6/) | `/page6/` | Technologies › Delivery |

## X-Shore menu

| # | Page | Folder | Path | Menu |
|---|---|---|---|---|
| 30 | United States | [`templates/page30`](templates/page30/) | `/page30/` | X-Shore › Onshore |
| 31 | Mexico | [`templates/page31`](templates/page31/) | `/page31/` | X-Shore › Nearshore |
| 32 | Canada | [`templates/page32`](templates/page32/) | `/page32/` | X-Shore › Nearshore |
| 33 | India | [`templates/page33`](templates/page33/) | `/page33/` | X-Shore › Offshore |
| 34 | GCC from India | [`templates/page34`](templates/page34/) | `/page34/` | X-Shore › Offshore |

Each page's own sections are listed in its folder's `README.md` ("The page:") and described
in its `docs/sections.md`.
