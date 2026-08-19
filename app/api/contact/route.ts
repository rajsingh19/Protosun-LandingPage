import { NextResponse } from "next/server"
import { Resend } from "resend"

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY)

// Simple email regex for server-side validation
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  try {
    // Parse JSON body
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // 1. Validation and Sanitization
    if (!name || !name.trim()) {
      return NextResponse.json(
        { success: false, error: "Name is required." },
        { status: 400 }
      )
    }

    if (!email || !email.trim()) {
      return NextResponse.json(
        { success: false, error: "Email is required." },
        { status: 400 }
      )
    }

    if (!EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      )
    }

    if (!subject || !subject.trim()) {
      return NextResponse.json(
        { success: false, error: "Subject is required." },
        { status: 400 }
      )
    }

    if (!message || !message.trim()) {
      return NextResponse.json(
        { success: false, error: "Message is required." },
        { status: 400 }
      )
    }

    // Basic protection against empty/spam submissions
    if (name.trim().length < 2 || message.trim().length < 5) {
      return NextResponse.json(
        { success: false, error: "Submission failed validation checks." },
        { status: 400 }
      )
    }

    // Check if Resend API Key is set
    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY environment variable.")
      return NextResponse.json(
        { success: false, error: "Unable to send your message right now. Please try again." },
        { status: 500 }
      )
    }

    // Determine target email address
    const toEmail = process.env.CONTACT_EMAIL || "protosunhealthcare@gmail.com"

    // Construct the email body
    const emailSubject = `New Contact Form Message - ${subject.trim()}`
    
    const textContent = `
Name:
${name.trim()}

Email:
${email.trim()}

Phone:
${phone ? phone.trim() : "Not provided"}

Subject:
${subject.trim()}

Message:
${message.trim()}

Submitted from Protosun Healthcare website.
    `.trim()

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #09094D; max-width: 600px; margin: 0 auto; border: 1px solid #D8E4F5; padding: 24px; border-radius: 8px;">
        <h2 style="color: #0863e8; border-bottom: 2px solid #D8E4F5; padding-bottom: 8px; margin-top: 0;">New Contact Form Message</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 100px;">Name:</td>
            <td style="padding: 8px 0;">${name.trim()}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Email:</td>
            <td style="padding: 8px 0;"><a href="mailto:${email.trim()}" style="color: #0863e8;">${email.trim()}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
            <td style="padding: 8px 0;">${phone && phone.trim() ? phone.trim() : "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Subject:</td>
            <td style="padding: 8px 0;">${subject.trim()}</td>
          </tr>
        </table>
        <div style="margin-top: 24px; padding: 16px; background-color: #f4f8fd; border-radius: 8px;">
          <h4 style="margin-top: 0; color: #09094D; border-bottom: 1px solid #D8E4F5; padding-bottom: 4px;">Message:</h4>
          <p style="white-space: pre-wrap; margin-bottom: 0;">${message.trim()}</p>
        </div>
        <p style="font-size: 11px; color: #73789A; margin-top: 32px; border-top: 1px solid #D8E4F5; padding-top: 8px; text-align: center;">
          Submitted from Protosun Healthcare website.
        </p>
      </div>
    `

    // 2. Send the email using Resend
    // For initial development/testing, we use onboarding@resend.dev as the 'from' address.
    const { error: resendError } = await resend.emails.send({
      from: "Protosun Healthcare <onboarding@resend.dev>",
      to: [toEmail],
      replyTo: email.trim(),
      subject: emailSubject,
      text: textContent,
      html: htmlContent,
    })

    if (resendError) {
      console.error("Resend API error:", resendError)
      return NextResponse.json(
        { success: false, error: "Unable to send your message right now. Please try again." },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Unexpected error in contact route:", error)
    return NextResponse.json(
      { success: false, error: "Unable to send your message right now. Please try again." },
      { status: 500 }
    )
  }
}
