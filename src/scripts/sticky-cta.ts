import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(ScrollTrigger, Flip);

const cta = document.querySelector<HTMLElement>("[data-flip-cta]");
const heroSlot = cta?.parentElement;
const secondaries = gsap.utils.toArray<HTMLElement>("[data-cta-secondary]");

if (cta && heroSlot) {
  const mm = gsap.matchMedia();

  mm.add(
    {
      desktop: "(min-width: 768px)",
      mobile: "(max-width: 767px)",
      reduce: "(prefers-reduced-motion: reduce)",
    },
    (context) => {
      const { desktop, reduce } = context.conditions as { desktop: boolean; reduce: boolean };
      const container = document.querySelector<HTMLElement>(desktop ? "[data-sticky-top]" : "[data-sticky-bottom]");
      const slot = container?.querySelector<HTMLElement>("[data-sticky-slot]");
      if (!container || !slot) return;

      const fadeParts = container.querySelectorAll<HTMLElement>("[data-sticky-fade]");
      const offsetY = desktop ? -16 : 16;
      let docked = false;
      let suppressed = false;
      let shown: "hero" | "bar" | "hidden" = "hero";

      gsap.set(container, { autoAlpha: 0 });

      const moveCta = (target: HTMLElement, animate: boolean) => {
        if (cta.parentElement === target) return;
        const state = Flip.getState(cta);
        Flip.killFlipsOf(cta);
        gsap.set(cta, { clearProps: "all" });

        if (target === heroSlot) heroSlot.style.minHeight = "";
        else if (!heroSlot.style.minHeight) heroSlot.style.minHeight = `${heroSlot.offsetHeight}px`;

        const hadFocus = document.activeElement === cta;
        target.appendChild(cta);
        if (hadFocus) cta.focus({ preventScroll: true });
        if (animate && !reduce) {
          gsap.set(cta, { transition: "none" });
          Flip.from(state, {
            duration: 0.5,
            ease: "power3.out",
            absolute: false,
            zIndex: 60,
            onComplete: () => gsap.set(cta, { clearProps: "transition" }),
          });
        }
      };

      const render = () => {
        const next = !docked ? "hero" : suppressed ? "hidden" : "bar";
        if (next === shown) return;
        const prev = shown;
        shown = next;
        const d = reduce ? 0 : 0.35;
        gsap.killTweensOf([container, ...fadeParts]);

        if (next === "bar") {
          gsap.set(container, { autoAlpha: 1 });
          if (prev === "hero") {
            gsap.fromTo(fadeParts, { autoAlpha: 0, y: offsetY }, { autoAlpha: 1, y: 0, duration: d, ease: "power2.out" });
            gsap.set(container, { y: 0 });
            moveCta(slot, true);
          } else {
            gsap.set(fadeParts, { autoAlpha: 1, y: 0 });
            gsap.fromTo(container, { y: offsetY }, { y: 0, autoAlpha: 1, duration: d, ease: "power2.out" });
          }
        } else if (next === "hidden") {
          if (prev === "hero") moveCta(slot, false);
          gsap.to(container, { autoAlpha: 0, y: offsetY, duration: d, ease: "power2.out" });
        } else {
          if (prev === "bar") {
            moveCta(heroSlot, true);
            gsap.to(fadeParts, { autoAlpha: 0, y: offsetY, duration: d, ease: "power2.out" });
            gsap.to(container, { autoAlpha: 0, duration: 0, delay: reduce ? 0 : 0.5 });
          } else {
            moveCta(heroSlot, false);
            gsap.set(container, { autoAlpha: 0 });
          }
        }
      };

      ScrollTrigger.create({
        trigger: heroSlot,

        start: () => `bottom ${desktop ? 100 : 0}px`,
        invalidateOnRefresh: true,

        onEnter: () => {
          docked = true;
          render();
        },
        onLeaveBack: () => {
          docked = false;
          render();
        },
      });

      const visibleSecondaries = new Set<HTMLElement>();
      secondaries.forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          onToggle: (self) => {
            if (self.isActive) visibleSecondaries.add(el);
            else visibleSecondaries.delete(el);
            suppressed = visibleSecondaries.size > 0;
            render();
          },
        });
      });

      return () => {
        Flip.killFlipsOf(cta);
        gsap.set(cta, { clearProps: "all" });
        heroSlot.style.minHeight = "";
        heroSlot.appendChild(cta);
        gsap.set([container, ...fadeParts], { clearProps: "all" });
      };
    },
  );
}
