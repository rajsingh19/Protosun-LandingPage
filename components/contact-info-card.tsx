import { Mail, Phone } from "lucide-react"

interface ContactInfoCardProps {
  type: "email" | "phone"
  title: string
  value: string
}

export function ContactInfoCard({ type, title, value }: ContactInfoCardProps) {
  const Icon = type === "email" ? Mail : Phone
  const displayValue = value

  return (
    <div className="group flex h-[95px] lg:h-[80px] w-full max-w-[390px] items-center rounded-2xl border border-[#D8E4F5]/60 bg-white p-4.5 lg:p-3.5 shadow-[0_8px_30px_rgba(216,228,245,0.4)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#0863e8]/25 hover:shadow-[0_12px_36px_rgba(216,228,245,0.75)]">
      {/* Icon Circle Container */}
      <div className="flex h-14 w-14 lg:h-11 lg:w-11 shrink-0 items-center justify-center rounded-full bg-[#0863e8]/8 transition-transform duration-300 ease-out group-hover:scale-[1.06]">
        <Icon className="h-6 w-6 lg:h-5 lg:w-5 text-[#0863e8]" strokeWidth={1.8} />
      </div>

      {/* Details Column */}
      <div className="ml-5 lg:ml-4 flex flex-col justify-center">
        <h3 className="text-xl lg:text-lg font-bold leading-none text-[#09094D]">
          {title}
        </h3>
        
        {/* Small blue underline below title */}
        <div className="mt-1.5 h-[2px] w-6 bg-[#0863e8] rounded-full transition-all duration-300 group-hover:w-9" />
        
        <span className="mt-1.5 lg:mt-1 text-[15px] lg:text-[14px] font-semibold text-[#09094D]/90 tracking-wide transition-colors duration-300 group-hover:text-[#0863e8]">
          {displayValue}
        </span>
      </div>
    </div>
  )
}
