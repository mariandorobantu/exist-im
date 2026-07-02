import { PageShell } from "@/components/PageShell";

export const metadata = {
  title: "Thesis",
  description:
    "Refusal reframed as governance. Not limitation — structure. The written proposition behind exist.",
};

export default function ThesisPage() {
  return (
    <PageShell
      eyebrow="01 · Thesis"
      title={<>Refusal, reframed as governance.</>}
      lede={
        <>
          Generative systems do not fail through error. They fail through
          accumulation. exist. treats refusal as structure — not censorship,
          not limitation, but the condition that keeps identity legible over
          time.
        </>
      }
      next={{ href: "/system", label: "The system" }}
    >
      {/* SECTION 01 — Problem */}
      <section className="container-x border-t border-line py-32 max-md:py-20">
        <div className="reveal section-label">
          <span className="num">01</span>
          <span>Problem</span>
        </div>
        <div className="grid grid-cols-[1fr_1.15fr] items-start gap-24 max-md:grid-cols-1 max-md:gap-9">
          <h2 className="reveal h-large">
            Generative systems do not fail through error. They fail through
            accumulation.
          </h2>
          <div className="reveal pt-3.5">
            <p className="p-body">
              Contemporary AI systems are designed to produce. Each output
              appears correct in isolation, but over time, something erodes:
              identity fragments, meaning thins, repetition becomes invisible.
            </p>
            <p className="p-body">
              This is not a failure of the system. It is its logic. Production
              becomes the default state. The absence of elimination presents
              itself as productivity — a slow structural entropy that nothing
              visibly breaks.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 02 — Why refusal */}
      <section className="container-x border-t border-line-2 py-32 max-md:py-20">
        <div className="reveal section-label">
          <span className="num">02</span>
          <span>Why AI needs refusal</span>
        </div>
        <div className="grid grid-cols-[1fr_1.15fr] items-start gap-24 max-md:grid-cols-1 max-md:gap-9">
          <h2 className="reveal h-large">
            Production is a default state. Refusal is not.
          </h2>
          <div className="reveal pt-3.5">
            <p className="p-body">
              Generative models optimise for continuation, not for constraint.
              They have no built-in mechanism for refusal. As a result,
              everything that can be generated eventually is.
            </p>
            <p className="p-body">
              What&apos;s missing is not more capability. It is a structural
              rejection layer — an operational constitution that decides what
              is allowed to exist under the identity being produced from.
            </p>
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="border-t border-line-2 bg-bg-alt">
        <div className="container-x py-36 max-md:py-24">
          <blockquote
            className="reveal font-serif text-[clamp(30px,4vw,54px)] font-light italic leading-[1.14] tracking-tight text-ink"
            style={{ fontVariationSettings: '"opsz" 90, "SOFT" 60' }}
          >
            &ldquo;The problem is not what can be generated. The problem is
            what should be allowed to exist.&rdquo;
          </blockquote>
          <div className="reveal mt-10 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">
            Marian Dorobanțu · The Right to Kill Ideas
          </div>
        </div>
      </section>

      {/* SECTION 03 — Governance thesis */}
      <section className="container-x border-t border-line-2 py-32 max-md:py-20">
        <div className="reveal section-label">
          <span className="num">03</span>
          <span>Governance by refusal</span>
        </div>
        <div className="grid grid-cols-[1fr_1.15fr] items-start gap-24 max-md:grid-cols-1 max-md:gap-9">
          <h2 className="reveal h-large">
            exist. does not optimise output. It limits it.
          </h2>
          <div className="reveal pt-3.5">
            <p className="p-body">
              Every piece of content is evaluated against a defined identity
              structure before it can exist. Most ideas are rejected. What
              remains is not the best of what was produced — it is what
              survived deliberate exclusion.
            </p>
            <p className="p-body">
              Its function is not to improve content, but to prevent incoherence
              from accumulating unnoticed. Not stylistic guidelines. Operational
              constraints.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
