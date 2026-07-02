import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg-alt">
      <div className="container-x pt-24 pb-14 max-md:pt-16 max-md:pb-10">
        <div className="grid grid-cols-[1fr_auto] items-end gap-10 max-md:grid-cols-1 max-md:items-start">
          <div>
            <Logo mode="full" size="lg" href="/" className="block" />
            <p className="mt-6 max-w-md font-sans text-[13px] leading-relaxed text-ink-3">
              A governance system that introduces refusal into generative
              processes. Not a tool.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-3 gap-x-10 gap-y-3 text-right max-md:grid-cols-2 max-md:text-left"
          >
            {[
              { href: "/thesis", label: "Thesis" },
              { href: "/system", label: "System" },
              { href: "/agents", label: "Agents" },
              { href: "/essay", label: "Essay" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-3 transition-opacity hover:opacity-60"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex items-center justify-between border-t border-line pt-6 max-md:flex-col max-md:items-start max-md:gap-3">
          <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-4">
            © MMXXVI · Refusal SRL · Bucharest
          </p>
          <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-4">
            hello@exist.im
          </p>
        </div>
      </div>
    </footer>
  );
}
