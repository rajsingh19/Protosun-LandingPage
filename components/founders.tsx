import { UserRound } from "lucide-react"

const FOUNDERS = [
  {
    name: "Priya Singh",
    description: "A visionary leader with a strong commitment to innovation and excellence in healthcare.",
  },
  {
    name: "Sima Devi",
    description: "A dedicated professional focused on quality, integrity, and improving lives through healthcare.",
  },
]

export function Founders() {
  return (
    <section className="relative z-10 px-6 pb-16 pt-6 md:px-12 lg:px-20 lg:pb-6 lg:pt-2">
      <div className="rounded-[28px] border border-brand-blue/15 bg-[oklch(1_0_0)]/70 p-6 md:p-10 lg:p-8">
        {/* Heading */}
        <h2 className="text-3xl font-bold tracking-tight text-brand-navy md:text-[34px]">
          Our Partners &amp; Founders:
        </h2>
        <span className="mt-3 block h-1 w-16 rounded-full bg-brand-blue" />

        {/* Cards */}
        <div className="mt-6 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-0">
          {FOUNDERS.map((founder, i) => (
            <div key={founder.name} className="contents">
              {i > 0 && <span className="hidden w-px self-stretch bg-brand-navy/10 lg:mx-10 lg:block" />}
              <article className="flex items-start gap-5 rounded-2xl border border-brand-blue/15 bg-[oklch(1_0_0)]/80 p-6 md:p-7">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-brand-blue/10">
                  <UserRound className="h-8 w-8 text-brand-blue" strokeWidth={1.7} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-blue">{founder.name}</h3>
                  <span className="mt-2 block h-0.5 w-14 rounded-full bg-brand-blue/60" />
                  <p className="mt-3 text-lg leading-relaxed text-brand-navy/85">{founder.description}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
