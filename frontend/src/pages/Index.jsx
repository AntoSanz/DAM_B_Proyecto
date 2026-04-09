import { useEffect, useState } from 'react'
import { t } from '../locales/i18n'
import NavBar from '../components/NavBar/NavBar'
import LogoutConfirmModal from '../components/LogoutConfirmModal/LogoutConfirmModal'
import MainContent from './MainContent'

function Index() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false)
  const [isContactoOpen, setIsContactoOpen] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [showCartScreen, setShowCartScreen] = useState(false);
  const isLoggedIn = Boolean(currentUser)
  const userName = currentUser?.name || currentUser?.email || t('nav.welcomeFallback')
  const sessionKey = 'dam.currentUser'

  useEffect(() => {
    const raw = sessionStorage.getItem(sessionKey)
    if (!raw) {
      return
    }

    try {
      const parsed = JSON.parse(raw)
      if (parsed?.email || parsed?.name) {
        setCurrentUser(parsed)
      }
    } catch (error) {
      sessionStorage.removeItem(sessionKey)
    }
  }, [])

  const handleLogout = () => {
    sessionStorage.removeItem(sessionKey)
    setCurrentUser(null)
    setIsLogoutModalOpen(false)
  }

  const handleLogoutCancel = () => {
    setIsLogoutModalOpen(false)
  }

  const handleLoginSuccess = (user) => {
    const nextUser = {
      email: user?.email || '',
      name: user?.name || '',
    }
    sessionStorage.setItem(sessionKey, JSON.stringify(nextUser))
    setCurrentUser(nextUser)
  }

  // Handler para volver al home desde el carrito
  const handleBackToHome = () => {
    setShowCartScreen(false);
    // Opcional: podrías resetear más estados aquí si quieres limpiar selección
  };

  // Handler para requerir login desde el carrito
  const handleRequireLogin = () => {
    setIsLoginModalOpen(true);
  };

  return (
    <>
      <NavBar
        isLoggedIn={isLoggedIn}
        userName={userName}
        onLoginClick={() => setIsLoginModalOpen(true)}
        onLogoutClick={() => setIsLogoutModalOpen(true)}
        onShowCartScreen={() => setShowCartScreen(true)}
        onContactoClick={() => setIsContactoOpen(true)}
      />
      <MainContent
        isLoginModalOpen={isLoginModalOpen}
        onLoginModalClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
        showCartScreen={showCartScreen}
        onShowCartScreen={() => setShowCartScreen(true)}
        onBackToHome={handleBackToHome}
        isContactoOpen={isContactoOpen}
        onContactoClose={() => setIsContactoOpen(false)}
        isLoggedIn={isLoggedIn}
        onRequireLogin={handleRequireLogin}
      />
      <LogoutConfirmModal
        isOpen={isLogoutModalOpen}
        onCancel={handleLogoutCancel}
        onConfirm={handleLogout}
      />
    </>
  );
}

export default Index;