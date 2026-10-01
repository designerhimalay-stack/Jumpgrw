/* Tabs for the hire kit's pickers (the work, why, steps and roles sections).
   Buttons marked [data-ac-tab] select the [data-ac-tab-panel] with the same
   index. Every panel sits in one grid cell (see hire.css), so the cell is as
   tall as the tallest panel and switching never moves the page. Arrow keys,
   Home and End move between tabs, as the ARIA tabs pattern expects.

   Without the script, the first panel shows and the tabs do nothing. */
export function initTabs(root: HTMLElement, onChange?: (index: number) => void): void {
  const tabs = [...root.querySelectorAll<HTMLButtonElement>("[data-ac-tab]")];
  const panels = [...root.querySelectorAll<HTMLElement>("[data-ac-tab-panel]")];

  const select = (index: number, focus = false) => {
    tabs.forEach((tab, i) => {
      const on = i === index;
      tab.setAttribute("aria-selected", String(on));
      tab.tabIndex = on ? 0 : -1;
      if (on && focus) tab.focus();
    });
    panels.forEach((panel, i) => {
      panel.toggleAttribute("data-active", i === index);
      panel.setAttribute("aria-hidden", String(i !== index));
      panel.inert = i !== index;
    });
    onChange?.(index);
  };

  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => select(i));
    tab.addEventListener("keydown", (event) => {
      const last = tabs.length - 1;
      const to = {
        ArrowRight: i === last ? 0 : i + 1,
        ArrowDown: i === last ? 0 : i + 1,
        ArrowLeft: i === 0 ? last : i - 1,
        ArrowUp: i === 0 ? last : i - 1,
        Home: 0,
        End: last,
      }[event.key];
      if (to === undefined) return;
      event.preventDefault();
      select(to, true);
    });
  });

  select(0);
}
