import React from "react";
import { View, StyleSheet, FlatList, ScrollView } from "react-native";
import messages from "./MessageData";
import MessageCard from "./MessageCard";
import SearchBar from "../Common/SearchBar";

export default function MessageScreen() {
  return (
    <View style={styles.container}>

      <SearchBar placeHolder={"Search Conversations"} />
      <View vertical style={styles.listContainer}>
        <FlatList
          data={messages}
          renderItem={({ item }) => <MessageCard message={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: 100
  },
  searchContainer: {},
  listContainer: {
    flex: 1,
  },
});
