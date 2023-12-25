import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity
} from "react-native";
import React, { Component } from "react";
import { colors } from "../Common/Colors";
import smallContracts from "./SmallContractsData";
import ContractSmallCard from "./ContractSmallCard";
import {Ionicons} from "@expo/vector-icons"
const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;
export default class ProjectDetailScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { project } = this.props.route.params;

    renderContractItem = ({ item }) => {
      return (
        <TouchableOpacity onPress={() => this.navigateToContractDetail(item)}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: screenWidth,
            }}
          >
            <ContractSmallCard smallContract={item} />
          </View>
        </TouchableOpacity>
      );
    };

    return (
      // <ScrollView>
      <View style={styles.container}>
        <Image source={require("../../assets/icon.png")} style={styles.image} />
        <Text style={styles.title}>{project.title}</Text>
        <Text style={styles.heading}>{"Budget"}</Text>
        <Text style={styles.textInGray}>{project.budget}</Text>
        <Text style={styles.heading}>{"Timeline"}</Text>
        <Text style={styles.textInGray}>{project.duration}</Text>
        <Text style={styles.heading}>{"Description"}</Text>
        <Text style={styles.textInGray}>{project.description}</Text>
        <Text style={styles.heading}>{"Contracts"}</Text>

        <View style={styles.listContainer}>
          <FlatList
            data={smallContracts}
            renderItem={this.renderContractItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("New Contract")}
          style={styles.button}
        >
          <View style={styles.buttonView}>
            <Ionicons name={"add"} size={30} color={"#ff9d00"} />
            <Text style={styles.buttonText}>New Contract</Text>
          </View>
        </TouchableOpacity>
      </View>
      // </ScrollView>
    );
  }
}

// console.log(smallContracts[1])

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: colors.white,
    padding: 20,
    minHeight: "auto",
    height: screenHeight + 300,
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
  image: {
    resizeMode: "cover",
    maxWidth: "100%",
    maxHeight: screenWidth - 40,
    marginVertical: 20,
    alignContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    color: colors.black,
    marginTop: 10,
  },
  textInGray: {
    fontSize: 15,
    lineHeight: 20,
    color: colors.darkGray,
  },
  listContainer: {
    marginTop: 20,
  },
});
