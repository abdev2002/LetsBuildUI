import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

class ContractCard extends Component {
  render() {
    const { notification } = this.props;

    return (
      <TouchableOpacity style={styles.item}>
      <View>
        <Image
          source={require("../../assets/abdullah.png")}
          style={styles.image}
        />
      </View>
        <View style={styles.infoChild}>
          <Text style={styles.headingText}>{notification.title}</Text>
          <Text style={styles.textInGray}>{notification.description}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 50,
    height: 70,
    width: 70,
    marginRight: 15,
    marginLeft: 5,
  },
  item: {
    flex: 1,
    backgroundColor: "white",
    // borderColor: "gray",
    // borderWidth: 1,
    marginHorizontal: 5,
    borderRadius: 5,
    marginTop: 10,
    padding: 10,
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#351c75",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    elevation: 5,
  },
  titleText: {
    fontWeight: "700",
    fontSize: 20,
  },
  infoContainer: {
    flexDirection: "row",
    width: "100%",
    marginVertical: 20,
  },
  textInGray: {
    color: "gray",
    flex: 3,
  },
  infoChild: {
    flex: 1,
  },
  headingText: {
    fontSize: 15,
    fontWeight: "700",
    flex: 1,
  },
});

export default ContractCard;
