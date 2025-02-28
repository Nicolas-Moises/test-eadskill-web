import { useMemo } from 'react'

import { SortOption } from '@/components/products/products-sort'
import { ProductSorter } from '@/services/sort-strategies'
import { Product } from '@/types/products'

export function useSortedProducts(
  products: Product[] | undefined,
  sortOrder: SortOption,
) {
  return useMemo(() => {
    if (!products) return []
    return ProductSorter.sort(products, sortOrder)
  }, [products, sortOrder])
}
