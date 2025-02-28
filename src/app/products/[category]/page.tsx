import { Metadata } from 'next'

import { AppLayout } from '@/components/app-layout'
import { CategoryProducts } from '@/components/category-products/category-products'

export const metadata: Metadata = {
  title: 'Produtos por categoria',
  description: 'Esta é uma listagem de produtos por categoria',
}

export default function Category({ params }: { params: { category: string } }) {
  const decodedCategory = decodeURIComponent(params.category)

  return (
    <AppLayout>
      <CategoryProducts category={decodedCategory} />
    </AppLayout>
  )
}
