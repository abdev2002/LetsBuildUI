import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import TextInputWithIcon from "../Common/TextInputWithIcon";
import Separator from "../Common/Separator";
import * as ImagePicker from "expo-image-picker";

const screenWidth = Dimensions.get("window").width;

export default class GetProfilePic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      cnic: "",
      gender: "",
      profilePic: null,
      dob: new Date(), // Initialize DOB with current date
      showDatePicker: false,
    };
  }

  handleNext = () => {
    console.log("Next button pressed");
    // Navigation logic to move to the next screen (GetCNIC)
    this.props.navigation.navigate("GetCNIC");
  };

  selectProfilePicture = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1], // 1:1 ratio
      quality: 1,
    });

    if (!result.cancelled) {
      this.setState({ profilePic: result.uri });
    }
  };

  handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.dob;
    this.setState({ dob: currentDate, showDatePicker: Platform.OS === "ios" });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>LET'S BUILD</Text>
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.small}>Profile Information</Text>
          <TouchableOpacity
            style={styles.profilePicContainer}
            onPress={this.selectProfilePicture}
          >
            {this.state.profilePic ? (
              <>
                <Image
                  source={{ uri: this.state.profilePic }}
                  style={styles.profilePic}
                />
                <Text style={styles.profileText}>Edit Profile Picture</Text>
              </>
            ) : (
              <>
                <Ionicons
                  name="person-circle-outline"
                  size={120}
                  color="#ccc"
                  style={styles.profileIcon}
                />
                <Text style={styles.profileText}>Select Profile Picture</Text>
              </>
            )}
          </TouchableOpacity>

          <TextInputWithIcon
            placeholder="Full Name"
            width={screenWidth - 40}
            iconColor={"#ccc"}
            icon={"person-circle"}
            Family={Ionicons}
            iconSize={35}
            onChangeText={(firstName) => this.setState({ firstName })}
            value={this.state.firstName}
          />
          <TextInputWithIcon
            placeholder="CNIC"
            width={screenWidth - 40}
            iconColor={"#ccc"}
            icon={"card-account-details-outline"}
            Family={MaterialCommunityIcons}
            onChangeText={(cnic) => this.setState({ cnic })}
            value={this.state.cnic}
          />
          <TouchableOpacity
            style={styles.datePickerButton}
            onPress={() => this.setState({ showDatePicker: true })}
          >
            <MaterialCommunityIcons
              name={"calendar-month-outline"}
              color={"#ccc"}
              size={30}
              style={{ marginRight: 10, marginLeft: 0 }}
            />
            <Text style={{ color: "#ccc" }}>
              {this.state.dob.toDateString()}
            </Text>
          </TouchableOpacity>
          {this.state.showDatePicker && (
            <DateTimePicker
              value={this.state.dob}
              mode="date"
              display="spinner"
              onChange={this.handleDateChange}
            />
          )}
          <TextInputWithIcon
            placeholder="Gender"
            width={screenWidth - 40}
            iconColor={"#ccc"}
            icon={"gender-male-female"}
            Family={MaterialCommunityIcons}
            onChangeText={(gender) => this.setState({ gender })}
            value={this.state.gender}
          />
          <TouchableOpacity style={styles.nextButton} onPress={this.handleNext}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottom}>
          <Separator text={"OR"} />
          <TouchableOpacity
            style={styles.roundButton}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Text style={styles.buttonTextWhite}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  formContainer: {
    alignItems: "center",
    // marginBottom: 30,
  },
  datePickerButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 35,
    backgroundColor: "#fff",
    height: 40,
    width: screenWidth - 40,
    marginVertical: 10,
    paddingHorizontal: 10,
    alignItems: "center",
    borderColor: "#ccc",
    // justifyContent: "center",
  },
  title: {
    color: "#ff9d00",
    fontSize: 36,
    marginTop: 100,
    marginBottom: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  small: {
    fontSize: 24,
    marginVertical: 20,
  },
  profilePicContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 150,
    marginBottom: 10,
  },
  profileIcon: {
    // marginBottom: 10,
  },
  profileText: {
    color: "#ccc",
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: "#ff9d00",
    height: 40,
    width: screenWidth - 40,
    borderRadius: 35,
    marginVertical: 10,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
  buttonTextWhite: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
  roundButton: {
    backgroundColor: "#ff9d00",
    borderRadius: 50,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 120,
  },
  bottom: {
    marginTop: 50,
    width: "100%",
    alignItems: "center",
    position: "relative",
    bottom: 10,
  },
});
