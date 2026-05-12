import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import LoginContent from '../../frontend/src/components/LoginContent/LoginContent'
import { buildLoginContentProps } from '../../frontend/tests/mocks/loginContent.mock'

describe('LoginContent Component', () => {
  test('muestra pantalla choose y navega a login/register', () => {
    const props = buildLoginContentProps({ step: 'choose' })
    render(<LoginContent {...props} />)

    fireEvent.click(screen.getByRole('button', { name: /identificarse/i }))
    fireEvent.click(screen.getByRole('button', { name: /registrarse/i }))

    expect(props.onStepChange.mock.calls).toEqual([['login'], ['register']])
  })

  test('muestra campos de login y emite cambios', () => {
    const props = buildLoginContentProps({ step: 'login' })
    render(<LoginContent {...props} />)

    fireEvent.change(screen.getByLabelText(/correo/i), {
      target: { value: 'admin@test.com' },
    })
    fireEvent.change(screen.getByLabelText(/contraseña/i), {
      target: { value: 'admin123' },
    })

    expect({
      email: props.onLoginEmailChange.mock.calls,
      pass: props.onLoginPassChange.mock.calls,
    }).toEqual({ email: [['admin@test.com']], pass: [['admin123']] })
  })

  test('muestra validación de contraseñas en registro', () => {
    const { rerender } = render(
      <LoginContent
        {...buildLoginContentProps({
          step: 'register',
          regPass1: 'secret123',
          regPass2: 'otro',
        })}
      />
    )

    const firstMessage = !!screen.queryByText('Las contraseñas no coinciden.')

    rerender(
      <LoginContent
        {...buildLoginContentProps({
          step: 'register',
          regPass1: 'secret123',
          regPass2: 'secret123',
        })}
      />
    )

    expect({ firstMessage, secondMessage: !!screen.queryByText('Las contraseñas coinciden.') }).toEqual({
      firstMessage: true,
      secondMessage: true,
    })
  })

  test('muestra feedback cuando existe mensaje', () => {
    render(
      <LoginContent
        {...buildLoginContentProps({
          step: 'login',
          feedback: 'Sesión iniciada como admin@test.com.',
        })}
      />
    )

    expect(screen.getByText(/sesión iniciada como admin@test.com/i)).toBeInTheDocument()
  })
})
