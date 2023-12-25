import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import notifications from "./NotificationData";
import NotificationCard from "./NotificationCard";
import SearchBar from "../Common/SearchBar";

export default function NotificationScreen() {
  return (
    <View style={styles.container}>
      <SearchBar placeHolder={"Search Notifications"} />

      <View style={styles.listContainer}>
        <FlatList
          data={notifications}
          renderItem={({ item }) => <NotificationCard notification={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 100,
  },
  searchContainer: {},
  listContainer: {
    flex: 1,
  },
});
