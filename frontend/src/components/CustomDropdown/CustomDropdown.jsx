import React from 'react';
import './CustomDropdown.css';

/**
 * CustomDropdown - Componente reutilizable para desplegables personalizados, inspirado en UserMenuDropdown.
 * Props:
 * - isOpen: boolean (si el desplegable está abierto)
 * - onClose: función para cerrar el desplegable (opcional, muestra botón de cierre si se pasa)
 * - items: array de objetos { id, nombre, type, onClick? } para renderizar como lista (opcional)
 * - children: contenido adicional del desplegable (opcional)
 * - trigger: elemento que actúa como disparador (ej: botón o icono)
 * - dropdownClassName: clase extra para el contenedor del dropdown (opcional)
 */
const CustomDropdown = ({ isOpen, onClose, items = [], children, trigger, dropdownClassName = '' }) => {
  return (
    <div className="custom-dropdown">
      <div className="custom-dropdown-trigger" tabIndex={0}>
        {trigger}
      </div>
      {isOpen && (
        <div className={`custom-dropdown-content ${dropdownClassName}`} tabIndex={-1}>
          {onClose && (
            <div className="d-flex justify-content-end p-2 border-bottom bg-light">
              <button className="btn-close" aria-label="Cerrar" onClick={onClose}></button>
            </div>
          )}
          {Array.isArray(items) && items.length > 0 && (
            <ul className="list-group list-group-flush custom-dropdown-list">
              {items.map(item => (
                <li
                  key={item.id}
                  className={`list-group-item custom-dropdown-item${item.type ? ` ${item.type}` : ''}`}
                  onClick={item.onClick}
                  tabIndex={0}
                >
                  {item.nombre}
                </li>
              ))}
            </ul>
          )}
          {children}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
