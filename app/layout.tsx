import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant'
})

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat'
})

export const metadata: Metadata = {
  title: "Kala's Beauty Parlour | Premium Beauty Salon in Hosur",
  description: "Luxury beauty care, bridal makeovers & professional salon services in Hosur. Expert beauticians, premium products, and personalized beauty solutions. Book your appointment today!",
  keywords: "beauty parlour hosur, bridal makeup hosur, salon hosur, hair styling, facials, skincare, beauty services tamil nadu",
  openGraph: {
    title: "Kala's Beauty Parlour | Premium Beauty Salon in Hosur",
    description: "Luxury beauty care, bridal makeovers & professional salon services in Hosur.",
    type: "website",
  },
}

export const viewport = {
  themeColor: '#d4a373',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${cormorant.variable} ${montserrat.variable} font-serif antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
