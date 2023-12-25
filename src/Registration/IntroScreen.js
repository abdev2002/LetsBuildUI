import React, { Component, useState, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Dimensions,
} from "react-native";
import Slider from "../Common/Slider";
import Ionicons from "react-native-vector-icons/Ionicons";

const screenHeight = Dimensions.get("window").height;

const colors = {
  white: "#ffffff",
  orange: "#ff9d00",
  black: "#000000",
  gray: "#cccccc",
};



class IntroScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Slider />
        <View style={styles.linksContainer}>
          <TouchableOpacity
            style={styles.roundButton}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={styles.signup}
              onPress={() => this.props.navigation.navigate("Signup")}
            >
              Don't have an account, Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white

  },
  header: {
    backgroundColor: colors.orange,
    height: 70,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontWeight: "700",
    color: "#fff",
    fontSize: 34,
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
    fontWeight: "700"
  },
  linksContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    backgroundColor: colors.white
  },
  signup:{
    color: "gray"
  }
});

export default IntroScreen;
