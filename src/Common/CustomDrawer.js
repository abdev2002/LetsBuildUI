import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { colors } from "./Colors";

const CustomDrawer = (props) => {
  const { navigation } = props;
  const [showModeList, setShowModeList] = useState(false);
  const [selectedMode, setSelectedMode] = useState("supplier");

  const handleLogout = () => {
    navigation.navigate("Login");
  };


  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.contentContainer}
      >
        <ImageBackground
          source={require("../../assets/background_image.jpg")}
          style={styles.backgroundImage}
        >
          <View style={styles.userInfoContainer}>
            <Image
              style={styles.userImage}
              source={require("../../assets/abdullah.png")}
            />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>M. Abdullah</Text>
              <Text style={styles.userRole}>Supplier</Text>
            </View>
          </View>
        </ImageBackground>

        <View style={styles.listContainer}>
       
          <DrawerItemList {...props} />
     
        </View>
      </DrawerContentScrollView>
      <View style={styles.endContainer}>
        <TouchableOpacity style={styles.buttonContainer} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
        <Text style={styles.footerText}>
          Copyright @2024 All rights reserved.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 50,
  },
  backgroundImage: {
    paddingVertical: 20,
    width: "100%",
    overflow: "hidden",
    borderBottomLeftRadius: 37,
    borderBottomRightRadius: 37,
    paddingTop: 50,
    position: "absolute",
    top: 0,
  },
  userInfoContainer: {
    height: "auto",
    flexDirection: "row",
    marginHorizontal: 20,
  },
  userImage: {
    width: 64,
    height: 64,
    borderRadius: 50,
  },
  modeContainer: {},
  listContainer: {
    marginTop: 120,
  },
  userInfo: {
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  userName: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold",
  },
  userRole: {
    color: colors.white,
    fontSize: 15,
    fontWeight: "bold",
  },
  endContainer: {
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 100,
    paddingVertical: "20",
    borderTopColor: colors.lightGray,
    borderTopWidth: 1,
  },
  footerText: {
    color: "gray"
  },
  buttonText:{
    color:colors.orange,
    fontSize: 15,
    fontWeight: "bold"
  },
  buttonContainer: {
    borderColor: colors.orange,
    borderWidth: 2,
    borderRadius: 50,
    padding: 10,
    marginBottom: 10,
    width: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  modeListContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  modeButton: {
    padding: 10,
    backgroundColor: colors.orange,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    color: colors.white
  },
});

export default CustomDrawer;
