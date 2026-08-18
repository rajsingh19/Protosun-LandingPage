import React from "react"

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string
  strokeWidth?: number
}

// 1. Blister Pack Icon (Jollydol-P Tablets)
export const BlisterPack = ({ className, strokeWidth = 2, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <rect x="5" y="3" width="14" height="18" rx="3" transform="rotate(-15 12 12)" />
    <line x1="12" y1="3" x2="12" y2="21" transform="rotate(-15 12 12)" />
    <circle cx="8.5" cy="7" r="1" transform="rotate(-15 12 12)" />
    <circle cx="15.5" cy="7" r="1" transform="rotate(-15 12 12)" />
    <circle cx="8.5" cy="12" r="1" transform="rotate(-15 12 12)" />
    <circle cx="15.5" cy="12" r="1" transform="rotate(-15 12 12)" />
    <circle cx="8.5" cy="17" r="1" transform="rotate(-15 12 12)" />
    <circle cx="15.5" cy="17" r="1" transform="rotate(-15 12 12)" />
  </svg>
)

// 2. Medicine Bottle + Spoon Icon (Jollydol-MP Suspension)
export const BottleSpoon = ({ className, strokeWidth = 2, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    {/* Bottle */}
    <rect x="4" y="9" width="8" height="11" rx="1.5" />
    <path d="M6 9V6h4v3" />
    <line x1="5" y1="6" x2="11" y2="6" />
    <line x1="4" y1="13" x2="12" y2="13" />
    <circle cx="8" cy="16" r="1.5" />
    {/* Spoon */}
    <path d="M15 16.5c0 1.5 1 2.5 2.5 2.5s2.5-1 2.5-2.5v-3.5h-5z" />
    <path d="M17.5 13V5c0-.8.5-1 .5-1" />
  </svg>
)

// 3. Medicine Bottle + Cup Icon (Jollypod-50 Dry Syrup)
export const BottleCup = ({ className, strokeWidth = 2, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    {/* Bottle */}
    <rect x="4" y="9" width="8" height="11" rx="1.5" />
    <path d="M6 9V6h4v3" />
    <line x1="5" y1="6" x2="11" y2="6" />
    <line x1="6.5" y1="12.5" x2="9.5" y2="12.5" />
    <line x1="8" y1="11" x2="8" y2="14" />
    {/* Cup */}
    <path d="M15 13.5h6l-0.8 4.5c-0.1 0.8-0.8 1.5-1.7 1.5h-1c-0.9 0-1.6-0.7-1.7-1.5z" />
    <line x1="15.2" y1="16" x2="20.8" y2="16" />
  </svg>
)

// 4. Liver Icon (Sunproliv Syrup)
export const Liver = ({ className, strokeWidth, ...props }: IconProps) => (
  <img
    src="/images/sunproliv-icon.png"
    alt="Liver"
    className={`${className} object-contain`}
    {...props}
  />
)

// 5. Shield + Leaf Icon (Sunproliv-ST Syrup)
export const ShieldLeaf = ({ className, strokeWidth, ...props }: IconProps) => (
  <img
    src="/images/sunproliv-st-icon.png"
    alt="Shield Leaf"
    className={`${className} object-contain`}
    {...props}
  />
)

// 6. Kidney Icon (Protopilesgo Capsules)
export const Kidney = ({ className, strokeWidth, ...props }: IconProps) => (
  <img
    src="/images/protopilesgo-icon.png"
    alt="Colon"
    className={`${className} object-contain`}
    {...props}
  />
)

// 8. Stomach / Digestive Icon (Protohazma Syrup)
export const Stomach = ({ className, strokeWidth, ...props }: IconProps) => (
  <img
    src="/images/protohazma-icon.png"
    alt="Stomach"
    className={`${className} object-contain`}
    {...props}
  />
)

// 7. Lungs Icon (Protocough Syrup)
export const Lungs = ({ className, strokeWidth, ...props }: IconProps) => (
  <img
    src="/images/protocough-icon.png"
    alt="Lungs"
    className={`${className} object-contain`}
    {...props}
  />
)

// 8. Protohazma Syrup Icon
export const ProtohazmaIcon = ({ className, strokeWidth = 2, ...props }: IconProps) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <circle cx="32" cy="32" r="26" fill="none" />
    <path d="M22 23c0-5.5 5.7-8.9 12-8.9 6.8 0 12.5 3.8 12.5 10.5 0 5.4-3.3 8.4-7.9 10.2-4.6 1.7-7.9 4.8-7.9 10.5 0 5.8 5.1 9.7 12.1 9.7" />
    <path d="M42 23c0 4-3.5 7.3-8.1 8.5-4.4 1.1-7.9 4.5-7.9 9.1" />
    <path d="M20 24c2.5 1.7 4.4 2.4 6.7 2.4" />
    <path d="M41 39c-2.7 1.5-5.1 2.2-7.8 2.2" />
    <path d="M28 46c1.9 1.6 4.4 2.4 7 2.4" />
  </svg>
)
