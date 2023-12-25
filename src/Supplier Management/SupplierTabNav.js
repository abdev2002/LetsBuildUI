import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {createStackNavigator} from "@react-navigation/stack"
import CatalogueScreen from "./CatalogueScreen";
import DiscoverScreen from "./DiscoverScreen"
import OrderScreen from "./OrderScreen";
import AddProductScreen from "./AddProductScreen";
import { Ionicons, FontAwesome, Entypo } from '@expo/vector-icons'; 
import OrderDetailScreen from "./OrderDetailScreen";
import ProductScreen from "./ProductScreen";
import MaterialScreen from "./MaterialScreen";
import MessageScreen from "../Communication Module/MessageScreen";
import NotificationScreen from "../Communication Module/NotificationScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const OrdersStack = () => {
  return (
    <Stack.Navigator screenOptions={({ route }) => ({
      // headerShown: false,
    })}>
      <Stack.Screen name="Orders" component={OrderScreen} />
      <Stack.Screen name="OrderDetail" component={OrderDetailScreen} />
    </Stack.Navigator>
  );
};

const ProductStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        // headerShown: false,
        // headerTitle: {route.name},
        // headerStyle: {
        //   backgroundColor: "#ff9d00",
        // },
        headerTitle: { route },
        // headerTitleStyle: {
        //   color: "#fff",
        //   fontSize: 30,
        //   fontWeight: "bold",
        // },
        headerTitleAllowFontScaling: true,
        headerTitleAlign: "center",
        headerBackTitleStyle: {
          color: "#fff",
        },
        // headerShown: false
      })}
    >
      <Stack.Screen name="Products" component={CatalogueScreen} />
      <Stack.Screen name="ProductDetail" component={ProductScreen} />
      <Stack.Screen name="Materials" component={MaterialScreen} />
    </Stack.Navigator>
  );
};

export default function SupplierTabNav() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#ff9d00",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          height: 60,
          alignItems: "center",
          justifyContent: "center",
        },
        tabBarHideOnKeyboard: true,
        tabBarAllowFontScaling: true,
        tabBarLabelPosition: "below-icon",
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Orders") {
            iconName = focused ? "cart" : "cart-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === "My Products") {
            iconName = focused ? "list" : "list-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === "Sell") {
            iconName = focused ? "add-circle" : "add-circle-outline";
            return <Ionicons name={iconName} size={size + 10} color={color} />;
          } else if (route.name === "Messages") {
            iconName = focused
              ? "chatbubble-ellipses"
              : "chatbubble-ellipses-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === "Notifications") {
            iconName = focused ? "notifications" : "notifications-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        },
        headerStyle: {
          backgroundColor: "#ff9d00",
        },
        headerTitleStyle: {
          color: "#fff",
          fontWeight: "bold",
          textAlign: "center",
          fontSize: 30,
        },
        headerTitleAllowFontScaling: true,
        headerTitleAlign: "center",
        headerShown: false
      })}
    >
      <Tab.Screen
        name="My Products"
        component={ProductStack}
        options={{
          // headerShown: false,
        }}
      />
      <Tab.Screen name="Orders" component={OrdersStack} />
      {/* Replace OrdersScreen with OrdersStack */}
      <Tab.Screen name="Sell" component={AddProductScreen} />
      <Tab.Screen name="Messages" component={MessageScreen} />
      <Tab.Screen name="Notifications" component={NotificationScreen} />
      {/* <Tab.Screen name="OrderDetail" component={OrderDetailScreen} /> */}
    </Tab.Navigator>
  );
}