import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { beforeEach, describe, expect, test, vi } from 'vitest'
import MainContent from '../../frontend/src/pages/MainContent'
import {
  mockGetCategories,
  mockGetProductsByCategory,
  mockLogin,
  mockRegister,
  resetApiMocks,
} from '../../frontend/tests/mocks/api.mock'

vi.mock('../../frontend/src/mocks/api', async () => {
  const api = await import('../../frontend/tests/mocks/api.mock')
  return {
    getCategories: (...args) => api.mockGetCategories(...args),
    getProductsByCategory: (...args) => api.mockGetProductsByCategory(...args),
    login: (...args) => api.mockLogin(...args),
    register: (...args) => api.mockRegister(...args),
  }
})

describe('MainContent auth flow', () => {
  beforeEach(() => {
    resetApiMocks()
    mockGetCategories.mockResolvedValue([])
    mockGetProductsByCategory.mockResolvedValue([])
  })

  test('ejecuta login y muestra feedback de éxito', async () => {
    mockLogin.mockResolvedValue({ email: 'admin@test.com' })
    const onLoginModalClose = vi.fn()
    render(<MainContent isLoginModalOpen onLoginModalClose={onLoginModalClose} />)

    fireEvent.click(screen.getByRole('button', { name: /identificarse/i }))
    fireEvent.change(screen.getByLabelText(/correo/i), { target: { value: 'admin@test.com' } })
    fireEvent.change(screen.getByLabelText(/contraseña/i), { target: { value: 'admin123' } })
    fireEvent.click(screen.getByRole('button', { name: /loguear/i }))

    await waitFor(() => {
      expect({
        call: mockLogin.mock.calls[0],
        modalClosed: onLoginModalClose.mock.calls.length > 0,
      }).toEqual({
        call: [{ email: 'admin@test.com', password: 'admin123' }],
        modalClosed: true,
      })
    })
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

  test('ejecuta register y muestra modal de éxito', async () => {
    mockRegister.mockResolvedValue({ email: 'nuevo@test.com' })
    render(<MainContent isLoginModalOpen onLoginModalClose={vi.fn()} />)

    fireEvent.click(screen.getByRole('button', { name: /registrarse/i }))
    fireEvent.change(screen.getByLabelText(/correo electrónico/i), { target: { value: 'nuevo@test.com' } })
    fireEvent.change(screen.getByLabelText(/^contraseña$/i), { target: { value: 'secret123' } })
    fireEvent.change(screen.getByLabelText(/repetir contraseña/i), { target: { value: 'secret123' } })
    fireEvent.change(screen.getByLabelText(/nombre de usuario/i), { target: { value: 'nuevoUser' } })
    fireEvent.click(screen.getByRole('button', { name: /^registrarse$/i }))

    await waitFor(() => {
      expect({
        call: mockRegister.mock.calls[0],
        successModalVisible: !!screen.queryByText(/usuario registrado correctamente/i),
      }).toEqual({
        call: [{
          email: 'nuevo@test.com',
          password: 'secret123',
          name: 'nuevoUser',
        }],
        successModalVisible: true,
      })
    })
  })

  test('en registro limpia feedback de error al volver atrás', async () => {
    mockRegister.mockRejectedValue(new Error('La contraseña debe tener al menos 6 caracteres.'))
    render(<MainContent isLoginModalOpen onLoginModalClose={vi.fn()} />)

    fireEvent.click(screen.getByRole('button', { name: /registrarse/i }))
    fireEvent.change(screen.getByLabelText(/correo electrónico/i), { target: { value: 'nuevo@test.com' } })
    fireEvent.change(screen.getByLabelText(/^contraseña$/i), { target: { value: '12345' } })
    fireEvent.change(screen.getByLabelText(/repetir contraseña/i), { target: { value: '12345' } })
    fireEvent.change(screen.getByLabelText(/nombre de usuario/i), { target: { value: 'nuevoUser' } })
    fireEvent.click(screen.getByRole('button', { name: /^registrarse$/i }))
  })
})
