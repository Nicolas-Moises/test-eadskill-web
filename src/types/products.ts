export type Category = string

export type Rating = {
  rate: number
  count: number
}

export type Product = {
  category: string
  description: string
  id: number
  image: string
  price: number
  title: string
  rating: Rating
}

export interface ProductBase {
  id: number
  title: string
  price: number
  image: string
}

export interface ProductHandlers extends Omit<ProductBase, 'id'> {
  description: string
}

export interface ProductDisplay extends ProductBase {
  category: string
  description: string
}

export interface ProductRating {
  rating: {
    rate: number
    count: number
  }
}

export interface ProductActions {
  onEdit?: (id: number) => void
  onDelete?: (id: number) => void
}

export type ProductCardProps = ProductDisplay &
  ProductRating &
  Partial<ProductActions>
