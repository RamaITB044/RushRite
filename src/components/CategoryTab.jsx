import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';



const CategoryTab = ({ category, isActive, onSelect }) => (
  <TouchableOpacity
    style={[styles.tab, isActive && styles.activeTab]}
    onPress={onSelect}
  >
    <Image source={category.image} style={styles.tabImage} />
    <Text style={isActive ? styles.activeTabText : styles.tabText}>
      {category.name}
    </Text>
  </TouchableOpacity>
);

const styles = {
  tab: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  activeTab: {
    backgroundColor: '#6A9C89',
  },
  tabImage: {
    width: 40,
    height: 40,
    borderRadius: 30,
    marginBottom: 5,
  },
  tabText: {
    fontSize: 14,
    color: '#16423C',
    textAlign: 'center',
  },
  activeTabText: {
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
  },
};

export default CategoryTab;
