import React, { useState } from 'react'
import '../App.css'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import CategoriesList from '../components/CategoriesList/CategoriesList'
import ProductsList from '../components/ProductsList/ProductsList'
import ProductDetailScreen from '../components/ProductDetailScreen/ProductDetailScreen'
import categories from '../mocks/categories.json'
import { getProductsByCategory } from '../mocks/api'

/**
 * MainContent - Componente principal que gestiona toda la navegación y estado de la aplicación
 * 
 * Este componente es el corazón de la aplicación. Maneja:
 * - La navegación entre pantallas (categorías → productos → detalles)
 * - El estado global de la aplicación
 * - La renderización condicional de componentes según el contexto
 * - La comunicación entre componentes hermanos
 */
function MainContent({ children }) {
  // Estado: Array de productos filtrados por categoría seleccionada
  const [selectedProducts, setSelectedProducts] = useState([])
  
  // Estado: Categoría actualmente seleccionada (contiene id y nombre)
  const [selectedCategory, setSelectedCategory] = useState(null)
  
  // Estado: Producto seleccionado para ver detalles
  const [selectedProductDetail, setSelectedProductDetail] = useState(null)

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
      {children ? (
        // Si hay contenido personalizado, lo muestra en lugar del flujo normal
        children
      ) : (
        // Contenedor principal del índice
        <div className="index-container">
          {/* Breadcrumb: Solo se muestra cuando hay una categoría seleccionada */}
          {selectedCategory && (
            <Breadcrumb
              categoryName={selectedCategory.name}
              showProducts={selectedProducts.length > 0}
              showProductDetail={!!selectedProductDetail}
              productName={selectedProductDetail?.name}
              onHomeClick={handleHomeClick}
              onBackToCategory={handleBackToCategory}
              onBackToProducts={handleBackToProducts}
            />
          )}

          {/* 
            Renderización condicional de pantallas según el estado:
            1. Si hay producto seleccionado → Mostrar detalles
            2. Si hay productos → Mostrar lista de productos
            3. Si no hay nada → Mostrar categorías
          */}
          {selectedProductDetail ? (
            <ProductDetailScreen
              product={selectedProductDetail}
              onBack={handleBackToProducts}
            />
          ) : selectedProducts.length > 0 ? (
            <ProductsList
              products={selectedProducts}
              categoryName={selectedCategory.name}
              onProductSelect={handleProductSelect}
            />
          ) : (
            <CategoriesList
              categories={categories}
              onCategorySelect={handleCategorySelect}
            />
          )}
        </div>
      )}
    </main>
  )
}

export default MainContent
