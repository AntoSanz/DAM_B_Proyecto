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

export default MainFlowContent
