import React from 'react'
import { t } from '../../locales/i18n'
import './ProductDetailModal.css'

function ProductDetailModal({ product, isOpen, onClose }) {
  if (!isOpen || !product) return null

  return (
    <div
      className="modal d-block"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      onClick={onClose}
    >
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{t('products.details')}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            {product.image && (
              <img
                src={product.image}
                alt={product.name}
                className="img-fluid mb-3"
              />
            )}
            <h6>{product.name}</h6>
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
            <p>
              <strong>Precio:</strong> €{product.price.toFixed(2)}
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              {t('products.closeButton')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailModal
