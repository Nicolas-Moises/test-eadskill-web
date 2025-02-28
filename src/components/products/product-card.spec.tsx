import { render, screen } from '@testing-library/react'

import { ProductCard } from './product-card'

const mockProduct = {
  id: 1,
  title: 'Test Product',
  price: 99.99,
  description: 'Test description',
  category: 'electronics',
  image: 'test.jpg',
  rating: {
    rate: 4.5,
    count: 100,
  },
}

describe('ProductCard', () => {
  it('should render product information correctly', () => {
    render(<ProductCard product={mockProduct} />)

    expect(screen.getByText('Test Product')).toBeInTheDocument()
    expect(screen.getByText('R$ 99,99')).toBeInTheDocument()
    expect(screen.getByText('electronics')).toBeInTheDocument()
  })

  it('should truncate long titles', () => {
    const longTitleProduct = {
      ...mockProduct,
      title: 'This is a very long product title that should be truncated',
    }

    render(<ProductCard product={longTitleProduct} />)

    const title = screen.getByText(/This is a very long product.../i)
    expect(title).toBeInTheDocument()
  })
})
