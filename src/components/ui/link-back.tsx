import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

import { buttonVariants } from './button'

interface LinkBack {
  path: string
}

export function LinkBack({ path }: LinkBack) {
  return (
    <Link
      href={path}
      className={buttonVariants({
        variant: 'link',
        className: '!h-auto !px-0 !py-0',
      })}
    >
      <ArrowLeft size={6} />
      <span>Voltar para Produtos</span>
    </Link>
  )
}
