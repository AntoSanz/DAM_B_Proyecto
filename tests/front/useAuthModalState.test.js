import { describe, test, expect, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import useAuthModalState from '../../frontend/src/hooks/useAuthModalState'

const loginMock = vi.fn()
const registerMock = vi.fn()

vi.mock('../../frontend/src/mocks/api', () => ({
  login: (...args) => loginMock(...args),
  register: (...args) => registerMock(...args),
}))

describe('useAuthModalState Hook', () => {
  test('inicializa con estado choose y campos vacios', () => {
    const onClose = vi.fn()
    const { result } = renderHook(() => 
      useAuthModalState({ isOpen: true, onClose, onLoginSuccess: vi.fn() })
    )
    expect(result.current.step).toBe('choose')
    expect(result.current.loginEmail).toBe('')
    expect(result.current.regUser).toBe('')
  })

  test('changeStep limpia formularios al cambiar de login a register', () => {
    const { result } = renderHook(() => 
      useAuthModalState({ isOpen: true, onClose: vi.fn(), onLoginSuccess: vi.fn() })
    )

    act(() => {
      result.current.setLoginEmail('admin@test.com')
      result.current.setLoginPass('123456')
    })

    act(() => {
      result.current.changeStep('login')
    })

    act(() => {
      result.current.changeStep('register')
    })

    expect(result.current.step).toBe('register')
    expect(result.current.loginEmail).toBe('')
    expect(result.current.loginPass).toBe('')
  })

  test('submitLogin llama login y onLoginSuccess con credenciales', async () => {
    loginMock.mockResolvedValue({ id: 1, email: 'admin@test.com' })
    const onLoginSuccess = vi.fn()

    const { result } = renderHook(() => 
      useAuthModalState({ isOpen: true, onClose: vi.fn(), onLoginSuccess })
    )

    act(() => {
      result.current.setLoginEmail('admin@test.com')
      result.current.setLoginPass('admin123')
    })

    await act(async () => {
      await result.current.submitLogin()
    })

    expect(loginMock).toHaveBeenCalledWith({ email: 'admin@test.com', password: 'admin123' })
    expect(onLoginSuccess).toHaveBeenCalledWith({ id: 1, email: 'admin@test.com' })
  })

  test('submitRegister no llama register cuando passwords no coinciden', async () => {
    registerMock.mockResolvedValue({ id: 2, email: 'new@test.com' })

    const { result } = renderHook(() => 
      useAuthModalState({ isOpen: true, onClose: vi.fn(), onLoginSuccess: vi.fn() })
    )

    await act(async () => {
      result.current.changeStep('register')
      result.current.setRegEmail('new@test.com')
      result.current.setRegUser('newUser')
      result.current.setRegPass1('abc123')
      result.current.setRegPass2('zzz999')
      await result.current.submitRegister()
    })

    expect(registerMock).not.toHaveBeenCalled()
  })
})
