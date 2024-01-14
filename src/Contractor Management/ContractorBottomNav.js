import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProjectScreen from "../Project Management & Inspection/ProjectScreen";
import MessageScreen from "../Communication Module/MessageScreen";
import NotificationScreen from "../Communication Module/NotificationScreen";
import {
  Ionicons,
  Octicons,
  FontAwesome5,
  FontAwesome6,
  Entypo,
} from "@expo/vector-icons";
import HomeScreen from "../Contract Management/HomeScreen";
import ContractScreen from "../Contract Management/ContractScreen";
import { createStackNavigator } from "@react-navigation/stack";
import ContractDetailScreen from "../Contract Management/ContractDetailScreen"
import BidScreen from "../Project Management & Inspection/BidScreen";
import BidDetailScreen from "../Project Management & Inspection/BidDetailScreen"
import ProjectDetailScreen from "../Project Management & Inspection/ProjectDetailScreen";
import {Image} from "react-native";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function ContractorBottomNav() {
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

          if (route.name === "Discover") {
            iconName = focused ? "search" : "search-outline"; 
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === "My Projects") {
            return focused ? (
              <Image
                source={require("../../assets/projectIconOrange.png")}
                style={{
                  height: size + 5,
                  width: size + 5,
                  marginTop: 5,
                  marginLeft: 5,
                }}
              />
            ) : (
              <Image
                source={require("../../assets/projectIconGray.png")}
                style={{
                  height: size + 5,
                  width: size + 5,
                  marginTop: 5,
                  marginLeft: 5,
                }}
              />
            );
          } else if (route.name === "Messages") {
            iconName = focused
              ? "chatbubble-ellipses"
              : "chatbubble-ellipses-outline"; 
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === "My Contracts") {
            return focused ? (
              <Image
                source={require("../../assets/contractOrange.png")}
                style={{
                  height: size + 5,
                  width: size + 5,
                  marginTop: 5,
                  marginLeft: 5,
                }}
              />
            ) : (
              <Image
                source={require("../../assets/contractGray.png")}
                style={{
                  height: size + 5,
                  width: size + 5,
                  marginTop: 5,
                  marginLeft: 5,
                }}
              />
            );
          } else if (route.name === "My Bids") {
            iconName = "file-invoice-dollar";
            return <FontAwesome5 name={iconName} size={size} color={color} />;
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
        headerShown: false,
        headerTitleAllowFontScaling: true,
        headerTitleAlign: "center",
      })}
    >
      <Tab.Screen name="Discover" component={HomeStack} />
      <Tab.Screen name="My Contracts" component={ContractStack} />
      <Tab.Screen name="My Bids" component={BidStack} />
      <Tab.Screen name="My Projects" component={ProjectStack} />
      <Tab.Screen name="Messages" component={MessageScreen} />
    </Tab.Navigator>
  );
}

const ProjectStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name="Projects" component={ProjectScreen} />
      <Stack.Screen name="ProjectDetails" component={ProjectDetailScreen} />
    </Stack.Navigator>
  );
};

const ContractStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name="Contracts" component={ContractScreen} />
      <Stack.Screen name="ContractDetails" component={ContractDetailScreen} />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ContractDetails" component={ContractDetailScreen} />
    </Stack.Navigator>
  );
};

const BidStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
      })}
    >
      <Stack.Screen
        name="Bids"
        component={BidScreen}
        options={({ route }) => ({
          headerShown: false,
        })}
      />
      <Stack.Screen name="BidDetails" component={BidDetailScreen} />
    </Stack.Navigator>
  );
};