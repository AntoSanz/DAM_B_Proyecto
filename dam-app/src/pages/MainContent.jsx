import React, { useState } from 'react'
import '../App.css'
import { t } from '../locales/i18n'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import CategoriesList from '../components/CategoriesList/CategoriesList'
import ProductsList from '../components/ProductsList/ProductsList'
import ProductDetailScreen from '../components/ProductDetailScreen/ProductDetailScreen'
import categories from '../mocks/categories.json'
import { getProductsByCategory } from '../mocks/api'

function MainContent({ children }) {
  const [selectedProducts, setSelectedProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedProductDetail, setSelectedProductDetail] = useState(null)

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
      {children ? (
        children
      ) : (
        <div className="index-container">
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
