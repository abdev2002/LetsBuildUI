import React, {Component} from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Dimensions,
  ScrollView,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

const screenWidth = Dimensions.get("window").width;

class BidDetailScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { bid } = this.props.route.params;
    
    return (
      <ScrollView vertical style={styles.container}>
        <Text style={styles.title}>{bid.title}</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Bid ID:</Text>
          <Text style={styles.text}>{bid.id}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Duration:</Text>
          <Text style={styles.text}>{bid.duration}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Customer:</Text>
          <Text style={styles.text}>{bid.BidingPerson}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Description:</Text>
          <Text style={styles.text}>{bid.description}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{bid.amount} PKR</Text>
        </View>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    paddingTop: 50
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  detailsContainer: {
    flexDirection: "row",
    // marginBottom: 10,
    // backgroundColor: "#ffff00",
  },
  label: {
    padding: 5,
    fontWeight: "bold",
    width: 90,
    borderColor: "#ccc",
    borderTopWidth: 1,
  },
  text: {
    borderColor: "#ccc",
    borderLeftWidth: 1,
    flex: 1,
    paddingHorizontal: 5,
    borderColor: "#ccc",
    borderTopWidth: 1,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    // marginBottom: 10,
    marginTop: 10,
  },
  status: {
    padding: 5,
    borderRadius: 5,
  },
  statusText: {
    color: "#fff",
    fontWeight: "bold",
  },
  amountContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    paddingTop: 10,
    borderTopColor: "#ddd",
    alignItems: "flex-end",
  },
  amount: {
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: screenWidth - 40,
    height: screenWidth - 40,
    resizeMode: "contain",
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#ccc",
  },
  btns: {
    borderRadius: 50,
    height: 50,
    width: 50,
    backgroundColor: "#ff9d00",
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  absButtons: {
    right: 0,
    // bottom: 50,
    position: "absolute",
    flexDirection: "column",
  },
});

export default BidDetailScreen;
