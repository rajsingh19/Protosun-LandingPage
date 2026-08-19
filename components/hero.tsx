import React from "react"
import { FlaskConical, Leaf, ShieldCheck } from "lucide-react"

const FEATURES = [
  { icon: ShieldCheck, label: "Trusted\nQuality" },
  { icon: Leaf, label: "Natural\nCare" },
  { icon: FlaskConical, label: "Innovative\nScience" },
]

export function Hero() {
  return (
    <section className="relative z-10 grid flex-1 grid-cols-1 items-center gap-2 md:gap-10 lg:grid-cols-[45%_55%] lg:gap-0 lg:h-[calc(100vh-65px)] lg:max-h-[calc(100vh-65px)] lg:overflow-hidden">
      {/* Left column */}
      <div className="w-full max-w-[580px] px-5 pt-6 pb-2 md:px-12 md:pt-12 lg:px-20 lg:pt-0 lg:pb-12">
        <h1 className="font-bold leading-[1.1] md:leading-[1.05] tracking-tight text-brand-navy">
          <span className="block text-[26px] min-[360px]:text-[28px] md:text-6xl lg:text-[46px]">Welcome to</span>
          <span className="mt-0.5 md:mt-1 block text-[36px] min-[360px]:text-[40px] min-[390px]:text-[44px] text-brand-blue md:text-7xl lg:text-[68px]">
            Protosun
          </span>
          <span className="block text-[36px] min-[360px]:text-[40px] min-[390px]:text-[44px] md:text-7xl lg:text-[68px]">
            Healthcare
          </span>
        </h1>

        {/* Divider with dot */}
        <div className="mt-6 md:mt-10 lg:mt-5 flex items-center gap-2">
          <span className="h-2.5 w-2.5 md:h-3.5 md:w-3.5 rounded-full bg-brand-blue shrink-0" />
          <span className="h-[1.5px] md:h-px w-[70%] max-w-[240px] min-[360px]:max-w-[280px] md:w-[320px] md:max-w-none bg-gradient-to-r from-brand-blue/70 to-transparent" />
        </div>

        <p className="mt-5 md:mt-8 lg:mt-4 max-w-[480px] lg:max-w-[540px] text-[15px] min-[360px]:text-base md:text-xl lg:text-[18px] leading-[1.55] md:leading-[1.6] lg:leading-normal text-brand-navy/85">
          Committed to enhancing lives through high-quality{" "}
          <span className="font-semibold text-brand-blue">pharmaceutical</span> and{" "}
          <span className="font-semibold text-brand-blue">Ayurvedic</span> formulations.
        </p>

        {/* Features */}
        <div className="mt-8 md:mt-12 lg:mt-6.5 flex justify-between items-stretch gap-1 min-[360px]:gap-2 sm:gap-6 md:gap-9 lg:gap-6 w-full max-w-[460px]">
          {FEATURES.map((feature, i) => (
            <React.Fragment key={feature.label}>
              {i > 0 && <span className="w-px self-stretch bg-brand-navy/10 my-1 md:my-0" />}
              <div className="flex-1 flex flex-col items-center text-center min-w-0">
                <div className="flex h-[46px] w-[46px] min-[360px]:h-[52px] min-[360px]:w-[52px] md:h-[72px] md:w-[72px] lg:h-[58px] lg:w-[58px] items-center justify-center rounded-full border border-brand-blue/25 bg-brand-blue/5 shrink-0">
                  <feature.icon className="h-5 w-5 min-[360px]:h-5.5 min-[360px]:w-5.5 md:h-8 md:w-8 lg:h-6 lg:w-6 text-brand-blue" strokeWidth={1.6} />
                </div>
                <span className="mt-2.5 lg:mt-2 whitespace-pre-line text-[12.5px] min-[360px]:text-[13.5px] md:text-[15px] lg:text-[13px] font-semibold leading-tight text-brand-navy break-words w-full">
                  {feature.label}
                </span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Right column - product image bleeding to the edge */}
      <div className="relative h-[260px] min-h-[260px] xs:h-[300px] xs:min-h-[300px] md:h-[450px] md:min-h-[450px] lg:h-full lg:min-h-full lg:max-h-full w-full">
        <img
          src="/images/pharma-hero.png"
          alt="Ayurvedic and pharmaceutical products including a mortar and pestle with herbs, medicine bottles, tablets, and capsules"
          className="h-full w-full object-cover object-[25%_50%] min-[360px]:object-[32%_50%] md:object-center lg:object-[45%_50%]"
        />
        {/* Soft blend into the page background on the top edge (mobile) / left edge (desktop) */}
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[oklch(0.97_0.02_250)] to-transparent lg:inset-y-0 lg:left-0 lg:right-auto lg:h-full lg:w-[85px] lg:bg-gradient-to-r" />
        {/* Soft blend transition into the next section background on the bottom edge (mobile only) */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#f4f8fd] to-transparent lg:hidden" />
      </div>
    </section>
  )
}
