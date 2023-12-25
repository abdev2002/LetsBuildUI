import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { PureComponent } from "react";
import { colors } from "./Colors";


const adWidth = Dimensions.get("window").width - 20;

export class CalculatorAdCard extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { title, info, detail } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.info}>{info}</Text>
        <Text style={styles.detail}>{detail}</Text>
        <View>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Try Now</Text>
          </View>
        </View>
        <ImageBackground
          source={require("../../assets/Building-construction-money-1024x768.jpg")}
          style={styles.backgroundImage}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: 15,
    marginTop: 15,
    height: "auto",
    width: adWidth,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
  },
  buttonText: {
    color: colors.orange,
    fontSize: 15,
    fontWeight: "bold",
  },
  button: {
    borderColor: colors.orange,
    borderWidth: 2,
    borderRadius: 50,
    padding: 10,
    marginBottom: 10,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10
  },
  backgroundImage: {
    height: 160,
    width: 200,
    position: "absolute",
    right: 10,
    top: 5,
    zIndex: -10000
  },
  title: {
    color: colors.orange,
    fontSize: 25,
    textAlign: "left",
    fontWeight: "bold"
  },
  info: {
    color: colors.black,
    fontSize: 18,
    textAlign: "left",
  },
  detail: {
    color: colors.black,
    fontSize: 18,
    textAlign: "left",
  },
});

export default CalculatorAdCard;
