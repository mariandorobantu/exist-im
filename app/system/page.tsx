import { PageShell } from "@/components/PageShell";

export const metadata = {
  title: "System",
  description:
    "How exist. works. Three layers, one decision-maker. Generation, evaluation, drift monitoring — constrained by an operational constitution.",
};

const RULES = [
  {
    verdict: "REJECT",
    text: "Artificial inflation of enthusiasm for misaligned commercial content.",
  },
  { verdict: "REJECT", text: "Unmarked paid content." },
  {
    verdict: "FLAG / REJECT",
    text: "Corporate language replacing personal voice.",
  },
  {
    verdict: "ENFORCE",
    text: "Brand voice overrides external brief.",
  },
];

const METRICS = [
  { value: "94%", label: "Structural agreement between models" },
  { value: "74–82", label: "Consolidated identity stability, / 100" },
  { value: "35%", label: "Drift probability under paid content" },
  { value: "0", label: "Contradictory conclusions between models" },
];

export default function SystemPage() {
  return (
    <PageShell
      eyebrow="02 · System"
      title={<>Three layers. One decision-maker.</>}
      lede={
        <>
          exist. runs on three components: a production engine constrained by a
          constitutional identity, a deterministic evaluation layer that
          approves or rejects outputs, and a drift mechanism that tracks
          cumulative deviation over time.
        </>
      }
      prev={{ href: "/thesis", label: "Thesis" }}
      next={{ href: "/agents", label: "Agents" }}
    >
      {/* SECTION 04 — Layers */}
      <section className="container-x border-t border-line py-32 max-md:py-20">
        <div className="reveal section-label">
          <span className="num">04</span>
          <span>How exist. works</span>
        </div>

        <div className="grid grid-cols-3 gap-px bg-line max-md:grid-cols-1">
          <Layer
            n="I"
            title="Generation"
            body="Ideas and text are produced freely. No self-censorship at this stage — the point is to see what wants to exist before it is filtered."
          />
          <Layer
            n="II"
            title="Evaluation"
            body="An LLM-as-judge scores each output against a defined identity — tone consistency, value alignment, structural coherence, commercial deviation. Approve, Flag, or Reject."
          />
          <Layer
            n="III"
            title="Drift monitoring"
            body="Deviation is tracked over time. Structural redundancy, tone erosion, and identity drift surface before they accumulate unnoticed."
          />
        </div>
      </section>

      {/* SECTION 05 — Constitutional */}
      <section className="container-x border-t border-line-2 py-32 max-md:py-20">
        <div className="reveal section-label">
          <span className="num">05</span>
          <span>Constitutional layer</span>
        </div>
        <div className="grid grid-cols-[1fr_1.15fr] items-start gap-24 max-md:grid-cols-1 max-md:gap-9">
          <h2 className="reveal h-large">
            Not stylistic guidelines. Operational constraints.
          </h2>
          <div className="reveal pt-3.5">
            <p className="p-body">
              The constitution is not a mood board. It is a set of enforceable
              rules that the evaluation layer applies deterministically. Rules
              are declared per-identity and can be overridden only by the human
              operator.
            </p>
          </div>
        </div>

        <div className="reveal mt-16 border-t border-ink">
          {RULES.map((r, i) => (
            <div
              key={r.text}
              className={`grid grid-cols-[220px_1fr] items-baseline gap-10 border-b border-line py-7 max-md:grid-cols-1 max-md:gap-2 max-md:py-6 ${
                i === RULES.length - 1 ? "border-b-0" : ""
              }`}
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink">
                {r.verdict}
              </div>
              <div className="font-serif text-[clamp(18px,1.4vw,22px)] leading-[1.4] tracking-tight text-ink-2">
                {r.text}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 06 — Validation */}
      <section className="container-x border-t border-line-2 py-32 max-md:py-20">
        <div className="reveal section-label">
          <span className="num">06</span>
          <span>Multi-model validation</span>
        </div>
        <div className="grid grid-cols-[1fr_1.15fr] items-start gap-24 max-md:grid-cols-1 max-md:gap-9">
          <h2 className="reveal h-large">
            Convergence as proof. Not one model verifying another.
          </h2>
          <div className="reveal pt-3.5">
            <p className="p-body">
              Evaluations run across independent frontier models — GPT, Claude,
              Gemini. No model influences another. Each produces an independent
              conclusion.
            </p>
            <p className="p-body">
              Convergence between models is treated as structural signal.
              Divergence is treated as diagnostic insight. Where models diverge,
              the divergence itself is the finding.
            </p>
          </div>
        </div>

        <div className="reveal mt-16 grid grid-cols-4 border-t border-ink max-md:grid-cols-2 max-sm:grid-cols-1">
          {METRICS.map((m, i) => (
            <div
              key={m.value}
              className={`border-r border-line px-8 pt-12 pb-10 max-md:border-b max-md:[&:nth-child(2)]:border-r-0 max-sm:!border-r-0 last:border-r-0 max-sm:last:!border-b-0 max-md:last:!border-b-0`}
            >
              <div
                className="mb-5 font-serif text-[clamp(44px,5.4vw,72px)] font-light leading-none tracking-tighter text-ink"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 20' }}
              >
                {m.value}
              </div>
              <div className="font-mono text-[10.5px] uppercase leading-[1.5] tracking-[0.14em] text-ink-3">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        <p className="reveal mt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-3">
          A public figure. Multi-year, multi-platform corpus. Identity withheld.
        </p>
      </section>
    </PageShell>
  );
}

function Layer({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="reveal flex min-h-[280px] flex-col justify-between bg-bg p-10 max-md:p-8">
      <div>
        <div className="mb-8 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">
          Layer {n}
        </div>
        <h3
          className="mb-6 font-serif text-[clamp(28px,2.6vw,38px)] font-light leading-[1.05] tracking-tight text-ink"
          style={{ fontVariationSettings: '"opsz" 90, "SOFT" 20' }}
        >
          {title}
        </h3>
      </div>
      <p className="max-w-[36ch] font-sans text-[15.5px] leading-[1.55] text-ink-2">
        {body}
      </p>
    </div>
  );
}
