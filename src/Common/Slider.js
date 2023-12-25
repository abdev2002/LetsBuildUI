import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import slides from "./SlidesData";

const screenWidth = Dimensions.get("window").width;


const colors = {
  white: "#ffffff",
  orange: "#ff9d00",
  black: "#000000",
  gray: "#cccccc"
};

export default class Slider extends React.Component {
  state = {
    currentIndex: 0,
  };

  _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name="arrow-forward" color="#fff" size={24} />
      </View>
    );
  };

  _renderPrevButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name="arrow-back" color="#fff" size={24} />
      </View>
    );
  };

  render() {
    return (
      <AppIntroSlider
        showPrevButton
        showNextButton
        data={slides}
        renderItem={this._renderItem}
        renderDoneButton={this._renderDoneButton}
        renderNextButton={this._renderNextButton}
        renderPrevButton={this._renderPrevButton} // Adding Previous Button
        onSlideChange={(index) => this.setState({ currentIndex: index })}
        activeDotStyle={styles.activeDotStyle} // Style active dot for better visibility
        dotStyle={styles.dotStyle}
      />
    );
  }
}

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: colors.orange,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    backgroundColor: colors.white,
    minHeight: "auto",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: colors.black,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    marginHorizontal: 40,
    color: "gray"
  },
  activeDotStyle: {
    backgroundColor: colors.orange,
  },
  dotStyle: {
    backgroundColor: colors.gray,
  },
  image: {
    width: screenWidth - 50,
    height: screenWidth * 0.65,
    resizeMode: "contain",
    marginVertical: 30,
    paddingHorizontal: 30,
  },
});
