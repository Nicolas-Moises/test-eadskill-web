import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import { StarRating } from './rating-stars'

describe('StarRating', () => {
  it('should render the correct number of stars', () => {
    render(<StarRating rating={3} count={100} />)

    // Check if there are 5 stars
    const stars = screen.getAllByTestId('lucide-icon')
    expect(stars).toHaveLength(5)
  })

  it('should render the correct number of filled stars based on rating', () => {
    render(<StarRating rating={3} count={100} />)

    // Check if the correct number of stars are filled
    const filledStars = screen
      .getAllByTestId('lucide-icon')
      .filter((star) => star.classList.contains('fill-yellow-500'))
    expect(filledStars).toHaveLength(3)
  })

  it('should render the correct count', () => {
    render(<StarRating rating={3} count={100} />)

    // Check if the count is displayed correctly
    const count = screen.getByText('(100)')
    expect(count).toBeInTheDocument()
  })
})
