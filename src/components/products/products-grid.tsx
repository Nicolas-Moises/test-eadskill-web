import { Product } from '@/types/products'

import { ProductCard } from './product-card'
import { ProductsEmpty } from './products-empty'
import { ProductsError } from './products-error'
import { ProductSkeleton } from './products-skeleton'

interface ProductsGridProps {
  products: Product[]
  isLoading: boolean
  isError: boolean
}

export function ProductsGrid({
  products,
  isLoading,
  isError,
}: ProductsGridProps) {
  if (isError) return <ProductsError />

  if (isLoading) {
    return (
      <div className="grid-products">
        {Array.from({ length: 9 }, (_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    )
  }

  return (
    <div className="grid-products">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <ProductsEmpty />
      )}
    </div>
  )
}
