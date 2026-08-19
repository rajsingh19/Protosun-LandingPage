import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Protosun Healthcare | Pharmaceutical & Healthcare Company',
  description:
    'Protosun Healthcare is a pharmaceutical and healthcare company dedicated to delivering effective, safe, and high-quality pharmaceutical and Ayurvedic formulations.',
  metadataBase: new URL('https://protosunhealthcare.in'),
  alternates: {
    canonical: 'https://protosunhealthcare.in/',
  },
  openGraph: {
    title: 'Protosun Healthcare | Pharmaceutical & Healthcare Company',
    description:
      'Protosun Healthcare is a pharmaceutical and healthcare company dedicated to delivering effective, safe, and high-quality pharmaceutical and Ayurvedic formulations.',
    url: 'https://protosunhealthcare.in/',
    siteName: 'Protosun Healthcare',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://protosunhealthcare.in/protosun-logo.png',
        width: 1200,
        height: 630,
        alt: 'Protosun Healthcare Logo',
      },
    ],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Protosun Healthcare",
    "alternateName": "PROTOSUN HEALTHCARE LLP",
    "url": "https://protosunhealthcare.in/",
    "logo": "https://protosunhealthcare.in/protosun-logo.png",
    "email": "protosunhealthcare@gmail.com",
    "telephone": "+91 7905109467",
    "founder": [
      {
        "@type": "Person",
        "name": "Priya Singh"
      },
      {
        "@type": "Person",
        "name": "Sima Devi"
      }
    ]
  }

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Protosun Healthcare",
    "url": "https://protosunhealthcare.in/"
  }

  return (
    <html lang="en" className={`${poppins.variable} bg-background`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
