import React from 'react'
import { t } from '../../locales/i18n'
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
          <p className="mb-3">{t('login.chooseOption')}</p>

          <div className="d-grid gap-2">
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => onStepChange('login')}
            >
              <i className="bi bi-box-arrow-in-right me-2"></i>
              {t('login.identify')}
            </button>

            <button
              type="button"
              className="btn btn-outline-success"
              onClick={() => onStepChange('register')}
            >
              <i className="bi bi-person-plus me-2"></i>
              {t('login.register')}
            </button>
          </div>
        </>
      )}

      {step === 'login' && (
        <form>
          <h6 className="mb-3">{t('login.identify')}</h6>
          <div className="mb-3">
            <label className="form-label" htmlFor="login-email">{t('login.email')}</label>
            <input
              id="login-email"
              type="email"
              className="form-control"
              placeholder={t('login.emailPlaceholder')}
              value={loginEmail}
              onChange={(event) => onLoginEmailChange(event.target.value)}
              required
            />
          </div>
          <div className="mb-0">
            <label className="form-label" htmlFor="login-password">{t('login.password')}</label>
            <input
              id="login-password"
              type="password"
              className="form-control"
              placeholder={t('login.passwordPlaceholder')}
              value={loginPass}
              onChange={(event) => onLoginPassChange(event.target.value)}
              required
            />
          </div>
        </form>
      )}

      {step === 'register' && (
        <form>
          <h6 className="mb-3">{t('login.register')}</h6>

          <div className="mb-3">
            <label className="form-label" htmlFor="register-email">{t('login.emailExtended')}</label>
            <input
              id="register-email"
              type="email"
              className="form-control"
              placeholder={t('login.emailPlaceholder')}
              value={regEmail}
              onChange={(event) => onRegEmailChange(event.target.value)}
              required
            />
          </div>

          <div className="row g-2">
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="register-password">{t('login.password')}</label>
              <input
                id="register-password"
                type="password"
                className="form-control"
                placeholder={t('login.passwordPlaceholder')}
                value={regPass1}
                onChange={(event) => onRegPass1Change(event.target.value)}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="register-password-repeat">{t('login.repeatPassword')}</label>
              <input
                id="register-password-repeat"
                type="password"
                className={`form-control ${hasRegPass2 ? (passwordsMatch ? 'is-valid' : 'is-invalid') : ''}`}
                placeholder={t('login.passwordPlaceholder')}
                value={regPass2}
                onChange={(event) => onRegPass2Change(event.target.value)}
                required
              />
              <div className="form-text">
                {hasRegPass2 ? (passwordsMatch ? t('login.passwordsMatch') : t('login.passwordsDoNotMatch')) : ''}
              </div>
            </div>
          </div>

          <div className="mb-0">
            <label className="form-label" htmlFor="register-username">{t('login.username')}</label>
            <input
              id="register-username"
              type="text"
              className="form-control"
              placeholder={t('login.usernamePlaceholder')}
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
