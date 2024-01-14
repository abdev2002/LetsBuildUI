import React, { Component } from "react";
import { Text, View, Image, StyleSheet, Dimensions } from "react-native";
import { colors } from "../Common/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import HeaderBack from "../Common/HeaderBack";

const screenWidth = Dimensions.get("window").width;

class CalculationTypeScreen extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <View style={styles.container}>
      <HeaderBack/>
        <Text style={styles.label}>
          To calculate the cost of your project please select the type of
          project from the following options
        </Text>
        <View style={styles.gridContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("House")}
              style={styles.button}
            >
              <Image
                source={require("../../assets/CalculatorButtons/13664-NP28QT.jpg")}
                style={styles.buttonImage}
              />
              <Text>House</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Road")}
              style={styles.button}
            >
              <Image
                source={require("../../assets/CalculatorButtons/29084-6-road-transparent-image.png")}
                style={styles.buttonImage}
              />
              <Text>Road</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Gray Structure")}
              style={styles.button}
            >
              <Image
                source={require("../../assets/CalculatorButtons/pngwing.com.png")}
                style={styles.buttonImage}
              />
              <Text>Gray Structure</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Block Road")}
              style={styles.button}
            >
              <Image
                source={require("../../assets/CalculatorButtons/tile.jpg")}
                style={styles.buttonImage}
              />
              <Text>Road (Blocks)</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.white,
    paddingTop: 100,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  button: {
    height: screenWidth / 2 - 15,
    width: screenWidth / 2 - 15,
    borderRadius: 15,
    borderWidth: 1,
    marginLeft: 10,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.lightGray,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    elevation: 5,
  },
  buttonImage: {
    resizeMode: "contain",
    height: 100,
    width: 100,
    // borderRadius: 5000,
  },
  gridContainer: {
    width: screenWidth,
    flexDirection: "row",
  },
  label: {
    paddingHorizontal: 20,
    margin: 20,
    color: colors.darkGray,
    textAlign: "center",
  },
});

export default CalculationTypeScreen;
