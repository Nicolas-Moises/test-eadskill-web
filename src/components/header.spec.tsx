import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import { Header } from './header'

describe('Header', () => {
  it('should render the header component', () => {
    render(<Header />)

    const header = screen.getByRole('banner')
    expect(header).toBeInTheDocument()
  })
})
