import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import TextInputWithIcon from "../Common/TextInputWithIcon";
import Separator from "../Common/Separator";
import { StatusBar } from "expo-status-bar";

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
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleNext = () => {
    if (this.state.password !== this.state.confirmPassword) {
      // Passwords don't match, show an alert or error message
      return;
    }

    // Navigate to ProfileInfoScreen
    this.props.navigation.navigate("ProfilePic");
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>LET'S BUILD</Text>
        </View>
        <View style={styles.formContainer}>
          {/* <Text style={styles.small}>Signup</Text>/ */}
          <Text style={styles.small}>Sign Up to Let's Build</Text>

          <TextInputWithIcon
            placeholder="Enter Email"
            width={screenWidth - 40}
            iconColor={"#ccc"}
            icon={"email-outline"}
            Family={MaterialCommunityIcons}
            onChangeText={(email) => this.setState({ email })}
            value={this.state.email}
          />
          <TextInputWithIcon
            placeholder="Enter Password"
            width={screenWidth - 40}
            iconColor={"#ccc"}
            icon={"form-textbox-password"}
            Family={MaterialCommunityIcons}
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
            secureTextEntry
          />
          <TextInputWithIcon
            placeholder="Confirm Password"
            width={screenWidth - 40}
            iconColor={"#ccc"}
            icon={"form-textbox-password"}
            Family={MaterialCommunityIcons}
            onChangeText={(confirmPassword) =>
              this.setState({ confirmPassword })
            }
            value={this.state.confirmPassword}
            secureTextEntry
          />
          <TouchableOpacity style={styles.nextButton} onPress={this.handleNext}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
          <Separator text={"Or"} />
          <TouchableOpacity style={styles.googleLoginButton}>
            <Image
              source={require("../../assets/icons8-google-48.png")}
              style={styles.googleIcon}
            />
            <Text style={styles.buttonText}>Login via Google</Text>
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
                <Text style={styles.buttonTextWhite}>Login</Text>
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
    marginBottom: 30,
  },
  title: {
    color: "#ff9d00",
    fontSize: 36,
    marginTop: 100,
    marginBottom: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  small: {
    fontSize: 24,
    marginVertical: 20,
  },
  // small: {
  //   color: "#ff9d00",
  //   fontSize: 36,
  //   marginTop: 50,
  //   marginBottom: 50,
  //   fontWeight: "bold",
  //   textAlign: "center",
  // },
  nextButton: {
    backgroundColor: "#ff9d00",
    height: 40,
    width: screenWidth - 40,
    borderRadius: 35,
    marginVertical: 10,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
  buttonTextWhite: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "700",
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
  googleLoginButton: {
    backgroundColor: "#01a4ee",
    height: 40,
    width: screenWidth - 40,
    borderRadius: 35,
    marginTop: 10,
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
  linksContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    width: "100%",
    backgroundColor: colors.white,
  },
  bottom: {
    bottom: 10,
    width: "100%",
    alignItems: "center",
    position: "absolute",
  },
});
