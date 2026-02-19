import { fireEvent, render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import CategoriesList from '../components/CategoriesList/CategoriesList'

describe('CategoriesList Component', () => {
  const mockCategories = [
    { id: 1, name: 'Juegos de Mesa', description: 'Estrategia y diversión' },
    { id: 2, name: 'PC Games', description: 'Juegos para ordenador' },
    { id: 3, name: 'Nintendo', description: 'Títulos para Nintendo' },
  ]

  test('debe renderizar todas las categorías recibidas', () => {
    render(<CategoriesList categories={mockCategories} onCategorySelect={vi.fn()} />)

    expect(screen.getByText('Juegos de Mesa')).toBeInTheDocument()
    expect(screen.getByText('PC Games')).toBeInTheDocument()
    expect(screen.getByText('Nintendo')).toBeInTheDocument()
  })

  test('debe renderizar descripción de cada categoría', () => {
    render(<CategoriesList categories={mockCategories} onCategorySelect={vi.fn()} />)

    expect(screen.getByText('Estrategia y diversión')).toBeInTheDocument()
    expect(screen.getByText('Juegos para ordenador')).toBeInTheDocument()
    expect(screen.getByText('Títulos para Nintendo')).toBeInTheDocument()
  })

  test('debe ejecutar onCategorySelect con la categoría correcta al hacer click', () => {
    const onCategorySelect = vi.fn()
    render(<CategoriesList categories={mockCategories} onCategorySelect={onCategorySelect} />)

    const ctaButtons = screen.getAllByRole('button', { name: 'Ver productos' })
    fireEvent.click(ctaButtons[1])

    expect(onCategorySelect).toHaveBeenCalledTimes(1)
    expect(onCategorySelect).toHaveBeenCalledWith(mockCategories[1])
  })

  test('debe aplicar layout grid de Bootstrap para cada categoría', () => {
    const { container } = render(
      <CategoriesList categories={mockCategories} onCategorySelect={vi.fn()} />
    )

    const section = container.querySelector('section.row.mt-4')
    expect(section).toBeInTheDocument()

    const cols = container.querySelectorAll('.col-12.col-md-4.d-flex.justify-content-center.mb-3')
    expect(cols).toHaveLength(mockCategories.length)
  })

  test('debe integrar SectionCard mostrando cards y CTA por categoría', () => {
    const { container } = render(
      <CategoriesList categories={mockCategories} onCategorySelect={vi.fn()} />
    )

    const cards = container.querySelectorAll('.card')
    const ctaButtons = screen.getAllByRole('button', { name: 'Ver productos' })

    expect(cards).toHaveLength(mockCategories.length)
    expect(ctaButtons).toHaveLength(mockCategories.length)
  })
})
