import "react-native-gesture-handler";

// import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./src/Common/MainStack";
import CalculatorStack from "./src/Material estimation and calculation/CalculatorStack";
import ImagePickerExample from "./ImagePickerExample";
import SignupScreen from "./src/Registration/SignupScreen";
import GetCNIC from "./src/Registration/GetCNIC";

const App = () => {
  return (
    <NavigationContainer>
    <MainStack />
    {/* // <ImagePickerExample/>
    // <SignupScreen />
    // <GetCNIC/>  */}

    </NavigationContainer>
  );
};

export default App;
