import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

const Width = Dimensions.get("window").width;
const screenWidth = Width /2;
class ProjectCard extends Component {
   
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
    const { project } = this.props;
    const { heartColor } = this.state;

    return (
      <View style={styles.item}>
        <View style={styles.itemChild}>
          <Image
            source={require("../../assets/icon.png")}
            style={ styles.image }
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
        <View style={styles.itemChild}>
          <Text style={styles.titleText}>{project.title}</Text>
          <View style={styles.infoContainer}>
            <View style={styles.infoChild}>
              <Text style={styles.headingText}>{project.budget}</Text>
              <Text style={styles.textInGray}>{`Budget`}</Text>
            </View>
            <View style={styles.infoChild}>
              <Text style={styles.headingText}>{project.duration}</Text>
              <Text style={styles.textInGray}>{`Timeline`}</Text>
            </View>
          </View>
          <Text
            style={[styles.textInGray, { marginVertical: 20 }]}
          >{`Description: ${project.description}`}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginHorizontal: 10,
    borderRadius: 5,
    marginVertical: 10,
    padding: 10,
    shadowColor: "#351c75",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    elevation: 5,
    width: Width-20,
  },
  itemChild: {
    maxHeight: screenWidth,
  },
  image: {
    resizeMode: "cover",
    maxWidth: "100%",
    maxHeight: screenWidth,
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

export default ProjectCard;
