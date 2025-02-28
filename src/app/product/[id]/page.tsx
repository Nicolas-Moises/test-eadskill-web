'use client'

import { useParams } from 'next/navigation'

import { AppLayout, PageTitle } from '@/components/app-layout'
import DeleteProductModal from '@/components/delete-product-modal'
import { ProductItemSkeleton } from '@/components/products/products-skeleton'
import { StarRating } from '@/components/products/rating-stars'
import { Badge } from '@/components/ui/badge'
import { LinkBack } from '@/components/ui/link-back'
import { Skeleton } from '@/components/ui/skeleton'
import { UpdateProductModal } from '@/components/update-product-modal'
import { formatPrice } from '@/helpers/format-price'
import { useGetProductById } from '@/hooks/use-get-products'

export default function Product() {
  const { id } = useParams<{ id: string }>()

  const { data: product, isLoading, isError } = useGetProductById(id)

  if (isError) {
    return <div>Erro</div>
  }

  return (
    <AppLayout>
      <LinkBack path={'/products'} />
      <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-6">
        <div className="space-y-3">
          <PageTitle title="Detalhes do Produto" />
          <p>Gerencie as informações do produto cadastrado</p>
        </div>
        <div className="flex items-center gap-4">
          {isLoading
            ? Array.from({ length: 2 }, (_, index) => (
                <Skeleton key={index} className="h-10 w-24" />
              ))
            : null}
          {product ? (
            <>
              <UpdateProductModal product={product} />

              <DeleteProductModal id={product.id} />
            </>
          ) : null}
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[415px,_1fr]">
        {isLoading ? <ProductItemSkeleton /> : null}
        {product && (
          <>
            <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl bg-white p-6">
              <img
                src={product.image}
                alt={product.title}
                className="h-full w-auto object-contain"
              />
            </div>
            <div>
              <div className="space-y-1">
                <Badge>{product.category}</Badge>
                <h2 className="text-lg font-semibold">{product.title}</h2>
              </div>

              <div className="mt-4 flex items-center gap-5">
                <div className="text-2xl font-bold tracking-tight">
                  {formatPrice(product.price)}
                </div>

                <StarRating
                  count={product.rating.count}
                  rating={product.rating.count}
                />
              </div>

              <p className="mt-4 text-muted-foreground">
                {product.description}
              </p>
            </div>
          </>
        )}
      </div>
    </AppLayout>
  )
}
