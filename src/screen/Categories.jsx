import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import productsData from '../db.json';  
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import RenderStars from '../components/RenderStars';
import CategoryList from '../components/CategoryList';
import ItemList from '../components/ItemList';
import { useCart } from '../components/CartContext';

const categoriesData = [
  { id: '1', name: 'Fruits', image: require('../assets/fruits.jpg') },
  { id: '2', name: 'Vegetables', image: require('../assets/vegetables.jpg') },
  { id: '3', name: 'Dairy', image: require('../assets/dairy.jpg') },
  { id: '4', name: 'Grains', image: require('../assets/grains.jpg') },
  { id: '5', name: 'Electronics', image: require('../assets/electronics.jpg') },
  { id: '6', name: 'Fitness', image: require('../assets/fitness.jpg') },
  { id: '7', name: 'Kitchen Appliances', image: require('../assets/appliances.jpg') },
];

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('1');
  const [itemsData, setItemsData] = useState([]);
  const {cart,
    favorites,
    handleAddToCart,
    updateCartQuantity,
    toggleFavorite} =useCart();

  const fetchItems = () => {
    const filteredItems = productsData.products.filter(item => 
      item.category === categoriesData.find(cat => cat.id === selectedCategory).name
    );
    setItemsData(filteredItems);
  };

  useEffect(() => {
    fetchItems();
  }, [selectedCategory]);
  return (
    <SafeAreaView style={styles.container}>
      <CategoryList
        categories={categoriesData}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <View style={styles.itemsContainer}>
        <ItemList
          itemsData={itemsData}
          cart={cart}
          favorites={favorites}
          handleAddToCart={handleAddToCart}
          updateCartQuantity={updateCartQuantity}
          toggleFavorite={toggleFavorite}
        />
      </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  itemsContainer: {
    width: '70%',
    padding: 10,
  },
});

export default Categories;
