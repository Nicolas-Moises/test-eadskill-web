import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export type SortOption = 'asc' | 'desc' | 'rating'

interface ProductsSortProps {
  onSort: (option: SortOption) => void
  currentSort: SortOption
}

export function ProductsSort({ onSort, currentSort }: ProductsSortProps) {
  return (
    <Select value={currentSort} onValueChange={onSort}>
      <SelectTrigger className="w-56">
        <SelectValue placeholder="Ordenar por" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="rating">Melhor avaliados</SelectItem>
        <SelectItem value="asc">Menor preço</SelectItem>
        <SelectItem value="desc">Maior preço</SelectItem>
      </SelectContent>
    </Select>
  )
}
