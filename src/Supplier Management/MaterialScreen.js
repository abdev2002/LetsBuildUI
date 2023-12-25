import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import SearchBar from "../Common/SearchBar";
import products from "./ProductData";
import ProductCard from "./ProductCard";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ScrollView } from "react-native-gesture-handler";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";

const Tab = createMaterialTopTabNavigator();

class CatalogueScreen extends Component {
  navigateToProductDetail = (item) => {
    this.props.navigation.navigate("ProductDetail", { product: item });
  };

  renderMaterialCard = ({ item }) => {
    if (item.category === "Materials") {
      return (
        <TouchableOpacity onPress={() => this.navigateToProductDetail(item)}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: " #ffc",
            }}
          >
            <ProductCard product={item} />
          </View>
        </TouchableOpacity>
      );
    }
  };

  render() {
    return (
        <View style={styles.container}>
          <View style={styles.searchContainer}>
            <SearchBar placeholder="Search Materials" />
          </View>
          <View style={styles.listContainer}>
            <FlatList
              data={products}
              renderItem={this.renderMaterialCard}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        </View>
    );
  }
}

export default CatalogueScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  searchContainer: {},
  listContainer: {
    // flex: 1,
    height: "auto",
    // backgroundColor: "#ffc9d0",

    paddingVertical: 10,
  },
  headContainer: {
    width: "100%",
    borderWidth: 1,
    height: "auto",
    alignItems: "center",
    // justifyContent: "center",
    padding: 10,
    flexDirection: "row",
    borderColor: "#eee",
    borderWidth: 1,
  },
  headTextContainer: {
    width: "auto",
    height: "auto",
    alignItems: "center",
    // justifyContent: "center",
    padding: 10,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 50,
    borderColor: "#ff9d00",
    borderWidth: 3,
  },
  headText: {
    color: "#ff9d00",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  viewAll: {
    position: "absolute",
    right: 10,
    color: "#ccc",
    fontSize: 20,
    fontWeight: "bold",
  },
});
