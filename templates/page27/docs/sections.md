# Machine learning engineers: sections

This page's sections, in page order, after the hero. Each one is designed for this page
alone, apart from the FAQ and the close, which are the same on every AgentCraft page. Copy lives in `src/pages/index.astro`,
styles in the Page 27 block of `src/styles/globals.css`.

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

### TrainingSection

`src/components/TrainingSection.astro`, `#training`, dark. A training run of 40 epochs. Columns 1–3: training and validation loss, drawn left to right as the section arrives. The best epoch (lowest validation loss) carries a ringed callout; a dashed rule marks where early stopping ends the run (`patience` epochs later), and past it the curves go faint and dashed over a hatched band, showing what would have happened. Under the chart, an epoch scrubber (a native range input, so arrows, Home and End work; labelled, with a spoken value) moves a marker along both curves; on arrival it sweeps to the best epoch unless it has been moved. Column 4: the reading at the scrubbed epoch (both losses and the gap) and what the run is doing there: learning, best checkpoint, waiting, or memorising. The marker travels inside a clipped lane, by transform, so nothing moves the page. Without the script it rests on the best epoch. Phone: a shorter plot and the reading as a compact strip under it.

### ExplainSection

`src/components/ExplainSection.astro`, `#explain`, light. What drives the prediction. The header splits around a photo of an engineer at a chalkboard. Under it, one frame in two halves. Columns 1–2: feature importance across the model (mean SHAP impact on a churn score), a bar per feature, growing in turn. Columns 3–4: one customer's prediction as a waterfall on a 0–1 axis, from the average customer's score, each input pushing it up (blue) or down (ink) to the final score, with the flagging threshold ruled through it and the verdict under it. Phone: a shorter photo, the top five features, tighter waterfall rows.

### DriftSection

`src/components/DriftSection.astro`, `#drift`, dark. Drift watch. Columns 1–3: one input's distribution, the training data as outlined steps over the live data's bars. While the section is on screen the live data wanders; the drift score (PSI) in column 4 climbs its meter, and when it crosses the 0.20 line the retraining steps run in turn (detect, retrain, validate, deploy), the reference moves onto the live data and the score falls back; the next cycle drifts the other way. The loop stops off screen; bars move by transform only. Without the script, or under reduced motion, the realigned state shows. Phone: a shorter histogram, the score and steps side by side.

### ModelCardSection

`src/components/ModelCardSection.astro`, `#toolkit`, light. The ML toolkit, as the model card that ships with every model. Column 1: the owners' photo. Columns 2–4: the model's name, version and status, what it predicts, four headline figures, then what it was built with, one row per stage, each tool by its logo on a tile: explore (Python, Jupyter), data (pandas, Polars, NumPy, DVC), train (PyTorch, TensorFlow, Keras, scikit-learn), track and tune (MLflow, Weights & Biases, Optuna), scale (Ray, Kubernetes), serve (ONNX, FastAPI, Docker, Hugging Face). The rows fill in from the top. Tablet: the photo over the card. Phone: a short photo with the owners set on it, the four figures in one row, and the stages as a two-column spec list.

### FaqSection

`src/components/FaqSection.astro`. The shared FAQ, with this page's four questions and a photo of an engineer taking notes. The answers are drafts.

### CtaSection

`src/components/CtaSection.astro`. The shared close, with this page's text.

## Photos

| File | Unsplash ID | Shows |
|---|---|---|
| `src/assets/pages/p27-hero.jpg` | fch6vkbouCc (photo 1573495611823-5397efa4fac7) | An engineer in headphones at a standing desk with code on two monitors |
| `src/assets/pages/p27-whiteboard.jpg` | l1PEstNAmUw (photo 1758685848084-fc51214f3cd0) | An engineer working through equations on a chalkboard |
| `src/assets/pages/p27-card.jpg` | pOO-q-KP4tU (photo 1757405930202-b2c3e11570fc) | Three colleagues reviewing results on a laptop |
| `src/assets/pages/p27-faq.jpg` | Ad2TAPEhliE (photo 1758874384555-37d50c0ee81a) | An engineer taking notes beside her laptop |

All Unsplash License.

## Copy to check before launch

- The training run (40 epochs, best at 23, patience 5) and its losses are generated, illustrative curves.
- The churn model's feature importances, the customer #48213 waterfall, the 0.50 flag threshold and "SHAP values · 50k held-out accounts" are illustrative.
- The drift feature (basket value), the PSI figures and the 0.20 retrain line are illustrative; 0.2 is a common rule of thumb, not a standard.
- The model card's figures (AUC 0.87, precision 0.64, 2.1M rows, monthly retraining) are illustrative.
- Hero specs ("1 to 5 engineers") and the FAQ answers are drafts.
