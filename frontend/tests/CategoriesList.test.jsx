import { fireEvent, render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import CategoriesList from '../src/components/CategoriesList/CategoriesList'
import { mockCategories } from './mocks/categories.mock'

describe('CategoriesList Component', () => {
  test('debe renderizar todas las categorías recibidas', () => {
    render(<CategoriesList categories={mockCategories} onCategorySelect={vi.fn()} />)
    expect([
      !!screen.queryByText('Juegos de Mesa'),
      !!screen.queryByText('PC Games'),
      !!screen.queryByText('Nintendo'),
    ]).toEqual([true, true, true])
  })

  test('debe renderizar descripción de cada categoría', () => {
    render(<CategoriesList categories={mockCategories} onCategorySelect={vi.fn()} />)
    expect([
      !!screen.queryByText('Estrategia y diversión'),
      !!screen.queryByText('Juegos para ordenador'),
      !!screen.queryByText('Títulos para Nintendo'),
    ]).toEqual([true, true, true])
  })

  test('debe ejecutar onCategorySelect con la categoría correcta al hacer click', () => {
    const onCategorySelect = vi.fn()
    render(<CategoriesList categories={mockCategories} onCategorySelect={onCategorySelect} />)
    const ctaButtons = screen.getAllByRole('button', { name: 'Ver productos' })
    fireEvent.click(ctaButtons[1])
    expect(onCategorySelect.mock.calls).toEqual([[mockCategories[1]]])
  })

  test('debe aplicar layout grid de Bootstrap para cada categoría', () => {
    const { container } = render(<CategoriesList categories={mockCategories} onCategorySelect={vi.fn()} />)
    const cols = container.querySelectorAll('.col-12.col-md-4.d-flex.justify-content-center.mb-3')
    expect({ hasSection: !!container.querySelector('section.row.mt-4'), cols: cols.length }).toEqual({
      hasSection: true,
      cols: mockCategories.length,
    })
  })

  test('debe integrar SectionCard mostrando cards y CTA por categoría', () => {
    const { container } = render(<CategoriesList categories={mockCategories} onCategorySelect={vi.fn()} />)
    expect({
      cards: container.querySelectorAll('.card').length,
      ctas: screen.getAllByRole('button', { name: 'Ver productos' }).length,
    }).toEqual({ cards: mockCategories.length, ctas: mockCategories.length })
  })
})
