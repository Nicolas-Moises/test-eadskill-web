import { AppLayout, PageTitle } from '@/components/app-layout'
import { CreateProduct } from '@/components/forms/create-product'
import { LinkBack } from '@/components/ui/link-back'

export default function AddProduct() {
  return (
    <AppLayout>
      <LinkBack path={'/products'} />
      <div className="mt-6 space-y-3">
        <PageTitle title="Novo produto" />
        <p>Cadastre um produto para venda no marketplace</p>
      </div>

      <div className="mt-10 grid grid-cols-[440px,_1fr] gap-6">
        <CreateProduct />
      </div>
    </AppLayout>
  )
}
