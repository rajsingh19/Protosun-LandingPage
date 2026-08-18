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
    <div className="relative z-10 px-6 pb-16 pt-0 md:px-12 lg:px-20 mt-10 md:mt-14 lg:mt-20">
      <div className="rounded-3xl border border-[#0863e8]/10 bg-white/80 p-6 md:p-8 lg:p-8.5 shadow-[0_4px_24px_rgba(8,99,232,0.012)]">
        {/* Heading */}
        <h2 className="text-3xl font-bold tracking-tight text-[#09094D] md:text-[32px]">
          Our Partners &amp; Founders:
        </h2>
        <span className="mt-4.5 block h-[1.5px] w-12 rounded-full bg-[#0863e8]/60" />

        {/* Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-9">
          {FOUNDERS.map((founder) => (
            <article
              key={founder.name}
              className="flex items-center gap-6 rounded-2xl border border-[#0863e8]/8 bg-white p-7 transition-all duration-300 ease-out hover:-translate-y-[3px] hover:shadow-md hover:border-[#0863e8]/25 group h-full"
            >
              {/* Icon Container */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#0863e8]/8 transition-transform duration-300 group-hover:scale-[1.05]">
                <UserRound className="h-7 w-7 text-[#0863e8]" strokeWidth={1.8} />
              </div>
              
              {/* Text content */}
              <div className="flex flex-col justify-center">
                <h3 className="text-[22px] font-bold text-[#0863e8] leading-tight">
                  {founder.name}
                </h3>
                <span className="mt-2 block h-[1.5px] w-10 rounded-full bg-[#0863e8]/40 transition-all duration-300 group-hover:w-14" />
                <p className="mt-3 text-[16px] leading-[1.6] text-[#09094D]/80 font-medium">
                  {founder.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
