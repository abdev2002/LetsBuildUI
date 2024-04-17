import React from "react";
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

const ProductScreen = ({ route }) => {
  const { product } = route.params;
  const imageMap = {
    "../../assets/Tools/Measuring-Tape.bmp": require("../../assets/Tools/Measuring-Tape.bmp"),
    "../../assets/Tools/Plumb-Bob.bmp": require("../../assets/Tools/Plumb-Bob.bmp"),
    "../../assets/Tools/Concrete-Mixer.bmp": require("../../assets/Tools/Concrete-Mixer.bmp"),
    "../../assets/Tools/Framing-Square.bmp": require("../../assets/Tools/Framing-Square.bmp"),
    "../../assets/Tools/Tile-Setters.bmp": require("../../assets/Tools/Tile-Setters.bmp"),
  };
  return (
    <ScrollView vertical style={styles.container}>
      <View style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>product ID:</Text>
        <Text style={styles.text}>{product.id}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Quantity :</Text>
        <Text style={styles.text}>{product.quantity}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Supplier:</Text>
        <Text style={styles.text}>{product.supplier}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>PricePerUnit:</Text>
        <Text style={styles.text}>{product.pricePerUnit}</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.amount}>{product.pricePerUnit} PKR</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
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
    width: 80,
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

export default ProductScreen;
