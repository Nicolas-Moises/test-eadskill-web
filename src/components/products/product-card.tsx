import Link from 'next/link'

import { formatPrice } from '@/helpers/format-price'
import { Product } from '@/types/products'

import { Badge } from '../ui/badge'
import { StarRating } from './rating-stars'

interface ProductProps {
  product: Product
}

export function ProductCard({ product }: ProductProps) {
  const { image, category, price, rating, title, id } = product

  const MAX_SUMMARY_LENGTH = 30

  const cutTitle =
    title.length > 30 ? title.slice(0, MAX_SUMMARY_LENGTH) + '...' : title

  return (
    <Link href={`/product/${id}`} className="group flex flex-col">
      <div className="overflow-hidden rounded-xl bg-white p-4">
        <img
          src={image}
          alt=""
          className="h-80 w-full object-contain transition-transform duration-200 group-hover:scale-105"
        />
      </div>
      <div className="mt-2 flex flex-1 flex-col justify-between gap-4">
        <div className="space-y-2">
          <Badge>{category}</Badge>
          <h3 className="font-semibold">{cutTitle}</h3>
        </div>
        <div className="flex items-center justify-between gap-6">
          <div className="text-xl font-bold tracking-tight">
            {formatPrice(price)}
          </div>
          <StarRating count={rating.count} rating={rating.rate} />
        </div>
      </div>
    </Link>
  )
}
