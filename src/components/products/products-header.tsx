import { Skeleton } from '@/components/ui/skeleton'

import { ProductsSort, SortOption } from './products-sort'

interface ProductsHeaderProps {
  isLoading: boolean
  currentSort: SortOption
  onSort: (option: SortOption) => void
}

export function ProductsHeader({
  isLoading,
  currentSort,
  onSort,
}: ProductsHeaderProps) {
  return (
    <div className="flex flex-col gap-3 pb-8 sm:flex-row sm:items-center sm:justify-end">
      <span className="text-sm font-medium text-muted-foreground">
        Ordenar por:
      </span>
      {isLoading ? (
        <Skeleton className="h-10 w-56" />
      ) : (
        <ProductsSort currentSort={currentSort} onSort={onSort} />
      )}
    </div>
  )
}
