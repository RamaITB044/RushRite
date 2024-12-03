import React, { useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import productsData from '../db.json';
import CategoryList from '../components/CategoryList';
import ItemList from '../components/ItemList';
import axios from 'axios';

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('1');
  const [itemsData, setItemsData] = useState([]);
  const [cart, setCart] = useState(productsData.cart);
  const [favorites, setFavorites] = useState(productsData.wishlist);

  const categoriesData = [
    { id: '1', name: 'Fruits', image: require('../assets/fruits.jpg') },
    { id: '2', name: 'Vegetables', image: require('../assets/vegetables.jpg') },
    { id: '3', name: 'Dairy', image: require('../assets/dairy.jpg') },
    { id: '4', name: 'Grains', image: require('../assets/grains.jpg') },
    { id: '5', name: 'Electronics', image: require('../assets/electronics.jpg') },
    { id: '6', name: 'Fitness', image: require('../assets/fitness.jpg') },
    { id: '7', name: 'Kitchen Appliances', image: require('../assets/appliances.jpg') },
  ];

  const fetchItems = () => {
    const filteredItems = productsData.products.filter(item =>
      item.category === categoriesData.find(cat => cat.id === selectedCategory).name
    );
    setItemsData(filteredItems);
  };

  useEffect(() => {
    fetchItems();
  }, [selectedCategory]);

  const toggleFavorite = (itemId) => {
    const updatedFavorites = {
        ...favorites,
        [itemId]: !favorites[itemId]
      };
      setFavorites(updatedFavorites);
      updateFavorites(updatedFavorites);
  };

  const handleAddToCart = (item) => {
    let updatedCart; // Declare updatedCart outside the if-else block

    const existingItem = cart[item.id];
    if (existingItem) {
      updatedCart = {
        ...cart,
        [item.id]: cart[item.id] + 1 // Increment the quantity if the item exists
      };
    } else {
      updatedCart = {
        ...cart,
        [item.id]: 1 // Set the initial quantity to 1 if the item is not in the cart
      };
    }
    setCart(updatedCart);
    updateCart(updatedCart);
  };

  const updateCartQuantity = (itemId, delta) => {
    const existingItemQuantity = cart[itemId];
    
      let updatedCart;
      if (existingItemQuantity) {
        const newQuantity = existingItemQuantity + delta;
        
        if (newQuantity < 1) {
          // Remove the item from the cart if quantity drops below 1
          const { [itemId]: removedItem, ...restCart } = cart;
          updatedCart = restCart;
        } else {
          // Update the quantity for the item
          updatedCart = {
            ...cart,
            [itemId]: newQuantity
          };
        }
      }
    
      setCart(updatedCart);
      updateCart(updatedCart);
  };

  return (
    <SafeAreaView style={styles.container}>
      <CategoryList
        categories={categoriesData}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ItemList
        itemsData={itemsData}
        toggleFavorite={toggleFavorite}
        cart={cart}
        handleAddToCart={handleAddToCart}
        updateCartQuantity={updateCartQuantity}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default Categories;
