import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const font = Poppins({ 
  subsets: ['latin'], 
  variable: '--font-poppins',
  weight: ['300']
})

export const metadata: Metadata = {
  title: 'Aaron Gerston | Data Science & AI Consulting',
  description: 'Professional data science and AI consulting services focused on creating positive social impact through responsible data science and ethical AI.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${font.variable} font-sans bg-dark-900 text-dark-50`} suppressHydrationWarning>
        <Navigation />
        {children}
      </body>
    </html>
  )
} 