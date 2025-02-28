import Link from 'next/link'
import { ElementType } from 'react'

import { buttonVariants } from './ui/button'

interface NavItemProps {
  href: string
  icon: ElementType
  label: string
  className?: string
}

export function NavItem({ href, icon: Icon, label, className }: NavItemProps) {
  return (
    <Link
      href={href}
      className={buttonVariants({ variant: 'ghost', className })}
    >
      <Icon size={20} />
      <span>{label}</span>
    </Link>
  )
}
