import React, { Component } from "react";
import {
 View,
 Text,
 Image,
 StyleSheet,
 Dimensions,
 TouchableOpacity,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

class MessageCard extends Component {
 renderImage = () => {
    console.log("image Pressed.");
    return (
      <View style={{ position: "absolute", top: screenHeight - ((screenWidth -60)/2), zIndex: 1000000000, left: 30 }}>
        <Image
          source={require("../../assets/abdullah.png")}
          style={{height: screenWidth - 50, width: screenWidth -50, alignSelf:'center'}}
        />
      </View>
    );
 }
 render() {
    const { message } = this.props;

    return (
      <View style={styles.item} key={message.id}>
        <TouchableOpacity style={styles.imageView} onPress={this.renderImage}>
          <Image
            source={require("../../assets/abdullah.png")}
            style={styles.image}
          />
        </TouchableOpacity>
        <View style={styles.infoChild}>
          <Text style={styles.headingText}>{message.name}</Text>
          <Text style={styles.textInGray}>{message.latestMessage}</Text>
        </View>
          <View style={[styles.messageInfo]}>
            <Text style={styles.time}>{"11:38 PM"}</Text>
        {!message.isSeen && message.unseenMessages > 0 && (
            <View style={[styles.unseenCircle]}>
              <Text>{message.unseenMessages}</Text>
            </View>
        )}
          </View>
      </View>
    );
 }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: "white",
    borderBottomColor: "#eeeeeeee",
    borderBottomWidth: 1,
    height: 80,
    flexDirection: "row",
    alignItems: "center",
  },
  imageView: {
    height: 80,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    borderRadius: 50,
    height: 50,
    width: 50,
    backgroundColor: "#ffc",
  },
  textInGray: {
    color: "gray",
    flex: 1,
    paddingHorizontal: 10,
  },
  infoChild: {
    flex: 3,
  },
  headingText: {
    fontSize: 17,
    fontWeight: "700",
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  messageInfo: {
    height: 80,
    width: 80,
    paddingTop: 5,
  },
  unseenCircle: {
    backgroundColor: "#ff9d00",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    height: 20,
    minWidth: 20,
    position: "absolute",
    alignSelf: "center",
    justifySelf: "center",
    top: 30,
  },
  time: {
    color: "gray",
    alignSelf: "center",
  },
});

export default MessageCard;
