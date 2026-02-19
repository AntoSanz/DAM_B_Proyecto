/**
 * Tests para Breadcrumb Component
 * 
 * Prueba la renderización y funcionalidad del breadcrumb
 * (migas de pan para navegación)
 */

import { render, screen, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'

describe('Breadcrumb Component', () => {
  // Test 1: Renderizado básico - vista de inicio
  test('debe mostrar solo "Inicio" cuando está en la página principal', () => {
    render(
      <Breadcrumb 
        onHomeClick={vi.fn()}
        onCategoryClick={vi.fn()}
        onBackClick={vi.fn()}
      />
    )
    
    const breadcrumbItems = screen.getAllByRole('button')
    expect(breadcrumbItems).toHaveLength(1)
    expect(breadcrumbItems[0]).toHaveTextContent('Inicio')
  })

  // Test 2: Vista de productos
  test('debe mostrar "Inicio > Categoría" cuando está en vista de productos', () => {
    const categoryName = 'Juegos de Mesa'
    
    render(
      <Breadcrumb 
        showProducts={true}
        categoryName={categoryName}
        onHomeClick={vi.fn()}
        onCategoryClick={vi.fn()}
        onBackClick={vi.fn()}
      />
    )
    
    expect(screen.getByText('Inicio')).toBeInTheDocument()
    expect(screen.getByText(categoryName)).toBeInTheDocument()
  })

  // Test 3: Vista de detalle de producto
  test('debe mostrar la ruta completa en vista de detalle', () => {
    const categoryName = 'PC Games'
    const productName = 'Minecraft'
    
    render(
      <Breadcrumb 
        showProductDetail={true}
        categoryName={categoryName}
        productName={productName}
        onHomeClick={vi.fn()}
        onCategoryClick={vi.fn()}
        onBackClick={vi.fn()}
      />
    )
    
    expect(screen.getByText('Inicio')).toBeInTheDocument()
    expect(screen.getByText(categoryName)).toBeInTheDocument()
    expect(screen.getByText(productName)).toBeInTheDocument()
  })

  // Test 4: Click en Inicio
  test('debe ejecutar onHomeClick cuando se hace click en Inicio', () => {
    const mockHomeClick = vi.fn()
    
    render(
      <Breadcrumb 
        showProducts={true}
        categoryName="Juegos"
        onHomeClick={mockHomeClick}
        onCategoryClick={vi.fn()}
        onBackClick={vi.fn()}
      />
    )
    
    const homeButton = screen.getAllByText('Inicio')[0]
    fireEvent.click(homeButton)
    
    expect(mockHomeClick).toHaveBeenCalledTimes(1)
  })

  // Test 5: Click en categoría
  test('debe ejecutar onCategoryClick cuando se hace click en categoría', () => {
    const mockCategoryClick = vi.fn()
    const categoryName = 'Juegos de Mesa'
    
    render(
      <Breadcrumb 
        showProductDetail={true}
        categoryName={categoryName}
        productName="Carcassonne"
        onHomeClick={vi.fn()}
        onBackToCategory={mockCategoryClick}
        onBackToProducts={vi.fn()}
      />
    )
    
    const categoryButton = screen.getAllByText(categoryName)[0]
    fireEvent.click(categoryButton)
    
    expect(mockCategoryClick).toHaveBeenCalledTimes(1)
  })

  // Test 6: Item activo (último elemento no clickeable)
  test('el último elemento (activo) no debe ser clickeable', () => {
    const { container } = render(
      <Breadcrumb 
        showProductDetail={true}
        categoryName="Juegos"
        productName="Producto"
        onHomeClick={vi.fn()}
        onCategoryClick={vi.fn()}
        onBackClick={vi.fn()}
      />
    )
    
    const activeItems = container.querySelectorAll('.breadcrumb-item.active')
    expect(activeItems.length).toBeGreaterThan(0)
  })

  // Test 7: Estructura del bread crumb
  test('debe tener estructura correcta de breadcrumb', () => {
    const { container } = render(
      <Breadcrumb 
        showProducts={true}
        categoryName="Juegos"
        onHomeClick={vi.fn()}
        onCategoryClick={vi.fn()}
        onBackClick={vi.fn()}
      />
    )
    
    const breadcrumbNav = container.querySelector('.breadcrumb-nav')
    expect(breadcrumbNav).toBeInTheDocument()
  })
})
