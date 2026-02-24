import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import LoginContent from '../src/components/LoginContent/LoginContent'

function buildProps(overrides = {}) {
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

describe('LoginContent Component', () => {
  test('muestra pantalla choose y navega a login/register', () => {
    const props = buildProps({ step: 'choose' })
    render(<LoginContent {...props} />)

    fireEvent.click(screen.getByRole('button', { name: /identificarse/i }))
    fireEvent.click(screen.getByRole('button', { name: /registrarse/i }))

    expect(props.onStepChange).toHaveBeenCalledWith('login')
    expect(props.onStepChange).toHaveBeenCalledWith('register')
  })

  test('muestra campos de login y emite cambios', () => {
    const props = buildProps({ step: 'login' })
    render(<LoginContent {...props} />)

    fireEvent.change(screen.getByLabelText(/correo/i), {
      target: { value: 'admin@test.com' },
    })
    fireEvent.change(screen.getByLabelText(/contraseña/i), {
      target: { value: 'admin123' },
    })

    expect(props.onLoginEmailChange).toHaveBeenCalledWith('admin@test.com')
    expect(props.onLoginPassChange).toHaveBeenCalledWith('admin123')
  })

  test('muestra validación de contraseñas en registro', () => {
    const { rerender } = render(
      <LoginContent
        {...buildProps({
          step: 'register',
          regPass1: 'secret123',
          regPass2: 'otro',
        })}
      />
    )

    expect(screen.getByText('Las contraseñas no coinciden.')).toBeInTheDocument()

    rerender(
      <LoginContent
        {...buildProps({
          step: 'register',
          regPass1: 'secret123',
          regPass2: 'secret123',
        })}
      />
    )

    expect(screen.getByText('Las contraseñas coinciden.')).toBeInTheDocument()
  })

  test('muestra feedback cuando existe mensaje', () => {
    render(
      <LoginContent
        {...buildProps({
          step: 'login',
          feedback: 'Sesión iniciada como admin@test.com.',
        })}
      />
    )

    expect(screen.getByText(/sesión iniciada como admin@test.com/i)).toBeInTheDocument()
  })
})
