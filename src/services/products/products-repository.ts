import { api } from '@/lib/api'
import { Category, Product, ProductHandlers } from '@/types/products'

import { ProductRepository } from './interfaces'

export class ApiProductRepository implements ProductRepository {
  async getAll(): Promise<Product[]> {
    const response = await api.get('/products?sort=desc')
    return response.data
  }

  async getById(id: string): Promise<Product> {
    const response = await api.get(`/products/${id}`)
    return response.data
  }

  async getByCategory(category: string): Promise<Product[]> {
    const response = await api.get(`/products/category/${category}`)
    return response.data
  }

  async create(data: ProductHandlers): Promise<Product> {
    const response = await api.post('/products', { data })
    return response.data
  }

  async update(id: number, data: ProductHandlers): Promise<Product> {
    const response = await api.put(`/products/${id}`, { data })
    return response.data
  }

  async delete(id: number): Promise<void> {
    await api.delete(`/products/${id}`)
  }

  async categories(): Promise<Category[]> {
    const response = await api.get('/products/categories')
    return response.data
  }
}
