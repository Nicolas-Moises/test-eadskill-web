'use client'
import Link from 'next/link'

import { useGetCategories } from '@/hooks/use-get-categories'

import { buttonVariants } from '../ui/button'
import { Skeleton } from '../ui/skeleton'

export function Categories() {
  const {
    data: categories,
    isLoading: isCategoriesLoading,
    isError: isCategoriesError,
  } = useGetCategories()

  if (isCategoriesError) {
    return (
      <p className="text-red-400">Houve um erro ao carregar as categorias</p>
    )
  }

  if (isCategoriesLoading) {
    return (
      <ul className="flex flex-wrap gap-4">
        {Array.from({ length: 5 }, (_, index) => (
          <li key={index}>
            <Skeleton className="h-8 w-20" />
          </li>
        ))}
      </ul>
    )
  }

  return (
    <ul className="flex flex-wrap gap-4">
      {categories
        ? categories.map((category) => (
            <li key={category}>
              <Link
                href={`/products/${category}`}
                className={buttonVariants({
                  variant: 'outline',
                  size: 'sm',
                  className:
                    'capitalize disabled:cursor-not-allowed disabled:opacity-60',
                })}
              >
                {category}
              </Link>
            </li>
          ))
        : null}
    </ul>
  )
}
