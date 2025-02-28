import { Plus } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

import { AppLayout, PageTitle } from '@/components/app-layout'
import { Categories } from '@/components/products/categories'
import { ProductsList } from '@/components/products/products-list'
import { buttonVariants } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: 'Produtos',
  description: 'Cadastre um produto para seu catálogo',
}

export default function Products() {
  return (
    <AppLayout>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-6">
        <div className="space-y-3">
          <PageTitle title="Produtos" />
          <p>Acesse gerencie a sua lista de produtos à venda</p>
        </div>
        <Link href="/products/add" className={buttonVariants()}>
          <Plus size={20} />
          Adicionar Produto
        </Link>
      </div>

      <div className="mt-10 flex flex-col gap-3">
        <h2 className="text-lg font-semibold tracking-tight">
          Buscar por categoria
        </h2>

        <Categories />
      </div>

      <Separator className="my-6" />

      <ProductsList />
    </AppLayout>
  )
}
