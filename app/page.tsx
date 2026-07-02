import Link from "next/link";
import { Gate } from "@/components/Gate";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { RevealInit } from "@/components/RevealInit";

const CARDS = [
  {
    href: "/thesis",
    num: "01",
    title: "The thesis",
    body:
      "Generative systems do not fail through error. They fail through accumulation. Refusal, reframed as governance — not limitation.",
    cta: "Read the thesis",
  },
  {
    href: "/system",
    num: "02",
    title: "The system",
    body:
      "Three layers. One decision-maker. Generation, evaluation, drift monitoring — constrained by an operational constitution.",
    cta: "See how it works",
  },
  {
    href: "/agents",
    num: "03",
    title: "The agents",
    body:
      "Ten agents. Three layers. One decision-maker. A working ecosystem of thinking, production, and control — with Human Override.",
    cta: "Explore the ecosystem",
  },
  {
    href: "/essay",
    num: "04",
    title: "The essay",
    body:
      "The Right to Kill Ideas. The written proposition behind exist. — refusal as a design principle for generative systems.",
    cta: "Read the essay",
  },
];

export default function Home() {
  return (
    <>
      <Gate />
      <RevealInit />
      <div id="site" aria-hidden="true" style={{ opacity: 0 }}>
        <Nav />

        <main>
          {/* HERO */}
          <section className="container-x pt-[196px] pb-32 max-md:pt-[156px] max-md:pb-20">
            <div className="reveal font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">
              Identity governance for generative systems
            </div>
            <h1 className="reveal mt-8 h-hero max-w-[18ch]">
              Not every valid output{" "}
              <em className="italic">should exist.</em>
            </h1>
            <p className="reveal mt-12 max-w-[60ch] p-lede">
              exist. introduces refusal into generative processes — a governance
              system for identity, not a tool. Most ideas are rejected. What
              disappears is allowed to disappear.
            </p>

            <div className="reveal mt-16 grid grid-cols-3 gap-14 max-md:grid-cols-1 max-md:gap-6">
              <MetaCell label="Status" value="Framework complete · Manual orchestration" />
              <MetaCell label="Publication" value="The Right to Kill Ideas, 2026" />
              <MetaCell label="Session" value="Mozilla Festival 2026" />
            </div>
          </section>

          {/* NAVIGATION CARDS */}
          <section className="border-t border-line">
            <div className="container-x py-24 max-md:py-16">
              <div className="reveal section-label">
                <span className="num">/</span>
                <span>Enter</span>
              </div>

              <div className="grid grid-cols-2 gap-px bg-line max-md:grid-cols-1">
                {CARDS.map((card) => (
                  <Link
                    key={card.href}
                    href={card.href}
                    className="reveal group flex flex-col justify-between bg-bg p-10 transition-colors duration-300 hover:bg-bg-alt max-md:p-7"
                  >
                    <div>
                      <div className="mb-8 flex items-baseline gap-4 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-3">
                        <span className="text-ink">{card.num}</span>
                        <span>{card.title}</span>
                      </div>
                      <p className="mb-10 max-w-[38ch] font-serif text-[clamp(22px,1.8vw,28px)] font-normal leading-[1.22] tracking-tight text-ink">
                        {card.body}
                      </p>
                    </div>
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-2 transition-opacity group-hover:opacity-60">
                      {card.cta} <span aria-hidden="true">→</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* MOZFEST BANNER */}
          <section className="border-t border-line bg-bg-alt">
            <div className="container-x py-28 max-md:py-20">
              <div className="reveal section-label">
                <span className="num">/</span>
                <span>Mozilla Festival 2026</span>
              </div>
              <div className="grid grid-cols-[1fr_1.2fr] items-start gap-24 max-md:grid-cols-1 max-md:gap-10">
                <h2 className="reveal h-large max-w-[20ch]">
                  exist. at MozFest 2026.
                </h2>
                <div className="reveal pt-3">
                  <p className="p-body max-w-[52ch]">
                    Session: The Right to Kill Ideas. A public conversation on
                    governance by refusal in generative systems — the argument
                    behind exist., presented in dialogue with the community.
                  </p>
                  <Link href="/contact" className="link-underline mt-8 inline-block">
                    Get in touch →
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

function MetaCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-line pt-4">
      <div className="mb-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-4">
        {label}
      </div>
      <div className="font-mono text-[12.5px] uppercase tracking-[0.12em] text-ink-2">
        {value}
      </div>
    </div>
  );
}
