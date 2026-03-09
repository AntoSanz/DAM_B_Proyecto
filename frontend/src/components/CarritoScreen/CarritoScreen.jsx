import React from 'react';
import { useCarrito } from '../../data-managers/CarritoDm';
import './CarritoScreen.css';

function CarritoScreen({ onBack }) {
  const { cart, totalItems, totalPrice, removeFromCart, clearCart } = useCarrito();

  return (
    <section className="carrito-screen container mt-4">
      <div className="d-flex align-items-center mb-3">
        <button className="btn btn-link me-2" onClick={onBack}>&larr; Volver</button>
        <h2 className="mb-0">Carrito de compras</h2>
      </div>
      {cart.length === 0 ? (
        <div className="alert alert-info">El carrito está vacío.</div>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cart.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>{item.name}</strong> <span className="text-muted">x{item.quantity}</span>
                </div>
                <div>
                  €{(item.price * item.quantity).toFixed(2)}
                  <button className="btn btn-sm btn-danger ms-3" onClick={() => removeFromCart(item.id)}>
                    Quitar
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span>Total de productos: <strong>{totalItems}</strong></span>
            <span>Total: <strong>€{totalPrice.toFixed(2)}</strong></span>
          </div>
          <button className="btn btn-outline-danger" onClick={clearCart}>Vaciar carrito</button>
        </>
      )}
    </section>
  );
}

export default CarritoScreen;
