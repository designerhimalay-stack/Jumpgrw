/* The reversible entrance every section shares: `data-ac-in` goes on while the
   section is inside the middle 80% of the viewport and comes off again when it
   leaves, so its CSS entrance replays on the way back. */
export function toggleInView(section: HTMLElement): void {
  new IntersectionObserver(
    ([entry]) => section.toggleAttribute("data-ac-in", entry.isIntersecting),
    { threshold: 0, rootMargin: "-10% 0px -10% 0px" },
  ).observe(section);
}
