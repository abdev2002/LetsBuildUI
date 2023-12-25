import React, { Component } from "react";
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ProductScreen from "./ProductScreen";

const screenWidth = Dimensions.get("window").width;

class ProductCard extends Component {
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
    const { product } = this.props;
    const { heartColor } = this.state;
    return(
      <View style={styles.item}>
          <View style={styles.itemChild}>
            <Image
              source={require("../../assets/icon.png")}
              style={styles.image}
            />
            <View style={styles.absButtons}>
              <TouchableOpacity
                style={styles.circularButtons}
                onPress={this.handleHeartPress}
              >
                <AntDesign name="hearto" size={24} color={heartColor} />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={[
              styles.itemChild,
              { backgroundColor: "#ffc", maxHeight: "auto" },
            ]}
          >
            <Text style={styles.titleText}>{product.name}</Text>
            <View style={styles.infoContainer}>
              <View style={styles.infoChild}>
                <Text style={styles.price}>
                  {product.pricePerUnit}
                  {" PKR"}
                </Text>
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
    // height: screenWidth,
    
    backgroundColor: "#ffffff",
    margin: 10,
    borderRadius: 5,
    marginTop: 10,
    padding: 10,
    shadowColor: "#351c75",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    elevation: 5,
  },
  itemChild: {
    height: "auto",
    width: screenWidth / 2,
  },
  image: {
    resizeMode: "contain",
    width: "100%",
    height: screenWidth / 2,
    width: screenWidth / 2,
  },
  titleText: {
    fontWeight: "700",
    fontSize: 18,
  },
  infoContainer: {
    flexDirection: "row",
    // alignSelf: 'flex-end',
    // width: "100%",
    // marginTop: 20,
  },
  textInGray: {
    color: "gray",
  },
  infoChild: {
    // flex: 1,
    backgroundColor: "#ff9d00",
    paddingHorizontal: 5,
  },
  absButtons: {
    position: "absolute",
    height: 40,
    width: 40,
    right: 5,
    top: 0,
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
  price: {
    color: "white",
    textAlign: "right",
  },
});

export default ProductCard;
