import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { PureComponent, Component } from "react";
import projects from "../Project Management & Inspection/ProjectData";
import ProjectCard from "../Project Management & Inspection/ProjectCard";
import LocatorAdCard from "../Common/LocatorAdCard";
import CalculatorAdCard from "../Common/CalculatorAdCard";
import { ScrollView } from "react-native-gesture-handler";
import { colors } from "../Common/Colors";
import products from "../Supplier Management/ProductData";
import ProductCard from "../Supplier Management/ProductCard";
import { Ionicons } from "@expo/vector-icons";
import SearchBar from "../Common/SearchBar";
export class DiscoverScreen extends PureComponent {
  constructor(props) {
    super(props);
  }

  showAllProjects = () => {
    this.props.navigation.navigate("Projects");
  };
  showAllProducts = () => {
    this.props.navigation.navigate("Products");
  };

  render() {
    const productEnd = () => {
      return (
        <TouchableOpacity onPress={() => this.showAllProducts()}>
          
          <View
            style={{
              borderRadius: 50,
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              minHeight: "100%",
            }}
          >
            <View
              style={{
                backgroundColor: "#eee",
                borderRadius: 50,
                height: 100,
                width: 100,
                justifyContent: "center",
                alignItems: "center",
                marginHorizontal: 30,
              }}
            >
              <Ionicons name={"cart"} size={50} color={"#ccc"} />
            </View>
          </View>
        </TouchableOpacity>
      );
    };

    return (
      <ScrollView>
        <View style={styles.container}>
        <SearchBar placeholder={"Search"}/>
          <View style={styles.adContainer}>
            <View>
              <LocatorAdCard
                title="Contractor Locator"
                info="Find most suitable contractor"
                detail="According to your projects needs."
                imageSrc="../../assets/mapPng.png"
              />
              <CalculatorAdCard
                title="Cost Calculator"
                info="Best automated solution for"
                detail="Material estimation & calculation"
                imageSrc="../../assets/mapPng.png"
              />
            </View>
          </View>
          <View style={styles.listHeaderContainer}>
            <View style={styles.listHeader}>
              <Text style={styles.listHeaderText}>Projects</Text>
            </View>
            <TouchableOpacity onPress={() => this.showAllProjects()}>
              <Text style={{ color: "gray", fontSize: 17 }}>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.listContainer}>
            <FlatList
              data={projects}
              renderItem={({ item }) => <ProjectCard project={item} />}
              keyExtractor={(item, index) => index.toString()}
              horizontal={true}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              bounces={false}
              overScrollMode="never"
            />
          </View>
          <View style={styles.listHeaderContainer}>
            <View style={styles.listHeader}>
              <Text style={styles.listHeaderText}>Products</Text>
            </View>
            <TouchableOpacity onPress={() => this.showAllProducts()}>
              <Text style={{ color: "gray", fontSize: 17 }}>
                Visit Marketplace
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.listContainer}>
            <FlatList
              data={products}
              renderItem={({ item }) => <ProductCard product={item} />}
              keyExtractor={(item) => item.id.toString()}
              horizontal={true}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              bounces={false}
              overScrollMode="never"
              ListFooterComponent={productEnd}
              initialNumToRender={5}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    alignItems: "center",
    flex: 1,
  },
  adContainer: {
    backgroundColor: colors.white,
    alignItems: "center",
  },
  listHeaderContainer: {
    width: "100%",
    height: "auto",
    padding: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: colors.mediumGray,
    borderBottomColor: colors.mediumGray,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  listHeaderText: {
    fontWeight: "bold",
    fontSize: 25,
    color: colors.orange,
  },
  listContainer: {
    width: "100%",
    paddingVertical: 20,
  },
});

export default DiscoverScreen;
