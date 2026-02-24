import React from 'react'

export function CategoriesListSelectableMock({ onCategorySelect }) {
  return (
    <div data-testid="categories-list">
      <button onClick={() => onCategorySelect({ id: 1, name: 'PC Games' })}>select-category</button>
    </div>
  )
}

export function CategoriesListSimpleMock() {
  return <div data-testid="categories-list">categories</div>
}

export function ProductsListDetailedMock({ products, categoryName, onProductSelect }) {
  return (
    <div data-testid="products-list">
      <span data-testid="products-count">{products.length}</span>
      <span data-testid="products-category">{categoryName}</span>
      <button onClick={() => onProductSelect({ id: 10, name: 'Mock Product' })}>select-product</button>
    </div>
  )
}

export function ProductsListSimpleMock() {
  return <div data-testid="products-list">products</div>
}

export function ProductDetailScreenMock({ product, onBack }) {
  return (
    <div data-testid="product-detail-screen">
      <span data-testid="detail-product-name">{product?.name}</span>
      <button onClick={onBack}>detail-back</button>
    </div>
  )
}

export function ProductDetailScreenSimpleMock() {
  return <div data-testid="product-detail-screen">detail</div>
}

export function BreadcrumbDetailedMock({
  categoryName,
  showProducts,
  showProductDetail,
  productName,
  onHomeClick,
  onBackToCategory,
  onBackToProducts,
}) {
  return (
    <div data-testid="breadcrumb">
      <span data-testid="breadcrumb-category">{categoryName}</span>
      <span data-testid="breadcrumb-show-products">{String(showProducts)}</span>
      <span data-testid="breadcrumb-show-detail">{String(showProductDetail)}</span>
      <span data-testid="breadcrumb-product-name">{productName || ''}</span>
      <button onClick={onHomeClick}>breadcrumb-home</button>
      <button onClick={onBackToCategory}>breadcrumb-back-category</button>
      <button onClick={onBackToProducts}>breadcrumb-back-products</button>
    </div>
  )
}

export function BreadcrumbSimpleMock() {
  return <div data-testid="breadcrumb">breadcrumb</div>
}
