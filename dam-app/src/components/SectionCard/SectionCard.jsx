import React from 'react'
import './SectionCard.css'

function SectionCard({
  title = 'Card title',
  subtitle = '',
  text = 'Some quick example text to build on the card title and make up the bulk of the card’s content.',
  links = [],
  width = '18rem',
  className = ''
}) {
  return (
    <div className={`card ${className}`} style={{ width }}>
      <div className="card-body">
        {title && <h5 className="card-title">{title}</h5>}
        {subtitle && <h6 className="card-subtitle mb-2 text-body-secondary">{subtitle}</h6>}
        {text && <p className="card-text">{text}</p>}
        {links.map((l, i) => (
          <a key={i} href={l.href || '#'} className="card-link">
            {l.text}
          </a>
        ))}
      </div>
    </div>
  )
}

export default SectionCard
