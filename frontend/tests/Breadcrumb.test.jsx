import { render, screen, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'
import Breadcrumb from '../src/components/Breadcrumb/Breadcrumb'

describe('Breadcrumb Component', () => {
  test('debe mostrar solo "Inicio" cuando está en la página principal', () => {
    render(<Breadcrumb onHomeClick={vi.fn()} onCategoryClick={vi.fn()} onBackClick={vi.fn()} />)
    const breadcrumbItems = screen.getAllByRole('button')
    expect(breadcrumbItems).toHaveLength(1)
    expect(breadcrumbItems[0]).toHaveTextContent('Inicio')
  })

  test('debe mostrar "Inicio > Categoría" cuando está en vista de productos', () => {
    const categoryName = 'Juegos de Mesa'
    render(<Breadcrumb showProducts={true} categoryName={categoryName} onHomeClick={vi.fn()} onCategoryClick={vi.fn()} onBackClick={vi.fn()} />)
    expect(screen.getByText('Inicio')).toBeInTheDocument()
    expect(screen.getByText(categoryName)).toBeInTheDocument()
  })

  test('debe mostrar la ruta completa en vista de detalle', () => {
    render(<Breadcrumb showProductDetail={true} categoryName="PC Games" productName="Minecraft" onHomeClick={vi.fn()} onCategoryClick={vi.fn()} onBackClick={vi.fn()} />)
    expect(screen.getByText('Inicio')).toBeInTheDocument()
    expect(screen.getByText('PC Games')).toBeInTheDocument()
    expect(screen.getByText('Minecraft')).toBeInTheDocument()
  })

  test('debe ejecutar onHomeClick cuando se hace click en Inicio', () => {
    const mockHomeClick = vi.fn()
    render(<Breadcrumb showProducts={true} categoryName="Juegos" onHomeClick={mockHomeClick} onCategoryClick={vi.fn()} onBackClick={vi.fn()} />)
    fireEvent.click(screen.getAllByText('Inicio')[0])
    expect(mockHomeClick).toHaveBeenCalledTimes(1)
  })

  test('debe ejecutar onCategoryClick cuando se hace click en categoría', () => {
    const mockCategoryClick = vi.fn()
    render(<Breadcrumb showProductDetail={true} categoryName="Juegos de Mesa" productName="Carcassonne" onHomeClick={vi.fn()} onBackToCategory={mockCategoryClick} onBackToProducts={vi.fn()} />)
    fireEvent.click(screen.getAllByText('Juegos de Mesa')[0])
    expect(mockCategoryClick).toHaveBeenCalledTimes(1)
  })

  test('el último elemento (activo) no debe ser clickeable', () => {
    const { container } = render(<Breadcrumb showProductDetail={true} categoryName="Juegos" productName="Producto" onHomeClick={vi.fn()} onCategoryClick={vi.fn()} onBackClick={vi.fn()} />)
    const activeItems = container.querySelectorAll('.breadcrumb-item.active')
    expect(activeItems.length).toBeGreaterThan(0)
  })

  test('debe tener estructura correcta de breadcrumb', () => {
    const { container } = render(<Breadcrumb showProducts={true} categoryName="Juegos" onHomeClick={vi.fn()} onCategoryClick={vi.fn()} onBackClick={vi.fn()} />)
    expect(container.querySelector('.breadcrumb-nav')).toBeInTheDocument()
  })
})
