import React, { useId } from "react"

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string
  strokeWidth?: number
}

// 1. Blister Pack Icon (Jollydol-P Tablets)
export const BlisterPack = ({ className, strokeWidth, ...props }: IconProps) => {
  const { ref, ...imgProps } = props as any
  return (
    <img
      src="/images/jollydol-p-icon.png"
      alt="Jollydol P"
      className={`${className} object-contain`}
      {...imgProps}
    />
  )
}

// 2. Medicine Bottle + Spoon Icon (Jollydol-MP Suspension)
export const BottleSpoon = ({ className, strokeWidth, ...props }: IconProps) => {
  const { ref, ...imgProps } = props as any
  return (
    <img
      src="/images/jollydol-icon.png"
      alt="Jollydol"
      className={`${className} object-contain`}
      {...imgProps}
    />
  )
}

// 3. Medicine Bottle + Cup Icon (Jollypod-50 Dry Syrup)
export const BottleCup = ({ className, strokeWidth, ...props }: IconProps) => {
  const { ref, ...imgProps } = props as any
  return (
    <img
      src="/images/jollypod-icon.png"
      alt="Jollypod"
      className={`${className} object-contain`}
      {...imgProps}
    />
  )
}

// 4. Liver Icon (Sunproliv Syrup)
export const Liver = ({ className, strokeWidth, ...props }: IconProps) => {
  const { ref, ...imgProps } = props as any
  return (
    <img
      src="/images/sunproliv-icon.png"
      alt="Liver"
      className={`${className} object-contain`}
      {...imgProps}
    />
  )
}

// 5. Shield + Leaf Icon (Sunproliv-ST Syrup)
export const ShieldLeaf = ({ className, strokeWidth, ...props }: IconProps) => {
  const { ref, ...imgProps } = props as any
  return (
    <img
      src="/images/sunproliv-st-icon.png"
      alt="Shield Leaf"
      className={`${className} object-contain`}
      {...imgProps}
    />
  )
}

// 6. Kidney Icon (Protopilesgo Capsules)
export const Kidney = ({ className, strokeWidth, ...props }: IconProps) => {
  const { ref, ...imgProps } = props as any
  return (
    <img
      src="/images/protopilesgo-icon.png"
      alt="Colon"
      className={`${className} object-contain`}
      {...imgProps}
    />
  )
}

// 8. Stomach / Digestive Icon (Protohazma Syrup)
export const Stomach = ({ className, strokeWidth, ...props }: IconProps) => {
  const { ref, ...imgProps } = props as any
  return (
    <img
      src="/images/protohazma-icon.png"
      alt="Stomach"
      className={`${className} object-contain`}
      {...imgProps}
    />
  )
}

// 7. Lungs Icon (Protocough Syrup)
export const Lungs = ({ className, strokeWidth, ...props }: IconProps) => {
  const { ref, ...imgProps } = props as any
  return (
    <img
      src="/images/protocough-icon.png"
      alt="Lungs"
      className={`${className} object-contain`}
      {...imgProps}
    />
  )
}

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

// 9. Badge Plus Icon (Hollow Rounded Cross for Product Card Badge)
export const BadgePlus = ({ className, strokeWidth = 2.5, ...props }: IconProps) => (
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
    <path d="M 9 3 H 15 V 9 H 21 V 15 H 15 V 21 H 9 V 15 H 3 V 9 H 9 Z" />
  </svg>
)
