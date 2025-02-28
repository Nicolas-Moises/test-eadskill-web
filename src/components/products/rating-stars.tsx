import { Star } from 'lucide-react'

import { cn } from '@/lib/utils'

interface StarRatingProps {
  rating: number
  size?: number
  count: number
}

export function StarRating({ rating, size = 20, count }: StarRatingProps) {
  return (
    <div className="flex items-center gap-1">
      <span className="text-xs text-muted-foreground">({count})</span>
      <div className="gap flex items-center">
        {[...Array(5)].map((_, i) => {
          return (
            <div key={i}>
              <Star
                data-testid="lucide-icon"
                size={size}
                className={cn('text-yellow-500', {
                  'fill-yellow-500': i + 1 <= rating,
                })}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
