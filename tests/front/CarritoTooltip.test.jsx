import { describe, test, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import CarritoTooltip from '../../frontend/src/components/CarritoTooltip/CarritoTooltip'

const useCarritoMock = vi.fn()

vi.mock('../../frontend/src/data-managers/CarritoDm', () => ({
  useCarrito: () => useCarritoMock(),
}))

describe('CarritoTooltip Component', () => {
  test('muestra el totalItems actual', () => {
    useCarritoMock.mockReturnValue({ totalItems: 4 })
    render(<CarritoTooltip />)
    expect(screen.getByText('4')).toBeInTheDocument()
  })

  test('incluye texto accesible de carrito', () => {
    useCarritoMock.mockReturnValue({ totalItems: 1 })
    render(<CarritoTooltip />)
    expect(screen.getByText('productos en el carrito')).toBeInTheDocument()
  })

  test('actualiza el badge cuando cambia totalItems', () => {
    useCarritoMock.mockReturnValue({ totalItems: 2 })
    const { rerender } = render(<CarritoTooltip />)
    expect(screen.getByText('2')).toBeInTheDocument()

    useCarritoMock.mockReturnValue({ totalItems: 8 })
    rerender(<CarritoTooltip />)
    expect(screen.getByText('8')).toBeInTheDocument()
  })
})
