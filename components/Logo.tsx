"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
  /**
   * `nav` — animates from `exist.` to `e.` on scroll.
   * `full` — always renders `exist.` (used in Footer / Hero mark).
   * `mark` — always renders `e.` (used as favicon-like mark).
   */
  mode?: "nav" | "full" | "mark";
  size?: "sm" | "md" | "lg" | "xl";
  href?: string | null;
  className?: string;
};

const SIZE_CLASS: Record<NonNullable<Props["size"]>, string> = {
  sm: "text-[22px]",
  md: "text-[28px]",
  lg: "text-[54px]",
  xl: "text-[clamp(96px,15vw,220px)]",
};

/**
 * The `exist.` wordmark.
 * In `nav` mode, on scroll the `xist` characters collapse into the `e`
 * — mirroring Anthropic's A/i mark behavior.
 */
export function Logo({
  mode = "full",
  size = "md",
  href = "/",
  className = "",
}: Props) {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (mode !== "nav") return;
    const handler = () => {
      setCollapsed(window.scrollY > 72);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [mode]);

  const showXist = mode === "full" || (mode === "nav" && !collapsed);

  const inner = (
    <span
      className={`inline-flex items-baseline font-serif font-normal leading-none tracking-tightest text-ink ${SIZE_CLASS[size]} ${className}`}
      style={{ fontVariationSettings: '"opsz" 144, "SOFT" 15' }}
      aria-label="exist."
    >
      <span aria-hidden="true">e</span>
      <span
        aria-hidden="true"
        className="inline-block overflow-hidden transition-all duration-500 ease-smooth"
        style={{
          maxWidth: showXist ? "1.6em" : "0",
          opacity: showXist ? 1 : 0,
          transform: showXist ? "translateX(0)" : "translateX(-2px)",
        }}
      >
        xist
      </span>
      <span aria-hidden="true" className="logo-dot">
        .
      </span>
    </span>
  );

  if (!href) return inner;

  return (
    <Link href={href} aria-label="exist. — go to homepage" className="inline-block">
      {inner}
    </Link>
  );
}
