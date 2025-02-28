import { Layers } from 'lucide-react'

import { MobileNav } from './mobile-nav'
import { Nav } from './nav'
import { UserNav } from './user-nav'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper flex h-20 items-center gap-6">
        <Layers className="size-8 text-primary" />
        <Nav />
        <div className="ml-auto flex gap-4">
          <MobileNav />
          <UserNav />
        </div>
      </div>
    </header>
  )
}
