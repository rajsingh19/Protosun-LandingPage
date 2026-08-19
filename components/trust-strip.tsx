import { ShieldCheck, Heart, Award } from "lucide-react"

export function TrustStrip() {
  return (
    <div className="flex flex-col md:flex-row items-stretch justify-between w-full bg-transparent md:bg-white rounded-none md:rounded-[20px] border-0 md:border border-[#D8E4F5]/60 shadow-none md:shadow-[0_8px_30px_rgb(216,228,245,0.3)] py-0 md:py-5 lg:py-3.5 px-0 md:px-8 lg:px-8 gap-5 md:gap-4">
      {/* Column 1 */}
      <div className="flex flex-1 items-center gap-4 lg:gap-3">
        <div className="flex h-11 w-11 md:h-12 md:w-12 lg:h-10 lg:w-10 shrink-0 items-center justify-center rounded-full bg-[#EEF5FF]">
          <ShieldCheck className="h-5.5 w-5.5 md:h-6 md:w-6 lg:h-5 lg:w-5 text-[#3048FF]" strokeWidth={1.8} />
        </div>
        <p className="text-[14px] xs:text-[15px] md:text-sm lg:text-[13px] font-semibold text-[#09094D] leading-snug lg:leading-tight">
          Committed to <br className="hidden md:inline" /> your health and <br className="hidden md:inline" /> well-being.
        </p>
      </div>

      {/* Divider 1 */}
      <div className="h-px md:h-auto w-full md:w-px bg-[#D8E4F5]/40 md:bg-[#D8E4F5]" />

      {/* Column 2 */}
      <div className="flex flex-1 items-center gap-4 lg:gap-3 md:pl-4 lg:pl-2">
        <div className="flex h-11 w-11 md:h-12 md:w-12 lg:h-10 lg:w-10 shrink-0 items-center justify-center rounded-full bg-[#EEF5FF]">
          <Heart className="h-5.5 w-5.5 md:h-6 md:w-6 lg:h-5 lg:w-5 text-[#3048FF]" strokeWidth={1.8} />
        </div>
        <p className="text-[14px] xs:text-[15px] md:text-sm lg:text-[13px] font-semibold text-[#09094D] leading-snug lg:leading-tight">
          Quality. Safety. <br className="hidden md:inline" /> Trust. Always.
        </p>
      </div>

      {/* Divider 2 */}
      <div className="h-px md:h-auto w-full md:w-px bg-[#D8E4F5]/40 md:bg-[#D8E4F5]" />

      {/* Column 3 */}
      <div className="flex flex-1 items-center gap-4 lg:gap-3 md:pl-4 lg:pl-2">
        <div className="flex h-11 w-11 md:h-12 md:w-12 lg:h-10 lg:w-10 shrink-0 items-center justify-center rounded-full bg-[#EEF5FF]">
          <Award className="h-5.5 w-5.5 md:h-6 md:w-6 lg:h-5 lg:w-5 text-[#3048FF]" strokeWidth={1.8} />
        </div>
        <p className="text-[14px] xs:text-[15px] md:text-sm lg:text-[13px] font-semibold text-[#09094D] leading-snug lg:leading-tight">
          Better Healthcare <br className="hidden md:inline" /> for a Better Tomorrow.
        </p>
      </div>
    </div>
  )
}
