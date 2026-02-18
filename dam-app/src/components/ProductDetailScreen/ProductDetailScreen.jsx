import React from 'react'
import { t } from '../../locales/i18n'
import './ProductDetailScreen.css'

function ProductDetailScreen({ product, onBack }) {
  return (
    <section className="product-detail-screen">
      <button className="btn btn-secondary mb-3" onClick={onBack}>
        ← {t('products.backButton')}
      </button>
      
      <div className="row mt-4">
        <div className="col-12 col-md-6">
          {product.image && (
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid product-detail-image"
            />
          )}
        </div>
        
        <div className="col-12 col-md-6">
          <h2>{product.name}</h2>
          <h5 className="text-muted mb-3">{product.shortDescription}</h5>
          
          <div className="product-details">
            <p>
              <strong>Descripción:</strong>
            </p>
            <p>{product.longDescription}</p>
            
            <p>
              <strong>Género:</strong> {product.genre}
            </p>
            
            {product.developer && (
              <p>
                <strong>Desarrollador:</strong> {product.developer}
              </p>
            )}
            
            {product.players && (
              <p>
                <strong>Jugadores:</strong> {product.players}
              </p>
            )}
            
            <p>
              <strong>Año de lanzamiento:</strong> {product.releaseDate}
            </p>
            
            {product.rating && (
              <p>
                <strong>Puntuación:</strong> ⭐ {product.rating}/5
              </p>
            )}
            
            {product.inStock !== undefined && (
              <p>
                <strong>Stock:</strong> {product.inStock ? '✓ Disponible' : '✗ Agotado'}
              </p>
            )}
            
            <div className="price-section mt-4">
              <p className="price">€{product.price.toFixed(2)}</p>
              <button className="btn btn-success btn-lg">
                {t('products.addToCart')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetailScreen
