"use client"

import { useState } from "react"
import {
  User,
  Mail,
  Phone,
  LayoutGrid,
  SquarePen,
  Headset,
  ChevronDown,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      setIsSubmitted(true)
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex h-full min-h-[440px] w-full max-w-[540px] flex-col items-center justify-center rounded-[20px] border border-[#D8E4F5]/60 bg-white p-8 text-center shadow-[0_8px_30px_rgb(216,228,245,0.5)]">
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
            setFormData({
              name: "",
              email: "",
              phone: "",
              subject: "",
              message: "",
            })
          }}
          className="mt-8 rounded-[10px] bg-gradient-to-r from-[#3048FF] to-[#4F00FF] px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:brightness-110 transition duration-200"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <div className="w-full max-w-[540px] rounded-[20px] border border-[#D8E4F5]/60 bg-white p-7 md:p-8 lg:p-5.5 shadow-[0_8px_30px_rgb(216,228,245,0.5)]">
      {/* Form Header */}
      <div className="flex items-center gap-4.5 lg:gap-3.5 mb-6.5 lg:mb-4.5">
        <div className="flex h-[62px] w-[62px] lg:h-12 lg:w-12 shrink-0 items-center justify-center rounded-full bg-[#EEF5FF]">
          <Headset className="h-[30px] w-[30px] lg:h-5.5 lg:w-5.5 text-[#3048FF]" strokeWidth={1.8} />
        </div>
        <div>
          <h2 className="text-xl md:text-[22px] lg:text-[19px] font-bold text-[#09094D] leading-none">
            Send Us a Message
          </h2>
          <div className="mt-2 lg:mt-1.5 h-[2.5px] w-8 bg-[#3048FF] rounded-full" />
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 lg:gap-3">
        {/* Row 1: Name and Email */}
        <div className="flex flex-col gap-4 lg:gap-3 sm:flex-row">
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
              className={`h-[46px] lg:h-[39px] w-full rounded-[10px] border bg-white pl-10.5 pr-4 text-[15px] lg:text-[14px] text-[#09094D] placeholder-[#73789A]/60 outline-none transition focus:border-[#3048FF] focus:ring-1 focus:ring-[#3048FF] ${
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
              className={`h-[46px] lg:h-[39px] w-full rounded-[10px] border bg-white pl-10.5 pr-4 text-[15px] lg:text-[14px] text-[#09094D] placeholder-[#73789A]/60 outline-none transition focus:border-[#3048FF] focus:ring-1 focus:ring-[#3048FF] ${
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
            className="h-[46px] lg:h-[39px] w-full rounded-[10px] border border-[#D8E4F5] bg-white pl-10.5 pr-4 text-[15px] lg:text-[14px] text-[#09094D] placeholder-[#73789A]/60 outline-none transition focus:border-[#3048FF] focus:ring-1 focus:ring-[#3048FF]"
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
            className={`h-[46px] lg:h-[39px] w-full appearance-none rounded-[10px] border bg-white pl-10.5 pr-10 text-[15px] lg:text-[14px] outline-none transition cursor-pointer focus:border-[#3048FF] focus:ring-1 focus:ring-[#3048FF] ${
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
            className={`h-[125px] lg:h-[88px] w-full resize-none rounded-[10px] border bg-white pl-10.5 pr-4 pt-3.5 lg:pt-2.5 pb-3 text-[15px] lg:text-[14px] text-[#09094D] placeholder-[#73789A]/60 outline-none transition focus:border-[#3048FF] focus:ring-1 focus:ring-[#3048FF] ${
              errors.message ? "border-red-400" : "border-[#D8E4F5]"
            }`}
          />
          {errors.message && (
            <span className="absolute -bottom-4 lg:-bottom-3.5 right-1 text-[10px] text-red-500">{errors.message}</span>
          )}
        </div>

        {/* Row 5: Submit Button */}
        <div className="mt-3.5 lg:mt-2 flex justify-end">
          <button
            type="submit"
            className="flex h-[45px] lg:h-[38px] w-[175px] lg:w-[155px] items-center justify-center gap-2 rounded-[10px] bg-gradient-to-r from-[#3048FF] to-[#4F00FF] text-white font-semibold shadow-md hover:brightness-110 active:scale-[0.98] transition-all duration-200"
          >
            <Send className="h-4.5 w-4.5" />
            <span>Send Message</span>
          </button>
        </div>
      </form>
    </div>
  )
}
