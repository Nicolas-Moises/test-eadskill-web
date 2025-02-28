import { ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface AppLayoutProps {
  children: ReactNode
  className?: string
}

export function AppLayout({ children, className }: AppLayoutProps) {
  return (
    <section className={cn('py-10', className)}>
      <div className="container-wrapper">{children}</div>
    </section>
  )
}

interface PageTitleProps {
  title: string
  className?: string
}

export function PageTitle({ title, className }: PageTitleProps) {
  return (
    <h1 className={cn('text-2xl font-semibold tracking-tight', className)}>
      {title}
    </h1>
  )
}
