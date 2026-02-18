import React, { useState } from 'react'
import '../App.css'
import { t } from '../locales/i18n'
import SectionCard from '../components/SectionCard/SectionCard'
import categories from '../mocks/categories.json'
import { getProductsByCategory } from '../mocks/api'

function MainContent({ children }) {
  const [selectedProducts, setSelectedProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [loadingProducts, setLoadingProducts] = useState(false)

  return (
    <main className="main-content">
      {children ? (
        children
      ) : (
        <div className="index-container">
          <header>
            <h1>{t('welcome.title')}</h1>
            <p>{t('welcome.subtitle')}</p>
          </header>
          <section className="hero">
            <h2>{t('hero.title')}</h2>
            <p>{t('hero.desc')}</p>
          </section>

          <section className="row mt-4">
            {categories.map((cat) => (
              <div key={cat.id} className="col-12 col-md-4 d-flex justify-content-center mb-3">
                <SectionCard
                  title={cat.name}
                  subtitle=""
                  text={cat.description}
                  links={[]}
                  ctaText={t('products.viewButton')}
                  onCta={async () => {
                    setLoadingProducts(true)
                    setSelectedCategory({ id: cat.id, name: cat.name })
                    const filtered = await getProductsByCategory(cat.id)
                    setSelectedProducts(filtered)
                    setLoadingProducts(false)
                  }}
                />
              </div>
            ))}
          </section>

          {selectedProducts.length > 0 && (
            <section className="row mt-4">
              <div className="col-12">
                <h3>{t('products.sectionTitle').replace('{category}', selectedCategory?.name)}</h3>
              </div>
              {selectedProducts.map((p) => (
                <div key={p.id} className="col-12 col-md-4 d-flex justify-content-center mb-3">
                  <div className="card" style={{ width: '18rem' }}>
                    <div className="card-body">
                      <h5 className="card-title">{p.name}</h5>
                      <h6 className="card-subtitle mb-2 text-body-secondary">{p.description}</h6>
                      <p className="card-text">Precio: €{p.price.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          )}
        </div>
      )}
    </main>
  )
}

export default MainContent
