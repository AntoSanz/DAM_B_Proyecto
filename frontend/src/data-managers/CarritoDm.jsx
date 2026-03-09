import { useEffect, useState, useCallback } from 'react';

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

export function useCarritoDm() {
	const [cart, setCart] = useState(getCartFromStorage());

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
		totalItems: cart.reduce((sum, item) => sum + (item.quantity || 1), 0),
		totalPrice: cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0)
	};
}
