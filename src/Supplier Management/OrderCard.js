import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

const screenWidth = Dimensions.get("window").width;
const statusWidth = screenWidth - 150;
const imageMap = {
  "../../assets/Tools/Measuring-Tape.bmp": require("../../assets/Tools/Measuring-Tape.bmp"),
  "../../assets/Tools/Plumb-Bob.bmp": require("../../assets/Tools/Plumb-Bob.bmp"),
  "../../assets/Tools/Concrete-Mixer.bmp": require("../../assets/Tools/Concrete-Mixer.bmp"),
  "../../assets/Tools/Framing-Square.bmp": require("../../assets/Tools/Framing-Square.bmp"),
  "../../assets/Tools/Tile-Setters.bmp": require("../../assets/Tools/Tile-Setters.bmp"),
};
class OrderCard extends Component {
  constructor(props) {
    super(props);
  }

  statusColor = () => {
    const { order } = this.props;
    switch (order.status) {
      case "Pending":
        return "#FF0000"; // Red color for Pending status
      case "Shipped":
        return "#0000FF"; // Blue color for Shipped status
      case "Delivered":
        return "#008000"; // Green color for Delivered status
      default:
        return "#EEEEEE"; // Default color if status doesn't match
    }
  };


  render() {
    const { order } = this.props;
    const color = this.statusColor();

    return (
      <View style={styles.item}>
        {/* <View style={styles.absId}>
          <Text style={styles.whiteText}>{order.id}</Text>
        </View> */}
        <View style={styles.firstChild}>
          <Image source={imageMap[order.imageAddress]} style={styles.image} />
        </View>
        <View style={styles.secondChild}>
          <Text style={styles.titleText}>{order.title} {order.quantity}x</Text>
          <Text style={styles.textInGray}>{order.orderingPerson}</Text>
          <Text style={styles.textInGray}>{order.address}</Text>
          <View
            style={{
              minWidth: statusWidth,
              width: "auto",
              backgroundColor: color, // Using color variable for dynamic background color
              minHeight: 20,
              borderRadius: 5,
              marginVertical: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.whiteText}>{order.status}</Text>
          </View>
        </View>
        <ImageBackground
          source={require("../../assets/priceBg.png")}
          resizeMode="cover"
          style={styles.absPrice}
        >
          <Text style={styles.whiteText}>
            {order.amount}
            {" PKR"}
          </Text>
        </ImageBackground>
         <ImageBackground
          source={require("../../assets/orderBgFlipped.png")}
          resizeMode="cover"
          style={styles.absLowerLeft}
        ></ImageBackground> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#ffffff",
    marginHorizontal: 10,
    borderRadius: 5,
    marginTop: 10,
    padding: 10,
    // maxHeight: 100,
    shadowColor: "#351c75",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    elevation: 5,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  firstChild: {
    height: 100,
    backgroundColor:"#ff9d",
    borderRadius:50,
    width: 100,
  },
  secondChild: {
    width: screenWidth - 220,
    paddingHorizontal: 10,
  },
  idContainer: {
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffc",
  },
  image: {
    resizeMode: "contain",
    maxHeight: 100,
    maxWidth: 100,
    // borderRadius: 50,
    // // padding: 20,
    // borderWidth: 1,
    // borderColor: "#ff9d00",
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
    backgroundColor: "#ff9d00",
    paddingHorizontal: 5,
  },
  absId: {
    position: "absolute",
    height: 30,
    width: 30,
    backgroundColor: "#ff9d00",
    zIndex: 10000000000,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    left: 0,
    top: 0,
    flexDirection: "row",
    borderTopLeftRadius: 15,
  },
  whiteText: {
    color: "white",
    fontWeight: "700",
  },
  absPrice: {
    position: "absolute",
    height: 50,
    width: 130,
    // backgroundColor: "#ff9d00",
    zIndex: 10,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    paddingTop: 5,
    // right: 10,
    // top: 10,
    right: 0,
    top: 0,
    overflow: "hidden",
    borderRadius: 10,
    flexDirection: "row",
  },
  absLowerLeft: {
    position: "absolute",
    height: 65,
    width: 170,
    // backgroundColor: "#ff9d00",
    zIndex: 10,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    paddingTop: 5,
    // right: 10,
    // top: 10,
    left: 0,
    bottom: 0,
    overflow: "hidden",
    borderRadius: 10,
    flexDirection: "row",
  },
});

export default OrderCard;
