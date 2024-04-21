import React, { useState } from "react";
import { Button, Image, View, ActivityIndicator } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { firebase } from "./src/Common/config";

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [imageRef, setImageRef] = useState(null);
  const [retrievedImage, setRetrievedImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.assets[0].uri);
      uploadImage();
    }
  };

  const uploadImage = async () => {
    try {
      setUploading(true);
      const response = await fetch(image);
      const blob = await response.blob();
      const filename = image.substring(image.lastIndexOf("/") + 1);
      const ref = firebase.storage().ref().child(filename);
      await ref.put(blob);

      // Retrieve the download URL for the image
      const downloadURL = await ref.getDownloadURL();

      // Store the download URL in Firestore
      const docRef = await firebase.firestore().collection("images").add({
        downloadURL,
        filename,
      });

      setImageRef(docRef.id);

      setUploading(false);
      console.log("Image uploaded successfully!");
    } catch (error) {
      console.error("Error uploading image: ", error);
      setUploading(false);
    }
  };

  const retrieveImage = async () => {
    if (imageRef) {
      try {
        const docSnapshot = await firebase
          .firestore()
          .collection("images")
          .doc(imageRef)
          .get();
        const imageData = docSnapshot.data();
        if (imageData && imageData.downloadURL) {
          setRetrievedImage(imageData.downloadURL);
          console.log(imageData.downloadURL);
        }
      } catch (error) {
        console.error("Error retrieving image: ", error);
      }
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
      <Button
        title="Upload"
        onPress={uploadImage}
        disabled={!image || uploading}
      />
      <Button
        title="Retrieve Image"
        onPress={retrieveImage}
        disabled={!imageRef}
      />
      {uploading && <ActivityIndicator size="large" color="#0000ff" />}

      {retrievedImage && (
        <Image
          source={{ uri: retrievedImage }}
          style={{ width: 200, height: 200 }}
        />
      )}
    </View>
  );
}
