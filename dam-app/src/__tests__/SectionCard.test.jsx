/**
 * Tests para SectionCard Component
 * 
 * Prueba que el componente SectionCard renderice correctamente
 * con todos sus props y comportamientos
 */

import { render, screen, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'
import SectionCard from '../components/SectionCard/SectionCard'

describe('SectionCard Component', () => {
  // Test 1: Renderizado básico
  test('debe renderizar con título y texto por defecto', () => {
    render(<SectionCard />)
    
    const title = screen.getByText('Card title')
    const text = screen.getByText(/Some quick example text/)
    
    expect(title).toBeInTheDocument()
    expect(text).toBeInTheDocument()
  })

  // Test 2: Props personalizados
  test('debe mostrar título y texto personalizados', () => {
    const customTitle = 'Juegos de Mesa'
    const customText = 'Descubre los mejores juegos de mesa'
    
    render(
      <SectionCard 
        title={customTitle}
        text={customText}
      />
    )
    
    expect(screen.getByText(customTitle)).toBeInTheDocument()
    expect(screen.getByText(customText)).toBeInTheDocument()
  })

  // Test 3: Subtítulo
  test('debe mostrar subtítulo cuando se proporciona', () => {
    const subtitle = 'Subtítulo de prueba'
    
    render(
      <SectionCard 
        title="Título"
        subtitle={subtitle}
        text="Texto"
      />
    )
    
    expect(screen.getByText(subtitle)).toBeInTheDocument()
  })

  // Test 4: Botón de acción
  test('debe renderizar botón cuando se proporciona ctaText y onCta', () => {
    const mockClick = vi.fn()
    const buttonText = 'Ver productos'
    
    render(
      <SectionCard 
        title="Título"
        text="Texto"
        ctaText={buttonText}
        onCta={mockClick}
      />
    )
    
    const button = screen.getByRole('button', { name: buttonText })
    expect(button).toBeInTheDocument()
  })

  // Test 5: Evento click del botón
  test('debe ejecutar callback al hacer click en botón', () => {
    const mockClick = vi.fn()
    
    render(
      <SectionCard 
        title="Título"
        text="Texto"
        ctaText="Clickear"
        onCta={mockClick}
      />
    )
    
    const button = screen.getByRole('button')
    fireEvent.click(button)
    
    expect(mockClick).toHaveBeenCalledTimes(1)
  })

  // Test 6: No mostrar botón sin props
  test('no debe renderizar botón si no hay ctaText', () => {
    render(
      <SectionCard 
        title="Título"
        text="Texto"
      />
    )
    
    const buttons = screen.queryAllByRole('button')
    expect(buttons).toHaveLength(0)
  })

  // Test 7: Enlaces
  test('debe renderizar enlaces cuando se proporcionan', () => {
    const links = [
      { href: '#categoria1', text: 'Categoría 1' },
      { href: '#categoria2', text: 'Categoría 2' }
    ]
    
    render(
      <SectionCard 
        title="Título"
        text="Texto"
        links={links}
      />
    )
    
    expect(screen.getByText('Categoría 1')).toBeInTheDocument()
    expect(screen.getByText('Categoría 2')).toBeInTheDocument()
  })

  // Test 8: Clases CSS personalizadas
  test('debe aplicar clases personalizadas', () => {
    const customClass = 'custom-class'
    const { container } = render(
      <SectionCard 
        title="Título"
        text="Texto"
        className={customClass}
      />
    )
    
    const cardElement = container.querySelector(`.${customClass}`)
    expect(cardElement).toBeInTheDocument()
  })

  // Test 9: Ancho personalizado
  test('debe aplicar ancho personalizado', () => {
    const customWidth = '500px'
    const { container } = render(
      <SectionCard 
        title="Título"
        text="Texto"
        width={customWidth}
      />
    )
    
    const card = container.firstChild
    expect(card.style.width).toBe(customWidth)
  })
})
