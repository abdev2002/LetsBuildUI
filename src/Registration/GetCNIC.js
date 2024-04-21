import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";

const screenWidth = Dimensions.get("window").width;

const GetCNIC = ({ navigation }) => {
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const selectFrontImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setFrontImage(result.uri);
    }
  };

  const selectBackImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setBackImage(result.uri);
    }
  };

  const uploadImages = async () => {
    try {
      setUploading(true);
      // You can implement your Firebase storage upload logic here
      // For demonstration purposes, we're logging the image URIs
      console.log("Front Image URI:", frontImage);
      console.log("Back Image URI:", backImage);

      // Reset state after uploading
      setFrontImage(null);
      setBackImage(null);
      setUploading(false);

      // Navigate to another screen or perform other actions after upload
      // navigation.navigate("NextScreen");
    } catch (error) {
      console.error("Error uploading images:", error);
      setUploading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.small}>Capture ID Card Images</Text>

      <TouchableOpacity style={styles.imagePicker} onPress={selectFrontImage}>
        {frontImage ? (
          <Image source={{ uri: frontImage }} style={styles.image} />
        ) : (
          <Ionicons name="camera" size={46} color={"#ff9d00"} />
        )}
        <Image
          source={require("../../assets/abdullah.png")}
          style={[styles.image, { height: 50, width: 50 , borderWidth: 1}]}
        />
        <Text style={styles.imageText}>Select Front Image</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.imagePicker} onPress={selectBackImage}>
        {backImage ? (
          <Image source={{ uri: backImage }} style={styles.image} />
        ) : (
          <Ionicons name="camera" size={46} color={"#ff9d00"} />
        )}
        <Text style={styles.imageText}>Select Back Image</Text>
      </TouchableOpacity>

      {uploading ? (
        <ActivityIndicator size="large" color="#ff9d00" />
      ) : (
        <TouchableOpacity style={styles.uploadButton} onPress={uploadImages}>
          <Text style={styles.uploadButtonText}>Next</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
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
  imagePicker: {
    width: "90%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: 20,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  imageText: {
    marginBottom: 10,
    fontSize: 16,
    color: "#333",
  },
  uploadButton: {
    marginTop: 20,
    backgroundColor: "#ff9d00",
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 30,
  },
  uploadButtonText: {
    fontSize: 18,
    color: "#fff",
  },
});

export default GetCNIC;
