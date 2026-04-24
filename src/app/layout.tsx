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
  title: 'SEPHORiA - The Iconic Beauty Celebration',
  description: 'The iconic beauty celebration for beauty lovers is on a global tour. SEPHORiA is a global beauty event through a local lens.',
  openGraph: {
    title: 'SEPHORiA - The Iconic Beauty Celebration',
    description: 'The iconic beauty celebration for beauty lovers is on a global tour. SEPHORiA is a global beauty event through a local lens.',
    type: 'website',
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">✨</text></svg>',
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
