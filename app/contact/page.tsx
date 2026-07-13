import { PageShell } from "@/components/PageShell";

export const metadata = {
  title: "Contact",
  description:
    "exist. is early. We speak with researchers, institutions, and operators working at the same edge — identity, coherence, and the limits of generation.",
};

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="05 · Contact"
      title={<>Get in touch.</>}
      lede={
        <>
          exist. is early. We speak with researchers, institutions, and
          operators working at the same edge — identity, coherence, and the
          limits of generation.
        </>
      }
      prev={{ href: "/essay", label: "Essay" }}
    >
      <section className="container-x border-t border-line py-32 max-md:py-20">
        <div className="reveal section-label">
          <span className="num">/</span>
          <span>Email</span>
        </div>

        <a
          href="mailto:hello@exist.im"
          className="reveal group block"
        >
          <span
            className="font-serif font-light text-[clamp(44px,7vw,96px)] leading-[1.02] tracking-tightest text-ink transition-opacity duration-200 group-hover:opacity-60"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 15' }}
          >
            hello@exist.im
          </span>
        </a>

        <div className="reveal mt-24 grid grid-cols-3 gap-14 max-md:grid-cols-1 max-md:gap-8">
          <ContactCell
            label="General"
            value="hello@exist.im"
            href="mailto:hello@exist.im"
          />
          <ContactCell
            label="Founder"
            value="marian@exist.im"
            href="mailto:marian@exist.im"
          />
          <ContactCell
            label="Entity"
            value="Unthings SRL · Bucharest"
          />
        </div>
      </section>

      <section className="container-x border-t border-line-2 py-32 max-md:py-20">
        <div className="reveal section-label">
          <span className="num">/</span>
          <span>Speaking</span>
        </div>
        <div className="grid grid-cols-[1fr_1.4fr] items-start gap-24 max-md:grid-cols-1 max-md:gap-8">
          <h2 className="reveal h-large">
            Mozilla Festival 2026.
          </h2>
          <div className="reveal pt-3.5">
            <p className="p-body">
              Session: The Right to Kill Ideas — Governance by refusal in
              generative systems. Public conversation, convenor: Marian
              Dorobanțu.
            </p>
            <p className="p-body">
              Additional talks, workshops, and interviews on request. Write to
              the general address above.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function ContactCell({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <div className="mb-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-4">
        {label}
      </div>
      <div className="font-mono text-[13px] uppercase tracking-[0.12em] text-ink-2">
        {value}
      </div>
    </>
  );

  if (!href) {
    return <div className="border-t border-line pt-4">{content}</div>;
  }

  return (
    <a
      href={href}
      className="block border-t border-line pt-4 transition-opacity hover:opacity-60"
    >
      {content}
    </a>
  );
}
