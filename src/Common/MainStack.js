import React, { useEffect } from "react";
import { StyleSheet, Dimensions, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../Registration/LoginScreen";
import StartScreen from "../Common/StartScreen";
import IntroScreen from "../Registration/IntroScreen";
import SignupScreen from "../Registration/SignupScreen";
import AppDrawer from "./AppDrawer";
import { colors } from "./Colors";
import GetProfilePic from "../Registration/GetProfilePic";
import GetCNIC from "../Registration/GetCNIC";

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer independent={true} initialRouteName="Login">
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.orange,
          },
          headerTitleStyle: {
            color: colors.white,
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 30,
          },
          headerTitleAllowFontScaling: true,
          headerTitleAlign: "center",
        }}
        initialRouteName="start"
      >
        {/* <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Intro"
          component={IntroScreen}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfilePic"
          component={GetProfilePic}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GetCNIC"
          component={GetCNIC}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Drawer"
          component={AppDrawer}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Intro");
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/spl.png")} style={styles.image} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.orange,
  },
  image: {
    width: "90%",
    height: Dimensions.get("window").height / 2.7,
  },
});

export default MainStack;
