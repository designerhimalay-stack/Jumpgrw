/**
 * The rotating sections (case studies, client stories) time each item with a
 * CSS animation and pause it while the section carries data-ac-hold. Keyboard
 * focus inside the frame holds the rotation, so nothing moves under someone
 * tabbing through it; the mouse doesn't, so the items keep turning while the
 * pointer rests on them. `onHold` hears every change.
 */
export function holdOnKeyboardFocus(
  section: HTMLElement,
  frame: HTMLElement,
  onHold?: (on: boolean) => void,
): void {
  const hold = (on: boolean) => {
    section.toggleAttribute("data-ac-hold", on);
    onHold?.(on);
  };
  frame.addEventListener("focusin", (event) => hold((event.target as Element).matches(":focus-visible")));
  frame.addEventListener("focusout", (event) => {
    if (!frame.contains(event.relatedTarget as Node | null)) hold(false);
  });
}
