import type { Metadata } from 'next'
import { Kanit, Oswald, Poppins } from 'next/font/google'
import './globals.css'

const kanit = Kanit({
  weight: ['600'],
  subsets: ['latin'],
  variable: '--font-kanit',
})

const oswald = Oswald({
  weight: ['700'],
  subsets: ['latin'],
  variable: '--font-oswald',
})

const poppins = Poppins({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Green Beacon Organization',
  description: 'Bringing hope to the future - A non-profit organization focused on improving access to education in African communities.',
  icons: {
    icon: '/images/icon.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${kanit.variable} ${oswald.variable} ${poppins.variable}`}>
      <body className="font-poppins antialiased">
        {children}
      </body>
    </html>
  )
}

