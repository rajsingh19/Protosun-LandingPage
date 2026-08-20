import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { AboutHero } from "@/components/about-hero"
import { ProductsHero } from "@/components/products-hero"
import { ProductsGrid } from "@/components/products-grid"
import { ContactInfoCard } from "@/components/contact-info-card"
import { ContactForm } from "@/components/contact-form"
import { TrustStrip } from "@/components/trust-strip"

export default function Page() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-x-hidden pt-[52px] md:pt-[76px] bg-gradient-to-b from-[oklch(0.97_0.02_250)] via-[oklch(0.98_0.01_250)] to-[oklch(0.99_0.005_250)]">
      {/* Sticky Site Navbar */}
      <SiteHeader />

      {/* 1. HOME SECTION */}
      <section id="home" className="relative flex flex-col scroll-mt-[52px] md:scroll-mt-[76px]">
        {/* Molecular decoration (top right) */}
        <HomeMoleculeDecoration />
        <Hero />
      </section>

      {/* 2. ABOUT US SECTION */}
      <section id="about" className="relative scroll-mt-[52px] md:scroll-mt-[76px] border-t border-[#D8E4F5]/40 bg-[#f4f8fd] overflow-hidden">
        {/* Molecular decoration (top center) */}
        <AboutMoleculeDecoration />
        <AboutHero />
      </section>

      {/* 3. OUR PRODUCTS SECTION */}
      <section
        id="products"
        className="relative scroll-mt-[52px] md:scroll-mt-[76px] border-t border-[#D8E4F5]/40 bg-[linear-gradient(180deg,#fbfdff_0%,#f5f9ff_100%)] pt-10 pb-12 md:py-16 lg:py-20 overflow-hidden"
      >

        <div className="mx-auto max-w-[1250px] w-full px-5 md:px-12 lg:px-16 relative z-10">
          <ProductsHero />
          <ProductsGrid />
        </div>
      </section>

      {/* 4. CONTACT US SECTION */}
      <section id="contact" className="relative scroll-mt-[52px] md:scroll-mt-[76px] border-t border-[#D8E4F5]/40 py-12 md:py-16 lg:py-20 bg-[oklch(1_0_0)]/15">
        {/* Contact Molecule Decoration */}
        <ContactMoleculeDecoration />
        
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[42%_54%] lg:gap-[6%] items-start">
            
            {/* Left Column */}
            <div className="flex flex-col">
              <h1 className="text-[42px] min-[390px]:text-[46px] md:text-[76px] lg:text-[62px] font-extrabold tracking-tight text-[#09094D] leading-[0.95]">
                Contact <span className="text-[#0863e8]">Us</span>
              </h1>

              <div className="mt-3 md:mt-4.5 lg:mt-2.5 flex items-center">
                <span className="h-3 w-3 rounded-full bg-[#0863e8]" />
                <span className="h-[3px] w-[120px] xs:w-[145px] bg-gradient-to-r from-[#0863e8] to-[#2576eb] rounded-full" />
              </div>

              <p className="mt-5 md:mt-7 lg:mt-3.5 max-w-[410px] text-[15.5px] xs:text-[16px] md:text-[17px] lg:text-[15px] font-medium leading-[1.6] lg:leading-normal text-[#09094D] opacity-90">
                We’re here to help! Reach out to us for any<br className="hidden sm:inline" />
                inquiries, partnerships, or support. Our team will<br className="hidden sm:inline" />
                be happy to assist you.
              </p>

              <div className="mt-6 md:mt-8 lg:mt-4 flex flex-col gap-3.5 lg:gap-2">
                <ContactInfoCard
                  type="email"
                  title="Email"
                  value="protosunhealthcare@gmail.com"
                />
                <ContactInfoCard
                  type="phone"
                  title="Phone"
                  value="+91 7905109467"
                />
              </div>

              <div className="relative mt-8 md:mt-4 lg:mt-2 h-[180px] xs:h-[200px] md:h-[210px] lg:h-[135px] w-full max-w-[390px] lg:max-w-[340px] overflow-hidden rounded-[18px] xs:rounded-[20px] md:rounded-2xl select-none pointer-events-none">
                <style>{`
                  .contact-decoration-img {
                    mask-image: radial-gradient(circle at 50% 50%, black 65%, rgba(0, 0, 0, 0.3) 90%, transparent 100%);
                    -webkit-mask-image: radial-gradient(circle at 50% 50%, black 65%, rgba(0, 0, 0, 0.3) 90%, transparent 100%);
                    opacity: 0.88;
                    filter: contrast(1.05) brightness(1.02);
                  }
                  @media (min-width: 768px) {
                    .contact-decoration-img {
                      mask-image: radial-gradient(circle at 50% 50%, black 30%, transparent 85%) !important;
                      -webkit-mask-image: radial-gradient(circle at 50% 50%, black 30%, transparent 85%) !important;
                      opacity: 1.0 !important;
                      filter: none !important;
                    }
                  }
                `}</style>
                <img
                  src="/images/pharma-hero.png"
                  alt="Pharmaceutical decoration"
                  className="h-full w-full object-cover object-[38%_68%] contact-decoration-img"
                />
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="flex justify-start lg:justify-end">
              <ContactForm />
            </div>

          </div>

          {/* Lower Trust Strip */}
          <div className="mt-12 lg:mt-8">
            <TrustStrip />
          </div>
        </div>
      </section>

      {/* Single Global Footer */}
      <footer className="relative z-10 w-full h-auto py-3 md:h-[45px] lg:h-[38px] flex flex-col md:flex-row items-center justify-center gap-1 md:gap-4 bg-[#0863e8] text-white shadow-inner">
        <span className="text-[13px] md:text-[14px] font-bold tracking-wide text-center text-[#eef5ff]">
          Protosun Healthcare LLP
        </span>
        <span className="hidden md:inline text-[#eef5ff]/40">|</span>
        <span className="text-[11px] xs:text-[12px] md:text-[13px] font-medium tracking-wide text-center text-[#eef5ff]/70 px-5">
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

