import type { Metadata } from 'next'
import { Great_Vibes, Poppins } from 'next/font/google'

import './globals.css'

const greatVibes = Great_Vibes({ weight: '400', subsets: ['latin'], variable: '--font-great-vibes' })
const poppins = Poppins({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'], variable: '--font-poppins' })

export const metadata: Metadata = {
  title: "Happy Valentine's Day",
  description: 'A romantic surprise made with love',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${greatVibes.variable} ${poppins.variable}`}>
      <body className="font-poppins antialiased overflow-x-hidden bg-rose-50">{children}</body>
    </html>
  )
}
