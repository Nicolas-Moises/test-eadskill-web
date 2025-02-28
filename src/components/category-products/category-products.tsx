'use client'
import { useGetProductsByCategory } from '@/hooks/use-get-products'
import { useSortedProducts } from '@/hooks/use-sorted-products'

import { PageTitle } from '../app-layout'
import { ProductsGrid } from '../products/products-grid'
import { LinkBack } from '../ui/link-back'

interface CategoryProductsProps {
  category: string
}

export function CategoryProducts({ category }: CategoryProductsProps) {
  const {
    data: products,
    isLoading: isProductsLoading,
    isError: isProductsError,
  } = useGetProductsByCategory(category)

  const sortedProducts = useSortedProducts(products, 'rating')

  return (
    <>
      <LinkBack path={'/products'} />
      <div className="mt-6 space-y-3">
        <PageTitle title={`Produtos na Categoria: ${category}`} />
        <p>Acesse gerencie a sua lista de produtos à venda</p>
      </div>

      <div className="mt-10">
        <ProductsGrid
          products={sortedProducts}
          isLoading={isProductsLoading}
          isError={isProductsError}
        />
      </div>
    </>
  )
}
