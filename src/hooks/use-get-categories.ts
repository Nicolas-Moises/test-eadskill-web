import { useQuery } from '@tanstack/react-query'

import { categoriesKey } from '@/constants/query-keys'
import { getCategories } from '@/services/products/products'

export function useGetCategories() {
  return useQuery({
    queryKey: categoriesKey.all,
    queryFn: async () => await getCategories(),
    refetchOnWindowFocus: false,
  })
}
