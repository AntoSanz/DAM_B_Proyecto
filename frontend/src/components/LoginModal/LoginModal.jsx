import React from 'react'
import ComponenteModal from '../ComponenteModal/ComponenteModal'
import LoginContent from '../LoginContent/LoginContent'
import { t } from '../../locales/i18n'
import useAuthModalState from '../../hooks/useAuthModalState'

function LoginModal({ isOpen, onClose, onLoginSuccess }) {
  const {
    step,
    loginEmail,
    loginPass,
    regEmail,
    regPass1,
    regPass2,
    regUser,
    isSubmitting,
    feedback,
    isRegisterSuccessOpen,
    setLoginEmail,
    setLoginPass,
    setRegEmail,
    setRegPass1,
    setRegPass2,
    setRegUser,
    changeStep,
    closeAuthModal,
    closeRegisterSuccessModal,
    submitLogin,
    submitRegister,
  } = useAuthModalState({ isOpen, onClose, onLoginSuccess })

  const getModalTitle = () => {
    if (step === 'login') {
      return t('login.identify')
    }

    if (step === 'register') {
      return t('login.register')
    }

    return (
      <>
        <i className="bi bi-person-circle me-2"></i>
        {t('login.title')}
      </>
    )
  }

  const getModalFooter = () => {
    if (step === 'login') {
      return (
        <>
          <button type="button" className="btn btn-outline-secondary" onClick={() => changeStep('choose')}>
            {t('login.back')}
          </button>
          <button type="button" className="btn btn-secondary" onClick={closeAuthModal}>
            {t('login.cancel')}
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={submitLogin}
            disabled={isSubmitting}
          >
            <i className="bi bi-box-arrow-in-right me-2"></i>
            {t('login.submitLogin')}
          </button>
        </>
      )
    }

    if (step === 'register') {
      return (
        <>
          <button type="button" className="btn btn-outline-secondary" onClick={() => changeStep('choose')}>
            {t('login.back')}
          </button>
          <button type="button" className="btn btn-secondary" onClick={closeAuthModal}>
            {t('login.cancel')}
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={submitRegister}
            disabled={isSubmitting}
          >
            <i className="bi bi-person-plus me-2"></i>
            {t('login.submitRegister')}
          </button>
        </>
      )
    }

    return (
      <button type="button" className="btn btn-secondary" onClick={closeAuthModal}>
        {t('login.cancel')}
      </button>
    )
  }

  return (
    <>
      <ComponenteModal
        title={getModalTitle()}
        closeText={t('products.closeButton')}
        showTrigger={false}
        isOpenExternal={isOpen}
        onOpenChange={(nextIsOpen) => {
          if (!nextIsOpen) {
            closeAuthModal()
          }
        }}
        footerContent={getModalFooter()}
      >
        <LoginContent
          step={step}
          loginEmail={loginEmail}
          loginPass={loginPass}
          regEmail={regEmail}
          regPass1={regPass1}
          regPass2={regPass2}
          regUser={regUser}
          onStepChange={changeStep}
          onLoginEmailChange={setLoginEmail}
          onLoginPassChange={setLoginPass}
          onRegEmailChange={setRegEmail}
          onRegPass1Change={setRegPass1}
          onRegPass2Change={setRegPass2}
          onRegUserChange={setRegUser}
          feedback={feedback}
        />
      </ComponenteModal>

      <ComponenteModal
        title={t('login.successTitle')}
        closeText={t('products.closeButton')}
        showTrigger={false}
        isOpenExternal={isRegisterSuccessOpen}
        onOpenChange={(nextIsOpen) => {
          if (!nextIsOpen) {
            closeRegisterSuccessModal()
          }
        }}
        footerContent={(
          <button type="button" className="btn btn-primary" onClick={closeRegisterSuccessModal}>
            {t('products.closeButton')}
          </button>
        )}
      >
        <p className="mb-0">{t('login.successMessage')}</p>
      </ComponenteModal>
    </>
  )
}

export default LoginModal
