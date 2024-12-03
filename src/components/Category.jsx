import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from "react-native-safe-area-context";

const categoriesData = [
  { id: '1', name: 'Fruits', image: require('../assets/fruits.jpg') },
  { id: '2', name: 'Vegetables', image: require('../assets/vegetables.jpg') },
  { id: '3', name: 'Dairy', image: require('../assets/dairy.jpg') },
  { id: '4', name: 'Grains', image: require('../assets/grains.jpg') },
  { id: '5', name: 'Electronics', image: require('../assets/electronics.jpg') },
  { id: '6', name: 'Fitness', image: require('../assets/fitness.jpg') },
  { id: '7', name: 'Kitchen Appliances', image: require('../assets/appliances.jpg') },
];

const Category = () => {
  return (
    <SafeAreaView style={styles.container}>
      {categoriesData.map(category => (
        <View key={category.id} style={styles.categoryItem}>
          <Image source={category.image} style={styles.image} />
          <Text style={styles.text}>{category.name}</Text>
        </View>
      ))}
    </SafeAreaView>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    // flex:1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'space-between',
    // paddingTop:0,
    // backgroundColor:'red',
    // padding: 10,
  },
  categoryItem: {
    alignItems: 'center',
    margin: 5,
    width: 80, // Adjust the width as needed
  },
  image: {
    width: 60, // Adjust the image size
    height: 60, // Adjust the image size
    borderRadius: 30, // Make it circular
    marginBottom: 5,
  },
  text: {
    textAlign: 'center',
    color: '#16423C',
  },
});
