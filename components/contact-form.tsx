"use client"

import React, { useState, useEffect } from "react"
import {
  User,
  Mail,
  Phone,
  LayoutGrid,
  SquarePen,
  Headset,
  ChevronDown,
  ChevronRight,
  Send,
  CheckCircle2,
} from "lucide-react"

interface FormState {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  // Disable body scroll when modal sheet is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Handle Escape key close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown)
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format"
    }
    
    
    if (!formData.subject) {
      newErrors.subject = "Subject is required"
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 5) {
      newErrors.message = "Message must be at least 5 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError(null)

    if (validate()) {
      setIsLoading(true)
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })

        const data = await response.json()

        if (response.ok && data.success) {
          setIsSubmitted(true)
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          })
          setErrors({})

          // If this is in the mobile drawer, close it after 2.5 seconds
          if (isOpen) {
            setTimeout(() => {
              setIsOpen(false)
              setIsSubmitted(false)
            }, 2500)
          }
        } else {
          setSubmitError(data.error || "Unable to send your message right now. Please try again.")
        }
      } catch (err) {
        console.error("Error submitting contact form:", err)
        setSubmitError("Unable to send your message right now. Please try again.")
      } finally {
        setIsLoading(false)
      }
    }
  }

  const renderFormFields = (isMobileSheet: boolean) => {
    if (isSubmitted) {
      return (
        <div className="flex flex-col items-center justify-center text-center py-8">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <h3 className="mt-6 text-2xl font-bold text-[#09094D]">
            Message Sent Successfully!
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed text-[#73789A] max-w-[340px]">
            Thank you for reaching out to Protosun Healthcare. Our team will review your inquiry and get back to you shortly.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false)
              setSubmitError(null)
              setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
              })
              if (isMobileSheet) {
                setIsOpen(false)
              }
            }}
            className="mt-8 rounded-[10px] bg-gradient-to-r from-[#3048FF] to-[#4F00FF] px-6 py-3.5 w-full sm:w-auto h-[52px] xs:h-[54px] sm:h-auto text-sm font-semibold text-white shadow-md hover:brightness-110 transition-shadow duration-200 cursor-pointer"
          >
            {isMobileSheet ? "Close" : "Send Another Message"}
          </button>
        </div>
      )
    }

    return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-4 lg:gap-3">
        {/* Row 1: Name and Email */}
        <div className="flex flex-col gap-4 md:gap-4 lg:gap-3 sm:flex-row">
          <div className="relative flex-1">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
              <User className="h-[18px] w-[18px] text-[#3048FF]" strokeWidth={1.8} />
            </div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className={`h-[52px] xs:h-[54px] md:h-[46px] lg:h-[39px] w-full rounded-[12px] md:rounded-[10px] border bg-white pl-10.5 pr-4 text-[16px] md:text-[15px] lg:text-[14px] text-[#09094D] placeholder-[#73789A]/60 outline-none transition focus:border-[#3048FF] focus:ring-2 focus:ring-[#3048FF]/20 ${
                errors.name ? "border-red-400" : "border-[#D8E4F5]"
              }`}
            />
            {errors.name && (
              <span className="absolute -bottom-4 lg:-bottom-3.5 right-1 text-[10px] text-red-500">{errors.name}</span>
            )}
          </div>

          <div className="relative flex-1">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
              <Mail className="h-[18px] w-[18px] text-[#3048FF]" strokeWidth={1.8} />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className={`h-[52px] xs:h-[54px] md:h-[46px] lg:h-[39px] w-full rounded-[12px] md:rounded-[10px] border bg-white pl-10.5 pr-4 text-[16px] md:text-[15px] lg:text-[14px] text-[#09094D] placeholder-[#73789A]/60 outline-none transition focus:border-[#3048FF] focus:ring-2 focus:ring-[#3048FF]/20 ${
                errors.email ? "border-red-400" : "border-[#D8E4F5]"
              }`}
            />
            {errors.email && (
              <span className="absolute -bottom-4 lg:-bottom-3.5 right-1 text-[10px] text-red-500">{errors.email}</span>
            )}
          </div>
        </div>

        {/* Row 2: Phone */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
            <Phone className="h-[18px] w-[18px] text-[#3048FF]" strokeWidth={1.8} />
          </div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone"
            className="h-[52px] xs:h-[54px] md:h-[46px] lg:h-[39px] w-full rounded-[12px] md:rounded-[10px] border border-[#D8E4F5] bg-white pl-10.5 pr-4 text-[16px] md:text-[15px] lg:text-[14px] text-[#09094D] placeholder-[#73789A]/60 outline-none transition focus:border-[#3048FF] focus:ring-2 focus:ring-[#3048FF]/20"
          />
        </div>

        {/* Row 3: Subject (Custom Dropdown) */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
            <LayoutGrid className="h-[18px] w-[18px] text-[#3048FF]" strokeWidth={1.8} />
          </div>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`h-[52px] xs:h-[54px] md:h-[46px] lg:h-[39px] w-full appearance-none rounded-[12px] md:rounded-[10px] border bg-white pl-10.5 pr-10 text-[16px] md:text-[15px] lg:text-[14px] outline-none transition cursor-pointer focus:border-[#3048FF] focus:ring-2 focus:ring-[#3048FF]/20 ${
              formData.subject ? "text-[#09094D]" : "text-[#73789A]/60"
            } ${errors.subject ? "border-red-400" : "border-[#D8E4F5]"}`}
          >
            <option value="" disabled hidden>
              Subject
            </option>
            <option value="Inquiry" className="text-[#09094D]">General Inquiry</option>
            <option value="Partnership" className="text-[#09094D]">Partnerships & Collaboration</option>
            <option value="Support" className="text-[#09094D]">Customer Support</option>
            <option value="Other" className="text-[#09094D]">Other Requests</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
            <ChevronDown className="h-[18px] w-[18px] text-[#73789A]" />
          </div>
          {errors.subject && (
            <span className="absolute -bottom-4 lg:-bottom-3.5 right-1 text-[10px] text-red-500">{errors.subject}</span>
          )}
        </div>

        {/* Row 4: Message (Textarea) */}
        <div className="relative">
          <div className="pointer-events-none absolute left-3.5 top-3.5">
            <SquarePen className="h-[18px] w-[18px] text-[#3048FF]" strokeWidth={1.8} />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={4}
            className={`h-[130px] lg:h-[88px] w-full resize-none rounded-[12px] md:rounded-[10px] border bg-white pl-10.5 pr-4 pt-3.5 lg:pt-2.5 pb-3 text-[16px] md:text-[15px] lg:text-[14px] text-[#09094D] placeholder-[#73789A]/60 outline-none transition focus:border-[#3048FF] focus:ring-2 focus:ring-[#3048FF]/20 ${
              errors.message ? "border-red-400" : "border-[#D8E4F5]"
            }`}
          />
          {errors.message && (
            <span className="absolute -bottom-4 lg:-bottom-3.5 right-1 text-[10px] text-red-500">{errors.message}</span>
          )}
        </div>

        {/* Row 5: Submit Button */}
        <div className="mt-3.5 lg:mt-2 flex flex-col items-end gap-2">
          {submitError && (
            <p className="text-red-500 text-[13px] font-semibold text-right w-full">
              {submitError}
            </p>
          )}
          <button
            type="submit"
            disabled={isLoading}
            className="flex h-[52px] xs:h-[54px] sm:h-[45px] lg:h-[38px] w-full sm:w-[175px] lg:w-[155px] items-center justify-center gap-2 rounded-[12px] md:rounded-[10px] bg-gradient-to-r from-[#3048FF] to-[#4F00FF] text-white font-semibold shadow-md hover:brightness-110 disabled:opacity-75 disabled:cursor-not-allowed transition-shadow duration-200 cursor-pointer"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="h-4.5 w-4.5" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </div>
      </form>
    )
  }

  return (
    <div className="w-full max-w-[540px]">
      {/* Mobile CTA Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="flex h-[60px] w-full items-center justify-between rounded-2xl border border-[#0863e8]/20 bg-white px-5 shadow-[0_4px_16px_rgba(216,228,245,0.25)] transition-all duration-200 hover:bg-[#EEF5FF]/10 active:opacity-90 md:hidden cursor-pointer"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EEF5FF]">
            <Headset className="h-5.5 w-5.5 text-[#3048FF]" strokeWidth={1.8} />
          </div>
          <div className="flex flex-col items-start justify-center">
            <span className="text-[15px] font-extrabold text-[#09094D] leading-none">
              Send Us a Message
            </span>
            <span className="mt-1.5 text-[12px] font-bold text-[#0863e8] leading-none">
              Start a conversation &rarr;
            </span>
          </div>
        </div>
        <ChevronRight className="h-5.5 w-5.5 text-[#0863e8]" strokeWidth={2.2} />
      </button>

      {/* Mobile Bottom Sheet Modal */}
      <div
        className={`fixed inset-0 z-50 bg-[#09094D]/25 backdrop-blur-[8px] transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed bottom-0 left-0 right-0 z-[100] h-[88dvh] max-h-[88dvh] bg-white rounded-t-[24px] shadow-[0_-8px_30px_rgba(9,9,77,0.12)] flex flex-col transition-transform duration-[350ms] ease-out md:hidden ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Drag Handle */}
        <div className="w-full flex justify-center py-3.5 shrink-0 select-none cursor-pointer" onClick={() => setIsOpen(false)}>
          <span className="w-12 h-1.5 rounded-full bg-[#D8E4F5]" />
        </div>

        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 pb-4 border-b border-[#D8E4F5]/40 shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EEF5FF]">
              <Headset className="h-5.5 w-5.5 text-[#3048FF]" strokeWidth={1.8} />
            </div>
            <div>
              <h2 className="text-[17px] font-bold text-[#09094D] leading-none">
                Send Us a Message
              </h2>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="text-[14.5px] font-bold text-[#0863e8] active:opacity-75 transition-opacity cursor-pointer px-2 py-1"
          >
            &times; Close
          </button>
        </div>

        {/* Scrollable Form Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 pb-12">
          {renderFormFields(true)}
        </div>
      </div>

      {/* Desktop/Tablet Permanent Form Card */}
      <div className="hidden md:block w-full rounded-[22px] md:rounded-[20px] border border-[#D8E4F5]/50 md:border-[#D8E4F5]/60 bg-white p-5 xs:p-6 md:p-8 lg:p-5.5 shadow-[0_4px_16px_rgba(216,228,245,0.25)] md:shadow-[0_8px_30px_rgb(216,228,245,0.5)]">
        {/* Form Header */}
        <div className="flex items-center gap-3.5 xs:gap-4 md:gap-4.5 lg:gap-3.5 mb-5 xs:mb-6 md:mb-6.5 lg:mb-4.5">
          <div className="flex h-11 w-11 xs:h-12 xs:w-12 md:h-[62px] md:w-[62px] shrink-0 items-center justify-center rounded-full bg-[#EEF5FF]">
            <Headset className="h-5.5 w-5.5 xs:h-6 xs:w-6 md:h-[30px] md:w-[30px] text-[#3048FF]" strokeWidth={1.8} />
          </div>
          <div>
            <h2 className="text-[18px] xs:text-xl md:text-[22px] lg:text-[19px] font-bold text-[#09094D] leading-none">
              Send Us a Message
            </h2>
            <div className="mt-2 lg:mt-1.5 h-[2.5px] w-8 bg-[#3048FF] rounded-full" />
          </div>
        </div>

        {/* Form or success content */}
        {renderFormFields(false)}
      </div>
    </div>
  )
}
