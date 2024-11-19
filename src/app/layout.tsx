import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import FloatingNavbar from '@/components/FloatingNavbar'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Energy Consumption Predictor',
  description: 'Predict energy consumption for a given state and date',
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="pb-24">
          {children}
        </main>
        <FloatingNavbar />
      </body>
    </html>
  )
}