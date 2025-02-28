import { SortOption } from '@/components/products/products-sort'
import { Product } from '@/types/products'

import { PriceStrategy } from './price-strategy'
import { RatingStrategy } from './rating-strategy'

export class ProductSorter {
  private static strategies = {
    rating: new RatingStrategy(),
    asc: new PriceStrategy('asc'),
    desc: new PriceStrategy('desc'),
  }

  static sort(products: Product[], strategy: SortOption): Product[] {
    return this.strategies[strategy].sort([...products])
  }
}
