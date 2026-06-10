import type { Metadata } from 'next'
import { Lora, IBM_Plex_Sans } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const lora = Lora({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
  display: 'swap',
})

const ibmPlex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-ibm',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aaron Gerston — AI Engineer & Data Scientist',
  description: 'Aaron Gerston is an AI engineer and data scientist with 7+ years building high-stakes data infrastructure. Founder of Amani Intelligence.',
  authors: [{ name: 'Aaron Gerston' }],
  alternates: {
    canonical: 'https://www.aarongerston.com',
  },
  openGraph: {
    title: 'Aaron Gerston — AI Engineer & Data Scientist',
    description: 'Founder of Amani Intelligence. 7+ years building ML systems across medtech, neuroscience, and enterprise AI.',
    url: 'https://www.aarongerston.com',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${lora.variable} ${ibmPlex.variable}`}>
      <body suppressHydrationWarning>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
