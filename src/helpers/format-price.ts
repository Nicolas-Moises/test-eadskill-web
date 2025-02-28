export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price)
}

export const transformNumberToPrice = (price: number): string => {
  return price.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

export const transformPriceToNumber = (price: string): number => {
  // Remove todos os pontos e substitui vírgula por ponto
  const numberString = price.replace(/\./g, '').replace(',', '.')
  return Number(numberString)
}
