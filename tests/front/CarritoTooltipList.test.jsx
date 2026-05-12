import { describe, test, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import CarritoTooltipList from '../../frontend/src/components/CarritoTooltipList/CarritoTooltipList'

const useCarritoMock = vi.fn()

vi.mock('../../frontend/src/data-managers/CarritoDm', () => ({
  useCarrito: () => useCarritoMock(),
}))

describe('CarritoTooltipList Component', () => {
  test('muestra mensaje de carrito vacio', () => {
    useCarritoMock.mockReturnValue({ cart: [] })
    render(<CarritoTooltipList />)
    expect(screen.getByText('El carrito esta vacio.')).toBeInTheDocument()
  })

  test('renderiza items, cantidad y subtotal', () => {
    useCarritoMock.mockReturnValue({
      cart: [
        { id: 1, name: 'Game 1', price: 19.99, quantity: 2 },
        { id: 2, name: 'Game 2', price: 10, quantity: 3 },
      ],
    })

    render(<CarritoTooltipList />)
    expect(screen.getByText('Game 1')).toBeInTheDocument()
    expect(screen.getByText('Game 2')).toBeInTheDocument()
    expect(screen.getByText('x2')).toBeInTheDocument()
    expect(screen.getByText('x3')).toBeInTheDocument()
    expect(screen.getByText(/39.98/)).toBeInTheDocument()
    expect(screen.getByText(/30.00/)).toBeInTheDocument()
  })
})
