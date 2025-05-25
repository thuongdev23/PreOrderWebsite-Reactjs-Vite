import React, { createContext, useContext, useState, useEffect } from "react";
export const CartContext = createContext();
export const useCart = () => useContext(CartContext);
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item, quantity, note) => {
    const uniqueKey = `${item.slug}-${item.selectedFilling || ""}-${item.selectedBatter || ""}-${note || ""}`;
    const existingIndex = cart.findIndex((i) => i.uniqueKey === uniqueKey);
    if (existingIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity, note, uniqueKey }]);
    }
  };

  const updateCart = (uniqueKey, quantity, note) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.uniqueKey === uniqueKey ? { ...item, quantity, note } : item
      )
    );
  };

  const removeFromCart = (uniqueKey) => {
    setCart((prevCart) => prevCart.filter((item) => item.uniqueKey !== uniqueKey));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};