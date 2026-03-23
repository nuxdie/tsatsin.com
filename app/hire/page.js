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
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <a
          href="/"
          className="text-sm text-zinc-500 transition hover:text-zinc-300"
        >
          ← Back to home
        </a>

        <div className="mt-8 max-w-4xl">
          <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">Work with me</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.05]">
            Useful software for messy problems.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl">
            I help turn vague ideas into working tools, prototypes, and searchable systems — especially
            where AI, automation, internal workflows, and product-shaped glue code intersect.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-400 md:text-lg">
            The point is not strategy theater. The point is to get to something real fast enough that you
            can test it, use it, or kill it with confidence.
          </p>
        </div>
      </section>

      <section className="border-t border-zinc-900 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">Offer ladder</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Start small, then build only what survives contact with reality.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {offers.map((offer) => (
              <article
                key={offer.title}
                className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-medium text-white">{offer.title}</h3>
                  <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300">
                    {offer.price}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-zinc-300">{offer.description}</p>
                <ul className="mt-5 space-y-3 text-sm text-zinc-400">
                  {offer.includes.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-900 bg-zinc-950">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:px-10">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">Good fit</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">Where this works best</h2>
            <ul className="mt-6 space-y-4 text-base leading-8 text-zinc-300">
              {fits.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-3 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">Not a fit</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">What I avoid</h2>
            <ul className="mt-6 space-y-4 text-base leading-8 text-zinc-400">
              {notFits.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-3 h-1.5 w-1.5 rounded-full bg-zinc-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-900 bg-zinc-950">
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10">
          <div className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">Proof</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Public work you can inspect before talking to me.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-zinc-300 md:text-lg">
              <p>
                <a href="https://ai.tsatsin.com/" className="text-white underline underline-offset-4 hover:text-zinc-300">
                  ai-pricing
                </a>{" "}
                is a live public tool for comparing AI model pricing and performance.
              </p>
              <p>
                <a href="https://github.com/nuxdie/tg-archive" className="text-white underline underline-offset-4 hover:text-zinc-300">
                  tg-archive
                </a>{" "}
                shows the systems side: self-hosted sync, search, storage, and admin UI.
              </p>
              <p>
                <a href="https://github.com/nuxdie/json-like-parse" className="text-white underline underline-offset-4 hover:text-zinc-300">
                  json-like-parse
                </a>{" "}
                shows the smaller reusable tooling side.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-900 bg-zinc-950">
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10">
          <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">Next step</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            If the problem is real, start with the smallest paid step.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-300 md:text-lg">
            The clean starting point is <strong>Discovery + Prototype Plan</strong>: one focused session,
            concrete technical direction, and a realistic next-step recommendation instead of a vague pile
            of advice.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:hi@tsatsin.com?subject=Project%20idea%20for%20Discovery%20%2B%20Prototype%20Plan"
              className="rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"
            >
              Email me
            </a>
            <a
              href="https://github.com/nuxdie"
              className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900"
            >
              Review GitHub first
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
