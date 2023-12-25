import React, { useEffect } from "react";
import { StyleSheet, Dimensions, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { colors } from "../Common/Colors";
import CalculationTypeScreen from "./CalculationTypeScreen";
import HouseScreen from "./HouseScreen";
import BlockRoadScreen from "./BlockRoadScreen"
import RoadScreen from "./RoadScreen"
import GrayStructureScreen from "./GrayStructureScreen";

const Stack = createStackNavigator();

const CalculatorStack = () => {
  return (
    <NavigationContainer independent={true} initialRouteName="start">
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          // headerStyle: {
          //   backgroundColor: colors.orange,
          // },
        }}
        initialRouteName="start"
      >
        <Stack.Screen
          name="Start"
          component={CalculationTypeScreen}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="House"
          component={HouseScreen}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Gray Structure"
          component={GrayStructureScreen}
        />
        <Stack.Screen
          name="Road"
          component={RoadScreen}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Block Road"
          component={BlockRoadScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};


export default CalculatorStack;
