import React from 'react'
import { t } from '../../locales/i18n'
import './ProductDetailScreen.css'

/**
 * ProductDetailScreen - Pantalla completa que muestra todos los detalles de un producto
 * 
 * Renderiza una vista completa del producto con:
 * - Imagen del producto (izquierda)
 * - Información completa del producto (derecha)
 * - Botón de volver atrás
 * - Botón para añadir al carrito
 * 
 * Props:
 * - product: Objeto del producto con todos sus datos
 * - onBack: Función callback para volver a la lista de productos
 */
function ProductDetailScreen({ product, onBack }) {
  return (
    <section className="product-detail-screen">
      {/* Botón de volver atrás */}
      <button className="btn btn-secondary mb-3" onClick={onBack}>
        ← {t('products.backButton')}
      </button>
      
      {/* Contenedor principal con dos columnas: imagen y detalles */}
      <div className="row mt-4">
        {/* COLUMNA IZQUIERDA: Imagen del producto */}
        <div className="col-12 col-md-6">
          {/* Solo muestra la imagen si existe en el objeto producto */}
          {product.image && (
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid product-detail-image"
            />
          )}
        </div>
        
        {/* COLUMNA DERECHA: Información del producto */}
        <div className="col-12 col-md-6">
          {/* Nombre del producto */}
          <h2>{product.name}</h2>

          {/* Descripción corta (subtítulo) */}
          <h5 className="text-muted mb-3">{product.shortDescription}</h5>
          
          {/* Contenedor de detalles */}
          <div className="product-details">
            {/* Descripción larga del producto */}
            <p>
              <strong>{t('products.descriptionLabel')}</strong>
            </p>
            <p>{product.longDescription}</p>
            
            {/* Género/Tipo del producto */}
            <p>
              <strong>{t('products.genreLabel')}</strong> {product.genre}
            </p>
            
            {/* Desarrollador (solo si existe) - Ej: para videojuegos */}
            {product.developer && (
              <p>
                <strong>{t('products.developerLabel')}</strong> {product.developer}
              </p>
            )}
            
            {/* Número de jugadores (solo si existe) - Ej: para juegos de mesa */}
            {product.players && (
              <p>
                <strong>{t('products.playersLabel')}</strong> {product.players}
              </p>
            )}
            
            {/* Año de lanzamiento del producto */}
            <p>
              <strong>{t('products.releaseDateLabel')}</strong> {product.releaseDate}
            </p>
            
            {/* Puntuación de usuarios (solo si existe) */}
            {product.rating && (
              <p>
                <strong>{t('products.ratingLabel')}</strong> ⭐ {product.rating}/5
              </p>
            )}
            
            {/* Disponibilidad en stock (solo si existe) */}
            {product.inStock !== undefined && (
              <p>
                <strong>{t('products.stockLabel')}</strong> {product.inStock ? t('products.available') : t('products.soldOut')}
              </p>
            )}
            
            {/* Sección de precio y compra */}
            <div className="price-section mt-4">
              {/* Precio del producto formateado con 2 decimales */}
              <p className="price">€{product.price.toFixed(2)}</p>

              {/* Botón para añadir al carrito */}
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
