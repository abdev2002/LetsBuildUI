import React, { useState, Component } from "react";
import {
  useWindowDimensions,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Button,
} from "react-native";
import Screen2 from "./Settings";
import LowerHeader from "../LowerHeader";
import HomeScreen from "../Contract Management/HomeScreen";
import ContractScreen from "../Contract Management/ContractScreen";
import ProjectScreen from "../Project Management & Inspection/ProjectScreen";
import Profile from "../Registration/Profile";
import { Ionicons } from "@expo/vector-icons";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import ContractorBottomNav from "../Contractor Management/ContractorBottomNav";
import CustomDrawer from "./CustomDrawer";
import OwnerBottomNav from "../LandownerManagement/OwnerBottomNav";
import SupplierTabNav from "../Supplier Management/SupplierTabNav";
import CalculatorStack from "../Material estimation and calculation/CalculatorStack";
import { colors } from "./Colors";
import HeaderBack from "./HeaderBack";
import ContractorLocator from "../Contractor Management/ContractorLocator";
import NotificationScreen from "../Communication Module/NotificationScreen";

const Drawer = createDrawerNavigator();

export default class AppDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSupplierVisible: false,
      isOwnerVisible: true,
      isContractorVisible: false,
    };
  }

  render() {
    const { isSupplierVisible, isOwnerVisible, isContractorVisible } =
      this.state;

    toggleVisibility = (owner, supplier, contractor) => {
      this.setState({
        isContractorVisible: contractor,
        isSupplierVisible: supplier,
        isOwnerVisible: owner,
      });

      if (owner) {
        this.props.navigation.navigate("Owner's Home");
      } else if (supplier) {
        this.props.navigation.navigate("Supplier's Home");
      } else if (contractor) {
        this.props.navigation.navigate("Contractor's Home");
      }
    };

    return (
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          drawerActiveBackgroundColor: colors.orange,
          drawerActiveTintColor: colors.white,
          drawerAllowFontScaling: true,
          drawerType: "slide",
          headerBackground: () => <HeaderBack />,
          headerTitleAlign: "center",
          headerLeftStyle: {
            color: colors.white,
          },
          headerTitleStyle: {
            color: colors.white,
          },
          headerLeftStyle: {
            color: colors.white,
          },
          headerShadowVisible: false,
          headerTransparent: true,
          headerTintColor: "#fff",
          headerStyle: {
            elevation: 50,
          },
        }}
      >
        {isSupplierVisible && (
          <Drawer.Screen
            name="Supplier's Home"
            component={SupplierTabNav}
            options={{
              drawerIcon: ({ focused, color, size }) => (
                <Ionicons
                  name={focused ? "home" : "home-outline"}
                  color={color}
                  size={size}
                />
              ),
            }}
          />
        )}
        {isOwnerVisible && (
          <Drawer.Screen
            name="Owner's Home"
            component={OwnerBottomNav}
            options={{
              drawerIcon: ({ focused, color, size }) => (
                <Ionicons
                  name={focused ? "home" : "home-outline"}
                  color={color}
                  size={size}
                />
              ),
            }}
          />
        )}
        {isContractorVisible && (
          <Drawer.Screen
            name="Contractor's Home"
            component={ContractorBottomNav}
            options={{
              drawerIcon: ({ focused, color, size }) => (
                <Ionicons
                  name={focused ? "home" : "home-outline"}
                  color={color}
                  size={size}
                />
              ),
              // headerShown: false,
            }}
          />
        )}
        <Drawer.Screen
          name="Profile"
          component={Profile}
          options={{
            drawerIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Notifications"
          component={NotificationScreen}
          options={{
            drawerIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "notifications" : "notifications-outline"}
                color={color}
                size={size}
              />
            ),
          }}
        />
        {!isSupplierVisible && (
          <Drawer.Screen
            name="Material Calculator"
            component={CalculatorStack}
            options={{
              drawerIcon: ({ focused, color, size }) => (
                <Ionicons
                  name={focused ? "calculator" : "calculator-outline"}
                  color={color}
                  size={size}
                />
              ),
            }}
          />
        )}
        {!isSupplierVisible && (
          <Drawer.Screen
            name="Contractor Locator"
            component={ContractorLocator}
            options={{
              drawerIcon: ({ focused, color, size }) => (
                <Ionicons
                  name={focused ? "location" : "location-outline"}
                  color={color}
                  size={size}
                />
              ),
              headerLeftStyle: {
                color: colors.white,
              },
              headerTitleStyle: {
                color: colors.white,
              },
              headerLeftStyle: {
                color: colors.white,
              },
              headerShadowVisible: false,
              headerTransparent: true,
              headerTintColor: "#fff",
              headerStyle: {
                elevation: 50,
              },
            }}
          />
        )}
        <Drawer.Screen
          name="Settings"
          component={Screen2}
          options={{
            drawerIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "settings" : "settings-outline"}
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Change Role"
          options={{
            drawerIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "settings" : "settings-outline"}
                color={color}
                size={size}
              />
            ),
          }}
        >
          {() => (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  width: 150,
                  height: 35,
                  backgroundColor: colors.orange,
                  margin: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 50,
                }}
                onPress={() => toggleVisibility(false, false, true)}
              >
                <Text style={{ color: colors.white }}>Contractor</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 150,
                  height: 35,
                  backgroundColor: colors.orange,
                  margin: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 50,
                }}
                onPress={() => toggleVisibility(false, true, false)}
              >
                <Text style={{ color: colors.white }}>Supplier</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: 150,
                  height: 35,
                  backgroundColor: colors.orange,
                  margin: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 50,
                }}
                onPress={() => toggleVisibility(true, false, false)}
              >
                <Text style={{ color: colors.white }}>Owner</Text>
              </TouchableOpacity>
            </View>
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    );
  }
}
