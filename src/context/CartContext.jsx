// src/context/CartContext.js
import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    // Regroupe les items identiques par nom + taille
    const index = cart.findIndex(
      (i) => i.name === item.name && i.size === item.size
    );

    if (index !== -1) {
      const updatedCart = [...cart];
      updatedCart[index].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (indexToRemove) => {
    const updatedCart = [...cart];
    updatedCart.splice(indexToRemove, 1);
    setCart(updatedCart);
  };

  const getTotal = () => {
    return cart.reduce((acc, item) => {
      const numericPrice = parseFloat(item.price.replace(',', '.'));
      return acc + numericPrice * item.quantity;
    }, 0).toFixed(2);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};
