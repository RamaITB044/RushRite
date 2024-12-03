// RenderItems.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import RenderStars from './RenderStars';

const RenderItems = ({ item, cart, favorites, handleAddToCart, updateCartQuantity, toggleFavorite }) => {
    const rating = item.rating || 0; // Get the static rating for the item
    const cartQuantity = cart[item.id] || 0; // Get the quantity from cart, defaulting to 0 if not found
  
    return (
      <View style={styles.itemContainer}>
        <View>
          <Image source={{ uri: item.image_url }} style={styles.itemImage} />
          {/* {renderStars(rating)} */}
          <RenderStars rating={rating}/>
        </View>
  
        <View style={styles.itemDetails}>
          <View>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>₹ {item.price.toFixed(2)}</Text>
          </View>
  
          {cartQuantity > 0 ? (
            <View style={styles.cartControls}>
              {cartQuantity === 1 ? (
                <TouchableOpacity onPress={() => updateCartQuantity(item.id, -1)}>
                  <FontAwesome name="trash" size={15} color="red" style={styles.controlButton} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => updateCartQuantity(item.id, -1)}>
                  <FontAwesome name="minus" size={15} color="red" style={styles.controlButton} />
                </TouchableOpacity>
              )}
              <Text style={styles.countText}>{cartQuantity}</Text>
              <TouchableOpacity onPress={() => updateCartQuantity(item.id, 1)}>
                <FontAwesome name="plus" size={15} color="red" style={styles.controlButton} />
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity style={styles.addButton} onPress={() => handleAddToCart(item)}>
              <Text style={styles.addButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          )}
  
          <TouchableOpacity onPress={() => toggleFavorite(item.id)} style={styles.favoriteIcon}>
            <FontAwesome name="heart" size={20} color={favorites[item.id] ? '#6A9C89' : '#B0B0B0'} />
          </TouchableOpacity>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#C4DAD2',
    marginBottom: 10,
    borderRadius: 8,
    justifyContent: 'space-between',
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'space-between',
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 15,
  },
  itemName: {
    fontWeight: '800',
    fontSize: 17,
  },
  itemPrice: {
    fontWeight: 'bold',
    marginVertical: 5,
  },
  addButton: {
    backgroundColor: '#6A9C89',
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
    height: 35,
    width: 100,
  },
  addButtonText: {
    color: '#fff',
  },
  cartControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  controlButton: {
    color: '#6A9C89',
    marginHorizontal: 10,
  },
  countText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  favoriteIcon: {
    position: 'absolute',
    justifyContent: 'flex-end',
    right: 2,
  },
});

export default RenderItems;
