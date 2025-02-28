'use client'

import { useState } from 'react'

import { useGetProducts } from '@/hooks/use-get-products'

import { Skeleton } from '../ui/skeleton'
import { ProductCard } from './product-card'
import { ProductsEmpty } from './products-empty'
import { ProductsError } from './products-error'
import { ProductSkeleton } from './products-skeleton'
import { ProductsSort, SortOption } from './products-sort'

export function ProductsList() {
  const [sortOrder, setSortOrder] = useState<SortOption>('rating')

  const {
    data: products,
    isLoading: isProductsLoading,
    isError: isProductsError,
  } = useGetProducts()

  // Os parâmetros que podem ser enviados a API de sort ASC e DESC
  // não são referentes ao preço. Criei este algoritmo para realizar o
  // sort no front end para essa listagem, oque não é o ideal.

  const sortedProducts = products
    ? [...products].sort((a, b) => {
        if (sortOrder === 'rating') {
          // First, prioritize products with rating > 4.5
          const aHighRating = a.rating.rate > 4.5
          const bHighRating = b.rating.rate > 4.5

          if (aHighRating !== bHighRating) {
            return aHighRating ? -1 : 1
          }
          // If both products are in the same rating category, sort by rating
          return b.rating.rate - a.rating.rate
        }

        // Existing price sorting logic
        return sortOrder === 'asc' ? a.price - b.price : b.price - a.price
      })
    : []

  if (isProductsError) {
    return <ProductsError />
  }

  if (isProductsLoading) {
    return (
      <>
        <div className="flex flex-col gap-3 pb-8 sm:flex-row sm:items-center sm:justify-end">
          <span className="text-sm font-medium text-muted-foreground">
            Ordenar por:
          </span>
          <Skeleton className="h-10 w-56" />
        </div>
        <div className="grid-products">
          {Array.from(
            {
              length: 9,
            },
            (_, index) => (
              <ProductSkeleton key={index} />
            ),
          )}
        </div>
      </>
    )
  }

  return (
    <>
      <div className="flex flex-col gap-3 pb-8 sm:flex-row sm:items-center sm:justify-end">
        <span className="text-sm font-medium text-muted-foreground">
          Ordenar por:
        </span>
        <ProductsSort currentSort={sortOrder} onSort={setSortOrder} />
      </div>
      <div className="grid-products">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <ProductsEmpty />
        )}
      </div>
    </>
  )
}
