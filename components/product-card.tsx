import { Leaf, Plus } from "lucide-react"
import React from "react"

export type ProductVariant = "blue" | "green"

export interface Product {
  title: string
  description: string
  icon: React.ComponentType<any>
  variant: ProductVariant
}

export function ProductCard({ title, description, icon: Icon, variant }: Product) {
  const isBlue = variant === "blue"

  return (
    <article
      className={`relative flex min-h-[300px] flex-col overflow-hidden rounded-2xl border bg-[oklch(1_0_0)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg group ${
        isBlue
          ? "border-brand-blue/15 hover:border-brand-blue/35 hover:shadow-brand-blue/5"
          : "border-brand-green/20 hover:border-brand-green/45 hover:shadow-brand-green/5"
      }`}
    >
      <div className="relative z-10 flex flex-1 flex-col p-5">
        {/* Icon + title row */}
        <div className="flex items-center gap-4">
          <div
            className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ease-out group-hover:-translate-y-0.5 ${
              isBlue ? "bg-brand-blue/10" : "bg-brand-green/10"
            }`}
          >
            <Icon
              className={`h-8 w-8 transition-colors duration-300 ${isBlue ? "text-brand-blue" : "text-brand-green"}`}
              strokeWidth={1.7}
            />
          </div>
          <h3
            className={`text-xl font-bold leading-tight tracking-tight ${
              isBlue ? "text-brand-blue" : "text-brand-green"
            }`}
          >
            {title}
          </h3>
        </div>

        {/* Decorative underline */}
        <span
          className={`mt-4 block h-0.5 w-10 rounded-full ${
            isBlue ? "bg-brand-blue/70" : "bg-brand-green/70"
          }`}
        />

        {/* Description (full width) */}
        <p className="mt-4 text-[15px] leading-[1.5] text-brand-navy/80">{description}</p>
      </div>

      {/* Curved wave bottom section */}
      <div className="pointer-events-none relative h-14">
        <svg
          aria-hidden="true"
          viewBox="0 0 400 90"
          preserveAspectRatio="none"
          className={`absolute inset-0 h-full w-full ${isBlue ? "text-brand-blue/10" : "text-brand-green/10"}`}
        >
          <path d="M0,42 C110,6 250,72 400,26 L400,90 L0,90 Z" fill="currentColor" />
        </svg>
        {/* Corner badge icon */}
        <div className="absolute bottom-3.5 right-5 z-10">
          {isBlue ? (
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-blue text-[oklch(1_0_0)]">
              <Plus className="h-4 w-4" strokeWidth={2.5} />
            </span>
          ) : (
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-green text-[oklch(1_0_0)]">
              <Leaf className="h-4 w-4" strokeWidth={2.2} />
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
