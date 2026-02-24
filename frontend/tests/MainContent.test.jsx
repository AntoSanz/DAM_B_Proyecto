import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { beforeEach, describe, expect, test, vi } from 'vitest'
import MainContent from '../src/pages/MainContent'
import {
  mockGetCategories,
  mockGetProductsByCategory,
  mockLogin,
  mockRegister,
  resetApiMocks,
} from './mocks/api.mock'

vi.mock('../src/mocks/api', async () => {
  const api = await import('./mocks/api.mock')
  return {
    getCategories: (...args) => api.mockGetCategories(...args),
    getProductsByCategory: (...args) => api.mockGetProductsByCategory(...args),
    login: (...args) => api.mockLogin(...args),
    register: (...args) => api.mockRegister(...args),
  }
})

vi.mock('../src/components/CategoriesList/CategoriesList', async () => {
  const mocks = await import('./mocks/mainContentComponentMocks')
  return { default: mocks.CategoriesListSelectableMock }
})

vi.mock('../src/components/ProductsList/ProductsList', async () => {
  const mocks = await import('./mocks/mainContentComponentMocks')
  return { default: mocks.ProductsListDetailedMock }
})

vi.mock('../src/components/ProductDetailScreen/ProductDetailScreen', async () => {
  const mocks = await import('./mocks/mainContentComponentMocks')
  return { default: mocks.ProductDetailScreenMock }
})

vi.mock('../src/components/Breadcrumb/Breadcrumb', async () => {
  const mocks = await import('./mocks/mainContentComponentMocks')
  return { default: mocks.BreadcrumbDetailedMock }
})

describe('MainContent Component', () => {
  beforeEach(() => {
    resetApiMocks()
    mockGetCategories.mockResolvedValue([{ id: 1, name: 'PC Games', description: 'Cat mock' }])
    mockGetProductsByCategory.mockResolvedValue([{ id: 10, name: 'Mock Product' }, { id: 11, name: 'Mock Product 2' }])
  })

  test('debe renderizar CategoriesList por defecto', async () => {
    render(<MainContent />)
    await waitFor(() => {
      expect({
        categoriesCalled: mockGetCategories.mock.calls.length > 0,
        hasCategories: !!screen.queryByTestId('categories-list'),
        hasProducts: !!screen.queryByTestId('products-list'),
        hasDetail: !!screen.queryByTestId('product-detail-screen'),
        hasBreadcrumb: !!screen.queryByTestId('breadcrumb'),
      }).toEqual({
        categoriesCalled: true,
        hasCategories: true,
        hasProducts: false,
        hasDetail: false,
        hasBreadcrumb: false,
      })
    })
  })

  test('debe renderizar children cuando se proporcionan', async () => {
    render(<MainContent><div data-testid="custom-content">custom</div></MainContent>)
    await waitFor(() => {
      expect({
        categoriesCalled: mockGetCategories.mock.calls.length > 0,
        hasCustom: !!screen.queryByTestId('custom-content'),
        hasCategories: !!screen.queryByTestId('categories-list'),
      }).toEqual({ categoriesCalled: true, hasCustom: true, hasCategories: false })
    })
  })

  test('handleCategorySelect: debe cargar productos y mostrar ProductsList + Breadcrumb', async () => {
    render(<MainContent />)
    fireEvent.click(screen.getByText('select-category'))
    await waitFor(() => {
      expect({
        call: mockGetProductsByCategory.mock.calls[0],
        hasProducts: !!screen.queryByTestId('products-list'),
        hasBreadcrumb: !!screen.queryByTestId('breadcrumb'),
        categoryText: screen.queryByTestId('products-category')?.textContent,
      }).toEqual({
        call: [1],
        hasProducts: true,
        hasBreadcrumb: true,
        categoryText: 'PC Games',
      })
    })
  })

  test('handleProductSelect: debe mostrar ProductDetailScreen al seleccionar producto', async () => {
    render(<MainContent />)
    fireEvent.click(screen.getByText('select-category'))
    await waitFor(() => expect(screen.getByTestId('products-list')).toBeInTheDocument())
    fireEvent.click(screen.getByText('select-product'))
    expect({
      hasDetail: !!screen.queryByTestId('product-detail-screen'),
      productName: screen.queryByTestId('detail-product-name')?.textContent,
      detailFlag: screen.queryByTestId('breadcrumb-show-detail')?.textContent,
    }).toEqual({ hasDetail: true, productName: 'Mock Product', detailFlag: 'true' })
  })

  test('handleBackToProducts: debe volver de detalle a lista de productos', async () => {
    render(<MainContent />)
    fireEvent.click(screen.getByText('select-category'))
    await waitFor(() => expect(screen.getByTestId('products-list')).toBeInTheDocument())
    fireEvent.click(screen.getByText('select-product'))
    fireEvent.click(screen.getByText('detail-back'))
    expect({
      hasProducts: !!screen.queryByTestId('products-list'),
      hasDetail: !!screen.queryByTestId('product-detail-screen'),
    }).toEqual({ hasProducts: true, hasDetail: false })
  })

  test('handleBackToCategory: desde breadcrumb debe volver de detalle a lista', async () => {
    render(<MainContent />)
    fireEvent.click(screen.getByText('select-category'))
    await waitFor(() => expect(screen.getByTestId('products-list')).toBeInTheDocument())
    fireEvent.click(screen.getByText('select-product'))
    fireEvent.click(screen.getByText('breadcrumb-back-category'))
    expect({
      hasProducts: !!screen.queryByTestId('products-list'),
      hasDetail: !!screen.queryByTestId('product-detail-screen'),
    }).toEqual({ hasProducts: true, hasDetail: false })
  })

  test('handleHomeClick: debe resetear estado y volver a categorías', async () => {
    render(<MainContent />)
    fireEvent.click(screen.getByText('select-category'))
    await waitFor(() => expect(screen.getByTestId('products-list')).toBeInTheDocument())
    fireEvent.click(screen.getByText('breadcrumb-home'))
    expect({
      hasCategories: !!screen.queryByTestId('categories-list'),
      hasProducts: !!screen.queryByTestId('products-list'),
      hasDetail: !!screen.queryByTestId('product-detail-screen'),
      hasBreadcrumb: !!screen.queryByTestId('breadcrumb'),
    }).toEqual({
      hasCategories: true,
      hasProducts: false,
      hasDetail: false,
      hasBreadcrumb: false,
    })
  })
})
