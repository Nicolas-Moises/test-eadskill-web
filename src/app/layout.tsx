import './globals.css'

import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { Toaster } from 'sonner'

import { AppLayout } from '@/components/app-layout'
import { Header } from '@/components/header'
import { Providers } from '@/providers/providers'

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
      <body className={`relative ${plusJakartaSans.variable} bg-background`}>
        <Providers>
          <Toaster closeButton />
          <Header />
          <AppLayout>{children}</AppLayout>
        </Providers>
      </body>
    </html>
  )
}
