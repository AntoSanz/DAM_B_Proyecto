import React from 'react'
import { t } from '../../locales/i18n'
import './ProductsList.css'

function ProductsList({ products, categoryName, onProductSelect }) {
  return (
    <section className="row mt-4">
      <div className="col-12">
        <h3>{t('products.sectionTitle').replace('{category}', categoryName)}</h3>
      </div>
      {products.map((p) => (
        <div key={p.id} className="col-12 col-md-4 d-flex justify-content-center mb-3">
          <div className="card" style={{ width: '18rem' }}>
            {p.image && <img src={p.image} className="card-img-top" alt={p.name} />}
            <div className="card-body">
              <h5 className="card-title">{p.name}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">{p.shortDescription}</h6>
              <p className="card-text">Precio: €{p.price.toFixed(2)}</p>
              <button
                className="btn btn-primary"
                onClick={() => onProductSelect(p)}
              >
                {t('products.detailsButton')}
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default ProductsList
