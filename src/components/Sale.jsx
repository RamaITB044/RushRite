import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

const Sale = () => {
  return (
    <LinearGradient colors={['#6A9C89', '#16423C']} style={styles.bannerContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.saleText}>Big Sale!</Text>
        <Text style={styles.discountText}>Up to 50% OFF on all items</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Shop Now</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={require('../assets/salebanner.png')} // Replace with your sale image path
        style={styles.image}
      />
    </LinearGradient>
  )
}

export default Sale

const styles = StyleSheet.create({
  bannerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    padding: 20,
    marginVertical: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 5, // Shadow effect for Android
  },
  textContainer: {
    flex: 1,
  },
  saleText: {
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  discountText: {
    fontSize: 16,
    color: '#FFFFFF',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  buttonText: {
    color: '#006072',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
})