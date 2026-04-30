import React, { useEffect, useState } from 'react'
import '../App.css'
import LoginModal from '../components/LoginModal/LoginModal'
import MainFlowContent from '../components/MainFlowContent/MainFlowContent'
import CarritoScreen from '../components/CarritoScreen/CarritoScreen'
import HistorialScreen from '../components/HistorialScreen/HistorialScreen'
import { getCategories, getProductsByCategory } from '../mocks/api'
import Contacto from '../components/Contacto/Contacto'

/**
 * MainContent - Componente principal que gestiona toda la navegación y estado de la aplicación
 *
 * Este componente es el corazón de la aplicación. Maneja:
 * - La navegación entre pantallas (categorías → productos → detalles)
 * - El estado global de la aplicación
 * - La renderización condicional de componentes según el contexto
 * - La comunicación entre componentes hermanos
 */
function MainContent({ children, isLoginModalOpen = false, onLoginModalClose, onLoginSuccess, isContactoOpen, onContactoClose, showCartScreen = false, onShowCartScreen, onBackToHome, isLoggedIn = false, onRequireLogin, showHistorialScreen = false, onBackFromHistorial, currentUser }) {
  const [selectedProducts, setSelectedProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedProductDetail, setSelectedProductDetail] = useState(null)
  const [categories, setCategories] = useState([])
  const [showCart, setShowCart] = useState(false);
  // Permitir control externo (Index) o interno
  const isCartScreen = typeof showCartScreen === 'boolean' ? showCartScreen : showCart;
  const isHistorialScreen = Boolean(showHistorialScreen);
  const handleShowCartScreen = () => {
    if (onShowCartScreen) onShowCartScreen();
    else setShowCart(true);
  };
  const handleHideCartScreen = () => {
    if (onBackToHome) onBackToHome();
    else setShowCart(false);
  };

  useEffect(() => {
    let isMounted = true

    async function loadCategories() {
      try {
        const data = await getCategories()
        if (isMounted) {
          setCategories(data)
        }
      } catch (error) {
        console.error('No se pudieron cargar las categorías:', error)
      }
    }

    loadCategories()

    return () => {
      isMounted = false
    }
  }, [])

  const handleCategorySelect = async (category) => {
    setSelectedCategory(category)
    const products = await getProductsByCategory(category.id)
    setSelectedProducts(products)
    setSelectedProductDetail(null)
  }

  const handleProductSelect = (product) => {
    setSelectedProductDetail(product)
  }

  const handleBackToProducts = () => {
    setSelectedProductDetail(null)
  }

  const handleBackToCategory = () => {
    setSelectedProductDetail(null)
  }

  const handleHomeClick = () => {
    setSelectedProducts([])
    setSelectedCategory(null)
    setSelectedProductDetail(null)
  }

  return (
    <main className="main-content">
      <LoginModal isOpen={isLoginModalOpen} onClose={onLoginModalClose} onLoginSuccess={onLoginSuccess} />
      <Contacto isOpen={isContactoOpen} onClose={onContactoClose} />

      {isHistorialScreen ? (
        <HistorialScreen
          onBack={onBackFromHistorial}
          currentUser={currentUser}
        />
      ) : isCartScreen ? (
        <CarritoScreen 
          onBack={handleHideCartScreen} 
          onHome={handleHomeClick}
          onCloseCartScreen={handleHideCartScreen}
          isLoggedIn={isLoggedIn}
          onRequireLogin={onRequireLogin}
          currentUser={currentUser}
        />
      ) : (
        children || (
          <MainFlowContent
            selectedCategory={selectedCategory}
            selectedProducts={selectedProducts}
            selectedProductDetail={selectedProductDetail}
            categories={categories}
            onHomeClick={handleHomeClick}
            onBackToCategory={handleBackToCategory}
            onBackToProducts={handleBackToProducts}
            onProductSelect={handleProductSelect}
            onCategorySelect={handleCategorySelect}
            onShowCartScreen={handleShowCartScreen}
          />
        )
      )}
    </main>
  )
}

export default MainContent
