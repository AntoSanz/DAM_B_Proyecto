import { describe, test, expect, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import CarritoScreen from '../../frontend/src/components/CarritoScreen/CarritoScreen'

const useCarritoMock = vi.fn()
const createCheckoutMock = vi.fn()

vi.mock('../../frontend/src/data-managers/CarritoDm', () => ({
  useCarrito: () => useCarritoMock(),
  createCheckout: (...args) => createCheckoutMock(...args),
}))

describe('CarritoScreen Component', () => {
  test('muestra estado vacio cuando cart.length=0', () => {
    useCarritoMock.mockReturnValue({
      cart: [],
      totalItems: 0,
      totalPrice: 0,
      removeFromCart: vi.fn(),
      clearCart: vi.fn(),
    })

    render(<CarritoScreen onBack={vi.fn()} onHome={vi.fn()} />)
    expect(screen.getByText('El carrito esta vacio.')).toBeInTheDocument()
  })

  test('quita item al pulsar boton Quitar', () => {
    const removeFromCart = vi.fn()
    useCarritoMock.mockReturnValue({
      cart: [{ id: 1, name: 'Producto 1', price: 10, quantity: 1 }],
      totalItems: 1,
      totalPrice: 10,
      removeFromCart,
      clearCart: vi.fn(),
    })

    render(<CarritoScreen onBack={vi.fn()} onHome={vi.fn()} />)
    fireEvent.click(screen.getByRole('button', { name: 'Quitar' }))
    expect(removeFromCart).toHaveBeenCalledWith(1)
  })

  test('vaciar carrito llama clearCart', () => {
    const clearCart = vi.fn()
    useCarritoMock.mockReturnValue({
      cart: [{ id: 1, name: 'Producto 1', price: 10, quantity: 1 }],
      totalItems: 1,
      totalPrice: 10,
      removeFromCart: vi.fn(),
      clearCart,
    })

    render(<CarritoScreen onBack={vi.fn()} onHome={vi.fn()} />)
    fireEvent.click(screen.getByRole('button', { name: 'Vaciar carrito' }))
    expect(clearCart).toHaveBeenCalledTimes(1)
  })

  test('si no esta logueado, checkout llama onRequireLogin y no createCheckout', async () => {
    createCheckoutMock.mockResolvedValue({ ok: true })
    const onRequireLogin = vi.fn()

    useCarritoMock.mockReturnValue({
      cart: [{ id: 1, name: 'Producto 1', price: 10, quantity: 1 }],
      totalItems: 1,
      totalPrice: 10,
      removeFromCart: vi.fn(),
      clearCart: vi.fn(),
    })

    render(<CarritoScreen onBack={vi.fn()} onHome={vi.fn()} isLoggedIn={false} onRequireLogin={onRequireLogin} />)
    fireEvent.click(screen.getByRole('button', { name: 'Finalizar compra' }))

    await waitFor(() => {
      expect(onRequireLogin).toHaveBeenCalledTimes(1)
      expect(createCheckoutMock).not.toHaveBeenCalled()
    })
  })

  test('si falta currentUser.id en checkout muestra error y pide login', async () => {
    const onRequireLogin = vi.fn()
    useCarritoMock.mockReturnValue({
      cart: [{ id: 1, name: 'Producto 1', price: 10, quantity: 1 }],
      totalItems: 1,
      totalPrice: 10,
      removeFromCart: vi.fn(),
      clearCart: vi.fn(),
    })

    render(
      <CarritoScreen
        onBack={vi.fn()}
        onHome={vi.fn()}
        isLoggedIn={true}
        currentUser={{ email: 'demo@test.com' }}
        onRequireLogin={onRequireLogin}
      />
    )
    fireEvent.click(screen.getByRole('button', { name: 'Finalizar compra' }))

    await waitFor(() => {
      expect(screen.getByText(/Tu sesion no tiene identificador/)).toBeInTheDocument()
      expect(onRequireLogin).toHaveBeenCalledTimes(1)
    })
  })
})
