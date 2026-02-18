import React from 'react'
import { t } from '../../locales/i18n'
import SectionCard from '../SectionCard/SectionCard'
import './CategoriesList.css'

function CategoriesList({ categories, onCategorySelect }) {
  return (
    <section className="row mt-4">
      {categories.map((cat) => (
        <div key={cat.id} className="col-12 col-md-4 d-flex justify-content-center mb-3">
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
