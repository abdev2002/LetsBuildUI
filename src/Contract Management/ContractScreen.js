import React,{Component} from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SearchBar from "../Common/SearchBar";
import contracts from "./ContractsData";
import ContractCard from "./ContractCard";
import BidCard from "../Project Management & Inspection/BidCard";

const Tab = createMaterialTopTabNavigator();

export default class ContractScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
      <SearchBar placeholder={"Search contracts"}/>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: "#ff9d00",
            tabBarLabelStyle: { fontWeight: "bold" },
            tabBarInactiveTintColor: "gray",
            tabBarIndicatorStyle: { backgroundColor: "#ff9d00" },
          }}
        >
          <Tab.Screen
            name="Assigned"
            component={AssignedScreen}
            navigation={this.props.navigation}
          />
          <Tab.Screen
            name="Favourites"
            component={FavouritesScreen}
            navigation={this.props.navigation}
          />
        </Tab.Navigator>
      </View>
    );
  }
}
// const contract = ContractsData.generateContract();
function AssignedScreen() {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={contracts}
        renderItem={({ item, navigation }) => (
          <ContractCard
            contract={item}
            // onPress={navigation.navigate("ContractDetails", {
            //   contract: item,
            // })}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

function FavouritesScreen() {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={contracts}
        renderItem={({ item, navigation }) => (
          <ContractCard contract={item} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  searchContainer: {},
  listContainer: {
    flex: 1,
  },
});
