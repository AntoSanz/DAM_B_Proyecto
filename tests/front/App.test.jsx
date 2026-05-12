import { describe, test, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import App from '../../frontend/src/App'

vi.mock('../../frontend/src/data-managers/CarritoDm', () => ({
  CarritoProvider: ({ children }) => children,
  useCarrito: () => ({ totalItems: 0, cart: [], addToCart: vi.fn() })
}))

vi.mock('../../frontend/src/pages/Index', () => ({
  default: () => <div data-testid="index-page">Index mock</div>,
}))

describe('App Component', () => {
  test('renderiza Index dentro del arbol principal', () => {
    const { container } = render(<App />)
    expect(container.querySelector('[data-testid="index-page"]')).toBeInTheDocument()
  })
})
