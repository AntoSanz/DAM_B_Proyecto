import { vi } from 'vitest'

export function buildLoginContentProps(overrides = {}) {
  return {
    step: 'choose',
    loginEmail: '',
    loginPass: '',
    regEmail: '',
    regPass1: '',
    regPass2: '',
    regUser: '',
    feedback: '',
    onStepChange: vi.fn(),
    onLoginEmailChange: vi.fn(),
    onLoginPassChange: vi.fn(),
    onRegEmailChange: vi.fn(),
    onRegPass1Change: vi.fn(),
    onRegPass2Change: vi.fn(),
    onRegUserChange: vi.fn(),
    ...overrides,
  }
}
