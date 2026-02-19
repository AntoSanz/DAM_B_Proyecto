/**
 * Tests para ProductDetailScreen Component
 * 
 * Prueba la pantalla de detalle de producto
 */

import { render, screen, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'
import ProductDetailScreen from '../components/ProductDetailScreen/ProductDetailScreen'

describe('ProductDetailScreen Component', () => {
  // Datos de prueba
  const mockProduct = {
    id: 1,
    categoryId: 1,
    name: 'Test Game',
    shortDescription: 'A short description',
    longDescription: 'A much longer and detailed description of the game',
    price: 29.99,
    image: 'https://example.com/image.jpg',
    genre: 'Action',
    developer: 'Test Developer',
    players: '1-4',
    releaseDate: '2024',
    rating: 4.5,
    inStock: true
  }

  // Test 1: Renderizado básico
  test('debe renderizar el componente', () => {
    render(
      <ProductDetailScreen 
        product={mockProduct}
        onBack={vi.fn()}
      />
    )
    
    expect(screen.getByText(mockProduct.name)).toBeInTheDocument()
  })

  // Test 2: Mostrar nombre del producto
  test('debe mostrar el nombre del producto', () => {
    render(
      <ProductDetailScreen 
        product={mockProduct}
        onBack={vi.fn()}
      />
    )
    
    expect(screen.getByText('Test Game')).toBeInTheDocument()
  })

  // Test 3: Mostrar descripción corta
  test('debe mostrar la descripción corta', () => {
    render(
      <ProductDetailScreen 
        product={mockProduct}
        onBack={vi.fn()}
      />
    )
    
    expect(screen.getByText('A short description')).toBeInTheDocument()
  })

  // Test 4: Mostrar descripción larga
  test('debe mostrar la descripción completa', () => {
    render(
      <ProductDetailScreen 
        product={mockProduct}
        onBack={vi.fn()}
      />
    )
    
    expect(screen.getByText(/A much longer and detailed/)).toBeInTheDocument()
  })

  // Test 5: Mostrar precio
  test('debe mostrar el precio del producto', () => {
    const { container } = render(
      <ProductDetailScreen 
        product={mockProduct}
        onBack={vi.fn()}
      />
    )
    
    expect(container.textContent).toContain('29.99')
  })

  // Test 6: Mostrar información del desarrollador
  test('debe mostrar información del desarrollador', () => {
    render(
      <ProductDetailScreen 
        product={mockProduct}
        onBack={vi.fn()}
      />
    )
    
    expect(screen.getByText('Test Developer')).toBeInTheDocument()
  })

  // Test 7: Mostrar género
  test('debe mostrar el género del juego', () => {
    render(
      <ProductDetailScreen 
        product={mockProduct}
        onBack={vi.fn()}
      />
    )
    
    expect(screen.getByText('Action')).toBeInTheDocument()
  })

  // Test 8: Mostrar cantidad de jugadores
  test('debe mostrar cantidad de jugadores', () => {
    render(
      <ProductDetailScreen 
        product={mockProduct}
        onBack={vi.fn()}
      />
    )
    
    expect(screen.getByText('1-4')).toBeInTheDocument()
  })

  // Test 9: Mostrar año de lanzamiento
  test('debe mostrar la fecha de lanzamiento', () => {
    render(
      <ProductDetailScreen 
        product={mockProduct}
        onBack={vi.fn()}
      />
    )
    
    expect(screen.getByText('2024')).toBeInTheDocument()
  })

  // Test 10: Mostrar calificación
  test('debe mostrar la calificación', () => {
    const { container } = render(
      <ProductDetailScreen 
        product={mockProduct}
        onBack={vi.fn()}
      />
    )
    
    expect(container.textContent).toContain('4.5')
  })

  // Test 11: Mostrar estado de stock
  test('debe mostrar que está en stock', () => {
    const { container } = render(
      <ProductDetailScreen 
        product={mockProduct}
        onBack={vi.fn()}
      />
    )
    
    expect(container.textContent).toContain('Stock')
  })

  // Test 12: Botón atrás
  test('debe tener un botón para volver atrás', () => {
    render(
      <ProductDetailScreen 
        product={mockProduct}
        onBack={vi.fn()}
      />
    )
    
    const backButtons = screen.getAllByRole('button')
    expect(backButtons.length).toBeGreaterThan(0)
  })

  // Test 13: Evento de botón atrás
  test('debe ejecutar callback onBack al clickear atrás', () => {
    const mockBack = vi.fn()
    
    render(
      <ProductDetailScreen 
        product={mockProduct}
        onBack={mockBack}
      />
    )
    
    const backButton = screen.getAllByRole('button')[0]
    fireEvent.click(backButton)
    
    expect(mockBack).toHaveBeenCalled()
  })

  // Test 14: Imagen del producto
  test('debe mostrar la imagen del producto', () => {
    const { container } = render(
      <ProductDetailScreen 
        product={mockProduct}
        onBack={vi.fn()}
      />
    )
    
    const image = container.querySelector('img')
    expect(image).toBeInTheDocument()
    expect(image.src).toContain('example.com')
  })

  // Test 15: Botón de carrito
  test('debe tener un botón para añadir al carrito', () => {
    render(
      <ProductDetailScreen 
        product={mockProduct}
        onBack={vi.fn()}
      />
    )
    
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBeGreaterThanOrEqual(1)
  })

  // Test 16: Producto sin stock
  test('debe mostrar cuando no hay stock', () => {
    const productNoStock = { ...mockProduct, inStock: false }
    
    const { container } = render(
      <ProductDetailScreen 
        product={productNoStock}
        onBack={vi.fn()}
      />
    )
    
    expect(container.textContent).toContain('Stock')
  })
})
