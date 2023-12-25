import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const LowerHeader = ({ title, navigation }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "center",
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
      <TouchableOpacity style={{position: "absolute", left: 5}} onPress={() => navigation.toggleDrawer()}>
        <Ionicons name="md-menu" size={40} color={"#ffffff"} />
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
      {/* <TouchableOpacity onPress={() => console.log("Search action")}>
        <Ionicons name="md-search" size={40} color={"#ffffff"} />
      </TouchableOpacity> */}
    </View>
  );
};

export default LowerHeader;
