import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ashwin Dental Cae',
  description: 'Created by Vilambara(AD Agency)',
  generator: 'nestx.space',
  icons: {
    icon: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
