import React from "react"
import type { Metadata } from 'next'
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: '--font-instrument'
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: '--font-instrument-serif'
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-jetbrains'
});

export const metadata: Metadata = {
  title: 'CORTERON: AI Operating System for Business',
  description: 'Corteron captures every lead, follows up automatically, posts content daily, closes sales, and reports results across all 15 business domains without a team of people managing it.',
  keywords: 'AI automation, business operating system, AI agency, lead automation, marketing automation, 15 domains, NeuralFlow, PropPulse',
  openGraph: {
    title: 'CORTERON: AI Operating System for Business',
    description: 'The machine that runs every domain of your business. Automatically.',
    url: 'https://www.corteron.com',
    siteName: 'Corteron',
    type: 'website',
    locale: 'en_CA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CORTERON: AI Operating System for Business',
    description: 'The machine that runs every domain of your business. Automatically.',
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://www.corteron.com'),
}

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { page_path: window.location.pathname });
          `}
        </Script>
      </head>
      <body className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
