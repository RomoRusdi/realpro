const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (location.hash === "#top") {
  history.replaceState(null, "", location.pathname + location.search);
}

document.addEventListener("click", (event) => {
  const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href="#top"]');
  if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey) return;

  event.preventDefault();
  window.scrollTo({ top: 0, behavior: reduceMotion.matches ? "auto" : "smooth" });

  const heading = document.querySelector<HTMLElement>("#top h1");
  if (heading) {
    heading.setAttribute("tabindex", "-1");
    heading.focus({ preventScroll: true });
  }
});
