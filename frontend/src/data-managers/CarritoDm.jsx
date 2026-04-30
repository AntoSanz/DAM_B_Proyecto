import React, { useEffect, useState, useCallback, useContext, createContext } from 'react';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

async function postJson(url, payload) {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(body.message || `Error HTTP ${response.status}`);
  }
  return body;
}

export async function createCheckout(userId, items) {
  return postJson(`${API_BASE_URL}/checkout`, { user_id: userId, items });
}

function getCartFromStorage() {
	try {
		const stored = localStorage.getItem('cart');
		return stored ? JSON.parse(stored) : [];
	} catch {
		return [];
	}
}

function saveCartToStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function useCarritoDm() {
  const [cart, setCart] = useState(getCartFromStorage());
  // Nueva función para obtener el total de items
  const getTotalItems = useCallback(() => cart.reduce((sum, item) => sum + (item.quantity || 1), 0), [cart]);

  // Sincroniza con localStorage
  useEffect(() => {
    saveCartToStorage(cart);
  }, [cart]);

  // Añadir producto (puede usarse desde UI o evento)
  const addToCart = useCallback((product) => {
    setCart((prevCart) => {
         const qty = product.quantity && product.quantity > 0 ? product.quantity : 1;
         const existing = prevCart.find((item) => item.id === product.id);
         if (existing) {
             return prevCart.map((item) =>
                 item.id === product.id
                     ? { ...item, quantity: (item.quantity || 1) + qty }
                     : item
             );
         }
         return [...prevCart, { ...product, quantity: qty }];
    });
  }, []);

  // Quitar producto (por id)
  const removeFromCart = useCallback((productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  }, []);

  // Vaciar carrito
  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  // Escuchar evento global (opcional, para integración con UI actual)
  useEffect(() => {
    const handler = (event) => {
      addToCart(event.detail);
    };
    window.addEventListener('add-to-cart', handler);
    return () => window.removeEventListener('add-to-cart', handler);
  }, [addToCart]);

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    getTotalItems,
    totalItems: cart.reduce((sum, item) => sum + (item.quantity || 1), 0),
    totalPrice: cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0)
  };
}

// CONTEXT API
const CarritoContext = createContext(null);

export function CarritoProvider({ children }) {
	const value = useCarritoDm();
	return <CarritoContext.Provider value={value}>{children}</CarritoContext.Provider>;
}

export function useCarrito() {
	const ctx = useContext(CarritoContext);
	if (!ctx) throw new Error('useCarrito debe usarse dentro de <CarritoProvider>');
	return ctx;
}
