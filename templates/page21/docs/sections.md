# iOS developers: sections

This page's sections, in page order, after the hero. Each one is designed for this page
alone, apart from the FAQ and the close, which are the same on every AgentCraft page. Copy lives in `src/pages/index.astro`,
styles in the Page 21 block of `src/styles/globals.css`.

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

### PreviewSection

`src/components/PreviewSection.astro`. Code to preview, on the dark tone. One frame split in two: a SwiftUI file (`ProfileView.swift`, lightly highlighted) on the left, a preview canvas on the right with an iPhone drawn flat on a dotted ground. As the section arrives, the code's blocks light in turn and the matching piece of the screen (avatar, name, stats, switch, button) appears in the phone, outlined while it is the live one; chips under the phone name each piece. Every piece keeps its box from the start, so nothing moves. Without the script, or under reduced motion, the whole screen shows. Phones: the code over the canvas, tabs set narrow, a smaller phone, no chips.

### LockStackSection

`src/components/LockStackSection.astro`. A release told by the lock screen, on the light tone. A framed team photo holds columns 1–3 and wipes open; a phone with a metal rim stands over its right edge. The release's notifications (build uploaded, TestFlight, in review, approved, released) arrive one by one and stack upward from the foot of the screen, newest on top. Each banner has its own slot from the start; only opacity and a small drop change. Phones: the photo becomes a short band and the phone stands over its lower edge.

### HomeScreenSection

`src/components/HomeScreenSection.astro`. The toolchain as a home screen, on the dark tone. A framed screen with a blue wallpaper holds a photo widget of an engineer at work, a figure widget, eight tools as app icons (brand-colour marks on white tiles, each named) and the core four (Apple, Swift, Xcode, App Store) in a dock. Everything settles from a slight zoom as the section arrives, one after another. Tablets and phones: four columns, the two widgets side by side on top.

### FaqSection

`src/components/FaqSection.astro`. The shared FAQ, with four iOS questions and a photo of a developer at a MacBook with an iPhone beside it.

### CtaSection

`src/components/CtaSection.astro`. The shared close on the accent: "Your next build, approved."

## Photos

| File | Unsplash ID | Shows |
|---|---|---|
| `src/assets/pages/p21-hero.jpg` | PNodyzJcccA (photo 1606189934846-a527add8a77b) | A developer checks an app on an iPhone beside a MacBook |
| `src/assets/pages/p21-release.jpg` | AmEeEB1g3XQ (photo 1570215171424-f74325192b55) | A developer with an iPhone and a mouse at a MacBook |
| `src/assets/pages/p21-toolchain.jpg` | g4c1wNljbBI (photo 1690384058153-09d5cfe13690) | An engineer at a desk with an iMac and a MacBook |
| `src/assets/pages/p21-faq.jpg` | 2JDDn7iSGH8 (photo 1573164574472-797cdf4a583a) | A developer coding on a MacBook with an iPhone plugged in |

All under the Unsplash License.

## Copy to check before launch

- Hero specs: "Starts within two weeks".
- The SwiftUI code and the preview's contents (name, 128 builds, 99.9% crash-free) are illustrative.
- The release timeline (build 318, 40 testers, the times) is illustrative.
- The widget figure "99.8% crash-free users, last 30 days" is illustrative.
- The FAQ answers are drafts.

## Logos

Simple Icons (CC0): iOS, CocoaPods, fastlane, Firebase, Sentry, GitHub Actions, Figma, RevenueCat, Apple, Swift, Xcode, App Store. TestFlight is named in text only (not in Simple Icons); its notification uses a plain paper-plane glyph.
