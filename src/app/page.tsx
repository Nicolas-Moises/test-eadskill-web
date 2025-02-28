import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="relative isolate px-6 lg:px-8">
      <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            Transforme seu negócio online com dados
          </h1>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            Descubra insights valiosos e impulsione suas vendas. Acesse
            ferramentas que fazem a diferença.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/products" className={buttonVariants()}>
              Ver Produtos
            </Link>
            <Link href="#" className={buttonVariants({ variant: 'ghost' })}>
              Saiba mais
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
