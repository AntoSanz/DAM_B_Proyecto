import React from 'react';
import { useCarritoDm } from '../../data-managers/CarritoDm';
import './CarritoTooltip.css';

function CarritoTooltip() {
  const { totalItems } = useCarritoDm();

  return (
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger carrito-tooltip-badge" style={{ fontSize: '0.8rem' }}>
      {totalItems}
      <span className="visually-hidden">productos en el carrito</span>
    </span>
  );
}

export default CarritoTooltip;
