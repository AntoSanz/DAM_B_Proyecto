import { describe, test, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Index from '../../frontend/src/pages/Index'

vi.mock('../../frontend/src/components/NavBar/NavBar', () => ({
  default: ({ onLoginClick, onLogoutClick }) => (
    <div>
      <button onClick={onLoginClick}>open-login</button>
      <button onClick={onLogoutClick}>open-logout</button>
    </div>
  ),
}))

vi.mock('../../frontend/src/pages/MainContent', () => ({
  default: ({ isLoginModalOpen, onLoginSuccess }) => (
    <div>
      <span data-testid="login-open-state">{String(isLoginModalOpen)}</span>
      <button onClick={() => onLoginSuccess({ id: 11, email: 'demo@test.com', name: 'Demo' })}>emit-login-success</button>
    </div>
  ),
}))

vi.mock('../../frontend/src/components/LogoutConfirmModal/LogoutConfirmModal', () => ({
  default: ({ isOpen, onCancel, onConfirm }) => (
    <div>
      <span data-testid="logout-open-state">{String(isOpen)}</span>
      <button onClick={onCancel}>cancel-logout</button>
      <button onClick={onConfirm}>confirm-logout</button>
    </div>
  ),
}))

describe('Index Page', () => {
  test('abre login modal al pulsar onLoginClick de NavBar', () => {
    render(<Index />)
    expect(screen.getByTestId('login-open-state').textContent).toBe('false')
    fireEvent.click(screen.getByText('open-login'))
    expect(screen.getByTestId('login-open-state').textContent).toBe('true')
  })

  test('guarda sesion al recibir onLoginSuccess', () => {
    sessionStorage.clear()
    render(<Index />)
    fireEvent.click(screen.getByText('emit-login-success'))

    const raw = sessionStorage.getItem('dam.currentUser')
    expect(raw).toContain('demo@test.com')
    expect(raw).toContain('"id":11')
  })

  test('abre modal logout y al confirmar limpia sesion', () => {
    sessionStorage.setItem('dam.currentUser', JSON.stringify({ id: 11, email: 'demo@test.com' }))
    render(<Index />)

    expect(screen.getByTestId('logout-open-state').textContent).toBe('false')
    fireEvent.click(screen.getByText('open-logout'))
    expect(screen.getByTestId('logout-open-state').textContent).toBe('true')

    fireEvent.click(screen.getByText('confirm-logout'))
    expect(sessionStorage.getItem('dam.currentUser')).toBe(null)
  })
})
