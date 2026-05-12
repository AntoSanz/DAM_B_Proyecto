import { describe, test, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import ProductsList from '../../frontend/src/components/ProductsList/ProductsList'

const mockProducts = [
  {
    id: 1,
    name: 'Game 1',
    shortDescription: 'Description 1',
    price: 19.99,
    categoryId: 1
  },
  {
    id: 2,
    name: 'Game 2',
    shortDescription: 'Description 2',
    price: 29.99,
    categoryId: 1
  }
]

describe('ProductsList Component', () => {
  test('debe renderizar lista de productos', () => {
    render(<ProductsList products={mockProducts} categoryName="Test" onProductSelect={vi.fn()} />)
    expect(screen.getByText('Game 1')).toBeInTheDocument()
    expect(screen.getByText('Game 2')).toBeInTheDocument()
  })

  test('debe mostrar nombre y descripción de cada producto', () => {
    render(<ProductsList products={mockProducts} categoryName="Test" onProductSelect={vi.fn()} />)
    expect(screen.getByText('Description 1')).toBeInTheDocument()
    expect(screen.getByText('Description 2')).toBeInTheDocument()
  })

  test('debe mostrar precio de cada producto', () => {
    const { container } = render(<ProductsList products={mockProducts} categoryName="Test" onProductSelect={vi.fn()} />)
    expect(container.textContent).toContain('19.99')
    expect(container.textContent).toContain('29.99')
  })

  test('debe ejecutar callback al seleccionar producto', () => {
    const onProductSelect = vi.fn()
    render(<ProductsList products={mockProducts} categoryName="Test" onProductSelect={onProductSelect} />)
    const buttons = screen.getAllByRole('button')
    fireEvent.click(buttons[0])
    expect(onProductSelect).toHaveBeenCalledWith(mockProducts[0])
  })

  test('debe mostrar botones para cada producto', () => {
    render(<ProductsList products={mockProducts} categoryName="Test" onProductSelect={vi.fn()} />)
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBeGreaterThanOrEqual(mockProducts.length)
  })
})
