import React, { useState, useEffect } from 'react';
import { StyleSheet, View,Text} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import productsData from '../db.json';
import axios from 'axios';
import ItemList from '../components/ItemList';
import { useCart } from '../components/CartContext';

const Wishlist = () => {
    const [itemsData, setItemsData] = useState([]);
    const {cart,
      favorites,
      handleAddToCart,
      updateCartQuantity,
      toggleFavorite} =useCart();
    // Fetch and filter items based on favorites
    useEffect(() => {
        const fetchWishlistItems = async () => {
            const filteredItems = productsData.products.filter(item => favorites[item.id] === true);
            setItemsData(filteredItems);
        };
        fetchWishlistItems();
    }, [favorites]);

    

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}>Wishlist</Text>
        </View>
        <View style={styles.content}>
          {itemsData.length > 0 ? (
            <ItemList
              itemsData={itemsData}
              cart={cart}
              favorites={favorites}
              handleAddToCart={handleAddToCart}
              updateCartQuantity={updateCartQuantity}
              toggleFavorite={toggleFavorite}
            />
          ) : (
            <View style={styles.emptyCartContainer}>
              <Text style={styles.emptyCartText}>Your Wishlist is waiting! 📝</Text>
              <Text style={styles.emptyCartSubtitle}>Discover, save, and plan your next great purchase</Text>
            </View>
          )}
        </View>
      </SafeAreaView>
      
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    content:{
      flex:1,
    },
    header: {
      backgroundColor: '#E9EFEC', // Very Light Green from your palette
      padding: 10,
      borderRadius: 5,
      flexDirection:'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#16423C', // Dark Green from your palette
    },
    emptyCartContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      // padding: 20,
    },
    emptyCartText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#555',
      textAlign: 'center',
    },
    emptyCartSubtitle: {
      fontSize: 16,
      color: '#888',
      margin: 10,
      textAlign: 'center',
    },
});

export default Wishlist;
