import React, {Component} from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import TextInputWithIcon from "../Common/TextInputWithIcon";
import { StatusBar } from "expo-status-bar";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Separator from "../Common/Separator";

const screenWidth = Dimensions.get("window").width;

const colors = {
  white: "#ffffff",
  orange: "#ff9d00",
  black: "#000000",
  gray: "#cccccc",
};
export default class SignupScreen extends Component {
    constructor(props) {
    super(props);
  }
  render() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text
          style={[
            styles.title,
            {
              color: "#ff9d00",
              fontSize: 36,
              marginTop: 100,
              marginBottom: 40,
              fontWeight: "bold",
              textAlign: "center",
            },
          ]}
        >
          LET'S BUILD
        </Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Signup to Let's Build</Text>
        <TouchableOpacity style={styles.googleLoginButton}>
          <Image
            source={require("../../assets/icons8-google-48.png")}
            style={styles.googleIcon}
          />
          <Text style={styles.buttonText}>Continue via Google</Text>
        </TouchableOpacity>
        <Separator text={"Or"} />
        <TextInputWithIcon
          placeholder="Enter First Name"
          width={screenWidth - 40}
          iconColor={"#ccc"}
          icon={"person-circle"}
          iconSize={35}
          Family={Ionicons}
        />
        <TextInputWithIcon
          placeholder="Enter Last Name"
          width={screenWidth - 40}
          iconColor={"#ccc"}
          icon={"person-circle"}
          iconSize={35}
          Family={Ionicons}
        />
        <TextInputWithIcon
          placeholder="Enter Email"
          width={screenWidth - 40}
          iconColor={"#ccc"}
          icon={"email"}
          Family={MaterialCommunityIcons}
        />
        <TextInputWithIcon
          placeholder="Enter Password"
          width={screenWidth - 40}
          iconColor={"#ccc"}
          icon={"form-textbox-password"}
          Family={MaterialCommunityIcons}
        />
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => this.props.navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Create my account</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <Separator text={"Already have an account?"} />
        <View style={styles.linksContainer}>
          <TouchableOpacity
            style={styles.roundButton}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  formContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginVertical: 20,
  },
  loginButton: {
    backgroundColor: "#ff9d00",
    height: 40,
    width: screenWidth - 40,
    borderRadius: 35,
    marginVertical: 10,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  googleLoginButton: {
    backgroundColor: "#01a4ee",
    height: 40,
    width: screenWidth - 40,
    borderRadius: 35,
    marginTop: 30,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
  googleIcon: {
    backgroundColor: "#fff",
    height: 30,
    width: 30,
    resizeMode: "contain",
    borderRadius: 50,
    padding: 2,
    position: "absolute",
    top: 5,
    left: 5,
  },
  roundButton: {
    backgroundColor: colors.orange,
    borderRadius: 50,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 120,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "700",
  },
  linksContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    width: "100%",
    backgroundColor: colors.white,
  },
  bottom: {
    // position: "absolute",
    // bottom: 0,
    // marginTop: 150,
    width: "100%",
    alignItems: "center",
    zIndex: -1000,
  },
});
