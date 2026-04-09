
import { useCarrito } from '../../data-managers/CarritoDm';

function CarritoTooltip() {
  const { totalItems } = useCarrito();
  return (
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger carrito-tooltip-badge" style={{ fontSize: '0.8rem' }}>
      {totalItems}
      <span className="visually-hidden">productos en el carrito</span>
    </span>
  );
}

export default CarritoTooltip;
