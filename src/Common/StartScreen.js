import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Splash")}
        >
          <Text style={styles.text}> Start </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    backgroundColor: "#ff9d00",
    color: "white",
    padding: "10",
    fontSize: 36
  },
});

export default HomeScreen;
