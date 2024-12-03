import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import axios from 'axios';

// Create a context
const CartContext = createContext();

// Cart Provider component that holds state and functions
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const [favorites, setFavorites] = useState({});

  // Fetch initial data for cart and wishlist (optional)
  const fetchInitialData = useCallback(async () => {
    try {
      const cartResponse = await axios.get('http://192.168.174.118:3000/cart');
      const wishlistResponse = await axios.get('http://192.168.174.118:3000/wishlist');
      setCart(cartResponse.data);
      setFavorites(wishlistResponse.data);
    } catch (error) {
      console.error('Error fetching initial data:', error);
    }
  }, []);

  useEffect(() => {
    fetchInitialData();
  }, [fetchInitialData]);

  // Function to add items to the cart
  const handleAddToCart = useCallback((item) => {
    const updatedCart = {
      ...cart,
      [item.id]: cart[item.id] ? cart[item.id] + 1 : 1,
    };
    setCart(updatedCart);
    updateCart(updatedCart);
  }, [cart]);

  // Function to update cart quantity
  const updateCartQuantity = useCallback((itemId, delta) => {
    const updatedCart = { ...cart };
    if (cart[itemId]) {
      const newQuantity = cart[itemId] + delta;
      if (newQuantity <= 0) {
        delete updatedCart[itemId];
      } else {
        updatedCart[itemId] = newQuantity;
      }
    }
    setCart(updatedCart);
    updateCart(updatedCart);
  }, [cart]);

  // Function to toggle favorite status
  const toggleFavorite = useCallback((itemId) => {
    const updatedFavorites = {
      ...favorites,
      [itemId]: !favorites[itemId],
    };
    setFavorites(updatedFavorites);
    updateFavorites(updatedFavorites);
  }, [favorites]);

  // Function to update cart in the backend
  const updateCart = async (updatedCart) => {
    try {
      await axios.put('http://192.168.174.118:3000/cart', updatedCart);
    } catch (error) {
      console.error('Error updating cart:', error);
    }
  };

  // Function to update favorites in the backend
  const updateFavorites = async (updatedFavorites) => {
    try {
      await axios.put('http://192.168.174.118:3000/wishlist', updatedFavorites);
    } catch (error) {
      console.error('Error updating favorites:', error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        favorites,
        handleAddToCart,
        updateCartQuantity,
        toggleFavorite,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook to use the Cart Context
export const useCart = () => useContext(CartContext);
