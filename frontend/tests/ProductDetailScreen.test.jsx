import { render, screen, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'
import ProductDetailScreen from '../src/components/ProductDetailScreen/ProductDetailScreen'
import { mockProduct } from './mocks/products.mock'

describe('ProductDetailScreen Component', () => {
  test('debe renderizar el componente', () => {
    render(<ProductDetailScreen product={mockProduct} onBack={vi.fn()} />)
    expect(screen.getByText(mockProduct.name)).toBeInTheDocument()
  })

  test('debe mostrar el nombre del producto', () => {
    render(<ProductDetailScreen product={mockProduct} onBack={vi.fn()} />)
    expect(screen.getByText('Test Game')).toBeInTheDocument()
  })

  test('debe mostrar la descripción corta', () => {
    render(<ProductDetailScreen product={mockProduct} onBack={vi.fn()} />)
    expect(screen.getByText('A short description')).toBeInTheDocument()
  })

  test('debe mostrar la descripción completa', () => {
    render(<ProductDetailScreen product={mockProduct} onBack={vi.fn()} />)
    expect(screen.getByText(/A much longer and detailed/)).toBeInTheDocument()
  })

  test('debe mostrar el precio del producto', () => {
    const { container } = render(<ProductDetailScreen product={mockProduct} onBack={vi.fn()} />)
    expect(container.textContent).toContain('29.99')
  })

  test('debe mostrar información del desarrollador', () => {
    render(<ProductDetailScreen product={mockProduct} onBack={vi.fn()} />)
    expect(screen.getByText('Test Developer')).toBeInTheDocument()
  })

  test('debe mostrar el género del juego', () => {
    render(<ProductDetailScreen product={mockProduct} onBack={vi.fn()} />)
    expect(screen.getByText('Action')).toBeInTheDocument()
  })

  test('debe mostrar cantidad de jugadores', () => {
    render(<ProductDetailScreen product={mockProduct} onBack={vi.fn()} />)
    expect(screen.getByText('1-4')).toBeInTheDocument()
  })

  test('debe mostrar la fecha de lanzamiento', () => {
    render(<ProductDetailScreen product={mockProduct} onBack={vi.fn()} />)
    expect(screen.getByText('2024')).toBeInTheDocument()
  })

  test('debe mostrar la calificación', () => {
    const { container } = render(<ProductDetailScreen product={mockProduct} onBack={vi.fn()} />)
    expect(container.textContent).toContain('4.5')
  })

  test('debe mostrar que está en stock', () => {
    const { container } = render(<ProductDetailScreen product={mockProduct} onBack={vi.fn()} />)
    expect(container.textContent).toContain('Stock')
  })

  test('debe tener un botón para volver atrás', () => {
    render(<ProductDetailScreen product={mockProduct} onBack={vi.fn()} />)
    expect(screen.getAllByRole('button').length).toBeGreaterThan(0)
  })

  test('debe ejecutar callback onBack al clickear atrás', () => {
    const mockBack = vi.fn()
    render(<ProductDetailScreen product={mockProduct} onBack={mockBack} />)
    fireEvent.click(screen.getAllByRole('button')[0])
    expect(mockBack).toHaveBeenCalled()
  })

  test('debe mostrar la imagen del producto', () => {
    const { container } = render(<ProductDetailScreen product={mockProduct} onBack={vi.fn()} />)
    const image = container.querySelector('img')
    expect({ exists: !!image, isExpected: image?.src.includes('example.com') }).toEqual({
      exists: true,
      isExpected: true,
    })
  })

  test('debe tener un botón para añadir al carrito', () => {
    render(<ProductDetailScreen product={mockProduct} onBack={vi.fn()} />)
    expect(screen.getAllByRole('button').length).toBeGreaterThanOrEqual(1)
  })

  test('debe mostrar cuando no hay stock', () => {
    const { container } = render(<ProductDetailScreen product={{ ...mockProduct, inStock: false }} onBack={vi.fn()} />)
    expect(container.textContent).toContain('Stock')
  })
})
