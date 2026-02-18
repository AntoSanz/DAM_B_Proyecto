import React from 'react'
import { t } from '../../locales/i18n'
import './Breadcrumb.css'

function Breadcrumb({ categoryName, showProducts, showProductDetail, productName, onHomeClick, onBackToProducts }) {
  return (
    <nav aria-label="breadcrumb" className="breadcrumb-nav">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <button className="breadcrumb-link" onClick={onHomeClick}>
            {t('breadcrumb.home')}
          </button>
        </li>
        {categoryName && (
          <li className="breadcrumb-item">
            <span>{categoryName}</span>
          </li>
        )}
        {showProducts && (
          <li className="breadcrumb-item">
            {showProductDetail ? (
              <button className="breadcrumb-link" onClick={onBackToProducts}>
                {t('breadcrumb.products')}
              </button>
            ) : (
              <span className="breadcrumb-active">{t('breadcrumb.products')}</span>
            )}
          </li>
        )}
        {showProductDetail && productName && (
          <li className="breadcrumb-item active" aria-current="page">
            <span>{productName}</span>
          </li>
        )}
      </ol>
    </nav>
  )
}

export default Breadcrumb
