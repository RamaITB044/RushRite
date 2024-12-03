import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient
import Header from '../components/Header'; // Import your Header component
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Category from '../components/Category';
import Sale from '../components/Sale';
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#E9EFEC', '#C4DAD2']} // Gradient colors from your palette
        style={styles.gradient}
      >
        <Header />
        <View>
          {/* <Text style={styles.text}>Match Your Style</Text> */}
          <View style={styles.inputContainer}>
            <FontAwesome name="search" size={30} color="#C4DAD2" style={styles.search}/>
            <TextInput placeholder="Search" style={styles.textInput} />
          </View>
        </View>
        
        <Sale />
        <Category />
      </LinearGradient>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    padding: 20, // Padding for overall layout
    // justifyContent: 'center', // Center content vertically
    // alignItems: 'center', // Center content horizontally
  },
  text: {
    fontSize: 28,
    color: '#16423C', // Color from your palette
    marginTop: 20, // Space between the header and text
    fontWeight: 'bold', // Makes the text bold
    // backgroundColor:'red'
  },
  headingText: {
    fontSize: 28,
    color: "#000000",
    marginVertical: 20,
    fontFamily: "Poppins-Regular",
  },
  inputContainer: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    height: 48,
    borderRadius: 12,
    marginTop:20,
    alignItems: "center",
    flexDirection: "row",
  },
  search:{
    marginHorizontal:10,
  },
  textInput:{
    fontSize: 18,
  }
});
