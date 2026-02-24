import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { beforeEach, describe, expect, test, vi } from 'vitest'
import MainContent from '../src/pages/MainContent'

const {
  mockGetCategories,
  mockGetProductsByCategory,
  mockLogin,
  mockRegister,
} = vi.hoisted(() => ({
  mockGetCategories: vi.fn(),
  mockGetProductsByCategory: vi.fn(),
  mockLogin: vi.fn(),
  mockRegister: vi.fn(),
}))

vi.mock('../src/mocks/api', () => ({
  getCategories: (...args) => mockGetCategories(...args),
  getProductsByCategory: (...args) => mockGetProductsByCategory(...args),
  login: (...args) => mockLogin(...args),
  register: (...args) => mockRegister(...args),
}))

vi.mock('../src/components/CategoriesList/CategoriesList', () => ({
  default: () => <div data-testid="categories-list">categories</div>,
}))

vi.mock('../src/components/ProductsList/ProductsList', () => ({
  default: () => <div data-testid="products-list">products</div>,
}))

vi.mock('../src/components/ProductDetailScreen/ProductDetailScreen', () => ({
  default: () => <div data-testid="product-detail-screen">detail</div>,
}))

vi.mock('../src/components/Breadcrumb/Breadcrumb', () => ({
  default: () => <div data-testid="breadcrumb">breadcrumb</div>,
}))

describe('MainContent auth flow', () => {
  beforeEach(() => {
    mockGetCategories.mockReset()
    mockGetProductsByCategory.mockReset()
    mockLogin.mockReset()
    mockRegister.mockReset()
    mockGetCategories.mockResolvedValue([])
    mockGetProductsByCategory.mockResolvedValue([])
  })

  test('ejecuta login y muestra feedback de éxito', async () => {
    mockLogin.mockResolvedValue({ email: 'admin@test.com' })
    render(<MainContent isLoginModalOpen onLoginModalClose={vi.fn()} />)

    fireEvent.click(screen.getByRole('button', { name: /identificarse/i }))
    fireEvent.change(screen.getByLabelText(/correo/i), { target: { value: 'admin@test.com' } })
    fireEvent.change(screen.getByLabelText(/contraseña/i), { target: { value: 'admin123' } })
    fireEvent.click(screen.getByRole('button', { name: /loguear/i }))

    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledWith({ email: 'admin@test.com', password: 'admin123' })
    })

    expect(screen.getByText(/sesión iniciada como admin@test.com/i)).toBeInTheDocument()
  })

  test('en registro no envía cuando contraseñas no coinciden', async () => {
    render(<MainContent isLoginModalOpen onLoginModalClose={vi.fn()} />)

    fireEvent.click(screen.getByRole('button', { name: /registrarse/i }))
    fireEvent.change(screen.getByLabelText(/correo electrónico/i), { target: { value: 'nuevo@test.com' } })
    fireEvent.change(screen.getByLabelText(/^contraseña$/i), { target: { value: 'secret123' } })
    fireEvent.change(screen.getByLabelText(/repetir contraseña/i), { target: { value: 'diferente' } })
    fireEvent.change(screen.getByLabelText(/nombre de usuario/i), { target: { value: 'nuevoUser' } })
    fireEvent.click(screen.getByRole('button', { name: /^registrarse$/i }))

    await waitFor(() => {
      expect(mockRegister).not.toHaveBeenCalled()
    })
  })

  test('ejecuta register y muestra feedback de éxito', async () => {
    mockRegister.mockResolvedValue({ email: 'nuevo@test.com' })
    render(<MainContent isLoginModalOpen onLoginModalClose={vi.fn()} />)

    fireEvent.click(screen.getByRole('button', { name: /registrarse/i }))
    fireEvent.change(screen.getByLabelText(/correo electrónico/i), { target: { value: 'nuevo@test.com' } })
    fireEvent.change(screen.getByLabelText(/^contraseña$/i), { target: { value: 'secret123' } })
    fireEvent.change(screen.getByLabelText(/repetir contraseña/i), { target: { value: 'secret123' } })
    fireEvent.change(screen.getByLabelText(/nombre de usuario/i), { target: { value: 'nuevoUser' } })
    fireEvent.click(screen.getByRole('button', { name: /^registrarse$/i }))

    await waitFor(() => {
      expect(mockRegister).toHaveBeenCalledWith({
        email: 'nuevo@test.com',
        password: 'secret123',
        name: 'nuevoUser',
      })
    })

    expect(screen.getByText(/registro completado para nuevo@test.com/i)).toBeInTheDocument()
  })
})
