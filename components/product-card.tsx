import { Leaf } from "lucide-react"
import { BadgePlus } from "@/components/custom-icons"
import React from "react"

export type ProductVariant = "blue" | "green"

export interface Product {
  title: string
  description: string
  icon: React.ComponentType<any>
  variant: ProductVariant
}

function splitTitle(title: string) {
  const suffixes = ["Tablets", "Suspension", "Dry Syrup", "Syrup", "Capsules"]
  for (const suffix of suffixes) {
    if (title.endsWith(suffix)) {
      const main = title.slice(0, -suffix.length).trim()
      return { main, suffix }
    }
  }
  const lastSpaceIndex = title.lastIndexOf(" ")
  if (lastSpaceIndex !== -1) {
    return {
      main: title.substring(0, lastSpaceIndex).trim(),
      suffix: title.substring(lastSpaceIndex + 1).trim()
    }
  }
  return { main: title, suffix: "" }
}

export function ProductCard({ title, description, icon: Icon, variant }: Product) {
  const isBlue = variant === "blue"
  const { main, suffix } = splitTitle(title)

  return (
    <div className="hover-card w-full relative h-full">
      <style>{`
        @keyframes sweep {
          0% { transform: translateX(-150%) skewX(-20deg); opacity: 0; }
          15% { opacity: 0.35; }
          85% { opacity: 0.35; }
          100% { transform: translateX(450%) skewX(-20deg); opacity: 0; }
        }
        @media (prefers-reduced-motion: no-preference) {
          .hover-card:hover article {
            transform: translateY(-4px);
            box-shadow: 0 12px 28px rgba(9, 9, 77, 0.04), 0 8px 10px rgba(9, 9, 77, 0.02) !important;
            border-color: ${isBlue ? "rgba(8, 99, 232, 0.25) !important" : "rgba(20, 185, 129, 0.30) !important"};
          }
          .hover-card:hover .sweep-overlay {
            animation: sweep 800ms ease-in-out forwards;
          }
          .hover-card:hover .sweep-icon {
            transform: scale(1.05);
          }
          .hover-card:hover .sweep-badge {
            transform: scale(1.08);
          }
          .hover-card:hover .sweep-title {
            opacity: 1;
            filter: brightness(1.15) saturate(1.05);
          }
        }
      `}</style>

      <article
        className={`relative flex h-full flex-col overflow-hidden rounded-[20px] md:rounded-2xl border bg-white transition-all duration-[275ms] ease-out shadow-[0_2px_8px_rgba(9,9,77,0.02)] group ${
          isBlue ? "border-[#0863e8]/10" : "border-brand-green/15"
        }`}
      >
        {/* Light Sweep Overlay (Mobile/Desktop on hover) */}
        <div className="absolute inset-y-0 w-[30%] pointer-events-none z-20 bg-gradient-to-r from-transparent via-[#eef5ff]/35 to-transparent transform -translate-x-[150%] -skew-x-[20deg] sweep-overlay" />

        <div className="relative z-10 flex flex-1 flex-col p-5 xs:p-6 pb-0 md:p-6 md:pb-2">
          {/* Icon + title row */}
          <div className="flex items-center gap-3.5 xs:gap-4">
            <div
              className={`flex h-12 w-12 xs:h-14 xs:w-14 shrink-0 items-center justify-center rounded-full transition-transform duration-[250ms] ease-out sweep-icon ${
                isBlue ? "bg-[#0863e8]/10" : "bg-brand-green/10"
              }`}
            >
              <Icon
                className={`h-6 w-6 xs:h-7 xs:w-7 transition-colors duration-300 ${isBlue ? "text-[#0863e8]" : "text-brand-green"}`}
                strokeWidth={1.7}
              />
            </div>
            <div className="flex flex-col justify-center min-h-[48px] xs:min-h-[56px]">
              <h3
                className={`text-[17.5px] xs:text-[19px] font-extrabold leading-tight tracking-tight transition-all duration-[250ms] ease-out sweep-title ${
                  isBlue ? "text-[#0863e8]" : "text-brand-green"
                }`}
              >
                {main}
              </h3>
              {suffix && (
                <span className="text-[13.5px] xs:text-[14.5px] font-semibold tracking-tight leading-tight text-brand-navy/90 mt-0.5">
                  {suffix}
                </span>
              )}
            </div>
          </div>

          {/* Decorative underline */}
          <span
            className={`mt-2.5 xs:mt-3 md:mt-3.5 block h-[1.5px] w-8 rounded-full ${
              isBlue ? "bg-[#0863e8]/40" : "bg-brand-green/45"
            }`}
          />

          {/* Description (full width) */}
          <p className="mt-2.5 xs:mt-3 md:mt-3.5 text-[14px] xs:text-[15px] leading-[1.55] text-brand-navy/80 font-medium">{description}</p>
        </div>

        {/* Spacer to align wave to bottom */}
        <div className="flex-grow min-h-[6px] md:min-h-[16px]" />

        {/* Curved wave bottom section */}
        <div className="pointer-events-none relative h-9 xs:h-10 md:h-12">
          <svg
            aria-hidden="true"
            viewBox="0 0 400 90"
            preserveAspectRatio="none"
            className={`absolute inset-0 h-full w-full ${isBlue ? "text-[#0863e8]/10" : "text-brand-green/10"}`}
          >
            <path d="M0,42 C110,6 250,72 400,26 L400,90 L0,90 Z" fill="currentColor" />
          </svg>
          {/* Corner badge icon */}
          <div className="absolute bottom-2 right-3.5 xs:bottom-2.5 xs:right-4 md:bottom-3 md:right-4.5 z-10">
            {isBlue ? (
              <span className="flex h-9 w-9 md:h-[26px] md:w-[26px] items-center justify-center rounded-full bg-[#0863e8] text-white shadow-sm shadow-[#0863e8]/30 transition-transform duration-[250ms] ease-out sweep-badge">
                <BadgePlus className="h-4.5 w-4.5 md:h-3.5 md:w-3.5" strokeWidth={2.5} />
              </span>
            ) : (
              <span className="flex h-9 w-9 md:h-[26px] md:w-[26px] items-center justify-center rounded-full bg-brand-green text-white shadow-sm shadow-brand-green/30 transition-transform duration-[250ms] ease-out sweep-badge">
                <Leaf className="h-4.5 w-4.5 md:h-3.5 md:w-3.5" strokeWidth={2.2} />
              </span>
            )}
          </div>
        </div>
      </article>
    </div>
  )
}
