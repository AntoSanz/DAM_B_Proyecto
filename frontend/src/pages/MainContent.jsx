import React, { useEffect, useState } from 'react'
import '../App.css'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import CategoriesList from '../components/CategoriesList/CategoriesList'
import ComponenteModal from '../components/ComponenteModal/ComponenteModal'
import LoginContent from '../components/LoginContent/LoginContent'
import ProductsList from '../components/ProductsList/ProductsList'
import ProductDetailScreen from '../components/ProductDetailScreen/ProductDetailScreen'
import { t } from '../locales/i18n'
import { getCategories, getProductsByCategory } from '../mocks/api'

function LoginModal({ isOpen, onClose }) {
  const [step, setStep] = useState('choose')
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPass, setLoginPass] = useState('')
  const [regEmail, setRegEmail] = useState('')
  const [regPass1, setRegPass1] = useState('')
  const [regPass2, setRegPass2] = useState('')
  const [regUser, setRegUser] = useState('')

  const resetAll = () => {
    setStep('choose')
    setLoginEmail('')
    setLoginPass('')
    setRegEmail('')
    setRegPass1('')
    setRegPass2('')
    setRegUser('')
  }

  useEffect(() => {
    if (!isOpen) {
      resetAll()
    }
  }, [isOpen])

  const handleClose = () => {
    onClose?.()
    resetAll()
  }

  const titleByStep = {
    choose: (
      <>
        <i className="bi bi-person-circle me-2"></i>
        Login
      </>
    ),
    login: 'Identificarse',
    register: 'Registrarse'
  }

  const passwordsMatch = regPass1.length > 0 && regPass1 === regPass2

  const footerByStep = {
    choose: (
      <button type="button" className="btn btn-secondary" onClick={handleClose}>
        Cancelar
      </button>
    ),
    login: (
      <>
        <button type="button" className="btn btn-outline-secondary" onClick={() => setStep('choose')}>
          Atrás
        </button>
        <button type="button" className="btn btn-secondary" onClick={handleClose}>
          Cancelar
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            if (!loginEmail || !loginPass) {
              return
            }
            window.alert(`Ejemplo: login con ${loginEmail}`)
          }}
        >
          <i className="bi bi-box-arrow-in-right me-2"></i>
          Loguear
        </button>
      </>
    ),
    register: (
      <>
        <button type="button" className="btn btn-outline-secondary" onClick={() => setStep('choose')}>
          Atrás
        </button>
        <button type="button" className="btn btn-secondary" onClick={handleClose}>
          Cancelar
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            if (!regEmail || !regUser || !passwordsMatch) {
              return
            }
            window.alert(`Ejemplo: registro de ${regUser} (${regEmail})`)
          }}
        >
          <i className="bi bi-person-plus me-2"></i>
          Registrarse
        </button>
      </>
    )
  }

  return (
    <ComponenteModal
      title={titleByStep[step]}
      closeText={t('products.closeButton')}
      showTrigger={false}
      isOpenExternal={isOpen}
      onOpenChange={(nextIsOpen) => {
        if (!nextIsOpen) {
          handleClose()
        }
      }}
      footerContent={footerByStep[step]}
    >
      <LoginContent
        step={step}
        loginEmail={loginEmail}
        loginPass={loginPass}
        regEmail={regEmail}
        regPass1={regPass1}
        regPass2={regPass2}
        regUser={regUser}
        onStepChange={setStep}
        onLoginEmailChange={setLoginEmail}
        onLoginPassChange={setLoginPass}
        onRegEmailChange={setRegEmail}
        onRegPass1Change={setRegPass1}
        onRegPass2Change={setRegPass2}
        onRegUserChange={setRegUser}
      />
    </ComponenteModal>
  )
}

function ContentByState({
  selectedProductDetail,
  selectedProducts,
  selectedCategory,
  categories,
  onBackToProducts,
  onProductSelect,
  onCategorySelect
}) {
  if (selectedProductDetail) {
    return (
      <ProductDetailScreen
        product={selectedProductDetail}
        onBack={onBackToProducts}
      />
    )
  }

  if (selectedProducts.length > 0) {
    return (
      <ProductsList
        products={selectedProducts}
        categoryName={selectedCategory.name}
        onProductSelect={onProductSelect}
      />
    )
  }

  return (
    <>
      <CategoriesList
        categories={categories}
        onCategorySelect={onCategorySelect}
      />
    </>
  )
}

function MainFlowContent({
  selectedCategory,
  selectedProducts,
  selectedProductDetail,
  categories,
  onHomeClick,
  onBackToCategory,
  onBackToProducts,
  onProductSelect,
  onCategorySelect
}) {
  return (
    <div className="index-container">
      {selectedCategory && (
        <Breadcrumb
          categoryName={selectedCategory.name}
          showProducts={selectedProducts.length > 0}
          showProductDetail={!!selectedProductDetail}
          productName={selectedProductDetail?.name}
          onHomeClick={onHomeClick}
          onBackToCategory={onBackToCategory}
          onBackToProducts={onBackToProducts}
        />
      )}

      <ContentByState
        selectedProductDetail={selectedProductDetail}
        selectedProducts={selectedProducts}
        selectedCategory={selectedCategory}
        categories={categories}
        onBackToProducts={onBackToProducts}
        onProductSelect={onProductSelect}
        onCategorySelect={onCategorySelect}
      />
    </div>
  )
}

/**
 * MainContent - Componente principal que gestiona toda la navegación y estado de la aplicación
 * 
 * Este componente es el corazón de la aplicación. Maneja:
 * - La navegación entre pantallas (categorías → productos → detalles)
 * - El estado global de la aplicación
 * - La renderización condicional de componentes según el contexto
 * - La comunicación entre componentes hermanos
 */
function MainContent({ children, isLoginModalOpen = false, onLoginModalClose }) {
  // Estado: Array de productos filtrados por categoría seleccionada
  const [selectedProducts, setSelectedProducts] = useState([])
  
  // Estado: Categoría actualmente seleccionada (contiene id y nombre)
  const [selectedCategory, setSelectedCategory] = useState(null)
  
  // Estado: Producto seleccionado para ver detalles
  const [selectedProductDetail, setSelectedProductDetail] = useState(null)
  const [categories, setCategories] = useState([])

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

  /**
   * Manejador: Se ejecuta cuando el usuario selecciona una categoría
   * - Guarda la categoría seleccionada
   * - Obtiene los productos de esa categoría desde la API mock
   * - Limpia la selección de producto anterior (vuelve a lista)
   */
  const handleCategorySelect = async (category) => {
    setSelectedCategory(category)
    const products = await getProductsByCategory(category.id)
    setSelectedProducts(products)
    setSelectedProductDetail(null)
  }

  /**
   * Manejador: Se ejecuta cuando el usuario selecciona un producto
   * - Guarda el producto seleccionado para mostrar detalles
   */
  const handleProductSelect = (product) => {
    setSelectedProductDetail(product)
  }

  /**
   * Manejador: Se ejecuta cuando el usuario vuelve de detalles a lista de productos
   * - Limpia la selección de producto (vuelve a la lista)
   */
  const handleBackToProducts = () => {
    setSelectedProductDetail(null)
  }

  /**
   * Manejador: Se ejecuta cuando el usuario hace click en la categoría del breadcrumb
   * - Limpia la selección de producto (vuelve a la lista de productos)
   */
  const handleBackToCategory = () => {
    setSelectedProductDetail(null)
  }

  /**
   * Manejador: Se ejecuta cuando el usuario hace click en "Inicio" del breadcrumb
   * - Limpia todos los estados y vuelve a mostrar categorías
   */
  const handleHomeClick = () => {
    setSelectedProducts([])
    setSelectedCategory(null)
    setSelectedProductDetail(null)
  }

  return (
    <main className="main-content">
      <LoginModal isOpen={isLoginModalOpen} onClose={onLoginModalClose} />

      {children || (
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
        />
      )}
    </main>
  )
}

export default MainContent
