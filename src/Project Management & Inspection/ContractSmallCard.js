import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

class ContractSmallCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { smallContract } = this.props;

    console.log("cskjflah");
    return (
      <View style={styles.item}>
        <View>
          {/* <Text style={styles.titleText}>{contract.title}</Text> */}
          <View style={styles.infoContainer}>
            <View style={styles.infoChild}>
              {/* <Text style={styles.headingText}>{contract.budget}</Text> */}
              <Text style={styles.textInGray}>{`Budget`}</Text>
            </View>
            <View style={styles.infoChild}>
              {/* <Text style={styles.headingText}>{contract.duration}</Text> */}
              <Text style={styles.textInGray}>{`Timeline`}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 5,
    marginTop: 10,
    padding: 10,
    backgroundColor: "#ffffff",
    shadowColor: "#351c75",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    elevation: 5,

    height: 100
  },
  titleText: {
    fontWeight: "700",
    fontSize: 20,
  },
  infoContainer: {
    flexDirection: "row",
    width: "100%",
    marginTop: 20,
  },
  textInGray: {
    color: "gray",
  },
  infoChild: {
    flex: 1,
  },
  skill: {
    backgroundColor: "#ffdba1",
    borderRadius: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
    paddingHorizontal: 10,
  },
  skillText: {
    fontSize: 15,
    fontWeight: "400",
  },
  headingText: {
    fontSize: 15,
    fontWeight: "700",
  },
  absButtons: {
    position: "absolute",
    height: 40,
    width: 40,
    right: 15,
    top: 10,
    flexDirection: "row",
  },
  circularButtons: {
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 40,
    margin: "5%",
  },
});

export default ContractSmallCard;
