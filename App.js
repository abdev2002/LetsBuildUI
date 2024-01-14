import "react-native-gesture-handler";

// import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./src/Common/MainStack";
import CalculatorStack from "./src/Material estimation and calculation/CalculatorStack";

const App = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default App;
