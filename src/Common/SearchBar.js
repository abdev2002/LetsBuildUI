import React, { Component } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "./Colors";

const screenWidth = Dimensions.get("window").width;
export default class SearchBar extends Component {
  // constructor(props){
  //   super(props);
  // }
  render() {
    const  placeholder = "Search";

    // console.log(placeholder);
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="search" size={24} color="#fff" />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#AFAFAF"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: colors.mediumGray,
  },
  button: {
    backgroundColor: "#ff9d00",
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 35,
    borderTopRightRadius: 35,
  },
  input: {
    height: 40,
    backgroundColor: "#fff",
    width: "70%",
    paddingHorizontal: 10,
    borderBottomLeftRadius: 35,
    borderTopLeftRadius: 35,
    borderColor: "#ccc",
    borderWidth: 1,
  },
});
