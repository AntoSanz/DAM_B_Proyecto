import { render, screen, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'
import SectionCard from '../src/components/SectionCard/SectionCard'

describe('SectionCard Component', () => {
  test('debe renderizar con título y texto por defecto', () => {
    render(<SectionCard />)
    expect({
      hasTitle: !!screen.queryByText('Card title'),
      hasText: !!screen.queryByText(/Some quick example text/),
    }).toEqual({ hasTitle: true, hasText: true })
  })

  test('debe mostrar título y texto personalizados', () => {
    render(<SectionCard title="Juegos de Mesa" text="Descubre los mejores juegos de mesa" />)
    expect({
      hasTitle: !!screen.queryByText('Juegos de Mesa'),
      hasText: !!screen.queryByText('Descubre los mejores juegos de mesa'),
    }).toEqual({ hasTitle: true, hasText: true })
  })

  test('debe mostrar subtítulo cuando se proporciona', () => {
    render(<SectionCard title="Título" subtitle="Subtítulo de prueba" text="Texto" />)
    expect(screen.getByText('Subtítulo de prueba')).toBeInTheDocument()
  })

  test('debe renderizar botón cuando se proporciona ctaText y onCta', () => {
    const mockClick = vi.fn()
    render(<SectionCard title="Título" text="Texto" ctaText="Ver productos" onCta={mockClick} />)
    expect(screen.getByRole('button', { name: 'Ver productos' })).toBeInTheDocument()
  })

  test('debe ejecutar callback al hacer click en botón', () => {
    const mockClick = vi.fn()
    render(<SectionCard title="Título" text="Texto" ctaText="Clickear" onCta={mockClick} />)
    fireEvent.click(screen.getByRole('button'))
    expect(mockClick).toHaveBeenCalledTimes(1)
  })

  test('no debe renderizar botón si no hay ctaText', () => {
    render(<SectionCard title="Título" text="Texto" />)
    expect(screen.queryAllByRole('button')).toHaveLength(0)
  })

  test('debe renderizar enlaces cuando se proporcionan', () => {
    const links = [
      { href: '#categoria1', text: 'Categoría 1' },
      { href: '#categoria2', text: 'Categoría 2' },
    ]
    render(<SectionCard title="Título" text="Texto" links={links} />)
    expect({
      hasFirst: !!screen.queryByText('Categoría 1'),
      hasSecond: !!screen.queryByText('Categoría 2'),
    }).toEqual({ hasFirst: true, hasSecond: true })
  })

  test('debe aplicar clases personalizadas', () => {
    const { container } = render(<SectionCard title="Título" text="Texto" className="custom-class" />)
    expect(container.querySelector('.custom-class')).toBeInTheDocument()
  })

  test('debe aplicar ancho personalizado', () => {
    const { container } = render(<SectionCard title="Título" text="Texto" width="500px" />)
    expect(container.firstChild.style.width).toBe('500px')
  })
})
