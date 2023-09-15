import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Petron: We Fuel Success',
  description: 'We Fuel Success',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <nav>Navigation</nav> */}
          {children}
        {/* <footer>Footer</footer> */}
      </body>
    </html>
  )
}
