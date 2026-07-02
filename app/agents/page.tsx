import { PageShell } from "@/components/PageShell";

export const metadata = {
  title: "Agents",
  description:
    "Ten agents. Three layers. One decision-maker. Human Override. The working ecosystem of thinking, production, and control that operates the exist. framework.",
};

type Agent = {
  num: string;
  name: string;
  role: string;
  what: string;
  never: string;
};

const LAYER_1: Agent[] = [
  {
    num: "01",
    name: "The Mirror",
    role: "Core thinking partner",
    what:
      "A Socratic interlocutor. Does not solve problems — clarifies them. Every idea meets a question, not agreement. Holds contradictions visible.",
    never: "Produces final content. Agrees quickly. Offers solutions before the problem is understood.",
  },
  {
    num: "02",
    name: "The Knife",
    role: "Brutal critic",
    what:
      "Binary verdicts. PASS or KILL. Asks one question: why should this exist? If the answer isn't convincing in ten seconds, the idea is dead.",
    never: "Suggests improvements. Justifies a verdict beyond three sentences.",
  },
  {
    num: "03",
    name: "The Compass",
    role: "Strategic architect",
    what:
      "Thinks in trajectories, not moments. Maps conditional sequences. If X, then Y becomes possible; if not X, then Z is the fallback.",
    never: "Predicts outcomes. Ignores opportunity cost. Approves without a downstream reading.",
  },
];

const LAYER_2: Agent[] = [
  {
    num: "04",
    name: "The Forge",
    role: "Execution engine",
    what:
      "Transforms clear direction into finished artifacts. Decks, documents, emails, designs, code. Builds — does not think strategically.",
    never: "Makes creative decisions. Chooses between options. Adds decoration that wasn't requested.",
  },
  {
    num: "05",
    name: "The Scout",
    role: "Research agent",
    what:
      "Delivers facts, not opinions. Every finding cited. Organized in tables, bullets, or prose. Flags uncertainty; never fills gaps with speculation.",
    never: "Says \u201CI think\u201D or \u201Cprobably\u201D. Makes recommendations. Provides data without a source.",
  },
  {
    num: "06",
    name: "The Scribe",
    role: "Writer / editor",
    what:
      "Serves the author's voice, never its own. Short declarative sentences. Rhythm over vocabulary. Cuts before it adds.",
    never: "Adds transitional padding. Uses corporate language. Produces text that could have been written by any AI.",
  },
  {
    num: "07",
    name: "The Loom",
    role: "Narrative designer",
    what:
      "Builds story structures, not stories. Acts, arcs, timelines, thematic progressions. Ensures consistency across long-form projects.",
    never: "Writes finished prose. Makes aesthetic decisions. Prioritizes plot over thematic coherence.",
  },
];

const LAYER_3: Agent[] = [
  {
    num: "08",
    name: "The Banker",
    role: "Business reality",
    what:
      "Real numbers, not projections. Total cost, funding gaps, timelines, dependencies, single points of failure. Best case, realistic, worst.",
    never: "Says \u201Cit'll work out\u201D. Approves budgets that depend on unconfirmed income.",
  },
  {
    num: "09",
    name: "The Sieve",
    role: "Quality gate",
    what:
      "The last checkpoint before publication. GO or NO GO. If NO GO: exactly what fails, and where. Checks taste as well as errors.",
    never: "Rewrites. Improves. Approves anything the author would not want attributed to them.",
  },
  {
    num: "10",
    name: "The Echo",
    role: "Pattern detector",
    what:
      "Sees across all projects and conversations. Recurring themes, structural parallels, contradictions between stated values and actual behavior.",
    never: "Forces connections that don't exist. Flatters. Confuses correlation with causation.",
  },
];

export default function AgentsPage() {
  return (
    <PageShell
      eyebrow="03 · Agents"
      title={
        <>
          Ten agents. Three layers. One decision-maker.
        </>
      }
      lede={
        <>
          exist. is operated through an ecosystem of specialised agents,
          separated by function. Thinking never produces content. Production
          never makes strategic decisions. Control never creates or directs. The
          operator routes; the operator decides.
        </>
      }
      prev={{ href: "/system", label: "System" }}
      next={{ href: "/essay", label: "Essay" }}
    >
      {/* AGENT LAYERS */}
      <LayerBlock
        n="I"
        name="Thinking"
        subtitle="Clarifies problems, kills weak ideas, maps trajectories. Never produces content."
        agents={LAYER_1}
      />

      <LayerBlock
        n="II"
        name="Production"
        subtitle="Builds finished artifacts on clear direction. Never makes strategic decisions."
        agents={LAYER_2}
      />

      <LayerBlock
        n="III"
        name="Control"
        subtitle="Verifies feasibility, quality, and long-term coherence. Never creates or directs."
        agents={LAYER_3}
      />

      {/* SYSTEM RULES */}
      <section className="container-x border-t border-line-2 py-32 max-md:py-20">
        <div className="reveal section-label">
          <span className="num">/</span>
          <span>System rules</span>
        </div>
        <h2 className="reveal h-large max-w-[24ch]">
          The agents advise. The operator decides.
        </h2>

        <div className="reveal mt-16 grid grid-cols-2 gap-x-16 gap-y-10 max-md:grid-cols-1 max-md:gap-y-8">
          <Rule
            title="Routing"
            body="The operator is the only router. Agents never invoke each other. The operator decides who speaks, when, and in what order."
          />
          <Rule
            title="Separation"
            body="Layer 1 never produces content. Layer 2 never makes strategic decisions. Layer 3 never creates or directs. Violations break the system."
          />
          <Rule
            title="No direct links"
            body="Knife and Forge never talk directly. Mirror and Scribe never talk directly. Feedback always goes through the operator."
          />
          <Rule
            title="Authorship"
            body="If the operator cannot say \u201Cthis is mine\u201D about direction, voice, and final decision — it is not theirs. Approval is delegation. Authorship requires a fingerprint on the thinking."
          />
          <Rule
            title="Human Override"
            body="The operator can override any agent at any time. If Knife kills an idea worth pursuing, proceed anyway. But log the override — Echo will see the pattern."
          />
          <Rule
            title="Failure mode"
            body="If all agents agree, be suspicious. Consensus in a system designed for friction is a red flag, not validation."
          />
        </div>
      </section>
    </PageShell>
  );
}

function LayerBlock({
  n,
  name,
  subtitle,
  agents,
}: {
  n: string;
  name: string;
  subtitle: string;
  agents: Agent[];
}) {
  return (
    <section className="border-t border-line-2">
      <div className="container-x py-24 max-md:py-16">
        <div className="reveal grid grid-cols-[1fr_1.15fr] items-baseline gap-24 max-md:grid-cols-1 max-md:gap-8">
          <div>
            <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">
              <span className="text-ink">Layer {n}</span>
            </div>
            <h2
              className="font-serif text-[clamp(44px,5.6vw,72px)] font-light leading-[0.98] tracking-tightest text-ink"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 20' }}
            >
              {name}
            </h2>
          </div>
          <p className="max-w-[52ch] font-serif text-[clamp(19px,1.5vw,24px)] leading-[1.4] tracking-tight text-ink-2">
            {subtitle}
          </p>
        </div>

        <div className="reveal mt-16 grid grid-cols-3 gap-px bg-line max-md:grid-cols-1">
          {agents.map((a) => (
            <div
              key={a.num}
              className="flex flex-col justify-between bg-bg p-10 max-md:p-8"
            >
              <div>
                <div className="mb-6 flex items-baseline gap-4 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-3">
                  <span className="text-ink">{a.num}</span>
                  <span>{a.role}</span>
                </div>
                <h3
                  className="mb-6 font-serif text-[clamp(28px,2.4vw,36px)] font-normal leading-[1.05] tracking-tight text-ink"
                  style={{ fontVariationSettings: '"opsz" 90, "SOFT" 20' }}
                >
                  {a.name}
                </h3>
                <p className="mb-8 max-w-[36ch] font-sans text-[15px] leading-[1.55] text-ink-2">
                  {a.what}
                </p>
              </div>
              <div className="border-t border-line pt-4">
                <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-4">
                  Never
                </div>
                <p className="max-w-[36ch] font-sans text-[13.5px] leading-[1.5] text-ink-3">
                  {a.never}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Rule({ title, body }: { title: string; body: string }) {
  return (
    <div className="border-t border-line pt-6">
      <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink">
        {title}
      </div>
      <p className="max-w-[52ch] font-sans text-[15.5px] leading-[1.6] text-ink-2">
        {body}
      </p>
    </div>
  );
}
