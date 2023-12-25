import { Text, StyleSheet, View, ImageBackground } from 'react-native'
import React, { Component } from 'react'

export default class HeaderBack extends Component {
  render() {
    return (
        <>
      <ImageBackground
        source={require("../../assets/background_image.jpg")}
        style={styles.backgroundImage}
      /></>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    paddingVertical: 20,
    width: "100%",
    overflow: "hidden",
    borderBottomLeftRadius: 37,
    borderBottomRightRadius: 37,
    paddingTop: 50,
    position: "absolute",
    top: 0,
    height: 100,
  },
});