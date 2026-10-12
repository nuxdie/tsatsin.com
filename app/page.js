const projects = [
  {
    name: "Mochi",
    href: "https://github.com/nuxdie/xpet-mochi",
    description:
      "An always-on personal agent with a Claude Code brain, living on the desktop as a small 3D pixel pig. Wakes on schedules and events, works through narrow tools, and acts only behind explicit consent.",
  },
  {
    name: "BasisExamenOnline",
    href: "https://basisexamenonline.nl/",
    linkLabel: "Site ↗",
    description:
      "Co-founded product: Dutch civic-integration exam practice with a paid learner app and an admin where teachers author content. Next.js, MongoDB, Stripe.",
  },
  {
    name: "ai-pricing",
    href: "https://github.com/nuxdie/ai-pricing",
    description:
      "Live public tool for comparing AI model pricing, context windows, speed, and benchmark performance.",
    live: "https://ai.tsatsin.com/",
  },
  {
    name: "tg-archive",
    href: "https://github.com/nuxdie/tg-archive",
    description:
      "Self-hosted Telegram archive with sync agent, searchable web UI, media storage, and history tracking.",
  },
  {
    name: "json-like-parse",
    href: "https://github.com/nuxdie/json-like-parse",
    description:
      "Developer utility for extracting and parsing JSON-like text from messy strings.",
    live: "https://www.npmjs.com/package/json-like-parse",
  },
  {
    name: "llm-chats-archive",
    href: "https://github.com/nuxdie/llm-chats-archive",
    description:
      "Self-hosted archive for AI chat histories with local search, attachments, and provider import support.",
  },
];

const experience = [
  {
    period: "2023 – now",
    role: "Co-founder, technical lead",
    org: "InburgeringsHub · BasisExamenOnline.nl",
    note: "Built and run the whole product with one partner, from the stack to payments to users.",
  },
  {
    period: "2017 – 2024",
    role: "Frontend Developer",
    org: "Booking.com, Amsterdam",
    note: "Three product teams; designed and ran 50+ A/B experiments with product, design and analytics.",
  },
  {
    period: "2015 – 2017",
    role: "Engineering Manager / Lead JS Developer",
    org: "Rambler&Co · LiveJournal, Moscow",
    note: "Led three teams; ran hiring and mentoring; moved LiveJournal to React and to Git/Docker.",
  },
  {
    period: "2011 – 2015",
    role: "Node.js and Rails developer",
    org: "Playflock · Mechnikov Research Institute",
    note: "Game backends and product analytics; the institute's website.",
  },
];

const capabilities = [
  "AI-assisted workflows and internal tools",
  "Fast product and feature prototypes",
  "Self-hosted search, archive, and data systems",
  "Frontend, backend, infra, and glue code",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20 md:px-10">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm uppercase tracking-[0.22em] text-zinc-500">
            Artem Tsatsin / nuxdie
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.05]">
            Practical AI/software tools, internal systems, and fast prototypes.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl">
            I build useful software for messy, vague, or scattered problems — especially where AI,
            automation, search, self-hosting, and product-shaped glue code intersect.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-400 md:text-lg">
            The pattern is simple: clarify the problem, build the first useful version fast, and reduce
            uncertainty with something real.
          </p>

          <div className="mt-8 max-w-3xl rounded-2xl border border-emerald-900/60 bg-emerald-950/30 px-5 py-4 text-sm leading-7 text-emerald-100 md:text-base">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-400 align-middle" />
            Open to full-time roles in Amsterdam or remote: engineering management, forward-deployed /
            solutions engineering, developer relations, and senior frontend / full-stack work.
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/artem-tsatsin-cv.pdf"
              className="rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"
            >
              Download CV
            </a>
            <a
              href="mailto:artem@tsatsin.com"
              className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900"
            >
              Email me
            </a>
            <a
              href="/hire"
              className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900"
            >
              Freelance
            </a>
            <a
              href="https://github.com/nuxdie"
              className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900"
            >
              GitHub
            </a>
            <a
              href="https://blog.tsatsin.com/"
              className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900"
            >
              Blog
            </a>
            <a
              href="https://artempodcast.com/"
              className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900"
            >
              Podcast
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {capabilities.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/60 px-5 py-4 text-sm text-zinc-300"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-zinc-900 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">Experience</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Fifteen years of shipping for the web.
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-400 md:text-lg">
              Product teams at scale, managing engineers, and since 2023 building with AI agents every day.
            </p>
          </div>

          <ol className="mt-12 space-y-4">
            {experience.map((item) => (
              <li
                key={item.org}
                className="grid gap-2 rounded-2xl border border-zinc-800 bg-zinc-900/60 px-5 py-4 md:grid-cols-[9rem_1fr] md:gap-6"
              >
                <span className="text-sm text-zinc-500">{item.period}</span>
                <div>
                  <p className="text-base font-medium text-white">
                    {item.role} <span className="font-normal text-zinc-400">· {item.org}</span>
                  </p>
                  <p className="mt-1 text-sm leading-7 text-zinc-300">{item.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-zinc-900 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">Selected work</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Public projects that show how I build.
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-400 md:text-lg">
              A mix of live tools, self-hosted systems, and reusable developer utilities.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.name}
                className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-medium text-white">{project.name}</h3>
                  <a
                    href={project.href}
                    className="text-sm text-zinc-400 transition hover:text-zinc-200"
                  >
                    {project.linkLabel || "GitHub ↗"}
                  </a>
                </div>
                <p className="mt-4 text-sm leading-7 text-zinc-300">{project.description}</p>
                {project.live ? (
                  <div className="mt-5">
                    <a
                      href={project.live}
                      className="inline-flex rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-800"
                    >
                      Open live ↗
                    </a>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-900 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <div className="max-w-3xl rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">Working style</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Less strategy theater, more useful software.
            </h2>
            <p className="mt-5 text-base leading-8 text-zinc-300 md:text-lg">
              I work best on practical, technically ambiguous problems: internal tools, prototypes,
              searchable systems, workflow automation, and product ideas that need to become real fast.
            </p>
            <p className="mt-4 text-base leading-8 text-zinc-400 md:text-lg">
              Hiring? <a href="/artem-tsatsin-cv.pdf" className="text-white underline underline-offset-4 hover:text-zinc-300">Here is my CV</a>, or write to{" "}
              <a href="mailto:artem@tsatsin.com" className="text-white underline underline-offset-4 hover:text-zinc-300">artem@tsatsin.com</a>.
              For a short freelance project, the offer is <a href="/hire" className="text-white underline underline-offset-4 hover:text-zinc-300">here</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
