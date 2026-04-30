import React from 'react'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import CategoriesList from '../CategoriesList/CategoriesList'
import ProductsList from '../ProductsList/ProductsList'
import ProductDetailScreen from '../ProductDetailScreen/ProductDetailScreen'

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
    <CategoriesList
      categories={categories}
      onCategorySelect={onCategorySelect}
    />
  )
}

// MainFlowContent.jsx

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
  // Solo necesitamos saber si hay un producto seleccionado para mostrar su nombre
  const isDetail = !!selectedProductDetail;

  return (
    <div className="index-container">
      {/* El Breadcrumb solo aparece si hemos elegido una categoría */}
      {selectedCategory && (
        <Breadcrumb
          categoryName={selectedCategory.name}
          /* Ponemos false directamente para que NUNCA pinte la palabra "Productos" */
          showProducts={false} 
          /* Solo mostramos el siguiente nivel si estamos viendo el detalle de un juego */
          showProductDetail={isDetail}
          productName={selectedProductDetail?.name}
          onHomeClick={onHomeClick}
          onBackToCategory={onBackToCategory}
          onBackToProducts={onBackToProducts}
        />
      )}

      {/* Este componente es el que decide si dibuja la lista de juegos o la ficha del juego */}
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

export default MainFlowContent
