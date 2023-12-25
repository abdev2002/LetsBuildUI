import React from "react";
import { View, StyleSheet,FlatList } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SearchBar from "../Common/SearchBar";
import contracts from "./ContractsData";
import ContractCard from "./ContractCard";

const Tab = createMaterialTopTabNavigator();

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchBar placeHolder="Search contracts"/>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#ff9d00',
          tabBarLabelStyle: { fontWeight: "bold" },
          tabBarInactiveTintColor: 'gray',
          tabBarIndicatorStyle: { backgroundColor: "#ff9d00" },
        }}
      >
        <Tab.Screen name="New Contracts" component={NewContractsScreen} />
        <Tab.Screen name="Best Matches" component={BestMatchesScreen} />
      </Tab.Navigator>
    </View>
  );
}
// const contract = ContractsData.generateContract();
function NewContractsScreen() {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={contracts}
        renderItem={({ item }) => <ContractCard contract={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

function BestMatchesScreen() {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={contracts}
        renderItem={({ item }) => <ContractCard contract={item} />}
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
