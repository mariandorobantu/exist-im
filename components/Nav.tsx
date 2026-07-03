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
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ease-smooth ${
          scrolled
            ? "border-line/70 bg-bg/85 backdrop-blur-md"
            : "border-transparent bg-bg/0"
        }`}
        style={{ height: "var(--nav-h)" }}
      >
        <div className="container-x flex h-full items-center justify-between">
          <Logo mode="nav" size="lg" href="/" />

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
            <MobileMenuButton />
          </nav>
        </div>
      </header>
      <MobileMenuOverlay pathname={pathname} />
    </>
  );
}

/* ------------------------------------------------------------------ */
/*                          MOBILE MENU                                */
/* ------------------------------------------------------------------ */

let listeners: Array<(v: boolean) => void> = [];
let isOpen = false;
function setMenuOpen(v: boolean) {
  isOpen = v;
  listeners.forEach((cb) => cb(v));
}
function useMenu(): [boolean, (v: boolean) => void] {
  const [open, setOpen] = useState(isOpen);
  useEffect(() => {
    const cb = (v: boolean) => setOpen(v);
    listeners.push(cb);
    return () => {
      listeners = listeners.filter((l) => l !== cb);
    };
  }, []);
  return [open, setMenuOpen];
}

function MobileMenuButton() {
  const [open, setOpen] = useMenu();
  return (
    <button
      type="button"
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      onClick={() => setOpen(!open)}
      className="md:hidden font-mono text-[11px] uppercase tracking-[0.16em] text-ink"
    >
      {open ? "Close" : "Menu"}
    </button>
  );
}

function MobileMenuOverlay({ pathname }: { pathname: string }) {
  const [open, setOpen] = useMenu();

  useEffect(() => {
    setOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
      className="md:hidden"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 60,
        background: "#ffffff",
        visibility: open ? "visible" : "hidden",
        opacity: open ? 1 : 0,
        transition:
          "opacity 260ms cubic-bezier(0.4, 0, 0.2, 1), visibility 0s linear " +
          (open ? "0s" : "260ms"),
      }}
    >
      <div
        className="container-x flex flex-col"
        style={{ paddingTop: "calc(var(--nav-h) + 32px)" }}
      >
        <nav aria-label="Mobile primary" className="flex flex-col gap-1">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`font-serif text-[44px] leading-[1.05] tracking-tightest ${
                pathname === link.href ? "text-ink" : "text-ink-2"
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <span className="logo-dot" aria-hidden="true">
                  .
                </span>
              )}
            </Link>
          ))}
        </nav>

        <div className="mt-auto pb-14 pt-20 font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-4">
          © MMXXVI · Refusal SRL · Bucharest
        </div>
      </div>
    </div>
  );
}
