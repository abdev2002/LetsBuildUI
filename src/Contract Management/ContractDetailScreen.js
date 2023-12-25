import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import React, { Component } from "react";
import { colors } from "../Common/Colors";

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;
export default class ContractDetailScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { contract } = this.props.route.params;
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>{contract.title}</Text>
          <Text style={styles.heading}>{"Budget"}</Text>
          <Text style={styles.textInGray}>{contract.budget}</Text>
          <Text style={styles.heading}>{"Timeline"}</Text>
          <Text style={styles.textInGray}>{contract.duration}</Text>
          <Text style={styles.heading}>{"Bid Duration"}</Text>
          <Text style={styles.textInGray}>{"2 days left"}</Text>
          <Text style={styles.heading}>{"Number of Bids"}</Text>
          <Text style={styles.textInGray}>{"5"}</Text>
          <Text style={styles.heading}>{"Description"}</Text>
          <Text style={styles.textInGray}>{contract.description}</Text>
          <Text style={styles.heading}>{"Skills"}</Text>
          <View style={styles.skills}>
            {contract.skills.map((skill, index) => (
              <View style={styles.skill} key={index}>
                <Text style={styles.skillText}>{skill}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    paddingTop: 100,
    backgroundColor: colors.white,
    height: screenHeight,
    padding: 20,
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
    marginVertical: 20
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
  skills: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingVertical: 10,
  },
  skill: {
    backgroundColor: "#ffdba1",
    borderRadius: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  skillText: {
    fontSize: 15,
    fontWeight: "400",
  },
});
