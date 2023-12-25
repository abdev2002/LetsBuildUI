import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import { Ionicons, Octicons, FontAwesome5 } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";


  const skills = [
    ["Construction Management"],
    ["Building Design"],
    ["Cost Estimation"],
    ["Project Planning"],
    ["Structural Analysis"],
    ["Wiring", ],
    ["Pipe Fitting"],
    ["Land Measurement"],
  ];

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFullDescription: false,
    };
  }

  toggleDescription = () => {
    this.setState((prevState) => ({
      showFullDescription: !prevState.showFullDescription,
    }));
  };

  render() {
    const { showFullDescription } = this.state;

    return (
      <ScrollView vertical style={styles.container}>
        <Image
          source={require("../../assets/abdullah.png")}
          style={styles.profilePic}
        />
        <Text style={styles.name}>Muhammad Abdullah</Text>
        <TouchableOpacity onPress={this.toggleDescription}>
          <Text style={[styles.headingText, { marginLeft: 10, fontSize: 17 }]}>
            Description
          </Text>
          <Text
            style={styles.description}
            numberOfLines={showFullDescription ? 0 : 3}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        </TouchableOpacity>
        <View style={styles.childContainer}>
          <View style={styles.iconContainer}>
            <Ionicons
              name="location-outline"
              size={30}
              color={"gray"}
              style={styles.icon}
            />
          </View>
          <View>
            <Text style={styles.headingText}>{"Gujranwala, Pakistan"}</Text>
            <Text style={styles.grayText}>From</Text>
          </View>
        </View>
        <View style={styles.childContainer}>
          <View style={styles.iconContainer}>
            <Ionicons
              name="calendar-outline"
              size={30}
              color={"gray"}
              style={styles.icon}
            />
          </View>
          <View>
            <Text style={styles.headingText}>2019</Text>
            <Text style={styles.grayText}>Member since</Text>
          </View>
        </View>
        <View style={styles.childContainer}>
          <View style={styles.iconContainer}>
            <Ionicons
              name="eye-outline"
              size={30}
              color={"gray"}
              style={styles.icon}
            />
          </View>
          <View>
            <Text style={styles.headingText}>Today</Text>
            <Text style={styles.grayText}>Last seen</Text>
          </View>
        </View>
        <Text style={[styles.headingText, { marginLeft: 10, fontSize: 17 , marginTop: 5}]}>
          Skills
        </Text>
        <View style={styles.skills}>
          {skills.map((skill, index) => (
            <View style={styles.skill} key={index}>
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: "100%",
    backgroundColor: "#fff",
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 20,
    alignSelf: 'center'
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    textAlign: 'center',
    marginBottom: 10
  },
  description: {
    fontSize: 17,
    fontWeight: "400",
    color: "gray",
    textAlign: "justify",
    margin: 10,
    marginTop: 0,
    
  },
  childContainer: {
    flexDirection: "row",
    width: "100%",
    padding: 10,
  },
  headingText: {
    fontSize: 15,
    fontWeight: "700",
  },
  iconContainer: {
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  grayText: {
    color: "gray",
  },
  skills: {
    flexDirection: "row",
    flexWrap: "wrap", 
    padding: 10,
    // maxHeight: 150, 
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
