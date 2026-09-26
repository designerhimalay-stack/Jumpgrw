# Navbar

Fixed header: the dark meta strip (Dallas / X-Shore, delivery regions) over the main bar
(wordmark, six links, "Build your team"). Five of the links open the dropdown; Case Studies
is a plain link.

- **Files:** `src/components/Navbar.astro`, the `NavMenu` types in `src/types/hero.ts`, the
  "Navbar menus" block in `globals.css`
- **Interaction model:** hover (mouse) or click; keyboard as a disclosure

## One dropdown

There is **one** panel, `[data-ac-nav-mega]`, not one per menu. It hangs from the bar and
spans the page between the outer column rules (`left/right: var(--gutter)`). Each trigger
fills it with its own pane; all five panes sit in the same grid cell, so the panel is the
tallest pane's height whichever is showing and never jumps.

Every menu has the same shape, enforced by the types (`feature.items` is a pair, `columns`
a pair):

| Area | Content |
|---|---|
| Feature group | mono title, two large cards: icon tile top-left, number top-right (turns into an arrow on hover), display-face title and note on the floor |
| Two columns | mono title, icon rows (44px tile, label, note), two or three rows each |
| Strip | "+ {Menu} overview" link to the section on the left; a prompt and one accent link on the right |

To add or change a menu, fill that shape. Don't give one menu its own layout or its own
panel.

## Style

The page's drafting grammar: a square 1px frame with crosshair joints at
its four corners, 1px cell rules between the groups and above the strip, 12px tiles for the
cards and icons (the showcase and skills tiles). Cards sit on `#f6f7fb` with a faint 22px
drafting grid fading out of their top-right corner. On hover a card turns white with an
accent edge and a soft shadow; in cards and rows the icon tile fills with the accent and
tips -8°, as on the skills cards. The open trigger keeps its hover box, and a 2px accent
caret on the panel's top edge sits under it.

## Behaviour

- **Opening:** the panel unrolls downward (`clip-path`, 480ms), its groups rising in on a
  60ms stagger. A 16% ink scrim (`.ac-nav::after`) dims the page below the bar.
- **Between triggers:** the panel stays open; the caret slides to the new trigger and the
  panes crossfade. Hovering the plain Case Studies link, or leaving the bar and panel,
  closes it after a 180ms grace period. A 16px bridge above the panel carries the pointer
  across the bar's bottom padding.
- **Click** toggles; a click on a menu hover already opened keeps it open.
- **Keyboard:** Enter or Space opens; Tab from an open trigger goes into its pane (the pane
  sits after the bar in the document, so this is handled in script); Shift+Tab from the
  first link returns to the trigger; Tab past the last link moves on to the next item in the
  bar and closes. Escape closes and refocuses the trigger.
- **Closing** also on a click outside, focus leaving the trigger and its pane, or following
  any link in the panel (SmoothScroll then travels to the section).
- **Touch targets:** the wordmark link carries 11px of padding offset by an equal negative
  margin (44px target, bar unchanged); on touch screens the "Build your team" button gets a
  transparent `::before` to reach 44px.
- **Below 992** the triggers and the panel are gone; the burger opens the full-screen menu,
  where each menu is a native `<details>` group (one open at a time) listing all its links.
- **992–1199:** links tighten (8px padding, 14px) so the bar stays on one line, and the
  panel gives its columns a larger share.
- **Reduced motion:** no unroll, crossfade, rise or caret slide.

## Content

All menu content is demo copy pointing at sections of this page until the other pages
exist. Icons are 24-unit line drawings in `NAV_ICONS`, in the skills cards' style (the
icons they share use the same paths).
