import React from 'react'
import './LoginContent.css'

function LoginContent({
  step,
  loginEmail,
  loginPass,
  regEmail,
  regPass1,
  regPass2,
  regUser,
  onStepChange,
  onLoginEmailChange,
  onLoginPassChange,
  onRegEmailChange,
  onRegPass1Change,
  onRegPass2Change,
  onRegUserChange,
  feedback
}) {
  const hasRegPass2 = regPass2.length > 0
  const passwordsMatch = regPass1.length > 0 && regPass1 === regPass2

  return (
    <div className="login-content">
      {step === 'choose' && (
        <>
          <p className="mb-3">Elige una opción:</p>

          <div className="d-grid gap-2">
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => onStepChange('login')}
            >
              <i className="bi bi-box-arrow-in-right me-2"></i>
              Identificarse
            </button>

            <button
              type="button"
              className="btn btn-outline-success"
              onClick={() => onStepChange('register')}
            >
              <i className="bi bi-person-plus me-2"></i>
              Registrarse
            </button>
          </div>
        </>
      )}

      {step === 'login' && (
        <form>
          <h6 className="mb-3">Identificarse</h6>
          <div className="mb-3">
            <label className="form-label" htmlFor="login-email">Correo</label>
            <input
              id="login-email"
              type="email"
              className="form-control"
              placeholder="usuario@correo.com"
              value={loginEmail}
              onChange={(event) => onLoginEmailChange(event.target.value)}
              required
            />
          </div>
          <div className="mb-0">
            <label className="form-label" htmlFor="login-password">Contraseña</label>
            <input
              id="login-password"
              type="password"
              className="form-control"
              placeholder="••••••••"
              value={loginPass}
              onChange={(event) => onLoginPassChange(event.target.value)}
              required
            />
          </div>
        </form>
      )}

      {step === 'register' && (
        <form>
          <h6 className="mb-3">Registrarse</h6>

          <div className="mb-3">
            <label className="form-label" htmlFor="register-email">Correo electrónico</label>
            <input
              id="register-email"
              type="email"
              className="form-control"
              placeholder="usuario@correo.com"
              value={regEmail}
              onChange={(event) => onRegEmailChange(event.target.value)}
              required
            />
          </div>

          <div className="row g-2">
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="register-password">Contraseña</label>
              <input
                id="register-password"
                type="password"
                className="form-control"
                placeholder="••••••••"
                value={regPass1}
                onChange={(event) => onRegPass1Change(event.target.value)}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="register-password-repeat">Repetir contraseña</label>
              <input
                id="register-password-repeat"
                type="password"
                className={`form-control ${hasRegPass2 ? (passwordsMatch ? 'is-valid' : 'is-invalid') : ''}`}
                placeholder="••••••••"
                value={regPass2}
                onChange={(event) => onRegPass2Change(event.target.value)}
                required
              />
              <div className="form-text">
                {hasRegPass2 ? (passwordsMatch ? 'Las contraseñas coinciden.' : 'Las contraseñas no coinciden.') : ''}
              </div>
            </div>
          </div>

          <div className="mb-0">
            <label className="form-label" htmlFor="register-username">Nombre de usuario</label>
            <input
              id="register-username"
              type="text"
              className="form-control"
              placeholder="miUsuario"
              value={regUser}
              onChange={(event) => onRegUserChange(event.target.value)}
              required
            />
          </div>
        </form>
      )}

      {feedback && <div className="alert alert-info mt-3 mb-0">{feedback}</div>}
    </div>
  )
}

export default LoginContent
