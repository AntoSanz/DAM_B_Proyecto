import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import Index from '../src/pages/Index'
import LogoutConfirmModal from '../src/components/LogoutConfirmModal/LogoutConfirmModal'

const SESSION_KEY = 'dam.currentUser'

describe('Index logout flow', () => {
  test('borra sessionStorage al confirmar desconexion', async () => {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify({ name: 'Demo User', email: 'demo@test.com' }))

    render(<Index />)

    const logoutButton = screen.getByRole('button', { name: /desconectar/i })
    fireEvent.click(logoutButton)

    const dialog = await screen.findByRole('dialog')
    const confirmButton = within(dialog).getByRole('button', { name: /desconectar/i })
    fireEvent.click(confirmButton)

    expect(sessionStorage.getItem(SESSION_KEY)).toBe(null)
  })
})

describe('LogoutConfirmModal Component', () => {
  test('debe mostrar el modal y manejar cancelar', () => {
    const onCancel = vi.fn()
    const onConfirm = vi.fn()

    render(
      <LogoutConfirmModal
        isOpen
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    )

    expect(screen.getByText(/seguro que quieres desconectar/i)).toBeInTheDocument()

    fireEvent.click(screen.getByText(/cancelar/i))

    expect(onCancel).toHaveBeenCalledTimes(1)
    expect(onConfirm).not.toHaveBeenCalled()
  })

  test('debe ejecutar confirmar al pulsar desconectar', () => {
    const onCancel = vi.fn()
    const onConfirm = vi.fn()

    render(
      <LogoutConfirmModal
        isOpen
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    )

    fireEvent.click(screen.getByRole('button', { name: /desconectar/i }))

    expect(onConfirm).toHaveBeenCalledTimes(1)
    expect(onCancel).not.toHaveBeenCalled()
  })
})
