import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SearchBar from "../Common/SearchBar";
import projects from "./ProjectData";
import ProjectCard from "./ProjectCard";

const Tab = createMaterialTopTabNavigator();

export default function ProjectScreen() {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#ff9d00",
          tabBarLabelStyle: { fontWeight: "bold" },
          tabBarInactiveTintColor: "gray",
          tabBarIndicatorStyle: { backgroundColor: "#ff9d00" },
        }}
      >
        <Tab.Screen name="Completed" component={CompletedScreen} />
        <Tab.Screen name="In Progress" component={InProgressScreen} />
      </Tab.Navigator>
    </View>
  );
}
function CompletedScreen() {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={projects}
        renderItem={({ item }) => <ProjectCard project={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

function InProgressScreen() {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={projects}
        renderItem={({ item }) => <ProjectCard project={item} />}
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
