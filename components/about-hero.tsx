import { Building2, CalendarDays } from "lucide-react"

export function AboutHero() {
  return (
    <div className="relative w-full overflow-hidden pt-[32px] md:pt-16 lg:pt-20 pb-[32px] md:pb-16 lg:pb-20">
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
      <div className="mx-auto max-w-[1250px] w-full px-5 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center">
          {/* Spacer for background image on desktop */}
          <div className="hidden lg:block h-[400px]" />

          {/* Right Column: About Us Content */}
          <div className="flex flex-col max-w-[560px]">
            {/* Badge */}
            <span className="inline-flex w-fit items-center rounded-full bg-[#0863e8]/8 px-4 py-1.5 text-[12.5px] font-bold tracking-[0.12em] text-[#09094D] md:px-5 md:py-2 md:text-sm md:tracking-[0.15em]">
              WHO WE ARE
            </span>

            {/* Heading */}
            <h2 className="mt-[16px] text-[42px] min-[390px]:text-[46px] md:text-[56px] lg:text-[60px] font-extrabold leading-none tracking-tight text-[#09094D]">
              About <span className="bg-gradient-to-r from-[#0863e8] to-[#2576eb] bg-clip-text text-transparent">Us</span>
            </h2>

            {/* Divider with dot */}
            <div className="mt-4.5 md:mt-5 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#0863e8] shrink-0" />
              <span className="h-[1.5px] md:h-[2px] w-[40%] xs:w-[50%] max-w-[150px] min-[360px]:max-w-[180px] md:w-[180px] md:max-w-none bg-gradient-to-r from-[#0863e8] to-transparent rounded-full" />
            </div>

            {/* Description */}
            <p className="mt-[26px] md:mt-7 text-base md:text-[18px] leading-[1.6] md:leading-[1.6] text-[#09094D]/85 font-medium">
              <span className="font-extrabold text-[#0863e8]">Protosun Healthcare LLP</span> is a dynamic
              pharmaceutical company dedicated to delivering effective, safe, and high-quality healthcare
              solutions.
            </p>

            {/* Info blocks */}
            <div className="mt-8 flex flex-col gap-[18px] sm:flex-row sm:items-center sm:gap-8 md:gap-10">
              <InfoBlock icon={CalendarDays} label="Incorporated on:" value="09/10/2024" />
              <span className="hidden sm:block h-12 w-px bg-[#09094D]/15" />
              <InfoBlock icon={Building2} label="Industry:" value="Pharmaceutical" />
            </div>
          </div>

          {/* Left Column: Image on Mobile/Tablet */}
          <div className="lg:hidden w-full h-[220px] xs:h-[260px] sm:h-[360px] overflow-hidden rounded-[20px] border border-[#0863e8]/10 shadow-[0_2px_12px_rgba(9,9,77,0.015)] mt-8 mb-0 about-image-container">
            <style>{`
              @media (max-width: 767px) {
                .about-image-container {
                  border: none !important;
                  box-shadow: none !important;
                  background: transparent !important;
                }
                .about-image-fade {
                  mask-image: radial-gradient(ellipse at center, black 45%, rgba(0, 0, 0, 0.3) 80%, transparent 100%);
                  -webkit-mask-image: radial-gradient(ellipse at center, black 45%, rgba(0, 0, 0, 0.3) 80%, transparent 100%);
                  opacity: 0.95;
                }
              }
            `}</style>
            <img
              src="/images/about-lab.png"
              alt="Pharmaceutical and Ayurvedic laboratory setup"
              className="h-full w-full object-cover object-center about-image-fade"
            />
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
    <div className="flex items-start gap-4">
      <div className="flex h-11 w-11 md:h-[50px] md:w-[50px] shrink-0 items-center justify-center rounded-full bg-[#0863e8]/8 mt-0.5">
        <Icon className="h-5 w-5 md:h-5.5 md:w-5.5 text-[#0863e8]" strokeWidth={1.8} />
      </div>
      <div className="flex flex-col">
        <span className="text-[13px] md:text-[14px] font-semibold text-[#09094D]/70">{label}</span>
        <span className="text-[16px] md:text-[17px] font-bold text-[#0863e8] mt-1 leading-tight">{value}</span>
      </div>
    </div>
  )
}

