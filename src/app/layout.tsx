import type { Metadata } from 'next'
import { Mulish } from 'next/font/google'
import '../styles/globals.scss'

const inter = Mulish({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Technogise GDG',
  description: 'Technogise GDGx',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <div className="context w-full">
      {children}
    </div>
    </body>
    </html>
  )
}
