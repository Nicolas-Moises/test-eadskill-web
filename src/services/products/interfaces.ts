import { Category, Product, ProductHandlers } from '@/types/products'

export interface ProductRepository {
  getAll(): Promise<Product[]>
  getById(id: string): Promise<Product>
  getByCategory(category: string): Promise<Product[]>
  create(data: ProductHandlers): Promise<Product>
  update(id: number, data: ProductHandlers): Promise<Product>
  delete(id: number): Promise<void>
  categories(): Promise<Category[]>
}
