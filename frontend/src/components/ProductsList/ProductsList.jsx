import React from 'react'
import { t } from '../../locales/i18n'
import './ProductsList.css'

/**
 * ProductsList - Componente que muestra una lista de productos de una categoría
 * 
 * Recibe un array de productos y renderiza tarjetas (cards) con:
 * - Nombre del producto
 * - Descripción corta
 * - Precio
 * - Botón para ver detalles
 * 
 * Props:
 * - products: Array de productos a mostrar
 * - categoryName: Nombre de la categoría (para mostrar en el título)
 * - onProductSelect: Función callback que se ejecuta al hacer click en "Ver detalles"
 */
function ProductsList({ products, categoryName, onProductSelect }) {
  return (
    // Contenedor principal con grid de Bootstrap (12 columnas)
    <section className="row mt-4">
      {/* Título: Muestra "Productos en [Categoría]" */}
      <div className="col-12 mb-5 mb-4">
        <h3>{t('products.sectionTitle').replace('{category}', categoryName)}</h3>
      </div>

      {/* 
        Itera sobre cada producto y crea una tarjeta (card)
        - En desktop: 3 productos por fila (col-md-4)
        - En móvil: 1 producto por fila (col-12)
      */}
      {products.map((p) => (
        <div key={p.id} className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center mb-3">
          {/* Tarjeta de Bootstrap */}
          <div 
            className="card product-card-custom" 
            id={`product-card-${p.id}`}
            data-product-id={p.id}
          >
            <div className="card-body">
              {/* Nombre del producto */}
              <h5 className="card-title">{p.name}</h5>

              {/* Descripción corta del producto */}
              <h6 className="card-subtitle mb-2 text-body-secondary">
                {p.shortDescription}
              </h6>

              {/* Precio formateado a 2 decimales */}
              <p className="card-text">{t('products.priceLabel')} {p.price.toFixed(2)} €</p>

              {/* Botón que llama a onProductSelect con el producto seleccionado */}
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
