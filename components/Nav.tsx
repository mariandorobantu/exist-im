"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const LINKS = [
  { href: "/thesis", label: "Thesis" },
  { href: "/system", label: "System" },
  { href: "/agents", label: "Agents" },
  { href: "/essay", label: "Essay" },
  { href: "/founder", label: "Founder" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ease-smooth ${
        scrolled
          ? "border-line/70 bg-bg/85 backdrop-blur-md"
          : "border-transparent bg-bg/0"
      }`}
      style={{ height: "var(--nav-h)" }}
    >
      <div className="container-x flex h-full items-center justify-between">
        <Logo mode="nav" size="md" href="/" />

        <nav aria-label="Primary" className="flex items-center gap-6 max-md:gap-4">
          {LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`hidden font-mono text-[11px] uppercase tracking-[0.16em] transition-opacity duration-200 hover:opacity-60 md:inline ${
                  active ? "text-ink" : "text-ink-3"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          {/* Mobile compact menu */}
          <MobileMenu pathname={pathname} />
        </nav>
      </div>
    </header>
  );
}

function MobileMenu({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="md:hidden font-mono text-[11px] uppercase tracking-[0.16em] text-ink"
      >
        {open ? "Close" : "Menu"}
      </button>

      <div
        className={`fixed inset-0 z-40 bg-bg transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        style={{ paddingTop: "var(--nav-h)" }}
      >
        <div className="container-x flex flex-col gap-6 pt-12">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-serif text-[36px] leading-none tracking-tight ${
                pathname === link.href ? "text-ink" : "text-ink-3"
              }`}
              style={{ fontVariationSettings: '"opsz" 90, "SOFT" 30' }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
