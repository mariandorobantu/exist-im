import { PageShell } from "@/components/PageShell";

export const metadata = {
  title: "Founder",
  description:
    "Marian Dorobanțu. Founder, operator, writer. Eighteen years building artist identities. Author of The Right to Kill Ideas.",
};

export default function FounderPage() {
  return (
    <PageShell
      eyebrow="04 · Founder"
      title={<>Founder, operator, writer.</>}
      lede={
        <>
          Marian Dorobanțu. Founder of ATOM. Author of The Right to Kill Ideas.
          Now working at the intersection of identity governance and generative
          systems.
        </>
      }
      prev={{ href: "/essay", label: "Essay" }}
      next={{ href: "/contact", label: "Contact" }}
    >
      <section className="container-x border-t border-line py-32 max-md:py-20">
        <div className="grid grid-cols-[1fr_1.4fr] items-start gap-24 max-md:grid-cols-1 max-md:gap-10">
          <div className="reveal">
            <div className="mb-8 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">
              Marian Dorobanțu
            </div>
            <h2
              className="font-serif text-[clamp(30px,3vw,42px)] font-light leading-[1.05] tracking-tight text-ink"
              style={{ fontVariationSettings: '"opsz" 90, "SOFT" 20' }}
            >
              Eighteen years building artist identities. Now protecting one of
              his own.
            </h2>
          </div>

          <div className="reveal">
            <p className="p-body">
              Founder of ATOM (2015–2025), one of Romania&apos;s leading
              independent labels — over one billion streams and approximately
              eight percent national radio share, built without paid media.
              Previously Creative Director & A&amp;R at Global Records
              (2008–2015).
            </p>
            <p className="p-body">
              His work now extends that craft into two domains: long-form
              fiction exploring consciousness, identity, and the limits of
              meaning; and exist., a governance system that introduces refusal
              into generative AI.
            </p>
            <p className="p-body">
              One thread runs through all of it — not what can be produced, but
              what should be allowed to exist.
            </p>
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="container-x border-t border-line-2 py-32 max-md:py-20">
        <div className="reveal section-label">
          <span className="num">/</span>
          <span>Selected work</span>
        </div>

        <div className="grid grid-cols-2 gap-x-16 gap-y-14 max-md:grid-cols-1 max-md:gap-y-10">
          <Work
            title="exist."
            meta="Identity-constrained generative system · 2025–2026"
            body="Governance framework, evaluation architecture, three-layer system. Validated across three independent frontier models."
          />
          <Work
            title="The Right to Kill Ideas"
            meta="Essay · 2026"
            body="The written proposition behind exist. Refusal as a design principle for generative systems."
          />
          <Work
            title="ATOM"
            meta="Independent music label · 2015–2025"
            body="Founder & Creative Director. Four artists built from zero to national visibility without paid media."
          />
          <Work
            title="The Ruby (Rubinul)"
            meta="Novel in progress · 50,000 words"
            body="A 2,400-year odyssey across seven epochs, narrated by a sentient ruby that awakens every 400 years."
          />
          <Work
            title="OM NISCIENT"
            meta="Novella · ~20,000 words"
            body="A darkly comic psychological narrative on control, perception, and the illusion of knowledge."
          />
          <Work
            title="The Mosque of Athos"
            meta="Serialized fiction · Ongoing"
            body="Dialogues between a man in spiritual collapse and Lucifer. Published weekly."
          />
        </div>
      </section>
    </PageShell>
  );
}

function Work({
  title,
  meta,
  body,
}: {
  title: string;
  meta: string;
  body: string;
}) {
  return (
    <div className="reveal border-t border-line pt-6">
      <div className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-4">
        {meta}
      </div>
      <h3
        className="mb-4 font-serif text-[clamp(24px,2vw,32px)] font-light leading-[1.1] tracking-tight text-ink"
        style={{ fontVariationSettings: '"opsz" 90, "SOFT" 20' }}
      >
        {title}
      </h3>
      <p className="max-w-[46ch] font-sans text-[15.5px] leading-[1.6] text-ink-2">
        {body}
      </p>
    </div>
  );
}
