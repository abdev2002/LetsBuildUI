import React, { Component } from "react";
import { View, ScrollView, StyleSheet, Text, Image } from "react-native";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import TextInputWithoutIcon from "../Common/TextInputWithoutIcon";

class AddProductScreen extends Component {
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
          <Text
            style={[
              styles.headingText,
              { textAlign: "left", width: "100%", padding: 20 },
            ]}
          >
            Category *
          </Text>
          <View style={styles.categoryContainer}>
            <View style={styles.categoryButton}>
              <Entypo name={"tools"} size={20} color={"#fff"} />
              <Text style={styles.categoryButtonText}>Tools</Text>
            </View>
            <View style={styles.categoryButton}>
              <FontAwesome5 name={"boxes"} size={20} color={"#fff"} />
              <Text style={styles.categoryButtonText}>Materials</Text>
            </View>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.textInGray}>Title *</Text>
            <TextInputWithoutIcon
              placeholder="Enter title"
              keyboardType="default"
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.textInGray}>Price *</Text>
            <TextInputWithoutIcon
              placeholder="Enter Price"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.textInGray}>Details *</Text>
            <TextInputWithoutIcon
              placeholder="Enter Description"
              keyboardType="default"
            />
          </View>
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
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
    // paddingHorizontal: 20,
    borderBottomColor: "#eee",
    paddingBottom: 20,
    borderBottomWidth: 1,
  },
});

export default AddProductScreen;
