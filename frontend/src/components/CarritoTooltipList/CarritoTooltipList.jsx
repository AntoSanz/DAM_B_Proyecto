import React from 'react';
import { useCarrito } from '../../data-managers/CarritoDm';

function CarritoTooltipList() {
  const { cart } = useCarrito();

  if (cart.length === 0) {
    return <div className="p-2 text-muted small">El carrito está vacío.</div>;
  }

  return (
    <ul className="list-group list-group-flush pb-2 carrito-tooltip-list">
      {cart.map(item => (
        <li key={item.id} className="list-group-item py-1 px-2 d-flex justify-content-between align-items-center">
          <span style={{ fontSize: '0.95em' }}>{item.name}</span>
          <span className="ms-2 badge bg-secondary">x{item.quantity}</span>
          <span className="ms-2 text-success">€{(item.price * item.quantity).toFixed(2)}</span>
        </li>
      ))}
    </ul>
  );
}

export default CarritoTooltipList;
