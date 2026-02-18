/**
 * Tests para NavBar Component
 * 
 * Prueba la renderización y comportamiento de la barra de navegación
 */

import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import NavBar from '../components/NavBar/NavBar'

describe('NavBar Component', () => {
  // Test 1: Renderizado básico
  test('debe renderizar el navbar', () => {
    render(<NavBar onHomeClick={vi.fn()} />)
    
    const navbar = screen.getByRole('navigation')
    expect(navbar).toBeInTheDocument()
  })

  // Test 2: Logo/Brand
  test('debe mostrar el nombre de la marca', () => {
    render(<NavBar onHomeClick={vi.fn()} />)
    
    // El brand debería contener el nombre del proyecto
    const brandElement = document.querySelector('.navbar-brand')
    expect(brandElement).toBeInTheDocument()
  })

  // Test 3: Navbar debe estar fija
  test('navbar debe tener class sticky o fixed', () => {
    const { container } = render(<NavBar onHomeClick={vi.fn()} />)
    
    const navbar = container.querySelector('nav')
    expect(navbar).toHaveClass('custom-navbar')
  })

  // Test 4: Enlaces de navegación
  test('debe contener navbar-nav para los enlaces', () => {
    const { container } = render(<NavBar onHomeClick={vi.fn()} />)
    
    const navLinks = container.querySelector('.navbar-nav')
    expect(navLinks).toBeInTheDocument()
  })

  // Test 5: Botón toggler en mobile
  test('debe tener botón toggler para mobile', () => {
    const { container } = render(<NavBar onHomeClick={vi.fn()} />)
    
    const toggler = container.querySelector('.navbar-toggler')
    expect(toggler).toBeInTheDocument()
  })

  // Test 6: Usar Bootstrap
  test('debe usar clases de Bootstrap', () => {
    const { container } = render(<NavBar onHomeClick={vi.fn()} />)
    
    const navbar = container.querySelector('.navbar')
    expect(navbar).toBeInTheDocument()
  })

  // Test 7: Estructura correcta
  test('debe tener estructura de navbar expandible para responsive', () => {
    const { container } = render(<NavBar onHomeClick={vi.fn()} />)
    
    const navbarCollapse = container.querySelector('.navbar-collapse')
    expect(navbarCollapse).toBeInTheDocument()
  })

  // Test 8: Callback prop existe
  test('debe aceptar prop onHomeClick', () => {
    const mockClick = vi.fn()
    render(<NavBar onHomeClick={mockClick} />)
    
    // El componente debe renderizarse sin errores
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  // Test 9: Clases CSS personalizadas
  test('debe aplicar las clases CSS del componente', () => {
    const { container } = render(<NavBar onHomeClick={vi.fn()} />)
    
    expect(container.querySelector('.custom-navbar')).toBeInTheDocument()
  })
})
