import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import productsData from '../db.json';
import ItemList from '../components/ItemList';
import { useCart } from '../components/CartContext';

const Cart = () => {
  const { cart,setCart, favorites, handleAddToCart, updateCartQuantity, toggleFavorite } = useCart();
  const [cartItems, setCartItems] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false); // Modal state
  const [total, setTotal] = useState(0);
  useEffect(() => {
    // Fetch items based on the cart item IDs and quantities
    const fetchedCartItems = Object.keys(cart).map((itemId) => {
      const product = productsData.products.find((p) => p.id === itemId);
      return { ...product, quantity: cart[itemId] };
    });
    setCartItems(fetchedCartItems);
  }, [cart]);
  useEffect(() => {
    // Calculate total price based on cart items and quantities
    const totalValue = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    setTotal(totalValue);
  }, [cartItems]);

  const handlePlaceOrder = () => {
    setOrderPlaced(true); // Show the modal
    setCart({}); // Empty the cart
  };

  const closeOrderModal = () => {
    setOrderPlaced(false); // Hide the modal
  };

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}>Cart</Text>
            <Text style={styles.headerText}>Rs. {total.toFixed(2)}</Text>
        </View>
      <View style={styles.content}>
        {cartItems.length > 0 ? (
          <>
            <ItemList
              itemsData={cartItems}
              cart={cart}
              favorites={favorites}
              handleAddToCart={handleAddToCart}
              updateCartQuantity={updateCartQuantity}
              toggleFavorite={toggleFavorite}
              isCartPage={true}
            />
            <TouchableOpacity style={styles.placeOrderButton} onPress={handlePlaceOrder}>
              <Text style={styles.placeOrderText}>Place Order</Text>
            </TouchableOpacity>
          </>
        ) : (
          <View style={styles.emptyCartContainer}>
            <Text style={styles.emptyCartText}>Your cart is currently empty! 🛒</Text>
            <Text style={styles.emptyCartSubtitle}>Add some amazing products to fill it up!</Text>
          </View>
        )}
      </View>

      {/* Order Placed Modal */}
      <Modal
        visible={orderPlaced}
        transparent={true}
        animationType="fade"
        onRequestClose={closeOrderModal} // To handle back button on Android
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Order Placed Successfully! 🎉</Text>
            <TouchableOpacity style={styles.modalButton} onPress={closeOrderModal}>
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
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
  content: {
    flex: 1,
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    marginTop: 10,
    textAlign: 'center',
  },
  placeOrderButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#16423C', // Dark Green from your palette
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    elevation: 5, // Adds shadow for Android
  },
  placeOrderText: {
    color: '#E9EFEC', // Very Light Green from your palette
    fontWeight: '800',
    fontSize: 18,
    textAlign: 'center',
  },
  // Modal styles
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent dark background
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#16423C', // Dark Green from your palette
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#16423C', // Dark Green from your palette
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  modalButtonText: {
    color: '#E9EFEC', // Very Light Green from your palette
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Cart;
