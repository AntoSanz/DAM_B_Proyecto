import React from 'react'
import { t } from '../../locales/i18n'
import './Breadcrumb.css'

/**
 * Breadcrumb - Componente que muestra la ruta de navegación actual
 * 
 * Implementa un "camino de migas" (breadcrumb) que muestra dónde se encuentra
 * el usuario en la jerarquía de la aplicación:
 * - Inicio (siempre clickeable)
 * - Categoría (clickeable para volver a lista de productos)
 * - Productos o Nombre del producto (actual, no clickeable)
 * 
 * Props:
 * - categoryName: Nombre de la categoría seleccionada
 * - showProducts: Boolean - si está mostrando lista de productos
 * - showProductDetail: Boolean - si está mostrando detalles de producto
 * - productName: Nombre del producto (para mostrar en detalles)
 * - onHomeClick: Callback para volver al inicio
 * - onBackToCategory: Callback para volver a lista de productos de la categoría
 */
function Breadcrumb({ categoryName, showProducts, showProductDetail, productName, onHomeClick, onBackToCategory }) {
  return (
    // Elemento nav semántico con atributo aria-label para accesibilidad
    <nav aria-label={t('breadcrumb.ariaLabel')} className="breadcrumb-nav">
      {/* Lista ordenada de elementos del breadcrumb */}
      <ol className="breadcrumb">
        
        {/* ELEMENTO 1: Inicio - Siempre clickeable */}
        <li className="breadcrumb-item">
          <button className="breadcrumb-link" onClick={onHomeClick}>
            {t('breadcrumb.home')}
          </button>
        </li>

        {/* ELEMENTO 2: Categoría - Mostrada cuando hay categoría seleccionada */}
        {categoryName && (
          <li className="breadcrumb-item">
            {/* 
              La categoría es clickeable si estamos en lista de productos o detalles
              - Si clickeamos, volvemos a la lista de productos de esa categoría
            */}
            {showProductDetail || showProducts ? (
              <button className="breadcrumb-link" onClick={onBackToCategory}>
                {categoryName}
              </button>
            ) : (
              <span>{categoryName}</span>
            )}
          </li>
        )}

        {/* ELEMENTO 3: Productos - Mostrado en lista de productos (no en detalles) */}
        {categoryName && showProducts && !showProductDetail && (
          <li className="breadcrumb-item active">
            {t('breadcrumb.products')}
          </li>
        )}

        {/* ELEMENTO 4: Nombre del producto - Mostrado en pantalla de detalles */}
        {showProductDetail && productName && (
          <li className="breadcrumb-item active">
            {productName}
          </li>
        )}
      </ol>
    </nav>
  )
}

export default Breadcrumb
