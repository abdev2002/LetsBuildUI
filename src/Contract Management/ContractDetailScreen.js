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

const ContractDetailScreen = ({ route }) => {
  const { contract } = route.params;
  return (
    <ScrollView vertical style={styles.container}>
      <Text style={styles.title}>{contract.title}</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>contract ID:</Text>
        <Text style={styles.text}>{contract.id}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Quantity:</Text>
        <Text style={styles.text}>{contract.quantity}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Customer:</Text>
        <Text style={styles.text}>{contract.contractingPerson}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Address:</Text>
        <Text style={styles.text}>{contract.address}</Text>
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
            { backgroundColor: getStatusColor(contract.status) },
          ]}
        >
          <Text style={styles.statusText}>{contract.status}</Text>
        </View>
        {(contract.status === "Pending" && (
          <TouchableOpacity
            onPress={() => changeStatus("Shipped")}
            style={{
              backgroundColor: "#ff9d00",
              padding: 5,
              bcontractRadius: 5,
              marginLeft: 10,
              position: "absolute",
              right: 0,
            }}
          >
            <Text style={styles.statusText}>Ship Now</Text>
          </TouchableOpacity>
        )) ||
          (contract.status === "Shipped" && (
            <TouchableOpacity
              onPress={() => changeStatus("Delivered")}
              style={{
                backgroundColor: "#ff9d00",
                padding: 5,
                bcontractRadius: 5,
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
              bottom: contract.status === "Delivered" ? 0 : 50, // Adjust bottom based on status
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
        <Text style={styles.amount}>{contract.amount} PKR</Text>
      </View>
    </ScrollView>
  );
};

const changeStatus = (newStatus) => {
  // this.contract.status = newStatus;
  // Logic to change the status
  // For example, update the status in the backend or state
  // This function should handle the status change process

  // For demonstration, let's assume an alert for status change
  Alert.alert(`contract status changed to ${newStatus}`);
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
    bcontractColor: "#ccc",
    bcontractTopWidth: 1,
  },
  text: {
    bcontractColor: "#ccc",
    bcontractLeftWidth: 1,
    flex: 1,
    paddingHorizontal: 5,
    bcontractColor: "#ccc",
    bcontractTopWidth: 1,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    // marginBottom: 10,
    marginTop: 10,
  },
  status: {
    padding: 5,
    bcontractRadius: 5,
  },
  statusText: {
    color: "#fff",
    fontWeight: "bold",
  },
  amountContainer: {
    marginTop: 20,
    bcontractTopWidth: 1,
    paddingTop: 10,
    bcontractTopColor: "#ddd",
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
    bcontractWidth: 1,
    bcontractColor: "#ccc",
    backgroundColor: "#ccc",
  },
  btns: {
    bcontractRadius: 50,
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

export default ContractDetailScreen;
