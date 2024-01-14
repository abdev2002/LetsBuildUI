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

const OrderDetailScreen = ({ route }) => {
  const { order } = route.params;
  const imageMap = {
    "../../assets/Tools/Measuring-Tape.bmp": require("../../assets/Tools/Measuring-Tape.bmp"),
    "../../assets/Tools/Plumb-Bob.bmp": require("../../assets/Tools/Plumb-Bob.bmp"),
    "../../assets/Tools/Concrete-Mixer.bmp": require("../../assets/Tools/Concrete-Mixer.bmp"),
    "../../assets/Tools/Framing-Square.bmp": require("../../assets/Tools/Framing-Square.bmp"),
    "../../assets/Tools/Tile-Setters.bmp": require("../../assets/Tools/Tile-Setters.bmp"),
  };
  return (
    <ScrollView vertical style={styles.container}>
      <Image source={imageMap[order.imageAddress]} style={styles.image} />
      <Text style={styles.title}>{order.title}</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Order ID:</Text>
        <Text style={styles.text}>{order.id}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Quantity:</Text>
        <Text style={styles.text}>{order.quantity}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Customer:</Text>
        <Text style={styles.text}>{order.orderingPerson}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Address:</Text>
        <Text style={styles.text}>{order.address}</Text>
      </View>
      <View style={styles.statusContainer}>
        <Text
          style={{
            padding: 5,
            fontWeight: "bold",
            width: 80,
            marginRight: 5,
          }}
        >
          Status:
        </Text>
        <View
          style={[
            styles.status,
            { backgroundColor: getStatusColor(order.status) },
          ]}
        >
          <Text style={styles.statusText}>{order.status}</Text>
        </View>
        {(order.status === "Pending" && (
          <TouchableOpacity
            onPress={() => changeStatus("Shipped")}
            style={{
              backgroundColor: "#ff9d00",
              padding: 5,
              borderRadius: 5,
              marginLeft: 10,
              position: "absolute",
              right: 0,
            }}
          >
            <Text style={styles.statusText}>Ship Now</Text>
          </TouchableOpacity>
        )) ||
          (order.status === "Shipped" && (
            <TouchableOpacity
              onPress={() => changeStatus("Delivered")}
              style={{
                backgroundColor: "#ff9d00",
                padding: 5,
                borderRadius: 5,
                marginLeft: 10,
                position: "absolute",
                right: 0,
              }}
            >
              <Text style={styles.statusText}>Deliver Now</Text>
            </TouchableOpacity>
          ))}
        <View
          style={[
            styles.absButtons,
            {
                bottom: order.status === "Delivered" ? 0 : 50, // Adjust bottom based on status
            },
          ]}
        >
          <TouchableOpacity onPress={saveAsJPEG} style={styles.btns}>
            <Ionicons name={"chatbubble-ellipses"} size={30} color={"#fff"} />
          </TouchableOpacity>
          <TouchableOpacity onPress={saveAsJPEG} style={styles.btns}>
            <Ionicons name={"save"} size={30} color={"#fff"} />
          </TouchableOpacity>
          <TouchableOpacity onPress={shareScreenshot} style={styles.btns}>
            <Ionicons name={"share"} size={30} color={"#fff"} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.amount}>{order.amount} PKR</Text>
      </View>
    </ScrollView>
  );
};

const getStatusColor = (status) => {
  switch (status) {
    case "Pending":
      return "#FF0000";
    case "Shipped":
      return "#0000FF";
    case "Delivered":
      return "#008000";
    default:
      return "#EEEEEE";
  }
};

const shareScreenshot = async () => {
  try {
    const uri = await captureScreenshot();
    Share.share({ title: "Order Details", url: uri });
  } catch (error) {
    console.error("Error while sharing:", error);
  }
};

const saveAsJPEG = async () => {
  try {
    const uri = await captureScreenshot();
    const asset = await MediaLibrary.createAssetAsync(uri);
    await MediaLibrary.saveToLibraryAsync(asset);
    Alert.alert("Image saved to gallery");
  } catch (error) {
    console.error("Error while saving:", error);
  }
};

const captureScreenshot = async () => {
  try {
    const result = await captureRef(orderRef, {
      format: "jpg",
      quality: 1,
      result: "tmpfile",
    });
    return result;
  } catch (error) {
    console.error("Error capturing screenshot:", error);
    throw error;
  }
};

const changeStatus = (newStatus) => {
  Alert.alert(`Order status changed to ${newStatus}`);
};

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
    marginTop: 10
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

export default OrderDetailScreen;
