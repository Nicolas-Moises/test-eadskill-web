import { Box, ChevronDownIcon, Layers, Plus } from 'lucide-react'
import Link from 'next/link'

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button, buttonVariants } from './ui/button'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper flex h-20 items-center gap-14">
        <Layers className="size-8 text-primary" />
        <div>
          <Link
            href="/products"
            className={buttonVariants({ variant: 'ghost' })}
          >
            <Box size={20} />
            <span>Produtos</span>
          </Link>
        </div>
        <div className="ml-auto flex gap-4">
          <Link href="/products/add" className={buttonVariants()}>
            <Plus size={20} />
            Adicionar Produto
          </Link>
          <Button variant="ghost" className="h-auto p-0 hover:bg-transparent">
            <Avatar>
              <AvatarImage
                src="https://github.com/Nicolas-Moises.png"
                alt="Profile image"
              />
              <AvatarFallback>KK</AvatarFallback>
            </Avatar>
            <ChevronDownIcon
              size={16}
              className="opacity-60"
              aria-hidden="true"
            />
          </Button>
        </div>
      </div>
    </header>
  )
}
