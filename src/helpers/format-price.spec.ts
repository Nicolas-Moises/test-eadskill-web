import {
  formatPrice,
  transformNumberToPrice,
  transformPriceToNumber,
} from './format-price'

describe('Price helpers utilities', () => {
  describe('formatPrice', () => {
    it('should format number to BRL currency', () => {
      const price = 1234.56
      const formattedPrice = formatPrice(price)
      expect(formattedPrice).toBe('R$ 1.234,56')
    })
  })

  describe('transformNumberToPrice', () => {
    it('should transform number to price string', () => {
      expect(transformNumberToPrice(100)).toBe('100,00')
    })
  })

  describe('transformPriceToNumber', () => {
    it('should transform price string to number', () => {
      expect(transformPriceToNumber('100,00')).toBe(100)
    })
  })
})
