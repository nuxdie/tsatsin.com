const offers = [
  {
    title: "Discovery + Prototype Plan",
    price: "€400–€500",
    description:
      "A focused diagnostic for a messy idea, so it gets a practical technical direction before anyone wastes more time on it.",
    includes: [
      "One deep-dive call",
      "Problem breakdown and bottleneck analysis",
      "Recommended tools and architecture",
      "Prototype scope and a next-step plan",
    ],
  },
  {
    title: "Prototype Sprint",
    price: "from €2k–€3k",
    description:
      "A short, fixed-scope build that turns the idea into something real enough to test, show, or learn from.",
    includes: [
      "A working demo or proof of concept",
      "Fast iteration over a tight time window",
      "Clear scope instead of open-ended consulting drift",
      "Handoff notes and realistic next steps",
    ],
  },
  {
    title: "Practical AI Workshop",
    price: "from €750",
    description:
      "A hands-on session for your team on today's AI tools: what they do well, where they fail, and what is worth adopting.",
    includes: [
      "Walkthroughs of real tools and workflows",
      "Your use cases, discussed honestly",
      "Recommended adoption paths",
      "No hype",
    ],
  },
];

const steps = [
  { title: "You write a few lines", note: "What's stuck, who it's for, and what you've tried. Messy is fine." },
  { title: "We talk for an hour", note: "I ask a lot of questions. By the end we both know if this is worth building." },
  { title: "I build the smallest real thing", note: "Not a slide deck. Something you can click, run, or put in front of users." },
  { title: "You decide", note: "Keep it, change it, or kill it. All three are good outcomes when they're made on evidence." },
];

const proof = [
  {
    name: "ai-pricing",
    href: "https://ai.tsatsin.com/",
    note: "A live tool comparing AI models on price and performance. I built it because I needed the answer myself.",
  },
  {
    name: "BasisExamenOnline",
    href: "https://basisexamenonline.nl/",
    note: "A whole product with one partner: learner app, teacher admin, payments, all of it running in production.",
  },
  {
    name: "Mochi",
    href: "https://github.com/nuxdie/xpet-mochi",
    note: "An AI agent that reads mail, calendar and chats through narrow tools and acts only after a yes. The guardrails are the product.",
  },
  {
    name: "tg-archive",
    href: "https://github.com/nuxdie/tg-archive",
    note: "Self-hosted sync, search and storage for years of messages. The unglamorous systems side.",
  },
];

const fits = [
  "Agency owners who need internal tools, automation, or fast prototypes",
  "Ops-heavy teams drowning in manual work or messy workflows",
  "Founders and operators with good ideas and no one technical enough to test them quickly",
  "Teams that know AI matters and want practical guidance instead of trend-parroting",
];

const notFits = [
  "Committee-heavy enterprise procurement",
  "Vague unpaid brainstorming",
  "Tiny favour-sized custom work with fuzzy scope",
  "Long strategy decks with nothing built",
];

const mail = "mailto:artem@tsatsin.com?subject=Project%20idea";

export const metadata = {
  title: "Work with Artem Tsatsin",
  description:
    "Prototype-first technical work: practical AI and software tools, internal systems, and fast validation sprints.",
  alternates: {
    canonical: "https://tsatsin.com/hire",
  },
};

export default function HirePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-chalk text-ink">
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-12 md:px-10">
        <a href="/" className="font-semibold text-skydeep underline decoration-2 underline-offset-4 hover:text-ink">
          Back to tsatsin.com
        </a>
        <div className="mt-12 grid items-center gap-12 md:grid-cols-[1fr_auto]">
          <div>
            <h1 className="font-display text-[clamp(2.8rem,7vw,5.4rem)] font-extrabold leading-[0.95] tracking-[-0.035em]">
              Bring me the messy problem.
            </h1>
            <p className="mt-8 max-w-[36rem] text-lg leading-8 text-slate md:text-xl md:leading-9">
              I turn vague ideas into working tools, fast enough that you can test them, use them, or kill them with
              confidence. Fifteen years of shipping for the web, the last three building with AI every day.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={mail}
                className="rounded-xl border-2 border-ink bg-ink px-6 py-3.5 font-display font-bold text-white shadow-[4px_4px_0_#F29BB0] transition-transform hover:-translate-y-0.5"
              >
                Tell me about your project
              </a>
              <a
                href="#offers"
                className="rounded-xl border-2 border-ink bg-white px-6 py-3.5 font-display font-bold transition-transform hover:-translate-y-0.5"
              >
                See prices
              </a>
            </div>
          </div>
          <img
            src="/artem.jpg"
            alt="Artem Tsatsin"
            width="720"
            height="720"
            className="hidden h-60 w-60 -rotate-3 rounded-[28px] border-2 border-ink object-cover shadow-[8px_8px_0_#8CCBE6] md:block"
          />
        </div>
      </section>

      <section id="offers" className="scroll-mt-6 border-y-2 border-ink bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <h2 className="max-w-3xl font-display text-4xl font-extrabold tracking-[-0.025em] md:text-5xl">
            Start small, then build only what survives contact with reality.
          </h2>
          <ol className="mt-12 grid gap-6 lg:grid-cols-3">
            {offers.map((offer, i) => (
              <li
                key={offer.title}
                className={`flex flex-col rounded-[24px] border-2 border-ink p-7 ${i === 0 ? "bg-sky shadow-[6px_6px_0_#14202B]" : "bg-chalk"}`}
              >
                <p className="font-display text-sm font-bold">{["Start here", "Then build", "For your team"][i]}</p>
                <h3 className="mt-2 font-display text-2xl font-bold">{offer.title}</h3>
                <p className="mt-1 font-display text-lg font-bold">{offer.price}</p>
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

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <h2 className="font-display text-4xl font-extrabold tracking-[-0.025em] md:text-5xl">How it goes</h2>
        <ol className="mt-12 grid gap-8 md:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title}>
              <span className="grid h-10 w-10 place-items-center rounded-[10px] border-2 border-ink bg-pig font-display text-lg font-extrabold">
                {i + 1}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-2 leading-7 text-slate">{s.note}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-ink text-chalk">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <h2 className="font-display text-4xl font-extrabold tracking-[-0.025em] md:text-5xl">Things I&apos;ve built like this</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-chalk/75">All public. Look before you write.</p>
          <ul className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
            {proof.map((p) => (
              <li key={p.name} className="border-l-4 border-sky pl-5">
                <a href={p.href} className="font-display text-2xl font-bold underline decoration-sky decoration-[3px] underline-offset-4 hover:text-sky">
                  {p.name}
                </a>
                <p className="mt-2 leading-7 text-chalk/75">{p.note}</p>
              </li>
            ))}
          </ul>
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

      <footer className="border-t-2 border-ink bg-sky">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
          <h2 className="font-display text-[clamp(2.4rem,6vw,4.5rem)] font-extrabold leading-none tracking-[-0.035em]">
            Tell me what&apos;s stuck.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8">
            A few lines are enough to start. I&apos;ll answer with questions, or with an honest &ldquo;this isn&apos;t for me&rdquo;.
          </p>
          <a
            href={mail}
            className="mt-8 inline-block break-all font-display text-3xl font-extrabold underline decoration-[4px] underline-offset-[6px] hover:decoration-pigdeep md:text-5xl"
          >
            artem@tsatsin.com
          </a>
          <p className="mt-10 text-sm text-ink/70">
            Amsterdam, working in English or Russian. Also looking for a full-time role:{" "}
            <a href="/" className="font-semibold underline underline-offset-4">see the main page</a>.
          </p>
        </div>
      </footer>
    </main>
  );
}
