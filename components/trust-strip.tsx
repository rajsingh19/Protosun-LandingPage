import { ShieldCheck, Heart, Award } from "lucide-react"

export function TrustStrip() {
  return (
    <div className="flex flex-col md:flex-row items-stretch justify-between w-full bg-white rounded-[20px] border border-[#D8E4F5]/60 shadow-[0_8px_30px_rgb(216,228,245,0.3)] py-5 lg:py-3.5 px-6 md:px-8 lg:px-8 gap-6 md:gap-4">
      {/* Column 1 */}
      <div className="flex flex-1 items-center gap-4 lg:gap-3">
        <div className="flex h-12 w-12 lg:h-10 lg:w-10 shrink-0 items-center justify-center rounded-full bg-[#EEF5FF]">
          <ShieldCheck className="h-6 w-6 lg:h-5 lg:w-5 text-[#3048FF]" strokeWidth={1.8} />
        </div>
        <p className="text-sm lg:text-[13px] font-semibold text-[#09094D] leading-snug lg:leading-tight">
          Committed to<br />
          your health and<br />
          well-being.
        </p>
      </div>

      {/* Divider 1 */}
      <div className="hidden md:block w-px bg-[#D8E4F5]" />

      {/* Column 2 */}
      <div className="flex flex-1 items-center gap-4 lg:gap-3 md:pl-4 lg:pl-2">
        <div className="flex h-12 w-12 lg:h-10 lg:w-10 shrink-0 items-center justify-center rounded-full bg-[#EEF5FF]">
          <Heart className="h-6 w-6 lg:h-5 lg:w-5 text-[#3048FF]" strokeWidth={1.8} />
        </div>
        <p className="text-sm lg:text-[13px] font-semibold text-[#09094D] leading-snug lg:leading-tight">
          Quality. Safety.<br />
          Trust. Always.
        </p>
      </div>

      {/* Divider 2 */}
      <div className="hidden md:block w-px bg-[#D8E4F5]" />

      {/* Column 3 */}
      <div className="flex flex-1 items-center gap-4 lg:gap-3 md:pl-4 lg:pl-2">
        <div className="flex h-12 w-12 lg:h-10 lg:w-10 shrink-0 items-center justify-center rounded-full bg-[#EEF5FF]">
          <Award className="h-6 w-6 lg:h-5 lg:w-5 text-[#3048FF]" strokeWidth={1.8} />
        </div>
        <p className="text-sm lg:text-[13px] font-semibold text-[#09094D] leading-snug lg:leading-tight">
          Better Healthcare<br />
          for a Better Tomorrow.
        </p>
      </div>
    </div>
  )
}
