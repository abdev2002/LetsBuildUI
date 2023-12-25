import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProjectScreen from "./ProjectScreen";
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
import ContractDetailScreen from "../Contract Management/ContractDetailScreen";
import BidScreen from "../Project Management & Inspection/BidScreen";
import BidDetailScreen from "../Project Management & Inspection/BidDetailScreen";
import DiscoverScreen from "./DiscoverScreen";
import ProductScreen from "../Supplier Management/ProductScreen";
import AddProductScreen from "../Supplier Management/AddProductScreen";
import AddProjectScreen from "../Project Management & Inspection/AddProjectScreen";
import ProjectDetailScreen from "../Project Management & Inspection/ProjectDetailScreen";
import NewContractScreen from "../Contract Management/NewContractScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function OwnerBottomNav() {
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
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Discover") {
            iconName = focused ? "search" : "search-outline"; // Replace with the appropriate Ionicons name
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === "My Projects") {
            iconName = focused ? "project" : "project"; // Replace with the appropriate icon
            return <Octicons name={iconName} size={size} color={color} />;
            // return <Image source={require("../../assets/projectIcon.png")} style={{height:{size}, width: {size}}}/>;
          } else if (route.name === "Messages") {
            iconName = focused
              ? "chatbubble-ellipses"
              : "chatbubble-ellipses-outline"; // Replace with the appropriate icon
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === "My Contracts") {
            iconName = "file-contract";
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          } else if (route.name === "Bids") {
            iconName = "file-invoice-dollar";
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          }
        },
      })}
    >
      <Tab.Screen name="Discover" component={DiscoverStack} />
      <Tab.Screen name="My Projects" component={ProjectStack} />
      <Tab.Screen name="My Contracts" component={ContractStack} />
      <Tab.Screen name="Messages" component={MessageScreen} />
    </Tab.Navigator>
  );
}

const DiscoverStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        // headerShown: false,
      })}
    >
      <Stack.Screen
        name="DiscoverScreen"
        component={DiscoverScreen}
        options={{
          //  headerShown: false,
          headerLeftStyle: {
            color: "#FF9d00",
          },
          headerTitleStyle: {
            color: "#FF9d00",
          },
          headerLeftStyle: {
            color: "#fff",
          },
          headerTitle: "Welcome " + "M. Abdullah",
        }}
      />
      <Stack.Screen
        name="Projects"
        component={ProjectScreen}
        options={{
          //  headerShown: false,
          headerLeftStyle: {
            color: "#FF9d00",
          },
          headerTitleStyle: {
            color: "#FF9d00",
          },
          headerLeftStyle: {
            color: "#fff",
          },
          // headerTitle: "Welcome " + "M. Abdullah",
        }}
      />
      <Stack.Screen name="Products" component={ProductScreen} />
      {/* <Stack.Screen name="Products Details" component={ProductDetailScreen} /> */}

      {/* <Stack.Screen name="ProjectsDetails" component={ProjectDetailScreen} /> */}
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
      <Stack.Screen name="New Contract" component={NewContractScreen} />
    </Stack.Navigator>
  );
};

const ProjectStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name="Projects" component={ProjectScreen} />
      <Stack.Screen name="ProjectDetails" component={ProjectDetailScreen} />
      <Stack.Screen name="New Project" component={AddProjectScreen} />
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
