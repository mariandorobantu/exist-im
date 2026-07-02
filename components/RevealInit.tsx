"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Scroll-in reveal:
 * - On the landing page, waits for the `exist:entered` event fired by the Gate.
 * - On sub-pages, initializes immediately (gate is only shown on `/`).
 */
export function RevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    const isLanding = pathname === "/";

    const init = () => {
      const el = document.getElementById("site");
      if (el) {
        el.setAttribute("aria-hidden", "false");
        el.style.opacity = "1";
      }

      const targets = document.querySelectorAll(".reveal");
      if (!("IntersectionObserver" in window) || targets.length === 0) {
        targets.forEach((t) => t.classList.add("in"));
        return;
      }
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -80px 0px" }
      );
      targets.forEach((t) => io.observe(t));
    };

    if (!isLanding) {
      // Sub-pages: no gate, reveal immediately.
      requestAnimationFrame(init);
      return;
    }

    // Landing: wait for gate to signal.
    const already = sessionStorage.getItem("exist:entered") === "1";
    if (already) {
      requestAnimationFrame(init);
      return;
    }

    const onEnter = () => init();
    window.addEventListener("exist:entered", onEnter, { once: true });
    return () => window.removeEventListener("exist:entered", onEnter);
  }, [pathname]);

  return null;
}
