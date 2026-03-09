import React from 'react'
import './NavBar.css'
import { t } from '../../locales/i18n'

function NavBar({ onHomeClick, onLoginClick, onLogoutClick, isLoggedIn = false, userName = '' }) {
  const handleHomeClick = (event) => {
    if (onHomeClick) {
      event.preventDefault()
      onHomeClick()
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top custom-navbar">
      <div className="container-fluid position-relative d-flex align-items-center">
        <a
          className="navbar-brand d-flex align-items-center"
          href="/"
          onClick={handleHomeClick}
          style={{ color: 'inherit', textDecoration: 'none' }}
        >
          {t('brand')}
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse position-absolute start-50 translate-middle-x" id="navbarNav">
          <ul className="navbar-nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/" onClick={handleHomeClick}>
                <i className="bi bi-house-door-fill me-1"></i> {t('nav.home')}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-gear-fill me-1"></i> {t('nav.settings')}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-star-fill me-1"></i> {t('nav.favorites')}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-envelope-at-fill me-1"></i> {t('nav.contact')}
              </a>
            </li>
          </ul>
        </div>
        <div className="d-flex ms-auto align-items-center gap-2">
          {/* Botón de carrito de compras */}
          <button type="button" className="btn btn-outline-secondary position-relative">
            <i className="bi bi-cart-fill me-1"></i> {t('nav.cart')}
            {/* Badge de cantidad de productos, opcional */}
            {/* <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">3</span> */}
          </button>
          {isLoggedIn ? (
            <>
              <span className="text-muted small">
                {t('nav.welcome').replace('{name}', userName)}
              </span>
              <button type="button" className="btn btn-outline-danger" onClick={onLogoutClick}>
                <i className="bi bi-box-arrow-right me-1"></i> {t('nav.logout')}
              </button>
            </>
          ) : (
            <button type="button" className="btn btn-outline-primary" onClick={onLoginClick}>
              <i className="bi bi-box-arrow-in-right me-1"></i> {t('nav.login')}
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
