// ItemsList.js
import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import ItemCard from './ItemCard';

const ItemsList = ({ itemsData, cart, favorites, handleAddToCart, updateCartQuantity, toggleFavorite,isCartPage }) => {
  const renderItem = ({ item }) => (
    <ItemCard
      item={item}
      cartQuantity={cart[item.id] || 0}
      favorites={favorites}
      handleAddToCart={handleAddToCart}
      updateCartQuantity={updateCartQuantity}
      toggleFavorite={toggleFavorite}
      isCartPage={isCartPage}
    />
  );

  return (
      <FlatList
        data={itemsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
  );
};

const styles = StyleSheet.create({

});

export default ItemsList;
