import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SearchBar from "../Common/SearchBar";
import projects from "../Project Management & Inspection/ProjectData";
import ProjectCard from "../Project Management & Inspection/ProjectCard";

const Tab = createMaterialTopTabNavigator();

export default function ProjectScreen() {
  return (
    <View style={styles.container}>
      <SearchBar />
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
      <TouchableOpacity style={styles.button}>
        <View>
            <Ionicons name={"add"} size={30} color={"#ff9d00"}/>
            <Text>New</Text>
        </View>
      </TouchableOpacity>
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
    paddingTop: 100,
  },
  searchContainer: {},
  listContainer: {
    flex: 1,
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#ff9d00"
  }
});
