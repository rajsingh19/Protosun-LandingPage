import { Mail, Phone } from "lucide-react"

interface ContactInfoCardProps {
  type: "email" | "phone"
  title: string
  value: string
}

export function ContactInfoCard({ type, title, value }: ContactInfoCardProps) {
  const Icon = type === "email" ? Mail : Phone
  const href = type === "email" ? `mailto:${value}` : `tel:${value.replace(/\s+/g, "")}`

  return (
    <a
      href={href}
      className="group flex h-[72px] md:h-[80px] w-full max-w-[390px] items-center rounded-xl border border-[#D8E4F5]/30 bg-[#EEF5FF]/15 md:bg-white p-3 md:p-4.5 lg:p-3.5 shadow-none md:shadow-[0_8px_30px_rgba(216,228,245,0.4)] transition-all duration-300 ease-out active:scale-[0.98] md:active:scale-100 md:hover:-translate-y-1 md:hover:border-[#0863e8]/25 md:hover:shadow-[0_12px_36px_rgba(216,228,245,0.75)] cursor-pointer"
    >
      {/* Icon Circle Container */}
      <div className="flex h-11 w-11 md:h-14 md:w-14 lg:h-11 lg:w-11 shrink-0 items-center justify-center rounded-full bg-[#0863e8]/8 transition-transform duration-300 ease-out group-hover:scale-[1.06]">
        <Icon className="h-5.5 w-5.5 md:h-6 md:w-6 lg:h-5 lg:w-5 text-[#0863e8]" strokeWidth={1.8} />
      </div>

      {/* Details Column */}
      <div className="ml-4 md:ml-5 lg:ml-4 flex flex-col justify-center min-w-0 flex-1">
        <span className="text-[13.5px] xs:text-[14px] md:text-sm lg:text-xs font-bold leading-none text-[#09094D]/60 uppercase tracking-wider">
          {title}
        </span>
        <span className="mt-1.5 md:mt-2 lg:mt-1 text-[15.5px] xs:text-[16px] md:text-[16px] lg:text-[14px] font-extrabold text-[#09094D] tracking-wide transition-colors duration-300 group-hover:text-[#0863e8] break-words leading-tight">
          {value}
        </span>
      </div>
    </a>
  )
}
