import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

/** Blocks that fade/slide in when they scroll into view. Siblings in a grid are staggered. */
const REVEAL_SELECTOR = [
  ".lab-hero-copy > *",
  ".lab-scope",
  ".lab-pillars > *",
  ".site-photo-band > *",
  ".site-photo-banner",
  ".site-page-hero-photo",
  ".site-page-hero-copy > *",
  ".site-signal-list > *",
  ".site-section-heading",
  ".site-statement",
  ".site-subheading",
  ".site-card-grid > *",
  ".site-tab-list > *",
  ".site-detail-panel",
  ".site-iamp-panel",
  ".site-highlight-panel",
  ".site-process-flow > *",
  ".site-service-grid > *",
  ".site-industry-list > *",
  ".site-industry-detail",
  ".site-contact-grid > *",
  ".site-note",
  ".site-cta-content > *",
  ".site-footer-grid > *",
].join(", ");

const STAGGER_MS = 80;
const MAX_STAGGER_STEPS = 6;

export function useScrollReveal() {
  const { pathname } = useLocation();

  // Layout effect so elements are hidden before the first paint, avoiding a flash of content.
  useLayoutEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );

    for (const element of elements) {
      const siblings = element.parentElement?.children;
      const index = siblings ? Array.prototype.indexOf.call(siblings, element) : 0;
      element.style.setProperty("--reveal-delay", `${(index % MAX_STAGGER_STEPS) * STAGGER_MS}ms`);
      element.classList.add("reveal");
      // Anything already on screen at load animates in right away instead of waiting for a scroll.
      if (element.getBoundingClientRect().top < window.innerHeight) {
        element.classList.add("is-revealed");
      } else {
        observer.observe(element);
      }
    }

    return () => {
      observer.disconnect();
      for (const element of elements) {
        element.classList.remove("reveal", "is-revealed");
        element.style.removeProperty("--reveal-delay");
      }
    };
  }, [pathname]);
}
