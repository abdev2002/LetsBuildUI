import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import BidCard from "./BidCard";
import bids from "./BidData";
import SearchBar from "../Common/SearchBar";
import { Ionicons } from "@expo/vector-icons"; // Import the search icon

const screenWidth = Dimensions.get("window").width;

class BidScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBarVisible: true,
      scrollY: new Animated.Value(0),
    };
  }

  toggleSearchBar = () => {
    this.setState((prevState) => ({
      searchBarVisible: !prevState.searchBarVisible,
    }));
  };

  navigateToBidDetail = (item) => {
    // Use navigation prop to navigate to bidDetailScreen
    this.props.navigation.navigate("BidDetails", { bid: item });
    console.log("Nav");
    console.log(item);
  };

  renderBidItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => this.navigateToBidDetail(item)}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: screenWidth,
          }}
        >
          <BidCard bid={item} />
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const { searchBarVisible } = this.state;

    const headerY = this.state.scrollY.interpolate({
      inputRange: [0, 50],
      outputRange: [0, -50],
      extrapolate: "clamp",
    });

    return (
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.header,
            {
              transform: [{ translateY: headerY }],
            },
          ]}
        >
          <TouchableOpacity onPress={this.toggleSearchBar}>
            {/* <Ionicons name="search" size={24} color="black" /> */}
          </TouchableOpacity>
          {/* {searchBarVisible && <SearchBar />} */}
          <SearchBar />
        </Animated.View>
        <FlatList
          data={bids}
          renderItem={this.renderBidItem}
          disable
          keyExtractor={(item,index) => index.toString()}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
            { useNativeDriver: false }
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    zIndex: 1,
    elevation: 2,
  },
});

export default BidScreen;
