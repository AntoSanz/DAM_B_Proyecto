import React from 'react'
import { t } from '../../locales/i18n'
import SectionCard from '../SectionCard/SectionCard'
import './CategoriesList.css'

/**
 * CategoriesList - Componente que muestra todas las categorías disponibles
 * 
 * Renderiza una lista de tarjetas (SectionCard) con cada categoría.
 * Cada tarjeta tiene un botón CTA que permite seleccionar la categoría.
 * 
 * Props:
 * - categories: Array de categorías (cargadas desde categories.json)
 * - onCategorySelect: Función callback que se ejecuta al seleccionar una categoría
 */
function CategoriesList({ categories, onCategorySelect }) {
  return (
    // Contenedor principal con grid de Bootstrap (12 columnas)
    <section className="row mt-4">
      {/* 
        Itera sobre cada categoría y crea una tarjeta personalizada (SectionCard)
        - En desktop: 3 categorías por fila (col-md-4)
        - En móvil: 1 categoría por fila (col-12)
      */}
      {categories.map((cat) => (
        <div key={cat.id} className="col-12 col-md-4 d-flex justify-content-center mb-3">
          {/* 
            Componente SectionCard: Tarjeta personalizada con estilo Bootstrap
            - title: Nombre de la categoría
            - text: Descripción de la categoría
            - ctaText: Texto del botón ("Ver productos")
            - onCta: Función que se ejecuta al hacer click (llama a onCategorySelect)
          */}
          <SectionCard
            title={cat.name}
            subtitle=""
            text={cat.description}
            links={[]}
            ctaText={t('products.viewButton')}
            onCta={() => onCategorySelect(cat)}
          />
        </div>
      ))}
    </section>
  )
}

export default CategoriesList
