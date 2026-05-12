import { describe, test, expect, beforeEach, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { CarritoProvider, createCheckout, useCarrito } from '../../frontend/src/data-managers/CarritoDm'

function CarritoHarness() {
  const { cart, totalItems, totalPrice, addToCart, removeFromCart, clearCart } = useCarrito()

  return (
    <div>
      <button onClick={() => addToCart({ id: 1, name: 'Game', price: 10, quantity: 2 })}>add</button>
      <button onClick={() => removeFromCart(1)}>remove</button>
      <button onClick={clearCart}>clear</button>
      <span data-testid="cart-size">{cart.length}</span>
      <span data-testid="total-items">{totalItems}</span>
      <span data-testid="total-price">{totalPrice}</span>
    </div>
  )
}

describe('CarritoDm - Data Manager', () => {
  beforeEach(() => {
    localStorage.clear()
    vi.restoreAllMocks()
  })

  test('createCheckout hace POST con payload correcto', async () => {
    const fetchSpy = vi.spyOn(global, 'fetch').mockResolvedValue({
      ok: true,
      json: async () => ({ ok: true }),
    })

    await createCheckout(7, [{ name: 'Game', quantity: 1, price: 10 }])

    expect(fetchSpy).toHaveBeenCalledTimes(1)
    expect(fetchSpy.mock.calls[0][0]).toContain('/checkout')
    expect(fetchSpy.mock.calls[0][1].method).toBe('POST')
    expect(fetchSpy.mock.calls[0][1].body).toContain('"user_id":7')
  })

  test('CarritoProvider expone add/remove/clear y totales', () => {
    render(
      <CarritoProvider>
        <CarritoHarness />
      </CarritoProvider>
    )

    fireEvent.click(screen.getByText('add'))
    expect(screen.getByTestId('cart-size').textContent).toBe('1')
    expect(screen.getByTestId('total-items').textContent).toBe('2')
    expect(screen.getByTestId('total-price').textContent).toBe('20')

    fireEvent.click(screen.getByText('remove'))
    expect(screen.getByTestId('cart-size').textContent).toBe('0')

    fireEvent.click(screen.getByText('add'))
    fireEvent.click(screen.getByText('clear'))
    expect(screen.getByTestId('cart-size').textContent).toBe('0')
  })

  test('useCarrito fuera de provider lanza error', () => {
    const Broken = () => {
      useCarrito()
      return null
    }

    expect(() => render(<Broken />)).toThrow(/CarritoProvider/)
  })

  test('inicializa desde localStorage', () => {
    localStorage.setItem('cart', JSON.stringify([{ id: 10, name: 'Saved', price: 12, quantity: 3 }]))

    render(
      <CarritoProvider>
        <CarritoHarness />
      </CarritoProvider>
    )

    expect(screen.getByTestId('cart-size').textContent).toBe('1')
    expect(screen.getByTestId('total-items').textContent).toBe('3')
    expect(screen.getByTestId('total-price').textContent).toBe('36')
  })
})
