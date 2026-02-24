import { vi } from 'vitest'

export function mockFetchSuccess(body) {
  return vi.spyOn(globalThis, 'fetch').mockResolvedValue({
    ok: true,
    json: async () => body,
  })
}

export function mockFetchError({ status = 500, message = 'Error inesperado' } = {}) {
  return vi.spyOn(globalThis, 'fetch').mockResolvedValue({
    ok: false,
    status,
    json: async () => ({ message }),
  })
}
