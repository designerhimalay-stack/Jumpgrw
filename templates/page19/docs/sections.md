# Java developers: sections

This page's sections, in page order, after the hero. Each one is designed for this page
alone, apart from the FAQ and the close, which are the same on every AgentCraft page. Copy lives in `src/pages/index.astro`,
styles in the Page 19 block of `src/styles/globals.css`.

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

### HeapSection

`src/components/HeapSection.astro`. The JVM heap, live, on the light tone. The header spans the top. Under it, one frame across all four columns: a label and an "Allocating / GC pause" status along its top, then the heap as a memory map of fixed cells: Eden (16 columns), the two Survivor spaces (3 each) and Old (16), all eight rows tall and all one cell size (the map is a size container; `--ac-cell` divides its width). New objects fill Eden in order; when it is full a hairline sweep runs across it, about one object in ten is copied to the empty Survivor space, survivors that live through three sweeps are promoted to Old, and Old gets a larger sweep when it passes about 78%. A readout counts minor and mixed collections, the last pause and how full Old is. Under the frame, one note per region (with its cell colour) and "Our part". Cells only change colour and the sweep only translates, so nothing moves. The page renders a mid-cycle snapshot, which is what shows without the script or under reduced motion; the loop runs only while the frame is on screen and the tab is visible. Tablets: the notes two by two. Phones: Eden and the survivors on one row, Old under them, the readout two by two, the region tags dropped.

### StreamsSection

`src/components/StreamsSection.astro`. Event streams, on the dark tone. The header splits around a photo of an engineer at his screen (SectionHead's `media`). Under it, a framed Kafka cluster (the Kafka logo on a white badge): one row per topic, the producing service on the left, the topic as a lane of three 12px partitions with messages flowing along it across the middle, the consuming service on the right with its state, a lag meter and its lag. The last row's consumer falls behind on a twelve-second cycle: its lag climbs, amber batches queue at the end of its lane, it scales from 2 to 4 instances and catches up. Messages ride carriers as wide as the lane that only translate; the queue's batches are always in place and only fade; the consumer's three states share one grid cell; the lag figure keeps a fixed width. The flow pauses off screen, and under reduced motion the lanes hold still in sync. Tablets and phones: each row puts the producer and consumer side by side over their lane.

### EcosystemSection

`src/components/EcosystemSection.astro`. The Spring ecosystem as a resolved dependency graph, on the light tone. The header splits around a photo of a developer at his laptop. Under it, one frame: the build file's name along its top, the service at the root (Spring Boot and OpenJDK logos on tiles), a bus dropping to four direct dependencies, one per column (Spring Web, Hibernate, Apache Kafka, Elasticsearch: logo, artifact, what it brings, and "resolved" with a tick), each with a dashed child under it (Spring Security, PostgreSQL, Apache Avro, Kibana), then a toolchain band along the foot: build (Gradle, Maven), test (JUnit 5), run (Docker, Kubernetes, Quarkus) and write (IntelliJ IDEA). On arrival the bus draws, the nodes rise in turn and the ticks appear; only transforms and opacity change. Tablets: the bus becomes a short stem and the dependencies go two by two. Phones: the artifacts and version lines drop, and the toolchain shows its logos alone (their names stay for screen readers).

### FaqSection

`src/components/FaqSection.astro`. The shared FAQ with four Java questions and a photo of two developers at their desks.

### CtaSection

`src/components/CtaSection.astro`. The shared close, with this page's text.

## Photos

| File | Unsplash ID | What it shows |
|---|---|---|
| `src/assets/pages/p19-hero.jpg` | `HQRrEUTBfaU` (photo 1726250873166-814c1f2cb74b) | Two developers reviewing code at a desk |
| `src/assets/pages/p19-streams.jpg` | `svRWQg_lqzA` (photo 1638259116216-e7c65a918fd2) | An engineer writing code at a monitor in a busy office |
| `src/assets/pages/p19-ecosystem.jpg` | `prMyl2XPBy8` (photo 1758874383352-481f911951aa) | A developer in glasses at his laptop |
| `src/assets/pages/p19-faq.jpg` | `VTZ4PVhLFFg` (photo 1732210038505-34a70d3b45a0) | Two developers laughing as they talk through work |

All under the Unsplash License.

## Logos

Simple Icons (CC0; see `THIRD_PARTY_NOTICES.md`), generated into `src/lib/tech-logos.ts`: openjdk, spring, springboot, springsecurity, hibernate, postgresql, apachemaven, gradle, apachekafka, apacheavro, junit5, intellijidea, quarkus, elasticsearch, kibana, docker, kubernetes.

## Copy to check before launch

- The heap is a simulation: the collector name (G1), heap size, pause times (2–9 ms) and promotion rules are illustrative, not measurements.
- The Kafka cluster is a simulation: topic and service names, partition counts and the lag figures (up to 1,840) are examples.
- The dependency graph is an example service ("orders-service", Spring Boot 3, Java 21); check the versions named match what the team wants to lead with.
- Hero specs ("Java 17 and 21", "Within two weeks") and the FAQ answers are drafts.
