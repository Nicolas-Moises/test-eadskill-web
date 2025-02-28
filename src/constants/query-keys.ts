export const categoriesKey = {
  all: ['categories'],
}

export const productsKey = {
  all: ['products'],
  byCategory: (category: string) => ['products-by-category', category],
  byId: (id: string) => ['product-by-id', id],
}
