import React from 'react';
import { View } from 'react-native';
import CategoryTab from './CategoryTab';

const CategoryList = ({ categories, selectedCategory, setSelectedCategory }) => (
  <View style={styles.tabContainer}>
    {categories.map(category => (
      <CategoryTab
        key={category.id}
        category={category}
        isActive={selectedCategory === category.id}
        onSelect={() => setSelectedCategory(category.id)}
      />
    ))}
  </View>
);

const styles = {
  tabContainer: {
    width: '30%', // Takes 30% of the screen
    backgroundColor: '#E9EFEC',
    padding: 10,
  },
};

export default CategoryList;
