import { describe, test, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import LogoutConfirmModal from '../../frontend/src/components/LogoutConfirmModal/LogoutConfirmModal'

describe('LogoutConfirmModal Component', () => {
  test('muestra mensaje y acciones cuando esta abierto', () => {
    render(<LogoutConfirmModal isOpen={true} onCancel={vi.fn()} onConfirm={vi.fn()} />)
    expect(screen.getByText(/Seguro que quieres desconectar/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Cancelar' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Desconectar' })).toBeInTheDocument()
  })

  test('si esta cerrado no renderiza dialogo', () => {
    render(<LogoutConfirmModal isOpen={false} onCancel={vi.fn()} onConfirm={vi.fn()} />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  test('ejecuta callback al confirmar', () => {
    const onConfirm = vi.fn()
    render(<LogoutConfirmModal isOpen={true} onCancel={vi.fn()} onConfirm={onConfirm} />)
    fireEvent.click(screen.getByRole('button', { name: 'Desconectar' }))
    expect(onConfirm).toHaveBeenCalledTimes(1)
  })

  test('ejecuta callback al cancelar', () => {
    const onCancel = vi.fn()
    render(<LogoutConfirmModal isOpen={true} onCancel={onCancel} onConfirm={vi.fn()} />)
    fireEvent.click(screen.getByRole('button', { name: 'Cancelar' }))
    expect(onCancel).toHaveBeenCalledTimes(1)
  })
})
