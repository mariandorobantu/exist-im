import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { RevealInit } from "@/components/RevealInit";

export const metadata = {
  title: "The Right to Kill Ideas",
  description:
    "Governance by refusal in generative systems. The written proposition behind exist.",
};

export default function EssayPage() {
  return (
    <>
      <RevealInit />
      <div id="site" style={{ opacity: 1 }}>
        <Nav />

        <main>
          {/* Essay header */}
          <header className="container-x pt-[196px] pb-24 max-md:pt-[156px] max-md:pb-16">
            <div className="reveal font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">
              Essay · 2026
            </div>

            <h1 className="reveal mt-8 font-serif font-light text-[clamp(48px,7.6vw,112px)] leading-[0.98] tracking-tightest text-ink">
              The Right to Kill{" "}
              <span className="text-accent">Ideas</span>
            </h1>

            <p className="reveal mt-6 max-w-[40ch] font-serif italic text-[clamp(22px,2.2vw,32px)] font-light leading-[1.22] tracking-tight text-ink-3">
              Governance by refusal in generative systems.
            </p>

            <div className="reveal mt-12 grid grid-cols-3 gap-14 max-md:grid-cols-1 max-md:gap-6">
              <Meta label="Author" value="Marian Dorobanțu" />
              <Meta label="Year" value="2026" />
              <Meta label="Length" value="~1,100 words · 5 min read" />
            </div>
          </header>

          {/* Essay body */}
          <article className="border-t border-line">
            <div className="container-x py-24 max-md:py-16">
              <div className="reveal prose-essay mx-auto">
                <p>
                  Contemporary AI systems are designed to produce. They generate
                  text, images, and decisions optimised for immediate context,
                  not for cumulative coherence. Each output appears correct in
                  isolation, but over time, something erodes: identity
                  fragments, meaning thins, and repetition becomes invisible.
                </p>
                <p>
                  This is not a failure of the system. It is its logic.
                </p>
                <p>
                  Generative models optimise for continuation, not for
                  constraint. They have no built-in mechanism for refusal. As a
                  result, production becomes a default state, and everything
                  that can be generated eventually is. The absence of
                  elimination creates a form of structural entropy — a slow
                  loss that presents itself as productivity.
                </p>
                <p>
                  No one measures what disappears, because nothing visibly
                  breaks.
                </p>
                <p>
                  I encountered this problem not as a researcher, but as an
                  operator. After eighteen years building artist identities in
                  the Romanian music industry — through ATOM (over one billion
                  streams, approximately eight percent national radio share,
                  built without paid media) — I shifted toward writing. For the
                  first time, I needed to protect a voice that was not
                  constructed for others.
                </p>
                <p>
                  I had no mechanism to do that.
                </p>
                <p>
                  So I built one.
                </p>
                <p>
                  <em>exist.</em> is a governance system designed to introduce
                  refusal into generative processes. It does not optimise
                  output. It limits it. Every piece of content is evaluated
                  against a defined identity structure before it can exist.
                  Most ideas are rejected.
                </p>
                <p>
                  The system operates through three components: a production
                  engine constrained by a constitutional identity, a
                  deterministic evaluation layer that approves or rejects
                  outputs, and a drift mechanism that tracks cumulative
                  deviation over time. Its function is not to improve content,
                  but to prevent incoherence from accumulating unnoticed.
                </p>
                <p>
                  In practice, it reveals patterns that are otherwise invisible.
                  In one instance, it rejected a piece I considered strong —
                  not because it violated any rule, but because I had already
                  expressed the same idea in a different form weeks earlier.
                  The repetition was undetectable to me. The system identified
                  it as structural redundancy.
                </p>
                <p>
                  This suggests a broader question.
                </p>
                <p>
                  When generative systems lack rejection mechanisms, they
                  become extractive. They consume identity, coherence, and
                  meaning while appearing to create value. What is lost is not
                  the output, but the conditions that make output meaningful.
                </p>
                <p>
                  The Right to Kill Ideas proposes refusal as a design
                  principle for generative systems. Not as limitation, but as
                  governance. Not as failure, but as structure.
                </p>
                <p>
                  What remains unclear is whether refusal preserves identity —
                  or eliminates ideas before they have the chance to transform
                  into something else.
                </p>
              </div>

              {/* Byline */}
              <div className="reveal mx-auto mt-24 max-w-prose border-t border-line pt-8">
                <div className="mb-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-4">
                  Author
                </div>
                <div className="font-serif text-[22px] tracking-tight text-ink">
                  Marian Dorobanțu
                </div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
                  marian@atom.ro · exist.im
                </div>
              </div>
            </div>
          </article>

          {/* PREV / NEXT */}
          <nav aria-label="Page navigation" className="border-t border-line">
            <div className="container-x grid grid-cols-2 gap-8 py-20 max-md:grid-cols-1 max-md:py-14">
              <Link href="/agents" className="group inline-block">
                <div className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-4">
                  ← Previous
                </div>
                <div className="h-medium text-ink-2 transition-colors group-hover:text-ink">
                  Agents
                </div>
              </Link>
              <div className="text-right max-md:text-left">
                <Link href="/contact" className="group inline-block">
                  <div className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-4">
                    Next →
                  </div>
                  <div className="h-medium text-ink-2 transition-colors group-hover:text-ink">
                    Contact
                  </div>
                </Link>
              </div>
            </div>
          </nav>
        </main>

        <Footer />
      </div>
    </>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
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
