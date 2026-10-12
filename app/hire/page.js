const offers = [
  {
    title: "Discovery + Prototype Plan",
    price: "€400–€500",
    description:
      "A focused diagnostic for messy ideas that need a practical technical direction before anyone wastes more time.",
    includes: [
      "One deep-dive call",
      "Problem breakdown and bottleneck analysis",
      "Recommended tools / architecture direction",
      "Prototype scope and next-step plan",
    ],
  },
  {
    title: "Prototype Sprint",
    price: "from €2k–€3k",
    description:
      "A short fixed-scope build to turn a vague idea into something real enough to test, show, or learn from.",
    includes: [
      "Working demo or proof of concept",
      "Fast iteration over a tight time window",
      "Clear scope instead of open-ended consulting drift",
      "Handoff notes and realistic next steps",
    ],
  },
  {
    title: "Practical AI Workshop",
    price: "from €750",
    description:
      "A concrete team session on current AI/tools: what they actually do well, where they fail, and what is worth adopting.",
    includes: [
      "Tooling/workflow walkthroughs",
      "Use-case discussion grounded in reality",
      "Recommended adoption paths",
      "No hype theater",
    ],
  },
];

const fits = [
  "Agency owners who need internal tools, automation, or fast prototypes",
  "Ops-heavy teams drowning in manual work or messy workflows",
  "Founders or operators with useful ideas but no one technical enough to validate them quickly",
  "Teams that know AI matters but need practical guidance instead of trend parroting",
];

const notFits = [
  "Committee-heavy enterprise procurement theater",
  "Vague unpaid brainstorming",
  "Tiny favor-sized custom work with fuzzy scope",
  "Long strategy decks without building anything",
];

export const metadata = {
  title: "Work with Artem Tsatsin",
  description:
    "Prototype-first technical work: practical AI/software tools, internal systems, and fast validation sprints.",
  alternates: {
    canonical: "https://tsatsin.com/hire",
  },
};

export default function HirePage() {
  return (
    <main className="min-h-screen bg-chalk text-ink">
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-14 md:px-10">
        <a href="/" className="font-semibold text-skydeep underline decoration-2 underline-offset-4 hover:text-ink">
          Back to tsatsin.com
        </a>
        <div className="mt-10 max-w-4xl">
          <h1 className="font-display text-[clamp(2.6rem,6.5vw,5rem)] font-extrabold leading-[0.95] tracking-[-0.035em]">
            Useful software for messy problems.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate md:text-xl md:leading-9">
            I help turn vague ideas into working tools, prototypes, and searchable systems, especially where AI,
            automation, internal workflows, and product-shaped glue code meet.
          </p>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate">
            The point is not strategy theater. The point is to get to something real fast enough that you can test
            it, use it, or kill it with confidence.
          </p>
        </div>
      </section>

      <section className="border-y-2 border-ink bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <h2 className="max-w-3xl font-display text-4xl font-extrabold tracking-[-0.025em] md:text-5xl">
            Start small, then build only what survives contact with reality.
          </h2>
          <ol className="mt-12 grid gap-6 lg:grid-cols-3">
            {offers.map((offer, i) => (
              <li
                key={offer.title}
                className={`rounded-[24px] border-2 border-ink p-7 ${i === 0 ? "bg-sky shadow-[6px_6px_0_#14202B]" : "bg-chalk"}`}
              >
                <p className="font-display text-sm font-bold">Step {i + 1}</p>
                <h3 className="mt-2 font-display text-2xl font-bold">{offer.title}</h3>
                <p className="mt-1 font-semibold">{offer.price}</p>
                <p className="mt-4 leading-7 text-ink/80">{offer.description}</p>
                <ul className="mt-5 space-y-2 text-ink/80">
                  {offer.includes.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2.5 h-2 w-2 shrink-0 rounded-[2px] bg-ink" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-2 md:px-10">
        <div>
          <h2 className="font-display text-3xl font-extrabold tracking-[-0.02em]">Where this works best</h2>
          <ul className="mt-6 space-y-4 text-lg leading-8">
            {fits.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-3 h-2.5 w-2.5 shrink-0 rounded-[3px] bg-grass" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-3xl font-extrabold tracking-[-0.02em]">What I avoid</h2>
          <ul className="mt-6 space-y-4 text-lg leading-8 text-slate">
            {notFits.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-3 h-2.5 w-2.5 shrink-0 rounded-[3px] bg-pigdeep" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t-2 border-ink bg-sky">
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10">
          <h2 className="font-display text-4xl font-extrabold tracking-[-0.025em] md:text-5xl">
            If the problem is real, start with the smallest paid step.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8">
            That&apos;s the Discovery + Prototype Plan: one focused session, a concrete technical direction, and a
            realistic next step instead of a vague pile of advice. Want proof first?{" "}
            <a href="https://ai.tsatsin.com/" className="font-semibold underline decoration-2 underline-offset-4">ai-pricing</a>,{" "}
            <a href="https://github.com/nuxdie/tg-archive" className="font-semibold underline decoration-2 underline-offset-4">tg-archive</a> and{" "}
            <a href="https://github.com/nuxdie/xpet-mochi" className="font-semibold underline decoration-2 underline-offset-4">Mochi</a> are public.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:hi@tsatsin.com?subject=Project%20idea%20for%20Discovery%20%2B%20Prototype%20Plan"
              className="rounded-xl border-2 border-ink bg-ink px-6 py-3.5 font-display font-bold text-white shadow-[4px_4px_0_#F29BB0] transition-transform hover:-translate-y-0.5"
            >
              Email me about a project
            </a>
            <a
              href="https://github.com/nuxdie"
              className="rounded-xl border-2 border-ink bg-white px-6 py-3.5 font-display font-bold transition-transform hover:-translate-y-0.5"
            >
              Look at my GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
