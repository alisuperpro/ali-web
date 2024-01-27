import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/bars/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ali Solorzano (@alisolorzanove)',
  description: '@alisolorzanove'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">

      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
