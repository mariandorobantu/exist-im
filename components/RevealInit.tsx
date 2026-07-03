"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Scroll-in reveal:
 * Initializes IntersectionObserver on all `.reveal` elements
 * as soon as the page mounts.
 */
export function RevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    const init = () => {
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

    requestAnimationFrame(init);
  }, [pathname]);

  return null;
}
