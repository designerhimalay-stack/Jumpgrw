# Page templates

Thirty-four AgentCraft pages, each a complete, independent Astro project in its own folder.
Nothing in one folder depends on another, or on the home page at the repository root.
[`PAGES.md`](../PAGES.md) at the repository root indexes them by number and menu.

### Teams

| Folder | Page | Sections after the hero |
|---|---|---|
| [`page1/`](page1/) | MVP launch teams | Race lanes · squad roster · 13-week build chart · launch-week dashboard · FAQ · CTA |
| [`page2/`](page2/) | Product discovery | Annotated sheet · readiness checklist · outlined numerals · blueprint viewer · ledger · FAQ · CTA |
| [`page3/`](page3/) | Prototype to launch | Layer slabs · stack diagram & console · pipeline over a photo · design-vs-build slider · drawn UI states · FAQ · CTA |
| [`page4/`](page4/) | Production teams | Release feed · delivery signals · team-size slider · sprint loop · FAQ · CTA |
| [`page5/`](page5/) | QA pods | Live test run · testing pyramid · coverage matrix · cost-of-bugs curve · FAQ · CTA |
| [`page6/`](page6/) | DevOps pods | Running pipeline · status board · infrastructure as code · follow-the-sun dial · FAQ · CTA |
| [`page7/`](page7/) | Staff augmentation | Two teams merging · working-hours overlap · onboarding timeline · scaling year · FAQ · CTA |
| [`page8/`](page8/) | Specialist developers | Specialty list with pointer photos · profile radar · vetting funnel · FAQ · CTA |
| [`page9/`](page9/) | Global capability center | Dotted globe of the hubs · build-operate-transfer · floor plan · governance · FAQ · CTA |

### Technologies

| Folder | Page | Sections after the hero |
|---|---|---|
| [`page10/`](page10/) | Product managers | Roadmap in motion · a PM's week · tools keyboard · metric tree · FAQ · CTA |
| [`page11/`](page11/) | UX/UI designers | Tokens to component · research wall · canvas tool belt · accessible by default · FAQ · CTA |
| [`page12/`](page12/) | Business analysts | Requirement to story · swimlane process map · stakeholder map · toolkit as a spec's contents · FAQ · CTA |
| [`page13/`](page13/) | React developers | Render path on a component tree · ecosystem in orbit · performance scorecard · FAQ · CTA |
| [`page14/`](page14/) | Angular developers | Signals graph · upgrade staircase · monorepo blast radius · toolchain periodic table · FAQ · CTA |
| [`page15/`](page15/) | Full stack developers | Request waterfall · one feature end to end · stack picker · FAQ · CTA |
| [`page16/`](page16/) | Node.js developers | Event loop step by step · package.json installing · API under load · FAQ · CTA |
| [`page17/`](page17/) | Python developers | Notebook that runs · framework picker · toolkit as a dict · FAQ · CTA |
| [`page18/`](page18/) | .NET developers | Architecture rings · modernisation bars · solution explorer · FAQ · CTA |
| [`page19/`](page19/) | Java developers | JVM heap · Kafka cluster · Spring dependency graph · FAQ · CTA |
| [`page20/`](page20/) | PHP developers | Version climb · platform flip cards · legacy health checklist · FAQ · CTA |
| [`page21/`](page21/) | iOS developers | Code to preview · release on a lock screen · toolchain home screen · FAQ · CTA |
| [`page22/`](page22/) | Android developers | Every screen · staged rollout · dependency tree · FAQ · CTA |
| [`page23/`](page23/) | Kotlin developers | Java to Kotlin · Multiplatform prism · coroutine trace · search palette · FAQ · CTA |
| [`page24/`](page24/) | React Native developers | One codebase, two phones · over-the-air update · transit map · FAQ · CTA |
| [`page25/`](page25/) | Flutter developers | Widget tree · frame chart · platform honeycomb · FAQ · CTA |
| [`page26/`](page26/) | Generative AI engineers | Ask-retrieve-answer · model router · eval board · FAQ · CTA |
| [`page27/`](page27/) | Machine learning engineers | Training run · explainability · drift watch · model card · FAQ · CTA |
| [`page28/`](page28/) | Data engineers | Pipeline DAG · bronze, silver, gold · freshness tanks · platform flow · FAQ · CTA |
| [`page29/`](page29/) | Automation QA engineers | Script and browser in sync · sharding · flaky tests tamed · automation rack · FAQ · CTA |

The Technologies menu's QA Engineers and DevOps Engineers link to `page5/` and `page6/`.

### X-Shore

| Folder | Page | Sections after the hero |
|---|---|---|
| [`page30/`](page30/) | United States (onshore) | Time zones · when onshore · roles · ways to work · compliance · FAQ · CTA |
| [`page31/`](page31/) | Mexico (nearshore) | Stack type case · ways to work as a swatch fan · capacity equation · roles wall · how it works · dossiers · FAQ · CTA |
| [`page32/`](page32/) | Canada (nearshore) | Flight arcs to US hubs · English and French · people mosaic · stack in a frosted window · boarding-pass steps · FAQ · CTA |
| [`page33/`](page33/) | India (offshore) | Overnight board · roles · talent hubs map · blended cost · bench depth pictogram · FAQ · CTA |
| [`page34/`](page34/) | GCC from India | Ramp to 150 · city comparison · operating model · what we handle · FAQ · CTA |

Every section is designed for its page; no two pages share a section design, except the
FAQ and the closing call to action, which are the same on every page (each with its own
text, and the FAQ with its own photo). Each page
has as many sections as its content needs.

Each folder has its own `package.json` and `package-lock.json`, Astro config, components,
styles, photos, check script, GitHub Pages workflow, README and notices. The page itself is
`src/pages/index.astro`, so it is served at the root of wherever you host it.

## Host one page on its own

Take the folder, and nothing else:

```sh
cd templates/page1        # or copy the folder anywhere, or make it its own repository
npm ci
npm run verify            # must end "check-site: OK"
```

Then deploy `dist/` to any static host, or push the folder as its own repository and use
its `.github/workflows/deploy.yml` (see the folder's README). Set `PUBLIC_SITE_URL` to
where the main AgentCraft site lives, so the navbar and footer links to the home page and
the other pages point there.

## Host everything together

From the repository root, `npm run build:all` builds the home page into `dist/` and each
template into `dist/page1/` … `dist/page34/`, checking each one on the way.
The root deploy workflow runs exactly that, so on GitHub Pages the pages are at
`/agentcraft/page1/` and so on, which is where the navbar's Teams, Technologies and X-Shore menus link.

## What the pages share

The hero, navbar, footer, fonts, colours and grid are the same on every page; everything
between the hero and the footer is the page's own. Each folder holds its own copy of all
of it, so a change to one page never touches another. To change the navbar or hero on
every page, make the change in each folder.
