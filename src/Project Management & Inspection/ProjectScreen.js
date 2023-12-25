import React, { Component } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SearchBar from "../Common/SearchBar";
import projects from "../Project Management & Inspection/ProjectData";
import ProjectCard from "../Project Management & Inspection/ProjectCard";
import { Ionicons } from "@expo/vector-icons";

const Tab = createMaterialTopTabNavigator();

const screenWidth = Dimensions.get("window").width;

export default class ProjectScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
       
      </View>
    );
  }
}

class CompletedScreen extends Component {
  constructor(props) {
    super(props);
  }

  navigateToProjectDetail = (item) => {
    this.props.navigation.navigate("ProjectDetails", { project: item });
  };

  renderProjectItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => this.navigateToProjectDetail(item)}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: screenWidth,
          }}
        >
          <ProjectCard project={item} />
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.listContainer}>
        <FlatList
          data={projects}
          renderItem={this.renderProjectItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

class InProgressScreen extends Component {
  constructor(props) {
    super(props);
  }

  navigateToProjectDetail = (item) => {
    this.props.navigation.navigate("ProjectDetails", { project: item });
  };

  renderProjectItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => this.navigateToProjectDetail(item)}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: screenWidth,
          }}
        >
          <ProjectCard project={item} />
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.listContainer}>
        <FlatList
          data={projects}
          renderItem={this.renderProjectItem}
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
  listContainer: {
    flex: 1,
  },
  buttonText: {
    color: "#ff9d00",
    fontWeight: "700",
    fontSize: 20,
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 50,
    borderWidth: 2, // Complete or remove this line
    borderColor: "#ff9d00",
    position: "absolute",
    bottom: 30,
    right: 30,
    shadowColor: "#351c75",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    elevation: 5,
  },
  buttonView: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    paddingRight: 15,
    width: "auto",
  },
});

export { CompletedScreen, InProgressScreen }; // Export the components if needed
