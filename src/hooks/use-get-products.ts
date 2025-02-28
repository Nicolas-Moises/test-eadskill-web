import { useQuery } from '@tanstack/react-query'

import { productsKey } from '@/constants/query-keys'
import {
  getProductById,
  getProducts,
  getProductsByCategory,
} from '@/services/products'

export function useGetProducts() {
  return useQuery({
    queryKey: productsKey.all,
    queryFn: async () => await getProducts(),
    refetchOnWindowFocus: false,
  })
}

export function useGetProductsByCategory(category: string) {
  return useQuery({
    queryKey: productsKey.byCategory(category),
    queryFn: async () => await getProductsByCategory(category),
    refetchOnWindowFocus: false,
  })
}

export function useGetProductById(id: string) {
  return useQuery({
    queryKey: productsKey.byId(id),
    queryFn: async () => await getProductById(id),
    refetchOnWindowFocus: false,
  })
}
