import './globals.css'

import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
})

export const metadata: Metadata = {
  title: 'EadSkill',
  description:
    'Este é um projeto desenvolvido em Next js 14 para um teste técnico na EadSkill',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${plusJakartaSans.variable} bg-background`}>
        {children}
      </body>
    </html>
  )
}
