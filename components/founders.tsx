import React from "react"
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
    <div className="relative z-10 px-5 pb-6 pt-0 md:px-12 lg:px-20 mt-12 md:mt-14 lg:mt-20">
      <div className="md:rounded-3xl md:border md:border-[#0863e8]/10 md:bg-white/80 px-0 py-0 md:p-8 lg:p-8.5 md:shadow-[0_4px_24px_rgba(8,99,232,0.012)] w-full">
        {/* Heading */}
        <h2 className="text-[22px] xs:text-2xl sm:text-3xl font-bold tracking-tight text-[#09094D] md:text-[32px]">
          Our Partners &amp; Founders:
        </h2>
        <span className="mt-3 md:mt-4.5 block h-[1.5px] w-12 rounded-full bg-[#0863e8]/60" />

        {/* Cards Grid */}
        <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-9">
          {FOUNDERS.map((founder, index) => (
            <React.Fragment key={founder.name}>
              {index > 0 && (
                <div className="md:hidden w-full h-px bg-[#0863e8]/10 my-2" />
              )}
              <article
                className="flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-6 rounded-none md:rounded-2xl border-0 md:border border-transparent md:border-[#0863e8]/8 bg-transparent md:bg-white p-0 md:p-7 transition-all duration-300 ease-out md:hover:-translate-y-[3px] md:hover:shadow-md md:hover:border-[#0863e8]/25 group h-full"
              >
                {/* Icon Container */}
                <div className="flex h-12 w-12 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-full bg-[#0863e8]/8 transition-transform duration-300 md:group-hover:scale-[1.05]">
                  <UserRound className="h-6 w-6 md:h-7 md:w-7 text-[#0863e8]" strokeWidth={1.8} />
                </div>
                
                {/* Text content */}
                <div className="flex flex-col justify-center w-full">
                  <h3 className="text-[20px] md:text-[22px] font-bold text-[#0863e8] leading-tight">
                    {founder.name}
                  </h3>
                  <span className="mt-2 block h-[1.5px] w-12 md:w-10 rounded-full bg-[#0863e8]/40 transition-all duration-300 md:group-hover:w-14" />
                  <p className="mt-3 text-[15px] md:text-[16px] leading-[1.5] text-[#09094D]/80 font-medium">
                    {founder.description}
                  </p>
                </div>
              </article>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

