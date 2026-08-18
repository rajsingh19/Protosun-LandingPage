import { Building2, CalendarDays } from "lucide-react"

export function AboutHero() {
  return (
    <section className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-[50%_50%] lg:gap-0">
      {/* Left column - lab image bleeding to the edge */}
      <div className="relative order-1 h-[300px] w-full sm:h-[380px] lg:h-[440px]">
        <img
          src="/images/about-lab.png"
          alt="Pharmaceutical and Ayurvedic laboratory setup with a mortar and pestle full of green leaves, glass flasks with blue liquid, a petri dish, and a blister pack of tablets"
          className="h-full w-full object-cover object-center"
        />
        {/* Soft blend into the page background on the right edge */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[oklch(0.98_0.01_250)] to-transparent lg:w-32" />
      </div>

      {/* Right column - content */}
      <div className="order-2 w-full max-w-[620px] px-6 py-2 md:px-12 lg:px-16 lg:py-2">
        {/* Badge */}
        <span className="inline-flex items-center rounded-full bg-brand-blue/10 px-5 py-2 text-sm font-semibold tracking-[0.15em] text-brand-navy">
          WHO WE ARE
        </span>

        {/* Heading */}
        <h1 className="mt-3 whitespace-nowrap text-6xl font-extrabold leading-[1.05] tracking-tight text-brand-navy md:text-7xl lg:text-[78px]">
          About <span className="text-brand-blue">Us</span>
        </h1>

        {/* Divider with dot */}
        <div className="mt-4 flex items-center">
          <span className="h-3.5 w-3.5 rounded-full bg-brand-blue" />
          <span className="h-px w-[300px] max-w-full bg-gradient-to-r from-brand-blue/70 to-transparent" />
        </div>

        {/* Description */}
        <p className="mt-5 max-w-[560px] text-xl leading-[1.55] text-brand-navy/85 lg:text-[21px]">
          <span className="font-bold text-brand-blue">Protosun Healthcare LLP</span> is a dynamic
          pharmaceutical company dedicated to delivering effective, safe, and high-quality healthcare
          solutions.
        </p>

        {/* Info blocks */}
        <div className="mt-6 flex items-center gap-8 md:gap-12">
          <InfoBlock icon={CalendarDays} label="Incorporated on:" value="09/10/2024" />
          <span className="h-16 w-px self-stretch bg-brand-navy/15" />
          <InfoBlock icon={Building2} label="Industry:" value="Pharmaceutical" />
        </div>
      </div>
    </section>
  )
}

function InfoBlock({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof CalendarDays
  label: string
  value: string
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-blue/10">
        <Icon className="h-7 w-7 text-brand-blue" strokeWidth={1.8} />
      </div>
      <div>
        <p className="text-base font-medium text-brand-navy">{label}</p>
        <p className="text-lg font-bold text-brand-blue">{value}</p>
      </div>
    </div>
  )
}
