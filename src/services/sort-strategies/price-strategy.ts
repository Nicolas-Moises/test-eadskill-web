/* eslint-disable no-useless-constructor */
import { Product } from '@/types/products'

import { SortStrategy } from './base-strategy'

export class PriceStrategy implements SortStrategy {
  constructor(private direction: 'asc' | 'desc') {}

  sort(products: Product[]): Product[] {
    return products.sort((a, b) => {
      return this.direction === 'asc' ? a.price - b.price : b.price - a.price
    })
  }
}
