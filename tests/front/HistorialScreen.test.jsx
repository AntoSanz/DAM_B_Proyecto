import { describe, test, expect, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import HistorialScreen from '../../frontend/src/components/HistorialScreen/HistorialScreen'

const getHistoryByUserIdMock = vi.fn()

vi.mock('../../frontend/src/data-managers/HistoryDm', () => ({
  getHistoryByUserId: (...args) => getHistoryByUserIdMock(...args),
}))

beforeEach(() => {
  vi.clearAllMocks()
})

describe('HistorialScreen Component', () => {
  test('carga historial del usuario y renderiza filas', async () => {
    getHistoryByUserIdMock.mockResolvedValue([
      { id: 1, order_id: 'A-001', detalles: 'Pedido 1', fecha: '2024-01-15T10:00:00Z' },
    ])

    render(<HistorialScreen onBack={vi.fn()} currentUser={{ id: 7 }} />)

    await waitFor(() => {
      expect(getHistoryByUserIdMock).toHaveBeenCalledWith(7)
      expect(screen.getByText('A-001')).toBeInTheDocument()
      expect(screen.getByText('Pedido 1')).toBeInTheDocument()
    })
  })

  test('si no hay currentUser.id no llama API y muestra vacio', async () => {
    getHistoryByUserIdMock.mockResolvedValue([])
    render(<HistorialScreen onBack={vi.fn()} currentUser={{}} />)

    await waitFor(() => {
      expect(getHistoryByUserIdMock).not.toHaveBeenCalled()
      expect(screen.getByText(/No tienes pedidos en tu historial/i)).toBeInTheDocument()
    })
  })

  test('muestra error si falla la API', async () => {
    getHistoryByUserIdMock.mockRejectedValue(new Error('network'))
    render(<HistorialScreen onBack={vi.fn()} currentUser={{ id: 7 }} />)

    await waitFor(() => {
      expect(screen.getByText(/No se pudo cargar el historial/i)).toBeInTheDocument()
    })
  })

  test('boton volver ejecuta onBack', async () => {
    getHistoryByUserIdMock.mockResolvedValue([])
    const onBack = vi.fn()
    render(<HistorialScreen onBack={onBack} currentUser={{ id: 7 }} />)

    await waitFor(() => {
      expect(getHistoryByUserIdMock).toHaveBeenCalledWith(7)
      expect(screen.getByText(/No tienes pedidos en tu historial/i)).toBeInTheDocument()
    })

    fireEvent.click(screen.getByRole('button', { name: /Volver/i }))
    expect(onBack).toHaveBeenCalledTimes(1)
  })
})
