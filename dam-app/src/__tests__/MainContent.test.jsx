import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { beforeEach, describe, expect, test, vi } from 'vitest'
import MainContent from '../pages/MainContent'

const { mockGetProductsByCategory } = vi.hoisted(() => ({
  mockGetProductsByCategory: vi.fn(),
}))

vi.mock('../mocks/api', () => ({
  getProductsByCategory: (...args) => mockGetProductsByCategory(...args),
}))

vi.mock('../components/CategoriesList/CategoriesList', () => ({
  default: ({ onCategorySelect }) => (
    <div data-testid="categories-list">
      <button onClick={() => onCategorySelect({ id: 1, name: 'PC Games' })}>
        select-category
      </button>
    </div>
  ),
}))

vi.mock('../components/ProductsList/ProductsList', () => ({
  default: ({ products, categoryName, onProductSelect }) => (
    <div data-testid="products-list">
      <span data-testid="products-count">{products.length}</span>
      <span data-testid="products-category">{categoryName}</span>
      <button onClick={() => onProductSelect({ id: 10, name: 'Mock Product' })}>
        select-product
      </button>
    </div>
  ),
}))

vi.mock('../components/ProductDetailScreen/ProductDetailScreen', () => ({
  default: ({ product, onBack }) => (
    <div data-testid="product-detail-screen">
      <span data-testid="detail-product-name">{product?.name}</span>
      <button onClick={onBack}>detail-back</button>
    </div>
  ),
}))

vi.mock('../components/Breadcrumb/Breadcrumb', () => ({
  default: ({
    categoryName,
    showProducts,
    showProductDetail,
    productName,
    onHomeClick,
    onBackToCategory,
    onBackToProducts,
  }) => (
    <div data-testid="breadcrumb">
      <span data-testid="breadcrumb-category">{categoryName}</span>
      <span data-testid="breadcrumb-show-products">{String(showProducts)}</span>
      <span data-testid="breadcrumb-show-detail">{String(showProductDetail)}</span>
      <span data-testid="breadcrumb-product-name">{productName || ''}</span>
      <button onClick={onHomeClick}>breadcrumb-home</button>
      <button onClick={onBackToCategory}>breadcrumb-back-category</button>
      <button onClick={onBackToProducts}>breadcrumb-back-products</button>
    </div>
  ),
}))

describe('MainContent Component', () => {
  beforeEach(() => {
    mockGetProductsByCategory.mockReset()
    mockGetProductsByCategory.mockResolvedValue([
      { id: 10, name: 'Mock Product' },
      { id: 11, name: 'Mock Product 2' },
    ])
  })

  test('debe renderizar CategoriesList por defecto', () => {
    render(<MainContent />)

    expect(screen.getByTestId('categories-list')).toBeInTheDocument()
    expect(screen.queryByTestId('products-list')).not.toBeInTheDocument()
    expect(screen.queryByTestId('product-detail-screen')).not.toBeInTheDocument()
    expect(screen.queryByTestId('breadcrumb')).not.toBeInTheDocument()
  })

  test('debe renderizar children cuando se proporcionan', () => {
    render(
      <MainContent>
        <div data-testid="custom-content">custom</div>
      </MainContent>
    )

    expect(screen.getByTestId('custom-content')).toBeInTheDocument()
    expect(screen.queryByTestId('categories-list')).not.toBeInTheDocument()
  })

  test('handleCategorySelect: debe cargar productos y mostrar ProductsList + Breadcrumb', async () => {
    render(<MainContent />)

    fireEvent.click(screen.getByText('select-category'))

    await waitFor(() => {
      expect(mockGetProductsByCategory).toHaveBeenCalledWith(1)
      expect(screen.getByTestId('products-list')).toBeInTheDocument()
      expect(screen.getByTestId('breadcrumb')).toBeInTheDocument()
      expect(screen.getByTestId('products-category')).toHaveTextContent('PC Games')
    })
  })

  test('handleProductSelect: debe mostrar ProductDetailScreen al seleccionar producto', async () => {
    render(<MainContent />)

    fireEvent.click(screen.getByText('select-category'))

    await waitFor(() => expect(screen.getByTestId('products-list')).toBeInTheDocument())
    fireEvent.click(screen.getByText('select-product'))

    expect(screen.getByTestId('product-detail-screen')).toBeInTheDocument()
    expect(screen.getByTestId('detail-product-name')).toHaveTextContent('Mock Product')
    expect(screen.getByTestId('breadcrumb-show-detail')).toHaveTextContent('true')
  })

  test('handleBackToProducts: debe volver de detalle a lista de productos', async () => {
    render(<MainContent />)

    fireEvent.click(screen.getByText('select-category'))
    await waitFor(() => expect(screen.getByTestId('products-list')).toBeInTheDocument())

    fireEvent.click(screen.getByText('select-product'))
    expect(screen.getByTestId('product-detail-screen')).toBeInTheDocument()

    fireEvent.click(screen.getByText('detail-back'))

    expect(screen.getByTestId('products-list')).toBeInTheDocument()
    expect(screen.queryByTestId('product-detail-screen')).not.toBeInTheDocument()
  })

  test('handleBackToCategory: desde breadcrumb debe volver de detalle a lista', async () => {
    render(<MainContent />)

    fireEvent.click(screen.getByText('select-category'))
    await waitFor(() => expect(screen.getByTestId('products-list')).toBeInTheDocument())

    fireEvent.click(screen.getByText('select-product'))
    expect(screen.getByTestId('product-detail-screen')).toBeInTheDocument()

    fireEvent.click(screen.getByText('breadcrumb-back-category'))

    expect(screen.getByTestId('products-list')).toBeInTheDocument()
    expect(screen.queryByTestId('product-detail-screen')).not.toBeInTheDocument()
  })

  test('handleHomeClick: debe resetear estado y volver a categorías', async () => {
    render(<MainContent />)

    fireEvent.click(screen.getByText('select-category'))
    await waitFor(() => expect(screen.getByTestId('products-list')).toBeInTheDocument())

    fireEvent.click(screen.getByText('breadcrumb-home'))

    expect(screen.getByTestId('categories-list')).toBeInTheDocument()
    expect(screen.queryByTestId('products-list')).not.toBeInTheDocument()
    expect(screen.queryByTestId('product-detail-screen')).not.toBeInTheDocument()
    expect(screen.queryByTestId('breadcrumb')).not.toBeInTheDocument()
  })
})
