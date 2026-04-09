import React, { useState } from 'react';
import { useCarrito } from '../../data-managers/CarritoDm';
import './CarritoScreen.css';

import CustomSpinner from '../CustomSpinner/CustomSpinner';
import ComponenteModal from '../ComponenteModal/ComponenteModal';


function CarritoScreen({ onBack, onHome, onCloseCartScreen, isLoggedIn, onRequireLogin }) {
  const { cart, totalItems, totalPrice, removeFromCart, clearCart } = useCarrito();
  const [showSpinner, setShowSpinner] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleCheckout = () => {
    if (!isLoggedIn && typeof onRequireLogin === 'function') {
      onRequireLogin();
      return;
    }
    setShowSpinner(true);
    setTimeout(() => {
      setShowSpinner(false);
      setShowModal(true);
    }, 2000);
  };

  // Al cerrar el modal, vacía el carrito y vuelve al inicio
  const handleModalClose = () => {
    setShowModal(false);
    clearCart();
    if (typeof onHome === 'function') {
      onHome();
    }
    if (typeof onCloseCartScreen === 'function') {
      onCloseCartScreen();
    }
  };

  return (
    <>
      <CustomSpinner visible={showSpinner} duration={2} />
      <ComponenteModal
        isOpenExternal={showModal}
        onOpenChange={(open) => { if (!open) handleModalClose(); }}
        title="Pago realizado con éxito"
        closeText="Aceptar"
        showTrigger={false}
        footerContent={
          <button type="button" className="btn btn-success" onClick={handleModalClose}>
            Aceptar
          </button>
        }
      >
        <div className="text-center">
          <p>¡Tu pago ha sido aceptado correctamente!</p>
        </div>
      </ComponenteModal>
      <section className="carrito-screen container mt-4">
        <div className="d-flex align-items-center mb-3">
          <button className="btn btn-link me-2" onClick={onBack}>&larr; Volver</button>
          <h2 className="mb-0">Carrito de compras</h2>
        </div>
        {cart.length === 0 ? (
          <div className="alert alert-info">El carrito está vacío.</div>
        ) : (
          <div className="row">
            {/* Lista de productos: 2/3 */}
            <div className="col-md-8">
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
              <button className="btn btn-outline-danger" onClick={clearCart}>Vaciar carrito</button>
            </div>
            {/* Resumen: 1/3 */}
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Resumen</h5>
                  <p className="card-text mb-2">Artículos: <strong>{totalItems}</strong></p>
                  <p className="card-text mb-3">Total: <strong>€{totalPrice.toFixed(2)}</strong></p>
                  <button className="btn btn-success w-100" onClick={handleCheckout}>Finalizar compra</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default CarritoScreen;
