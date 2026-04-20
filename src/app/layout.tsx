import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SEPHORiA - The Iconic Beauty Celebration',
  description: 'The iconic beauty celebration for beauty lovers is on a global tour. SEPHORiA is a global beauty event through a local lens.',
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
    <html lang="en">
      <body className="noise">{children}</body>
    </html>
  )
}
