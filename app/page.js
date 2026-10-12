import Mochi from "./Mochi";

const roles = [
  {
    title: "Engineering manager",
    note: "I've led three teams at once, hired and mentored, and moved an organisation onto new tools by explaining why, not by forcing it.",
  },
  {
    title: "Forward-deployed or solutions engineer",
    note: "I bring AI tools into real work and make them boring enough to trust: narrow permissions, clear logs, a human who says yes.",
  },
  {
    title: "Developer relations",
    note: "I co-founded a frontend podcast, make videos about building with AI, and like nothing more than showing how a thing actually works.",
  },
  {
    title: "Senior frontend or full-stack",
    note: "TypeScript, React, Next.js, Node. I still enjoy shipping it with my own hands.",
  },
];

const shipped = [
  {
    name: "BasisExamenOnline",
    href: "https://basisexamenonline.nl/",
    link: "Visit the site",
    note: "Exam practice for people moving to the Netherlands. Co-founded and built end to end: learner app, teacher admin, payments.",
  },
  {
    name: "ai-pricing",
    href: "https://ai.tsatsin.com/",
    link: "Open the tool",
    note: "Compares AI models on price, speed and benchmarks. I built it to pick models for real work; 22 people starred it.",
  },
  {
    name: "Win AI Buddy",
    href: "https://github.com/nuxdie/win-ai-buddy-for-gaming",
    link: "Download and demo",
    note: "A Windows app that keeps a live voice line to Gemini while you play, sees your screen if you let it, and answers in an in-game overlay.",
  },
  {
    name: "json-like-parse",
    href: "https://github.com/nuxdie/json-like-parse",
    link: "Code on GitHub",
    note: "An npm package that pulls usable JSON out of whatever an LLM actually returned. Small, boring, saves hours.",
  },
  {
    name: "tg-archive",
    href: "https://github.com/nuxdie/tg-archive",
    link: "Code on GitHub",
    note: "My whole Telegram history, self-hosted and searchable, with a sync agent that keeps it current.",
  },
];

const forFun = [
  {
    name: "NFS Revival",
    href: "https://github.com/nuxdie/nfs3-godot",
    note: "The racing games I grew up with, rebuilt in Godot 4. All-new code that loads tracks and cars from your own old Need for Speed install.",
  },
  {
    name: "pig",
    href: "https://nuxdie.github.io/pig/",
    note: "A dice game about knowing when to stop, grown into a seven-opponent circuit with a card draft. Playable in the browser.",
  },
  {
    name: "baritone-ts",
    href: "https://github.com/nuxdie/baritone-ts",
    note: "Baritone-grade Minecraft pathfinding for Mineflayer bots, in TypeScript: twenty movement types, parkour included.",
  },
];

const timeline = [
  {
    years: "2023 – now",
    what: "Co-founder and technical lead, InburgeringsHub",
    note: "BasisExamenOnline with one partner: the product, the stack, Stripe, the users. Also the part I underrated as an engineer: selling it.",
  },
  {
    years: "2017 – 2024",
    what: "Frontend developer, Booking.com",
    note: "Three product teams in Amsterdam. 50+ A/B experiments with product, design and analytics, shipped and watched in production.",
  },
  {
    years: "2015 – 2017",
    what: "Engineering manager, Rambler&Co and LiveJournal",
    note: "Three teams in Moscow. Hiring, weekly mentoring, in-house courses, the move to React and from SVN to Git and Docker.",
  },
  {
    years: "2011 – 2015",
    what: "Developer, Playflock and the Mechnikov institute",
    note: "Node.js backends for social games, and a vaccine research institute's website in Rails.",
  },
];

const beliefs = [
  {
    title: "Find out for yourself",
    note: "I'd rather run the experiment than read the benchmark. Fifty A/B tests teach you how often the obvious answer is wrong.",
  },
  {
    title: "Build the first useful version",
    note: "Clarify the problem, ship something real, then decide. A working thing ends more arguments than a slide deck.",
  },
  {
    title: "Nothing should be magic",
    note: "If I build it, you'll know how it works and why. That goes double for AI.",
  },
];

const elsewhere = [
  { label: "GitHub", href: "https://github.com/nuxdie" },
  { label: "YouTube", href: "https://www.youtube.com/@artemops" },
  { label: "Blog", href: "https://blog.tsatsin.com/" },
  { label: "Podcast", href: "https://podcast.tsatsin.com/" },
  { label: "Freelance work", href: "/hire" },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-chalk text-ink">
      {/* Hero: who, what, and the one thing to click. */}
      <section className="mx-auto grid max-w-6xl items-center gap-16 px-6 pb-24 pt-16 md:grid-cols-[1.15fr_0.85fr] md:px-10 md:pt-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-4 py-1.5 text-sm font-semibold">
            <span className="h-2.5 w-2.5 rounded-[3px] bg-grass" aria-hidden="true" />
            Open to full-time roles, Amsterdam or remote
          </p>
          <h1 className="mt-8 font-display text-[clamp(2.9rem,7vw,5.6rem)] font-extrabold leading-[0.95] tracking-[-0.035em]">
            Something from nothing, on purpose.
          </h1>
          <p className="mt-8 max-w-[34rem] text-lg leading-8 text-slate md:text-xl md:leading-9">
            I&apos;m Artem. I&apos;ve been shipping software for the web for fifteen years: seven at Booking.com, two
            running three teams at LiveJournal, and lately a lot of building with AI agents. Including a pig that
            lives on my desktop.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="/artem-tsatsin-cv.pdf"
              className="rounded-xl border-2 border-ink bg-ink px-6 py-3.5 font-display text-base font-bold text-white shadow-[4px_4px_0_#8CCBE6] transition-transform hover:-translate-y-0.5"
            >
              Download my CV
            </a>
            <a
              href="mailto:artem@tsatsin.com"
              className="rounded-xl border-2 border-ink bg-white px-6 py-3.5 font-display text-base font-bold text-ink transition-transform hover:-translate-y-0.5"
            >
              Email me
            </a>
          </div>
        </div>

        <figure className="relative mx-auto mt-10 w-full max-w-[400px] md:mt-0">
          <Mochi />
          <div className="rotate-[2deg] rounded-[28px] border-2 border-ink bg-sky p-3 shadow-[8px_8px_0_#14202B]">
            <img
              src="/artem.jpg"
              alt="Artem Tsatsin, smiling, in a tie-dye T-shirt"
              width="720"
              height="720"
              className="aspect-square w-full rounded-[18px] object-cover"
            />
          </div>
          <figcaption className="mt-6 text-center text-sm text-slate">
            Me, mid-sentence. Probably explaining something.
          </figcaption>
        </figure>
      </section>

      {/* What I'd do for you. */}
      <section className="border-y-2 border-ink bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <h2 className="max-w-2xl font-display text-4xl font-extrabold tracking-[-0.025em] md:text-5xl">
            Where I&apos;d be useful
          </h2>
          <dl className="mt-12 grid gap-x-14 gap-y-10 md:grid-cols-2">
            {roles.map((r) => (
              <div key={r.title} className="border-l-4 border-sky pl-5">
                <dt className="font-display text-2xl font-bold">{r.title}</dt>
                <dd className="mt-2 max-w-md leading-7 text-slate">{r.note}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Mochi gets the spotlight; the rest is a tidy list. */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <h2 className="font-display text-4xl font-extrabold tracking-[-0.025em] md:text-5xl">Things I&apos;ve built</h2>

        <article className="mt-12 grid gap-8 rounded-[32px] border-2 border-ink bg-pig/25 p-8 md:grid-cols-[auto_1fr] md:items-center md:p-12">
          <svg viewBox="0 0 12 10" width="132" height="110" shapeRendering="crispEdges" aria-hidden="true">
            {[
              ".dd......dd.",
              ".dpp....ppd.",
              ".pppppppppp.",
              "pppppppppppp",
              "ppkwppppkwpp",
              "ppkkppppkkpp",
              "pppddddddppp",
              "pppdkddkdppp",
              "pppddddddppp",
              "pppppppppppp",
            ].flatMap((row, y) =>
              [...row].map((c, x) =>
                c === "." ? null : (
                  <rect
                    key={`${x}-${y}`}
                    x={x}
                    y={y}
                    width="1"
                    height="1"
                    fill={{ p: "#F29BB0", d: "#C9667F", k: "#14202B", w: "#FFFFFF" }[c]}
                  />
                )
              )
            )}
          </svg>
          <div>
            <h3 className="font-display text-3xl font-extrabold tracking-[-0.02em]">Mochi</h3>
            <p className="mt-3 max-w-2xl text-lg leading-8">
              A small 3D pixel pig that lives on my desktop, with a Claude Code agent for a brain. It reads my mail,
              calendar and chats through narrow tools, keeps track of what I&apos;ve promised people, and does nothing
              in the world until I say yes. It&apos;s how I learn, hands-on, what an agent should and shouldn&apos;t
              do on its own. Also it hops when you pet it.
            </p>
            <a
              href="https://github.com/nuxdie/xpet-mochi"
              className="mt-5 inline-block font-display font-bold text-ink underline decoration-pigdeep decoration-[3px] underline-offset-4 hover:decoration-ink"
            >
              Code on GitHub
            </a>
          </div>
        </article>

        <h3 className="mt-16 font-display text-2xl font-bold">Shipped and in use</h3>
        <ul className="mt-4 divide-y-2 divide-ink/10 border-y-2 border-ink/10">
          {shipped.map((p) => (
            <li key={p.name} className="grid gap-2 py-6 md:grid-cols-[14rem_1fr_auto] md:items-baseline md:gap-8">
              <h4 className="font-display text-xl font-bold">{p.name}</h4>
              <p className="max-w-xl leading-7 text-slate">{p.note}</p>
              <a href={p.href} className="font-semibold text-skydeep underline decoration-2 underline-offset-4 hover:text-ink">
                {p.link}
              </a>
            </li>
          ))}
        </ul>

        <h3 className="mt-20 font-display text-2xl font-bold">Built for the joy of it</h3>
        <p className="mt-2 max-w-2xl leading-7 text-slate">
          Nobody asked for these. They&apos;re how I find out what a technology can really do.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:grid-rows-[auto_auto]">
          <a
            href="https://github.com/nuxdie/clock_v3_cpp"
            className="group flex flex-col overflow-hidden rounded-[24px] border-2 border-ink bg-ink text-chalk md:row-span-2"
          >
            <img src="/work/clock.jpg" alt="The clock at dawn and during a night storm" width="512" height="600" className="w-full" />
            <div className="p-6">
              <p className="font-display text-xl font-bold group-hover:underline">A clock that looks out the window</p>
              <p className="mt-2 leading-7 text-chalk/75">
                A Raspberry Pi clock whose painted landscape follows the real sun, moon and weather. Rain slants in the wind, the town lights up at night.
              </p>
            </div>
          </a>
          <a
            href="https://github.com/nuxdie/voxel-viewer"
            className="group overflow-hidden rounded-[24px] border-2 border-ink bg-white"
          >
            <img src="/work/voxel.jpg" alt="A voxel island rendered in watercolor mode" width="1000" height="640" className="aspect-[25/16] w-full object-cover" />
            <div className="p-6">
              <p className="font-display text-xl font-bold group-hover:underline">Voxels, but watercolor</p>
              <p className="mt-2 leading-7 text-slate">
                An OpenGL viewer in C++ for MagicaVoxel models and Minecraft schematics, with four render modes. Plus a Minecraft terrain generator to feed it.
              </p>
            </div>
          </a>
          <a
            href="https://www.youtube.com/watch?v=JcQZouBjsiA"
            className="group grid overflow-hidden rounded-[24px] border-2 border-ink bg-sky sm:grid-cols-[11rem_1fr]"
          >
            <img src="/work/volume-gamma.jpg" alt="Volume Gamma album cover: a pixel grass block in the sky" width="640" height="640" className="aspect-square w-full object-cover sm:h-full" />
            <div className="p-6">
              <p className="font-display text-xl font-bold group-hover:underline">Volume Gamma</p>
              <p className="mt-2 leading-7">
                Can Claude compose music, from code, that&apos;s worth listening to? A week of experiments later: a twelve-track Minecraft-style album, on YouTube.
              </p>
            </div>
          </a>
        </div>
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {forFun.map((p) => (
            <li key={p.name}>
              <a href={p.href} className="font-display text-lg font-bold underline decoration-pig decoration-[3px] underline-offset-4 hover:decoration-ink">
                {p.name}
              </a>
              <p className="mt-2 leading-7 text-slate">{p.note}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* The short version of the CV. A real sequence, so a real timeline. */}
      <section className="bg-ink text-chalk">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
          <h2 className="font-display text-4xl font-extrabold tracking-[-0.025em] md:text-5xl">The short version</h2>
          <ol className="mt-12 space-y-10 border-l-2 border-sky/60 pl-8">
            {timeline.map((t) => (
              <li key={t.years} className="relative">
                <span
                  className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-[4px] border-2 border-ink bg-sky"
                  aria-hidden="true"
                />
                <p className="text-sm font-semibold text-sky">{t.years}</p>
                <h3 className="mt-1 font-display text-2xl font-bold">{t.what}</h3>
                <p className="mt-2 max-w-2xl leading-7 text-chalk/75">{t.note}</p>
              </li>
            ))}
          </ol>
          <a
            href="/artem-tsatsin-cv.pdf"
            className="mt-12 inline-block font-display font-bold text-sky underline decoration-2 underline-offset-4 hover:text-white"
          >
            The long version, as a PDF
          </a>
        </div>
      </section>

      {/* How I work, in three sentences I actually believe. */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <h2 className="font-display text-4xl font-extrabold tracking-[-0.025em] md:text-5xl">How I work</h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {beliefs.map((b) => (
            <div key={b.title}>
              <h3 className="font-display text-2xl font-bold">{b.title}</h3>
              <p className="mt-3 leading-7 text-slate">{b.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Say hi. */}
      <footer className="border-t-2 border-ink bg-sky">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
          <h2 className="font-display text-[clamp(2.4rem,6vw,4.5rem)] font-extrabold leading-none tracking-[-0.035em]">
            Got a hard, fuzzy problem?
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8">
            Those are my favourite kind. Tell me about the team, the role, or the thing that won&apos;t work.
          </p>
          <a
            href="mailto:artem@tsatsin.com"
            className="mt-8 inline-block break-all font-display text-3xl font-extrabold underline decoration-[4px] underline-offset-[6px] hover:decoration-pigdeep md:text-5xl"
          >
            artem@tsatsin.com
          </a>
          <nav aria-label="Elsewhere" className="mt-12 flex flex-wrap gap-x-6 gap-y-3">
            {elsewhere.map((e) => (
              <a key={e.label} href={e.href} className="font-semibold underline decoration-2 underline-offset-4 hover:text-skydeep">
                {e.label}
              </a>
            ))}
          </nav>
          <p className="mt-10 text-sm text-ink/70">
            Amsterdam. Dutch citizen, no sponsorship needed. Russian and English; my Dutch is getting there.
          </p>
        </div>
      </footer>
    </main>
  );
}
