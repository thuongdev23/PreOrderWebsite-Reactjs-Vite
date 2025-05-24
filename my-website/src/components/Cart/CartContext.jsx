// src/context/CartContext.jsx
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item, quantity, note) => {
    const existingItemIndex = cartItems.findIndex(i => i.id === item.id);
    if (existingItemIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity += quantity;
      updatedCart[existingItemIndex].note += note ? ` | ${note}` : '';
      setCartItems(updatedCart);
    } else {
      setCartItems(prev => [...prev, { ...item, quantity, note }]);
    }
  };

  const updateQuantity = (id, qty) => {
    setCartItems(prev =>
      prev.map(item => (item.id === id ? { ...item, quantity: qty } : item))
    );
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
