import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import HomeScreen from "./src/screen/HomeScreen";
import Categories from "./src/screen/Categories";
// import Categories from "./src/screen/hehe";
import Wishlist from "./src/screen/Wishlist";
import Cart from "./src/screen/Cart";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from 'react-native';
import { CartProvider } from './src/components/CartContext';

const Tab = createBottomTabNavigator();

function Account() {
  return (
    <SafeAreaView>
      <Text>Account</Text>
      </SafeAreaView>
  );
}



const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            headerStyle: {
              backgroundColor: "#16423C", // Background color for the header
            },
            headerTintColor: '#E9EFEC', // Color for the header text and back button
            headerTitleStyle: {
              fontWeight: "bold", // Styling for the header title text
              fontSize: 20, // Title font size
            },
            tabBarStyle: {
              backgroundColor: "#16423C", // Style for tab bar background
              height: 70, // Increase the height of the bottom navigation bar
              paddingBottom: 10, // Add padding for better visual spacing
            },
            tabBarShowLabel: false, // Hide the label if you don't want it
            tabBarActiveTintColor: '#6A9C89',
            tabBarInactiveTintColor: '#C4DAD2',
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let IconComponent;
              
              if (route.name === "Home") {
                iconName = "home";
                IconComponent = Entypo;
              } else if (route.name === "Categories") {
                iconName = "list-ul";
                IconComponent = FontAwesome;
              } else if (route.name === "Account") {
                iconName = "user";
                IconComponent = FontAwesome;
                // size = size * 1.8; // Larger size for user icon
              } else if (route.name === "Cart") {
                iconName = "shopping-cart";
                IconComponent = FontAwesome;
              } else if (route.name === "Wishlist") {
                iconName = "heart";
                IconComponent = FontAwesome;
              }

              return (
                <View style={styles.iconContainer}>
                  <IconComponent name={iconName} size={size * 1.2} color={color} />
                  {focused && (
                    <View style={styles.bottomLineContainer}>
                      <View style={styles.activeLine} />
                    </View>
                  )}
                </View>
              );
            }
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Categories" component={Categories} />
          <Tab.Screen name="Account" component={Account} />
          <Tab.Screen name="Wishlist" component={Wishlist} />
          <Tab.Screen name="Cart" component={Cart} />
        </Tab.Navigator>
      </NavigationContainer>
   </CartProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // This allows the line to be positioned correctly
  },
  bottomLineContainer: {
    position: 'absolute',
    bottom: -10, // Align the line at the bottom of the tab bar
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeLine: {
    width: 30, // Width of the bottom line
    height: 4, // Thickness of the line
    backgroundColor: '#6A9C89', // Color of the line when active
    borderRadius: 10, // For curved edges
  },
});


