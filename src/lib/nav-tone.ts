/* The navbar is fixed, so its tone follows what is under it: dark ("field")
   while a page's dark opening section is behind the bar, light ("paper") once
   the page has moved past it. The same attribute the home page's Hero and the
   subpage PageHero write. Call it with the dark section that opens a page. */

export function followHero(hero: HTMLElement): void {
  const nav = document.querySelector<HTMLElement>(".ac-nav");
  const root = document.documentElement;
  let frame = 0;

  const apply = () => {
    frame = 0;
    const under = hero.getBoundingClientRect().bottom > (nav?.offsetHeight ?? 0);
    const phase = under ? "field" : "paper";
    if (root.dataset.portalPhase !== phase) root.dataset.portalPhase = phase;
  };
  const schedule = () => {
    if (!frame) frame = requestAnimationFrame(apply);
  };

  apply();
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule, { passive: true });
}
