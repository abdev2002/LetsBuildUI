import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

class ContractCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heartColor: "gray",
    };
  }

  handleHeartPress = () => {
    this.setState((prevState) => ({
      heartColor: prevState.heartColor === "gray" ? "#ff9d00" : "gray",
    }));
  };


  render() {
    const { contract,navigation } = this.props;
    const { heartColor } = this.state;

// console.log(navigation)

    return (
      <View style={styles.item}>
        <TouchableOpacity
          // onPress={navigation.navigate("ContractDetails", {
          //   contract: contract,
          // })}
        >
          <Text style={styles.titleText}>{contract.title}</Text>
          <View style={styles.infoContainer}>
            <View style={styles.infoChild}>
              <Text style={styles.headingText}>{contract.budget}</Text>
              <Text style={styles.textInGray}>{`Budget`}</Text>
            </View>
            <View style={styles.infoChild}>
              <Text style={styles.headingText}>{contract.duration}</Text>
              <Text style={styles.textInGray}>{`Timeline`}</Text>
            </View>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.infoChild}>
              <Text style={styles.headingText}>{"2 days left"}</Text>
              <Text style={styles.textInGray}>{`Bid Duration`}</Text>
            </View>
            <View style={styles.infoChild}>
              <Text style={styles.headingText}>{5}</Text>
              <Text style={styles.textInGray}>{`No of bids`}</Text>
            </View>
          </View>
          <Text
            style={[styles.textInGray, { marginVertical: 20 }]}
          >{`Description: ${contract.description}`}</Text>
        </TouchableOpacity>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {contract.skills.map((skill, index) => (
            <View style={styles.skill} key={index}>
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.absButtons}>
          <TouchableOpacity
            style={styles.circularButtons}
            onPress={this.handleHeartPress}
          >
            <AntDesign name="hearto" size={24} color={heartColor} />
          </TouchableOpacity>
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
    // Shadow properties for iOS
    backgroundColor: "#ffffff",
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
    // borderColor: 'gray',
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 40,
    margin: "5%",
  },
});

export default ContractCard;
