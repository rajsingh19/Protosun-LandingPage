"use client"

import Link from "next/link"
import React, { useEffect, useState } from "react"

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About Us", id: "about" },
  { label: "Our Product", id: "products" },
  { label: "Contact", id: "contact" },
]

export function SiteHeader() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const sections = ["home", "about", "products", "contact"]
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // Trigger when the section occupies the main view area
      threshold: 0.05,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id)
        if (el) observer.unobserve(el)
      })
    }
  }, [])

  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
      setActiveSection(id)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] bg-white/95 backdrop-blur-[10px] border-b border-[#D8E4F5]/40 shadow-sm transition-all duration-300">
      <div className="flex items-center justify-between px-6 py-5 md:px-12 lg:px-20 lg:py-4.5">
        {/* Logo */}
        <a href="#home" onClick={(e) => handleScroll(e, "home")} className="flex items-baseline gap-2.5 cursor-pointer">
          <span className="text-3xl font-bold tracking-tight text-brand-navy md:text-[34px]">
            Protosun
          </span>
          <span className="text-3xl font-medium tracking-tight text-brand-blue md:text-[34px]">
            Healthcare
          </span>
        </a>

        {/* Nav */}
        <nav className="hidden items-center gap-10 md:flex lg:gap-16">
          {NAV_ITEMS.map((item) => {
            const active = activeSection === item.id
            return (
              <a
                key={item.label}
                href={`#${item.id}`}
                onClick={(e) => handleScroll(e, item.id)}
                className={`relative py-1 text-base font-medium transition-colors hover:text-brand-blue lg:text-lg ${
                  active ? "text-brand-blue" : "text-brand-navy"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-brand-blue" />
                )}
              </a>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
