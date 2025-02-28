import { AppLayout, PageTitle } from '@/components/app-layout'
import { Categories } from '@/components/products/categories'
import { ProductsList } from '@/components/products/products-list'
import { Separator } from '@/components/ui/separator'

export default function Products() {
  return (
    <AppLayout>
      <div className="space-y-3">
        <PageTitle title="Produtos" />
        <p>Acesse gerencie a sua lista de produtos à venda</p>
      </div>

      <div className="mt-10 flex flex-col gap-3">
        <h2 className="text-lg font-semibold tracking-tight">
          Filtrar por categoria
        </h2>

        <Categories />
      </div>

      <Separator className="my-6" />

      <ProductsList />
    </AppLayout>
  )
}
