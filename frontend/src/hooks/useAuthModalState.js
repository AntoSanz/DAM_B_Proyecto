import { useEffect, useState } from 'react'
import { login, register } from '../mocks/api'
import { t } from '../locales/i18n'

function useAuthModalState({ isOpen, onClose, onLoginSuccess }) {
  const [step, setStep] = useState('choose')
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPass, setLoginPass] = useState('')
  const [regEmail, setRegEmail] = useState('')
  const [regPass1, setRegPass1] = useState('')
  const [regPass2, setRegPass2] = useState('')
  const [regUser, setRegUser] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [feedback, setFeedback] = useState('')
  const [isRegisterSuccessOpen, setIsRegisterSuccessOpen] = useState(false)

  const resetLoginForm = () => {
    setLoginEmail('')
    setLoginPass('')
  }

  const resetRegisterForm = () => {
    setRegEmail('')
    setRegPass1('')
    setRegPass2('')
    setRegUser('')
  }

  const resetAll = () => {
    setStep('choose')
    resetLoginForm()
    resetRegisterForm()
    setIsSubmitting(false)
    setFeedback('')
  }

  const closeAuthModal = () => {
    onClose?.()
    resetAll()
  }

  const closeRegisterSuccessModal = () => {
    setIsRegisterSuccessOpen(false)
  }

  const changeStep = (nextStep) => {
    if (step !== nextStep) {
      if (step === 'login') {
        resetLoginForm()
      }

      if (step === 'register') {
        resetRegisterForm()
      }

      setFeedback('')
    }

    setStep(nextStep)
  }

  const passwordsMatch = regPass1.length > 0 && regPass1 === regPass2

  const submitLogin = async () => {
    if (!loginEmail || !loginPass) {
      return
    }

    setIsSubmitting(true)
    setFeedback('')

    try {
      const user = await login({
        email: loginEmail,
        password: loginPass,
      })

      setFeedback(t('login.loginSuccess').replace('{email}', user.email))
      onLoginSuccess?.(user)
      closeAuthModal()
    } catch (error) {
      setFeedback(error.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  const submitRegister = async () => {
    if (!regEmail || !regUser || !passwordsMatch) {
      return
    }

    setIsSubmitting(true)
    setFeedback('')

    try {
      const user = await register({
        email: regEmail,
        password: regPass1,
        name: regUser,
      })

      setIsRegisterSuccessOpen(true)
      onLoginSuccess?.(user)
      closeAuthModal()
    } catch (error) {
      setFeedback(error.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    if (!isOpen) {
      resetAll()
    }
  }, [isOpen])

  return {
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
  }
}

export default useAuthModalState
