import React from 'react';
import { useCarrito } from '../../data-managers/CarritoDm';

function CarritoTooltipList() {
  const { cart } = useCarrito();

  if (cart.length === 0) {
    return <div className="p-2 text-muted small">El carrito está vacío.</div>;
  }

  return (
    /* He añadido un minWidth aquí para que el panel sea más ancho y quepa todo */
    <ul className="list-group list-group-flush pb-2 carrito-tooltip-list" style={{ minWidth: '240px' }}>
      {cart.map(item => (
        <li key={item.id} className="list-group-item py-1 px-2 d-flex justify-content-between align-items-center">
          <span style={{ fontSize: '0.95em', marginRight: '8px' }}>{item.name}</span>
          
          {/* Usamos flex y nowrap para que el badge y el precio no se rompan nunca */}
          <div className="d-flex align-items-center" style={{ whiteSpace: 'nowrap' }}>
            <span className="badge bg-secondary me-2">x{item.quantity}</span>
            <span className="text-success" style={{ fontWeight: 'bold' }}>
              {(item.price * item.quantity).toFixed(2)}&nbsp;€
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CarritoTooltipList;