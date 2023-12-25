import React, { Component } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SearchBar from "../Common/SearchBar";
import contracts from "./ContractsData";
import ContractCard from "./ContractCard";

const screenWidth = Dimensions.get("screen").width;
const Tab = createMaterialTopTabNavigator();

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchBar placeholder={"Search contracts"} />
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: "#ff9d00",
            tabBarLabelStyle: { fontWeight: "bold" },
            tabBarInactiveTintColor: "gray",
            tabBarIndicatorStyle: { backgroundColor: "#ff9d00" },
          }}
        >
          <Tab.Screen
            name="New Contracts"
            component={NewScreen}
            navigation={this.props.navigation}
          />
          <Tab.Screen
            name="Best Matches"
            component={BestScreen}
            navigation={this.props.navigation}
          />
        </Tab.Navigator>
      </View>
    );
  }
}

class NewScreen extends Component {
  constructor(props) {
    super(props);
  }

  navigateToContractDetail = (item) => {
    this.props.navigation.navigate("ContractDetails", { contract: item });
  };

  renderContractItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => this.navigateToContractDetail(item)}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: screenWidth,
          }}
        >
          <ContractCard contract={item} />
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.listContainer}>
        <FlatList
          data={contracts}
          renderItem={this.renderContractItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

class BestScreen extends Component {
  constructor(props) {
    super(props);
  }

  navigateToContractDetail = (item) => {
    this.props.navigation.navigate("ContractDetails", { contract: item });
  };

  renderContractItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => this.navigateToContractDetail(item)}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: screenWidth,
          }}
        >
          <ContractCard contract={item} />
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.listContainer}>
        <FlatList
          data={contracts}
          renderItem={this.renderContractItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: 100,
  },
  searchContainer: {},
  listContainer: {
    flex: 1,
  },
});
