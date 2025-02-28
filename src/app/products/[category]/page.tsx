'use client'
import { useParams } from 'next/navigation'

import { AppLayout, PageTitle } from '@/components/app-layout'
import { ProductCard } from '@/components/products/product-card'
import { ProductsEmpty } from '@/components/products/products-empty'
import { ProductsError } from '@/components/products/products-error'
import { ProductSkeleton } from '@/components/products/products-skeleton'
import { LinkBack } from '@/components/ui/link-back'
import { useGetProductsByCategory } from '@/hooks/use-get-products'

export default function Category() {
  const { category } = useParams<{ category: string }>()
  const decodedCategory = decodeURIComponent(category)

  const {
    data: products,
    isLoading: isProductsLoading,
    isError: isProductsError,
  } = useGetProductsByCategory(decodedCategory)

  return (
    <AppLayout>
      <LinkBack path={'/products'} />
      <div className="mt-6 space-y-3">
        <PageTitle title={`Produtos na Categoria: ${decodedCategory}`} />
        <p>Acesse gerencie a sua lista de produtos à venda</p>
      </div>

      <div className="grid-products mt-10">
        {isProductsError ? <ProductsError /> : null}
        {isProductsLoading
          ? Array.from(
              {
                length: 10,
              },
              (_, index) => <ProductSkeleton key={index} />,
            )
          : null}
        {products && products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <ProductsEmpty />
        )}
      </div>
    </AppLayout>
  )
}
