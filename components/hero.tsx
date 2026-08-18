import { FlaskConical, Leaf, ShieldCheck } from "lucide-react"

const FEATURES = [
  { icon: ShieldCheck, label: "Trusted\nQuality" },
  { icon: Leaf, label: "Natural\nCare" },
  { icon: FlaskConical, label: "Innovative\nScience" },
]

export function Hero() {
  return (
    <section className="relative z-10 grid flex-1 grid-cols-1 items-center gap-10 lg:grid-cols-[45%_55%] lg:gap-0 lg:h-[calc(100vh-65px)] lg:max-h-[calc(100vh-65px)] lg:overflow-hidden">
      {/* Left column */}
      <div className="w-full max-w-[580px] px-6 pt-4 md:px-12 lg:px-20 lg:pt-0 lg:pb-12">
        <h1 className="font-bold leading-[1.05] tracking-tight text-brand-navy">
          <span className="block text-5xl md:text-6xl lg:text-[46px]">Welcome to</span>
          <span className="mt-1 block text-6xl text-brand-blue md:text-7xl lg:text-[68px] lg:leading-[1.05]">
            Protosun
          </span>
          <span className="block text-6xl md:text-7xl lg:text-[68px] lg:leading-[1.05]">
            Healthcare
          </span>
        </h1>

        {/* Divider with dot */}
        <div className="mt-10 lg:mt-5 flex items-center">
          <span className="h-3.5 w-3.5 rounded-full bg-brand-blue" />
          <span className="h-px w-[320px] max-w-full bg-gradient-to-r from-brand-blue/70 to-transparent" />
        </div>

        <p className="mt-8 lg:mt-4 max-w-[540px] text-xl leading-[1.6] lg:leading-normal text-brand-navy/85 lg:text-[18px]">
          Committed to enhancing lives through high-quality{" "}
          <span className="font-semibold text-brand-blue">pharmaceutical</span> and{" "}
          <span className="font-semibold text-brand-blue">Ayurvedic</span> formulations.
        </p>

        {/* Features */}
        <div className="mt-12 lg:mt-6.5 flex items-stretch gap-6 md:gap-9 lg:gap-6">
          {FEATURES.map((feature, i) => (
            <div key={feature.label} className="flex items-stretch gap-6 md:gap-9 lg:gap-6">
              {i > 0 && <span className="w-px self-stretch bg-brand-navy/15" />}
              <div className="flex flex-col items-center text-center">
                <div className="flex h-[72px] w-[72px] lg:h-[58px] lg:w-[58px] items-center justify-center rounded-full border border-brand-blue/25 bg-brand-blue/5">
                  <feature.icon className="h-8 w-8 lg:h-6 lg:w-6 text-brand-blue" strokeWidth={1.6} />
                </div>
                <span className="mt-3.5 lg:mt-2 whitespace-pre-line text-[15px] lg:text-[13px] font-semibold leading-tight text-brand-navy">
                  {feature.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right column - product image bleeding to the edge */}
      <div className="relative h-full min-h-[420px] w-full lg:min-h-full lg:h-full lg:max-h-full">
        <img
          src="/images/pharma-hero.png"
          alt="Ayurvedic and pharmaceutical products including a mortar and pestle with herbs, medicine bottles, tablets, and capsules"
          className="h-full w-full object-cover object-center lg:object-[45%_50%]"
        />
        {/* Soft blend into the page background on the top edge (mobile) / left edge (desktop) */}
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[oklch(0.97_0.02_250)] to-transparent lg:inset-y-0 lg:left-0 lg:right-auto lg:h-full lg:w-[85px] lg:bg-gradient-to-r" />
      </div>
    </section>
  )
}
