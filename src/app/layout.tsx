import type { Metadata } from 'next'
import { Mulish } from 'next/font/google'
import './globals.css'

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
        <div className="area" >
          <ul className="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
          </ul>
        </div>
      </body>
    </html>
  )
}
