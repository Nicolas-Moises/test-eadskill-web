import { Product } from '@/types/products'

import { SortStrategy } from './base-strategy'

export class RatingStrategy implements SortStrategy {
  sort(products: Product[]): Product[] {
    return products.sort((a, b) => {
      const aHighRating = a.rating.rate > 4.5
      const bHighRating = b.rating.rate > 4.5

      if (aHighRating !== bHighRating) {
        return aHighRating ? -1 : 1
      }
      return b.rating.rate - a.rating.rate
    })
  }
}
