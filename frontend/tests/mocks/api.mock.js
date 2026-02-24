import { vi } from 'vitest'

export const mockGetCategories = vi.fn()
export const mockGetProductsByCategory = vi.fn()
export const mockLogin = vi.fn()
export const mockRegister = vi.fn()

export function resetApiMocks() {
  mockGetCategories.mockReset()
  mockGetProductsByCategory.mockReset()
  mockLogin.mockReset()
  mockRegister.mockReset()
}
