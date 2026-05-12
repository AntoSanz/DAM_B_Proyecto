import { describe, test, expect, vi } from 'vitest'

describe('HistoryDm - Data Manager', () => {
  test('debe exportar función getHistoryByUserId', async () => {
    const HistoryDm = await import('../../frontend/src/data-managers/HistoryDm.js')
    expect(typeof HistoryDm.getHistoryByUserId).toBe('function')
  })

  test('getHistoryByUserId debe retornar una Promise', async () => {
    const HistoryDm = await import('../../frontend/src/data-managers/HistoryDm.js')
    // Mock fetch para evitar llamadas reales
    global.fetch = vi.fn(() => 
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([])
      })
    )
    
    const result = HistoryDm.getHistoryByUserId(1)
    expect(result instanceof Promise).toBe(true)
  })

  test('debe usar la URL correcta del API', async () => {
    const HistoryDm = await import('../../frontend/src/data-managers/HistoryDm.js')
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([])
      })
    )
    
    HistoryDm.getHistoryByUserId(123)
    
    expect(global.fetch).toHaveBeenCalled()
    const callUrl = global.fetch.mock.calls[0][0]
    expect(callUrl).toContain('history-orders/user/123')
  })

  test('debe lanzar error si la respuesta no es ok', async () => {
    const HistoryDm = await import('../../frontend/src/data-managers/HistoryDm.js')
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: false,
        status: 404
      })
    )
    
    expect(HistoryDm.getHistoryByUserId(999)).rejects.toThrow()
  })

  test('debe tener export default con la función', async () => {
    const HistoryDm = await import('../../frontend/src/data-managers/HistoryDm.js')
    expect(HistoryDm.default).toBeDefined()
    expect(typeof HistoryDm.default.getHistoryByUserId).toBe('function')
  })
})
