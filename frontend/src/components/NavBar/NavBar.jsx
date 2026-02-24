import React from 'react'
import './NavBar.css'
import { t } from '../../locales/i18n'

function NavBar({ onHomeClick }) {
  const handleHomeClick = (event) => {
    if (onHomeClick) {
      event.preventDefault()
      onHomeClick()
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top custom-navbar">
      <div className="container-fluid position-relative d-flex align-items-center">
        <a className="navbar-brand" href="#" onClick={handleHomeClick}>{t('brand')}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse position-absolute start-50 translate-middle-x" id="navbarNav">
          <ul className="navbar-nav justify-content-center">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" onClick={handleHomeClick}>{t('nav.home')}</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">{t('nav.features')}</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">{t('nav.pricing')}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
