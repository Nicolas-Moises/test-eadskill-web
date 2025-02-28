import { Skeleton } from '../ui/skeleton'

export function ProductSkeleton() {
  return (
    <div>
      <Skeleton className="h-56 w-full" />
      <div className="mt-2">
        <Skeleton className="mb-2 h-5 w-28" />
        <Skeleton className="mb-6 h-6 w-full" />

        <div className="flex items-center justify-between gap-4">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-5 w-24" />
        </div>
      </div>
    </div>
  )
}

export function ProductItemSkeleton() {
  return (
    <>
      <Skeleton className="aspect-square w-full rounded-xl" />
      <div>
        <div className="space-y-1">
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-7 w-full max-w-md" />
        </div>

        <div className="mt-4 flex items-center gap-3">
          <Skeleton className="h-8 w-24" />
          <Skeleton className="h-5 w-32" />
        </div>
        <Skeleton className="mt-4 h-6 w-full" />
      </div>
    </>
  )
}
