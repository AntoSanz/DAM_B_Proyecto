import React, { useEffect, useMemo, useState } from 'react'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import CategoriesList from '../components/CategoriesList/CategoriesList'
import ComponenteModal from '../components/ComponenteModal/ComponenteModal'
import ProductDetailScreen from '../components/ProductDetailScreen/ProductDetailScreen'
import ProductsList from '../components/ProductsList/ProductsList'
import SectionCard from '../components/SectionCard/SectionCard'
import { t } from '../locales/i18n'
import categoriesData from '../mocks/categories.json'
import boardGames from '../mocks/products/boardGames.json'
import nintendoGames from '../mocks/products/nintendoGames.json'
import pcGames from '../mocks/products/pcGames.json'
import ps5Games from '../mocks/products/ps5Games.json'
import xboxGames from '../mocks/products/xboxGames.json'

const productsByCategory = {
  1: boardGames,
  2: pcGames,
  3: xboxGames,
  4: nintendoGames,
  5: ps5Games
}

const demoItems = [
  { id: 'breadcrumb', labelKey: 'demos.breadcrumb' },
  { id: 'sectioncard', labelKey: 'demos.sectionCard' },
  { id: 'modal', labelKey: 'demos.componentModal' },
  { id: 'categories', labelKey: 'demos.categoriesList' },
  { id: 'products', labelKey: 'demos.productsList' },
  { id: 'product-detail', labelKey: 'demos.productDetailScreen' }
]

const isValidDemoId = (id) => demoItems.some((item) => item.id === id)

function ComponentDemos() {
  const [activeDemo, setActiveDemo] = useState('breadcrumb')
  const [menuQuery, setMenuQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(categoriesData[1])
  const [selectedProduct, setSelectedProduct] = useState(pcGames[0])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const initialQuery = params.get('q')
    const initialComponent = params.get('component')

    if (initialQuery) {
      setMenuQuery(initialQuery)
    }

    if (initialComponent && isValidDemoId(initialComponent)) {
      setActiveDemo(initialComponent)
    }
  }, [])

  const selectedProducts = useMemo(
    () => productsByCategory[selectedCategory?.id] || [],
    [selectedCategory]
  )

  const filteredDemoItems = useMemo(() => {
    const normalizedQuery = menuQuery.trim().toLowerCase()

    if (!normalizedQuery) {
      return demoItems
    }

    return demoItems.filter((item) => t(item.labelKey).toLowerCase().includes(normalizedQuery))
  }, [menuQuery])

  useEffect(() => {
    if (filteredDemoItems.length === 0) {
      return
    }

    const activeStillVisible = filteredDemoItems.some((item) => item.id === activeDemo)

    if (!activeStillVisible) {
      setActiveDemo(filteredDemoItems[0].id)
    }
  }, [activeDemo, filteredDemoItems])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const normalizedQuery = menuQuery.trim()
    const currentQuery = params.get('q') || ''
    const currentComponent = params.get('component') || ''

    if (currentQuery === normalizedQuery && currentComponent === activeDemo) {
      return
    }

    if (normalizedQuery) {
      params.set('q', normalizedQuery)
    } else {
      params.delete('q')
    }

    params.set('component', activeDemo)

    const query = params.toString()
    const nextUrl = `${window.location.pathname}${query ? `?${query}` : ''}${window.location.hash}`
    window.history.replaceState(null, '', nextUrl)
  }, [menuQuery, activeDemo])

  const handleCategorySelect = (category) => {
    const products = productsByCategory[category.id] || []
    setSelectedCategory(category)
    setSelectedProduct(products[0] || null)
  }

  const detailProduct = selectedProduct || selectedProducts[0] || pcGames[0]

  const renderActiveDemo = () => {
    if (activeDemo === 'breadcrumb') {
      return (
        <section>
          <h2 className="mb-3">{t('demos.breadcrumb')}</h2>
          <Breadcrumb
            categoryName={selectedCategory?.name}
            showProducts={selectedProducts.length > 0}
            showProductDetail={!!selectedProduct}
            productName={selectedProduct?.name}
            onHomeClick={() => {
              setSelectedCategory(categoriesData[0])
              setSelectedProduct(productsByCategory[categoriesData[0].id][0])
            }}
            onBackToCategory={() => setSelectedProduct(null)}
          />
        </section>
      )
    }

    if (activeDemo === 'sectioncard') {
      return (
        <section>
          <h2 className="mb-3">{t('demos.sectionCard')}</h2>
          <div className="d-flex justify-content-center">
            <SectionCard
              title={t('demos.sectionCardTitle')}
              subtitle={t('demos.sectionCardSubtitle')}
              text={t('demos.sectionCardText')}
              ctaText={t('demos.sectionCardCta')}
              onCta={() => window.alert(t('demos.sectionCardAlert'))}
            />
          </div>
        </section>
      )
    }

    if (activeDemo === 'modal') {
      return (
        <section>
          <h2 className="mb-3">{t('demos.componentModal')}</h2>
          <ComponenteModal
            title={t('demos.modalTitle')}
            triggerText={t('demos.modalTrigger')}
            closeText={t('products.closeButton')}
            triggerClassName="btn btn-outline-primary"
          >
            <p className="mb-0">{t('demos.modalBody')}</p>
          </ComponenteModal>
        </section>
      )
    }

    if (activeDemo === 'categories') {
      return (
        <section>
          <h2 className="mb-3">{t('demos.categoriesList')}</h2>
          <CategoriesList
            categories={categoriesData}
            onCategorySelect={handleCategorySelect}
          />
        </section>
      )
    }

    if (activeDemo === 'products') {
      return (
        <section>
          <h2 className="mb-3">{t('demos.productsList')}</h2>
          <ProductsList
            products={selectedProducts}
            categoryName={selectedCategory?.name || t('demos.noCategory')}
            onProductSelect={setSelectedProduct}
          />
        </section>
      )
    }

    return (
      <section>
        <h2 className="mb-3">{t('demos.productDetailScreen')}</h2>
        <ProductDetailScreen
          product={detailProduct}
          onBack={() => setSelectedProduct(null)}
        />
      </section>
    )
  }

  return (
    <main className="main-content">
      <div className="index-container">
        <div className="alert alert-info mt-3" role="alert">
          <strong>{t('demos.bannerTitle')}</strong> · {t('demos.bannerText')} <a href="/">/</a>
        </div>

        <div className="row g-4 align-items-start">
          <aside className="col-12 col-lg-3">
            <div className="mb-3">
              <input
                type="search"
                className="form-control"
                placeholder={t('demos.searchPlaceholder')}
                value={menuQuery}
                onChange={(event) => setMenuQuery(event.target.value)}
                aria-label={t('demos.searchAriaLabel')}
              />
            </div>
            <div className="list-group">
              {filteredDemoItems.length > 0 ? (
                filteredDemoItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`list-group-item list-group-item-action ${activeDemo === item.id ? 'active' : ''}`}
                    onClick={() => setActiveDemo(item.id)}
                  >
                    {t(item.labelKey)}
                  </button>
                ))
              ) : (
                <div className="list-group-item text-muted">{t('demos.noMatches')}</div>
              )}
            </div>
          </aside>

          <section className="col-12 col-lg-9">
            {renderActiveDemo()}
          </section>
        </div>
      </div>
    </main>
  )
}

export default ComponentDemos
