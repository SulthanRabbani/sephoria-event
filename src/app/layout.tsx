import type { Metadata, Viewport } from 'next'
import { Inter, Syncopate } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const syncopate = Syncopate({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-syncopate',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'CHRONOLOGIE — Luxury Watches',
  description: 'CHRONOLOGIE is a curated marketplace for the world\'s most exceptional luxury timepieces. Discover, collect, and trade rare watches with confidence.',
  openGraph: {
    title: 'CHRONOLOGIE — Luxury Watches',
    description: 'CHRONOLOGIE is a curated marketplace for the world\'s most exceptional luxury timepieces. Discover, collect, and trade rare watches with confidence.',
    type: 'website',
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">⌚</text></svg>',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${syncopate.variable}`}>
      <body className="noise">{children}</body>
    </html>
  )
}
