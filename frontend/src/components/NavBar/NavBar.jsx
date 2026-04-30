import React from 'react'
import './NavBar.css'
import CarritoTooltip from '../CarritoTooltip/CarritoTooltip'
import { useCarrito } from '../../data-managers/CarritoDm';
import CarritoTooltipList from '../CarritoTooltipList/CarritoTooltipList'
import { t } from '../../locales/i18n'
import CustomDropdown from '../CustomDropdown/CustomDropdown'

function NavBar({ onContactoClick, onHomeClick, onLoginClick, onLogoutClick, isLoggedIn = false, userName = '', onShowCartScreen, onPerfil, onFavoritos, onHistorial }) {
  const { totalItems } = useCarrito();
  const [showTooltip, setShowTooltip] = React.useState(false);
  const tooltipRef = React.useRef(null);

  const [showUserMenu, setShowUserMenu] = React.useState(false);
  const userMenuRef = React.useRef(null);

  // Cerrar menú usuario al hacer click fuera
  React.useEffect(() => {
    if (!showUserMenu) return;
    function handleClickOutside(event) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showUserMenu]);

  // Cerrar tooltip al hacer click fuera
  React.useEffect(() => {
    if (!showTooltip) return;
    function handleClickOutside(event) {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
        setShowTooltip(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showTooltip]);
  // Al hacer click en el botón, mostrar/ocultar el tooltip
  const handleCartClick = () => setShowTooltip((v) => !v);
  const handleShowCartScreen = () => {
    setShowTooltip(false);
    if (onShowCartScreen) onShowCartScreen();
  };
  // Cerrar el tooltip desde el propio tooltip
  const handleTooltipClose = () => setShowTooltip(false);
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
              <a className="nav-link" href="#" onClick={(e) => { e.preventDefault(); if (onHistorial) onHistorial(); }}>
                <i className="bi bi-clock-history me-1"></i> {t('nav.historial')}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={(e) => { e.preventDefault(); onContactoClick(); }}>
                <i className="bi bi-envelope-at-fill me-1"></i> {t('nav.contact')}
              </a>
            </li>
          </ul>
        </div>
        <div className="d-flex ms-auto align-items-center gap-2" style={{marginRight: '1.5rem'}}>
          {/* Botón de usuario (Bienvenido, admin) */}
          {isLoggedIn ? (
            <div style={{ position: 'relative', display: 'inline-block' }} ref={userMenuRef}>
              <CustomDropdown
                isOpen={showUserMenu}
                onClose={() => setShowUserMenu(false)}
                trigger={
                  <button
                    type="button"
                    className="btn btn-outline-secondary position-relative me-2"
                    style={{ textDecoration: 'none' }}
                    onClick={() => setShowUserMenu((v) => !v)}
                    aria-expanded={showUserMenu}
                  >
                    {t('nav.welcome').replace('{name}', userName)}
                  </button>
                }
                items={[
                  {
                    id: 'perfil',
                    nombre: 'Perfil',
                    type: 'info',
                    icon: 'person-fill',
                    onClick: () => { setShowUserMenu(false); if (onPerfil) onPerfil(); }
                  },
                  {
                    id: 'favoritos',
                    nombre: 'Favoritos',
                    type: 'info',
                    icon: 'star-fill',
                    onClick: () => { setShowUserMenu(false); if (onFavoritos) onFavoritos(); }
                  },
                  {
                    id: 'historial',
                    nombre: 'Historial',
                    type: 'info',
                    icon: 'clock-history',
                    onClick: () => { setShowUserMenu(false); if (onHistorial) onHistorial(); }
                  },
                  {
                    id: 'logout',
                    nombre: 'Desconectar',
                    type: 'danger',
                    icon: 'box-arrow-right',
                    onClick: () => { setShowUserMenu(false); onLogoutClick(); }
                  }
                ]}
              />
            </div>
          ) : (
            <button type="button" className="btn btn-outline-primary" onClick={onLoginClick}>
              <i className="bi bi-box-arrow-in-right me-1"></i> {t('nav.login')}
            </button>
          )}
          {/* Botón de carrito de compras con tooltip */}
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <button
              type="button"
              className="btn btn-outline-secondary position-relative me-2"
              onClick={handleCartClick}
              aria-expanded={showTooltip}
              aria-label={t('nav.cart')}
            >
              <i className="bi bi-cart-fill me-1"></i> {t('nav.cart')}
              <CarritoTooltip totalItems={totalItems} />
            </button>
            {showTooltip && (
              <div
                ref={tooltipRef}
                tabIndex={-1}
                style={{
                  position: 'absolute',
                  top: '110%',
                  right: 0,
                  zIndex: 1000,
                  background: '#fff',
                  border: '1px solid #ddd',
                  borderRadius: 6,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                  minWidth: 220,
                  maxWidth: 320,
                  padding: 0
                }}
              >
                <div className="d-flex justify-content-end p-2 border-bottom bg-light">
                  <button className="btn-close" aria-label="Cerrar" onClick={handleTooltipClose}></button>
                </div>
                <CarritoTooltipList />
                <div className="d-flex justify-content-end p-2 border-top bg-light">
                  <button className="btn btn-primary btn-sm" onClick={handleShowCartScreen}>
                    Ver detalle del carrito
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
