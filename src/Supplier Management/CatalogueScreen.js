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

  navigateToMaterialScreen = () => {
    this.props.navigation.navigate("Materials");
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

  renderToolCard = ({ item }) => {
    if (item.category === "Tools") {
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
      <ScrollView vertical>
        <View style={styles.container}>
          {/* <View style={styles.searchContainer}>
            <SearchBar placeholder="Search Products" />
          </View> */}
          <View style={styles.headContainer}>
            <View style={styles.headTextContainer}>
              <FontAwesome5 name={"boxes"} size={20} color={"#ff9d00"} />
              <Text style={styles.headText}>Materials</Text>
            </View>
            <Text
              style={styles.viewAll}
              onPress={() => this.navigateToMaterialScreen()}
            >
              View all
            </Text>
          </View>
          <View style={styles.listContainer}>
            <FlatList
              data={products}
              renderItem={this.renderMaterialCard}
              keyExtractor={(item) => item.id.toString()}
              horizontal={true} // Set FlatList to display items horizontally
            />
          </View>
          <View style={styles.headContainer}>
            <View style={styles.headTextContainer}>
              <Entypo name={"tools"} size={20} color={"#ff9d00"} />
              <Text style={styles.headText}>Tools</Text>
            </View>
            <Text style={styles.viewAll}>View all</Text>
          </View>
          <View style={styles.listContainer}>
            <FlatList
              data={products}
              renderItem={this.renderToolCard}
              keyExtractor={(item) => item.id.toString()}
              horizontal={true} // Set FlatList to display items horizontally
            />
          </View>
        </View>
      </ScrollView>
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
    width: "90%",
    borderWidth: 1,
    height: "auto",
    alignItems: "center",
    // justifyContent: "center",
    padding: 10,
    flexDirection: "row",
    borderColor: "#eee",
    borderWidth: 1,
    borderRadius: 35,
    borderColor: "#ff9d00",
    borderWidth: 3,
    margin: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  headTextContainer: {
    width: "auto",
    height: "auto",
    alignItems: "center",
    // justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#fff",
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
