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
    <article
      className={`relative flex h-full flex-col overflow-hidden rounded-2xl border bg-white transition-all duration-300 ease-out hover:-translate-y-1.5 shadow-[0_2px_8px_rgba(9,9,77,0.02)] group ${
        isBlue
          ? "border-[#0863e8]/10 hover:border-[#0863e8]/30 hover:shadow-[0_8px_24px_rgba(8,99,232,0.06)]"
          : "border-brand-green/15 hover:border-brand-green/35 hover:shadow-[0_8px_24px_rgba(20,185,129,0.06)]"
      }`}
    >
      <div className="relative z-10 flex flex-1 flex-col p-6 pb-2">
        {/* Icon + title row */}
        <div className="flex items-center gap-4">
          <div
            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ease-out group-hover:scale-[1.06] ${
              isBlue ? "bg-[#0863e8]/10" : "bg-brand-green/10"
            }`}
          >
            <Icon
              className={`h-7 w-7 transition-colors duration-300 ${isBlue ? "text-[#0863e8]" : "text-brand-green"}`}
              strokeWidth={1.7}
            />
          </div>
          <div className="flex flex-col justify-center min-h-[56px]">
            <h3
              className={`text-[19px] font-extrabold leading-tight tracking-tight ${
                isBlue ? "text-[#0863e8]" : "text-brand-green"
              }`}
            >
              {main}
            </h3>
            {suffix && (
              <span className="text-[14.5px] font-semibold tracking-tight leading-tight text-brand-navy/90 mt-0.5">
                {suffix}
              </span>
            )}
          </div>
        </div>

        {/* Decorative underline */}
        <span
          className={`mt-4 block h-[1.5px] w-8 rounded-full ${
            isBlue ? "bg-[#0863e8]/40" : "bg-brand-green/45"
          }`}
        />

        {/* Description (full width) */}
        <p className="mt-4 text-[15px] leading-[1.55] text-brand-navy/80 font-medium">{description}</p>
      </div>

      {/* Spacer to align wave to bottom */}
      <div className="flex-grow min-h-[16px]" />

      {/* Curved wave bottom section */}
      <div className="pointer-events-none relative h-12">
        <svg
          aria-hidden="true"
          viewBox="0 0 400 90"
          preserveAspectRatio="none"
          className={`absolute inset-0 h-full w-full ${isBlue ? "text-[#0863e8]/10" : "text-brand-green/10"}`}
        >
          <path d="M0,42 C110,6 250,72 400,26 L400,90 L0,90 Z" fill="currentColor" />
        </svg>
        {/* Corner badge icon */}
        <div className="absolute bottom-3 right-4.5 z-10">
          {isBlue ? (
            <span className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[#0863e8] text-white shadow-sm shadow-[#0863e8]/30">
              <BadgePlus className="h-3.5 w-3.5" strokeWidth={2.5} />
            </span>
          ) : (
            <span className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-brand-green text-white shadow-sm shadow-brand-green/30">
              <Leaf className="h-3.5 w-3.5" strokeWidth={2.2} />
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
