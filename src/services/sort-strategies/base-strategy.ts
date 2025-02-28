import { Product } from '@/types/products'

export interface SortStrategy {
  sort(products: Product[]): Product[]
}
