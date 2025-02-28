import { Metadata } from 'next'

import { AppLayout, PageTitle } from '@/components/app-layout'
import { CreateProduct } from '@/components/forms/create-product'
import { LinkBack } from '@/components/ui/link-back'

export const metadata: Metadata = {
  title: 'Cadastrar produto',
  description: 'Cadastre um produto para seu catálogo',
}

export default function AddProduct() {
  return (
    <AppLayout>
      <LinkBack path={'/products'} />
      <div className="mt-6 space-y-3">
        <PageTitle title="Novo produto" />
        <p>Cadastre um produto para venda no marketplace</p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[440px,_1fr]">
        <CreateProduct />
      </div>
    </AppLayout>
  )
}
