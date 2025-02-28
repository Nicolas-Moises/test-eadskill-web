import { api } from '@/lib/api'
import { Category, Product } from '@/types/products'

export async function getCategories(): Promise<Category[]> {
  const response = await api.get('/products/categories')

  return response.data
}

export interface GetProductParams {
  limit?: number
}

export async function getProducts(): Promise<Product[]> {
  const response = await api.get('/products?sort=desc')

  return response.data
}

export async function getProductsByCategory(
  category: string,
): Promise<Product[]> {
  const response = await api.get(`/products/category/${category}`)

  return response.data
}

export async function getProductById(id: string): Promise<Product> {
  const response = await api.get(`/products/${id}`)

  return response.data
}

interface ProductHandlers {
  title: string
  price: number
  description: string
  image: string
}

export async function updateProduct(id: number, data: ProductHandlers) {
  const response = await api.put(`/products/${id}`, {
    data,
  })

  return response.data
}

export async function createProduct(data: ProductHandlers) {
  const response = await api.post('/products', {
    data,
  })

  return response.data
}

export async function deleteProduct(id: number) {
  const response = await api.delete(`/products/${id}`)

  return response.data
}
