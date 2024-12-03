import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require("../assets/logo.png")}
        style={styles.appIcon}
      />
      <Image
        source={require("../assets/profilepic.jpg")}
        style={styles.profilepic}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: { // Vertically centers the items
    // padding: 15,
    paddingTop:20,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
    // backgroundColor: '#16423C', // Background color from your palette
  },
  profilepic:{
    height:51,
    width:51,
    borderRadius:25

  },
  appIcon: {
    height:45,
    width:149,
    resizeMode: 'contain', 
  },
  headerText: {
    fontSize: 18,
    color: 'red', // Color from your palette
    fontWeight: 'bold',
  },
});
