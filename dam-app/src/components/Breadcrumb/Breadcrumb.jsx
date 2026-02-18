import React from 'react'
import { t } from '../../locales/i18n'
import './Breadcrumb.css'

function Breadcrumb({ categoryName, showProducts, showProductDetail, productName, onHomeClick, onBackToCategory, onBackToProducts }) {
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
            {showProductDetail || showProducts ? (
              <button className="breadcrumb-link" onClick={onBackToCategory}>
                {categoryName}
              </button>
            ) : (
              <span>{categoryName}</span>
            )}
          </li>
        )}
        {showProducts && !showProductDetail && (
          <li className="breadcrumb-item active" aria-current="page">
            <span className="breadcrumb-active">{t('breadcrumb.products')}</span>
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
