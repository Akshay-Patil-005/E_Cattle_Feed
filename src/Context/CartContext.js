// context/CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (allProducts) => {
    const existingItem = cartItems.find((item) => item.id === allProducts.id);

    if (existingItem) {
      setCartItems((prevItems) => {
        return prevItems.map((item) =>
          item.id === allProducts.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      });
    } else {
      setCartItems((prevItems) => [...prevItems, { ...allProducts, quantity: 1 }]);
    }

    // Update the cart count
    setCartCount((prevCount) => prevCount + 1);
  };

  // Assuming this is in your CartContext or where you manage the cart state

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity: Math.max(0, item.quantity - 1),
            }
          : item
      )
    );
  
    setCartCount((prevCount) => Math.max(0, prevCount - 1)); // Decrease cartCount
  };
  



  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};
