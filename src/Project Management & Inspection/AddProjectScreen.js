import React, { Component } from "react";
import { View, ScrollView, StyleSheet, Text, Image,TouchableOpacity } from "react-native";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import TextInputWithoutIcon from "../Common/TextInputWithoutIcon";

class AddProjectScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.ScrollContainer} vertical>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Text style={styles.headingText}>UPLOAD UP TO 5 PHOTOS</Text>
            <Image
              source={require("../../assets/icon.png")}
              style={styles.productImage}
            />
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.textInGray}>Title *</Text>
            <TextInputWithoutIcon
              placeholder="Enter title"
              keyboardType="default"
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.textInGray}>Budget *</Text>
            <TextInputWithoutIcon
              placeholder="Enter Bidget"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.textInGray}>Timeline *</Text>
            <TextInputWithoutIcon
              placeholder="Enter Timeline"
              keyboardType="default"
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.textInGray}>Description *</Text>
            <TextInputWithoutIcon
              placeholder="Enter Description"
              keyboardType="default"
            />
          </View>
          <TouchableOpacity style={styles.addButton}>
            <Text
              style={styles.buttonText}
              onPress={() => this.props.navigation.navigate("Drawer")}
            >
              Create new Project
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  ScrollContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
  addButton: {
    backgroundColor: "#ff9d00",
    height: 40,
    width: 200,
    borderRadius: 35,
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 100,
  },
  textInGray: {
    fontWeight: "bold",
    fontSize: 17,
    marginVertical: 5,
  },
  imageContainer: {
    borderRadius: 5,
    width: "90%",
    alignItems: "center",
    backgroundColor: "#eee",
    marginVertical: 10,
  },
  headingText: {
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 5,
  },
  button: {
    backgroundColor: "#ff9d00",
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
  },
  productImage: {
    height: 150,
    width: "100%",
    borderRadius: 5,
    resizeMode: "cover",
  },
  categoryContainer: {
    flexDirection: "row",
    width: "90%",
    marginHorizontal: 20,
    alignSelf: "flex-start",
    borderBottomColor: "#eee",
    paddingBottom: 20,
    borderBottomWidth: 1,
  },
  categoryButton: {
    height: 40,
    borderRadius: 50,
    backgroundColor: "#ff9d00",
    width: "auto",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    marginRight: 10,
  },
  categoryButtonText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 10,
  },
  infoContainer: {
    flex: 1,
    width: "90%",
    borderBottomColor: "#eee",
    paddingBottom: 20,
    borderBottomWidth: 1,
  },
});

export default AddProjectScreen;
