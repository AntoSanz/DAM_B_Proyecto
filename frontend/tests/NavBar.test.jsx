import { fireEvent, render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import NavBar from '../src/components/NavBar/NavBar'

describe('NavBar Component', () => {
  test('debe renderizar el navbar', () => {
    render(<NavBar onHomeClick={vi.fn()} />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  test('debe mostrar el nombre de la marca', () => {
    render(<NavBar onHomeClick={vi.fn()} />)
    expect(document.querySelector('.navbar-brand')).toBeInTheDocument()
  })

  test('navbar debe tener class sticky o fixed', () => {
    const { container } = render(<NavBar onHomeClick={vi.fn()} />)
    expect(container.querySelector('nav')).toHaveClass('custom-navbar')
  })

  test('debe contener navbar-nav para los enlaces', () => {
    const { container } = render(<NavBar onHomeClick={vi.fn()} />)
    expect(container.querySelector('.navbar-nav')).toBeInTheDocument()
  })

  test('debe tener botón toggler para mobile', () => {
    const { container } = render(<NavBar onHomeClick={vi.fn()} />)
    expect(container.querySelector('.navbar-toggler')).toBeInTheDocument()
  })

  test('debe usar clases de Bootstrap', () => {
    const { container } = render(<NavBar onHomeClick={vi.fn()} />)
    expect(container.querySelector('.navbar')).toBeInTheDocument()
  })

  test('debe tener estructura de navbar expandible para responsive', () => {
    const { container } = render(<NavBar onHomeClick={vi.fn()} />)
    expect(container.querySelector('.navbar-collapse')).toBeInTheDocument()
  })

  test('debe ejecutar onHomeClick al hacer click en la marca', () => {
    const mockClick = vi.fn()
    render(<NavBar onHomeClick={mockClick} />)
    fireEvent.click(document.querySelector('.navbar-brand'))
    expect(mockClick).toHaveBeenCalledTimes(1)
  })

  test('debe aplicar las clases CSS del componente', () => {
    const { container } = render(<NavBar onHomeClick={vi.fn()} />)
    expect(container.querySelector('.custom-navbar')).toBeInTheDocument()
  })
})
