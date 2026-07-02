import Link from "next/link";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { RevealInit } from "./RevealInit";

type PageShellProps = {
  eyebrow: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  children: React.ReactNode;
  prev?: { href: string; label: string } | null;
  next?: { href: string; label: string } | null;
};

export function PageShell({
  eyebrow,
  title,
  lede,
  children,
  prev = null,
  next = null,
}: PageShellProps) {
  return (
    <>
      <RevealInit />
      <div id="site" style={{ opacity: 1 }}>
        <Nav />
        <main>
          {/* PAGE HEADER */}
          <header className="container-x pt-[168px] pb-24 max-md:pt-[128px] max-md:pb-16">
            <div className="reveal font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">
              {eyebrow}
            </div>
            <h1 className="reveal mt-8 h-display max-w-[22ch]">{title}</h1>
            {lede && (
              <div className="reveal mt-10 max-w-[56ch] p-lede">{lede}</div>
            )}
          </header>

          {/* PAGE BODY */}
          {children}

          {/* PREV / NEXT NAV */}
          {(prev || next) && (
            <nav
              aria-label="Page navigation"
              className="border-t border-line"
            >
              <div className="container-x grid grid-cols-2 gap-8 py-20 max-md:grid-cols-1 max-md:py-14">
                <div>
                  {prev && (
                    <Link
                      href={prev.href}
                      className="group inline-block"
                    >
                      <div className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-4">
                        ← Previous
                      </div>
                      <div className="h-medium text-ink-2 transition-colors group-hover:text-ink">
                        {prev.label}
                      </div>
                    </Link>
                  )}
                </div>
                <div className="text-right max-md:text-left">
                  {next && (
                    <Link
                      href={next.href}
                      className="group inline-block"
                    >
                      <div className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-4">
                        Next →
                      </div>
                      <div className="h-medium text-ink-2 transition-colors group-hover:text-ink">
                        {next.label}
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            </nav>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
}
