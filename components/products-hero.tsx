export function ProductsHero() {
  return (
    <section className="relative z-10 px-6 pt-2 md:px-12 lg:px-20">
      <div className="max-w-2xl">
        {/* Heading */}
        <h1 className="text-5xl font-extrabold leading-none tracking-tight text-brand-navy md:text-6xl lg:text-[64px]">
          Our <span className="text-brand-blue">Products</span>
        </h1>

        {/* Divider with dot */}
        <div className="mt-4 flex items-center">
          <span className="h-3 w-3 rounded-full bg-brand-blue" />
          <span className="h-px w-[300px] max-w-full bg-gradient-to-r from-brand-blue/70 to-transparent" />
        </div>

        {/* Intro text */}
        <p className="mt-5 max-w-[520px] text-base leading-[1.55] text-brand-navy/85 lg:text-lg">
          At Protosun Healthcare, we are committed to delivering high-quality pharmaceutical and
          Ayurvedic solutions that promote health, healing, and well-being.
        </p>
      </div>
    </section>
  )
}
