import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons,AntDesign } from "@expo/vector-icons";
import SearchBar from "./SearchBar";

const UpperHeader = ({ title, navigation }) => {
  if (title === "Notifications") {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "space-between",
          height: 80,
          paddingBottom: 5,
          backgroundColor: "#ff9d00",
          shadowColor: "#351c75",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            color: "#ffffff",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 5,
          }}
          onPress={() => navigation.navigate("Profile")}
        >
          <Ionicons name="person-circle-outline" size={30} color={"#ffffff"} />
        </TouchableOpacity>
        <Text
          style={{
            flex: 7,
            textAlign: "center",
            fontWeight: "700",
            fontSize: 36,
            color: "#ffffff",
          }}
        >
          {title}
        </Text>
        <TouchableOpacity
          style={{
            flex: 1,
            color: "#ffffff",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 5,
          }}
          onPress={() => navigation.navigate("Message")}
        >
          <AntDesign name="message1" size={24} color={"#ffffff"} />
        </TouchableOpacity>
      </View>
    );
  } else if (title === "Discover") {
    return (    <View
      style={{
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        // height: 100,
        // paddingBottom: 10,
        backgroundColor: "#ff9d00",
      }}
    >
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Ionicons name="md-menu" size={40} color={"white"} />
      </TouchableOpacity>
      <Text
        style={{
          flex: 1,
          textAlign: "center",
          fontWeight: "700",
          fontSize: 36,
          color: "#ffffff",
        }}
      >
        {title}
      </Text>
      <TouchableOpacity onPress={() => console.log("Search action")}>
        <Ionicons name="md-search" size={40} color={"white"} />
      </TouchableOpacity>
    </View>)
  }
  
  else {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "space-between",
          height: 80,
          paddingBottom: 5,
          backgroundColor: "#ff9d00",
          shadowColor: "#351c75",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            fontWeight: "700",
            fontSize: 36,
            color: "#ffffff",
          }}
        >
          {title}
        </Text>
      </View>
    );
  }
};

export default UpperHeader;
