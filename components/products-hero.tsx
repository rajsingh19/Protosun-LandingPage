import React from "react"

export function ProductsHero() {
  return (
    <div className="relative z-10 pt-2 pb-8 lg:pb-12">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[60%_40%] lg:gap-4">
        {/* Left Column: Text Content */}
        <div className="relative z-20 max-w-2xl">
          <h2 className="text-[52px] font-extrabold leading-none tracking-tight text-brand-navy md:text-[56px] lg:text-[60px]">
            Our <span className="bg-gradient-to-r from-[#0863e8] to-[#2576eb] bg-clip-text text-transparent">Products</span>
          </h2>

          <div className="mt-5 flex items-center gap-0">
            <span className="h-2.5 w-2.5 rounded-full bg-[#0863e8] shrink-0" />
            <span className="h-[2px] w-[180px] rounded-full bg-gradient-to-r from-[#0863e8] to-transparent" />
          </div>

          <p className="mt-6 max-w-[480px] text-[17px] leading-[1.6] text-brand-navy/90 font-medium">
            At Protosun Healthcare, we are committed to delivering high-quality pharmaceutical and
            Ayurvedic solutions that promote health, healing, and well-being.
          </p>
        </div>

        {/* Right Column: Floating illustration */}
        <div className="pointer-events-none relative hidden min-h-[340px] justify-end overflow-visible lg:flex">
          <div className="absolute inset-0 z-0 overflow-visible">
            <div className="absolute left-[-4%] top-[18%] h-[72%] w-[86%] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,194,255,0.30),rgba(168,194,255,0.12)_30%,rgba(168,194,255,0.05)_54%,transparent_76%)] blur-3xl" />
            <div className="absolute left-[8%] top-[12%] h-[64%] w-[12%] rounded-full bg-[linear-gradient(180deg,rgba(194,213,255,0.20),rgba(194,213,255,0.08),transparent)] blur-2xl" />
            <div className="absolute left-[22%] top-[14%] h-[58%] w-[10%] rounded-full bg-[linear-gradient(180deg,rgba(194,213,255,0.16),rgba(194,213,255,0.06),transparent)] blur-2xl" />
            <div className="absolute left-[36%] top-[16%] h-[64%] w-[11%] rounded-full bg-[linear-gradient(180deg,rgba(194,213,255,0.14),rgba(194,213,255,0.04),transparent)] blur-3xl" />

            <svg
              aria-hidden="true"
              viewBox="0 0 920 560"
              className="absolute left-[-18%] top-[-6%] h-[128%] w-[148%] overflow-visible"
              fill="none"
            >
              <defs>
                <filter id="products-bg-soft-blur" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="1.35" />
                </filter>
              </defs>

              <g filter="url(#products-bg-soft-blur)" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path
                  d="M-20 110 C120 42, 246 116, 360 176 S616 296, 888 220"
                  stroke="#A8C2FF"
                  strokeOpacity="0.4"
                  strokeWidth="2.5"
                />
                <path
                  d="M-14 138 C126 84, 254 150, 368 210 S626 322, 898 250"
                  stroke="#C2D5FF"
                  strokeOpacity="0.28"
                  strokeWidth="2"
                />
                <path
                  d="M-10 168 C130 118, 260 186, 378 240 S642 352, 904 286"
                  stroke="#A8C2FF"
                  strokeOpacity="0.34"
                  strokeWidth="2.1"
                />
                <path
                  d="M10 198 C146 150, 284 222, 418 276 S688 392, 910 326"
                  stroke="#C2D5FF"
                  strokeOpacity="0.24"
                  strokeWidth="1.8"
                />
                <path
                  d="M30 238 C172 198, 306 252, 448 312 S716 426, 914 382"
                  stroke="#A8C2FF"
                  strokeOpacity="0.3"
                  strokeWidth="1.9"
                />
                <path
                  d="M78 286 C218 246, 340 292, 474 340 S724 438, 906 408"
                  stroke="#C2D5FF"
                  strokeOpacity="0.22"
                  strokeWidth="1.7"
                />
                <path
                  d="M84 88 C146 116, 214 170, 274 226 S424 350, 582 380"
                  stroke="#C2D5FF"
                  strokeOpacity="0.18"
                  strokeWidth="1.4"
                />

                <path
                  d="M98 128 C128 110, 156 114, 176 140"
                  stroke="#9DBBFF"
                  strokeOpacity="0.3"
                  strokeWidth="1.5"
                />
                <path
                  d="M140 154 C170 138, 198 144, 216 168"
                  stroke="#9DBBFF"
                  strokeOpacity="0.28"
                  strokeWidth="1.4"
                />
                <path
                  d="M198 184 C224 170, 248 174, 266 196"
                  stroke="#9DBBFF"
                  strokeOpacity="0.26"
                  strokeWidth="1.3"
                />
                <path
                  d="M414 282 C440 266, 468 270, 486 294"
                  stroke="#9DBBFF"
                  strokeOpacity="0.26"
                  strokeWidth="1.3"
                />
                <path
                  d="M508 314 C534 298, 562 302, 580 324"
                  stroke="#9DBBFF"
                  strokeOpacity="0.26"
                  strokeWidth="1.3"
                />

                {[
                  [108, 126],
                  [160, 148],
                  [214, 180],
                  [288, 220],
                  [364, 260],
                  [448, 286],
                  [538, 312],
                  [624, 338],
                  [706, 336],
                  [778, 306],
                ].map(([cx, cy]) => (
                  <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.7" fill="#9DBBFF" fillOpacity="0.3" />
                ))}

                {[
                  [250, 212],
                  [330, 248],
                  [432, 280],
                  [610, 328],
                ].map(([cx, cy]) => (
                  <g key={`${cx}-${cy}`} transform={`translate(${cx} ${cy})`}>
                    <path d="M0 -6.8 L1.9 -1.9 L6.8 0 L1.9 1.9 L0 6.8 L-1.9 1.9 L-6.8 0 L-1.9 -1.9 Z" fill="#C2D5FF" fillOpacity="0.3" />
                  </g>
                ))}
              </g>
            </svg>
          </div>

          <div className="absolute right-0 top-1/2 h-[clamp(320px,34vw,500px)] w-[min(42vw,520px)] -translate-y-1/2">
            <img
              src="/images/products-decoration-transparent.png"
              alt="Ayurvedic mortar and pestle pot drawing"
              className="relative z-10 h-full w-full select-none object-contain opacity-100"
              style={{
                filter: "saturate(1.18) contrast(1.14) brightness(1.01)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
