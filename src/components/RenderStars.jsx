import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RenderStars = ({rating}) => {
    const filledStars = Math.floor(rating);
    const totalStars = 5; // Total number of stars
    return (
      <View style={styles.ratingContainer}>
        {Array.from({ length: totalStars }, (_, index) => (
          <Text key={index} style={index < filledStars ? styles.filledStar : styles.emptyStar}>
            ★
          </Text>
        ))}
      </View>
    );
  };

export default RenderStars

const styles = StyleSheet.create({
    
    ratingContainer: {
        flexDirection: 'row',
    },
    filledStar: {
        color: '#6A9C89',
        fontSize: 18,
    },
    emptyStar: {
        color: '#C4DAD2',
        fontSize: 18,
    },
})