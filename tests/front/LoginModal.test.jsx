import { describe, test, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import LoginModal from '../../frontend/src/components/LoginModal/LoginModal'

const useAuthModalStateMock = vi.fn()

vi.mock('../../frontend/src/hooks/useAuthModalState', () => ({
  default: (...args) => useAuthModalStateMock(...args),
}))

describe('LoginModal Component', () => {
  test('en paso login ejecuta submitLogin y changeStep al pulsar botones', () => {
    const changeStep = vi.fn()
    const submitLogin = vi.fn()
    const closeAuthModal = vi.fn()

    useAuthModalStateMock.mockReturnValue({
      step: 'login',
      loginEmail: '',
      loginPass: '',
      regEmail: '',
      regPass1: '',
      regPass2: '',
      regUser: '',
      isSubmitting: false,
      feedback: '',
      isRegisterSuccessOpen: false,
      setLoginEmail: vi.fn(),
      setLoginPass: vi.fn(),
      setRegEmail: vi.fn(),
      setRegPass1: vi.fn(),
      setRegPass2: vi.fn(),
      setRegUser: vi.fn(),
      changeStep,
      closeAuthModal,
      closeRegisterSuccessModal: vi.fn(),
      submitLogin,
      submitRegister: vi.fn(),
    })

    render(<LoginModal isOpen={true} onClose={vi.fn()} onLoginSuccess={vi.fn()} />)
    fireEvent.click(screen.getByRole('button', { name: 'Loguear' }))
    fireEvent.click(screen.getByRole('button', { name: 'Atras' }))
    fireEvent.click(screen.getByRole('button', { name: 'Cancelar' }))

    expect(submitLogin).toHaveBeenCalledTimes(1)
    expect(changeStep).toHaveBeenCalledWith('choose')
    expect(closeAuthModal).toHaveBeenCalledTimes(1)
  })

  test('en paso register ejecuta submitRegister', () => {
    const submitRegister = vi.fn()
    useAuthModalStateMock.mockReturnValue({
      step: 'register',
      loginEmail: '',
      loginPass: '',
      regEmail: '',
      regPass1: '',
      regPass2: '',
      regUser: '',
      isSubmitting: false,
      feedback: '',
      isRegisterSuccessOpen: false,
      setLoginEmail: vi.fn(),
      setLoginPass: vi.fn(),
      setRegEmail: vi.fn(),
      setRegPass1: vi.fn(),
      setRegPass2: vi.fn(),
      setRegUser: vi.fn(),
      changeStep: vi.fn(),
      closeAuthModal: vi.fn(),
      closeRegisterSuccessModal: vi.fn(),
      submitLogin: vi.fn(),
      submitRegister,
    })

    render(<LoginModal isOpen={true} onClose={vi.fn()} onLoginSuccess={vi.fn()} />)
    fireEvent.click(screen.getByRole('button', { name: 'Registrarse' }))
    expect(submitRegister).toHaveBeenCalledTimes(1)
  })

  test('modal de registro exitoso permite cerrar', () => {
    const closeRegisterSuccessModal = vi.fn()
    useAuthModalStateMock.mockReturnValue({
      step: 'choose',
      loginEmail: '',
      loginPass: '',
      regEmail: '',
      regPass1: '',
      regPass2: '',
      regUser: '',
      isSubmitting: false,
      feedback: '',
      isRegisterSuccessOpen: true,
      setLoginEmail: vi.fn(),
      setLoginPass: vi.fn(),
      setRegEmail: vi.fn(),
      setRegPass1: vi.fn(),
      setRegPass2: vi.fn(),
      setRegUser: vi.fn(),
      changeStep: vi.fn(),
      closeAuthModal: vi.fn(),
      closeRegisterSuccessModal,
      submitLogin: vi.fn(),
      submitRegister: vi.fn(),
    })

    render(<LoginModal isOpen={true} onClose={vi.fn()} onLoginSuccess={vi.fn()} />)
    fireEvent.click(screen.getByRole('button', { name: 'Cerrar' }))
    expect(closeRegisterSuccessModal).toHaveBeenCalled()
  })
})
