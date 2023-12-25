import React, { Component, useRef } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
import { colors } from "../Common/Colors";
import TextInputWithoutIcon from "../Common/TextInputWithoutIcon";
import RBSheet from "react-native-raw-bottom-sheet";
import HeaderBack from "../Common/HeaderBack";

const width = Dimensions.get("window").width;

const HouseScreen = (props) => {
  const refRBSheet = useRef();

  const openBottomSheet = () => {
    refRBSheet.current.open();
  };

  return (
    <View style={styles.container}>
      <HeaderBack/>
      <Text style={styles.textInGray}>House Material Calculation</Text>
      <Text style={styles.label}>
        To calculate the cost of your project please select the type of project
        from the following options
      </Text>
      <View style={styles.box}>
        <View style={styles.infoContainer}>
          <Text style={styles.textInGray}>City *</Text>
          <TextInputWithoutIcon
            placeholder="Enter City"
            keyboardType="default"
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.textInGray}>Area Size *</Text>
          <TextInputWithoutIcon
            placeholder="Enter Area in Marla"
            keyboardType="default"
          />
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.calculateButton}>
            <Text
              style={styles.buttonText}
              onPress={() => this.props.navigation.navigate("Drawer")}
            >
              Calculate Material
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={openBottomSheet}>
            <Text style={{ color: "#ff9d00" }}> More options </Text>
          </TouchableOpacity>
        </View>
      </View>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={600}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
          border: {
            borderWidth: 1,
          },
          container: {
            borderWidth: 1,
            borderRadius: 35,
            borderColor: colors.mediumGray,
          },
        }}
      >
        <View style={{ width: "90%", paddingHorizontal: 10, margin: 20 }}>
          <View style={styles.infoContainer}>
            <Text style={styles.textInGray}>City *</Text>
            <TextInputWithoutIcon
              placeholder="Enter City"
              keyboardType="default"
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.textInGray}>Area Size *</Text>
            <TextInputWithoutIcon
              placeholder="Enter Area in Marla"
              keyboardType="default"
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.textInGray}>Area sqft *</Text>

            <TextInputWithoutIcon
              placeholder="Area square feet"
              keyboardType="default"
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.textInGray}>No of stories *</Text>

            <TextInputWithoutIcon
              placeholder="Number of stories"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.buttonView}>
            <TouchableOpacity style={styles.calculateButton}>
              <Text
                style={styles.buttonText}
                onPress={() => this.props.navigation.navigate("Drawer")}
              >
                Calculate Material
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={openBottomSheet}>
              <Text style={{ color: "#ff9d00" }}> More options </Text>
            </TouchableOpacity>
          </View>
        </View>
      </RBSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.white,
    paddingTop: 100,
  },
  label: {
    paddingHorizontal: 20,
    margin: 20,
    marginBottom: 40,
    color: colors.darkGray,
    textAlign: "center",
  },
  box: {
    height: 350,
    // aspectRatio: 1 / 1,
    width: "90%",
    backgroundColor: colors.lightGray,
    padding: 10,
    paddingTop: 25,
    borderRadius: 25,
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
  textInGray: {
    fontWeight: "bold",
    fontSize: 17,
    marginVertical: 5,
  },
  infoContainer: {
    flex: 1,
    maxHeight: 100,
    minHeight: 100,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
  calculateButton: {
    backgroundColor: "#ff9d00",
    height: 40,
    width: 200,
    borderRadius: 35,
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonView: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {},
});

export default HouseScreen;
