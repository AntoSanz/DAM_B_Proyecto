/**
 * SectionCard - Componente reutilizable de tarjeta con Bootstrap
 * 
 * Muestra un contenedor de contenido con título, subtítulo, texto, enlaces y botón de acción.
 * Se utiliza principalmente para mostrar categorías en la interfaz.
 * 
 * Ejemplo de uso:
 * <SectionCard 
 *   title="Juegos de Mesa"
 *   text="Descubre los mejores juegos de mesa para disfrutar con familia"
 *   ctaText="Ver productos"
 *   onCta={handleCategoryClick}
 * />
 */

import React from 'react'
import './SectionCard.css'

/**
 * Componente SectionCard
 * 
 * @param {string} title - Título principal de la tarjeta (por defecto: 'Card title')
 * @param {string} subtitle - Subtítulo opcional que aparece debajo del título (por defecto: '')
 * @param {string} text - Descripción o texto principal de la tarjeta 
 *                        (por defecto: ejemplo genérico de Bootstrap)
 * @param {Array<Object>} links - Array de enlaces (cada uno con {href, text}) 
 *                                (por defecto: array vacío)
 * @param {string} width - Ancho del componente en CSS (por defecto: '18rem')
 *                         Puede ser px, rem, %, etc.
 * @param {string} className - Clases CSS adicionales (por defecto: '')
 * @param {string} ctaText - Texto del botón de acción (por defecto: null).
 *                           Si es null, no se muestra el botón
 * @param {Function} onCta - Función callback que se ejecuta al hacer click en el botón
 *                           (por defecto: null)
 */
function SectionCard({
  title = 'Card title',
  subtitle = '',
  text = 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
  links = [],
  width = '18rem',
  className = '',
  ctaText = null,
  onCta = null
}) {
  return (
    // Contenedor de tarjeta Bootstrap con ancho dinámico y clases adicionales
    <div className={`card ${className}`} style={{ width }}>
      <div className="card-body">
        {/* Renderiza el título si existe */}
        {title && <h5 className="card-title">{title}</h5>}
        
        {/* Renderiza el subtítulo si existe (en gris más oscuro: text-body-secondary) */}
        {subtitle && <h6 className="card-subtitle mb-2 text-body-secondary">{subtitle}</h6>}
        
        {/* Renderiza el texto descriptivo si existe */}
        {text && <p className="card-text">{text}</p>}
        
        {/* Mapea y muestra todos los enlaces como card-link */}
        {links.map((l, i) => (
          <a key={i} href={l.href || '#'} className="card-link">
            {l.text}
          </a>
        ))}
        
        {/* Botón de acción - solo se muestra si se proporciona ctaText y onCta callback */}
        {ctaText && (
          <div>
            <button type="button" className="btn btn-primary btn-sm mt-2" onClick={onCta}>
              {ctaText}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default SectionCard

