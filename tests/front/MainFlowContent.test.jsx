import { describe, test, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import MainFlowContent from '../../frontend/src/components/MainFlowContent/MainFlowContent'

vi.mock('../../frontend/src/components/Breadcrumb/Breadcrumb', () => ({
  default: ({ onHomeClick }) => <button onClick={onHomeClick}>home-crumb</button>,
}))

vi.mock('../../frontend/src/components/CategoriesList/CategoriesList', () => ({
  default: ({ onCategorySelect }) => <button onClick={() => onCategorySelect({ id: 1, name: 'PC Games' })}>category-list</button>,
}))

vi.mock('../../frontend/src/components/ProductsList/ProductsList', () => ({
  default: ({ onProductSelect }) => <button onClick={() => onProductSelect({ id: 99, name: 'Prod' })}>products-list</button>,
}))

vi.mock('../../frontend/src/components/ProductDetailScreen/ProductDetailScreen', () => ({
  default: ({ onBack }) => <button onClick={onBack}>detail-screen</button>,
}))

describe('MainFlowContent Component', () => {
  test('renderiza CategoriesList cuando no hay categoria ni producto', () => {
    render(
      <MainFlowContent
        selectedCategory={null}
        selectedProducts={[]}
        selectedProductDetail={null}
        categories={[{ id: 1, name: 'PC Games' }]}
        onHomeClick={vi.fn()}
        onBackToCategory={vi.fn()}
        onBackToProducts={vi.fn()}
        onProductSelect={vi.fn()}
        onCategorySelect={vi.fn()}
      />
    )

    expect(screen.getByText('category-list')).toBeInTheDocument()
  })

  test('renderiza ProductsList cuando hay productos y llama onProductSelect', () => {
    const onProductSelect = vi.fn()

    render(
      <MainFlowContent
        selectedCategory={{ id: 1, name: 'PC Games' }}
        selectedProducts={[{ id: 2, name: 'Item' }]}
        selectedProductDetail={null}
        categories={[]}
        onHomeClick={vi.fn()}
        onBackToCategory={vi.fn()}
        onBackToProducts={vi.fn()}
        onProductSelect={onProductSelect}
        onCategorySelect={vi.fn()}
      />
    )

    fireEvent.click(screen.getByText('products-list'))
    expect(onProductSelect).toHaveBeenCalledWith({ id: 99, name: 'Prod' })
  })

  test('renderiza Detail y usa onBackToProducts en boton de volver', () => {
    const onBackToProducts = vi.fn()

    render(
      <MainFlowContent
        selectedCategory={{ id: 1, name: 'PC Games' }}
        selectedProducts={[]}
        selectedProductDetail={{ id: 5, name: 'Detail' }}
        categories={[]}
        onHomeClick={vi.fn()}
        onBackToCategory={vi.fn()}
        onBackToProducts={onBackToProducts}
        onProductSelect={vi.fn()}
        onCategorySelect={vi.fn()}
      />
    )

    fireEvent.click(screen.getByText('detail-screen'))
    expect(onBackToProducts).toHaveBeenCalledTimes(1)
  })
})
