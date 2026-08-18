import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { AboutHero } from "@/components/about-hero"
import { Founders } from "@/components/founders"
import { ProductsHero } from "@/components/products-hero"
import { ProductsGrid } from "@/components/products-grid"
import { ContactInfoCard } from "@/components/contact-info-card"
import { ContactForm } from "@/components/contact-form"
import { TrustStrip } from "@/components/trust-strip"

export default function Page() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-x-hidden pt-[76px] bg-gradient-to-b from-[oklch(0.97_0.02_250)] via-[oklch(0.98_0.01_250)] to-[oklch(0.99_0.005_250)]">
      {/* Sticky Site Navbar */}
      <SiteHeader />

      {/* 1. HOME SECTION */}
      <section id="home" className="relative flex flex-col scroll-mt-[76px]">
        {/* Molecular decoration (top right) */}
        <HomeMoleculeDecoration />
        <Hero />
      </section>

      {/* 2. ABOUT US SECTION */}
      <section id="about" className="relative scroll-mt-[76px] border-t border-[#D8E4F5]/40 bg-[#f4f8fd]">
        {/* Molecular decoration (top center) */}
        <AboutMoleculeDecoration />
        <AboutHero />
        <Founders />
      </section>

      {/* 3. OUR PRODUCTS SECTION */}
      <section
        id="products"
        className="relative scroll-mt-[76px] border-t border-[#D8E4F5]/40 bg-[linear-gradient(180deg,#fbfdff_0%,#f5f9ff_100%)] py-16 lg:py-20"
      >
        <div className="mx-auto max-w-[1250px] w-full px-6 md:px-12 lg:px-16">
          <ProductsHero />
          <ProductsGrid />
        </div>
      </section>

      {/* 4. CONTACT US SECTION */}
      <section id="contact" className="relative scroll-mt-[76px] border-t border-[#D8E4F5]/40 py-16 lg:py-20 bg-[oklch(1_0_0)]/15">
        {/* Contact Molecule Decoration */}
        <ContactMoleculeDecoration />
        
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[42%_54%] lg:gap-[6%] items-start">
            
            {/* Left Column */}
            <div className="flex flex-col">
              <h1 className="text-6xl md:text-[76px] lg:text-[62px] font-extrabold tracking-tight text-[#09094D] leading-[0.95]">
                Contact <span className="text-[#0863e8]">Us</span>
              </h1>

              <div className="mt-4.5 lg:mt-2.5 flex items-center">
                <span className="h-3 w-3 rounded-full bg-[#0863e8]" />
                <span className="h-[3px] w-[145px] bg-gradient-to-r from-[#0863e8] to-[#2576eb] rounded-full" />
              </div>

              <p className="mt-7 lg:mt-3.5 max-w-[410px] text-[17px] lg:text-[15px] font-semibold leading-[1.5] lg:leading-normal text-[#09094D] opacity-90">
                We’re here to help! Reach out to us for any<br className="hidden sm:inline" />
                inquiries, partnerships, or support. Our team will<br className="hidden sm:inline" />
                be happy to assist you.
              </p>

              <div className="mt-8 lg:mt-4 flex flex-col gap-3 lg:gap-2">
                <ContactInfoCard
                  type="email"
                  title="Email"
                  value="info@protosunhealthcare.com"
                />
                <ContactInfoCard
                  type="phone"
                  title="Phone"
                  value="+91 9876543210"
                />
              </div>

              <div className="relative mt-4 lg:mt-2 h-[210px] lg:h-[135px] w-full max-w-[390px] lg:max-w-[340px] overflow-hidden rounded-2xl select-none pointer-events-none">
                <img
                  src="/images/pharma-hero.png"
                  alt="Pharmaceutical decoration"
                  className="h-full w-full object-cover object-[38%_68%]"
                  style={{
                    maskImage: "radial-gradient(circle at 50% 50%, black 30%, transparent 85%)",
                    WebkitMaskImage: "radial-gradient(circle at 50% 50%, black 30%, transparent 85%)",
                  }}
                />
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="flex justify-start lg:justify-end">
              <ContactForm />
            </div>

          </div>

          {/* Lower Trust Strip */}
          <div className="mt-14 lg:mt-8">
            <TrustStrip />
          </div>
        </div>
      </section>

      {/* Single Global Footer */}
      <footer className="relative z-10 w-full h-[45px] lg:h-[38px] flex items-center justify-center bg-gradient-to-r from-[#0863e8] to-[#2576eb] text-white shadow-inner">
        <span className="text-[13.5px] font-medium tracking-wide">
          &copy; 2024 Protosun Healthcare LLP. All Rights Reserved.
        </span>
      </footer>
    </main>
  )
}

function HomeMoleculeDecoration() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 300"
      className="pointer-events-none absolute right-0 top-28 z-0 hidden h-auto w-[440px] text-brand-blue/20 lg:block"
      fill="none"
    >
      <g stroke="currentColor" strokeWidth="2">
        <line x1="60" y1="60" x2="140" y2="40" />
        <line x1="140" y1="40" x2="200" y2="90" />
        <line x1="200" y1="90" x2="180" y2="170" />
        <line x1="180" y1="170" x2="100" y2="190" />
        <line x1="100" y1="190" x2="60" y2="120" />
        <line x1="60" y1="120" x2="60" y2="60" />
        <line x1="200" y1="90" x2="280" y2="70" />
        <line x1="280" y1="70" x2="340" y2="120" />
        <line x1="180" y1="170" x2="250" y2="210" />
      </g>
      <g fill="currentColor">
        {[
          [60, 60],
          [140, 40],
          [200, 90],
          [180, 170],
          [100, 190],
          [60, 120],
          [280, 70],
          [340, 120],
          [250, 210],
        ].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="7" className="fill-background" stroke="currentColor" strokeWidth="2" />
        ))}
      </g>
    </svg>
  )
}

function AboutMoleculeDecoration() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 300"
      className="pointer-events-none absolute left-[30%] top-20 z-0 hidden h-auto w-[380px] text-brand-blue/20 lg:block"
      fill="none"
    >
      <g stroke="currentColor" strokeWidth="2">
        <line x1="60" y1="60" x2="140" y2="40" />
        <line x1="140" y1="40" x2="200" y2="90" />
        <line x1="200" y1="90" x2="180" y2="170" />
        <line x1="180" y1="170" x2="100" y2="190" />
        <line x1="100" y1="190" x2="60" y2="120" />
        <line x1="60" y1="120" x2="60" y2="60" />
        <line x1="200" y1="90" x2="280" y2="70" />
        <line x1="280" y1="70" x2="340" y2="120" />
        <line x1="180" y1="170" x2="250" y2="210" />
      </g>
      <g fill="currentColor">
        {[
          [60, 60],
          [140, 40],
          [200, 90],
          [180, 170],
          [100, 190],
          [60, 120],
          [280, 70],
          [340, 120],
          [250, 210],
        ].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="7" className="fill-background" stroke="currentColor" strokeWidth="2" />
        ))}
      </g>
    </svg>
  )
}

function ContactMoleculeDecoration() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 300"
      className="pointer-events-none absolute right-0 top-28 z-0 hidden h-auto w-[440px] text-brand-blue/20 lg:block"
      fill="none"
    >
      <g stroke="currentColor" strokeWidth="2">
        <line x1="60" y1="60" x2="140" y2="40" />
        <line x1="140" y1="40" x2="200" y2="90" />
        <line x1="200" y1="90" x2="180" y2="170" />
        <line x1="180" y1="170" x2="100" y2="190" />
        <line x1="100" y1="190" x2="60" y2="120" />
        <line x1="60" y1="120" x2="60" y2="60" />
        <line x1="200" y1="90" x2="280" y2="70" />
        <line x1="280" y1="70" x2="340" y2="120" />
        <line x1="180" y1="170" x2="250" y2="210" />
      </g>
      <g fill="currentColor">
        {[
          [60, 60],
          [140, 40],
          [200, 90],
          [180, 170],
          [100, 190],
          [60, 120],
          [280, 70],
          [340, 120],
          [250, 210],
        ].map(([cx, cy]) => (
          <circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r="7"
            className="fill-background"
            stroke="currentColor"
            strokeWidth="2"
          />
        ))}
      </g>
    </svg>
  )
}
