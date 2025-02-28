/* eslint-disable no-use-before-define */
import { ProductHandlers } from '@/types/products'

import { ProductRepository } from './interfaces'
import { ApiProductRepository } from './products-repository'

// Singleton pattern para o repositório
export class ProductService {
  private static instance: ProductService
  private repository: ProductRepository

  private constructor() {
    this.repository = new ApiProductRepository()
  }

  static getInstance(): ProductService {
    if (!ProductService.instance) {
      ProductService.instance = new ProductService()
    }
    return ProductService.instance
  }

  getRepository(): ProductRepository {
    return this.repository
  }
}

// Exporta funções helper para uso direto
export const productService = ProductService.getInstance()

export const getProducts = () => productService.getRepository().getAll()
export const getProductById = (id: string) =>
  productService.getRepository().getById(id)
export const getProductsByCategory = (category: string) =>
  productService.getRepository().getByCategory(category)
export const createProduct = (data: ProductHandlers) =>
  productService.getRepository().create(data)
export const updateProduct = (id: number, data: ProductHandlers) =>
  productService.getRepository().update(id, data)
export const deleteProduct = (id: number) =>
  productService.getRepository().delete(id)

export const getCategories = () => productService.getRepository().categories()
