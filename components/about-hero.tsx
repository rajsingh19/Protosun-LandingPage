import { Building2, CalendarDays } from "lucide-react"

export function AboutHero() {
  return (
    <div className="relative w-full overflow-hidden pt-16 lg:pt-20 pb-6 md:pb-7 lg:pb-8">
      {/* Full-bleed background image on the left (Desktop) */}
      <div className="absolute inset-y-0 left-0 hidden w-1/2 overflow-hidden lg:block">
        <img
          src="/images/about-lab.png"
          alt="Pharmaceutical and Ayurvedic laboratory setup"
          className="h-full w-full object-cover object-center"
        />
        {/* Soft blend transition on the right edge (100px wide) */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[100px] bg-gradient-to-r from-transparent to-[#f4f8fd]" />
      </div>

      {/* Centered content wrapper */}
      <div className="mx-auto max-w-[1250px] w-full px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column: Image on Mobile/Tablet, Empty Spacer on Desktop */}
          <div className="lg:hidden w-full h-[280px] sm:h-[360px] overflow-hidden rounded-2xl border border-[#0863e8]/10 shadow-[0_2px_12px_rgba(9,9,77,0.015)]">
            <img
              src="/images/about-lab.png"
              alt="Pharmaceutical and Ayurvedic laboratory setup"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:block h-[400px]" /> {/* Spacer for background image */}

          {/* Right Column: About Us Content */}
          <div className="flex flex-col max-w-[560px]">
            {/* Badge */}
            <span className="inline-flex w-fit items-center rounded-full bg-[#0863e8]/8 px-5 py-2 text-sm font-bold tracking-[0.15em] text-[#09094D]">
              WHO WE ARE
            </span>

            {/* Heading */}
            <h2 className="mt-4 text-5xl font-extrabold leading-none tracking-tight text-[#09094D] md:text-[56px] lg:text-[60px]">
              About <span className="bg-gradient-to-r from-[#0863e8] to-[#2576eb] bg-clip-text text-transparent">Us</span>
            </h2>

            {/* Divider with dot */}
            <div className="mt-5 flex items-center gap-0">
              <span className="h-2.5 w-2.5 rounded-full bg-[#0863e8] shrink-0" />
              <span className="h-[2px] w-[180px] bg-gradient-to-r from-[#0863e8] to-transparent rounded-full" />
            </div>

            {/* Description */}
            <p className="mt-7 text-[18px] leading-[1.6] text-[#09094D]/85 font-medium">
              <span className="font-extrabold text-[#0863e8]">Protosun Healthcare LLP</span> is a dynamic
              pharmaceutical company dedicated to delivering effective, safe, and high-quality healthcare
              solutions.
            </p>

            {/* Info blocks */}
            <div className="mt-9 flex flex-wrap items-center gap-8 md:gap-10">
              <InfoBlock icon={CalendarDays} label="Incorporated on:" value="09/10/2024" />
              <span className="hidden sm:block h-12 w-px bg-[#09094D]/15" />
              <InfoBlock icon={Building2} label="Industry:" value="Pharmaceutical" />
            </div>
          </div>
        </div>
      </div>
    </div>
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
      <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-[#0863e8]/8">
        <Icon className="h-5.5 w-5.5 text-[#0863e8]" strokeWidth={1.8} />
      </div>
      <div>
        <p className="text-[14px] font-semibold text-[#09094D]/70">{label}</p>
        <p className="text-[17px] font-bold text-[#0863e8] mt-0.5">{value}</p>
      </div>
    </div>
  )
}
